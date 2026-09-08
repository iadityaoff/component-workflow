/**
 * PREMIUM COMPONENT VARIANTS — Batch B
 * ═══════════════════════════════════════════════════════════════
 * Fills remaining categories to ensure every category has 4-6+
 * genuinely unique, high-quality component variants.
 * ═══════════════════════════════════════════════════════════════
 */
import type { VariantSpec } from "./base";
import { ago } from "./base";

// ─── AVATARS ───────────────────────────────────────────────────
const AVATAR: VariantSpec[] = [
  {
    id: "avatar-group-02", title: "Avatar group with overflow", description: "Stacked avatars with +N overflow badge.",
    categorySlug: "avatars", tags: ["avatar","group","stack","overflow"], previewKind: "avatar-stack",
    featured: 8, createdAt: ago(2), likes: 2600, views: 32000, authorIdx: 0,
    prompt: "A group of overlapping avatar circles with an overflow count.",
    code: `export function AvatarGroup() {
  const colors = ['from-rose-400 to-pink-500','from-violet-400 to-purple-500','from-sky-400 to-blue-500','from-emerald-400 to-green-500'];
  return (
    <div className="flex items-center -space-x-3">
      {colors.map((c,i) => <div key={i} className={\`h-10 w-10 rounded-full bg-gradient-to-br \${c} ring-2 ring-white dark:ring-gray-900\`} />)}
      <div className="grid h-10 w-10 place-items-center rounded-full bg-gray-100 text-xs font-bold text-gray-600 ring-2 ring-white dark:bg-gray-800 dark:text-gray-300 dark:ring-gray-900">+5</div>
    </div>
  );
}`
  },
  {
    id: "avatar-status-03", title: "Avatar with status indicator", description: "User avatar with online/offline dot.",
    categorySlug: "avatars", tags: ["avatar","status","online","indicator"], previewKind: "avatar-stack",
    featured: 7, createdAt: ago(3), likes: 1900, views: 24000, authorIdx: 1,
    prompt: "Avatars with online, away, and offline status indicators.",
    code: `export function StatusAvatars() {
  const users = [
    { name: 'SC', color: 'from-violet-400 to-fuchsia-400', status: 'bg-emerald-500', label: 'Online' },
    { name: 'MR', color: 'from-amber-400 to-orange-400', status: 'bg-amber-500', label: 'Away' },
    { name: 'JB', color: 'from-sky-400 to-blue-400', status: 'bg-gray-400', label: 'Offline' },
  ];
  return (
    <div className="flex items-center gap-4">
      {users.map(u => (
        <div key={u.name} className="flex items-center gap-3">
          <div className="relative">
            <div className={\`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br \${u.color} text-sm font-bold text-white\`}>{u.name}</div>
            <span className={\`absolute bottom-0 right-0 h-3 w-3 rounded-full \${u.status} ring-2 ring-white dark:ring-gray-900\`} />
          </div>
          <span className="text-xs text-gray-500">{u.label}</span>
        </div>
      ))}
    </div>
  );
}`
  },
];

// ─── CALENDARS ─────────────────────────────────────────────────
const CALENDAR: VariantSpec[] = [
  {
    id: "calendar-week-02", title: "Week view calendar", description: "Horizontal week strip with time slots.",
    categorySlug: "calendars", tags: ["calendar","week","schedule","time"], previewKind: "calendar-mini",
    featured: 8, createdAt: ago(2), likes: 2800, views: 35000, authorIdx: 2,
    prompt: "A week view calendar strip showing 7 days with events.",
    code: `import { useState } from 'react';
export function WeekCalendar() {
  const [selected, setSelected] = useState(3);
  const days = [{d:'Mon',n:14},{d:'Tue',n:15},{d:'Wed',n:16},{d:'Thu',n:17},{d:'Fri',n:18},{d:'Sat',n:19},{d:'Sun',n:20}];
  return (
    <div className="w-80 rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">April 2026</h3>
        <div className="flex gap-1">
          <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">‹</button>
          <button className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">›</button>
        </div>
      </div>
      <div className="flex gap-1.5">
        {days.map((day,i) => (
          <button key={day.d} onClick={() => setSelected(i)}
            className={\`flex flex-1 flex-col items-center rounded-xl py-2 text-xs transition \${i===selected ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}\`}>
            <span className="font-medium">{day.d}</span>
            <span className={\`mt-1 text-lg font-bold \${i===selected?'':'text-gray-900 dark:text-white'}\`}>{day.n}</span>
            {i===selected && <span className="mt-1 h-1 w-1 rounded-full bg-white dark:bg-gray-900" />}
          </button>
        ))}
      </div>
      <div className="mt-4 space-y-2">
        <div className="rounded-lg bg-violet-50 p-3 dark:bg-violet-950/20">
          <p className="text-xs font-semibold text-violet-700 dark:text-violet-300">Design Review</p>
          <p className="text-[10px] text-violet-500">10:00 AM - 11:00 AM</p>
        </div>
        <div className="rounded-lg bg-sky-50 p-3 dark:bg-sky-950/20">
          <p className="text-xs font-semibold text-sky-700 dark:text-sky-300">Team Standup</p>
          <p className="text-[10px] text-sky-500">2:00 PM - 2:30 PM</p>
        </div>
      </div>
    </div>
  );
}`
  },
];

