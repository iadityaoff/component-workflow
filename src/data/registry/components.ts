import { ago } from "./base";
import type { VariantSpec } from "./base";

// ═══════════════════════════════════════════════════════════════════
// CARDS — 79 variants
// ═══════════════════════════════════════════════════════════════════
export const CARD_VARIANTS: VariantSpec[] = [
  {
    id: "card-pricing-01", title: "Pricing tier — Pro", description: "Three-tier pricing card with feature list.",
    categorySlug: "cards", tags: ["pricing","card","saas","features"],
    code: `import { Check } from 'lucide-react';
export function PricingCard({ name = "Pro", price = "$29", features = ["Unlimited projects","Priority support","Advanced analytics","Custom domains"] }) {
  return (
    <div className="flex flex-col rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">{name}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight">{price}</span>
        <span className="text-ink-500">/mo</span>
      </div>
      <ul className="mt-6 space-y-2 text-sm text-ink-700 dark:text-ink-300">
        {features.map(f => <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" />{f}</li>)}
      </ul>
      <button className="mt-6 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Get started</button>
    </div>
  );
}`,
    prompt: "SaaS pricing card with tier name, monthly price, checkmark features, and CTA.",
    previewKind: "card-pricing", featured: 10, createdAt: ago(1), likes: 3200, views: 45000, authorIdx: 0,
  },
  {
    id: "card-stat-02", title: "Stat card with delta", description: "KPI card with trend arrow.",
    categorySlug: "cards", tags: ["dashboard","kpi","analytics","stat"],
    code: `export function StatCard({ label = "Total Revenue", value = "$48,210", delta = "+12.4%" }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
      <p className="text-sm text-ink-500">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight">{value}</span>
        <span className="text-sm font-medium text-emerald-600">{delta}</span>
      </div>
    </div>
  );
}`,
    prompt: "KPI stat card with label, large value, and colored delta percentage.",
    previewKind: "card-stat", featured: 9, createdAt: ago(2), likes: 2600, views: 35000, authorIdx: 1,
  },
  {
    id: "card-user-profile-03", title: "User profile card", description: "Compact profile card with follow.",
    categorySlug: "cards", tags: ["card","profile","user","social"],
    code: `export function ProfileCard({ name = "Aria Chen", bio = "Senior UI Engineer at Vercel. Building beautiful things.", handle = "@ariac" }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-ink-200 bg-white p-6 text-center dark:border-ink-800 dark:bg-ink-900">
      <div className="h-16 w-16 rounded-full bg-rose-500 flex items-center justify-center text-white text-xl font-bold">AC</div>
      <h3 className="mt-3 text-sm font-semibold">{name}</h3>
      <p className="mt-0.5 text-xs text-ink-500">{handle}</p>
      <p className="mt-2 text-xs text-ink-500 max-w-[180px]">{bio}</p>
      <button className="mt-4 rounded-lg bg-ink-900 px-4 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-ink-900">Follow</button>
    </div>
  );
}`,
    prompt: "User profile card with avatar, name, handle, bio, and follow button.",
    previewKind: "card-user-profile", featured: 8, createdAt: ago(3), likes: 2100, views: 28000, authorIdx: 2,
  },
  {
    id: "card-notification-04", title: "Notification card", description: "Action notification with icon.",
    categorySlug: "cards", tags: ["card","notification","alert","inbox"],
    code: `import { MessageSquare } from 'lucide-react';
export function NotificationCard({ title = "New comment", message = "Jonas Berg replied to your post", time = "2m ago" }) {
  return (
    <div className="flex gap-3 rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400">
        <MessageSquare className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-ink-500">{message}</p>
        <p className="mt-1 text-[10px] text-ink-400">{time}</p>
      </div>
    </div>
  );
}`,
    prompt: "Notification card with icon, title, message, and timestamp.",
    previewKind: "card-notification", featured: 7, createdAt: ago(4), likes: 1700, views: 22000, authorIdx: 3,
  },
  {
    id: "card-feature-05", title: "Feature card", description: "Icon + title + description marketing card.",
    categorySlug: "cards", tags: ["card","feature","marketing","icon"],
    code: `import { Zap } from 'lucide-react';
export function FeatureCard({ icon = <Zap className="h-5 w-5" />, title = "Blazing fast", description = "Optimized for performance with sub-100ms response times worldwide." }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 text-ink-900 dark:bg-ink-800 dark:text-white">{icon}</div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-ink-500">{description}</p>
    </div>
  );
}`,
    prompt: "Feature card with icon, title, description for marketing pages.",
    previewKind: "card-stat", featured: 7, createdAt: ago(5), likes: 1500, views: 20000, authorIdx: 4,
  },
  {
    id: "card-glass-06", title: "Glassmorphism card", description: "Frosted glass card for hero overlays.",
    categorySlug: "cards", tags: ["card","glass","blur","premium"],
    code: `export function GlassCard({ title = "Welcome back", subtitle = "Sign in to continue" }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      <div className="relative">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="mt-1 text-sm text-white/70">{subtitle}</p>
      </div>
    </div>
  );
}`,
    prompt: "Glassmorphism card with backdrop-blur, white borders, gradient overlay.",
    previewKind: "hero-gradient", featured: 9, createdAt: ago(2), likes: 2800, views: 38000, authorIdx: 5,
  },
  {
    id: "card-testimonial-07", title: "Testimonial card", description: "Quote with avatar and rating.",
    categorySlug: "cards", tags: ["testimonial","card","social-proof","quote"],
    code: `import { Star } from 'lucide-react';
export function TestimonialCard({ quote = "This is the best UI component library I have ever used. Saved our team 3 weeks of design work.", author = "Sarah Chen", role = "CTO at Vercel", rating = 5 }) {
  return (
    <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <div className="flex gap-0.5 text-amber-400">
        {Array.from({length: rating}).map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
      </div>
      <p className="mt-3 text-sm text-ink-700 dark:text-ink-300">&ldquo;{quote}&rdquo;</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">SC</div>
        <div><p className="text-sm font-medium">{author}</p><p className="text-xs text-ink-500">{role}</p></div>
      </div>
    </div>
  );
}`,
    prompt: "Testimonial card with star rating, quote, author avatar, name and role.",
    previewKind: "testimonial", featured: 8, createdAt: ago(3), likes: 2200, views: 30000, authorIdx: 6,
  },
  {
    id: "card-product-08", title: "Product card", description: "E-commerce product tile.",
    categorySlug: "cards", tags: ["card","ecommerce","product","shop"],
    code: `import { Headphones } from 'lucide-react';
export function ProductCard({ name = "Wireless Headphones", price = "$129", badge = "New" }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900">
      <div className="relative flex h-48 items-center justify-center bg-ink-100 dark:bg-ink-800">
        <Headphones className="h-12 w-12 text-ink-400 stroke-[1.5]" />
        {badge && <span className="absolute right-3 top-3 rounded-full bg-ink-900 px-2 py-0.5 text-[10px] font-bold text-white">{badge}</span>}
      </div>
      <div className="p-4">
        <p className="font-medium">{name}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">{price}</span>
          <button className="rounded-lg bg-ink-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Add to cart</button>
        </div>
      </div>
    </div>
  );
}`,
    prompt: "E-commerce product card with image area, badge, price, add to cart button.",
    previewKind: "card-product", featured: 7, createdAt: ago(6), likes: 1600, views: 21000, authorIdx: 7,
  },
];

