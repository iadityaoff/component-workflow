/**
 * ASCII Art Gallery & Interactive ASCII Art Generator / Editor
 * Meets Section 9.3 of Master Prompt
 */
import React, { useState, useEffect } from "react";
import { 
  Search, Copy, Check, Plus, ArrowLeft, Wand2, Sliders, 
  Sparkles, Download, Eye, Play, Pause, Crop, Undo, Redo, 
  Layers, Sun, Film, Move, Terminal, X, Shuffle
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useToast } from "../components/Toast";
import { ViewModeToggle, type ViewMode } from "../components/ViewModeToggle";
import { Pagination } from "../components/Pagination";
import { useRoute } from "../lib/router";

interface AsciiItem {
  id: string;
  name: string;
  category: string;
  tag: string;
  content: string;
}

const ASCII_TAGS = [
  { name: "Retro", count: 28 },
  { name: "Pixel", count: 19 },
  { name: "Animated", count: 17 },
  { name: "Colorful", count: 16 },
  { name: "Monochrome", count: 15 },
  { name: "Neon", count: 12 },
  { name: "Terminal", count: 11 },
  { name: "Mosaic", count: 11 },
  { name: "Minimal", count: 10 },
  { name: "Glitch", count: 9 },
  { name: "CRT", count: 7 },
  { name: "Cyberpunk", count: 4 },
  { name: "Halftone", count: 3 },
];

const ASCII_DATA: AsciiItem[] = [
  {
    id: "a1",
    name: "Sword of Excalibur",
    category: "Weapons",
    tag: "Retro",
    content: `      O
     /|\\
    / | \\
   /  |  \\
  /___|___\\
      |
      |
      |
      V`,
  },
  {
    id: "a2",
    name: "Cyber Cat",
    category: "Animals",
    tag: "Pixel",
    content: ` /\\_/\\
( o.o )
 > ^ <`,
  },
  {
    id: "a3",
    name: "Terminal Workstation",
    category: "Tech",
    tag: "Terminal",
    content: ` +-----------+
 |           |
 |   >_      |
 |           |
 +-----------+
   \\_______/`,
  },
  {
    id: "a4",
    name: "UIForge Monogram",
    category: "Logos",
    tag: "Minimal",
    content: ` _   _ _____ 
| | | |_   _|
| | | | | |  
| |_| | | |  
 \\___/  |_|  `,
  },
  {
    id: "a5",
    name: "Double Border Frame",
    category: "Borders",
    tag: "Retro",
    content: ` ╔══════════╗
 ║          ║
 ║          ║
 ╚══════════╝`,
  },
  {
    id: "a6",
    name: "Geometric Diamond",
    category: "Shapes",
    tag: "Minimal",
    content: `   /\\
  /  \\
 /____\\
 \\    /
  \\  /
   \\/`,
  },
  {
    id: "a7",
    name: "3D Torus Donut",
    category: "Tech",
    tag: "Animated",
    content: `      .---.
    .'     '.
   /   ...   \\
  |  .'   '.  |
  |  |     |  |
   \\  '. .'  /
    '.     .'
      '---'`,
  },
  {
    id: "a8",
    name: "Space Invader",
    category: "Games",
    tag: "Retro",
    content: `   ▄▄▄▄▄▄▄▄   
 ▄▀█░░░░░░█▀▄ 
 █░█░░░░░░█░█ 
 ▀▀▀█░░░░█▀▀▀ 
   ▀▀▀▀▀▀▀▀   `,
  },
  {
    id: "a9",
    name: "Dragon Crest",
    category: "Animals",
    tag: "Cyberpunk",
    content: `    /\\==/\\
    (  o.o  )
     \\_ - _/
    /  / \\  \\
   (___)(___)`,
  },
  {
    id: "a10",
    name: "Rocket Shuttle",
    category: "Tech",
    tag: "Neon",
    content: `     /\\
    /  \\
   |  _ |
   | | ||
   | |_||
  /|    |\\
 / | /\\ | \\
   |/  \\|
   (    )
   (  ) )
    (  )`,
  },
  {
    id: "a11",
    name: "Heart Pulse",
    category: "Shapes",
    tag: "Monochrome",
    content: `  **   **  
 **** **** 
 ********* 
  *******  
   *****   
    ***    
     *     `,
  },
  {
    id: "a12",
    name: "Matrix Rain Portal",
    category: "Tech",
    tag: "Terminal",
    content: ` 1 0 1 1 0 1
 0 1 0 0 1 0
 1 1 0 1 0 1
 0 0 1 1 1 0`,
  },
  {
    id: "a13",
    name: "CRT Glitch Skull",
    category: "Art",
    tag: "CRT",
    content: `  .---.
 /     \\
| () () |
 \\  ^  /
  ||||| `,
  },
  {
    id: "a14",
    name: "Halftone Cloud",
    category: "Nature",
    tag: "Halftone",
    content: `   .:*~*:._.:*~*:._
 .*(  ░░░░░░░░░░░  )*.
 *(  ▒▒▒▒▒▒▒▒▒▒▒▒▒  )*
  '*:..:*~*:._.:*~*:' `,
  },
  {
    id: "a15",
    name: "Neon Coffee Mug",
    category: "Objects",
    tag: "Neon",
    content: `   ( (
    ) )
  ........
  |      |]
  \\      /
   \`----' `,
  },
];

