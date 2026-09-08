/**
 * PREMIUM COMPONENT VARIANTS — Batch A
 * ═══════════════════════════════════════════════════════════════
 * Genuinely unique, high-quality variants across all categories.
 * Each component is a distinct design with real-world use cases.
 * ═══════════════════════════════════════════════════════════════
 */
import type { VariantSpec } from "./base";
import { ago } from "./base";

// ─── ANNOUNCEMENTS — Moved to dedicated ./announcements.ts ──────
const ANNOUNCE: VariantSpec[] = [];

// ─── HEROES (Unique Variants) ───────────────────────────────────
const HERO: VariantSpec[] = [
  {
    id: "hero-split-03", title: "Split hero with image", description: "Two-column hero with text and image placeholder.",
    categorySlug: "heroes", tags: ["hero","split","image","landing"], previewKind: "hero-gradient",
    featured: 10, createdAt: ago(1), likes: 4500, views: 58000, authorIdx: 0,
    prompt: "A split-layout hero section with text on left and image on right.",
    code: `export function SplitHero() {
  return (
    <section className="grid min-h-[400px] grid-cols-1 items-center gap-8 px-6 py-16 md:grid-cols-2">
      <div>
        <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">Just launched</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Build faster with<br /><span className="bg-gradient-to-r from-violet-600 to-rose-500 bg-clip-text text-transparent">AI-powered</span> components</h1>
        <p className="mt-4 max-w-md text-lg text-gray-500 dark:text-gray-400">Ship production-ready UIs in minutes, not weeks. Browse 600+ components.</p>
        <div className="mt-8 flex gap-3">
          <button className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-gray-800 dark:bg-white dark:text-gray-900">Get started free</button>
          <button className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">View docs</button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-violet-100 via-rose-50 to-amber-50 dark:from-violet-950/40 dark:via-rose-950/20 dark:to-amber-950/20 ring-1 ring-gray-200 dark:ring-gray-800" />
      </div>
    </section>
  );
}`
  },
  {
    id: "hero-centered-dark-04", title: "Dark centered hero", description: "Full-width dark hero with glowing accent.",
    categorySlug: "heroes", tags: ["hero","dark","centered","glow"], previewKind: "hero-gradient",
    featured: 10, createdAt: ago(0), likes: 5100, views: 63000, authorIdx: 1,
    prompt: "A dark-themed centered hero with gradient glow and CTA.",
    code: `export function DarkHero() {
  return (
    <section className="relative overflow-hidden bg-gray-950 px-6 py-24 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_70%)]" />
      <div className="relative">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-1.5 text-xs text-gray-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Now in public beta
        </div>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">The modern way to build <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">user interfaces</span></h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">A marketplace of production-ready components. Copy, customize, and ship.</p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-lg shadow-white/10 transition hover:bg-gray-100">Browse components</button>
          <button className="rounded-xl border border-gray-700 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-900">Learn more</button>
        </div>
      </div>
    </section>
  );
}`
  },
];

