# Implementation Plan — 21st-Clone Senior-Level Upgrade (Complete)

**Date:** April 19, 2026 · **Version:** 2.0 (Complete) · **Owner:** Aditya
**Scope:** Full frontend, accessibility, performance, registry, backend, agent pipeline
**North Star:** Ship a production-grade component marketplace at or above the polish of 21st.dev, PrimeNG, and Bootstrap, with zero glyph/emoji/placeholder-image regressions and a green QA gate.

---

## 0. Executive Summary

We will take the current build (~200 variants, 47 categories, zero TS errors, frontend ~70% done) to a shippable state through **ten sequenced phases (Phase 0 – Phase 9)**. The plan addresses every item from `COMPONENT_AUDIT_AND_UPGRADE_PLAN.md` (sections 1–6), both "Very Important Requirements" reinforcement blocks, and the coverage gaps identified during plan review.

### Success metrics (ship gate)

- TypeScript: 0 errors.
- Lint: 0 errors; no-glyph / no-emoji / no-placeholder-image lint rules active.
- Tests: 100% of QA checklist (Section 6 of audit doc) green.
- Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90.
- axe-core: 0 serious/critical violations across gallery.
- size-limit: app shell ≤ 180KB gz; Sandpack chunk lazy-loaded.
- Registry: ≥ 600 real variants across 47 categories, each with the 14-state matrix.
- RLS: 100% of Supabase tables protected, verified with anon / authed / owner roles.

### Non-goals (this cycle)

- Native mobile apps.
- Multi-framework code output (Vue / Angular / Solid). Only TSX.
- Self-hosted Sandpack bundler.
- Multi-tenant / org accounts (single-user publishing only).

---

## 1. Decisions Locked (answers to earlier open questions)

| # | Question | Decision | Rationale |
|---|---|---|---|
| D-01 | Virtualised grid — fixed or dynamic row height? | **Fixed row height (320px)** for v1; dynamic in v2 if needed. | Safer for perf; preview frames are uniform aspect. |
| D-02 | Interactive controls for Backgrounds / Shaders previews? | **Phase 7** — add `?theme=` and `?hue=` query-params for preview iframes; not gating v1. | Keeps v1 scope clean; nice-to-have later. |
| D-03 | `Hooks` category fate | **Rename to "Utilities"** and repurpose for hook-docs cards; drop from nav in v1 if empty. | Current category is non-visual; renaming avoids confusing users. |
| D-04 | OAuth providers for first backend wave | **Email magic-link + GitHub OAuth**. | Covers dev + consumer audience with two providers. |
| D-05 | Bundle budget | **App shell ≤ 180KB gz; per-route ≤ 120KB gz; Sandpack chunk ≤ 400KB gz (lazy).** | Enforced by `size-limit` in CI. |
| D-06 | Retrofit existing ~200 variants to 14-state matrix in this cycle? | **Yes** — retrofit is Phase 5B, parallel to new variant batches. | "Do not miss any variants or states" is a hard brief requirement. |
| D-07 | Motion policy default | **Respect `prefers-reduced-motion`**; essential-only motion ON by default, decorative motion OFF under reduced-motion. | WCAG 2.3.3 + user preference. |
| D-08 | Canonical Lucide stroke weight | **1.75** everywhere (via shared `<Icon>` wrapper). | One visual standard; enforceable. |

---

## 2. Phase Timeline (sequenced, dependencies explicit)

```
┌──────────────────────────────────────────────────────────────────────┐
│ Wk1  Wk2  Wk3  Wk4  Wk5  Wk6  Wk7  Wk8  Wk9  Wk10                    │
├──────────────────────────────────────────────────────────────────────┤
│ P0 ── agents (charter, gates, runbooks)                              │
│   P1 ────── design tokens + css vars                                 │
│        P2 ──── accessible primitives (Icon/Button/Dialog/Popover)    │
│           P3 ──────── engine (perf, security, router)                │
│                 P4 ──── bug sweep (P0→P2)                            │
│              P5A ─────────────── new-batch variants (600+ target)    │
│              P5B ─────────────── existing-variant 14-state retrofit  │
│                    P6 ──── premium bg + icon application pass        │
│                       P7 ──── feature parity (responsive preview,    │
│                               theme switcher, CLI copy, shortcuts)   │
│                          P8 ──── backend (Supabase, Auth, AI)        │
│                             P9 ── QA automation + ship gate          │
└──────────────────────────────────────────────────────────────────────┘
```

Dependency rules:
- P1 blocks P2, P5A, P5B, P6.
- P2 blocks P3 (Dialog used by RemixModal, CommandPalette).
- P3 blocks P7 (router query-params used by theme switcher, deep-link).
- P5A and P5B can run in parallel by category owner.
- P9 cannot complete until P0–P8 are complete.

---

## Phase 0 — Agent Skill Upgrade & Collaboration Charter

**Goal:** Every agent operates at senior level with a charter, inputs, artifacts, review gate, and handoff contract. This is prerequisite to everything else because downstream phases reference the gates.

