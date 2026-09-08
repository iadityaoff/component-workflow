# 21st-Clone — Component Audit, Bug Fix & Senior-Level Upgrade Plan

**Date:** April 19, 2026 · **Version:** 1.0 · **Scope:** Full frontend, registry, agent pipeline
**Stack:** React 18 · TypeScript 5 · Tailwind 3.4 · Vite 5 · Sandpack · Framer Motion · Lucide React

This document is the execution contract for bringing the 21st-clone marketplace to senior-level, shippable quality. It is organised in six sections that map 1:1 to the original brief.

---

## 1. Gap Analysis — Current Build vs Reference Platforms

Reference platforms benchmarked: **21st.dev/community/components**, **PrimeNG**, **Bootstrap 5.3**.

### 1.1 Coverage gaps vs reference quality

| Dimension | 21st.dev | PrimeNG | Bootstrap | This build | Gap |
|---|---|---|---|---|---|
| Unique component families | ~110 | ~90 primitives | ~40 | 47 categories / ~200 variants | Breadth OK, depth shallow in 15+ categories |
| Live-editable preview | Yes (Sandpack) | Yes (StackBlitz) | No | Yes (Sandpack + srcdoc) | Parity |
| Variant deep-linking | `?variant=` persisted | Tab state | N/A | Hash route only, no `?variant=` | Missing |
| Keyboard navigation | Full (Cmd+K, j/k, /) | Full | Partial | Cmd+K only; no j/k list nav | Missing list nav |
| Theming API | Light/dark + theme tokens | Lara/Aura/Nora themes + CSS vars | 2 themes | Light/dark only | No runtime theme-token API |
| Accessibility | WAI-ARIA APG compliant | WAI-ARIA APG compliant | WAI-ARIA APG compliant | Partial (modals, palette, tabs not compliant) | Blocking |
| Responsive preview toggle | Yes (sm/md/lg/xl) | Yes | Yes | No | Missing |
| Code tabs (TSX / JSX / HTML / Vue) | TSX + CLI copy | Multiple frameworks | HTML only | TSX only | TSX-only is fine; add CLI install string |
| Download as zip / npx install | Yes | Yes | Yes | No | Missing |
| Shareable permalink with selected variant | Yes | Yes | Hash anchors | Partial (component id yes, variant no) | Missing |
| Empty, loading, error, skeleton, disabled states for every component | Yes | Yes | Yes | ~30% coverage | Blocking for senior quality |
| RTL support | Partial | Yes | Yes | None | Missing |
| Dense / comfortable size tokens | Yes | Yes | Yes | None | Missing |
| Figma / design-token export | 21st pushes tokens | Theme Designer | No | No | Nice-to-have |
| Community actions (fork, follow author) | Yes | N/A | N/A | No | Missing |

### 1.2 Senior-level UX patterns absent today

1. No dedicated **responsive preview frame toggle** (devices: 360 / 768 / 1280 / 1536).
2. No **theme switcher inside the preview** (light / dark / system, brand hue rotation).
3. No **copy CLI command** (`npx shadcn add …` style) — only raw code copy.
4. No **keyboard shortcut legend** or `?` overlay.
5. No **fork / remix breadcrumb lineage** (parent → child variant chain).
6. **Command palette** does not expose categories, actions, or recently viewed items — only component titles.
7. No **skip-to-content** link; the sticky TopBar traps screen-reader flow.
8. No **error boundary per preview** — a single bad iframe can blank the card (react-error-boundary is installed but unused).
9. No **offline fallback / service worker**; Sandpack fails silently on dropped network.
10. No **route-level code splitting**; all pages ship in the main bundle.

### 1.3 Design-polish gaps vs reference bar

- Cards currently use a flat `bg-white dark:bg-ink-900` with a soft shadow. The reference bar uses **layered surfaces** (glass + gradient mesh + subtle ring) so featured cards feel premium.
- Hero, CTA, and Pricing previews rely on plain solid fills. Reference builds use **gradient meshes, conic gradients, animated dot/grid masks, and subtle noise** for depth.
- Icon usage is inconsistent — some places use single characters (`×`, `+`, arrow glyphs) where Lucide SVG icons should be used. Per the new requirement, every glyph must be a vector icon (see Section 4.6).

---

## 2. Bug Fix List — Prioritised, With Fixes

Legend: **P0** = blocks ship, **P1** = ship-within-sprint, **P2** = polish.

### 2.1 P0 — Correctness, Safety, A11y

