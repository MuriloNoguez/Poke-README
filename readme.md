<div align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" width="80" />
  <h1>Poké-GitHub README Stats</h1>
  <p><strong>Exiba dinamicamente o seu time Pokémon diretamente no seu perfil do GitHub!</strong></p>
  
  <p>
    <img src="https://img.shields.io/badge/Powered_by-Vercel-black?logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg" alt="License" />
  </p>
</div>

---

## 🌟 Live Demo

*(Coloque abaixo a URL do seu deploy oficial assim que subir na Vercel! Por enquanto mostramos a render local de testes.)*  
![My Pokémon Team](./test.svg)

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
![My Pokemon Team](https://SEU_DOMINIO_AQUI/api?user=NOME_DE_USUARIO&pokes=1,4,7,25,133,150)
```

**Parâmetros da Query:**
- `user`: O nome de exibição (username) do GitHub no qual contabilizaremos o repositório/commits.
- `pokes`: Lista contendo os números correspondentes da `pokedex` dos Pokémon separados por vírgula (Mínimo de 1, Máximo 6).

## ⚙️ Deploy Fácil & Configuração

1. Fork ou clone este repositório.
2. Certifique-se de configurar a variável de ambiente (Environment Variable) `GITHUB_TOKEN` com um dos seus Tokens de Acesso Pessoal lá na Vercel (assim permitimos que a API do GitHub GraphQL seja lida sem rate-limit estourar rápido).
3. Faça o suba (deploy) das funções pra Vercel (a própria plataforma vai ler automaticamente a branch principal assim que a pasta `/api` e o `package.json` forem encontrados).
4. Divirta-se configurando o seu `pokedex.json` e as sprites base dentro da pasta `/media/`!

## 🧩 Adicionando Mais Sprites

Como o widget lê diretamente seus mapas criados, para registrar um Pokémon novo você deve:
1. Cadastrar suas regras e evoluções dentro de `/lib/pokedex.json`.
2. Adicionar os sprites com as nomenclaturas exatas (`default_front.gif`, `default_run.gif`, `shiny_front.gif`, `shiny_run.gif`) seguindo a estrutura de pastas por Geração (Ex: `media/gen1/bulbasaur/`).

---

<div align="center">
  <p>Feito com ❤️ por <b>Murilo Noguêz</b></p>
  <p>Para os saudosistas da era clássica do Game Boy!</p>
  <br/>
  <p><i><b>Aviso Legal:</b> Pokémon e todos os nomes e sprites associados são marcas registradas e pertencem à Nintendo, Creatures Inc. e GAME FREAK inc. Este é um projeto não-oficial feito de fã para fãs, sem fins lucrativos. A licença de código aberto se aplica apenas à base de código (programação), e não aos ativos da marca.</i></p>
</div>

