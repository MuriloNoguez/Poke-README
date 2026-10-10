const { getUser } = require('../lib/github');
const { getEvolution, isShiny, getBase64Sprite } = require('../lib/pokemon');
const { generateSVG } = require('../lib/svgTemplate');
const fs = require('fs');
const path = require('path');

// Themed variants of the classic GIF (same pixel art and clouds, recoloured); overlay darkens behind the labels
const BACKGROUNDS = {
  classic: { file: 'background.gif', overlay: 0.8 },
  none: { file: null, overlay: 0 },
  ...Object.fromEntries(Object.entries({
    sunset: 0.4, night: 0.15, snow: 0.45, desert: 0.45, beach: 0.45,
    autumn: 0.4, sakura: 0.4, rain: 0.3, volcano: 0.2, space: 0.15,
  }).map(([key, overlay]) => [key, { file: `backgrounds/${key}.gif`, overlay }])),
};

module.exports = async (req, res) => {
  try {
    const { user, pokes, item, names, stats, bg } = req.query;

    if (!user || (!pokes && !stats)) {
      return res.status(400).json({ error: "Missing 'user' or 'pokes' query param. Example: ?user=timao&pokes=1,4,7" });
    }

    // Builder page reads the live commit count to simulate evolutions client-side
    if (stats) {
      const result = await getUser(user);
      if (result.estimated) return res.status(503).json({ error: 'Could not count contributions right now' });
      res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
      return res.status(200).json(result);
    }

    // 0. Calculations for extra features
    const nicknameList = (names || "").split(',').map(n => n.trim());

    // Load Background (unknown keys fall back to the classic GIF)
    const background = BACKGROUNDS[bg] || BACKGROUNDS.classic;
    let backgroundBase64 = null;
    if (background.file) {
      const bgPath = path.join(__dirname, '..', 'media', background.file);
      backgroundBase64 = `data:image/gif;base64,${fs.readFileSync(bgPath).toString('base64')}`;
    }

    const pokeIds = pokes.split(',').slice(0, 6); // Up to 6 base IDs for a team
    
    // 1. Fetch GitHub User ID and Commits
    const { userId, commits } = await getUser(user);
    const teamLevel = Math.min(100, Math.max(1, Math.floor(commits / 10)));

    // 2. Iterate Pokemon slots
    const team = pokeIds.map((id, index) => {
      // 2a. Check if it evolves at this commit count
      let evolvedPoke = getEvolution(id, commits, item);
      if (!evolvedPoke) return null;

      // 2b. Legendary requirement check (1000 commits)
      if (evolvedPoke.isLegendary && commits < 1000) {
        evolvedPoke = getEvolution("132", commits, item); // Transform into Ditto
      }
      
      // 2b. Check if this Pokemon slot is Shiny for this specific immutable User ID
      const shinyStatus = isShiny(userId, id, index + 1, commits);
      
      // 2c. Get Base64 image bytes (from `default_front.gif` or `shiny_front.gif`)
      const base64 = getBase64Sprite(evolvedPoke, shinyStatus);
      

      return {
        ...evolvedPoke,
        isShiny: shinyStatus,
        base64,
        level: teamLevel,
        nickname: nicknameList[index] || null
      };
    });

    // 3. Mount SVG view
    const svg = generateSVG(team, backgroundBase64, background.overlay);

    // 4. Return as browser image + CDN Cache instructions headers
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Avoid rate limit hitting the Github API constantly
    res.status(200).send(svg);

  } catch (err) {
    console.error("Endpoint Error:", err);
    res.status(500).json({ error: err.message });
  }
};