// ─── CARDS (Unique Variants) ────────────────────────────────────
const CARD: VariantSpec[] = [
  {
    id: "card-team-member-06", title: "Team member card", description: "Profile card with name, role, and social links.",
    categorySlug: "cards", tags: ["card","team","profile","social"], previewKind: "card-user-profile",
    featured: 8, createdAt: ago(3), likes: 2800, views: 34000, authorIdx: 2,
    prompt: "A team member card with avatar, name, role, and social links.",
    code: `export function TeamCard() {
  return (
    <div className="w-64 rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto h-20 w-20 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400" />
      <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">Sarah Chen</h3>
      <p className="text-sm text-gray-500">Lead Designer</p>
      <p className="mt-3 text-xs text-gray-400 leading-relaxed">Crafting beautiful interfaces and design systems for 8+ years.</p>
      <div className="mt-4 flex justify-center gap-3">
        {['𝕏','in','<Icon icon={Link} size={16} />'].map(s => <button key={s} className="grid h-8 w-8 place-items-center rounded-lg border border-gray-200 text-xs text-gray-500 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">{s}</button>)}
      </div>
    </div>
  );
}`
  },
  {
    id: "card-project-07", title: "Project showcase card", description: "Card with image, tech stack, and live preview link.",
    categorySlug: "cards", tags: ["card","project","showcase","portfolio"], previewKind: "card-product",
    featured: 9, createdAt: ago(2), likes: 3200, views: 40000, authorIdx: 3,
    prompt: "A project showcase card with gradient header, description, tech badges, and demo link.",
    code: `export function ProjectCard() {
  return (
    <div className="w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="h-36 bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500" />
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 dark:text-white">Dashboard Pro</h3>
        <p className="mt-1 text-sm text-gray-500">Admin dashboard with analytics, user management, and real-time data.</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {['React','TypeScript','Tailwind'].map(t => <span key={t} className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">{t}</span>)}
        </div>
        <button className="mt-4 w-full rounded-lg bg-gray-900 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Live preview <Icon icon={ArrowRight} size={16} /></button>
      </div>
    </div>
  );
}`
  },
  {
    id: "card-metric-08", title: "Metric dashboard card", description: "KPI card with sparkline and trend indicator.",
    categorySlug: "cards", tags: ["card","metric","kpi","dashboard"], previewKind: "card-stat",
    featured: 9, createdAt: ago(1), likes: 3600, views: 44000, authorIdx: 4,
    prompt: "A dashboard metric card with value, trend arrow, and mini sparkline.",
    code: `export function MetricCard() {
  const bars = [40,65,45,80,55,70,90,60,75,85];
  return (
    <div className="w-64 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">Monthly Revenue</p>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"><Icon icon={ArrowUp} size={16} /> 12.5%</span>
      </div>
      <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">$48,210</p>
      <div className="mt-4 flex items-end gap-1 h-12">
        {bars.map((h,i) => <div key={i} className="flex-1 rounded-sm bg-violet-500/80 transition-all hover:bg-violet-600" style={{height: h+'%'}} />)}
      </div>
    </div>
  );
}`
  },
  {
    id: "card-blog-09", title: "Blog post card", description: "Article card with image, excerpt, and read time.",
    categorySlug: "cards", tags: ["card","blog","article","post"], previewKind: "card-product",
    featured: 8, createdAt: ago(3), likes: 2500, views: 31000, authorIdx: 5,
    prompt: "A blog post card with gradient image area, title, excerpt, author, and read time.",
    code: `export function BlogCard() {
  return (
    <article className="w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="h-40 bg-gradient-to-br from-amber-300 via-orange-400 to-rose-400" />
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="rounded-full bg-gray-100 px-2 py-0.5 font-medium dark:bg-gray-800">Design</span>
          <span>·</span><span>5 min read</span>
        </div>
        <h3 className="mt-2 font-semibold text-gray-900 leading-snug dark:text-white">Building a Design System from Scratch</h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">Learn how to create a consistent, scalable design system that works across your entire product.</p>
        <div className="mt-4 flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-sky-400 to-blue-500" />
          <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Alex Chen</span>
          <span className="text-xs text-gray-400">· Apr 15</span>
        </div>
      </div>
    </article>
  );
}`
  },
];