### 0.1 Charters (from audit doc Section 5, codified here)

| Agent | Charter summary | Artifact | Gate |
|---|---|---|---|
| **Planner** | Variant taxonomy, acceptance criteria, state matrix per category | `planner/variants-<category>.yaml` | 14-state matrix present; unique IDs; valid categorySlug |
| **Designer** | Tokens, typography, icon/background rules, motion | `design/tokens.ts`, annotated specs | No inline colours; only tokenised bg; Lucide-only icons; AA contrast |
| **Architect** | Registry integrity, module graph, type contracts, perf budgets | `registry/index.ts` dev-throws; zod `VariantSpec`; `size-limit` config | `tsc` clean; dev throws on bad spec; bundle budgets met |
| **Frontend** | Variant JSX, interactions, 14-state matrix, keyboard semantics | PR with variants + stories | axe clean at component level; keyboard-only pass |
| **Backend** | Supabase schema, auth, CRUD, AI edge fns, RLS | `supabase/migrations/*.sql`, Edge Functions | RLS tested on anon/authed/owner; rate-limit in place |
| **QA** | Automated + manual verification across all gates | axe + Playwright + Lighthouse-CI + size-limit report | No red on any gate |

### 0.2 Collaboration contract

- **Ticket template:** `planner-id | category | variant-id | state-matrix | assets | a11y-notes | owner`.
- **Definition of Ready:** Planner spec + Designer token spec + Architect skeleton attached.
- **Definition of Done:** Frontend merged + (if applicable) Backend wired + QA gate green.
- **Weekly sync cadence:** 30-min category retro at end of each batch; Architect posts dev-throw report.

### 0.3 Deliverables (Phase 0)

- [ ] `docs/agents/README.md` describing all six charters and the handoff contract.
- [ ] `docs/agents/runbooks/*.md` — one runbook per agent, with step-by-step tasks they own.
- [ ] `docs/DoR-DoD.md` — Definition of Ready / Done, linked from every PR template.
- [ ] `.github/PULL_REQUEST_TEMPLATE.md` enforcing charter/gate checkboxes.

---

## Phase 1 — Design System Foundation

**Goal:** Tokens are the only source of truth for colours, surfaces, shadows, gradients, radii, spacing, typography, and motion.

### 1.1 Tailwind token upgrade — `tailwind.config.js`

- Add `colors.surface.{1,2,3}` mapped to CSS vars.
- Add `backgroundImage`: `gradient-mesh`, `gradient-aurora`, `gradient-featured`, `dot-grid`, `grid-lines`, `noise`.
- Add `boxShadow`: `card`, `card-lg`, `glass`, `ring-brand`.
- Add `ringColor.brand` and `ringOffsetColor.surface-1`.
- Add `transitionTimingFunction.brand` = `cubic-bezier(0.2, 0.8, 0.2, 1)` and unify `animate-fade-in` to **180ms**.
- Add density plugin (`data-[density=dense]:…` variants).

### 1.2 CSS variables — `src/index.css`

- Root: `--surface-1/2/3`, `--ring`, `--dot`, `--noise-opacity`, `--motion-scale`.
- `.dark` override block.
- `@media (prefers-reduced-motion: reduce)` reduces `--motion-scale` to 0 and disables non-essential animation.
- `.glass` utility using `color-mix` + `backdrop-filter`.
- Purge raw `rgb(0 0 0 / .05)` in favour of `rgb(var(--ring)/.05)` (fixes B-21).

### 1.3 Type ramp + spacing scale

- Exactly six body sizes: `xs, sm, base, lg, xl, 2xl`, plus three display sizes `display-sm/md/lg`.
- Spacing uses the default Tailwind scale; no one-off pixel values allowed.
- Radii: `sm (6)`, `md (8)`, `lg (12)`, `xl (16)`, `2xl (20)`, `full`.
- Shadow scale: `card`, `card-lg`, `glass`. No `shadow-sm/shadow-lg` in app code.

### 1.4 Deliverables (Phase 1)

- [ ] `tailwind.config.js` updated and tokens typed in `design/tokens.ts`.
- [ ] `src/index.css` updated with CSS vars and reduced-motion rules.
- [ ] `docs/design-tokens.md` — one-page reference (no decorative imagery).

### 1.5 Gate

- [ ] Zero `from-…-to-…` inline gradients in `src/`.
- [ ] Zero raw `rgb()` / `hsl()` in component files.
- [ ] `pnpm/npm run build` shows bundle diff < +5KB gz.

---

## Phase 2 — Accessible Primitives Library

**Goal:** One WAI-ARIA-compliant primitive per interaction pattern. Every page and variant uses these; no ad-hoc modals or menus.

### 2.1 Primitives to implement (`src/components/ui/*`)