| # | File · Line | Bug | Fix |
|---|---|---|---|
| B-01 | `src/components/LazyCardPreview.tsx:116` | iframe `srcdoc` embeds raw code with `sandbox="allow-scripts"` — no CSP, no Trusted-Types. Arbitrary JS can hit analytics, read location, attempt network. | Add `sandbox="allow-scripts allow-same-origin"` removed; keep `allow-scripts` only. Wrap preview HTML with a strict CSP meta (`default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'`). Escape `</script>` sequences. See code in Section 4.1. |
| B-02 | `src/components/RemixModal.tsx` | No `role="dialog"`, no `aria-modal="true"`, no focus trap, no focus return. Escape handler exists but nothing else. | Replace with shared `<Dialog>` primitive (Section 4.2) that implements WAI-ARIA APG dialog pattern. |
| B-03 | `src/components/CommandPalette.tsx` | Results list built of `<button>`s with no `role="listbox"` / `role="option"` / `aria-activedescendant`; screen readers cannot navigate. "No results" is silent. | Refactor to combobox + listbox pattern; add `aria-live="polite"` status region. Section 4.3. |
| B-04 | `src/components/TopBar.tsx` | "Sign in" button has no `onClick`. Renders as interactive but does nothing. | Wire to `navigate('#/signin')`; add `aria-label="Sign in"`. |
| B-05 | `src/pages/ComponentDetailPage.tsx:129` | Breadcrumb links to `#/?cat=<slug>` but the router/App never reads `cat`; dead link. | Read `cat` from hash query, hydrate `selectedCategory` in App on mount. Persist on filter change with `history.replaceState`. |
| B-06 | `src/components/RemixModal.tsx:45` | `catch (err: any)` swallows real types and surfaces with `alert()`. | Use `catch (err: unknown)`; narrow to `Error`; render inline error in modal (no `alert()`). |
| B-07 | `src/pages/ComponentDetailPage.tsx:97` | Uses `window.location.hash = …` instead of router's `navigate()` — breaks in-app nav tracking. | Import and call `navigate()` from `router.tsx`. |
| B-08 | `src/components/CodePanel.tsx:54` | `dangerouslySetInnerHTML` on highlighted code; XSS surface if highlighter ever fails open. | Pre-sanitize with DOMPurify or replace with a token-stream renderer that emits React nodes, never raw HTML. |
| B-09 | `src/components/LazyCardPreview.tsx` | IntersectionObserver never disconnected on unmount when preview already loaded (observer kept alive via closure). | In cleanup `return () => observer.disconnect();` unconditionally. |
| B-10 | Project-wide | **Text-based icons / glyph characters** (e.g. `×`, `+`, `›`, ornament chars) in Toast close button, Sidebar chevrons, breadcrumbs, empty states. Violates new icon requirement. | Replace every glyph with a Lucide SVG (`X`, `Plus`, `ChevronRight`, `ChevronDown`, `Search`, `Sparkles`, `Command`, `Heart`, `Eye`, `Copy`, `Check`, `AlertTriangle`, `Info`, `CheckCircle2`). Enforce via lint rule (Section 4.6). |

### 2.2 P1 — Performance, Routing, Consistency

| # | File · Line | Bug | Fix |
|---|---|---|---|
| B-11 | `src/components/ComponentGrid.tsx:14` | 24 live iframes in DOM simultaneously; no virtualization. | Use `@tanstack/react-virtual` (already installed) to virtualize rows; keep at most 6–8 previews live at a time. |
| B-12 | `src/components/ComponentGrid.tsx:46–58` | `AnimatePresence` re-animates every card on page flip → 24 × 300ms thrash. | Scope `AnimatePresence` to the page key (animate the grid container, not each card) or use `layout="preserve-aspect"`. |
| B-13 | `src/components/LazyCardPreview.tsx` | `rootMargin: "300px"` eagerly mounts next page. | Reduce to `50px` and bump `threshold: 0.01`. |
| B-14 | `src/components/SandpackEngine.tsx:143` | `setTimeout(…, 50)` before `setMounted(true)` — fragile. | Replace with `useLayoutEffect` + `requestAnimationFrame` for first paint sync. |
| B-15 | `src/App.tsx:51` | Debounced search refilters from scratch on every keystroke; no abort. | Add `useDeferredValue` on query; memoize filter result by `(query, category, sort)` tuple. |
| B-16 | `src/main.tsx` | All pages eager-imported. | `React.lazy` on `ComponentDetailPage`, `MagicChatPage`, `PublishPage`, `DashboardPage`; wrap with `Suspense` and a skeleton. |
| B-17 | `src/components/Toast.tsx:28` | Module-level `let nextId` persists; toasts timeout via orphan timers if host unmounts. | Track timers in a `Map<number, number>` inside the provider; clear on unmount. |
| B-18 | `src/components/Sidebar.tsx` (mobile) | Closing drawer does not clear internal filter text; stale on reopen. | Reset on `open` transition false→true. |
| B-19 | `src/components/previews/PreviewMap.tsx:69` | Missing `PreviewKind`s fall back to `Frame` silently; stub categories look broken. | Add per-category fallback (e.g. `"hero-*"` → `HeroMinimal`). Emit `console.warn` in dev. |
| B-20 | `src/data/registry/index.ts:101` | Dedup filter silently drops duplicates. | Throw in dev (`import.meta.env.DEV`) so Architect agent sees conflicts at build time. |

