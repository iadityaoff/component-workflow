import { useMemo, useState, useEffect, useRef } from "react";
import { Tabs, type SortKey } from "../components/Tabs";
import { ComponentGrid } from "../components/ComponentGrid";
import { Pagination } from "../components/Pagination";
import { ViewModeToggle, type ViewMode } from "../components/ViewModeToggle";
import { ALL_COMPONENTS, type ComponentItem } from "../data/components";
import { CATEGORY_BY_SLUG } from "../data/categories";
import { 
  Filter, 
  SlidersHorizontal, 
  X, 
  Check, 
  RotateCcw,
  Sparkles,
  Zap,
  Layers,
  Terminal,
  Sun,
  Moon,
  LayoutGrid
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useRoute } from "../lib/router";

interface CommunityPageProps {
  activeSlug: string | null;
  deferredSearch: string;
  sort: SortKey;
  setSort: (s: SortKey) => void;
  viewMode: ViewMode;
  setViewMode: (v: ViewMode) => void;
}

export function CommunityPage({
  activeSlug,
  deferredSearch,
  sort,
  setSort,
  viewMode,
  setViewMode,
}: CommunityPageProps) {
  const { query, setQuery, navigate } = useRoute();
  const requestedPage = Math.max(1, Number.parseInt(query.page || "1", 10) || 1);
  const setCurrentPage = (page: number) => setQuery({ page: page > 1 ? String(page) : "" });
  const itemsPerPage = 24;

  // Filter Popover state
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const selectedFramework = query.framework || null;
  const setSelectedFramework = (value: string | null) => setQuery({ framework: value || "", page: "" });
  const selectedStack = query.stack || null;
  const setSelectedStack = (value: string | null) => setQuery({ stack: value || "", page: "" });
  const selectedComplexity = ["animated", "interactive", "static"].includes(query.motion) ? query.motion : "all";
  const setSelectedComplexity = (value: string) => setQuery({ motion: value === "all" ? "" : value, page: "" });
  const selectedTier = ["featured", "top-liked", "top-viewed"].includes(query.tier) ? query.tier : "all";
  const setSelectedTier = (value: string) => setQuery({ tier: value === "all" ? "" : value, page: "" });
  const selectedAuthor = query.author || null;
  const setSelectedAuthor = (value: string | null) => setQuery({ author: value || "", page: "" });

  // Config Popover state
  const [isConfigOpen, setIsConfigOpen] = useState(false);
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(3);
  const [canvasTheme, setCanvasTheme] = useState<"dark" | "light">("dark");
  const [packageManager, setPackageManager] = useState<"npm" | "pnpm" | "bun" | "yarn">("npm");

  // Refs for clicking outside
  const filterRef = useRef<HTMLDivElement>(null);
  const configRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
      if (configRef.current && !configRef.current.contains(e.target as Node)) {
        setIsConfigOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsFilterOpen(false);
        setIsConfigOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Compute active filters count
  const activeFiltersCount = [
    selectedFramework !== null,
    selectedStack !== null,
    selectedComplexity !== "all",
    selectedTier !== "all",
    selectedAuthor !== null,
  ].filter(Boolean).length;

  const resetAllFilters = () => {
    setQuery({ framework: "", stack: "", motion: "", tier: "", author: "", page: "" });
  };

  // Unique list of authors for the filter
  const authorsList = useMemo(() => {
    const map = new Map<string, string>();
    for (const c of ALL_COMPONENTS) {
      if (c.author?.name) {
        map.set(c.author.handle, c.author.handle);
      }
    }
    return Array.from(map.values()).sort();
  }, []);

  // Filtered components
  const filteredComponents = useMemo(() => {
    let result = ALL_COMPONENTS;

    // Category filter
    if (activeSlug) {
      result = result.filter((c) => c.categorySlug === activeSlug);
    }

    // Search query
    if (deferredSearch) {
      const q = deferredSearch.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description?.toLowerCase().includes(q) ||
          c.author.name.toLowerCase().includes(q) || c.author.handle.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Framework filter
    if (selectedFramework) {
      const fw = selectedFramework.toLowerCase();
      result = result.filter((c) =>
        c.tags.some((t) => t.toLowerCase().includes(fw)) ||
        c.code.toLowerCase().includes(fw)
      );
    }

    // Stack filter
    if (selectedStack) {
      const st = selectedStack.toLowerCase();
      result = result.filter((c) =>
        c.tags.some((t) => t.toLowerCase().includes(st)) ||
        c.code.toLowerCase().includes(st)
      );
    }

    // Complexity / Motion filter
    if (selectedComplexity === "animated") {
      result = result.filter((c) =>
        c.tags.some((t) => t.toLowerCase().includes("animated") || t.toLowerCase().includes("motion") || t.toLowerCase().includes("framer")) ||
        c.code.toLowerCase().includes("framer-motion") ||
        c.code.toLowerCase().includes("animate")
      );
    } else if (selectedComplexity === "interactive") {
      result = result.filter((c) =>
        c.code.toLowerCase().includes("usestate") ||
        c.code.toLowerCase().includes("onclick") ||
        c.tags.some((t) => t.toLowerCase().includes("interactive") || t.toLowerCase().includes("state"))
      );
    } else if (selectedComplexity === "static") {
      result = result.filter((c) =>
        !c.code.toLowerCase().includes("framer-motion") &&
        !c.code.toLowerCase().includes("usestate")
      );
    }

    // Tier / Popularity filter
    if (selectedTier === "featured") {
      result = result.filter((c) => c.featured >= 5);
    } else if (selectedTier === "top-liked") {
      result = result.filter((c) => c.likes >= 1000);
    } else if (selectedTier === "top-viewed") {
      result = result.filter((c) => c.views >= 8000);
    }

    // Author filter
    if (selectedAuthor) {
      result = result.filter((c) => c.author?.handle === selectedAuthor || c.author?.name === selectedAuthor);
    }

    // Sort
    const sorted = [...result];
    switch (sort) {
      case "newest":
        sorted.sort((a, b) => b.createdAt - a.createdAt);
        break;
      case "popular":
        sorted.sort((a, b) => b.likes - a.likes);
        break;
      case "featured":
      default:
        sorted.sort((a, b) => {
          if (b.featured !== a.featured) return b.featured - a.featured;
          return b.likes - a.likes;
        });
    }
    return sorted;
  }, [
    activeSlug, 
    deferredSearch, 
    sort, 
    selectedFramework, 
    selectedStack, 
    selectedComplexity, 
    selectedTier, 
    selectedAuthor
  ]);

  const activeCategory = activeSlug ? CATEGORY_BY_SLUG[activeSlug] : null;

  // Pagination logic
  const totalItems = filteredComponents.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const currentPage = Math.min(requestedPage, totalPages);

  const displayedComponents = useMemo(() => {
    if (viewMode === "scroll") return filteredComponents;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredComponents.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredComponents, currentPage, itemsPerPage, viewMode]);

  return (
    <div className="page-enter w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 max-w-[1400px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[var(--uf-text)]">
            {deferredSearch
              ? `Search: "${deferredSearch}"`
              : activeCategory
              ? activeCategory.name
              : "All Components"}
          </h1>
          <p className="mt-1.5 text-sm text-[var(--uf-text-secondary)]">
            {deferredSearch
              ? `Found ${totalItems} results`
              : activeCategory
              ? `Browse ${totalItems} components.`
              : `Browse all components.`}
          </p>
        </div>
      </div>

      {/* Top Bar: Sort & Filter */}
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 border-b border-[var(--uf-border)] pb-4">
        <Tabs active={sort} current={sort} count={totalItems} onChange={setSort} />

        <div className="flex items-center gap-3">
          {/* Filters Button & Popover */}
          <div className="relative" ref={filterRef}>
            <button 
              type="button"
              onClick={() => {
                setIsFilterOpen(!isFilterOpen);
                setIsConfigOpen(false);
              }}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                isFilterOpen || activeFiltersCount > 0
                  ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/15 text-[var(--uf-text)] shadow-sm"
                  : "border-[var(--uf-border)] bg-[var(--uf-panel)] text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]"
              }`}
            >
              <Icon icon={Filter} size={14} className={activeFiltersCount > 0 ? "text-[var(--uf-accent)]" : ""} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--uf-accent)] px-1 text-[10px] font-bold text-white leading-none">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Filter Popover Dropdown */}
            {isFilterOpen && (
              <div className="absolute right-0 top-full mt-2 z-50 w-80 sm:w-96 rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-[var(--uf-border)] pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Icon icon={Filter} size={15} className="text-[var(--uf-accent)]" />
                    <span className="text-sm font-semibold text-[var(--uf-text)]">Component Filters</span>
                  </div>
                  {activeFiltersCount > 0 && (
                    <button
                      type="button"
                      onClick={resetAllFilters}
                      className="text-xs text-[var(--uf-accent)] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Icon icon={RotateCcw} size={12} />
                      Reset all
                    </button>
                  )}
                </div>

                <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin text-xs">
                  {/* Framework */}
                  <div>
                    <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                      Framework
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {["All", "React", "Next.js", "Vue", "Svelte"].map((fw) => {
                        const isSelected = (fw === "All" && selectedFramework === null) || selectedFramework === fw;
                        return (
                          <button
                            key={fw}
                            type="button"
                            onClick={() => {
                              setSelectedFramework(fw === "All" ? null : fw);
                            }}
                            className={`rounded-lg px-2.5 py-1 text-xs transition cursor-pointer ${
                              isSelected
                                ? "bg-[var(--uf-accent)] text-white font-medium shadow-sm"
                                : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] hover:text-[var(--uf-text)] border border-[var(--uf-border)]/50"
                            }`}
                          >
                            {fw}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Styling & Motion Stack */}
                  <div>
                    <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                      Stack & Libraries
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {["All", "Tailwind CSS", "Framer Motion", "TypeScript", "Lucide"].map((st) => {
                        const isSelected = (st === "All" && selectedStack === null) || selectedStack === st;
                        return (
                          <button
                            key={st}
                            type="button"
                            onClick={() => {
                              setSelectedStack(st === "All" ? null : st);
                            }}
                            className={`rounded-lg px-2.5 py-1 text-xs transition cursor-pointer ${
                              isSelected
                                ? "bg-[var(--uf-accent)] text-white font-medium shadow-sm"
                                : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] hover:text-[var(--uf-text)] border border-[var(--uf-border)]/50"
                            }`}
                          >
                            {st}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Complexity / Motion */}
                  <div>
                    <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                      Motion & State
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {[
                        { id: "all", label: "All types", icon: Layers },
                        { id: "animated", label: "Animated / Motion", icon: Sparkles },
                        { id: "interactive", label: "Interactive State", icon: Zap },
                        { id: "static", label: "Static Block", icon: LayoutGrid },
                      ].map((t) => {
                        const isSelected = selectedComplexity === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => {
                              setSelectedComplexity(t.id as any);
                            }}
                            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs transition cursor-pointer ${
                              isSelected
                                ? "bg-[var(--uf-accent)] text-white font-medium shadow-sm"
                                : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] hover:text-[var(--uf-text)] border border-[var(--uf-border)]/50"
                            }`}
                          >
                            <Icon icon={t.icon} size={13} />
                            <span className="truncate">{t.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tier / Popularity */}
                  <div>
                    <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                      Popularity & Badges
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { id: "all", label: "All components" },
                        { id: "featured", label: "Staff Featured" },
                        { id: "top-liked", label: "1000+ Likes" },
                        { id: "top-viewed", label: "8000+ Views" },
                      ].map((tier) => {
                        const isSelected = selectedTier === tier.id;
                        return (
                          <button
                            key={tier.id}
                            type="button"
                            onClick={() => {
                              setSelectedTier(tier.id as any);
                            }}
                            className={`rounded-lg px-2.5 py-1 text-xs transition cursor-pointer ${
                              isSelected
                                ? "bg-[var(--uf-accent)] text-white font-medium shadow-sm"
                                : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] hover:text-[var(--uf-text)] border border-[var(--uf-border)]/50"
                            }`}
                          >
                            {tier.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Creators */}
                  <div>
                    <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                      Author / Creator
                    </span>
                    <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedAuthor(null);
                        }}
                        className={`rounded-lg px-2.5 py-1 text-xs transition cursor-pointer ${
                          selectedAuthor === null
                            ? "bg-[var(--uf-accent)] text-white font-medium"
                            : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                        }`}
                      >
                        All
                      </button>
                      {authorsList.map((author) => {
                        const isSelected = selectedAuthor === author;
                        return (
                          <button
                            key={author}
                            type="button"
                            onClick={() => {
                              setSelectedAuthor(author);
                            }}
                            className={`rounded-lg px-2.5 py-1 text-xs transition cursor-pointer ${
                              isSelected
                                ? "bg-[var(--uf-accent)] text-white font-medium"
                                : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                            }`}
                          >
                            {author}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-[var(--uf-border)] pt-3 flex items-center justify-between">
                  <span className="text-xs text-[var(--uf-text-secondary)]">
                    Matches: <strong className="text-[var(--uf-text)]">{totalItems}</strong>
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

          {/* Config Button & Popover */}
          <div className="relative" ref={configRef}>
            <button 
              type="button"
              onClick={() => {
                setIsConfigOpen(!isConfigOpen);
                setIsFilterOpen(false);
              }}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                isConfigOpen
                  ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/15 text-[var(--uf-text)] shadow-sm"
                  : "border-[var(--uf-border)] bg-[var(--uf-panel)] text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]"
              }`}
            >
              <Icon icon={SlidersHorizontal} size={14} className={isConfigOpen ? "text-[var(--uf-accent)]" : ""} />
              Config
            </button>

            {/* Config Popover Dropdown */}
            {isConfigOpen && (
              <div className="absolute right-0 top-full mt-2 z-50 w-72 rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-[var(--uf-border)] pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Icon icon={SlidersHorizontal} size={15} className="text-[var(--uf-accent)]" />
                    <span className="text-sm font-semibold text-[var(--uf-text)]">Display & CLI Config</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsConfigOpen(false)}
                    className="text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Grid Columns */}
                  <div>
                    <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                      Grid Columns
                    </span>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[
                        { cols: 2 as const, label: "2 Columns" },
                        { cols: 3 as const, label: "3 Columns" },
                        { cols: 4 as const, label: "4 Columns" },
                      ].map((item) => (
                        <button
                          key={item.cols}
                          type="button"
                          onClick={() => setGridCols(item.cols)}
                          className={`rounded-lg py-1.5 text-center text-xs font-medium transition cursor-pointer ${
                            gridCols === item.cols
                              ? "bg-[var(--uf-accent)] text-white shadow-sm"
                              : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Canvas Theme Preview */}
                  <div>
                    <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                      Canvas Preview
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        type="button"
                        onClick={() => setCanvasTheme("dark")}
                        className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition cursor-pointer ${
                          canvasTheme === "dark"
                            ? "bg-[var(--uf-accent)] text-white shadow-sm"
                            : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                        }`}
                      >
                        <Icon icon={Moon} size={13} />
                        Dark Canvas
                      </button>
                      <button
                        type="button"
                        onClick={() => setCanvasTheme("light")}
                        className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition cursor-pointer ${
                          canvasTheme === "light"
                            ? "bg-[var(--uf-accent)] text-white shadow-sm"
                            : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                        }`}
                      >
                        <Icon icon={Sun} size={13} />
                        Light Canvas
                      </button>
                    </div>
                  </div>

                  {/* CLI Package Manager */}
                  <div>
                    <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                      CLI Command Prefix
                    </span>
                    <div className="grid grid-cols-4 gap-1">
                      {(["npm", "pnpm", "bun", "yarn"] as const).map((pm) => (
                        <button
                          key={pm}
                          type="button"
                          onClick={() => setPackageManager(pm)}
                          className={`rounded-lg py-1.5 text-center text-xs font-mono transition cursor-pointer ${
                            packageManager === pm
                              ? "bg-[var(--uf-accent)] text-white font-semibold shadow-sm"
                              : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                          }`}
                        >
                          {pm}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 border-t border-[var(--uf-border)] pt-3 text-center">
                  <span className="text-[11px] text-[var(--uf-text-muted)]">
                    Applied locally to preview canvas & CLI
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="h-4 w-px bg-[var(--uf-border)]" />
          <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeFiltersCount > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-2 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)]/50 p-2.5 text-xs">
          <span className="text-[var(--uf-text-muted)] font-medium">Filtering by:</span>
          {selectedFramework && (
            <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/20 px-2.5 py-1 font-semibold text-blue-400">
              Framework: {selectedFramework}
              <button type="button" onClick={() => setSelectedFramework(null)} className="hover:opacity-75 cursor-pointer">✕</button>
            </span>
          )}
          {selectedStack && (
            <span className="inline-flex items-center gap-1 rounded-md bg-purple-500/20 px-2.5 py-1 font-semibold text-purple-400">
              Stack: {selectedStack}
              <button type="button" onClick={() => setSelectedStack(null)} className="hover:opacity-75 cursor-pointer">✕</button>
            </span>
          )}
          {selectedComplexity !== "all" && (
            <span className="inline-flex items-center gap-1 rounded-md bg-pink-500/20 px-2.5 py-1 font-semibold text-pink-400 capitalize">
              {selectedComplexity}
              <button type="button" onClick={() => setSelectedComplexity("all")} className="hover:opacity-75 cursor-pointer">✕</button>
            </span>
          )}
          {selectedTier !== "all" && (
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/20 px-2.5 py-1 font-semibold text-amber-400 capitalize">
              {selectedTier.replace("-", " ")}
              <button type="button" onClick={() => setSelectedTier("all")} className="hover:opacity-75 cursor-pointer">✕</button>
            </span>
          )}
          {selectedAuthor && (
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/20 px-2.5 py-1 font-semibold text-emerald-400">
              Author: {selectedAuthor}
              <button type="button" onClick={() => setSelectedAuthor(null)} className="hover:opacity-75 cursor-pointer">✕</button>
            </span>
          )}
          <button
            type="button"
            onClick={resetAllFilters}
            className="ml-auto text-xs font-semibold text-[var(--uf-accent)] hover:underline cursor-pointer"
          >
            Reset all
          </button>
        </div>
      )}

      {/* Grid */}
      <div className={`min-h-[500px] ${canvasTheme === "light" ? "preview-canvas-light rounded-2xl p-4 bg-zinc-100" : ""}`}>
        {displayedComponents.length > 0 ? (
          <>
            <ComponentGrid items={displayedComponents} overrideCols={gridCols} />

            {viewMode === "page" && totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  page={currentPage}
                  totalPages={totalPages}
                  pageCount={totalPages}
                  totalItems={totalItems}
                  pageSize={itemsPerPage}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center rounded-xl border border-[var(--uf-border)] border-dashed bg-white/[0.02]">
            <p className="text-sm font-medium text-[var(--uf-text-secondary)]">
              No components found matching current filters.
            </p>
            {(activeSlug || activeFiltersCount > 0) && (
              <div className="flex items-center gap-3 mt-4">
                {activeFiltersCount > 0 && (
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="text-xs font-medium text-[var(--uf-accent)] hover:underline cursor-pointer"
                  >
                    Reset filters
                  </button>
                )}
                {activeSlug && (
                  <button
                    type="button"
                    onClick={() => navigate("#/components")}
                    className="text-xs font-medium text-[var(--uf-text-muted)] hover:underline cursor-pointer"
                  >
                    Clear category
                  </button>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