// ─── BUTTONS (More Unique Variants) ─────────────────────────────
const BTN: VariantSpec[] = [
  {
    id: "btn-magnetic-09", title: "Magnetic hover button", description: "Button with magnetic cursor-follow effect.",
    categorySlug: "buttons", tags: ["button","magnetic","hover","interactive"], previewKind: "button-primary",
    featured: 9, createdAt: ago(1), likes: 3400, views: 42000, authorIdx: 0,
    prompt: "An interactive button with magnetic cursor follow effect on hover.",
    code: `import { useRef, useState } from 'react';
export function MagneticButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({x:0,y:0});
  const handleMove = (e: React.MouseEvent) => {
    const btn = ref.current; if(!btn) return;
    const rect = btn.getBoundingClientRect();
    setPos({ x: (e.clientX - rect.left - rect.width/2) * 0.3, y: (e.clientY - rect.top - rect.height/2) * 0.3 });
  };
  return (
    <div className="flex justify-center py-8">
      <button ref={ref} onMouseMove={handleMove} onMouseLeave={() => setPos({x:0,y:0})}
        style={{transform: \`translate(\${pos.x}px, \${pos.y}px)\`}}
        className="rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-xl transition-transform duration-200 hover:shadow-2xl dark:bg-white dark:text-gray-900">
        Hover me <Icon icon={Sparkles} size={16} />
      </button>
    </div>
  );
}`
  },
  {
    id: "btn-shimmer-10", title: "Shimmer border button", description: "Button with animated shimmer border effect.",
    categorySlug: "buttons", tags: ["button","shimmer","animated","border"], previewKind: "button-gradient",
    featured: 9, createdAt: ago(2), likes: 3100, views: 38000, authorIdx: 1,
    prompt: "A button with animated shimmer border effect.",
    code: `export function ShimmerButton() {
  return (
    <div className="flex justify-center py-8">
      <button className="group relative rounded-xl bg-gray-900 px-8 py-3 text-sm font-semibold text-white dark:bg-white dark:text-gray-900">
        <span className="absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute inset-0 rounded-xl bg-[conic-gradient(from_0deg,transparent,rgba(139,92,246,0.3),transparent,transparent)] animate-spin" style={{animationDuration:'3s'}} />
        </span>
        <span className="absolute inset-px rounded-[11px] bg-gray-900 dark:bg-white" />
        <span className="relative">Explore components</span>
      </button>
    </div>
  );
}`
  },
  {
    id: "btn-social-group-11", title: "Social login buttons", description: "Group of social authentication buttons.",
    categorySlug: "buttons", tags: ["button","social","login","oauth"], previewKind: "button-primary",
    featured: 8, createdAt: ago(3), likes: 2700, views: 33000, authorIdx: 2,
    prompt: "A group of social login buttons for Google, GitHub, and Apple.",
    code: `export function SocialButtons() {
  return (
    <div className="mx-auto flex w-72 flex-col gap-3">
      <button className="flex h-11 items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
        <svg className="h-5 w-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Continue with Google
      </button>
      <button className="flex h-11 items-center justify-center gap-3 rounded-xl border border-gray-200 bg-gray-900 text-sm font-medium text-white transition hover:bg-gray-800 dark:border-gray-700">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z"/></svg>
        Continue with GitHub
      </button>
      <button className="flex h-11 items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200">
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.53-3.24 0-1.44.64-2.2.52-3.06-.4C3.79 16.17 4.36 9.52 8.75 9.28c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.23 4.11zM12.03 9.2C11.88 7.16 13.5 5.5 15.4 5.35c.27 2.28-2.07 3.99-3.37 3.85z"/></svg>
        Continue with Apple
      </button>
    </div>
  );
}`
  },
];

// ─── ALERTS (Unique Variants) ───────────────────────────────────
const ALERT: VariantSpec[] = [
  {
    id: "alert-action-05", title: "Alert with actions", description: "Warning alert with action buttons.",
    categorySlug: "alerts", tags: ["alert","warning","action","buttons"], previewKind: "alert-warning",
    featured: 8, createdAt: ago(2), likes: 2100, views: 26000, authorIdx: 3,
    prompt: "A warning alert with icon, message, and action buttons.",
    code: `export function ActionAlert() {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/50 dark:bg-amber-950/20">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-amber-600 dark:text-amber-400"><Icon icon={AlertTriangle} size={16} /></span>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-200">Your trial expires in 3 days</h4>
          <p className="mt-1 text-sm text-amber-700/80 dark:text-amber-300/70">Upgrade now to keep all your components and settings.</p>
          <div className="mt-3 flex gap-2">
            <button className="rounded-lg bg-amber-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-amber-700">Upgrade now</button>
            <button className="rounded-lg px-3 py-1.5 text-xs font-semibold text-amber-700 hover:bg-amber-100 dark:text-amber-300 dark:hover:bg-amber-900/30">Remind later</button>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
  {
    id: "alert-banner-06", title: "Full-width info banner", description: "Persistent banner for system-wide messages.",
    categorySlug: "alerts", tags: ["alert","banner","info","system"], previewKind: "alert-info",
    featured: 7, createdAt: ago(4), likes: 1500, views: 19000, authorIdx: 4,
    prompt: "A full-width info banner for system-wide announcements.",
    code: `import { useState } from 'react';
export function InfoBanner() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="flex items-center justify-between bg-blue-600 px-4 py-2.5 text-white">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold">NEW</span>
        <p className="text-sm">We've updated our API — check the migration guide for breaking changes.</p>
      </div>
      <button onClick={() => setShow(false)} className="ml-4 text-white/60 hover:text-white"><Icon icon={X} size={16} /></button>
    </div>
  );
}`
  },
];

// ─── INPUTS (Unique Variants) ───────────────────────────────────
const INPUT: VariantSpec[] = [
  {
    id: "input-with-icon-05", title: "Input with icon prefix", description: "Text input with leading icon.",
    categorySlug: "inputs", tags: ["input","icon","prefix","form"], previewKind: "input-search",
    featured: 7, createdAt: ago(3), likes: 2000, views: 25000, authorIdx: 5,
    prompt: "A text input with leading search icon and clear button.",
    code: `import { useState } from 'react';
