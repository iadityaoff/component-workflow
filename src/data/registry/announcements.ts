/**
 * ANNOUNCEMENTS — COMPLETE VARIANT LIBRARY
 * ═══════════════════════════════════════════════════════════════
 * 40 genuinely unique, production-grade announcement components.
 * Matching 21st.dev's full announcement collection + extras.
 *
 * Each variant is a distinct use case with unique interactivity,
 * layout, and visual identity. NO templates, NO duplicates.
 * ═══════════════════════════════════════════════════════════════
 */
import type { VariantSpec } from "./base";
import { ago } from "./base";

export const ANNOUNCEMENT_VARIANTS_V2: VariantSpec[] = [

  // ─── 1. Gradient Top Bar ──────────────────────────────────────
  {
    id: "announce-gradient-bar",
    title: "Gradient top bar",
    description: "Vibrant gradient announcement strip with CTA link and close button.",
    categorySlug: "announcements",
    tags: ["banner", "gradient", "top-bar", "promo"],
    previewKind: "hero-gradient",
    featured: 10, createdAt: ago(0), likes: 5200, views: 68000, authorIdx: 0,
    prompt: "A full-width gradient announcement bar fixed to the top with promo text, CTA link, and dismiss button.",
    code: `import { useState } from 'react';
export function GradientBar() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 px-4 py-2.5 text-sm text-white">
      <span className="font-medium"><Icon icon={PartyPopper} size={16} /> Introducing v3.0 — AI-powered component generation is here!</span>
      <a href="#" className="ml-1 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold backdrop-blur-sm transition hover:bg-white/30">
        Learn more <span aria-hidden><Icon icon={ArrowRight} size={16} /></span>
      </a>
      <button onClick={() => setShow(false)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/60 transition hover:bg-white/10 hover:text-white">
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  );
}`
  },

  // ─── 2. Floating Pill Badge ───────────────────────────────────
  {
    id: "announce-floating-pill",
    title: "Floating pill announcement",
    description: "Compact floating pill with live dot indicator and changelog link.",
    categorySlug: "announcements",
    tags: ["pill", "floating", "badge", "changelog"],
    previewKind: "badge-row",
    featured: 9, createdAt: ago(1), likes: 4400, views: 56000, authorIdx: 1,
    prompt: "A centered floating pill-shaped announcement with animated live dot, version text, and arrow link.",
    code: `export function FloatingPill() {
  return (
    <div className="flex items-center justify-center py-6">
      <a href="#" className="group inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition-all hover:shadow-md hover:border-violet-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-700">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">v3.2 is now available</span>
        <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">NEW</span>
        <svg className="h-4 w-4 text-gray-400 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M9 5l7 7-7 7"/></svg>
      </a>
    </div>
  );
}`
  },

  // ─── 3. Cookie Consent Banner ─────────────────────────────────
  {
    id: "announce-cookie-consent",
    title: "Cookie consent banner",
    description: "GDPR-compliant bottom-fixed cookie consent with accept, decline, and preferences.",
    categorySlug: "announcements",
    tags: ["cookie", "consent", "gdpr", "privacy"],
    previewKind: "hero-gradient",
    featured: 9, createdAt: ago(1), likes: 4100, views: 53000, authorIdx: 2,
    prompt: "A bottom-fixed cookie consent banner with icon, message, and accept/decline/preferences buttons.",
    code: `import { useState } from 'react';
export function CookieConsent() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/80 px-6 py-4 shadow-2xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 shrink-0 rounded-lg bg-amber-100 p-2 dark:bg-amber-900/30">
            <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/></svg>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">We value your privacy</p>
            <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.</p>
          </div>
        </div>
        <div className="flex shrink-0 gap-2">
          <button onClick={() => setShow(false)} className="rounded-lg border border-gray-200 px-3.5 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">Decline</button>
          <button onClick={() => setShow(false)} className="rounded-lg border border-gray-200 px-3.5 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800">Preferences</button>
          <button onClick={() => setShow(false)} className="rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">Accept all</button>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 4. Countdown Promo Banner ────────────────────────────────
  {
    id: "announce-countdown",
    title: "Countdown promo banner",
    description: "Urgency-driven promotion banner with countdown timer and gradient background.",
    categorySlug: "announcements",
    tags: ["countdown", "timer", "promo", "urgency"],
    previewKind: "hero-gradient",
    featured: 10, createdAt: ago(0), likes: 4800, views: 62000, authorIdx: 3,
    prompt: "A dark gradient promotional banner with countdown timer digits, promo text, and CTA button.",
    code: `export function CountdownBanner() {
  const units = [{v:'02',l:'Days'},{v:'11',l:'Hours'},{v:'42',l:'Min'},{v:'08',l:'Sec'}];
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <div className="relative px-8 py-8">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-500/20 blur-3xl" />
        <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-400">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" /> LIMITED TIME
            </div>
            <h3 className="mt-3 text-xl font-bold text-white">Black Friday Sale — 60% off Pro</h3>
            <p className="mt-1 text-sm text-gray-400">Upgrade now and save $180 on the annual plan.</p>
          </div>
          <div className="flex items-center gap-2">
            {units.map(u => (
              <div key={u.l} className="flex flex-col items-center rounded-xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10 backdrop-blur">
                <span className="text-2xl font-bold tabular-nums text-white">{u.v}</span>
                <span className="text-[9px] font-medium uppercase tracking-wider text-gray-500">{u.l}</span>
              </div>
            ))}
          </div>
          <button className="shrink-0 rounded-xl bg-gradient-to-r from-rose-500 to-fuchsia-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-500/20 transition hover:shadow-rose-500/40 hover:brightness-110">
            Claim offer <Icon icon={ArrowRight} size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 5. Changelog Entry ───────────────────────────────────────
  {
    id: "announce-changelog",
    title: "Changelog announcement",
    description: "Feature release changelog card with version badge, date, and feature list.",
    categorySlug: "announcements",
    tags: ["changelog", "release", "version", "features"],
    previewKind: "card-product",
    featured: 8, createdAt: ago(2), likes: 3200, views: 41000, authorIdx: 4,
    prompt: "A changelog announcement card showing version badge, date, feature highlights with icons.",
    code: `export function ChangelogCard() {
  const features = [
    { icon: '<Icon icon={Zap} size={16} />', text: 'AI component generation 3x faster' },
    { icon: '<Icon icon={Palette} size={16} />', text: 'New dark mode themes engine' },
    { icon: '<Icon icon={Package} size={16} />', text: 'Export to Figma plugin support' },
    { icon: '<Icon icon={Lock} size={16} />', text: 'SOC 2 compliance achieved' },
  ];
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-violet-100 px-2.5 py-1 text-xs font-bold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">v3.2.0</span>
        <span className="text-xs text-gray-400">April 18, 2026</span>
      </div>
      <h3 className="mt-3 text-base font-bold text-gray-900 dark:text-white">Spring Release <Icon icon={Flower} size={16} /></h3>
      <p className="mt-1 text-sm text-gray-500">Major performance improvements and new AI features.</p>
      <ul className="mt-4 space-y-2.5">
        {features.map(f => (
          <li key={f.text} className="flex items-center gap-2.5 text-sm text-gray-700 dark:text-gray-300">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-gray-50 text-sm dark:bg-gray-800">{f.icon}</span>
            {f.text}
          </li>
        ))}
      </ul>
      <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-violet-600 transition hover:text-violet-700 dark:text-violet-400">
        Read full changelog <span><Icon icon={ArrowRight} size={16} /></span>
      </a>
    </div>
  );
}`
  },

  // ─── 6. Feature Launch Spotlight ──────────────────────────────
  {
    id: "announce-feature-spotlight",
    title: "Feature launch spotlight",
    description: "Large feature announcement with illustration area, description, and two CTAs.",
    categorySlug: "announcements",
    tags: ["feature", "launch", "spotlight", "product"],
    previewKind: "hero-gradient",
    featured: 9, createdAt: ago(1), likes: 3900, views: 49000, authorIdx: 5,
    prompt: "A feature launch spotlight card with gradient illustration area, heading, description, and action buttons.",
    code: `import { useState } from 'react';
export function FeatureSpotlight() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <button onClick={() => setDismissed(true)} className="absolute right-3 top-3 z-10 rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div className="h-32 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-400 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/20 p-3 backdrop-blur-sm"><span className="text-3xl"><Icon icon={Sparkles} size={16} /></span></div>
          <div className="text-white">
            <p className="text-xs font-semibold uppercase tracking-wider opacity-80">Just shipped</p>
            <p className="text-lg font-bold">Magic Remix Engine</p>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-gray-600 leading-relaxed dark:text-gray-400">Describe any changes you want and our AI will remix any component instantly. Supports all frameworks and design systems.</p>
        <div className="mt-4 flex gap-2">
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900">Try it now</button>
          <button className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">Watch demo</button>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 7. Maintenance Notice ────────────────────────────────────
  {
    id: "announce-maintenance",
    title: "Scheduled maintenance notice",
    description: "System maintenance warning with date, time, and status indicator.",
    categorySlug: "announcements",
    tags: ["maintenance", "system", "warning", "downtime"],
    previewKind: "alert-warning",
    featured: 7, createdAt: ago(3), likes: 2100, views: 27000, authorIdx: 6,
    prompt: "A maintenance notice banner with warning icon, schedule details, and dismiss button.",
    code: `import { useState } from 'react';
export function MaintenanceNotice() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-4 dark:border-amber-900/50 dark:from-amber-950/20 dark:to-orange-950/20">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0 rounded-lg bg-amber-100 p-1.5 dark:bg-amber-900/40">
          <svg className="h-4 w-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-amber-900 dark:text-amber-200">Scheduled Maintenance</h4>
          <p className="mt-0.5 text-xs text-amber-700/80 dark:text-amber-300/70">Our systems will undergo maintenance on <span className="font-semibold">Saturday, April 20th from 2:00–4:00 AM UTC</span>. Some services may be temporarily unavailable.</p>
          <div className="mt-2.5 flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-amber-600 dark:text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Estimated downtime: ~2 hours
            </span>
          </div>
        </div>
        <button onClick={() => setShow(false)} className="shrink-0 rounded-md p-1 text-amber-400 transition hover:bg-amber-100 hover:text-amber-700 dark:hover:bg-amber-900/30">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>
  );
}`
  },

  // ─── 8. Corner Ribbon Badge ───────────────────────────────────
  {
    id: "announce-corner-ribbon",
    title: "Corner ribbon badge",
    description: "Diagonal corner ribbon for product cards showing status like NEW, SALE, or BETA.",
    categorySlug: "announcements",
    tags: ["ribbon", "corner", "badge", "label"],
    previewKind: "card-product",
    featured: 7, createdAt: ago(3), likes: 1900, views: 24000, authorIdx: 7,
    prompt: "A card with a diagonal corner ribbon badge showing 'NEW' in bold white on a colored ribbon.",
    code: `export function CornerRibbon() {
  return (
    <div className="relative mx-auto h-52 w-72 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="absolute -right-10 top-5 z-10 rotate-45 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-12 py-1.5 text-center shadow-sm">
        <span className="text-[11px] font-bold uppercase tracking-wider text-white">NEW</span>
      </div>
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 p-4 dark:from-violet-950/30 dark:to-fuchsia-950/30">
          <span className="text-3xl"><Icon icon={Rocket} size={16} /></span>
        </div>
        <h3 className="mt-4 text-base font-bold text-gray-900 dark:text-white">Pro Plan</h3>
        <p className="mt-1 text-xs text-gray-500">Now with AI Remix engine included</p>
        <button className="mt-3 rounded-lg bg-gray-900 px-4 py-1.5 text-xs font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Upgrade</button>
      </div>
    </div>
  );
}`
  },

  // ─── 9. Slide-in Toast ────────────────────────────────────────
  {
    id: "announce-slideup-toast",
    title: "Slide-up announcement toast",
    description: "Bottom-anchored slide-up toast with icon, title, and action.",
    categorySlug: "announcements",
    tags: ["toast", "slide", "notification", "popup"],
    previewKind: "card-notification",
    featured: 8, createdAt: ago(2), likes: 3100, views: 39000, authorIdx: 0,
    prompt: "A bottom slide-up toast notification with sparkle icon, announcement text, try button, and dismiss.",
    code: `import { useState } from 'react';
export function SlideUpToast() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="flex justify-center py-4">
      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-3.5 shadow-2xl dark:border-gray-800 dark:bg-gray-900" style={{animation: 'slideUp 0.4s ease-out'}}>
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"/></svg>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">AI Remix is live! <Icon icon={Sparkles} size={16} /></p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Transform any component with natural language</p>
        </div>
        <button className="shrink-0 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900">Try it</button>
        <button onClick={() => setShow(false)} className="shrink-0 text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-300">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>
  );
}`
  },

  // ─── 10. Inline Dashboard Banner ──────────────────────────────
  {
    id: "announce-inline-dashboard",
    title: "Inline dashboard banner",
    description: "Contextual announcement banner for dashboards with icon and action button.",
    categorySlug: "announcements",
    tags: ["inline", "dashboard", "info", "notification"],
    previewKind: "alert-info",
    featured: 7, createdAt: ago(3), likes: 2400, views: 30000, authorIdx: 1,
    prompt: "A rounded inline announcement for dashboards with colored icon, message, and action button.",
    code: `export function InlineDashboardBanner() {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-sky-200 bg-sky-50/50 px-5 py-4 dark:border-sky-900/50 dark:bg-sky-950/20">
      <div className="shrink-0 rounded-xl bg-sky-100 p-3 dark:bg-sky-900/40">
        <svg className="h-5 w-5 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/></svg>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-sky-900 dark:text-sky-200">Your trial ends in 5 days</p>
        <p className="mt-0.5 text-xs text-sky-700/70 dark:text-sky-300/60">Upgrade to Pro to keep all your components, themes, and AI features.</p>
      </div>
      <button className="shrink-0 rounded-lg bg-sky-600 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-sky-700">Upgrade now</button>
    </div>
  );
}`
  },

  // ─── 11. Glassmorphism Floating Card ──────────────────────────
  {
    id: "announce-glass-floating",
    title: "Glassmorphism floating card",
    description: "Frosted glass announcement card with blur backdrop and subtle gradient.",
    categorySlug: "announcements",
    tags: ["glass", "frosted", "floating", "blur"],
    previewKind: "card-product",
    featured: 9, createdAt: ago(1), likes: 3600, views: 45000, authorIdx: 2,
    prompt: "A glassmorphism announcement card with frosted blur, gradient border, and animated shimmer.",
    code: `export function GlassAnnouncement() {
  return (
    <div className="flex justify-center py-6" style={{background: 'linear-gradient(135deg, #667eea22, #764ba222)'}}>
      <div className="w-80 rounded-2xl border border-white/20 bg-white/60 p-6 shadow-xl backdrop-blur-xl dark:border-gray-700/30 dark:bg-gray-900/60">
        <div className="flex items-center gap-2">
          <div className="rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 p-2">
            <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">What's new</span>
        </div>
        <h3 className="mt-3 text-base font-bold text-gray-900 dark:text-white">Component Remix Engine</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">AI-powered component remixing lets you transform any design with a simple prompt.</p>
        <div className="mt-4 flex gap-2">
          <button className="flex-1 rounded-xl bg-gray-900 py-2 text-xs font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Explore</button>
          <button className="flex-1 rounded-xl border border-gray-200/60 py-2 text-xs font-medium text-gray-700 hover:bg-white/50 dark:border-gray-700/60 dark:text-gray-300">Dismiss</button>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 12. Beta Access Strip ────────────────────────────────────
  {
    id: "announce-beta-strip",
    title: "Beta access announcement strip",
    description: "Compact announcement strip for beta/early access features with join waitlist CTA.",
    categorySlug: "announcements",
    tags: ["beta", "early-access", "strip", "waitlist"],
    previewKind: "badge-row",
    featured: 8, createdAt: ago(2), likes: 2800, views: 35000, authorIdx: 3,
    prompt: "A slim beta access announcement strip with beta badge, feature description, and join button.",
    code: `export function BetaStrip() {
  return (
    <div className="flex items-center justify-center gap-4 rounded-xl bg-gray-950 px-6 py-3 dark:bg-gray-900">
      <div className="flex items-center gap-2">
        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 ring-1 ring-emerald-500/30">BETA</span>
        <p className="text-sm text-gray-300"><span className="font-semibold text-white">Collaborative editing</span> is now in private beta</p>
      </div>
      <button className="shrink-0 rounded-lg border border-gray-700 bg-gray-800 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-gray-700">
        Join waitlist <Icon icon={ArrowRight} size={16} />
      </button>
    </div>
  );
}`
  },

  // ─── 13. Multi-line Expandable ────────────────────────────────
  {
    id: "announce-expandable",
    title: "Expandable announcement",
    description: "Compact announcement that expands to show full details on click.",
    categorySlug: "announcements",
    tags: ["expandable", "collapsible", "details", "compact"],
    previewKind: "accordion",
    featured: 8, createdAt: ago(2), likes: 2600, views: 33000, authorIdx: 4,
    prompt: "An expandable announcement card that toggles between compact and detailed view.",
    code: `import { useState } from 'react';
export function ExpandableAnnouncement() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mx-auto max-w-lg">
      <button onClick={() => setExpanded(!expanded)}
        className="w-full rounded-2xl border border-gray-200 bg-white p-4 text-left transition-all hover:border-violet-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-100 dark:bg-violet-900/30">
              <svg className="h-4 w-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/></svg>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Platform Update — April 2026</h4>
              <p className="text-xs text-gray-500">3 new features and 12 improvements</p>
            </div>
          </div>
          <svg className={"h-4 w-4 shrink-0 text-gray-400 transition-transform " + (expanded ? "rotate-180" : "")} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
        </div>
        {expanded && (
          <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 dark:border-gray-800">
            {['<Icon icon={Zap} size={16} /> 3x faster AI generation', '<Icon icon={Palette} size={16} /> New theme editor', '<Icon icon={BarChart} size={16} /> Analytics dashboard revamp'].map(item => (
              <p key={item} className="text-sm text-gray-600 dark:text-gray-400">{item}</p>
            ))}
            <a href="#" className="mt-2 inline-block text-xs font-semibold text-violet-600 dark:text-violet-400">Read full notes <Icon icon={ArrowRight} size={16} /></a>
          </div>
        )}
      </button>
    </div>
  );
}`
  },

  // ─── 14. Full-width Product Launch ────────────────────────────
  {
    id: "announce-product-launch",
    title: "Product launch hero banner",
    description: "Full-width product launch announcement with background pattern and CTA.",
    categorySlug: "announcements",
    tags: ["launch", "hero", "product", "fullwidth"],
    previewKind: "hero-gradient",
    featured: 10, createdAt: ago(0), likes: 5000, views: 64000, authorIdx: 5,
    prompt: "A full-width product launch hero announcement with dark gradient, decorative dots, heading, description, and dual CTA buttons.",
    code: `export function ProductLaunchBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-950 px-8 py-12 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.1),transparent_60%)]" />
      <div className="relative">
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-4 py-1.5">
          <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="h-2 w-2 rounded-full bg-emerald-500" /></span>
          <span className="text-xs font-medium text-gray-400">Now available</span>
        </div>
        <h2 className="mx-auto max-w-xl text-2xl font-bold text-white sm:text-3xl">
          Meet <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">21st Components</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-gray-400">The open-source component marketplace for React. Browse 600+ components, remix with AI, and ship faster.</p>
        <div className="mt-6 flex justify-center gap-3">
          <button className="rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-lg shadow-white/10 transition hover:bg-gray-100">Browse components</button>
          <button className="rounded-xl border border-gray-700 px-6 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-900 hover:text-white">Watch demo</button>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 15. Notification Bar with Progress ───────────────────────
  {
    id: "announce-progress-bar",
    title: "Progress announcement bar",
    description: "Notification bar with progress indicator for onboarding or setup completion.",
    categorySlug: "announcements",
    tags: ["progress", "onboarding", "setup", "bar"],
    previewKind: "progress-bar",
    featured: 8, createdAt: ago(2), likes: 2900, views: 36000, authorIdx: 6,
    prompt: "A notification bar showing onboarding progress with percentage, message, and continue button.",
    code: `export function ProgressBar() {
  const progress = 65;
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-100 dark:bg-violet-900/30">
            <svg className="h-4 w-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Setup your workspace</p>
            <p className="text-xs text-gray-500">{progress}% complete — 3 steps remaining</p>
          </div>
        </div>
        <button className="shrink-0 rounded-lg bg-violet-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-violet-700">Continue setup</button>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
        <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-500" style={{width: progress + '%'}} />
      </div>
    </div>
  );
}`
  },

  // ─── 16. Dark Solid Top Bar ───────────────────────────────────
  {
    id: "announce-dark-bar",
    title: "Dark solid announcement bar",
    description: "Dark background top bar with icon and CTA link.",
    categorySlug: "announcements",
    tags: ["dark", "bar", "solid", "top"],
    previewKind: "hero-gradient",
    featured: 8, createdAt: ago(2), likes: 3100, views: 40000, authorIdx: 7,
    prompt: "A dark solid-color announcement bar with sparkle icon, text, and arrow link.",
    code: `import { useState } from 'react';
export function DarkBar() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="flex items-center justify-center gap-3 bg-gray-950 px-4 py-2.5 text-sm">
      <span className="text-base"><Icon icon={Sparkles} size={16} /></span>
      <span className="text-gray-300">We just raised <span className="font-semibold text-white">$12M Series A</span> to build the future of UI.</span>
      <a href="#" className="font-semibold text-violet-400 hover:text-violet-300 transition">Read more <Icon icon={ArrowRight} size={16} /></a>
      <button onClick={() => setShow(false)} className="absolute right-3 text-gray-600 hover:text-gray-400">
        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  );
}`
  },

  // ─── 17. Blue Info Banner ────────────────────────────────────
  {
    id: "announce-blue-info",
    title: "Blue info announcement bar",
    description: "Solid blue information banner with NEW badge.",
    categorySlug: "announcements",
    tags: ["blue", "info", "banner", "badge"],
    previewKind: "alert-info",
    featured: 7, createdAt: ago(3), likes: 2300, views: 29000, authorIdx: 0,
    prompt: "A blue background announcement bar with NEW badge and message.",
    code: `import { useState } from 'react';
