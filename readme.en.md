<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="80" />
  <h1>Poké-README</h1>
  <p><strong>Dynamically display your Pokémon team on your GitHub profile based on your real contributions!</strong></p>
  
  <p>
    <a href="https://pokereadme.murilonoguez.com.br/"><strong>🚀 Poké-README Builder 🚀</strong></a>
  </p>

  <p>
    <a href="readme.md">Português</a> • 
    <strong>English</strong> • 
    <a href="readme.es.md">Español</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Powered_by-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg" alt="License" />
  </p>
</div>

---

## 🌟 Live Demo

See it in action! This widget evolves your Pokémon automatically as you make commits:

<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=MuriloNoguez&pokes=6,9,160,149,133,150" />
  <br/>
  <sub><i>Wait... are those base forms? Yes! The system intelligently adjusts your team based on your commit history.</i></sub>
</div>

---

## 🚀 Pro Features

### 📈 Progressive Evolution
Requested a **Charizard** (ID 6) but only have a few commits? The API will automatically show a **Charmander** until you reach the required threshold! 
- **Dynamic Downscaling:** If your profile doesn't meet the "experience" (commits) for a specific stage, it will downgrade.
- **Experience Matters:** Every commit counts towards your team's growth.

### ✨ The 1/8192 Shiny Hunt
Classic rarity system. Every time the API renders your team, it checks for a Shiny status.
- **Permanent Rarity:** Your Shiny status is linked to your unique GitHub User ID. Once found, it's yours forever!
- **Increasing Odds:** Every 10 commits grants you a new "roll" for that specific Pokémon.

### 🔱 Legendary Requirements
Legendaries (like Mewtwo or Rayquaza) require true dedication. 
- **The 1,000 Commit Wall:** You must have at least **1,000 commits** in your history to reveal a Legendary.
- **Transform Status:** If you have < 1,000 commits, these IDs will appear as a **Ditto**!

---

## 🛠️ Installation

Add this to your profile README:

```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=6,9,3,149,143,26" />
</div>
```

---

## 🖼️ Gallery & Examples

### 🔱 The Legendary Council
Requires **1,000+ total commits** for a full legendary team display. If you haven't reached the milestone, they will appear as Bittos.
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=150,249,384,151,251,493" />
</div>
```
<div align="center"><img src="media/svgs/legendary.svg" alt="Legendary Mockup" /></div>

### 💎 Eevee Branching Evolutions
Showcase the different forms of Eevee by using the `&item=` parameter!
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=133,133,133,133,133,133&item=fire" />
</div>
```
<div align="center"><img src="media/svgs/eevee.svg" alt="Eevee Mockup" /></div>

### 🌈 Shiny Hunters
The ultimate flex. These rare colors have a 1/8192 base chance, increasing with every 10 commits you make!
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=6,130,376,384,197,132" />
</div>
```
<div align="center"><img src="media/svgs/shiny.svg" alt="Shiny Mockup" /></div>

### 🟢 Standard Kanto Team
A classic entry-level team with the original starters, Pikachu, Eevee, and the mysterious Ditto.
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=1,4,7,25,133,132" />
</div>
```
<div align="center"><img src="media/svgs/normal.svg" alt="Normal Mockup" /></div>

---

## ⚙️ Detailed Setup & Deployment

Follow these steps to get your own widget running (optional for better stability):

### 1. Step 1: Fork the Repo
Click the **Fork** button at the top of this repository account.

### 2. Step 2: Generate a GitHub Token
Since the API counts your commits, you'll need a Personal Access Token:
- Go to **Settings > Developer settings > Personal access tokens > Tokens (classic)**.
- Generate a new token with permission `read:user`.
- **Copy the generated token**.

### 3. Step 3: Deployment to Vercel
- Create a [Vercel](https://vercel.com/) account and connect it to your GitHub.
- Import the repository you just forked.
- Before clicking "Deploy", go to **Environment Variables** and add:
  - **Key:** `GITHUB_TOKEN`
  - **Value:** `(paste the token you generated)`
- Now click **Deploy**.

### 4. Step 4: Apply to your Profile!
Once deployed, Vercel will give you a URL (e.g., `my-poke-readme.vercel.app`). Use this URL in the code snippets above replacing `https://pokereadme.murilonoguez.com.br`.

---

<div align="center">
  <p>Made by <b><a href="https://github.com/MuriloNoguez">Murilo Noguêz</a></b></p>
  <p>For those who miss the classic Game Boy era!</p>
  <br/>
  <p><i><b>Legal Notice:</b> Pokémon and all associated names and sprites are trademarks of Nintendo, Creatures Inc. and GAME FREAK inc. This is a non-profit fan project. The open-source license applies only to the codebase, not the brand assets.</i></p>
</div>