| Primitive | Pattern | Key behaviours |
|---|---|---|
| `Icon` | SVG wrapper | Lucide-only; stroke 1.75; `currentColor`; `aria-hidden` or `role="img"` |
| `Button` | Disclosure/action | variants x sizes x density; loading; leftIcon/rightIcon; `focus-visible` ring |
| `Link` | Navigation | External gets `Icon ExternalLink`; skip-link variant; disabled state |
| `Dialog` | Modal | Focus trap; focus return; `aria-modal`; Escape; portal |
| `Drawer` | Off-canvas | Same as Dialog + slide transition guarded by reduced-motion |
| `Popover` | Non-modal overlay | Floating-UI (pure JS, no dep needed) placement; outside-click; arrow |
| `Tooltip` | Hint | Delay open/close; `aria-describedby`; keyboard-accessible via focus |
| `DropdownMenu` | Menu | `role="menu"`; arrow-key roving focus; type-ahead |
| `Combobox` | CmdPalette base | `role="combobox"`, `aria-activedescendant`, listbox child |
| `Listbox` | CmdPalette/Select | `role="listbox"`, `role="option"`, `aria-selected` |
| `Tabs` | Tablist | `role="tablist"`, `role="tab"`, `aria-selected`, arrow-key nav |
| `Toast` | Live region | `role="status"` / `role="alert"`; auto-dismiss; stacked; focus-safe |
| `Tooltip` / `Badge` / `Chip` / `Kbd` | Display | Tokenised surfaces only |
| `Skeleton` | Loading | Animated shimmer; respects reduced-motion |
| `Field` | Form wrapper | Label, hint, error, `aria-describedby`, `aria-invalid` |

### 2.2 Deliverables (Phase 2)

- [ ] All 15 primitives implemented, exported from `src/components/ui/index.ts`.
- [ ] Unit stories in `src/components/ui/__stories__/*.tsx` exercising every state.
- [ ] `docs/primitives.md` with usage examples.

### 2.3 Gate

- [ ] axe-core scan of stories: zero serious/critical.
- [ ] Keyboard-only traversal of every story passes.
- [ ] No primitive uses an inline glyph, emoji, or placeholder image.

---

## Phase 3 — Core Platform Engine (Perf, Security, Router)

**Goal:** The app shell is fast, secure, and deep-linkable.

### 3.1 Security — `LazyCardPreview.tsx`

- Build `srcdoc` with strict CSP, escape `</script>`, drop `allow-same-origin` from sandbox, `referrerPolicy="no-referrer"`, `loading="lazy"`.
- Wrap iframe in `react-error-boundary` with branded fallback (Icon `AlertTriangle`, tokenised bg).
- Disconnect `IntersectionObserver` on unmount (fixes B-09).

### 3.2 Performance

- **Virtualised grid** using `@tanstack/react-virtual` with fixed 320px rows (D-01). Keep max 8 live iframes.
- **Reduce IntersectionObserver `rootMargin`** from 300px to 50px (fixes B-13).
- **Scope `AnimatePresence`** to the grid container, not each card (fixes B-12).
- **Replace Sandpack `setTimeout(…, 50)`** with `useLayoutEffect` + `requestAnimationFrame` (fixes B-14).
- **Route-level `React.lazy`** for ComponentDetailPage, MagicChatPage, PublishPage, DashboardPage, SignIn, SignUp; wrap in `Suspense` with a tokenised skeleton (fixes B-16).
- **Memoise filter** in `App.tsx` by `(query, category, sort)`; use `useDeferredValue` (fixes B-15).
- **`size-limit` config** enforcing budgets in D-05.

### 3.3 Router — `src/lib/router.tsx`

- Parse hash as `#/path?key=value&key2=value2`.
- Expose `useRouter()` with `{ route, params, query, navigate, setQuery, replaceQuery }`.
- Persist `cat`, `sort`, `q`, `variant`, `theme`, `device`, `hue` in query.
- `navigate` always uses the router; ban `window.location.hash = …` via lint rule (fixes B-07, B-05).

### 3.4 Toast memory hygiene — `Toast.tsx`

- Timers stored in a `Map<number, number>` inside the provider; cleared on unmount (fixes B-17).

### 3.5 Registry dev-guard — `registry/index.ts`

- In `import.meta.env.DEV`, throw on duplicate id, missing `previewKind`, missing `categorySlug` (fixes B-20).
- Add per-category fallback in `PreviewMap.tsx` (e.g., `hero-*` → `HeroMinimal`) and warn in dev (fixes B-19).

### 3.6 Deliverables (Phase 3)

- [ ] Hardened `LazyCardPreview` + error fallback component.
- [ ] Virtualised `ComponentGrid`.
- [ ] `router.tsx` v2 with query-param support.
- [ ] `size-limit` in CI.
- [ ] Registry guards active in dev.

### 3.7 Gate

- [ ] Lighthouse perf ≥ 90 on home at throttled mobile.
- [ ] At most 8 live iframes at any scroll position.
- [ ] Refreshing any URL restores category / sort / query / variant state.

---

