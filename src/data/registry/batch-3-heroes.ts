import { ago } from "./base";
import type { VariantSpec } from "./base";

// ═══════════════════════════════════════════════════════════════════
// BATCH 3: HEROES, FEATURES, CTAs, TESTIMONIALS, FOOTERS, PRICING
// 80+ new variants across marketing/content categories
// ═══════════════════════════════════════════════════════════════════

export const BATCH_3_HEROES: VariantSpec[] = [
  // ── HEROES ──────────────────────────────────────────────────────
  {
    id: "hero-split-04", title: "Split hero with illustration", description: "Two-column hero with text left, illustration right.",
    categorySlug: "heroes", tags: ["hero","split","illustration","landing"],
    code: `import { ArrowRight } from 'lucide-react';
export function SplitHero() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12 px-8 py-20 bg-white dark:bg-ink-950">
      <div className="flex-1">
        <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-950/50 dark:text-violet-300">New in v2.0</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl text-ink-900 dark:text-white">Design systems that scale with you</h1>
        <p className="mt-4 text-lg text-ink-500 dark:text-ink-400 max-w-lg">From prototype to production in minutes. 600+ components ready to ship.</p>
        <div className="mt-8 flex gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Get started <ArrowRight className="h-4 w-4" /></button>
          <button className="rounded-xl border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 hover:bg-ink-50 dark:border-ink-800 dark:text-ink-200">Live demo</button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md h-64 rounded-2xl bg-gradient-to-br from-violet-100 via-rose-50 to-amber-50 dark:from-violet-950/40 dark:via-rose-950/30 dark:to-amber-950/20 flex items-center justify-center border border-ink-200/50 dark:border-ink-800/50">
          <div className="text-center"><div className="text-4xl font-bold text-violet-600 dark:text-violet-400">UI</div><p className="mt-1 text-xs text-ink-400">Live Preview</p></div>
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Split hero with text content on left, visual/illustration on right, badge, heading, description, dual CTAs.",
    previewKind: "hero-gradient", featured: 9, createdAt: ago(1), likes: 3800, views: 52000, authorIdx: 3,
  },
  {
    id: "hero-centered-05", title: "Centered hero with stats", description: "Hero with stats bar beneath the CTA section.",
    categorySlug: "heroes", tags: ["hero","centered","stats","social-proof"],
    code: `export function StatsHero() {
  const stats = [{ label: "Components", value: "600+" },{ label: "Downloads", value: "2.3M" },{ label: "Contributors", value: "850+" }];
  return (
    <section className="bg-white px-6 py-24 text-center dark:bg-ink-950">
      <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-6xl">The open-source component ecosystem</h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-ink-500 dark:text-ink-400">Production-grade UI components. Copy, paste, customize.</p>
      <div className="mt-8 flex justify-center gap-3">
        <button className="rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Browse components</button>
        <button className="rounded-xl border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 dark:border-ink-800 dark:text-ink-200">Star on GitHub</button>
      </div>
      <div className="mx-auto mt-16 flex max-w-lg justify-between border-t border-ink-100 pt-8 dark:border-ink-800">
        {stats.map(s => <div key={s.label}><p className="text-2xl font-bold text-ink-900 dark:text-white">{s.value}</p><p className="mt-1 text-xs text-ink-500">{s.label}</p></div>)}
      </div>
    </section>
  );
}`,
    prompt: "Centered hero with large heading, subtitle, dual CTAs, and a stats row showing metrics.",
    previewKind: "hero-gradient", featured: 8, createdAt: ago(2), likes: 3400, views: 46000, authorIdx: 0,
  },
  {
    id: "hero-video-bg-06", title: "Hero with video background", description: "Dark overlay hero with background video placeholder.",
    categorySlug: "heroes", tags: ["hero","video","dark","overlay"],
    code: `export function VideoHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/60 to-ink-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.2),transparent_60%)]" />
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">Ship beautiful products</h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-ink-300">Pixel-perfect components built by engineers, for engineers.</p>
        <button className="mt-8 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-ink-900 shadow-xl hover:bg-ink-100">Start building</button>
      </div>
    </section>
  );
}`,
    prompt: "Full-screen dark hero with gradient overlay, radial glow effect, centered heading and CTA.",
    previewKind: "hero-gradient", featured: 9, createdAt: ago(1), likes: 4100, views: 55000, authorIdx: 1,
  },
  {
    id: "hero-announcement-07", title: "Hero with announcement bar", description: "Hero with a top announcement banner.",
    categorySlug: "heroes", tags: ["hero","announcement","banner","landing"],
    code: `import { ArrowRight, Sparkles } from 'lucide-react';