### 2.3 P2 — Polish

| # | File · Line | Bug | Fix |
|---|---|---|---|
| B-21 | `src/index.css` | Raw `rgb(0 0 0 / .05)` used for scrollbar + selection — not tokenised. | Map to CSS vars derived from `ink-*`. |
| B-22 | `tailwind.config.js` vs `src/index.css` | `animate-fade-in` duration mismatch (0.2s vs 0.3s). | Unify at `180ms` with `cubic-bezier(0.2, 0.8, 0.2, 1)`. |
| B-23 | `src/components/ComponentCard.tsx:168` | Hardcoded gradient `from-fuchsia-500 via-rose-500 to-amber-400`. | Move to `theme.extend.backgroundImage.gradient-featured`. |
| B-24 | `src/App.tsx` | No skip-to-content link. | Add `<a href="#main" class="sr-only focus:not-sr-only …">` as first focusable element. |
| B-25 | `src/components/Tabs.tsx` | Sort tabs are `<button>`s with no `role="tablist"` context. | Add `role="tablist"`, each button `role="tab" aria-selected`. |

### 2.4 TypeScript status

`npx tsc -b --noEmit` — **0 errors, 0 warnings.** Build is type-clean; all issues above are runtime or semantic.

---

## 3. Component & Variant Expansion Plan

### 3.1 Targets per category

Target total: **≥ 600 real variants across 47 categories** (currently ~200). Every variant must ship with the **required state matrix** (see 3.2). Categories marked `STUB` today have only label counts in `categories.ts` and **no variant code** — these are the highest priority.

| Category | Current real variants | Target | Priority | Notes |
|---|---|---|---|---|
| Heroes | 5 | 40 | P0 | Split gradient, mesh, split-screen, video-bg, product-shot, 3D, minimal, dark-mode-first, kbd-hero, docs-hero, pricing-hero. |
| Buttons | 25 | 60 | P1 | Add icon-only, icon+label, split, segmented, floating, toggle, loading, destructive confirm, menu-button, social-auth, sizes xs–xl. |
| Backgrounds | STUB | 30 | P0 | Gradient meshes, conic, dot-grid, animated SVG noise, aurora, grid-lines, radial, blurred blob, gradient text masks. Delivered as background-only variants. |
| Borders | STUB | 12 | P1 | Ringed, gradient-ring, animated-border, conic-border, dashed, glow, glass-edge. |
| Comparisons | STUB | 8 | P1 | Feature-table, slider-compare, before/after image, plan-compare, side-by-side cards. |
| Maps | STUB | 4 | P2 | Static SVG map, marker cluster, region-highlight, globe (lightweight canvas). |
| Shaders | STUB | 10 | P2 | Animated gradient shader cards using CSS `@property` + conic; no WebGL required. |
| Texts | STUB | 30 | P1 | Display, marketing headline, gradient, animated, shimmer, kerned, multi-line gradient mask. |
| Videos | STUB | 6 | P2 | Hero-video, muted autoplay card, testimonial-video, background-video with overlay. |
| Images | STUB | 20 | P1 | Masked, aspect-locked, lightbox, parallax, gallery, before-after, hover-reveal. |
| Clients | STUB | 8 | P1 | Logo-cloud, marquee, grid, trust-bar, greyscale-hover, animated-rotation. |
| File Trees | 1 | 8 | P1 | VSCode-style, nested, search-filter, drag-reorder, status-badges. |
| Icons | 1 | 12 | P1 | Lucide grid, filled/outline toggle, size scale, animated, colour-token, brand icons (SVG only). |
| Links | 1 | 10 | P1 | Inline, external (with icon), with-underline-animation, card-link, breadcrumb, disabled, skip-link. |
| Popovers | 1 | 15 | P0 | Menu, info, date, emoji, user, help, nested. Full Floating-UI behaviour. |
| Empty States | 3 | 10 | P0 | No-results, first-run, error, permission-denied, offline, empty-inbox, empty-cart. |
| Notifications | 3 | 10 | P1 | In-app, banner, stack, action, progress, undo, grouped. |
| Footers | 3 | 14 | P1 | Mini, mega, dark, newsletter, multi-column, social, legal. |
| Pricing | 3 | 18 | P0 | 3-tier, toggle monthly/annual, feature-matrix, enterprise, metered, slider-pricing. |
| Testimonials | 4 | 16 | P1 | Quote, card, avatar-grid, video, carousel, marquee, logo-attested. |
| Nav Menus | 3 | 12 | P1 | Mega, sticky, sidebar-drawer, command-trigger, breadcrumb-dropdown. |
| Scroll Areas | STUB | 8 | P2 | Custom thumb, inset, horizontal, gradient mask-edge. |
| Hooks | STUB | — | — | Reclassify: Hooks is not a visual category. Rename to "Utilities" or drop. |

