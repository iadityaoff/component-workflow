import React, { useState, useMemo, useEffect, useRef } from "react";
import { Palette, Copy, Check, Sparkles, ChevronLeft, Plus, Search, Layers, Layout, FormInput, Activity, Filter, RotateCcw } from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useToast } from "../components/Toast";
import { useRoute } from "../lib/router";
import { ViewModeToggle, type ViewMode } from "../components/ViewModeToggle";
import { Pagination } from "../components/Pagination";

// --- Types & Data ---

interface ThemeItem {
  id: string;
  name: string;
  description: string;
  colors: {
    primary: string;
    background: string;
    accent: string;
    card: string;
  };
  author: string;
  downloads: string;
  tags: string[];
  isCustom?: boolean;
}

const THEMES: ThemeItem[] = [
  {
    id: "theme-zinc",
    name: "Zinc Minimalist",
    description: "Neutral monochrome theme focused on contrast and accessibility.",
    colors: { primary: "#18181b", background: "#fafafa", accent: "#71717a", card: "#ffffff" },
    author: "shadcn",
    downloads: "24.5k",
    tags: ["Minimal", "Monochrome", "Light", "Corporate", "Professional", "Modern"]
  },
  {
    id: "theme-tokyo",
    name: "Tokyo Night",
    description: "Cyberpunk midnight tones with radiant blue and violet highlights.",
    colors: { primary: "#7aa2f7", background: "#1a1b26", accent: "#bb9af7", card: "#24283b" },
    author: "craftzdog",
    downloads: "18.2k",
    tags: ["Dark", "Neon", "Colorful", "Cyberpunk", "Modern"]
  },
  {
    id: "theme-nord",
    name: "Nordic Pine",
    description: "Calm Scandinavian teal, sage, and emerald dark forest shades.",
    colors: { primary: "#10b981", background: "#064e3b", accent: "#34d399", card: "#065f46" },
    author: "priya",
    downloads: "12.8k",
    tags: ["Dark", "Nature", "Earthy", "Minimal", "Muted"]
  },
  {
    id: "theme-rose",
    name: "Rose Quartz",
    description: "Warm pastel elegance with gentle crimson, peach, and soft ruby accents.",
    colors: { primary: "#f43f5e", background: "#fff1f2", accent: "#fb7185", card: "#ffffff" },
    author: "ariac",
    downloads: "9.4k",
    tags: ["Light", "Pastel", "Warm", "Playful", "Colorful"]
  },
  {
    id: "theme-solar",
    name: "Solar Flare",
    description: "High energy warm dark amber palette for metrics and analytics dashboards.",
    colors: { primary: "#f59e0b", background: "#18140f", accent: "#fbbf24", card: "#261e16" },
    author: "mateor",
    downloads: "11.1k",
    tags: ["Dark", "Warm", "Vibrant", "Colorful", "Modern"]
  },
  {
    id: "theme-cyan",
    name: "Matrix Cyan",
    description: "High contrast electric cyan and deep carbon terminal glow.",
    colors: { primary: "#06b6d4", background: "#080c14", accent: "#22d3ee", card: "#0e1726" },
    author: "theom",
    downloads: "14.6k",
    tags: ["Dark", "Neon", "High Contrast", "Modern", "Website"]
  },
  {
    id: "theme-brutal-yellow",
    name: "Acid Brutalist",
    description: "High impact neobrutalism with stark ink borders and electric acid yellow.",
    colors: { primary: "#eab308", background: "#fef08a", accent: "#000000", card: "#ffffff" },
    author: "karlv",
    downloads: "8.7k",
    tags: ["Brutalist", "Light", "Colorful", "High Contrast"]
  },
  {
    id: "theme-cyber-grid",
    name: "Cyber Neon Grid",
    description: "Hot magenta and ultra-violet neon glow against deep obsidian.",
    colors: { primary: "#ec4899", background: "#0f0728", accent: "#a855f7", card: "#1e1045" },
    author: "synthdev",
    downloads: "15.9k",
    tags: ["Neon", "Dark", "Colorful", "Cyberpunk", "Modern"]
  },
  {
    id: "theme-enterprise",
    name: "Enterprise Slate",
    description: "Disciplined cobalt and muted charcoal for B2B SaaS applications.",
    colors: { primary: "#3b82f6", background: "#0b1120", accent: "#60a5fa", card: "#1e293b" },
    author: "acme-ds",
    downloads: "32.1k",
    tags: ["Corporate", "Professional", "Dark", "Minimal", "Website"]
  },
  {
    id: "theme-paper",
    name: "Clean Editorial",
    description: "Swiss typography-first layout with off-white warm canvas and jet ink.",
    colors: { primary: "#09090b", background: "#fbfbfa", accent: "#2563eb", card: "#ffffff" },
    author: "verlag",
    downloads: "6.3k",
    tags: ["Light", "Minimal", "Corporate", "Classic", "Monochrome"]
  },
  {
    id: "theme-brutal-mono",
    name: "Stark Brutalism",
    description: "Heavy 2px black boundaries, zero radius, and monospace high visibility.",
    colors: { primary: "#f43f5e", background: "#121212", accent: "#22c55e", card: "#1c1c1c" },
    author: "mono_studio",
    downloads: "7.9k",
    tags: ["Brutalist", "Dark", "Minimal", "Monochrome", "High Contrast"]
  },
  {
    id: "theme-sunset",
    name: "Sunset Boulevard",
    description: "Rich gradient warmth transitioning from blood orange into dusk purple.",
    colors: { primary: "#f97316", background: "#1c0d24", accent: "#d946ef", card: "#2a1538" },
    author: "sunset_coder",
    downloads: "10.4k",
    tags: ["Gradient", "Colorful", "Dark", "Neon", "Vibrant", "Warm"]
  },
  {
    id: "theme-aura-gradient",
    name: "Aura Mesh Gradient",
    description: "Multi-stop dynamic flowing gradient palette with luminous cyan and violet.",
    colors: { primary: "#8b5cf6", background: "#090714", accent: "#06b6d4", card: "#16102b" },
    author: "gradient_lab",
    downloads: "19.8k",
    tags: ["Gradient", "Colorful", "Modern", "Website", "Vibrant", "Glass"]
  },
  {
    id: "theme-frosted-glass",
    name: "Frosted Glassmorphism",
    description: "Ultra-translucent backdrop filters with soft refraction and ice-blue tints.",
    colors: { primary: "#38bdf8", background: "#0b1329", accent: "#a5f3fc", card: "#111f3d" },
    author: "glass_ui",
    downloads: "14.2k",
    tags: ["Glass", "Modern", "Minimal", "Light", "Pastel"]
  },
  {
    id: "theme-retro-synth",
    name: "Retro Synthwave 84",
    description: "Vintage 80s arcade sunset nostalgia with hot amber and laser cyan.",
    colors: { primary: "#f43f5e", background: "#140c1f", accent: "#38bdf8", card: "#231636" },
    author: "synth_rider",
    downloads: "11.7k",
    tags: ["Retro", "Neon", "Cyberpunk", "Vibrant", "Dark"]
  },
  {
    id: "theme-clay-earth",
    name: "Terracotta Earth",
    description: "Organic warm clay, raw terracotta, and sun-baked desert sand tones.",
    colors: { primary: "#ea580c", background: "#211613", accent: "#fdba74", card: "#33221d" },
    author: "nature_ds",
    downloads: "8.5k",
    tags: ["Earthy", "Nature", "Warm", "Muted", "Classic"]
  },
  {
    id: "theme-classic-slate",
    name: "Classic Slate",
    description: "Timeless navy and cool slate grey for enterprise dashboards.",
    colors: { primary: "#475569", background: "#0f172a", accent: "#94a3b8", card: "#1e293b" },
    author: "enterprise_pro",
    downloads: "28.3k",
    tags: ["Classic", "Corporate", "Professional", "Dark", "Website", "Muted"]
  },
  {
    id: "theme-candy-pop",
    name: "Playful Candy Pop",
    description: "Whimsical confectionery pastel tones with high joyful energy.",
    colors: { primary: "#ec4899", background: "#fdf2f8", accent: "#a855f7", card: "#ffffff" },
    author: "sweet_pixel",
    downloads: "9.1k",
    tags: ["Playful", "Pastel", "Light", "Colorful", "Website"]
  },
  {
    id: "theme-my-theme",
    name: "Personal Workspace Theme",
    description: "Your custom crafted theme with electric sapphire and deep nebula accents.",
    colors: { primary: "#6366f1", background: "#090d16", accent: "#818cf8", card: "#131b2e" },
    author: "you",
    downloads: "Local",
    tags: ["Dark", "Minimal", "Neon", "Modern", "Professional"],
    isCustom: true
  }
];

