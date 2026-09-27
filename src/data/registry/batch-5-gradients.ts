import type { VariantSpec } from "./base";
import { ago } from "./base";

export const GRADIENT_VARIANTS: VariantSpec[] = [
  {
    id: "gradient-mesh-aurora-01",
    title: "Aurora Mesh Gradient",
    description: "Flowing dynamic mesh gradient with neon emerald, cyan and violet tones.",
    categorySlug: "gradients",
    tags: ["gradient", "mesh", "aurora", "ambient", "neon"],
    previewKind: "hero-gradient",
    featured: 10,
    createdAt: ago(0),
    likes: 4920,
    views: 61000,
    authorIdx: 0,
    prompt: "A modern fluid aurora mesh gradient hero container with ambient blur and subtle floating animation.",
    code: `export function AuroraMeshGradient() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-slate-950 p-6 text-white shadow-2xl">
      <div className="absolute -top-24 -left-20 h-56 w-56 rounded-full bg-emerald-500/30 blur-3xl filter animate-pulse" />
      <div className="absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-cyan-500/30 blur-3xl filter" />
      <div className="absolute top-10 right-10 h-40 w-40 rounded-full bg-purple-600/30 blur-2xl filter" />

      <div className="relative z-10 space-y-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-300 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          Aurora Mesh
        </span>
        <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          Luminous Northern Lights
        </h3>
        <p className="text-xs text-white/70 leading-relaxed">
          Deep reactive ambient mesh gradient blended with radial glow filters for high-end landing pages.
        </p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-hyper-sunset-02",
    title: "Sunset Radiance Gradient",
    description: "Warm golden-hour sunset gradient blending fuchsia, amber, and violet.",
    categorySlug: "gradients",
    tags: ["gradient", "sunset", "warm", "linear", "radiance"],
    previewKind: "hero-gradient",
    featured: 9,
    createdAt: ago(1),
    likes: 4210,
    views: 53200,
    authorIdx: 1,
    prompt: "A vibrant warm sunset gradient banner with smooth transitions between rose, coral, and violet.",
    code: `export function SunsetRadiance() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl p-6 text-white shadow-xl" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #8b5cf6 100%)' }}>
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
      <div className="relative z-10">
        <div className="inline-block rounded-lg bg-white/20 px-2.5 py-1 text-[11px] font-medium backdrop-blur-md">
          Golden Hour
        </div>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-white">
          Sunset Radiance
        </h3>
        <p className="mt-1 text-xs text-white/90">
          Smooth triple-stop gradient with high dynamic contrast for banners and callouts.
        </p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-conic-rainbow-03",
    title: "Conic Prism Spectrum",
    description: "Animated rotating conic gradient disc with frosted glass center.",
    categorySlug: "gradients",
    tags: ["gradient", "conic", "rainbow", "prism", "animated"],
    previewKind: "hero-gradient",
    featured: 10,
    createdAt: ago(0),
    likes: 5800,
    views: 74000,
    authorIdx: 2,
    prompt: "An animated conic rainbow prism gradient card with glassmorphism center disc.",
    code: `export function ConicPrismSpectrum() {
  return (
    <div className="relative mx-auto flex h-52 w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-neutral-950 p-6">
      <div 
        className="absolute h-72 w-72 animate-[spin_10s_linear_infinite] rounded-full opacity-80 filter blur-xl"
        style={{
          background: 'conic-gradient(from 0deg, #ff4545, #00ffbf, #0077ff, #b700ff, #ff0077, #ff4545)'
        }}
      />
      <div className="relative z-10 flex h-36 w-64 flex-col items-center justify-center rounded-xl border border-white/20 bg-neutral-900/80 p-4 text-center backdrop-blur-xl">
        <span className="text-xs font-bold uppercase tracking-widest text-white/60">Prism Core</span>
        <h4 className="mt-1 text-lg font-black text-white">Conic Spectrum</h4>
        <p className="mt-1 text-[11px] text-white/70">Smooth 360° rotating color wheel</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-cyberpunk-neon-04",
    title: "Cyberpunk Neon Duotone",
    description: "Electric cyan and neon magenta duotone gradient with scanline texture.",
    categorySlug: "gradients",
    tags: ["gradient", "cyberpunk", "neon", "duotone", "retro"],
    previewKind: "hero-gradient",
    featured: 8,
    createdAt: ago(2),
    likes: 3650,
    views: 45000,
    authorIdx: 3,
    prompt: "A cyberpunk duotone gradient card with neon cyan and magenta accents and dark tech background.",
    code: `export function CyberpunkNeon() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#070b14] p-6 text-white shadow-xl shadow-cyan-500/10">
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-pink-500/25 pointer-events-none" />
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400">CYBER_SYS // 2026</span>
          <h3 className="text-xl font-black tracking-tight text-white">NEON DUOTONE</h3>
        </div>
        <span className="rounded-md border border-pink-500/40 bg-pink-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-pink-400">
          V2.4
        </span>
      </div>
      <p className="relative z-10 mt-4 text-xs text-slate-300">
        High-voltage dual aesthetic combining sharp hex values with soft radiant backdrops.
      </p>
    </div>
  );
}`,
  },
  {
    id: "gradient-holographic-foil-05",
    title: "Holographic Pearlescent",
    description: "Multi-layered shimmering iridescent foil gradient that glints on hover.",
    categorySlug: "gradients",
    tags: ["gradient", "holographic", "foil", "iridescent", "pearl"],
    previewKind: "hero-gradient",
    featured: 9,
    createdAt: ago(1),
    likes: 5120,
    views: 68000,
    authorIdx: 4,
    prompt: "An iridescent pearlescent foil card gradient that shifts rainbow highlights across angles.",
    code: `export function HolographicFoil() {
  return (
    <div className="group relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/20 bg-neutral-900 p-6 text-white shadow-2xl transition-all duration-500 hover:border-white/40">
      <div 
        className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-75"
        style={{
          background: 'linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.4) 30%, #ec4899 40%, #06b6d4 55%, #eab308 70%, transparent 85%)',
          backgroundSize: '200% 200%',
        }}
      />
      <div className="relative z-10">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Reflective Texture</span>
        <h3 className="mt-1 text-2xl font-bold text-white">Pearlescent Foil</h3>
        <p className="mt-2 text-xs text-white/80 leading-relaxed">
          Dynamic angle-shifted gradient highlighting soft spectral reflections.
        </p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-cosmic-purple-06",
    title: "Cosmic Nebula Flow",
    description: "Deep space interstellar gradient with violet, indigo, and stardust sparkle.",
    categorySlug: "gradients",
    tags: ["gradient", "cosmic", "purple", "nebula", "space"],
    previewKind: "hero-gradient",
    featured: 8,
    createdAt: ago(3),
    likes: 3890,
    views: 49000,
    authorIdx: 5,
    prompt: "A deep cosmic nebula gradient card with starlight violet and deep indigo swirls.",
    code: `export function CosmicNebula() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-950 via-purple-900 to-black p-6 text-white shadow-2xl border border-purple-500/20">
      <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl filter" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl filter" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 text-purple-300">
          <span className="h-2 w-2 rounded-full bg-purple-400 animate-ping" />
          <span className="text-[11px] font-bold uppercase tracking-widest">Interstellar</span>
        </div>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-white">Cosmic Nebula</h3>
        <p className="mt-1 text-xs text-purple-200/80">Deep indigo and ultraviolet blended with ambient glowing particles.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-emerald-mint-07",
    title: "Emerald Mint Horizon",
    description: "Fresh organic mint to emerald green gradient for modern fintech and health apps.",
    categorySlug: "gradients",
    tags: ["gradient", "emerald", "mint", "green", "fintech"],
    previewKind: "hero-gradient",
    featured: 8,
    createdAt: ago(2),
    likes: 3410,
    views: 42000,
    authorIdx: 6,
    prompt: "An organic emerald and fresh mint gradient card with calm luxurious tones.",
    code: `export function EmeraldMintHorizon() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-tr from-emerald-950 via-teal-900 to-emerald-800 p-6 text-white shadow-xl border border-emerald-500/30">
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl" />
      <div className="relative z-10">
        <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-400/20">
          ORGANIC & CLEAN
        </span>
        <h3 className="mt-3 text-2xl font-extrabold text-white">Emerald Horizon</h3>
        <p className="mt-1.5 text-xs text-emerald-100/80">Deep forest greens transitioning to luminous seafoam and teal highlights.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-liquid-chrome-08",
    title: "Liquid Chrome Silver",
    description: "Reflective metallic fluid chrome gradient with high specular sheen.",
    categorySlug: "gradients",
    tags: ["gradient", "chrome", "metallic", "silver", "liquid"],
    previewKind: "hero-gradient",
    featured: 10,
    createdAt: ago(0),
    likes: 6400,
    views: 82000,
    authorIdx: 7,
    prompt: "A liquid metallic silver chrome gradient card with smooth lustrous highlights.",
    code: `export function LiquidChromeSilver() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl p-6 text-neutral-900 shadow-2xl border border-white/30" style={{
      background: 'linear-gradient(135deg, #e2e8f0 0%, #ffffff 25%, #94a3b8 50%, #ffffff 75%, #cbd5e1 100%)'
    }}>
      <div className="relative z-10 flex flex-col justify-between h-36">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold tracking-widest text-neutral-600">SPECULAR // 99.8%</span>
          <span className="h-2 w-2 rounded-full bg-neutral-900" />
        </div>
        <div>
          <h3 className="text-2xl font-black tracking-tight text-neutral-900">Liquid Chrome</h3>
          <p className="text-xs font-medium text-neutral-600">Polished mercury finish with specular white reflections.</p>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-frosted-glass-09",
    title: "Frosted Glassmorphism Glow",
    description: "Vibrant gradient orbs blurred behind a frosted acrylic glass card.",
    categorySlug: "gradients",
    tags: ["gradient", "glassmorphism", "frosted", "acrylic", "blur"],
    previewKind: "hero-gradient",
    featured: 9,
    createdAt: ago(1),
    likes: 4720,
    views: 59000,
    authorIdx: 0,
    prompt: "A frosted glass card resting over intense colorful gradient light sources.",
    code: `export function FrostedGlassmorphism() {
  return (
    <div className="relative mx-auto flex h-52 w-full max-w-md items-center justify-center overflow-hidden rounded-2xl bg-slate-950 p-6">
      <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-rose-500/60 blur-2xl filter" />
      <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-violet-600/60 blur-2xl filter" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-36 w-36 rounded-full bg-amber-400/50 blur-xl filter" />

      <div className="relative z-10 w-full rounded-xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-xl shadow-2xl">
        <h4 className="text-lg font-bold">Frosted Acrylic</h4>
        <p className="mt-1 text-xs text-white/80">Ambient color bleed through ultra-blur glass material.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-radial-spotlight-10",
    title: "Ambient Radial Spotlight",
    description: "Minimalist dark theme radial spotlight for elegant SaaS landing pages.",
    categorySlug: "gradients",
    tags: ["gradient", "radial", "spotlight", "dark", "saas"],
    previewKind: "hero-gradient",
    featured: 8,
    createdAt: ago(2),
    likes: 3100,
    views: 40000,
    authorIdx: 1,
    prompt: "An ambient dark theme card with a centered radial spotlight gradient.",
    code: `export function AmbientSpotlight() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-neutral-950 p-6 text-white shadow-2xl">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%)'
        }}
      />
      <div className="relative z-10 text-center py-4">
        <span className="inline-block rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-[10px] font-semibold text-indigo-300">
          Dark Canvas Focus
        </span>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">Radial Spotlight</h3>
        <p className="mt-2 text-xs text-neutral-400 max-w-xs mx-auto">
          Feathered top-centered illumination providing natural hierarchy and spatial depth.
        </p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-oceanic-abyss-11",
    title: "Oceanic Abyss Gradient",
    description: "Deep marine sapphire into turquoise underwater luminous gradient.",
    categorySlug: "gradients",
    tags: ["gradient", "ocean", "blue", "water", "marine"],
    previewKind: "hero-gradient",
    featured: 8,
    createdAt: ago(3),
    likes: 3560,
    views: 44000,
    authorIdx: 2,
    prompt: "A deep oceanic abyss gradient card with marine blue and aquatic turquoise glow.",
    code: `export function OceanicAbyss() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-b from-[#021b33] via-[#05365e] to-[#011122] p-6 text-white shadow-xl border border-cyan-500/20">
      <div className="absolute top-0 right-0 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
      <div className="relative z-10">
        <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">Depth // 4000m</span>
        <h3 className="mt-1 text-2xl font-black text-white">Oceanic Abyss</h3>
        <p className="mt-2 text-xs text-cyan-100/70">Sub-surface refraction gradient with calming aquatic gradients.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-pastel-dream-12",
    title: "Cotton Candy Pastel",
    description: "Soft pastel cloud gradient of lavender, powder blue, and blush peach.",
    categorySlug: "gradients",
    tags: ["gradient", "pastel", "soft", "candy", "light"],
    previewKind: "hero-gradient",
    featured: 7,
    createdAt: ago(4),
    likes: 2980,
    views: 37000,
    authorIdx: 3,
    prompt: "A soft dreamy pastel gradient card combining lavender, powder blue, and peach.",
    code: `export function PastelDream() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl p-6 text-slate-800 shadow-lg border border-white/60" style={{
      background: 'linear-gradient(135deg, #fbcfe8 0%, #ddd6fe 50%, #bae6fd 100%)'
    }}>
      <div className="relative z-10">
        <span className="rounded-full bg-white/50 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 backdrop-blur-sm">
          Gentle Tones
        </span>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">Cotton Candy</h3>
        <p className="mt-1 text-xs text-slate-700/80">Low-saturation ethereal pastel wash for light-hearted applications.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-fire-ember-13",
    title: "Ember Blaze Core",
    description: "Intense energetic gradient combining crimson, tangerine, and golden yellow.",
    categorySlug: "gradients",
    tags: ["gradient", "fire", "ember", "orange", "energy"],
    previewKind: "hero-gradient",
    featured: 9,
    createdAt: ago(1),
    likes: 4610,
    views: 57000,
    authorIdx: 4,
    prompt: "An intense ember blaze gradient with hot crimson, vivid orange, and golden highlights.",
    code: `export function EmberBlaze() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 p-6 text-white shadow-xl">
      <div className="absolute inset-0 bg-black/15" />
      <div className="relative z-10">
        <span className="text-[10px] font-black uppercase tracking-widest text-amber-200">HIGH INTENSITY</span>
        <h3 className="mt-1 text-2xl font-black tracking-tight text-white">Ember Blaze</h3>
        <p className="mt-1.5 text-xs text-white/90">Thermal radiance gradient ideal for high-conversion CTAs and promos.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-synthwave-80s-14",
    title: "80s Retro Synthwave",
    description: "Nostalgic sunset horizon with neon purple, hot magenta and deep indigo.",
    categorySlug: "gradients",
    tags: ["gradient", "synthwave", "retro", "80s", "neon"],
    previewKind: "hero-gradient",
    featured: 8,
    createdAt: ago(3),
    likes: 3740,
    views: 46000,
    authorIdx: 5,
    prompt: "A nostalgic retro synthwave gradient card with dusk purple and hot pink horizon.",
    code: `export function RetroSynthwave() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-[#0e0725] p-6 text-white shadow-2xl border border-pink-500/30">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-pink-500/30 via-purple-600/20 to-transparent" />
      <div className="relative z-10 flex flex-col justify-between h-36">
        <span className="font-mono text-[10px] font-bold text-pink-400">OUTRUN // SYNTH</span>
        <div>
          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">
            Retro Synthwave
          </h3>
          <p className="text-xs text-purple-200/80">Neon dusk gradient inspired by classic arcade aesthetics.</p>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-noise-film-15",
    title: "Textured Grain Gradient",
    description: "Modern analog grain film texture layered seamlessly over rich gradients.",
    categorySlug: "gradients",
    tags: ["gradient", "noise", "grain", "film", "analog"],
    previewKind: "hero-gradient",
    featured: 9,
    createdAt: ago(1),
    likes: 4890,
    views: 62000,
    authorIdx: 6,
    prompt: "An analog noise film texture blended with a rich multi-colored gradient card.",
    code: `export function TexturedGrainGradient() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-tr from-violet-600 via-rose-500 to-amber-400 p-6 text-white shadow-2xl">
      <div 
        className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,0,0.8) 1px, transparent 0)',
          backgroundSize: '4px 4px'
        }}
      />
      <div className="relative z-10">
        <span className="rounded-full bg-black/30 px-2.5 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm border border-white/20">
          Film Grain 24fps
        </span>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-white">Analog Grain Blend</h3>
        <p className="mt-1 text-xs text-white/90">Subtle dot grid noise overlay reducing banding on digital screens.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "gradient-shimmer-beam-16",
    title: "Gradient Shimmer Border",
    description: "Card with continuous rotating linear gradient border beam animation.",
    categorySlug: "gradients",
    tags: ["gradient", "shimmer", "border", "beam", "animated"],
    previewKind: "hero-gradient",
    featured: 10,
    createdAt: ago(0),
    likes: 6150,
    views: 79000,
    authorIdx: 7,
    prompt: "A dark card featuring a smooth rotating gradient shimmer beam border.",
    code: `export function GradientShimmerBorder() {
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl p-[1.5px]">
      <div 
        className="absolute inset-0 animate-[spin_4s_linear_infinite]"
        style={{
          background: 'conic-gradient(from 90deg, #6366f1 0%, #ec4899 50%, #3b82f6 100%)'
        }}
      />
      <div className="relative rounded-[15px] bg-slate-950 p-6 text-white">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono uppercase text-indigo-400">BORDER_BEAM</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <h3 className="mt-2 text-xl font-bold text-white">Rotating Border Beam</h3>
        <p className="mt-1 text-xs text-slate-400">Continuous luminous perimeter illumination using masked conic gradients.</p>
      </div>
    </div>
  );
}`,
  },
];