### 3.2 Required State Matrix (every variant, no exceptions)

Every component variant ships with these states; missing any state fails QA.

1. **Default / rest**
2. **Hover**
3. **Focus-visible** (keyboard only; `:focus-visible` ring token)
4. **Active / pressed**
5. **Disabled** (`aria-disabled`, cursor, contrast-safe)
6. **Loading** (skeleton or spinner-in-place)
7. **Error** (destructive state, `aria-invalid` where relevant)
8. **Success** / confirmed
9. **Empty** (zero-data, first-run)
10. **RTL** (mirrors correctly under `dir="rtl"`)
11. **Dark mode**
12. **Dense** and **comfortable** density
13. **Small / medium / large** size tokens where applicable
14. **Mobile (≤640)** / **tablet (641–1024)** / **desktop (≥1025)** layouts verified

### 3.3 Naming & ID contract

- Variant id: `<category-slug>-<style>-<index>` e.g. `hero-mesh-07`, `popover-menu-02`.
- `previewKind` must exist in `PreviewMap.tsx`; otherwise Architect throws in dev.
- `categorySlug` must exist in `categories.ts`; otherwise Architect throws.
- `tags` include: style (`minimal|brutalist|glass|gradient|neumorphic|outline`), purpose (`marketing|auth|checkout|dashboard`), and density (`dense|comfy`).

### 3.4 Icon & background contract (applies to every new variant)

- **No text icons, no emojis, no placeholder images** anywhere — in code, in previews, in sample content.
- Icons must be `lucide-react` imports or hand-authored inline SVG (24×24 default, `stroke-width={1.75}`, `currentColor`).
- Backgrounds must use the tokenised palette (see Section 4.7) — one of: `bg-surface-1`, `bg-surface-2`, `bg-gradient-mesh`, `bg-gradient-aurora`, `bg-dot-grid`, `bg-glass`. No ad-hoc `from-…-to-…` inline gradients.
- Images in previews use inline SVG illustrations, not `picsum`, `placehold.co`, or emoji stand-ins.

---

## 4. Improved Component Examples (Senior-Level Code)

### 4.1 Hardened `LazyCardPreview` — safe srcdoc + CSP + error boundary

```tsx
// src/components/LazyCardPreview.tsx
import { useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

const CSP = [
  "default-src 'none'",
  "script-src 'unsafe-inline'",
  "style-src 'unsafe-inline' https://cdn.tailwindcss.com",
  "img-src data: blob:",
  "font-src data:",
].join("; ");

function buildSrcdoc(code: string): string {
  // Escape </script> so user code can't break out of the inline block.
  const safe = code.replace(/<\/script/gi, "<\\/script");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Security-Policy" content="${CSP}" />
  <script src="https://cdn.tailwindcss.com"></script>
  <style>html,body{margin:0;background:transparent;color-scheme:light dark}</style>
</head>
<body><div id="root"></div>
<script type="module">
  try { ${safe} } catch (e) {
    document.body.innerHTML =
      '<pre style="padding:12px;color:#b91c1c;font:12px ui-monospace">' + String(e) + '</pre>';
  }
</script>
</body></html>`;
}

type Props = { code: string; title: string; interactiveOnHover?: boolean };

