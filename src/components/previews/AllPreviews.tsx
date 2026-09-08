import React from 'react';
import { Icon } from '../ui/Icon';
import {
  Check, Copy, Search, Star,
  Bell, Zap, Palette, Accessibility, AlertTriangle, X, ArrowRight, ArrowLeft, FolderUp, Info, BarChart2, Puzzle, Settings,
} from 'lucide-react';

/* ---------- Frame ---------- */

export function Frame({
  children,
  padded,
}: {
  children: React.ReactNode;
  padded?: boolean;
}) {
  return (
    <div
      className={[
        "preview-grid-bg flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-ink-50 dark:bg-ink-900/60",
        padded ? "p-4" : "p-6",
      ].join(" ")}
    >
      <div className="flex max-w-full items-center justify-center">{children}</div>
    </div>
  );
}

/* ---------- Buttons ---------- */

export function PrimaryButton() {
  return (
    <button className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100">
      Get started
    </button>
  );
}

export function GradientButton() {
  return (
    <button className="rounded-xl bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:brightness-110">
      Generate now
    </button>
  );
}

export function GhostButton() {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800">
      <Icon icon={Copy} />
      Copy link
    </button>
  );
}

/* ---------- Cards ---------- */

export function PricingCard() {
  return (
    <div className="w-56 rounded-2xl border border-ink-200 bg-white p-4 shadow-sm dark:border-ink-800 dark:bg-ink-950">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
        Pro
      </p>
      <div className="mt-1 flex items-baseline gap-1">
        <span className="text-2xl font-bold tracking-tight">$24</span>
        <span className="text-xs text-ink-500">/mo</span>
      </div>
      <ul className="mt-3 space-y-1.5 text-[11px] text-ink-600 dark:text-ink-400">
        {["Unlimited generations", "Private components", "Priority support"].map((feat) => (
          <li key={feat} className="flex items-center gap-1.5">
            <Icon icon={Check} size={12} className="text-emerald-500" />
            {feat}
          </li>
        ))}
      </ul>
      <button className="mt-3 w-full rounded-md bg-ink-900 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-ink-900">
        Upgrade
      </button>
    </div>
  );
}

