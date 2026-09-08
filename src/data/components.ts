/**
 * Sample components surfaced in the marketplace grid.
 *
 * In a real backend each row would live in a `components` table:
 *
 *   id | title | description | category | tags | code | prompt | preview
 *   author_id | created_at | likes | views
 *
 * Here we ship enough variety to exercise the grid, search, tabs, and the
 * Featured / Newest / Popular sorts. Every component points to a category by
 * slug, so adding more is a one-line append.
 */

import { ALL_CATEGORIES } from "./categories";
import { REGISTRY_COMPONENTS, REGISTRY_BY_ID } from "./registry/index";

export interface Author {
  id: string;
  name: string;
  handle: string;
  /** Initial(s) shown in the avatar */
  avatarText: string;
  /** Tailwind background class for the avatar */
  avatarColor: string;
}

export interface ComponentItem {
  id: string;
  title: string;
  description: string;
  /** matches `Category.slug` */
  categorySlug: string;
  tags: string[];
  /** Source code shown in the Code tab and copied via "Copy code" */
  code: string;
  /** Pre-compiled JavaScript injected at build time by vite-plugin-precompile */
  compiledCode?: string;
  /** Natural-language prompt copied via "Copy prompt" */
  prompt: string;
  author: Author;
  /** Higher = more featured */
  featured: number;
  /** ms since epoch — drives the "Newest" sort */
  createdAt: number;
  /** drives the "Popular" sort */
  likes: number;
  views: number;
  /** Optional preview renderer key — see ComponentCard */
  previewKind: PreviewKind;
}

export type PreviewKind =
  | "button-primary"
  | "button-gradient"
  | "button-ghost"
  | "button-outline"
  | "button-destructive"
  | "button-icon"
  | "button-loading"
  | "button-sizes"
  | "card-pricing"
  | "card-stat"
  | "card-product"
  | "card-user-profile"
  | "card-notification"
  | "input-search"
  | "input-floating"
  | "input-password"
  | "input-otp"
  | "badge-row"
  | "avatar-stack"
  | "alert-success"
  | "alert-error"
  | "alert-warning"
  | "alert-info"
  | "tabs-pill"
  | "toggle-switch"
  | "spinner"
  | "progress-bar"
  | "hero-gradient"
  | "hero-minimal"
  | "testimonial"
  | "feature-grid"
  | "dropdown-menu"
  | "code-block"
  | "tooltip"
  | "accordion"
  | "checkbox-list"
  | "select-custom"
  | "dialog-confirm"
  | "nav-bar"
  | "slider-range"
  | "notification-toast"
  | "radio-group"
  | "sidebar-nav"
  | "sign-in-form"
  | "sign-up-form"
  | "file-upload"
  | "pagination"
  | "table-simple"
  | "footer-simple"
  | "calendar-mini";

const AUTHORS: Author[] = [
  { id: "u1", name: "Aria Chen",      handle: "ariac",   avatarText: "AC", avatarColor: "bg-rose-500" },
  { id: "u2", name: "Mateo Rivera",   handle: "mateor",  avatarText: "MR", avatarColor: "bg-amber-500" },
  { id: "u3", name: "Priya Iyer",     handle: "priya",   avatarText: "PI", avatarColor: "bg-emerald-500" },
  { id: "u4", name: "Jonas Berg",     handle: "jberg",   avatarText: "JB", avatarColor: "bg-sky-500" },
  { id: "u5", name: "Lina Okafor",    handle: "lina",    avatarText: "LO", avatarColor: "bg-violet-500" },
  { id: "u6", name: "Devon Park",     handle: "devp",    avatarText: "DP", avatarColor: "bg-fuchsia-500" },
  { id: "u7", name: "Saanvi Rao",     handle: "saanvi",  avatarText: "SR", avatarColor: "bg-cyan-500" },
  { id: "u8", name: "Theo Müller",    handle: "theom",   avatarText: "TM", avatarColor: "bg-orange-500" },
];

const a = (i: number) => AUTHORS[i % AUTHORS.length];

const day = 24 * 60 * 60 * 1000;
const NOW = Date.UTC(2026, 3, 18); // align with the env date

function daysAgo(n: number): number {
  return NOW - n * day;
}

/** Shorthand to keep the seed list readable */
function c(
  partial: Omit<ComponentItem, "author"> & { authorIdx: number },
): ComponentItem {
  const { authorIdx, ...rest } = partial;
  return { ...rest, author: a(authorIdx) };
}

const CODE = {
  buttonPrimary: `export function Button({ children, ...props }) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-ink-900/30 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
      {...props}
    >
      {children}
    </button>
  );
}`,
  buttonGradient: `export function GradientButton({ children, ...props }) {
  return (
    <button
      className="relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:brightness-110 active:scale-[0.98]"
      {...props}
    >
      {children}
    </button>
  );
}`,
  cardPricing: `export function PricingCard({ name, price, features }) {
  return (
    <div className="flex flex-col rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-500">{name}</h3>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight">{price}</span>
        <span className="text-ink-500">/mo</span>
      </div>
      <ul className="mt-6 space-y-2 text-sm">
        {features.map(f => <li key={f}><Icon icon={Check} size={16} /> {f}</li>)}
      </ul>
      <button className="mt-6 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white">
        Get started
      </button>
    </div>
  );
}`,
  inputSearch: `export function SearchInput({ value, onChange }) {
  return (
    <div className="relative">
      <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-ink-400" />
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search…"
        className="h-9 w-full rounded-lg border border-ink-200 bg-white pl-9 pr-3 text-sm placeholder:text-ink-400 focus:border-ink-400 focus:outline-none dark:border-ink-800 dark:bg-ink-900"
      />
    </div>
  );
}`,
  alertSuccess: `export function SuccessAlert({ title, body }) {
  return (
    <div className="flex gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/40">
      <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-600" />
      <div>
        <p className="font-medium text-emerald-900 dark:text-emerald-200">{title}</p>
        <p className="text-sm text-emerald-700 dark:text-emerald-300/80">{body}</p>
      </div>
    </div>
  );
}`,
};

