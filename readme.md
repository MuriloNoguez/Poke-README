<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="80" />
  <h1>Poké-README</h1>
  <p><strong>Exiba dinamicamente seu time Pokémon no seu perfil do GitHub baseado em suas contribuições reais!</strong></p>
  
  <p>
    <a href="https://pokereadme.murilonoguez.com.br/"><strong>🚀 Poké-README Builder 🚀</strong></a>
  </p>

  <p>
    <strong>Português</strong> • 
    <a href="readme.en.md">English</a> • 
    <a href="readme.es.md">Español</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Powered_by-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg" alt="License" />
  </p>
</div>

---

## 🌟 Demonstração ao Vivo

Veja em ação! Este widget evolui seus Pokémon automaticamente conforme você faz commits:

<div align="center">
  <img src="https://pokereadme.murilonoguez.com.br/api?user=MuriloNoguez&pokes=6,9,160,149,133,150" />
  <br/>
  <sub><i>Espere... esses são as formas base? Sim! O sistema ajusta inteligentemente seu time baseado no seu histórico de commits.</i></sub>
</div>

---

## 🚀 Funcionalidades Pro

### 📈 Evolução Progressiva
Pediu um **Charizard** (ID 6) mas só tem alguns commits? A API mostrará automaticamente um **Charmander** até você atingir o limite necessário! 
- **Downscaling Dinâmico:** Se seu perfil não tiver a "experiência" (commits) para um estágio específico, o Pokémon aparecerá em forma básica.
- **Experiência Importa:** Cada commit conta para o crescimento do seu time.

### ✨ A Caçada Shiny (1/8192)
Sistema de raridade clássico. Cada vez que a API renderiza seu time, ela verifica o status Shiny.
- **Raridade Permanente:** Seu status Shiny é atrelado ao seu ID de usuário do GitHub. Uma vez encontrado, é seu para sempre!
- **Aumentando as Chances:** A cada 10 commits, você ganha uma nova "tentativa" (roll) para aquele Pokémon específico.

### 🔱 Requisitos Lendários
Pokémon Lendários (como Mewtwo or Rayquaza) exigem dedicação real. 
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
  <p><i><b>Aviso Legal:</b> Pokémon e todos os nomes e sprites associados são marcas registradas e pertencem à Nintendo, Creatures Inc. e GAME FREAK inc. Este é um projeto não-oficial feito de fã para fãs, sem fins lucrativos. A licença de código aberto se aplica apenas à base de código (programação), e não aos ativos da marca.</i></p>
</div>