const ALL_THEME_TAGS = [
  "Minimal",
  "Professional",
  "Website",
  "Modern",
  "Warm",
  "Dark",
  "Classic",
  "Colorful",
  "Pastel",
  "Monochrome",
  "Vibrant",
  "Muted",
  "Nature",
  "Retro",
  "Playful",
  "Light",
  "Corporate",
  "Brutalist",
  "High Contrast",
  "Earthy",
  "Neon",
  "Cyberpunk",
  "Glass",
  "Gradient"
];

const SIDEBAR_TAGS = ALL_THEME_TAGS;

// Helper to normalize strings for robust tag matching (slug or display name)
function normTag(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

// --- Main Page Component ---

export function ThemesPage() {
  const { route } = useRoute();

  if (route.page === "themes-editor") {
    return <ThemeEditor />;
  }

  return <ThemeGallery />;
}

// --- Theme Gallery ---

function ThemeGallery() {
  const { navigate, query } = useRoute();
  const { toast } = useToast();
  
  // Search & Filter State
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState<"all" | "my" | "bookmarked">("all");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTone, setSelectedTone] = useState<"all" | "dark" | "light" | "colorful">("all");
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsFilterOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Sync state with URL query parameters
  useEffect(() => {
    if (query.tag) {
      setSelectedTag(query.tag);
      setActiveFilter("all");
    } else if (query.tab === "mine") {
      setActiveFilter("my");
      setSelectedTag(null);
    } else if (query.tab === "bookmarked") {
      setActiveFilter("bookmarked");
      setSelectedTag(null);
    } else {
      setSelectedTag(null);
      setActiveFilter("all");
    }
  }, [query.tag, query.tab]);

  // Bookmarks state persisted in localStorage
  const [savedThemeIds, setSavedThemeIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem("uiforge-saved-themes");
      return raw ? JSON.parse(raw) : ["theme-tokyo", "theme-rose"];
    } catch {
      return ["theme-tokyo", "theme-rose"];
    }
  });

  const toggleBookmark = (e: React.MouseEvent, id: string, name: string) => {
    e.stopPropagation();
    setSavedThemeIds((prev) => {
      const isSaved = prev.includes(id);
      const next = isSaved ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("uiforge-saved-themes", JSON.stringify(next));
      } catch {
        /* ignore */
      }
      toast(isSaved ? "info" : "success", isSaved ? `Removed "${name}" from bookmarks` : `Saved "${name}" to bookmarks!`);
      return next;
    });
  };

  const copyThemeCss = (e: React.MouseEvent, theme: ThemeItem) => {
    e.stopPropagation();
    const css = `:root {
  --primary: ${theme.colors.primary};
  --background: ${theme.colors.background};
  --accent: ${theme.colors.accent};
  --card: ${theme.colors.card};
}`;
    navigator.clipboard.writeText(css);
    toast("success", `Copied ${theme.name} CSS variables!`);
  };

  // Compute tag counts dynamically
  const tagCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const tag of SIDEBAR_TAGS) {
      const targetNorm = normTag(tag);
      counts[tag] = THEMES.filter((t) =>
        t.tags.some((themeTag) => normTag(themeTag) === targetNorm)
      ).length;
    }
    return counts;
  }, []);

  const myThemesCount = useMemo(() => {
    return THEMES.filter((t) => t.author === "you" || t.isCustom).length;
  }, []);

  // Filtered themes
  const filteredThemes = useMemo(() => {
    return THEMES.filter((theme) => {
      // 1. Search Query
      if (search.trim()) {
        const q = search.toLowerCase().trim();
        const matchName = theme.name.toLowerCase().includes(q);
        const matchDesc = theme.description.toLowerCase().includes(q);
        const matchAuthor = theme.author.toLowerCase().includes(q);
        const matchTag = theme.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchAuthor && !matchTag) return false;
      }

      // 2. View Filter
      if (activeFilter === "bookmarked") {
        if (!savedThemeIds.includes(theme.id)) return false;
      } else if (activeFilter === "my") {
        if (theme.author !== "you" && !theme.isCustom) return false;
      }

      // 3. Tag Filter
      if (selectedTag) {
        const targetNorm = normTag(selectedTag);
        const hasTag = theme.tags.some((t) => normTag(t) === targetNorm);
        if (!hasTag) return false;
      }

      // 4. Tone Filter
      if (selectedTone === "dark") {
        if (!theme.tags.includes("Dark")) return false;
      } else if (selectedTone === "light") {
        if (!theme.tags.includes("Light")) return false;
      } else if (selectedTone === "colorful") {
        if (!theme.tags.includes("Colorful") && !theme.tags.includes("Neon") && !theme.tags.includes("Gradient")) return false;
      }

      return true;
    });
  }, [search, activeFilter, selectedTag, selectedTone, savedThemeIds]);

  // View Mode (Pages vs Scroll) & Pagination
  const [viewMode, setViewMode] = useState<ViewMode>("page");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [search, activeFilter, selectedTag, selectedTone]);

  const totalPages = Math.ceil(filteredThemes.length / itemsPerPage);
  const paginatedThemes = viewMode === "scroll" ? filteredThemes : filteredThemes.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const resetFilters = () => {
    setSearch("");
    setActiveFilter("all");
    setSelectedTag(null);
    setSelectedTone("all");
    navigate("#/themes");
  };

  const handleSelectTag = (tag: string) => {
    if (selectedTag && normTag(selectedTag) === normTag(tag)) {
      setSelectedTag(null);
      navigate("#/themes");
    } else {
      setSelectedTag(tag);
      setActiveFilter("all");
      const slug = tag.toLowerCase().replace(/\s+/g, "-");
      navigate(`#/themes?tag=${slug}`);
    }
  };

  const handleSelectView = (v: "all" | "my" | "bookmarked") => {
    setActiveFilter(v);
    setSelectedTag(null);
    if (v === "all") navigate("#/themes");
    else if (v === "my") navigate("#/themes?tab=mine");
    else if (v === "bookmarked") navigate("#/themes?tab=bookmarked");
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-56px)] page-enter">
      {/* Sub-sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-[var(--uf-border)] bg-[var(--uf-panel)] lg:flex">
        <div className="p-4 space-y-4">
          <div className="relative">
            <Icon icon={Search} size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)]" />
            <input 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search themes..." 
              className="w-full rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] py-1.5 pl-8 pr-7 text-xs text-[var(--uf-text)] placeholder-[var(--uf-text-muted)] focus:border-[var(--uf-accent)] focus:outline-none transition"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
                title="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <button 
            type="button"
            onClick={() => navigate("#/themes/editor")}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--uf-accent)] py-2 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition shadow-sm"
          >
            <Icon icon={Plus} size={14} />
            Create theme
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-2 pb-16 scrollbar-thin">
          <div className="space-y-1 mb-6">
            <SidebarItem 
              label="All themes" 
              count={THEMES.length}
              active={activeFilter === "all" && selectedTag === null}
              onClick={() => handleSelectView("all")}
            />
            <SidebarItem 
              label="My themes" 
              count={myThemesCount}
              active={activeFilter === "my"}
              onClick={() => handleSelectView("my")}
            />
            <SidebarItem 
              label="Bookmarked" 
              count={savedThemeIds.length}
              active={activeFilter === "bookmarked"}
              onClick={() => handleSelectView("bookmarked")}
            />
          </div>

          <div className="px-3 mb-2 flex items-center justify-between text-xs font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider">
            <span>Tags</span>
            {selectedTag && (
              <button 
                type="button" 
                onClick={() => { setSelectedTag(null); navigate("#/themes"); }}
                className="text-[10px] lowercase text-[var(--uf-accent)] hover:underline capitalize"
              >
                clear
              </button>
            )}
          </div>
          <div className="space-y-1">
            {SIDEBAR_TAGS.map((tag) => (
              <SidebarItem 
                key={tag}
                label={tag} 
                count={tagCounts[tag]} 
                active={selectedTag !== null && normTag(selectedTag) === normTag(tag)}
                onClick={() => handleSelectTag(tag)}
              />
            ))}
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Header Title & Active filter chips */}
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-black text-[var(--uf-text)]">Community Themes</h1>
              <p className="mt-1 text-sm text-[var(--uf-text-secondary)]">
                Explore, test, and install curated shadcn/ui color palettes.
              </p>
            </div>

            {/* Mobile / Quick Tag Filter bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none lg:hidden">
              <button
                type="button"
                onClick={() => handleSelectView("all")}
                className={`rounded-lg px-3 py-1 text-xs font-medium whitespace-nowrap transition ${
                  activeFilter === "all" && !selectedTag
                    ? "bg-[var(--uf-accent)] text-white"
                    : "bg-white/5 text-[var(--uf-text-secondary)] hover:bg-white/10"
                }`}
              >
                All ({THEMES.length})
              </button>
              {SIDEBAR_TAGS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => handleSelectTag(t)}
                  className={`rounded-lg px-3 py-1 text-xs font-medium whitespace-nowrap transition ${
                    selectedTag !== null && normTag(selectedTag) === normTag(t)
                      ? "bg-[var(--uf-accent)] text-white"
                      : "bg-white/5 text-[var(--uf-text-secondary)] hover:bg-white/10"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Desktop right-side Filter button & popover */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="relative" ref={filterRef}>
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                    isFilterOpen || selectedTone !== "all" || selectedTag !== null
                      ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/15 text-[var(--uf-text)] shadow-sm"
                      : "border-[var(--uf-border)] bg-[var(--uf-panel)] text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]"
                  }`}
                >
                  <Icon icon={Filter} size={14} className={selectedTone !== "all" || selectedTag !== null ? "text-[var(--uf-accent)]" : ""} />
                  Filters
                  {(selectedTone !== "all" || selectedTag !== null) && (
                    <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--uf-accent)] px-1 text-[10px] font-bold text-white leading-none">
                      {(selectedTone !== "all" ? 1 : 0) + (selectedTag !== null ? 1 : 0)}
                    </span>
                  )}
                </button>

                {isFilterOpen && (
                  <div className="absolute right-0 top-full mt-2 z-50 w-72 rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4 shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between border-b border-[var(--uf-border)] pb-3 mb-3">
                      <div className="flex items-center gap-2">
                        <Icon icon={Filter} size={15} className="text-[var(--uf-accent)]" />
                        <span className="text-sm font-semibold text-[var(--uf-text)]">Theme Filters</span>
                      </div>
                      {(selectedTone !== "all" || selectedTag !== null) && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedTone("all");
                            setSelectedTag(null);
                          }}
                          className="text-xs text-[var(--uf-accent)] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <Icon icon={RotateCcw} size={12} />
                          Reset
                        </button>
                      )}
                    </div>

                    <div className="space-y-4 text-xs">
                      {/* Tone Mode */}
                      <div>
                        <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                          Color Tone & Mode
                        </span>
                        <div className="grid grid-cols-2 gap-1.5">
                          {[
                            { id: "all", label: "All Modes" },
                            { id: "dark", label: "Dark Themes" },
                            { id: "light", label: "Light Themes" },
                            { id: "colorful", label: "Vibrant / Neon" },
                          ].map((tone) => (
                            <button
                              key={tone.id}
                              type="button"
                              onClick={() => setSelectedTone(tone.id as any)}
                              className={`rounded-lg py-1.5 text-center text-xs font-medium transition cursor-pointer ${
                                selectedTone === tone.id
                                  ? "bg-[var(--uf-accent)] text-white shadow-sm"
                                  : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                              }`}
                            >
                              {tone.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Quick Tags */}
                      <div>
                        <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                          Popular Styles
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {["Minimal", "Cyberpunk", "Earthy", "Glass", "Gradient", "Corporate"].map((t) => {
                            const isSelected = selectedTag !== null && normTag(selectedTag) === normTag(t);
                            return (
                              <button
                                key={t}
                                type="button"
                                onClick={() => handleSelectTag(t)}
                                className={`rounded-lg px-2.5 py-1 text-xs transition cursor-pointer ${
                                  isSelected
                                    ? "bg-[var(--uf-accent)] text-white font-medium shadow-sm"
                                    : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                                }`}
                              >
                                {t}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-[var(--uf-border)] pt-3 flex items-center justify-between">
                      <span className="text-xs text-[var(--uf-text-secondary)]">
                        Matches: <strong className="text-[var(--uf-text)]">{filteredThemes.length}</strong>
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsFilterOpen(false)}
                        className="rounded-lg bg-[var(--uf-accent)] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition cursor-pointer shadow-sm"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <ViewModeToggle viewMode={viewMode} onChange={setViewMode} />
            </div>
          </div>

          {/* Active filter summary if filtered */}
          {(selectedTag || activeFilter !== "all" || search) && (
            <div className="mb-6 flex flex-wrap items-center gap-2 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)]/50 p-3 text-xs">
              <span className="text-[var(--uf-text-muted)] font-medium">Filtering by:</span>
              {activeFilter !== "all" && (
                <span className="inline-flex items-center gap-1 rounded-md bg-[var(--uf-accent)]/20 px-2.5 py-1 font-semibold text-[var(--uf-accent)]">
                  {activeFilter === "bookmarked" ? "Bookmarked Themes" : "My Themes"}
                  <button type="button" onClick={() => setActiveFilter("all")} className="hover:opacity-75">✕</button>
                </span>
              )}
              {selectedTag && (
                <span className="inline-flex items-center gap-1 rounded-md bg-purple-500/20 px-2.5 py-1 font-semibold text-purple-400">
                  Tag: {selectedTag}
                  <button type="button" onClick={() => setSelectedTag(null)} className="hover:opacity-75">✕</button>
                </span>
              )}
              {search && (
                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/20 px-2.5 py-1 font-semibold text-emerald-400">
                  Search: "{search}"
                  <button type="button" onClick={() => setSearch("")} className="hover:opacity-75">✕</button>
                </span>
              )}
              <button 
                type="button"
                onClick={resetFilters} 
                className="ml-auto text-xs font-semibold text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] underline"
              >
                Reset all
              </button>
            </div>
          )}

          {/* Toast / Banner */}
          <div className="mb-8 flex items-center justify-between rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/20 text-blue-400">
                <Icon icon={Sparkles} size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--uf-text)]">Publish a theme from your code</p>
                <p className="text-xs text-[var(--uf-text-secondary)]">The CLI reads the light and dark colors straight from your own project.</p>
              </div>
            </div>
            <button 
              type="button"
              onClick={() => navigate("#/themes/editor")}
              className="text-xs font-semibold text-[var(--uf-accent)] hover:underline whitespace-nowrap ml-4"
            >
              Open Editor →
            </button>
          </div>

          {/* Grid or Empty State */}
          {filteredThemes.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--uf-border)] p-12 text-center bg-[var(--uf-panel)]/40">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-[var(--uf-text-muted)] mb-3">
                <Icon icon={Search} size={20} />
              </div>
              <h3 className="text-base font-semibold text-[var(--uf-text)]">No matching themes</h3>
              <p className="mt-1 text-xs text-[var(--uf-text-secondary)] max-w-sm">
                We couldn't find any themes matching your selected tags or search query.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-4 rounded-lg bg-[var(--uf-panel-2)] border border-[var(--uf-border)] px-4 py-2 text-xs font-semibold text-[var(--uf-text)] hover:bg-white/10 transition"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedThemes.map((theme) => {
                const isBookmarked = savedThemeIds.includes(theme.id);
                return (
                  <div
                    key={theme.id}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] card-hover cursor-pointer transition hover:border-[var(--uf-accent)]/50"
                    onClick={() => navigate("#/themes/editor")}
                  >
                    {/* Visual Tile */}
                    <div 
                      className="aspect-[4/3] w-full p-4 flex flex-col justify-between relative transition"
                      style={{ backgroundColor: theme.colors.background }}
                    >
                      <div className="flex justify-between items-start">
                        {/* Tags preview */}
                        <div className="flex flex-wrap gap-1">
                          {theme.tags.slice(0, 2).map((tg) => (
                            <span
                              key={tg}
                              className="rounded-md bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm border border-white/10"
                            >
                              {tg}
                            </span>
                          ))}
                        </div>

                        {/* Overlapping circles */}
                        <div className="flex justify-end relative h-8 w-20">
                          <div className="absolute right-6 h-6 w-6 rounded-full border-2 border-white/20 shadow-sm" style={{ backgroundColor: theme.colors.primary, zIndex: 3 }} />
                          <div className="absolute right-3 h-6 w-6 rounded-full border-2 border-white/20 shadow-sm" style={{ backgroundColor: theme.colors.accent, zIndex: 2 }} />
                          <div className="absolute right-0 h-6 w-6 rounded-full border-2 border-white/20 shadow-sm" style={{ backgroundColor: theme.colors.card, zIndex: 1 }} />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-display italic text-2xl font-bold opacity-90 drop-shadow-sm" style={{ color: theme.colors.primary }}>
                          {theme.name}
                        </h3>
                      </div>
                    </div>

                    {/* Footer details */}
                    <div className="px-4 py-3 bg-[var(--uf-panel)] border-t border-[var(--uf-border)] flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-[var(--uf-text)]">@{theme.author}</span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            title="Copy CSS variables"
                            onClick={(e) => copyThemeCss(e, theme)}
                            className="p-1 rounded text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] hover:bg-white/10 transition"
                          >
                            <Icon icon={Copy} size={13} />
                          </button>
                          <button
                            type="button"
                            title={isBookmarked ? "Remove bookmark" : "Bookmark theme"}
                            onClick={(e) => toggleBookmark(e, theme.id, theme.name)}
                            className={`p-1 rounded transition ${
                              isBookmarked 
                                ? "text-amber-400 bg-amber-400/10" 
                                : "text-[var(--uf-text-muted)] hover:text-amber-400 hover:bg-white/10"
                            }`}
                          >
                            <span className="text-xs">★</span>
                          </button>
                          <span className="text-[10px] text-[var(--uf-text-muted)] ml-1">{theme.downloads} installs</span>
                        </div>
                      </div>
                      <p className="text-[11px] text-[var(--uf-text-secondary)] line-clamp-1">{theme.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination Controls */}
            {viewMode === "page" && totalPages > 1 && (
              <div className="mt-8 flex justify-center pb-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  pageSize={itemsPerPage}
                  totalItems={filteredThemes.length}
                  onPageChange={(p) => setCurrentPage(p)}
                />
              </div>
            )}
          </>
        )}
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ 
  label, 
  count, 
  active, 
  onClick 
}: { 
  label: string; 
  count?: number; 
  active?: boolean; 
  onClick?: () => void;
}) {
  return (
    <button 
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-xs transition cursor-pointer text-left ${
        active 
          ? "bg-white/[0.08] text-[var(--uf-text)] font-semibold border-l-2 border-[var(--uf-accent)] pl-2.5 shadow-sm" 
          : "text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]"
      }`}
    >
      <span className="truncate">{label}</span>
      {count !== undefined && (
        <span className={`text-[10px] rounded px-1.5 py-0.5 ml-2 shrink-0 ${
          active ? "bg-blue-500/20 text-blue-400 font-bold" : "opacity-60 bg-white/5"
        }`}>
          {count}
        </span>
      )}
    </button>
  );
}