// ─── DIALOGS / MODALS ──────────────────────────────────────────
const DIALOG: VariantSpec[] = [
  {
    id: "dialog-command-02", title: "Command palette modal", description: "Spotlight-style search modal.",
    categorySlug: "dialogs-modals", tags: ["dialog","command","search","spotlight"], previewKind: "dialog-confirm",
    featured: 9, createdAt: ago(1), likes: 3400, views: 42000, authorIdx: 3,
    prompt: "A command palette / spotlight search dialog with input, results list, and keyboard hints.",
    code: `export function CommandPalette() {
  const items = [
    { icon: '<Icon icon={BarChart} size={16} />', label: 'Analytics Dashboard', shortcut: '⌘D' },
    { icon: '<Icon icon={Settings} size={16} />️', label: 'Settings', shortcut: '⌘,' },
    { icon: '<Icon icon={Users} size={16} />', label: 'Team Members', shortcut: '⌘T' },
    { icon: '<Icon icon={Package} size={16} />', label: 'Components', shortcut: '⌘K' },
  ];
  return (
    <div className="mx-auto w-96 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3 dark:border-gray-800">
        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" strokeWidth="2"/><path strokeLinecap="round" strokeWidth="2" d="m21 21-4.35-4.35"/></svg>
        <input className="flex-1 bg-transparent text-sm outline-none text-gray-900 placeholder:text-gray-400 dark:text-white" placeholder="Type a command or search..." autoFocus />
        <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-mono text-gray-400 dark:bg-gray-800">ESC</kbd>
      </div>
      <div className="p-1.5">
        <p className="px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Quick actions</p>
        {items.map((it,i) => (
          <button key={it.label} className={\`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition \${i===0?'bg-gray-100 dark:bg-gray-800':'hover:bg-gray-50 dark:hover:bg-gray-800/50'}\`}>
            <span>{it.icon}</span>
            <span className="flex-1 text-left text-gray-700 dark:text-gray-300">{it.label}</span>
            <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-mono text-gray-400 dark:bg-gray-800">{it.shortcut}</kbd>
          </button>
        ))}
      </div>
    </div>
  );
}`
  },
  {
    id: "dialog-drawer-03", title: "Bottom sheet drawer", description: "Mobile-style bottom drawer modal.",
    categorySlug: "dialogs-modals", tags: ["dialog","drawer","bottom","mobile"], previewKind: "dialog-confirm",
    featured: 8, createdAt: ago(2), likes: 2800, views: 34000, authorIdx: 4,
    prompt: "A bottom sheet drawer with grab handle, content, and action buttons.",
    code: `export function BottomDrawer() {
  return (
    <div className="mx-auto w-80">
      <div className="rounded-t-2xl border border-gray-200 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
        <div className="flex justify-center pt-3 pb-2"><div className="h-1 w-10 rounded-full bg-gray-300 dark:bg-gray-700" /></div>
        <div className="px-5 pb-5">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Share component</h3>
          <p className="mt-1 text-sm text-gray-500">Share this component with your team.</p>
          <div className="mt-4 flex gap-3">
            {[{icon:'<Icon icon={Mail} size={16} />',label:'Email'},{icon:'<Icon icon={Link} size={16} />',label:'Copy link'},{icon:'<Icon icon={MessageCircle} size={16} />',label:'Slack'}].map(s => (
              <button key={s.label} className="flex flex-1 flex-col items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 py-3 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <span className="text-xl">{s.icon}</span>{s.label}
              </button>
            ))}
          </div>
          <button className="mt-4 w-full rounded-xl bg-gray-900 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Done</button>
        </div>
      </div>
    </div>
  );
}`
  },
];