const STYLE_CHIPS = [
  "Characters", "Braille", "Mixed", "Hex Dump", "Matrix", "Dots", "Cross", 
  "Diamond", "Rings", "Hearts", "Stars", "Hexagons", "Triangles", "Bubbles", 
  "Lines", "Diagonal", "Hatching", "Contour", "Dither", "Pixel Art", "Mosaic", 
  "Bricks", "Voxel", "Half Blocks", "Disco"
];

export function AsciiPage() {
  const { query, setQuery } = useRoute();
  const { toast } = useToast();

  const isEditor = query.editor === "true";
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string>("all");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Pagination & view modes
  const [viewMode, setViewMode] = useState<ViewMode>("page");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // ── Editor State ──
  const [editorTab, setEditorTab] = useState<"style" | "adjust" | "effects" | "motion" | "mask" | "lights">("style");
  const [selectedStyle, setSelectedStyle] = useState("Characters");
  const [cellSize, setCellSize] = useState(14);
  const [coverage, setCoverage] = useState(96);
  const [invert, setInvert] = useState(false);
  
  // Adjust
  const [brightness, setBrightness] = useState(0);
  const [contrast, setContrast] = useState(115);
  const [edgeEmphasis, setEdgeEmphasis] = useState(40);
  const [density, setDensity] = useState(0);
  const [colorPreset, setColorPreset] = useState("Cyber");
  const [tintColor, setTintColor] = useState("#00FF66");
  const [tintOpacity, setTintOpacity] = useState(45);

  // Effects
  const [activeEffects, setActiveEffects] = useState<Record<string, boolean>>({
    Vignette: true,
    "Scan Lines": true,
    Bloom: false,
    "Film Grain": false,
    Glitch: false,
    Pixelate: false,
    Halftone: false,
  });
  const [vignetteVal, setVignetteVal] = useState(38);

  // Motion
  const [isAnimated, setIsAnimated] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [animStyle, setAnimStyle] = useState<"Flicker" | "Wave" | "Scan">("Flicker");
  const [motionStrength, setMotionStrength] = useState(60);

  // Dynamic preview text based on style & tone
  const dynamicAscii = (() => {
    if (selectedStyle === "Matrix") {
      return `0 1 0 1 0 0 1 1 0 1 0 1 1 0 1\n1 0 1 1 0 1 0 0 1 1 0 0 1 0 1\n0 1 0 0 1 1 0 1 0 1 0 1 0 1 0\n1 1 0 1 0 1 1 0 0 1 0 1 1 0 1\n0 0 1 0 1 1 0 1 1 0 1 0 0 1 0`;
    }
    if (selectedStyle === "Braille") {
      return `⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏ ⠋⠙⠹⠸⠼⠴⠦\n⠸⠼⠴⠦⠧⠇⠏⠋⠙ ⠹⠸⠼⠴⠦⠧\n⠦⠧⠇⠏⠋⠙⠹⠸ ⠼⠴⠦⠧⠇⠏\n⠧⠇⠏⠋⠙⠹⠸⠼ ⠴⠦⠧⠇⠏⠋`;
    }
    if (selectedStyle === "Dots" || selectedStyle === "Dither") {
      return `··:·::..:··:·::..:··:·::..\n:·.:::..·:·.:::..·:·.:::..\n·::...::·::...::·::...::\n:.:...:.·:.:...:.·:.:...:.`;
    }
    return `   ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄   \n ▄▀█░░░░░░░░░░░░░░░█▀▄ \n █░█░░░░ ▓▓▓▓▓ ░░░░█░█ \n █░█░░░░ ▓▓▓▓▓ ░░░░█░█ \n ▀▀▀█░░░░░░░░░░░░░█▀▀▀ \n   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀   `;
  })();

  const categories = ["all", ...Array.from(new Set(ASCII_DATA.map((a) => a.category)))];

  const filtered = ASCII_DATA.filter((a) => {
    const matchesCategory = activeCategory === "all" || a.category === activeCategory;
    const matchesTag = activeTag === "all" || a.tag.toLowerCase() === activeTag.toLowerCase();
    const matchesSearch =
      a.name.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase()) ||
      a.tag.toLowerCase().includes(search.toLowerCase()) ||
      a.content.includes(search);
    return matchesCategory && matchesTag && matchesSearch;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const pagedItems = viewMode === "page" 
    ? filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filtered;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast("success", "Copied ASCII art to clipboard!");
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleInspire = () => {
    const styles = STYLE_CHIPS;
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    setSelectedStyle(randomStyle);
    setCellSize(Math.floor(Math.random() * 10) + 10);
    setContrast(Math.floor(Math.random() * 40) + 100);
    toast("info", `Switched to ${randomStyle} style!`);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-56px)] bg-[var(--uf-bg)] page-enter">
      {/* ── Sub-Sidebar ── */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-[var(--uf-border)] bg-[var(--uf-panel)] lg:flex">
        <div className="p-4 border-b border-[var(--uf-border)] space-y-3">
          <div className="relative">
            <Icon icon={Search} size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)]" />
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search ASCII recipes..."
              className="w-full rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] py-1.5 pl-8 pr-3 text-xs text-[var(--uf-text)] placeholder-[var(--uf-text-muted)] focus:border-[var(--uf-accent)] focus:outline-none"
            />
          </div>

          <button
            onClick={() => setQuery({ editor: isEditor ? "" : "true" })}
            className={`flex w-full items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition shadow-sm ${
              isEditor 
                ? "bg-white/[0.08] text-[var(--uf-text)] border border-[var(--uf-border)]"
                : "bg-[var(--uf-accent)] text-white hover:bg-[var(--uf-accent-hover)]"
            }`}
          >
            {isEditor ? <Icon icon={ArrowLeft} size={14} /> : <Icon icon={Plus} size={14} />}
            {isEditor ? "Back to recipes" : "+ Create ASCII art"}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--uf-text-muted)] px-2">Navigation</span>
            <div className="mt-1 space-y-1">
              <button
                onClick={() => { setActiveCategory("all"); setActiveTag("all"); setQuery({ editor: "" }); }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-xs transition ${
                  !isEditor && activeCategory === "all" && activeTag === "all"
                    ? "bg-white/[0.08] font-medium text-[var(--uf-text)]"
                    : "text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]"
                }`}
              >
                <span>All recipes</span>
                <span className="text-[10px] text-[var(--uf-text-muted)]">{ASCII_DATA.length}</span>
              </button>
            </div>
          </div>

          {/* Tags with counts */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--uf-text-muted)] px-2">Recipe Tags</span>
            <div className="mt-1 space-y-1">
              {ASCII_TAGS.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setActiveTag(t.name);
                    setActiveCategory("all");
                    setQuery({ editor: "" });
                    setCurrentPage(1);
                  }}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-xs transition ${
                    !isEditor && activeTag === t.name
                      ? "bg-white/[0.08] font-medium text-[var(--uf-text)]"
                      : "text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]"
                  }`}
                >
                  <span>{t.name}</span>
                  <span className="text-[10px] text-[var(--uf-text-muted)]">{t.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main View: Gallery or Interactive ASCII Editor ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {isEditor ? (
          /* ── Interactive ASCII Art Editor ── */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Bar */}
            <div className="h-14 shrink-0 border-b border-[var(--uf-border)] bg-[var(--uf-panel)] px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuery({ editor: "" })}
                  className="rounded-lg p-1.5 text-[var(--uf-text-muted)] hover:bg-white/[0.06] hover:text-[var(--uf-text)] transition"
                  title="Exit editor"
                >
                  <Icon icon={ArrowLeft} size={16} />
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[var(--uf-text)]">ASCII Art Studio</span>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">Generator</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy("editor-art", dynamicAscii)}
                  className="rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 py-1.5 text-xs font-medium text-[var(--uf-text)] hover:bg-white/[0.06] transition flex items-center gap-1.5"
                >
                  <Icon icon={Wand2} size={13} />
                  Copy prompt
                </button>
                <button
                  onClick={() => handleCopy("editor-art", dynamicAscii)}
                  className="rounded-lg bg-[var(--uf-accent)] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition flex items-center gap-1.5"
                >
                  <Icon icon={Download} size={13} />
                  Save art
                </button>
              </div>
            </div>

            {/* Editor Workspace */}
            <div className="flex-1 flex overflow-hidden">
              {/* Left Control Rail */}
              <div className="w-80 shrink-0 border-r border-[var(--uf-border)] bg-[var(--uf-panel)] flex flex-col">
                {/* Tabs */}
                <div className="grid grid-cols-4 border-b border-[var(--uf-border)] bg-[var(--uf-panel-2)]">
                  {(["style", "adjust", "effects", "motion"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setEditorTab(tab)}
                      className={`py-3 text-[11px] font-semibold capitalize border-b-2 transition flex flex-col items-center gap-1 ${
                        editorTab === tab
                          ? "border-[var(--uf-accent)] text-[var(--uf-accent)] bg-[var(--uf-panel)]"
                          : "border-transparent text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
                      }`}
                    >
                      {tab === "style" && <Icon icon={Layers} size={14} />}
                      {tab === "adjust" && <Icon icon={Sliders} size={14} />}
                      {tab === "effects" && <Icon icon={Film} size={14} />}
                      {tab === "motion" && <Icon icon={Play} size={14} />}
                      <span className="text-[9px] tracking-tight">{tab}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Body */}
                <div className="flex-1 overflow-y-auto p-5 scrollbar-thin space-y-6">
                  {editorTab === "style" && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-xs font-bold text-[var(--uf-text)]">Character Style</label>
                        <div className="mt-2.5 flex flex-wrap gap-1.5 max-h-48 overflow-y-auto scrollbar-thin p-1 border border-[var(--uf-border)] rounded-xl bg-[var(--uf-panel-2)]">
                          {STYLE_CHIPS.map((chip) => (
                            <button
                              key={chip}
                              onClick={() => setSelectedStyle(chip)}
                              className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition ${
                                selectedStyle === chip
                                  ? "bg-[var(--uf-accent)] text-white"
                                  : "text-[var(--uf-text-secondary)] hover:bg-white/[0.06] hover:text-[var(--uf-text)]"
                              }`}
                            >
                              {chip}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 pt-2 border-t border-[var(--uf-border)]">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-medium text-[var(--uf-text)]">Cell Size</label>
                          <span className="text-xs font-mono text-[var(--uf-text-muted)]">{cellSize}px</span>
                        </div>
                        <input
                          type="range"
                          min="8"
                          max="24"
                          value={cellSize}
                          onChange={(e) => setCellSize(Number(e.target.value))}
                          className="w-full accent-[var(--uf-accent)] h-1.5 bg-[var(--uf-panel-2)] rounded-lg cursor-pointer"
                        />

                        <div className="flex items-center justify-between pt-1">
                          <label className="text-xs font-medium text-[var(--uf-text)]">Coverage</label>
                          <span className="text-xs font-mono text-[var(--uf-text-muted)]">{coverage}%</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="100"
                          value={coverage}
                          onChange={(e) => setCoverage(Number(e.target.value))}
                          className="w-full accent-[var(--uf-accent)] h-1.5 bg-[var(--uf-panel-2)] rounded-lg cursor-pointer"
                        />
                      </div>
                    </div>
                  )}

                  {editorTab === "adjust" && (
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-medium text-[var(--uf-text)]">Contrast</label>
                          <span className="text-xs font-mono text-[var(--uf-text-muted)]">{contrast}%</span>
                        </div>
                        <input
                          type="range"
                          min="50"
                          max="200"
                          value={contrast}
                          onChange={(e) => setContrast(Number(e.target.value))}
                          className="w-full accent-[var(--uf-accent)] h-1.5 bg-[var(--uf-panel-2)] rounded-lg cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label className="text-xs font-medium text-[var(--uf-text)]">Edge Emphasis</label>
                          <span className="text-xs font-mono text-[var(--uf-text-muted)]">{edgeEmphasis}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={edgeEmphasis}
                          onChange={(e) => setEdgeEmphasis(Number(e.target.value))}
                          className="w-full accent-[var(--uf-accent)] h-1.5 bg-[var(--uf-panel-2)] rounded-lg cursor-pointer"
                        />
                      </div>

                      <div className="pt-2 border-t border-[var(--uf-border)]">
                        <label className="text-xs font-bold text-[var(--uf-text)]">Color & Tint</label>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                          {["Cyber", "Neon Green", "Amber CRT", "Ice Blue"].map((c) => (
                            <button
                              key={c}
                              onClick={() => {
                                setColorPreset(c);
                                if (c === "Cyber") setTintColor("#00FF66");
                                else if (c === "Neon Green") setTintColor("#10B981");
                                else if (c === "Amber CRT") setTintColor("#F59E0B");
                                else setTintColor("#38BDF8");
                              }}
                              className={`rounded-lg border px-2.5 py-1.5 text-xs text-left transition ${
                                colorPreset === c 
                                  ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/10 text-[var(--uf-accent)]" 
                                  : "border-[var(--uf-border)] text-[var(--uf-text-secondary)]"
                              }`}
                            >
                              {c}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {editorTab === "effects" && (
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-[var(--uf-text)]">Post-Processing Tiles</label>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.keys(activeEffects).map((effect) => (
                          <button
                            key={effect}
                            onClick={() => {
                              setActiveEffects((prev) => ({ ...prev, [effect]: !prev[effect] }));
                            }}
                            className={`rounded-xl border p-2.5 text-left transition ${
                              activeEffects[effect]
                                ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/10 text-[var(--uf-accent)]"
                                : "border-[var(--uf-border)] bg-[var(--uf-panel-2)] text-[var(--uf-text-muted)]"
                            }`}
                          >
                            <span className="text-xs font-semibold block">{effect}</span>
                            <span className="text-[10px] opacity-75">{activeEffects[effect] ? "Active" : "Off"}</span>
                          </button>
                        ))}
                      </div>

                      {activeEffects["Vignette"] && (
                        <div className="pt-3 border-t border-[var(--uf-border)]">
                          <div className="flex items-center justify-between mb-1.5">
                            <label className="text-xs font-medium text-[var(--uf-text)]">Vignette Intensity</label>
                            <span className="text-xs font-mono text-[var(--uf-text-muted)]">{vignetteVal}%</span>
                          </div>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={vignetteVal}
                            onChange={(e) => setVignetteVal(Number(e.target.value))}
                            className="w-full accent-[var(--uf-accent)] h-1.5 bg-[var(--uf-panel-2)] rounded-lg cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                  )}

                  {editorTab === "motion" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)]">
                        <div>
                          <p className="text-xs font-bold text-[var(--uf-text)]">Animation Mode</p>
                          <p className="text-[10px] text-[var(--uf-text-muted)] mt-0.5">Speed scales everything including scan lines.</p>
                        </div>
                        <button
                          onClick={() => setIsAnimated(!isAnimated)}
                          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out ${
                            isAnimated ? "bg-[var(--uf-accent)]" : "bg-neutral-800"
                          }`}
                        >
                          <span className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            isAnimated ? "translate-x-4" : "translate-x-0"
                          }`} />
                        </button>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-medium text-[var(--uf-text)]">Animation Style</label>
                        <div className="grid grid-cols-3 gap-2">
                          {(["Flicker", "Wave", "Scan"] as const).map((s) => (
                            <button
                              key={s}
                              onClick={() => setAnimStyle(s)}
                              className={`rounded-lg border py-1.5 text-xs font-medium transition ${
                                animStyle === s 
                                  ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/10 text-[var(--uf-accent)]" 
                                  : "border-[var(--uf-border)] text-[var(--uf-text-muted)]"
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Canvas View */}
              <div className="flex-1 flex flex-col bg-[var(--uf-bg)] p-8 overflow-y-auto">
                <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
                  <div className="relative flex-1 min-h-[380px] rounded-3xl border border-white/[0.1] bg-black/80 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-8">
                    {/* Floating Controls */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <button
                        onClick={handleInspire}
                        className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md hover:bg-white/20 transition flex items-center gap-1.5 border border-white/[0.1]"
                      >
                        <Icon icon={Sparkles} size={13} className="text-amber-400" />
                        Inspire
                      </button>
                      <button
                        onClick={() => {
                          const nextIdx = (STYLE_CHIPS.indexOf(selectedStyle) + 1) % STYLE_CHIPS.length;
                          setSelectedStyle(STYLE_CHIPS[nextIdx]);
                        }}
                        className="rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md hover:bg-white/20 transition flex items-center gap-1.5 border border-white/[0.1]"
                      >
                        <Icon icon={Shuffle} size={13} />
                        Restyle
                      </button>
                    </div>

                    {/* Canvas ASCII Content */}
                    <div 
                      className={`relative z-10 p-6 rounded-2xl border border-white/5 transition-all duration-300 ${
                        isAnimated && animStyle === "Flicker" ? "animate-pulse" : ""
                      }`}
                      style={{
                        color: tintColor,
                        filter: activeEffects["Bloom"] ? "drop-shadow(0 0 10px currentColor)" : "none",
                        fontSize: `${cellSize}px`,
                      }}
                    >
                      <pre className="font-mono leading-tight whitespace-pre select-all text-center">
                        {dynamicAscii}
                      </pre>
                    </div>

                    {/* CRT Scan lines simulation if enabled */}
                    {activeEffects["Scan Lines"] && (
                      <div 
                        className="pointer-events-none absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.4) 50%)",
                          backgroundSize: "100% 4px",
                        }}
                      />
                    )}
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-[var(--uf-text-muted)]">
                    <span>Style: {selectedStyle} · Cell: {cellSize}px · Contrast: {contrast}%</span>
                    <span>Ready to export as React Component or Plain Text</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ── ASCII Gallery ── */
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-black text-[var(--uf-text)]">
                    Community ASCII Art Generators for the Web
                  </h1>
                  <p className="mt-1 text-sm text-[var(--uf-text-secondary)]">
                    Copy pre-rendered retro ASCII graphics, symbols, borders and game sprites.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <ViewModeToggle viewMode={viewMode} onChange={setViewMode} />
                  <button
                    onClick={() => setQuery({ editor: "true" })}
                    className="rounded-xl bg-[var(--uf-accent)] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[var(--uf-accent-hover)] transition flex items-center gap-2"
                  >
                    <Icon icon={Plus} size={15} />
                    + Create ASCII art
                  </button>
                </div>
              </div>

              {/* Tag filters pill bar */}
              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  onClick={() => { setActiveTag("all"); setCurrentPage(1); }}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                    activeTag === "all"
                      ? "bg-white text-black font-semibold shadow-sm"
                      : "border border-[var(--uf-border)] bg-[var(--uf-panel)] text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)]"
                  }`}
                >
                  All Recipes ({ASCII_DATA.length})
                </button>
                {ASCII_TAGS.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => { setActiveTag(t.name); setCurrentPage(1); }}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                      activeTag === t.name
                        ? "bg-white text-black font-semibold shadow-sm"
                        : "border border-[var(--uf-border)] bg-[var(--uf-panel)] text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)]"
                    }`}
                  >
                    {t.name} ({t.count})
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {pagedItems.map((a) => (
                  <div
                    key={a.id}
                    className="group relative flex flex-col rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] overflow-hidden card-hover break-inside-avoid"
                  >
                    <div className="flex items-center justify-between border-b border-[var(--uf-border)] px-4 py-2.5 bg-black/10">
                      <span className="text-xs font-semibold text-[var(--uf-text)]">{a.name}</span>
                      <span className="text-[10px] text-[var(--uf-text-muted)] bg-white/5 px-2 py-0.5 rounded-full">
                        {a.tag}
                      </span>
                    </div>
                    <div className="p-4 bg-black/40 flex items-center justify-center min-h-[140px] overflow-x-auto">
                      <pre className="font-mono text-xs text-[var(--uf-accent)] leading-relaxed select-all">
                        {a.content}
                      </pre>
                    </div>
                    <div className="p-3 border-t border-[var(--uf-border)] flex items-center justify-end">
                      <button
                        onClick={() => handleCopy(a.id, a.content)}
                        className="flex items-center gap-1.5 rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 py-1.5 text-xs font-medium text-[var(--uf-text)] hover:bg-white/10 transition"
                      >
                        <Icon icon={copiedId === a.id ? Check : Copy} size={14} className={copiedId === a.id ? "text-emerald-500" : ""} />
                        {copiedId === a.id ? "Copied" : "Copy ASCII"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {viewMode === "page" && totalPages > 1 && (
                <div className="mt-8 flex justify-center pb-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    pageSize={itemsPerPage}
                    totalItems={filtered.length}
                    onPageChange={(p) => setCurrentPage(p)}
                  />
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