export function IconInput() {
  const [val, setVal] = useState('');
  return (
    <div className="relative mx-auto w-72">
      <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="m21 21-4.35-4.35"/></svg>
      <input value={val} onChange={e => setVal(e.target.value)} placeholder="Search components..."
        className="h-10 w-full rounded-lg border border-gray-200 bg-white pl-9 pr-8 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:focus:ring-violet-900/40" />
      {val && <button onClick={() => setVal('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"><Icon icon={X} size={16} /></button>}
    </div>
  );
}`
  },
  {
    id: "input-validate-06", title: "Input with validation", description: "Form input showing success and error states.",
    categorySlug: "inputs", tags: ["input","validation","error","success"], previewKind: "input-floating",
    featured: 8, createdAt: ago(2), likes: 2400, views: 30000, authorIdx: 6,
    prompt: "Input fields showing success and error validation states with messages.",
    code: `export function ValidatedInputs() {
  return (
    <div className="mx-auto w-72 space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Email (valid)</label>
        <input defaultValue="user@example.com" className="h-10 w-full rounded-lg border-2 border-emerald-400 bg-emerald-50/50 px-3 text-sm outline-none dark:border-emerald-600 dark:bg-emerald-950/20 dark:text-white" />
        <p className="mt-1 flex items-center gap-1 text-xs text-emerald-600"><span><Icon icon={Check} size={16} /></span> Email is available</p>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Username (error)</label>
        <input defaultValue="ab" className="h-10 w-full rounded-lg border-2 border-rose-400 bg-rose-50/50 px-3 text-sm outline-none dark:border-rose-600 dark:bg-rose-950/20 dark:text-white" />
        <p className="mt-1 flex items-center gap-1 text-xs text-rose-600"><span><Icon icon={X} size={16} /></span> Username must be 3+ characters</p>
      </div>
    </div>
  );
}`
  },
];

// ─── PRICING (Unique Variants) ──────────────────────────────────
const PRICE: VariantSpec[] = [
  {
    id: "pricing-toggle-02", title: "Pricing with monthly/yearly toggle", description: "Pricing card with billing period switch.",
    categorySlug: "pricing-sections", tags: ["pricing","toggle","billing","saas"], previewKind: "card-pricing",
    featured: 10, createdAt: ago(1), likes: 4100, views: 52000, authorIdx: 0,
    prompt: "A pricing section with monthly/yearly toggle and savings badge.",
    code: `import { useState } from 'react';
export function PricingToggle() {
  const [yearly, setYearly] = useState(false);
  return (
    <div className="text-center">
      <div className="mb-8 inline-flex items-center rounded-full border border-gray-200 bg-white p-1 dark:border-gray-800 dark:bg-gray-900">
        <button onClick={() => setYearly(false)} className={\`rounded-full px-4 py-2 text-sm font-medium transition \${!yearly ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'text-gray-500'}\`}>Monthly</button>
        <button onClick={() => setYearly(true)} className={\`rounded-full px-4 py-2 text-sm font-medium transition \${yearly ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'text-gray-500'}\`}>
          Yearly <span className="ml-1 text-xs text-emerald-500">Save 20%</span>
        </button>
      </div>
      <div className="mx-auto grid max-w-xs gap-6">
        <div className="rounded-2xl border-2 border-violet-500 bg-white p-6 shadow-lg shadow-violet-500/10 dark:bg-gray-900">
          <p className="text-sm font-semibold text-violet-600">Pro</p>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">\${yearly ? '23' : '29'}</span>
            <span className="text-gray-500">/mo</span>
          </div>
          {yearly && <p className="mt-1 text-xs text-emerald-500">$276 billed yearly (save $72)</p>}
          <button className="mt-4 w-full rounded-lg bg-violet-600 py-2.5 text-sm font-semibold text-white hover:bg-violet-700">Start free trial</button>
        </div>
      </div>
    </div>
  );
}`
  },
];

// ─── TABLES (Unique Variants) ───────────────────────────────────
const TABLE: VariantSpec[] = [
  {
    id: "table-striped-02", title: "Striped data table", description: "Alternating row colors for readability.",
    categorySlug: "tables", tags: ["table","striped","data","readable"], previewKind: "table-simple",
    featured: 8, createdAt: ago(3), likes: 2200, views: 27000, authorIdx: 1,
    prompt: "A striped data table with alternating row backgrounds.",
    code: `const data = [
  { id: '#1024', product: 'Design System Pro', customer: 'Alice Chen', amount: '$499', status: 'Completed' },
  { id: '#1025', product: 'UI Kit Bundle', customer: 'Bob Rivera', amount: '$129', status: 'Pending' },
  { id: '#1026', product: 'Icon Pack', customer: 'Carol Park', amount: '$49', status: 'Completed' },
  { id: '#1027', product: 'Template Kit', customer: 'Dan Lee', amount: '$199', status: 'Failed' },
];
export function StripedTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 dark:bg-gray-900">
          <tr>{['Order','Product','Customer','Amount','Status'].map(h => <th key={h} className="px-4 py-3 font-medium text-gray-500">{h}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((d,i) => (
            <tr key={d.id} className={\`\${i%2===0?'bg-white dark:bg-gray-950':'bg-gray-50/50 dark:bg-gray-900/50'}\`}>
              <td className="px-4 py-3 font-mono text-xs text-gray-400">{d.id}</td>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{d.product}</td>
              <td className="px-4 py-3 text-gray-500">{d.customer}</td>
              <td className="px-4 py-3 font-medium">{d.amount}</td>
              <td className="px-4 py-3"><span className={\`rounded-full px-2 py-0.5 text-xs font-medium \${d.status==='Completed'?'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400':d.status==='Pending'?'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400':'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400'}\`}>{d.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`
  },
];

// ─── NAVIGATION (Unique Variants) ───────────────────────────────
const NAV: VariantSpec[] = [
  {
    id: "nav-transparent-02", title: "Transparent navbar", description: "Glassmorphism navigation for landing pages.",
    categorySlug: "navigation-menus", tags: ["nav","transparent","glass","landing"], previewKind: "nav-bar",
    featured: 9, createdAt: ago(1), likes: 3400, views: 42000, authorIdx: 2,
    prompt: "A transparent glassmorphism navbar with blur backdrop.",
    code: `export function TransparentNav() {
  return (
    <nav className="flex h-16 items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-6 backdrop-blur-xl dark:border-gray-800/50 dark:bg-gray-900/60">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500" />
        <span className="text-base font-bold text-gray-900 dark:text-white">Acme</span>
      </div>
      <div className="hidden items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-400 md:flex">
        <a href="#" className="text-gray-900 dark:text-white">Products</a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-white">Solutions</a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-white">Pricing</a>
        <a href="#" className="hover:text-gray-900 dark:hover:text-white">Docs</a>
      </div>
      <div className="flex items-center gap-3">
        <button className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300">Log in</button>
        <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Sign up</button>
      </div>
    </nav>
  );
}`
  },
];

// ─── SIDEBARS (Unique Variants) ─────────────────────────────────
const SIDEBAR: VariantSpec[] = [
  {
    id: "sidebar-collapsible-02", title: "Collapsible sidebar", description: "Sidebar with expand/collapse toggle.",
    categorySlug: "sidebars", tags: ["sidebar","collapsible","toggle","dashboard"], previewKind: "sidebar-nav",
    featured: 9, createdAt: ago(1), likes: 3600, views: 44000, authorIdx: 3,
    prompt: "A collapsible sidebar that toggles between icon-only and full width.",
    code: `import { useState } from 'react';
export function CollapsibleSidebar() {
  const [open, setOpen] = useState(true);
  const items = [{icon:'<Icon icon={Home} size={16} />',label:'Home'},{icon:'<Icon icon={BarChart} size={16} />',label:'Analytics'},{icon:'<Icon icon={Users} size={16} />',label:'Team'},{icon:'<Icon icon={Settings} size={16} />️',label:'Settings'}];
  return (
    <div className={\`flex flex-col rounded-2xl border border-gray-200 bg-white transition-all duration-300 dark:border-gray-800 dark:bg-gray-900 \${open?'w-56':'w-16'}\`} style={{height:320}}>
      <div className={\`flex items-center border-b border-gray-100 px-4 py-4 dark:border-gray-800 \${open?'justify-between':'justify-center'}\`}>
        {open && <span className="text-sm font-bold dark:text-white">Menu</span>}
        <button onClick={() => setOpen(!open)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">{open ? '◀' : '▶'}</button>
      </div>
      <nav className="flex-1 p-2 space-y-1">
        {items.map((it,i) => (
          <button key={it.label} className={\`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition \${i===0?'bg-gray-100 font-medium text-gray-900 dark:bg-gray-800 dark:text-white':'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800'} \${!open?'justify-center':''}\`}>
            <span>{it.icon}</span>{open && <span>{it.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
}`
  },
];

// ─── TABS (Unique Variants) ─────────────────────────────────────
const TAB: VariantSpec[] = [
  {
    id: "tabs-underline-02", title: "Underline tabs", description: "Minimal tabs with bottom border indicator.",
    categorySlug: "tabs", tags: ["tabs","underline","minimal","navigation"], previewKind: "tabs-pill",
    featured: 8, createdAt: ago(2), likes: 2800, views: 34000, authorIdx: 4,
    prompt: "Minimal underline tabs with active border indicator.",
    code: `import { useState } from 'react';
export function UnderlineTabs() {
  const [active, setActive] = useState('Overview');
  const tabs = ['Overview','Analytics','Reports','Settings'];
  return (
    <div>
      <div className="flex border-b border-gray-200 dark:border-gray-800">
        {tabs.map(t => (
          <button key={t} onClick={() => setActive(t)} className={\`relative px-4 py-3 text-sm font-medium transition \${t===active?'text-gray-900 dark:text-white':'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}\`}>
            {t}
            {t===active && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 dark:bg-white" />}
          </button>
        ))}
      </div>
      <div className="p-4 text-sm text-gray-500">{active} content goes here...</div>
    </div>
  );
}`
  },
  {
    id: "tabs-segment-03", title: "Segmented control tabs", description: "iOS-style segmented control tabs.",
    categorySlug: "tabs", tags: ["tabs","segmented","control","ios"], previewKind: "tabs-pill",
    featured: 8, createdAt: ago(3), likes: 2500, views: 30000, authorIdx: 5,
    prompt: "iOS-style segmented control with sliding active indicator.",
    code: `import { useState } from 'react';
export function SegmentedTabs() {
  const [active, setActive] = useState(0);
  const tabs = ['All','Active','Archived'];
  return (
    <div className="mx-auto w-72">
      <div className="relative flex rounded-xl bg-gray-100 p-1 dark:bg-gray-800">
        <div className="absolute top-1 h-[calc(100%-8px)] rounded-lg bg-white shadow-sm transition-all duration-200 dark:bg-gray-700" style={{width: 100/tabs.length+'%', left: (active*100/tabs.length)+'%'}} />
        {tabs.map((t,i) => (
          <button key={t} onClick={() => setActive(i)} className={\`relative z-10 flex-1 rounded-lg py-2 text-center text-sm font-medium transition \${i===active?'text-gray-900 dark:text-white':'text-gray-500'}\`}>{t}</button>
        ))}
      </div>
    </div>
  );
}`
  },
];

// ─── TOGGLES (Unique Variants) ──────────────────────────────────
const TOGGLE: VariantSpec[] = [
  {
    id: "toggle-labeled-02", title: "Labeled toggle with description", description: "Settings toggle with title and subtitle.",
    categorySlug: "toggles", tags: ["toggle","settings","labeled","switch"], previewKind: "toggle-switch",
    featured: 8, createdAt: ago(2), likes: 2300, views: 28000, authorIdx: 6,
    prompt: "A settings page toggle with label and description text.",
    code: `import { useState } from 'react';
export function LabeledToggle() {
  const [on, setOn] = useState(true);
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900" style={{width:320}}>
      <div>
        <p className="text-sm font-medium text-gray-900 dark:text-white">Email notifications</p>
        <p className="text-xs text-gray-500 mt-0.5">Get notified when someone mentions you.</p>
      </div>
      <button onClick={() => setOn(!on)} className={\`relative h-6 w-11 shrink-0 rounded-full transition \${on?'bg-violet-500':'bg-gray-300 dark:bg-gray-700'}\`}>
        <span className={\`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform \${on?'left-[22px]':'left-0.5'}\`} />
      </button>
    </div>
  );
}`
  },
];

// ─── FORMS (Unique Variants) ────────────────────────────────────
const FORM: VariantSpec[] = [
  {
    id: "form-settings-02", title: "Settings form", description: "Account settings form with sections.",
    categorySlug: "forms", tags: ["form","settings","account","profile"], previewKind: "sign-in-form",
    featured: 8, createdAt: ago(2), likes: 2600, views: 32000, authorIdx: 7,
    prompt: "An account settings form with profile section, email, and save button.",
    code: `export function SettingsForm() {
  return (
    <div className="mx-auto max-w-md">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white">Account Settings</h2>
      <p className="mt-1 text-sm text-gray-500">Manage your account preferences.</p>
      <form className="mt-6 space-y-5" onSubmit={e => e.preventDefault()}>
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400" />
          <button type="button" className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Change photo</button>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Display name</label>
          <input defaultValue="Sarah Chen" className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-gray-800 dark:bg-gray-900 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Email</label>
          <input defaultValue="sarah@example.com" type="email" className="h-10 w-full rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-gray-800 dark:bg-gray-900 dark:text-white" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-300">Bio</label>
          <textarea rows={3} defaultValue="Lead designer crafting interfaces." className="w-full rounded-lg border border-gray-200 bg-white p-3 text-sm outline-none resize-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-gray-800 dark:bg-gray-900 dark:text-white" />
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <button type="button" className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300">Cancel</button>
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Save changes</button>
        </div>
      </form>
    </div>
  );
}`
  },
];

// ─── BADGES (Unique Variants) ───────────────────────────────────
const BADGE: VariantSpec[] = [
  {
    id: "badge-status-row-02", title: "Status badge collection", description: "All status badge variants in a showcase.",
    categorySlug: "badges", tags: ["badge","status","collection","showcase"], previewKind: "badge-row",
    featured: 7, createdAt: ago(3), likes: 1800, views: 22000, authorIdx: 0,
    prompt: "A collection of status badges: active, pending, failed, new, beta, deprecated.",
    code: `export function StatusBadges() {
  const badges = [
    { label: 'Active', cls: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400' },
    { label: 'Pending', cls: 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400' },
    { label: 'Failed', cls: 'bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400' },
    { label: 'New', cls: 'bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400' },
    { label: 'Beta', cls: 'bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-400' },
    { label: 'Deprecated', cls: 'bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400' },
  ];
  return (
    <div className="flex flex-wrap gap-2 p-2">
      {badges.map(b => <span key={b.label} className={\`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold \${b.cls}\`}>{b.label}</span>)}
    </div>
  );
}`
  },
];

// ─── SPINNERS (Unique Variants) ─────────────────────────────────
const SPIN: VariantSpec[] = [
  {
    id: "spinner-skeleton-02", title: "Content skeleton loader", description: "Card-shaped skeleton loading animation.",
    categorySlug: "spinner-loaders", tags: ["skeleton","loading","placeholder","shimmer"], previewKind: "spinner",
    featured: 8, createdAt: ago(2), likes: 2400, views: 30000, authorIdx: 1,
    prompt: "A card skeleton loader with shimmer animation.",
    code: `export function SkeletonCard() {
  return (
    <div className="w-64 animate-pulse rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <div className="h-32 rounded-xl bg-gray-200 dark:bg-gray-800" />
      <div className="mt-4 h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-800" />
      <div className="mt-2 h-3 w-1/2 rounded bg-gray-200 dark:bg-gray-800" />
      <div className="mt-4 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-800" />
        <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-800" />
      </div>
    </div>
  );
}`
  },
];

// ══════════════════════════════════════════════════════════════════
// MASTER EXPORT — All genuinely unique premium variants
// ══════════════════════════════════════════════════════════════════
export const STYLE_VARIANTS: VariantSpec[] = [
  ...ANNOUNCE,
  ...HERO,
  ...CARD,
  ...BTN,
  ...ALERT,
  ...INPUT,
  ...PRICE,
  ...TABLE,
  ...NAV,
  ...SIDEBAR,
  ...TAB,
  ...TOGGLE,
  ...FORM,
  ...BADGE,
  ...SPIN,
];
