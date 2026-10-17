---
name: Poke-README
description: A Pokédex read as a GitHub contribution calendar; commits drive evolution, the builder ends in copied code.
colors:
  ground: "#0b1f15"
  ground-2: "#0f2619"
  ground-3: "#06120b"
  rule: "#1f3d2b"
  rule-strong: "#2c5039"
  ink: "#e8f3ec"
  ink-2: "#b4cfbe"
  muted: "#8fb39c"
  l0: "#132a1e"
  l1: "#0e4429"
  l2: "#006d32"
  l3: "#26a641"
  l4: "#39d353"
  on-green: "#04140b"
  gold: "#ffd33d"
  error: "#ff8a80"
typography:
  display:
    fontFamily: "Silkscreen, 'Red Hat Mono', ui-monospace, monospace"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "'Red Hat Text', ui-sans-serif, system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Red Hat Text', ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
  body:
    fontFamily: "'Red Hat Text', ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "tnum"
  label:
    fontFamily: "'Red Hat Text', ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
  readout:
    fontFamily: "'Red Hat Mono', ui-monospace, Menlo, Consolas, monospace"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  code:
    fontFamily: "'Red Hat Mono', ui-monospace, Menlo, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  r: "2px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  2xl: "32px"
  cell: "72px"
  cell-compact: "66px"
components:
  button-primary:
    backgroundColor: "{colors.l4}"
    textColor: "{colors.on-green}"
    rounded: "{rounded.r}"
    height: "44px"
    width: "100%"
  button-primary-hover:
    backgroundColor: "#5ce374"
  button-primary-disabled:
    backgroundColor: "{colors.l0}"
    textColor: "{colors.muted}"
  button-ghost:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.r}"
    padding: "4px 8px"
  chip:
    textColor: "{colors.ink-2}"
    rounded: "{rounded.r}"
    padding: "3px 9px"
  chip-pressed:
    backgroundColor: "{colors.l3}"
    textColor: "{colors.on-green}"
  input:
    backgroundColor: "{colors.ground-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.r}"
    padding: "9px 12px"
  dex-cell:
    backgroundColor: "{colors.l0}"
    rounded: "{rounded.r}"
    size: "{spacing.cell}"
  dex-cell-ready:
    backgroundColor: "{colors.l4}"
  dex-cell-selected:
    backgroundColor: "{colors.ink}"
  log-line:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.r}"
    padding: "6px 6px 6px 4px"
  code-box:
    backgroundColor: "{colors.ground-3}"
    textColor: "{colors.ink-2}"
    typography: "{typography.code}"
    rounded: "{rounded.r}"
    padding: "12px"
---

# Design System: Poke-README

## Overview

**Creative North Star: "The Commit Ledger"**

The builder is a Pokédex printed as a GitHub contribution calendar. Every Pokémon is a square cell, and its fill is a readout: how close the visitor's commit count is to making that form appear. One scrubber redraws the whole grid, so the page reads as an instrument, not a catalogue. Commits are the material; evolution is the measurement.

The world is a night forest: a near-black green ground, a five-step contribution ramp, and pale green-white ink. Surfaces are flat and separated by one-pixel rules, corners never round past 2px, and nothing floats. Numbers, dex numbers and code are set in a monospaced face with tabular figures, so counts line up like a log. Gold exists only to mark rarity (legendary, shiny) and appears nowhere else.

The page is a three-step tool (who, team, copy) laid out as a band, a calendar and a rail. Density is high and calm: small type, tight cells, plenty of rule lines, one saturated action (Copy).

**Key Characteristics:**
- Square cells on a fixed 5-step green fill ramp; the ramp is the information.
- One-pixel rules and tonal grounds instead of shadows.
- 2px corners everywhere; nothing rounder.
- Monospaced, tabular figures for every number, dex no. and code.
- Gold reserved for rarity; brightest green reserved for "ready" and the primary action.
- Pixel sprites rendered pixelated, never smoothed; card size follows real Pokémon height.

## Colors

A dark, single-hue green system where lightness carries meaning and one warm gold marks rarity.

### Primary
- **Commit Green** (l4): the "ready" fill of a cell whose form is unlocked, the Copy button, the commit readout, active focus borders, done step marks and the selected tab underline.

### Secondary
- **Contribution Ramp** (l0 Empty Plot, l1 Seedling, l2 Canopy, l3 Leaf): the calendar fill steps. l0 means 600+ commits away, l1 up to 600, l2 up to 300, l3 up to 100, l4 reached. l3 also fills pressed filter chips and segmented buttons.

### Tertiary
- **Legendary Gold** (gold): the 1px inset ring on legendary cells; reserved for a shiny marker should the builder show one. Never a fill, never text, never decoration.

