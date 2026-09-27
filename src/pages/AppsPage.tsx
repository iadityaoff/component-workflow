/**
 * Apps Page — Open-source app directory.
 */
import React, { useState, useRef, useEffect } from "react";
import { Search, Star, ExternalLink, Bookmark, Filter, RotateCcw } from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useRoute } from "../lib/router";
import { ViewModeToggle, type ViewMode } from "../components/ViewModeToggle";
import { Pagination } from "../components/Pagination";

interface AppData {
  slug: string;
  name: string;
  subtitle: string;
  iconText: string;
  iconGradient: string;
  group: "business" | "personal";
  category: string;
  stack: string[];
  stars: string;
  license: string;
}

const APPS: AppData[] = [
  // --- Business / SaaS ---
  // Analytics
  { slug: "plausible", name: "Plausible", subtitle: "Privacy-friendly website analytics", iconText: "📊", iconGradient: "from-indigo-500 to-blue-700", group: "business", category: "Analytics", stack: ["Elixir", "Phoenix"], stars: "21.5K", license: "AGPL-3.0" },
  { slug: "umami", name: "Umami", subtitle: "Simple, fast, privacy-focused analytics", iconText: "📈", iconGradient: "from-blue-600 to-cyan-600", group: "business", category: "Analytics", stack: ["Next.js", "Prisma"], stars: "22.1K", license: "MIT" },
  { slug: "posthog", name: "PostHog", subtitle: "Product analytics and session replay suite", iconText: "🦔", iconGradient: "from-amber-600 to-orange-700", group: "business", category: "Analytics", stack: ["Next.js", "Python"], stars: "24.3K", license: "MIT" },

  // Commerce
  { slug: "medusa", name: "Medusa", subtitle: "Open source Shopify alternative for developers", iconText: "🛍️", iconGradient: "from-violet-600 to-purple-800", group: "business", category: "Commerce", stack: ["Node.js", "TypeScript"], stars: "25.1K", license: "MIT" },
  { slug: "saleor", name: "Saleor", subtitle: "Headless GraphQL powered ecommerce engine", iconText: "🏬", iconGradient: "from-teal-500 to-emerald-700", group: "business", category: "Commerce", stack: ["React", "Python"], stars: "20.4K", license: "BSD-3" },

  // Automation
  { slug: "documenso", name: "Documenso", subtitle: "Open source document signing platform", iconText: "✍️", iconGradient: "from-emerald-500 to-teal-600", group: "business", category: "Automation", stack: ["Next.js", "React"], stars: "8.4K", license: "AGPL-3.0" },
  { slug: "n8n", name: "n8n", subtitle: "Workflow automation and API integration hub", iconText: "⚡", iconGradient: "from-red-500 to-orange-600", group: "business", category: "Automation", stack: ["TypeScript", "Vue"], stars: "48.9K", license: "Sustainable" },
  { slug: "activepieces", name: "Activepieces", subtitle: "AI-first business workflow automation", iconText: "🧩", iconGradient: "from-purple-500 to-indigo-600", group: "business", category: "Automation", stack: ["TypeScript", "Angular"], stars: "12.3K", license: "MIT" },

  // Marketing
  { slug: "ghost", name: "Ghost", subtitle: "Independent publishing platform & newsletters", iconText: "👻", iconGradient: "from-neutral-700 to-neutral-900", group: "business", category: "Marketing", stack: ["Node.js", "React"], stars: "46.2K", license: "MIT" },
  { slug: "listmonk", name: "Listmonk", subtitle: "High-performance newsletter & mailing manager", iconText: "📮", iconGradient: "from-blue-500 to-indigo-600", group: "business", category: "Marketing", stack: ["Go", "Vue"], stars: "15.6K", license: "AGPL-3.0" },

  // Team knowledge
  { slug: "hoppscotch", name: "Hoppscotch", subtitle: "Open-source API development ecosystem", iconText: "🦅", iconGradient: "from-green-400 to-emerald-600", group: "business", category: "Team knowledge", stack: ["Nuxt.js", "Vue"], stars: "66.7K", license: "MIT" },
  { slug: "outline", name: "Outline", subtitle: "Team knowledge base and collaborative wiki", iconText: "📚", iconGradient: "from-blue-600 to-cyan-700", group: "business", category: "Team knowledge", stack: ["React", "Node.js"], stars: "26.5K", license: "BSL-1.1" },

  // Project management
  { slug: "plane", name: "Plane", subtitle: "Open source Jira replacement for agile teams", iconText: "🛩️", iconGradient: "from-violet-500 to-purple-700", group: "business", category: "Project management", stack: ["Next.js", "React"], stars: "31.2K", license: "AGPL-3.0" },
  { slug: "focalboard", name: "Focalboard", subtitle: "Kanban and project management tool", iconText: "📋", iconGradient: "from-amber-500 to-rose-600", group: "business", category: "Project management", stack: ["React", "Go"], stars: "19.8K", license: "MIT" },

  // Customer support
  { slug: "chatwoot", name: "Chatwoot", subtitle: "Customer engagement and live chat suite", iconText: "💬", iconGradient: "from-sky-500 to-blue-700", group: "business", category: "Customer support", stack: ["Ruby on Rails", "Vue"], stars: "20.7K", license: "MIT" },
  { slug: "papercups", name: "Papercups", subtitle: "Open source live chat for web and mobile", iconText: "☕", iconGradient: "from-rose-500 to-pink-700", group: "business", category: "Customer support", stack: ["Elixir", "React"], stars: "6.1K", license: "MIT" },

  // Booking & scheduling
  { slug: "cal-com", name: "Cal.com", subtitle: "Scheduling infrastructure for everyone", iconText: "📅", iconGradient: "from-neutral-700 to-neutral-900", group: "business", category: "Booking & scheduling", stack: ["Next.js", "React"], stars: "34.1K", license: "AGPL-3.0" },

  // Team messaging
  { slug: "mattermost", name: "Mattermost", subtitle: "Secure developer collaboration & messaging", iconText: "💭", iconGradient: "from-blue-600 to-indigo-800", group: "business", category: "Team messaging", stack: ["React", "Go"], stars: "30.1K", license: "MIT" },
  { slug: "rocketchat", name: "Rocket.Chat", subtitle: "Communications platform for omnichannel teams", iconText: "🚀", iconGradient: "from-red-600 to-rose-700", group: "business", category: "Team messaging", stack: ["React", "Node.js"], stars: "40.2K", license: "MIT" },

  // CRM
  { slug: "twenty", name: "Twenty", subtitle: "Modern, extensible open-source CRM", iconText: "💼", iconGradient: "from-amber-500 to-orange-600", group: "business", category: "CRM", stack: ["React", "NestJS"], stars: "21.8K", license: "AGPL-3.0" },

  // --- Personal apps ---
  // Everyday utilities
  { slug: "rallly", name: "Rallly", subtitle: "Group meeting poll scheduler", iconText: "🗳️", iconGradient: "from-pink-500 to-rose-600", group: "personal", category: "Everyday utilities", stack: ["Next.js", "React"], stars: "3.8K", license: "AGPL-3.0" },
  { slug: "it-tools", name: "IT-Tools", subtitle: "Handy web utilities collection for developers", iconText: "🧰", iconGradient: "from-emerald-500 to-teal-700", group: "personal", category: "Everyday utilities", stack: ["Vue", "Vite"], stars: "20.9K", license: "GPL-3.0" },
  { slug: "stirling-pdf", name: "Stirling-PDF", subtitle: "Robust local-hosted PDF suite & editor", iconText: "📄", iconGradient: "from-red-600 to-rose-800", group: "personal", category: "Everyday utilities", stack: ["Java", "HTML5"], stars: "41.5K", license: "MIT" },

  // Notes
  { slug: "affine", name: "AFFiNE", subtitle: "All-in-one workspace and knowledge base", iconText: "📝", iconGradient: "from-blue-600 to-violet-700", group: "personal", category: "Notes", stack: ["React", "TypeScript"], stars: "44.1K", license: "MIT" },
  { slug: "appflowy", name: "AppFlowy", subtitle: "Privacy-first open source Notion alternative", iconText: "🪴", iconGradient: "from-teal-500 to-emerald-700", group: "personal", category: "Notes", stack: ["Flutter", "Rust"], stars: "56.4K", license: "AGPL-3.0" },

  // Personal finance
  { slug: "maybe", name: "Maybe", subtitle: "Personal finance and net worth tracker", iconText: "💰", iconGradient: "from-sky-400 to-blue-600", group: "personal", category: "Personal finance", stack: ["Ruby on Rails", "Hotwire"], stars: "35.2K", license: "AGPL-3.0" },
  { slug: "actual-budget", name: "Actual Budget", subtitle: "Local-first private zero-based budgeting app", iconText: "📒", iconGradient: "from-cyan-500 to-teal-600", group: "personal", category: "Personal finance", stack: ["React", "Node.js"], stars: "15.8K", license: "MIT" },

  // Files and sync
  { slug: "nextcloud", name: "Nextcloud", subtitle: "Self-hosted private productivity and storage cloud", iconText: "☁️", iconGradient: "from-blue-500 to-sky-700", group: "personal", category: "Files and sync", stack: ["PHP", "Vue"], stars: "26.8K", license: "AGPL-3.0" },
  { slug: "syncthing", name: "Syncthing", subtitle: "Continuous peer-to-peer file synchronization", iconText: "🔄", iconGradient: "from-cyan-600 to-blue-700", group: "personal", category: "Files and sync", stack: ["Go", "HTML"], stars: "64.2K", license: "MPL-2.0" },

  // Camera and photos
  { slug: "immich", name: "Immich", subtitle: "Self-hosted photo and video backup solution", iconText: "📸", iconGradient: "from-blue-500 to-indigo-600", group: "personal", category: "Camera and photos", stack: ["SvelteKit", "Svelte"], stars: "52.3K", license: "AGPL-3.0" },
  { slug: "photoprism", name: "PhotoPrism", subtitle: "AI-powered photo organization and tagging", iconText: "🖼️", iconGradient: "from-purple-500 to-pink-600", group: "personal", category: "Camera and photos", stack: ["Go", "Vue"], stars: "34.7K", license: "AGPL-3.0" },

  // Bookmarks and reading
  { slug: "karakeep", name: "Karakeep", subtitle: "Smart visual bookmarking and reader system", iconText: "🔖", iconGradient: "from-amber-500 to-orange-600", group: "personal", category: "Bookmarks and reading", stack: ["Next.js", "TypeScript"], stars: "4.2K", license: "MIT" },
  { slug: "wallabag", name: "Wallabag", subtitle: "Save web pages for later offline reading", iconText: "📖", iconGradient: "from-emerald-600 to-green-700", group: "personal", category: "Bookmarks and reading", stack: ["PHP", "Vue"], stars: "10.3K", license: "MIT" },

  // Music and media
  { slug: "jellyfin", name: "Jellyfin", subtitle: "Free software media server and streaming system", iconText: "🎬", iconGradient: "from-violet-600 to-indigo-800", group: "personal", category: "Music and media", stack: ["C#", "Vue"], stars: "33.1K", license: "GPL-2.0" },
  { slug: "navidrome", name: "Navidrome", subtitle: "Modern web-based personal music server", iconText: "🎵", iconGradient: "from-pink-500 to-rose-700", group: "personal", category: "Music and media", stack: ["Go", "React"], stars: "12.9K", license: "GPL-3.0" },

  // Health and fitness
  { slug: "wger", name: "wger", subtitle: "Workout, exercise and diet tracker", iconText: "🏋️", iconGradient: "from-green-500 to-emerald-700", group: "personal", category: "Health and fitness", stack: ["Python", "Vue"], stars: "4.8K", license: "AGPL-3.0" },
  { slug: "fittrack", name: "OpenFit", subtitle: "Personal metrics, fitness and sleep dashboard", iconText: "🏃", iconGradient: "from-teal-500 to-cyan-600", group: "personal", category: "Health and fitness", stack: ["React Native", "Node.js"], stars: "3.1K", license: "MIT" },
];

