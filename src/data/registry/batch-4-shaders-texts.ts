import type { VariantSpec } from "./base";
import { ago } from "./base";

export const SHADER_VARIANTS: VariantSpec[] = [
  {
    id: "shader-gradient-morph-01", title: "Morphing gradient", description: "Animated gradient card with color morphing.",
    categorySlug: "shaders", tags: ["shader","gradient","animated","morph"],
    previewKind: "hero-gradient", featured: 10, createdAt: ago(0), likes: 5800, views: 70000, authorIdx: 0,
    prompt: "A card with an animated morphing gradient background.",
    code: `export function MorphGradient() {
  return (
    <div className="mx-auto max-w-sm">
      <div className="h-48 rounded-2xl p-6" style={{background:'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)', backgroundSize:'400% 400%', animation:'morph 8s ease infinite'}}>
        <style>{'@keyframes morph{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}'}</style>
        <h3 className="text-lg font-bold text-white">Morphing Gradient</h3>
        <p className="mt-2 text-sm text-white/80">Colors shift smoothly through the spectrum.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "shader-plasma-01", title: "Plasma effect", description: "CSS-only plasma-like animated background.",
    categorySlug: "shaders", tags: ["shader","plasma","animated","css"],
    previewKind: "hero-gradient", featured: 9, createdAt: ago(0), likes: 5200, views: 63000, authorIdx: 1,
    prompt: "A plasma-like animated background using overlapping animated radial gradients.",
    code: `export function PlasmaEffect() {
  return (
    <div className="relative mx-auto h-48 max-w-sm overflow-hidden rounded-2xl bg-gray-950">
      <div className="absolute h-full w-full opacity-70" style={{background:'radial-gradient(circle at 30% 50%, #7c3aed, transparent 50%)', animation:'p1 5s ease-in-out infinite alternate'}} />
      <div className="absolute h-full w-full opacity-70" style={{background:'radial-gradient(circle at 70% 50%, #ec4899, transparent 50%)', animation:'p2 7s ease-in-out infinite alternate'}} />
      <div className="absolute h-full w-full opacity-50" style={{background:'radial-gradient(circle at 50% 80%, #0ea5e9, transparent 50%)', animation:'p3 6s ease-in-out infinite alternate'}} />
      <style>{'@keyframes p1{to{transform:translate(20%,-10%)}}@keyframes p2{to{transform:translate(-20%,10%)}}@keyframes p3{to{transform:translate(10%,-20%)}}'}</style>
      <div className="relative flex h-full items-center justify-center">
        <p className="text-lg font-bold text-white">Plasma</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "shader-holo-card-01", title: "Holographic card", description: "Holographic foil card effect.",
    categorySlug: "shaders", tags: ["shader","holographic","foil","premium"],
    previewKind: "card-stat", featured: 10, createdAt: ago(0), likes: 6200, views: 75000, authorIdx: 2,
    prompt: "A card with holographic rainbow foil effect on hover.",
    code: `export function HoloCard() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="group relative overflow-hidden rounded-2xl bg-gray-900 p-6">
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-40" style={{background:'linear-gradient(135deg, #ff0000, #ff7700, #ffff00, #00ff00, #0000ff, #8b00ff)', backgroundSize:'200% 200%', animation:'holo 3s linear infinite', mixBlendMode:'overlay'}} />
        <style>{'@keyframes holo{0%{background-position:0% 0%}100%{background-position:200% 200%}}'}</style>
        <h3 className="relative text-sm font-semibold text-white">Holographic Card</h3>
        <p className="relative mt-1 text-xs text-gray-400">Hover for rainbow foil effect.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "shader-noise-gradient-01", title: "Noisy gradient", description: "Gradient with SVG noise texture.",
    categorySlug: "shaders", tags: ["shader","noise","gradient","texture"],
    previewKind: "hero-gradient", featured: 8, createdAt: ago(1), likes: 4100, views: 49000, authorIdx: 3,
    prompt: "A gradient card with SVG noise texture overlay for organic feel.",
    code: `export function NoisyGradient() {
  return (
    <div className="relative mx-auto h-48 max-w-sm overflow-hidden rounded-2xl" style={{background:'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)'}}>
      <svg className="absolute inset-0 h-full w-full opacity-30 mix-blend-overlay"><filter id="ng"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#ng)"/></svg>
      <div className="relative flex h-full items-center justify-center">
        <p className="text-lg font-bold text-white">Noisy Gradient</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "shader-liquid-01", title: "Liquid animation", description: "Liquid-like animated blob background.",
    categorySlug: "shaders", tags: ["shader","liquid","blob","animated"],
    previewKind: "hero-gradient", featured: 9, createdAt: ago(0), likes: 5500, views: 66000, authorIdx: 4,
    prompt: "Animated liquid blobs with smooth morphing shapes.",
    code: `export function LiquidBlobs() {
  return (
    <div className="relative mx-auto h-48 max-w-sm overflow-hidden rounded-2xl bg-gray-950">
      <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-violet-500 opacity-60 blur-2xl" style={{animation:'blob1 7s infinite'}} />
      <div className="absolute right-1/4 bottom-1/4 h-40 w-40 rounded-full bg-fuchsia-500 opacity-50 blur-2xl" style={{animation:'blob2 8s infinite'}} />
      <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 opacity-50 blur-2xl" style={{animation:'blob3 6s infinite'}} />
      <style>{'@keyframes blob1{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(30px,-20px) scale(1.2)}66%{transform:translate(-20px,20px) scale(0.8)}}@keyframes blob2{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(-30px,10px) scale(0.9)}66%{transform:translate(20px,-30px) scale(1.1)}}@keyframes blob3{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.3)}}'}</style>
      <div className="relative flex h-full items-center justify-center">
        <p className="text-lg font-bold text-white">Liquid Blobs</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "shader-iridescent-01", title: "Iridescent surface", description: "Oil-slick iridescent color shift.",
    categorySlug: "shaders", tags: ["shader","iridescent","color-shift","premium"],
    previewKind: "hero-gradient", featured: 8, createdAt: ago(1), likes: 4400, views: 53000, authorIdx: 5,
    prompt: "An iridescent oil-slick surface effect card.",
    code: `export function Iridescent() {
  return (
    <div className="mx-auto max-w-sm">
      <div className="h-48 rounded-2xl p-6" style={{background:'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)', backgroundSize:'300% 300%', animation:'iri 6s ease infinite'}}>
        <style>{'@keyframes iri{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}'}</style>
        <h3 className="text-lg font-bold text-white drop-shadow">Iridescent</h3>
        <p className="mt-2 text-sm text-white/80">Oil-slick color shift animation.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "shader-neon-pulse-01", title: "Neon pulse", description: "Pulsing neon glow shader card.",
    categorySlug: "shaders", tags: ["shader","neon","pulse","glow"],
    previewKind: "card-stat", featured: 8, createdAt: ago(1), likes: 3800, views: 46000, authorIdx: 6,
    prompt: "A card with pulsing neon glow effect.",
    code: `export function NeonPulse() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="rounded-2xl border border-violet-500/50 bg-gray-950 p-6" style={{animation:'neonP 2s ease-in-out infinite'}}>
        <style>{'@keyframes neonP{0%,100%{box-shadow:0 0 5px #7c3aed,0 0 20px rgba(124,58,237,.3),inset 0 0 10px rgba(124,58,237,.1)}50%{box-shadow:0 0 10px #7c3aed,0 0 40px rgba(124,58,237,.4),inset 0 0 20px rgba(124,58,237,.2)}}'}</style>
        <h3 className="text-sm font-semibold text-violet-300">Neon Pulse</h3>
        <p className="mt-1 text-xs text-gray-500">Breathing neon glow.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "shader-fire-gradient-01", title: "Fire gradient", description: "Animated fire-like gradient.",
    categorySlug: "shaders", tags: ["shader","fire","gradient","warm"],
    previewKind: "hero-gradient", featured: 7, createdAt: ago(2), likes: 3300, views: 40000, authorIdx: 7,
    prompt: "An animated fire-like gradient background.",
    code: `export function FireGradient() {
  return (
    <div className="mx-auto max-w-sm">
      <div className="h-48 rounded-2xl p-6" style={{background:'linear-gradient(-45deg, #ff512f, #f09819, #dd2476, #ff512f)', backgroundSize:'400% 400%', animation:'fire 4s ease infinite'}}>
        <style>{'@keyframes fire{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}'}</style>
        <h3 className="text-lg font-bold text-white">Fire Gradient</h3>
        <p className="mt-2 text-sm text-white/80">Warm animated flames.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "shader-northern-lights-01", title: "Northern lights", description: "Flowing northern lights effect.",
    categorySlug: "shaders", tags: ["shader","northern-lights","aurora","flowing"],
    previewKind: "hero-gradient", featured: 9, createdAt: ago(0), likes: 5000, views: 61000, authorIdx: 0,
    prompt: "A flowing northern lights aurora effect.",
    code: `export function NorthernLights() {
  return (
    <div className="relative mx-auto h-48 max-w-sm overflow-hidden rounded-2xl bg-[#0a0a1a]">
      <div className="absolute inset-0 opacity-80" style={{background:'linear-gradient(180deg, transparent, rgba(34,197,94,.15), rgba(14,165,233,.2), transparent)', animation:'nl 4s ease-in-out infinite', transform:'skewX(-10deg) scaleX(1.5)'}} />
      <div className="absolute inset-0 opacity-60" style={{background:'linear-gradient(180deg, transparent, rgba(139,92,246,.2), rgba(236,72,153,.15), transparent)', animation:'nl 6s ease-in-out infinite reverse', transform:'skewX(10deg) scaleX(1.5)'}} />
      <style>{'@keyframes nl{0%,100%{opacity:.4;transform:skewX(-10deg) scaleX(1.5) translateY(0)}50%{opacity:.8;transform:skewX(-10deg) scaleX(1.5) translateY(-20px)}}'}</style>
      <div className="relative flex h-full items-center justify-center">
        <p className="text-lg font-bold text-white">Northern Lights</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "shader-glass-refraction-01", title: "Glass refraction", description: "Light refraction through glass.",
    categorySlug: "shaders", tags: ["shader","glass","refraction","light"],
    previewKind: "card-stat", featured: 8, createdAt: ago(1), likes: 4000, views: 48000, authorIdx: 1,
    prompt: "A card with glass light refraction effect.",
    code: `export function GlassRefraction() {
  return (
    <div className="mx-auto max-w-xs">
      <div className="relative overflow-hidden rounded-2xl bg-gray-950 p-6">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500 opacity-40 blur-xl" />
        <div className="absolute -bottom-6 -left-6 h-20 w-20 rounded-full bg-sky-400 opacity-30 blur-xl" />
        <div className="absolute inset-0 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm" />
        <div className="relative">
          <h3 className="text-sm font-semibold text-white">Glass Refraction</h3>
          <p className="mt-1 text-xs text-gray-400">Light bending through glass layers.</p>
        </div>
      </div>
    </div>
  );
}`,
  },
];

export const TEXT_DISPLAY_VARIANTS: VariantSpec[] = [
  {
    id: "text-gradient-01", title: "Gradient text", description: "Text with gradient color fill.",
    categorySlug: "texts", tags: ["text","gradient","display","heading"],
    previewKind: "hero-gradient", featured: 9, createdAt: ago(0), likes: 5100, views: 62000, authorIdx: 2,
    prompt: "A heading with gradient text fill using background-clip.",
    code: `export function GradientText() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold" style={{background:'linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
        Gradient Heading
      </h1>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Using background-clip text fill</p>
    </div>
  );
}`,
  },
  {
    id: "text-shimmer-01", title: "Shimmer text", description: "Text with animated shimmer highlight.",
    categorySlug: "texts", tags: ["text","shimmer","animated","highlight"],
    previewKind: "hero-gradient", featured: 10, createdAt: ago(0), likes: 5600, views: 68000, authorIdx: 3,
    prompt: "Text with a moving shimmer highlight animation.",
    code: `export function ShimmerText() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-300" style={{background:'linear-gradient(90deg, #6b7280 0%, #f9fafb 40%, #f9fafb 60%, #6b7280 100%)', backgroundSize:'200% 100%', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', animation:'txtShim 3s linear infinite'}}>
        Shimmer Effect
      </h1>
      <style>{'@keyframes txtShim{0%{background-position:200% 0}100%{background-position:-200% 0}}'}</style>
    </div>
  );
}`,
  },
  {
    id: "text-typewriter-01", title: "Typewriter effect", description: "Text typing animation with cursor.",
    categorySlug: "texts", tags: ["text","typewriter","animated","cursor"],
    previewKind: "hero-minimal", featured: 9, createdAt: ago(0), likes: 4900, views: 59000, authorIdx: 4,
    prompt: "A typewriter text animation with blinking cursor.",
    code: `export function Typewriter() {
  return (
    <div className="p-8 text-center">
      <h1 className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-gray-800 text-2xl font-bold dark:border-white dark:text-white" style={{animation:'typing 3s steps(20) infinite, blink .7s step-end infinite', width:'20ch'}}>
        Hello, World!
      </h1>
      <style>{'@keyframes typing{0%,100%{width:0}50%{width:20ch}}@keyframes blink{50%{border-color:transparent}}'}</style>
    </div>
  );
}`,
  },
  {
    id: "text-glitch-01", title: "Glitch text", description: "Cyberpunk glitch text effect.",
    categorySlug: "texts", tags: ["text","glitch","cyber","effect"],
    previewKind: "hero-gradient", featured: 8, createdAt: ago(1), likes: 4200, views: 51000, authorIdx: 5,
    prompt: "A cyberpunk glitch text effect with color offset.",
    code: `export function GlitchText() {
  return (
    <div className="relative p-8 text-center bg-gray-950 rounded-2xl">
      <h1 className="relative text-4xl font-black text-white">
        <span className="absolute left-0 top-0 text-red-500 opacity-70" style={{animation:'glitch1 2s infinite', clipPath:'inset(20% 0 60% 0)'}}>GLITCH</span>
        GLITCH
        <span className="absolute left-0 top-0 text-cyan-400 opacity-70" style={{animation:'glitch2 2s infinite', clipPath:'inset(60% 0 10% 0)'}}>GLITCH</span>
      </h1>
      <style>{'@keyframes glitch1{0%,100%{transform:translate(0)}20%{transform:translate(-3px,2px)}40%{transform:translate(3px,-2px)}60%{transform:translate(-2px)}80%{transform:translate(2px,2px)}}@keyframes glitch2{0%,100%{transform:translate(0)}20%{transform:translate(3px,-2px)}40%{transform:translate(-3px,2px)}60%{transform:translate(2px)}80%{transform:translate(-2px,-2px)}}'}</style>
    </div>
  );
}`,
  },
  {
    id: "text-outline-01", title: "Outline text", description: "Transparent text with stroke outline.",
    categorySlug: "texts", tags: ["text","outline","stroke","display"],
    previewKind: "hero-minimal", featured: 7, createdAt: ago(2), likes: 3100, views: 37000, authorIdx: 6,
    prompt: "Large display text with only stroke outline, no fill.",
    code: `export function OutlineText() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-black tracking-tight" style={{WebkitTextStroke:'2px currentColor', WebkitTextFillColor:'transparent', color:'#7c3aed'}}>
        OUTLINE
      </h1>
      <p className="mt-2 text-sm text-gray-500">Stroke-only display text</p>
    </div>
  );
}`,
  },
  {
    id: "text-split-color-01", title: "Split color text", description: "Text with two-tone color split.",
    categorySlug: "texts", tags: ["text","split","color","creative"],
    previewKind: "hero-minimal", featured: 7, createdAt: ago(2), likes: 2800, views: 33000, authorIdx: 7,
    prompt: "A heading with a vertical two-tone color split effect.",
    code: `export function SplitColor() {
  return (
    <div className="p-8 text-center">
      <h1 className="relative inline-block text-4xl font-bold">
        <span className="text-gray-900 dark:text-white">Split</span>
        <span className="text-violet-500">Color</span>
      </h1>
      <p className="mt-2 text-sm text-gray-500">Two-tone heading treatment</p>
    </div>
  );
}`,
  },
  {
    id: "text-blur-reveal-01", title: "Blur reveal", description: "Text that unblurs on hover.",
    categorySlug: "texts", tags: ["text","blur","reveal","hover"],
    previewKind: "hero-minimal", featured: 8, createdAt: ago(1), likes: 3500, views: 42000, authorIdx: 0,
    prompt: "Blurred text that reveals on hover.",
    code: `export function BlurReveal() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-gray-900 blur-md transition-all duration-500 hover:blur-0 cursor-pointer dark:text-white">
        Hover to Reveal
      </h1>
      <p className="mt-3 text-sm text-gray-500">Hover over the text above</p>
    </div>
  );
}`,
  },
  {
    id: "text-counter-01", title: "Animated counter", description: "Number counting up animation.",
    categorySlug: "texts", tags: ["text","counter","number","animated"],
    previewKind: "card-stat", featured: 8, createdAt: ago(1), likes: 3700, views: 45000, authorIdx: 1,
    prompt: "An animated counting number display.",
    code: `import { useState, useEffect } from 'react';
export function AnimatedCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = 2847;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      setCount(c => { const next = c + step; return next >= target ? (clearInterval(timer), target) : next; });
    }, 16);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="p-8 text-center">
      <p className="text-5xl font-bold tabular-nums text-gray-900 dark:text-white">{count.toLocaleString()}</p>
      <p className="mt-2 text-sm text-gray-500">Active users</p>
    </div>
  );
}`,
  },
  {
    id: "text-marquee-01", title: "Marquee scroll", description: "Horizontal auto-scrolling text.",
    categorySlug: "texts", tags: ["text","marquee","scroll","animated"],
    previewKind: "hero-minimal", featured: 7, createdAt: ago(2), likes: 2900, views: 35000, authorIdx: 2,
    prompt: "A smooth horizontal marquee scrolling text.",
    code: `export function MarqueeText() {
  const items = ['Design Systems', 'Component Registry', 'AI Generation', 'Dark Mode', 'Accessibility'];
  return (
    <div className="overflow-hidden rounded-2xl bg-gray-950 py-4">
      <div className="flex gap-8 whitespace-nowrap" style={{animation:'marquee 15s linear infinite'}}>
        {[...items,...items].map((t,i) => (
          <span key={i} className="text-lg font-semibold text-white/80">{t} <span className="text-violet-500 mx-4">•</span></span>
        ))}
      </div>
      <style>{'@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}'}</style>
    </div>
  );
}`,
  },
  {
    id: "text-highlight-01", title: "Highlight text", description: "Text with animated highlight marker.",
    categorySlug: "texts", tags: ["text","highlight","marker","underline"],
    previewKind: "hero-minimal", featured: 7, createdAt: ago(2), likes: 2600, views: 31000, authorIdx: 3,
    prompt: "Text with a yellow marker highlight animation.",
    code: `export function HighlightText() {
  return (
    <div className="p-8 text-center">
      <p className="text-lg text-gray-700 dark:text-gray-300">
        Build <span className="relative inline-block"><span className="relative z-10 font-semibold">beautiful components</span><span className="absolute bottom-0 left-0 h-3 w-full bg-amber-300/50 dark:bg-amber-500/30" style={{animation:'highlight 1s ease-out forwards', transformOrigin:'left'}} /></span> with ease.
      </p>
      <style>{'@keyframes highlight{from{transform:scaleX(0)}to{transform:scaleX(1)}}'}</style>
    </div>
  );
}`,
  },
];