### Neutral
- **Night Forest** (ground): page ground and team log rows.
- **Forest Floor** (ground-2): band and rail surfaces, hover wash on segmented controls and icon buttons.
- **Deep Soil** (ground-3): inset wells: inputs, selects, search, code box, preview frame.
- **Rule** (rule): the default one-pixel divider and quiet borders (chips, log rows, code box).
- **Rule Strong** (rule-strong): control borders (inputs, segmented groups, ghost buttons, step marks) and the scrollbar.
- **Lichen Ink** (ink): primary text and the selected cell fill.
- **Pale Moss** (ink-2): secondary text, labels, unpressed controls, code text.
- **Muted Moss** (muted): hints, counts, placeholders, prefixes, legal text.
- **Seed Black** (on-green): text and marks placed on green fills.
- **Warning Coral** (error): field errors, team limit messages, remove-button hover.

### Named Rules
**The Ramp Is Data Rule.** The five green steps encode distance-to-evolution and nothing else. Never use l0 to l4 as decoration, and never add a sixth step.

**The Gold Is Rare Rule.** Gold marks legendary or shiny status only. If a screen shows gold, it must point at a rare Pokémon.

**The One Bright Action Rule.** The filled Commit Green button is the single primary action on a surface (Copy on the builder). Everything else is ghost, chip, link or icon.

## Typography

**Display Font:** Silkscreen (with Red Hat Mono fallback)
**Body Font:** Red Hat Text (with ui-sans-serif, system-ui)
**Label/Mono Font:** Red Hat Mono (with ui-monospace, Menlo, Consolas)

**Character:** A compact humanist sans for interface text, a matched mono for anything countable, and a single pixel face used only for the wordmark, echoing the sprites.

### Hierarchy
- **Display** (400, 24px, line-height 1): the Poke-README wordmark only.
- **Headline** (600, 24px, -0.02em): the dex title, one per page.
- **Title** (600, 15px): rail section headings (Team, Copy).
- **Body** (400, 14px, 1.5, tabular figures): default interface text; hints cap at 72ch.
- **Label** (600, 12px): field labels and step headings; controls, chips and tabs use 12px at 400 to 500.
- **Readout** (Red Hat Mono 600, 30px, -0.02em, Commit Green): the live commit count beside the scrubber.
- **Code** (Red Hat Mono 400, 12px, 1.6): the embed snippet, dex numbers (11px), counts and nickname inputs.

### Named Rules
**The Mono Figures Rule.** Every number a visitor reads (commits, dex no., level, team count, result count) is set in Red Hat Mono or with tabular figures. Numbers never wobble when they change.

**The One Pixel Face Rule.** Silkscreen is the wordmark. It is not a heading face, button face or label face.

## Layout

A full-height three-region grid: a top **band** spanning the width (wordmark, username, commit scrubber, language), a **dex** taking the remaining width, and a **rail** of clamp(480px, 42vw, 820px) on the right holding preview, team and code. The dex and rail scroll independently inside a 100dvh shell.

The dex grid is auto-fill columns of fixed square cells (72px) with 4px gaps, broken into generation groups by full-width labels. Spacing follows a 4px base: 4 / 8 / 12 / 16 / 24 / 32. Band padding is 16px by 24px; rail sections and the dex pad 20px by 24px.

At 1101px and up, the code section sticks to the bottom of the rail so Copy stays reachable as the team grows. At 1100px and below, the grid stacks to band, dex, rail with page scroll, and a fixed jump button (team count + Copy) appears at bottom right once a Pokémon is picked. At 640px and below, gutters drop to 16px, cells shrink to 66px, the band becomes one column, the ramp legend hides and team rows wrap the nickname under the name.

### Named Rules
**The Calendar Grid Rule.** Pokémon are always presented as equal square cells in a dense grid, never as cards or a list. Cell size is the only thing that changes across breakpoints.

## Elevation & Depth

Flat. Depth comes from three tonal grounds (Deep Soil wells below Night Forest below Forest Floor panels) and one-pixel rules, never from drop shadows. Rings drawn as inset box-shadows are borders, not elevation, and are part of the world.

### Shadow Vocabulary
- **Legendary ring** (`box-shadow: inset 0 0 0 1px var(--gold)`): marks a legendary cell.
- **Selected ring** (`box-shadow: inset 0 0 0 2px var(--l4)`): marks a picked cell on its ink fill.

### Named Rules
**The Ruled Not Lifted Rule.** Separate things with a 1px rule or a ground change. If something seems to need a drop shadow, it needs a rule instead.

## Shapes

Square by doctrine. Every container, control, cell, chip and button uses a 2px corner (`rounded.r`); swatches and the selected-cell mark are square. Borders are 1px solid (rule or rule-strong); the only exceptions are the 2px selected-tab underline, the 2px selected-cell ring and a dashed 1px outline for the empty team placeholder. Icons are 16px stroke glyphs at 1.5px with square caps, drawn in currentColor.