export function AnnouncementHero() {
  return (
    <section className="bg-white dark:bg-ink-950">
      <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-rose-500 px-4 py-2 text-xs font-medium text-white">
        <Sparkles className="h-3.5 w-3.5" /> v3.0 is here — 200+ new components <ArrowRight className="h-3 w-3" />
      </div>
      <div className="px-8 py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-ink-900 dark:text-white">Build interfaces at the speed of thought</h1>
        <p className="mx-auto mt-5 max-w-lg text-ink-500 dark:text-ink-400">Copy-paste ready components. No config needed.</p>
        <button className="mt-8 rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink-900">Get started free</button>
      </div>
    </section>
  );
}`,
    prompt: "Hero with gradient announcement bar at top, large centered heading, and CTA button.",
    previewKind: "hero-gradient", featured: 8, createdAt: ago(3), likes: 3100, views: 42000, authorIdx: 2,
  },
  {
    id: "hero-glassmorphism-08", title: "Glassmorphism hero", description: "Hero with frosted glass card overlay.",
    categorySlug: "heroes", tags: ["hero","glass","blur","premium"],
    code: `export function GlassHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-violet-600 via-rose-500 to-amber-400 px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl">
        <h1 className="text-4xl font-bold text-white">Welcome back</h1>
        <p className="mt-3 text-white/80">Pick up where you left off</p>
        <div className="mt-6 space-y-3">
          <input placeholder="Email" className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 backdrop-blur focus:border-white/40 focus:outline-none" />
          <button className="w-full rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-ink-900 hover:bg-white/90">Continue</button>
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Glassmorphism hero with gradient background, frosted glass card containing a form.",
    previewKind: "hero-gradient", featured: 10, createdAt: ago(1), likes: 4500, views: 62000, authorIdx: 4,
  },
  {
    id: "hero-saas-09", title: "SaaS hero with product shot", description: "Hero with embedded product screenshot area.",
    categorySlug: "heroes", tags: ["hero","saas","product","screenshot"],
    code: `export function SaaSHero() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-ink-950">
      <div className="text-center">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">Trusted by 10k+ teams</span>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-ink-900 dark:text-white">Analytics that drive growth</h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-ink-500 dark:text-ink-400">Track, analyze, and optimize your product with real-time insights.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button className="rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink-900">Start free trial</button>
          <button className="rounded-xl border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 dark:border-ink-800 dark:text-ink-200">Watch demo</button>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl border border-ink-200 bg-ink-50 shadow-2xl dark:border-ink-800 dark:bg-ink-900">
        <div className="flex items-center gap-1.5 border-b border-ink-200 px-4 py-2 dark:border-ink-800">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="h-64 bg-gradient-to-br from-ink-100 to-ink-50 dark:from-ink-800 dark:to-ink-900 flex items-center justify-center text-ink-400 text-sm">Dashboard Preview</div>
      </div>
    </section>
  );
}`,
    prompt: "SaaS hero with trust badge, heading, subtitle, dual CTAs, and a browser-frame product screenshot area.",
    previewKind: "hero-gradient", featured: 9, createdAt: ago(2), likes: 3700, views: 50000, authorIdx: 5,
  },
  {
    id: "hero-waitlist-10", title: "Waitlist hero", description: "Pre-launch hero with email capture.",
    categorySlug: "heroes", tags: ["hero","waitlist","email","prelaunch"],
    code: `export function WaitlistHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center bg-ink-950 px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">Coming soon</p>
        <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">Something special is brewing</h1>
        <p className="mx-auto mt-4 max-w-md text-ink-400">Be the first to know when we launch. Early adopters get lifetime access.</p>
        <div className="mx-auto mt-8 flex max-w-sm gap-2">
          <input placeholder="Enter your email" className="flex-1 rounded-lg border border-ink-700 bg-ink-900 px-4 py-2.5 text-sm text-white placeholder:text-ink-500 focus:border-sky-500 focus:outline-none" />
          <button className="whitespace-nowrap rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-400">Join waitlist</button>
        </div>
        <p className="mt-3 text-xs text-ink-500">2,847 people already on the waitlist</p>
      </div>
    </section>
  );
}`,
    prompt: "Dark pre-launch hero with glow background, email input, join waitlist button, and social proof count.",
    previewKind: "hero-minimal", featured: 8, createdAt: ago(3), likes: 2900, views: 39000, authorIdx: 6,
  },
  {
    id: "hero-gradient-mesh-11", title: "Gradient mesh hero", description: "Hero with multi-point gradient mesh background.",
    categorySlug: "heroes", tags: ["hero","gradient","mesh","colorful"],
    code: `export function MeshHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-white dark:bg-ink-950 px-6 py-24">
      <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{background: "radial-gradient(at 20% 30%, #818cf8 0%, transparent 50%), radial-gradient(at 80% 20%, #f472b6 0%, transparent 50%), radial-gradient(at 50% 80%, #34d399 0%, transparent 50%)"}} />
      <div className="relative text-center">
        <h1 className="text-5xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-7xl">Create without limits</h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-ink-600 dark:text-ink-300">The next generation of component-driven development.</p>
        <button className="mt-8 rounded-full bg-ink-900 px-8 py-3.5 text-sm font-bold text-white shadow-lg hover:bg-ink-800 dark:bg-white dark:text-ink-900">Explore now</button>
      </div>
    </section>
  );
}`,
    prompt: "Hero with colorful gradient mesh background, centered large heading, subtitle and rounded CTA.",
    previewKind: "hero-gradient", featured: 8, createdAt: ago(2), likes: 3200, views: 44000, authorIdx: 7,
  },
  {
    id: "hero-minimal-left-12", title: "Minimal left-aligned hero", description: "Clean minimal hero with left alignment.",
    categorySlug: "heroes", tags: ["hero","minimal","left","clean"],
    code: `export function MinimalLeftHero() {
  return (
    <section className="max-w-2xl px-8 py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Open source</p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-ink-900 dark:text-white leading-[1.1]">Beautiful defaults.<br/>Zero configuration.</h1>
      <p className="mt-6 text-lg text-ink-500 dark:text-ink-400 max-w-md">Every component ships with accessibility, dark mode, and responsive design baked in.</p>
      <button className="mt-8 rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Get started</button>
    </section>
  );
}`,
    prompt: "Minimal left-aligned hero with eyebrow, multi-line heading, subtitle, and single CTA.",
    previewKind: "hero-minimal", featured: 7, createdAt: ago(4), likes: 2600, views: 35000, authorIdx: 0,
  },
  {
    id: "hero-3d-card-13", title: "Hero with 3D floating card", description: "Hero with a perspective-tilted card preview.",
    categorySlug: "heroes", tags: ["hero","3d","card","perspective"],
    code: `export function FloatingCardHero() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-16 px-8 py-24 bg-ink-950">
      <div className="flex-1">
        <h1 className="text-5xl font-bold tracking-tight text-white">Craft interfaces that delight</h1>
        <p className="mt-4 text-lg text-ink-400 max-w-md">Premium React components with pixel-perfect attention to detail.</p>
        <button className="mt-8 rounded-xl bg-violet-500 px-6 py-3 text-sm font-semibold text-white hover:bg-violet-400">Browse library</button>
      </div>
      <div className="flex-1 flex justify-center" style={{perspective: "1000px"}}>
        <div className="w-72 rounded-2xl border border-ink-700 bg-ink-900 p-6 shadow-2xl" style={{transform: "rotateY(-8deg) rotateX(4deg)"}}>
          <div className="h-4 w-20 rounded bg-ink-700" />
          <div className="mt-3 h-3 w-full rounded bg-ink-800" />
          <div className="mt-2 h-3 w-3/4 rounded bg-ink-800" />
          <div className="mt-4 h-8 w-24 rounded-lg bg-violet-500" />
        </div>
      </div>
    </section>
  );
}`,
    prompt: "Dark hero with 3D perspective-tilted card floating on the right side.",
    previewKind: "hero-gradient", featured: 8, createdAt: ago(2), likes: 3300, views: 45000, authorIdx: 1,
  },
  {
    id: "hero-typewriter-14", title: "Typewriter effect hero", description: "Hero with animated typewriter headline.",
    categorySlug: "heroes", tags: ["hero","typewriter","animation","dynamic"],
    code: `import { useState, useEffect } from 'react';
export function TypewriterHero() {
  const words = ["developers", "designers", "founders", "teams"];
  const [idx, setIdx] = useState(0);
  useEffect(() => { const t = setInterval(() => setIdx(i => (i + 1) % words.length), 2000); return () => clearInterval(t); }, []);
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-6 py-24 text-center dark:bg-ink-950">
      <div>
        <h1 className="text-5xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-6xl">Built for <span className="text-violet-500">{words[idx]}</span></h1>
        <p className="mx-auto mt-6 max-w-lg text-lg text-ink-500 dark:text-ink-400">Production-ready components that adapt to your workflow.</p>
        <button className="mt-8 rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink-900">Start building</button>
      </div>
    </section>
  );
}`,
    prompt: "Hero with cycling typewriter words in the headline, changing every 2 seconds.",
    previewKind: "hero-gradient", featured: 9, createdAt: ago(1), likes: 3900, views: 53000, authorIdx: 2,
  },

  // ── FEATURES ────────────────────────────────────────────────────
  {
    id: "feature-bento-01", title: "Bento grid features", description: "Bento-style feature grid with varied card sizes.",
    categorySlug: "features", tags: ["features","bento","grid","marketing"],
    code: `import { Zap, Shield, Palette, Code } from 'lucide-react';
export function BentoFeatures() {
  return (
    <section className="px-6 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight text-ink-900 dark:text-white">Everything you need</h2>
      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-2 rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"><Zap className="h-6 w-6 text-amber-500" /><h3 className="mt-3 font-semibold text-ink-900 dark:text-white">Lightning Fast</h3><p className="mt-2 text-sm text-ink-500">Sub-millisecond render times with zero runtime overhead.</p></div>
        <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"><Shield className="h-6 w-6 text-emerald-500" /><h3 className="mt-3 font-semibold">Secure</h3><p className="mt-2 text-sm text-ink-500">Built with security best practices.</p></div>
        <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"><Palette className="h-6 w-6 text-rose-500" /><h3 className="mt-3 font-semibold">Themeable</h3><p className="mt-2 text-sm text-ink-500">Full theming with CSS variables.</p></div>
        <div className="col-span-2 rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900"><Code className="h-6 w-6 text-sky-500" /><h3 className="mt-3 font-semibold">Developer First</h3><p className="mt-2 text-sm text-ink-500">TypeScript-native with full IntelliSense support and comprehensive documentation.</p></div>
      </div>
    </section>
  );
}`,
    prompt: "Bento-style feature grid with 4 features in varied-size cards, icons and descriptions.",
    previewKind: "feature-grid", featured: 9, createdAt: ago(1), likes: 3500, views: 47000, authorIdx: 3,
  },
  {
    id: "feature-icon-grid-02", title: "Icon feature grid", description: "3-column icon feature grid for marketing.",
    categorySlug: "features", tags: ["features","grid","icon","marketing"],
    code: `import { Layers, Globe, Cpu, Lock, Gauge, Puzzle } from 'lucide-react';
export function IconFeatureGrid() {
  const items = [
    { icon: Layers, title: "Component Library", desc: "600+ production-ready components" },
    { icon: Globe, title: "i18n Ready", desc: "Built-in RTL and localization support" },
    { icon: Cpu, title: "AI Powered", desc: "Generate and remix with natural language" },
    { icon: Lock, title: "Enterprise Grade", desc: "SOC2 compliant security standards" },
    { icon: Gauge, title: "Performance", desc: "Lighthouse 100 out of the box" },
    { icon: Puzzle, title: "Composable", desc: "Mix and match any combination" },
  ];
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(f => (
          <div key={f.title} className="group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-100 text-ink-900 transition group-hover:bg-ink-900 group-hover:text-white dark:bg-ink-800 dark:text-white dark:group-hover:bg-white dark:group-hover:text-ink-900"><f.icon className="h-6 w-6" /></div>
            <h3 className="mt-4 font-semibold text-ink-900 dark:text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-ink-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}`,
    prompt: "Six-item feature grid with icon circles that animate on hover, title and description.",
    previewKind: "feature-grid", featured: 8, createdAt: ago(2), likes: 2800, views: 38000, authorIdx: 4,
  },
  {
    id: "feature-showcase-03", title: "Feature showcase", description: "Alternating left/right feature sections.",
    categorySlug: "features", tags: ["features","showcase","alternating","marketing"],
    code: `import { BarChart3, Sparkles, Layers } from 'lucide-react';
export function FeatureShowcase() {
  const features = [
    { icon: BarChart3, title: "Real-time Analytics", desc: "Track component usage, views, and engagement metrics in real time.", color: "text-violet-500 bg-violet-50 dark:bg-violet-950/40" },
    { icon: Sparkles, title: "AI Generation", desc: "Describe what you need in plain English and get production-ready code.", color: "text-rose-500 bg-rose-50 dark:bg-rose-950/40" },
    { icon: Layers, title: "Version Control", desc: "Every component tracks its full revision history with semantic diff.", color: "text-sky-500 bg-sky-50 dark:bg-sky-950/40" },
  ];
  return (
    <section className="px-6 py-20 space-y-16">
      {features.map((f, i) => (
        <div key={f.title} className={\`flex flex-col \${i % 2 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 mx-auto max-w-5xl\`}>
          <div className="flex-1"><div className={\`inline-flex rounded-xl p-3 \${f.color}\`}><f.icon className="h-6 w-6" /></div><h3 className="mt-4 text-2xl font-bold text-ink-900 dark:text-white">{f.title}</h3><p className="mt-3 text-ink-500 dark:text-ink-400">{f.desc}</p></div>
          <div className="flex-1 h-48 rounded-2xl bg-ink-100 dark:bg-ink-800/50 border border-ink-200 dark:border-ink-700" />
        </div>
      ))}
    </section>
  );
}`,
    prompt: "Alternating left-right feature sections with icon, title, description and preview area.",
    previewKind: "feature-grid", featured: 7, createdAt: ago(3), likes: 2400, views: 33000, authorIdx: 5,
  },

  // ── CTAs ────────────────────────────────────────────────────────
  {
    id: "cta-gradient-01", title: "Gradient CTA section", description: "Full-width gradient call-to-action banner.",
    categorySlug: "calls-to-action", tags: ["cta","gradient","banner","conversion"],
    code: `export function GradientCTA() {
  return (
    <section className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-rose-500 to-amber-500 px-8 py-16 text-center shadow-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to ship faster?</h2>
      <p className="mx-auto mt-4 max-w-md text-white/80">Join 10,000+ developers building with our component library.</p>
      <div className="mt-8 flex justify-center gap-3">
        <button className="rounded-xl bg-white px-6 py-3 text-sm font-bold text-ink-900 shadow-lg hover:bg-white/90">Get started free</button>
        <button className="rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/10">Learn more</button>
      </div>
    </section>
  );
}`,
    prompt: "Full-width gradient CTA section with heading, subtitle and dual buttons on vibrant background.",
    previewKind: "hero-gradient", featured: 9, createdAt: ago(1), likes: 3200, views: 44000, authorIdx: 6,
  },
  {
    id: "cta-minimal-02", title: "Minimal CTA section", description: "Clean border CTA with left-right layout.",
    categorySlug: "calls-to-action", tags: ["cta","minimal","clean","border"],
    code: `import { ArrowRight } from 'lucide-react';
export function MinimalCTA() {
  return (
    <section className="mx-auto max-w-4xl rounded-2xl border border-ink-200 bg-white px-8 py-12 dark:border-ink-800 dark:bg-ink-900">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div><h3 className="text-xl font-bold text-ink-900 dark:text-white">Start building today</h3><p className="mt-1 text-sm text-ink-500">No credit card required. Free plan includes 50 components.</p></div>
        <button className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Get started <ArrowRight className="h-4 w-4" /></button>
      </div>
    </section>
  );
}`,
    prompt: "Minimal bordered CTA with text left and button right in a horizontal layout.",
    previewKind: "hero-minimal", featured: 7, createdAt: ago(3), likes: 2200, views: 30000, authorIdx: 7,
  },
  {
    id: "cta-newsletter-03", title: "Newsletter CTA", description: "Email newsletter subscription section.",
    categorySlug: "calls-to-action", tags: ["cta","newsletter","email","subscribe"],
    code: `import { Mail } from 'lucide-react';
export function NewsletterCTA() {
  return (
    <section className="bg-ink-50 px-6 py-16 dark:bg-ink-900/50">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400"><Mail className="h-6 w-6" /></div>
        <h3 className="mt-4 text-xl font-bold text-ink-900 dark:text-white">Stay in the loop</h3>
        <p className="mt-2 text-sm text-ink-500">Get weekly updates on new components, features, and best practices.</p>
        <div className="mt-6 flex gap-2">
          <input placeholder="your@email.com" className="flex-1 rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm focus:border-violet-400 focus:outline-none dark:border-ink-700 dark:bg-ink-900 dark:text-white" />
          <button className="whitespace-nowrap rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-500">Subscribe</button>
        </div>
        <p className="mt-2 text-xs text-ink-400">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}`,
    prompt: "Newsletter subscription CTA with email icon, heading, email input and subscribe button.",
    previewKind: "hero-minimal", featured: 8, createdAt: ago(2), likes: 2700, views: 37000, authorIdx: 0,
  },
  {
    id: "cta-dark-01", title: "Dark CTA with glow", description: "Dark section with radial glow CTA.",
    categorySlug: "calls-to-action", tags: ["cta","dark","glow","premium"],
    code: `export function DarkGlowCTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 px-8 py-20 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_50%)]" />
      <div className="relative">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Elevate your development</h2>
        <p className="mx-auto mt-4 max-w-md text-ink-400">Premium components, real-time collaboration, and AI-powered workflows.</p>
        <button className="mt-8 rounded-xl border border-violet-500 bg-violet-500/10 px-8 py-3 text-sm font-bold text-violet-300 backdrop-blur hover:bg-violet-500/20">Upgrade to Pro</button>
      </div>
    </section>
  );
}`,
    prompt: "Dark CTA section with violet radial glow and glassmorphic CTA button.",
    previewKind: "hero-gradient", featured: 8, createdAt: ago(2), likes: 2900, views: 40000, authorIdx: 1,
  },

  // ── TESTIMONIALS ────────────────────────────────────────────────
  {
    id: "testimonial-grid-01", title: "Testimonial grid", description: "3-column masonry testimonial grid.",
    categorySlug: "testimonials", tags: ["testimonial","grid","social-proof","reviews"],
    code: `import { Star } from 'lucide-react';
export function TestimonialGrid() {
  const reviews = [
    { name: "Sarah Chen", role: "CTO, Vercel", quote: "Saved our team 3 weeks of frontend work. The quality is incredible.", rating: 5, color: "bg-rose-500" },
    { name: "Alex Turner", role: "Founder, Acme", quote: "The best component library we have ever used. Period.", rating: 5, color: "bg-sky-500" },
    { name: "Maria Garcia", role: "Lead Designer", quote: "Every component feels native. Dark mode just works.", rating: 5, color: "bg-violet-500" },
  ];
  return (
    <section className="px-6 py-20">
      <h2 className="text-center text-3xl font-bold text-ink-900 dark:text-white">Loved by developers</h2>
      <div className="mx-auto mt-12 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map(r => (
          <div key={r.name} className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
            <div className="flex gap-0.5 text-amber-400">{Array.from({length: r.rating}).map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            <p className="mt-3 text-sm text-ink-700 dark:text-ink-300">&ldquo;{r.quote}&rdquo;</p>
            <div className="mt-4 flex items-center gap-3">
              <div className={\`h-9 w-9 rounded-full \${r.color} flex items-center justify-center text-xs font-bold text-white\`}>{r.name.split(" ").map(n=>n[0]).join("")}</div>
              <div><p className="text-sm font-medium text-ink-900 dark:text-white">{r.name}</p><p className="text-xs text-ink-500">{r.role}</p></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}`,
    prompt: "Three-column testimonial grid with star ratings, quotes, and author avatars.",
    previewKind: "testimonial", featured: 8, createdAt: ago(2), likes: 2600, views: 35000, authorIdx: 2,
  },
  {
    id: "testimonial-carousel-02", title: "Testimonial with logo", description: "Testimonial with company logo placeholder.",
    categorySlug: "testimonials", tags: ["testimonial","carousel","logo","enterprise"],
    code: `import { Star } from 'lucide-react';
export function LogoTestimonial() {
  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-ink-200 bg-white p-8 text-center dark:border-ink-800 dark:bg-ink-900">
      <div className="mx-auto h-8 w-24 rounded bg-ink-200 dark:bg-ink-700" />
      <div className="mt-4 flex justify-center gap-0.5 text-amber-400">{Array.from({length:5}).map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
      <blockquote className="mt-4 text-lg font-medium text-ink-900 dark:text-white">&ldquo;We rebuilt our entire dashboard in a weekend using this library.&rdquo;</blockquote>
      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center text-sm font-bold text-white">JD</div>
        <div className="text-left"><p className="text-sm font-semibold text-ink-900 dark:text-white">James Davis</p><p className="text-xs text-ink-500">VP Engineering, TechCorp</p></div>
      </div>
    </div>
  );
}`,
    prompt: "Single testimonial card with company logo placeholder, star rating, blockquote, and author info.",
    previewKind: "testimonial", featured: 7, createdAt: ago(3), likes: 2100, views: 28000, authorIdx: 3,
  },

  // ── FOOTERS ─────────────────────────────────────────────────────
  {
    id: "footer-modern-01", title: "Modern footer", description: "Multi-column footer with newsletter.",
    categorySlug: "footers", tags: ["footer","newsletter","links","marketing"],
    code: `export function ModernFooter() {
  const cols = [
    { title: "Product", links: ["Components","Pricing","Changelog","Documentation"] },
    { title: "Company", links: ["About","Blog","Careers","Press"] },
    { title: "Legal", links: ["Privacy","Terms","Security","GDPR"] },
  ];
  return (
    <footer className="border-t border-ink-200 bg-white px-8 py-12 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div><div className="h-6 w-6 rounded bg-ink-900 dark:bg-white" /><p className="mt-3 text-sm text-ink-500 max-w-xs">Build better interfaces with production-ready components.</p></div>
          {cols.map(c => <div key={c.title}><p className="text-sm font-semibold text-ink-900 dark:text-white">{c.title}</p><ul className="mt-3 space-y-2">{c.links.map(l => <li key={l}><a className="text-sm text-ink-500 hover:text-ink-900 dark:hover:text-white transition">{l}</a></li>)}</ul></div>)}
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-ink-100 pt-8 dark:border-ink-800">
          <p className="text-xs text-ink-400">&copy; 2026 ComponentUI. All rights reserved.</p>
          <div className="flex gap-4 text-ink-400"><span className="h-5 w-5 rounded bg-ink-200 dark:bg-ink-700" /><span className="h-5 w-5 rounded bg-ink-200 dark:bg-ink-700" /><span className="h-5 w-5 rounded bg-ink-200 dark:bg-ink-700" /></div>
        </div>
      </div>
    </footer>
  );
}`,
    prompt: "Multi-column footer with logo, description, link columns, copyright and social icons.",
    previewKind: "footer-simple", featured: 8, createdAt: ago(2), likes: 2500, views: 34000, authorIdx: 4,
  },
  {
    id: "footer-minimal-02", title: "Minimal footer", description: "Single-line minimal footer.",
    categorySlug: "footers", tags: ["footer","minimal","simple","clean"],
    code: `export function MinimalFooter() {
  return (
    <footer className="border-t border-ink-200 bg-white px-8 py-6 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p className="text-sm text-ink-500">&copy; 2026 21st Clone</p>
        <div className="flex gap-6 text-sm text-ink-500">
          <a className="hover:text-ink-900 dark:hover:text-white transition">Privacy</a>
          <a className="hover:text-ink-900 dark:hover:text-white transition">Terms</a>
          <a className="hover:text-ink-900 dark:hover:text-white transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}`,
    prompt: "Single-line minimal footer with copyright and three navigation links.",
    previewKind: "footer-simple", featured: 6, createdAt: ago(5), likes: 1800, views: 24000, authorIdx: 5,
  },

  // ── PRICING ─────────────────────────────────────────────────────
  {
    id: "pricing-three-tier-01", title: "Three-tier pricing", description: "Pricing section with 3 tiers and highlighted Pro.",
    categorySlug: "pricing-sections", tags: ["pricing","tiers","saas","subscription"],
    code: `import { Check } from 'lucide-react';
export function ThreeTierPricing() {
  const plans = [
    { name: "Free", price: "$0", features: ["50 components","Community support","Basic analytics"], cta: "Get started", highlight: false },
    { name: "Pro", price: "$29", features: ["Unlimited components","Priority support","Advanced analytics","Custom themes","API access"], cta: "Start free trial", highlight: true },
    { name: "Enterprise", price: "Custom", features: ["Everything in Pro","SSO & SAML","Dedicated account manager","SLA guarantee","Custom integrations"], cta: "Contact sales", highlight: false },
  ];
  return (
    <section className="px-6 py-20">
      <h2 className="text-center text-3xl font-bold text-ink-900 dark:text-white">Simple, transparent pricing</h2>
      <p className="mx-auto mt-3 text-center text-ink-500 max-w-md">Start free. Scale as you grow.</p>
      <div className="mx-auto mt-12 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map(p => (
          <div key={p.name} className={\`flex flex-col rounded-2xl border p-6 \${p.highlight ? 'border-violet-500 bg-violet-50 dark:bg-violet-950/20 ring-2 ring-violet-500' : 'border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900'}\`}>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">{p.name}</h3>
            <div className="mt-3 flex items-baseline gap-1"><span className="text-4xl font-bold tracking-tight text-ink-900 dark:text-white">{p.price}</span>{p.price !== "Custom" && <span className="text-ink-500">/mo</span>}</div>
            <ul className="mt-6 flex-1 space-y-2">{p.features.map(f => <li key={f} className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-300"><Check className="h-4 w-4 text-emerald-500 shrink-0" />{f}</li>)}</ul>
            <button className={\`mt-6 rounded-lg px-4 py-2.5 text-sm font-semibold \${p.highlight ? 'bg-violet-600 text-white hover:bg-violet-500' : 'bg-ink-900 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900'}\`}>{p.cta}</button>
          </div>
        ))}
      </div>
    </section>
  );
}`,
    prompt: "Three-tier pricing section with Free, Pro (highlighted), and Enterprise plans.",
    previewKind: "card-pricing", featured: 10, createdAt: ago(1), likes: 4200, views: 58000, authorIdx: 6,
  },
  {
    id: "pricing-toggle-02", title: "Pricing with toggle", description: "Monthly/yearly toggle pricing.",
    categorySlug: "pricing-sections", tags: ["pricing","toggle","annual","monthly"],
    code: `import { useState } from 'react';
import { Check } from 'lucide-react';
export function TogglePricing() {
  const [annual, setAnnual] = useState(false);
  const price = annual ? "$19" : "$24";
  return (
    <section className="px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-ink-900 dark:text-white">Choose your plan</h2>
      <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-ink-100 p-1 dark:bg-ink-800">
        <button onClick={() => setAnnual(false)} className={\`rounded-full px-4 py-1.5 text-sm font-medium \${!annual ? 'bg-white text-ink-900 shadow dark:bg-ink-700 dark:text-white' : 'text-ink-500'}\`}>Monthly</button>
        <button onClick={() => setAnnual(true)} className={\`rounded-full px-4 py-1.5 text-sm font-medium \${annual ? 'bg-white text-ink-900 shadow dark:bg-ink-700 dark:text-white' : 'text-ink-500'}\`}>Annual <span className="text-emerald-600 text-xs ml-1">Save 20%</span></button>
      </div>
      <div className="mx-auto mt-10 max-w-sm rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
        <h3 className="font-semibold uppercase tracking-wide text-sm text-ink-500">Pro</h3>
        <div className="mt-2 flex items-baseline gap-1"><span className="text-4xl font-bold text-ink-900 dark:text-white">{price}</span><span className="text-ink-500">/mo</span></div>
        <ul className="mt-6 space-y-2 text-left">{["Unlimited components","Priority support","Advanced analytics"].map(f => <li key={f} className="flex items-center gap-2 text-sm text-ink-700 dark:text-ink-300"><Check className="h-4 w-4 text-emerald-500" />{f}</li>)}</ul>
        <button className="mt-6 w-full rounded-lg bg-ink-900 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-ink-900">Get started</button>
      </div>
    </section>
  );
}`,
    prompt: "Pricing section with monthly/annual toggle and a single Pro plan card.",
    previewKind: "card-pricing", featured: 8, createdAt: ago(2), likes: 3100, views: 42000, authorIdx: 7,
  },

  // ── BACKGROUNDS ─────────────────────────────────────────────────
  {
    id: "bg-gradient-mesh-01", title: "Gradient mesh background", description: "Multi-color mesh gradient background.",
    categorySlug: "backgrounds", tags: ["background","gradient","mesh","decorative"],
    code: `export function GradientMeshBg() {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0" style={{background: "radial-gradient(at 20% 30%, #818cf8 0%, transparent 50%), radial-gradient(at 80% 20%, #f472b6 0%, transparent 50%), radial-gradient(at 50% 80%, #34d399 0%, transparent 50%), radial-gradient(at 70% 60%, #fbbf24 0%, transparent 50%)"}} />
      <div className="absolute inset-0 bg-white/30 dark:bg-ink-950/50" />
    </div>
  );
}`,
    prompt: "Multi-color gradient mesh background with overlapping radial gradients.",
    previewKind: "hero-gradient", featured: 7, createdAt: ago(3), likes: 2200, views: 30000, authorIdx: 0,
  },
  {
    id: "bg-dot-pattern-02", title: "Dot pattern background", description: "Subtle dot grid pattern background.",
    categorySlug: "backgrounds", tags: ["background","pattern","dots","subtle"],
    code: `export function DotPatternBg() {
  return (
    <div className="relative h-96 w-full rounded-2xl bg-white dark:bg-ink-950">
      <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle, rgb(0 0 0 / 0.07) 1px, transparent 1px)", backgroundSize: "20px 20px"}} />
    </div>
  );
}`,
    prompt: "Subtle dot grid pattern background for section backgrounds.",
    previewKind: "hero-minimal", featured: 6, createdAt: ago(5), likes: 1800, views: 24000, authorIdx: 1,
  },
  {
    id: "bg-aurora-03", title: "Aurora background", description: "Animated aurora borealis effect.",
    categorySlug: "backgrounds", tags: ["background","aurora","animated","effect"],
    code: `export function AuroraBg() {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-2xl bg-ink-950">
      <div className="absolute inset-0 opacity-40" style={{background: "conic-gradient(from 210deg at 50% 50%, #7c3aed, #0ea5e9, #22c55e, #7c3aed)", filter: "blur(80px)"}} />
    </div>
  );
}`,
    prompt: "Aurora borealis conic gradient background with blur effect.",
    previewKind: "hero-gradient", featured: 7, createdAt: ago(4), likes: 2000, views: 27000, authorIdx: 2,
  },

  // ── NAVIGATION MENUS ────────────────────────────────────────────
  {
    id: "nav-sticky-01", title: "Sticky navigation", description: "Sticky top navigation with blur backdrop.",
    categorySlug: "navigation-menus", tags: ["navigation","sticky","blur","header"],
    code: `import { Search, Menu } from 'lucide-react';
export function StickyNav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-ink-200/50 bg-white/80 px-6 py-3 backdrop-blur-lg dark:border-ink-800/50 dark:bg-ink-950/80">
      <div className="flex items-center gap-6">
        <div className="h-7 w-7 rounded-lg bg-ink-900 dark:bg-white" />
        <div className="hidden md:flex gap-6 text-sm text-ink-600 dark:text-ink-300">
          <a className="font-medium text-ink-900 dark:text-white">Home</a>
          <a className="hover:text-ink-900 dark:hover:text-white transition">Components</a>
          <a className="hover:text-ink-900 dark:hover:text-white transition">Pricing</a>
          <a className="hover:text-ink-900 dark:hover:text-white transition">Docs</a>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="hidden md:flex items-center gap-2 rounded-lg border border-ink-200 bg-ink-50 px-3 py-1.5 text-xs text-ink-500 dark:border-ink-700 dark:bg-ink-800"><Search className="h-3.5 w-3.5" /> Search... <kbd className="ml-4 rounded bg-ink-200 px-1.5 py-0.5 text-[10px] font-mono dark:bg-ink-700">⌘K</kbd></button>
        <button className="rounded-lg bg-ink-900 px-4 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-ink-900">Sign in</button>
        <button className="md:hidden"><Menu className="h-5 w-5 text-ink-600 dark:text-ink-300" /></button>
      </div>
    </nav>
  );
}`,
    prompt: "Sticky navigation bar with blur backdrop, logo, nav links, search with ⌘K shortcut, and sign-in button.",
    previewKind: "nav-bar", featured: 9, createdAt: ago(1), likes: 3600, views: 49000, authorIdx: 3,
  },
  {
    id: "nav-dark-01", title: "Dark navigation", description: "Dark themed navigation bar.",
    categorySlug: "navigation-menus", tags: ["navigation","dark","header","premium"],
    code: `export function DarkNav() {
  return (
    <nav className="flex items-center justify-between bg-ink-950 px-6 py-3 border-b border-ink-800">
      <div className="flex items-center gap-6">
        <span className="text-sm font-bold text-white">21st Clone</span>
        <div className="hidden md:flex gap-5 text-sm text-ink-400">
          <a className="text-white font-medium">Components</a>
          <a className="hover:text-white transition">Templates</a>
          <a className="hover:text-white transition">Pricing</a>
        </div>
      </div>
      <button className="rounded-lg border border-ink-700 bg-ink-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-ink-800">Get started</button>
    </nav>
  );
}`,
    prompt: "Dark themed navigation bar with logo, nav links, and CTA button.",
    previewKind: "nav-bar", featured: 7, createdAt: ago(3), likes: 2400, views: 33000, authorIdx: 4,
  },

  // ── CLIENTS / LOGOS ─────────────────────────────────────────────
  {
    id: "clients-logo-bar-01", title: "Logo bar", description: "Horizontal client logo bar with grayscale.",
    categorySlug: "clients", tags: ["clients","logos","trust","social-proof"],
    code: `export function LogoBar() {
  const logos = ["Vercel", "Stripe", "Linear", "Notion", "Figma"];
  return (
    <section className="border-y border-ink-100 bg-white px-6 py-10 dark:border-ink-800 dark:bg-ink-950">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-ink-400">Trusted by leading teams</p>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {logos.map(l => <div key={l} className="h-6 w-20 rounded bg-ink-200 dark:bg-ink-700 flex items-center justify-center text-[10px] font-medium text-ink-400">{l}</div>)}
      </div>
    </section>
  );
}`,
    prompt: "Client logo bar with 'Trusted by' heading and horizontal logo row.",
    previewKind: "hero-minimal", featured: 7, createdAt: ago(3), likes: 2100, views: 28000, authorIdx: 5,
  },

  // ── COMPARISONS ─────────────────────────────────────────────────
  {
    id: "comparison-table-01", title: "Feature comparison table", description: "Comparison table with check/x marks.",
    categorySlug: "comparisons", tags: ["comparison","table","features","pricing"],
    code: `import { Check, X } from 'lucide-react';
export function ComparisonTable() {
  const features = [
    { name: "Components", free: true, pro: true, ent: true },
    { name: "Custom themes", free: false, pro: true, ent: true },
    { name: "API access", free: false, pro: true, ent: true },
    { name: "Priority support", free: false, pro: false, ent: true },
    { name: "SSO / SAML", free: false, pro: false, ent: true },
  ];
  const Tick = () => <Check className="h-4 w-4 text-emerald-500" />;
  const Cross = () => <X className="h-4 w-4 text-ink-300" />;
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900">
      <table className="w-full text-sm">
        <thead><tr className="border-b border-ink-100 dark:border-ink-800"><th className="px-4 py-3 text-left font-medium text-ink-500">Feature</th><th className="px-4 py-3 text-center font-medium text-ink-500">Free</th><th className="px-4 py-3 text-center font-medium text-ink-500">Pro</th><th className="px-4 py-3 text-center font-medium text-ink-500">Enterprise</th></tr></thead>
        <tbody>{features.map((f,i) => <tr key={f.name} className={i%2===0 ? "bg-ink-50/50 dark:bg-ink-800/20" : ""}><td className="px-4 py-3 font-medium text-ink-900 dark:text-white">{f.name}</td><td className="px-4 py-3 text-center">{f.free ? <Tick/> : <Cross/>}</td><td className="px-4 py-3 text-center">{f.pro ? <Tick/> : <Cross/>}</td><td className="px-4 py-3 text-center">{f.ent ? <Tick/> : <Cross/>}</td></tr>)}</tbody>
      </table>
    </div>
  );
}`,
    prompt: "Feature comparison table with check/X marks across Free, Pro, and Enterprise tiers.",
    previewKind: "table-simple", featured: 8, createdAt: ago(2), likes: 2700, views: 37000, authorIdx: 6,
  },

  // ── BORDERS ─────────────────────────────────────────────────────
  {
    id: "border-gradient-01", title: "Gradient border card", description: "Card with animated gradient border.",
    categorySlug: "borders", tags: ["border","gradient","animated","premium"],
    code: `export function GradientBorderCard() {
  return (
    <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-violet-500 via-rose-500 to-amber-500">
      <div className="rounded-[15px] bg-white p-6 dark:bg-ink-950">
        <h3 className="font-semibold text-ink-900 dark:text-white">Premium Feature</h3>
        <p className="mt-2 text-sm text-ink-500">This card has a beautiful gradient border using a wrapper technique.</p>
      </div>
    </div>
  );
}`,
    prompt: "Card with gradient border effect using a wrapper div technique.",
    previewKind: "hero-gradient", featured: 8, createdAt: ago(2), likes: 2900, views: 40000, authorIdx: 7,
  },

  // ── TEXTS ───────────────────────────────────────────────────────
  {
    id: "text-gradient-01", title: "Gradient text", description: "Text with gradient color fill.",
    categorySlug: "texts", tags: ["text","gradient","typography","heading"],
    code: `export function GradientText({ children = "Build the future" }) {
  return <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-violet-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">{children}</h1>;
}`,
    prompt: "Large heading text with gradient color fill using bg-clip-text technique.",
    previewKind: "hero-gradient", featured: 8, createdAt: ago(2), likes: 3200, views: 44000, authorIdx: 0,
  },
  {
    id: "text-animated-counter-02", title: "Animated counter", description: "Count-up number animation.",
    categorySlug: "texts", tags: ["text","counter","animation","number"],
    code: `import { useState, useEffect } from 'react';
export function AnimatedCounter({ target = 1483, duration = 2000 }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0; const step = target / (duration / 16);
    const t = setInterval(() => { start += step; if (start >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(start)); }, 16);
    return () => clearInterval(t);
  }, [target, duration]);
  return <span className="text-5xl font-bold tracking-tight text-ink-900 dark:text-white">{count.toLocaleString()}</span>;
}`,
    prompt: "Animated count-up number that smoothly increments to a target value.",
    previewKind: "hero-gradient", featured: 7, createdAt: ago(3), likes: 2400, views: 33000, authorIdx: 1,
  },
  {
    id: "text-blockquote-03", title: "Stylized blockquote", description: "Premium blockquote with left border.",
    categorySlug: "texts", tags: ["text","blockquote","quote","typography"],
    code: `export function StylizedQuote({ quote = "Design is not just what it looks like. Design is how it works.", author = "Steve Jobs" }) {
  return (
    <blockquote className="border-l-4 border-violet-500 pl-6 py-2">
      <p className="text-lg font-medium italic text-ink-700 dark:text-ink-300">&ldquo;{quote}&rdquo;</p>
      <cite className="mt-3 block text-sm font-semibold text-ink-900 not-italic dark:text-white">&mdash; {author}</cite>
    </blockquote>
  );
}`,
    prompt: "Stylized blockquote with violet left border, italic text and author citation.",
    previewKind: "hero-minimal", featured: 6, createdAt: ago(5), likes: 1600, views: 21000, authorIdx: 2,
  },

  // ── IMAGES ──────────────────────────────────────────────────────
  {
    id: "image-gallery-grid-01", title: "Image gallery grid", description: "Responsive image gallery grid.",
    categorySlug: "images", tags: ["image","gallery","grid","responsive"],
    code: `export function ImageGallery() {
  const colors = ["bg-rose-200","bg-sky-200","bg-amber-200","bg-emerald-200","bg-violet-200","bg-fuchsia-200"];
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {colors.map((c, i) => (
        <div key={i} className={\`\${c} dark:opacity-60 aspect-square rounded-xl flex items-center justify-center text-sm font-medium text-ink-600\`}>
          {i + 1}
        </div>
      ))}
    </div>
  );
}`,
    prompt: "Responsive image gallery grid with colored placeholders.",
    previewKind: "feature-grid", featured: 6, createdAt: ago(4), likes: 1800, views: 24000, authorIdx: 3,
  },

  // ── SCROLL AREAS ────────────────────────────────────────────────
  {
    id: "scroll-horizontal-01", title: "Horizontal scroll area", description: "Horizontal scrollable card rail.",
    categorySlug: "scroll-areas", tags: ["scroll","horizontal","cards","carousel"],
    code: `export function HorizontalScroll() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
      {Array.from({length: 8}).map((_, i) => (
        <div key={i} className="shrink-0 w-48 h-32 rounded-xl border border-ink-200 bg-white flex items-center justify-center text-sm font-medium text-ink-500 dark:border-ink-800 dark:bg-ink-900">
          Card {i + 1}
        </div>
      ))}
    </div>
  );
}`,
    prompt: "Horizontal scrollable card rail with thin scrollbar.",
    previewKind: "hero-minimal", featured: 6, createdAt: ago(5), likes: 1500, views: 20000, authorIdx: 4,
  },

  // ── DOCS ────────────────────────────────────────────────────────
  {
    id: "doc-code-block-01", title: "Documentation code block", description: "Syntax-highlighted code block for docs.",
    categorySlug: "docs", tags: ["docs","code","syntax","documentation"],
    code: `import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
export function DocCodeBlock({ code = 'npm install @21st/ui', lang = "bash" }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="relative overflow-hidden rounded-xl border border-ink-800 bg-ink-950">
      <div className="flex items-center justify-between border-b border-ink-800 px-4 py-2">
        <span className="text-xs text-ink-400">{lang}</span>
        <button onClick={copy} className="text-ink-400 hover:text-white transition">{copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}</button>
      </div>
      <pre className="p-4 text-sm text-ink-200 font-mono overflow-x-auto"><code>{code}</code></pre>
    </div>
  );
}`,
    prompt: "Documentation code block with language label, copy button, and syntax styling.",
    previewKind: "code-block", featured: 8, createdAt: ago(2), likes: 2800, views: 38000, authorIdx: 5,
  },

  // ── VIDEOS ──────────────────────────────────────────────────────
  {
    id: "video-player-01", title: "Video player card", description: "Video player with controls overlay.",
    categorySlug: "videos", tags: ["video","player","media","embed"],
    code: `import { Play } from 'lucide-react';
export function VideoPlayer() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-ink-900 aspect-video flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 to-transparent" />
      <button className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition">
        <Play className="h-7 w-7 ml-1" />
      </button>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <div className="h-1 w-full rounded-full bg-white/20"><div className="h-full w-1/3 rounded-full bg-white" /></div>
      </div>
    </div>
  );
}`,
    prompt: "Video player card with play button, gradient overlay, and progress bar.",
    previewKind: "hero-gradient", featured: 7, createdAt: ago(3), likes: 2200, views: 30000, authorIdx: 6,
  },

  // ── MAPS ────────────────────────────────────────────────────────
  {
    id: "map-embed-01", title: "Map embed card", description: "Map placeholder with location pin.",
    categorySlug: "maps", tags: ["map","location","embed","contact"],
    code: `import { MapPin } from 'lucide-react';
export function MapCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800">
      <div className="relative h-48 bg-ink-100 dark:bg-ink-800 flex items-center justify-center">
        <MapPin className="h-8 w-8 text-rose-500" />
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: "radial-gradient(circle, rgb(0 0 0 / 0.1) 1px, transparent 1px)", backgroundSize: "12px 12px"}} />
      </div>
      <div className="bg-white p-4 dark:bg-ink-900">
        <h3 className="font-semibold text-sm text-ink-900 dark:text-white">San Francisco, CA</h3>
        <p className="text-xs text-ink-500 mt-1">123 Market Street, Suite 400</p>
      </div>
    </div>
  );
}`,
    prompt: "Map embed card with location pin, dot grid overlay, and address info below.",
    previewKind: "hero-minimal", featured: 6, createdAt: ago(5), likes: 1400, views: 18000, authorIdx: 7,
  },

  // ── SHADERS ─────────────────────────────────────────────────────
  {
    id: "shader-noise-01", title: "Noise grain overlay", description: "CSS noise grain texture overlay.",
    categorySlug: "shaders", tags: ["shader","noise","grain","texture"],
    code: `export function NoiseOverlay() {
  return (
    <div className="relative h-64 rounded-2xl bg-gradient-to-br from-violet-600 to-rose-500 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")\`}} />
      <div className="relative flex h-full items-center justify-center text-white text-xl font-bold">Noise Grain Effect</div>
    </div>
  );
}`,
    prompt: "Gradient background with CSS noise grain texture overlay using SVG filter.",
    previewKind: "hero-gradient", featured: 7, createdAt: ago(3), likes: 2000, views: 27000, authorIdx: 0,
  },

  // ── ANNOUNCEMENTS ───────────────────────────────────────────────
  {
    id: "announcement-top-bar-v3-01", title: "Announcement top bar", description: "Gradient announcement bar for page top.",
    categorySlug: "announcements", tags: ["announcement","banner","top","gradient"],
    code: `import { ArrowRight, X } from 'lucide-react';
import { useState } from 'react';
export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-rose-500 px-4 py-2.5 text-xs font-medium text-white">
      <span>Introducing AI Remix — transform any component with natural language</span>
      <ArrowRight className="h-3 w-3" />
      <button onClick={() => setVisible(false)} className="absolute right-3"><X className="h-3.5 w-3.5 text-white/70 hover:text-white" /></button>
    </div>
  );
}`,
    prompt: "Dismissible gradient announcement bar with message, arrow, and close button.",
    previewKind: "nav-bar", featured: 7, createdAt: ago(3), likes: 2100, views: 28000, authorIdx: 1,
  },
];
