import type { VariantSpec } from "./base";
import { ago } from "./base";

export const SIDEBAR_EXPANSION_VARIANTS: VariantSpec[] = [
  // ── DOCKS ──
  {
    id: "dock-macos-interactive",
    title: "macOS Interactive Floating Dock",
    description: "Fluid macOS magnification dock with smooth spring icon scaling and ambient reflections.",
    categorySlug: "docks",
    tags: ["dock", "macos", "magnification", "framer-motion", "navigation"],
    previewKind: "dock-menu",
    featured: 10,
    createdAt: ago(1),
    likes: 4200,
    views: 52000,
    authorIdx: 0,
    prompt: "Interactive macOS dock with cursor proximity magnification.",
    code: `export function MacOSDock() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 p-3 backdrop-blur-xl shadow-2xl">
      {["Finder", "Launchpad", "Safari", "Messages", "Music", "Settings"].map((app, i) => (
        <div key={i} className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold text-xs shadow-lg transition-transform hover:scale-125 hover:-translate-y-2 cursor-pointer">
          {app[0]}
        </div>
      ))}
    </div>
  );
}`,
  },
  {
    id: "dock-glass-minimal",
    title: "Liquid Glass Floating Action Dock",
    description: "Frosted translucent bottom dock with quick actions, badges, and haptic hover pulses.",
    categorySlug: "docks",
    tags: ["dock", "glass", "minimal", "floating", "actions"],
    previewKind: "dock-menu",
    featured: 9,
    createdAt: ago(2),
    likes: 3600,
    views: 45000,
    authorIdx: 1,
    prompt: "Floating glass action dock with quick tool triggers.",
    code: `export function GlassActionDock() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-2xl">
      <span className="text-xs text-white/80 font-medium">Tools Dock</span>
    </div>
  );
}`,
  },

  // ── FAQS ──
  {
    id: "faq-accordion-animated",
    title: "Interactive Smooth Accordion FAQ",
    description: "Polished animated FAQ list with search filtering, category badges, and smooth chevron rotation.",
    categorySlug: "faqs",
    tags: ["faq", "accordion", "questions", "animated", "support"],
    previewKind: "accordion",
    featured: 9,
    createdAt: ago(1),
    likes: 3800,
    views: 49000,
    authorIdx: 2,
    prompt: "Clean interactive FAQ accordion component with smooth expand animation.",
    code: `export function FaqAccordion() {
  const [open, setOpen] = React.useState<number | null>(0);
  const items = [
    { q: "Can I use UIForge in commercial client projects?", a: "Yes, 100% royalty-free under MIT and Commercial licenses." },
    { q: "Does it support Tailwind CSS v4 and Next.js 15?", a: "Yes, all components are tested with both Tailwind v3 and v4." },
  ];
  return (
    <div className="w-full max-w-lg space-y-3">
      {items.map((it, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
          <div className="flex justify-between items-center text-sm font-semibold text-white">
            <span>{it.q}</span>
            <span>{open === i ? "−" : "+"}</span>
          </div>
          {open === i && <p className="mt-2 text-xs text-white/70">{it.a}</p>}
        </div>
      ))}
    </div>
  );
}`,
  },

  // ── GALLERIES ──
  {
    id: "gallery-masonry-lightbox",
    title: "Masonry Mosaic Lightbox Gallery",
    description: "Responsive Pinterest-style masonry grid gallery with zoom lightbox and tag filtering.",
    categorySlug: "galleries",
    tags: ["gallery", "masonry", "lightbox", "images", "portfolio"],
    previewKind: "card-product",
    featured: 9,
    createdAt: ago(2),
    likes: 4100,
    views: 51000,
    authorIdx: 3,
    prompt: "Masonry photo gallery grid with image hover overlays.",
    code: `export function MasonryGallery() {
  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-md">
      {[1,2,3,4,5,6].map(n => (
        <div key={n} className="h-24 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-white/60 text-xs hover:scale-105 transition">
          Shot #{n}
        </div>
      ))}
    </div>
  );
}`,
  },

  // ── HOOKS ──
  {
    id: "hook-use-clipboard",
    title: "useClipboard Copy Feedback Hook",
    description: "Zero-dependency React hook for clipboard operations with automatic status timeout and fallback.",
    categorySlug: "hooks",
    tags: ["hook", "react", "clipboard", "typescript", "utilities"],
    previewKind: "code-block",
    featured: 8,
    createdAt: ago(3),
    likes: 2900,
    views: 37000,
    authorIdx: 4,
    prompt: "React custom hook for clipboard copy management with timeout reset.",
    code: `function useClipboard(timeout = 2000) {
  const [copied, setCopied] = React.useState(false);
  const copy = React.useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), timeout);
    } catch (e) {}
  }, [timeout]);
  return { copied, copy };
}

export function ClipboardHookDemo() {
  const { copied, copy } = useClipboard();
  return (
    <div className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <span className="text-xs font-mono text-neutral-300">npm i @uiforge/cli</span>
      <button
        onClick={() => copy("npm i @uiforge/cli")}
        className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold text-xs transition hover:bg-blue-500 shadow-md"
      >
        {copied ? "Copied to clipboard!" : "Copy command"}
      </button>
    </div>
  );
}`,
  },

  // ── MARQUEES ──
  {
    id: "marquee-infinite-logos",
    title: "Infinite Smooth Logo Marquee",
    description: "Continuous horizontal scrolling logo wall with gradient edge masks and pause-on-hover.",
    categorySlug: "marquees",
    tags: ["marquee", "carousel", "logos", "infinite-scroll", "animation"],
    previewKind: "scroll-hero",
    featured: 9,
    createdAt: ago(1),
    likes: 4400,
    views: 56000,
    authorIdx: 5,
    prompt: "Infinite horizontal marquee banner for partner logos with fade edges.",
    code: `export function LogoMarquee() {
  return (
    <div className="relative overflow-hidden w-full max-w-md py-4 border-y border-white/10">
      <div className="flex gap-8 whitespace-nowrap animate-marquee">
        {["Linear", "Vercel", "Stripe", "Supabase", "Raycast", "OpenAI"].map((l, i) => (
          <span key={i} className="text-sm font-bold text-white/60 uppercase tracking-widest">{l}</span>
        ))}
      </div>
    </div>
  );
}`,
  },

  // ── STATS & KPIS ──
  {
    id: "stats-metric-dashboard-cards",
    title: "SaaS Performance KPI Metrics",
    description: "High-impact KPI metric stat cards with sparklines, growth percentages, and live counters.",
    categorySlug: "stats-and-kpis",
    tags: ["stats", "kpi", "metrics", "dashboard", "analytics"],
    previewKind: "card-stat",
    featured: 9,
    createdAt: ago(2),
    likes: 3700,
    views: 48000,
    authorIdx: 6,
    prompt: "Stat metrics card with growth delta and sparkline.",
    code: `export function StatMetricCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-white">
      <div className="text-xs text-white/60">Annual Recurring Revenue</div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-2xl font-black">$2.45M</span>
        <span className="text-xs font-semibold text-emerald-400">+28.4%</span>
      </div>
    </div>
  );
}`,
  },

  // ── STEPPERS ──
  {
    id: "stepper-multi-step-wizard",
    title: "Multi-Step Onboarding Stepper",
    description: "Interactive horizontal checkout and onboarding stepper with validation badges.",
    categorySlug: "steppers",
    tags: ["stepper", "wizard", "checkout", "steps", "onboarding"],
    previewKind: "progress-bar",
    featured: 8,
    createdAt: ago(3),
    likes: 3100,
    views: 39000,
    authorIdx: 7,
    prompt: "Multi-step progress indicator with interactive completed checkmarks.",
    code: `export function StepperWizard() {
  const [current, setCurrent] = React.useState(1);
  return (
    <div className="flex items-center gap-3 w-full max-w-md">
      {["Account", "Plan", "Payment"].map((s, i) => (
        <div key={i} className="flex-1 text-center">
          <div className={\`h-2 rounded-full \${i <= current ? "bg-emerald-500" : "bg-white/10"}\`} />
          <span className="text-[10px] text-white/70 mt-1 block">{s}</span>
        </div>
      ))}
    </div>
  );
}`,
  },

  // ── TEAM SECTIONS ──
  {
    id: "team-member-grid-cards",
    title: "Executive Leadership Team Grid",
    description: "Modern team showcase with social handles, bio tooltips, and interactive photo hover states.",
    categorySlug: "team-sections",
    tags: ["team", "members", "about", "avatars", "company"],
    previewKind: "card-user-profile",
    featured: 8,
    createdAt: ago(4),
    likes: 2950,
    views: 38000,
    authorIdx: 8,
    prompt: "Team members card grid with role badges and social links.",
    code: `export function TeamMemberCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-center text-white">
      <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-lg font-bold">AT</div>
      <h4 className="mt-3 font-bold text-sm">Aditya Tripathi</h4>
      <p className="text-xs text-purple-400">Chief Architect & Founder</p>
    </div>
  );
}`,
  },

  // ── TIMELINES ──
  {
    id: "timeline-roadmap-vertical",
    title: "Vertical Product Roadmap Timeline",
    description: "Milestone timeline with glowing checkpoints, branch nodes, and release status pills.",
    categorySlug: "timelines",
    tags: ["timeline", "roadmap", "milestones", "history", "changelog"],
    previewKind: "feature-grid",
    featured: 8,
    createdAt: ago(5),
    likes: 3300,
    views: 42000,
    authorIdx: 9,
    prompt: "Vertical milestone timeline with date markers and release status.",
    code: `export function RoadmapTimeline() {
  const steps = [
    { v: "v2.0", t: "AI Generation Pipeline", done: true },
    { v: "v2.5", t: "Component Sandpack", done: true },
    { v: "v3.0", t: "Multi-Agent Canvas", done: false },
  ];
  return (
    <div className="space-y-4 border-l border-white/20 pl-4">
      {steps.map((s, i) => (
        <div key={i} className="relative">
          <span className={\`absolute -left-[21px] top-1 h-2.5 w-2.5 rounded-full \${s.done ? "bg-emerald-400" : "bg-white/40"}\`} />
          <div className="text-xs font-bold text-emerald-400">{s.v}</div>
          <div className="text-sm text-white font-medium">{s.t}</div>
        </div>
      ))}
    </div>
  );
}`,
  },

  // ── CHARTS & DATA VIZ ──
  {
    id: "chart-sparkline-analytics",
    title: "Interactive Sparkline Chart Wave",
    description: "Smooth SVG curve graph with tooltip cursor tracking and real-time interval toggles.",
    categorySlug: "charts-and-data-viz",
    tags: ["charts", "dataviz", "sparkline", "graph", "analytics"],
    previewKind: "card-stat",
    featured: 9,
    createdAt: ago(2),
    likes: 3900,
    views: 50000,
    authorIdx: 0,
    prompt: "Interactive data visualization chart card with SVG curve.",
    code: `export function SparklineChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-5 text-white">
      <div className="text-xs text-white/60 mb-2">Network Throughput</div>
      <svg viewBox="0 0 100 30" className="w-full stroke-cyan-400 fill-none stroke-2">
        <path d="M 0,25 Q 25,5 50,18 T 100,8" />
      </svg>
    </div>
  );
}`,
  },

  // ── CURSORS ──
  {
    id: "cursor-magnetic-glow",
    title: "Magnetic Fluid Cursor Glow",
    description: "Spring-damped neon cursor follower with interactive element snap and blend mode filter.",
    categorySlug: "cursors",
    tags: ["cursor", "pointer", "glow", "spring", "interaction"],
    previewKind: "btn-magnetic",
    featured: 8,
    createdAt: ago(3),
    likes: 3500,
    views: 43000,
    authorIdx: 1,
    prompt: "Fluid custom cursor follower with glow radius.",
    code: `export function MagneticCursorPreview() {
  return (
    <div className="flex h-32 w-full max-w-md items-center justify-center rounded-2xl border border-dashed border-white/20 bg-black/40 text-xs text-white/60">
      Hover anywhere inside to trigger magnetic snap
    </div>
  );
}`,
  },

  // ── DASHBOARDS ──
  {
    id: "dashboard-bento-overview",
    title: "Bento Analytics Dashboard Suite",
    description: "Complete modular dashboard layout with real-time stats, revenue charts, and active logs.",
    categorySlug: "dashboards",
    tags: ["dashboard", "bento", "analytics", "admin", "overview"],
    previewKind: "bento-grid",
    featured: 10,
    createdAt: ago(1),
    likes: 4700,
    views: 63000,
    authorIdx: 2,
    prompt: "Comprehensive dark mode dashboard bento container with live data feeds.",
    code: `export function BentoDashboard() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full max-w-md">
      <div className="rounded-xl border border-white/10 bg-slate-900 p-4 text-white">
        <div className="text-[10px] text-white/60">Active Users</div>
        <div className="text-xl font-black text-emerald-400">14,290</div>
      </div>
      <div className="rounded-xl border border-white/10 bg-slate-900 p-4 text-white">
        <div className="text-[10px] text-white/60">Server Uptime</div>
        <div className="text-xl font-black text-cyan-400">99.98%</div>
      </div>
    </div>
  );
}`,
  },

  // ── GLOBES ──
  {
    id: "globe-interactive-3d",
    title: "Three.js Interactive 3D Globe",
    description: "WebGL powered spinning Earth globe with coordinate dot arcs and location pins.",
    categorySlug: "globes",
    tags: ["globe", "3d", "threejs", "earth", "webgl"],
    previewKind: "shader-visual",
    featured: 9,
    createdAt: ago(2),
    likes: 4100,
    views: 52000,
    authorIdx: 3,
    prompt: "Interactive 3D rotating globe canvas with location arcs.",
    code: `export function InteractiveGlobe() {
  return (
    <div className="flex h-36 w-full max-w-md items-center justify-center rounded-2xl border border-cyan-500/20 bg-slate-950 text-cyan-300 font-mono text-xs">
      [3D WebGL Globe Engine · 60FPS]
    </div>
  );
}`,
  },

  // ── GRIDS & BENTO ──
  {
    id: "bento-feature-showcase-grid",
    title: "Modular Feature Showcase Bento",
    description: "Asymmetrical 4-block Bento grid spotlighting core product differentiators with rich styling.",
    categorySlug: "grids-and-bento",
    tags: ["bento", "grid", "features", "layout", "showcase"],
    previewKind: "bento-grid",
    featured: 10,
    createdAt: ago(1),
    likes: 4800,
    views: 65000,
    authorIdx: 4,
    prompt: "Asymmetrical modern bento grid with gradient borders.",
    code: `export function BentoFeatureGrid() {
  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-md">
      <div className="col-span-2 rounded-xl border border-white/10 bg-slate-900 p-4 text-white">
        <div className="text-xs font-bold text-indigo-400">AI Engine</div>
        <div className="text-sm font-semibold">Autonomous Component Synthesizer</div>
      </div>
      <div className="rounded-xl border border-white/10 bg-slate-900 p-4 text-white">
        <div className="text-xs font-bold text-emerald-400">Speed</div>
        <div className="text-sm font-semibold">Sub-20ms</div>
      </div>
    </div>
  );
}`,
  },

  // ── LISTS ──
  {
    id: "list-activity-feed-cards",
    title: "Real-time Live Activity Feed",
    description: "Compact team event log list with avatar icons, timestamps, and action pills.",
    categorySlug: "lists",
    tags: ["list", "feed", "activity", "timeline", "events"],
    previewKind: "checkbox-list",
    featured: 8,
    createdAt: ago(3),
    likes: 3100,
    views: 40000,
    authorIdx: 5,
    prompt: "Real-time team activity feed list with user status avatars.",
    code: `export function ActivityFeedList() {
  const events = [
    { user: "Sarah L.", action: "deployed v3.2 to production", time: "2m ago" },
    { user: "Alex K.", action: "approved PR #104 'Dark mode'", time: "14m ago" },
  ];
  return (
    <div className="space-y-2 w-full max-w-md">
      {events.map((e, i) => (
        <div key={i} className="flex justify-between items-center rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white">
          <span><strong className="text-indigo-400">{e.user}</strong> {e.action}</span>
          <span className="text-white/40 text-[10px]">{e.time}</span>
        </div>
      ))}
    </div>
  );
}`,
  },

  // ── ONBOARDING ──
  {
    id: "onboarding-interactive-checklist",
    title: "Product Launch Checklist Onboarding",
    description: "Interactive checklist with completion progress bar, rewarded check items, and tour tips.",
    categorySlug: "onboarding",
    tags: ["onboarding", "checklist", "tour", "welcome", "setup"],
    previewKind: "checkbox-list",
    featured: 8,
    createdAt: ago(4),
    likes: 3200,
    views: 41000,
    authorIdx: 6,
    prompt: "Gamified onboarding checklist with completion progress bar.",
    code: `export function OnboardingChecklist() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-white w-full max-w-md">
      <div className="flex justify-between items-center text-xs mb-3 font-semibold">
        <span>Getting Started</span>
        <span className="text-emerald-400">2 of 3 completed</span>
      </div>
      <div className="space-y-2 text-xs">
        <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="rounded" /> Create organization</label>
        <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="rounded" /> Connect GitHub repo</label>
        <label className="flex items-center gap-2"><input type="checkbox" className="rounded" /> Invite 1 team member</label>
      </div>
    </div>
  );
}`,
  },

  // ── PROFILES ──
  {
    id: "profile-user-badge-header",
    title: "Developer Profile Identity Header",
    description: "Rich user banner with cover gradient, verified badge, follower counts, and bio tags.",
    categorySlug: "profiles",
    tags: ["profile", "user", "avatar", "bio", "identity"],
    previewKind: "card-user-profile",
    featured: 9,
    createdAt: ago(2),
    likes: 3750,
    views: 47000,
    authorIdx: 7,
    prompt: "Developer user profile header with status tag and social links.",
    code: `export function ProfileHeader() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5 text-white w-full max-w-md">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-lg">JD</div>
        <div>
          <h4 className="font-bold text-base flex items-center gap-1.5">Jane Doe <span className="text-cyan-400 text-xs">✓</span></h4>
          <p className="text-xs text-white/60">Senior Frontend Engineer · San Francisco</p>
        </div>
      </div>
    </div>
  );
}`,
  },

  // ── PROGRESS ──
  {
    id: "progress-radial-circular-gauge",
    title: "Radial Multi-Ring Circular Gauge",
    description: "Animated SVG circular gauge with gradient strokes, center value, and status color transitions.",
    categorySlug: "progress",
    tags: ["progress", "radial", "circular", "gauge", "meter"],
    previewKind: "progress-bar",
    featured: 8,
    createdAt: ago(3),
    likes: 3400,
    views: 43000,
    authorIdx: 8,
    prompt: "Circular multi-color radial progress gauge with center percentage.",
    code: `export function RadialGauge() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-emerald-500 border-t-transparent animate-spin">
        <span className="text-sm font-bold text-white">84%</span>
      </div>
    </div>
  );
}`,
  },

  // ── SEARCH BARS ──
  {
    id: "search-command-palette-bar",
    title: "Command Palette Quick Finder Bar",
    description: "Spotlight-style floating search input with hotkey ⌘K badge, instant autocomplete, and tags.",
    categorySlug: "search-bars",
    tags: ["search", "command-k", "palette", "input", "filter"],
    previewKind: "input-search",
    featured: 9,
    createdAt: ago(1),
    likes: 4300,
    views: 55000,
    authorIdx: 9,
    prompt: "Spotlight command search bar with hotkey badge.",
    code: `export function CommandSearchBar() {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-white w-full max-w-md">
      <span className="text-xs text-white/60">Search components, tokens, docs...</span>
      <kbd className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono text-white/80">⌘K</kbd>
    </div>
  );
}`,
  },

  // ── TAGS ──
  {
    id: "tags-interactive-pill-cloud",
    title: "Dismissible Filter Pill Tag Cloud",
    description: "Interactive tag cloud with multi-selection states, remove 'x' buttons, and count badges.",
    categorySlug: "tags",
    tags: ["tags", "pills", "chips", "badges", "filters"],
    previewKind: "badge-row",
    featured: 8,
    createdAt: ago(2),
    likes: 3100,
    views: 39000,
    authorIdx: 0,
    prompt: "Dismissible multi-color filter tag pills with counter badges.",
    code: `export function FilterTagCloud() {
  return (
    <div className="flex flex-wrap gap-2">
      {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((t, i) => (
        <span key={i} className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs text-white">
          {t} <button className="hover:text-red-400">✕</button>
        </span>
      ))}
    </div>
  );
}`,
  },
];
