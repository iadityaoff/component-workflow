/**
 * PHASE 5 — BATCH 2: EXPANSION
 * ═══════════════════════════════════════════════════════════════════
 * Focus areas for this batch (per user priority):
 *   • High-volume UI: Buttons, Inputs, Cards, Selects, Sliders
 *   • Marketing sections: Heroes, Features, CTAs, Pricing, Testimonials
 *   • AI-era surfaces: AI Chats, Tooltips, Popovers, Empty States
 *   • Thin-category fills: Dropdowns, Checkboxes, Calendars, Date Pickers,
 *       Radio Groups, Sign Ins, Sign Ups, Tables, Paginations
 *
 * Variant dimension bias: style-first (Minimal / Modern SaaS / Glass /
 * Neumorphism / Dark / Enterprise). States & sizes handled via CSS.
 *
 * All IDs prefixed `b2-` to guarantee no collision with earlier batches.
 * ═══════════════════════════════════════════════════════════════════
 */
import { ago } from "./base";
import type { VariantSpec } from "./base";

export const BATCH_2_EXPANSION: VariantSpec[] = [
  // ══════════════════════════════════════════════════════════════════
  // BUTTONS (+8 style-first variants)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-btn-minimal-ghost", title: "Minimal ghost button", description: "Underline-on-hover ghost button for dense UI.", categorySlug: "buttons", tags: ["button","minimal","ghost"],
    prompt: "A borderless minimal ghost button that underlines on hover.", previewKind: "button-ghost", featured: 6, createdAt: ago(2), likes: 420, views: 6400, authorIdx: 0,
    code: `export function MinimalGhostButton() {
  return (
    <button className="rounded-md px-3 py-1.5 text-sm font-medium text-ink-700 transition hover:text-ink-900 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-ink-300 dark:hover:text-white">
      View details
    </button>
  );
}` },
  { id: "b2-btn-modern-gradient", title: "Modern SaaS gradient CTA", description: "Violet-to-indigo gradient with soft shadow for landing CTAs.", categorySlug: "buttons", tags: ["button","gradient","saas","cta"],
    prompt: "Modern SaaS gradient CTA button with shadow.", previewKind: "button-gradient", featured: 9, createdAt: ago(1), likes: 2100, views: 34000, authorIdx: 1,
    code: `import { ArrowRight } from 'lucide-react';
export function ModernGradientCTA() {
  return (
    <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-violet-500/20 transition hover:shadow-lg hover:shadow-violet-500/30 focus-visible:ring-2 focus-visible:ring-violet-500">
      Start free trial
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </button>
  );
}` },
  { id: "b2-btn-glass-frost", title: "Glassmorphic frosted button", description: "Backdrop-blur translucent button for hero overlays.", categorySlug: "buttons", tags: ["button","glass","backdrop-blur"],
    prompt: "Glassmorphism frosted button designed to sit on a gradient hero.", previewKind: "button-outline", featured: 7, createdAt: ago(3), likes: 680, views: 9100, authorIdx: 5,
    code: `export function FrostedGlassButton() {
  return (
    <button className="rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/60">
      Explore the demo
    </button>
  );
}` },
  { id: "b2-btn-neuo-soft", title: "Neumorphic soft button", description: "Inset+outer shadow soft-UI button on off-white surface.", categorySlug: "buttons", tags: ["button","neumorphism","soft"],
    prompt: "Soft-UI neumorphism button with dual shadow.", previewKind: "button-outline", featured: 5, createdAt: ago(4), likes: 310, views: 4200, authorIdx: 3,
    code: `export function NeumorphicButton() {
  return (
    <button
      className="rounded-2xl bg-[#e6e7ee] px-6 py-3 text-sm font-semibold text-ink-700 transition active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff]"
      style={{ boxShadow: '6px 6px 12px #b8b9be, -6px -6px 12px #ffffff' }}
    >
      Submit
    </button>
  );
}` },
  { id: "b2-btn-dark-neon", title: "Dark UI neon button", description: "Neon-outlined pill button for dark dashboards.", categorySlug: "buttons", tags: ["button","dark","neon"],
    prompt: "Neon-glow outline button tuned for dark UI.", previewKind: "button-gradient", featured: 8, createdAt: ago(2), likes: 1540, views: 19800, authorIdx: 6,
    code: `export function DarkNeonButton() {
  return (
    <button className="rounded-full border border-cyan-400/60 bg-ink-950 px-5 py-2 text-sm font-medium text-cyan-300 shadow-[0_0_16px_-2px_rgba(34,211,238,0.6)] transition hover:bg-cyan-400/10 hover:shadow-[0_0_24px_-2px_rgba(34,211,238,0.8)] focus-visible:ring-2 focus-visible:ring-cyan-400">
      Deploy now
    </button>
  );
}` },
  { id: "b2-btn-enterprise-split", title: "Enterprise split button", description: "Primary action + dropdown caret split button for admin consoles.", categorySlug: "buttons", tags: ["button","enterprise","split","admin"],
    prompt: "Enterprise split button combining primary action with caret menu trigger.", previewKind: "button-primary", featured: 7, createdAt: ago(3), likes: 520, views: 7200, authorIdx: 2,
    code: `import { ChevronDown } from 'lucide-react';
export function EnterpriseSplitButton() {
  return (
    <div className="inline-flex divide-x divide-blue-800 rounded-lg bg-blue-600 text-white shadow-sm">
      <button className="px-4 py-2 text-sm font-semibold hover:bg-blue-700 rounded-l-lg focus-visible:ring-2 focus-visible:ring-blue-400">Save record</button>
      <button aria-label="More save options" className="px-2 hover:bg-blue-700 rounded-r-lg focus-visible:ring-2 focus-visible:ring-blue-400">
        <ChevronDown className="h-4 w-4" />
      </button>
    </div>
  );
}` },
  { id: "b2-btn-loading-spin", title: "Loading state button", description: "Primary button with inline spinner during async actions.", categorySlug: "buttons", tags: ["button","loading","spinner","state"],
    prompt: "Button with loading spinner and disabled state.", previewKind: "button-loading", featured: 6, createdAt: ago(5), likes: 820, views: 11400, authorIdx: 4,
    code: `import { Loader2 } from 'lucide-react';
import { useState } from 'react';
export function LoadingButton() {
  const [loading, setLoading] = useState(false);
  return (
    <button
      onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1800); }}
      disabled={loading}
      className="inline-flex items-center gap-2 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-800 disabled:opacity-70 dark:bg-white dark:text-ink-900"
    >
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {loading ? 'Publishing...' : 'Publish changes'}
    </button>
  );
}` },
  { id: "b2-btn-destructive-confirm", title: "Destructive confirm button", description: "Red destructive button with focus ring for delete flows.", categorySlug: "buttons", tags: ["button","destructive","delete"],
    prompt: "Destructive delete button with high-contrast focus ring.", previewKind: "button-destructive", featured: 7, createdAt: ago(2), likes: 610, views: 8400, authorIdx: 7,
    code: `import { Trash2 } from 'lucide-react';
export function DestructiveConfirmButton() {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-ink-950">
      <Trash2 className="h-4 w-4" />
      Delete account
    </button>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // INPUTS (+6)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-input-floating-label", title: "Floating label input", description: "Material-style floating-label text input.", categorySlug: "inputs", tags: ["input","floating","label","material"],
    prompt: "Floating label input that animates the label into the border on focus.", previewKind: "input-floating", featured: 8, createdAt: ago(1), likes: 1320, views: 17600, authorIdx: 0,
    code: `export function FloatingLabelInput() {
  return (
    <label className="relative block">
      <input
        type="text"
        placeholder=" "
        className="peer block w-full rounded-lg border border-ink-300 bg-transparent px-3 pt-5 pb-2 text-sm text-ink-900 focus:border-violet-500 focus:ring-0 dark:border-ink-700 dark:text-white"
      />
      <span className="pointer-events-none absolute left-3 top-2 text-xs text-ink-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-violet-500">
        Full name
      </span>
    </label>
  );
}` },
  { id: "b2-input-search-cmdk", title: "Command-bar search input", description: "Global search with kbd hint and leading icon.", categorySlug: "inputs", tags: ["input","search","cmdk","kbd"],
    prompt: "Global command-bar style search input with keyboard shortcut hint.", previewKind: "input-search", featured: 9, createdAt: ago(0), likes: 2400, views: 31000, authorIdx: 5,
    code: `import { Search } from 'lucide-react';
export function CommandSearchInput() {
  return (
    <div className="relative w-full max-w-md">
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
      <input
        type="search"
        placeholder="Search components..."
        className="w-full rounded-xl border border-ink-200 bg-white py-2 pl-9 pr-14 text-sm text-ink-900 placeholder:text-ink-400 focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 dark:border-ink-800 dark:bg-ink-900 dark:text-white"
      />
      <kbd className="pointer-events-none absolute right-2 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded border border-ink-200 bg-ink-50 px-1.5 py-0.5 text-[10px] font-medium text-ink-500 dark:border-ink-700 dark:bg-ink-800">
        ⌘K
      </kbd>
    </div>
  );
}` },
  { id: "b2-input-password-toggle", title: "Password with visibility toggle", description: "Password field with eye-icon show/hide toggle.", categorySlug: "inputs", tags: ["input","password","toggle","security"],
    prompt: "Password input with visibility toggle and focus ring.", previewKind: "input-password", featured: 7, createdAt: ago(2), likes: 1080, views: 14200, authorIdx: 3,
    code: `import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
export function PasswordInput() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        className="w-full rounded-lg border border-ink-300 bg-white px-3 py-2 pr-10 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
      />
      <button
        type="button"
        onClick={() => setShow(v => !v)}
        aria-label={show ? 'Hide password' : 'Show password'}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-ink-500 hover:text-ink-700 focus-visible:ring-2 focus-visible:ring-violet-500"
      >
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}` },
  { id: "b2-input-otp-6", title: "6-digit OTP input", description: "Six segmented OTP boxes with auto-advance.", categorySlug: "inputs", tags: ["input","otp","auth","code"],
    prompt: "Six-cell OTP input with auto-focus-next-digit behavior.", previewKind: "input-floating", featured: 8, createdAt: ago(2), likes: 1760, views: 22400, authorIdx: 7,
    code: `import { useRef } from 'react';
