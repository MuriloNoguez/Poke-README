const { getUser } = require('../lib/github');
const { getEvolution, isShiny, getBase64Sprite } = require('../lib/pokemon');
const { generateSVG } = require('../lib/svgTemplate');
const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  try {
    const { user, pokes, item } = req.query;

    if (!user || !pokes) {
      return res.status(400).json({ error: "Missing 'user' or 'pokes' query param. Example: ?user=timao&pokes=1,4,7" });
    }

    // Load Background
    let backgroundBase64 = null;
    try {
      const bgPath = path.join(__dirname, '..', 'media', 'background.gif');
      if (fs.existsSync(bgPath)) {
        backgroundBase64 = `data:image/gif;base64,${fs.readFileSync(bgPath).toString('base64')}`;
      }
    } catch (bgErr) {
      console.error("Error loading background:", bgErr);
    }

    const pokeIds = pokes.split(',').slice(0, 6); // Up to 6 base IDs for a team
    
    // 1. Fetch GitHub User ID and Commits
    const { userId, commits } = await getUser(user);

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
      
      // 2d. Tiered Sizing (Tiers: 150, 80, 70, 60)
      let size = 60; // Initial forms (Bulbasaur, etc)

      // Legendary Category Sub-division
      const legendsSmall = ["151", "251", "385", "489", "490", "491", "492"]; // Mew, Celebi, Jirachi, Shaymin
      const legendsMid = ["377", "378", "379", "380", "381", "386", "480", "481", "482"]; // Regi-trio, Lati@s, Deoxys, Pixies
      const legendsFinal = ["144", "145", "146", "150", "243", "244", "245", "491"]; // Birds, Mewtwo, Beasts, Darkrai
      const titans = ["249", "250", "382", "383", "384", "483", "484", "486", "487", "494"]; // Lugia, Ho-oh, Groudon, Giratina, Arceus

      if (evolvedPoke.isLegendary) {
        if (titans.includes(evolvedPoke.id)) size = 150;
        else if (legendsFinal.includes(evolvedPoke.id)) size = 80;
        else if (legendsMid.includes(evolvedPoke.id)) size = 70;
        else if (legendsSmall.includes(evolvedPoke.id)) size = 60;
        else size = 80; // Default for other legendaries (Final size)
      } else if (!evolvedPoke.evolution) {
        size = 80; // Final forms (Charizard, Aggron)
      } else if (evolvedPoke.commitsRequired > 200) {
        size = 70; // Middle forms (Charmeleon)
      }
    

      return {
        ...evolvedPoke,
        isShiny: shinyStatus,
        base64,
        size
      };
    });

    // 3. Mount SVG view
    const svg = generateSVG(team, backgroundBase64);

    // 4. Return as browser image + CDN Cache instructions headers
    res.setHeader('Content-Type', 'image/svg+xml');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate'); // Avoid rate limit hitting the Github API constantly
    res.status(200).send(svg);

  } catch (err) {
    console.error("Endpoint Error:", err);
    res.status(500).json({ error: err.message });
  }
};
