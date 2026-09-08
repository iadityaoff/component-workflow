import * as fs from "fs";
import * as path from "path";

const colors = [
  "slate", "gray", "zinc", "neutral", "stone",
  "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan",
  "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"
];

let components = [];
let idCounter = 1000;

function generateButtons() {
  for (const color of colors) {
    // Solid Button
    components.push(`  {
    id: "btn-solid-${color}-${idCounter++}",
    title: "${color.charAt(0).toUpperCase() + color.slice(1)} Solid Button",
    description: "A solid button in ${color} color.",
    categorySlug: "buttons",
    tags: ["button", "${color}", "solid"],
    previewKind: "button-primary",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: ${idCounter % 5},
    prompt: "A solid ${color} button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg bg-${color}-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-500/50" {...props}>
      {children}
    </button>
  );
}`
  }`);

    // Outline Button
    components.push(`  {
    id: "btn-outline-${color}-${idCounter++}",
    title: "${color.charAt(0).toUpperCase() + color.slice(1)} Outline Button",
    description: "An outline button in ${color} color.",
    categorySlug: "buttons",
    tags: ["button", "${color}", "outline"],
    previewKind: "button-outline",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: ${idCounter % 5},
    prompt: "An outline ${color} button.",
    code: `export function Button({ children = "Click me", ...props }) {
  return (
    <button className="inline-flex items-center justify-center rounded-lg border border-${color}-300 px-4 py-2 text-sm font-medium text-${color}-700 transition hover:bg-${color}-50 focus:outline-none focus:ring-2 focus:ring-${color}-500/50 dark:border-${color}-700 dark:text-${color}-300 dark:hover:bg-${color}-950/50" {...props}>
      {children}
    </button>
  );
}`
  }`);
  }
}

function generateBadges() {
  for (const color of colors) {
    // Soft Badge
    components.push(`  {
    id: "badge-soft-${color}-${idCounter++}",
    title: "${color.charAt(0).toUpperCase() + color.slice(1)} Soft Badge",
    description: "A soft badge in ${color} color.",
    categorySlug: "badges",
    tags: ["badge", "${color}", "soft"],
    previewKind: "badge-row",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: ${idCounter % 5},
    prompt: "A soft ${color} badge.",
    code: `export function Badge({ children = "${color}" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-${color}-100 px-2.5 py-0.5 text-xs font-medium text-${color}-800 dark:bg-${color}-900/30 dark:text-${color}-300">
      {children}
    </span>
  );
}`
  }`);
  }
}

function generateAlerts() {
  for (const color of ["red", "orange", "amber", "yellow", "green", "emerald", "blue", "indigo", "violet", "rose"]) {
    components.push(`  {
    id: "alert-soft-${color}-${idCounter++}",
    title: "${color.charAt(0).toUpperCase() + color.slice(1)} Soft Alert",
    description: "A soft alert in ${color} color.",
    categorySlug: "alerts",
    tags: ["alert", "${color}", "soft"],
    previewKind: "alert-info",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: ${idCounter % 5},
    prompt: "A soft ${color} alert.",
    code: `export function Alert({ title = "Attention", children = "This is a ${color} alert message." }) {
  return (
    <div className="rounded-xl bg-${color}-50 p-4 dark:bg-${color}-950/20 text-sm text-${color}-800 dark:text-${color}-300">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-1 opacity-90">{children}</div>
    </div>
  );
}`
  }`);
  }
}

function generateAvatars() {
    for (const size of ["sm", "md", "lg", "xl", "2xl"]) {
        const px = size === "sm" ? 8 : size === "md" ? 10 : size === "lg" ? 12 : size === "xl" ? 14 : 16;
        components.push(`  {
    id: "avatar-${size}-${idCounter++}",
    title: "Avatar ${size.toUpperCase()}",
    description: "Avatar component size ${size}.",
    categorySlug: "avatars",
    tags: ["avatar", "${size}", "profile"],
    previewKind: "avatar-group",
    featured: 5, createdAt: ago(1), likes: Math.floor(Math.random() * 500), views: Math.floor(Math.random() * 5000), authorIdx: ${idCounter % 5},
    prompt: "An avatar of size ${size}.",
    code: `export function Avatar() {
  return (
    <div className="inline-flex h-${px} w-${px} items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800">
      <span className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">UI</span>
    </div>
  );
}`
  }`);
    }
}

generateButtons();
generateBadges();
generateAlerts();
generateAvatars();

const fileContent = `import type { VariantSpec } from "./base";
import { ago } from "./base";

export const GENERATED_VARIANTS: VariantSpec[] = [
\${components.join(",\\n")}
];
`;

fs.writeFileSync(path.join(__dirname, "../src/data/registry/generated-batch.ts"), fileContent, "utf8");
console.log(`Generated \${components.length} components.`);
