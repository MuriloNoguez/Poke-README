function generateSVG(pokemonTeam) {
  const width = 800;
  const height = 200;
  
  let slots = '';
  let dynamicStyles = '';

  pokemonTeam.forEach((poke, index) => {
    if (!poke || !poke.base64 || !poke.base64.front) return;

    const spriteSize = poke.size || 96;
    // Initial start position
    const startX = 40 + (index * 120);
    const floatDelay = index * 0.2;

    // 1. Generate entirely random unique path for THIS specific pokemon
    let seed = index * 420 + 1337;
    const rnd = (max) => {
      seed = (seed * 9301 + 49297) % 233280;
      return (seed / 233280) * max;
    };

    const timeline = [];
    let currentX = startX;
    let totalDuration = 0;
    
    const numWalks = 3 + Math.floor(rnd(3)); 
    
    for (let i = 0; i < numWalks; i++) {
      // Idle
      const idleTime = 2 + rnd(4); 
      timeline.push({ type: 'idle', x: currentX, duration: idleTime });
      totalDuration += idleTime;
      
      // Walk
      const walkTime = 3 + rnd(5); 
      // Target bound to canvas, taking into account current pokemon size
      let targetX = currentX + (rnd(500) - 250); 
      targetX = Math.max(10, Math.min(width - spriteSize - 10, targetX));
      
      timeline.push({ type: 'walk', prevX: currentX, x: targetX, duration: walkTime });
      currentX = targetX;
      totalDuration += walkTime;
    }
    
    const returnTime = 3 + rnd(5);
    timeline.push({ type: 'idle', x: currentX, duration: 2 });
    totalDuration += 2;
    timeline.push({ type: 'walk', prevX: currentX, x: startX, duration: returnTime });
    totalDuration += returnTime;

    // 2. Map timeline segments
    let roamKeyframes = '';
    let flipRunKeyframes = '';
    let flipFrontKeyframes = '';

    let currentPct = 0;
    // Align bottom vertically (more breathing room for giants)
    const spriteY = height - spriteSize - 15; 
    
    for (let i = 0; i < timeline.length; i++) {
      const seg = timeline[i];
      const isWalk = seg.type === 'walk';
      const flipValue = isWalk && (seg.x > seg.prevX) ? 1 : -1; 

      roamKeyframes += `${currentPct.toFixed(2)}% { transform: translate(${seg.prevX || seg.x}px, ${spriteY}px); }\n`;
      const nextPct = currentPct + (seg.duration / totalDuration) * 100;
      
      if (isWalk) {
        flipRunKeyframes += `${currentPct.toFixed(2)}% { opacity: 1; transform: scaleX(${flipValue}); }\n`;
        flipFrontKeyframes += `${currentPct.toFixed(2)}% { opacity: 0; }\n`;
      } else {
        flipRunKeyframes += `${currentPct.toFixed(2)}% { opacity: 0; transform: scaleX(1); }\n`;
        flipFrontKeyframes += `${currentPct.toFixed(2)}% { opacity: 1; }\n`;
      }
      
      currentPct = nextPct;
    }
    roamKeyframes += `100% { transform: translate(${timeline[timeline.length-1].x}px, ${spriteY}px); }\n`;

    dynamicStyles += `
      @keyframes roam-${index} { ${roamKeyframes} }
      @keyframes flip-run-${index} { ${flipRunKeyframes} }
      @keyframes flip-front-${index} { ${flipFrontKeyframes} }
    `;

    const durationStr = totalDuration.toFixed(2) + 's';

    slots += `
      <g style="animation: roam-${index} ${durationStr} infinite linear;">
        <g style="animation: bob 1.5s ease-in-out infinite alternate ${floatDelay}s;">
          ${poke.base64.run ? `<image href="${poke.base64.run}" width="${spriteSize}" height="${spriteSize}" style="image-rendering: pixelated; transform-box: fill-box; transform-origin: center; animation: flip-run-${index} ${durationStr} infinite step-end;" />` : ''}
          <image href="${poke.base64.front}" width="${spriteSize}" height="${spriteSize}" style="image-rendering: pixelated; transform-box: fill-box; transform-origin: center; animation: flip-front-${index} ${durationStr} infinite step-end;" />
        </g>
      </g>
    `;
  });

  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes bob {
        from { transform: translateY(0); }
        to { transform: translateY(-4px); }
      }
      .bg {
        fill: #1a1a1a;
        rx: 15px;
      }
      .title {
        fill: #ffffff;
        font-family: 'Courier New', Courier, monospace;
        font-size: 14px;
        font-weight: bold;
      }
      ${dynamicStyles}
    </style>
    
    <rect width="100%" height="100%" class="bg" />
    <text x="20" y="25" class="title">My Pokémon Team</text>
    
    ${slots}
  </svg>`;
}

module.exports = { generateSVG };
