# 21st Clone — Phase 1 (Community Components)

A working marketplace UI for an AI-powered UI-component platform, built from the
attached PRD. This is **Phase 1** of the four-phase plan: the Community
Components page (the spec calls it the "core engine").

## What's included

- **Top bar** — brand, primary nav, global search with ⌘K hint, gradient
  "Magic" CTA, theme toggle, sign-in.
- **Sidebar** — every category from the PRD with right-aligned counts, grouped
  into _Content / Sections_ and _UI Components_, with active highlight, hover
  states, an in-sidebar filter, and a mobile drawer.
- **Tabs** — Featured / Newest / Popular with a result count.
- **Component grid** — cards with live mini-previews, title, description, tags,
  author meta, and four actions: **Copy code**, **Copy prompt**, **Open**,
  **Remix with AI**.
- **Search** — full-text across title, description, tags, author and category.
- **Dark / light theme** — `class`-based, persisted to localStorage, respects
  the system preference on first load.
- **Responsive** — sidebar collapses to a slide-in drawer below `lg`.

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

```bash
npm run build      # type-check + production build
npm run preview    # serve the production build
npm run typecheck  # tsc --noEmit
```

## Project layout

```
src/
  App.tsx                         page shell + filter/sort logic
  main.tsx                        React entry
  index.css                       Tailwind + a few utilities
  lib/
    theme.tsx                     ThemeProvider + useTheme()
  data/
    categories.ts                 every category + count from the PRD
    components.ts                 sample components (one per preview kind)
  components/
    Sidebar.tsx
    TopBar.tsx
    Tabs.tsx
    ComponentGrid.tsx
    ComponentCard.tsx
    ComponentPreview.tsx          mini-previews keyed by `previewKind`
    Icon.tsx                      inline SVGs (no icon-library dep)
```

## Where to extend next (per the PRD)

| Phase | Surface area                               | Suggested entry point                      |
|-------|--------------------------------------------|--------------------------------------------|
| 2     | Component detail page (Preview / Code / Usage tabs) | New route + reuse `ComponentPreview`       |
| 2     | Live preview engine                        | Swap `ComponentPreview` for Sandpack        |
| 3     | Magic Chat (AI builder)                    | New page; wire to your LLM endpoint         |
| 4     | Remix, Publish, Profile, Dashboard, Auth   | Add routes + a real backend                 |

The component data lives in a single typed seed file (`data/components.ts`)
deliberately so it can be replaced by an API call without touching the UI.

## Design system notes

- Tailwind only — no UI-library dep. Custom `ink` neutral palette in
  `tailwind.config.js`.
- Icons are inline SVGs in `components/Icon.tsx` to keep the bundle small.
- Cards lift on hover, use `shadow-card` / `shadow-card-dark` for theme parity,
  and previews share a dotted grid background for consistent silhouette.
