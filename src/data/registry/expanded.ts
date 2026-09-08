/**
 * EXPANDED REGISTRY — Covers ALL missing content/section categories
 * ═══════════════════════════════════════════════════════════════════
 */
import { ago } from "./base";
import type { VariantSpec } from "./base";

// ═══════════════════════════════════════════════════════════════
// ANNOUNCEMENTS
// ═══════════════════════════════════════════════════════════════
export const ANNOUNCEMENT_VARIANTS: VariantSpec[] = [];

// ═══════════════════════════════════════════════════════════════
// CALLS TO ACTION
// ═══════════════════════════════════════════════════════════════
export const CTA_VARIANTS: VariantSpec[] = [
  { id: "cta-centered-01", title: "Centered CTA section", description: "Full-width centered call to action.", categorySlug: "calls-to-action", tags: ["cta","centered","marketing","section"],
    code: `export function CenteredCTA() {
  return (
    <section className="py-20 px-6 text-center bg-white dark:bg-ink-950">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to get started?</h2>
      <p className="mx-auto mt-4 max-w-lg text-ink-500 dark:text-ink-400">Join thousands of developers using our component library to ship faster.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button className="rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Start free trial</button>
        <button className="rounded-xl border border-ink-200 px-6 py-3 text-sm font-semibold text-ink-700 hover:bg-ink-50 dark:border-ink-800 dark:text-ink-200">Talk to sales</button>
      </div>
    </section>
  );
}`, prompt: "Centered CTA section with heading, paragraph, dual buttons.", previewKind: "hero-gradient", featured: 9, createdAt: ago(1), likes: 2600, views: 35000, authorIdx: 0 },
  { id: "cta-gradient-02", title: "Gradient CTA banner", description: "Full-bleed gradient call to action.", categorySlug: "calls-to-action", tags: ["cta","gradient","banner","marketing"],
    code: `export function GradientCTA() {
  return (
    <section className="rounded-2xl bg-gradient-to-br from-violet-600 via-rose-500 to-amber-400 px-8 py-16 text-center text-white">
      <h2 className="text-3xl font-bold tracking-tight">Build something amazing today</h2>
      <p className="mx-auto mt-3 max-w-md text-white/80">Get access to 1,483+ premium components designed to accelerate your workflow.</p>
    </section>
  );
}`, prompt: "Full-bleed gradient CTA with modern text and high contrast.", previewKind: "hero-gradient", featured: 8, createdAt: ago(2), likes: 1200, views: 18000, authorIdx: 1 }
];

