import type { VariantSpec } from "./base";
import { ago } from "./base";

export const GENERATED_VARIANTS: VariantSpec[] = [
  {
    id: "btn-solid-slate-1000",
    title: "Slate Solid Button",
    description: "A solid button in slate color.",
    categorySlug: "buttons",
    tags: ["button", "slate", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid slate button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-slate-1001",
    title: "Slate Outline Button",
    description: "An outline button in slate color.",
    categorySlug: "buttons",
    tags: ["button", "slate", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline slate button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500/50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-gray-1002",
    title: "Gray Solid Button",
    description: "A solid button in gray color.",
    categorySlug: "buttons",
    tags: ["button", "gray", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid gray button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-gray-1003",
    title: "Gray Outline Button",
    description: "An outline button in gray color.",
    categorySlug: "buttons",
    tags: ["button", "gray", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline gray button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-zinc-1004",
    title: "Zinc Solid Button",
    description: "A solid button in zinc color.",
    categorySlug: "buttons",
    tags: ["button", "zinc", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid zinc button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-zinc-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-zinc-1005",
    title: "Zinc Outline Button",
    description: "An outline button in zinc color.",
    categorySlug: "buttons",
    tags: ["button", "zinc", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline zinc button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-neutral-1006",
    title: "Neutral Solid Button",
    description: "A solid button in neutral color.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid neutral button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-neutral-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-neutral-1007",
    title: "Neutral Outline Button",
    description: "An outline button in neutral color.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline neutral button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-stone-1008",
    title: "Stone Solid Button",
    description: "A solid button in stone color.",
    categorySlug: "buttons",
    tags: ["button", "stone", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid stone button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-stone-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-stone-1009",
    title: "Stone Outline Button",
    description: "An outline button in stone color.",
    categorySlug: "buttons",
    tags: ["button", "stone", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline stone button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-500/50 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-red-1010",
    title: "Red Solid Button",
    description: "A solid button in red color.",
    categorySlug: "buttons",
    tags: ["button", "red", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid red button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-red-1011",
    title: "Red Outline Button",
    description: "An outline button in red color.",
    categorySlug: "buttons",
    tags: ["button", "red", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline red button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500/50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-orange-1012",
    title: "Orange Solid Button",
    description: "A solid button in orange color.",
    categorySlug: "buttons",
    tags: ["button", "orange", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid orange button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-orange-1013",
    title: "Orange Outline Button",
    description: "An outline button in orange color.",
    categorySlug: "buttons",
    tags: ["button", "orange", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline orange button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-orange-300 px-4 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-amber-1014",
    title: "Amber Solid Button",
    description: "A solid button in amber color.",
    categorySlug: "buttons",
    tags: ["button", "amber", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid amber button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-amber-1015",
    title: "Amber Outline Button",
    description: "An outline button in amber color.",
    categorySlug: "buttons",
    tags: ["button", "amber", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline amber button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-amber-300 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-yellow-1016",
    title: "Yellow Solid Button",
    description: "A solid button in yellow color.",
    categorySlug: "buttons",
    tags: ["button", "yellow", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid yellow button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-yellow-1017",
    title: "Yellow Outline Button",
    description: "An outline button in yellow color.",
    categorySlug: "buttons",
    tags: ["button", "yellow", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline yellow button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-yellow-300 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 dark:border-yellow-700 dark:text-yellow-300 dark:hover:bg-yellow-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-lime-1018",
    title: "Lime Solid Button",
    description: "A solid button in lime color.",
    categorySlug: "buttons",
    tags: ["button", "lime", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid lime button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-lime-1019",
    title: "Lime Outline Button",
    description: "An outline button in lime color.",
    categorySlug: "buttons",
    tags: ["button", "lime", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline lime button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-lime-300 px-4 py-2 text-sm font-medium text-lime-700 transition hover:bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500/50 dark:border-lime-700 dark:text-lime-300 dark:hover:bg-lime-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-green-1020",
    title: "Green Solid Button",
    description: "A solid button in green color.",
    categorySlug: "buttons",
    tags: ["button", "green", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid green button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-green-1021",
    title: "Green Outline Button",
    description: "An outline button in green color.",
    categorySlug: "buttons",
    tags: ["button", "green", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline green button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-green-300 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500/50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-emerald-1022",
    title: "Emerald Solid Button",
    description: "A solid button in emerald color.",
    categorySlug: "buttons",
    tags: ["button", "emerald", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid emerald button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-emerald-1023",
    title: "Emerald Outline Button",
    description: "An outline button in emerald color.",
    categorySlug: "buttons",
    tags: ["button", "emerald", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline emerald button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-emerald-300 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-teal-1024",
    title: "Teal Solid Button",
    description: "A solid button in teal color.",
    categorySlug: "buttons",
    tags: ["button", "teal", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid teal button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-teal-1025",
    title: "Teal Outline Button",
    description: "An outline button in teal color.",
    categorySlug: "buttons",
    tags: ["button", "teal", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline teal button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-teal-300 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 dark:border-teal-700 dark:text-teal-300 dark:hover:bg-teal-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-cyan-1026",
    title: "Cyan Solid Button",
    description: "A solid button in cyan color.",
    categorySlug: "buttons",
    tags: ["button", "cyan", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid cyan button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-cyan-1027",
    title: "Cyan Outline Button",
    description: "An outline button in cyan color.",
    categorySlug: "buttons",
    tags: ["button", "cyan", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline cyan button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-cyan-300 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:border-cyan-700 dark:text-cyan-300 dark:hover:bg-cyan-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-sky-1028",
    title: "Sky Solid Button",
    description: "A solid button in sky color.",
    categorySlug: "buttons",
    tags: ["button", "sky", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid sky button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-sky-1029",
    title: "Sky Outline Button",
    description: "An outline button in sky color.",
    categorySlug: "buttons",
    tags: ["button", "sky", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline sky button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-sky-300 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-sky-700 dark:text-sky-300 dark:hover:bg-sky-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-blue-1030",
    title: "Blue Solid Button",
    description: "A solid button in blue color.",
    categorySlug: "buttons",
    tags: ["button", "blue", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid blue button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-blue-1031",
    title: "Blue Outline Button",
    description: "An outline button in blue color.",
    categorySlug: "buttons",
    tags: ["button", "blue", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline blue button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-indigo-1032",
    title: "Indigo Solid Button",
    description: "A solid button in indigo color.",
    categorySlug: "buttons",
    tags: ["button", "indigo", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid indigo button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-indigo-1033",
    title: "Indigo Outline Button",
    description: "An outline button in indigo color.",
    categorySlug: "buttons",
    tags: ["button", "indigo", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline indigo button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-indigo-300 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-violet-1034",
    title: "Violet Solid Button",
    description: "A solid button in violet color.",
    categorySlug: "buttons",
    tags: ["button", "violet", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid violet button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-violet-1035",
    title: "Violet Outline Button",
    description: "An outline button in violet color.",
    categorySlug: "buttons",
    tags: ["button", "violet", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline violet button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-violet-300 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500/50 dark:border-violet-700 dark:text-violet-300 dark:hover:bg-violet-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-purple-1036",
    title: "Purple Solid Button",
    description: "A solid button in purple color.",
    categorySlug: "buttons",
    tags: ["button", "purple", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid purple button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-purple-1037",
    title: "Purple Outline Button",
    description: "An outline button in purple color.",
    categorySlug: "buttons",
    tags: ["button", "purple", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline purple button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-purple-300 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-fuchsia-1038",
    title: "Fuchsia Solid Button",
    description: "A solid button in fuchsia color.",
    categorySlug: "buttons",
    tags: ["button", "fuchsia", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid fuchsia button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-fuchsia-1039",
    title: "Fuchsia Outline Button",
    description: "An outline button in fuchsia color.",
    categorySlug: "buttons",
    tags: ["button", "fuchsia", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline fuchsia button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-fuchsia-300 px-4 py-2 text-sm font-medium text-fuchsia-700 transition hover:bg-fuchsia-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 dark:border-fuchsia-700 dark:text-fuchsia-300 dark:hover:bg-fuchsia-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-pink-1040",
    title: "Pink Solid Button",
    description: "A solid button in pink color.",
    categorySlug: "buttons",
    tags: ["button", "pink", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid pink button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-pink-1041",
    title: "Pink Outline Button",
    description: "An outline button in pink color.",
    categorySlug: "buttons",
    tags: ["button", "pink", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline pink button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-pink-300 px-4 py-2 text-sm font-medium text-pink-700 transition hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500/50 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-rose-1042",
    title: "Rose Solid Button",
    description: "A solid button in rose color.",
    categorySlug: "buttons",
    tags: ["button", "rose", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid rose button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-rose-1043",
    title: "Rose Outline Button",
    description: "An outline button in rose color.",
    categorySlug: "buttons",
    tags: ["button", "rose", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline rose button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-rose-300 px-4 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-500/50 dark:border-rose-700 dark:text-rose-300 dark:hover:bg-rose-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "badge-soft-slate-1044",
    title: "Slate Soft Badge",
    description: "A soft badge in slate color.",
    categorySlug: "badges",
    tags: ["badge", "slate", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft slate badge.",
    code: `export function Badge({ children = "slate" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-900/30 dark:text-slate-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-gray-1045",
    title: "Gray Soft Badge",
    description: "A soft badge in gray color.",
    categorySlug: "badges",
    tags: ["badge", "gray", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft gray badge.",
    code: `export function Badge({ children = "gray" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-zinc-1046",
    title: "Zinc Soft Badge",
    description: "A soft badge in zinc color.",
    categorySlug: "badges",
    tags: ["badge", "zinc", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft zinc badge.",
    code: `export function Badge({ children = "zinc" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-neutral-1047",
    title: "Neutral Soft Badge",
    description: "A soft badge in neutral color.",
    categorySlug: "badges",
    tags: ["badge", "neutral", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft neutral badge.",
    code: `export function Badge({ children = "neutral" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-stone-1048",
    title: "Stone Soft Badge",
    description: "A soft badge in stone color.",
    categorySlug: "badges",
    tags: ["badge", "stone", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft stone badge.",
    code: `export function Badge({ children = "stone" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-800 dark:bg-stone-900/30 dark:text-stone-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-red-1049",
    title: "Red Soft Badge",
    description: "A soft badge in red color.",
    categorySlug: "badges",
    tags: ["badge", "red", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft red badge.",
    code: `export function Badge({ children = "red" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-orange-1050",
    title: "Orange Soft Badge",
    description: "A soft badge in orange color.",
    categorySlug: "badges",
    tags: ["badge", "orange", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft orange badge.",
    code: `export function Badge({ children = "orange" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-amber-1051",
    title: "Amber Soft Badge",
    description: "A soft badge in amber color.",
    categorySlug: "badges",
    tags: ["badge", "amber", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft amber badge.",
    code: `export function Badge({ children = "amber" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-yellow-1052",
    title: "Yellow Soft Badge",
    description: "A soft badge in yellow color.",
    categorySlug: "badges",
    tags: ["badge", "yellow", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft yellow badge.",
    code: `export function Badge({ children = "yellow" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-lime-1053",
    title: "Lime Soft Badge",
    description: "A soft badge in lime color.",
    categorySlug: "badges",
    tags: ["badge", "lime", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft lime badge.",
    code: `export function Badge({ children = "lime" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-800 dark:bg-lime-900/30 dark:text-lime-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-green-1054",
    title: "Green Soft Badge",
    description: "A soft badge in green color.",
    categorySlug: "badges",
    tags: ["badge", "green", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft green badge.",
    code: `export function Badge({ children = "green" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-emerald-1055",
    title: "Emerald Soft Badge",
    description: "A soft badge in emerald color.",
    categorySlug: "badges",
    tags: ["badge", "emerald", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft emerald badge.",
    code: `export function Badge({ children = "emerald" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-teal-1056",
    title: "Teal Soft Badge",
    description: "A soft badge in teal color.",
    categorySlug: "badges",
    tags: ["badge", "teal", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft teal badge.",
    code: `export function Badge({ children = "teal" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-cyan-1057",
    title: "Cyan Soft Badge",
    description: "A soft badge in cyan color.",
    categorySlug: "badges",
    tags: ["badge", "cyan", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft cyan badge.",
    code: `export function Badge({ children = "cyan" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-sky-1058",
    title: "Sky Soft Badge",
    description: "A soft badge in sky color.",
    categorySlug: "badges",
    tags: ["badge", "sky", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft sky badge.",
    code: `export function Badge({ children = "sky" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-blue-1059",
    title: "Blue Soft Badge",
    description: "A soft badge in blue color.",
    categorySlug: "badges",
    tags: ["badge", "blue", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft blue badge.",
    code: `export function Badge({ children = "blue" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-indigo-1060",
    title: "Indigo Soft Badge",
    description: "A soft badge in indigo color.",
    categorySlug: "badges",
    tags: ["badge", "indigo", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft indigo badge.",
    code: `export function Badge({ children = "indigo" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-violet-1061",
    title: "Violet Soft Badge",
    description: "A soft badge in violet color.",
    categorySlug: "badges",
    tags: ["badge", "violet", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft violet badge.",
    code: `export function Badge({ children = "violet" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-purple-1062",
    title: "Purple Soft Badge",
    description: "A soft badge in purple color.",
    categorySlug: "badges",
    tags: ["badge", "purple", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft purple badge.",
    code: `export function Badge({ children = "purple" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-fuchsia-1063",
    title: "Fuchsia Soft Badge",
    description: "A soft badge in fuchsia color.",
    categorySlug: "badges",
    tags: ["badge", "fuchsia", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft fuchsia badge.",
    code: `export function Badge({ children = "fuchsia" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-xs font-medium text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-pink-1064",
    title: "Pink Soft Badge",
    description: "A soft badge in pink color.",
    categorySlug: "badges",
    tags: ["badge", "pink", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft pink badge.",
    code: `export function Badge({ children = "pink" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-rose-1065",
    title: "Rose Soft Badge",
    description: "A soft badge in rose color.",
    categorySlug: "badges",
    tags: ["badge", "rose", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft rose badge.",
    code: `export function Badge({ children = "rose" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "alert-soft-red-1066",
    title: "Red Soft Alert",
    description: "A soft alert in red color.",
    categorySlug: "alerts",
    tags: ["alert", "red", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft red alert.",
    code: `export function Alert({ title = "Attention", children = "This is a red alert message." }) {
  return (
    <div className="rounded-xl bg-red-50 p-4 dark:bg-red-950/20 text-sm text-red-800 dark:text-red-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-orange-1067",
    title: "Orange Soft Alert",
    description: "A soft alert in orange color.",
    categorySlug: "alerts",
    tags: ["alert", "orange", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft orange alert.",
    code: `export function Alert({ title = "Attention", children = "This is a orange alert message." }) {
  return (
    <div className="rounded-xl bg-orange-50 p-4 dark:bg-orange-950/20 text-sm text-orange-800 dark:text-orange-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-amber-1068",
    title: "Amber Soft Alert",
    description: "A soft alert in amber color.",
    categorySlug: "alerts",
    tags: ["alert", "amber", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft amber alert.",
    code: `export function Alert({ title = "Attention", children = "This is a amber alert message." }) {
  return (
    <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-950/20 text-sm text-amber-800 dark:text-amber-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-yellow-1069",
    title: "Yellow Soft Alert",
    description: "A soft alert in yellow color.",
    categorySlug: "alerts",
    tags: ["alert", "yellow", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft yellow alert.",
    code: `export function Alert({ title = "Attention", children = "This is a yellow alert message." }) {
  return (
    <div className="rounded-xl bg-yellow-50 p-4 dark:bg-yellow-950/20 text-sm text-yellow-800 dark:text-yellow-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-green-1070",
    title: "Green Soft Alert",
    description: "A soft alert in green color.",
    categorySlug: "alerts",
    tags: ["alert", "green", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft green alert.",
    code: `export function Alert({ title = "Attention", children = "This is a green alert message." }) {
  return (
    <div className="rounded-xl bg-green-50 p-4 dark:bg-green-950/20 text-sm text-green-800 dark:text-green-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-emerald-1071",
    title: "Emerald Soft Alert",
    description: "A soft alert in emerald color.",
    categorySlug: "alerts",
    tags: ["alert", "emerald", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft emerald alert.",
    code: `export function Alert({ title = "Attention", children = "This is a emerald alert message." }) {
  return (
    <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/20 text-sm text-emerald-800 dark:text-emerald-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-blue-1072",
    title: "Blue Soft Alert",
    description: "A soft alert in blue color.",
    categorySlug: "alerts",
    tags: ["alert", "blue", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft blue alert.",
    code: `export function Alert({ title = "Attention", children = "This is a blue alert message." }) {
  return (
    <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/20 text-sm text-blue-800 dark:text-blue-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-indigo-1073",
    title: "Indigo Soft Alert",
    description: "A soft alert in indigo color.",
    categorySlug: "alerts",
    tags: ["alert", "indigo", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft indigo alert.",
    code: `export function Alert({ title = "Attention", children = "This is a indigo alert message." }) {
  return (
    <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/20 text-sm text-indigo-800 dark:text-indigo-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-violet-1074",
    title: "Violet Soft Alert",
    description: "A soft alert in violet color.",
    categorySlug: "alerts",
    tags: ["alert", "violet", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft violet alert.",
    code: `export function Alert({ title = "Attention", children = "This is a violet alert message." }) {
  return (
    <div className="rounded-xl bg-violet-50 p-4 dark:bg-violet-950/20 text-sm text-violet-800 dark:text-violet-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-rose-1075",
    title: "Rose Soft Alert",
    description: "A soft alert in rose color.",
    categorySlug: "alerts",
    tags: ["alert", "rose", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft rose alert.",
    code: `export function Alert({ title = "Attention", children = "This is a rose alert message." }) {
  return (
    <div className="rounded-xl bg-rose-50 p-4 dark:bg-rose-950/20 text-sm text-rose-800 dark:text-rose-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "avatar-sm-1076",
    title: "Avatar SM",
    description: "Avatar component size sm.",
    categorySlug: "avatars",
    tags: ["avatar", "sm", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An avatar of size sm.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-md-1077",
    title: "Avatar MD",
    description: "Avatar component size md.",
    categorySlug: "avatars",
    tags: ["avatar", "md", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An avatar of size md.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-lg-1078",
    title: "Avatar LG",
    description: "Avatar component size lg.",
    categorySlug: "avatars",
    tags: ["avatar", "lg", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An avatar of size lg.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-xl-1079",
    title: "Avatar XL",
    description: "Avatar component size xl.",
    categorySlug: "avatars",
    tags: ["avatar", "xl", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An avatar of size xl.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-2xl-1080",
    title: "Avatar 2XL",
    description: "Avatar component size 2xl.",
    categorySlug: "avatars",
    tags: ["avatar", "2xl", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An avatar of size 2xl.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "btn-solid-slate-1081",
    title: "Slate Solid Button",
    description: "A solid button in slate color.",
    categorySlug: "buttons",
    tags: ["button", "slate", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid slate button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-slate-1082",
    title: "Slate Outline Button",
    description: "An outline button in slate color.",
    categorySlug: "buttons",
    tags: ["button", "slate", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline slate button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500/50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-gray-1083",
    title: "Gray Solid Button",
    description: "A solid button in gray color.",
    categorySlug: "buttons",
    tags: ["button", "gray", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid gray button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-gray-1084",
    title: "Gray Outline Button",
    description: "An outline button in gray color.",
    categorySlug: "buttons",
    tags: ["button", "gray", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline gray button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-zinc-1085",
    title: "Zinc Solid Button",
    description: "A solid button in zinc color.",
    categorySlug: "buttons",
    tags: ["button", "zinc", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid zinc button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-zinc-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-zinc-1086",
    title: "Zinc Outline Button",
    description: "An outline button in zinc color.",
    categorySlug: "buttons",
    tags: ["button", "zinc", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline zinc button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-neutral-1087",
    title: "Neutral Solid Button",
    description: "A solid button in neutral color.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid neutral button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-neutral-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-neutral-1088",
    title: "Neutral Outline Button",
    description: "An outline button in neutral color.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline neutral button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-stone-1089",
    title: "Stone Solid Button",
    description: "A solid button in stone color.",
    categorySlug: "buttons",
    tags: ["button", "stone", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid stone button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-stone-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-stone-1090",
    title: "Stone Outline Button",
    description: "An outline button in stone color.",
    categorySlug: "buttons",
    tags: ["button", "stone", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline stone button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-500/50 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-red-1091",
    title: "Red Solid Button",
    description: "A solid button in red color.",
    categorySlug: "buttons",
    tags: ["button", "red", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid red button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-red-1092",
    title: "Red Outline Button",
    description: "An outline button in red color.",
    categorySlug: "buttons",
    tags: ["button", "red", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline red button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500/50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-orange-1093",
    title: "Orange Solid Button",
    description: "A solid button in orange color.",
    categorySlug: "buttons",
    tags: ["button", "orange", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid orange button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-orange-1094",
    title: "Orange Outline Button",
    description: "An outline button in orange color.",
    categorySlug: "buttons",
    tags: ["button", "orange", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline orange button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-orange-300 px-4 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-amber-1095",
    title: "Amber Solid Button",
    description: "A solid button in amber color.",
    categorySlug: "buttons",
    tags: ["button", "amber", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid amber button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-amber-1096",
    title: "Amber Outline Button",
    description: "An outline button in amber color.",
    categorySlug: "buttons",
    tags: ["button", "amber", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline amber button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-amber-300 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-yellow-1097",
    title: "Yellow Solid Button",
    description: "A solid button in yellow color.",
    categorySlug: "buttons",
    tags: ["button", "yellow", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid yellow button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-yellow-1098",
    title: "Yellow Outline Button",
    description: "An outline button in yellow color.",
    categorySlug: "buttons",
    tags: ["button", "yellow", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline yellow button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-yellow-300 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 dark:border-yellow-700 dark:text-yellow-300 dark:hover:bg-yellow-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-lime-1099",
    title: "Lime Solid Button",
    description: "A solid button in lime color.",
    categorySlug: "buttons",
    tags: ["button", "lime", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid lime button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-lime-1100",
    title: "Lime Outline Button",
    description: "An outline button in lime color.",
    categorySlug: "buttons",
    tags: ["button", "lime", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline lime button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-lime-300 px-4 py-2 text-sm font-medium text-lime-700 transition hover:bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500/50 dark:border-lime-700 dark:text-lime-300 dark:hover:bg-lime-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-green-1101",
    title: "Green Solid Button",
    description: "A solid button in green color.",
    categorySlug: "buttons",
    tags: ["button", "green", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid green button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-green-1102",
    title: "Green Outline Button",
    description: "An outline button in green color.",
    categorySlug: "buttons",
    tags: ["button", "green", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline green button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-green-300 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500/50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-emerald-1103",
    title: "Emerald Solid Button",
    description: "A solid button in emerald color.",
    categorySlug: "buttons",
    tags: ["button", "emerald", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid emerald button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-emerald-1104",
    title: "Emerald Outline Button",
    description: "An outline button in emerald color.",
    categorySlug: "buttons",
    tags: ["button", "emerald", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline emerald button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-emerald-300 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-teal-1105",
    title: "Teal Solid Button",
    description: "A solid button in teal color.",
    categorySlug: "buttons",
    tags: ["button", "teal", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid teal button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-teal-1106",
    title: "Teal Outline Button",
    description: "An outline button in teal color.",
    categorySlug: "buttons",
    tags: ["button", "teal", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline teal button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-teal-300 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 dark:border-teal-700 dark:text-teal-300 dark:hover:bg-teal-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-cyan-1107",
    title: "Cyan Solid Button",
    description: "A solid button in cyan color.",
    categorySlug: "buttons",
    tags: ["button", "cyan", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid cyan button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-cyan-1108",
    title: "Cyan Outline Button",
    description: "An outline button in cyan color.",
    categorySlug: "buttons",
    tags: ["button", "cyan", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline cyan button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-cyan-300 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:border-cyan-700 dark:text-cyan-300 dark:hover:bg-cyan-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-sky-1109",
    title: "Sky Solid Button",
    description: "A solid button in sky color.",
    categorySlug: "buttons",
    tags: ["button", "sky", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid sky button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-sky-1110",
    title: "Sky Outline Button",
    description: "An outline button in sky color.",
    categorySlug: "buttons",
    tags: ["button", "sky", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline sky button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-sky-300 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-sky-700 dark:text-sky-300 dark:hover:bg-sky-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-blue-1111",
    title: "Blue Solid Button",
    description: "A solid button in blue color.",
    categorySlug: "buttons",
    tags: ["button", "blue", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid blue button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-blue-1112",
    title: "Blue Outline Button",
    description: "An outline button in blue color.",
    categorySlug: "buttons",
    tags: ["button", "blue", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline blue button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-indigo-1113",
    title: "Indigo Solid Button",
    description: "A solid button in indigo color.",
    categorySlug: "buttons",
    tags: ["button", "indigo", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid indigo button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-indigo-1114",
    title: "Indigo Outline Button",
    description: "An outline button in indigo color.",
    categorySlug: "buttons",
    tags: ["button", "indigo", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline indigo button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-indigo-300 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-violet-1115",
    title: "Violet Solid Button",
    description: "A solid button in violet color.",
    categorySlug: "buttons",
    tags: ["button", "violet", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid violet button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-violet-1116",
    title: "Violet Outline Button",
    description: "An outline button in violet color.",
    categorySlug: "buttons",
    tags: ["button", "violet", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline violet button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-violet-300 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500/50 dark:border-violet-700 dark:text-violet-300 dark:hover:bg-violet-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-purple-1117",
    title: "Purple Solid Button",
    description: "A solid button in purple color.",
    categorySlug: "buttons",
    tags: ["button", "purple", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid purple button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-purple-1118",
    title: "Purple Outline Button",
    description: "An outline button in purple color.",
    categorySlug: "buttons",
    tags: ["button", "purple", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline purple button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-purple-300 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-fuchsia-1119",
    title: "Fuchsia Solid Button",
    description: "A solid button in fuchsia color.",
    categorySlug: "buttons",
    tags: ["button", "fuchsia", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid fuchsia button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-fuchsia-1120",
    title: "Fuchsia Outline Button",
    description: "An outline button in fuchsia color.",
    categorySlug: "buttons",
    tags: ["button", "fuchsia", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline fuchsia button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-fuchsia-300 px-4 py-2 text-sm font-medium text-fuchsia-700 transition hover:bg-fuchsia-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 dark:border-fuchsia-700 dark:text-fuchsia-300 dark:hover:bg-fuchsia-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-pink-1121",
    title: "Pink Solid Button",
    description: "A solid button in pink color.",
    categorySlug: "buttons",
    tags: ["button", "pink", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid pink button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-pink-1122",
    title: "Pink Outline Button",
    description: "An outline button in pink color.",
    categorySlug: "buttons",
    tags: ["button", "pink", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline pink button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-pink-300 px-4 py-2 text-sm font-medium text-pink-700 transition hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500/50 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-rose-1123",
    title: "Rose Solid Button",
    description: "A solid button in rose color.",
    categorySlug: "buttons",
    tags: ["button", "rose", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid rose button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-rose-1124",
    title: "Rose Outline Button",
    description: "An outline button in rose color.",
    categorySlug: "buttons",
    tags: ["button", "rose", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline rose button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-rose-300 px-4 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-500/50 dark:border-rose-700 dark:text-rose-300 dark:hover:bg-rose-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "badge-soft-slate-1125",
    title: "Slate Soft Badge",
    description: "A soft badge in slate color.",
    categorySlug: "badges",
    tags: ["badge", "slate", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft slate badge.",
    code: `export function Badge({ children = "slate" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-900/30 dark:text-slate-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-gray-1126",
    title: "Gray Soft Badge",
    description: "A soft badge in gray color.",
    categorySlug: "badges",
    tags: ["badge", "gray", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft gray badge.",
    code: `export function Badge({ children = "gray" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-zinc-1127",
    title: "Zinc Soft Badge",
    description: "A soft badge in zinc color.",
    categorySlug: "badges",
    tags: ["badge", "zinc", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft zinc badge.",
    code: `export function Badge({ children = "zinc" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-neutral-1128",
    title: "Neutral Soft Badge",
    description: "A soft badge in neutral color.",
    categorySlug: "badges",
    tags: ["badge", "neutral", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft neutral badge.",
    code: `export function Badge({ children = "neutral" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-stone-1129",
    title: "Stone Soft Badge",
    description: "A soft badge in stone color.",
    categorySlug: "badges",
    tags: ["badge", "stone", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft stone badge.",
    code: `export function Badge({ children = "stone" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-800 dark:bg-stone-900/30 dark:text-stone-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-red-1130",
    title: "Red Soft Badge",
    description: "A soft badge in red color.",
    categorySlug: "badges",
    tags: ["badge", "red", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft red badge.",
    code: `export function Badge({ children = "red" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-orange-1131",
    title: "Orange Soft Badge",
    description: "A soft badge in orange color.",
    categorySlug: "badges",
    tags: ["badge", "orange", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft orange badge.",
    code: `export function Badge({ children = "orange" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-amber-1132",
    title: "Amber Soft Badge",
    description: "A soft badge in amber color.",
    categorySlug: "badges",
    tags: ["badge", "amber", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft amber badge.",
    code: `export function Badge({ children = "amber" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-yellow-1133",
    title: "Yellow Soft Badge",
    description: "A soft badge in yellow color.",
    categorySlug: "badges",
    tags: ["badge", "yellow", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft yellow badge.",
    code: `export function Badge({ children = "yellow" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-lime-1134",
    title: "Lime Soft Badge",
    description: "A soft badge in lime color.",
    categorySlug: "badges",
    tags: ["badge", "lime", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft lime badge.",
    code: `export function Badge({ children = "lime" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-800 dark:bg-lime-900/30 dark:text-lime-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-green-1135",
    title: "Green Soft Badge",
    description: "A soft badge in green color.",
    categorySlug: "badges",
    tags: ["badge", "green", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft green badge.",
    code: `export function Badge({ children = "green" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-emerald-1136",
    title: "Emerald Soft Badge",
    description: "A soft badge in emerald color.",
    categorySlug: "badges",
    tags: ["badge", "emerald", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft emerald badge.",
    code: `export function Badge({ children = "emerald" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-teal-1137",
    title: "Teal Soft Badge",
    description: "A soft badge in teal color.",
    categorySlug: "badges",
    tags: ["badge", "teal", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft teal badge.",
    code: `export function Badge({ children = "teal" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-cyan-1138",
    title: "Cyan Soft Badge",
    description: "A soft badge in cyan color.",
    categorySlug: "badges",
    tags: ["badge", "cyan", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft cyan badge.",
    code: `export function Badge({ children = "cyan" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-sky-1139",
    title: "Sky Soft Badge",
    description: "A soft badge in sky color.",
    categorySlug: "badges",
    tags: ["badge", "sky", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft sky badge.",
    code: `export function Badge({ children = "sky" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-blue-1140",
    title: "Blue Soft Badge",
    description: "A soft badge in blue color.",
    categorySlug: "badges",
    tags: ["badge", "blue", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft blue badge.",
    code: `export function Badge({ children = "blue" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-indigo-1141",
    title: "Indigo Soft Badge",
    description: "A soft badge in indigo color.",
    categorySlug: "badges",
    tags: ["badge", "indigo", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft indigo badge.",
    code: `export function Badge({ children = "indigo" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-violet-1142",
    title: "Violet Soft Badge",
    description: "A soft badge in violet color.",
    categorySlug: "badges",
    tags: ["badge", "violet", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft violet badge.",
    code: `export function Badge({ children = "violet" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-purple-1143",
    title: "Purple Soft Badge",
    description: "A soft badge in purple color.",
    categorySlug: "badges",
    tags: ["badge", "purple", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft purple badge.",
    code: `export function Badge({ children = "purple" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-fuchsia-1144",
    title: "Fuchsia Soft Badge",
    description: "A soft badge in fuchsia color.",
    categorySlug: "badges",
    tags: ["badge", "fuchsia", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft fuchsia badge.",
    code: `export function Badge({ children = "fuchsia" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-xs font-medium text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-pink-1145",
    title: "Pink Soft Badge",
    description: "A soft badge in pink color.",
    categorySlug: "badges",
    tags: ["badge", "pink", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft pink badge.",
    code: `export function Badge({ children = "pink" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-rose-1146",
    title: "Rose Soft Badge",
    description: "A soft badge in rose color.",
    categorySlug: "badges",
    tags: ["badge", "rose", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft rose badge.",
    code: `export function Badge({ children = "rose" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "alert-soft-red-1147",
    title: "Red Soft Alert",
    description: "A soft alert in red color.",
    categorySlug: "alerts",
    tags: ["alert", "red", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft red alert.",
    code: `export function Alert({ title = "Attention", children = "This is a red alert message." }) {
  return (
    <div className="rounded-xl bg-red-50 p-4 dark:bg-red-950/20 text-sm text-red-800 dark:text-red-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-orange-1148",
    title: "Orange Soft Alert",
    description: "A soft alert in orange color.",
    categorySlug: "alerts",
    tags: ["alert", "orange", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft orange alert.",
    code: `export function Alert({ title = "Attention", children = "This is a orange alert message." }) {
  return (
    <div className="rounded-xl bg-orange-50 p-4 dark:bg-orange-950/20 text-sm text-orange-800 dark:text-orange-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-amber-1149",
    title: "Amber Soft Alert",
    description: "A soft alert in amber color.",
    categorySlug: "alerts",
    tags: ["alert", "amber", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft amber alert.",
    code: `export function Alert({ title = "Attention", children = "This is a amber alert message." }) {
  return (
    <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-950/20 text-sm text-amber-800 dark:text-amber-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-yellow-1150",
    title: "Yellow Soft Alert",
    description: "A soft alert in yellow color.",
    categorySlug: "alerts",
    tags: ["alert", "yellow", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft yellow alert.",
    code: `export function Alert({ title = "Attention", children = "This is a yellow alert message." }) {
  return (
    <div className="rounded-xl bg-yellow-50 p-4 dark:bg-yellow-950/20 text-sm text-yellow-800 dark:text-yellow-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-green-1151",
    title: "Green Soft Alert",
    description: "A soft alert in green color.",
    categorySlug: "alerts",
    tags: ["alert", "green", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft green alert.",
    code: `export function Alert({ title = "Attention", children = "This is a green alert message." }) {
  return (
    <div className="rounded-xl bg-green-50 p-4 dark:bg-green-950/20 text-sm text-green-800 dark:text-green-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-emerald-1152",
    title: "Emerald Soft Alert",
    description: "A soft alert in emerald color.",
    categorySlug: "alerts",
    tags: ["alert", "emerald", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft emerald alert.",
    code: `export function Alert({ title = "Attention", children = "This is a emerald alert message." }) {
  return (
    <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/20 text-sm text-emerald-800 dark:text-emerald-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-blue-1153",
    title: "Blue Soft Alert",
    description: "A soft alert in blue color.",
    categorySlug: "alerts",
    tags: ["alert", "blue", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft blue alert.",
    code: `export function Alert({ title = "Attention", children = "This is a blue alert message." }) {
  return (
    <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/20 text-sm text-blue-800 dark:text-blue-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-indigo-1154",
    title: "Indigo Soft Alert",
    description: "A soft alert in indigo color.",
    categorySlug: "alerts",
    tags: ["alert", "indigo", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft indigo alert.",
    code: `export function Alert({ title = "Attention", children = "This is a indigo alert message." }) {
  return (
    <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/20 text-sm text-indigo-800 dark:text-indigo-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-violet-1155",
    title: "Violet Soft Alert",
    description: "A soft alert in violet color.",
    categorySlug: "alerts",
    tags: ["alert", "violet", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft violet alert.",
    code: `export function Alert({ title = "Attention", children = "This is a violet alert message." }) {
  return (
    <div className="rounded-xl bg-violet-50 p-4 dark:bg-violet-950/20 text-sm text-violet-800 dark:text-violet-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-rose-1156",
    title: "Rose Soft Alert",
    description: "A soft alert in rose color.",
    categorySlug: "alerts",
    tags: ["alert", "rose", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft rose alert.",
    code: `export function Alert({ title = "Attention", children = "This is a rose alert message." }) {
  return (
    <div className="rounded-xl bg-rose-50 p-4 dark:bg-rose-950/20 text-sm text-rose-800 dark:text-rose-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "avatar-sm-1157",
    title: "Avatar SM",
    description: "Avatar component size sm.",
    categorySlug: "avatars",
    tags: ["avatar", "sm", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An avatar of size sm.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-md-1158",
    title: "Avatar MD",
    description: "Avatar component size md.",
    categorySlug: "avatars",
    tags: ["avatar", "md", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An avatar of size md.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-lg-1159",
    title: "Avatar LG",
    description: "Avatar component size lg.",
    categorySlug: "avatars",
    tags: ["avatar", "lg", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An avatar of size lg.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-xl-1160",
    title: "Avatar XL",
    description: "Avatar component size xl.",
    categorySlug: "avatars",
    tags: ["avatar", "xl", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An avatar of size xl.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-2xl-1161",
    title: "Avatar 2XL",
    description: "Avatar component size 2xl.",
    categorySlug: "avatars",
    tags: ["avatar", "2xl", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An avatar of size 2xl.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "btn-solid-slate-1162",
    title: "Slate Solid Button",
    description: "A solid button in slate color.",
    categorySlug: "buttons",
    tags: ["button", "slate", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid slate button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-slate-1163",
    title: "Slate Outline Button",
    description: "An outline button in slate color.",
    categorySlug: "buttons",
    tags: ["button", "slate", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline slate button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500/50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-gray-1164",
    title: "Gray Solid Button",
    description: "A solid button in gray color.",
    categorySlug: "buttons",
    tags: ["button", "gray", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid gray button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-gray-1165",
    title: "Gray Outline Button",
    description: "An outline button in gray color.",
    categorySlug: "buttons",
    tags: ["button", "gray", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline gray button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-zinc-1166",
    title: "Zinc Solid Button",
    description: "A solid button in zinc color.",
    categorySlug: "buttons",
    tags: ["button", "zinc", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid zinc button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-zinc-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-zinc-1167",
    title: "Zinc Outline Button",
    description: "An outline button in zinc color.",
    categorySlug: "buttons",
    tags: ["button", "zinc", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline zinc button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-neutral-1168",
    title: "Neutral Solid Button",
    description: "A solid button in neutral color.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid neutral button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-neutral-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-neutral-1169",
    title: "Neutral Outline Button",
    description: "An outline button in neutral color.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline neutral button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-stone-1170",
    title: "Stone Solid Button",
    description: "A solid button in stone color.",
    categorySlug: "buttons",
    tags: ["button", "stone", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid stone button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-stone-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-stone-1171",
    title: "Stone Outline Button",
    description: "An outline button in stone color.",
    categorySlug: "buttons",
    tags: ["button", "stone", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline stone button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-500/50 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-red-1172",
    title: "Red Solid Button",
    description: "A solid button in red color.",
    categorySlug: "buttons",
    tags: ["button", "red", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid red button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-red-1173",
    title: "Red Outline Button",
    description: "An outline button in red color.",
    categorySlug: "buttons",
    tags: ["button", "red", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline red button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500/50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-orange-1174",
    title: "Orange Solid Button",
    description: "A solid button in orange color.",
    categorySlug: "buttons",
    tags: ["button", "orange", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid orange button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-orange-1175",
    title: "Orange Outline Button",
    description: "An outline button in orange color.",
    categorySlug: "buttons",
    tags: ["button", "orange", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline orange button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-orange-300 px-4 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-amber-1176",
    title: "Amber Solid Button",
    description: "A solid button in amber color.",
    categorySlug: "buttons",
    tags: ["button", "amber", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid amber button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-amber-1177",
    title: "Amber Outline Button",
    description: "An outline button in amber color.",
    categorySlug: "buttons",
    tags: ["button", "amber", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline amber button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-amber-300 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-yellow-1178",
    title: "Yellow Solid Button",
    description: "A solid button in yellow color.",
    categorySlug: "buttons",
    tags: ["button", "yellow", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid yellow button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-yellow-1179",
    title: "Yellow Outline Button",
    description: "An outline button in yellow color.",
    categorySlug: "buttons",
    tags: ["button", "yellow", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline yellow button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-yellow-300 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 dark:border-yellow-700 dark:text-yellow-300 dark:hover:bg-yellow-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-lime-1180",
    title: "Lime Solid Button",
    description: "A solid button in lime color.",
    categorySlug: "buttons",
    tags: ["button", "lime", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid lime button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-lime-1181",
    title: "Lime Outline Button",
    description: "An outline button in lime color.",
    categorySlug: "buttons",
    tags: ["button", "lime", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline lime button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-lime-300 px-4 py-2 text-sm font-medium text-lime-700 transition hover:bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500/50 dark:border-lime-700 dark:text-lime-300 dark:hover:bg-lime-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-green-1182",
    title: "Green Solid Button",
    description: "A solid button in green color.",
    categorySlug: "buttons",
    tags: ["button", "green", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid green button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-green-1183",
    title: "Green Outline Button",
    description: "An outline button in green color.",
    categorySlug: "buttons",
    tags: ["button", "green", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline green button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-green-300 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500/50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-emerald-1184",
    title: "Emerald Solid Button",
    description: "A solid button in emerald color.",
    categorySlug: "buttons",
    tags: ["button", "emerald", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid emerald button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-emerald-1185",
    title: "Emerald Outline Button",
    description: "An outline button in emerald color.",
    categorySlug: "buttons",
    tags: ["button", "emerald", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline emerald button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-emerald-300 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-teal-1186",
    title: "Teal Solid Button",
    description: "A solid button in teal color.",
    categorySlug: "buttons",
    tags: ["button", "teal", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid teal button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-teal-1187",
    title: "Teal Outline Button",
    description: "An outline button in teal color.",
    categorySlug: "buttons",
    tags: ["button", "teal", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline teal button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-teal-300 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 dark:border-teal-700 dark:text-teal-300 dark:hover:bg-teal-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-cyan-1188",
    title: "Cyan Solid Button",
    description: "A solid button in cyan color.",
    categorySlug: "buttons",
    tags: ["button", "cyan", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid cyan button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-cyan-1189",
    title: "Cyan Outline Button",
    description: "An outline button in cyan color.",
    categorySlug: "buttons",
    tags: ["button", "cyan", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline cyan button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-cyan-300 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:border-cyan-700 dark:text-cyan-300 dark:hover:bg-cyan-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-sky-1190",
    title: "Sky Solid Button",
    description: "A solid button in sky color.",
    categorySlug: "buttons",
    tags: ["button", "sky", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid sky button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-sky-1191",
    title: "Sky Outline Button",
    description: "An outline button in sky color.",
    categorySlug: "buttons",
    tags: ["button", "sky", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline sky button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-sky-300 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-sky-700 dark:text-sky-300 dark:hover:bg-sky-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-blue-1192",
    title: "Blue Solid Button",
    description: "A solid button in blue color.",
    categorySlug: "buttons",
    tags: ["button", "blue", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid blue button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-blue-1193",
    title: "Blue Outline Button",
    description: "An outline button in blue color.",
    categorySlug: "buttons",
    tags: ["button", "blue", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline blue button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-indigo-1194",
    title: "Indigo Solid Button",
    description: "A solid button in indigo color.",
    categorySlug: "buttons",
    tags: ["button", "indigo", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid indigo button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-indigo-1195",
    title: "Indigo Outline Button",
    description: "An outline button in indigo color.",
    categorySlug: "buttons",
    tags: ["button", "indigo", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline indigo button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-indigo-300 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-violet-1196",
    title: "Violet Solid Button",
    description: "A solid button in violet color.",
    categorySlug: "buttons",
    tags: ["button", "violet", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid violet button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-violet-1197",
    title: "Violet Outline Button",
    description: "An outline button in violet color.",
    categorySlug: "buttons",
    tags: ["button", "violet", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline violet button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-violet-300 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500/50 dark:border-violet-700 dark:text-violet-300 dark:hover:bg-violet-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-purple-1198",
    title: "Purple Solid Button",
    description: "A solid button in purple color.",
    categorySlug: "buttons",
    tags: ["button", "purple", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid purple button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-purple-1199",
    title: "Purple Outline Button",
    description: "An outline button in purple color.",
    categorySlug: "buttons",
    tags: ["button", "purple", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline purple button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-purple-300 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-fuchsia-1200",
    title: "Fuchsia Solid Button",
    description: "A solid button in fuchsia color.",
    categorySlug: "buttons",
    tags: ["button", "fuchsia", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid fuchsia button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-fuchsia-1201",
    title: "Fuchsia Outline Button",
    description: "An outline button in fuchsia color.",
    categorySlug: "buttons",
    tags: ["button", "fuchsia", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline fuchsia button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-fuchsia-300 px-4 py-2 text-sm font-medium text-fuchsia-700 transition hover:bg-fuchsia-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 dark:border-fuchsia-700 dark:text-fuchsia-300 dark:hover:bg-fuchsia-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-pink-1202",
    title: "Pink Solid Button",
    description: "A solid button in pink color.",
    categorySlug: "buttons",
    tags: ["button", "pink", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid pink button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-pink-1203",
    title: "Pink Outline Button",
    description: "An outline button in pink color.",
    categorySlug: "buttons",
    tags: ["button", "pink", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline pink button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-pink-300 px-4 py-2 text-sm font-medium text-pink-700 transition hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500/50 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-rose-1204",
    title: "Rose Solid Button",
    description: "A solid button in rose color.",
    categorySlug: "buttons",
    tags: ["button", "rose", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid rose button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-rose-1205",
    title: "Rose Outline Button",
    description: "An outline button in rose color.",
    categorySlug: "buttons",
    tags: ["button", "rose", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline rose button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-rose-300 px-4 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-500/50 dark:border-rose-700 dark:text-rose-300 dark:hover:bg-rose-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "badge-soft-slate-1206",
    title: "Slate Soft Badge",
    description: "A soft badge in slate color.",
    categorySlug: "badges",
    tags: ["badge", "slate", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft slate badge.",
    code: `export function Badge({ children = "slate" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-900/30 dark:text-slate-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-gray-1207",
    title: "Gray Soft Badge",
    description: "A soft badge in gray color.",
    categorySlug: "badges",
    tags: ["badge", "gray", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft gray badge.",
    code: `export function Badge({ children = "gray" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-zinc-1208",
    title: "Zinc Soft Badge",
    description: "A soft badge in zinc color.",
    categorySlug: "badges",
    tags: ["badge", "zinc", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft zinc badge.",
    code: `export function Badge({ children = "zinc" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-neutral-1209",
    title: "Neutral Soft Badge",
    description: "A soft badge in neutral color.",
    categorySlug: "badges",
    tags: ["badge", "neutral", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft neutral badge.",
    code: `export function Badge({ children = "neutral" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-stone-1210",
    title: "Stone Soft Badge",
    description: "A soft badge in stone color.",
    categorySlug: "badges",
    tags: ["badge", "stone", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft stone badge.",
    code: `export function Badge({ children = "stone" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-800 dark:bg-stone-900/30 dark:text-stone-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-red-1211",
    title: "Red Soft Badge",
    description: "A soft badge in red color.",
    categorySlug: "badges",
    tags: ["badge", "red", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft red badge.",
    code: `export function Badge({ children = "red" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-orange-1212",
    title: "Orange Soft Badge",
    description: "A soft badge in orange color.",
    categorySlug: "badges",
    tags: ["badge", "orange", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft orange badge.",
    code: `export function Badge({ children = "orange" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-amber-1213",
    title: "Amber Soft Badge",
    description: "A soft badge in amber color.",
    categorySlug: "badges",
    tags: ["badge", "amber", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft amber badge.",
    code: `export function Badge({ children = "amber" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-yellow-1214",
    title: "Yellow Soft Badge",
    description: "A soft badge in yellow color.",
    categorySlug: "badges",
    tags: ["badge", "yellow", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft yellow badge.",
    code: `export function Badge({ children = "yellow" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-lime-1215",
    title: "Lime Soft Badge",
    description: "A soft badge in lime color.",
    categorySlug: "badges",
    tags: ["badge", "lime", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft lime badge.",
    code: `export function Badge({ children = "lime" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-800 dark:bg-lime-900/30 dark:text-lime-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-green-1216",
    title: "Green Soft Badge",
    description: "A soft badge in green color.",
    categorySlug: "badges",
    tags: ["badge", "green", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft green badge.",
    code: `export function Badge({ children = "green" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-emerald-1217",
    title: "Emerald Soft Badge",
    description: "A soft badge in emerald color.",
    categorySlug: "badges",
    tags: ["badge", "emerald", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft emerald badge.",
    code: `export function Badge({ children = "emerald" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-teal-1218",
    title: "Teal Soft Badge",
    description: "A soft badge in teal color.",
    categorySlug: "badges",
    tags: ["badge", "teal", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft teal badge.",
    code: `export function Badge({ children = "teal" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-cyan-1219",
    title: "Cyan Soft Badge",
    description: "A soft badge in cyan color.",
    categorySlug: "badges",
    tags: ["badge", "cyan", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft cyan badge.",
    code: `export function Badge({ children = "cyan" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-sky-1220",
    title: "Sky Soft Badge",
    description: "A soft badge in sky color.",
    categorySlug: "badges",
    tags: ["badge", "sky", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft sky badge.",
    code: `export function Badge({ children = "sky" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-blue-1221",
    title: "Blue Soft Badge",
    description: "A soft badge in blue color.",
    categorySlug: "badges",
    tags: ["badge", "blue", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft blue badge.",
    code: `export function Badge({ children = "blue" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-indigo-1222",
    title: "Indigo Soft Badge",
    description: "A soft badge in indigo color.",
    categorySlug: "badges",
    tags: ["badge", "indigo", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft indigo badge.",
    code: `export function Badge({ children = "indigo" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-violet-1223",
    title: "Violet Soft Badge",
    description: "A soft badge in violet color.",
    categorySlug: "badges",
    tags: ["badge", "violet", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft violet badge.",
    code: `export function Badge({ children = "violet" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-purple-1224",
    title: "Purple Soft Badge",
    description: "A soft badge in purple color.",
    categorySlug: "badges",
    tags: ["badge", "purple", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft purple badge.",
    code: `export function Badge({ children = "purple" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-fuchsia-1225",
    title: "Fuchsia Soft Badge",
    description: "A soft badge in fuchsia color.",
    categorySlug: "badges",
    tags: ["badge", "fuchsia", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft fuchsia badge.",
    code: `export function Badge({ children = "fuchsia" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-xs font-medium text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-pink-1226",
    title: "Pink Soft Badge",
    description: "A soft badge in pink color.",
    categorySlug: "badges",
    tags: ["badge", "pink", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft pink badge.",
    code: `export function Badge({ children = "pink" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-rose-1227",
    title: "Rose Soft Badge",
    description: "A soft badge in rose color.",
    categorySlug: "badges",
    tags: ["badge", "rose", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft rose badge.",
    code: `export function Badge({ children = "rose" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "alert-soft-red-1228",
    title: "Red Soft Alert",
    description: "A soft alert in red color.",
    categorySlug: "alerts",
    tags: ["alert", "red", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft red alert.",
    code: `export function Alert({ title = "Attention", children = "This is a red alert message." }) {
  return (
    <div className="rounded-xl bg-red-50 p-4 dark:bg-red-950/20 text-sm text-red-800 dark:text-red-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-orange-1229",
    title: "Orange Soft Alert",
    description: "A soft alert in orange color.",
    categorySlug: "alerts",
    tags: ["alert", "orange", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft orange alert.",
    code: `export function Alert({ title = "Attention", children = "This is a orange alert message." }) {
  return (
    <div className="rounded-xl bg-orange-50 p-4 dark:bg-orange-950/20 text-sm text-orange-800 dark:text-orange-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-amber-1230",
    title: "Amber Soft Alert",
    description: "A soft alert in amber color.",
    categorySlug: "alerts",
    tags: ["alert", "amber", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft amber alert.",
    code: `export function Alert({ title = "Attention", children = "This is a amber alert message." }) {
  return (
    <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-950/20 text-sm text-amber-800 dark:text-amber-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-yellow-1231",
    title: "Yellow Soft Alert",
    description: "A soft alert in yellow color.",
    categorySlug: "alerts",
    tags: ["alert", "yellow", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft yellow alert.",
    code: `export function Alert({ title = "Attention", children = "This is a yellow alert message." }) {
  return (
    <div className="rounded-xl bg-yellow-50 p-4 dark:bg-yellow-950/20 text-sm text-yellow-800 dark:text-yellow-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-green-1232",
    title: "Green Soft Alert",
    description: "A soft alert in green color.",
    categorySlug: "alerts",
    tags: ["alert", "green", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft green alert.",
    code: `export function Alert({ title = "Attention", children = "This is a green alert message." }) {
  return (
    <div className="rounded-xl bg-green-50 p-4 dark:bg-green-950/20 text-sm text-green-800 dark:text-green-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-emerald-1233",
    title: "Emerald Soft Alert",
    description: "A soft alert in emerald color.",
    categorySlug: "alerts",
    tags: ["alert", "emerald", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft emerald alert.",
    code: `export function Alert({ title = "Attention", children = "This is a emerald alert message." }) {
  return (
    <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/20 text-sm text-emerald-800 dark:text-emerald-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-blue-1234",
    title: "Blue Soft Alert",
    description: "A soft alert in blue color.",
    categorySlug: "alerts",
    tags: ["alert", "blue", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft blue alert.",
    code: `export function Alert({ title = "Attention", children = "This is a blue alert message." }) {
  return (
    <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/20 text-sm text-blue-800 dark:text-blue-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-indigo-1235",
    title: "Indigo Soft Alert",
    description: "A soft alert in indigo color.",
    categorySlug: "alerts",
    tags: ["alert", "indigo", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft indigo alert.",
    code: `export function Alert({ title = "Attention", children = "This is a indigo alert message." }) {
  return (
    <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/20 text-sm text-indigo-800 dark:text-indigo-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-violet-1236",
    title: "Violet Soft Alert",
    description: "A soft alert in violet color.",
    categorySlug: "alerts",
    tags: ["alert", "violet", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft violet alert.",
    code: `export function Alert({ title = "Attention", children = "This is a violet alert message." }) {
  return (
    <div className="rounded-xl bg-violet-50 p-4 dark:bg-violet-950/20 text-sm text-violet-800 dark:text-violet-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-rose-1237",
    title: "Rose Soft Alert",
    description: "A soft alert in rose color.",
    categorySlug: "alerts",
    tags: ["alert", "rose", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft rose alert.",
    code: `export function Alert({ title = "Attention", children = "This is a rose alert message." }) {
  return (
    <div className="rounded-xl bg-rose-50 p-4 dark:bg-rose-950/20 text-sm text-rose-800 dark:text-rose-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "avatar-sm-1238",
    title: "Avatar SM",
    description: "Avatar component size sm.",
    categorySlug: "avatars",
    tags: ["avatar", "sm", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An avatar of size sm.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-md-1239",
    title: "Avatar MD",
    description: "Avatar component size md.",
    categorySlug: "avatars",
    tags: ["avatar", "md", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An avatar of size md.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-lg-1240",
    title: "Avatar LG",
    description: "Avatar component size lg.",
    categorySlug: "avatars",
    tags: ["avatar", "lg", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An avatar of size lg.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-xl-1241",
    title: "Avatar XL",
    description: "Avatar component size xl.",
    categorySlug: "avatars",
    tags: ["avatar", "xl", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An avatar of size xl.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-2xl-1242",
    title: "Avatar 2XL",
    description: "Avatar component size 2xl.",
    categorySlug: "avatars",
    tags: ["avatar", "2xl", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An avatar of size 2xl.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "btn-solid-slate-1243",
    title: "Slate Solid Button",
    description: "A solid button in slate color.",
    categorySlug: "buttons",
    tags: ["button", "slate", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid slate button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-slate-1244",
    title: "Slate Outline Button",
    description: "An outline button in slate color.",
    categorySlug: "buttons",
    tags: ["button", "slate", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline slate button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500/50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-gray-1245",
    title: "Gray Solid Button",
    description: "A solid button in gray color.",
    categorySlug: "buttons",
    tags: ["button", "gray", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid gray button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-gray-1246",
    title: "Gray Outline Button",
    description: "An outline button in gray color.",
    categorySlug: "buttons",
    tags: ["button", "gray", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline gray button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-zinc-1247",
    title: "Zinc Solid Button",
    description: "A solid button in zinc color.",
    categorySlug: "buttons",
    tags: ["button", "zinc", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid zinc button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-zinc-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-zinc-1248",
    title: "Zinc Outline Button",
    description: "An outline button in zinc color.",
    categorySlug: "buttons",
    tags: ["button", "zinc", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline zinc button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-neutral-1249",
    title: "Neutral Solid Button",
    description: "A solid button in neutral color.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid neutral button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-neutral-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-neutral-1250",
    title: "Neutral Outline Button",
    description: "An outline button in neutral color.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline neutral button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-stone-1251",
    title: "Stone Solid Button",
    description: "A solid button in stone color.",
    categorySlug: "buttons",
    tags: ["button", "stone", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid stone button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-stone-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-stone-1252",
    title: "Stone Outline Button",
    description: "An outline button in stone color.",
    categorySlug: "buttons",
    tags: ["button", "stone", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline stone button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-500/50 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-red-1253",
    title: "Red Solid Button",
    description: "A solid button in red color.",
    categorySlug: "buttons",
    tags: ["button", "red", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid red button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-red-1254",
    title: "Red Outline Button",
    description: "An outline button in red color.",
    categorySlug: "buttons",
    tags: ["button", "red", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline red button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500/50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-orange-1255",
    title: "Orange Solid Button",
    description: "A solid button in orange color.",
    categorySlug: "buttons",
    tags: ["button", "orange", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid orange button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-orange-1256",
    title: "Orange Outline Button",
    description: "An outline button in orange color.",
    categorySlug: "buttons",
    tags: ["button", "orange", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline orange button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-orange-300 px-4 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-amber-1257",
    title: "Amber Solid Button",
    description: "A solid button in amber color.",
    categorySlug: "buttons",
    tags: ["button", "amber", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid amber button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-amber-1258",
    title: "Amber Outline Button",
    description: "An outline button in amber color.",
    categorySlug: "buttons",
    tags: ["button", "amber", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline amber button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-amber-300 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-yellow-1259",
    title: "Yellow Solid Button",
    description: "A solid button in yellow color.",
    categorySlug: "buttons",
    tags: ["button", "yellow", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid yellow button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-yellow-1260",
    title: "Yellow Outline Button",
    description: "An outline button in yellow color.",
    categorySlug: "buttons",
    tags: ["button", "yellow", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline yellow button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-yellow-300 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 dark:border-yellow-700 dark:text-yellow-300 dark:hover:bg-yellow-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-lime-1261",
    title: "Lime Solid Button",
    description: "A solid button in lime color.",
    categorySlug: "buttons",
    tags: ["button", "lime", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid lime button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-lime-1262",
    title: "Lime Outline Button",
    description: "An outline button in lime color.",
    categorySlug: "buttons",
    tags: ["button", "lime", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline lime button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-lime-300 px-4 py-2 text-sm font-medium text-lime-700 transition hover:bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500/50 dark:border-lime-700 dark:text-lime-300 dark:hover:bg-lime-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-green-1263",
    title: "Green Solid Button",
    description: "A solid button in green color.",
    categorySlug: "buttons",
    tags: ["button", "green", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid green button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-green-1264",
    title: "Green Outline Button",
    description: "An outline button in green color.",
    categorySlug: "buttons",
    tags: ["button", "green", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline green button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-green-300 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500/50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-emerald-1265",
    title: "Emerald Solid Button",
    description: "A solid button in emerald color.",
    categorySlug: "buttons",
    tags: ["button", "emerald", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid emerald button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-emerald-1266",
    title: "Emerald Outline Button",
    description: "An outline button in emerald color.",
    categorySlug: "buttons",
    tags: ["button", "emerald", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline emerald button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-emerald-300 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-teal-1267",
    title: "Teal Solid Button",
    description: "A solid button in teal color.",
    categorySlug: "buttons",
    tags: ["button", "teal", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid teal button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-teal-1268",
    title: "Teal Outline Button",
    description: "An outline button in teal color.",
    categorySlug: "buttons",
    tags: ["button", "teal", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline teal button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-teal-300 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 dark:border-teal-700 dark:text-teal-300 dark:hover:bg-teal-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-cyan-1269",
    title: "Cyan Solid Button",
    description: "A solid button in cyan color.",
    categorySlug: "buttons",
    tags: ["button", "cyan", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid cyan button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-cyan-1270",
    title: "Cyan Outline Button",
    description: "An outline button in cyan color.",
    categorySlug: "buttons",
    tags: ["button", "cyan", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline cyan button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-cyan-300 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:border-cyan-700 dark:text-cyan-300 dark:hover:bg-cyan-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-sky-1271",
    title: "Sky Solid Button",
    description: "A solid button in sky color.",
    categorySlug: "buttons",
    tags: ["button", "sky", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid sky button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-sky-1272",
    title: "Sky Outline Button",
    description: "An outline button in sky color.",
    categorySlug: "buttons",
    tags: ["button", "sky", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline sky button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-sky-300 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-sky-700 dark:text-sky-300 dark:hover:bg-sky-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-blue-1273",
    title: "Blue Solid Button",
    description: "A solid button in blue color.",
    categorySlug: "buttons",
    tags: ["button", "blue", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid blue button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-blue-1274",
    title: "Blue Outline Button",
    description: "An outline button in blue color.",
    categorySlug: "buttons",
    tags: ["button", "blue", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline blue button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-indigo-1275",
    title: "Indigo Solid Button",
    description: "A solid button in indigo color.",
    categorySlug: "buttons",
    tags: ["button", "indigo", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid indigo button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-indigo-1276",
    title: "Indigo Outline Button",
    description: "An outline button in indigo color.",
    categorySlug: "buttons",
    tags: ["button", "indigo", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline indigo button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-indigo-300 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-violet-1277",
    title: "Violet Solid Button",
    description: "A solid button in violet color.",
    categorySlug: "buttons",
    tags: ["button", "violet", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid violet button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-violet-1278",
    title: "Violet Outline Button",
    description: "An outline button in violet color.",
    categorySlug: "buttons",
    tags: ["button", "violet", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline violet button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-violet-300 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500/50 dark:border-violet-700 dark:text-violet-300 dark:hover:bg-violet-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-purple-1279",
    title: "Purple Solid Button",
    description: "A solid button in purple color.",
    categorySlug: "buttons",
    tags: ["button", "purple", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid purple button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-purple-1280",
    title: "Purple Outline Button",
    description: "An outline button in purple color.",
    categorySlug: "buttons",
    tags: ["button", "purple", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline purple button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-purple-300 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-fuchsia-1281",
    title: "Fuchsia Solid Button",
    description: "A solid button in fuchsia color.",
    categorySlug: "buttons",
    tags: ["button", "fuchsia", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid fuchsia button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-fuchsia-1282",
    title: "Fuchsia Outline Button",
    description: "An outline button in fuchsia color.",
    categorySlug: "buttons",
    tags: ["button", "fuchsia", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline fuchsia button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-fuchsia-300 px-4 py-2 text-sm font-medium text-fuchsia-700 transition hover:bg-fuchsia-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 dark:border-fuchsia-700 dark:text-fuchsia-300 dark:hover:bg-fuchsia-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-pink-1283",
    title: "Pink Solid Button",
    description: "A solid button in pink color.",
    categorySlug: "buttons",
    tags: ["button", "pink", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid pink button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-pink-1284",
    title: "Pink Outline Button",
    description: "An outline button in pink color.",
    categorySlug: "buttons",
    tags: ["button", "pink", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline pink button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-pink-300 px-4 py-2 text-sm font-medium text-pink-700 transition hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500/50 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-rose-1285",
    title: "Rose Solid Button",
    description: "A solid button in rose color.",
    categorySlug: "buttons",
    tags: ["button", "rose", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid rose button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-rose-1286",
    title: "Rose Outline Button",
    description: "An outline button in rose color.",
    categorySlug: "buttons",
    tags: ["button", "rose", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline rose button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-rose-300 px-4 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-500/50 dark:border-rose-700 dark:text-rose-300 dark:hover:bg-rose-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "badge-soft-slate-1287",
    title: "Slate Soft Badge",
    description: "A soft badge in slate color.",
    categorySlug: "badges",
    tags: ["badge", "slate", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft slate badge.",
    code: `export function Badge({ children = "slate" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-900/30 dark:text-slate-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-gray-1288",
    title: "Gray Soft Badge",
    description: "A soft badge in gray color.",
    categorySlug: "badges",
    tags: ["badge", "gray", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft gray badge.",
    code: `export function Badge({ children = "gray" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-zinc-1289",
    title: "Zinc Soft Badge",
    description: "A soft badge in zinc color.",
    categorySlug: "badges",
    tags: ["badge", "zinc", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft zinc badge.",
    code: `export function Badge({ children = "zinc" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-neutral-1290",
    title: "Neutral Soft Badge",
    description: "A soft badge in neutral color.",
    categorySlug: "badges",
    tags: ["badge", "neutral", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft neutral badge.",
    code: `export function Badge({ children = "neutral" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-stone-1291",
    title: "Stone Soft Badge",
    description: "A soft badge in stone color.",
    categorySlug: "badges",
    tags: ["badge", "stone", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft stone badge.",
    code: `export function Badge({ children = "stone" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-800 dark:bg-stone-900/30 dark:text-stone-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-red-1292",
    title: "Red Soft Badge",
    description: "A soft badge in red color.",
    categorySlug: "badges",
    tags: ["badge", "red", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft red badge.",
    code: `export function Badge({ children = "red" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-orange-1293",
    title: "Orange Soft Badge",
    description: "A soft badge in orange color.",
    categorySlug: "badges",
    tags: ["badge", "orange", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft orange badge.",
    code: `export function Badge({ children = "orange" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-amber-1294",
    title: "Amber Soft Badge",
    description: "A soft badge in amber color.",
    categorySlug: "badges",
    tags: ["badge", "amber", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft amber badge.",
    code: `export function Badge({ children = "amber" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-yellow-1295",
    title: "Yellow Soft Badge",
    description: "A soft badge in yellow color.",
    categorySlug: "badges",
    tags: ["badge", "yellow", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft yellow badge.",
    code: `export function Badge({ children = "yellow" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-lime-1296",
    title: "Lime Soft Badge",
    description: "A soft badge in lime color.",
    categorySlug: "badges",
    tags: ["badge", "lime", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft lime badge.",
    code: `export function Badge({ children = "lime" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-800 dark:bg-lime-900/30 dark:text-lime-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-green-1297",
    title: "Green Soft Badge",
    description: "A soft badge in green color.",
    categorySlug: "badges",
    tags: ["badge", "green", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft green badge.",
    code: `export function Badge({ children = "green" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-emerald-1298",
    title: "Emerald Soft Badge",
    description: "A soft badge in emerald color.",
    categorySlug: "badges",
    tags: ["badge", "emerald", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft emerald badge.",
    code: `export function Badge({ children = "emerald" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-teal-1299",
    title: "Teal Soft Badge",
    description: "A soft badge in teal color.",
    categorySlug: "badges",
    tags: ["badge", "teal", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft teal badge.",
    code: `export function Badge({ children = "teal" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-cyan-1300",
    title: "Cyan Soft Badge",
    description: "A soft badge in cyan color.",
    categorySlug: "badges",
    tags: ["badge", "cyan", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft cyan badge.",
    code: `export function Badge({ children = "cyan" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-sky-1301",
    title: "Sky Soft Badge",
    description: "A soft badge in sky color.",
    categorySlug: "badges",
    tags: ["badge", "sky", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft sky badge.",
    code: `export function Badge({ children = "sky" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-blue-1302",
    title: "Blue Soft Badge",
    description: "A soft badge in blue color.",
    categorySlug: "badges",
    tags: ["badge", "blue", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft blue badge.",
    code: `export function Badge({ children = "blue" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-indigo-1303",
    title: "Indigo Soft Badge",
    description: "A soft badge in indigo color.",
    categorySlug: "badges",
    tags: ["badge", "indigo", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft indigo badge.",
    code: `export function Badge({ children = "indigo" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-violet-1304",
    title: "Violet Soft Badge",
    description: "A soft badge in violet color.",
    categorySlug: "badges",
    tags: ["badge", "violet", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft violet badge.",
    code: `export function Badge({ children = "violet" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-purple-1305",
    title: "Purple Soft Badge",
    description: "A soft badge in purple color.",
    categorySlug: "badges",
    tags: ["badge", "purple", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft purple badge.",
    code: `export function Badge({ children = "purple" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-fuchsia-1306",
    title: "Fuchsia Soft Badge",
    description: "A soft badge in fuchsia color.",
    categorySlug: "badges",
    tags: ["badge", "fuchsia", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft fuchsia badge.",
    code: `export function Badge({ children = "fuchsia" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-xs font-medium text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-pink-1307",
    title: "Pink Soft Badge",
    description: "A soft badge in pink color.",
    categorySlug: "badges",
    tags: ["badge", "pink", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft pink badge.",
    code: `export function Badge({ children = "pink" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-rose-1308",
    title: "Rose Soft Badge",
    description: "A soft badge in rose color.",
    categorySlug: "badges",
    tags: ["badge", "rose", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft rose badge.",
    code: `export function Badge({ children = "rose" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "alert-soft-red-1309",
    title: "Red Soft Alert",
    description: "A soft alert in red color.",
    categorySlug: "alerts",
    tags: ["alert", "red", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft red alert.",
    code: `export function Alert({ title = "Attention", children = "This is a red alert message." }) {
  return (
    <div className="rounded-xl bg-red-50 p-4 dark:bg-red-950/20 text-sm text-red-800 dark:text-red-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-orange-1310",
    title: "Orange Soft Alert",
    description: "A soft alert in orange color.",
    categorySlug: "alerts",
    tags: ["alert", "orange", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft orange alert.",
    code: `export function Alert({ title = "Attention", children = "This is a orange alert message." }) {
  return (
    <div className="rounded-xl bg-orange-50 p-4 dark:bg-orange-950/20 text-sm text-orange-800 dark:text-orange-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-amber-1311",
    title: "Amber Soft Alert",
    description: "A soft alert in amber color.",
    categorySlug: "alerts",
    tags: ["alert", "amber", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft amber alert.",
    code: `export function Alert({ title = "Attention", children = "This is a amber alert message." }) {
  return (
    <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-950/20 text-sm text-amber-800 dark:text-amber-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-yellow-1312",
    title: "Yellow Soft Alert",
    description: "A soft alert in yellow color.",
    categorySlug: "alerts",
    tags: ["alert", "yellow", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft yellow alert.",
    code: `export function Alert({ title = "Attention", children = "This is a yellow alert message." }) {
  return (
    <div className="rounded-xl bg-yellow-50 p-4 dark:bg-yellow-950/20 text-sm text-yellow-800 dark:text-yellow-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-green-1313",
    title: "Green Soft Alert",
    description: "A soft alert in green color.",
    categorySlug: "alerts",
    tags: ["alert", "green", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft green alert.",
    code: `export function Alert({ title = "Attention", children = "This is a green alert message." }) {
  return (
    <div className="rounded-xl bg-green-50 p-4 dark:bg-green-950/20 text-sm text-green-800 dark:text-green-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-emerald-1314",
    title: "Emerald Soft Alert",
    description: "A soft alert in emerald color.",
    categorySlug: "alerts",
    tags: ["alert", "emerald", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft emerald alert.",
    code: `export function Alert({ title = "Attention", children = "This is a emerald alert message." }) {
  return (
    <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/20 text-sm text-emerald-800 dark:text-emerald-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-blue-1315",
    title: "Blue Soft Alert",
    description: "A soft alert in blue color.",
    categorySlug: "alerts",
    tags: ["alert", "blue", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft blue alert.",
    code: `export function Alert({ title = "Attention", children = "This is a blue alert message." }) {
  return (
    <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/20 text-sm text-blue-800 dark:text-blue-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-indigo-1316",
    title: "Indigo Soft Alert",
    description: "A soft alert in indigo color.",
    categorySlug: "alerts",
    tags: ["alert", "indigo", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft indigo alert.",
    code: `export function Alert({ title = "Attention", children = "This is a indigo alert message." }) {
  return (
    <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/20 text-sm text-indigo-800 dark:text-indigo-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-violet-1317",
    title: "Violet Soft Alert",
    description: "A soft alert in violet color.",
    categorySlug: "alerts",
    tags: ["alert", "violet", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft violet alert.",
    code: `export function Alert({ title = "Attention", children = "This is a violet alert message." }) {
  return (
    <div className="rounded-xl bg-violet-50 p-4 dark:bg-violet-950/20 text-sm text-violet-800 dark:text-violet-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-rose-1318",
    title: "Rose Soft Alert",
    description: "A soft alert in rose color.",
    categorySlug: "alerts",
    tags: ["alert", "rose", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft rose alert.",
    code: `export function Alert({ title = "Attention", children = "This is a rose alert message." }) {
  return (
    <div className="rounded-xl bg-rose-50 p-4 dark:bg-rose-950/20 text-sm text-rose-800 dark:text-rose-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "avatar-sm-1319",
    title: "Avatar SM",
    description: "Avatar component size sm.",
    categorySlug: "avatars",
    tags: ["avatar", "sm", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An avatar of size sm.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-md-1320",
    title: "Avatar MD",
    description: "Avatar component size md.",
    categorySlug: "avatars",
    tags: ["avatar", "md", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An avatar of size md.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-lg-1321",
    title: "Avatar LG",
    description: "Avatar component size lg.",
    categorySlug: "avatars",
    tags: ["avatar", "lg", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An avatar of size lg.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-xl-1322",
    title: "Avatar XL",
    description: "Avatar component size xl.",
    categorySlug: "avatars",
    tags: ["avatar", "xl", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An avatar of size xl.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-2xl-1323",
    title: "Avatar 2XL",
    description: "Avatar component size 2xl.",
    categorySlug: "avatars",
    tags: ["avatar", "2xl", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An avatar of size 2xl.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "btn-solid-slate-1324",
    title: "Slate Solid Button",
    description: "A solid button in slate color.",
    categorySlug: "buttons",
    tags: ["button", "slate", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid slate button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-slate-1325",
    title: "Slate Outline Button",
    description: "An outline button in slate color.",
    categorySlug: "buttons",
    tags: ["button", "slate", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline slate button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500/50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-gray-1326",
    title: "Gray Solid Button",
    description: "A solid button in gray color.",
    categorySlug: "buttons",
    tags: ["button", "gray", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid gray button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-gray-1327",
    title: "Gray Outline Button",
    description: "An outline button in gray color.",
    categorySlug: "buttons",
    tags: ["button", "gray", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline gray button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500/50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-zinc-1328",
    title: "Zinc Solid Button",
    description: "A solid button in zinc color.",
    categorySlug: "buttons",
    tags: ["button", "zinc", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid zinc button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-zinc-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-zinc-1329",
    title: "Zinc Outline Button",
    description: "An outline button in zinc color.",
    categorySlug: "buttons",
    tags: ["button", "zinc", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline zinc button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500/50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-neutral-1330",
    title: "Neutral Solid Button",
    description: "A solid button in neutral color.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid neutral button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-neutral-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-neutral-1331",
    title: "Neutral Outline Button",
    description: "An outline button in neutral color.",
    categorySlug: "buttons",
    tags: ["button", "neutral", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline neutral button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-neutral-500/50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-stone-1332",
    title: "Stone Solid Button",
    description: "A solid button in stone color.",
    categorySlug: "buttons",
    tags: ["button", "stone", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid stone button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-stone-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-stone-1333",
    title: "Stone Outline Button",
    description: "An outline button in stone color.",
    categorySlug: "buttons",
    tags: ["button", "stone", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline stone button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-stone-500/50 dark:border-stone-700 dark:text-stone-300 dark:hover:bg-stone-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-red-1334",
    title: "Red Solid Button",
    description: "A solid button in red color.",
    categorySlug: "buttons",
    tags: ["button", "red", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid red button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-red-1335",
    title: "Red Outline Button",
    description: "An outline button in red color.",
    categorySlug: "buttons",
    tags: ["button", "red", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline red button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500/50 dark:border-red-700 dark:text-red-300 dark:hover:bg-red-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-orange-1336",
    title: "Orange Solid Button",
    description: "A solid button in orange color.",
    categorySlug: "buttons",
    tags: ["button", "orange", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid orange button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-orange-1337",
    title: "Orange Outline Button",
    description: "An outline button in orange color.",
    categorySlug: "buttons",
    tags: ["button", "orange", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline orange button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-orange-300 px-4 py-2 text-sm font-medium text-orange-700 transition hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:border-orange-700 dark:text-orange-300 dark:hover:bg-orange-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-amber-1338",
    title: "Amber Solid Button",
    description: "A solid button in amber color.",
    categorySlug: "buttons",
    tags: ["button", "amber", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid amber button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-amber-1339",
    title: "Amber Outline Button",
    description: "An outline button in amber color.",
    categorySlug: "buttons",
    tags: ["button", "amber", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline amber button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-amber-300 px-4 py-2 text-sm font-medium text-amber-700 transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:border-amber-700 dark:text-amber-300 dark:hover:bg-amber-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-yellow-1340",
    title: "Yellow Solid Button",
    description: "A solid button in yellow color.",
    categorySlug: "buttons",
    tags: ["button", "yellow", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid yellow button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-yellow-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-yellow-1341",
    title: "Yellow Outline Button",
    description: "An outline button in yellow color.",
    categorySlug: "buttons",
    tags: ["button", "yellow", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline yellow button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-yellow-300 px-4 py-2 text-sm font-medium text-yellow-700 transition hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 dark:border-yellow-700 dark:text-yellow-300 dark:hover:bg-yellow-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-lime-1342",
    title: "Lime Solid Button",
    description: "A solid button in lime color.",
    categorySlug: "buttons",
    tags: ["button", "lime", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid lime button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-lime-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-lime-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-lime-1343",
    title: "Lime Outline Button",
    description: "An outline button in lime color.",
    categorySlug: "buttons",
    tags: ["button", "lime", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline lime button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-lime-300 px-4 py-2 text-sm font-medium text-lime-700 transition hover:bg-lime-50 focus:outline-none focus:ring-2 focus:ring-lime-500/50 dark:border-lime-700 dark:text-lime-300 dark:hover:bg-lime-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-green-1344",
    title: "Green Solid Button",
    description: "A solid button in green color.",
    categorySlug: "buttons",
    tags: ["button", "green", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid green button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-green-1345",
    title: "Green Outline Button",
    description: "An outline button in green color.",
    categorySlug: "buttons",
    tags: ["button", "green", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline green button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-green-300 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500/50 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-emerald-1346",
    title: "Emerald Solid Button",
    description: "A solid button in emerald color.",
    categorySlug: "buttons",
    tags: ["button", "emerald", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid emerald button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-emerald-1347",
    title: "Emerald Outline Button",
    description: "An outline button in emerald color.",
    categorySlug: "buttons",
    tags: ["button", "emerald", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline emerald button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-emerald-300 px-4 py-2 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 dark:border-emerald-700 dark:text-emerald-300 dark:hover:bg-emerald-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-teal-1348",
    title: "Teal Solid Button",
    description: "A solid button in teal color.",
    categorySlug: "buttons",
    tags: ["button", "teal", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid teal button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-teal-1349",
    title: "Teal Outline Button",
    description: "An outline button in teal color.",
    categorySlug: "buttons",
    tags: ["button", "teal", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline teal button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-teal-300 px-4 py-2 text-sm font-medium text-teal-700 transition hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500/50 dark:border-teal-700 dark:text-teal-300 dark:hover:bg-teal-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-cyan-1350",
    title: "Cyan Solid Button",
    description: "A solid button in cyan color.",
    categorySlug: "buttons",
    tags: ["button", "cyan", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid cyan button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-cyan-1351",
    title: "Cyan Outline Button",
    description: "An outline button in cyan color.",
    categorySlug: "buttons",
    tags: ["button", "cyan", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline cyan button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-cyan-300 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:bg-cyan-50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 dark:border-cyan-700 dark:text-cyan-300 dark:hover:bg-cyan-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-sky-1352",
    title: "Sky Solid Button",
    description: "A solid button in sky color.",
    categorySlug: "buttons",
    tags: ["button", "sky", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid sky button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-sky-1353",
    title: "Sky Outline Button",
    description: "An outline button in sky color.",
    categorySlug: "buttons",
    tags: ["button", "sky", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline sky button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-sky-300 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500/50 dark:border-sky-700 dark:text-sky-300 dark:hover:bg-sky-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-blue-1354",
    title: "Blue Solid Button",
    description: "A solid button in blue color.",
    categorySlug: "buttons",
    tags: ["button", "blue", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid blue button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-blue-1355",
    title: "Blue Outline Button",
    description: "An outline button in blue color.",
    categorySlug: "buttons",
    tags: ["button", "blue", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline blue button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-indigo-1356",
    title: "Indigo Solid Button",
    description: "A solid button in indigo color.",
    categorySlug: "buttons",
    tags: ["button", "indigo", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid indigo button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-indigo-1357",
    title: "Indigo Outline Button",
    description: "An outline button in indigo color.",
    categorySlug: "buttons",
    tags: ["button", "indigo", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline indigo button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-indigo-300 px-4 py-2 text-sm font-medium text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-violet-1358",
    title: "Violet Solid Button",
    description: "A solid button in violet color.",
    categorySlug: "buttons",
    tags: ["button", "violet", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A solid violet button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-violet-1359",
    title: "Violet Outline Button",
    description: "An outline button in violet color.",
    categorySlug: "buttons",
    tags: ["button", "violet", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An outline violet button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-violet-300 px-4 py-2 text-sm font-medium text-violet-700 transition hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-violet-500/50 dark:border-violet-700 dark:text-violet-300 dark:hover:bg-violet-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-purple-1360",
    title: "Purple Solid Button",
    description: "A solid button in purple color.",
    categorySlug: "buttons",
    tags: ["button", "purple", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A solid purple button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-purple-1361",
    title: "Purple Outline Button",
    description: "An outline button in purple color.",
    categorySlug: "buttons",
    tags: ["button", "purple", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An outline purple button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-purple-300 px-4 py-2 text-sm font-medium text-purple-700 transition hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 dark:border-purple-700 dark:text-purple-300 dark:hover:bg-purple-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-fuchsia-1362",
    title: "Fuchsia Solid Button",
    description: "A solid button in fuchsia color.",
    categorySlug: "buttons",
    tags: ["button", "fuchsia", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A solid fuchsia button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-fuchsia-1363",
    title: "Fuchsia Outline Button",
    description: "An outline button in fuchsia color.",
    categorySlug: "buttons",
    tags: ["button", "fuchsia", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An outline fuchsia button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-fuchsia-300 px-4 py-2 text-sm font-medium text-fuchsia-700 transition hover:bg-fuchsia-50 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 dark:border-fuchsia-700 dark:text-fuchsia-300 dark:hover:bg-fuchsia-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-pink-1364",
    title: "Pink Solid Button",
    description: "A solid button in pink color.",
    categorySlug: "buttons",
    tags: ["button", "pink", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A solid pink button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-pink-1365",
    title: "Pink Outline Button",
    description: "An outline button in pink color.",
    categorySlug: "buttons",
    tags: ["button", "pink", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An outline pink button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-pink-300 px-4 py-2 text-sm font-medium text-pink-700 transition hover:bg-pink-50 focus:outline-none focus:ring-2 focus:ring-pink-500/50 dark:border-pink-700 dark:text-pink-300 dark:hover:bg-pink-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-solid-rose-1366",
    title: "Rose Solid Button",
    description: "A solid button in rose color.",
    categorySlug: "buttons",
    tags: ["button", "rose", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A solid rose button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "btn-outline-rose-1367",
    title: "Rose Outline Button",
    description: "An outline button in rose color.",
    categorySlug: "buttons",
    tags: ["button", "rose", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An outline rose button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-rose-300 px-4 py-2 text-sm font-medium text-rose-700 transition hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-500/50 dark:border-rose-700 dark:text-rose-300 dark:hover:bg-rose-950/50" {...props}>
      {children}
    </button>
  );
}`
  },
  {
    id: "badge-soft-slate-1368",
    title: "Slate Soft Badge",
    description: "A soft badge in slate color.",
    categorySlug: "badges",
    tags: ["badge", "slate", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft slate badge.",
    code: `export function Badge({ children = "slate" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-900/30 dark:text-slate-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-gray-1369",
    title: "Gray Soft Badge",
    description: "A soft badge in gray color.",
    categorySlug: "badges",
    tags: ["badge", "gray", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft gray badge.",
    code: `export function Badge({ children = "gray" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-zinc-1370",
    title: "Zinc Soft Badge",
    description: "A soft badge in zinc color.",
    categorySlug: "badges",
    tags: ["badge", "zinc", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft zinc badge.",
    code: `export function Badge({ children = "zinc" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-neutral-1371",
    title: "Neutral Soft Badge",
    description: "A soft badge in neutral color.",
    categorySlug: "badges",
    tags: ["badge", "neutral", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft neutral badge.",
    code: `export function Badge({ children = "neutral" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800 dark:bg-neutral-900/30 dark:text-neutral-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-stone-1372",
    title: "Stone Soft Badge",
    description: "A soft badge in stone color.",
    categorySlug: "badges",
    tags: ["badge", "stone", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft stone badge.",
    code: `export function Badge({ children = "stone" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-stone-100 px-2.5 py-0.5 text-xs font-medium text-stone-800 dark:bg-stone-900/30 dark:text-stone-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-red-1373",
    title: "Red Soft Badge",
    description: "A soft badge in red color.",
    categorySlug: "badges",
    tags: ["badge", "red", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft red badge.",
    code: `export function Badge({ children = "red" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-orange-1374",
    title: "Orange Soft Badge",
    description: "A soft badge in orange color.",
    categorySlug: "badges",
    tags: ["badge", "orange", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft orange badge.",
    code: `export function Badge({ children = "orange" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-amber-1375",
    title: "Amber Soft Badge",
    description: "A soft badge in amber color.",
    categorySlug: "badges",
    tags: ["badge", "amber", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft amber badge.",
    code: `export function Badge({ children = "amber" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-yellow-1376",
    title: "Yellow Soft Badge",
    description: "A soft badge in yellow color.",
    categorySlug: "badges",
    tags: ["badge", "yellow", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft yellow badge.",
    code: `export function Badge({ children = "yellow" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-lime-1377",
    title: "Lime Soft Badge",
    description: "A soft badge in lime color.",
    categorySlug: "badges",
    tags: ["badge", "lime", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft lime badge.",
    code: `export function Badge({ children = "lime" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-lime-100 px-2.5 py-0.5 text-xs font-medium text-lime-800 dark:bg-lime-900/30 dark:text-lime-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-green-1378",
    title: "Green Soft Badge",
    description: "A soft badge in green color.",
    categorySlug: "badges",
    tags: ["badge", "green", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft green badge.",
    code: `export function Badge({ children = "green" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-emerald-1379",
    title: "Emerald Soft Badge",
    description: "A soft badge in emerald color.",
    categorySlug: "badges",
    tags: ["badge", "emerald", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft emerald badge.",
    code: `export function Badge({ children = "emerald" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-teal-1380",
    title: "Teal Soft Badge",
    description: "A soft badge in teal color.",
    categorySlug: "badges",
    tags: ["badge", "teal", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft teal badge.",
    code: `export function Badge({ children = "teal" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-cyan-1381",
    title: "Cyan Soft Badge",
    description: "A soft badge in cyan color.",
    categorySlug: "badges",
    tags: ["badge", "cyan", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft cyan badge.",
    code: `export function Badge({ children = "cyan" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-sky-1382",
    title: "Sky Soft Badge",
    description: "A soft badge in sky color.",
    categorySlug: "badges",
    tags: ["badge", "sky", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft sky badge.",
    code: `export function Badge({ children = "sky" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-medium text-sky-800 dark:bg-sky-900/30 dark:text-sky-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-blue-1383",
    title: "Blue Soft Badge",
    description: "A soft badge in blue color.",
    categorySlug: "badges",
    tags: ["badge", "blue", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft blue badge.",
    code: `export function Badge({ children = "blue" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-indigo-1384",
    title: "Indigo Soft Badge",
    description: "A soft badge in indigo color.",
    categorySlug: "badges",
    tags: ["badge", "indigo", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft indigo badge.",
    code: `export function Badge({ children = "indigo" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-violet-1385",
    title: "Violet Soft Badge",
    description: "A soft badge in violet color.",
    categorySlug: "badges",
    tags: ["badge", "violet", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft violet badge.",
    code: `export function Badge({ children = "violet" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-violet-100 px-2.5 py-0.5 text-xs font-medium text-violet-800 dark:bg-violet-900/30 dark:text-violet-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-purple-1386",
    title: "Purple Soft Badge",
    description: "A soft badge in purple color.",
    categorySlug: "badges",
    tags: ["badge", "purple", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft purple badge.",
    code: `export function Badge({ children = "purple" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-fuchsia-1387",
    title: "Fuchsia Soft Badge",
    description: "A soft badge in fuchsia color.",
    categorySlug: "badges",
    tags: ["badge", "fuchsia", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft fuchsia badge.",
    code: `export function Badge({ children = "fuchsia" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-fuchsia-100 px-2.5 py-0.5 text-xs font-medium text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-pink-1388",
    title: "Pink Soft Badge",
    description: "A soft badge in pink color.",
    categorySlug: "badges",
    tags: ["badge", "pink", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft pink badge.",
    code: `export function Badge({ children = "pink" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "badge-soft-rose-1389",
    title: "Rose Soft Badge",
    description: "A soft badge in rose color.",
    categorySlug: "badges",
    tags: ["badge", "rose", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft rose badge.",
    code: `export function Badge({ children = "rose" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-rose-100 px-2.5 py-0.5 text-xs font-medium text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
      {children}
    </span>
  );
}`
  },
  {
    id: "alert-soft-red-1390",
    title: "Red Soft Alert",
    description: "A soft alert in red color.",
    categorySlug: "alerts",
    tags: ["alert", "red", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft red alert.",
    code: `export function Alert({ title = "Attention", children = "This is a red alert message." }) {
  return (
    <div className="rounded-xl bg-red-50 p-4 dark:bg-red-950/20 text-sm text-red-800 dark:text-red-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-orange-1391",
    title: "Orange Soft Alert",
    description: "A soft alert in orange color.",
    categorySlug: "alerts",
    tags: ["alert", "orange", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft orange alert.",
    code: `export function Alert({ title = "Attention", children = "This is a orange alert message." }) {
  return (
    <div className="rounded-xl bg-orange-50 p-4 dark:bg-orange-950/20 text-sm text-orange-800 dark:text-orange-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-amber-1392",
    title: "Amber Soft Alert",
    description: "A soft alert in amber color.",
    categorySlug: "alerts",
    tags: ["alert", "amber", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft amber alert.",
    code: `export function Alert({ title = "Attention", children = "This is a amber alert message." }) {
  return (
    <div className="rounded-xl bg-amber-50 p-4 dark:bg-amber-950/20 text-sm text-amber-800 dark:text-amber-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-yellow-1393",
    title: "Yellow Soft Alert",
    description: "A soft alert in yellow color.",
    categorySlug: "alerts",
    tags: ["alert", "yellow", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft yellow alert.",
    code: `export function Alert({ title = "Attention", children = "This is a yellow alert message." }) {
  return (
    <div className="rounded-xl bg-yellow-50 p-4 dark:bg-yellow-950/20 text-sm text-yellow-800 dark:text-yellow-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-green-1394",
    title: "Green Soft Alert",
    description: "A soft alert in green color.",
    categorySlug: "alerts",
    tags: ["alert", "green", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft green alert.",
    code: `export function Alert({ title = "Attention", children = "This is a green alert message." }) {
  return (
    <div className="rounded-xl bg-green-50 p-4 dark:bg-green-950/20 text-sm text-green-800 dark:text-green-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-emerald-1395",
    title: "Emerald Soft Alert",
    description: "A soft alert in emerald color.",
    categorySlug: "alerts",
    tags: ["alert", "emerald", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "A soft emerald alert.",
    code: `export function Alert({ title = "Attention", children = "This is a emerald alert message." }) {
  return (
    <div className="rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/20 text-sm text-emerald-800 dark:text-emerald-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-blue-1396",
    title: "Blue Soft Alert",
    description: "A soft alert in blue color.",
    categorySlug: "alerts",
    tags: ["alert", "blue", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "A soft blue alert.",
    code: `export function Alert({ title = "Attention", children = "This is a blue alert message." }) {
  return (
    <div className="rounded-xl bg-blue-50 p-4 dark:bg-blue-950/20 text-sm text-blue-800 dark:text-blue-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-indigo-1397",
    title: "Indigo Soft Alert",
    description: "A soft alert in indigo color.",
    categorySlug: "alerts",
    tags: ["alert", "indigo", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "A soft indigo alert.",
    code: `export function Alert({ title = "Attention", children = "This is a indigo alert message." }) {
  return (
    <div className="rounded-xl bg-indigo-50 p-4 dark:bg-indigo-950/20 text-sm text-indigo-800 dark:text-indigo-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-violet-1398",
    title: "Violet Soft Alert",
    description: "A soft alert in violet color.",
    categorySlug: "alerts",
    tags: ["alert", "violet", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "A soft violet alert.",
    code: `export function Alert({ title = "Attention", children = "This is a violet alert message." }) {
  return (
    <div className="rounded-xl bg-violet-50 p-4 dark:bg-violet-950/20 text-sm text-violet-800 dark:text-violet-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "alert-soft-rose-1399",
    title: "Rose Soft Alert",
    description: "A soft alert in rose color.",
    categorySlug: "alerts",
    tags: ["alert", "rose", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "A soft rose alert.",
    code: `export function Alert({ title = "Attention", children = "This is a rose alert message." }) {
  return (
    <div className="rounded-xl bg-rose-50 p-4 dark:bg-rose-950/20 text-sm text-rose-800 dark:text-rose-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  },
  {
    id: "avatar-sm-1400",
    title: "Avatar SM",
    description: "Avatar component size sm.",
    categorySlug: "avatars",
    tags: ["avatar", "sm", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 1,
    prompt: "An avatar of size sm.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-md-1401",
    title: "Avatar MD",
    description: "Avatar component size md.",
    categorySlug: "avatars",
    tags: ["avatar", "md", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 2,
    prompt: "An avatar of size md.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-lg-1402",
    title: "Avatar LG",
    description: "Avatar component size lg.",
    categorySlug: "avatars",
    tags: ["avatar", "lg", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 3,
    prompt: "An avatar of size lg.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-xl-1403",
    title: "Avatar XL",
    description: "Avatar component size xl.",
    categorySlug: "avatars",
    tags: ["avatar", "xl", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 4,
    prompt: "An avatar of size xl.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  },
  {
    id: "avatar-2xl-1404",
    title: "Avatar 2XL",
    description: "Avatar component size 2xl.",
    categorySlug: "avatars",
    tags: ["avatar", "2xl", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: 0,
    prompt: "An avatar of size 2xl.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  }
];