export function BlueInfoBar() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="flex items-center justify-between bg-blue-600 px-4 py-2.5 text-white">
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide">NEW</span>
        <p className="text-sm">We've updated our API — check the migration guide for breaking changes.</p>
      </div>
      <button onClick={() => setShow(false)} className="ml-4 shrink-0 text-white/60 hover:text-white transition">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  );
}`
  },

  // ─── 18. Newsletter Signup Bar ───────────────────────────────
  {
    id: "announce-newsletter",
    title: "Newsletter signup announcement",
    description: "Announcement bar with inline email input and subscribe button.",
    categorySlug: "announcements",
    tags: ["newsletter", "email", "signup", "subscribe"],
    previewKind: "hero-gradient",
    featured: 8, createdAt: ago(2), likes: 2700, views: 34000, authorIdx: 1,
    prompt: "An announcement bar with email input field and subscribe button for newsletter signup.",
    code: `export function NewsletterBar() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-100 dark:bg-violet-900/30">
            <svg className="h-4 w-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Stay in the loop</p>
            <p className="text-xs text-gray-500">Get weekly updates on new components and features.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <input type="email" placeholder="your@email.com" className="h-9 w-48 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-violet-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white" />
          <button className="shrink-0 rounded-lg bg-gray-900 px-4 py-2 text-xs font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Subscribe</button>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 19. Status Page Notice ──────────────────────────────────
  {
    id: "announce-status-page",
    title: "System status indicator",
    description: "Operational status notice with green/amber/red indicator dot.",
    categorySlug: "announcements",
    tags: ["status", "operational", "system", "uptime"],
    previewKind: "badge-row",
    featured: 7, createdAt: ago(3), likes: 2000, views: 25000, authorIdx: 2,
    prompt: "A system status indicator showing operational status with colored dots.",
    code: `export function StatusNotice() {
  const services = [
    { name: 'API', status: 'operational', color: 'bg-emerald-500' },
    { name: 'Dashboard', status: 'operational', color: 'bg-emerald-500' },
    { name: 'CDN', status: 'degraded', color: 'bg-amber-500' },
    { name: 'Auth', status: 'operational', color: 'bg-emerald-500' },
  ];
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">System Status</h4>
        <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> All systems operational
        </span>
      </div>
      <div className="space-y-2">
        {services.map(s => (
          <div key={s.name} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-800/50">
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{s.name}</span>
            <span className="inline-flex items-center gap-1.5 text-[11px] capitalize text-gray-500">
              <span className={"h-1.5 w-1.5 rounded-full " + s.color} /> {s.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}`
  },

  // ─── 20. Social Proof Bar ───────────────────────────────────
  {
    id: "announce-social-proof",
    title: "Social proof announcement",
    description: "Trust-building announcement with user count and avatars.",
    categorySlug: "announcements",
    tags: ["social-proof", "trust", "users", "avatars"],
    previewKind: "badge-row",
    featured: 8, createdAt: ago(2), likes: 2500, views: 31000, authorIdx: 3,
    prompt: "A social proof bar showing user avatars, count, and 5-star rating.",
    code: `export function SocialProofBar() {
  const colors = ['from-violet-400 to-purple-500','from-rose-400 to-pink-500','from-amber-400 to-orange-500','from-sky-400 to-blue-500','from-emerald-400 to-green-500'];
  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="flex -space-x-2">
          {colors.map((c,i) => <div key={i} className={"h-7 w-7 rounded-full bg-gradient-to-br ring-2 ring-white dark:ring-gray-900 " + c} />)}
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-gray-900 dark:text-white">Join 12,000+ developers</p>
          <div className="flex items-center gap-1 mt-0.5">
            {[1,2,3,4,5].map(i => <svg key={i} className="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
            <span className="ml-1 text-xs text-gray-500">4.9/5</span>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 21. Mobile Bottom Sheet ─────────────────────────────────
  {
    id: "announce-bottom-sheet",
    title: "Mobile bottom sheet notice",
    description: "Mobile-friendly bottom sheet for app update or permission request.",
    categorySlug: "announcements",
    tags: ["mobile", "bottom-sheet", "app", "update"],
    previewKind: "card-product",
    featured: 8, createdAt: ago(2), likes: 2400, views: 30000, authorIdx: 4,
    prompt: "A mobile bottom sheet announcement with grab handle, icon, title, and action buttons.",
    code: `export function BottomSheetNotice() {
  return (
    <div className="mx-auto w-80">
      <div className="rounded-t-2xl border border-b-0 border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
        <div className="flex justify-center pt-3 pb-1"><div className="h-1 w-10 rounded-full bg-gray-300 dark:bg-gray-700" /></div>
        <div className="px-5 pb-5">
          <div className="flex items-center gap-3 mt-2">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-100 dark:bg-blue-900/30">
              <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Update available</h3>
              <p className="text-xs text-gray-500">Version 3.2.1 includes bug fixes and improvements.</p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-xl bg-blue-600 py-2.5 text-xs font-semibold text-white hover:bg-blue-700">Update now</button>
            <button className="flex-1 rounded-xl border border-gray-200 py-2.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">Later</button>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 22. Read the Docs Banner ───────────────────────────────
  {
    id: "announce-read-docs",
    title: "Read the documentation banner",
    description: "Developer-focused banner pointing to documentation.",
    categorySlug: "announcements",
    tags: ["docs", "documentation", "developer", "guide"],
    previewKind: "hero-gradient",
    featured: 7, createdAt: ago(3), likes: 1800, views: 22000, authorIdx: 5,
    prompt: "A large bold text announcement telling users to read the documentation with a subtle link.",
    code: `export function ReadDocsBanner() {
  return (
    <div className="rounded-2xl bg-gray-950 px-8 py-10 text-center">
      <h2 className="text-3xl font-bold text-white sm:text-4xl">Read the <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">docs</span></h2>
      <p className="mx-auto mt-3 max-w-md text-sm text-gray-400">Everything you need to integrate, customize, and deploy components in your project.</p>
      <div className="mt-6 flex justify-center gap-3">
        <a href="#" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-100">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>
          Documentation
        </a>
        <a href="#" className="rounded-xl border border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-900">Quick start guide</a>
      </div>
    </div>
  );
}`
  },

  // ─── 23. Split CTA Announcement ─────────────────────────────
  {
    id: "announce-split-cta",
    title: "Split CTA announcement",
    description: "Two-column announcement with message on left and CTA on right.",
    categorySlug: "announcements",
    tags: ["split", "cta", "two-column", "promotion"],
    previewKind: "hero-gradient",
    featured: 8, createdAt: ago(2), likes: 2600, views: 33000, authorIdx: 6,
    prompt: "A split announcement card with emoji icon, title and description on left, and button on right.",
    code: `export function SplitCTA() {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-4">
        <span className="text-3xl"><Icon icon={Target} size={16} /></span>
        <div>
          <h4 className="text-sm font-bold text-gray-900 dark:text-white">Ready to level up your UI?</h4>
          <p className="mt-0.5 text-xs text-gray-500">Get access to 600+ premium components and our AI Remix engine.</p>
        </div>
      </div>
      <button className="shrink-0 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-violet-500/20 transition hover:shadow-violet-500/40">Start free trial</button>
    </div>
  );
}`
  },

  // ─── 24. Notification Center Card ───────────────────────────
  {
    id: "announce-notif-center",
    title: "Notification center stack",
    description: "Stacked notification cards with unread indicators.",
    categorySlug: "announcements",
    tags: ["notification", "center", "stack", "unread"],
    previewKind: "card-notification",
    featured: 8, createdAt: ago(2), likes: 2900, views: 37000, authorIdx: 7,
    prompt: "A notification center showing stacked notification items with unread dots and timestamps.",
    code: `export function NotificationCenter() {
  const items = [
    { icon: '<Icon icon={Rocket} size={16} />', title: 'v3.2 is live', desc: 'Check out the new AI features', time: '2m ago', unread: true },
    { icon: '<Icon icon={MessageCircle} size={16} />', title: 'New comment', desc: 'Sarah mentioned you in Button component', time: '1h ago', unread: true },
    { icon: '⭐', title: 'Component featured', desc: 'Your DataTable was featured on the homepage', time: '3h ago', unread: false },
  ];
  return (
    <div className="mx-auto w-80 rounded-2xl border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 dark:border-gray-800">
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h4>
        <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">2 new</span>
      </div>
      <div className="divide-y divide-gray-100 dark:divide-gray-800">
        {items.map(n => (
          <div key={n.title} className={"flex items-start gap-3 px-4 py-3 transition hover:bg-gray-50 dark:hover:bg-gray-800/50 " + (n.unread ? 'bg-violet-50/30 dark:bg-violet-950/10' : '')}>
            <span className="mt-0.5 text-lg">{n.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{n.title}</p>
                {n.unread && <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />}
              </div>
              <p className="text-xs text-gray-500">{n.desc}</p>
            </div>
            <span className="shrink-0 text-[10px] text-gray-400">{n.time}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 px-4 py-2.5 text-center dark:border-gray-800">
        <a href="#" className="text-xs font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400">View all notifications</a>
      </div>
    </div>
  );
}`
  },

  // ─── 25. Minimal Text Announcement ──────────────────────────
  {
    id: "announce-minimal-text",
    title: "Minimal text announcement",
    description: "Ultra-clean single-line announcement with underline link.",
    categorySlug: "announcements",
    tags: ["minimal", "text", "clean", "simple"],
    previewKind: "badge-row",
    featured: 7, createdAt: ago(4), likes: 1700, views: 21000, authorIdx: 0,
    prompt: "An ultra-minimal single line announcement with subtle text and underlined link.",
    code: `export function MinimalText() {
  return (
    <div className="flex items-center justify-center py-3 text-sm text-gray-500 dark:text-gray-400">
      <span><Icon icon={PartyPopper} size={16} /></span>
      <span className="ml-2">We just launched our <a href="#" className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900 dark:text-white dark:decoration-gray-600 dark:hover:decoration-white transition">new component library</a></span>
    </div>
  );
}`
  },

  // ─── 26. Dark Glass Card ────────────────────────────────────
  {
    id: "announce-dark-glass",
    title: "Dark glassmorphism announcement",
    description: "Dark theme frosted glass card with gradient accents.",
    categorySlug: "announcements",
    tags: ["dark", "glass", "frosted", "premium"],
    previewKind: "card-product",
    featured: 9, createdAt: ago(1), likes: 3400, views: 43000, authorIdx: 1,
    prompt: "A dark glassmorphism announcement card with blurred background and gradient accent.",
    code: `export function DarkGlassCard() {
  return (
    <div className="rounded-2xl bg-gray-950 p-1">
      <div className="rounded-xl border border-gray-800/50 bg-gray-900/80 p-5 backdrop-blur-xl">
        <div className="flex items-start gap-4">
          <div className="relative shrink-0">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 opacity-30 blur-sm" />
            <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-gray-800 text-lg"><Icon icon={Zap} size={16} /></div>
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-white">Lightning-fast builds</h3>
            <p className="mt-1 text-xs leading-relaxed text-gray-400">Our new build engine is 10x faster. Deploy your components in under 2 seconds.</p>
            <div className="mt-3 flex gap-2">
              <button className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 transition hover:bg-gray-100">Try it out</button>
              <button className="rounded-lg border border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-400 transition hover:text-white">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 27. Warning Alert Banner ───────────────────────────────
  {
    id: "announce-warning-alert",
    title: "Warning alert announcement",
    description: "Destructive warning announcement with red accent.",
    categorySlug: "announcements",
    tags: ["warning", "alert", "destructive", "danger"],
    previewKind: "alert-warning",
    featured: 7, createdAt: ago(3), likes: 2200, views: 28000, authorIdx: 2,
    prompt: "A red/destructive warning alert with icon, message, and action buttons.",
    code: `import { useState } from 'react';
export function WarningAlert() {
  const [show, setShow] = useState(true);
  if (!show) return null;
  return (
    <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-900/50 dark:bg-rose-950/20">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0 rounded-lg bg-rose-100 p-1.5 dark:bg-rose-900/40">
          <svg className="h-4 w-4 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-rose-900 dark:text-rose-200">Account suspension warning</h4>
          <p className="mt-0.5 text-xs text-rose-700/80 dark:text-rose-300/70">Your account has exceeded the API rate limit. Please upgrade your plan or reduce usage to avoid suspension.</p>
          <div className="mt-3 flex gap-2">
            <button className="rounded-lg bg-rose-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-rose-700">Upgrade plan</button>
            <button onClick={() => setShow(false)} className="rounded-lg px-3 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100 dark:text-rose-300">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 28. Success Toast ──────────────────────────────────────
  {
    id: "announce-success-toast",
    title: "Success announcement toast",
    description: "Green success toast notification with checkmark.",
    categorySlug: "announcements",
    tags: ["success", "toast", "green", "checkmark"],
    previewKind: "card-notification",
    featured: 7, createdAt: ago(3), likes: 2100, views: 26000, authorIdx: 3,
    prompt: "A green success toast with animated checkmark and auto-dismiss timer.",
    code: `export function SuccessToast() {
  return (
    <div className="flex justify-center py-4">
      <div className="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 shadow-lg dark:border-emerald-900/50 dark:bg-emerald-950/30">
        <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24"><path strokeLinecap="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">Component published!</p>
          <p className="text-xs text-emerald-600/70 dark:text-emerald-400/70">Your Dropdown is now live on the marketplace.</p>
        </div>
        <button className="ml-2 shrink-0 text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-300">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
    </div>
  );
}`
  },

  // ─── 29. Multi-color Rainbow Bar ────────────────────────────
  {
    id: "announce-rainbow-bar",
    title: "Rainbow gradient announcement bar",
    description: "Eye-catching multi-color gradient announcement strip.",
    categorySlug: "announcements",
    tags: ["rainbow", "gradient", "colorful", "eye-catching"],
    previewKind: "hero-gradient",
    featured: 9, createdAt: ago(1), likes: 3300, views: 42000, authorIdx: 4,
    prompt: "A vibrant rainbow gradient bar with white text and CTA link.",
    code: `export function RainbowBar() {
  return (
    <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 px-4 py-2.5 text-sm text-white">
      <span className="font-medium"><Icon icon={Rainbow} size={16} /> Pride Month — Celebrating diversity in tech!</span>
      <a href="#" className="rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold backdrop-blur-sm transition hover:bg-white/30">Our story <Icon icon={ArrowRight} size={16} /></a>
    </div>
  );
}`
  },

  // ─── 30. Pricing Change Notice ──────────────────────────────
  {
    id: "announce-pricing-change",
    title: "Pricing change notice",
    description: "Advance notice of upcoming pricing changes with comparison.",
    categorySlug: "announcements",
    tags: ["pricing", "change", "notice", "billing"],
    previewKind: "card-product",
    featured: 8, createdAt: ago(2), likes: 2500, views: 31000, authorIdx: 5,
    prompt: "A pricing change notification card showing current vs new pricing with effective date.",
    code: `export function PricingChange() {
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-amber-100 p-1.5 dark:bg-amber-900/30">
          <svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Pricing update effective May 1</h4>
      </div>
      <div className="mt-3 flex items-center gap-4">
        <div className="flex-1 rounded-lg bg-gray-50 p-3 text-center dark:bg-gray-800">
          <p className="text-[10px] font-medium uppercase text-gray-400">Current</p>
          <p className="text-lg font-bold text-gray-400 line-through">$29</p>
        </div>
        <svg className="h-4 w-4 shrink-0 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        <div className="flex-1 rounded-lg bg-violet-50 p-3 text-center ring-1 ring-violet-200 dark:bg-violet-950/20 dark:ring-violet-800">
          <p className="text-[10px] font-medium uppercase text-violet-500">New</p>
          <p className="text-lg font-bold text-violet-600 dark:text-violet-400">$39</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-gray-500">Lock in the current price by upgrading before May 1st.</p>
      <button className="mt-3 w-full rounded-lg bg-gray-900 py-2 text-xs font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Lock current price</button>
    </div>
  );
}`
  },

  // ─── 31. Security Notice ────────────────────────────────────
  {
    id: "announce-security",
    title: "Security announcement notice",
    description: "Security advisory with shield icon and action steps.",
    categorySlug: "announcements",
    tags: ["security", "advisory", "shield", "important"],
    previewKind: "alert-warning",
    featured: 8, createdAt: ago(2), likes: 2700, views: 34000, authorIdx: 6,
    prompt: "A security notice with shield icon, advisory text, and required action button.",
    code: `export function SecurityNotice() {
  return (
    <div className="rounded-xl border border-violet-200 bg-violet-50/50 p-4 dark:border-violet-900/50 dark:bg-violet-950/20">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 shrink-0 rounded-lg bg-violet-100 p-1.5 dark:bg-violet-900/40">
          <svg className="h-4 w-4 text-violet-600 dark:text-violet-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-violet-900 dark:text-violet-200">Two-factor authentication recommended</h4>
          <p className="mt-0.5 text-xs text-violet-700/70 dark:text-violet-300/60">Secure your account by enabling 2FA. This adds an extra layer of protection to your components and API keys.</p>
          <button className="mt-3 rounded-lg bg-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-violet-700 transition">Enable 2FA</button>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 32. API Deprecation Notice ─────────────────────────────
  {
    id: "announce-api-deprecation",
    title: "API deprecation warning",
    description: "Developer-facing API deprecation notice with migration link.",
    categorySlug: "announcements",
    tags: ["api", "deprecation", "developer", "migration"],
    previewKind: "alert-warning",
    featured: 7, createdAt: ago(3), likes: 1900, views: 24000, authorIdx: 7,
    prompt: "A code-styled API deprecation notice with terminal-like formatting.",
    code: `export function APIDeprecation() {
  return (
    <div className="rounded-xl border border-amber-200 bg-white p-4 dark:border-amber-900/50 dark:bg-gray-900">
      <div className="flex items-center gap-2 mb-3">
        <span className="rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">DEPRECATED</span>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">v2 API endpoints</h4>
      </div>
      <div className="rounded-lg bg-gray-950 p-3 font-mono dark:bg-gray-800">
        <p className="text-xs text-gray-500">// These endpoints will be removed on June 1, 2026</p>
        <p className="text-xs text-rose-400 mt-1"><span className="text-gray-600">-</span> GET /api/v2/components</p>
        <p className="text-xs text-rose-400"><span className="text-gray-600">-</span> POST /api/v2/publish</p>
        <p className="text-xs text-emerald-400 mt-1"><span className="text-gray-600">+</span> GET /api/v3/components</p>
        <p className="text-xs text-emerald-400"><span className="text-gray-600">+</span> POST /api/v3/publish</p>
      </div>
      <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-700 dark:text-amber-400">Migration guide <Icon icon={ArrowRight} size={16} /></a>
    </div>
  );
}`
  },

  // ─── 33. Conference/Event Promo ─────────────────────────────
  {
    id: "announce-event-promo",
    title: "Event conference promo",
    description: "Conference or event promotional banner with date and registration.",
    categorySlug: "announcements",
    tags: ["event", "conference", "promo", "registration"],
    previewKind: "hero-gradient",
    featured: 9, createdAt: ago(1), likes: 3100, views: 39000, authorIdx: 0,
    prompt: "A conference promotional banner with gradient background, event name, date, and register button.",
    code: `export function EventPromo() {
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 p-8 text-center text-white">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/60">Virtual Event</p>
      <h2 className="mt-2 text-2xl font-bold">ComponentConf 2026</h2>
      <p className="mt-2 text-sm text-white/80">The largest gathering of UI engineers and design system builders.</p>
      <div className="mt-4 flex items-center justify-center gap-4 text-sm">
        <span className="inline-flex items-center gap-1.5">
          <svg className="h-4 w-4 text-white/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
          May 15-17, 2026
        </span>
        <span className="inline-flex items-center gap-1.5">
          <svg className="h-4 w-4 text-white/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>
          5,000+ attendees
        </span>
      </div>
      <button className="mt-6 rounded-xl bg-white px-8 py-3 text-sm font-bold text-violet-700 shadow-lg transition hover:bg-gray-100">Register free <Icon icon={ArrowRight} size={16} /></button>
    </div>
  );
}`
  },

  // ─── 34. Hiring Banner ──────────────────────────────────────
  {
    id: "announce-hiring",
    title: "We're hiring banner",
    description: "Job recruitment announcement with role highlights.",
    categorySlug: "announcements",
    tags: ["hiring", "jobs", "recruitment", "careers"],
    previewKind: "hero-gradient",
    featured: 7, createdAt: ago(3), likes: 2000, views: 25000, authorIdx: 1,
    prompt: "A hiring announcement banner showing open positions with emoji icons.",
    code: `export function HiringBanner() {
  const roles = [
    { emoji: '<Icon icon={User} size={16} />‍<Icon icon={Laptop} size={16} />', title: 'Senior Frontend Engineer' },
    { emoji: '<Icon icon={Palette} size={16} />', title: 'Design Systems Lead' },
    { emoji: '<Icon icon={Bot} size={16} />', title: 'AI/ML Engineer' },
  ];
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-2 mb-1">
        <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">HIRING</span>
      </div>
      <h3 className="text-base font-bold text-gray-900 dark:text-white">We're growing our team! <Icon icon={PartyPopper} size={16} /></h3>
      <p className="mt-1 text-sm text-gray-500">Join us in building the future of component development.</p>
      <div className="mt-4 space-y-2">
        {roles.map(r => (
          <a key={r.title} href="#" className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5 transition hover:border-violet-200 hover:bg-violet-50 dark:border-gray-800 dark:bg-gray-800/50 dark:hover:border-violet-700 dark:hover:bg-violet-950/20">
            <span className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">{r.emoji} {r.title}</span>
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
          </a>
        ))}
      </div>
    </div>
  );
}`
  },

  // ─── 35. Referral Program ───────────────────────────────────
  {
    id: "announce-referral",
    title: "Referral program announcement",
    description: "Referral invite card with reward details and share CTA.",
    categorySlug: "announcements",
    tags: ["referral", "invite", "reward", "share"],
    previewKind: "card-product",
    featured: 8, createdAt: ago(2), likes: 2600, views: 33000, authorIdx: 2,
    prompt: "A referral program announcement card with reward amount, description, and invite button.",
    code: `export function ReferralCard() {
  return (
    <div className="mx-auto max-w-sm rounded-2xl border border-gray-200 bg-gradient-to-b from-white to-violet-50/30 p-6 dark:border-gray-800 dark:from-gray-900 dark:to-violet-950/10">
      <div className="text-center">
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-violet-100 text-2xl dark:bg-violet-900/30"><Icon icon={Gift} size={16} /></div>
        <h3 className="mt-3 text-base font-bold text-gray-900 dark:text-white">Give $10, Get $10</h3>
        <p className="mt-1 text-sm text-gray-500">Invite friends and you'll both get $10 in credits when they sign up for Pro.</p>
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-gray-200 bg-white p-1.5 dark:border-gray-700 dark:bg-gray-800">
          <input readOnly value="https://21st.dev/invite/SARAH42" className="flex-1 truncate bg-transparent px-2 text-xs text-gray-600 outline-none dark:text-gray-300" />
          <button className="shrink-0 rounded-md bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Copy</button>
        </div>
        <p className="mt-3 text-[11px] text-gray-400">You've earned $30 from 3 referrals so far</p>
      </div>
    </div>
  );
}`
  },

  // ─── 36. Accessibility Notice ───────────────────────────────
  {
    id: "announce-accessibility",
    title: "Accessibility improvement notice",
    description: "WCAG compliance achievement announcement.",
    categorySlug: "announcements",
    tags: ["accessibility", "a11y", "wcag", "compliance"],
    previewKind: "badge-row",
    featured: 7, createdAt: ago(4), likes: 1600, views: 20000, authorIdx: 3,
    prompt: "An accessibility compliance banner highlighting WCAG 2.1 AA achievement.",
    code: `export function A11yNotice() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 px-5 py-3 dark:border-emerald-900/50 dark:bg-emerald-950/20">
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
          <svg className="h-4 w-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"/></svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">WCAG 2.1 AA Compliant</p>
          <p className="text-xs text-emerald-600/70 dark:text-emerald-400/60">All components now meet accessibility standards.</p>
        </div>
      </div>
    </div>
  );
}`
  },

  // ─── 37. Dark Gradient CTA Bar ──────────────────────────────
  {
    id: "announce-dark-gradient-cta",
    title: "Dark gradient CTA bar",
    description: "Full-width dark gradient bar with text and prominent CTA button.",
    categorySlug: "announcements",
    tags: ["dark", "gradient", "cta", "fullwidth"],
    previewKind: "hero-gradient",
    featured: 9, createdAt: ago(1), likes: 3500, views: 44000, authorIdx: 4,
    prompt: "A full-width dark gradient bar from black to dark violet with CTA.",
    code: `export function DarkGradientCTA() {
  return (
    <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950 px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-violet-500/20 backdrop-blur">
          <svg className="h-4 w-4 text-violet-400" fill="currentColor" viewBox="0 0 24 24"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Unlock AI superpowers</p>
          <p className="text-xs text-gray-400">Generate, remix, and deploy components with natural language.</p>
        </div>
      </div>
      <button className="shrink-0 rounded-lg bg-violet-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400">Get Pro <Icon icon={ArrowRight} size={16} /></button>
    </div>
  );
}`
  },

  // ─── 38. Minimal Pill Link ──────────────────────────────────
  {
    id: "announce-pill-link",
    title: "Minimal pill with arrow link",
    description: "Ultra-compact pill announcement with icon and link.",
    categorySlug: "announcements",
    tags: ["pill", "minimal", "compact", "link"],
    previewKind: "badge-row",
    featured: 7, createdAt: ago(4), likes: 1500, views: 19000, authorIdx: 5,
    prompt: "A minimal compact pill banner with star icon, text, and chevron.",
    code: `export function MinimalPillLink() {
  return (
    <div className="flex items-center justify-center py-6">
      <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm transition hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
        <span className="text-amber-500">⭐</span>
        <span className="font-medium text-gray-700 dark:text-gray-300">Star us on GitHub</span>
        <svg className="h-3.5 w-3.5 text-gray-400 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/></svg>
      </a>
    </div>
  );
}`
  },

  // ─── 39. Animated Marquee Bar ───────────────────────────────
  {
    id: "announce-marquee",
    title: "Scrolling marquee announcement",
    description: "Auto-scrolling text announcement bar with ticker effect.",
    categorySlug: "announcements",
    tags: ["marquee", "scrolling", "ticker", "animated"],
    previewKind: "hero-gradient",
    featured: 8, createdAt: ago(2), likes: 2800, views: 35000, authorIdx: 6,
    prompt: "A horizontal scrolling marquee announcement bar with repeated text.",
    code: `export function MarqueeBar() {
  const text = '<Icon icon={Sparkles} size={16} /> New Release — v3.2 is here with AI Remix, Dark Mode, and 200+ new components    ';
  return (
    <div className="overflow-hidden bg-gray-950 py-2.5">
      <div className="flex whitespace-nowrap" style={{animation: 'marquee 20s linear infinite'}}>
        {[0,1,2,3].map(i => (
          <span key={i} className="mx-4 text-sm text-gray-300">{text}</span>
        ))}
      </div>
      <style>{'@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}'}</style>
    </div>
  );
}`
  },

  // ─── 40. Stacked Cards Announcement ─────────────────────────
  {
    id: "announce-stacked-cards",
    title: "Stacked layered announcement",
    description: "Layered card stack showing depth with shadow effect.",
    categorySlug: "announcements",
    tags: ["stacked", "layered", "cards", "depth"],
    previewKind: "card-product",
    featured: 8, createdAt: ago(2), likes: 2400, views: 30000, authorIdx: 7,
    prompt: "A stacked cards effect showing an announcement with depth layers behind it.",
    code: `export function StackedAnnouncement() {
  return (
    <div className="flex justify-center py-8">
      <div className="relative">
        <div className="absolute left-2 top-2 h-full w-full rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800" />
        <div className="absolute left-1 top-1 h-full w-full rounded-2xl border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/70" />
        <div className="relative w-80 rounded-2xl border border-gray-200 bg-white p-5 shadow-lg dark:border-gray-800 dark:bg-gray-900">
          <div className="flex items-center gap-2 mb-3">
            <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-[10px] font-bold text-rose-700 dark:bg-rose-900/30 dark:text-rose-400">3 UPDATES</span>
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">This week's highlights</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-violet-500" /> New AI model for code generation</li>
            <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-violet-500" /> 50+ new Tailwind components</li>
            <li className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-violet-500" /> Performance dashboard</li>
          </ul>
          <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-violet-600 dark:text-violet-400">View all updates <Icon icon={ArrowRight} size={16} /></a>
        </div>
      </div>
    </div>
  );
}`
  },
];

