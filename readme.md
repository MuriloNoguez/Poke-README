<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="80" />
  <h1>Poke-README</h1>
  <p><strong>Exiba dinamicamente o seu time Pokémon diretamente no seu perfil do GitHub!</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/Powered_by-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg" alt="License" />
  </p>
</div>

---

## 🌟 Live Demo

Aqui está o widget funcionando em tempo real puxando os dados da API:

![My Pokémon Team](https://pokereadme.murilonoguez.com.br/api?user=MuriloNoguez&pokes=1,4,7,25,133,150)

<div align="center">
  <sub>Animações CSS independentes, cruzamento dinâmico de paths e evolução baseada nos seus Commits do GitHub!</sub>
</div>

---

## 🚀 Características

- **Animações Realistas:** Os Pokémon não são apenas GIFs estáticos, eles ganham vida vagando de forma aleatória e independente pelo componente! E com direito a virar o lado do corpo corretamente usando Keyframes do CSS (`scaleX`).
- **Evolução por Participação:** Seus Pokémon baseados nos seus limites configurados pelo arquivo `pokedex.json`. Eles evoluem de acordo com o número total de **commits** do seu usuário através da API do GitHub.
- **Sistema Shiny Único:** Todo Pokémon adicionado ao time passa por um complexo sistema de sementes (Seed numérico atrelado ao seu `User ID` imutável no GitHub). Isso simula algoritmos retro, trazendo exatamente a chance clássica de **1/8192** de um Pokémon seu ser Shiny permanente!
- **Zero Scripts:** Tudo encapsulado em base64 num formato puro SVG para o GitHub não bloquear.

## 🛠️ Como Adicionar ao seu Perfil do GitHub

Depois que você realizar o `deploy` desta automação numa ferramenta Serverless (como a Vercel), insira este snippet de Markdown em qualquer README que quiser!

```markdown
![My Pokemon Team](https://pokereadme.murilonoguez.com.br/api?user=YourUsername&pokes=1,4,7,25,133,150)
```

**Parâmetros da Query:**
- `user`: O nome de exibição (username) do GitHub no qual contabilizaremos o repositório/commits.
- `pokes`: Lista contendo os números correspondentes da `pokedex` dos Pokémon separados por vírgula (Mínimo de 1, Máximo 6).

---

<div align="center">
  <p>Feito por <b><a href="https://github.com/MuriloNoguez">Murilo Noguêz</a></b></p>
  <p>Para os saudosistas da era clássica do Game Boy!</p>
  <br/>
  <p><i><b>Aviso Legal:</b> Pokémon e todos os nomes e sprites associados são marcas registradas e pertencem à Nintendo, Creatures Inc. e GAME FREAK inc. Este é um projeto não-oficial feito de fã para fãs, sem fins lucrativos. A licença de código aberto se aplica apenas à base de código (programação), e não aos ativos da marca.</i></p>
</div>
