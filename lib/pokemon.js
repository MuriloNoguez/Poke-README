const pokedex = require('./pokedex.json');
const fs = require('fs');
const path = require('path');

function getEvolution(baseId, totalCommits, item) {
  let currentId = baseId.toString();
  let currentPoke = pokedex[currentId];
  
  if (!currentPoke) return null;

  // Hardcore Mode: Find the "Root" of this evolution chain
  let rootId = currentId;
  let foundPreEvolution = true;
  while (foundPreEvolution) {
    foundPreEvolution = false;
    for (const [id, poke] of Object.entries(pokedex)) {
      if (poke.evolution === rootId) {
        rootId = id;
        foundPreEvolution = true;
        break; // Found the direct pre-evolution, continue search from there
      }
    }
  }
  
  // Reset search to the base form
  currentId = rootId;
  currentPoke = pokedex[currentId];

  // Eevee branching evolution mechanism (applies to the base form)
  if (currentId === "133" && item && totalCommits >= (currentPoke.commitsRequired || 0)) {
    const branches = {
      'water': '134', 'thunder': '135', 'fire': '136',
      'sun': '196', 'moon': '197',
      'leaf': '470', 'ice': '471'
    };
    const targetId = branches[item.toLowerCase()];
    if (targetId && pokedex[targetId]) {
      currentId = targetId;
      currentPoke = pokedex[currentId];
    }
  }

  // Calculate the highest allowed evolution based on commits
  while (currentPoke.evolution && totalCommits >= (currentPoke.commitsRequired || 0)) {
    // If we've reached the stage they explicitly requested, stop here.
    // This allows users to "lock" a lower evolution by selecting it,
    // but still "downscales" if they select a high evolution without enough commits.
    if (currentId === baseId.toString()) {
      break;
    }
    
    currentId = currentPoke.evolution;
    currentPoke = pokedex[currentId];
  }

  return { id: currentId, ...currentPoke };
}

function isShiny(userId, pokemonId, slotIndex, totalCommits) {
  // Unique seed for the user ID, species ID, and team slot index
  const seedString = `${userId}-${pokemonId}-${slotIndex}`;
  let baseHash = 0;
  for (let i = 0; i < seedString.length; i++) {
    baseHash = Math.imul(31, baseHash) + seedString.charCodeAt(i) | 0;
  }
  
  // Every 10 commits gives the user a new "encounter" with that Pokemon (new shiny roll)
  const totalAttempts = Math.floor((totalCommits || 0) / 10);
  
  for (let attempt = 0; attempt <= totalAttempts; attempt++) {
    // Multiply by 12345 (odd) against 8192 (power of 2) to create uniform pseudo-random distributions
    const attemptHash = baseHash + Math.imul(attempt, 12345) | 0;
    
    // Classic 1 in 8192 shiny chance
    if (Math.abs(attemptHash) % 8192 === 0) {
      return true; // Found a Shiny! It won't be lost across future commits.
    }
  }
  
  return false;
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
