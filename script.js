const API_BASE = window.location.hostname === 'localhost' ? '/api' : "https://pokereadme.murilonoguez.com.br/api";
const GITHUB_RAW_BASE = "https://raw.githubusercontent.com/MuriloNoguez/Poke-README/main";

let pokedex = {};
let selectedTeam = [];
let teamNicks = ["", "", "", "", "", ""]; // Up to 6 nicknames

// DOM Elements
const grid = document.getElementById('grid');
const searchInput = document.getElementById('search');
const usernameInput = document.getElementById('username');
const countDisplay = document.getElementById('count');
const previewImg = document.getElementById('preview-img');
const previewWrapper = document.getElementById('preview-wrapper');
const outputCode = document.getElementById('output-code');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const nicknamesSection = document.getElementById('nicknames-section');
const nicknamesContainer = document.getElementById('nicknames-container');

// 1. Initial Load - Try Local first, then Fallback to GitHub
async function init() {
    try {
        console.log("Starting Pokedex load...");
        
        // Try local path first (important for development)
        let response = await fetch("./lib/pokedex.json");
        
        if (!response.ok) {
            console.warn("Local path failed, trying GitHub...");
            response = await fetch(`${GITHUB_RAW_BASE}/lib/pokedex.json`);
        }
        
        if (!response.ok) throw new Error("Fetch failed on both paths");
        
        pokedex = await response.json();
        const count = Object.keys(pokedex).length;
        console.log(`Pokedex loaded successfully: ${count} Pokemon registered.`);
        
        renderGrid(Object.entries(pokedex));
    } catch (err) {
        console.error("Critical error loading Pokedex:", err);
        grid.innerHTML = '<div class="error">Error loading data. Check local files (lib/pokedex.json).</div>';
    }
}

// 2. Render Pokemon List in Sidebar (Compact Cards)
function renderGrid(entries) {
    grid.innerHTML = '';
    entries.forEach(([id, data]) => {
        const card = document.createElement('div');
        card.className = `pokemon-sm-card ${selectedTeam.includes(id) ? 'selected' : ''}`;
        card.setAttribute('data-id', id);
        
        // Sprite path: Priority to local, but falls back to GitHub if local doesn't exist
        const spritePath = `./media/${data.gen}/${data.name}/default_front.gif`;
        const githubSprite = `${GITHUB_RAW_BASE}/media/${data.gen}/${data.name}/default_front.gif`;
        const fallbackIcon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';
        
        card.innerHTML = `
            <img src="${spritePath}" alt="${data.name}" 
                 onerror="if(this.src.includes('media')) { this.src='${githubSprite}'; } else { this.src='${fallbackIcon}'; }">
            <span>${data.name}</span>
        `;
        card.onclick = () => togglePoke(id);
        grid.appendChild(card);
    });
}

// 3. Selection Toggle
function togglePoke(id) {
    const index = selectedTeam.indexOf(id);
    if (index > -1) {
        selectedTeam.splice(index, 1);
        // Shift nicknames up
        teamNicks.splice(index, 1);
        teamNicks.push("");
    } else {
        if (selectedTeam.length >= 6) {
            alert("Limit of 6 Pokemon!");
            return;
        }
        selectedTeam.push(id);
    }
    renderNicknames();
    updateUI();
}

// 4. Render Nickname Inputs
function renderNicknames() {
    if (selectedTeam.length === 0) {
        nicknamesSection.style.display = 'none';
        return;
    }

    nicknamesSection.style.display = 'block';
    nicknamesContainer.innerHTML = '';

    selectedTeam.forEach((id, index) => {
        const data = pokedex[id];
        const group = document.createElement('div');
        group.className = 'nick-input-group';
        
        const spritePath = `./media/${data.gen}/${data.name}/default_front.gif`;
        
        group.innerHTML = `
            <img src="${spritePath}" alt="${data.name}">
            <input type="text" placeholder="Nickname for ${data.name}..." 
                   value="${teamNicks[index]}" 
                   maxlength="10"
                   data-index="${index}">
        `;

        const input = group.querySelector('input');
        input.oninput = (e) => {
            teamNicks[index] = e.target.value.trim().substring(0, 10);
            updateUI();
        };

        nicknamesContainer.appendChild(group);
    });
}

// 5. Update UI & Live Preview
function updateUI() {
    countDisplay.innerText = selectedTeam.length;
    
    // Grid Selection Highlights
    document.querySelectorAll('.pokemon-sm-card').forEach(card => {
        const id = card.getAttribute('data-id');
        card.classList.toggle('selected', selectedTeam.includes(id));
    });

    const user = usernameInput.value.trim() || "YOUR_USERNAME";
    const pokes = selectedTeam.join(',');
    const names = teamNicks.slice(0, selectedTeam.length).join(',');
    
    if (selectedTeam.length > 0) {
        let apiUrl = `${API_BASE}?user=${user}&pokes=${pokes}`;
        if (names.replace(/,/g, '').length > 0) {
            apiUrl += `&names=${encodeURIComponent(names)}`;
        }
        
        // Update Live Preview Image
        previewImg.src = apiUrl;
        previewImg.style.display = 'block';
        
        const placeholder = previewWrapper.querySelector('.preview-placeholder');
        if (placeholder) placeholder.style.display = 'none';

        // Update Markdown Code
        const code = `<div align="center">\n  <img src="${apiUrl}" alt="My Pokemon Team" />\n</div>`;
        outputCode.innerText = code;
        copyBtn.disabled = false;
    } else {
        previewImg.style.display = 'none';
        const placeholder = previewWrapper.querySelector('.preview-placeholder');
        if (placeholder) placeholder.style.display = 'block';
        
        outputCode.innerText = "Select Pokemon in the sidebar...";
        copyBtn.disabled = true;
    }
}

// Event Listeners
searchInput.oninput = (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = Object.entries(pokedex).filter(([id, data]) => 
        data.name.toLowerCase().includes(term) || id.includes(term)
    );
    renderGrid(filtered);
};

usernameInput.oninput = () => updateUI();

copyBtn.onclick = () => {
    const text = outputCode.innerText;
    if (text.includes("Select")) return;
    navigator.clipboard.writeText(text);
    const original = copyBtn.innerText;
    copyBtn.innerText = "Copied! ✨";
    setTimeout(() => copyBtn.innerText = original, 2000);
};

clearBtn.onclick = () => {
    selectedTeam = [];
    teamNicks = ["", "", "", "", "", ""];
    renderNicknames();
    updateUI();
};

// Start
init();