// ═══════════════════════════════════════════════════════════════════
// HEROES — 73 variants
// ═══════════════════════════════════════════════════════════════════
export const HERO_VARIANTS: VariantSpec[] = [
  {
    id: "hero-gradient-01", title: "Gradient hero", description: "Centered hero with gradient headline.",
    categorySlug: "heroes", tags: ["hero","landing","gradient","cta"],
    code: `import { Sparkles } from 'lucide-react';
export function GradientHero() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-6 py-24 text-center dark:bg-ink-950">
      <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:border-violet-900/50 dark:bg-violet-950/50 dark:text-violet-300">
        <Sparkles className="h-3.5 w-3.5" /> Now in public beta
      </span>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-br from-ink-900 via-violet-700 to-rose-500 bg-clip-text text-transparent dark:from-white dark:via-violet-400 dark:to-rose-400">Build stunning UIs in minutes</h1>
      <p className="mt-6 max-w-xl text-lg text-ink-500 dark:text-ink-400">Ship production-ready components with AI. Browse 1,483 variants, remix instantly.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button className="rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-ink-800 dark:bg-white dark:text-ink-900">Get started free</button>
        <button className="rounded-xl border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 hover:bg-ink-50 dark:border-ink-800 dark:text-ink-200">View components <Icon icon={ArrowRight} size={16} /></button>
      </div>
    </section>
  );
}`,
    prompt: "Centered landing hero with gradient headline, beta badge, paragraph, and dual CTAs.",
    previewKind: "hero-gradient", featured: 10, createdAt: ago(1), likes: 4200, views: 58000, authorIdx: 0,
  },
  {
    id: "hero-minimal-02", title: "Minimal hero", description: "Clean minimal hero, left-aligned.",
    categorySlug: "heroes", tags: ["hero","minimal","left","clean"],
    code: `export function MinimalHero() {
  return (
    <section className="bg-white px-8 py-20 dark:bg-ink-950">
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">Design system</p>
      <h1 className="mt-3 max-w-2xl text-5xl font-bold tracking-tight text-ink-900 dark:text-white">Components crafted for scale.</h1>
      <p className="mt-4 max-w-lg text-ink-500 dark:text-ink-400">Every detail considered. Every interaction polished. Ready to ship on day one.</p>
      <button className="mt-8 rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Browse components</button>
    </section>
  );
}`,
    prompt: "Left-aligned minimal hero with eyebrow text, heading, description, single CTA.",
    previewKind: "hero-minimal", featured: 8, createdAt: ago(3), likes: 2900, views: 39000, authorIdx: 1,
  },
  {
    id: "hero-dark-03", title: "Dark mode hero", description: "Full-dark hero with animated ring.",
    categorySlug: "heroes", tags: ["hero","dark","premium","animated"],
    code: `export function DarkHero() {
  return (
    <section className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden bg-ink-950 px-6 py-24 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_60%)]" />
      <div className="relative">
        <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">The future of UI</h1>
        <p className="mt-4 max-w-lg text-lg text-ink-400">AI-native components that write themselves.</p>
        <button className="mt-8 rounded-xl border border-violet-500 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-300 backdrop-blur-sm hover:bg-violet-500/20">Start building</button>
      </div>
    </section>
  );
}`,
    prompt: "Dark hero with radial gradient glow, large white heading, violet CTA.",
    previewKind: "hero-gradient", featured: 9, createdAt: ago(2), likes: 3600, views: 49000, authorIdx: 2,
  },
];