export const COMPONENTS: ComponentItem[] = [
  c({
    id: "btn-primary-01",
    title: "Primary button — minimal",
    description: "Crisp neutral button with subtle press + focus ring.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "shadcn"],
    code: CODE.buttonPrimary,
    prompt:
      "A minimal primary button with rounded corners, subtle shadow, hover and focus ring, supporting dark mode.",
    featured: 9,
    createdAt: daysAgo(1),
    likes: 1280,
    views: 18420,
    previewKind: "button-primary",
    authorIdx: 0,
  }),
  c({
    id: "btn-gradient-02",
    title: "Gradient CTA button",
    description: "Bold rose-to-amber gradient call-to-action with active scale.",
    categorySlug: "buttons",
    tags: ["button", "gradient", "cta"],
    code: CODE.buttonGradient,
    prompt:
      "A vibrant gradient call-to-action button (fuchsia <Icon icon={ArrowRight} size={16} /> rose <Icon icon={ArrowRight} size={16} /> amber) with hover brighten and 0.98 active scale.",
    featured: 8,
    createdAt: daysAgo(3),
    likes: 980,
    views: 12130,
    previewKind: "button-gradient",
    authorIdx: 1,
  }),
  c({
    id: "btn-ghost-03",
    title: "Ghost button with icon",
    description: "Quiet ghost variant for secondary actions in dense UIs.",
    categorySlug: "buttons",
    tags: ["button", "ghost", "icon"],
    code: `export function GhostButton({ children }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800">
      {children}
    </button>
  );
}`,
    prompt: "A quiet ghost button used for secondary actions, with an icon slot.",
    featured: 5,
    createdAt: daysAgo(8),
    likes: 410,
    views: 5300,
    previewKind: "button-ghost",
    authorIdx: 2,
  }),

  c({
    id: "card-pricing-01",
    title: "Pricing tier — Pro",
    description: "Three-tier pricing card with feature list and CTA.",
    categorySlug: "pricing-sections",
    tags: ["pricing", "card", "saas"],
    code: CODE.cardPricing,
    prompt:
      "A pricing card with tier name, large price, monthly suffix, checkmark feature list and a primary CTA button.",
    featured: 10,
    createdAt: daysAgo(2),
    likes: 2210,
    views: 31010,
    previewKind: "card-pricing",
    authorIdx: 3,
  }),
  c({
    id: "card-stat-02",
    title: "Stat card with delta",
    description: "Compact KPI card with trend arrow and percent change.",
    categorySlug: "cards",
    tags: ["dashboard", "kpi", "analytics"],
    code: `export function StatCard({ label, value, delta }) {
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
    prompt: "A KPI card with label, large numeric value, and a colored delta percentage.",
    featured: 6,
    createdAt: daysAgo(5),
    likes: 880,
    views: 11200,
    previewKind: "card-stat",
    authorIdx: 4,
  }),
  c({
    id: "card-product-03",
    title: "Product card",
    description: "E-commerce product tile with image, title, price and add to cart.",
    categorySlug: "cards",
    tags: ["ecommerce", "product"],
    code: `export function ProductCard(p) { /* ... */ }`,
    prompt: "An e-commerce product card with image, title, price and an Add to cart button.",
    featured: 7,
    createdAt: daysAgo(12),
    likes: 640,
    views: 9020,
    previewKind: "card-product",
    authorIdx: 5,
  }),

  c({
    id: "input-search-01",
    title: "Search input with icon",
    description: "Polished search input with leading icon and focus state.",
    categorySlug: "inputs",
    tags: ["input", "search", "form"],
    code: CODE.inputSearch,
    prompt: "A search input with leading magnifier icon, placeholder, and focus border.",
    featured: 8,
    createdAt: daysAgo(4),
    likes: 1430,
    views: 17400,
    previewKind: "input-search",
    authorIdx: 6,
  }),
  c({
    id: "input-floating-02",
    title: "Floating label input",
    description: "Material-style floating label that animates on focus.",
    categorySlug: "inputs",
    tags: ["input", "floating-label", "form"],
    code: `export function FloatingInput() { /* ... */ }`,
    prompt: "An input field with a floating label that animates above the field on focus or value.",
    featured: 4,
    createdAt: daysAgo(20),
    likes: 290,
    views: 3500,
    previewKind: "input-floating",
    authorIdx: 7,
  }),

  c({
    id: "badge-row-01",
    title: "Status badge set",
    description: "Five colored status badges — success, warning, error, info, neutral.",
    categorySlug: "badges",
    tags: ["badge", "status"],
    code: `export const Badge = ({ tone, children }) => (
  <span className={\`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium \${tones[tone]}\`}>
    {children}
  </span>
);`,
    prompt:
      "A row of pill-shaped status badges in five tones: success, warning, error, info, and neutral.",
    featured: 5,
    createdAt: daysAgo(6),
    likes: 720,
    views: 8050,
    previewKind: "badge-row",
    authorIdx: 0,
  }),

  c({
    id: "avatar-stack-01",
    title: "Avatar stack — overlapping",
    description: "Overlapping avatar group with a +N overflow chip.",
    categorySlug: "avatars",
    tags: ["avatar", "group"],
    code: `export function AvatarStack({ users, max = 4 }) { /* ... */ }`,
    prompt: "An overlapping avatar stack with a +N overflow chip when there are more users than max.",
    featured: 6,
    createdAt: daysAgo(7),
    likes: 510,
    views: 6700,
    previewKind: "avatar-stack",
    authorIdx: 1,
  }),

  c({
    id: "alert-success-01",
    title: "Success alert",
    description: "Soft emerald success banner with icon and body copy.",
    categorySlug: "alerts",
    tags: ["alert", "success"],
    code: CODE.alertSuccess,
    prompt: "A soft emerald success alert with a check icon, bold title and body copy.",
    featured: 5,
    createdAt: daysAgo(9),
    likes: 360,
    views: 4880,
    previewKind: "alert-success",
    authorIdx: 2,
  }),
  c({
    id: "alert-error-02",
    title: "Destructive error alert",
    description: "High-contrast error alert for form validation failures.",
    categorySlug: "alerts",
    tags: ["alert", "error", "destructive"],
    code: `export function ErrorAlert({ title, body }) { /* ... */ }`,
    prompt: "A high-contrast destructive error alert with X icon, title, and body copy.",
    featured: 4,
    createdAt: daysAgo(15),
    likes: 240,
    views: 3120,
    previewKind: "alert-error",
    authorIdx: 3,
  }),

  c({
    id: "tabs-pill-01",
    title: "Pill tabs",
    description: "Animated underline-free pill tabs with active background.",
    categorySlug: "tabs",
    tags: ["tabs", "pill", "navigation"],
    code: `export function PillTabs({ tabs, active, onChange }) { /* ... */ }`,
    prompt: "A row of pill-shaped tabs with a soft active background and smooth color transitions.",
    featured: 7,
    createdAt: daysAgo(2),
    likes: 990,
    views: 12200,
    previewKind: "tabs-pill",
    authorIdx: 4,
  }),

  c({
    id: "toggle-switch-01",
    title: "iOS-style toggle switch",
    description: "Smooth spring-animated toggle with focus ring.",
    categorySlug: "toggles",
    tags: ["toggle", "switch"],
    code: `export function Toggle({ checked, onChange }) { /* ... */ }`,
    prompt: "An iOS-style toggle switch with smooth spring animation and accessible focus ring.",
    featured: 6,
    createdAt: daysAgo(11),
    likes: 470,
    views: 5980,
    previewKind: "toggle-switch",
    authorIdx: 5,
  }),

  c({
    id: "spinner-01",
    title: "Conic gradient spinner",
    description: "Lightweight CSS-only spinner using conic-gradient.",
    categorySlug: "spinner-loaders",
    tags: ["spinner", "loader", "css"],
    code: `export const Spinner = () => (
  <span className="block h-6 w-6 animate-spin rounded-full border-2 border-ink-200 border-t-ink-900 dark:border-ink-800 dark:border-t-white" />
);`,
    prompt: "A lightweight CSS-only spinner with a conic gradient and smooth rotation.",
    featured: 5,
    createdAt: daysAgo(14),
    likes: 320,
    views: 4400,
    previewKind: "spinner",
    authorIdx: 6,
  }),

  c({
    id: "progress-bar-01",
    title: "Animated progress bar",
    description: "Indeterminate shimmer progress bar with rounded ends.",
    categorySlug: "spinner-loaders",
    tags: ["progress", "loader"],
    code: `export const Progress = ({ value }) => ( /* ... */ );`,
    prompt: "An animated rounded progress bar with both determinate and indeterminate modes.",
    featured: 4,
    createdAt: daysAgo(18),
    likes: 210,
    views: 2900,
    previewKind: "progress-bar",
    authorIdx: 7,
  }),

  c({
    id: "hero-gradient-01",
    title: "Gradient hero",
    description: "Centered hero with gradient headline and dual CTAs.",
    categorySlug: "heroes",
    tags: ["hero", "landing", "gradient"],
    code: `export function GradientHero() { /* ... */ }`,
    prompt:
      "A centered landing hero with gradient headline, descriptive paragraph, and primary + secondary CTAs.",
    featured: 9,
    createdAt: daysAgo(1),
    likes: 1810,
    views: 22300,
    previewKind: "hero-gradient",
    authorIdx: 0,
  }),

  c({
    id: "testimonial-01",
    title: "Testimonial card",
    description: "Quote card with avatar, name, role and 5-star rating.",
    categorySlug: "testimonials",
    tags: ["testimonial", "social-proof"],
    code: `export function Testimonial(p) { /* ... */ }`,
    prompt: "A testimonial card with a quote, avatar, name, role and a 5-star rating row.",
    featured: 6,
    createdAt: daysAgo(10),
    likes: 540,
    views: 6900,
    previewKind: "testimonial",
    authorIdx: 1,
  }),

  c({
    id: "feature-grid-01",
    title: "Feature grid — 3 column",
    description: "Three-column features section with icons and copy.",
    categorySlug: "features",
    tags: ["features", "marketing", "grid"],
    code: `export function FeatureGrid() { /* ... */ }`,
    prompt: "A three-column features grid, each cell with an icon, title and short description.",
    featured: 7,
    createdAt: daysAgo(13),
    likes: 660,
    views: 8400,
    previewKind: "feature-grid",
    authorIdx: 2,
  }),

  c({
    id: "dropdown-menu-01",
    title: "Dropdown menu",
    description: "Accessible dropdown with separators and keyboard nav.",
    categorySlug: "dropdowns",
    tags: ["dropdown", "menu", "a11y"],
    code: `export function Dropdown() { /* ... */ }`,
    prompt: "An accessible dropdown menu with item icons, separators and keyboard navigation.",
    featured: 5,
    createdAt: daysAgo(16),
    likes: 380,
    views: 4750,
    previewKind: "dropdown-menu",
    authorIdx: 3,
  }),

  c({
    id: "code-block-01",
    title: "Code block with copy",
    description: "Syntax-styled block with a copy button and language tab.",
    categorySlug: "docs",
    tags: ["code", "docs", "copy"],
    code: `export function CodeBlock({ code, lang }) { /* ... */ }`,
    prompt: "A code block with language indicator and a copy-to-clipboard button in the corner.",
    featured: 6,
    createdAt: daysAgo(4),
    likes: 720,
    views: 9100,
    previewKind: "code-block",
    authorIdx: 4,
  }),

  c({
    id: "tooltip-01",
    title: "Tooltip — dark",
    description: "Dark contextual tooltip with arrow and fade-in.",
    categorySlug: "tooltips",
    tags: ["tooltip", "popover"],
    code: `export function Tooltip(p) { /* ... */ }`,
    prompt: "A dark contextual tooltip with an arrow and a 150ms fade-in.",
    featured: 5,
    createdAt: daysAgo(17),
    likes: 290,
    views: 3700,
    previewKind: "tooltip",
    authorIdx: 5,
  }),

  c({
    id: "accordion-01",
    title: "FAQ accordion",
    description: "Single-open accordion with chevron rotation.",
    categorySlug: "accordions",
    tags: ["accordion", "faq"],
    code: `export function Accordion({ items }) { /* ... */ }`,
    prompt: "A single-open FAQ accordion with rotating chevron and smooth height transition.",
    featured: 6,
    createdAt: daysAgo(6),
    likes: 410,
    views: 5300,
    previewKind: "accordion",
    authorIdx: 6,
  }),

  c({
    id: "checkbox-list-01",
    title: "Checkbox group",
    description: "Themed checkbox group with intermediate state.",
    categorySlug: "checkboxes",
    tags: ["checkbox", "form"],
    code: `export function CheckboxGroup() { /* ... */ }`,
    prompt: "A vertical checkbox group with an indeterminate parent and labeled items.",
    featured: 4,
    createdAt: daysAgo(19),
    likes: 200,
    views: 2600,
    previewKind: "checkbox-list",
    authorIdx: 7,
  }),

  /* ================================================================ */
  /*  VARIANT EXPANSION — per SKILL.md mandatory variant rule         */
  /* ================================================================ */

  // --- Button variants ---

  c({
    id: "btn-outline-04",
    title: "Outline button",
    description: "Bordered outline button for secondary actions.",
    categorySlug: "buttons",
    tags: ["button", "outline", "secondary"],
    code: `export function OutlineButton({ children, ...props }) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-lg border border-ink-300 px-4 py-2 text-sm font-medium text-ink-700 transition hover:bg-ink-50 focus:outline-none focus:ring-2 focus:ring-ink-900/20 dark:border-ink-700 dark:text-ink-200 dark:hover:bg-ink-900"
      {...props}
    >
      {children}
    </button>
  );
}`,
    prompt: "An outline button with border, hover background, and focus ring for secondary actions.",
    featured: 6,
    createdAt: daysAgo(3),
    likes: 720,
    views: 8800,
    previewKind: "button-outline",
    authorIdx: 3,
  }),

  c({
    id: "btn-destructive-05",
    title: "Destructive button",
    description: "Red danger button for delete/remove actions.",
    categorySlug: "buttons",
    tags: ["button", "destructive", "danger", "delete"],
    code: `export function DestructiveButton({ children, ...props }) {
  return (
    <button
      className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-600/30 dark:bg-rose-600 dark:hover:bg-rose-500"
      {...props}
    >
      {children}
    </button>
  );
}`,
    prompt: "A destructive/danger button in rose/red for delete and irreversible actions with hover and focus ring.",
    featured: 5,
    createdAt: daysAgo(5),
    likes: 580,
    views: 7200,
    previewKind: "button-destructive",
    authorIdx: 4,
  }),

  c({
    id: "btn-icon-06",
    title: "Icon button — circle",
    description: "Compact icon-only circular button with tooltip.",
    categorySlug: "buttons",
    tags: ["button", "icon", "circle"],
    code: `export function IconButton({ icon, label, ...props }) {
  return (
    <button
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-600 transition hover:bg-ink-100 focus:outline-none focus:ring-2 focus:ring-ink-900/20 dark:text-ink-300 dark:hover:bg-ink-800"
      {...props}
    >
      {icon}
    </button>
  );
}`,
    prompt: "A compact circular icon button with hover background and accessible label for icon-only usage.",
    featured: 5,
    createdAt: daysAgo(7),
    likes: 430,
    views: 5600,
    previewKind: "button-icon",
    authorIdx: 5,
  }),

  c({
    id: "btn-loading-07",
    title: "Loading button",
    description: "Button with spinner during async operations.",
    categorySlug: "buttons",
    tags: ["button", "loading", "spinner", "async"],
    code: `export function LoadingButton({ loading, children, ...props }) {
  return (
    <button
      disabled={loading}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white transition disabled:opacity-60 dark:bg-white dark:text-ink-900"
      {...props}
    >
      {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-ink-900/30 dark:border-t-ink-900" />}
      {children}
    </button>
  );
}`,
    prompt: "A button that shows an inline spinner when in loading state, with disabled opacity.",
    featured: 7,
    createdAt: daysAgo(2),
    likes: 890,
    views: 10300,
    previewKind: "button-loading",
    authorIdx: 6,
  }),

  c({
    id: "btn-sizes-08",
    title: "Button size variants",
    description: "All button sizes: xs, sm, md, lg, xl side-by-side.",
    categorySlug: "buttons",
    tags: ["button", "sizes", "variants"],
    code: `const sizes = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-base",
  xl: "px-6 py-3 text-lg",
};

export function Button({ size = "md", children }) {
  return (
    <button className={\`rounded-lg bg-ink-900 font-medium text-white \${sizes[size]}\`}>
      {children}
    </button>
  );
}`,
    prompt: "A row of buttons in 5 size variants: xs, sm, md, lg, xl — showing the size scale.",
    featured: 6,
    createdAt: daysAgo(4),
    likes: 650,
    views: 7800,
    previewKind: "button-sizes",
    authorIdx: 7,
  }),

  // --- Card variants ---

  c({
    id: "card-user-profile-04",
    title: "User profile card",
    description: "Compact profile card with avatar, bio and follow button.",
    categorySlug: "cards",
    tags: ["card", "profile", "user", "social"],
    code: `export function ProfileCard({ name, bio, avatar }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-ink-200 bg-white p-6 text-center dark:border-ink-800 dark:bg-ink-900">
      <img src={avatar} className="h-16 w-16 rounded-full" alt={name} />
      <h3 className="mt-3 text-sm font-semibold">{name}</h3>
      <p className="mt-1 text-xs text-ink-500">{bio}</p>
      <button className="mt-4 rounded-lg bg-ink-900 px-4 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-ink-900">Follow</button>
    </div>
  );
}`,
    prompt: "A user profile card centered layout with avatar, name, bio and a follow button.",
    featured: 6,
    createdAt: daysAgo(6),
    likes: 530,
    views: 6700,
    previewKind: "card-user-profile",
    authorIdx: 0,
  }),

  c({
    id: "card-notification-05",
    title: "Notification card",
    description: "Action notification with icon, message and timestamp.",
    categorySlug: "cards",
    tags: ["card", "notification", "alert"],
    code: `export function NotificationCard({ icon, title, message, time }) {
  return (
    <div className="flex gap-3 rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900">
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-ink-500">{message}</p>
        <p className="mt-1 text-[10px] text-ink-400">{time}</p>
      </div>
    </div>
  );
}`,
    prompt: "A notification card with colored icon circle, title, message body, and timestamp.",
    featured: 5,
    createdAt: daysAgo(8),
    likes: 370,
    views: 4500,
    previewKind: "card-notification",
    authorIdx: 1,
  }),

  // --- Input variants ---

  c({
    id: "input-password-03",
    title: "Password input with toggle",
    description: "Password field with show/hide visibility toggle.",
    categorySlug: "inputs",
    tags: ["input", "password", "form", "security"],
    code: `export function PasswordInput() {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input type={show ? "text" : "password"} placeholder="Enter password" className="h-10 w-full rounded-lg border border-ink-200 bg-white px-3 pr-10 text-sm dark:border-ink-800 dark:bg-ink-900" />
      <button onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-400">{show ? "Hide" : "Show"}</button>
    </div>
  );
}`,
    prompt: "A password input with a show/hide toggle button on the right side.",
    featured: 7,
    createdAt: daysAgo(3),
    likes: 1120,
    views: 13400,
    previewKind: "input-password",
    authorIdx: 2,
  }),

  c({
    id: "input-otp-04",
    title: "OTP code input",
    description: "4-digit one-time password input with auto-focus.",
    categorySlug: "inputs",
    tags: ["input", "otp", "verification", "form"],
    code: `export function OTPInput() {
  return (
    <div className="flex gap-2">
      {[0,1,2,3].map(i => (
        <input key={i} maxLength={1} className="h-12 w-12 rounded-lg border border-ink-200 bg-white text-center text-lg font-bold dark:border-ink-800 dark:bg-ink-900" />
      ))}
    </div>
  );
}`,
    prompt: "A 4-digit OTP verification input with individual boxes and auto-advance.",
    featured: 6,
    createdAt: daysAgo(5),
    likes: 780,
    views: 9200,
    previewKind: "input-otp",
    authorIdx: 3,
  }),

  // --- Alert variants ---

  c({
    id: "alert-warning-03",
    title: "Warning alert",
    description: "Amber warning banner for caution messages.",
    categorySlug: "alerts",
    tags: ["alert", "warning", "caution"],
    code: `export function WarningAlert({ title, body }) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/40">
      <span className="mt-0.5 text-amber-600"><Icon icon={AlertTriangle} size={16} /></span>
      <div>
        <p className="font-medium text-amber-900 dark:text-amber-200">{title}</p>
        <p className="text-sm text-amber-700 dark:text-amber-300/80">{body}</p>
      </div>
    </div>
  );
}`,
    prompt: "An amber warning alert with caution icon, bold title and descriptive body copy.",
    featured: 5,
    createdAt: daysAgo(10),
    likes: 310,
    views: 4100,
    previewKind: "alert-warning",
    authorIdx: 4,
  }),

  c({
    id: "alert-info-04",
    title: "Info alert",
    description: "Blue informational banner for tips and notes.",
    categorySlug: "alerts",
    tags: ["alert", "info", "note", "tip"],
    code: `export function InfoAlert({ title, body }) {
  return (
    <div className="flex gap-3 rounded-xl border border-sky-200 bg-sky-50 p-4 dark:border-sky-900 dark:bg-sky-950/40">
      <span className="mt-0.5 text-sky-600"><Icon icon={Info} size={16} /></span>
      <div>
        <p className="font-medium text-sky-900 dark:text-sky-200">{title}</p>
        <p className="text-sm text-sky-700 dark:text-sky-300/80">{body}</p>
      </div>
    </div>
  );
}`,
    prompt: "A sky-blue informational alert with info icon, title and body for tips and notes.",
    featured: 4,
    createdAt: daysAgo(11),
    likes: 260,
    views: 3400,
    previewKind: "alert-info",
    authorIdx: 5,
  }),

  // --- Hero variant ---

  c({
    id: "hero-minimal-02",
    title: "Minimal hero — dark",
    description: "Clean dark hero with large heading and single CTA.",
    categorySlug: "heroes",
    tags: ["hero", "landing", "minimal", "dark"],
    code: `export function MinimalHero() {
  return (
    <section className="bg-ink-950 py-24 text-center text-white">
      <h1 className="text-5xl font-bold tracking-tight">Ship faster.</h1>
      <p className="mx-auto mt-4 max-w-lg text-ink-400">Production-ready components built for speed and modern aesthetics.</p>
      <button className="mt-8 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-ink-100">Get started</button>
    </section>
  );
}`,
    prompt: "A minimal dark hero section with bold heading, subtext, and single white CTA button.",
    featured: 8,
    createdAt: daysAgo(1),
    likes: 1540,
    views: 19200,
    previewKind: "hero-minimal",
    authorIdx: 6,
  }),

  // --- Select ---

  c({
    id: "select-custom-01",
    title: "Custom select dropdown",
    description: "Styled select with chevron and custom options.",
    categorySlug: "selects",
    tags: ["select", "dropdown", "form"],
    code: `export function CustomSelect({ options, value, onChange }) {
  return (
    <div className="relative">
      <select value={value} onChange={onChange} className="h-10 w-full appearance-none rounded-lg border border-ink-200 bg-white px-3 pr-8 text-sm dark:border-ink-800 dark:bg-ink-900">
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-400">▾</span>
    </div>
  );
}`,
    prompt: "A custom styled select with chevron indicator, proper appearance reset, and dark mode.",
    featured: 6,
    createdAt: daysAgo(6),
    likes: 490,
    views: 6100,
    previewKind: "select-custom",
    authorIdx: 7,
  }),

  // --- Dialog ---

  c({
    id: "dialog-confirm-01",
    title: "Confirm dialog",
    description: "Modal confirmation dialog with cancel and confirm CTAs.",
    categorySlug: "dialogs-modals",
    tags: ["dialog", "modal", "confirm"],
    code: `export function ConfirmDialog({ title, message, onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/40 backdrop-blur-sm">
      <div className="w-96 rounded-2xl border border-ink-200 bg-white p-6 shadow-xl dark:border-ink-800 dark:bg-ink-900">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-ink-500">{message}</p>
        <div className="mt-6 flex gap-3 justify-end">
          <button onClick={onCancel} className="rounded-lg border px-4 py-2 text-sm">Cancel</button>
          <button onClick={onConfirm} className="rounded-lg bg-rose-600 px-4 py-2 text-sm text-white">Confirm</button>
        </div>
      </div>
    </div>
  );
}`,
    prompt: "A confirm dialog modal with backdrop blur, title, message, cancel and destructive confirm buttons.",
    featured: 7,
    createdAt: daysAgo(4),
    likes: 820,
    views: 10100,
    previewKind: "dialog-confirm",
    authorIdx: 0,
  }),

  // --- Navigation ---

  c({
    id: "nav-bar-01",
    title: "Responsive nav bar",
    description: "Horizontal navigation with logo, links and mobile hamburger.",
    categorySlug: "navigation-menus",
    tags: ["navigation", "navbar", "responsive"],
    code: `export function NavBar() { /* ... responsive nav with hamburger */ }`,
    prompt: "A responsive navigation bar with logo, horizontal links, and a hamburger menu on mobile.",
    featured: 7,
    createdAt: daysAgo(3),
    likes: 960,
    views: 11800,
    previewKind: "nav-bar",
    authorIdx: 1,
  }),

  // --- Slider ---

  c({
    id: "slider-range-01",
    title: "Range slider",
    description: "Styled range slider with min/max and thumb.",
    categorySlug: "sliders",
    tags: ["slider", "range", "input"],
    code: `export function RangeSlider({ min, max, value, onChange }) {
  return (
    <div className="w-full">
      <input type="range" min={min} max={max} value={value} onChange={onChange}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-ink-200 dark:bg-ink-800" />
      <div className="mt-1 flex justify-between text-xs text-ink-500">
        <span>{min}</span><span>{value}</span><span>{max}</span>
      </div>
    </div>
  );
}`,
    prompt: "A styled range slider with track, thumb, and min/max labels.",
    featured: 5,
    createdAt: daysAgo(9),
    likes: 340,
    views: 4300,
    previewKind: "slider-range",
    authorIdx: 2,
  }),

  // --- Toast / Notification ---

  c({
    id: "toast-notification-01",
    title: "Toast notification",
    description: "Floating toast with icon, message and dismiss.",
    categorySlug: "toasts",
    tags: ["toast", "notification", "snackbar"],
    code: `export function Toast({ message, onDismiss }) {
  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-lg dark:border-ink-800 dark:bg-ink-900">
      <span className="text-emerald-600"><Icon icon={Check} size={16} /></span>
      <p className="text-sm">{message}</p>
      <button onClick={onDismiss} className="text-ink-400 hover:text-ink-600"><Icon icon={X} size={16} /></button>
    </div>
  );
}`,
    prompt: "A floating toast notification with check icon, message and dismiss button.",
    featured: 5,
    createdAt: daysAgo(12),
    likes: 280,
    views: 3600,
    previewKind: "notification-toast",
    authorIdx: 3,
  }),

  // --- Radio group ---

  c({
    id: "radio-group-01",
    title: "Radio group — card style",
    description: "Selectable card-style radio with highlighted active state.",
    categorySlug: "radio-groups",
    tags: ["radio", "form", "card"],
    code: `export function RadioGroup({ options, value, onChange }) {
  return (
    <div className="space-y-2">
      {options.map(o => (
        <label key={o.value} className={\`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition \${value === o.value ? 'border-ink-900 bg-ink-50 dark:border-white dark:bg-ink-900' : 'border-ink-200 dark:border-ink-800'}\`}>
          <span className={\`grid h-4 w-4 place-items-center rounded-full border-2 \${value === o.value ? 'border-ink-900 dark:border-white' : 'border-ink-300 dark:border-ink-600'}\`}>
            {value === o.value && <span className="h-2 w-2 rounded-full bg-ink-900 dark:bg-white" />}
          </span>
          <span className="text-sm">{o.label}</span>
        </label>
      ))}
    </div>
  );
}`,
    prompt: "A card-style radio group where each option is in a bordered card with highlighted active state.",
    featured: 5,
    createdAt: daysAgo(7),
    likes: 420,
    views: 5400,
    previewKind: "radio-group",
    authorIdx: 4,
  }),

  // --- Sidebar nav ---

  c({
    id: "sidebar-nav-01",
    title: "Dashboard sidebar",
    description: "Vertical icon + label sidebar for dashboard navigation.",
    categorySlug: "sidebars",
    tags: ["sidebar", "navigation", "dashboard"],
    code: `export function DashSidebar({ items, active }) { /* ... */ }`,
    prompt: "A vertical dashboard sidebar with icon + label rows, active highlight, and grouped sections.",
    featured: 6,
    createdAt: daysAgo(5),
    likes: 560,
    views: 7100,
    previewKind: "sidebar-nav",
    authorIdx: 5,
  }),

  // --- Sign In ---

  c({
    id: "sign-in-01",
    title: "Sign-in form — minimal",
    description: "Clean email + password sign-in with social logins.",
    categorySlug: "sign-ins",
    tags: ["auth", "sign-in", "login", "form"],
    code: `export function SignInForm() {
  return (
    <div className="mx-auto w-80 rounded-2xl border border-ink-200 bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <h2 className="text-lg font-semibold">Sign in</h2>
      <p className="mt-1 text-xs text-ink-500">Enter your email to continue</p>
      <input placeholder="Email" className="mt-4 h-10 w-full rounded-lg border px-3 text-sm" />
      <input placeholder="Password" type="password" className="mt-2 h-10 w-full rounded-lg border px-3 text-sm" />
      <button className="mt-4 w-full rounded-lg bg-ink-900 py-2 text-sm font-medium text-white dark:bg-white dark:text-ink-900">Continue</button>
      <div className="mt-4 flex items-center gap-2"><span className="flex-1 border-t" /><span className="text-xs text-ink-400">or</span><span className="flex-1 border-t" /></div>
      <button className="mt-3 w-full rounded-lg border py-2 text-sm">Continue with Google</button>
    </div>
  );
}`,
    prompt: "A minimal sign-in form with email, password, primary CTA and a Google social login option.",
    featured: 7,
    createdAt: daysAgo(2),
    likes: 1050,
    views: 12800,
    previewKind: "sign-in-form",
    authorIdx: 6,
  }),

  // --- Sign Up ---

  c({
    id: "sign-up-01",
    title: "Sign-up form — with name",
    description: "Registration form with name, email, password fields.",
    categorySlug: "sign-ups",
    tags: ["auth", "sign-up", "register", "form"],
    code: `export function SignUpForm() {
  return (
    <div className="mx-auto w-80 rounded-2xl border bg-white p-6 dark:border-ink-800 dark:bg-ink-900">
      <h2 className="text-lg font-semibold">Create account</h2>
      <input placeholder="Full name" className="mt-4 h-10 w-full rounded-lg border px-3 text-sm" />
      <input placeholder="Email" className="mt-2 h-10 w-full rounded-lg border px-3 text-sm" />
      <input placeholder="Password" type="password" className="mt-2 h-10 w-full rounded-lg border px-3 text-sm" />
      <button className="mt-4 w-full rounded-lg bg-ink-900 py-2 text-sm font-medium text-white">Create account</button>
    </div>
  );
}`,
    prompt: "A sign-up form with full name, email, password fields and a primary create account CTA.",
    featured: 5,
    createdAt: daysAgo(6),
    likes: 480,
    views: 5900,
    previewKind: "sign-up-form",
    authorIdx: 7,
  }),

  // --- File Upload ---

  c({
    id: "file-upload-01",
    title: "Drag & drop file upload",
    description: "Dropzone with icon, text and browse button.",
    categorySlug: "file-uploads",
    tags: ["upload", "file", "drag-drop", "form"],
    code: `export function FileUpload() {
  return (
    <div className="flex flex-col items-center rounded-xl border-2 border-dashed border-ink-300 bg-ink-50 px-6 py-10 text-center dark:border-ink-700 dark:bg-ink-900">
      <span className="text-3xl text-ink-400"><Icon icon={Folder} size={16} /></span>
      <p className="mt-3 text-sm font-medium">Drop files here</p>
      <p className="mt-1 text-xs text-ink-500">or click to browse</p>
      <button className="mt-4 rounded-lg border px-4 py-1.5 text-xs font-medium">Browse files</button>
    </div>
  );
}`,
    prompt: "A drag and drop file upload zone with dashed border, file icon, and browse button.",
    featured: 5,
    createdAt: daysAgo(8),
    likes: 390,
    views: 5000,
    previewKind: "file-upload",
    authorIdx: 0,
  }),

  // --- Pagination ---

  c({
    id: "pagination-01",
    title: "Numbered pagination",
    description: "Classic pagination with prev/next and page numbers.",
    categorySlug: "paginations",
    tags: ["pagination", "navigation"],
    code: `export function Pagination({ page, total, onChange }) {
  return (
    <nav className="flex items-center gap-1">
      <button className="rounded-md border px-3 py-1.5 text-sm"><Icon icon={ArrowLeft} size={16} /></button>
      {Array.from({length: total}, (_, i) => (
        <button key={i} className={\`rounded-md px-3 py-1.5 text-sm \${i+1===page?'bg-ink-900 text-white dark:bg-white dark:text-ink-900':'border'}\`}>{i+1}</button>
      ))}
      <button className="rounded-md border px-3 py-1.5 text-sm"><Icon icon={ArrowRight} size={16} /></button>
    </nav>
  );
}`,
    prompt: "A numbered pagination bar with previous/next arrows and active page highlight.",
    featured: 5,
    createdAt: daysAgo(10),
    likes: 310,
    views: 4000,
    previewKind: "pagination",
    authorIdx: 1,
  }),

  // --- Table ---

  c({
    id: "table-simple-01",
    title: "Data table — striped",
    description: "Clean striped data table with header and rows.",
    categorySlug: "tables",
    tags: ["table", "data", "striped"],
    code: `export function DataTable({ columns, rows }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-200 dark:border-ink-800">
      <table className="w-full text-left text-sm">
        <thead><tr className="bg-ink-50 dark:bg-ink-900">{columns.map(c => <th key={c} className="px-4 py-2.5 font-medium">{c}</th>)}</tr></thead>
        <tbody>{rows.map((row,i) => <tr key={i} className="border-t border-ink-100 dark:border-ink-800 even:bg-ink-50/50 dark:even:bg-ink-900/30">{row.map((cell,j) => <td key={j} className="px-4 py-2.5">{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}`,
    prompt: "A clean striped data table with header row and alternating row backgrounds.",
    featured: 6,
    createdAt: daysAgo(7),
    likes: 580,
    views: 7300,
    previewKind: "table-simple",
    authorIdx: 2,
  }),

  // --- Footer ---

  c({
    id: "footer-simple-01",
    title: "Simple footer",
    description: "Four-column footer with links, logo and copyright.",
    categorySlug: "footers",
    tags: ["footer", "layout", "navigation"],
    code: `export function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white py-12 dark:border-ink-800 dark:bg-ink-950">
      <div className="mx-auto grid max-w-6xl grid-cols-4 gap-8 px-4 text-sm">
        <div><h4 className="font-semibold">Product</h4><ul className="mt-3 space-y-2 text-ink-500"><li>Features</li><li>Pricing</li><li>Docs</li></ul></div>
        <div><h4 className="font-semibold">Company</h4><ul className="mt-3 space-y-2 text-ink-500"><li>About</li><li>Blog</li><li>Careers</li></ul></div>
        <div><h4 className="font-semibold">Resources</h4><ul className="mt-3 space-y-2 text-ink-500"><li>Guides</li><li>API</li><li>Status</li></ul></div>
        <div><h4 className="font-semibold">Legal</h4><ul className="mt-3 space-y-2 text-ink-500"><li>Privacy</li><li>Terms</li><li>License</li></ul></div>
      </div>
      <p className="mt-8 text-center text-xs text-ink-400">© 2026 21st Clone. All rights reserved.</p>
    </footer>
  );
}`,
    prompt: "A four-column footer with product/company/resources/legal links and copyright line.",
    featured: 6,
    createdAt: daysAgo(5),
    likes: 470,
    views: 6000,
    previewKind: "footer-simple",
    authorIdx: 3,
  }),

  // --- Calendar ---

  c({
    id: "calendar-mini-01",
    title: "Mini calendar",
    description: "Compact month-view calendar widget with day selection.",
    categorySlug: "calendars",
    tags: ["calendar", "date", "widget"],
    code: `export function MiniCalendar() {
  const days = Array.from({length: 30}, (_, i) => i + 1);
  return (
    <div className="w-64 rounded-xl border border-ink-200 bg-white p-4 dark:border-ink-800 dark:bg-ink-900">
      <div className="flex items-center justify-between mb-3">
        <button className="text-ink-400"><Icon icon={ArrowLeft} size={16} /></button>
        <span className="text-sm font-semibold">April 2026</span>
        <button className="text-ink-400"><Icon icon={ArrowRight} size={16} /></button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {['S','M','T','W','T','F','S'].map(d => <span key={d} className="py-1 font-medium text-ink-400">{d}</span>)}
        {days.map(d => <span key={d} className={\`rounded-md py-1 cursor-pointer hover:bg-ink-100 dark:hover:bg-ink-800 \${d===18?'bg-ink-900 text-white dark:bg-white dark:text-ink-900':''}\`}>{d}</span>)}
      </div>
    </div>
  );
}`,
    prompt: "A compact mini calendar widget with month navigation, day grid, and active day highlight.",
    featured: 6,
    createdAt: daysAgo(4),
    likes: 610,
    views: 7600,
    previewKind: "calendar-mini",
    authorIdx: 4,
  }),
];

/** Sanity check at module load: every component points to a real category */
{
  const slugs = new Set(ALL_CATEGORIES.map((c) => c.slug));
  for (const item of COMPONENTS) {
    if (!slugs.has(item.categorySlug)) {
      console.warn(
        `[seed] component "${item.id}" references unknown category slug "${item.categorySlug}"`,
      );
    }
  }
}

// ── Merge with registry variants (dedup by id) ─────────────────────
const BASE_IDS = new Set(COMPONENTS.map(c => c.id));
const MERGED_REGISTRY = REGISTRY_COMPONENTS.filter(c => !BASE_IDS.has(c.id));

/** Full merged catalogue — all static seed + all registry variants */
export const ALL_COMPONENTS: ComponentItem[] = [...COMPONENTS, ...MERGED_REGISTRY];

export const COMPONENT_BY_ID: Record<string, ComponentItem> = {
  ...Object.fromEntries(COMPONENTS.map((c) => [c.id, c])),
  ...REGISTRY_BY_ID,
};
