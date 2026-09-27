/**
 * Gradients Gallery & Interactive Gradient Editor
 * Meets Section 9.1 & 9.2 of Master Prompt
 */
import React, { useState } from "react";
import { 
  Search, Copy, Check, Plus, Sparkles, Sliders, Palette, 
  Layers, Play, Pause, RefreshCw, Download, ArrowLeft, Eye, 
  Shuffle, Share2, ShieldAlert, Monitor, Wand2, X
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useToast } from "../components/Toast";
import { useRoute } from "../lib/router";

type GradientFamily = "all" | "Atmosphere" | "Direction" | "Pattern" | "Focus";

interface ColorStop {
  id: string;
  name: string;
  hex: string;
  wcag: "AAA" | "AA" | "A";
  position: number;
}

interface GradientPreset {
  id: string;
  name: string;
  family: "Atmosphere" | "Direction" | "Pattern" | "Focus";
  css: string;
  tailwind: string;
  stops: ColorStop[];
}

const PRESETS: GradientPreset[] = [
  // Atmosphere
  {
    id: "g-bloom",
    name: "Bloom Field",
    family: "Atmosphere",
    tailwind: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900",
    css: "radial-gradient(ellipse at top, #fde68a, #7c3aed, #0c4a6e)",
    stops: [
      { id: "s1", name: "MOON WHITE", hex: "#EAF4FC", wcag: "AAA", position: 0 },
      { id: "s2", name: "PEACH PINK", hex: "#F09199", wcag: "AAA", position: 45 },
      { id: "s3", name: "ANCIENT PURPLE", hex: "#895B8A", wcag: "AA", position: 100 },
    ],
  },
  {
    id: "g-silk",
    name: "Silk Blend",
    family: "Atmosphere",
    tailwind: "bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500",
    css: "linear-gradient(135deg, #fb7185, #d946ef, #6366f1)",
    stops: [
      { id: "s1", name: "DAWN ROSE", hex: "#FB7185", wcag: "AAA", position: 0 },
      { id: "s2", name: "FUCHSIA MIST", hex: "#D946EF", wcag: "AA", position: 50 },
      { id: "s3", name: "INDIGO SKY", hex: "#6366F1", wcag: "AAA", position: 100 },
    ],
  },
  {
    id: "g-tide",
    name: "Layered Tide",
    family: "Atmosphere",
    tailwind: "bg-gradient-to-r from-teal-400 via-cyan-600 to-blue-900",
    css: "linear-gradient(to right, #2dd4bf, #0891b2, #1e3a8a)",
    stops: [
      { id: "s1", name: "CYAN TIDE", hex: "#2DD4BF", wcag: "AAA", position: 0 },
      { id: "s2", name: "LAPIS", hex: "#1E50A2", wcag: "AAA", position: 60 },
      { id: "s3", name: "DEEP NAVY", hex: "#0F172A", wcag: "AAA", position: 100 },
    ],
  },
  // Direction
  {
    id: "g-axis",
    name: "Axis Blend",
    family: "Direction",
    tailwind: "bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500",
    css: "linear-gradient(180deg, #6366f1, #a855f7, #ec4899)",
    stops: [
      { id: "s1", name: "AXIS BLUE", hex: "#6366F1", wcag: "AAA", position: 0 },
      { id: "s2", name: "VIOLET CORE", hex: "#A855F7", wcag: "AA", position: 50 },
      { id: "s3", name: "ROSE FLAME", hex: "#EC4899", wcag: "AAA", position: 100 },
    ],
  },
  {
    id: "g-ribbon",
    name: "Ribbon Field",
    family: "Direction",
    tailwind: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-600",
    css: "linear-gradient(145deg, #fbbf24, #f97316, #dc2626)",
    stops: [
      { id: "s1", name: "GOLDEN RAY", hex: "#FBBF24", wcag: "AAA", position: 0 },
      { id: "s2", name: "SUNBURST", hex: "#F97316", wcag: "AA", position: 52 },
      { id: "s3", name: "CRIMSON", hex: "#DC2626", wcag: "AAA", position: 100 },
    ],
  },
  {
    id: "g-repeat",
    name: "Repeat Bands",
    family: "Direction",
    tailwind: "bg-gradient-to-r from-emerald-400 via-teal-500 to-indigo-600",
    css: "linear-gradient(90deg, #34d399, #14b8a6, #4f46e5)",
    stops: [
      { id: "s1", name: "EMERALD", hex: "#34D399", wcag: "AAA", position: 0 },
      { id: "s2", name: "TEAL SHIFT", hex: "#14B8A6", wcag: "AA", position: 48 },
      { id: "s3", name: "INDIGO DEEP", hex: "#4F46E5", wcag: "AAA", position: 100 },
    ],
  },
  // Pattern
  {
    id: "g-pulse",
    name: "Pulse Bars",
    family: "Pattern",
    tailwind: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-indigo-900 to-black",
    css: "radial-gradient(circle at center, #1d4ed8, #312e81, #000000)",
    stops: [
      { id: "s1", name: "PULSE BLUE", hex: "#1D4ED8", wcag: "AAA", position: 0 },
      { id: "s2", name: "MIDNIGHT", hex: "#312E81", wcag: "AA", position: 70 },
      { id: "s3", name: "PITCH BLACK", hex: "#000000", wcag: "AAA", position: 100 },
    ],
  },
  {
    id: "g-dither",
    name: "Dither Grid",
    family: "Pattern",
    tailwind: "bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-400 to-teal-700",
    css: "conic-gradient(at top left, #fef08a, #34d399, #0f766e)",
    stops: [
      { id: "s1", name: "DITHER LIME", hex: "#FEF08A", wcag: "AAA", position: 0 },
      { id: "s2", name: "NEO GREEN", hex: "#34D399", wcag: "AAA", position: 40 },
      { id: "s3", name: "TEAL SHADE", hex: "#0F766E", wcag: "AA", position: 100 },
    ],
  },
  // Focus
  {
    id: "g-glow",
    name: "Core Glow",
    family: "Focus",
    tailwind: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-fuchsia-500 via-purple-800 to-slate-950",
    css: "radial-gradient(circle at center, #d946ef 0%, #6b21a8 50%, #020617 100%)",
    stops: [
      { id: "s1", name: "CORE MAGENTA", hex: "#D946EF", wcag: "AAA", position: 0 },
      { id: "s2", name: "PURPLE AURA", hex: "#6B21A8", wcag: "AA", position: 50 },
      { id: "s3", name: "VOID", hex: "#020617", wcag: "AAA", position: 100 },
    ],
  },
  {
    id: "g-echo",
    name: "Echo Rings",
    family: "Focus",
    tailwind: "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400 via-blue-600 to-slate-900",
    css: "radial-gradient(ellipse at center, #22d3ee, #2563eb, #0f172a)",
    stops: [
      { id: "s1", name: "CYAN ECHO", hex: "#22D3EE", wcag: "AAA", position: 0 },
      { id: "s2", name: "BLUE RING", hex: "#2563EB", wcag: "AAA", position: 55 },
      { id: "s3", name: "SLATE ABYSS", hex: "#0F172A", wcag: "AAA", position: 100 },
    ],
  },
  {
    id: "g-orbit",
    name: "Orbit Sweep",
    family: "Focus",
    tailwind: "bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-pink-500 via-indigo-600 to-pink-500",
    css: "conic-gradient(at center, #ec4899, #4f46e5, #ec4899)",
    stops: [
      { id: "s1", name: "ORBIT PINK", hex: "#EC4899", wcag: "AAA", position: 0 },
      { id: "s2", name: "COSMIC INDIGO", hex: "#4F46E5", wcag: "AA", position: 50 },
      { id: "s3", name: "ORBIT PINK", hex: "#EC4899", wcag: "AAA", position: 100 },
    ],
  },
  {
    id: "g-horizon",
    name: "Horizon Glow",
    family: "Focus",
    tailwind: "bg-gradient-to-t from-orange-500 via-amber-400 to-sky-300",
    css: "linear-gradient(0deg, #f97316, #fbbf24, #7dd3fc)",
    stops: [
      { id: "s1", name: "SOLAR ORANGE", hex: "#F97316", wcag: "AAA", position: 0 },
      { id: "s2", name: "AMBER SKY", hex: "#FBBF24", wcag: "AAA", position: 45 },
      { id: "s3", name: "OZONE BLUE", hex: "#7DD3FC", wcag: "AAA", position: 100 },
    ],
  },
];

