async function graphql(query, variables, headers) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables })
  });
  if (!res.ok) throw new Error(`GraphQL ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data.user;
}

// contributionsCollection only covers 1 year per call, so sum every contribution year.
// restrictedContributionsCount = private contributions visible when the token isn't the user's own.
async function getAllTimeCommits(username, headers) {
  const { contributionsCollection } = await graphql(
    `query($login: String!) { user(login: $login) { contributionsCollection { contributionYears } } }`,
    { login: username }, headers
  );
  const now = new Date().toISOString();
  const fields = contributionsCollection.contributionYears.map(y => {
    const to = `${y}-12-31T23:59:59Z` < now ? `${y}-12-31T23:59:59Z` : now;
    return `y${y}: contributionsCollection(from: "${y}-01-01T00:00:00Z", to: "${to}") { totalCommitContributions restrictedContributionsCount }`;
  });
  const years = await graphql(
    `query($login: String!) { user(login: $login) { ${fields.join(' ')} } }`,
    { login: username }, headers
  );
  return Object.values(years).reduce((sum, y) => sum + y.totalCommitContributions + y.restrictedContributionsCount, 0);
}

// No token: scrape the public contribution calendar, one page per year since account creation.
// Counts every contribution type (commits, PRs, issues, reviews), private ones included when the
// user enabled "Private contributions" on their profile.
async function getScrapedContributions(username, createdAt, headers) {
  const yearTotal = async y => {
    const res = await fetch(`https://github.com/users/${username}/contributions?from=${y}-01-01&to=${y}-12-31`, { headers });
    if (!res.ok) throw new Error(`Contributions page ${res.status}`);
    const html = await res.text();
    return [...html.matchAll(/(\d+) contributions? on/g)].reduce((s, m) => s + Number(m[1]), 0);
  };
  const now = new Date().getFullYear();
  if (createdAt) {
    const years = [];
    for (let y = new Date(createdAt).getFullYear(); y <= now; y++) years.push(y);
    return (await Promise.all(years.map(yearTotal))).reduce((a, b) => a + b, 0);
  }
  // REST was rate limited (60/h without a token), so the join year is unknown: walk back from this
  // year and stop after two empty years in a row. ponytail: misses activity before a 2+ year gap.
  let total = 0, empty = 0;
  for (let y = now; y >= 2008 && empty < 2; y--) {
    const n = await yearTotal(y);
    total += n;
    empty = n ? 0 : empty + 1;
  }
  return total;
}

// Warm serverless instances reuse results instead of hitting GitHub again (429s without a token)
const cache = new Map();
const CACHE_MS = 6 * 60 * 60 * 1000;

async function getUser(username) {
  const key = username.toLowerCase();
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.value;

  const token = process.env.GITHUB_TOKEN;
  const headers = {
    'User-Agent': 'Poke-README-Widget',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
  
  let userId = 583231; // Mock octocat id as fallback
  let commits = 550;   // High commit count to trigger evolutions as fallback
  let createdAt = null;
  let estimated = true; // true while commits is a fallback, not a real count

  try {
    const restRes = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!restRes.ok) throw new Error(`User not found: ${restRes.status}`);
    const userData = await restRes.json();
    userId = userData.id;
    createdAt = userData.created_at;
    commits = (userData.public_repos || 1) * 15; // mock based on public repos
  } catch (err) {
    console.warn("GitHub API fetch failed or rate limited. Using mock data for local test.");
  }

  try {
    commits = token
      ? await getAllTimeCommits(username, headers) // GraphQL requires a token
      : await getScrapedContributions(username, createdAt, headers);
    estimated = false;
  } catch(e) {
    console.warn("Commit count fetch failed. Using fallback commits.", e.message);
  }

  const value = { userId, commits, estimated };
  if (!estimated) cache.set(key, { at: Date.now(), value });
  return value;
}

module.exports = { getUser };