// ═══════════════════════════════════════════════════════════════
// FEATURES
// ═══════════════════════════════════════════════════════════════
export const FEATURE_VARIANTS: VariantSpec[] = [
  { id: "feature-grid-01", title: "Modern feature grid", description: "Icon-based feature grid with cards.", categorySlug: "features", tags: ["feature","grid","icons","marketing"],
    code: `import { Zap, Lock, Palette, Smartphone, Plug, Bot } from 'lucide-react';

const items = [
  { icon: <Zap className="h-5 w-5" />, title: "Blazing fast", desc: "Sub-100ms response times worldwide." },
  { icon: <Lock className="h-5 w-5" />, title: "Secure by default", desc: "Enterprise-grade security built in." },
  { icon: <Palette className="h-5 w-5" />, title: "Beautiful UI", desc: "Designed with attention to every pixel." },
  { icon: <Smartphone className="h-5 w-5" />, title: "Responsive", desc: "Works on every device and screen size." },
  { icon: <Plug className="h-5 w-5" />, title: "Easy integration", desc: "Drop into any React project instantly." },
  { icon: <Bot className="h-5 w-5" />, title: "AI-powered", desc: "Smart suggestions and auto-generation." },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(f => (
        <div key={f.title} className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-100 text-ink-900 dark:bg-ink-800 dark:text-ink-100">{f.icon}</div>
          <h3 className="mt-4 font-semibold">{f.title}</h3>
          <p className="mt-2 text-sm text-ink-500">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}`, prompt: "Standard feature grid with grid icons and card layout.", previewKind: "feature-grid", featured: 8, createdAt: ago(2), likes: 1540, views: 22000, authorIdx: 0 },
  { id: "feature-bento-01", title: "Asymmetric bento features", description: "Bento-style asymmetric feature grid.", categorySlug: "features", tags: ["feature","bento","grid","layout"],
    code: `import { Palette, Package, Rocket } from 'lucide-react';

export function BentoFeatures() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
      <div className="col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 p-8 text-white">
        <h3 className="text-2xl font-bold">AI Remix Engine</h3>
        <p className="mt-3 text-white/70">Take any component and remix it with AI to create unlimited variations.</p>
      </div>
      <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
        <Palette className="h-6 w-6 text-violet-500" />
        <h4 className="mt-3 font-semibold">Design tokens</h4>
        <p className="mt-1 text-xs text-ink-500">Consistent theming</p>
      </div>
      <div className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
        <Package className="h-6 w-6 text-amber-500" />
        <h4 className="mt-3 font-semibold">600+ variants</h4>
        <p className="mt-1 text-xs text-ink-500">Copy-paste ready</p>
      </div>
      <div className="col-span-2 rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
        <Rocket className="h-6 w-6 text-rose-500" />
        <h4 className="mt-3 font-semibold">Production ready</h4>
        <p className="mt-1 text-xs text-ink-500">Tested, accessible, performant</p>
      </div>
    </div>
  );
}`, prompt: "Bento-style asymmetric feature grid with hero card and smaller tiles.", previewKind: "feature-grid", featured: 10, createdAt: ago(1), likes: 3800, views: 50000, authorIdx: 1 }
];

// ═══════════════════════════════════════════════════════════════
// FOOTERS
// ═══════════════════════════════════════════════════════════════
export const FOOTER_VARIANTS: VariantSpec[] = [
  { id: "footer-simple-01", title: "Simple footer", description: "Minimal copyright footer.", categorySlug: "footers", tags: ["footer","simple","copyright","minimal"],
    code: `export function SimpleFooter() {
  return (
    <footer className="border-t border-ink-200 bg-white px-6 py-8 text-center dark:border-ink-800 dark:bg-ink-950">
      <p className="text-sm text-ink-500">© 2026 21st Components. All rights reserved.</p>
      <div className="mt-3 flex items-center justify-center gap-6 text-xs text-ink-400">
        <a href="#" className="hover:text-ink-900 dark:hover:text-white">Privacy</a>
        <a href="#" className="hover:text-ink-900 dark:hover:text-white">Terms</a>
        <a href="#" className="hover:text-ink-900 dark:hover:text-white">Contact</a>
      </div>
    </footer>
  );
}`, prompt: "Simple centered footer with copyright and links.", previewKind: "footer-simple", featured: 7, createdAt: ago(4), likes: 1200, views: 16000, authorIdx: 0 },
  { id: "footer-columns-02", title: "Multi-column footer", description: "4-column footer with link sections.", categorySlug: "footers", tags: ["footer","columns","links","sections"],
    code: `const cols = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Resources", links: ["Community", "Help Center", "Status", "API"] },
  { title: "Legal", links: ["Privacy", "Terms", "Cookie Policy", "GDPR"] },
];
export function ColumnFooter() {
  return (
    <footer className="border-t border-ink-200 bg-white px-6 py-12 dark:border-ink-800 dark:bg-ink-950">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {cols.map(c => (
          <div key={c.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-900 dark:text-white">{c.title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-500">
              {c.links.map(l => <li key={l}><a href="#" className="hover:text-ink-900 dark:hover:text-white">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}`, prompt: "4-column site footer with product, company, resources and legal links.", previewKind: "footer-simple", featured: 8, createdAt: ago(2), likes: 1800, views: 24000, authorIdx: 1 }
];