Sprites (PMD SpriteCollab) render with `image-rendering: pixelated`. Builder slots show each sprite at up to 2x its native canvas, capped to 64px. On the card, size follows the Pokémon's real height on a log scale (about 20px for 0.1 m up to 150px for 20 m+), feet on the ground line, so relative size reads like the games.

### Named Rules
**The Two Pixel Ceiling Rule.** No radius above 2px, anywhere. No pills, no circles.

**The Native Canvas Rule.** Never normalize sprite sizes and never smooth them. Scale by whole integers on the card; the canvas size is the species' size.

## Components

### Buttons
Quiet, ruled controls with one bright exception.
- **Shape:** 2px corner.
- **Primary (Copy):** full-width, 44px tall, Commit Green fill with Seed Black 600 text and a leading 16px copy icon. Hover lifts to a lighter green; active nudges down 1px; disabled drops to the l0 fill with muted text.
- **Ghost:** 12px Pale Moss text, 1px rule-strong border, 4px by 8px padding; hover turns the border Commit Green and the text ink.
- **Icon:** 28px square, no border, Pale Moss glyph; hover fills Forest Floor; disabled at 0.3 opacity. Remove turns coral on hover.
- **Link:** 12px Commit Green underlined (3px offset); hover goes to ink.
- **Focus:** every control shows a 2px ink outline at 2px offset.

### Chips and Segmented Filters
- **Style:** 12px Pale Moss text. Chips sit on a 1px rule border with 4px gaps; segmented groups share one rule-strong border with 1px internal dividers.
- **State:** pressed fills Leaf green (l3) with Seed Black text. Hover brightens the text and, on segments, washes Forest Floor.

### Inputs / Fields
- **Style:** Deep Soil well, 1px rule-strong border, 2px corner, 13px Red Hat Mono text. The username field carries a muted `github.com/` prefix inside the well.
- **Focus:** border turns Commit Green; the caret is Commit Green.
- **Status:** a 12px line under the field, Commit Green when the user is found, coral on error.
- **Inline nickname:** borderless, with a 1px rule underline that turns Commit Green on focus.

### Commit Scrubber (signature)
A range input whose 8px track is the contribution ramp itself in five equal hard-stop bands, with a 14 by 22px ink thumb outlined in ground. The 30px Commit Green mono readout sits beside its label, and a ghost "use mine" button restores the fetched count.

### Dex Cell (signature)
A 72px square button on its ramp fill (l0 to l4) holding a 64px pixel sprite. Hover lifts the sprite 2px and reveals a 10px mono dex number in the corner. Legendary cells carry the gold ring. Selected cells flip to an ink fill with a 2px Commit Green ring and a 6px square Seed Black mark top right. When the team is full, unselected cells drop to 0.4 opacity.

### Step Marks (signature)
18px square numbered marks (1 who, 2 team, 3 copy) in 11px mono, 1px rule-strong border. Current step: Commit Green border and numeral. Done step: solid Commit Green with Seed Black numeral.

### Team Log Line (signature)
Each pick is a row like a git log line: 64px sprite, mono dex no., name, mono level in Commit Green, inline nickname, then up / down / remove icon buttons. Rows sit on Night Forest with a 1px rule border, are draggable (0.4 opacity while dragging, Commit Green border on the drop target) and reorderable by arrow buttons.

### Code Block and Tabs
- **Tabs:** 12px muted text with a 2px transparent underline that overlaps the 1px rule; selected is ink with a Commit Green underline.
- **Code box:** Deep Soil well, 1px rule border, 12px mono Pale Moss text, wraps and breaks long URLs; an empty state shows a muted em dash.

### Preview Frame
A 4:1 Deep Soil well with a 1px rule border that shows the live SVG card (smoothed, since the card does its own integer scaling) and fades to 0.45 opacity while loading.

## Do's and Don'ts

### Do:
- **Do** fill cells only from the five-step ramp (l0 to l4), stepped by commits remaining: 600+, up to 600, up to 300, up to 100, reached.
- **Do** separate regions with 1px rules (rule, rule-strong) and the three ground tones.
- **Do** set every number, dex number and code string in Red Hat Mono or with tabular figures.
- **Do** keep Commit Green (l4) as the single filled primary action per surface.
- **Do** render sprites pixelated, capped to 64px in builder slots and sized by real height on the card.
- **Do** use the cubic-bezier(0.16, 1, 0.3, 1) ease at 120 to 220ms for state changes, and drop all durations to 0 under reduced motion.

### Don't:
- **Don't** use drop or blur shadows for depth; inset 1 to 2px rings are borders and stay allowed.
- **Don't** round anything past 2px.
- **Don't** use gold for anything but legendary or shiny status.
- **Don't** normalize, smooth or non-integer-upscale sprites.
- **Don't** use Silkscreen beyond the wordmark.
- **Don't** present Pokémon as cards or a list; they are calendar cells.