export function LazyCardPreview({ code, title, interactiveOnHover = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { rootMargin: "50px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative h-full w-full overflow-hidden rounded-xl bg-surface-1"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Live preview of ${title}`}
    >
      <ErrorBoundary fallback={<PreviewError />}>
        {visible ? (
          <iframe
            title={`preview-${title}`}
            sandbox="allow-scripts"
            loading="lazy"
            referrerPolicy="no-referrer"
            srcDoc={buildSrcdoc(code)}
            className="h-full w-full border-0"
            style={{
              pointerEvents: interactiveOnHover && !hovered ? "none" : "auto",
            }}
          />
        ) : (
          <PreviewSkeleton />
        )}
      </ErrorBoundary>
    </div>
  );
}
```

### 4.2 Accessible `Dialog` primitive (focus trap, aria-modal, focus return)

```tsx
// src/components/ui/Dialog.tsx
import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function Dialog({ open, onClose, title, description, children }: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    returnRef.current = document.activeElement as HTMLElement | null;
    const firstFocusable = panelRef.current?.querySelector<HTMLElement>(
      'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
    return () => returnRef.current?.focus();
  }, [open]);

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") { onClose(); return; }
    if (e.key !== "Tab") return;
    const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
      'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])'
    );
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0], last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
    else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
  }, [onClose]);

  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center" onKeyDown={onKeyDown}>
      <div className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm" onClick={onClose} aria-hidden />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dlg-title"
        aria-describedby={description ? "dlg-desc" : undefined}
        className="relative w-full max-w-lg rounded-2xl bg-surface-2 p-6 shadow-2xl ring-1 ring-ink-200/60 dark:ring-ink-800"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="dlg-title" className="text-lg font-semibold text-ink-950 dark:text-ink-50">{title}</h2>
            {description && <p id="dlg-desc" className="mt-1 text-sm text-ink-600 dark:text-ink-400">{description}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-md p-1.5 text-ink-500 hover:bg-ink-100 focus-visible:ring-2 focus-visible:ring-violet-500 dark:hover:bg-ink-800"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>,
    document.body
  );
}
```

### 4.3 `CommandPalette` — WAI-ARIA combobox + listbox

```tsx
// src/components/CommandPalette.tsx (excerpt)
<div role="combobox" aria-haspopup="listbox" aria-expanded="true" aria-owns="cp-list">
  <input
    ref={inputRef}
    role="searchbox"
    aria-label="Search components"
    aria-controls="cp-list"
    aria-activedescendant={active ? `cp-opt-${active}` : undefined}
    value={q}
    onChange={(e) => setQ(e.target.value)}
  />
</div>
<ul id="cp-list" role="listbox" className="mt-2 max-h-80 overflow-auto">
  {results.length === 0 ? (
    <li role="status" aria-live="polite" className="px-4 py-6 text-center text-sm text-ink-500">
      No components match “{q}”.
    </li>
  ) : results.map((r, i) => (
    <li
      key={r.id}
      id={`cp-opt-${r.id}`}
      role="option"
      aria-selected={i === cursor}
      onMouseEnter={() => setCursor(i)}
      onClick={() => select(r)}
      className={cn(
        "flex items-center gap-3 px-4 py-2 cursor-pointer",
        i === cursor && "bg-violet-50 dark:bg-violet-950/40"
      )}
    >
      <CategoryIcon slug={r.categorySlug} className="h-4 w-4 text-ink-500" aria-hidden />
      <span className="flex-1 text-sm text-ink-900 dark:text-ink-100">{r.title}</span>
      <kbd className="rounded bg-ink-100 px-1.5 py-0.5 text-[10px] text-ink-600 dark:bg-ink-800 dark:text-ink-300">↵</kbd>
    </li>
  ))}
</ul>
```

### 4.4 Virtualised `ComponentGrid`

```tsx
// src/components/ComponentGrid.tsx
import { useVirtualizer } from "@tanstack/react-virtual";
import { useMemo, useRef } from "react";

const COLS = { base: 1, md: 2, lg: 3, xl: 4 };

export function ComponentGrid({ items }: { items: ComponentItem[] }) {
  const parentRef = useRef<HTMLDivElement>(null);
  const cols = useResponsiveCols(COLS); // small hook using matchMedia
  const rows = useMemo(() => {
    const out: ComponentItem[][] = [];
    for (let i = 0; i < items.length; i += cols) out.push(items.slice(i, i + cols));
    return out;
  }, [items, cols]);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 320,
    overscan: 3,
  });

  return (
    <div ref={parentRef} className="h-[calc(100vh-8rem)] overflow-auto">
      <div style={{ height: rowVirtualizer.getTotalSize(), position: "relative" }}>
        {rowVirtualizer.getVirtualItems().map((v) => (
          <div
            key={v.key}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", transform: `translateY(${v.start}px)` }}
            className="grid gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {rows[v.index].map((c) => <ComponentCard key={c.id} item={c} />)}
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 4.5 Tokenised Button variant system (class-variance-authority pattern, hand-rolled)

```tsx
// src/components/ui/Button.tsx
import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "destructive" | "link";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

const V: Record<Variant, string> = {
  primary:     "bg-violet-600 text-white hover:bg-violet-500 active:bg-violet-700 shadow-sm",
  secondary:   "bg-ink-100 text-ink-900 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-50 dark:hover:bg-ink-700",
  ghost:       "text-ink-800 hover:bg-ink-100 dark:text-ink-100 dark:hover:bg-ink-800",
  outline:     "border border-ink-200 text-ink-900 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-50 dark:hover:bg-ink-800",
  destructive: "bg-rose-600 text-white hover:bg-rose-500 active:bg-rose-700",
  link:        "text-violet-600 underline-offset-4 hover:underline dark:text-violet-400",
};
const S: Record<Size, string> = {
  xs: "h-7 px-2 text-xs rounded-md gap-1",
  sm: "h-8 px-3 text-sm rounded-md gap-1.5",
  md: "h-10 px-4 text-sm rounded-lg gap-2",
  lg: "h-11 px-5 text-base rounded-lg gap-2",
  xl: "h-12 px-6 text-base rounded-xl gap-2.5",
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: React.ReactNode;   // must be an SVG (Lucide or custom)
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = "primary", size = "md", loading, disabled, leftIcon, rightIcon, children, className = "", ...rest },
  ref
) {
  const isDisabled = disabled || loading;
  return (
    <button
      ref={ref}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      data-loading={loading ? "" : undefined}
      className={[
        "inline-flex items-center justify-center font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1",
        "disabled:cursor-not-allowed disabled:opacity-60",
        V[variant], S[size], className,
      ].join(" ")}
      {...rest}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : leftIcon}
      <span>{children}</span>
      {!loading && rightIcon}
    </button>
  );
});
```

### 4.6 Lint rule — no text icons, no emojis, no placeholder images

Add `eslint-plugin-no-unicode-glyphs` (custom, shown below) and a CI grep gate.

```js
// .eslintrc.cjs (excerpt)
module.exports = {
  rules: {
    "no-restricted-syntax": [
      "error",
      {
        selector: "Literal[value=/[\\u{1F300}-\\u{1FAFF}\\u{2600}-\\u{27BF}]/u]",
        message: "No emojis in source. Use a Lucide SVG icon instead.",
      },
      {
        selector: "JSXText[value=/^[×✓✗✕›‹→←↓↑•·]+$/]",
        message: "No text glyphs as icons. Import a Lucide icon.",
      },
    ],
    "no-restricted-imports": [
      "error",
      { patterns: [{ group: ["https://picsum.photos/*", "https://placehold.co/*"], message: "No placeholder images. Use inline SVG illustrations." }] },
    ],
  },
};
```

CI guard:
```bash
# scripts/check-icons.sh
grep -RInE "(picsum|placehold\.co|placekitten|placeimg)" src && { echo "Placeholder image found"; exit 1; } || true
grep -RIn $'[\xE2\x9C\x94\xE2\x9C\x97\xE2\x9C\x95\xC3\x97]' src && { echo "Text glyph found"; exit 1; } || true
```

### 4.7 Tailwind token upgrade — surfaces, gradients, density

```js
// tailwind.config.js (extend)
theme: {
  extend: {
    colors: {
      surface: {
        1: "rgb(var(--surface-1) / <alpha-value>)",
        2: "rgb(var(--surface-2) / <alpha-value>)",
        3: "rgb(var(--surface-3) / <alpha-value>)",
      },
    },
    backgroundImage: {
      "gradient-mesh": "radial-gradient(at 20% 10%, rgba(139,92,246,.18), transparent 50%), radial-gradient(at 80% 0%, rgba(236,72,153,.14), transparent 50%), radial-gradient(at 50% 100%, rgba(14,165,233,.12), transparent 50%)",
      "gradient-aurora": "conic-gradient(from 210deg at 50% 50%, #7c3aed, #0ea5e9, #22c55e, #7c3aed)",
      "dot-grid": "radial-gradient(rgb(var(--dot)/.35) 1px, transparent 1px)",
      "gradient-featured": "linear-gradient(120deg, #d946ef 0%, #f43f5e 50%, #f59e0b 100%)",
    },
    backgroundSize: { "dot-grid": "18px 18px" },
    boxShadow: {
      "card":    "0 1px 0 rgb(var(--ring)/.06), 0 4px 10px -4px rgb(var(--ring)/.12)",
      "card-lg": "0 1px 0 rgb(var(--ring)/.06), 0 20px 40px -20px rgb(var(--ring)/.25)",
      "glass":   "inset 0 1px 0 rgba(255,255,255,.08), 0 10px 30px -10px rgba(0,0,0,.4)",
    },
  },
},
```

```css
/* src/index.css */
:root { --surface-1: 255 255 255; --surface-2: 250 250 252; --surface-3: 244 244 248; --ring: 17 24 39; --dot: 17 24 39; }
.dark { --surface-1: 9 9 11; --surface-2: 17 17 20; --surface-3: 24 24 27; --ring: 244 244 248; --dot: 244 244 248; }
.glass { background: color-mix(in srgb, rgb(var(--surface-2)) 70%, transparent); backdrop-filter: blur(12px) saturate(140%); }
```

### 4.8 Shared `Icon` wrapper (consistent stroke, size, a11y)

```tsx
// src/components/Icon.tsx
import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  size?: 14 | 16 | 18 | 20 | 24;
  label?: string;          // if provided, renders role="img"; else aria-hidden
  className?: string;
}
export function Icon({ icon: I, size = 16, label, className = "" }: Props) {
  return (
    <I
      width={size}
      height={size}
      strokeWidth={1.75}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      className={`shrink-0 ${className}`}
    />
  );
}
```

---

## 5. Agent Skill Upgrade Plan — Senior-Level Pipeline

Each agent has a **charter**, **inputs**, **artifacts**, **review gates**, and **handoff** to the next agent. No agent ships without passing its gate.

### 5.1 Planner (Senior)

- **Charter:** Translate product intent into variant taxonomy, acceptance criteria, and state matrix per category.
- **Inputs:** Reference platforms (21st.dev, PrimeNG, Bootstrap), existing registry counts, brand guidelines.
- **Artifacts:** `planner/variants-<category>.yaml` with: id, title, description, tags, states required, responsive breakpoints, a11y contract, edge cases.
- **Gate:** Each plan covers the 14-state matrix (Section 3.2); IDs are unique across the repo; categorySlug exists.
- **Handoff:** Designer.

### 5.2 Designer (Senior)

- **Charter:** Own design tokens, spacing scale, typography, colour system, motion, iconography.
- **Inputs:** Planner spec, Tailwind token file, reference screenshots.
- **Artifacts:** Figma-or-code token spec committed as `design/tokens.ts`; variant spec annotated with chosen surface, density, icon set, background treatment.
- **Rules enforced:**
  - Only Lucide or custom inline SVG icons; 1.75 stroke; `currentColor`.
  - Only tokenised backgrounds (`bg-surface-*`, `bg-gradient-mesh`, `bg-gradient-aurora`, `bg-dot-grid`, `bg-glass`).
  - No emojis, no text glyphs, no placeholder images.
  - Contrast ≥ 4.5:1 (AA) for body, ≥ 3:1 for large / UI.
  - Motion respects `prefers-reduced-motion`.
- **Gate:** Token-only palette; zero inline colours; icon audit clean.
- **Handoff:** Architect.

### 5.3 Architect (Senior)

- **Charter:** Registry integrity, module boundaries, build graph, type contracts.
- **Inputs:** Designer spec.
- **Artifacts:**
  - Updated `VariantSpec` schema validated with a runtime zod parser.
  - `registry/index.ts` throws in dev on duplicate id / missing `previewKind` / missing `categorySlug`.
  - `PreviewMap.tsx` updated with a renderer for every new `previewKind`; fallback per category, not global.
  - Route-level `React.lazy` for pages; bundle-size budget file (`size-limit`).
- **Gate:** `tsc -b --noEmit` clean; dev build throws on registry mismatch; bundle budget met.
- **Handoff:** Frontend.

### 5.4 Frontend (Senior)

- **Charter:** Author variant JSX, wire interactions, implement the 14-state matrix.
- **Inputs:** Architect skeletons, Designer tokens.
- **Rules:**
  - Every interactive primitive is a native `<button>` / `<a>` / `<input>`, never a clickable `<div>`.
  - Every icon is a Lucide or custom SVG — never a glyph literal, never an emoji.
  - Every component passes keyboard-only traversal.
  - Framer Motion guarded by `prefers-reduced-motion`.
  - No new ad-hoc colours; only tokens.
- **Gate:** Storybook-style `previewKind` renders for all 14 states; axe-core scan clean at component level.
- **Handoff:** Backend (for persistence) + QA.

### 5.5 Backend (Senior)

- **Charter:** Supabase schema, auth, component CRUD, likes, AI endpoints.
- **Inputs:** Registry shape, auth UX.
- **Artifacts:**
  - `supabase/migrations/*.sql`: `profiles`, `components`, `likes`, `tags`, `views` (RLS on all).
  - Edge Functions: `generate-component` (OpenAI), `remix-component`, `search` (pgvector optional).
  - Typed client (`src/lib/supabase.ts`) with zod-validated responses.
  - Rate limits, key rotation, audit log.
- **Gate:** RLS policies tested with anon + authed roles; migration idempotent; secrets in `.env.local`, never committed; typed client is lint-clean.
- **Handoff:** Frontend (wire hooks) + QA.

### 5.6 QA (Senior)

- **Charter:** Verify every variant meets the 14-state matrix, a11y, perf, and regression budgets.
- **Toolchain:**
  - `@axe-core/playwright` for a11y across component gallery.
  - `playwright` visual-diff snapshots at 360 / 768 / 1280 / 1536.
  - `lighthouse-ci` with budget: LCP ≤ 2.0s, CLS ≤ 0.05, TBT ≤ 150ms on mid-tier laptop.
  - `size-limit` for JS budgets: app shell ≤ 180KB gz; Sandpack lazy-loaded.
  - Custom `scripts/check-icons.sh` (Section 4.6) wired into CI.
- **Gate:** Red if any of:
  - Any variant missing a state.
  - Any axe violation of level `serious` or above.
  - Any glyph/emoji/placeholder image in `src/`.
  - Any Tailwind class referencing a non-token colour.
- **Handoff:** Ship gate.

### 5.7 Collaboration contract

- **Ticket template:** `planner-id | category | variant-id | state-matrix | assets | a11y-notes`.
- **Definition of Ready:** Planner spec + Designer token spec attached.
- **Definition of Done:** Frontend merged + Backend wired (if applicable) + QA gate green.
- **Retros:** after each registry batch (e.g. Heroes batch, Backgrounds batch).

---

## 6. QA Checklist — 100% Completion Verification

### 6.1 Functionality

- [ ] Every route loads without console errors (`/`, `/component/:id`, `/magic`, `/publish`, `/dashboard`, `/signin`, `/signup`).
- [ ] Hash deep-link to a component id opens the detail page with the correct variant selected.
- [ ] Category filter persists via `?cat=` in the URL; back/forward navigates cleanly.
- [ ] Global search and Cmd+K return identical results and support Enter-to-open and arrow-key nav.
- [ ] Copy Code and Copy Prompt land in the clipboard; toast confirms within 300ms.
- [ ] Remix modal opens from Enter on card, traps focus, and returns focus on close.
- [ ] Sandpack preview renders and is interactive on hover without mouse jank.
- [ ] Like/Save persists (once backend is wired).
- [ ] Publish form validates and submits (once backend is wired).

### 6.2 Accessibility (WCAG 2.1 AA)

- [ ] Skip-to-content link present and functional as first focusable element.
- [ ] Every interactive element is a native control or has correct role/aria/keyboard behaviour.
- [ ] Every dialog is `role="dialog" aria-modal="true"` with focus trap and focus return.
- [ ] Command palette uses combobox + listbox; screen reader announces result count via `aria-live`.
- [ ] All icons are SVG with `aria-hidden="true"` unless they carry meaning, in which case `role="img" aria-label`.
- [ ] All images have alt text; decorative images use empty alt.
- [ ] Colour contrast ≥ 4.5:1 body, ≥ 3:1 UI, verified with axe.
- [ ] Focus ring visible on every control in both themes.
- [ ] `prefers-reduced-motion` disables non-essential animation.
- [ ] RTL smoke test passes on home, detail, and command palette.

### 6.3 Responsive

- [ ] Layout verified at 360, 414, 768, 1024, 1280, 1440, 1920.
- [ ] Sidebar collapses to drawer on ≤768; backdrop has `aria-hidden`.
- [ ] TopBar collapses search into icon-button trigger on ≤640.
- [ ] Detail-page tabs scroll horizontally on ≤640.
- [ ] Preview responsive-frame toggle (sm/md/lg/xl) works.

### 6.4 Performance

- [ ] Route-level code splitting in place for all non-home pages.
- [ ] Grid virtualization keeps live iframes ≤ 8 at any time.
- [ ] Sandpack bundle is lazy-loaded on Detail page only.
- [ ] Lighthouse (mobile, throttled): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90.
- [ ] `size-limit`: app shell ≤ 180KB gz.
- [ ] No memory leaks after 10-minute interaction soak.

### 6.5 Design-system consistency

- [ ] Zero inline colour values in `src/`; all via tokens.
- [ ] Zero raw `from-…-to-…` gradients outside `theme.backgroundImage`.
- [ ] One radius scale, one shadow scale, one motion scale — consistent across all variants.
- [ ] Dark mode verified on every page and variant.
- [ ] Typography uses exactly 6 sizes (`xs`, `sm`, `base`, `lg`, `xl`, `2xl`+); no one-off sizes.

### 6.6 Icon & background policy (new)

- [ ] `scripts/check-icons.sh` passes in CI.
- [ ] No emoji, no text glyphs, no placeholder image URL anywhere in `src/`.
- [ ] Every icon imports from `lucide-react` or `src/components/icons/*.tsx` (hand-authored SVG).
- [ ] Every icon uses the shared `<Icon>` wrapper with stroke 1.75 and `currentColor`.
- [ ] Every card, hero, CTA, and pricing surface uses one of the tokenised backgrounds (`bg-surface-1|2|3`, `bg-gradient-mesh`, `bg-gradient-aurora`, `bg-dot-grid`, `bg-glass`).
- [ ] Featured cards render with the tokenised `bg-gradient-featured` ring/glow; non-featured cards use `bg-surface-2` + `shadow-card`.

### 6.7 Registry coverage

- [ ] Every category in `categories.ts` has ≥ the target variant count in Section 3.1.
- [ ] Every variant has a `previewKind` that resolves in `PreviewMap.tsx`.
- [ ] Every variant carries all tags specified in the naming contract (Section 3.3).
- [ ] Every variant has the 14-state matrix (Section 3.2) implemented.
- [ ] Registry dev build throws on duplicate id / missing kind / missing slug.

### 6.8 Backend (when wired)

- [ ] RLS policies verified for anon, authed, owner roles.
- [ ] Auth flow (email + one OAuth provider) round-trips.
- [ ] Component CRUD has rate-limit and audit log.
- [ ] AI endpoints gated by rate-limit and cost ceiling; prompt/response logged for review.
- [ ] Likes are persisted, debounced, and visible across sessions.

---

**Ship gate:** A release may only be cut when every box in Section 6 is checked and the QA agent's dashboard is green for the prior 24h.
