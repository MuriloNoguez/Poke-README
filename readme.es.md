<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="80" />
  <h1>Poké-README</h1>
  <p><strong>¡Muestra tu equipo Pokémon dinámicamente en tu perfil de GitHub basado en tus contribuciones reales!</strong></p>
  
  <p>
    <a href="https://pokereadme.murilonoguez.com.br/"><strong>🚀 Poké-README Builder 🚀</strong></a>
  </p>

  <p>
    <a href="readme.md">Português</a> • 
    <a href="readme.en.md">English</a> • 
    <strong>Español</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Powered_by-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg" alt="License" />
  </p>
</div>

---

## 🌟 Demostración en Vivo

Este widget evoluciona tus Pokémon automáticamente a medida que haces commits:

<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=TuNombreDeUsuario&pokes=6,9,160,149,133,150" />
  <br/>
  <sub><i>Espera... ¿esos son las formas base? ¡Sí! El sistema ajusta inteligentemente tu equipo basado en tu historial de commits.</i></sub>
</div>

---

## 🚀 Características Pro

### 📈 Evolución Progresiva
¿Pediste un **Charizard** (ID 6) pero solo tienes unos pocos commits? ¡La API mostrará automáticamente un **Charmander** hasta que subas de nivel! 
- **Downscaling Dinâmico:** Si tu perfil no tiene la "experiencia" (commits) para un estadio específico, el Pokémon aparecerá en forma básica.
- **La Experiencia Importa:** Cada commit cuenta para el crecimiento de tu equipo.

### ✨ Caza Shiny (1/8192)
Sistema de raridade clássico. Cada vez que a API genera tu equipo, verifica el estado Shiny.
- **Rareza Permanente:** Tu estado Shiny está vinculado a tu ID de usuario de GitHub. ¡Una vez encontrado, es tuyo para siempre!
- **Aumentando las Probabilidades:** Cada 10 commits te otorga un nuevo "giro" (roll) para ese Pokémon específico.

### 🔱 Requisitos Legendarios
Pokémon Legendarios (como Mewtwo o Rayquaza) requieren dedicación real. 
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
  <p><i><b>Aviso Legal:</b> Pokémon y todos los nombres y sprites asociados son marcas registradas y pertenecen a Nintendo, Creatures Inc. y GAME FREAK inc. Este es un proyecto no-oficial hecho de fans para fans, sin fines de lucro. La licencia de código abierto se aplica solo a la base de código (programación) y no a los activos de la marca.</i></p>
</div>
