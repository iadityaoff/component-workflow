import type { Author, ComponentItem } from "./component-types";

const AUTHORS: Author[] = [
  { id: "designali-in", name: "Ali Imam", handle: "designali-in", avatarText: "AI", avatarColor: "bg-purple-600" },
  { id: "cult-ui", name: "cult/ui", handle: "cult-ui", avatarText: "CU", avatarColor: "bg-zinc-800" },
  { id: "iamsatish4564", name: "Satish", handle: "iamsatish4564", avatarText: "S", avatarColor: "bg-amber-600" },
  { id: "cnippet-dev", name: "Cnippet", handle: "cnippet-dev", avatarText: "C", avatarColor: "bg-emerald-600" },
  { id: "efferd", name: "Efferd", handle: "efferd", avatarText: "EF", avatarColor: "bg-blue-500" },
  { id: "prebuiltui", name: "prebuiltui", handle: "prebuiltui", avatarText: "P", avatarColor: "bg-indigo-600" },
  { id: "hero-ui", name: "Hero Ui", handle: "hero_ui", avatarText: "HU", avatarColor: "bg-sky-600" },
  { id: "ruixen-ui", name: "Ruixen", handle: "ruixen.ui", avatarText: "RX", avatarColor: "bg-pink-600" },
  { id: "xubohuah", name: "Kain Xu", handle: "xubohuah", avatarText: "KX", avatarColor: "bg-teal-600" },
  { id: "sean0205", name: "Sean Hello", handle: "sean0205", avatarText: "SH", avatarColor: "bg-violet-600" },
  { id: "shugar", name: "tigran tumasov", handle: "shugar", avatarText: "TT", avatarColor: "bg-orange-600" },
  { id: "moumensoliman", name: "Moumen Soliman", handle: "moumensoliman", avatarText: "MS", avatarColor: "bg-rose-600" },
  { id: "shadcn", name: "shadcn", handle: "shadcn", avatarText: "S", avatarColor: "bg-black" },
  { id: "arunachalam", name: "Arunachalam", handle: "arunachalam", avatarText: "A", avatarColor: "bg-blue-600" },
  { id: "u1", name: "Aria Chen", handle: "ariac", avatarText: "AC", avatarColor: "bg-rose-500" },
  { id: "u2", name: "Mateo Rivera", handle: "mateor", avatarText: "MR", avatarColor: "bg-amber-500" },
  { id: "u3", name: "Priya Iyer", handle: "priya", avatarText: "PI", avatarColor: "bg-emerald-500" },
  { id: "u4", name: "Jonas Berg", handle: "jberg", avatarText: "JB", avatarColor: "bg-sky-500" },
  { id: "u5", name: "Lina Okafor", handle: "lina", avatarText: "LO", avatarColor: "bg-violet-500" },
  { id: "u6", name: "Devon Park", handle: "devp", avatarText: "DP", avatarColor: "bg-fuchsia-500" },
  { id: "u7", name: "Saanvi Rao", handle: "saanvi", avatarText: "SR", avatarColor: "bg-cyan-500" },
  { id: "u8", name: "Theo Müller", handle: "theom", avatarText: "TM", avatarColor: "bg-orange-500" },
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
  shinyButton: `export function ShinyButton({ children = "Get unlimited access", onClick, ...props }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1.5px] font-medium transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)]"
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-80 group-hover:opacity-100" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-900">
        <span className="relative z-10 flex items-center gap-2">
          <span>{children}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </span>
    </button>
  );
}`,
  textureButton: `export function TextureButton({ variant = "primary", children = "Primary", ...props }) {
  const styles = {
    primary: "bg-gradient-to-b from-zinc-800 to-zinc-950 text-white shadow-[0_3px_0_0_#09090b,inset_0_1px_0_0_rgba(255,255,255,0.2)] border border-zinc-700/80",
    accent: "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0_3px_0_0_#1e3a8a,inset_0_1px_0_0_rgba(255,255,255,0.3)] border border-blue-400",
    secondary: "bg-gradient-to-b from-zinc-100 to-zinc-200 text-zinc-800 shadow-[0_2px_0_0_#cbd5e1,inset_0_1px_0_0_rgba(255,255,255,0.8)] border border-zinc-300",
    destructive: "bg-gradient-to-b from-rose-500 to-rose-700 text-white shadow-[0_2px_0_0_#9f1239,inset_0_1px_0_0_rgba(255,255,255,0.3)] border border-rose-400"
  };

  return (
    <button
      type="button"
      className={\`rounded-xl px-4 py-2 text-sm font-medium active:translate-y-[2px] active:shadow-none transition-all \${styles[variant] || styles.primary}\`}
      {...props}
    >
      {children}
    </button>
  );
}`,
  eclipseButton: `export function EclipseButton({ variant = "primary", children = "PRIMARY", ...props }) {
  if (variant === "delete") {
    return (
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-2 text-xs font-semibold tracking-wider text-white shadow-[0_0_25px_rgba(239,68,68,0.5)] transition-all hover:bg-red-700 hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] active:scale-95"
        {...props}
      >
        <span>🗑</span>
        <span>{children}</span>
      </button>
    );
  }
  return (
    <button
      type="button"
      className="group relative rounded-full bg-black px-7 py-2 text-xs font-semibold tracking-wider text-white shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all hover:scale-105 active:scale-95 dark:bg-white dark:text-black dark:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
      {...props}
    >
      {children}
    </button>
  );
}`,
  letterSwapButton: `import React, { useState } from "react";

export function LetterSwapButton({ label = "Get started", ...props }) {
  const [text, setText] = useState(label);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function scramble() {
    let iteration = 0;
    const interval = setInterval(() => {
      setText(
        label
          .split("")
          .map((char, index) => {
            if (index < iteration) return label[index];
            if (char === " ") return " ";
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );
      if (iteration >= label.length) clearInterval(interval);
      iteration += 1 / 2;
    }, 30);
  }

  return (
    <button
      type="button"
      onMouseEnter={scramble}
      className="rounded-full bg-black dark:bg-white px-7 py-2.5 text-xs font-mono font-bold tracking-tight text-white dark:text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
      {...props}
    >
      {text}
    </button>
  );
}`,
  appStoreButton: `export function AppStoreButton({ ...props }) {
  return (
    <button
      type="button"
      className="group inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-black px-5 py-2.5 text-white shadow-xl transition-all hover:bg-zinc-900 hover:scale-[1.02] active:scale-95"
      {...props}
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
}`,
  flowButton: `export function FlowButton({ children = "Flow Button", ...props }) {
  return (
    <button
      type="button"
      className="group relative inline-flex items-center gap-2 rounded-full border border-ink-300 dark:border-ink-700 bg-white dark:bg-ink-950 px-6 py-2.5 text-sm font-semibold text-ink-900 dark:text-white shadow-sm transition-all hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] active:scale-95"
      {...props}
    >
      <span>{children}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </button>
  );
}`,
  notificationButton: `export function NotificationButton({ count = 5, ...props }) {
  return (
    <button
      type="button"
      className="relative rounded-full bg-ink-900 p-3 text-white shadow-md hover:scale-110 active:scale-95 transition dark:bg-white dark:text-ink-900"
      {...props}
    >
      <span className="text-base">🔔</span>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-rose-500 px-1 text-[9px] font-bold text-white shadow-sm ring-2 ring-white dark:ring-ink-950">
          {count}
        </span>
      )}
    </button>
  );
}`,
  subtextButton: `export function SubtextButton({ title = "Download", subtext = "File size: 12MB", icon = "⬇", ...props }) {
  return (
    <button
      type="button"
      className="flex items-center gap-3 rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-3 text-left shadow-sm hover:border-ink-400 dark:hover:border-ink-600 transition"
      {...props}
    >
      <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 text-base">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink-900 dark:text-white">{title}</p>
        <p className="text-xs text-ink-500">{subtext}</p>
      </div>
    </button>
  );
}`,
  herouiGroup: `export function HeroUIButtonGroup({ ...props }) {
  return (
    <div className="inline-flex items-center rounded-xl border border-ink-200 dark:border-ink-800 bg-white dark:bg-ink-900 p-1 shadow-sm" {...props}>
      <button type="button" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 transition">
        <span>🌐</span> Search
      </button>
      <span className="h-4 w-[1px] bg-ink-200 dark:bg-ink-800" />
      <button type="button" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-ink-700 dark:text-ink-300 hover:bg-ink-100 dark:hover:bg-ink-800 transition">
        <span>＋</span> Add
      </button>
      <span className="h-4 w-[1px] bg-ink-200 dark:bg-ink-800" />
      <button type="button" className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 transition">
        <span>🗑</span> Delete
      </button>
    </div>
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
  scrollHero: `import React, { useState } from "react";

export function ScrollMediaExpansionHero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-black text-white p-8">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
          ✦ Interactive Scroll Hero
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Captivate users from the first frame
        </h1>
        <p className="text-slate-400 max-w-lg mx-auto text-xs sm:text-sm">
          Smooth media expansion container that responds to interaction and scroll depth.
        </p>
      </div>

      <div 
        onClick={() => setExpanded(!expanded)}
        className={\`relative mx-auto mt-6 cursor-pointer overflow-hidden rounded-xl border border-white/15 transition-all duration-700 ease-out shadow-2xl \${
          expanded ? "max-w-3xl h-64 ring-2 ring-blue-500/50" : "max-w-md h-40 hover:scale-[1.02]"
        }\`}
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
  spotlightCard: `"use client";
import React, { useState, MouseEvent } from "react";

export function SpotlightCard({ children, className = "" }) {
  const [pos, setPos] = useState({ x: 0, y: 0, opacity: 0 });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top, opacity: 1 });
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos((p) => ({ ...p, opacity: 0 }))}
      className={\`relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 \${className}\`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: pos.opacity,
          background: \`radial-gradient(350px circle at \${pos.x}px \${pos.y}px, rgba(139, 92, 246, 0.15), transparent 80%)\`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}`,
  borderBeamCard: `"use client";
import React from "react";

export function BorderBeamCard({ title = "Border Beam", description = "Animated continuous traveling border laser." }) {
  return (
    <div className="relative overflow-hidden rounded-2xl p-[1.5px] bg-gradient-to-r from-transparent via-violet-500 to-transparent shadow-xl">
      <div className="rounded-[15px] bg-white p-6 dark:bg-zinc-950 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-violet-500">21st.dev</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{title}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
      </div>
    </div>
  );
}`,
  dockMenu: `"use client";
import React from "react";

export function DockMenu() {
  const items = [
    { label: "Home", icon: "🏠" },
    { label: "Chat", icon: "💬" },
    { label: "Files", icon: "📁" },
    { label: "Settings", icon: "⚙️" },
    { label: "Deploy", icon: "🚀" },
  ];

  return (
    <nav className="inline-flex items-end gap-3 rounded-2xl border border-zinc-200/80 bg-white/80 p-2.5 backdrop-blur-xl shadow-2xl dark:border-white/10 dark:bg-zinc-950/80">
      {items.map((item, i) => (
        <button
          key={i}
          type="button"
          aria-label={item.label}
          className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-100 dark:bg-white/10 text-base transition-all duration-200 hover:h-14 hover:w-14 hover:-translate-y-3 hover:bg-violet-600 hover:text-white shadow-sm"
        >
          {item.icon}
        </button>
      ))}
    </nav>
  );
}`,
  textShimmer: `export function TextShimmer({ text = "Crafted with Taste" }) {
  return (
    <h2 className="inline-block bg-gradient-to-r from-zinc-900 via-violet-500 to-zinc-900 dark:from-white dark:via-rose-400 dark:to-white bg-[200%_auto] bg-clip-text text-transparent font-extrabold text-3xl tracking-tight animate-pulse">
      {text}
    </h2>
  );
}`,
  magneticButton: `"use client";
import React, { useState, MouseEvent } from "react";

export function MagneticButton({ children = "Magnetic Button", onClick }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.4;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.4;
    setOffset({ x, y });
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      style={{ transform: \`translate3d(\${offset.x}px, \${offset.y}px, 0)\` }}
      className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform duration-100 ease-out active:scale-95"
    >
      {children}
    </button>
  );
}`,
};