export function StatCard() {
  return (
    <div className="w-56 rounded-2xl border border-ink-200 bg-white p-4 shadow-sm dark:border-ink-800 dark:bg-ink-950">
      <p className="text-xs text-ink-500">Monthly recurring</p>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight">$48,210</span>
        <span className="rounded-md bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400">
          +12.4%
        </span>
      </div>
      <div className="mt-3 flex h-8 items-end gap-1">
        {[40, 55, 35, 70, 60, 80, 65, 90].map((h, i) => (
          <span
            key={i}
            className="w-2 rounded-sm bg-ink-200 dark:bg-ink-800"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function ProductCard() {
  return (
    <div className="w-48 overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm dark:border-ink-800 dark:bg-ink-950">
      <div className="h-20 bg-gradient-to-br from-rose-200 via-amber-200 to-emerald-200 dark:from-rose-900/40 dark:via-amber-900/30 dark:to-emerald-900/40" />
      <div className="p-3">
        <p className="text-xs text-ink-500">New release</p>
        <p className="text-sm font-medium">Aether Hoodie</p>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-sm font-semibold">$78</span>
          <button className="rounded-md bg-ink-900 px-2 py-1 text-[11px] font-medium text-white dark:bg-white dark:text-ink-900">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- Inputs ---------- */

export function SearchField() {
  return (
    <div className="relative w-64">
      <Icon icon={Search} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-400" />
      <input
        defaultValue="components"
        className="h-9 w-full rounded-lg border border-ink-200 bg-white pl-9 pr-3 text-sm focus:border-ink-400 focus:outline-none dark:border-ink-800 dark:bg-ink-950"
      />
    </div>
  );
}

export function FloatingInput() {
  return (
    <div className="relative w-64">
      <input
        defaultValue="aria@21st.dev"
        className="peer h-11 w-full rounded-lg border border-ink-300 bg-white px-3 pt-3 text-sm focus:border-ink-500 focus:outline-none dark:border-ink-700 dark:bg-ink-950"
      />
      <label className="pointer-events-none absolute left-3 top-1.5 text-[10px] font-medium uppercase tracking-wider text-ink-500">
        Email
      </label>
    </div>
  );
}

/* ---------- Misc ---------- */

export function BadgeRow() {
  const items: { tone: string; label: string; cls: string }[] = [
    { tone: "success", label: "Active",  cls: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400" },
    { tone: "warning", label: "Pending", cls: "bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400" },
    { tone: "error",   label: "Failed",  cls: "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400" },
    { tone: "info",    label: "Beta",    cls: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-400" },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {items.map((b) => (
        <span
          key={b.tone}
          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${b.cls}`}
        >
          {b.label}
        </span>
      ))}
    </div>
  );
}

export function AvatarStack() {
  const colors = ["bg-rose-500", "bg-amber-500", "bg-emerald-500", "bg-sky-500"];
  const initials = ["AC", "MR", "PI", "JB"];
  return (
    <div className="flex items-center -space-x-2">
      {initials.map((t, i) => (
        <span
          key={t}
          className={`grid h-8 w-8 place-items-center rounded-full text-[11px] font-semibold text-white ring-2 ring-white dark:ring-ink-950 ${colors[i]}`}
        >
          {t}
        </span>
      ))}
      <span className="grid h-8 w-8 place-items-center rounded-full bg-ink-200 text-[11px] font-semibold text-ink-700 ring-2 ring-white dark:bg-ink-800 dark:text-ink-200 dark:ring-ink-950">
        +6
      </span>
    </div>
  );
}

export function SuccessAlert() {
  return (
    <div className="flex w-72 gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-3 dark:border-emerald-900/60 dark:bg-emerald-950/40">
      <Icon icon={Check} className="mt-0.5 text-emerald-600 dark:text-emerald-400" />
      <div>
        <p className="text-sm font-medium text-emerald-900 dark:text-emerald-200">
          Component published
        </p>
        <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80">
          Your card is now visible to the community.
        </p>
      </div>
    </div>
  );
}

export function ErrorAlert() {
  return (
    <div className="flex w-72 gap-2.5 rounded-xl border border-rose-200 bg-rose-50 p-3 dark:border-rose-900/60 dark:bg-rose-950/40">
      <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-rose-600 text-[10px] font-bold text-white">
        !
      </span>
      <div>
        <p className="text-sm font-medium text-rose-900 dark:text-rose-200">
          Build failed
        </p>
        <p className="text-xs text-rose-800/80 dark:text-rose-300/80">
          Unexpected token in <code className="font-mono">App.tsx</code>.
        </p>
      </div>
    </div>
  );
}

export function PillTabs() {
  return (
    <div className="inline-flex items-center gap-1 rounded-lg bg-ink-200/60 p-1 dark:bg-ink-800/60">
      {["Preview", "Code", "Usage"].map((t, i) => (
        <span
          key={t}
          className={[
            "rounded-md px-3 py-1 text-xs font-medium",
            i === 0
              ? "bg-white text-ink-900 shadow-sm dark:bg-ink-950 dark:text-white"
              : "text-ink-600 dark:text-ink-400",
          ].join(" ")}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function ToggleSwitch() {
  return (
    <div className="flex items-center gap-6">
      <span className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full bg-ink-300 transition dark:bg-ink-700">
        <span className="absolute left-0.5 h-5 w-5 rounded-full bg-white shadow-md transition" />
      </span>
      <span className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full bg-ink-900 transition dark:bg-white">
        <span className="absolute right-0.5 h-5 w-5 rounded-full bg-white shadow-md transition dark:bg-ink-900" />
      </span>
    </div>
  );
}

export function Spinner() {
  return (
    <div className="flex items-center gap-5">
      <span className="block h-7 w-7 animate-spin rounded-full border-2 border-ink-200 border-t-ink-900 dark:border-ink-800 dark:border-t-white" />
      <span className="block h-7 w-7 animate-spin rounded-full border-2 border-rose-200 border-t-rose-600" />
      <span className="block h-7 w-7 animate-spin rounded-full border-2 border-emerald-200 border-t-emerald-600" />
    </div>
  );
}

export function ProgressBar() {
  return (
    <div className="w-72 space-y-2">
      <div className="h-2 overflow-hidden rounded-full bg-ink-200 dark:bg-ink-800">
        <div className="h-full w-3/4 rounded-full bg-ink-900 dark:bg-white" />
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-ink-200 dark:bg-ink-800">
        <div
          className="h-full w-1/3 animate-shimmer rounded-full bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-400"
          style={{ backgroundSize: "200% 100%" }}
        />
      </div>
    </div>
  );
}

export function HeroGradient() {
  return (
    <div className="text-center">
      <p className="bg-gradient-to-br from-fuchsia-600 via-rose-500 to-amber-500 bg-clip-text text-2xl font-bold tracking-tight text-transparent">
        Build UI 10× faster
      </p>
      <p className="mt-1 text-xs text-ink-500">A community of 600+ components.</p>
      <div className="mt-3 flex items-center justify-center gap-2">
        <button className="rounded-md bg-ink-900 px-3 py-1.5 text-[11px] font-medium text-white dark:bg-white dark:text-ink-900">
          Get started
        </button>
        <button className="rounded-md border border-ink-200 px-3 py-1.5 text-[11px] font-medium text-ink-700 dark:border-ink-700 dark:text-ink-200">
          Learn more
        </button>
      </div>
    </div>
  );
}

export function Testimonial() {
  return (
    <div className="w-72 rounded-xl border border-ink-200 bg-white p-3 dark:border-ink-800 dark:bg-ink-950">
      <div className="mb-1 flex items-center text-amber-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon icon={Star} key={i} className="text-xs" />
        ))}
      </div>
      <p className="text-xs text-ink-700 dark:text-ink-300">
        "Shipped our marketing site in a weekend. The components feel native."
      </p>
      <div className="mt-2 flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-violet-500 text-[10px] font-semibold text-white">
          LO
        </span>
        <div className="text-[11px] leading-tight">
          <p className="font-medium">Lina Okafor</p>
          <p className="text-ink-500">Founder, Hatch</p>
        </div>
      </div>
    </div>
  );
}

export function FeatureGrid() {
  const features = [
    { l: "Fast",       icon: Zap },
    { l: "Themeable",  icon: Palette },
    { l: "Accessible", icon: Accessibility },
  ];
  return (
    <div className="grid w-full max-w-xs grid-cols-3 gap-2">
      {features.map((f) => (
        <div
          key={f.l}
          className="rounded-lg border border-ink-200 bg-white p-2 text-center dark:border-ink-800 dark:bg-ink-950"
        >
          <div className="flex justify-center text-ink-700 dark:text-ink-200">
            <Icon icon={f.icon} size={18} />
          </div>
          <p className="mt-1 text-[11px] font-medium">{f.l}</p>
        </div>
      ))}
    </div>
  );
}

export function DropdownMenu() {
  return (
    <div className="w-44 rounded-lg border border-ink-200 bg-white p-1 shadow-md dark:border-ink-800 dark:bg-ink-950">
      {["Profile", "Settings", "Billing"].map((label) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-md px-2 py-1 text-xs text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900"
        >
          <span>{label}</span>
          <span className="text-[10px] text-ink-400">⌘{label[0]}</span>
        </div>
      ))}
      <div className="my-1 h-px bg-ink-100 dark:bg-ink-800" />
      <div className="rounded-md px-2 py-1 text-xs text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40">
        Sign out
      </div>
    </div>
  );
}

export function CodeBlock() {
  return (
    <pre className="relative w-72 overflow-hidden rounded-lg border border-ink-800 bg-ink-950 p-3 text-left font-mono text-[11px] leading-relaxed text-ink-100">
      <span className="absolute right-2 top-2 rounded bg-ink-800 px-1.5 py-0.5 text-[9px] uppercase text-ink-400">
        tsx
      </span>
      <code>
        <span className="text-rose-400">import</span> {"{ Button }"}{" "}
        <span className="text-rose-400">from</span>{" "}
        <span className="text-emerald-300">"@/ui"</span>;{"\n"}
        <span className="text-rose-400">export default</span>{" "}
        <span className="text-sky-300">App</span>(){" "}
        {"{"}
        {"\n"}  <span className="text-rose-400">return</span>{" "}
        {"<"}<span className="text-sky-300">Button</span>{">"}Ship{"</"}
        <span className="text-sky-300">Button</span>{">"};
        {"\n}"}
      </code>
    </pre>
  );
}

export function TooltipDemo() {
  return (
    <div className="relative">
      <button className="rounded-md border border-ink-200 px-3 py-1.5 text-xs text-ink-700 dark:border-ink-700 dark:text-ink-200">
        Hover me
      </button>
      <div className="absolute left-1/2 top-[-2.4rem] -translate-x-1/2 whitespace-nowrap rounded-md bg-ink-900 px-2 py-1 text-[10px] font-medium text-white shadow-lg dark:bg-white dark:text-ink-900">
        Copied to clipboard
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-ink-900 dark:border-t-white" />
      </div>
    </div>
  );
}

export function AccordionDemo() {
  return (
    <div className="w-72 divide-y divide-ink-100 rounded-xl border border-ink-200 bg-white dark:divide-ink-800 dark:border-ink-800 dark:bg-ink-950">
      <div className="flex items-center justify-between p-3">
        <p className="text-xs font-medium">Is there a free tier?</p>
        <span className="text-ink-400">−</span>
      </div>
      <div className="px-3 pb-3 text-[11px] text-ink-500">
        Yes — the free plan includes 50 generations / month.
      </div>
      <div className="flex items-center justify-between p-3">
        <p className="text-xs font-medium">Can I publish privately?</p>
        <span className="text-ink-400">+</span>
      </div>
    </div>
  );
}

export function CheckboxList() {
  const rows = [
    { label: "Notify me by email", checked: true },
    { label: "Notify me on push",  checked: false },
    { label: "Weekly digest",      checked: true },
  ];
  return (
    <div className="w-60 space-y-2">
      {rows.map((r) => (
        <label key={r.label} className="flex cursor-pointer items-center gap-2 text-xs">
          <span
            className={[
              "grid h-4 w-4 place-items-center rounded border",
              r.checked
                ? "border-ink-900 bg-ink-900 text-white dark:border-white dark:bg-white dark:text-ink-900"
                : "border-ink-300 bg-white dark:border-ink-700 dark:bg-ink-900",
            ].join(" ")}
          >
            {r.checked && <Icon icon={Check} className="text-[10px]" />}
          </span>
          <span className="text-ink-700 dark:text-ink-300">{r.label}</span>
        </label>
      ))}
    </div>
  );
}

/* ================================================================ */
/*  NEW VARIANT PREVIEWS                                            */
/* ================================================================ */

export function OutlineButton() {
  return (
    <button className="rounded-lg border border-ink-300 px-4 py-2 text-sm font-medium text-ink-700 transition hover:bg-ink-50 dark:border-ink-700 dark:text-ink-200 dark:hover:bg-ink-900">
      Secondary
    </button>
  );
}

export function DestructiveButton() {
  return (
    <button className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700">
      Delete item
    </button>
  );
}

export function IconButtons() {
  return (
    <div className="flex items-center gap-3">
      <button className="grid h-9 w-9 place-items-center rounded-full text-ink-600 transition hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800">
        <Icon icon={Copy} />
      </button>
      <button className="grid h-9 w-9 place-items-center rounded-full text-ink-600 transition hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800">
        <Icon icon={Search} />
      </button>
      <button className="grid h-9 w-9 place-items-center rounded-full text-ink-600 transition hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-800">
        <Icon icon={Star} />
      </button>
    </div>
  );
}

export function LoadingButton() {
  return (
    <div className="flex items-center gap-3">
      <button className="inline-flex items-center gap-2 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white opacity-60 dark:bg-white dark:text-ink-900">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-ink-900/30 dark:border-t-ink-900" />
        Loading…
      </button>
      <button className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-ink-900">
        Ready
      </button>
    </div>
  );
}

export function ButtonSizes() {
  return (
    <div className="flex items-end gap-2">
      <button className="rounded-md bg-ink-900 px-2 py-1 text-xs font-medium text-white dark:bg-white dark:text-ink-900">XS</button>
      <button className="rounded-md bg-ink-900 px-3 py-1.5 text-sm font-medium text-white dark:bg-white dark:text-ink-900">SM</button>
      <button className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-ink-900">MD</button>
      <button className="rounded-lg bg-ink-900 px-5 py-2.5 text-base font-medium text-white dark:bg-white dark:text-ink-900">LG</button>
    </div>
  );
}

export function UserProfileCard() {
  return (
    <div className="flex w-48 flex-col items-center rounded-2xl border border-ink-200 bg-white p-4 text-center dark:border-ink-800 dark:bg-ink-950">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-violet-500 text-sm font-bold text-white">AC</span>
      <p className="mt-2 text-sm font-semibold">Aria Chen</p>
      <p className="text-[11px] text-ink-500">Frontend Engineer</p>
      <button className="mt-3 w-full rounded-md bg-ink-900 py-1 text-[11px] font-medium text-white dark:bg-white dark:text-ink-900">Follow</button>
    </div>
  );
}

export function NotificationCard() {
  return (
    <div className="flex w-72 gap-2.5 rounded-xl border border-ink-200 bg-white p-3 dark:border-ink-800 dark:bg-ink-950">
      <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400">
        <Icon icon={Bell} size={14} />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium">New comment</p>
        <p className="text-[11px] text-ink-500 line-clamp-1">Aria replied to your component</p>
        <p className="mt-0.5 text-[10px] text-ink-400">2m ago</p>
      </div>
    </div>
  );
}

export function PasswordInput() {
  return (
    <div className="relative w-64">
      <input
        type="password"
        defaultValue="password123"
        className="h-9 w-full rounded-lg border border-ink-200 bg-white px-3 pr-14 text-sm dark:border-ink-800 dark:bg-ink-950"
      />
      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-medium text-ink-400 hover:text-ink-700">
        Show
      </button>
    </div>
  );
}

export function OTPInput() {
  return (
    <div className="flex gap-2">
      {["4", "8", "", ""].map((v, i) => (
        <span
          key={i}
          className={[
            "grid h-10 w-10 place-items-center rounded-lg border text-center text-lg font-bold",
            v
              ? "border-ink-400 bg-white dark:border-ink-600 dark:bg-ink-950"
              : "border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-900",
          ].join(" ")}
        >
          {v}
        </span>
      ))}
    </div>
  );
}

export function WarningAlert() {
  return (
    <div className="flex w-72 gap-2.5 rounded-xl border border-amber-200 bg-amber-50 p-3 dark:border-amber-900/60 dark:bg-amber-950/40">
      <span className="mt-0.5 text-amber-600"><Icon icon={AlertTriangle} size={16} /></span>
      <div>
        <p className="text-sm font-medium text-amber-900 dark:text-amber-200">Usage limit near</p>
        <p className="text-xs text-amber-800/80 dark:text-amber-300/80">You've used 90% of your plan.</p>
      </div>
    </div>
  );
}

export function InfoAlert() {
  return (
    <div className="flex w-72 gap-2.5 rounded-xl border border-sky-200 bg-sky-50 p-3 dark:border-sky-900/60 dark:bg-sky-950/40">
      <span className="mt-0.5 text-sky-600"><Icon icon={Info} size={16} /></span>
      <div>
        <p className="text-sm font-medium text-sky-900 dark:text-sky-200">Tip</p>
        <p className="text-xs text-sky-800/80 dark:text-sky-300/80">Press ⌘K to search components.</p>
      </div>
    </div>
  );
}

export function HeroMinimal() {
  return (
    <div className="rounded-lg bg-ink-900 px-6 py-5 text-center dark:bg-ink-800">
      <p className="text-lg font-bold tracking-tight text-white">Ship faster.</p>
      <p className="mt-1 text-[10px] text-ink-400">Production-ready components.</p>
      <button className="mt-3 rounded-md bg-white px-3 py-1 text-[10px] font-semibold text-ink-900">Get started</button>
    </div>
  );
}

export function SelectCustom() {
  return (
    <div className="relative w-56">
      <div className="flex h-9 items-center justify-between rounded-lg border border-ink-200 bg-white px-3 text-sm dark:border-ink-800 dark:bg-ink-950">
        <span>React</span>
        <span className="text-ink-400">▾</span>
      </div>
    </div>
  );
}

export function DialogConfirm() {
  return (
    <div className="w-64 rounded-xl border border-ink-200 bg-white p-4 shadow-lg dark:border-ink-800 dark:bg-ink-950">
      <p className="text-sm font-semibold">Delete component?</p>
      <p className="mt-1 text-[11px] text-ink-500">This action cannot be undone.</p>
      <div className="mt-3 flex justify-end gap-2">
        <button className="rounded-md border border-ink-200 px-2.5 py-1 text-[11px] dark:border-ink-700">Cancel</button>
        <button className="rounded-md bg-rose-600 px-2.5 py-1 text-[11px] text-white">Delete</button>
      </div>
    </div>
  );
}

export function NavBarPreview() {
  return (
    <div className="flex w-full max-w-xs items-center justify-between rounded-lg border border-ink-200 bg-white px-3 py-2 dark:border-ink-800 dark:bg-ink-950">
      <span className="grid h-5 w-5 place-items-center rounded bg-ink-900 text-[8px] font-bold text-white dark:bg-white dark:text-ink-900">N</span>
      <div className="flex gap-3 text-[10px] text-ink-500">
        <span className="font-medium text-ink-900 dark:text-white">Home</span>
        <span>About</span>
        <span>Blog</span>
      </div>
      <button className="rounded bg-ink-900 px-2 py-0.5 text-[9px] text-white dark:bg-white dark:text-ink-900">Sign in</button>
    </div>
  );
}

export function SliderRange() {
  return (
    <div className="w-56">
      <div className="relative h-2 rounded-full bg-ink-200 dark:bg-ink-800">
        <div className="h-full w-3/5 rounded-full bg-ink-900 dark:bg-white" />
        <span className="absolute right-[40%] top-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full border-2 border-ink-900 bg-white shadow dark:border-white dark:bg-ink-900" />
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-ink-500">
        <span>0</span><span>60</span><span>100</span>
      </div>
    </div>
  );
}

export function ToastPreview() {
  return (
    <div className="flex w-64 items-center gap-2.5 rounded-xl border border-ink-200 bg-white px-3 py-2.5 shadow-md dark:border-ink-800 dark:bg-ink-950">
      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
        <Icon icon={Check} size={12} />
      </span>
      <p className="flex-1 text-xs">Component saved!</p>
      <button type="button" aria-label="Dismiss" className="text-ink-400 hover:text-ink-600 dark:hover:text-ink-300">
        <Icon icon={X} size={12} />
      </button>
    </div>
  );
}

export function RadioGroup() {
  const items = [
    { label: "Starter", active: false },
    { label: "Pro", active: true },
    { label: "Enterprise", active: false },
  ];
  return (
    <div className="w-48 space-y-1.5">
      {items.map((item) => (
        <div
          key={item.label}
          className={[
            "flex items-center gap-2 rounded-lg border p-2 text-xs",
            item.active
              ? "border-ink-900 bg-ink-50 dark:border-white dark:bg-ink-900"
              : "border-ink-200 dark:border-ink-800",
          ].join(" ")}
        >
          <span className={[
            "grid h-3.5 w-3.5 place-items-center rounded-full border-2",
            item.active ? "border-ink-900 dark:border-white" : "border-ink-300 dark:border-ink-600",
          ].join(" ")}>
            {item.active && <span className="h-1.5 w-1.5 rounded-full bg-ink-900 dark:bg-white" />}
          </span>
          {item.label}
        </div>
      ))}
    </div>
  );
}

export function SidebarNav() {
  const items = [
    { label: "Dashboard", active: true, icon: BarChart2 },
    { label: "Components", active: false, icon: Puzzle },
    { label: "Settings", active: false, icon: Settings },
  ];
  return (
    <div className="w-40 space-y-0.5">
      {items.map((item) => (
        <div
          key={item.label}
          className={[
            "flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[11px]",
            item.active
              ? "bg-ink-900 font-medium text-white dark:bg-white dark:text-ink-900"
              : "text-ink-600 dark:text-ink-400",
          ].join(" ")}
        >
          <span className="shrink-0 opacity-70"><Icon icon={item.icon} size={12} /></span>
          {item.label}
        </div>
      ))}
    </div>
  );
}

export function SignInPreview() {
  return (
    <div className="w-48 rounded-xl border border-ink-200 bg-white p-3 dark:border-ink-800 dark:bg-ink-950">
      <p className="text-xs font-semibold">Sign in</p>
      <div className="mt-2 h-6 w-full rounded border border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-900" />
      <div className="mt-1.5 h-6 w-full rounded border border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-900" />
      <div className="mt-2 h-6 w-full rounded-md bg-ink-900 dark:bg-white" />
      <div className="mt-2 flex items-center gap-1.5">
        <span className="flex-1 border-t border-ink-200 dark:border-ink-800" />
        <span className="text-[8px] text-ink-400">or</span>
        <span className="flex-1 border-t border-ink-200 dark:border-ink-800" />
      </div>
      <div className="mt-2 h-6 w-full rounded border border-ink-200 dark:border-ink-800" />
    </div>
  );
}

export function SignUpPreview() {
  return (
    <div className="w-48 rounded-xl border border-ink-200 bg-white p-3 dark:border-ink-800 dark:bg-ink-950">
      <p className="text-xs font-semibold">Create account</p>
      <div className="mt-2 h-6 w-full rounded border border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-900" />
      <div className="mt-1.5 h-6 w-full rounded border border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-900" />
      <div className="mt-1.5 h-6 w-full rounded border border-ink-200 bg-ink-50 dark:border-ink-800 dark:bg-ink-900" />
      <div className="mt-2 h-6 w-full rounded-md bg-ink-900 dark:bg-white" />
    </div>
  );
}

export function FileUploadPreview() {
  return (
    <div className="flex w-56 flex-col items-center rounded-xl border-2 border-dashed border-ink-300 bg-ink-50/50 px-4 py-5 text-center dark:border-ink-700 dark:bg-ink-900/50">
      <span className="text-ink-400"><Icon icon={FolderUp} size={24} /></span>
      <p className="mt-1.5 text-[11px] font-medium">Drop files here</p>
      <p className="text-[10px] text-ink-400">or click to browse</p>
    </div>
  );
}

export function PaginationPreview() {
  return (
    <div className="flex items-center gap-1">
      <span className="grid h-7 w-7 place-items-center rounded border border-ink-200 text-ink-400 dark:border-ink-800"><Icon icon={ArrowLeft} size={12} /></span>
      <span className="grid h-7 w-7 place-items-center rounded bg-ink-900 text-[11px] font-medium text-white dark:bg-white dark:text-ink-900">1</span>
      <span className="grid h-7 w-7 place-items-center rounded border border-ink-200 text-[11px] dark:border-ink-800">2</span>
      <span className="grid h-7 w-7 place-items-center rounded border border-ink-200 text-[11px] dark:border-ink-800">3</span>
      <span className="grid h-7 w-7 place-items-center rounded border border-ink-200 text-ink-400 dark:border-ink-800"><Icon icon={ArrowRight} size={12} /></span>
    </div>
  );
}

export function TablePreview() {
  return (
    <div className="w-full max-w-xs overflow-hidden rounded-lg border border-ink-200 dark:border-ink-800">
      <table className="w-full text-left text-[10px]">
        <thead>
          <tr className="bg-ink-50 dark:bg-ink-900">
            <th className="px-2 py-1.5 font-medium">Name</th>
            <th className="px-2 py-1.5 font-medium">Role</th>
            <th className="px-2 py-1.5 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-100 dark:divide-ink-800">
          <tr><td className="px-2 py-1.5">Aria</td><td className="px-2 py-1.5">Engineer</td><td className="px-2 py-1.5"><span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">Active</span></td></tr>
          <tr className="bg-ink-50/50 dark:bg-ink-900/30"><td className="px-2 py-1.5">Mateo</td><td className="px-2 py-1.5">Designer</td><td className="px-2 py-1.5"><span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">Away</span></td></tr>
        </tbody>
      </table>
    </div>
  );
}

export function FooterPreview() {
  return (
    <div className="w-full max-w-xs rounded-lg border-t-2 border-ink-200 bg-white px-4 py-3 dark:border-ink-800 dark:bg-ink-950">
      <div className="flex justify-between text-[9px] text-ink-500">
        <div><p className="font-semibold text-ink-900 dark:text-white">Product</p><p className="mt-1">Features</p><p>Pricing</p></div>
        <div><p className="font-semibold text-ink-900 dark:text-white">Company</p><p className="mt-1">About</p><p>Blog</p></div>
        <div><p className="font-semibold text-ink-900 dark:text-white">Legal</p><p className="mt-1">Privacy</p><p>Terms</p></div>
      </div>
      <p className="mt-2 text-center text-[8px] text-ink-400">© 2026 21st Clone</p>
    </div>
  );
}

export function CalendarPreview() {
  const days = Array.from({ length: 28 }, (_, i) => i + 1);
  return (
    <div className="w-48 rounded-lg border border-ink-200 bg-white p-2 dark:border-ink-800 dark:bg-ink-950">
      <div className="mb-1.5 flex items-center justify-between text-[10px]">
        <button type="button" aria-label="Previous month" className="text-ink-400 hover:text-ink-700 dark:hover:text-ink-200">
          <Icon icon={ArrowLeft} size={12} />
        </button>
        <span className="font-semibold">Apr 2026</span>
        <button type="button" aria-label="Next month" className="text-ink-400 hover:text-ink-700 dark:hover:text-ink-200">
          <Icon icon={ArrowRight} size={12} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-0.5 text-center text-[8px]">
        {["S","M","T","W","T","F","S"].map((d) => (
          <span key={d} className="py-0.5 font-medium text-ink-400">{d}</span>
        ))}
        {days.map((d) => (
          <span
            key={d}
            className={[
              "rounded py-0.5",
              d === 18 ? "bg-ink-900 font-bold text-white dark:bg-white dark:text-ink-900" : "text-ink-700 dark:text-ink-300",
            ].join(" ")}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}