## Phase 4 — Bug Fix Sweep (all P0/P1/P2 from audit)

Everything from audit doc Section 2.1–2.3 is tracked here with a ticket id.

### 4.1 P0 tickets (must ship before Phase 5)

- [ ] B-01 iframe srcdoc hardening (done in 3.1)
- [ ] B-02 Dialog primitive replaces RemixModal; modal retrofits in all pages
- [ ] B-03 CommandPalette combobox/listbox
- [ ] B-04 TopBar Sign-in button wired to `/signin`
- [ ] B-05 Breadcrumb `?cat=` link works; App hydrates filter from query
- [ ] B-06 RemixModal `catch (err: unknown)` + inline error UI; remove `alert()`
- [ ] B-07 All nav goes via `navigate()`; lint ban on `window.location.hash = …`
- [ ] B-08 CodePanel sanitisation via DOMPurify or token-stream renderer
- [ ] B-09 IntersectionObserver cleanup (done in 3.1)
- [ ] B-10 **Icon/glyph audit**: replace every `×`, `✓`, `+`, `›`, `‹`, `→`, `←`, `↓`, `↑`, `•`, `·`, arrow glyphs, and emoji throughout `src/` with Lucide icons via `<Icon>`. Add ESLint rule + `scripts/check-icons.sh` to CI.

### 4.2 P1 tickets

- [ ] B-11 Virtualise ComponentGrid (done in 3.2)
- [ ] B-12 `AnimatePresence` scoping
- [ ] B-13 `rootMargin` 50px
- [ ] B-14 Sandpack mount via `useLayoutEffect`
- [ ] B-15 `useDeferredValue` filter
- [ ] B-16 Route-level code splitting
- [ ] B-17 Toast timer map cleanup
- [ ] B-18 Sidebar mobile state reset on drawer open
- [ ] B-19 PreviewMap per-category fallback + dev warn
- [ ] B-20 Registry dev-throw

### 4.3 P2 tickets

- [ ] B-21 `index.css` raw rgb → tokens
- [ ] B-22 Animation duration unified at 180ms
- [ ] B-23 Featured gradient moved to `theme.backgroundImage.gradient-featured`
- [ ] B-24 Skip-to-content link in `App.tsx`
- [ ] B-25 Tabs `role="tablist"` + tab/aria-selected

### 4.4 Placeholder image audit (reinforcement requirement)

- [ ] `scripts/check-placeholders.sh` greps for `picsum`, `placehold.co`, `placekitten`, `placeimg`, `via.placeholder`, `loremflickr`, and generic `https://.*\.(jpg|png|webp)` from external domains. CI fails on match.
- [ ] Replace any placeholder image with hand-authored inline SVG illustration (authored under `src/components/illustrations/*.tsx`).

### 4.5 Deliverables (Phase 4)

- [ ] All 25 tickets closed with PR references.
- [ ] CI runs lint + check-icons + check-placeholders on every PR.

### 4.6 Gate

- [ ] Zero lint errors.
- [ ] Zero glyph / emoji / placeholder URL in `src/`.
- [ ] Manual keyboard-only + screen-reader pass on home, detail, palette, remix, publish, magic.

---

## Phase 5 — Registry Migration & Expansion (all 47 categories)

### 5A — New variants (stubs to real)

Target **≥ 600 variants**. Each variant ships the **14-state matrix** (rest, hover, focus-visible, active, disabled, loading, error, success, empty, RTL, dark, density, size, responsive).

**Batch 1 — Marketing Core (Week 5–6)**

- Heroes: 40 · Backgrounds: 30 · Borders: 12 · Texts: 30 · Features: 24 · CTAs: 20 · Footers: 14

**Batch 2 — UX Primitives (Week 6–7)**

- Buttons: 60 · Popovers: 15 · Empty States: 10 · Notifications: 10 · Dropdowns: 12 · Menus: 12 · Tooltips: 10

**Batch 3 — Commercial & Content (Week 7–8)**

- Pricing: 18 · Testimonials: 16 · Clients: 8 · Nav Menus: 12 · Comparisons: 8 · Announcements: already 55 (freeze)

**Batch 4 — Data / Complex UI (Week 8–9)**

- Tables: 20 · Forms: 16 · Inputs: 24 · Selects: 14 · Checkboxes: 10 · Radio Groups: 10 · Sliders: 12 · Calendars: 12 · Date Pickers: 8 · Tabs: 14 · Accordions: 14 · File Trees: 8 · File Uploads: 10 · Sidebars: 12 · Sign-ins: 8 · Sign-ups: 8

**Batch 5 — Media & Effects (Week 9)**

- Images: 20 · Videos: 6 · Maps: 4 · Shaders: 10 · Scroll Areas: 8 · Icons (gallery): 12 · Links: 10 · Carousels: 10 · AI Chats: 12 · Spinner/Loaders: 10 · Toasts: 6 · Toggles: 8 · Avatars: 10 · Badges: 10 · Numbers: 8 · Paginations: 8 · Tags: 8 · Text Areas: 10 · Docs: 8