// ─── NOTIFICATIONS ─────────────────────────────────────────────
const NOTIF: VariantSpec[] = [
  {
    id: "notification-minimal-02", title: "Minimal notification", description: "Clean single-line notification.",
    categorySlug: "notifications", tags: ["notification","minimal","clean","toast"], previewKind: "notification-toast",
    featured: 7, createdAt: ago(3), likes: 1800, views: 22000, authorIdx: 5,
    prompt: "A minimal notification bar with icon and message.",
    code: `export function MinimalNotification() {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-3 rounded-xl bg-gray-900 px-4 py-3 text-white shadow-xl dark:bg-white dark:text-gray-900">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-xs text-white"><Icon icon={Check} size={16} /></span>
      <p className="text-sm font-medium">Component saved to your library</p>
    </div>
  );
}`
  },
  {
    id: "notification-rich-03", title: "Rich notification card", description: "Notification with avatar, actions, and timestamp.",
    categorySlug: "notifications", tags: ["notification","rich","avatar","actions"], previewKind: "card-notification",
    featured: 8, createdAt: ago(2), likes: 2400, views: 29000, authorIdx: 6,
    prompt: "A rich notification card with user avatar, message, timestamp, and action buttons.",
    code: `export function RichNotification() {
  return (
    <div className="mx-auto w-80 rounded-2xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-800 dark:bg-gray-900">
      <div className="flex gap-3">
        <div className="mt-0.5 h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400" />
        <div className="flex-1 min-w-0">
          <p className="text-sm"><span className="font-semibold text-gray-900 dark:text-white">Sarah Chen</span> <span className="text-gray-500">commented on your</span> <span className="font-medium text-violet-600 dark:text-violet-400">Button component</span></p>
          <p className="mt-1 text-xs text-gray-400">2 minutes ago</p>
          <div className="mt-3 flex gap-2">
            <button className="rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Reply</button>
            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400">Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
}`
  },
];

// ─── SELECTS ───────────────────────────────────────────────────
const SELECT: VariantSpec[] = [
  {
    id: "select-multi-02", title: "Multi-select with chips", description: "Multi-select dropdown with removable chips.",
    categorySlug: "selects", tags: ["select","multi","chips","tags"], previewKind: "select-custom",
    featured: 8, createdAt: ago(2), likes: 2600, views: 32000, authorIdx: 7,
    prompt: "A multi-select component showing selected items as removable chips.",
    code: `import { useState } from 'react';
export function MultiSelect() {
  const [selected, setSelected] = useState(['React', 'TypeScript']);
  const options = ['React','Vue','Angular','Svelte','TypeScript','JavaScript'];
  const toggle = (o: string) => setSelected(s => s.includes(o) ? s.filter(x => x !== o) : [...s, o]);
  return (
    <div className="mx-auto w-72">
      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Technologies</label>
      <div className="flex min-h-[40px] flex-wrap gap-1.5 rounded-lg border border-gray-200 bg-white p-2 dark:border-gray-800 dark:bg-gray-900">
        {selected.map(s => (
          <span key={s} className="inline-flex items-center gap-1 rounded-md bg-violet-100 px-2 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
            {s}<button onClick={() => toggle(s)} className="ml-0.5 hover:text-violet-900">×</button>
          </span>
        ))}
      </div>
      <div className="mt-1 rounded-lg border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-800 dark:bg-gray-900">
        {options.filter(o => !selected.includes(o)).map(o => (
          <button key={o} onClick={() => toggle(o)} className="w-full px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">{o}</button>
        ))}
      </div>
    </div>
  );
}`
  },
];

// ─── SLIDERS ───────────────────────────────────────────────────
const SLIDER: VariantSpec[] = [
  {
    id: "slider-price-02", title: "Price range slider", description: "Dual-thumb price filter slider.",
    categorySlug: "sliders", tags: ["slider","price","range","filter"], previewKind: "slider-range",
    featured: 8, createdAt: ago(2), likes: 2500, views: 31000, authorIdx: 0,
    prompt: "A price range slider with min/max handles and value display.",
    code: `import { useState } from 'react';
export function PriceSlider() {
  const [val, setVal] = useState(75);
  return (
    <div className="mx-auto w-72">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-gray-900 dark:text-white">Price range</span>
        <span className="text-sm font-bold text-violet-600">{"$0 – $" + val}</span>
      </div>
      <input type="range" min={0} max={200} value={val} onChange={e => setVal(+e.target.value)}
        className="w-full h-2 rounded-full appearance-none bg-gray-200 dark:bg-gray-800 accent-violet-600 cursor-pointer" />
      <div className="mt-2 flex justify-between text-xs text-gray-400"><span>$0</span><span>$200</span></div>
    </div>
  );
}`
  },
];

