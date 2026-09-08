import type { VariantSpec } from "./base";
import { ago } from "./base";

export const BACKGROUND_VARIANTS: VariantSpec[] = [
  {
    id: "bg-mesh-gradient-01", title: "Mesh gradient", description: "Multi-point radial gradient mesh background.",
    categorySlug: "backgrounds", tags: ["background","gradient","mesh","decorative"],
    previewKind: "hero-gradient", featured: 9, createdAt: ago(0), likes: 5200, views: 64000, authorIdx: 0,
    prompt: "A full-viewport mesh gradient background using overlapping radial gradients in violet, pink and sky.",
    code: `export function MeshGradient() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl">
      <div className="absolute inset-0" style={{background:'radial-gradient(at 20% 30%, rgba(139,92,246,.4), transparent 50%), radial-gradient(at 80% 20%, rgba(236,72,153,.35), transparent 50%), radial-gradient(at 50% 80%, rgba(14,165,233,.3), transparent 50%)'}} />
      <div className="relative flex h-full items-center justify-center">
        <p className="text-lg font-semibold text-white drop-shadow-lg">Mesh Gradient</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-aurora-01", title: "Aurora borealis", description: "Animated conic aurora background effect.",
    categorySlug: "backgrounds", tags: ["background","aurora","animated","effect"],
    previewKind: "hero-gradient", featured: 10, createdAt: ago(0), likes: 6100, views: 72000, authorIdx: 1,
    prompt: "An animated aurora borealis background using conic gradients with slow rotation.",
    code: `export function AuroraBackground() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-950">
      <div className="absolute inset-0 opacity-60 blur-3xl" style={{background:'conic-gradient(from 210deg at 50% 50%, #7c3aed, #0ea5e9, #22c55e, #7c3aed)', animation:'spin 8s linear infinite'}} />
      <style>{'@keyframes spin{to{transform:rotate(360deg)}}'}</style>
      <div className="relative flex h-full items-center justify-center">
        <p className="text-lg font-bold text-white">Aurora Borealis</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-dot-grid-01", title: "Dot grid pattern", description: "Subtle repeating dot grid background pattern.",
    categorySlug: "backgrounds", tags: ["background","pattern","dots","subtle"],
    previewKind: "hero-minimal", featured: 7, createdAt: ago(1), likes: 3200, views: 38000, authorIdx: 2,
    prompt: "A subtle dot grid background using radial-gradient repetition.",
    code: `export function DotGrid() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white dark:bg-gray-950" style={{backgroundImage:'radial-gradient(rgba(0,0,0,.15) 1px, transparent 1px)', backgroundSize:'20px 20px'}}>
      <div className="flex h-full items-center justify-center">
        <p className="text-sm font-medium text-gray-500">Dot Grid Pattern</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-blurred-blobs-01", title: "Blurred blobs", description: "Floating blurred color blobs for depth.",
    categorySlug: "backgrounds", tags: ["background","blobs","blur","depth"],
    previewKind: "hero-gradient", featured: 8, createdAt: ago(1), likes: 4300, views: 51000, authorIdx: 3,
    prompt: "A background with three floating blurred color blobs creating depth.",
    code: `export function BlurredBlobs() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white dark:bg-gray-950">
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-violet-400 opacity-30 blur-3xl" />
      <div className="absolute -right-10 top-10 h-48 w-48 rounded-full bg-fuchsia-400 opacity-25 blur-3xl" />
      <div className="absolute -bottom-10 left-1/3 h-36 w-36 rounded-full bg-sky-400 opacity-30 blur-3xl" />
      <div className="relative flex h-full items-center justify-center">
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Blurred Blobs</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-noise-overlay-01", title: "Noise texture overlay", description: "Subtle film grain noise texture.",
    categorySlug: "backgrounds", tags: ["background","noise","texture","grain"],
    previewKind: "hero-minimal", featured: 6, createdAt: ago(2), likes: 2800, views: 33000, authorIdx: 4,
    prompt: "A background with SVG noise texture overlay for a film-grain effect.",
    code: `export function NoiseOverlay() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
      <svg className="absolute inset-0 h-full w-full opacity-20"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>
      <div className="relative flex h-full items-center justify-center">
        <p className="text-lg font-bold text-white">Noise Texture</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-radial-glow-01", title: "Radial spotlight", description: "Centered radial glow spotlight effect.",
    categorySlug: "backgrounds", tags: ["background","radial","glow","spotlight"],
    previewKind: "hero-gradient", featured: 7, createdAt: ago(2), likes: 3100, views: 37000, authorIdx: 5,
    prompt: "A centered radial glow spotlight on a dark background.",
    code: `export function RadialGlow() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-950" style={{background:'radial-gradient(ellipse at center, rgba(139,92,246,.3) 0%, transparent 60%), #09090b'}}>
      <div className="flex h-full items-center justify-center">
        <p className="text-lg font-semibold text-white">Radial Spotlight</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-grid-lines-01", title: "Grid lines", description: "Engineering-style grid line background.",
    categorySlug: "backgrounds", tags: ["background","grid","lines","engineering"],
    previewKind: "hero-minimal", featured: 6, createdAt: ago(3), likes: 2400, views: 29000, authorIdx: 6,
    prompt: "A grid-line background pattern using repeating linear gradients.",
    code: `export function GridLines() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-white dark:bg-gray-950" style={{backgroundImage:'linear-gradient(rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.06) 1px, transparent 1px)', backgroundSize:'40px 40px'}}>
      <div className="flex h-full items-center justify-center">
        <p className="text-sm font-medium text-gray-500">Grid Lines</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-gradient-stripe-01", title: "Gradient stripes", description: "Diagonal gradient stripe pattern.",
    categorySlug: "backgrounds", tags: ["background","stripes","gradient","pattern"],
    previewKind: "hero-gradient", featured: 7, createdAt: ago(3), likes: 2600, views: 31000, authorIdx: 7,
    prompt: "A diagonal stripe pattern with gradient colors.",
    code: `export function GradientStripes() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl" style={{background:'repeating-linear-gradient(135deg, #7c3aed 0px, #7c3aed 10px, #8b5cf6 10px, #8b5cf6 20px, #a78bfa 20px, #a78bfa 30px)'}}>
      <div className="flex h-full items-center justify-center">
        <p className="text-lg font-bold text-white drop-shadow">Gradient Stripes</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-glass-frost-01", title: "Frosted glass", description: "Glassmorphism frosted background.",
    categorySlug: "backgrounds", tags: ["background","glass","frosted","blur"],
    previewKind: "hero-gradient", featured: 9, createdAt: ago(0), likes: 4800, views: 58000, authorIdx: 0,
    prompt: "A frosted glass background with backdrop blur and subtle border.",
    code: `export function FrostedGlass() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl" style={{background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
      <div className="absolute inset-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl">
        <div className="flex h-full items-center justify-center">
          <p className="text-lg font-semibold text-white">Frosted Glass</p>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-topographic-01", title: "Topographic contour", description: "Topographic map contour lines.",
    categorySlug: "backgrounds", tags: ["background","topographic","contour","map"],
    previewKind: "hero-minimal", featured: 6, createdAt: ago(4), likes: 2100, views: 25000, authorIdx: 1,
    prompt: "A topographic map contour line background pattern.",
    code: `export function Topographic() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-amber-50 dark:bg-gray-900">
      <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 200 200"><defs><pattern id="topo" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="0.5"/><circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" strokeWidth="0.3"/></pattern></defs><rect width="100%" height="100%" fill="url(#topo)"/></svg>
      <div className="relative flex h-full items-center justify-center">
        <p className="text-sm font-medium text-amber-800 dark:text-amber-200">Topographic</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-wave-gradient-01", title: "Wave gradient", description: "Layered wave gradient background.",
    categorySlug: "backgrounds", tags: ["background","wave","gradient","layered"],
    previewKind: "hero-gradient", featured: 8, createdAt: ago(1), likes: 3700, views: 44000, authorIdx: 2,
    prompt: "A layered wave gradient background with SVG wave shapes.",
    code: `export function WaveGradient() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gradient-to-b from-sky-500 to-sky-700">
      <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,60 C300,120 600,0 1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)"/><path d="M0,80 C400,20 800,100 1200,40 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.15)"/></svg>
      <div className="relative flex h-full items-center justify-center">
        <p className="text-lg font-bold text-white">Wave Gradient</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-gradient-mesh-warm-01", title: "Warm mesh gradient", description: "Amber-rose warm mesh gradient.",
    categorySlug: "backgrounds", tags: ["background","gradient","mesh","warm"],
    previewKind: "hero-gradient", featured: 8, createdAt: ago(1), likes: 3900, views: 47000, authorIdx: 3,
    prompt: "A warm-toned mesh gradient using amber, rose and orange radials.",
    code: `export function WarmMesh() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl" style={{background:'radial-gradient(at 0% 0%, rgba(251,146,60,.5), transparent 50%), radial-gradient(at 100% 0%, rgba(244,63,94,.4), transparent 50%), radial-gradient(at 50% 100%, rgba(245,158,11,.4), transparent 50%), #1c1917'}}>
      <div className="flex h-full items-center justify-center">
        <p className="text-lg font-semibold text-white">Warm Mesh</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-cyber-grid-01", title: "Cyber grid", description: "Retro cyberpunk perspective grid.",
    categorySlug: "backgrounds", tags: ["background","cyber","grid","retro"],
    previewKind: "hero-gradient", featured: 7, createdAt: ago(2), likes: 3300, views: 40000, authorIdx: 4,
    prompt: "A retro cyberpunk perspective grid background with neon accent.",
    code: `export function CyberGrid() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-950">
      <div className="absolute inset-0" style={{background:'linear-gradient(transparent 0%, rgba(139,92,246,.1) 100%)', backgroundImage:'linear-gradient(rgba(139,92,246,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.15) 1px, transparent 1px)', backgroundSize:'40px 40px', transform:'perspective(500px) rotateX(60deg)', transformOrigin:'center top'}} />
      <div className="relative flex h-full items-end justify-center pb-8">
        <p className="text-lg font-bold text-violet-400">Cyber Grid</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-spotlight-dual-01", title: "Dual spotlight", description: "Two-tone spotlight background.",
    categorySlug: "backgrounds", tags: ["background","spotlight","dual","glow"],
    previewKind: "hero-gradient", featured: 7, createdAt: ago(3), likes: 2700, views: 32000, authorIdx: 5,
    prompt: "A dual spotlight background with two glowing orbs on dark.",
    code: `export function DualSpotlight() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-gray-950">
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-violet-600 opacity-20 blur-[80px]" />
      <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-sky-500 opacity-20 blur-[80px]" />
      <div className="relative flex h-full items-center justify-center">
        <p className="text-lg font-semibold text-white">Dual Spotlight</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "bg-gradient-conic-01", title: "Conic gradient", description: "Smooth conic gradient background.",
    categorySlug: "backgrounds", tags: ["background","conic","gradient","smooth"],
    previewKind: "hero-gradient", featured: 8, createdAt: ago(2), likes: 3500, views: 42000, authorIdx: 6,
    prompt: "A smooth conic gradient with violet, sky and emerald transitions.",
    code: `export function ConicGradient() {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl" style={{background:'conic-gradient(from 45deg at 50% 50%, #7c3aed, #0ea5e9, #10b981, #f59e0b, #ef4444, #7c3aed)'}}>
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      <div className="relative flex h-full items-center justify-center">
        <p className="text-lg font-bold text-white drop-shadow-lg">Conic Gradient</p>
      </div>
    </div>
  );
}`,
  },
];