// ═══════════════════════════════════════════════════════════════════
// ALERTS — 23 variants
// ═══════════════════════════════════════════════════════════════════
export const ALERT_VARIANTS: VariantSpec[] = [
  {
    id: "alert-success-01", title: "Success alert", description: "Soft emerald success banner.",
    categorySlug: "alerts", tags: ["alert","success","emerald","feedback"],
    code: `import { Check } from 'lucide-react';
export function SuccessAlert({ title = "Changes saved!", body = "Your profile has been updated successfully." }) {
  return (
    <div className="flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/40">
      <Check className="h-5 w-5 text-emerald-500 shrink-0" />
      <div><p className="font-medium text-emerald-900 dark:text-emerald-200">{title}</p><p className="text-sm text-emerald-700 dark:text-emerald-300/80">{body}</p></div>
    </div>
  );
}`,
    prompt: "Soft emerald success alert with check icon, bold title and body copy.",
    previewKind: "alert-success", featured: 8, createdAt: ago(2), likes: 2000, views: 27000, authorIdx: 0,
  },
  {
    id: "alert-error-02", title: "Destructive error alert", description: "High-contrast error for validation.",
    categorySlug: "alerts", tags: ["alert","error","destructive","rose"],
    code: `import { X } from 'lucide-react';
export function ErrorAlert({ title = "Something went wrong", body = "Please check your input and try again." }) {
  return (
    <div className="flex gap-3 rounded-xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-900 dark:bg-rose-950/40">
      <X className="h-5 w-5 text-rose-500 shrink-0" />
      <div><p className="font-medium text-rose-900 dark:text-rose-200">{title}</p><p className="text-sm text-rose-700 dark:text-rose-300/80">{body}</p></div>
    </div>
  );
}`,
    prompt: "Destructive error alert with X icon, title and body copy in rose.",
    previewKind: "alert-error", featured: 7, createdAt: ago(4), likes: 1500, views: 20000, authorIdx: 1,
  },
  {
    id: "alert-warning-03", title: "Warning alert", description: "Amber warning with icon.",
    categorySlug: "alerts", tags: ["alert","warning","amber","caution"],
    code: `import { AlertTriangle } from 'lucide-react';
export function WarningAlert({ title = "Heads up!", body = "This action cannot be undone. Please review before continuing." }) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/40">
      <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
      <div><p className="font-medium text-amber-900 dark:text-amber-200">{title}</p><p className="text-sm text-amber-700 dark:text-amber-300/80">{body}</p></div>
    </div>
  );
}`,
    prompt: "Amber warning alert with warning icon, title and body.",
    previewKind: "alert-warning", featured: 7, createdAt: ago(5), likes: 1300, views: 17000, authorIdx: 2,
  },
  {
    id: "alert-info-04", title: "Info alert", description: "Sky blue informational banner.",
    categorySlug: "alerts", tags: ["alert","info","sky","informational"],
    code: `import { Info } from 'lucide-react';
export function InfoAlert({ title = "Did you know?", body = "You can remix any component using our AI Remix engine." }) {
  return (
    <div className="flex gap-3 rounded-xl border border-sky-200 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-950/40">
      <Info className="h-5 w-5 text-sky-500 shrink-0" />
      <div><p className="font-medium text-sky-900 dark:text-sky-200">{title}</p><p className="text-sm text-sky-700 dark:text-sky-300/80">{body}</p></div>
    </div>
  );
}`,
    prompt: "Sky blue informational alert with info icon, title and body.",
    previewKind: "alert-info", featured: 6, createdAt: ago(6), likes: 1100, views: 15000, authorIdx: 3,
  },
];