export function OtpInput() {
  const refs = useRef<(HTMLInputElement | null)[]>([]);
  return (
    <div className="flex gap-2" role="group" aria-label="One-time passcode">
      {Array.from({ length: 6 }).map((_, i) => (
        <input
          key={i}
          ref={el => (refs.current[i] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          onChange={e => { if (e.target.value && i < 5) refs.current[i + 1]?.focus(); }}
          className="h-12 w-10 rounded-lg border border-ink-300 bg-white text-center text-lg font-semibold focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
        />
      ))}
    </div>
  );
}` },
  { id: "b2-input-currency", title: "Currency amount input", description: "Input prefixed with currency symbol for billing screens.", categorySlug: "inputs", tags: ["input","currency","money","billing"],
    prompt: "Currency input with USD prefix and right-aligned decimal hint.", previewKind: "input-floating", featured: 6, createdAt: ago(4), likes: 540, views: 7800, authorIdx: 2,
    code: `export function CurrencyInput() {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-500">$</span>
      <input
        type="number"
        step="0.01"
        placeholder="0.00"
        className="w-full rounded-lg border border-ink-300 bg-white py-2 pl-7 pr-12 text-right text-sm tabular-nums focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 dark:border-ink-700 dark:bg-ink-900 dark:text-white"
      />
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-400">USD</span>
    </div>
  );
}` },
  { id: "b2-input-error-message", title: "Input with inline error", description: "Invalid state input with aria-describedby error message.", categorySlug: "inputs", tags: ["input","error","validation","a11y"],
    prompt: "Input in error state with descriptive message tied via aria-describedby.", previewKind: "input-floating", featured: 6, createdAt: ago(3), likes: 480, views: 6600, authorIdx: 4,
    code: `import { AlertCircle } from 'lucide-react';
export function InputWithError() {
  return (
    <div>
      <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink-700 dark:text-ink-200">Work email</label>
      <input
        id="email"
        type="email"
        defaultValue="not-an-email"
        aria-invalid="true"
        aria-describedby="email-err"
        className="w-full rounded-lg border border-rose-500 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/40 dark:bg-ink-900 dark:text-white"
      />
      <p id="email-err" className="mt-1 flex items-center gap-1 text-xs text-rose-600">
        <AlertCircle className="h-3.5 w-3.5" />
        Enter a valid email address.
      </p>
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // CARDS (+5)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-card-product-tilt", title: "Product card with hover tilt", description: "E-commerce product card with hover lift & price tag.", categorySlug: "cards", tags: ["card","product","ecommerce","hover"],
    prompt: "Product card with hover lift, price tag, and quick-add button.", previewKind: "card-product", featured: 9, createdAt: ago(1), likes: 2200, views: 29500, authorIdx: 1,
    code: `import { ShoppingBag } from 'lucide-react';
export function ProductCard() {
  return (
    <article className="group rounded-2xl border border-ink-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-xl dark:border-ink-800 dark:bg-ink-900">
      <div className="aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-rose-200 to-amber-200" />
      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-sm font-semibold text-ink-900 dark:text-white">Aurora Running Shoe</h3>
          <p className="text-xs text-ink-500">Marathon-ready · 3 colors</p>
        </div>
        <span className="rounded-full bg-ink-900 px-2 py-0.5 text-xs font-semibold text-white dark:bg-white dark:text-ink-900">$149</span>
      </div>
      <button className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-ink-200 py-1.5 text-xs font-semibold text-ink-700 transition hover:bg-ink-50 dark:border-ink-800 dark:text-ink-200 dark:hover:bg-ink-800">
        <ShoppingBag className="h-3.5 w-3.5" /> Add to cart
      </button>
    </article>
  );
}` },
  { id: "b2-card-stat-delta", title: "Stat card with trend delta", description: "KPI card with sparkline-style delta badge.", categorySlug: "cards", tags: ["card","stat","dashboard","kpi"],
    prompt: "Dashboard KPI stat card with numeric value, label, and colored trend delta.", previewKind: "card-stat", featured: 8, createdAt: ago(2), likes: 1480, views: 19000, authorIdx: 3,
    code: `import { TrendingUp } from 'lucide-react';
export function StatCardDelta() {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <p className="text-xs font-medium uppercase tracking-wide text-ink-500">Monthly recurring revenue</p>
      <div className="mt-2 flex items-end justify-between gap-2">
        <span className="text-3xl font-bold tabular-nums text-ink-900 dark:text-white">$48,291</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
          <TrendingUp className="h-3 w-3" /> +12.4%
        </span>
      </div>
      <p className="mt-1 text-xs text-ink-500">vs. last 30 days</p>
    </div>
  );
}` },
  { id: "b2-card-pricing-glow", title: "Glowing popular pricing card", description: "Pricing card with gradient border ring for the 'popular' plan.", categorySlug: "pricing-sections", tags: ["pricing","card","gradient","popular"],
    prompt: "Featured pricing card with gradient border ring labeled 'Most popular'.", previewKind: "card-pricing", featured: 10, createdAt: ago(1), likes: 3600, views: 46000, authorIdx: 5,
    code: `import { Check } from 'lucide-react';
export function PopularPricingCard() {
  return (
    <div className="relative rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-500 to-sky-500 p-[1.5px]">
      <div className="rounded-[15px] bg-white p-6 dark:bg-ink-950">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Growth</h3>
          <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-semibold text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">Most popular</span>
        </div>
        <p className="mt-2 text-3xl font-bold tabular-nums">$29<span className="text-base font-normal text-ink-500">/mo</span></p>
        <ul className="mt-4 space-y-2 text-sm text-ink-600 dark:text-ink-300">
          {['Unlimited components','Priority AI remixing','10 team seats','Export to Figma / Code'].map(f => (
            <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> {f}</li>
          ))}
        </ul>
        <button className="mt-6 w-full rounded-lg bg-ink-900 py-2.5 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Start 14-day trial</button>
      </div>
    </div>
  );
}` },
  { id: "b2-card-user-profile", title: "User profile card", description: "Profile card with avatar, bio, and follow button.", categorySlug: "cards", tags: ["card","profile","social","user"],
    prompt: "Compact user profile card with avatar, handle, bio, and follow action.", previewKind: "card-user-profile", featured: 7, createdAt: ago(3), likes: 960, views: 12800, authorIdx: 0,
    code: `export function UserProfileCard() {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-amber-500 text-lg font-semibold text-white">AC</div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink-900 dark:text-white">Aria Chen</p>
            <p className="truncate text-xs text-ink-500">@ariac · Design engineer</p>
          </div>
          <button className="rounded-full bg-ink-900 px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-ink-900">Follow</button>
        </div>
        <p className="mt-2 text-sm text-ink-600 dark:text-ink-300">Shipping elegant, accessible components for engineering teams at scale.</p>
      </div>
    </div>
  );
}` },
  { id: "b2-card-notification-inline", title: "Inline notification card", description: "Dismissible notification with action link and icon.", categorySlug: "cards", tags: ["card","notification","inline","toast"],
    prompt: "Inline dismissible notification card for in-app alerts.", previewKind: "card-notification", featured: 6, createdAt: ago(5), likes: 420, views: 5600, authorIdx: 4,
    code: `import { BellRing, X } from 'lucide-react';
export function InlineNotificationCard() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900">
      <BellRing className="mt-0.5 h-4 w-4 text-violet-500" />
      <div className="flex-1 text-sm">
        <p className="font-semibold text-ink-900 dark:text-white">New comment on your component</p>
        <p className="text-ink-500">Mateo Rivera left feedback on &quot;Floating label input&quot;.</p>
        <button className="mt-1 text-xs font-semibold text-violet-600 hover:underline dark:text-violet-400">View thread</button>
      </div>
      <button aria-label="Dismiss" className="rounded p-1 text-ink-400 hover:text-ink-600"><X className="h-4 w-4" /></button>
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // SELECTS (+3)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-select-native-minimal", title: "Minimal native select", description: "Native select with custom caret and focus ring.", categorySlug: "selects", tags: ["select","native","minimal"],
    prompt: "Minimal styled native select with custom chevron indicator.", previewKind: "select-custom", featured: 6, createdAt: ago(2), likes: 380, views: 5100, authorIdx: 1,
    code: `import { ChevronDown } from 'lucide-react';
export function MinimalSelect() {
  return (
    <div className="relative inline-block">
      <select className="appearance-none rounded-lg border border-ink-300 bg-white py-2 pl-3 pr-9 text-sm focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30 dark:border-ink-700 dark:bg-ink-900 dark:text-white">
        <option>All components</option>
        <option>Buttons</option>
        <option>Inputs</option>
        <option>Cards</option>
      </select>
      <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
    </div>
  );
}` },
  { id: "b2-select-multi-chips", title: "Multi-select with chips", description: "Multi-select showing picked values as removable chips.", categorySlug: "selects", tags: ["select","multi","chips","tags"],
    prompt: "Multi-select input rendering selected values as removable chips.", previewKind: "select-custom", featured: 8, createdAt: ago(1), likes: 1420, views: 18600, authorIdx: 3,
    code: `import { X } from 'lucide-react';
import { useState } from 'react';
export function MultiSelectChips() {
  const [picked, setPicked] = useState(['React','TypeScript']);
  return (
    <div className="rounded-lg border border-ink-300 bg-white px-2 py-2 dark:border-ink-700 dark:bg-ink-900">
      <div className="flex flex-wrap gap-1.5">
        {picked.map(tag => (
          <span key={tag} className="inline-flex items-center gap-1 rounded-full bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/40 dark:text-violet-300">
            {tag}
            <button onClick={() => setPicked(picked.filter(t => t !== tag))} aria-label={'Remove ' + tag}><X className="h-3 w-3" /></button>
          </span>
        ))}
        <input className="flex-1 min-w-[100px] bg-transparent px-1 text-sm outline-none" placeholder="Add tag..." />
      </div>
    </div>
  );
}` },
  { id: "b2-select-combobox-search", title: "Searchable combobox", description: "Combobox with inline search filtering over options.", categorySlug: "selects", tags: ["select","combobox","search","a11y"],
    prompt: "Searchable combobox select with ARIA roles and filtered option list.", previewKind: "select-custom", featured: 9, createdAt: ago(0), likes: 2100, views: 27800, authorIdx: 5,
    code: `import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
const ALL = ['Node.js','Next.js','Remix','Svelte','Solid','Astro','Vite','Expo'];
export function SearchableCombobox() {
  const [q, setQ] = useState('');
  const opts = useMemo(() => ALL.filter(o => o.toLowerCase().includes(q.toLowerCase())), [q]);
  return (
    <div className="w-64 rounded-xl border border-ink-200 bg-white shadow-sm dark:border-ink-800 dark:bg-ink-900" role="combobox" aria-expanded="true" aria-haspopup="listbox">
      <div className="flex items-center gap-2 border-b border-ink-100 px-3 py-2 dark:border-ink-800">
        <Search className="h-4 w-4 text-ink-400" />
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Filter framework..." className="w-full bg-transparent text-sm outline-none" />
      </div>
      <ul role="listbox" className="max-h-52 overflow-auto py-1 text-sm">
        {opts.length === 0 && <li className="px-3 py-2 text-ink-400">No results</li>}
        {opts.map(o => (
          <li key={o} role="option" aria-selected="false" className="cursor-pointer px-3 py-1.5 hover:bg-ink-50 dark:hover:bg-ink-800">{o}</li>
        ))}
      </ul>
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // SLIDERS (+3)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-slider-range-dual", title: "Dual-handle range slider", description: "Price range slider with two thumbs and min/max readouts.", categorySlug: "sliders", tags: ["slider","range","dual","price"],
    prompt: "Dual-thumb price range slider with numeric min/max display.", previewKind: "slider-range", featured: 8, createdAt: ago(1), likes: 1240, views: 15400, authorIdx: 0,
    code: `import { useState } from 'react';
export function DualRangeSlider() {
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(80);
  return (
    <div className="w-80 space-y-3 rounded-xl border border-ink-200 p-4 dark:border-ink-800">
      <div className="flex justify-between text-xs tabular-nums text-ink-600 dark:text-ink-300">
        <span>\${min}</span><span>\${max}</span>
      </div>
      <div className="relative h-2 rounded-full bg-ink-100 dark:bg-ink-800">
        <div className="absolute h-2 rounded-full bg-violet-500" style={{ left: \`\${min}%\`, right: \`\${100 - max}%\` }} />
      </div>
      <input type="range" min={0} max={100} value={min} onChange={e => setMin(Math.min(+e.target.value, max - 1))} className="w-full accent-violet-600" />
      <input type="range" min={0} max={100} value={max} onChange={e => setMax(Math.max(+e.target.value, min + 1))} className="w-full accent-violet-600" />
    </div>
  );
}` },
  { id: "b2-slider-volume-vertical", title: "Vertical volume slider", description: "Vertical orientation slider with icon indicator.", categorySlug: "sliders", tags: ["slider","vertical","volume","audio"],
    prompt: "Vertical volume slider for audio apps.", previewKind: "slider-range", featured: 6, createdAt: ago(4), likes: 360, views: 4900, authorIdx: 6,
    code: `import { Volume2 } from 'lucide-react';
import { useState } from 'react';
export function VerticalVolumeSlider() {
  const [v, setV] = useState(65);
  return (
    <div className="flex h-40 flex-col items-center gap-2 rounded-xl bg-ink-950 p-4 text-white">
      <span className="text-xs tabular-nums">{v}</span>
      <input type="range" orient="vertical" min={0} max={100} value={v} onChange={e => setV(+e.target.value)} style={{ writingMode: 'vertical-lr' as any, WebkitAppearance: 'slider-vertical' }} className="h-28 accent-cyan-400" />
      <Volume2 className="h-4 w-4" />
    </div>
  );
}` },
  { id: "b2-slider-stepped-ticks", title: "Stepped slider with ticks", description: "Discrete-step slider with visible tick marks and labels.", categorySlug: "sliders", tags: ["slider","stepped","ticks","discrete"],
    prompt: "Stepped slider with discrete tick marks and aligned labels.", previewKind: "slider-range", featured: 7, createdAt: ago(2), likes: 640, views: 8400, authorIdx: 2,
    code: `import { useState } from 'react';
const STEPS = ['XS','S','M','L','XL'];
export function SteppedSlider() {
  const [i, setI] = useState(2);
  return (
    <div className="w-80 space-y-2">
      <label className="text-xs font-medium text-ink-600 dark:text-ink-300">Size: <span className="font-semibold">{STEPS[i]}</span></label>
      <input type="range" min={0} max={STEPS.length - 1} value={i} onChange={e => setI(+e.target.value)} className="w-full accent-violet-600" />
      <div className="flex justify-between text-[10px] text-ink-500">{STEPS.map(s => <span key={s}>{s}</span>)}</div>
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // HEROES (+3)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-hero-split-screenshot", title: "Split hero with product screenshot", description: "Two-column hero pairing copy with a product screenshot mock.", categorySlug: "heroes", tags: ["hero","split","screenshot","saas"],
    prompt: "Two-column hero: headline + CTA on left, product screenshot mock on right.", previewKind: "hero-gradient", featured: 10, createdAt: ago(1), likes: 4200, views: 55000, authorIdx: 1,
    code: `export function SplitScreenshotHero() {
  return (
    <section className="grid items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-12">
      <div>
        <span className="inline-block rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-semibold text-violet-700">v2.0 · Ship Together</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Design systems, without the boring parts.</h1>
        <p className="mt-4 max-w-prose text-ink-500">Pull polished, accessible React components into any project. Copy-paste or install via CLI — it just works.</p>
        <div className="mt-6 flex gap-3">
          <button className="rounded-xl bg-ink-900 px-5 py-3 text-sm font-semibold text-white">Browse library</button>
          <button className="rounded-xl border border-ink-200 px-5 py-3 text-sm font-semibold">Read docs</button>
        </div>
      </div>
      <div className="rounded-2xl border border-ink-200 bg-gradient-to-br from-ink-50 to-ink-100 p-3 shadow-xl dark:border-ink-800 dark:from-ink-900 dark:to-ink-950">
        <div className="flex gap-1 pb-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="aspect-video rounded-xl bg-white dark:bg-ink-900" />
      </div>
    </section>
  );
}` },
  { id: "b2-hero-video-bg", title: "Hero with video background", description: "Full-bleed hero with autoplay muted video and overlay.", categorySlug: "heroes", tags: ["hero","video","background","cinematic"],
    prompt: "Cinematic hero with background video, dark overlay, and center-aligned copy.", previewKind: "hero-gradient", featured: 9, createdAt: ago(2), likes: 2600, views: 34000, authorIdx: 6,
    code: `export function VideoBackgroundHero() {
  return (
    <section className="relative isolate h-[80vh] overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-ink-950 via-violet-950 to-ink-950" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.25),transparent_60%)]" />
      <div className="flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">The operating system for modern frontend teams.</h1>
        <p className="mt-4 max-w-xl text-ink-300">A shared playground where designers and engineers collaborate on production UI.</p>
        <button className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-ink-100">Watch the film</button>
      </div>
    </section>
  );
}` },
  { id: "b2-hero-social-proof", title: "Hero with social proof logo wall", description: "Hero headline topped with a row of customer logos.", categorySlug: "heroes", tags: ["hero","social-proof","logos","trust"],
    prompt: "Hero with logo-wall social proof, centered headline, and dual CTAs.", previewKind: "hero-minimal", featured: 8, createdAt: ago(3), likes: 1920, views: 24000, authorIdx: 4,
    code: `export function SocialProofHero() {
  return (
    <section className="px-6 py-20 text-center">
      <div className="mx-auto flex max-w-3xl items-center justify-center gap-6 opacity-70">
        {['Linear','Vercel','Stripe','Ramp','Notion'].map(l => (
          <span key={l} className="text-xs font-semibold uppercase tracking-widest">{l}</span>
        ))}
      </div>
      <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl">Trusted by teams shipping at scale.</h1>
      <p className="mx-auto mt-4 max-w-xl text-ink-500">From YC seed to Fortune 500 — ship faster with components you can trust.</p>
      <div className="mt-8 flex justify-center gap-3">
        <button className="rounded-xl bg-ink-900 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-ink-900">Start building</button>
        <button className="rounded-xl border border-ink-200 px-5 py-3 text-sm font-semibold">Book demo</button>
      </div>
    </section>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // FEATURES (+3)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-feature-split-image", title: "Split feature with image", description: "Alternating image/copy rows for feature narrative.", categorySlug: "features", tags: ["feature","split","narrative","image"],
    prompt: "Feature narrative row with image left, headline/bullets right.", previewKind: "feature-grid", featured: 8, createdAt: ago(2), likes: 1180, views: 14800, authorIdx: 3,
    code: `import { Check } from 'lucide-react';
export function SplitFeatureImage() {
  return (
    <section className="grid items-center gap-12 px-6 py-16 md:grid-cols-2">
      <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-200 to-emerald-200" />
      <div>
        <p className="text-sm font-semibold text-violet-600">Collaboration</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">Designers and engineers, in the same canvas.</h2>
        <p className="mt-3 text-ink-500">Merge design tokens and component code into a single source of truth.</p>
        <ul className="mt-4 space-y-2 text-sm">
          {['Token sync with Figma','Inline comments & review','One-click variant publish'].map(f => (
            <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> {f}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}` },
  { id: "b2-feature-icon-grid-6", title: "6-tile icon feature grid", description: "Responsive 6-tile grid of iconographic features.", categorySlug: "features", tags: ["feature","grid","icons","six-tile"],
    prompt: "Six-feature responsive grid with Lucide icons and one-line descriptions.", previewKind: "feature-grid", featured: 7, createdAt: ago(3), likes: 840, views: 10900, authorIdx: 5,
    code: `import { Zap, ShieldCheck, GitBranch, Sparkles, Gauge, Keyboard } from 'lucide-react';
const FEATURES = [
  { icon: Zap, title: 'Instant preview', desc: 'Render components in under 100ms.' },
  { icon: ShieldCheck, title: 'WCAG 2.1 AA', desc: 'Accessible by default.' },
  { icon: GitBranch, title: 'Version-aware', desc: 'Pin to any component release.' },
  { icon: Sparkles, title: 'AI remix', desc: 'Generate variants from a prompt.' },
  { icon: Gauge, title: 'Performance budget', desc: 'Automatic Lighthouse checks.' },
  { icon: Keyboard, title: 'Keyboard-first', desc: 'Full arrow / tab navigation.' },
];
export function IconFeatureGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {FEATURES.map(f => (
        <div key={f.title} className="rounded-2xl border border-ink-200 p-5 dark:border-ink-800">
          <f.icon className="h-5 w-5 text-violet-500" />
          <h3 className="mt-3 font-semibold">{f.title}</h3>
          <p className="mt-1 text-sm text-ink-500">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}` },
  { id: "b2-feature-timeline", title: "Vertical timeline features", description: "Step-by-step vertical timeline of feature capabilities.", categorySlug: "features", tags: ["feature","timeline","steps"],
    prompt: "Vertical timeline enumerating features as numbered steps.", previewKind: "feature-grid", featured: 7, createdAt: ago(4), likes: 620, views: 8100, authorIdx: 7,
    code: `const STEPS = [
  { n: 1, title: 'Prompt or pick', desc: 'Start from a natural-language prompt or gallery pick.' },
  { n: 2, title: 'Remix variants', desc: 'Tune style, layout, copy with AI assist.' },
  { n: 3, title: 'Export to code', desc: 'One-click TypeScript + Tailwind export.' },
  { n: 4, title: 'Monitor in prod', desc: 'Track component usage across apps.' },
];
export function TimelineFeatures() {
  return (
    <ol className="relative space-y-8 border-l border-ink-200 pl-6 dark:border-ink-800">
      {STEPS.map(s => (
        <li key={s.n} className="relative">
          <span className="absolute -left-[30px] flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">{s.n}</span>
          <h4 className="font-semibold">{s.title}</h4>
          <p className="mt-1 text-sm text-ink-500">{s.desc}</p>
        </li>
      ))}
    </ol>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // CALLS TO ACTION (+2)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-cta-newsletter", title: "Newsletter CTA with inline input", description: "Inline email capture CTA with subscribe button.", categorySlug: "calls-to-action", tags: ["cta","newsletter","email","inline"],
    prompt: "Newsletter CTA with inline email input and subscribe button.", previewKind: "hero-gradient", featured: 7, createdAt: ago(2), likes: 780, views: 10100, authorIdx: 0,
    code: `export function NewsletterCTA() {
  return (
    <section className="rounded-2xl bg-ink-950 px-8 py-12 text-center text-white">
      <h2 className="text-2xl font-bold">Stay ahead of the shipping list.</h2>
      <p className="mt-2 text-sm text-ink-300">One email a week with new components, teardown posts, and tooling wins.</p>
      <form className="mx-auto mt-6 flex max-w-md gap-2">
        <input type="email" placeholder="you@team.com" className="flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm placeholder:text-ink-400 focus:outline-none focus:ring-2 focus:ring-violet-500" />
        <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-ink-900 hover:bg-ink-100">Subscribe</button>
      </form>
    </section>
  );
}` },
  { id: "b2-cta-stacked-image", title: "Stacked CTA with app screenshot", description: "Large CTA card over a layered screenshot preview.", categorySlug: "calls-to-action", tags: ["cta","stacked","screenshot"],
    prompt: "Layered CTA combining bold copy with app screenshot below.", previewKind: "hero-gradient", featured: 8, createdAt: ago(3), likes: 1100, views: 13800, authorIdx: 2,
    code: `export function StackedImageCTA() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 px-8 py-12 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold">Ship your next feature 10× faster.</h2>
        <p className="mt-3 text-white/80">Join 12,000+ teams using our kit today.</p>
        <button className="mt-6 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-ink-900">Start for free</button>
      </div>
      <div className="mx-auto mt-10 h-48 max-w-4xl rounded-xl bg-white/10 ring-1 ring-white/20" />
    </section>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // PRICING (+2)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-pricing-three-tier", title: "Three-tier pricing table", description: "Starter / Pro / Enterprise pricing grid.", categorySlug: "pricing-sections", tags: ["pricing","tier","grid"],
    prompt: "Three-tier pricing layout with feature bullets and CTA per tier.", previewKind: "card-pricing", featured: 9, createdAt: ago(2), likes: 2400, views: 30200, authorIdx: 4,
    code: `import { Check } from 'lucide-react';
const TIERS = [
  { name: 'Starter', price: 0, tag: 'Free forever', feats: ['Up to 3 projects','Community support'] },
  { name: 'Pro', price: 29, tag: 'Most popular', feats: ['Unlimited projects','Priority AI remix','5 team seats'] },
  { name: 'Enterprise', price: 99, tag: 'Advanced', feats: ['SSO + audit logs','Custom contracts','Dedicated SE'] },
];
export function ThreeTierPricing() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {TIERS.map(t => (
        <div key={t.name} className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
          <h3 className="text-lg font-semibold">{t.name}</h3>
          <p className="text-xs text-ink-500">{t.tag}</p>
          <p className="mt-3 text-3xl font-bold tabular-nums">\${t.price}<span className="text-sm font-normal text-ink-500">/mo</span></p>
          <ul className="mt-4 space-y-2 text-sm">
            {t.feats.map(f => <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-emerald-500" />{f}</li>)}
          </ul>
          <button className="mt-6 w-full rounded-lg bg-ink-900 py-2 text-sm font-semibold text-white dark:bg-white dark:text-ink-900">Choose {t.name}</button>
        </div>
      ))}
    </div>
  );
}` },
  { id: "b2-pricing-toggle-monthly-annual", title: "Monthly/annual toggle pricing", description: "Pricing with monthly/annual billing toggle and savings pill.", categorySlug: "pricing-sections", tags: ["pricing","toggle","annual","savings"],
    prompt: "Pricing component with monthly/annual toggle and annual savings pill.", previewKind: "card-pricing", featured: 8, createdAt: ago(3), likes: 1480, views: 19700, authorIdx: 1,
    code: `import { useState } from 'react';
export function BillingTogglePricing() {
  const [annual, setAnnual] = useState(true);
  const price = annual ? 290 : 29;
  return (
    <div className="space-y-4 rounded-2xl border border-ink-200 p-6 text-center dark:border-ink-800">
      <div className="inline-flex rounded-full bg-ink-100 p-1 dark:bg-ink-800">
        <button onClick={() => setAnnual(false)} className={'rounded-full px-3 py-1 text-xs font-semibold ' + (!annual ? 'bg-white shadow dark:bg-ink-950' : 'text-ink-500')}>Monthly</button>
        <button onClick={() => setAnnual(true)} className={'rounded-full px-3 py-1 text-xs font-semibold ' + (annual ? 'bg-white shadow dark:bg-ink-950' : 'text-ink-500')}>Annual <span className="ml-1 rounded bg-emerald-100 px-1 text-[10px] text-emerald-700">-16%</span></button>
      </div>
      <p className="text-4xl font-bold tabular-nums">\${price}<span className="text-base font-normal text-ink-500">/{annual ? 'yr' : 'mo'}</span></p>
      <button className="rounded-lg bg-ink-900 px-6 py-2 text-sm font-semibold text-white dark:bg-white dark:text-ink-900">Upgrade to Pro</button>
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // TESTIMONIALS (+2)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-testimonial-quote-card", title: "Quote testimonial card", description: "Single high-trust customer quote card.", categorySlug: "testimonials", tags: ["testimonial","quote","card","trust"],
    prompt: "Prominent single testimonial card with large quote and attribution.", previewKind: "testimonial", featured: 8, createdAt: ago(2), likes: 1300, views: 17100, authorIdx: 5,
    code: `import { Quote } from 'lucide-react';
export function QuoteTestimonial() {
  return (
    <figure className="rounded-2xl border border-ink-200 bg-white p-8 dark:border-ink-800 dark:bg-ink-900">
      <Quote className="h-6 w-6 text-violet-500" />
      <blockquote className="mt-3 text-lg font-medium text-ink-800 dark:text-ink-100">"We migrated our entire design system in a weekend. The AI remix feature alone saved us two sprint cycles."</blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-sky-500" />
        <div><p className="text-sm font-semibold">Jonas Berg</p><p className="text-xs text-ink-500">Staff Engineer · Northstar</p></div>
      </figcaption>
    </figure>
  );
}` },
  { id: "b2-testimonial-grid-logos", title: "Testimonial grid with logos", description: "Three-column testimonial grid with company logos.", categorySlug: "testimonials", tags: ["testimonial","grid","logos"],
    prompt: "Three-column testimonial grid pairing quotes with company badges.", previewKind: "testimonial", featured: 7, createdAt: ago(4), likes: 720, views: 9300, authorIdx: 7,
    code: `const ITEMS = [
  { co: 'Linear', who: 'Aria Chen', role: 'Design Eng', quote: 'Best-in-class primitives.' },
  { co: 'Stripe', who: 'Mateo Rivera', role: 'PM', quote: 'Cut our review time in half.' },
  { co: 'Notion', who: 'Priya Iyer', role: 'Frontend Lead', quote: 'Shipped a new onboarding in a day.' },
];
export function TestimonialGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {ITEMS.map(t => (
        <figure key={t.co} className="rounded-xl border border-ink-200 p-5 dark:border-ink-800">
          <p className="text-xs font-semibold uppercase tracking-widest text-ink-500">{t.co}</p>
          <blockquote className="mt-2 text-sm">"{t.quote}"</blockquote>
          <figcaption className="mt-3 text-xs text-ink-500">{t.who} · {t.role}</figcaption>
        </figure>
      ))}
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // AI CHATS (+3)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-aichat-bubble-stream", title: "AI chat streaming bubbles", description: "Classic chat UI with streaming assistant bubble.", categorySlug: "ai-chats", tags: ["ai","chat","streaming","bubble"],
    prompt: "Conversational AI chat UI showing streaming assistant response with animated dots.", previewKind: "iframe", featured: 9, createdAt: ago(1), likes: 2800, views: 36500, authorIdx: 3,
    code: `export function AIChatStream() {
  return (
    <div className="flex max-w-md flex-col gap-3 rounded-2xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900">
      <div className="self-end max-w-[75%] rounded-2xl rounded-br-sm bg-violet-600 px-3 py-2 text-sm text-white">Explain virtual DOM in one sentence.</div>
      <div className="self-start max-w-[75%] rounded-2xl rounded-bl-sm bg-ink-100 px-3 py-2 text-sm text-ink-900 dark:bg-ink-800 dark:text-ink-100">
        A virtual DOM is an in-memory tree that React diffs against the real DOM to batch minimal updates
        <span className="ml-1 inline-flex gap-0.5 align-middle">
          <span className="h-1 w-1 animate-bounce rounded-full bg-ink-400" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-ink-400 [animation-delay:120ms]" />
          <span className="h-1 w-1 animate-bounce rounded-full bg-ink-400 [animation-delay:240ms]" />
        </span>
      </div>
    </div>
  );
}` },
  { id: "b2-aichat-composer-attachments", title: "AI composer with attachments", description: "Chat composer input with attach/send toolbar.", categorySlug: "ai-chats", tags: ["ai","chat","composer","input"],
    prompt: "AI chat composer input with paperclip attach, microphone, and send button.", previewKind: "iframe", featured: 8, createdAt: ago(2), likes: 1620, views: 21400, authorIdx: 1,
    code: `import { Paperclip, Mic, SendHorizonal } from 'lucide-react';
export function AIComposer() {
  return (
    <div className="flex items-end gap-2 rounded-2xl border border-ink-200 bg-white p-2 shadow-sm dark:border-ink-800 dark:bg-ink-900">
      <button aria-label="Attach file" className="rounded-lg p-2 text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-800"><Paperclip className="h-4 w-4" /></button>
      <textarea rows={1} placeholder="Message AI..." className="max-h-40 flex-1 resize-none bg-transparent text-sm outline-none placeholder:text-ink-400" />
      <button aria-label="Record voice" className="rounded-lg p-2 text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-800"><Mic className="h-4 w-4" /></button>
      <button aria-label="Send" className="rounded-lg bg-violet-600 p-2 text-white hover:bg-violet-700"><SendHorizonal className="h-4 w-4" /></button>
    </div>
  );
}` },
  { id: "b2-aichat-citation-inline", title: "AI answer with inline citations", description: "Assistant answer with hoverable citation badges.", categorySlug: "ai-chats", tags: ["ai","citation","rag","answer"],
    prompt: "AI answer paragraph with numbered citation badges linking to sources.", previewKind: "iframe", featured: 9, createdAt: ago(1), likes: 2100, views: 27800, authorIdx: 5,
    code: `export function CitedAnswer() {
  return (
    <div className="max-w-lg rounded-2xl border border-ink-200 bg-white p-5 text-sm leading-relaxed text-ink-800 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200">
      React Server Components render on the server without sending JS to the client
      <sup className="ml-0.5 cursor-help rounded bg-violet-100 px-1 text-[10px] font-semibold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300" title="React.dev · RSC docs">1</sup>,
      which reduces hydration cost
      <sup className="ml-0.5 cursor-help rounded bg-violet-100 px-1 text-[10px] font-semibold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300" title="Vercel · Next.js 14 post">2</sup>.
      <div className="mt-4 space-y-1 text-xs text-ink-500">
        <p><span className="font-semibold">1.</span> React.dev — Server Components</p>
        <p><span className="font-semibold">2.</span> Vercel — Introducing Next.js 14</p>
      </div>
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // TOOLTIPS (+3)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-tooltip-dark-arrow", title: "Dark tooltip with arrow", description: "Classic dark tooltip with bottom arrow pointer.", categorySlug: "tooltips", tags: ["tooltip","dark","arrow"],
    prompt: "Classic dark tooltip bubble with small arrow pointer.", previewKind: "tooltip", featured: 6, createdAt: ago(3), likes: 540, views: 7200, authorIdx: 0,
    code: `export function DarkArrowTooltip() {
  return (
    <span className="relative inline-flex">
      <button className="rounded border border-ink-300 px-2 py-1 text-xs">Hover me</button>
      <span role="tooltip" className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-ink-900 px-2 py-1 text-xs text-white shadow-md">
        Open in new tab
        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-ink-900" />
      </span>
    </span>
  );
}` },
  { id: "b2-tooltip-rich-content", title: "Rich-content tooltip card", description: "Tooltip with title + body + shortcut hint.", categorySlug: "tooltips", tags: ["tooltip","rich","shortcut"],
    prompt: "Tooltip containing title, multi-line body, and keyboard shortcut hint.", previewKind: "tooltip", featured: 8, createdAt: ago(2), likes: 1060, views: 13400, authorIdx: 2,
    code: `export function RichTooltip() {
  return (
    <span className="relative inline-flex">
      <button className="rounded bg-ink-900 px-3 py-1.5 text-xs text-white">Save</button>
      <span role="tooltip" className="absolute left-full top-0 ml-2 w-56 rounded-lg border border-ink-200 bg-white p-3 text-left shadow-lg dark:border-ink-800 dark:bg-ink-900">
        <span className="block text-xs font-semibold">Save component</span>
        <span className="mt-1 block text-[11px] text-ink-500">Persists changes and updates every embed across the workspace.</span>
        <span className="mt-2 block font-mono text-[10px] text-ink-400">⌘ + S</span>
      </span>
    </span>
  );
}` },
  { id: "b2-tooltip-soft-light", title: "Soft light tooltip", description: "Soft-shadow light tooltip suitable for dense toolbars.", categorySlug: "tooltips", tags: ["tooltip","light","soft"],
    prompt: "Light-themed soft tooltip with subtle shadow, no arrow.", previewKind: "tooltip", featured: 6, createdAt: ago(4), likes: 340, views: 4500, authorIdx: 4,
    code: `export function SoftLightTooltip() {
  return (
    <span className="relative inline-flex">
      <button aria-label="More info" className="h-7 w-7 rounded-full bg-ink-100 text-xs font-semibold">i</button>
      <span role="tooltip" className="absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded-md border border-ink-200 bg-white px-2.5 py-1 text-[11px] text-ink-700 shadow dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200">
        Learn about tokens
      </span>
    </span>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // POPOVERS (+2)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-popover-user-menu", title: "User avatar popover", description: "Avatar-triggered popover with user menu.", categorySlug: "popovers", tags: ["popover","user","menu","avatar"],
    prompt: "Popover menu anchored under a user avatar with account links.", previewKind: "dropdown-menu", featured: 7, createdAt: ago(2), likes: 820, views: 10800, authorIdx: 6,
    code: `import { Settings, LogOut, User } from 'lucide-react';
export function UserAvatarPopover() {
  return (
    <div className="w-60 rounded-xl border border-ink-200 bg-white p-2 shadow-xl dark:border-ink-800 dark:bg-ink-900">
      <div className="mb-2 flex items-center gap-2 rounded-lg p-2">
        <div className="h-8 w-8 rounded-full bg-rose-500" />
        <div className="min-w-0"><p className="truncate text-sm font-semibold">Aria Chen</p><p className="truncate text-xs text-ink-500">ariac@studio.dev</p></div>
      </div>
      <div className="space-y-0.5 border-t border-ink-100 pt-2 dark:border-ink-800">
        {[[User,'Profile'],[Settings,'Settings'],[LogOut,'Sign out']].map(([Ico, label]: any, i) => (
          <button key={i} className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-sm hover:bg-ink-100 dark:hover:bg-ink-800">
            <Ico className="h-4 w-4 text-ink-500" />{label}
          </button>
        ))}
      </div>
    </div>
  );
}` },
  { id: "b2-popover-color-picker", title: "Color picker popover", description: "Swatch grid popover for brand color selection.", categorySlug: "popovers", tags: ["popover","color","picker","swatch"],
    prompt: "Color picker popover with swatch grid and hex input.", previewKind: "dropdown-menu", featured: 8, createdAt: ago(3), likes: 1300, views: 16500, authorIdx: 1,
    code: `const SWATCHES = ['#ef4444','#f59e0b','#10b981','#06b6d4','#8b5cf6','#ec4899'];
export function ColorPickerPopover() {
  return (
    <div className="w-56 rounded-xl border border-ink-200 bg-white p-3 shadow-xl dark:border-ink-800 dark:bg-ink-900">
      <p className="mb-2 text-xs font-medium text-ink-500">Brand color</p>
      <div className="grid grid-cols-6 gap-1.5">
        {SWATCHES.map(c => (
          <button key={c} aria-label={'Pick ' + c} className="h-7 w-7 rounded-md ring-1 ring-ink-200 focus-visible:ring-2 focus-visible:ring-violet-500" style={{ background: c }} />
        ))}
      </div>
      <input type="text" defaultValue="#8b5cf6" className="mt-2 w-full rounded-md border border-ink-200 px-2 py-1 text-xs font-mono dark:border-ink-800 dark:bg-ink-950" />
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // EMPTY STATES (+3)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-empty-inbox-zero", title: "Inbox-zero empty state", description: "Celebratory empty state for cleared inbox.", categorySlug: "empty-states", tags: ["empty","inbox","celebrate"],
    prompt: "Celebratory inbox-zero empty state with illustration and secondary action.", previewKind: "iframe", featured: 8, createdAt: ago(2), likes: 1240, views: 15800, authorIdx: 3,
    code: `import { Inbox } from 'lucide-react';
export function InboxZeroEmpty() {
  return (
    <div className="rounded-2xl border border-dashed border-ink-200 p-10 text-center dark:border-ink-800">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40"><Inbox className="h-6 w-6" /></div>
      <h3 className="mt-4 text-lg font-semibold">You're all caught up.</h3>
      <p className="mt-1 text-sm text-ink-500">No unread messages. Take a walk, you earned it.</p>
      <button className="mt-5 rounded-lg border border-ink-200 px-3 py-1.5 text-sm font-semibold dark:border-ink-700">View archive</button>
    </div>
  );
}` },
  { id: "b2-empty-no-results", title: "Search no-results empty", description: "No-results empty state with retry suggestion.", categorySlug: "empty-states", tags: ["empty","search","no-results"],
    prompt: "Search-returned-nothing empty state with suggestion bullets.", previewKind: "iframe", featured: 7, createdAt: ago(3), likes: 680, views: 8700, authorIdx: 7,
    code: `import { SearchX } from 'lucide-react';
export function NoResultsEmpty() {
  return (
    <div className="rounded-xl border border-ink-200 p-8 text-center dark:border-ink-800">
      <SearchX className="mx-auto h-7 w-7 text-ink-400" />
      <h3 className="mt-3 font-semibold">No components match "radial-loading-skeleton"</h3>
      <ul className="mt-3 space-y-1 text-xs text-ink-500">
        <li>Try a broader term like "loading" or "skeleton"</li>
        <li>Check for typos in category filters</li>
        <li>Clear all filters and start over</li>
      </ul>
    </div>
  );
}` },
  { id: "b2-empty-first-project", title: "First-project onboarding empty", description: "Onboarding empty state prompting first project creation.", categorySlug: "empty-states", tags: ["empty","onboarding","first-use"],
    prompt: "First-time empty state for a brand-new workspace with primary CTA.", previewKind: "iframe", featured: 8, createdAt: ago(2), likes: 1180, views: 14800, authorIdx: 5,
    code: `import { FolderPlus } from 'lucide-react';
export function FirstProjectEmpty() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-white p-10 text-center dark:from-ink-900 dark:to-ink-950">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow dark:bg-ink-900"><FolderPlus className="h-6 w-6 text-violet-500" /></div>
      <h3 className="mt-5 text-xl font-bold">Create your first project</h3>
      <p className="mx-auto mt-2 max-w-sm text-sm text-ink-500">Projects help you group components and collaborate with teammates.</p>
      <button className="mt-5 rounded-xl bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-ink-900">New project</button>
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // DROPDOWNS (+2)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-dropdown-action-menu", title: "Action dropdown with dividers", description: "Actions menu with grouped entries and destructive zone.", categorySlug: "dropdowns", tags: ["dropdown","actions","menu","destructive"],
    prompt: "Action dropdown menu with grouped items including destructive delete.", previewKind: "dropdown-menu", featured: 8, createdAt: ago(2), likes: 1180, views: 14900, authorIdx: 0,
    code: `import { Edit, Copy, Share, Trash2 } from 'lucide-react';
export function ActionDropdown() {
  return (
    <div role="menu" className="w-52 rounded-xl border border-ink-200 bg-white p-1 shadow-xl dark:border-ink-800 dark:bg-ink-900">
      {[[Edit,'Edit'],[Copy,'Duplicate'],[Share,'Share']].map(([Ico,label]: any, i) => (
        <button key={i} role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-ink-100 dark:hover:bg-ink-800"><Ico className="h-4 w-4 text-ink-500" />{label}</button>
      ))}
      <div className="my-1 border-t border-ink-100 dark:border-ink-800" />
      <button role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20"><Trash2 className="h-4 w-4" />Delete</button>
    </div>
  );
}` },
  { id: "b2-dropdown-checkbox-filter", title: "Checkbox filter dropdown", description: "Filter dropdown with multi-select checkboxes.", categorySlug: "dropdowns", tags: ["dropdown","filter","checkbox"],
    prompt: "Filter dropdown with multi-select checkboxes and 'Apply' footer.", previewKind: "dropdown-menu", featured: 7, createdAt: ago(3), likes: 840, views: 10800, authorIdx: 4,
    code: `const OPTS = ['Buttons','Inputs','Cards','Selects','Sliders'];
export function CheckboxFilterDropdown() {
  return (
    <div className="w-56 rounded-xl border border-ink-200 bg-white shadow-xl dark:border-ink-800 dark:bg-ink-900">
      <p className="border-b border-ink-100 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-ink-500 dark:border-ink-800">Filter by category</p>
      <div className="p-2">
        {OPTS.map(o => (
          <label key={o} className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-ink-50 dark:hover:bg-ink-800">
            <input type="checkbox" className="rounded border-ink-300 text-violet-600 focus:ring-violet-500" />{o}
          </label>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-ink-100 p-2 dark:border-ink-800">
        <button className="text-xs text-ink-500 hover:underline">Clear</button>
        <button className="rounded-md bg-ink-900 px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-ink-900">Apply</button>
      </div>
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // CHECKBOXES (+3)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-checkbox-card-pick", title: "Card-style checkbox picker", description: "Checkbox styled as selectable card.", categorySlug: "checkboxes", tags: ["checkbox","card","picker","selection"],
    prompt: "Checkbox presented as selectable card with icon and description.", previewKind: "checkbox-list", featured: 8, createdAt: ago(1), likes: 1420, views: 18200, authorIdx: 1,
    code: `import { Check, Zap } from 'lucide-react';
export function CardCheckbox() {
  return (
    <label className="block cursor-pointer">
      <input type="checkbox" className="peer sr-only" />
      <div className="flex items-start gap-3 rounded-xl border border-ink-200 p-4 peer-checked:border-violet-500 peer-checked:bg-violet-50 dark:border-ink-800 dark:peer-checked:bg-violet-900/20">
        <Zap className="mt-0.5 h-5 w-5 text-violet-500" />
        <div className="flex-1">
          <p className="font-semibold">Turbo mode</p>
          <p className="text-xs text-ink-500">Enable priority rendering for this workspace.</p>
        </div>
        <span className="hidden h-5 w-5 items-center justify-center rounded-full bg-violet-500 text-white peer-checked:flex"><Check className="h-3.5 w-3.5" /></span>
      </div>
    </label>
  );
}` },
  { id: "b2-checkbox-tristate", title: "Tri-state parent checkbox", description: "Parent checkbox with indeterminate state for partial child selection.", categorySlug: "checkboxes", tags: ["checkbox","tristate","indeterminate"],
    prompt: "Parent checkbox displays indeterminate state when only some children selected.", previewKind: "checkbox-list", featured: 7, createdAt: ago(2), likes: 720, views: 9400, authorIdx: 5,
    code: `import { useEffect, useRef, useState } from 'react';
export function TristateCheckbox() {
  const [kids, setKids] = useState([true, false, true]);
  const parentRef = useRef<HTMLInputElement>(null);
  const all = kids.every(Boolean), none = kids.every(k => !k);
  useEffect(() => { if (parentRef.current) parentRef.current.indeterminate = !all && !none; }, [all, none]);
  return (
    <div className="space-y-1 rounded-lg border border-ink-200 p-3 dark:border-ink-800">
      <label className="flex items-center gap-2 text-sm font-semibold">
        <input ref={parentRef} type="checkbox" checked={all} onChange={e => setKids(kids.map(() => e.target.checked))} />
        Notifications
      </label>
      <div className="ml-5 space-y-0.5 text-sm">
        {['Email','SMS','Push'].map((k, i) => (
          <label key={k} className="flex items-center gap-2">
            <input type="checkbox" checked={kids[i]} onChange={e => { const n=[...kids]; n[i]=e.target.checked; setKids(n); }} />{k}
          </label>
        ))}
      </div>
    </div>
  );
}` },
  { id: "b2-checkbox-toggle-list", title: "Settings toggle-list checkboxes", description: "Row-based list of toggle checkboxes for settings screen.", categorySlug: "checkboxes", tags: ["checkbox","settings","list"],
    prompt: "Settings row list using checkboxes, each with label and helper text.", previewKind: "checkbox-list", featured: 6, createdAt: ago(4), likes: 440, views: 5900, authorIdx: 2,
    code: `const ROWS = [
  { title: 'Weekly digest', desc: 'Receive a summary every Monday.' },
  { title: 'Usage alerts', desc: 'Notify when you hit plan limits.' },
  { title: 'Beta features', desc: 'Opt into experimental components.' },
];
export function SettingsCheckboxList() {
  return (
    <div className="divide-y divide-ink-100 rounded-xl border border-ink-200 dark:divide-ink-800 dark:border-ink-800">
      {ROWS.map(r => (
        <label key={r.title} className="flex items-start gap-3 p-4 text-sm">
          <input type="checkbox" className="mt-1 rounded border-ink-300 text-violet-600" />
          <div><p className="font-medium">{r.title}</p><p className="text-xs text-ink-500">{r.desc}</p></div>
        </label>
      ))}
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // CALENDARS (+1) & DATE PICKERS (+2)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-calendar-month-grid", title: "Month calendar grid", description: "Monthly calendar grid with selectable days and today marker.", categorySlug: "calendars", tags: ["calendar","month","grid"],
    prompt: "Compact month calendar grid with today highlighted and range-aware day cells.", previewKind: "calendar-mini", featured: 8, createdAt: ago(1), likes: 1180, views: 15400, authorIdx: 4,
    code: `export function MonthCalendar() {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const today = 21;
  return (
    <div className="w-72 rounded-xl border border-ink-200 p-3 dark:border-ink-800">
      <div className="flex items-center justify-between pb-2">
        <button aria-label="Previous month" className="rounded p-1 hover:bg-ink-100 dark:hover:bg-ink-800">‹</button>
        <p className="text-sm font-semibold">April 2026</p>
        <button aria-label="Next month" className="rounded p-1 hover:bg-ink-100 dark:hover:bg-ink-800">›</button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[11px] text-ink-500">
        {['S','M','T','W','T','F','S'].map((d, i) => <span key={i}>{d}</span>)}
      </div>
      <div className="mt-1 grid grid-cols-7 gap-1 text-center text-sm">
        {days.map(d => (
          <button key={d} className={'rounded-md py-1 hover:bg-violet-50 dark:hover:bg-violet-900/20 ' + (d === today ? 'bg-violet-600 font-semibold text-white hover:bg-violet-700' : '')}>{d}</button>
        ))}
      </div>
    </div>
  );
}` },
  { id: "b2-datepicker-inline-range", title: "Inline date range picker", description: "Two-month inline date range picker.", categorySlug: "date-pickers", tags: ["date","picker","range","inline"],
    prompt: "Inline date range picker showing two adjacent months.", previewKind: "calendar-mini", featured: 8, createdAt: ago(2), likes: 1420, views: 17400, authorIdx: 6,
    code: `export function InlineRangePicker() {
  return (
    <div className="flex gap-4 rounded-xl border border-ink-200 p-4 dark:border-ink-800">
      {['March 2026','April 2026'].map(m => (
        <div key={m} className="w-56">
          <p className="pb-2 text-xs font-semibold">{m}</p>
          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {Array.from({ length: 30 }, (_, i) => <button key={i} className="rounded py-1 hover:bg-violet-50 dark:hover:bg-violet-900/20">{i + 1}</button>)}
          </div>
        </div>
      ))}
    </div>
  );
}` },
  { id: "b2-datepicker-compact-input", title: "Compact date input with popover", description: "Compact input with icon trigger and popover calendar.", categorySlug: "date-pickers", tags: ["date","picker","input","popover"],
    prompt: "Compact date picker input showing icon trigger and calendar popover anchored below.", previewKind: "calendar-mini", featured: 7, createdAt: ago(4), likes: 560, views: 7200, authorIdx: 3,
    code: `import { CalendarDays } from 'lucide-react';
export function CompactDateInput() {
  return (
    <div className="relative w-56">
      <input type="text" defaultValue="Apr 21, 2026" className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2 pr-9 text-sm dark:border-ink-800 dark:bg-ink-900" />
      <CalendarDays className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // RADIO GROUPS (+2)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-radio-card-plans", title: "Plan-picker radio cards", description: "Radio group styled as stacked plan cards.", categorySlug: "radio-groups", tags: ["radio","card","plans"],
    prompt: "Radio group styled as stacked plan-selection cards.", previewKind: "radio-group", featured: 8, createdAt: ago(2), likes: 1360, views: 17800, authorIdx: 0,
    code: `const PLANS = [
  { id: 'starter', name: 'Starter', price: '$0' },
  { id: 'pro', name: 'Pro', price: '$29' },
  { id: 'team', name: 'Team', price: '$99' },
];
export function PlanRadioCards() {
  return (
    <div className="space-y-2" role="radiogroup" aria-label="Plan">
      {PLANS.map(p => (
        <label key={p.id} className="flex cursor-pointer items-center justify-between rounded-xl border border-ink-200 p-4 has-[:checked]:border-violet-500 has-[:checked]:bg-violet-50 dark:border-ink-800 dark:has-[:checked]:bg-violet-900/20">
          <div className="flex items-center gap-3">
            <input type="radio" name="plan" value={p.id} className="h-4 w-4 text-violet-600" />
            <span className="font-medium">{p.name}</span>
          </div>
          <span className="tabular-nums text-sm">{p.price}/mo</span>
        </label>
      ))}
    </div>
  );
}` },
  { id: "b2-radio-segmented", title: "Segmented radio control", description: "Segmented radio control for view switching.", categorySlug: "radio-groups", tags: ["radio","segmented","switch","view"],
    prompt: "Segmented radio control for switching between grid and list layouts.", previewKind: "radio-group", featured: 7, createdAt: ago(3), likes: 720, views: 9200, authorIdx: 7,
    code: `export function SegmentedRadio() {
  return (
    <div className="inline-flex rounded-full bg-ink-100 p-1 dark:bg-ink-800" role="radiogroup" aria-label="View">
      {['Grid','List','Cards'].map((v, i) => (
        <label key={v} className="cursor-pointer">
          <input type="radio" name="view" defaultChecked={i===0} className="peer sr-only" />
          <span className="block rounded-full px-3 py-1 text-xs font-semibold peer-checked:bg-white peer-checked:shadow dark:peer-checked:bg-ink-950">{v}</span>
        </label>
      ))}
    </div>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // SIGN INS / SIGN UPS (+1 each)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-signin-magic-link", title: "Magic-link sign in", description: "Passwordless sign in with magic-link email.", categorySlug: "sign-ins", tags: ["signin","magic-link","passwordless"],
    prompt: "Passwordless magic-link sign-in form with disclaimer.", previewKind: "sign-in-form", featured: 9, createdAt: ago(1), likes: 1780, views: 22900, authorIdx: 5,
    code: `export function MagicLinkSignin() {
  return (
    <form className="mx-auto w-80 space-y-3 rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <h2 className="text-lg font-semibold">Sign in</h2>
      <p className="text-xs text-ink-500">We'll email you a magic link — no password required.</p>
      <input type="email" placeholder="you@company.com" className="w-full rounded-lg border border-ink-300 bg-white px-3 py-2 text-sm dark:border-ink-700 dark:bg-ink-900" />
      <button className="w-full rounded-lg bg-ink-900 py-2 text-sm font-semibold text-white dark:bg-white dark:text-ink-900">Email me a link</button>
      <p className="text-center text-[11px] text-ink-400">By continuing you agree to the Terms of Service.</p>
    </form>
  );
}` },
  { id: "b2-signup-social-plus-email", title: "Sign up with social + email", description: "Sign up card with social buttons and email form.", categorySlug: "sign-ups", tags: ["signup","social","email","oauth"],
    prompt: "Sign-up card with GitHub / Google OAuth row above email form.", previewKind: "sign-up-form", featured: 9, createdAt: ago(1), likes: 2040, views: 25600, authorIdx: 3,
    code: `import { Github, Chrome } from 'lucide-react';
export function SocialSignup() {
  return (
    <form className="mx-auto w-80 space-y-3 rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <h2 className="text-lg font-semibold">Create your account</h2>
      <div className="grid grid-cols-2 gap-2">
        <button type="button" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-ink-200 py-2 text-xs font-semibold dark:border-ink-700"><Github className="h-4 w-4" />GitHub</button>
        <button type="button" className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-ink-200 py-2 text-xs font-semibold dark:border-ink-700"><Chrome className="h-4 w-4" />Google</button>
      </div>
      <div className="relative py-2 text-center text-[10px] uppercase tracking-widest text-ink-400">
        <span className="bg-white px-2 dark:bg-ink-900">Or with email</span>
        <span className="absolute inset-x-0 top-1/2 -z-10 h-px bg-ink-200 dark:bg-ink-800" />
      </div>
      <input type="email" placeholder="Email" className="w-full rounded-lg border border-ink-300 px-3 py-2 text-sm dark:border-ink-700 dark:bg-ink-900" />
      <input type="password" placeholder="Password" className="w-full rounded-lg border border-ink-300 px-3 py-2 text-sm dark:border-ink-700 dark:bg-ink-900" />
      <button className="w-full rounded-lg bg-ink-900 py-2 text-sm font-semibold text-white dark:bg-white dark:text-ink-900">Create account</button>
    </form>
  );
}` },

  // ══════════════════════════════════════════════════════════════════
  // TABLES (+1) & PAGINATIONS (+2)
  // ══════════════════════════════════════════════════════════════════
  { id: "b2-table-invoices", title: "Invoices admin table", description: "Admin-style table with status badges and row actions.", categorySlug: "tables", tags: ["table","admin","invoices","status"],
    prompt: "Admin table showing invoices with status badges and ellipsis action menus.", previewKind: "table", featured: 8, createdAt: ago(2), likes: 1260, views: 16300, authorIdx: 1,
    code: `import { MoreHorizontal } from 'lucide-react';
const ROWS = [
  { id: 'INV-0142', name: 'Acme Corp', status: 'Paid', amount: '$1,240.00' },
  { id: 'INV-0141', name: 'Globex', status: 'Overdue', amount: '$890.00' },
  { id: 'INV-0140', name: 'Initech', status: 'Draft', amount: '$0.00' },
];
const COLORS: Record<string, string> = { Paid: 'bg-emerald-100 text-emerald-700', Overdue: 'bg-rose-100 text-rose-700', Draft: 'bg-ink-100 text-ink-600' };
export function InvoicesTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-200 dark:border-ink-800">
      <table className="w-full text-sm">
        <thead className="bg-ink-50 dark:bg-ink-900"><tr>{['Invoice','Customer','Status','Amount',''].map(h => <th key={h} className="px-4 py-2 text-left text-xs font-semibold text-ink-500">{h}</th>)}</tr></thead>
        <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
          {ROWS.map(r => (
            <tr key={r.id}>
              <td className="px-4 py-2 font-mono text-xs">{r.id}</td>
              <td className="px-4 py-2">{r.name}</td>
              <td className="px-4 py-2"><span className={'rounded-full px-2 py-0.5 text-xs font-semibold ' + COLORS[r.status]}>{r.status}</span></td>
              <td className="px-4 py-2 tabular-nums">{r.amount}</td>
              <td className="px-4 py-2 text-right"><button aria-label="Row actions" className="rounded p-1 hover:bg-ink-100 dark:hover:bg-ink-800"><MoreHorizontal className="h-4 w-4" /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}` },
  { id: "b2-pagination-numbered", title: "Numbered pagination", description: "Classic numbered pagination with prev/next arrows.", categorySlug: "paginations", tags: ["pagination","numbered","prev-next"],
    prompt: "Numbered pagination control with ellipsis and prev/next arrows.", previewKind: "pagination", featured: 7, createdAt: ago(3), likes: 640, views: 8200, authorIdx: 5,
    code: `import { ChevronLeft, ChevronRight } from 'lucide-react';
export function NumberedPagination() {
  return (
    <nav className="inline-flex items-center gap-1" aria-label="Pagination">
      <button aria-label="Previous" className="rounded-md border border-ink-200 p-1.5 hover:bg-ink-50 dark:border-ink-800 dark:hover:bg-ink-800"><ChevronLeft className="h-4 w-4" /></button>
      {[1,2,3,'…',9,10].map((n, i) => (
        <button key={i} className={'min-w-[32px] rounded-md px-2 py-1 text-sm ' + (n === 3 ? 'bg-ink-900 font-semibold text-white dark:bg-white dark:text-ink-900' : 'hover:bg-ink-50 dark:hover:bg-ink-800')}>{n}</button>
      ))}
      <button aria-label="Next" className="rounded-md border border-ink-200 p-1.5 hover:bg-ink-50 dark:border-ink-800 dark:hover:bg-ink-800"><ChevronRight className="h-4 w-4" /></button>
    </nav>
  );
}` },
  { id: "b2-pagination-load-more", title: "Load-more pagination", description: "Infinite-feel pagination with explicit load-more button and counter.", categorySlug: "paginations", tags: ["pagination","load-more","infinite"],
    prompt: "Load-more pagination displaying 'Showing x of y' and a single action button.", previewKind: "pagination", featured: 7, createdAt: ago(4), likes: 480, views: 6100, authorIdx: 2,
    code: `export function LoadMorePagination() {
  return (
    <div className="flex flex-col items-center gap-3 py-6">
      <p className="text-xs text-ink-500">Showing 24 of 183 components</p>
      <div className="h-1.5 w-64 rounded-full bg-ink-100 dark:bg-ink-800">
        <div className="h-full rounded-full bg-violet-500" style={{ width: '13%' }} />
      </div>
      <button className="rounded-xl border border-ink-200 px-5 py-2 text-sm font-semibold hover:bg-ink-50 dark:border-ink-800 dark:hover:bg-ink-800">Load more</button>
    </div>
  );
}` },
];
