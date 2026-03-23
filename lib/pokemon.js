const pokedex = require('./pokedex.json');
const fs = require('fs');
const path = require('path');

function getEvolution(baseId, totalCommits) {
  let currentId = baseId.toString();
  let currentPoke = pokedex[currentId];
  
  if (!currentPoke) return null;

  while (currentPoke.evolution && totalCommits >= currentPoke.commitsRequired) {
    currentId = currentPoke.evolution;
    currentPoke = pokedex[currentId];
  }

  return { id: currentId, ...currentPoke };
}

function isShiny(userId, slotIndex) {
  // Hash combining the user ID and the slot in the team (1-6)
  const seed = `${userId}-${slotIndex}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = Math.imul(31, hash) + seed.charCodeAt(i) | 0;
  }
  
  // Chance 1 in 8192 just like the retro games
  return Math.abs(hash) % 8192 === 0;
}

function getBase64Sprite(pokemon, isShinyValue) {
  try {
    const prefix = isShinyValue ? 'shiny' : 'default';
    
    const basePath = path.join(__dirname, '..', 'media', pokemon.gen, pokemon.name);
    const runPath = path.join(basePath, `${prefix}_run.gif`);
    const frontPath = path.join(basePath, `${prefix}_front.gif`);
    
    let runBase64 = null;
    let frontBase64 = null;

    if (fs.existsSync(runPath)) {
       runBase64 = `data:image/gif;base64,${fs.readFileSync(runPath).toString('base64')}`;
    }
    if (fs.existsSync(frontPath)) {
       frontBase64 = `data:image/gif;base64,${fs.readFileSync(frontPath).toString('base64')}`;
    }

    return { run: runBase64, front: frontBase64 };
  } catch (err) {
    console.error("Error reading sprite for: ", pokemon.name, err);
    return { run: null, front: null };
  }
}

module.exports = { getEvolution, isShiny, getBase64Sprite };