// ═══════════════════════════════════════════════════════════════════
// INPUTS — 102 variants
// ═══════════════════════════════════════════════════════════════════
export const INPUT_VARIANTS: VariantSpec[] = [
  {
    id: "input-search-01", title: "Search input", description: "Polished search with leading icon.",
    categorySlug: "inputs", tags: ["input","search","icon","form"],
    code: `import { Search } from 'lucide-react';
export function SearchInput({ placeholder = "Search components…" }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-400 font-medium" />
      <input placeholder={placeholder} className="h-10 w-full rounded-lg border border-ink-200 bg-white pl-9 pr-3 text-sm placeholder:text-ink-400 focus:border-ink-400 focus:outline-none focus:ring-2 focus:ring-ink-400/20 dark:border-ink-800 dark:bg-ink-900 dark:text-white" />
    </div>
  );
}`,
    prompt: "Search input with leading icon, placeholder, focus ring.",
    previewKind: "input-search", featured: 9, createdAt: ago(2), likes: 2800, views: 38000, authorIdx: 0,
  },
  {
    id: "input-floating-02", title: "Floating label input", description: "Material-style animated label.",
    categorySlug: "inputs", tags: ["input","floating","material","animated"],
    code: `import { useState } from 'react';
export function FloatingInput({ label = "Email address" }) {
  const [val, setVal] = useState('');
  const [focused, setFocused] = useState(false);
  const lifted = focused || val.length > 0;
  return (
    <div className="relative">
      <input value={val} onChange={e => setVal(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className="peer h-12 w-full rounded-lg border border-ink-200 bg-white px-4 pt-4 text-sm focus:border-ink-400 focus:outline-none dark:border-ink-800 dark:bg-ink-900 dark:text-white" />
      <label className={\`pointer-events-none absolute left-4 text-ink-500 transition-all \${lifted ? 'top-1.5 text-[10px] text-ink-400' : 'top-3.5 text-sm'}\`}>{label}</label>
    </div>
  );
}`,
    prompt: "Floating label input that lifts on focus or when value is present.",
    previewKind: "input-floating", featured: 8, createdAt: ago(3), likes: 2400, views: 33000, authorIdx: 1,
  },
  {
    id: "input-password-03", title: "Password with toggle", description: "Password field with show/hide.",
    categorySlug: "inputs", tags: ["input","password","toggle","security"],
    code: `import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
export function PasswordInput({ placeholder = "Enter password" }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input type={show ? 'text' : 'password'} placeholder={placeholder}
        className="h-10 w-full rounded-lg border border-ink-200 bg-white pr-10 pl-3 text-sm placeholder:text-ink-400 focus:border-ink-400 focus:outline-none focus:ring-2 focus:ring-ink-400/20 dark:border-ink-800 dark:bg-ink-900 dark:text-white" />
      <button onClick={() => setShow(!show)} type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 hover:text-ink-600 outline-none focus:text-violet-500">
        {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </button>
    </div>
  );
}`,
    prompt: "Password input with show/hide toggle button.",
    previewKind: "input-password", featured: 8, createdAt: ago(4), likes: 2100, views: 28000, authorIdx: 2,
  },
];

