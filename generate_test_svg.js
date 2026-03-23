const fs = require('fs');
const path = require('path');
const { generateSVG } = require('./lib/svgTemplate');

function getBase64Sprite(gen, name, type) {
    const filePath = path.join(__dirname, 'media', gen, name, `${type}.gif`);
    if (fs.existsSync(filePath)) {
        return `data:image/gif;base64,${fs.readFileSync(filePath).toString('base64')}`;
    }
    return null;
}

const mockTeam = [
    {
        name: 'mewtwo',
        gen: 'gen1',
        isShiny: false,
        scale: 1.3,
        base64: {
            front: getBase64Sprite('gen1', 'mewtwo', 'default_front'),
            run: getBase64Sprite('gen1', 'mewtwo', 'default_run')
        }
    },
    {
        name: 'charizard',
        gen: 'gen1',
        isShiny: true,
        scale: 1.2,
        base64: {
            front: getBase64Sprite('gen1', 'charizard', 'shiny_front'),
            run: getBase64Sprite('gen1', 'charizard', 'shiny_run')
        }
    },
    {
        name: 'lugia',
        gen: 'gen2',
        isShiny: false,
        scale: 1.6,
        base64: {
            front: getBase64Sprite('gen2', 'lugia', 'default_front'),
            run: getBase64Sprite('gen2', 'lugia', 'default_run')
        }
    },
    {
        name: 'umbreon',
        gen: 'gen2',
        isShiny: true,
        scale: 0.8,
        base64: {
            front: getBase64Sprite('gen2', 'umbreon', 'shiny_front'),
            run: getBase64Sprite('gen2', 'umbreon', 'shiny_run')
        }
    },
    {
        name: 'rayquaza',
        gen: 'gen3',
        isShiny: true,
        scale: 1.6,
        base64: {
            front: getBase64Sprite('gen3', 'rayquaza', 'shiny_front'),
            run: getBase64Sprite('gen3', 'rayquaza', 'shiny_run')
        }
    },
    {
        name: 'celebi',
        gen: 'gen2',
        isShiny: false,
        scale: 0.7,
        base64: {
            front: getBase64Sprite('gen2', 'celebi', 'default_front'),
            run: getBase64Sprite('gen2', 'celebi', 'default_run')
        }
    }
];

const svg = generateSVG(mockTeam);
fs.writeFileSync('test.svg', svg);
console.log('test.svg has been generated successfully!');
