import { ago } from "./base";
import type { VariantSpec } from "./base";

// ═══════════════════════════════════════════════════════════════════
// BUTTONS — 130 variants
// ═══════════════════════════════════════════════════════════════════
export const BUTTON_VARIANTS: VariantSpec[] = [
  // ── Tier 1: Core (8) ──────────────────────────────────────────
  {
    id: "btn-primary-01", title: "Primary button", description: "Solid dark button, the default action call.",
    categorySlug: "buttons", tags: ["button","primary","shadcn"],
    code: `export function Button({ 
  children = "Get started", 
  loading, 
  error,
  dense,
  disabled,
  ...props 
}) {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ink-900/30 dark:focus:ring-white/30";
  const stateClasses = [
    error ? "bg-rose-500 text-white hover:bg-rose-600" : "bg-ink-900 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100",
    (disabled || loading) ? "opacity-60 pointer-events-none" : "",
    dense ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm",
  ].filter(Boolean).join(" ");

  return (
    <button 
      className={\`\${baseClasses} \${stateClasses}\`}
      disabled={disabled || loading}
      aria-invalid={error}
      {...props}
    >
      {loading ? <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> : null}
      {children}
    </button>
  );
}`,
    prompt: "Solid primary button, dark bg, white text, hover + focus ring, dark-mode inverted.",
    previewKind: "button-primary", featured: 10, createdAt: ago(1), likes: 2800, views: 38000, authorIdx: 0,
  },
  {
    id: "btn-gradient-02", title: "Gradient CTA button", description: "Fuchsia<Icon icon={ArrowRight} size={16} />rose<Icon icon={ArrowRight} size={16} />amber gradient CTA.",
    categorySlug: "buttons", tags: ["button","gradient","cta"],
    code: `export function GradientButton({ children = "Start free trial", ...props }) {
  return (
    <button className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:brightness-110 active:scale-[0.98]" {...props}>
      {children}
    </button>
  );
}`,
    prompt: "Bold fuchsia<Icon icon={ArrowRight} size={16} />rose<Icon icon={ArrowRight} size={16} />amber gradient CTA with shadow and scale on press.",
    previewKind: "button-gradient", featured: 9, createdAt: ago(2), likes: 2400, views: 32000, authorIdx: 1,
  },
  {
    id: "btn-ghost-03", title: "Ghost button", description: "Transparent ghost for secondary actions.",
    categorySlug: "buttons", tags: ["button","ghost","secondary"],
    code: `export function GhostButton({ children = "Learn more", ...props }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-ink-700 transition hover:bg-ink-100 focus:outline-none focus:ring-2 focus:ring-ink-300 dark:text-ink-200 dark:hover:bg-ink-800" {...props}>
      {children}
    </button>
  );
}`,
    prompt: "Ghost button with transparent bg, hover fill, for secondary actions.",
    previewKind: "button-ghost", featured: 8, createdAt: ago(3), likes: 1900, views: 25000, authorIdx: 2,
  },
  {
    id: "btn-outline-04", title: "Outline button", description: "Bordered outline for secondary actions.",
    categorySlug: "buttons", tags: ["button","outline","border"],
    code: `export function OutlineButton({ children = "View details", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-ink-300 px-4 py-2 text-sm font-medium text-ink-700 transition hover:bg-ink-50 focus:outline-none focus:ring-2 focus:ring-ink-900/20 dark:border-ink-700 dark:text-ink-200 dark:hover:bg-ink-900" {...props}>
      {children}
    </button>
  );
}`,
    prompt: "Outline button with border, hover fill, focus ring.",
    previewKind: "button-outline", featured: 7, createdAt: ago(4), likes: 1600, views: 21000, authorIdx: 3,
  },
  {
    id: "btn-destructive-05", title: "Destructive button", description: "Rose/red danger button.",
    categorySlug: "buttons", tags: ["button","destructive","danger","delete"],
    code: `export function DestructiveButton({ children = "Delete permanently", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-600/30" {...props}>
      {children}
    </button>
  );
}`,
    prompt: "Destructive button in rose/red for delete actions.",
    previewKind: "button-destructive", featured: 7, createdAt: ago(5), likes: 1400, views: 19000, authorIdx: 4,
  },
  {
    id: "btn-loading-06", title: "Loading button", description: "Button with inline spinner during async ops.",
    categorySlug: "buttons", tags: ["button","loading","spinner","async"],
    code: `export function LoadingButton({ loading = true, children = "Saving changes", ...props }) {
  return (
    <button disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white transition disabled:opacity-60 dark:bg-white dark:text-ink-900" {...props}>
      {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-ink-900/30 dark:border-t-ink-900" />}
      {children}
    </button>
  );
}`,
    prompt: "Button with inline spinner in loading state, disabled opacity.",
    previewKind: "button-loading", featured: 8, createdAt: ago(2), likes: 2100, views: 28000, authorIdx: 5,
  },
  {
    id: "btn-icon-07", title: "Icon button — circle", description: "Circular icon-only button.",
    categorySlug: "buttons", tags: ["button","icon","circle","compact"],
    code: `export function IconButton({ label = "Settings", ...props }) {
  return (
    <button aria-label={label} className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-600 transition hover:bg-ink-100 focus:outline-none focus:ring-2 focus:ring-ink-900/20 dark:text-ink-300 dark:hover:bg-ink-800" {...props}>
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    </button>
  );
}`,
    prompt: "Compact circular icon button with hover bg and accessible aria-label.",
    previewKind: "button-icon", featured: 6, createdAt: ago(7), likes: 1100, views: 14000, authorIdx: 6,
  },
  {
    id: "btn-sizes-08", title: "Button size variants", description: "xs/sm/md/lg/xl sizes side-by-side.",
    categorySlug: "buttons", tags: ["button","sizes","variants","scale"],
    code: `const sizes = { xs:"px-2 py-1 text-xs", sm:"px-3 py-1.5 text-sm", md:"px-4 py-2 text-sm", lg:"px-5 py-2.5 text-base", xl:"px-6 py-3 text-lg" };
export function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {(["xs","sm","md","lg","xl"] as const).map(s => (
        <button key={s} className={\`rounded-lg bg-ink-900 font-medium text-white dark:bg-white dark:text-ink-900 \${sizes[s]}\`}>{s.toUpperCase()}</button>
      ))}
    </div>
  );
}`,
    prompt: "All 5 button sizes in a flex row for comparison.",
    previewKind: "button-sizes", featured: 6, createdAt: ago(4), likes: 1300, views: 17000, authorIdx: 7,
  },
  // ── Tier 2: Style variants (12) ──────────────────────────────────
  {
    id: "btn-pill-09", title: "Pill button", description: "Fully rounded pill-shape CTA.",
    categorySlug: "buttons", tags: ["button","pill","rounded","cta"],
    code: `export function PillButton({ children = "Subscribe now" }) {
  return <button className="rounded-full bg-ink-900 px-6 py-2 text-sm font-medium text-white transition hover:bg-ink-700 dark:bg-white dark:text-ink-900">{children}</button>;
}`,
    prompt: "Fully rounded pill-shaped button.", previewKind: "button-primary",
    featured: 5, createdAt: ago(6), likes: 900, views: 11000, authorIdx: 0,
  },
  {
    id: "btn-glass-10", title: "Glassmorphism button", description: "Frosted glass effect button.",
    categorySlug: "buttons", tags: ["button","glass","blur","frosted"],
    code: `export function GlassButton({ children = "Explore" }) {
  return (
    <button className="relative inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 active:scale-95">
      {children}
    </button>
  );
}`,
    prompt: "Glassmorphism button with backdrop-blur and border.",
    previewKind: "button-gradient", featured: 7, createdAt: ago(3), likes: 1700, views: 22000, authorIdx: 1,
  },
  {
    id: "btn-neon-11", title: "Neon glow button", description: "Neon glow effect for dark UIs.",
    categorySlug: "buttons", tags: ["button","neon","glow","dark"],
    code: `export function NeonButton({ children = "Launch app" }) {
  return (
    <button className="relative inline-flex items-center justify-center rounded-lg border border-violet-400 bg-transparent px-5 py-2.5 text-sm font-semibold text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.5)] transition hover:shadow-[0_0_25px_rgba(139,92,246,0.8)] hover:bg-violet-950/40">
      {children}
    </button>
  );
}`,
    prompt: "Neon glowing button with violet shadow, for dark UIs.",
    previewKind: "button-gradient", featured: 8, createdAt: ago(2), likes: 2200, views: 29000, authorIdx: 2,
  },
  {
    id: "btn-shimmer-12", title: "Shimmer button", description: "Animated shimmer sweep CTA.",
    categorySlug: "buttons", tags: ["button","shimmer","animation","premium"],
    code: `export function ShimmerButton({ children = "Get access" }) {
  return (
    <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition active:scale-95">
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
    </button>
  );
}`,
    prompt: "Button with an animated shimmer sweep on hover.",
    previewKind: "button-gradient", featured: 9, createdAt: ago(1), likes: 3100, views: 42000, authorIdx: 3,
  },
  {
    id: "btn-split-13", title: "Split button with dropdown", description: "Primary + dropdown arrow split.",
    categorySlug: "buttons", tags: ["button","split","dropdown","composite"],
    code: `export function SplitButton({ label = "Deploy" }) {
  return (
    <div className="inline-flex rounded-lg shadow-sm" role="group">
      <button className="rounded-l-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900">{label}</button>
      <button className="rounded-r-lg border-l border-ink-700 bg-ink-900 px-2.5 py-2 text-sm text-white transition hover:bg-ink-800 dark:border-ink-300 dark:bg-white dark:text-ink-900">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
      </button>
    </div>
  );
}`,
    prompt: "Split button with a primary action and a dropdown arrow on the right.",
    previewKind: "button-primary", featured: 6, createdAt: ago(8), likes: 1050, views: 13000, authorIdx: 4,
  },
  {
    id: "btn-toggle-group-14", title: "Toggle button group", description: "Radio-style mutually exclusive toggle.",
    categorySlug: "buttons", tags: ["button","toggle","group","radio"],
    code: `import { useState } from 'react';
export function ToggleGroup({ options = ["Day","Week","Month"] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="inline-flex rounded-lg border border-ink-200 bg-ink-50 p-1 dark:border-ink-800 dark:bg-ink-900">
      {options.map((o, i) => (
        <button key={o} onClick={() => setActive(i)} className={\`rounded-md px-3 py-1.5 text-xs font-medium transition \${i === active ? 'bg-white text-ink-900 shadow-sm dark:bg-ink-800 dark:text-white' : 'text-ink-500 hover:text-ink-900 dark:hover:text-white'}\`}>{o}</button>
      ))}
    </div>
  );
}`,
    prompt: "Mutually exclusive toggle button group with active highlight.",
    previewKind: "tabs-pill", featured: 7, createdAt: ago(3), likes: 1600, views: 20000, authorIdx: 5,
  },
  {
    id: "btn-icon-text-15", title: "Icon + text button", description: "Button with leading SVG icon.",
    categorySlug: "buttons", tags: ["button","icon","text","leading"],
    code: `export function IconTextButton({ children = "Share" }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:bg-ink-50 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200">
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
      {children}
    </button>
  );
}`,
    prompt: "Button with a leading share icon and label text.",
    previewKind: "button-ghost", featured: 6, createdAt: ago(5), likes: 1200, views: 15000, authorIdx: 6,
  },
  {
    id: "btn-trailing-icon-16", title: "Trailing icon button", description: "Button with trailing arrow icon.",
    categorySlug: "buttons", tags: ["button","icon","trailing","arrow"],
    code: `export function TrailingIconButton({ children = "Continue" }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900">
      {children}
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
    </button>
  );
}`,
    prompt: "Primary button with trailing chevron arrow icon.",
    previewKind: "button-primary", featured: 6, createdAt: ago(5), likes: 1100, views: 14000, authorIdx: 7,
  },
  {
    id: "btn-count-17", title: "Button with count badge", description: "Action button with notification count.",
    categorySlug: "buttons", tags: ["button","badge","count","notification"],
    code: `export function CountButton({ count = 12, children = "Messages" }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition hover:bg-ink-50 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200">
      {children}
      <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-500 px-1.5 text-[10px] font-semibold text-white">{count}</span>
    </button>
  );
}`,
    prompt: "Button with an inline notification count badge.",
    previewKind: "button-outline", featured: 5, createdAt: ago(9), likes: 870, views: 10000, authorIdx: 0,
  },
  {
    id: "btn-3d-18", title: "3D press button", description: "Tactile 3D depth effect button.",
    categorySlug: "buttons", tags: ["button","3d","depth","tactile"],
    code: `export function Button3D({ children = "Press me" }) {
  return (
    <button className="active:translate-y-0.5 rounded-lg border-b-4 border-ink-700 bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-ink-600 active:border-b-0 dark:border-ink-300 dark:bg-white dark:text-ink-900">
      {children}
    </button>
  );
}`,
    prompt: "Button with 3D depth via bottom border, presses down on click.",
    previewKind: "button-primary", featured: 7, createdAt: ago(4), likes: 1400, views: 18000, authorIdx: 1,
  },
  {
    id: "btn-gradient-border-19", title: "Gradient border button", description: "Transparent fill with gradient border.",
    categorySlug: "buttons", tags: ["button","gradient","border","outline"],
    code: `export function GradientBorderButton({ children = "Upgrade" }) {
  return (
    <div className="inline-flex rounded-xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 p-px">
      <button className="rounded-[11px] bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition hover:bg-ink-50 dark:bg-ink-950 dark:text-white">
        {children}
      </button>
    </div>
  );
}`,
    prompt: "Button with gradient border and transparent/white fill.",
    previewKind: "button-gradient", featured: 8, createdAt: ago(3), likes: 1900, views: 24000, authorIdx: 2,
  },
  {
    id: "btn-social-github-20", title: "GitHub sign-in button", description: "OAuth GitHub sign-in button.",
    categorySlug: "buttons", tags: ["button","oauth","github","social"],
    code: `export function GitHubButton({ children = "Sign in with GitHub" }) {
  return (
    <button className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm font-medium text-ink-800 transition hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:hover:bg-ink-800">
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
      {children}
    </button>
  );
}`,
    prompt: "GitHub OAuth sign-in button with GitHub SVG logo.",
    previewKind: "button-outline", featured: 7, createdAt: ago(5), likes: 1500, views: 19000, authorIdx: 3,
  },
];