// ═══════════════════════════════════════════════════════════════════
// BADGES — 25 variants
// ═══════════════════════════════════════════════════════════════════
export const BADGE_VARIANTS: VariantSpec[] = [
  {
    id: "badge-status-01", title: "Status badge set", description: "Five colored status badges.",
    categorySlug: "badges", tags: ["badge","status","color","pill"],
    code: `const tones = {
  success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400",
  warning: "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400",
  error: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-400",
  info: "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-400",
  neutral: "bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-300",
};
export function StatusBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      {(Object.keys(tones) as Array<keyof typeof tones>).map(t => (
        <span key={t} className={\`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium capitalize \${tones[t]}\`}>{t}</span>
      ))}
    </div>
  );
}`,
    prompt: "Row of 5 pill badges in success/warning/error/info/neutral tones.",
    previewKind: "badge-row", featured: 8, createdAt: ago(2), likes: 2200, views: 30000, authorIdx: 0,
  },
  {
    id: "badge-dot-02", title: "Badge with dot", description: "Pill badge with status dot indicator.",
    categorySlug: "badges", tags: ["badge","dot","status","online"],
    code: `export function DotBadge({ label = "Live", color = "bg-emerald-500" }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
      <span className={\`h-1.5 w-1.5 rounded-full \${color} animate-pulse\`} />
      {label}
    </span>
  );
}`,
    prompt: "Pill badge with animated pulsing status dot.",
    previewKind: "badge-row", featured: 7, createdAt: ago(4), likes: 1800, views: 24000, authorIdx: 1,
  },
];

// ═══════════════════════════════════════════════════════════════════
// AVATARS — 17 variants
// ═══════════════════════════════════════════════════════════════════
export const AVATAR_VARIANTS: VariantSpec[] = [
  {
    id: "avatar-stack-01", title: "Avatar stack", description: "Overlapping avatar group with +N chip.",
    categorySlug: "avatars", tags: ["avatar","group","stack","overflow"],
    code: `export function AvatarStack({ max = 4 }) {
  const colors = ['bg-rose-500','bg-amber-500','bg-emerald-500','bg-sky-500','bg-violet-500'];
  const names = ['AC','MR','PI','JB','LO','DP'];
  const shown = names.slice(0, max);
  const overflow = names.length - max;
  return (
    <div className="flex -space-x-2.5">
      {shown.map((n,i) => (
        <div key={i} className={\`h-9 w-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold dark:border-ink-950 \${colors[i % colors.length]}\`}>{n}</div>
      ))}
      {overflow > 0 && <div className="h-9 w-9 rounded-full border-2 border-white bg-ink-200 flex items-center justify-center text-xs font-bold text-ink-700 dark:border-ink-950 dark:bg-ink-800 dark:text-ink-300">+{overflow}</div>}
    </div>
  );
}`,
    prompt: "Overlapping avatar stack with overflow chip.",
    previewKind: "avatar-stack", featured: 8, createdAt: ago(3), likes: 2300, views: 31000, authorIdx: 0,
  },
];

// ═══════════════════════════════════════════════════════════════════
// SPINNER LOADERS — 21 variants
// ═══════════════════════════════════════════════════════════════════
export const SPINNER_VARIANTS: VariantSpec[] = [
  {
    id: "spinner-border-01", title: "Border spinner", description: "Classic border-based CSS spinner.",
    categorySlug: "spinner-loaders", tags: ["spinner","loader","css","border"],
    code: `export const Spinner = ({ size = "h-6 w-6" }) => (
  <span className={\`block animate-spin rounded-full border-2 border-ink-200 border-t-ink-900 dark:border-ink-800 dark:border-t-white \${size}\`} />
);`,
    prompt: "CSS border spinner with dark mode support.",
    previewKind: "spinner", featured: 8, createdAt: ago(2), likes: 2100, views: 28000, authorIdx: 0,
  },
  {
    id: "spinner-dots-02", title: "Bouncing dots loader", description: "Three bouncing dots loading animation.",
    categorySlug: "spinner-loaders", tags: ["spinner","dots","bounce","loader"],
    code: `export function DotsLoader() {
  return (
    <div className="flex items-center gap-1">
      {[0,1,2].map(i => (
        <span key={i} style={{ animationDelay: \`\${i * 0.15}s\` }}
          className="h-2 w-2 rounded-full bg-ink-900 animate-bounce dark:bg-white" />
      ))}
    </div>
  );
}`,
    prompt: "Three small circles bouncing with staggered delay.",
    previewKind: "spinner", featured: 7, createdAt: ago(4), likes: 1700, views: 22000, authorIdx: 1,
  },
  {
    id: "progress-bar-03", title: "Animated progress bar", description: "Determinate shimmer progress bar.",
    categorySlug: "spinner-loaders", tags: ["progress","bar","shimmer","loader"],
    code: `export function ProgressBar({ value = 72 }) {
  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between text-xs text-ink-500"><span>Loading...</span><span>{value}%</span></div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
        <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-rose-500 transition-all duration-500" style={{ width: \`\${value}%\` }} />
      </div>
    </div>
  );
}`,
    prompt: "Gradient progress bar with percentage label and smooth transition.",
    previewKind: "progress-bar", featured: 7, createdAt: ago(5), likes: 1400, views: 18000, authorIdx: 2,
  },
];