// ─── DOCS ──────────────────────────────────────────────────────
const DOC: VariantSpec[] = [
  {
    id: "docs-code-block-02", title: "Code block with copy", description: "Syntax-highlighted code block with copy button.",
    categorySlug: "docs", tags: ["docs","code","copy","syntax"], previewKind: "code-block",
    featured: 8, createdAt: ago(2), likes: 2800, views: 35000, authorIdx: 1,
    prompt: "A code block component with language label, copy button, and styled background.",
    code: `import { useState } from 'react';
export function CodeBlock() {
  const [copied, setCopied] = useState(false);
  const code = 'npm install @21st/ui';
  return (
    <div className="mx-auto w-80 overflow-hidden rounded-xl border border-gray-200 bg-gray-950 dark:border-gray-800">
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2">
        <span className="text-xs text-gray-500">Terminal</span>
        <button onClick={() => { navigator.clipboard?.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
          className="text-xs text-gray-500 hover:text-white transition">{copied ? '<Icon icon={Check} size={16} /> Copied' : 'Copy'}</button>
      </div>
      <pre className="p-4 text-sm"><code className="text-emerald-400">$ </code><code className="text-gray-300">{code}</code></pre>
    </div>
  );
}`
  },
  {
    id: "docs-api-ref-03", title: "API reference table", description: "Component props documentation table.",
    categorySlug: "docs", tags: ["docs","api","props","reference"], previewKind: "table-simple",
    featured: 8, createdAt: ago(3), likes: 2200, views: 27000, authorIdx: 2,
    prompt: "An API reference table documenting component props with types and defaults.",
    code: `export function APIReference() {
  const props = [
    { name: 'variant', type: "'solid' | 'outline' | 'ghost'", default: "'solid'", desc: 'Visual style variant' },
    { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", desc: 'Size of the button' },
    { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disable interactions' },
    { name: 'loading', type: 'boolean', default: 'false', desc: 'Show loading spinner' },
  ];
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 dark:bg-gray-900/80"><tr>
          {['Prop','Type','Default','Description'].map(h => <th key={h} className="px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>)}
        </tr></thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-950">
          {props.map(p => (
            <tr key={p.name} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition">
              <td className="px-4 py-2.5 font-mono text-xs font-semibold text-violet-600 dark:text-violet-400">{p.name}</td>
              <td className="px-4 py-2.5 font-mono text-xs text-gray-500">{p.type}</td>
              <td className="px-4 py-2.5 font-mono text-xs text-gray-400">{p.default}</td>
              <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{p.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}`
  },
];

// ─── FOOTERS ───────────────────────────────────────────────────
const FOOTER: VariantSpec[] = [
  {
    id: "footer-cta-03", title: "Footer with newsletter CTA", description: "Footer with email signup and social links.",
    categorySlug: "footers", tags: ["footer","newsletter","cta","social"], previewKind: "footer-simple",
    featured: 8, createdAt: ago(2), likes: 2200, views: 27000, authorIdx: 3,
    prompt: "A footer with newsletter email input, social icons, and link columns.",
    code: `export function CTAFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white px-8 py-12 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Stay up to date</h3>
          <p className="mt-1 text-sm text-gray-500">Get notified about new components and updates.</p>
          <div className="mt-4 flex max-w-sm mx-auto gap-2">
            <input placeholder="your@email.com" className="h-10 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-3 text-sm outline-none focus:border-violet-400 dark:border-gray-800 dark:bg-gray-900 dark:text-white" />
            <button className="shrink-0 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900">Subscribe</button>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-gray-100 pt-6 dark:border-gray-800">
          <p className="text-xs text-gray-400">© 2026 21st Components</p>
          <div className="flex gap-4 text-gray-400">
            {['𝕏','GitHub','Discord'].map(s => <a key={s} href="#" className="text-xs hover:text-gray-900 dark:hover:text-white">{s}</a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}`
  },
];

// ─── CTA (More variants) ──────────────────────────────────────
const CTA: VariantSpec[] = [
  {
    id: "cta-card-03", title: "CTA card with illustration", description: "Inline CTA card for dashboards.",
    categorySlug: "calls-to-action", tags: ["cta","card","inline","dashboard"], previewKind: "hero-gradient",
    featured: 8, createdAt: ago(2), likes: 2300, views: 28000, authorIdx: 4,
    prompt: "An inline CTA card with gradient background, heading, and button.",
    code: `export function CTACard() {
  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900">
      <div className="relative px-8 py-10">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute -bottom-8 -right-16 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="relative">
          <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-300">New feature</span>
          <h3 className="mt-3 text-xl font-bold text-white">Try AI component generation</h3>
          <p className="mt-2 max-w-md text-sm text-gray-400">Describe what you need and our AI will generate a production-ready component in seconds.</p>
          <button className="mt-6 rounded-xl bg-white px-6 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition">Try it free <Icon icon={ArrowRight} size={16} /></button>
        </div>
      </div>
    </div>
  );
}`
  },
];