// --- Theme Editor ---

function ThemeEditor() {
  const { navigate } = useRoute();
  const { toast } = useToast();

  const handleCopy = () => {
    toast("success", "CSS variables copied to clipboard!");
  };

  return (
    <div className="flex flex-col h-[calc(100vh-56px)] bg-[var(--uf-bg)] overflow-hidden page-enter">
      {/* Top Bar */}
      <header className="flex h-12 shrink-0 items-center justify-between border-b border-[var(--uf-border)] bg-[var(--uf-panel)] px-4">
        <div className="flex items-center gap-4 text-xs">
          <button 
            onClick={() => navigate("#/themes")}
            className="flex items-center gap-1.5 font-medium text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)]"
          >
            <Icon icon={ChevronLeft} size={14} />
            Exit editor
          </button>
          <div className="h-4 w-px bg-[var(--uf-border)]" />
          <span className="font-semibold text-[var(--uf-text)]">Untitled Theme</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-[var(--uf-border)] px-3 py-1.5 text-xs font-medium text-[var(--uf-text-secondary)] hover:bg-white/[0.04]">Undo</button>
          <button className="rounded-lg border border-[var(--uf-border)] px-3 py-1.5 text-xs font-medium text-[var(--uf-text-secondary)] hover:bg-white/[0.04]">Redo</button>
          <button onClick={handleCopy} className="ml-2 rounded-lg bg-[var(--uf-accent)] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)]">Export CSS</button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Panel */}
        <aside className="w-72 shrink-0 border-r border-[var(--uf-border)] bg-[var(--uf-panel)] flex flex-col">
          <div className="p-4 border-b border-[var(--uf-border)]">
            <label className="mb-2 block text-xs font-medium text-[var(--uf-text-muted)]">Start with preset</label>
            <select className="w-full rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-2 py-1.5 text-xs text-[var(--uf-text)] outline-none">
              <option>Zinc Minimalist</option>
              <option>Tokyo Night</option>
              <option>Rose Quartz</option>
            </select>
          </div>

          <div className="flex border-b border-[var(--uf-border)]">
            <EditorTab icon={Palette} label="Colors" active />
            <EditorTab icon={FormInput} label="Fonts" />
            <EditorTab icon={Layers} label="Shadow" />
            <EditorTab icon={Layout} label="Other" />
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
            <ColorRow label="Primary" color="#18181b" foreground="#ffffff" />
            <ColorRow label="Secondary" color="#f4f4f5" foreground="#18181b" />
            <ColorRow label="Background" color="#ffffff" foreground="#18181b" />
            <ColorRow label="Card" color="#ffffff" foreground="#18181b" />
            <ColorRow label="Muted" color="#f4f4f5" foreground="#71717a" />
            <ColorRow label="Border" color="#e4e4e7" />
            <ColorRow label="Destructive" color="#ef4444" foreground="#ffffff" />
          </div>
        </aside>

        {/* Live Preview Canvas */}
        <main className="flex-1 bg-[var(--uf-panel-2)] p-8 overflow-y-auto preview-grid-bg relative">
          <div className="mx-auto max-w-4xl space-y-8">
            
            {/* Dashboard Demo */}
            <div className="rounded-xl border border-[#e4e4e7] bg-[#ffffff] shadow-sm overflow-hidden" style={{ color: "#18181b" }}>
              <div className="border-b border-[#e4e4e7] px-6 py-4 flex justify-between items-center">
                <h2 className="font-semibold">Dashboard</h2>
                <div className="flex gap-2">
                  <div className="h-6 w-24 rounded-md bg-[#f4f4f5]" />
                  <div className="h-6 w-8 rounded-md bg-[#18181b]" />
                </div>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                <div className="rounded-lg border border-[#e4e4e7] p-4">
                  <p className="text-xs text-[#71717a]">Total Revenue</p>
                  <p className="text-2xl font-bold mt-1">$15,231.89</p>
                  <p className="text-xs text-[#10b981] mt-1">+20.1% from last month</p>
                </div>
                <div className="rounded-lg border border-[#e4e4e7] p-4">
                  <p className="text-xs text-[#71717a]">Subscriptions</p>
                  <p className="text-2xl font-bold mt-1">+2,350</p>
                  <p className="text-xs text-[#71717a] mt-1">+180.1% from last month</p>
                </div>
                <div className="rounded-lg border border-[#e4e4e7] p-4">
                  <p className="text-xs text-[#71717a]">Active Now</p>
                  <p className="text-2xl font-bold mt-1">+573</p>
                  <p className="text-xs text-[#71717a] mt-1">+201 since last hour</p>
                </div>
              </div>
            </div>

            {/* Forms Demo */}
            <div className="rounded-xl border border-[#e4e4e7] bg-[#ffffff] shadow-sm p-6" style={{ color: "#18181b" }}>
              <h2 className="font-semibold mb-4">Account Settings</h2>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="text-xs font-medium">Name</label>
                  <input type="text" className="mt-1 w-full rounded-md border border-[#e4e4e7] bg-transparent px-3 py-2 text-sm outline-none focus:border-[#18181b]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-xs font-medium">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border border-[#e4e4e7] bg-transparent px-3 py-2 text-sm outline-none focus:border-[#18181b]" placeholder="m@example.com" />
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <input type="checkbox" className="rounded border-[#e4e4e7]" />
                  <span className="text-sm">Accept terms and conditions</span>
                </div>
                <button className="mt-2 rounded-md bg-[#18181b] px-4 py-2 text-sm font-medium text-white hover:bg-black/80">Save changes</button>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

function EditorTab({ icon: IconCmp, label, active }: { icon: any, label: string, active?: boolean }) {
  return (
    <button className={`flex flex-1 flex-col items-center justify-center gap-1 border-b-2 py-3 transition ${
      active 
        ? "border-[var(--uf-accent)] text-[var(--uf-accent)]" 
        : "border-transparent text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
    }`}>
      <IconCmp size={16} />
      <span className="text-[10px] font-semibold">{label}</span>
    </button>
  );
}

function ColorRow({ label, color, foreground }: { label: string; color: string; foreground?: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs font-medium text-[var(--uf-text)]">{label}</span>
      <div className="flex items-center gap-2">
        {foreground && (
          <div className="h-6 w-6 rounded-md shadow-inner border border-black/10 flex items-center justify-center text-[10px]" style={{ backgroundColor: foreground }}>
            F
          </div>
        )}
        <div className="h-6 w-8 rounded-md shadow-inner border border-black/10 flex items-center justify-center text-[9px] font-mono text-white/70 mix-blend-difference" style={{ backgroundColor: color }}>
          {color.replace('#', '')}
        </div>
      </div>
    </div>
  );
}
