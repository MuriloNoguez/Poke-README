const { getUser } = require('../lib/github');
const { getEvolution, isShiny, getBase64Sprite } = require('../lib/pokemon');
const { generateSVG } = require('../lib/svgTemplate');

module.exports = async (req, res) => {
  try {
    const { user, pokes } = req.query;

    if (!user || !pokes) {
      return res.status(400).json({ error: "Missing 'user' or 'pokes' query param. Example: ?user=timao&pokes=1,4,7" });
    }

    const pokeIds = pokes.split(',').slice(0, 6); // Up to 6 base IDs for a team
    
    // 1. Fetch GitHub User ID and Commits
    const { userId, commits } = await getUser(user);

    // 2. Iterate Pokemon slots
    const team = pokeIds.map((id, index) => {
      // 2a. Check if it evolves at this commit count
      const evolvedPoke = getEvolution(id, commits);
      if (!evolvedPoke) return null;
      
      // 2b. Check if this Pokemon slot is Shiny for this specific immutable User ID
      const shinyStatus = isShiny(userId, id, index + 1, commits);
      
      // 2c. Get Base64 image bytes (from `default_front.gif` or `shiny_front.gif`)
      const base64 = getBase64Sprite(evolvedPoke, shinyStatus);
      
      return {
        ...evolvedPoke,
        isShiny: shinyStatus,
        base64
      };
    });

    // 3. Mount SVG view
    const svg = generateSVG(team);

    // 4. Return as browser image + CDN Cache instructions headers
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Avoid rate limit hitting the Github API constantly
    res.status(200).send(svg);

  } catch (err) {
    console.error("Endpoint Error:", err);
    res.status(500).json({ error: err.message });
  }
};
