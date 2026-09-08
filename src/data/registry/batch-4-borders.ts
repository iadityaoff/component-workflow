import type { VariantSpec } from "./base";
import { ago } from "./base";

export const BORDER_VARIANTS: VariantSpec[] = [
  {
    id: "border-gradient-01", title: "Gradient border", description: "Card with animated gradient border ring.",
    categorySlug: "borders", tags: ["border","gradient","animated","premium"],
    previewKind: "card-stat", featured: 9, createdAt: ago(0), likes: 4800, views: 58000, authorIdx: 0,
    prompt: "A card with a rotating gradient border using conic-gradient.",
    code: `export function GradientBorder() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="relative rounded-2xl p-[2px]" style={{background:'conic-gradient(from 0deg, #7c3aed, #ec4899, #f59e0b, #7c3aed)'}}>
        <div className="rounded-2xl bg-white p-6 dark:bg-gray-900">
          <h3 className="text-sm font-semibold dark:text-white">Gradient Border</h3>
          <p className="mt-1 text-xs text-gray-500">A premium card with conic gradient border.</p>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "border-glow-ring-01", title: "Glow ring", description: "Neon glow ring border effect.",
    categorySlug: "borders", tags: ["border","glow","neon","ring"],
    previewKind: "card-stat", featured: 8, createdAt: ago(1), likes: 3900, views: 47000, authorIdx: 1,
    prompt: "A card with a neon glow ring border using box-shadow.",
    code: `export function GlowRing() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="rounded-2xl border border-violet-500/30 bg-white p-6 shadow-[0_0_15px_rgba(139,92,246,.3),0_0_45px_rgba(139,92,246,.1)] dark:bg-gray-900">
        <h3 className="text-sm font-semibold dark:text-white">Glow Ring</h3>
        <p className="mt-1 text-xs text-gray-500">Neon glow border with layered box-shadows.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "border-animated-dash-01", title: "Animated dashed", description: "Animated dashed border using SVG.",
    categorySlug: "borders", tags: ["border","dashed","animated","svg"],
    previewKind: "card-stat", featured: 7, createdAt: ago(2), likes: 3200, views: 38000, authorIdx: 2,
    prompt: "An animated dashed border that flows around the card using SVG stroke-dashoffset.",
    code: `export function AnimatedDash() {
  return (
    <div className="relative mx-auto max-w-xs">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 160">
        <rect x="1" y="1" width="298" height="158" rx="16" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="8 6" style={{animation:'dash 10s linear infinite'}} />
      </svg>
      <style>{'@keyframes dash{to{stroke-dashoffset:-100}}'}</style>
      <div className="relative p-6">
        <h3 className="text-sm font-semibold dark:text-white">Animated Dashes</h3>
        <p className="mt-1 text-xs text-gray-500">SVG stroke-dashoffset animation.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "border-glass-edge-01", title: "Glass edge", description: "Glassmorphism edge highlight border.",
    categorySlug: "borders", tags: ["border","glass","highlight","premium"],
    previewKind: "card-stat", featured: 8, createdAt: ago(1), likes: 3600, views: 43000, authorIdx: 3,
    prompt: "A card with glassmorphism top-edge light reflection.",
    code: `export function GlassEdge() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-white/5" style={{boxShadow:'inset 0 1px 0 rgba(255,255,255,.2), 0 10px 30px -10px rgba(0,0,0,.3)'}}>
        <h3 className="text-sm font-semibold text-white">Glass Edge</h3>
        <p className="mt-1 text-xs text-white/60">Top-edge light reflection with backdrop blur.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "border-conic-spin-01", title: "Conic spin border", description: "Spinning conic gradient border.",
    categorySlug: "borders", tags: ["border","conic","spin","animated"],
    previewKind: "card-stat", featured: 9, createdAt: ago(0), likes: 5100, views: 62000, authorIdx: 4,
    prompt: "A card with a slowly spinning conic gradient border.",
    code: `export function ConicSpin() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="relative overflow-hidden rounded-2xl p-[2px]">
        <div className="absolute inset-0" style={{background:'conic-gradient(from 0deg, transparent, #7c3aed, transparent)', animation:'spin 4s linear infinite'}} />
        <style>{'@keyframes spin{to{transform:rotate(360deg)}}'}</style>
        <div className="relative rounded-2xl bg-white p-6 dark:bg-gray-900">
          <h3 className="text-sm font-semibold dark:text-white">Conic Spin</h3>
          <p className="mt-1 text-xs text-gray-500">Rotating conic gradient border.</p>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "border-rainbow-01", title: "Rainbow border", description: "Smooth rainbow gradient border.",
    categorySlug: "borders", tags: ["border","rainbow","gradient","colorful"],
    previewKind: "card-stat", featured: 7, createdAt: ago(2), likes: 2900, views: 35000, authorIdx: 5,
    prompt: "A card with a smooth rainbow gradient border.",
    code: `export function RainbowBorder() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="rounded-2xl p-[2px]" style={{background:'linear-gradient(135deg, #ef4444, #f59e0b, #22c55e, #3b82f6, #8b5cf6, #ec4899)'}}>
        <div className="rounded-2xl bg-white p-6 dark:bg-gray-900">
          <h3 className="text-sm font-semibold dark:text-white">Rainbow Border</h3>
          <p className="mt-1 text-xs text-gray-500">Full spectrum gradient border.</p>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "border-pulse-glow-01", title: "Pulse glow", description: "Pulsing glow border animation.",
    categorySlug: "borders", tags: ["border","pulse","glow","animated"],
    previewKind: "card-stat", featured: 8, createdAt: ago(1), likes: 3400, views: 41000, authorIdx: 6,
    prompt: "A card with a pulsing glow border that fades in and out.",
    code: `export function PulseGlow() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="rounded-2xl border border-violet-400/40 bg-white p-6 dark:bg-gray-900" style={{animation:'pulseGlow 2s ease-in-out infinite', boxShadow:'0 0 15px rgba(139,92,246,.2)'}}>
        <style>{'@keyframes pulseGlow{0%,100%{box-shadow:0 0 15px rgba(139,92,246,.2)}50%{box-shadow:0 0 30px rgba(139,92,246,.4)}}'}</style>
        <h3 className="text-sm font-semibold dark:text-white">Pulse Glow</h3>
        <p className="mt-1 text-xs text-gray-500">Breathing glow effect.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "border-dotted-accent-01", title: "Dotted accent", description: "Dotted border with accent color.",
    categorySlug: "borders", tags: ["border","dotted","accent","minimal"],
    previewKind: "card-stat", featured: 6, createdAt: ago(3), likes: 2100, views: 25000, authorIdx: 7,
    prompt: "A card with dotted border in an accent color.",
    code: `export function DottedAccent() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="rounded-2xl border-2 border-dotted border-violet-300 bg-white p-6 dark:border-violet-700 dark:bg-gray-900">
        <h3 className="text-sm font-semibold dark:text-white">Dotted Accent</h3>
        <p className="mt-1 text-xs text-gray-500">Simple dotted border with violet accent.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "border-inset-ring-01", title: "Inset ring", description: "Double inset ring border.",
    categorySlug: "borders", tags: ["border","inset","ring","double"],
    previewKind: "card-stat", featured: 7, createdAt: ago(2), likes: 2500, views: 30000, authorIdx: 0,
    prompt: "A card with double inset ring borders for a layered look.",
    code: `export function InsetRing() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 ring-offset-4 ring-offset-white dark:bg-gray-900 dark:ring-gray-700 dark:ring-offset-gray-950" style={{boxShadow:'inset 0 0 0 1px rgba(0,0,0,.05)'}}>
        <h3 className="text-sm font-semibold dark:text-white">Inset Ring</h3>
        <p className="mt-1 text-xs text-gray-500">Double ring with offset for depth.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "border-shimmer-01", title: "Shimmer border", description: "Moving shimmer highlight along border.",
    categorySlug: "borders", tags: ["border","shimmer","animated","highlight"],
    previewKind: "card-stat", featured: 9, createdAt: ago(0), likes: 4500, views: 54000, authorIdx: 1,
    prompt: "A card with a shimmer highlight that moves along the border.",
    code: `export function ShimmerBorder() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="relative overflow-hidden rounded-2xl p-[1px]">
        <div className="absolute inset-0" style={{background:'linear-gradient(90deg, transparent, rgba(139,92,246,.6), transparent)', backgroundSize:'200% 100%', animation:'shimmer 3s linear infinite'}} />
        <style>{'@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}'}</style>
        <div className="relative rounded-2xl bg-white p-6 dark:bg-gray-900">
          <h3 className="text-sm font-semibold dark:text-white">Shimmer Border</h3>
          <p className="mt-1 text-xs text-gray-500">Moving light along the edge.</p>
        </div>
      </div>
    </div>
  );
}`,
  },
];
