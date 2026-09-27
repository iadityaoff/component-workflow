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
  fullHeight,
}: {
  children: React.ReactNode;
  padded?: boolean;
  fullHeight?: boolean;
}) {
  return (
    <div
      className={[
        "preview-grid-bg flex w-full items-center justify-center overflow-hidden rounded-xl bg-ink-50 dark:bg-ink-900/60 transition-all",
        fullHeight ? "min-h-[380px] p-6 sm:p-10" : padded ? "h-44 p-4" : "h-44 p-6",
      ].join(" ")}
    >
      <div className="flex w-full max-w-full items-center justify-center">{children}</div>
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

export function ScrollHeroPreview({ full }: { full?: boolean }) {
  const [expanded, setExpanded] = React.useState(false);

  if (full) {
    return (
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-black text-white p-6 sm:p-8 border border-blue-500/20 shadow-2xl">
        <div className="mx-auto max-w-xl text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
            ✦ Scroll Media Expansion
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Captivate users from the first frame
          </h1>
          <p className="text-slate-400 max-w-md mx-auto text-xs sm:text-sm">
            Smooth media expansion container that responds to interaction and scroll depth.
          </p>
        </div>

        <div 
          onClick={() => setExpanded(!expanded)}
          className={`relative mx-auto mt-6 cursor-pointer overflow-hidden rounded-xl border border-white/15 transition-all duration-500 ease-out shadow-2xl ${
            expanded ? "max-w-xl h-64 ring-2 ring-blue-500/50" : "max-w-md h-40 hover:scale-[1.02]"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-purple-600/30 to-rose-600/40 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center space-y-2">
              <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto border border-white/30 shadow-lg">
                <span className="text-base text-white">▶</span>
              </div>
              <p className="text-xs font-medium text-white/90">
                {expanded ? "Click to collapse" : "Click to expand preview"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[280px] overflow-hidden rounded-xl border border-blue-500/20 bg-slate-950 p-3 text-center text-white shadow-xl">
      <span className="inline-block rounded-full bg-blue-500/20 px-2 py-0.5 text-[9px] font-semibold text-blue-400 border border-blue-500/30">
        ✦ Scroll Media Expansion
      </span>
      <p className="mt-1 text-xs font-bold truncate">Captivate users from frame one</p>
      <div className="relative mt-2 h-20 w-full overflow-hidden rounded-lg bg-gradient-to-tr from-blue-600/40 via-purple-600/30 to-rose-600/40 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
        <div className="h-7 w-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg text-[10px]">
          ▶
        </div>
      </div>
    </div>
  );
}

export function ShaderPreview() {
  return (
    <div className="relative h-28 w-full max-w-[260px] overflow-hidden rounded-xl border border-white/15 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-3 flex flex-col justify-between shadow-lg">
      <div className="flex justify-between items-center text-[9px] text-white/80 font-mono">
        <span>GLSL Shaders</span>
        <span className="rounded bg-white/20 px-1 py-0.2">WebGL</span>
      </div>
      <div className="h-12 w-full rounded-lg bg-gradient-to-r from-cyan-400/30 via-fuchsia-500/40 to-amber-300/30 backdrop-blur-sm border border-white/20 flex items-center justify-center">
        <div className="h-5 w-5 rounded-full bg-white/30 blur-[2px] animate-pulse" />
      </div>
    </div>
  );
}

export function LiquidMetalPreview() {
  return (
    <div className="relative h-28 w-full max-w-[260px] overflow-hidden rounded-xl border border-white/20 bg-gradient-to-tr from-slate-900 via-slate-800 to-zinc-900 p-3 flex flex-col justify-between shadow-lg">
      <span className="text-[10px] font-semibold text-zinc-300">Fluid Liquid Chrome</span>
      <div className="h-14 w-full rounded-lg bg-gradient-to-r from-slate-300 via-zinc-100 to-slate-400 p-0.5 shadow-inner">
        <div className="h-full w-full rounded-md bg-gradient-to-br from-zinc-800 via-zinc-900 to-black opacity-85 flex items-center justify-center text-[10px] text-zinc-300 font-mono">
          Reflective Mesh
        </div>
      </div>
    </div>
  );
}

export function BentoGridPreview() {
  return (
    <div className="grid grid-cols-2 gap-1.5 w-full max-w-[260px]">
      <div className="col-span-2 rounded-lg border border-ink-200 bg-white p-2 dark:border-ink-800 dark:bg-ink-950">
        <div className="flex items-center justify-between text-[10px] text-ink-500">
          <span>Active Users</span>
          <span className="text-emerald-500 font-bold">+18.4%</span>
        </div>
        <div className="mt-1 h-2 w-full rounded-full bg-ink-100 dark:bg-ink-800 overflow-hidden">
          <div className="h-full w-3/4 bg-blue-500 rounded-full" />
        </div>
      </div>
      <div className="rounded-lg border border-ink-200 bg-white p-2 dark:border-ink-800 dark:bg-ink-950 text-center">
        <p className="text-[9px] text-ink-400">Latency</p>
        <p className="text-xs font-bold text-ink-900 dark:text-white">12ms</p>
      </div>
      <div className="rounded-lg border border-ink-200 bg-white p-2 dark:border-ink-800 dark:bg-ink-950 text-center">
        <p className="text-[9px] text-ink-400">Uptime</p>
        <p className="text-xs font-bold text-emerald-500">99.9%</p>
      </div>
    </div>
  );
}

export function AsciiArtPreview() {
  const [artIdx, setArtIdx] = React.useState(0);
  const arts = [
    { title: "CYBER_CAT", color: "text-emerald-400", art: `  /\\_/\\  \n ( o.o ) \n  > ^ <  \n[REACT_99]` },
    { title: "3D_DONUT", color: "text-cyan-400", art: `   .---.  \n .' ... '. \n | |   | | \n  '.---.'  \n[TORUS_3D]` },
    { title: "KATANA", color: "text-violet-400", art: `    O     \n   /|\\    \n  /_|_\\   \n    |     \n [BLADE]  ` },
    { title: "INVADER", color: "text-amber-400", art: ` ▄██████▄ \n ██▀██▀██ \n ▀█▄▄▄▄█▀ \n [ARCADE] ` },
  ];
  const cur = arts[artIdx];

  return (
    <div 
      className="group relative w-full max-w-[260px] rounded-xl border border-emerald-500/30 bg-black/90 p-3 font-mono text-[9px] leading-tight shadow-xl cursor-pointer select-none transition-all hover:border-emerald-400/60 hover:shadow-emerald-500/10"
      onClick={() => setArtIdx((artIdx + 1) % arts.length)}
      title="Click to cycle ASCII art preview"
    >
      <div className="text-emerald-500/70 mb-1.5 flex items-center justify-between text-[8px] uppercase tracking-wider">
        <span className="flex items-center gap-1.5 font-bold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {cur.title}
        </span>
        <span className="rounded bg-emerald-500/10 px-1 py-0.5 text-[7px] text-emerald-400">click cycle ›</span>
      </div>
      <pre className={`text-[8.5px] leading-[10px] font-mono text-center font-bold transition-all ${cur.color}`}>
        {cur.art}
      </pre>
    </div>
  );
}

/* ---------- 21st.dev Live Button Components ---------- */

export function ShinyButtonPreview() {
  const [clicked, setClicked] = React.useState(false);
  return (
    <div className="flex w-full items-center justify-center p-3">
      <button
        type="button"
        onClick={() => { setClicked(true); setTimeout(() => setClicked(false), 1200); }}
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px] font-medium transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
      >
        <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-80 group-hover:opacity-100" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-900">
          <span className="relative z-10 flex items-center gap-2">
            <span>{clicked ? "Access Granted ✦" : "Get unlimited access"}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        </span>
      </button>
    </div>
  );
}

export function TextureButtonPreview() {
  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <div className="flex items-center gap-2">
        <button type="button" className="rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 px-3.5 py-1.5 text-xs font-medium text-white shadow-[0_3px_0_0_#09090b,inset_0_1px_0_0_rgba(255,255,255,0.2)] border border-zinc-700/80 active:translate-y-[2px] active:shadow-none transition-all">
          Primary
        </button>
        <button type="button" className="rounded-xl bg-gradient-to-b from-blue-500 to-blue-700 px-3.5 py-1.5 text-xs font-medium text-white shadow-[0_3px_0_0_#1e3a8a,inset_0_1px_0_0_rgba(255,255,255,0.3)] border border-blue-400 active:translate-y-[2px] active:shadow-none transition-all">
          Accent
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button type="button" className="rounded-xl bg-gradient-to-b from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 px-3 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 shadow-[0_2px_0_0_#cbd5e1,inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-[0_2px_0_0_#18181b] border border-zinc-300 dark:border-zinc-700 active:translate-y-[1px] active:shadow-none transition-all">
          Secondary
        </button>
        <button type="button" className="rounded-xl bg-gradient-to-b from-rose-500 to-rose-700 px-3 py-1 text-xs font-medium text-white shadow-[0_2px_0_0_#9f1239,inset_0_1px_0_0_rgba(255,255,255,0.3)] border border-rose-400 active:translate-y-[1px] active:shadow-none transition-all">
          Destructive
        </button>
      </div>
      <div className="flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-1 shadow-sm">
        <button type="button" className="rounded px-2 py-0.5 text-[10px] text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">‹</button>
        <button type="button" className="rounded px-2 py-0.5 text-[10px] text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">⌫</button>
        <button type="button" className="rounded px-2 py-0.5 text-[10px] text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">✕</button>
      </div>
    </div>
  );
}

export function EclipseButtonPreview() {
  return (
    <div className="flex flex-col items-center gap-2.5 py-1">
      <button type="button" className="group relative rounded-full bg-black px-6 py-1.5 text-xs font-semibold tracking-wider text-white shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-black dark:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
        PRIMARY
      </button>
      <button type="button" className="rounded-full border border-ink-300 dark:border-ink-700 bg-white/50 dark:bg-ink-900/50 px-6 py-1.5 text-xs font-semibold tracking-wider text-ink-800 dark:text-ink-200 transition-all hover:bg-ink-100 dark:hover:bg-ink-800">
        OUTLINE
      </button>
      <button type="button" className="text-xs font-semibold tracking-wider text-ink-500 hover:text-ink-900 dark:hover:text-white transition">
        GHOST
      </button>
      <button type="button" className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-5 py-1.5 text-xs font-semibold tracking-wider text-white shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all hover:bg-red-700 hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] active:scale-95">
        <span>🗑</span>
        <span>DELETE</span>
      </button>
    </div>
  );
}

export function LetterSwapButtonPreview() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [text1, setText1] = React.useState("Get started");
  const [text2, setText2] = React.useState("View source");

  function scramble(original: string, setter: (s: string) => void) {
    let iteration = 0;
    const interval = setInterval(() => {
      setter(
        original
          .split("")
          .map((char, index) => {
            if (index < iteration) return original[index];
            if (char === " ") return " ";
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      if (iteration >= original.length) {
        clearInterval(interval);
      }
      iteration += 1 / 2;
    }, 30);
  }

  return (
    <div className="flex flex-col items-center gap-3 py-3">
      <button
        type="button"
        onMouseEnter={() => scramble("Get started", setText1)}
        className="rounded-full bg-black dark:bg-white px-7 py-2.5 text-xs font-mono font-bold tracking-tight text-white dark:text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        {text1}
      </button>
      <button
        type="button"
        onMouseEnter={() => scramble("View source", setText2)}
        className="rounded-full border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-900 px-7 py-2 text-xs font-mono font-bold tracking-tight text-ink-900 dark:text-white shadow-sm transition-transform hover:scale-105 active:scale-95"
      >
        {text2}
      </button>
    </div>
  );
}

export function AppStoreButtonPreview() {
  return (
    <button
      type="button"
      className="group inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-black px-5 py-2.5 text-white shadow-xl transition-all hover:bg-zinc-900 hover:scale-[1.02] active:scale-95"
    >
      <svg className="h-6 w-6 fill-current" viewBox="0 0 170 170">
        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.08-7.7-7.85-12-14.31-6.19-9.35-11.1-20.15-14.73-32.41-3.63-12.26-5.45-23.75-5.45-34.46 0-14.63 3.82-26.69 11.45-36.19 7.63-9.5 17.1-14.34 28.41-14.52 4.8 0 10.11 1.25 15.93 3.75 5.82 2.5 9.71 3.82 11.67 3.96 1.76-.14 5.76-1.5 12.01-4.1 6.25-2.6 11.53-3.76 15.83-3.48 11.8.61 21.05 4.88 27.75 12.82-10.42 6.27-15.53 14.86-15.34 25.77.21 8.52 3.42 15.7 9.63 21.55 6.21 5.85 13.58 9.38 22.12 10.59-1.95 6.09-4.35 12.35-7.2 18.77zM119.22 33.15c0-6.68 2.37-13.06 7.1-19.14 4.73-6.08 10.74-10.3 18.03-12.66-.4 5.92-2.73 11.96-7 18.12-4.27 6.16-10.32 10.7-18.13 13.68z"/>
      </svg>
      <div className="text-left leading-tight">
        <p className="text-[9px] font-medium tracking-wider uppercase text-zinc-400">Download on the</p>
        <p className="text-sm font-bold tracking-tight text-white">App Store</p>
      </div>
    </button>
  );
}

export function CompactMessageButtonsPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 py-2 max-w-[280px]">
      <button type="button" className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition">
        message
      </button>
      <button type="button" className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 transition">
        <span>✉</span>
        <span>message</span>
      </button>
      <button type="button" className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition">
        <span>✉</span>
        <span>message</span>
      </button>
      <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-ink-300 dark:border-ink-700 bg-white/70 dark:bg-ink-900/70 px-3 py-1.5 text-xs font-semibold text-ink-700 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-800 transition">
        <span>✉</span>
        <span>message</span>
      </button>
    </div>
  );
}

export function HeroUIButtonGroupPreview() {
  return (
    <div className="flex flex-col items-center gap-2.5 py-1">
      <p className="text-[10px] text-ink-400 font-medium">With icons</p>
      <div className="inline-flex items-center rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-1 shadow-sm">
        <button type="button" className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 transition">
          <span>🌐</span> Search
        </button>
        <span className="h-4 w-[1px] bg-ink-200 dark:bg-ink-800" />
        <button type="button" className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 transition">
          <span>＋</span> Add
        </button>
        <span className="h-4 w-[1px] bg-ink-200 dark:bg-ink-800" />
        <button type="button" className="inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition">
          <span>🗑</span> Delete
        </button>
      </div>

      <p className="text-[10px] text-ink-400 font-medium mt-1">Icon only buttons</p>
      <div className="inline-flex items-center rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-1 shadow-sm">
        <button type="button" className="rounded-lg p-1.5 text-xs text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 transition">🌐</button>
        <span className="h-4 w-[1px] bg-ink-200 dark:bg-ink-800" />
        <button type="button" className="rounded-lg p-1.5 text-xs text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 transition">＋</button>
        <span className="h-4 w-[1px] bg-ink-200 dark:bg-ink-800" />
        <button type="button" className="rounded-lg p-1.5 text-xs text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 transition">🗑</button>
      </div>
    </div>
  );
}

export function NotificationButtonPreview() {
  return (
    <div className="flex items-center justify-center gap-3 py-3">
      <button type="button" className="relative rounded-full bg-ink-900 p-2.5 text-white shadow-md hover:scale-110 active:scale-95 transition dark:bg-white dark:text-ink-900">
        <span className="text-sm">🔔</span>
        <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-ink-950">
          5
        </span>
      </button>

      <button type="button" className="relative rounded-full bg-ink-900 p-2.5 text-white shadow-md hover:scale-110 active:scale-95 transition dark:bg-white dark:text-ink-900">
        <span className="text-sm">🔔</span>
        <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-indigo-600 px-1 text-[9px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-ink-950">
          12
        </span>
      </button>

      <button type="button" className="rounded-full bg-ink-900 p-2.5 text-white shadow-md hover:scale-110 active:scale-95 transition dark:bg-white dark:text-ink-900">
        <span className="text-sm">🔔</span>
      </button>
    </div>
  );
}

export function FlowButtonPreview() {
  return (
    <div className="flex items-center justify-center py-4">
      <button
        type="button"
        className="group relative inline-flex items-center gap-2 rounded-full border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-950 px-6 py-2.5 text-xs font-semibold text-ink-900 dark:text-white shadow-sm transition-all hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] active:scale-95"
      >
        <span>Flow Button</span>
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </button>
    </div>
  );
}

export function SubtextButtonPreview() {
  return (
    <div className="flex flex-col gap-2 py-2 w-full max-w-[240px]">
      <button type="button" className="flex items-center gap-3 rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-2.5 text-left shadow-sm hover:border-ink-400 dark:hover:border-ink-600 transition">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 text-sm">
          ⬇
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-ink-900 dark:text-white">Download</p>
          <p className="text-[10px] text-ink-500">File size: 12MB</p>
        </div>
      </button>
      <button type="button" className="flex items-center gap-3 rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-2.5 text-left shadow-sm hover:border-ink-400 dark:hover:border-ink-600 transition">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 text-sm">
          📄
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-ink-900 dark:text-white">Export CSV</p>
          <p className="text-[10px] text-ink-500">Rows: 12,341</p>
        </div>
      </button>
    </div>
  );
}

export function DashedButtonPreview() {
  return (
    <div className="flex items-center justify-center py-4">
      <button
        type="button"
        className="rounded-xl border-2 border-dashed border-ink-300 dark:border-ink-700 bg-transparent px-6 py-2.5 text-xs font-semibold text-ink-800 dark:text-ink-200 transition-all hover:border-ink-900 dark:hover:border-white hover:bg-ink-50 dark:hover:bg-ink-900 active:scale-95"
      >
        Button
      </button>
    </div>
  );
}

export function ButtonMatrixPreview() {
  return (
    <div className="grid grid-cols-3 gap-1.5 p-1 w-full max-w-[270px] text-center">
      <button type="button" className="rounded-md bg-ink-900 px-2 py-1 text-[10px] font-medium text-white shadow-sm">Primary</button>
      <button type="button" className="rounded-md border border-ink-200 bg-white dark:bg-ink-800 px-2 py-1 text-[10px] font-medium text-ink-800 dark:text-ink-200">Secondary</button>
      <button type="button" className="rounded-md px-2 py-1 text-[10px] font-medium text-ink-600 underline">Tertiary</button>
      <button type="button" className="rounded-md bg-red-600 px-2 py-1 text-[10px] font-medium text-white">Error</button>
      <button type="button" className="rounded-md bg-amber-500 px-2 py-1 text-[10px] font-medium text-white">Warning</button>
      <button type="button" className="rounded-full bg-ink-900 px-2 py-1 text-[10px] font-medium text-white">Rounded</button>
      <button type="button" className="rounded-md bg-ink-100 dark:bg-ink-800 px-2 py-1 text-[10px] text-ink-400">Loading...</button>
      <button type="button" disabled className="rounded-md bg-ink-100 dark:bg-ink-800 px-2 py-1 text-[10px] text-ink-400 opacity-50 cursor-not-allowed">Disabled</button>
      <button type="button" className="rounded-md bg-ink-900 px-2 py-1 text-[10px] font-medium text-white">← Icon</button>
    </div>
  );
}

export function SpotlightCardPreview() {
  const [pos, setPos] = React.useState({ x: 0, y: 0, opacity: 0 });
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  }
  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos((p) => ({ ...p, opacity: 0 }))}
      className="relative overflow-hidden rounded-2xl border border-ink-200/80 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#11121a] w-full max-w-[260px]"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: pos.opacity,
          background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, rgba(139, 92, 246, 0.2), transparent 80%)`,
        }}
      />
      <div className="relative z-10 space-y-2">
        <div className="h-7 w-7 rounded-lg bg-violet-500/15 text-violet-500 flex items-center justify-center text-xs font-bold">
          ✦
        </div>
        <h4 className="text-xs font-bold text-ink-900 dark:text-white">Spotlight Effect</h4>
        <p className="text-[11px] text-ink-500 dark:text-ink-400 line-clamp-2">
          Hover your mouse to see dynamic radial glow following the cursor.
        </p>
      </div>
    </div>
  );
}

export function BorderBeamPreview() {
  return (
    <div className="relative overflow-hidden rounded-2xl p-[1px] w-full max-w-[260px] bg-gradient-to-r from-transparent via-violet-500 to-transparent">
      <div className="rounded-[15px] bg-white p-5 dark:bg-[#0c0d12] relative z-10 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold text-violet-500 uppercase tracking-wider">Border Beam</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <h4 className="text-xs font-bold text-ink-900 dark:text-white">Infinite Laser Beam</h4>
        <p className="text-[11px] text-ink-500">Smooth animated traveling gradient around borders.</p>
      </div>
    </div>
  );
}

export function DockMenuPreview() {
  const items = ["🏠", "💬", "📁", "⚙️", "🚀", "🎵"];
  return (
    <div className="flex items-end justify-center gap-2 rounded-2xl border border-ink-200/80 bg-white/80 dark:border-white/10 dark:bg-ink-950/80 backdrop-blur px-3 py-2 shadow-lg">
      {items.map((emoji, i) => (
        <button
          key={i}
          type="button"
          className="grid h-8 w-8 place-items-center rounded-xl bg-ink-100 dark:bg-white/10 text-sm transition-all duration-200 hover:h-11 hover:w-11 hover:-translate-y-2 hover:bg-violet-500 hover:text-white shadow-sm"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}

export function TextShimmerPreview() {
  return (
    <div className="flex flex-col items-center justify-center p-3 text-center space-y-2">
      <span className="inline-block text-base sm:text-lg font-extrabold tracking-tight bg-gradient-to-r from-ink-900 via-violet-600 to-ink-900 dark:from-white dark:via-rose-400 dark:to-white bg-[200%_auto] bg-clip-text text-transparent animate-pulse">
        Crafted with Taste ✨
      </span>
      <span className="text-[10px] text-ink-400 font-mono uppercase tracking-widest">
        21st.dev Premium Typography
      </span>
    </div>
  );
}

export function MagneticButtonPreview() {
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
    setOffset({ x, y });
  }
  return (
    <button
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-violet-500/25 transition-transform duration-100 ease-out active:scale-95"
    >
      <span>🧲 Magnetic Button</span>
    </button>
  );
}


