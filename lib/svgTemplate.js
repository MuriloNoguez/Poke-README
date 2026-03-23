function generateSVG(pokemonTeam) {
  const width = 800;
  const height = 150;
  
  let slots = '';
  let dynamicStyles = '';

  pokemonTeam.forEach((poke, index) => {
    // Initial start position
    const startX = 40 + (index * 120);
    const floatDelay = index * 0.2;

    if (poke && poke.base64 && poke.base64.front) {
      // 1. Generate entirely random unique path for THIS specific pokemon
      // This guarantees they will behave individually, walk at their own times,
      // stop at their own times, and cross paths dynamically.
      let seed = index * 420 + 1337;
      const rnd = (max) => {
        seed = (seed * 9301 + 49297) % 233280;
        return (seed / 233280) * max;
      };

      const timeline = [];
      let currentX = startX;
      let totalDuration = 0;
      
      // Usually between 3 to 5 walk segments (with idle gaps in between)
      const numWalks = 3 + Math.floor(rnd(3)); 
      
      for (let i = 0; i < numWalks; i++) {
        // Idle
        const idleTime = 2 + rnd(4); // 2 to 6 seconds standing still
        timeline.push({ type: 'idle', x: currentX, duration: idleTime });
        totalDuration += idleTime;
        
        // Walk
        const walkTime = 3 + rnd(5); // 3 to 8 seconds walking
        // Pick new X target between 20px and 740px
        let targetX = currentX + (rnd(500) - 250); 
        targetX = Math.max(20, Math.min(740, targetX));
        
        timeline.push({ type: 'walk', prevX: currentX, x: targetX, duration: walkTime });
        currentX = targetX;
        totalDuration += walkTime;
      }
      
      // Final return walk stroke to loop smoothly back to start position
      const returnTime = 3 + rnd(5);
      timeline.push({ type: 'idle', x: currentX, duration: 2 });
      totalDuration += 2;
      timeline.push({ type: 'walk', prevX: currentX, x: startX, duration: returnTime });
      totalDuration += returnTime;

      // 2. Map timeline segments into precise CSS keyframes percentages
      let roamKeyframes = '';
      let flipRunKeyframes = '';
      let flipFrontKeyframes = '';

      let currentPct = 0;
      
      for (let i = 0; i < timeline.length; i++) {
        const seg = timeline[i];
        
        const isWalk = seg.type === 'walk';
        const flipValue = isWalk && (seg.x > seg.prevX) ? 1 : -1; 

        roamKeyframes += `${currentPct.toFixed(2)}% { transform: translate(${seg.prevX || seg.x}px, 65px); }\n`;
        const nextPct = currentPct + (seg.duration / totalDuration) * 100;
        
        // Emulating step-end directly with start values but we will use step-end on the animation itself!
        // We only need the state AT the percentage.
        if (isWalk) {
          flipRunKeyframes += `${currentPct.toFixed(2)}% { opacity: 1; transform: scaleX(${flipValue}); }\n`;
          flipFrontKeyframes += `${currentPct.toFixed(2)}% { opacity: 0; }\n`;
        } else {
          // Idle
          flipRunKeyframes += `${currentPct.toFixed(2)}% { opacity: 0; transform: scaleX(1); }\n`;
          flipFrontKeyframes += `${currentPct.toFixed(2)}% { opacity: 1; }\n`;
        }
        
        currentPct = nextPct;
      }
      // Add final 100% frame to close loops
      roamKeyframes += `100% { transform: translate(${timeline[timeline.length-1].x}px, 65px); }\n`;

      dynamicStyles += `
        @keyframes roam-${index} { ${roamKeyframes} }
        @keyframes flip-run-${index} { ${flipRunKeyframes} }
        @keyframes flip-front-${index} { ${flipFrontKeyframes} }
      `;

      // Use transform-box: fill-box to ensure the flip happens purely on the sprite center
      const durationStr = totalDuration.toFixed(2) + 's';

      slots += `
        <g style="animation: roam-${index} ${durationStr} infinite linear;">
          <!-- Inner group for bobbing -->
          <g style="animation: bob 1.5s ease-in-out infinite alternate ${floatDelay}s;">
            <!-- Running Sprite (flips depending on direction, using step-end) -->
            ${poke.base64.run ? `<image href="${poke.base64.run}" width="64" height="64" style="image-rendering: pixelated; transform-box: fill-box; transform-origin: center; animation: flip-run-${index} ${durationStr} infinite step-end;" />` : ''}
            <!-- Front/Idle Sprite (using step-end) -->
            <image href="${poke.base64.front}" width="64" height="64" style="image-rendering: pixelated; transform-box: fill-box; transform-origin: center; animation: flip-front-${index} ${durationStr} infinite step-end;" />
            <!-- Shiny particles or indicator -->
          </g>
        </g>
      `;
    }
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