// ═══════════════════════════════════════════════════════════════
// PRICING
// ═══════════════════════════════════════════════════════════════
export const PRICING_VARIANTS: VariantSpec[] = [
  { id: "pricing-tier-01", title: "Three-tier pricing", description: "Comparison grid with popular badge.", categorySlug: "pricing", tags: ["pricing","comparison","tiers","marketing"],
    code: `import { Check } from 'lucide-react';
const tiers = [
  { name: "Starter", price: "$0", desc: "For personal projects", features: ["5 components", "Community support", "Basic analytics"], cta: "Get started" },
  { name: "Pro", price: "$29", desc: "For growing teams", features: ["Unlimited components", "Priority support", "Advanced analytics", "AI Remix"], cta: "Start trial", popular: true },
  { name: "Enterprise", price: "Custom", desc: "For large organizations", features: ["Custom deployment", "SLA guarantee", "Dedicated support", "SSO"], cta: "Contact sales" },
];
export function ThreeTierPricing() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {tiers.map(t => (
        <div key={t.name} className={\`relative flex flex-col rounded-2xl border p-6 \${t.popular ? 'border-violet-500 shadow-lg shadow-violet-500/10' : 'border-ink-200 dark:border-ink-800'} bg-white dark:bg-ink-900\`}>
          {t.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-500 px-3 py-0.5 text-[10px] font-bold text-white">Most popular</span>}
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">{t.name}</h3>
          <div className="mt-3 flex items-baseline gap-1"><span className="text-4xl font-bold">{t.price}</span>{t.price !== "Custom" && <span className="text-ink-500">/mo</span>}</div>
          <p className="mt-2 text-sm text-ink-500">{t.desc}</p>
          <ul className="mt-6 flex-1 space-y-2 text-sm text-ink-700 dark:text-ink-300">
            {t.features.map(f => (
              <li key={f} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-emerald-500" />
                {f}
              </li>
            ))}
          </ul>
          <button className={\`mt-6 w-full rounded-lg py-2.5 text-sm font-medium transition \${t.popular ? 'bg-violet-600 text-white hover:bg-violet-700' : 'bg-ink-900 text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900'}\`}>{t.cta}</button>
        </div>
      ))}
    </div>
  );
}`, prompt: "Three-tier pricing comparison with popular badge and check icons.", previewKind: "card-pricing", featured: 10, createdAt: ago(2), likes: 3200, views: 45000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════
export const TESTIMONIAL_VARIANTS: VariantSpec[] = [
  { id: "testimonial-grid-01", title: "Testimonial card grid", description: "Grid of 3 testimonial cards.", categorySlug: "testimonials", tags: ["testimonial","grid","cards","social-proof"],
    code: `import { Star } from 'lucide-react';
const reviews = [
  { name: "Alex Kim", role: "Designer at Stripe", quote: "Incredible components. Every detail is perfect.", rating: 5, color: "bg-rose-500", initials: "AK" },
  { name: "Priya Iyer", role: "Engineer at Shopify", quote: "Saved us months of UI development time.", rating: 5, color: "bg-violet-500", initials: "PI" },
  { name: "Jonas Berg", role: "CTO at Linear", quote: "The AI remix feature is a game-changer.", rating: 5, color: "bg-sky-500", initials: "JB" },
];
export function TestimonialGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {reviews.map(r => (
        <div key={r.name} className="rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
          <div className="flex gap-0.5 text-amber-400">
            {Array.from({length: r.rating}).map((_,i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <p className="mt-3 text-sm text-ink-700 dark:text-ink-300">"{r.quote}"</p>
          <div className="mt-4 flex items-center gap-3">
            <div className={\`h-8 w-8 rounded-full \${r.color} flex items-center justify-center text-white text-xs font-bold\`}>{r.initials}</div>
            <div><p className="text-sm font-medium">{r.name}</p><p className="text-xs text-ink-500">{r.role}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}`, prompt: "Grid of 3 testimonial cards with stars, quotes and authors.", previewKind: "testimonial", featured: 8, createdAt: ago(3), likes: 2000, views: 27000, authorIdx: 1 }
];

// ═══════════════════════════════════════════════════════════════
// NAVIGATION MENUS
// ═══════════════════════════════════════════════════════════════
export const NAV_VARIANTS: VariantSpec[] = [
  { id: "nav-simple-01", title: "Simple navbar", description: "Clean top nav with links and CTA.", categorySlug: "navigation-menus", tags: ["nav","navbar","simple","header"],
    code: `export function SimpleNav() {
  return (
    <nav className="flex h-14 items-center justify-between border-b border-ink-200 bg-white px-6 dark:border-ink-800 dark:bg-ink-950">
      <div className="flex items-center gap-8">
        <span className="font-bold text-ink-900 dark:text-white">Logo</span>
        <div className="hidden gap-6 md:flex">
          <a href="#" className="text-sm text-ink-500 hover:text-ink-900 dark:hover:text-white">Features</a>
          <a href="#" className="text-sm text-ink-500 hover:text-ink-900 dark:hover:text-white">Pricing</a>
          <a href="#" className="text-sm text-ink-500 hover:text-ink-900 dark:hover:text-white">Showcase</a>
        </div>
      </div>
      <button className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Get started</button>
    </nav>
  );
}`, prompt: "Simple top navigation bar with logo, links and a call to action button.", previewKind: "nav-simple", featured: 8, createdAt: ago(2), likes: 1900, views: 25000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// ACCORDIONS
// ═══════════════════════════════════════════════════════════════
export const ACCORDION_VARIANTS: VariantSpec[] = [
  { id: "accordion-faq-01", title: "FAQ accordion", description: "Expandable Q&A with chevron indicator.", categorySlug: "accordions", tags: ["accordion","faq","expandable","qa"],
    code: `import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const faqs = [
  { q: "What is this platform?", a: "An AI-powered UI component marketplace with 1,483+ variants." },
  { q: "Is it free to use?", a: "Yes! The starter plan is completely free. Pro starts at $29/mo." },
  { q: "Can I remix components?", a: "Absolutely. Use our AI Remix engine to modify any component." },
];
export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="mx-auto max-w-2xl divide-y divide-ink-200 dark:divide-ink-800">
      {faqs.map((f, i) => (
        <div key={i}>
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-ink-900 dark:text-white group">
            {f.q}
            <ChevronDown className={\`h-4 w-4 text-ink-400 transition-transform duration-200 \${open === i ? 'rotate-180' : ''}\`} />
          </button>
          {open === i && <p className="pb-4 text-sm text-ink-500 animate-in fade-in slide-in-from-top-1">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}`, prompt: "FAQ accordion with expand/collapse and chevron animation.", previewKind: "accordion", featured: 9, createdAt: ago(2), likes: 2600, views: 35000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// DIALOGS
// ═══════════════════════════════════════════════════════════════
export const DIALOG_VARIANTS: VariantSpec[] = [
  { id: "dialog-confirm-01", title: "Confirmation dialog", description: "Delete confirmation modal with backdrop.", categorySlug: "dialogs-modals", tags: ["dialog","modal","confirm","delete"],
    code: `import { useState } from 'react';
export function ConfirmDialog() {
  const [open, setOpen] = useState(true);
  if (!open) return <button onClick={() => setOpen(true)} className="rounded-lg bg-rose-600 px-4 py-2 text-sm text-white">Open dialog</button>;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/40 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-ink-200 bg-white p-6 shadow-2xl dark:border-ink-800 dark:bg-ink-900">
        <h3 className="text-lg font-semibold">Delete component?</h3>
        <p className="mt-2 text-sm text-ink-500">This action cannot be undone. The component will be permanently removed.</p>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={() => setOpen(false)} className="rounded-lg border border-ink-200 px-4 py-2 text-sm font-medium hover:bg-ink-50 dark:border-ink-800">Cancel</button>
          <button onClick={() => setOpen(false)} className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white hover:bg-rose-700">Delete</button>
        </div>
      </div>
    </div>
  );
}`, prompt: "Delete confirmation modal with backdrop blur.", previewKind: "dialog-confirm", featured: 8, createdAt: ago(3), likes: 2100, views: 28000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// FORMS
// ═══════════════════════════════════════════════════════════════
export const FORM_VARIANTS: VariantSpec[] = [
  { id: "form-contact-01", title: "Contact form", description: "Multi-field contact form with validation.", categorySlug: "forms", tags: ["form","contact","validation","multi-field"],
    code: `export function ContactForm() {
  return (
    <form className="mx-auto max-w-md space-y-4" onSubmit={e => e.preventDefault()}>
      <div><label className="block text-sm font-medium mb-1.5">Full name</label><input className="h-10 w-full rounded-lg border border-ink-200 bg-white px-3 text-sm focus:border-violet-500 focus:outline-none dark:border-ink-800 dark:bg-ink-900" placeholder="Jane Doe" /></div>
      <div><label className="block text-sm font-medium mb-1.5">Email</label><input type="email" className="h-10 w-full rounded-lg border border-ink-200 bg-white px-3 text-sm focus:border-violet-500 focus:outline-none dark:border-ink-800 dark:bg-ink-900" placeholder="jane@example.com" /></div>
      <div><label className="block text-sm font-medium mb-1.5">Message</label><textarea className="min-h-[100px] w-full rounded-lg border border-ink-200 bg-white p-3 text-sm focus:border-violet-500 focus:outline-none dark:border-ink-800 dark:bg-ink-900" placeholder="How can we help?" /></div>
      <button className="w-full rounded-lg bg-ink-900 py-2.5 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Send message</button>
    </form>
  );
}`, prompt: "Multi-field contact form with labels, inputs and submit button.", previewKind: "sign-in-form", featured: 8, createdAt: ago(2), likes: 2300, views: 31000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// SELECTS
// ═══════════════════════════════════════════════════════════════
export const SELECT_VARIANTS: VariantSpec[] = [
  { id: "select-custom-01", title: "Custom select dropdown", description: "Styled select with options list.", categorySlug: "selects", tags: ["select","dropdown","custom","form"],
    code: `import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
const options = ["React", "Vue", "Angular", "Svelte", "Solid"];
export function CustomSelect({ label = "Framework" }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="relative w-64">
      <label className="mb-1.5 block text-sm font-medium">{label}</label>
      <button onClick={() => setOpen(!open)} className="flex h-10 w-full items-center justify-between rounded-lg border border-ink-200 bg-white px-3 text-sm dark:border-ink-800 dark:bg-ink-900">
        {selected}
        <ChevronDown className={\`h-4 w-4 text-ink-400 transition-transform \${open ? 'rotate-180' : ''}\`} />
      </button>
      {open && (
        <ul className="absolute z-10 mt-1 w-full rounded-lg border border-ink-200 bg-white py-1 shadow-lg dark:border-ink-800 dark:bg-ink-900">
          {options.map(o => (
            <li key={o}><button onClick={() => { setSelected(o); setOpen(false); }} className={\`w-full px-3 py-2 text-left text-sm hover:bg-ink-50 dark:hover:bg-ink-800 \${o === selected ? 'font-medium text-violet-600' : ''}\`}>{o}</button></li>
          ))}
        </ul>
      )}
    </div>
  );
}`, prompt: "Custom styled select dropdown with options list.", previewKind: "select-custom", featured: 8, createdAt: ago(3), likes: 2000, views: 27000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// TABLES
// ═══════════════════════════════════════════════════════════════
export const TABLE_VARIANTS: VariantSpec[] = [
  { id: "table-simple-01", title: "Simple data table", description: "Clean bordered table with hover rows.", categorySlug: "tables", tags: ["table","data","rows","simple"],
    code: `const data = [
  { name: "Alice Chen", role: "Admin", status: "Active" },
  { name: "Bob Rivera", role: "Editor", status: "Active" },
  { name: "Carol Park", role: "Viewer", status: "Inactive" },
];
export function SimpleTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-200 dark:border-ink-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-ink-50 dark:bg-ink-900"><tr>
          {["Name","Role","Status"].map(h => <th key={h} className="px-4 py-3 font-medium text-ink-500">{h}</th>)}
        </tr></thead>
        <tbody className="divide-y divide-ink-100 dark:divide-ink-800 bg-white dark:bg-ink-950">
          {data.map(r => (
            <tr key={r.name} className="hover:bg-ink-50/50 dark:hover:bg-ink-900/50">
              <td className="px-4 py-3 font-medium">{r.name}</td>
              <td className="px-4 py-3 text-ink-500">{r.role}</td>
              <td className="px-4 py-3">
                <span className={\`rounded-full px-2 py-0.5 text-[10px] font-bold \${r.status === 'Active' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20' : 'bg-ink-50 text-ink-500 dark:bg-ink-800/50'}\`}>{r.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`, prompt: "Cleanbordered data table with hover rows and status badges.", previewKind: "table", featured: 8, createdAt: ago(2), likes: 1400, views: 19000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// CHECKBOXES
// ═══════════════════════════════════════════════════════════════
export const CHECKBOX_VARIANTS: VariantSpec[] = [
  { id: "checkbox-group-01", title: "Checkbox group", description: "Multi-select list of options.", categorySlug: "checkboxes", tags: ["checkbox","group","selection","form"],
    code: `import { useState } from 'react';
import { Check } from 'lucide-react';
const items = ["Email notifications", "Push notifications", "SMS alerts"];
export function CheckboxGroup() {
  const [checked, setChecked] = useState<Set<string>>(new Set(["Email notifications"]));
  const toggle = (item: string) => {
    const next = new Set(checked);
    next.has(item) ? next.delete(item) : next.add(item);
    setChecked(next);
  };
  return (
    <fieldset className="space-y-3">
      {items.map(item => (
        <label key={item} className="flex items-center gap-3 cursor-pointer">
          <span onClick={() => toggle(item)} className={\`flex h-5 w-5 items-center justify-center rounded border transition \${checked.has(item) ? 'bg-ink-900 border-ink-900 dark:bg-white dark:border-white' : 'border-ink-300 dark:border-ink-700'}\`}>
            {checked.has(item) && <Check className="h-3.5 w-3.5 text-white dark:text-ink-900" strokeWidth={4} />}
          </span>
          <span className="text-sm font-medium">{item}</span>
        </label>
      ))}
    </fieldset>
  );
}`, prompt: "Custom checkbox group with SVG check icons.", previewKind: "checkbox-list", featured: 8, createdAt: ago(3), likes: 1900, views: 25000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// TOOLTIPS
// ═══════════════════════════════════════════════════════════════
export const TOOLTIP_VARIANTS: VariantSpec[] = [
  { id: "tooltip-basic-01", title: "Basic tooltip", description: "Dark tooltip on hover.", categorySlug: "tooltips", tags: ["tooltip","hover","info","basic"],
    code: `import { useState } from 'react';
export function Tooltip({ text = "This is helpful info", children = "Hover me" }) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative inline-block" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <span className="cursor-help border-b border-dashed border-ink-400">{children}</span>
      {show && (
        <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 animate-in fade-in zoom-in-95 fill-mode-both">
          <div className="whitespace-nowrap rounded bg-ink-900 px-2 py-1 text-[10px] text-white dark:bg-ink-100 dark:text-ink-900 shadow-xl">{text}</div>
        </div>
      )}
    </div>
  );
}`, prompt: "Simple hover tooltip with animation.", previewKind: "tooltip", featured: 7, createdAt: ago(5), likes: 1100, views: 15000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// DROPDOWNS
// ═══════════════════════════════════════════════════════════════
export const DROPDOWN_VARIANTS: VariantSpec[] = [
  { id: "dropdown-action-01", title: "Action dropdown menu", description: "Dropdown with icon-labeled actions.", categorySlug: "dropdowns", tags: ["dropdown","menu","actions","popover"],
    code: `import { useState } from 'react';
import { Edit2, Clipboard, Trash2, ChevronDown } from 'lucide-react';
export function ActionDropdown() {
  const [open, setOpen] = useState(false);
  const items = [
    { label: "Edit", icon: <Edit2 className="h-4 w-4" /> },
    { label: "Duplicate", icon: <Clipboard className="h-4 w-4" /> },
    { label: "Delete", icon: <Trash2 className="h-4 w-4" />, danger: true },
  ];
  return (
    <div className="relative inline-block">
      <button onClick={() => setOpen(!open)} className="flex h-9 items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-3 text-sm font-medium hover:bg-ink-50 dark:border-ink-800 dark:bg-ink-900">
        Actions
        <ChevronDown className={\`h-4 w-4 text-ink-400 transition-transform \${open ? 'rotate-180' : ''}\`} />
      </button>
      {open && (
        <div className="absolute right-0 z-10 mt-1 w-48 rounded-xl border border-ink-200 bg-white py-1 shadow-xl dark:border-ink-800 dark:bg-ink-900">
          {items.map(i => (
            <button key={i.label} onClick={() => setOpen(false)} className={\`flex w-full items-center gap-2.5 px-3 py-2 text-sm hover:bg-ink-50 dark:hover:bg-ink-800 \${i.danger ? 'text-rose-600' : ''}\`}>
              {i.icon} {i.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}`, prompt: "Action menu dropdown with icons and danger state.", previewKind: "nav-simple", featured: 8, createdAt: ago(2), likes: 2100, views: 28000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// RADIOS
// ═══════════════════════════════════════════════════════════════
export const RADIO_VARIANTS: VariantSpec[] = [
  { id: "radio-cards-01", title: "Card radio group", description: "Selectable card-style radio options.", categorySlug: "radio-groups", tags: ["radio","cards","selection","form"],
    code: `import { useState } from 'react';
const plans = [
  { id: "starter", name: "Starter", price: "$0/mo" },
  { id: "pro", name: "Pro", price: "$29/mo" },
];
export function RadioCards() {
  const [selected, setSelected] = useState("pro");
  return (
    <div className="space-y-3">
      {plans.map(p => (
        <button key={p.id} onClick={() => setSelected(p.id)} className={\`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition \${selected === p.id ? 'border-violet-500 bg-violet-50/50 ring-1 ring-violet-500' : 'border-ink-200 hover:bg-ink-50'}\`}>
          <div className={\`h-4 w-4 rounded-full border-2 \${selected === p.id ? 'border-violet-500 bg-violet-500' : 'border-ink-300'}\`} />
          <div className="flex-1"><p className="text-sm font-medium">{p.name}</p></div>
          <span className="text-sm font-semibold">{p.price}</span>
        </button>
      ))}
    </div>
  );
}`, prompt: "Card radio group for plan selection.", previewKind: "radio-group", featured: 8, createdAt: ago(3), likes: 2100, views: 28000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// NOTIFICATIONS
// ═══════════════════════════════════════════════════════════════
export const NOTIFICATION_VARIANTS: VariantSpec[] = [
  { id: "notification-stack-01", title: "Notification stack", description: "Stacked notification list.", categorySlug: "notifications", tags: ["notification","list","stack"],
    code: `import { Bell } from 'lucide-react';
const notifications = [
  { id: 1, title: "New comment", time: "2m ago" },
  { id: 2, title: "Social update", time: "1h ago" },
];
export function NotificationStack() {
  return (
    <div className="w-80 divide-y divide-ink-100 rounded-2xl border border-ink-200 bg-white shadow-xl dark:divide-ink-800 dark:bg-ink-900">
      <div className="flex items-center justify-between px-4 py-3"><h3 className="text-sm font-semibold">Notifications</h3></div>
      {notifications.map(n => (
        <div key={n.id} className="flex gap-3 px-4 py-3 hover:bg-ink-50 dark:hover:bg-ink-800/50">
          <Bell className="h-4 w-4 text-violet-500" />
          <div className="flex-1 min-w-0"><p className="text-sm font-medium">{n.title}</p><p className="text-[10px] text-ink-400">{n.time}</p></div>
        </div>
      ))}
    </div>
  );
}`, prompt: "Stacked notification panel with icon and time stamps.", previewKind: "card-notification", featured: 8, createdAt: ago(2), likes: 2000, views: 27000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// AUTH FORMS
// ═══════════════════════════════════════════════════════════════
export const SIGNIN_VARIANTS: VariantSpec[] = [
  { id: "signin-modern-01", title: "Modern sign-in", description: "Sign-in with email/password.", categorySlug: "sign-ins", tags: ["signin","auth"],
    code: `export function SignInForm() {
  return (
    <form className="mx-auto w-full max-w-sm space-y-4" onSubmit={e => e.preventDefault()}>
      <h2 className="text-2xl font-bold text-center">Welcome back</h2>
      <div><label className="block text-sm font-medium mb-1.5">Email</label><input type="email" className="h-10 w-full rounded-lg border border-ink-200 px-3 text-sm focus:border-violet-500 focus:outline-none dark:border-ink-800 dark:bg-ink-900" placeholder="you@example.com" /></div>
      <div><label className="block text-sm font-medium mb-1.5">Password</label><input type="password" className="h-10 w-full rounded-lg border border-ink-200 px-3 text-sm focus:border-violet-500 focus:outline-none dark:border-ink-800 dark:bg-ink-900" placeholder="••••••••" /></div>
      <button className="w-full rounded-lg bg-ink-900 py-2.5 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Sign in</button>
    </form>
  );
}`, prompt: "Clean sign-in form with email and password.", previewKind: "sign-in-form", featured: 9, createdAt: ago(1), likes: 3200, views: 43000, authorIdx: 0 }
];

export const SIGNUP_VARIANTS: VariantSpec[] = [
  { id: "signup-full-01", title: "Full sign-up", description: "Registration with all fields.", categorySlug: "sign-ups", tags: ["signup","register"],
    code: `export function SignUpForm() {
  return (
    <form className="mx-auto w-full max-w-sm space-y-4" onSubmit={e => e.preventDefault()}>
      <h2 className="text-2xl font-bold text-center">Create account</h2>
      <div><label className="block text-sm font-medium mb-1.5">First name</label><input className="h-10 w-full rounded-lg border border-ink-200 px-3 text-sm focus:border-violet-500 focus:outline-none dark:border-ink-800 dark:bg-ink-900" /></div>
      <div><label className="block text-sm font-medium mb-1.5">Email</label><input type="email" className="h-10 w-full rounded-lg border border-ink-200 px-3 text-sm focus:border-violet-500 focus:outline-none dark:border-ink-800 dark:bg-ink-900" /></div>
      <button className="w-full rounded-lg bg-ink-900 py-2.5 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900">Create account</button>
    </form>
  );
}`, prompt: "Full sign-up form with name and email.", previewKind: "sign-up-form", featured: 9, createdAt: ago(1), likes: 2800, views: 38000, authorIdx: 0 }
];

// ═══════════════════════════════════════════════════════════════
// PAGINATION & SLIDERS
// ═══════════════════════════════════════════════════════════════
export const PAGINATION_VARIANTS: VariantSpec[] = [
  { id: "pagination-numbers-01", title: "Number pagination", description: "Classic page nav.", categorySlug: "paginations", tags: ["pagination","nav"],
    code: `import { useState } from 'react';
export function Pagination() {
  const [page, setPage] = useState(1);
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map(p => (
        <button key={p} onClick={() => setPage(p)} className={\`h-8 w-8 rounded text-sm \${p === page ? 'bg-ink-900 text-white' : 'border border-ink-200'}\`}>{p}</button>
      ))}
    </div>
  );
}`, prompt: "Number-based pagination.", previewKind: "pagination", featured: 7, createdAt: ago(4), likes: 1600, views: 21000, authorIdx: 0 }
];

export const SLIDER_VARIANTS: VariantSpec[] = [
  { id: "slider-range-01", title: "Range slider", description: "Styled range slider.", categorySlug: "sliders", tags: ["slider","range"],
    code: `import { useState } from 'react';
export function RangeSlider() {
  const [val, setVal] = useState(50);
  return (
    <div className="w-full"><input type="range" value={val} onChange={e => setVal(+e.target.value)} className="w-full h-2 rounded-full appearance-none bg-ink-200 accent-violet-600" /></div>
  );
}`, prompt: "Simple range slider.", previewKind: "slider-range", featured: 7, createdAt: ago(5), likes: 1400, views: 19000, authorIdx: 0 }
];