// ═══════════════════════════════════════════════════════════════════
// TABS — 38 variants
// ═══════════════════════════════════════════════════════════════════
export const TAB_VARIANTS: VariantSpec[] = [
  {
    id: "tabs-pill-01", title: "Pill tabs", description: "Animated pill tabs with active bg.",
    categorySlug: "tabs", tags: ["tabs","pill","navigation","active"],
    code: `import { useState } from 'react';
export function PillTabs({ tabs = ["Overview","Features","Pricing","FAQ"] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="inline-flex rounded-xl border border-ink-200 bg-ink-50 p-1 dark:border-ink-800 dark:bg-ink-900">
      {tabs.map((t, i) => (
        <button key={t} onClick={() => setActive(i)} className={\`rounded-lg px-4 py-1.5 text-sm font-medium transition \${i === active ? 'bg-white text-ink-900 shadow-sm dark:bg-ink-800 dark:text-white' : 'text-ink-500 hover:text-ink-900 dark:hover:text-white'}\`}>{t}</button>
      ))}
    </div>
  );
}`,
    prompt: "Pill-shaped tabs with active background and smooth transition.",
    previewKind: "tabs-pill", featured: 9, createdAt: ago(2), likes: 2700, views: 37000, authorIdx: 0,
  },
  {
    id: "tabs-underline-02", title: "Underline tabs", description: "Classic animated underline tab bar.",
    categorySlug: "tabs", tags: ["tabs","underline","classic","border"],
    code: `import { useState } from 'react';
export function UnderlineTabs({ tabs = ["Account","Security","Notifications","Billing"] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex border-b border-ink-200 dark:border-ink-800">
      {tabs.map((t, i) => (
        <button key={t} onClick={() => setActive(i)} className={\`relative px-4 py-3 text-sm font-medium transition \${i === active ? 'text-ink-900 dark:text-white' : 'text-ink-500 hover:text-ink-900 dark:hover:text-white'}\`}>
          {t}
          {i === active && <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-ink-900 dark:bg-white" />}
        </button>
      ))}
    </div>
  );
}`,
    prompt: "Underline tab bar with animated bottom border indicator.",
    previewKind: "tabs-pill", featured: 8, createdAt: ago(3), likes: 2200, views: 30000, authorIdx: 1,
  },
];

// ═══════════════════════════════════════════════════════════════════
// TOGGLES — 12 variants
// ═══════════════════════════════════════════════════════════════════
export const TOGGLE_VARIANTS: VariantSpec[] = [
  {
    id: "toggle-ios-01", title: "iOS-style toggle", description: "Smooth toggle switch.",
    categorySlug: "toggles", tags: ["toggle","switch","ios","boolean"],
    code: `import { useState } from 'react';
export function Toggle({ label = "Dark mode" }) {
  const [on, setOn] = useState(true);
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <button onClick={() => setOn(!on)} className={\`relative h-6 w-11 rounded-full transition-colors \${on ? 'bg-ink-900 dark:bg-white' : 'bg-ink-300 dark:bg-ink-700'}\`}>
        <span className={\`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white dark:bg-ink-900 shadow transition-transform \${on ? 'translate-x-5' : ''}\`} />
      </button>
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
}`,
    prompt: "iOS-style toggle with smooth slide animation.",
    previewKind: "toggle-switch", featured: 9, createdAt: ago(2), likes: 2600, views: 35000, authorIdx: 0,
  },
];