export const COMPONENTS: ComponentItem[] = [
  c({
    id: "spotlight-card-01",
    title: "Spotlight Card",
    description: "A high-fidelity card component with dynamic mouse-tracking radial gradient glow and subtle borders.",
    categorySlug: "cards",
    tags: ["card", "spotlight", "glow", "radial", "cursor-tracking", "interactive"],
    code: CODE.spotlightCard,
    prompt: "A modern dark mode spotlight card that tracks cursor movement and displays a glowing ambient radial gradient following the mouse.",
    featured: 10,
    createdAt: daysAgo(0),
    likes: 4890,
    views: 45200,
    previewKind: "spotlight-card",
    authorIdx: 0,
  }),
  c({
    id: "border-beam-card-01",
    title: "Border Beam Card",
    description: "An animated card featuring an infinite glowing laser beam traveling along its borders with glassmorphism.",
    categorySlug: "cards",
    tags: ["card", "border-beam", "animation", "laser", "glow", "marketing"],
    code: CODE.borderBeamCard,
    prompt: "An animated border beam card with a dynamic moving gradient running along the perimeter of the card container.",
    featured: 10,
    createdAt: daysAgo(0),
    likes: 4210,
    views: 38900,
    previewKind: "border-beam",
    authorIdx: 1,
  }),
  c({
    id: "dock-menu-01",
    title: "macOS Interactive Dock",
    description: "A tactile macOS-inspired application dock with smooth cursor magnification and spring physics.",
    categorySlug: "docks",
    tags: ["dock", "macos", "navigation", "magnification", "spring", "menu"],
    code: CODE.dockMenu,
    prompt: "A macOS style dock menu with floating blur background and interactive icon magnification on mouse proximity.",
    featured: 10,
    createdAt: daysAgo(0),
    likes: 3950,
    views: 36700,
    previewKind: "dock-menu",
    authorIdx: 2,
  }),
  c({
    id: "text-shimmer-01",
    title: "Animated Text Shimmer",
    description: "Fluid multi-tone text gradient shimmer effect for high-impact hero headings and marketing titles.",
    categorySlug: "features",
    tags: ["text", "shimmer", "typography", "gradient", "hero", "animation"],
    code: CODE.textShimmer,
    prompt: "A text gradient shimmer component with sweeping highlight waves across the typography.",
    featured: 9,
    createdAt: daysAgo(0),
    likes: 3120,
    views: 29400,
    previewKind: "text-shimmer",
    authorIdx: 3,
  }),
  c({
    id: "btn-magnetic-01",
    title: "Magnetic Action Button",
    description: "Interactive button that pulls towards the cursor on hover using cursor physics.",
    categorySlug: "buttons",
    tags: ["button", "magnetic", "cursor", "physics", "spring", "cta"],
    code: CODE.magneticButton,
    prompt: "A magnetic cursor button that smoothly displaces in 2D space following the cursor coordinates on hover.",
    featured: 10,
    createdAt: daysAgo(0),
    likes: 4310,
    views: 40200,
    previewKind: "btn-magnetic",
    authorIdx: 4,
  }),
  c({
    id: "scroll-expansion-hero",
    title: "Scroll media expansion hero",
    description: "An interactive full-bleed hero that expands media smoothly as the user scrolls, with glassmorphic cards and dynamic typography.",
    categorySlug: "heroes",
    tags: ["hero", "scroll", "animation", "video", "interactive", "motion"],
    code: CODE.scrollHero,
    prompt:
      "A scroll media expansion hero section with a centered video or media container that expands on user scroll or click, framed by modern glowing gradient accents and clean headline typography.",
    featured: 10,
    createdAt: daysAgo(0),
    likes: 3420,
    views: 42100,
    previewKind: "scroll-hero",
    authorIdx: 13,
  }),
  c({
    id: "btn-shiny-01",
    title: "Shiny Button",
    description: "The component preserves all the original functionality including the animated conic gradients, shimmer effects, dot patterns, and hover states.",
    categorySlug: "buttons",
    tags: ["button", "shiny", "conic-gradient", "shimmer", "animated", "cta"],
    code: CODE.shinyButton,
    prompt: "An animated conic gradient shiny button with glossy glass styling and glowing light beam hover effects.",
    featured: 10,
    createdAt: daysAgo(0),
    likes: 4120,
    views: 39500,
    previewKind: "btn-shiny",
    authorIdx: 0,
  }),
  c({
    id: "btn-texture-01",
    title: "Texture Button",
    description: "A tactile button collection with numorphic undertones, bevel light reflections, and 3D depth.",
    categorySlug: "buttons",
    tags: ["button", "texture", "skeuomorphic", "tactile", "numorphic"],
    code: CODE.textureButton,
    prompt: "A 3D tactile skeuomorphic button family with top light edge highlight, inner bevels, and micro icon controls.",
    featured: 10,
    createdAt: daysAgo(0),
    likes: 3890,
    views: 34100,
    previewKind: "btn-texture",
    authorIdx: 1,
  }),
  c({
    id: "btn-eclipse-01",
    title: "Eclipse Button",
    description: "Here is Eclipse Button component featuring dark and crimson radial eclipse glow auras.",
    categorySlug: "buttons",
    tags: ["button", "eclipse", "glow", "pill", "destructive", "minimal"],
    code: CODE.eclipseButton,
    prompt: "Eclipse pill buttons featuring centered black and red action buttons with radial ambient eclipse aura glowing behind.",
    featured: 10,
    createdAt: daysAgo(0),
    likes: 3620,
    views: 31200,
    previewKind: "btn-eclipse",
    authorIdx: 2,
  }),
  c({
    id: "btn-letter-swap-01",
    title: "Random Letter Swap CTA Buttons",
    description: "Matrix-style random letter swap scramble animation on hover for engaging CTAs.",
    categorySlug: "buttons",
    tags: ["button", "letter-swap", "animation", "matrix", "scramble", "cnippet"],
    code: CODE.letterSwapButton,
    prompt: "Random letter swap scramble CTA buttons with dynamic character cycling on mouse hover.",
    featured: 10,
    createdAt: daysAgo(1),
    likes: 2980,
    views: 26700,
    previewKind: "btn-letter-swap",
    authorIdx: 3,
  }),
  c({
    id: "btn-app-store-01",
    title: "App Store Button",
    description: "Apple App Store download pill button with vector Apple mark and official typography hierarchy.",
    categorySlug: "buttons",
    tags: ["button", "app-store", "apple", "mobile", "badge", "download"],
    code: CODE.appStoreButton,
    prompt: "An official-style Apple App Store download badge button with white vector logo, uppercase download prompt, and bold brand typography.",
    featured: 10,
    createdAt: daysAgo(1),
    likes: 2740,
    views: 24500,
    previewKind: "btn-app-store",
    authorIdx: 4,
  }),
  c({
    id: "btn-compact-msg-01",
    title: "Button Ui",
    description: "Compact message action buttons with subtle icon placements for chat feeds and inboxes.",
    categorySlug: "buttons",
    tags: ["button", "message", "chat", "inbox", "prebuiltui"],
    code: `export function CompactMessageButtons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button className="rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition">
        message
      </button>
      <button className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 transition">
        <span>✉</span>
        <span>message</span>
      </button>
      <button className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition">
        <span>✉</span>
        <span>message</span>
      </button>
      <button className="inline-flex items-center gap-1.5 rounded-lg border border-ink-300 dark:border-ink-700 bg-white/70 dark:bg-ink-900/70 px-3 py-1.5 text-xs font-semibold text-ink-700 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-800 transition">
        <span>✉</span>
        <span>message</span>
      </button>
    </div>
  );
}`,
    prompt: "Four compact message buttons with solid navy, vibrant indigo with mail icon, blue with mail icon, and ghost pill variants.",
    featured: 10,
    createdAt: daysAgo(1),
    likes: 2590,
    views: 22800,
    previewKind: "btn-compact-msg",
    authorIdx: 5,
  }),
  c({
    id: "btn-heroui-group-01",
    title: "HeroUI Button Group",
    description: "Segmented button group with icons, divider lines, and standalone icon-only toolbar modes.",
    categorySlug: "buttons",
    tags: ["button", "button-group", "segmented", "toolbar", "heroui"],
    code: CODE.herouiGroup,
    prompt: "HeroUI segmented pill button group with dividers, supporting text+icon and icon-only configurations.",
    featured: 10,
    createdAt: daysAgo(2),
    likes: 2410,
    views: 21300,
    previewKind: "btn-heroui-group",
    authorIdx: 6,
  }),
  c({
    id: "btn-notification-01",
    title: "Notification Button",
    description: "Interactive circular button with dynamic badge counter overlays for alerts and unread counts.",
    categorySlug: "buttons",
    tags: ["button", "notification", "badge", "bell", "counter", "ruixen"],
    code: CODE.notificationButton,
    prompt: "Circular dark notification button with badge counter pills and subtle hover animations.",
    featured: 10,
    createdAt: daysAgo(2),
    likes: 2320,
    views: 19800,
    previewKind: "btn-notification-badge",
    authorIdx: 7,
  }),
  c({
    id: "btn-flow-01",
    title: "FlowButton",
    description: "Smooth animated gradient border flow button with hover arrow translate transition.",
    categorySlug: "buttons",
    tags: ["button", "flow", "gradient-border", "animation", "arrow"],
    code: CODE.flowButton,
    prompt: "Flow button with animated running border gradient and forward arrow with hover translation.",
    featured: 10,
    createdAt: daysAgo(2),
    likes: 2180,
    views: 18900,
    previewKind: "btn-flow",
    authorIdx: 8,
  }),
  c({
    id: "btn-subtext-01",
    title: "Icon Label Subtext Button",
    description: "Two-line action buttons with leading icon, bold primary action, and secondary metadata.",
    categorySlug: "buttons",
    tags: ["button", "subtext", "metadata", "download", "export", "ruixen"],
    code: CODE.subtextButton,
    prompt: "Action buttons featuring an icon on the left, primary action headline, and secondary helper subtext.",
    featured: 10,
    createdAt: daysAgo(3),
    likes: 1950,
    views: 17200,
    previewKind: "btn-subtext",
    authorIdx: 7,
  }),
  c({
    id: "btn-dashed-01",
    title: "Base Button",
    description: "Dashed border base button for add/upload placeholder actions with subtle hover state.",
    categorySlug: "buttons",
    tags: ["button", "dashed", "outline", "border", "minimal"],
    code: `export function DashedButton({ children = "Button", ...props }) {
  return (
    <button
      type="button"
      className="rounded-xl border-2 border-dashed border-ink-300 dark:border-ink-700 bg-transparent px-6 py-2.5 text-sm font-semibold text-ink-800 dark:text-ink-200 transition-all hover:border-ink-900 dark:hover:border-white hover:bg-ink-50 dark:hover:bg-ink-900 active:scale-95"
      {...props}
    >
      {children}
    </button>
  );
}`,
    prompt: "Minimal dashed border base button with subtle hover elevation for placeholder actions.",
    featured: 9,
    createdAt: daysAgo(3),
    likes: 1820,
    views: 16100,
    previewKind: "btn-dashed",
    authorIdx: 9,
  }),
  c({
    id: "btn-matrix-01",
    title: "Button",
    description: "Complete 9-variant button state matrix including Loading, Disabled, Warning, Error, and Icon.",
    categorySlug: "buttons",
    tags: ["button", "matrix", "variants", "states", "design-system"],
    code: `export function ButtonMatrix() {
  return (
    <div className="grid grid-cols-3 gap-2 p-2 max-w-sm text-center">
      <button className="rounded-md bg-ink-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm">Primary</button>
      <button className="rounded-md border border-ink-200 bg-white dark:bg-ink-800 px-3 py-1.5 text-xs font-medium text-ink-800 dark:text-ink-200">Secondary</button>
      <button className="rounded-md px-3 py-1.5 text-xs font-medium text-ink-600 underline">Tertiary</button>
      <button className="rounded-md bg-red-600 px-3 py-1.5 text-xs font-medium text-white">Error</button>
      <button className="rounded-md bg-amber-500 px-3 py-1.5 text-xs font-medium text-white">Warning</button>
      <button className="rounded-full bg-ink-900 px-3 py-1.5 text-xs font-medium text-white">Rounded</button>
      <button className="rounded-md bg-ink-100 dark:bg-ink-800 px-3 py-1.5 text-xs text-ink-400">Loading...</button>
      <button disabled className="rounded-md bg-ink-100 dark:bg-ink-800 px-3 py-1.5 text-xs text-ink-400 opacity-50 cursor-not-allowed">Disabled</button>
      <button className="rounded-md bg-ink-900 px-3 py-1.5 text-xs font-medium text-white">← Icon</button>
    </div>
  );
}`,
    prompt: "A 3x3 interactive design system button matrix displaying 9 variants: primary, secondary, tertiary, error, warning, rounded, loading, disabled, and with icon.",
    featured: 9,
    createdAt: daysAgo(3),
    likes: 1740,
    views: 15400,
    previewKind: "btn-matrix",
    authorIdx: 10,
  }),
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
    tags: ["ecommerce", "product", "card", "shop"],
    code: `export function ProductCard({
  title = "Apex Wireless Headphones",
  price = "$299",
  rating = 4.9,
  reviews = 142,
  badge = "Best Seller"
}) {
  return (
    <div className="group relative w-72 rounded-2xl border border-white/10 bg-slate-900/90 p-4 shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
      <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gradient-to-tr from-slate-800 to-slate-950 flex items-center justify-center">
        <span className="absolute left-2.5 top-2.5 rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-semibold text-blue-400 border border-blue-500/30">
          {badge}
        </span>
        <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:scale-110" />
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between text-xs">
          <span className="text-slate-400">Audio Pro</span>
          <span className="font-semibold text-amber-400">★ {rating} ({reviews})</span>
        </div>
        <h4 className="mt-1 text-sm font-bold text-white truncate">{title}</h4>
        
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Price</span>
            <span className="text-base font-black text-white">{price}</span>
          </div>
          <button className="rounded-xl bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-blue-600/30 transition hover:bg-blue-500 active:scale-95">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}`,
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
    code: `export function FloatingInput({
  label = "Work Email",
  placeholder = "name@company.com",
  type = "email"
}) {
  const [value, setValue] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);
  const isFilled = value.length > 0;

  return (
    <div className="relative w-full max-w-sm">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="peer h-12 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 pt-3 text-sm text-white placeholder-transparent shadow-sm transition-all focus:border-blue-500 focus:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/10"
        placeholder={placeholder}
      />
      <label
        className={\`pointer-events-none absolute left-4 transition-all duration-200 \${
          isFocused || isFilled
            ? "top-1.5 text-[10px] font-semibold text-blue-400"
            : "top-3.5 text-xs text-slate-400"
        }\`}
      >
        {label}
      </label>
    </div>
  );
}`,
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
    tags: ["avatar", "group", "social"],
    code: `export function AvatarStack({
  max = 4,
  users = [
    { name: "Sarah Connor", initials: "SC", color: "from-blue-500 to-indigo-600" },
    { name: "John Wick", initials: "JW", color: "from-amber-500 to-rose-600" },
    { name: "Elena Fisher", initials: "EF", color: "from-emerald-500 to-teal-600" },
    { name: "Nathan Drake", initials: "ND", color: "from-purple-500 to-violet-600" },
    { name: "Marcus Fenix", initials: "MF", color: "from-rose-500 to-orange-600" },
  ]
}) {
  const visible = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className="flex items-center -space-x-2.5">
      {visible.map((user, idx) => (
        <div
          key={idx}
          title={user.name}
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 bg-gradient-to-tr text-xs font-bold text-white shadow-md transition-transform duration-200 hover:z-10 hover:scale-110 cursor-pointer"
        >
          <div className={\`h-full w-full rounded-full bg-gradient-to-tr \${user.color} flex items-center justify-center\`}>
            {user.initials}
          </div>
        </div>
      ))}
      {remaining > 0 && (
        <div className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 bg-slate-800 text-[11px] font-bold text-slate-200 shadow-md transition-transform duration-200 hover:z-10 hover:scale-110 cursor-pointer">
          +{remaining}
        </div>
      )}
    </div>
  );
}`,
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
    code: `export function ErrorAlert({
  title = "Payment Authorization Failed",
  body = "Your card was declined by the issuer. Please verify your billing details or try another card."
}) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-rose-500/20 bg-rose-500/10 p-4 backdrop-blur-md">
      <div className="flex items-start gap-3">
        <div className="h-7 w-7 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 font-bold text-xs">
          ✕
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-bold text-rose-300">{title}</h4>
          <p className="mt-1 text-xs text-rose-200/80 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}`,
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
    code: `export function PillTabs({
  tabs = ["Overview", "Deployments", "Analytics", "Settings"]
}) {
  const [active, setActive] = React.useState(0);

  return (
    <div className="inline-flex rounded-xl border border-white/10 bg-slate-950/80 p-1 backdrop-blur-md">
      {tabs.map((tab, idx) => (
        <button
          key={tab}
          onClick={() => setActive(idx)}
          className={\`relative rounded-lg px-4 py-1.5 text-xs font-semibold transition-all duration-200 \${
            active === idx
              ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
              : "text-slate-400 hover:text-white"
          }\`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}`,
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
    code: `export function ToggleSwitch({
  label = "Enable Two-Factor Authentication",
  description = "Protect your account with an extra verification code."
}) {
  const [checked, setChecked] = React.useState(true);

  return (
    <div className="flex items-center justify-between gap-4 w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/60 p-4">
      <div>
        <span className="text-sm font-semibold text-white block">{label}</span>
        <span className="text-xs text-slate-400 mt-0.5 block">{description}</span>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => setChecked(!checked)}
        className={\`relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none \${
          checked ? "bg-blue-600" : "bg-slate-700"
        }\`}
      >
        <span
          className={\`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out \${
            checked ? "translate-x-5" : "translate-x-0"
          }\`}
        />
      </button>
    </div>
  );
}`,
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
    code: `export function ProgressBar({
  progress = 68,
  label = "Deploying to Production",
  status = "68%"
}) {
  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/90 p-5 backdrop-blur-md">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-white">{label}</span>
        <span className="text-xs font-mono font-bold text-blue-400">{status}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500 shadow-sm shadow-blue-500/50"
          style={{ width: \`\${progress}%\` }}
        />
      </div>
    </div>
  );
}`,
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
    code: `export function GradientHero() {
  return (
    <div className="relative overflow-hidden w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950 p-8 text-center shadow-2xl">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
        UIForge Design System
      </span>

      <h1 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-white">
        Craft modern web apps with{" "}
        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-rose-300 bg-clip-text text-transparent">
          production velocity
        </span>
      </h1>

      <p className="mx-auto mt-3 max-w-md text-xs text-slate-400 leading-relaxed">
        High-end React and Tailwind components curated for design engineers.
      </p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md shadow-blue-600/30 hover:bg-blue-500 transition">
          Browse Library
        </button>
        <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition">
          Documentation
        </button>
      </div>
    </div>
  );
}`,
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
    code: `export function TestimonialCard({
  author = "Guillermo Rauch",
  role = "CEO @ Vercel",
  quote = "UIForge has raised the baseline for modern UI engineering. The quality of components and instant prompt integration saves our team hundreds of hours."
}) {
  return (
    <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/80 p-5 shadow-xl backdrop-blur-md">
      <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
        ★★★★★
      </div>
      <p className="text-xs text-slate-200 leading-relaxed italic">
        "{quote}"
      </p>
      <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-3">
        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
          GR
        </div>
        <div>
          <h4 className="text-xs font-bold text-white">{author}</h4>
          <span className="text-[10px] text-slate-400">{role}</span>
        </div>
      </div>
    </div>
  );
}`,
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
    code: `export function FeatureGrid() {
  const features = [
    { title: "Zero Layout Shift", desc: "Skeleton loaders prevent jumps.", icon: "⚡" },
    { title: "Sandboxed iframes", desc: "Previews run in isolated environments.", icon: "🛡️" },
    { title: "AI Prompt Tuning", desc: "Prompts tuned for Claude Code and Cursor.", icon: "✨" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-2xl">
      {features.map((f, i) => (
        <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 hover:border-blue-500/40 transition">
          <div className="h-8 w-8 rounded-lg bg-blue-500/10 text-base flex items-center justify-center mb-2">
            {f.icon}
          </div>
          <h4 className="text-xs font-bold text-white">{f.title}</h4>
          <p className="mt-1 text-[11px] text-slate-400 leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}`,
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
    code: `export function DropdownMenu() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm hover:border-white/20 transition"
      >
        <span>Project Options</span>
        <span className="text-xs text-slate-400">▾</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-xl border border-white/10 bg-slate-900/95 p-1 shadow-2xl backdrop-blur-md z-30 divide-y divide-white/5">
          <div className="py-1">
            <button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1 text-xs text-slate-200 hover:bg-white/5 transition">
              <span>Edit File</span>
              <span className="text-[10px] text-slate-500 font-mono">⌘E</span>
            </button>
            <button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1 text-xs text-slate-200 hover:bg-white/5 transition">
              <span>Duplicate</span>
              <span className="text-[10px] text-slate-500 font-mono">⌘D</span>
            </button>
          </div>
          <div className="py-1">
            <button className="flex w-full items-center justify-between rounded-lg px-2.5 py-1 text-xs text-rose-400 hover:bg-rose-500/10 transition">
              <span>Delete</span>
              <span className="text-[10px] text-rose-400/60 font-mono">⌫</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}`,
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
    categorySlug: "texts",
    tags: ["code", "docs", "copy"],
    code: `export function CodeBlock({
  language = "tsx",
  code = \`import { Button } from "@/components/ui/button";\\n\\nexport function Action() {\\n  return <Button>Deploy</Button>;\\n}\`
}) {
  const [copied, setCopied] = React.useState(false);

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-950 overflow-hidden shadow-2xl font-mono">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-1.5 bg-slate-900/60">
        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{language}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
          }}
          className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-300 hover:bg-white/10 transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="p-3 text-xs text-slate-200 leading-relaxed overflow-x-auto">
        <pre>{code}</pre>
      </div>
    </div>
  );
}`,
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
    code: `export function Tooltip({
  text = "Copy to clipboard (⌘C)",
  children = "Hover over me"
}) {
  const [visible, setVisible] = React.useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <button className="rounded-xl border border-white/10 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-white shadow hover:border-white/20 transition">
        {children}
      </button>
      {visible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg bg-slate-800 text-[10px] font-semibold text-white whitespace-nowrap shadow-xl border border-white/10 z-30">
          {text}
        </div>
      )}
    </div>
  );
}`,
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
    code: `export function FAQAccordion() {
  const [openIdx, setOpenIdx] = React.useState(0);
  const items = [
    { q: "Can I use these components commercially?", a: "Yes, all components are licensed under MIT with unlimited commercial usage." },
    { q: "How do I install via CLI?", a: "Run npx @uiforge/cli add <name> to inject directly into your project." }
  ];

  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/60 divide-y divide-white/5 overflow-hidden">
      {items.map((item, idx) => (
        <div key={idx} className="p-3.5">
          <button
            onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
            className="flex w-full items-center justify-between text-left text-xs font-bold text-white"
          >
            <span>{item.q}</span>
            <span className="text-slate-400">{openIdx === idx ? "▴" : "▾"}</span>
          </button>
          {openIdx === idx && (
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}`,
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
    code: `export function CheckboxGroup() {
  const [checked, setChecked] = React.useState({ analytics: true, telemetry: false });

  return (
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-slate-900/80 p-4 space-y-2">
      <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">Preferences</h4>
      {[
        { id: "analytics", label: "Analytics tracking", desc: "Helps us improve performance" },
        { id: "telemetry", label: "Error telemetry", desc: "Sends anonymous stack traces" }
      ].map(item => (
        <label key={item.id} className="flex items-start gap-2.5 p-1.5 rounded-lg hover:bg-white/5 cursor-pointer">
          <input
            type="checkbox"
            checked={checked[item.id as keyof typeof checked]}
            onChange={() => setChecked(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof checked] }))}
            className="mt-0.5 h-3.5 w-3.5 rounded border-slate-700 bg-slate-800 text-blue-600"
          />
          <div>
            <span className="text-xs font-semibold text-white block">{item.label}</span>
            <span className="text-[10px] text-slate-400 block">{item.desc}</span>
          </div>
        </label>
      ))}
    </div>
  );
}`,
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
    code: `export function DashSidebarNav() {
  const [active, setActive] = React.useState("Dashboard");

  const items = [
    { label: "Dashboard", badge: undefined },
    { label: "Components", badge: "12" },
    { label: "Deployments", badge: "3" },
    { label: "Analytics", badge: undefined },
    { label: "Settings", badge: undefined },
  ];

  return (
    <div className="w-56 rounded-2xl border border-white/10 bg-slate-950 p-3 space-y-1">
      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest px-3 py-1 block">Menu</span>
      {items.map((item) => (
        <button
          key={item.label}
          onClick={() => setActive(item.label)}
          className={\`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold transition \${
            active === item.label
              ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
              : "text-slate-400 hover:bg-white/5 hover:text-white"
          }\`}
        >
          <span>{item.label}</span>
          {item.badge && (
            <span className={\`rounded-md px-1.5 py-0.5 text-[10px] font-mono \${
              active === item.label ? "bg-white/20 text-white" : "bg-white/5 text-slate-400"
            }\`}>
              {item.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}`,
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