> **Hooks** category is renamed to **Utilities** (D-03); if no card ships, hidden from the sidebar and category index.

### 5B — Existing-variant retrofit to 14-state matrix

- [ ] Inventory current ~200 variants in a spreadsheet (`docs/variants-retrofit.csv`).
- [ ] Each variant gets a row per missing state; Frontend closes rows in the same PR as new sibling variants.
- [ ] Retrofit PR passes axe + visual-diff at 4 breakpoints.

### 5C — Architect guarantees

- [ ] Every variant has `previewKind` registered in `PreviewMap.tsx`.
- [ ] Every variant's `categorySlug` exists in `categories.ts`.
- [ ] Every variant id unique (dev throw, not silent dedup).
- [ ] `zod` runtime parse of `VariantSpec` on import.

### 5D — Deliverables (Phase 5)

- [ ] Registry ≥ 600 real variants.
- [ ] All categories have ≥ target count from Section 3.1 of audit doc.
- [ ] `docs/variants-retrofit.csv` all rows = `done`.

### 5E — Gate

- [ ] Visual-diff snapshots green at 360 / 768 / 1280 / 1536.
- [ ] axe: zero serious/critical on gallery scan.
- [ ] Preview-engine kind-coverage = 100% (no `Frame` fallback in production).

---

## Phase 6 — Premium Background & Icon Application Pass

**Goal:** Every card, hero, CTA, pricing, empty state, and featured surface uses tokenised premium backgrounds; every icon goes through the `<Icon>` wrapper.

### 6.1 Background application

- [ ] `ComponentCard`: default `bg-surface-2` + `shadow-card`; featured uses `bg-gradient-featured` ring/glow; hover lifts to `shadow-card-lg` with `ring-brand`.
- [ ] Detail page header uses `bg-gradient-mesh` + `bg-dot-grid` overlay.
- [ ] Hero previews pick from: `bg-gradient-mesh`, `bg-gradient-aurora`, `bg-glass`, `bg-dot-grid`, `bg-grid-lines`, `bg-noise`.
- [ ] Empty states use `bg-surface-1` + illustration SVG + tokenised ring.
- [ ] Magic Chat page uses `bg-gradient-aurora` with `backdrop-filter: blur(32px)` for the chat panel.
- [ ] Pricing featured tier wears `bg-glass` + `bg-gradient-featured` underlay.

### 6.2 Icon application

- [ ] Replace all raw `lucide-react` usages with `<Icon icon={…} />` so stroke 1.75 and `currentColor` are guaranteed.
- [ ] Icon audit: grep `from "lucide-react"` — every hit must be inside `<Icon>` or the wrapper itself.
- [ ] Brand/category icons authored under `src/components/illustrations/*.tsx` (inline SVG, no external URLs).

### 6.3 Deliverables (Phase 6)

