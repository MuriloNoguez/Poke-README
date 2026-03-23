async function getUser(username) {
  const token = process.env.GITHUB_TOKEN;
  const headers = {
    'User-Agent': 'Poke-README-Widget',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
  
  let userId = 583231; // Mock octocat id as fallback
  let commits = 550;   // High commit count to trigger evolutions as fallback

  try {
    const restRes = await fetch(`https://api.github.com/users/${username}`, { headers });
    if (!restRes.ok) throw new Error(`User not found: ${restRes.status}`);
    const userData = await restRes.json();
    userId = userData.id;
    commits = (userData.public_repos || 1) * 15; // mock based on public repos
  } catch (err) {
    console.warn("GitHub API fetch failed or rate limited. Using mock data for local test.");
  }

  // Get Commits using GraphQL if token is available
  if (token) {
    const query = `
      query($login: String!) {
        user(login: $login) {
          contributionsCollection {
            totalCommitContributions
          }
        }
      }
    `;
    try {
      const gqlRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: { ...headers, "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { login: username } })
      });
      if (gqlRes.ok) {
        const gqlData = await gqlRes.json();
        commits = gqlData.data?.user?.contributionsCollection?.totalCommitContributions || commits;
      }
    } catch(e) {
      console.warn("GraphQL API fetch failed. Using fallback commits.", e.message);
    }
  }

  return { userId, commits };
}

module.exports = { getUser };