// ─── FEATURES (More variants) ─────────────────────────────────
const FEAT: VariantSpec[] = [
  {
    id: "feature-list-03", title: "Feature comparison list", description: "Checklist-style feature comparison.",
    categorySlug: "features", tags: ["feature","checklist","comparison","list"], previewKind: "feature-grid",
    featured: 8, createdAt: ago(2), likes: 2600, views: 32000, authorIdx: 5,
    prompt: "A feature comparison checklist with included and excluded items.",
    code: `export function FeatureList() {
  const included = ['Unlimited components', 'AI Remix engine', 'Team collaboration', 'Custom themes', 'Priority support'];
  const excluded = ['Source code access', 'White-label license'];
  return (
    <div className="mx-auto max-w-sm rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
      <h3 className="text-base font-bold text-gray-900 dark:text-white">Pro Plan includes</h3>
      <ul className="mt-4 space-y-3">
        {included.map(f => (
          <li key={f} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-xs text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400"><Icon icon={Check} size={16} /></span>{f}
          </li>
        ))}
        {excluded.map(f => (
          <li key={f} className="flex items-center gap-3 text-sm text-gray-400">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gray-100 text-xs text-gray-400 dark:bg-gray-800"><Icon icon={X} size={16} /></span>{f}
          </li>
        ))}
      </ul>
    </div>
  );
}`
  },
];

// ─── TESTIMONIALS (More) ──────────────────────────────────────
const TESTIM: VariantSpec[] = [
  {
    id: "testimonial-marquee-03", title: "Logo trust bar", description: "Company logos in a horizontal marquee.",
    categorySlug: "testimonials", tags: ["testimonial","logos","trust","marquee"], previewKind: "testimonial",
    featured: 8, createdAt: ago(2), likes: 2400, views: 30000, authorIdx: 6,
    prompt: "A trust bar showing partner/client company names.",
    code: `export function TrustBar() {
  const logos = ['Vercel','Stripe','Linear','Notion','Figma','Supabase'];
  return (
    <div className="py-8 text-center">
      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">Trusted by teams at</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {logos.map(l => (
          <span key={l} className="text-lg font-bold text-gray-300 transition hover:text-gray-500 dark:text-gray-600 dark:hover:text-gray-400">{l}</span>
        ))}
      </div>
    </div>
  );
}`
  },
];

// ─── ACCORDIONS (More) ────────────────────────────────────────
const ACCORD: VariantSpec[] = [
  {
    id: "accordion-bordered-02", title: "Bordered accordion", description: "Accordion with bordered separators.",
    categorySlug: "accordions", tags: ["accordion","bordered","faq","expand"], previewKind: "accordion",
    featured: 7, createdAt: ago(3), likes: 2100, views: 26000, authorIdx: 7,
    prompt: "A bordered accordion with rounded cards and expand/collapse.",
    code: `import { useState } from 'react';
export function BorderedAccordion() {
  const [open, setOpen] = useState(0);
  const items = [
    { q: 'How do I install components?', a: 'Simply copy the code from any component page and paste it into your React project. All components use Tailwind CSS.' },
    { q: 'Do I need a subscription?', a: 'No! The community components are free to use. Pro features like AI Remix require a subscription.' },
    { q: 'Can I use these commercially?', a: 'Yes, all components are MIT licensed and can be used in commercial projects.' },
  ];
  return (
    <div className="mx-auto max-w-md space-y-2">
      {items.map((item, i) => (
        <div key={i} className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white">
            {item.q}
            <span className={\`text-gray-400 transition-transform \${open===i?'rotate-45':'rotate-0'}\`}>+</span>
          </button>
          {open === i && <div className="border-t border-gray-100 px-4 py-3 text-sm text-gray-500 dark:border-gray-800">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}`
  },
];

// ══════════════════════════════════════════════════════════════
// EXPORT
// ══════════════════════════════════════════════════════════════
export const BATCH_B_VARIANTS: VariantSpec[] = [
  ...AVATAR, ...CALENDAR, ...DIALOG, ...NOTIF, ...SELECT,
  ...SLIDER, ...DOC, ...FOOTER, ...CTA, ...FEAT, ...TESTIM, ...ACCORD,
];
