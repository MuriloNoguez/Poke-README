<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="80" />
  <h1>Poké-README</h1>
  <p><strong>Dynamically display your Pokémon team on your GitHub profile based on your real contributions!</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/Powered_by-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg" alt="License" />
  </p>
</div>

---

## 🌟 Live Preview

See it in action! This widget automatically evolves your Pokémon as you commit code:

![My Pokémon Team](https://pokereadme.murilonoguez.com.br/api?user=MuriloNoguez&pokes=6,9,160,149,133,150)

<div align="center">
  <sub><i>Wait... are those base forms? Yes! The system intelligently adjusts your team based on your commit history.</i></sub>
</div>

---

## 🚀 Pro Features

### 📈 Progressive Evolution
Requested a **Charizard** (ID 6) but only have a few commits? The API will automatically show a **Charmander** until you reach the required threshold! 
- **Dynamic Downscaling:** If your profile doesn't meet the "experience" (commits) for a specific stage, the Pokémon will appear in its appropriate evolutionary form.
- **Experience Matters:** Every commit counts towards your team's growth.

### ✨ The 1/8192 Shiny Hunt
We take "Classic Chance" seriously. Every time the API renders your team, it checks for a Shiny status.
- **Permanent Rarity:** Your Shiny status is tied to your unique GitHub User ID and the specific slot. 
- **Increasing Odds:** For every **10 commits** you make, you get an extra "roll" for that Pokémon. Keep coding to find that elusive blue Ditto or gold Magikarp!

### 🔱 Legendary Requirements
Legendaries aren't handed out for free. You need to prove your status as a "Master Developer".
- **The 1000 Commit Wall:** If you have less than 1,000 total contributions, any Legendary ID in your URL will **Transform into a Ditto** as a placeholder.
- **Real Data Example:** `?pokes=150,249,384` will show 3 Dittos for most users until they hit 1k commits.

### 💎 Eevee Elements
Eevee's evolution is the only one you can control via items.
- **Syntax:** Add `&item=water` for Vaporeon, `&item=thunder` for Jolteon, and so on.

---

## 🛠️ Installation

Add this to your GitHub profile README (around line 1):

```markdown
![My Pokemon Team](https://pokereadme.murilonoguez.com.br/api?user=YOUR_USERNAME&pokes=6,9,3,149,143,26)
```

### 📋 URL Parameters

| Parameter | Meaning | Values |
| :--- | :--- | :--- |
| `user` | GitHub Handle | `torvalds`, `gaearon`, etc. |
| `pokes` | Team IDs | 1 to 493 (Separated by commas) |
| `item` | Eevee Stone | `water`, `thunder`, `fire`, `sun`, `moon`, `leaf`, `ice` |

---

## 🖼️ Gallery of Real Scenarios

#### 🔴 Mockup: Master Team (Legendaries & Shinies)
*What your profile could look like with 1000+ commits and a bit of luck!*
![Mockup](test.svg)

### 🟢 Starter Pack (0-150 Commits)
`?user=newbie&pokes=1,4,7`
![Starter](https://pokereadme.murilonoguez.com.br/api?user=seed-demo-1&pokes=1,4,7)

### 🔵 The Eeveelution Collector
`?user=MuriloNoguez&pokes=133,133,133&item=ice`
![Eevee](https://pokereadme.murilonoguez.com.br/api?user=MuriloNoguez&pokes=133,133,133&item=ice)

### 🟣 The "Not Yet Ready" Legendaries (Standard users)
`?user=MuriloNoguez&pokes=150,249,384`
![Ditto Theory](https://pokereadme.murilonoguez.com.br/api?user=MuriloNoguez&pokes=150,249,384)

---

## ⚙️ Setup & Deployment

1. **Deploy to Vercel:** Use the Vercel CLI or Connect your Repo.
2. **Environment Variable:** Add `GITHUB_TOKEN` in Vercel Settings to enable GraphQL and bypass rate limits.
3. **Enjoy!**

<div align="center">
  <p>Created with ❤️ by <b><a href="https://github.com/MuriloNoguez">Murilo Noguêz</a></b></p>
  <p><i>Pokémon is © Nintendo/Creatures Inc./GAME FREAK inc.</i></p>
</div>
