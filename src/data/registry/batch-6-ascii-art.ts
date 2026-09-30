import type { VariantSpec } from "./base";
import { ago } from "./base";

export const ASCII_ART_VARIANTS: VariantSpec[] = [
  {
    id: "ascii-matrix-rain-terminal",
    title: "Matrix Rain Digital Terminal",
    description: "Cyberpunk glowing green digital rain terminal stream with active CRT phosphor scanlines.",
    categorySlug: "ascii-art",
    tags: ["ascii", "matrix", "terminal", "cyberpunk", "hacker", "stream"],
    previewKind: "ascii-art",
    featured: 10,
    createdAt: ago(1),
    likes: 4920,
    views: 58200,
    authorIdx: 0,
    prompt: "An animated ASCII matrix rain digital terminal display with neon phosphor scanlines and custom font.",
    code: `export function AsciiMatrixTerminal() {
  const [active, setActive] = React.useState(true);
  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-emerald-500/30 bg-black p-5 font-mono text-emerald-400 shadow-2xl">
      <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2 text-[10px] text-emerald-500/70">
        <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" /> STREAM: 60FPS</span>
        <span>SYS_CORE_V3</span>
      </div>
      <pre className="mt-3 text-[11px] leading-[13px] text-emerald-300 select-all">
{\` 0 1 0 0 1 0 1 1 0 1
 1 > ROOT ACCESS  0 1
 0 [VERIFIED_SESSION]
 1 0 1 1 0 0 1 0 1 0
 > EXEC /bin/cyber.sh\`}
      </pre>
      <button onClick={() => setActive(!active)} className="mt-3 rounded border border-emerald-500/40 px-3 py-1 text-[10px] hover:bg-emerald-500/10">
        {active ? "PAUSE STREAM" : "RESUME STREAM"}
      </button>
    </div>
  );
}`,
  },
  {
    id: "ascii-donut-3d-rotating",
    title: "3D Torus Donut ASCII Engine",
    description: "Famous mathematical rotating ASCII torus donut rendered using pure typography buffer.",
    categorySlug: "ascii-art",
    tags: ["ascii", "3d", "donut", "math", "canvas", "rotating"],
    previewKind: "ascii-art",
    featured: 9,
    createdAt: ago(2),
    likes: 3820,
    views: 47100,
    authorIdx: 1,
    prompt: "A rotating 3D ASCII torus donut algorithm rendered with monospaced depth shading.",
    code: `export function Ascii3DDonut() {
  return (
    <div className="w-full max-w-md rounded-xl border border-cyan-500/30 bg-slate-950 p-5 font-mono text-cyan-400">
      <div className="text-xs font-semibold text-cyan-300 mb-2">3D Torus Donut Engine</div>
      <pre className="text-[10px] leading-[11px] text-center text-cyan-200">
{\`      .---.
    .'     '.
   /   ...   \\
  |  .'   '.  |
  |  |     |  |
   \\  '. .'  /
    '.     .'
      '---'\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-cyber-skull",
    title: "Neon Cyber Skull Emblem",
    description: "High-contrast cyberpunk skull ASCII illustration with glowing magenta and cyan accents.",
    categorySlug: "ascii-art",
    tags: ["ascii", "skull", "cyberpunk", "neon", "retro"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(3),
    likes: 3100,
    views: 39500,
    authorIdx: 2,
    prompt: "Cyberpunk skull typography banner with neon highlights.",
    code: `export function AsciiCyberSkull() {
  return (
    <div className="rounded-xl border border-fuchsia-500/30 bg-black p-4 font-mono text-fuchsia-400">
      <pre className="text-[9px] leading-[11px] text-center">
{\`     .---.
   /  o   o  \\
  |     ^     |
   \\  '---'  /
     |||||||\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-retro-cat-terminal",
    title: "Terminal Cyber Cat Companion",
    description: "Interactive friendly terminal companion kitty ASCII avatar with dynamic mood states.",
    categorySlug: "ascii-art",
    tags: ["ascii", "cat", "pet", "companion", "terminal"],
    previewKind: "ascii-art",
    featured: 9,
    createdAt: ago(4),
    likes: 4200,
    views: 52000,
    authorIdx: 3,
    prompt: "Cute retro terminal ASCII cat mascot with interactive speech bubble.",
    code: `export function AsciiCat() {
  const [mood, setMood] = React.useState("happy");
  return (
    <div className="rounded-xl border border-emerald-500/30 bg-zinc-950 p-4 font-mono text-emerald-400">
      <pre className="text-xs text-center">
{\`  /\\_/\\  
 ( o.o ) 
  > ^ <  \`}
      </pre>
      <div className="text-center text-[10px] text-emerald-300 mt-2">Status: {mood}</div>
    </div>
  );
}`,
  },
  {
    id: "ascii-cyber-sword",
    title: "Arcane Katana Blade",
    description: "Cybernetic glowing katana blade with runic ASCII characters and battle stats.",
    categorySlug: "ascii-art",
    tags: ["ascii", "sword", "weapon", "katana", "rpg"],
    previewKind: "ascii-art",
    featured: 7,
    createdAt: ago(5),
    likes: 2900,
    views: 34000,
    authorIdx: 4,
    prompt: "Detailed ASCII art katana blade banner with rune etchings.",
    code: `export function AsciiSword() {
  return (
    <div className="rounded-xl border border-violet-500/30 bg-slate-950 p-4 font-mono text-violet-300">
      <pre className="text-[10px] text-center">
{\`      O
     /|\\
    / | \\
   /  |  \\
  /___|___\\
      |
      V\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-arcade-space-invader",
    title: "8-Bit Space Invader Retro",
    description: "Pixel-perfect ASCII recreation of classic 1978 arcade space invader aliens.",
    categorySlug: "ascii-art",
    tags: ["ascii", "arcade", "retro", "space-invaders", "8bit"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(6),
    likes: 3450,
    views: 41200,
    authorIdx: 5,
    prompt: "Classic retro arcade space invader ASCII motif with pulsating border.",
    code: `export function AsciiSpaceInvader() {
  return (
    <div className="rounded-xl border border-amber-500/30 bg-black p-4 font-mono text-amber-400">
      <pre className="text-[10px] leading-[12px] text-center">
{\`   ▄▄▄▄▄▄▄▄   
 ▄▀█░░░░░░█▀▄ 
 █░█░░░░░░█░█ 
 ▀▀▀█░░░░█▀▀▀ 
   ▀▀▀▀▀▀▀▀   \`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-dragon-crest",
    title: "Mythic Dragon Crest Banner",
    description: "Majestic winged dragon head heraldry crest rendered in multi-tier ASCII gradients.",
    categorySlug: "ascii-art",
    tags: ["ascii", "dragon", "fantasy", "crest", "banner"],
    previewKind: "ascii-art",
    featured: 9,
    createdAt: ago(7),
    likes: 3950,
    views: 48900,
    authorIdx: 6,
    prompt: "Elaborate ASCII dragon crest heraldic logo with copy to clipboard trigger.",
    code: `export function AsciiDragon() {
  return (
    <div className="rounded-xl border border-rose-500/30 bg-zinc-950 p-4 font-mono text-rose-400">
      <pre className="text-[9px] text-center">
{\`    /\\==/\\
   (  o.o  )
    \\_ - _/
   /  / \\  \\
  (___)(___)\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-shuttle-launch",
    title: "Orbital Rocket Blastoff",
    description: "Saturn V spacecraft blastoff with exhaust plume particle trail in ASCII typography.",
    categorySlug: "ascii-art",
    tags: ["ascii", "space", "rocket", "shuttle", "launch"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(8),
    likes: 2750,
    views: 31000,
    authorIdx: 7,
    prompt: "ASCII space shuttle launch animation with exhaust plume typography.",
    code: `export function AsciiRocket() {
  return (
    <div className="rounded-xl border border-blue-500/30 bg-black p-4 font-mono text-blue-400">
      <pre className="text-[10px] text-center">
{\`     /\\
    /  \\
   |  _ |
   | | ||
   | |_||
  /|    |\\
 / | /\\ | \\
   |/  \\|
   (    )
   (  ) )
    (  )\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-retro-computer",
    title: "Vintage Macintosh Workstation",
    description: "Classic 1984 beige computer box with floppy drive and blinking shell cursor.",
    categorySlug: "ascii-art",
    tags: ["ascii", "macintosh", "computer", "vintage", "retro"],
    previewKind: "ascii-art",
    featured: 7,
    createdAt: ago(9),
    likes: 3300,
    views: 38700,
    authorIdx: 8,
    prompt: "Vintage personal computer desktop setup in clean ASCII box characters.",
    code: `export function AsciiComputer() {
  return (
    <div className="rounded-xl border border-emerald-500/30 bg-zinc-900 p-4 font-mono text-emerald-300">
      <pre className="text-[10px] text-center">
{\` +-----------+
 |           |
 |   >_      |
 |           |
 +-----------+
   \\_______/\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-heart-biometric",
    title: "Biometric Pulsing Heart",
    description: "Animated medical monitor ASCII heart symbol with real-time beats per minute readout.",
    categorySlug: "ascii-art",
    tags: ["ascii", "heart", "health", "biometric", "pulse"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(10),
    likes: 3120,
    views: 37400,
    authorIdx: 9,
    prompt: "Pulsing ASCII heart graphic with animated glow effect and rate counter.",
    code: `export function AsciiHeart() {
  return (
    <div className="rounded-xl border border-red-500/30 bg-black p-4 font-mono text-red-500">
      <pre className="text-[11px] text-center">
{\`  **   **  
 **** **** 
 ********* 
  *******  
   *****   
    ***    
     *     \`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-globe-wireframe",
    title: "Spinning Globe Coordinates",
    description: "Geographic coordinate globe sphere with latitude and longitude wireframe grids.",
    categorySlug: "ascii-art",
    tags: ["ascii", "globe", "earth", "coordinates", "wireframe"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(11),
    likes: 2890,
    views: 35100,
    authorIdx: 0,
    prompt: "Spherical wireframe globe ASCII projection with latitude circles.",
    code: `export function AsciiGlobe() {
  return (
    <div className="rounded-xl border border-teal-500/30 bg-slate-950 p-4 font-mono text-teal-400">
      <pre className="text-[10px] text-center">
{\`     .----.
   /  |  |  \\
  |---|--|---|
   \\  |  |  /
     '----'\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-brand-logo-uiforge",
    title: "UIForge Monogram Wordmark",
    description: "Bold 3D isometric typography logo banner of UIForge for CLI initialization screens.",
    categorySlug: "ascii-art",
    tags: ["ascii", "logo", "uiforge", "banner", "cli"],
    previewKind: "ascii-art",
    featured: 10,
    createdAt: ago(12),
    likes: 4500,
    views: 54000,
    authorIdx: 1,
    prompt: "UIForge brand logo in isometric bold shadow ASCII font.",
    code: `export function AsciiLogo() {
  return (
    <div className="rounded-xl border border-indigo-500/30 bg-black p-4 font-mono text-indigo-400">
      <pre className="text-[10px] text-center">
{\` _   _ _____ 
| | | |_   _|
| | | | | |  
| |_| | | |  
 \\___/  |_|  \`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-cassette-synthwave",
    title: "Synthwave Audio Cassette Tape",
    description: "Retro 80s magnetic cassette tape with dual spools and neon sunset color accents.",
    categorySlug: "ascii-art",
    tags: ["ascii", "cassette", "synthwave", "music", "retro"],
    previewKind: "ascii-art",
    featured: 7,
    createdAt: ago(13),
    likes: 2600,
    views: 31000,
    authorIdx: 2,
    prompt: "Retro cassette tape ASCII with rotating spool characters.",
    code: `export function AsciiCassette() {
  return (
    <div className="rounded-xl border border-pink-500/30 bg-zinc-950 p-4 font-mono text-pink-400">
      <pre className="text-[10px] text-center">
{\` _______________________
|  ___________________  |
| | (O)           (O) | |
| |_____==--==--==____| |
|_______________________|\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-coffee-steam",
    title: "Steaming Cyber Cafe Mug",
    description: "Hot morning coffee mug with dynamic waving steam particle paths in monospaced ASCII.",
    categorySlug: "ascii-art",
    tags: ["ascii", "coffee", "steam", "cafe", "cup"],
    previewKind: "ascii-art",
    featured: 6,
    createdAt: ago(14),
    likes: 2400,
    views: 29000,
    authorIdx: 3,
    prompt: "Steaming coffee mug with ASCII wavy steam rising.",
    code: "export function AsciiCoffee() {\n  return <pre className=\"rounded-xl border border-white/20 bg-slate-950 p-4 font-mono text-amber-300 text-[10px] text-center\">{\"    ( (\\n     ) )\\n  .______.\\n  |      |]\\n  \\\\______/\\n  --------\"}</pre>;\n}",
  },
  {
    id: "ascii-gameboy-pocket",
    title: "Handheld GameBoy Console",
    description: "Nostalgic 90s handheld gaming unit featuring D-Pad, A/B buttons, and pixel display.",
    categorySlug: "ascii-art",
    tags: ["ascii", "gameboy", "gaming", "nintendo", "console"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(15),
    likes: 3100,
    views: 39000,
    authorIdx: 4,
    prompt: "Handheld gaming system with D-pad and action buttons in ASCII.",
    code: `export function AsciiGameboy() {
  return (
    <div className="rounded-xl border border-purple-500/30 bg-black p-4 font-mono text-purple-300">
      <pre className="text-[9px] text-center">
{\`  .------------.
  |  .------.  |
  |  | PIXEL|  |
  |  '------'  |
  |    _       |
  |  _| |_  B A|
  | [_   _] o o|
  |   |_|      |
  '------------'\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-fujisan-sunrise",
    title: "Mount Fuji Dawn Horizon",
    description: "Serene Japanese landscape featuring Mount Fuji peak under rising sun and cloud bands.",
    categorySlug: "ascii-art",
    tags: ["ascii", "fuji", "mountain", "japan", "landscape"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(16),
    likes: 3350,
    views: 42000,
    authorIdx: 5,
    prompt: "Mountain summit landscape with rising sun in clean ASCII linework.",
    code: "export function AsciiFuji() {\n  return <pre className=\"rounded-xl border border-white/20 bg-slate-950 p-4 font-mono text-amber-300 text-[10px] text-center\">{\"      (O)\\n      /\\\\\\n     /  \\\\\\n    /____\\\\\\n   /      \\\\\\n  /        \\\\\"}</pre>;\n}",
  },
  {
    id: "ascii-fire-flame-buffer",
    title: "Doom Fire Particle Buffer",
    description: "Dynamic procedural flame height array simulation using standard 256-color ASCII ramps.",
    categorySlug: "ascii-art",
    tags: ["ascii", "fire", "particles", "doom", "flame"],
    previewKind: "ascii-art",
    featured: 9,
    createdAt: ago(17),
    likes: 4100,
    views: 49500,
    authorIdx: 6,
    prompt: "Real-time procedural fire effect using ASCII brightness characters.",
    code: `export function AsciiFire() {
  return (
    <div className="rounded-xl border border-red-500/30 bg-black p-4 font-mono text-amber-500">
      <pre className="text-[10px] text-center">
{\`   (  .     )
  )           (
 (    (  )     )
  \\  ( (  )   /
   \\________/\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-terminal-progress-bar",
    title: "UNIX Hacker Status Gauge",
    description: "Retro package manager download meter with elapsed time and ETA telemetry indicators.",
    categorySlug: "ascii-art",
    tags: ["ascii", "progress", "unix", "cli", "status"],
    previewKind: "ascii-art",
    featured: 7,
    createdAt: ago(18),
    likes: 2950,
    views: 35000,
    authorIdx: 7,
    prompt: "Terminal progress bar with block characters and percentage readout.",
    code: `export function AsciiProgress() {
  return (
    <div className="rounded-xl border border-emerald-500/30 bg-black p-4 font-mono text-emerald-400">
      <div className="text-xs mb-1">BUILDING KERNEL... 78%</div>
      <pre className="text-[11px]">
{\`[██████████████░░░░] 78/100 MB\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-city-skyline-night",
    title: "Neo-Tokyo Night Skyline",
    description: "Cyberpunk urban towers with glowing antennas and broadcast relay dishes.",
    categorySlug: "ascii-art",
    tags: ["ascii", "city", "skyline", "tokyo", "cyberpunk"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(19),
    likes: 3600,
    views: 44000,
    authorIdx: 8,
    prompt: "Detailed city skyscraper skyline with rooftop antennas in ASCII.",
    code: `export function AsciiCity() {
  return (
    <div className="rounded-xl border border-cyan-500/30 bg-zinc-950 p-4 font-mono text-cyan-400">
      <pre className="text-[10px] text-center">
{\`   |     |      |
  [ ]   [|]    [ ]
 [===] [===]  [===]
 |   | |   |  |   |
 | # | | # |  | # |
====================\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-robot-companion",
    title: "Mech Android AI Bot",
    description: "Friendly droid interface head with expressive antenna ears and LED matrix eyes.",
    categorySlug: "ascii-art",
    tags: ["ascii", "robot", "mech", "droid", "ai"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(20),
    likes: 3100,
    views: 39000,
    authorIdx: 9,
    prompt: "Friendly robot face with blinking eye characters.",
    code: `export function AsciiRobot() {
  return (
    <div className="rounded-xl border border-sky-500/30 bg-black p-4 font-mono text-sky-400">
      <pre className="text-[10px] text-center">
{\`   [o]   [o]
     \\___/
   .-------.
   |  O O  |
   |   -   |
   '-------'\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-sound-visualizer",
    title: "Audio Equalizer Spectrum",
    description: "16-band graphic equalizer audio visualizer bars bouncing to rhythmic frequencies.",
    categorySlug: "ascii-art",
    tags: ["ascii", "audio", "equalizer", "spectrum", "music"],
    previewKind: "ascii-art",
    featured: 7,
    createdAt: ago(21),
    likes: 2700,
    views: 33500,
    authorIdx: 0,
    prompt: "Audio frequency equalizer bars created with unicode block characters.",
    code: `export function AsciiEqualizer() {
  return (
    <div className="rounded-xl border border-violet-500/30 bg-zinc-950 p-4 font-mono text-violet-400">
      <pre className="text-[11px] text-center">
{\` █   █       █ 
 ██  ██  █   ██ 
 ██████ ████ ██ 
 ██████████████ \`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-bento-card-art",
    title: "Bento Feature Box ASCII",
    description: "Modern Bento-grid styled card container with embedded custom ASCII wireframe artwork.",
    categorySlug: "ascii-art",
    tags: ["ascii", "bento", "card", "feature", "ui"],
    previewKind: "ascii-art",
    featured: 9,
    createdAt: ago(22),
    likes: 3800,
    views: 46000,
    authorIdx: 1,
    prompt: "Bento grid card integrating miniature ASCII illustration for modern web apps.",
    code: `export function AsciiBentoCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-white">
      <div className="text-xs font-bold text-emerald-400 mb-1">FEATURE #04</div>
      <div className="text-base font-semibold">Zero-Dependency Graphics</div>
      <pre className="mt-3 p-3 bg-black/60 rounded-xl font-mono text-[9px] text-emerald-300">
{\`+-------------+
| CLI FAST    |
| RENDERS     |
+-------------+\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-bonsai-zen",
    title: "Zen Bonsai Plant Vessel",
    description: "Intricately pruned Japanese bonsai tree in ornamental earthenware pot.",
    categorySlug: "ascii-art",
    tags: ["ascii", "bonsai", "plant", "zen", "nature"],
    previewKind: "ascii-art",
    featured: 7,
    createdAt: ago(23),
    likes: 2500,
    views: 30000,
    authorIdx: 2,
    prompt: "Delicate bonsai tree in minimalist ASCII characters.",
    code: `export function AsciiBonsai() {
  return (
    <div className="rounded-xl border border-emerald-600/30 bg-black p-4 font-mono text-emerald-400">
      <pre className="text-[10px] text-center">
{\`     &&& &&  & &&
  && &\\/&\\|() ()/ @
  &\\/(/&/&||/& /_/)_&
     &() &\\/&|()|/&
         ||
       .----.
       '----'\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-ufo-abduction",
    title: "Sci-Fi Saucer Beam Abduction",
    description: "Alien flying saucer casting tractor beam down to Earth with illumination field.",
    categorySlug: "ascii-art",
    tags: ["ascii", "ufo", "alien", "scifi", "saucer"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(24),
    likes: 3200,
    views: 41000,
    authorIdx: 3,
    prompt: "Flying saucer alien ship with tractor beam in ASCII art.",
    code: "export function AsciiUFO() {\n  return <pre className=\"rounded-xl border border-white/20 bg-slate-950 p-4 font-mono text-amber-300 text-[10px] text-center\">{\"     .---.\\n   _/__~0_\\\\_\\n  (_________)\\n     /     \\\\\\n    /   o   \\\\\\n   /    |    \\\\\"}</pre>;\n}",
  },
  {
    id: "ascii-compass-rose",
    title: "Antique Nautical Compass",
    description: "Eight-point navigation compass rose with degree cardinal indicators.",
    categorySlug: "ascii-art",
    tags: ["ascii", "compass", "navigation", "rose", "nautical"],
    previewKind: "ascii-art",
    featured: 7,
    createdAt: ago(25),
    likes: 2650,
    views: 32000,
    authorIdx: 4,
    prompt: "Nautical compass rose with directional coordinates in ASCII.",
    code: `export function AsciiCompass() {
  return (
    <div className="rounded-xl border border-amber-500/30 bg-stone-950 p-4 font-mono text-amber-300">
      <pre className="text-[10px] text-center">
{\`       N
     .-|-.
  W - + - E
     '-|-'
       S\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-retro-gamepad",
    title: "16-Bit Super Controller",
    description: "Classic gaming gamepad with four-button diamond pad and shoulder bumpers.",
    categorySlug: "ascii-art",
    tags: ["ascii", "gamepad", "controller", "gaming", "retro"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(26),
    likes: 3150,
    views: 38000,
    authorIdx: 5,
    prompt: "16-bit console controller with buttons in ASCII.",
    code: `export function AsciiGamepad() {
  return (
    <div className="rounded-xl border border-blue-500/30 bg-black p-4 font-mono text-blue-400">
      <pre className="text-[10px] text-center">
{\` .-----------------.
(  [+]   SELECT   o  )
 \\       START   o o/
  '----------------'\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-quantum-chip",
    title: "Quantum CPU Microchip",
    description: "Integrated circuit processor wafer with pinout traces and bus connectors.",
    categorySlug: "ascii-art",
    tags: ["ascii", "cpu", "chip", "quantum", "hardware"],
    previewKind: "ascii-art",
    featured: 9,
    createdAt: ago(27),
    likes: 3900,
    views: 47000,
    authorIdx: 6,
    prompt: "Computer processor chip with circuit traces in clean ASCII.",
    code: `export function AsciiChip() {
  return (
    <div className="rounded-xl border border-teal-500/30 bg-slate-950 p-4 font-mono text-teal-300">
      <pre className="text-[10px] text-center">
{\`  | | | | | |
 +-----------+
=|   UIFORGE |=
=|    Q-CORE |=
 +-----------+
  | | | | | |\`}
      </pre>
    </div>
  );
}`,
  },
  {
    id: "ascii-diamond-crystal",
    title: "Isometric Brilliant Diamond",
    description: "Faceted gemstone diamond refracting isometric light reflections and sparkle rays.",
    categorySlug: "ascii-art",
    tags: ["ascii", "diamond", "crystal", "gem", "isometric"],
    previewKind: "ascii-art",
    featured: 8,
    createdAt: ago(28),
    likes: 3400,
    views: 41000,
    authorIdx: 7,
    prompt: "Faceted diamond crystal in geometric ASCII characters.",
    code: `export function AsciiDiamond() {
  return (
    <div className="rounded-xl border border-cyan-400/30 bg-black p-4 font-mono text-cyan-300">
      <pre className="text-[11px] text-center">
{\`    /\\
   /  \\
  /____\\
  \\    /
   \\  /
    \\/\`}
      </pre>
    </div>
  );
}`,
  },
];
