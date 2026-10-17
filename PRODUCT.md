# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Developers decorating their GitHub profile README. They arrive at the builder, type their GitHub username, pick a team of up to 6 Pokémon, and copy a snippet into their README. Usually a one-off visit, sometimes a return to tweak the team. Global audience (inferred from the multi-language readme).

## Product Purpose
Poke-README is a dynamic SVG card (`/api?user=&pokes=`) that renders a team of animated, walking Pokémon whose evolutions are driven by the user's real GitHub commit count. The builder page exists so anyone can assemble a team, preview the live card and copy the embed code without reading docs. Success: the visitor leaves with working code in their clipboard.

## Positioning
Unlike static stat cards, the team grows with your commits: Pokémon evolve at commit thresholds, legendaries require 1000 commits (otherwise Ditto), shiny rolls happen per 10 commits seeded by the user ID, and Eevee branches via an item.

## Capabilities and Constraints
- 980 Pokémon (Gen 1–9) with animated PMD SpriteCollab sprites (`default_front` idle, `default_run` walk, shiny variants) in `media/sprites/<id>/`, CC BY-NC 4.0 with per-artist credits in CREDITS.md. 45 species have no PMD sprite yet and are left out.
- Card sprite size follows real height on a log scale (`size`, `ch` in lib/pokedex.json). Backgrounds: classic GIF, 10 recoloured themed variants of it (sunset, night, snow, desert, beach, autumn, sakura, rain, volcano, space), or solid (`bg` param).
- Query params: `user`, `pokes` (up to 6 ids), `names` (nicknames, max 10 chars), `item` (Eevee: water, thunder, fire, sun, moon, leaf, ice).
- Selecting a later evolution locks the team at that stage if commits allow; otherwise it downscales.
- Static site (plain HTML/CSS/JS, no build step) served by Vercel alongside the serverless `api/`.
- Builder must be multi-language, defaulting to the browser language: pt, en, es plus other major languages.

## Brand Commitments
- Name: Poke-README. Builder lives at https://pokereadme.murilonoguez.com.br/.
- Pokémon names and sprites are Nintendo / Creatures / GAME FREAK trademarks; the legal notice must stay.

## Evidence on Hand
- Sprites under `media/`, background GIF `media/background.gif`, badge SVGs in `media/svgs/`.
- No testimonials, user counts or metrics exist; do not invent them.

## Product Principles
- The live preview is the truth: every control maps to what the card will render.
- Code in the clipboard is the finish line; nothing should stand between pick and copy.
- Commits are the game mechanic; make the evolution rules visible, not hidden in docs.