// Helper to normalize app category slugs & names
function normAppCategory(s: string) {
  const c = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (c === "booking" || c === "bookingandscheduling" || c === "bookingscheduling") return "booking";
  if (c === "utilities" || c === "everydayutilities") return "utilities";
  if (c === "finance" || c === "personalfinance") return "finance";
  if (c === "files" || c === "filesandsync" || c === "filessync") return "files";
  if (c === "photos" || c === "cameraandphotos" || c === "cameraphotos") return "photos";
  if (c === "reading" || c === "bookmarksandreading" || c === "bookmarksreading") return "reading";
  if (c === "media" || c === "musicandmedia" || c === "musicmedia") return "media";
  if (c === "fitness" || c === "healthandfitness" || c === "healthfitness") return "fitness";
  if (c === "teamknowledge") return "teamknowledge";
  if (c === "projectmanagement") return "projectmanagement";
  if (c === "customersupport") return "customersupport";
  if (c === "teammessaging") return "teammessaging";
  return c;
}

export function AppsPage() {
  const { navigate, query } = useRoute();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"recommended" | "recently-added" | "most-stars" | "a-z">("recommended");
  const [groupFilter, setGroupFilter] = useState<"all" | "business" | "personal">("all");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  // Advanced right-side Filter state
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [minStars, setMinStars] = useState<number | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  // Pagination & View Mode (Pages vs Scroll)
  const [viewMode, setViewMode] = useState<ViewMode>("page");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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

  const activeFiltersCount = [
    selectedLicense !== null,
    selectedTech !== null,
    minStars !== null,
  ].filter(Boolean).length;

  // Sync with query parameters
  React.useEffect(() => {
    if (query.group === "business") {
      setGroupFilter("business");
      setCategoryFilter(null);
    } else if (query.group === "personal") {
      setGroupFilter("personal");
      setCategoryFilter(null);
    } else if (query.cat) {
      setCategoryFilter(query.cat);
      setGroupFilter("all");
    } else {
      setGroupFilter("all");
      setCategoryFilter(null);
    }
  }, [query.group, query.cat]);

  const filtered = APPS.filter((a) => {
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      const matchName = a.name.toLowerCase().includes(q);
      const matchSubtitle = a.subtitle.toLowerCase().includes(q);
      const matchCat = a.category.toLowerCase().includes(q);
      const matchStack = a.stack.some((s) => s.toLowerCase().includes(q));
      if (!matchName && !matchSubtitle && !matchCat && !matchStack) return false;
    }
    if (groupFilter !== "all" && a.group !== groupFilter) {
      return false;
    }
    if (categoryFilter) {
      if (normAppCategory(a.category) !== normAppCategory(categoryFilter)) return false;
    }
    if (selectedLicense && a.license !== selectedLicense) {
      return false;
    }
    if (selectedTech && !a.stack.some(s => s.toLowerCase().includes(selectedTech.toLowerCase()))) {
      return false;
    }
    if (minStars) {
      const starsNum = parseFloat(a.stars.replace(/[^0-9.]/g, ""));
      if (starsNum < minStars) return false;
    }
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "most-stars") return parseFloat(b.stars) - parseFloat(a.stars);
    if (sort === "a-z") return a.name.localeCompare(b.name);
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / itemsPerPage);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, groupFilter, categoryFilter, selectedLicense, selectedTech, minStars, sort]);

  const paginatedApps = viewMode === "scroll" ? sorted : sorted.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSelectGroup = (g: "all" | "business" | "personal") => {
    setGroupFilter(g);
    setCategoryFilter(null);
    if (g === "all") navigate("#/apps");
    else navigate(`#/apps?group=${g}`);
  };

  const handleSelectCategory = (cat: string) => {
    if (categoryFilter && normAppCategory(categoryFilter) === normAppCategory(cat)) {
      setCategoryFilter(null);
      navigate("#/apps");
    } else {
      setCategoryFilter(cat);
      const slug = cat.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      navigate(`#/apps?cat=${slug}`);
    }
  };

  const resetFilters = () => {
    setSearch("");
    setGroupFilter("all");
    setCategoryFilter(null);
    setSelectedLicense(null);
    setSelectedTech(null);
    setMinStars(null);
    navigate("#/apps");
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-56px)] page-enter">
      {/* Sub-sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-[var(--uf-border)] bg-[var(--uf-panel)] lg:flex">
        <div className="p-4 border-b border-[var(--uf-border)]">
          <div className="relative">
            <Icon icon={Search} size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)]" />
            <input 
              type="text" 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search apps..." 
              className="w-full rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] py-1.5 pl-8 pr-7 text-xs text-[var(--uf-text)] placeholder-[var(--uf-text-muted)] focus:border-[var(--uf-accent)] focus:outline-none transition"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
              >
                ✕
              </button>
            )}
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto px-2 py-4 pb-24 scrollbar-thin">
          <div className="space-y-1 mb-6">
            <SidebarItem 
              label="All apps" 
              count={138} 
              active={groupFilter === "all" && !categoryFilter} 
              onClick={() => handleSelectGroup("all")}
            />
            <SidebarItem 
              label="Business apps" 
              count={64} 
              active={groupFilter === "business" && !categoryFilter} 
              onClick={() => handleSelectGroup("business")}
            />
            <SidebarItem 
              label="Personal apps" 
              count={74} 
              active={groupFilter === "personal" && !categoryFilter} 
              onClick={() => handleSelectGroup("personal")}
            />
          </div>

          <div className="px-3 mb-2 flex items-center justify-between text-xs font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider">
            <span>Business / SaaS</span>
            {categoryFilter && (
              <button type="button" onClick={() => { setCategoryFilter(null); navigate("#/apps"); }} className="text-[10px] text-[var(--uf-accent)] hover:underline lowercase">
                clear
              </button>
            )}
          </div>
          <div className="space-y-1 mb-6">
            {["Analytics", "Commerce", "Automation", "Marketing", "Team knowledge", "Project management", "Customer support", "Booking & scheduling", "Team messaging", "CRM"].map((cat) => (
              <SidebarItem 
                key={cat}
                label={cat} 
                active={categoryFilter !== null && normAppCategory(categoryFilter) === normAppCategory(cat)}
                onClick={() => handleSelectCategory(cat)}
              />
            ))}
          </div>

          <div className="px-3 mb-2 text-xs font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider">
            Personal apps
          </div>
          <div className="space-y-1">
            {["Everyday utilities", "Notes", "Personal finance", "Files and sync", "Camera and photos", "Bookmarks and reading", "Music and media", "Health and fitness"].map((cat) => (
              <SidebarItem 
                key={cat}
                label={cat} 
                active={categoryFilter !== null && normAppCategory(categoryFilter) === normAppCategory(cat)}
                onClick={() => handleSelectCategory(cat)}
              />
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-black text-[var(--uf-text)]">
            Open-source Apps for React, Next.js and More
          </h1>
          <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">
            {sorted.length} {sorted.length === 1 ? "app" : "apps"} available to explore, clone, and deploy.
          </p>

          {/* Active Filter Chips */}
          {(categoryFilter || groupFilter !== "all" || search) && (
            <div className="mt-4 mb-2 flex flex-wrap items-center gap-2 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)]/50 p-3 text-xs">
              <span className="text-[var(--uf-text-muted)] font-medium">Filtering by:</span>
              {groupFilter !== "all" && (
                <span className="inline-flex items-center gap-1 rounded-md bg-[var(--uf-accent)]/20 px-2.5 py-1 font-semibold text-[var(--uf-accent)]">
                  {groupFilter === "business" ? "Business Apps" : "Personal Apps"}
                  <button type="button" onClick={() => handleSelectGroup("all")} className="hover:opacity-75">✕</button>
                </span>
              )}
              {categoryFilter && (
                <span className="inline-flex items-center gap-1 rounded-md bg-purple-500/20 px-2.5 py-1 font-semibold text-purple-400">
                  Category: {categoryFilter}
                  <button type="button" onClick={() => { setCategoryFilter(null); navigate("#/apps"); }} className="hover:opacity-75">✕</button>
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

          {/* Sort tabs + search */}
          <div className="mt-8 mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[var(--uf-border)] pb-4">
            <div className="flex items-center gap-1 bg-[var(--uf-panel)] rounded-lg p-1 border border-[var(--uf-border)]">
              {(["recommended", "recently-added", "most-stars", "a-z"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setSort(s)}
                  className={`rounded-md px-3 py-1.5 text-xs font-medium transition ${
                    sort === s
                      ? "bg-white/[0.1] text-[var(--uf-text)] shadow-sm"
                      : "text-[var(--uf-text-muted)] hover:text-[var(--uf-text-secondary)] hover:bg-white/[0.04]"
                  }`}
                >
                  {s === "a-z" ? "A–Z" : s.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")}
                </button>
              ))}
            </div>
            
            {/* Right side controls: Filter + ViewModeToggle (Pages / Scroll) */}
            <div className="flex items-center gap-3">
              <div className="relative" ref={filterRef}>
                <button 
                  type="button"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
                    isFilterOpen || activeFiltersCount > 0
                      ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/15 text-[var(--uf-text)] shadow-sm"
                      : "border-[var(--uf-border)] bg-[var(--uf-panel)] text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]"
                  }`}
                >
                  <Icon icon={Filter} size={14} className={activeFiltersCount > 0 ? "text-[var(--uf-accent)]" : ""} />
                  Filter
                  {activeFiltersCount > 0 && (
                    <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--uf-accent)] px-1 text-[10px] font-bold text-white leading-none">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

              {/* Filter Popover Dropdown */}
              {isFilterOpen && (
                <div className="absolute right-0 top-full mt-2 z-50 w-72 sm:w-80 rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between border-b border-[var(--uf-border)] pb-3 mb-3">
                    <div className="flex items-center gap-2">
                      <Icon icon={Filter} size={15} className="text-[var(--uf-accent)]" />
                      <span className="text-sm font-semibold text-[var(--uf-text)]">App Filters</span>
                    </div>
                    {activeFiltersCount > 0 && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedLicense(null);
                          setSelectedTech(null);
                          setMinStars(null);
                        }}
                        className="text-xs text-[var(--uf-accent)] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Icon icon={RotateCcw} size={12} />
                        Reset
                      </button>
                    )}
                  </div>

                  <div className="space-y-4 text-xs">
                    {/* Stars Filter */}
                    <div>
                      <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                        GitHub Stars
                      </span>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { val: null, label: "All" },
                          { val: 10, label: "10k+" },
                          { val: 25, label: "25k+" },
                          { val: 50, label: "50k+" },
                        ].map((item) => (
                          <button
                            key={item.label}
                            type="button"
                            onClick={() => setMinStars(item.val)}
                            className={`rounded-lg py-1.5 text-center text-xs font-medium transition cursor-pointer ${
                              minStars === item.val
                                ? "bg-[var(--uf-accent)] text-white shadow-sm"
                                : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                            }`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                        Core Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {["All", "React", "Next.js", "Vue", "Svelte", "Go", "Python", "Node.js"].map((tech) => {
                          const isSelected = (tech === "All" && selectedTech === null) || selectedTech === tech;
                          return (
                            <button
                              key={tech}
                              type="button"
                              onClick={() => setSelectedTech(tech === "All" ? null : tech)}
                              className={`rounded-lg px-2.5 py-1 text-xs transition cursor-pointer ${
                                isSelected
                                  ? "bg-[var(--uf-accent)] text-white font-medium shadow-sm"
                                  : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                              }`}
                            >
                              {tech}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* License */}
                    <div>
                      <span className="font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider text-[10px] block mb-2">
                        License Type
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {["All", "MIT", "AGPL-3.0", "MPL-2.0", "GPL-3.0"].map((lic) => {
                          const isSelected = (lic === "All" && selectedLicense === null) || selectedLicense === lic;
                          return (
                            <button
                              key={lic}
                              type="button"
                              onClick={() => setSelectedLicense(lic === "All" ? null : lic)}
                              className={`rounded-lg px-2.5 py-1 text-xs transition cursor-pointer ${
                                isSelected
                                  ? "bg-[var(--uf-accent)] text-white font-medium shadow-sm"
                                  : "bg-white/[0.04] text-[var(--uf-text-secondary)] hover:bg-white/[0.08] border border-[var(--uf-border)]/50"
                              }`}
                            >
                              {lic}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-[var(--uf-border)] pt-3 flex items-center justify-between">
                    <span className="text-xs text-[var(--uf-text-secondary)]">
                      Matches: <strong className="text-[var(--uf-text)]">{sorted.length}</strong>
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedApps.map((app) => (
              <div
                key={app.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] card-hover transition cursor-pointer"
              >
                {/* Screenshot placeholder */}
                <div className={`h-36 bg-gradient-to-br ${app.iconGradient} flex items-center justify-center text-5xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                  <span className="relative z-10 drop-shadow-md">{app.iconText}</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-[10px] font-medium text-white/90 bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/10">Preview recorded</span>
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div className="flex items-start gap-3">
                    <div className={`h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br ${app.iconGradient} flex items-center justify-center text-lg shadow-sm border border-white/10`}>
                      {app.iconText}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[var(--uf-text)] group-hover:text-[var(--uf-accent)] transition truncate">
                        {app.name}
                      </h3>
                      <p className="text-xs text-[var(--uf-text-secondary)] truncate">{app.subtitle}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {app.stack.map((s) => (
                      <span key={s} className="rounded-md border border-[var(--uf-border)] bg-white/[0.02] px-2 py-0.5 text-[10px] font-medium text-[var(--uf-text-muted)]">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between text-[10px] text-[var(--uf-text-muted)]">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 font-medium">
                        <Icon icon={Star} size={12} className="text-amber-500 fill-amber-500" />
                        {app.stars}
                      </span>
                      <span>·</span>
                      <span>{app.license}</span>
                    </div>
                    <Icon icon={ExternalLink} size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
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
                totalItems={sorted.length}
                onPageChange={(p) => setCurrentPage(p)}
              />
            </div>
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
      {count !== undefined && <span className="text-[10px] opacity-60 ml-2 shrink-0">{count}</span>}
    </button>
  );
}