- [ ] All surfaces tokenised.
- [ ] `docs/background-gallery.md` — visual reference (describe, don't embed placeholders).
- [ ] ESLint rule `no-raw-lucide` added.

### 6.4 Gate

- [ ] CI `check-icons` + `check-placeholders` pass.
- [ ] `no-raw-lucide` lint rule passes.
- [ ] Visual-diff snapshots show intended premium styling (reviewed by Designer).

---

## Phase 7 — Feature Parity with Reference Platforms

**Goal:** Close the UX gaps vs 21st.dev / PrimeNG / Bootstrap identified in audit Section 1.

### 7.1 Responsive preview frame toggle

- Detail page gets a segmented control: `sm 360 / md 768 / lg 1280 / xl 1536`.
- Persisted in query (`?device=md`).
- Controls iframe width; keeps height at fixed 720px for consistency.

### 7.2 Theme switcher in preview

- Preview toolbar exposes `light / dark / system` toggle.
- Sends a `postMessage({type: "theme", value})` to the iframe; preview HTML responds by setting `html.dataset.theme`.
- Persisted in query (`?theme=dark`).

### 7.3 Brand-hue rotation

- Preview toolbar exposes a hue slider (0–360).
- Sends `postMessage({type: "hue", value})`.
- Preview overrides `--brand-hue` CSS variable. (Addresses D-02.)

### 7.4 Copy-CLI command

- Detail page shows `npx 21st-clone add <variant-id>` (or equivalent) with copy button.
- Backed by a simple registry manifest at `/api/r/<id>.json` (Phase 8).

### 7.5 Keyboard shortcut legend

- `?` opens a `Dialog` listing shortcuts: Cmd+K search, `/` search focus, `j`/`k` list nav, `Enter` open, `Esc` close, `c` copy code.
- Shortcuts implemented in `hooks/useHotkeys.ts` with scope awareness (skipped when input focused, except `Esc`).

### 7.6 RTL support

- `html[dir="rtl"]` verified on home, detail, palette, magic, publish.
- Tailwind logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`) used for padding/margin.
- Icons that imply direction (`ChevronRight`) flipped in RTL via `rtl:rotate-180`.

### 7.7 Density tokens

- `[data-density="dense" | "comfy"]` variants in Tailwind (via plugin).
- `Button`, `Input`, `Table`, `Select`, `Tabs` honour density; toggle in Dashboard preferences (Phase 8).

### 7.8 Community actions

- Detail page: `Fork` button clones variant into `/publish` form prefilled.
- Author chip links to `#/u/<handle>` page (stub page acceptable in v1).

### 7.9 Download / zip

- `Download` button exports the variant's TSX + usage snippet + readme as a zip (generated client-side with `jszip`).
- Defer if zip dependency cost too high — acceptable v2.

### 7.10 Deliverables (Phase 7)

- [ ] Preview toolbar with device / theme / hue controls.
- [ ] CLI copy string + shortcut legend.
- [ ] RTL + density verified via Playwright matrix.

### 7.11 Gate

- [ ] `?theme=dark&device=md` URL round-trips.
- [ ] `?` legend opens and all shortcuts fire.
- [ ] RTL snapshot diff shows correct mirroring.

---

## Phase 8 — Backend Integration (Supabase, Auth, AI)

### 8.1 Supabase schema (`supabase/migrations/0001_init.sql`)

- `profiles(id, handle, display_name, avatar_url, bio, created_at)`
- `components(id, slug, title, description, code, prompt, preview_kind, category_slug, tags text[], author_id, parent_id, featured, created_at, updated_at)`
- `likes(user_id, component_id, created_at, primary key (user_id, component_id))`
- `views(component_id, user_id nullable, session_id, created_at)`
- `tags(slug, name)` + `component_tags(component_id, tag_slug)`
- **RLS** on all tables:
  - `profiles`: public read; owner write.
  - `components`: public read; owner write; admin elevated.
  - `likes`: owner read/write; aggregate count via view.
  - `views`: insert-only by anyone (rate-limited via Edge Function).

### 8.2 Auth

- Email magic-link via Supabase Auth.
- GitHub OAuth provider (D-04).
- `useUser()` hook wrapping `supabase.auth.onAuthStateChange`.
- Protected routes (`/publish`, `/dashboard`, `/u/me`): redirect to `/signin?redirect=…`.

### 8.3 Edge Functions

- `generate-component` — calls OpenAI / Claude; validates output; rate-limit 10/day/user.
- `remix-component` — takes a `component_id` + prompt; returns variant; links `parent_id`.
- `search` — Postgres `ts_vector` or `pgvector` (if embeddings added).
- `registry-manifest` — serves `/api/r/<id>.json` for CLI copy (Phase 7.4).

### 8.4 Wiring

- `App.tsx` loads likes/views via hooks, optimistic UI, debounced writes.
- Publish form POSTs to `components` with zod validation and server-side sanitisation.
- Dashboard renders real user-scoped data.

### 8.5 Secrets

- `.env.local` (git-ignored); `.env.example` checked in.
- Supabase anon key + URL in frontend; service-role key **only** in Edge Functions.
- OpenAI key only in Edge Functions.

### 8.6 Deliverables (Phase 8)

- [ ] Migrations applied; RLS tested with `supabase/tests/rls.sql`.
- [ ] Auth round-trip (email + GitHub) works.
- [ ] CRUD, likes, views, generate, remix endpoints live.
- [ ] Seed script imports current registry into the DB.

### 8.7 Gate

- [ ] RLS tests green across anon / authed / owner / other-user roles.
- [ ] `supabase start` + `supabase db reset` produces an identical schema.
- [ ] No secrets in `src/`; checked by `scripts/check-secrets.sh`.

---

## Phase 9 — QA Automation & Ship Gate

### 9.1 Automated test suite

- [ ] **TypeScript:** `tsc -b --noEmit` — 0 errors.
- [ ] **Lint:** ESLint with custom rules (`no-glyph`, `no-emoji`, `no-raw-lucide`, `no-placeholder-image`, `no-window-location-hash`) — 0 errors.
- [ ] **Unit (Vitest):** coverage ≥ 70% on `src/components/ui/*` and `src/hooks/*`.
- [ ] **a11y (@axe-core/playwright):** run across story gallery + key pages; 0 serious/critical.
- [ ] **Visual diff (Playwright):** 4 viewports x key pages; threshold 0.1%.
- [ ] **Performance (Lighthouse-CI):** mobile preset; budgets from Section 0.
- [ ] **Bundle (size-limit):** budgets from D-05.
- [ ] **Icons / placeholders / secrets:** grep gates from Phases 4 + 8.

### 9.2 Manual verification matrix

| Scenario | Device | AT | Outcome |
|---|---|---|---|
| Home → filter → open variant | Desktop | — | Deep-link reproduces state |
| Cmd+K search → Enter open | Desktop | VoiceOver | Announces results + nav |
| Remix modal open/close | Desktop | NVDA | Focus trap + return |
| Sidebar drawer open/filter/close | 360px | VoiceOver iOS | Announces state |
| Publish form validation | Desktop | VoiceOver | Errors announced |
| Theme + device + hue roundtrip | Desktop | — | URL persists |
| Reduced-motion on | Desktop | — | No decorative animation |
| RTL smoke | Desktop | — | Layout mirrors; icons flip where needed |

### 9.3 CI pipeline

```
lint → typecheck → unit → build (size-limit) → a11y (playwright) → visual-diff → lighthouse-ci → check-icons → check-placeholders → check-secrets
```

Any stage fails → PR blocked.

### 9.4 Ship gate checklist (executive)

- [ ] Every box in audit doc Section 6 checked.
- [ ] All Phase 0–8 deliverables marked done.
- [ ] QA dashboard green for 24h.
- [ ] Changelog + release notes drafted.
- [ ] Rollback plan (previous Vercel deployment pinned).

---

## 3. File-by-File Change Map

### Modified files

| File | Type of change |
|---|---|
| `tailwind.config.js` | Tokens, gradients, shadows, radii, timing, density plugin |
| `src/index.css` | CSS vars, reduced-motion, `.glass`, remove raw rgb |
| `src/App.tsx` | Skip-to-content, query-param filter hydration, deferred value, lazy routes |
| `src/main.tsx` | Router v2 bootstrap |
| `src/lib/router.tsx` | Query-param parsing, `useRouter`, `navigate` |
| `src/components/ComponentCard.tsx` | Tokenised surfaces, featured ring, Icon wrapper |
| `src/components/ComponentGrid.tsx` | Virtualization, scoped AnimatePresence |
| `src/components/LazyCardPreview.tsx` | CSP, sandboxing, error boundary, IO cleanup |
| `src/components/SandpackEngine.tsx` | `useLayoutEffect` + `rAF` mount |
| `src/components/CommandPalette.tsx` | combobox/listbox, `aria-live` empty state |
| `src/components/Sidebar.tsx` | Mobile state reset, Icon wrapper |
| `src/components/TopBar.tsx` | Sign-in wiring, Icon wrapper |
| `src/components/Toast.tsx` | Timer map cleanup, role=status/alert, Icon wrapper |
| `src/components/RemixModal.tsx` | Uses `Dialog` primitive; inline errors; no `alert()` |
| `src/components/CodePanel.tsx` | Sanitised highlighter, copy-CLI affordance |
| `src/components/UsagePanel.tsx` | Add `npx` install string, Icon wrapper |
| `src/components/Tabs.tsx` | Tablist roles, arrow-key nav |
| `src/components/previews/PreviewMap.tsx` | Per-category fallback, dev warn |
| `src/components/previews/AllPreviews.tsx` | Icon + token sweep |
| `src/pages/ComponentDetailPage.tsx` | Toolbar (device/theme/hue), router-based nav, related via query |
| `src/pages/MagicChatPage.tsx` | Uses Dialog/Icon primitives, real AI wiring (Phase 8) |
| `src/pages/PublishPage.tsx` | zod validation, Supabase submit |
| `src/pages/DashboardPage.tsx` | Real user data (Phase 8) |
| `src/data/registry/index.ts` | Dev-throw, zod parse |
| `src/data/categories.ts` | Hooks → Utilities, counts from registry only |

### New files

| File | Purpose |
|---|---|
| `src/components/ui/Icon.tsx` | Shared SVG icon wrapper (Phase 2) |
| `src/components/ui/Button.tsx` | Variant/size/density button |
| `src/components/ui/Dialog.tsx` | Accessible modal |
| `src/components/ui/Drawer.tsx` | Off-canvas |
| `src/components/ui/Popover.tsx` | Non-modal overlay |
| `src/components/ui/Tooltip.tsx` | Hint |
| `src/components/ui/DropdownMenu.tsx` | Menu |
| `src/components/ui/Combobox.tsx` + `Listbox.tsx` | CmdPalette base |
| `src/components/ui/Tabs.tsx` | Tablist pattern |
| `src/components/ui/Toast.tsx` | Live-region toasts |
| `src/components/ui/Field.tsx` | Form field |
| `src/components/ui/Skeleton.tsx` | Loading |
| `src/components/ui/Kbd.tsx` | Keyboard key display |
| `src/components/illustrations/*.tsx` | Inline-SVG illustrations replacing any placeholder |
| `src/hooks/useHotkeys.ts` | Shortcut engine |
| `src/hooks/useReducedMotion.ts` | Preference wrapper |
| `src/hooks/useResponsiveCols.ts` | Virtualised grid column calc |
| `src/hooks/useUser.ts` | Supabase auth wrapper (Phase 8) |
| `src/lib/supabase.ts` | Typed client (Phase 8) |
| `src/lib/zod.ts` | Shared zod schemas |
| `src/data/registry/batches/hero.ts` ... | One file per category for batch 1–5 |
| `supabase/migrations/0001_init.sql` | Schema |
| `supabase/functions/generate-component/*` | Edge Function |
| `supabase/functions/remix-component/*` | Edge Function |
| `supabase/functions/search/*` | Edge Function |
| `supabase/functions/registry-manifest/*` | CLI manifest |
| `scripts/check-icons.sh` | Glyph grep gate |
| `scripts/check-placeholders.sh` | Placeholder image grep gate |
| `scripts/check-secrets.sh` | Secret grep gate |
| `.eslintrc.cjs` | Custom rules (no-glyph, no-emoji, no-raw-lucide, no-placeholder-image, no-window-location-hash) |
| `.size-limit.cjs` | Bundle budgets |
| `playwright.config.ts` | Browsers + viewports |
| `tests/a11y/*.spec.ts` | axe-core integration |
| `tests/visual/*.spec.ts` | Visual diff |
| `tests/e2e/*.spec.ts` | User journeys |
| `docs/agents/README.md` | Agent charters |
| `docs/agents/runbooks/*.md` | Agent runbooks |
| `docs/primitives.md` | Primitive usage |
| `docs/design-tokens.md` | Tokens reference |
| `docs/variants-retrofit.csv` | Retrofit inventory |
| `.github/PULL_REQUEST_TEMPLATE.md` | Gate checklist |

### Removed / retired files

| File | Reason |
|---|---|
| `src/components/ComponentPreview.tsx` (if unused after Sandpack + Lazy refactor) | Confirm dead; delete |
| `refactor.py`, `scratch.py` | One-off scripts — move to `scripts/archive/` or delete |

---

## 4. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Registry expansion introduces duplicate ids | High | Low | Dev-throw guard (B-20) + zod parse |
| Sandpack bundle bloat after preview hardening | Medium | Medium | Lazy-load Sandpack chunk only on Detail page |
| Supabase RLS misconfigured → data leak | Low | High | RLS SQL tests on CI; manual red-team on staging |
| `prefers-reduced-motion` regressions | Medium | Low | Central `useReducedMotion` hook + axe check |
| Visual-diff flakiness in CI | High | Low | Fixed viewports; deterministic fonts; `waitFor` on iframe `load` |
| OpenAI/Claude cost overrun | Medium | Medium | Rate-limit per user + daily cost cap alert |
| Third-party placeholder URLs sneak in via AI-generated variants | Medium | Medium | CI grep gate (`check-placeholders.sh`) + pre-commit hook |

---

## 5. Open Items (zero — all decisions locked)

All previously open questions are resolved in Section 1 decisions D-01 … D-08. New questions discovered during execution must go through the Planner with a D-0X extension of the decision log.

---

## 6. Cross-Reference Back to Requirements

| Original brief item | Where covered |
|---|---|
| 1. Analyze project structure, components, gaps | Audit doc Section 1 + this plan Section 0 / Phase 5 inventory |
| 2. Fix all bugs, errors, inconsistencies | Phase 4 (25 tickets) + Phase 3 hardening |
| 3. Create and expand components / variants across all categories | Phase 5A (batches 1–5) + Phase 5B retrofit |
| 4. No missing variants / edge cases / states / responsive / a11y | Phase 5 14-state matrix + Phase 7 RTL + density + Phase 9 axe/visual |
| 5. Upgrade all agents to senior with collaboration | Phase 0 charters + DoR/DoD + PR template |
| All actions and interactions fully functional | Phase 4 (B-04, B-05, B-07) + Phase 8 backend wiring |
| Top-class senior-level UI/UX | Phase 1 tokens + Phase 2 primitives + Phase 6 premium pass |
| Design consistency (spacing, typography, colour) | Phase 1 Section 1.3 + Phase 6 |
| Responsive (mobile/tablet/desktop) | Phase 7.1 + Phase 9 visual-diff matrix |
| Accessibility (WCAG basics) | Phase 2 primitives + Phase 4 B-02/B-03/B-24 + Phase 9 axe |
| Performance (lazy, efficient rendering) | Phase 3 + size-limit + Lighthouse-CI |
| No text icons, emojis, placeholder images | Phase 4.1 B-10 + Phase 4.4 placeholder audit + ESLint rules + CI grep |
| Always SVG icons (Lucide or custom) | Phase 6.2 + `<Icon>` wrapper + `no-raw-lucide` rule |
| Icon style / stroke / size / alignment consistent | Phase 2 Icon primitive + D-08 (stroke 1.75) |
| High-quality backgrounds (gradients, patterns, glass) | Phase 1 tokens + Phase 6.1 application |
| React + TypeScript | Existing stack retained |
| Tailwind CSS | Existing stack retained; tokens formalised |
| Component-driven + registry-based | Phase 2 primitives + Phase 5 registry expansion |
| Live preview (iframe / Sandpack) | Phase 3.1 hardening + Phase 7 toolbar |

---

**End of plan. Ready for kickoff on Phase 0.**
