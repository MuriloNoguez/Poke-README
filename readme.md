# Poke-README

[**🇧🇷 Português**](#-português) | [**🇺🇸 English**](#-english) | [**🇪🇸 Español**](#-español)

---


## 🇧🇷 Português

<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="80" />
  <h1>Poke-README</h1>
  <p><strong>Exiba dinamicamente seu time Pokemon no seu perfil do GitHub baseado em suas contribuições reais!</strong></p>
  
  <p>
    <a href="https://pokereadme.murilonoguez.com.br/"><strong>🚀 Poke-README Builder 🚀</strong></a>
  </p>



  <p>
    <img src="https://img.shields.io/badge/Powered_by-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg" alt="License" />
  </p>
</div>

---

## 🌟 Demonstração ao Vivo

Veja em ação! Este widget evolui seus Pokemon automaticamente conforme você faz commits:

<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=MuriloNoguez&pokes=6,9,160,149,133,150" />
  <br/>
  <sub><i>Espere... esses são as formas base? Sim! O sistema ajusta inteligentemente seu time baseado no seu histórico de commits.</i></sub>
</div>

---

## 🚀 Funcionalidades Pro

### 📈 Evolução Progressiva
Pediu um **Charizard** (ID 6) mas só tem alguns commits? A API mostrará automaticamente um **Charmander** até você atingir o limite necessário! 
- **Downscaling Dinâmico:** Se seu perfil não tiver a "experiência" (commits) para um estágio específico, o Pokemon aparecerá em forma básica.
- **Experiência Importa:** Cada commit conta para o crescimento do seu time.

### ✨ A Caçada Shiny (1/8192)
Sistema de raridade clássico. Cada vez que a API renderiza seu time, ela verifica o status Shiny.
- **Raridade Permanente:** Seu status Shiny é atrelado ao seu ID de usuário do GitHub. Uma vez encontrado, é seu para sempre!
- **Aumentando as Chances:** A cada 10 commits, você ganha uma nova "tentativa" (roll) para aquele Pokemon específico.

### 🔱 Requisitos Lendários
Pokemon Lendários (como Mewtwo or Rayquaza) exigem dedicação real. 
- **A Barreira de 1.000 Commits:** Você deve ter pelo menos **1.000 commits** em seu histórico para revelar um Lendário.
- **Status de Transformação:** Se você tiver menos de 1.000 commits, esses IDs aparecerão como um **Ditto**!

---

## 🛠️ Instalação

Adicione isto ao README do seu perfil do GitHub:

```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=6,9,3,149,143,26" />
</div>
```

---

## 🖼️ Galeria & Exemplos

### 🔱 O Conselho Lendário
Requer **1.000+ total commits** para exibir o time lendário completo. Se você não atingiu a meta, eles aparecerão como Dittos.
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=150,249,384,151,251,493" />
</div>
```
<div align="center"><img src="media/svgs/legendary.svg" alt="Mockup Lendário" /></div>

### 💎 Evoluções do Eevee
Exiba as diferentes formas do Eevee usando o parâmetro `&item=`!
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=133,133,133,133,133,133&item=fire" />
</div>
```
<div align="center"><img src="media/svgs/eevee.svg" alt="Mockup Eevee" /></div>

### 🌈 Caçadores de Shiny
O flex supremo. Estas cores raras têm chance base de 1/8192, aumentando a cada 10 commits que você faz!
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=6,130,376,384,197,132" />
</div>
```
<div align="center"><img src="media/svgs/shiny.svg" alt="Mockup Shiny" /></div>

### 🟢 Time Kanto Padrão
Um time clássico com os iniciais originais, Pikachu, Eevee e o misterioso Ditto.
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=1,4,7,25,133,132" />
</div>
```
<div align="center"><img src="media/svgs/normal.svg" alt="Mockup Normal" /></div>

---

## ⚙️ Configuração & Deploy Detalhado

Siga estes passos para ter seu próprio widget rodando (opcional para maior estabilidade):

### 1. Faça um Fork
Clique no botão **Fork** no topo deste repositório para criar uma cópia na sua conta.

### 2. Gere um Token do GitHub
Como a API faz muitas requisições para contar seus commits, você precisará de um Personal Access Token para evitar bloqueios:
- Vá em **Settings > Developer settings > Personal access tokens > Tokens (classic)**.
- Gere um novo token com a permissão `read:user`.
- **Copie o token gerado**.

### 3. Deploy na Vercel
- Crie uma conta na [Vercel](https://vercel.com/) e conecte com seu GitHub.
- Importe o repositório que você acabou de dar Fork.
- Antes de clicar em "Deploy", vá em **Environment Variables** e adicione:
  - **Key:** `GITHUB_TOKEN`
  - **Value:** `(cole o token que você gerou)`
- Agora clique em **Deploy**.

### 4. Aplique no seu Perfil
Após o deploy, a Vercel te dará uma URL (ex: `meu-poke-readme.vercel.app`). Use essa URL nos exemplos acima substituindo `https://pokereadme.murilonoguez.com.br`.

---

<div align="center">
  <p>Feito por <b><a href="https://github.com/MuriloNoguez">Murilo Noguêz</a></b></p>
  <p>Para os saudosistas da era clássica do Game Boy!</p>
  <br/>
  <p><i><b>Aviso Legal:</b> Pokemon e todos os nomes e sprites associados são marcas registradas e pertencem à Nintendo, Creatures Inc. e GAME FREAK inc. Este é um projeto não-oficial feito de fã para fãs, sem fins lucrativos. A licença de código aberto se aplica apenas à base de código (programação), e não aos ativos da marca.</i></p>
</div>


---

## 🇺🇸 English

<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="80" />
  <h1>Poke-README</h1>
  <p><strong>Dynamically display your Pokemon team on your GitHub profile based on your real contributions!</strong></p>
  
  <p>
    <a href="https://pokereadme.murilonoguez.com.br/"><strong>🚀 Poke-README Builder 🚀</strong></a>
  </p>



  <p>
    <img src="https://img.shields.io/badge/Powered_by-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg" alt="License" />
  </p>
</div>

---

## 🌟 Live Demo

See it in action! This widget evolves your Pokemon automatically as you make commits:

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
- **Increasing Odds:** Every 10 commits grants you a new "roll" for that specific Pokemon.

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
  <p><i><b>Legal Notice:</b> Pokemon and all associated names and sprites are trademarks of Nintendo, Creatures Inc. and GAME FREAK inc. This is a non-profit fan project. The open-source license applies only to the codebase, not the brand assets.</i></p>
</div>


---

## 🇪🇸 Español

<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="80" />
  <h1>Poke-README</h1>
  <p><strong>¡Muestra tu equipo Pokemon dinámicamente en tu perfil de GitHub basado en tus contribuciones reales!</strong></p>
  
  <p>
    <a href="https://pokereadme.murilonoguez.com.br/"><strong>🚀 Poke-README Builder 🚀</strong></a>
  </p>



  <p>
    <img src="https://img.shields.io/badge/Powered_by-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg" alt="License" />
  </p>
</div>

---

## 🌟 Demostración en Vivo

Este widget evoluciona tus Pokemon automáticamente a medida que haces commits:

<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=TuNombreDeUsuario&pokes=6,9,160,149,133,150" />
  <br/>
  <sub><i>Espera... ¿esos son las formas base? ¡Sí! El sistema ajusta inteligentemente tu equipo basado en tu historial de commits.</i></sub>
</div>

---

## 🚀 Características Pro

### 📈 Evolución Progresiva
¿Pediste un **Charizard** (ID 6) pero solo tienes unos pocos commits? ¡La API mostrará automáticamente un **Charmander** hasta que subas de nivel! 
- **Downscaling Dinâmico:** Si tu perfil no tiene la "experiencia" (commits) para un estadio específico, el Pokemon aparecerá en forma básica.
- **La Experiencia Importa:** Cada commit cuenta para el crecimiento de tu equipo.

### ✨ Caza Shiny (1/8192)
Sistema de raridade clássico. Cada vez que a API genera tu equipo, verifica el estado Shiny.
- **Rareza Permanente:** Tu estado Shiny está vinculado a tu ID de usuario de GitHub. ¡Una vez encontrado, es tuyo para siempre!
- **Aumentando las Probabilidades:** Cada 10 commits te otorga un nuevo "giro" (roll) para ese Pokemon específico.

### 🔱 Requisitos Legendarios
Pokemon Legendarios (como Mewtwo o Rayquaza) requieren dedicación real. 
- **La Barrera de 1,000 Commits:** Debes tener al menos **1,000 commits** en tu historial para revelar un Legendario.
- **Estado de Transformación:** Si tienes < 1,000 commits, estos IDs aparecerán como un **Ditto**.

---

## 🛠️ Instalación

Añade esto al README de tu perfil de GitHub:

```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=TuNombreDeUsuario&pokes=6,9,3,149,143,26" />
</div>
```

---

## 🖼️ Galería y Ejemplos

### 🔱 El Consejo Legendario
Requiere **1,000+ total commits** para mostrar el equipo legendario completo. Si no has alcanzado el hito, aparecerán como Dittos.
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=TuNombreDeUsuario&pokes=150,249,384,151,251,493" />
</div>
```
<div align="center"><img src="media/svgs/legendary.svg" alt="Mockup Legendario" /></div>

### 💎 Evoluciones de Eevee
¡Muestra las diferentes formas de Eevee usando el parámetro `&item=`!
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=TuNombreDeUsuario&pokes=133,133,133,133,133,133&item=fire" />
</div>
```
<div align="center"><img src="media/svgs/eevee.svg" alt="Mockup Eevee" /></div>

### 🌈 Caza Shiny
El flex supremo. ¡Estos colores raros tienen una probabilidad base de 1/8192, que aumenta por cada 10 commits que hagas!
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=TuNombreDeUsuario&pokes=6,130,376,384,197,132" />
</div>
```
<div align="center"><img src="media/svgs/shiny.svg" alt="Mockup Shiny" /></div>

### 🟢 Equipo Kanto Estándar
Un equipo clásico con los iniciales originales, Pikachu, Eevee e incluso el misterioso Ditto.
```html
<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=TuNombreDeUsuario&pokes=1,4,7,25,133,132" />
</div>
```
<div align="center"><img src="media/svgs/normal.svg" alt="Mockup Normal" /></div>

---

## ⚙️ Configuración y Despliegue Detallado

Sigue estos pasos para tener tu propio widget funcionando (opcional para mayor estabilidad):

### 1. Paso 1: Haz un Fork
Haz clic en el botón **Fork** en la parte superior de este repositorio.

### 2. Paso 2: Genera un Token de GitHub
Como la API cuenta tus commits, necesitarás un Personal Access Token:
- Ve a **Settings > Developer settings > Personal access tokens > Tokens (classic)**.
- Genera un nuevo token con el permiso `read:user`.
- **Copia el token generado**.

### 3. Paso 3: Despliegue en Vercel
- Crea una cuenta en [Vercel](https://vercel.com/) y conéctala con tu GitHub.
- Importe el repositorio que acabas de bifurcar (Fork).
- Antes de hacer clic en "Deploy", ve a **Environment Variables** y añade:
  - **Key:** `GITHUB_TOKEN`
  - **Value:** `(pega el token que generaste)`
- Ahora haz clic en **Deploy**.

### 4. Paso 4: ¡Aplícalo en tu Perfil!
Una vez desplegado, Vercel te dará una URL (por ejemplo: `mi-poke-readme.vercel.app`). Usa esa URL en los ejemplos de código anteriores sustituyendo `https://pokereadme.murilonoguez.com.br`.

---

<div align="center">
  <p>Creado por <b><a href="https://github.com/MuriloNoguez">Murilo Noguêz</a></b></p>
  <p>¡Para los que extrañan la era clásica de Game Boy!</p>
  <br/>
  <p><i><b>Aviso Legal:</b> Pokemon y todos los nombres y sprites asociados son marcas registradas y pertenecen a Nintendo, Creatures Inc. y GAME FREAK inc. Este es un proyecto no-oficial hecho de fans para fans, sin fines de lucro. La licencia de código abierto se aplica solo a la base de código (programación) y no a los activos de la marca.</i></p>
</div>