export function GradientsPage() {
  const { query, setQuery } = useRoute();
  const { toast } = useToast();

  const isEditor = query.editor === "true" || window.location.hash.includes("gradients/editor");
  const [search, setSearch] = useState("");
  const [activeFamily, setActiveFamily] = useState<GradientFamily>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Editor State
  const [editorTab, setEditorTab] = useState<"form" | "palette" | "surface" | "motion" | "library">("form");
  const [selectedForm, setSelectedForm] = useState<"Atmosphere" | "Direction" | "Pattern" | "Focus">("Atmosphere");
  const [scale, setScale] = useState(68);
  const [distortion, setDistortion] = useState(28);
  const [blurPx, setBlurPx] = useState(20);
  const [grainPercent, setGrainPercent] = useState(12);
  const [edgeShade, setEdgeShade] = useState(15);
  const [isAnimated, setIsAnimated] = useState(true);
  const [exportOpen, setExportOpen] = useState(false);
  const [exportFormat, setExportFormat] = useState<"PNG" | "CSS" | "SVG">("PNG");

  const [currentStops, setCurrentStops] = useState<ColorStop[]>([
    { id: "1", name: "MOON WHITE", hex: "#EAF4FC", wcag: "AAA", position: 0 },
    { id: "2", name: "LAPIS", hex: "#1E50A2", wcag: "AAA", position: 35 },
    { id: "3", name: "PEACH PINK", hex: "#F09199", wcag: "AAA", position: 70 },
    { id: "4", name: "ANCIENT PURPLE", hex: "#895B8A", wcag: "AA", position: 100 },
  ]);

  // Generate CSS from current editor state
  const computedCss = (() => {
    const stopsStr = currentStops.map(s => `${s.hex} ${s.position}%`).join(", ");
    if (selectedForm === "Atmosphere") {
      return `radial-gradient(ellipse at top center, ${stopsStr})`;
    } else if (selectedForm === "Direction") {
      return `linear-gradient(${135 + distortion}deg, ${stopsStr})`;
    } else if (selectedForm === "Pattern") {
      return `conic-gradient(at 50% 50%, ${stopsStr})`;
    } else {
      return `radial-gradient(circle at center, ${stopsStr})`;
    }
  })();

  const handleCopyCode = (code: string, label: string) => {
    navigator.clipboard.writeText(code);
    toast("success", `Copied ${label}!`);
  };

  const handleInspire = () => {
    const palettes = [
      [
        { id: "1", name: "NEO MINT", hex: "#A7F3D0", wcag: "AAA" as const, position: 0 },
        { id: "2", name: "OCEAN TEAL", hex: "#0D9488", wcag: "AAA" as const, position: 40 },
        { id: "3", name: "ELECTRIC BLUE", hex: "#2563EB", wcag: "AAA" as const, position: 80 },
        { id: "4", name: "NIGHT SKY", hex: "#0F172A", wcag: "AA" as const, position: 100 },
      ],
      [
        { id: "1", name: "SOLAR PEACH", hex: "#FDE68A", wcag: "AAA" as const, position: 0 },
        { id: "2", name: "CORAL RED", hex: "#F43F5E", wcag: "AAA" as const, position: 50 },
        { id: "3", name: "DARK VIOLET", hex: "#4C1D95", wcag: "AA" as const, position: 100 },
      ],
      [
        { id: "1", name: "CYBER LIME", hex: "#BEF264", wcag: "AAA" as const, position: 0 },
        { id: "2", name: "EMERALD", hex: "#059669", wcag: "AAA" as const, position: 50 },
        { id: "3", name: "DEEP VOID", hex: "#042F2E", wcag: "AAA" as const, position: 100 },
      ]
    ];
    const picked = palettes[Math.floor(Math.random() * palettes.length)];
    setCurrentStops(picked);
    setScale(Math.floor(Math.random() * 40) + 50);
    setDistortion(Math.floor(Math.random() * 50) + 10);
    toast("info", "Randomized gradient geometry & palette ✨");
  };

  const filteredPresets = PRESETS.filter(p => 
    (activeFamily === "all" || p.family === activeFamily) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.family.toLowerCase().includes(search.toLowerCase()))
  );

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
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search gradients..." 
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
            {isEditor ? "Back to gallery" : "+ Create gradient"}
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin space-y-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--uf-text-muted)] px-2">Navigation</span>
            <div className="mt-1 space-y-1">
              <button
                onClick={() => { setActiveFamily("all"); setQuery({ editor: "" }); }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-xs transition ${
                  !isEditor && activeFamily === "all" ? "bg-white/[0.08] font-medium text-[var(--uf-text)]" : "text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]"
                }`}
              >
                <span>Browse all</span>
                <span className="text-[10px] text-[var(--uf-text-muted)]">{PRESETS.length}</span>
              </button>
            </div>
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--uf-text-muted)] px-2">Gradient Families</span>
            <div className="mt-1 space-y-1">
              {(["Atmosphere", "Direction", "Pattern", "Focus"] as const).map(fam => {
                const count = PRESETS.filter(p => p.family === fam).length;
                return (
                  <button
                    key={fam}
                    onClick={() => { setActiveFamily(fam); setQuery({ editor: "" }); }}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-xs transition ${
                      !isEditor && activeFamily === fam ? "bg-white/[0.08] font-medium text-[var(--uf-text)]" : "text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]"
                    }`}
                  >
                    <span>{fam}</span>
                    <span className="text-[10px] text-[var(--uf-text-muted)]">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main View: Gallery or Interactive Editor ── */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {isEditor ? (
          /* ── Interactive Gradient Editor ── */
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
                  <span className="text-sm font-bold text-[var(--uf-text)]">Gradient Studio</span>
                  <span className="rounded-full bg-[var(--uf-accent)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--uf-accent)]">Live CSS</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleCopyCode(computedCss, "CSS")}
                  className="rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 py-1.5 text-xs font-medium text-[var(--uf-text)] hover:bg-white/[0.06] transition flex items-center gap-1.5"
                >
                  <Icon icon={Copy} size={13} />
                  Copy CSS
                </button>
                <button 
                  onClick={() => handleCopyCode(`/* Gradient Prompt */\nCreate a modern web section with a subtle ${selectedForm} background gradient using ${computedCss}`, "Prompt")}
                  className="rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 py-1.5 text-xs font-medium text-[var(--uf-text)] hover:bg-white/[0.06] transition flex items-center gap-1.5"
                >
                  <Icon icon={Wand2} size={13} />
                  Copy prompt
                </button>
                <button 
                  onClick={() => setExportOpen(true)}
                  className="rounded-lg bg-[var(--uf-accent)] px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition flex items-center gap-1.5"
                >
                  <Icon icon={Download} size={13} />
                  Export
                </button>
              </div>
            </div>

            {/* Editor Workspace */}
            <div className="flex-1 flex overflow-hidden">
              {/* Left Control Rail */}
              <div className="w-80 shrink-0 border-r border-[var(--uf-border)] bg-[var(--uf-panel)] flex flex-col">
                {/* Icon Tabs */}
                <div className="grid grid-cols-5 border-b border-[var(--uf-border)] bg-[var(--uf-panel-2)]">
                  {(["form", "palette", "surface", "motion", "library"] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setEditorTab(tab)}
                      className={`py-3 text-[11px] font-semibold capitalize border-b-2 transition flex flex-col items-center gap-1 ${
                        editorTab === tab 
                          ? "border-[var(--uf-accent)] text-[var(--uf-accent)] bg-[var(--uf-panel)]" 
                          : "border-transparent text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
                      }`}
                    >
                      {tab === "form" && <Icon icon={Layers} size={15} />}
                      {tab === "palette" && <Icon icon={Palette} size={15} />}
                      {tab === "surface" && <Icon icon={Sliders} size={15} />}
                      {tab === "motion" && <Icon icon={Play} size={15} />}
                      {tab === "library" && <Icon icon={Sparkles} size={15} />}
                      <span className="text-[9px] tracking-tight">{tab}</span>
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="flex-1 overflow-y-auto p-5 scrollbar-thin space-y-6">
                  {editorTab === "form" && (
                    <div className="space-y-5">
                      <div>
                        <label className="text-xs font-bold text-[var(--uf-text)]">Gradient Form</label>
                        <div className="mt-2.5 grid grid-cols-2 gap-2">
                          {(["Atmosphere", "Direction", "Pattern", "Focus"] as const).map(f => (
                            <button
                              key={f}
                              onClick={() => setSelectedForm(f)}
                              className={`rounded-xl border p-3 text-left transition ${
                                selectedForm === f 
                                  ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/10 text-[var(--uf-accent)]" 
                                  : "border-[var(--uf-border)] bg-[var(--uf-panel-2)] text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)]"
                              }`}
                            >
                              <p className="text-xs font-bold">{f}</p>
                              <p className="text-[10px] text-[var(--uf-text-muted)] mt-0.5">
                                {f === "Atmosphere" && "Soft radial bloom"}
                                {f === "Direction" && "Linear axis flow"}
                                {f === "Pattern" && "Conic sweep"}
                                {f === "Focus" && "Centred core glow"}
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4 pt-2 border-t border-[var(--uf-border)]">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-medium text-[var(--uf-text)]">Scale</label>
                          <span className="text-xs font-mono text-[var(--uf-text-muted)]">{scale}%</span>
                        </div>
                        <input
                          type="range"
                          min="20"
                          max="150"
                          value={scale}
                          onChange={(e) => setScale(Number(e.target.value))}
                          className="w-full accent-[var(--uf-accent)] h-1.5 bg-[var(--uf-panel-2)] rounded-lg cursor-pointer"
                        />

                        <div className="flex items-center justify-between pt-2">
                          <label className="text-xs font-medium text-[var(--uf-text)]">Distortion</label>
                          <span className="text-xs font-mono text-[var(--uf-text-muted)]">{distortion}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={distortion}
                          onChange={(e) => setDistortion(Number(e.target.value))}
                          className="w-full accent-[var(--uf-accent)] h-1.5 bg-[var(--uf-panel-2)] rounded-lg cursor-pointer"
                        />
                      </div>

                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={handleInspire}
                          className="flex-1 rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] py-2 text-xs font-medium text-[var(--uf-text)] hover:bg-white/[0.06] transition flex items-center justify-center gap-1.5"
                        >
                          <Icon icon={Shuffle} size={13} />
                          Rearrange
                        </button>
                        <button
                          onClick={() => { setScale(68); setDistortion(28); }}
                          className="rounded-lg border border-[var(--uf-border)] px-3 py-2 text-xs font-medium text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] transition"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  )}

                  {editorTab === "palette" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-[var(--uf-text)]">Colour Stops</label>
                        <button
                          onClick={() => {
                            const newStop: ColorStop = {
                              id: String(Date.now()),
                              name: "VIBRANT STOP",
                              hex: "#38BDF8",
                              wcag: "AAA",
                              position: 50
                            };
                            setCurrentStops([...currentStops, newStop]);
                          }}
                          className="text-[11px] font-semibold text-[var(--uf-accent)] hover:underline flex items-center gap-1"
                        >
                          <Icon icon={Plus} size={12} /> Add colour
                        </button>
                      </div>

                      <div className="space-y-2.5">
                        {currentStops.map((stop, idx) => (
                          <div key={stop.id} className="flex items-center gap-2.5 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] p-2.5">
                            <input
                              type="color"
                              value={stop.hex}
                              onChange={(e) => {
                                const next = [...currentStops];
                                next[idx].hex = e.target.value;
                                setCurrentStops(next);
                              }}
                              className="h-7 w-7 rounded-lg border-0 cursor-pointer p-0 bg-transparent"
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-[var(--uf-text)] truncate">{stop.name}</span>
                                <span className="rounded bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-mono font-bold text-emerald-400">
                                  {stop.wcag}
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-[10px] text-[var(--uf-text-muted)] font-mono mt-0.5">
                                <span>{stop.hex}</span>
                                <span>{stop.position}%</span>
                              </div>
                            </div>
                            {currentStops.length > 2 && (
                              <button
                                onClick={() => setCurrentStops(currentStops.filter((_, i) => i !== idx))}
                                className="text-[var(--uf-text-muted)] hover:text-rose-400 transition p-1"
                              >
                                <Icon icon={X} size={13} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-[var(--uf-border)]">
                        <button
                          onClick={handleInspire}
                          className="w-full rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] py-2 text-xs font-medium text-[var(--uf-text)] hover:bg-white/[0.06] transition flex items-center justify-center gap-2"
                        >
                          <Icon icon={Wand2} size={13} className="text-amber-400" />
                          Start from a theme
                        </button>
                      </div>
                    </div>
                  )}

                  {editorTab === "surface" && (
                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-medium text-[var(--uf-text)]">Blur</label>
                          <span className="text-xs font-mono text-[var(--uf-text-muted)]">{blurPx}px</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="80"
                          value={blurPx}
                          onChange={(e) => setBlurPx(Number(e.target.value))}
                          className="w-full accent-[var(--uf-accent)] h-1.5 bg-[var(--uf-panel-2)] rounded-lg cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-medium text-[var(--uf-text)]">Grain</label>
                          <span className="text-xs font-mono text-[var(--uf-text-muted)]">{grainPercent}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="50"
                          value={grainPercent}
                          onChange={(e) => setGrainPercent(Number(e.target.value))}
                          className="w-full accent-[var(--uf-accent)] h-1.5 bg-[var(--uf-panel-2)] rounded-lg cursor-pointer"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-medium text-[var(--uf-text)]">Edge Shade</label>
                          <span className="text-xs font-mono text-[var(--uf-text-muted)]">{edgeShade}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="60"
                          value={edgeShade}
                          onChange={(e) => setEdgeShade(Number(e.target.value))}
                          className="w-full accent-[var(--uf-accent)] h-1.5 bg-[var(--uf-panel-2)] rounded-lg cursor-pointer"
                        />
                      </div>
                    </div>
                  )}

                  {editorTab === "motion" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)]">
                        <div>
                          <p className="text-xs font-bold text-[var(--uf-text)]">Animate Gradient</p>
                          <p className="text-[10px] text-[var(--uf-text-muted)] mt-0.5">Every form has its own movement pattern.</p>
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
                    </div>
                  )}

                  {editorTab === "library" && (
                    <div className="space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--uf-text-muted)]">Curated Presets</p>
                      <div className="grid grid-cols-2 gap-2">
                        {PRESETS.map(p => (
                          <button
                            key={p.id}
                            onClick={() => {
                              setSelectedForm(p.family);
                              setCurrentStops(p.stops);
                              toast("success", `Loaded ${p.name}`);
                            }}
                            className="group flex flex-col rounded-xl border border-[var(--uf-border)] overflow-hidden text-left hover:border-white/[0.2] transition"
                          >
                            <div className="h-12 w-full" style={{ background: p.css }} />
                            <div className="p-2 bg-[var(--uf-panel-2)]">
                              <span className="text-[11px] font-medium text-[var(--uf-text)] block truncate">{p.name}</span>
                              <span className="text-[9px] text-[var(--uf-text-muted)]">{p.family}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Main Interactive Canvas */}
              <div className="flex-1 flex flex-col bg-[var(--uf-bg)] p-8 overflow-y-auto">
                <div className="flex-1 flex flex-col max-w-4xl mx-auto w-full">
                  {/* Canvas Container */}
                  <div className="relative flex-1 min-h-[380px] rounded-3xl border border-white/[0.1] shadow-2xl overflow-hidden flex items-center justify-center">
                    <div 
                      className={`absolute inset-0 transition-all duration-700 ${isAnimated ? "animate-pulse" : ""}`}
                      style={{ 
                        background: computedCss,
                        filter: `blur(${blurPx / 4}px)`,
                        transform: `scale(${scale / 100})`,
                      }}
                    />

                    {/* Subtle grain overlay */}
                    {grainPercent > 0 && (
                      <div 
                        className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay"
                        style={{
                          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                          backgroundSize: "16px 16px"
                        }}
                      />
                    )}

                    {/* Floating Quick Action Buttons */}
                    <div className="absolute top-4 right-4 flex items-center gap-2">
                      <button
                        onClick={handleInspire}
                        className="rounded-full bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md hover:bg-black/80 transition flex items-center gap-1.5 border border-white/[0.1]"
                      >
                        <Icon icon={Sparkles} size={13} className="text-amber-400" />
                        Inspire
                      </button>
                      <button
                        onClick={() => {
                          const shuffled = [...currentStops].sort(() => Math.random() - 0.5);
                          setCurrentStops(shuffled);
                        }}
                        className="rounded-full bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md hover:bg-black/80 transition flex items-center gap-1.5 border border-white/[0.1]"
                      >
                        <Icon icon={RefreshCw} size={13} />
                        Recolour
                      </button>
                      <button
                        onClick={() => {
                          const forms: Array<"Atmosphere" | "Direction" | "Pattern" | "Focus"> = ["Atmosphere", "Direction", "Pattern", "Focus"];
                          const nextForm = forms[(forms.indexOf(selectedForm) + 1) % forms.length];
                          setSelectedForm(nextForm);
                        }}
                        className="rounded-full bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-md hover:bg-black/80 transition flex items-center gap-1.5 border border-white/[0.1]"
                      >
                        <Icon icon={Sliders} size={13} />
                        Restyle
                      </button>
                    </div>

                    <div className="relative z-10 text-center pointer-events-none px-6">
                      <h2 className="text-2xl font-black text-white drop-shadow-md">
                        {selectedForm} Gradient
                      </h2>
                      <p className="mt-1 text-xs text-white/80 max-w-sm drop-shadow-sm font-medium">
                        Layered blooms spread from independent colour points · tap a band to pick it
                      </p>
                    </div>
                  </div>

                  {/* Gradient Stop Bar with draggable handles */}
                  <div className="mt-6 rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-[var(--uf-text)]">Gradient Spectrum</span>
                      <span className="text-[11px] text-[var(--uf-text-muted)]">{currentStops.length} colour bands</span>
                    </div>
                    
                    <div className="h-5 w-full rounded-xl border border-white/[0.1] shadow-inner relative overflow-hidden" style={{ background: computedCss }}>
                      {currentStops.map(s => (
                        <div 
                          key={s.id} 
                          className="absolute top-0 bottom-0 w-2 -ml-1 border-r border-white/40 shadow-sm"
                          style={{ left: `${s.position}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ── Gradients Gallery ── */
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-black tracking-tight text-[var(--uf-text)]">Community CSS Gradients</h1>
                  <p className="mt-1 text-sm text-[var(--uf-text-secondary)]">
                    Curated atmosphere, direction, pattern and focus gradients for React & Tailwind CSS.
                  </p>
                </div>
                <button
                  onClick={() => setQuery({ editor: "true" })}
                  className="rounded-xl bg-[var(--uf-accent)] px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-[var(--uf-accent-hover)] transition flex items-center gap-2 shrink-0"
                >
                  <Icon icon={Plus} size={15} />
                  + Create gradient
                </button>
              </div>

              {/* Family Filters */}
              <div className="mt-6 flex flex-wrap gap-2">
                {(["all", "Atmosphere", "Direction", "Pattern", "Focus"] as const).map(fam => (
                  <button
                    key={fam}
                    onClick={() => setActiveFamily(fam)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                      activeFamily === fam 
                        ? "bg-white text-black font-semibold shadow-sm" 
                        : "border border-[var(--uf-border)] bg-[var(--uf-panel)] text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)]"
                    }`}
                  >
                    {fam === "all" ? "All Families" : fam}
                  </button>
                ))}
              </div>

              {/* Gradients Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredPresets.map(g => (
                  <div key={g.id} className="group relative flex flex-col rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] overflow-hidden card-hover">
                    <div 
                      className="h-48 w-full transition-transform duration-500 group-hover:scale-105"
                      style={{ background: g.css }}
                    />
                    
                    {/* Hover Overlay with actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2.5 backdrop-blur-[2px] p-4">
                      <button 
                        onClick={() => {
                          setSelectedForm(g.family);
                          setCurrentStops(g.stops);
                          setQuery({ editor: "true" });
                        }}
                        className="rounded-lg bg-white text-black px-4 py-1.5 text-xs font-semibold hover:bg-neutral-200 transition flex items-center gap-1.5 shadow"
                      >
                        <Icon icon={Sliders} size={13} />
                        Open in editor
                      </button>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(g.tailwind);
                          toast("success", "Copied Tailwind classes!");
                        }}
                        className="rounded-lg bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition flex items-center gap-1.5 backdrop-blur-md"
                      >
                        <Icon icon={Copy} size={13} />
                        Copy Tailwind
                      </button>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(g.css);
                          toast("success", "Copied CSS gradient!");
                        }}
                        className="rounded-lg bg-black/40 px-3.5 py-1.5 text-xs font-medium text-white hover:bg-black/60 transition flex items-center gap-1.5 backdrop-blur-md"
                      >
                        <Icon icon={Copy} size={13} />
                        Copy CSS
                      </button>
                    </div>

                    <div className="px-4 py-3 border-t border-[var(--uf-border)] flex items-center justify-between bg-[var(--uf-panel)]">
                      <div>
                        <h3 className="font-semibold text-sm text-[var(--uf-text)]">{g.name}</h3>
                        <p className="text-[10px] text-[var(--uf-text-muted)] uppercase tracking-wider mt-0.5">{g.family}</p>
                      </div>
                      <div className="flex -space-x-1.5">
                        {g.stops.map(s => (
                          <div 
                            key={s.id} 
                            className="h-4 w-4 rounded-full border border-black/40 shadow-sm"
                            style={{ backgroundColor: s.hex }}
                            title={s.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Export Dialog ── */}
      {exportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--uf-border)] pb-4">
              <h3 className="text-base font-bold text-[var(--uf-text)]">Export Gradient</h3>
              <button 
                onClick={() => setExportOpen(false)}
                className="text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] transition"
              >
                <Icon icon={X} size={18} />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div className="flex rounded-lg border border-[var(--uf-border)] p-1 bg-[var(--uf-panel-2)]">
                {(["PNG", "CSS", "SVG"] as const).map(fmt => (
                  <button
                    key={fmt}
                    onClick={() => setExportFormat(fmt)}
                    className={`flex-1 rounded-md py-1.5 text-xs font-semibold transition ${
                      exportFormat === fmt ? "bg-[var(--uf-accent)] text-white" : "text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
                    }`}
                  >
                    {fmt}
                  </button>
                ))}
              </div>

              <div className="rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] p-3 text-xs text-[var(--uf-text-secondary)]">
                <p className="font-semibold text-[var(--uf-text)]">Dimension & Specs</p>
                <p className="mt-1 text-[11px] font-mono text-[var(--uf-text-muted)]">Aspect: 16:9 · 1920 × 1080 px (1080p)</p>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setExportOpen(false)}
                  className="rounded-lg border border-[var(--uf-border)] px-4 py-2 text-xs font-medium text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)]"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    handleCopyCode(computedCss, `${exportFormat} asset`);
                    setExportOpen(false);
                  }}
                  className="rounded-lg bg-[var(--uf-accent)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition"
                >
                  Download {exportFormat}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
