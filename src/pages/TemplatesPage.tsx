import React, { useState, useEffect, useRef } from "react";
import { Search, Layers, Play, Bookmark, ExternalLink, Filter, Check, X, SlidersHorizontal } from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useRoute } from "../lib/router";
import { useBookmarks } from "../lib/bookmarks";
import { useToast } from "../components/Toast";
import { ViewModeToggle, type ViewMode } from "../components/ViewModeToggle";
import { Pagination } from "../components/Pagination";

interface TemplateItem {
  id: string;
  title: string;
  author: string;
  price: string;
  isPlanIncluded: boolean;
  isExternal: boolean;
  category: string;
  bookmarks: number;
  gradient: string;
}

const ON_UIFORGE_TEMPLATES: TemplateItem[] = [
  // Landing Page
  {
    id: "tmpl-saas",
    title: "Linear SaaS Modern Landing",
    author: "craftzdog",
    price: "$49",
    isPlanIncluded: true,
    isExternal: false,
    category: "Landing Page",
    bookmarks: 1205,
    gradient: "from-blue-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-nexus",
    title: "Nexus High-Conversion Landing",
    author: "ariac",
    price: "$39",
    isPlanIncluded: true,
    isExternal: false,
    category: "Landing Page",
    bookmarks: 874,
    gradient: "from-indigo-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-landing-free",
    title: "OpenLaunch Starter Landing Page",
    author: "shadcn",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Landing Page",
    bookmarks: 2410,
    gradient: "from-teal-600/20 to-[var(--uf-panel)]",
  },
  // Marketing
  {
    id: "tmpl-mkt-hyper",
    title: "HyperGrowth Marketing Engine",
    author: "marketer_dev",
    price: "$39",
    isPlanIncluded: true,
    isExternal: false,
    category: "Marketing",
    bookmarks: 932,
    gradient: "from-violet-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-mkt-free",
    title: "Audience Magnet Funnel Pages",
    author: "ariac",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Marketing",
    bookmarks: 1120,
    gradient: "from-purple-600/20 to-[var(--uf-panel)]",
  },
  // Portfolio
  {
    id: "tmpl-folio-pro",
    title: "Minimalist Designer & Creator Portfolio",
    author: "shadcn",
    price: "$49",
    isPlanIncluded: true,
    isExternal: false,
    category: "Portfolio",
    bookmarks: 1420,
    gradient: "from-purple-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-folio-canvas",
    title: "Canvas Interactive 3D Portfolio",
    author: "craftzdog",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Portfolio",
    bookmarks: 930,
    gradient: "from-blue-600/20 to-[var(--uf-panel)]",
  },
  // Startup
  {
    id: "tmpl-startup",
    title: "LaunchPad High-Speed Startup Kit",
    author: "mateor",
    price: "$59",
    isPlanIncluded: true,
    isExternal: false,
    category: "Startup",
    bookmarks: 1150,
    gradient: "from-amber-500/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-startup-free",
    title: "Founder01 Pre-Seed MVP Base",
    author: "theom",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Startup",
    bookmarks: 1680,
    gradient: "from-emerald-600/20 to-[var(--uf-panel)]",
  },
  // Personal Website
  {
    id: "tmpl-personal",
    title: "Chronicle Personal Journal & Bio",
    author: "paco",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Personal Website",
    bookmarks: 960,
    gradient: "from-fuchsia-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-personal-pro",
    title: "Curator Personal Brand & Digital Garden",
    author: "craftzdog",
    price: "$39",
    isPlanIncluded: true,
    isExternal: false,
    category: "Personal Website",
    bookmarks: 1340,
    gradient: "from-indigo-600/20 to-[var(--uf-panel)]",
  },
  // Agency
  {
    id: "tmpl-agency-studio",
    title: "Studio Collective Creative Agency",
    author: "ariac",
    price: "$59",
    isPlanIncluded: true,
    isExternal: false,
    category: "Agency",
    bookmarks: 860,
    gradient: "from-rose-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-agency-craft",
    title: "Vanguard Brand & Product Agency",
    author: "theom",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Agency",
    bookmarks: 740,
    gradient: "from-amber-600/20 to-[var(--uf-panel)]",
  },
  // Blog
  {
    id: "tmpl-blog",
    title: "Editorial Prose Modern Blog",
    author: "shadcn",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Blog",
    bookmarks: 1480,
    gradient: "from-slate-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-blog-pro",
    title: "Monocle Publication & Substack Clone",
    author: "paco",
    price: "$49",
    isPlanIncluded: true,
    isExternal: false,
    category: "Blog",
    bookmarks: 980,
    gradient: "from-cyan-600/20 to-[var(--uf-panel)]",
  },
  // Documentation
  {
    id: "tmpl-docs",
    title: "Syntax API Reference & Docs",
    author: "theom",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Documentation",
    bookmarks: 1720,
    gradient: "from-cyan-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-docs-pro",
    title: "Handbook Enterprise Knowledge Hub",
    author: "mateor",
    price: "$39",
    isPlanIncluded: true,
    isExternal: false,
    category: "Documentation",
    bookmarks: 1250,
    gradient: "from-blue-600/20 to-[var(--uf-panel)]",
  },
  // Dashboard
  {
    id: "tmpl-dashboard",
    title: "Apex Treasury & Finance",
    author: "mateor",
    price: "$69",
    isPlanIncluded: false,
    isExternal: false,
    category: "Dashboard",
    bookmarks: 843,
    gradient: "from-amber-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-cloudpulse",
    title: "CloudPulse Infrastructure Dashboard",
    author: "theom",
    price: "$79",
    isPlanIncluded: true,
    isExternal: false,
    category: "Dashboard",
    bookmarks: 1104,
    gradient: "from-cyan-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-dashboard-free",
    title: "Minimal Metric Lite Dashboard",
    author: "shadcn",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Dashboard",
    bookmarks: 2100,
    gradient: "from-blue-600/20 to-[var(--uf-panel)]",
  },
  // Admin Panel
  {
    id: "tmpl-prism-admin",
    title: "Prism Enterprise Admin & CRUD Console",
    author: "shadcn",
    price: "$59",
    isPlanIncluded: true,
    isExternal: false,
    category: "Admin Panel",
    bookmarks: 1845,
    gradient: "from-sky-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-argon-admin",
    title: "Argon Superadmin & Roles Portal",
    author: "theom",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Admin Panel",
    bookmarks: 980,
    gradient: "from-blue-500/20 to-[var(--uf-panel)]",
  },
  // SaaS
  {
    id: "tmpl-saas-b2b",
    title: "Stripe-Billing B2B Enterprise SaaS",
    author: "craftzdog",
    price: "$89",
    isPlanIncluded: true,
    isExternal: false,
    category: "SaaS",
    bookmarks: 1640,
    gradient: "from-purple-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-saas-starter",
    title: "SaaS Rocket Micro-SaaS Template",
    author: "ariac",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "SaaS",
    bookmarks: 2780,
    gradient: "from-indigo-600/20 to-[var(--uf-panel)]",
  },
  // AI
  {
    id: "tmpl-ai",
    title: "Cognitive AI Studio Platform",
    author: "shadcn",
    price: "$89",
    isPlanIncluded: true,
    isExternal: false,
    category: "AI",
    bookmarks: 2311,
    gradient: "from-purple-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-ai-free",
    title: "Ollama & Vercel AI Chat SDK Shell",
    author: "theom",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "AI",
    bookmarks: 3120,
    gradient: "from-pink-600/20 to-[var(--uf-panel)]",
  },
  // Boilerplate
  {
    id: "tmpl-supabase-starter",
    title: "Supabase + Next.js Production Starter",
    author: "mateor",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Boilerplate",
    bookmarks: 2190,
    gradient: "from-emerald-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-boilerplate-pro",
    title: "Turborepo Monorepo Fullstack Boilerplate",
    author: "craftzdog",
    price: "$49",
    isPlanIncluded: true,
    isExternal: false,
    category: "Boilerplate",
    bookmarks: 1450,
    gradient: "from-violet-600/20 to-[var(--uf-panel)]",
  },
  // Developer Tool
  {
    id: "tmpl-devflow",
    title: "DevFlow Terminal & Trace Monitor",
    author: "theom",
    price: "$49",
    isPlanIncluded: true,
    isExternal: false,
    category: "Developer Tool",
    bookmarks: 865,
    gradient: "from-neutral-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-devtool-free",
    title: "DevWorkbench Web Playground & Inspector",
    author: "shadcn",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Developer Tool",
    bookmarks: 1940,
    gradient: "from-slate-600/20 to-[var(--uf-panel)]",
  },
  // Ecommerce
  {
    id: "tmpl-commerce",
    title: "Storefront Headless Commerce",
    author: "ariac",
    price: "$79",
    isPlanIncluded: true,
    isExternal: false,
    category: "Ecommerce",
    bookmarks: 1420,
    gradient: "from-teal-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-commerce-free",
    title: "MiniCart Shopify & Stripe Store",
    author: "theom",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Ecommerce",
    bookmarks: 1650,
    gradient: "from-emerald-600/20 to-[var(--uf-panel)]",
  },
  // Analytics
  {
    id: "tmpl-analytics",
    title: "MetricsFlow Product Analytics",
    author: "mateor",
    price: "$69",
    isPlanIncluded: true,
    isExternal: false,
    category: "Analytics",
    bookmarks: 1055,
    gradient: "from-blue-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-analytics-free",
    title: "PulseLite GDPR-Compliant Web Analytics",
    author: "shadcn",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Analytics",
    bookmarks: 1890,
    gradient: "from-cyan-600/20 to-[var(--uf-panel)]",
  },
  // Chat
  {
    id: "tmpl-chat",
    title: "Streamline Real-time Chat & Channels",
    author: "priya",
    price: "$49",
    isPlanIncluded: true,
    isExternal: false,
    category: "Chat",
    bookmarks: 730,
    gradient: "from-pink-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-chat-free",
    title: "SocketWave Collaborative Team Chat",
    author: "theom",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Chat",
    bookmarks: 1310,
    gradient: "from-rose-600/20 to-[var(--uf-panel)]",
  },
  // Directory
  {
    id: "tmpl-directory",
    title: "Curated Resource Directory Platform",
    author: "theom",
    price: "$39",
    isPlanIncluded: true,
    isExternal: false,
    category: "Directory",
    bookmarks: 890,
    gradient: "from-orange-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-directory-free",
    title: "OpenTools Community Directory & Submissions",
    author: "mateor",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Directory",
    bookmarks: 1540,
    gradient: "from-amber-600/20 to-[var(--uf-panel)]",
  },
  // Authentication
  {
    id: "tmpl-auth",
    title: "AuthShield Multi-Factor SSO Portal",
    author: "acme",
    price: "$29",
    isPlanIncluded: true,
    isExternal: false,
    category: "Authentication",
    bookmarks: 1120,
    gradient: "from-violet-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-auth-free",
    title: "NextAuth & Lucia Passwordless Starter",
    author: "shadcn",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Authentication",
    bookmarks: 2630,
    gradient: "from-blue-600/20 to-[var(--uf-panel)]",
  },
  // Mobile App
  {
    id: "tmpl-mobile",
    title: "Capacitor Hybrid Mobile Shell",
    author: "craftzdog",
    price: "$59",
    isPlanIncluded: true,
    isExternal: false,
    category: "Mobile App",
    bookmarks: 640,
    gradient: "from-rose-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-mobile-free",
    title: "Expo & React Native Web Companion",
    author: "theom",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "Mobile App",
    bookmarks: 1750,
    gradient: "from-purple-600/20 to-[var(--uf-panel)]",
  },
  // CMS
  {
    id: "tmpl-cms",
    title: "Headless Content Studio & Publishing",
    author: "shadcn",
    price: "$69",
    isPlanIncluded: true,
    isExternal: false,
    category: "CMS",
    bookmarks: 1330,
    gradient: "from-emerald-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-cms-free",
    title: "Markdown & MDX Git-based CMS Engine",
    author: "ariac",
    price: "Free",
    isPlanIncluded: true,
    isExternal: false,
    category: "CMS",
    bookmarks: 1820,
    gradient: "from-teal-600/20 to-[var(--uf-panel)]",
  }
];

const EXTERNAL_TEMPLATES: TemplateItem[] = [
  {
    id: "tmpl-ext-portfolio",
    title: "Design Engineer Portfolio",
    author: "arunachalam",
    price: "Free",
    isPlanIncluded: false,
    isExternal: true,
    category: "Portfolio",
    bookmarks: 450,
    gradient: "from-emerald-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-ext-agency",
    title: "Studio Mirage Creative Agency",
    author: "ariac",
    price: "$29",
    isPlanIncluded: false,
    isExternal: true,
    category: "Agency",
    bookmarks: 312,
    gradient: "from-rose-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-ext-admin",
    title: "Horizon UI React Admin",
    author: "horizon_ui",
    price: "$49",
    isPlanIncluded: false,
    isExternal: true,
    category: "Admin Panel",
    bookmarks: 720,
    gradient: "from-blue-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-ext-saas",
    title: "Preline Next.js SaaS Kit",
    author: "preline",
    price: "Free",
    isPlanIncluded: false,
    isExternal: true,
    category: "SaaS",
    bookmarks: 860,
    gradient: "from-purple-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-ext-marketing",
    title: "Conversion Flow Marketing Pages",
    author: "ariac",
    price: "$39",
    isPlanIncluded: false,
    isExternal: true,
    category: "Marketing",
    bookmarks: 410,
    gradient: "from-amber-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-ext-startup",
    title: "Seedling Early Stage Kit",
    author: "theom",
    price: "Free",
    isPlanIncluded: false,
    isExternal: true,
    category: "Startup",
    bookmarks: 630,
    gradient: "from-emerald-600/20 to-[var(--uf-panel)]",
  },
  {
    id: "tmpl-ext-docs",
    title: "Handbook Multi-Product Guide",
    author: "mateor",
    price: "$29",
    isPlanIncluded: false,
    isExternal: true,
    category: "Documentation",
    bookmarks: 512,
    gradient: "from-indigo-600/20 to-[var(--uf-panel)]",
  }
];

// Robust normalizer for category slugs & names
function normCategory(s: string) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (clean === "auth" || clean === "authentication") return "authentication";
  if (clean === "mobile" || clean === "mobileapp") return "mobileapp";
  if (clean === "landing" || clean === "landingpage") return "landingpage";
  if (clean === "personal" || clean === "personalwebsite") return "personalwebsite";
  if (clean === "developer" || clean === "developertool") return "developertool";
  if (clean === "admin" || clean === "adminpanel") return "adminpanel";
  return clean;
}

export function TemplatesPage() {
  const { navigate, query } = useRoute();
  const { isSaved, toggleSave } = useBookmarks();
  const { toast } = useToast();

  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<string>("All Templates");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sourceFilter, setSourceFilter] = useState<"all" | "uiforge" | "external">("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterPopoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (filterPopoverRef.current && !filterPopoverRef.current.contains(e.target as Node)) {
        setIsFilterOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsFilterOpen(false);
    }
    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFilterOpen]);

  useEffect(() => {
    if (query.cat) {
      setSelectedCategory(query.cat);
    } else {
      setSelectedCategory(null);
    }

    if (query.filter === "plan") {
      setFilterType("Included in Plan");
    } else if (query.filter === "free") {
      setFilterType("Free");
    } else {
      setFilterType("All Templates");
    }
  }, [query.cat, query.filter]);

  const handleSave = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const next = toggleSave(id);
    toast(next ? "success" : "info", next ? "Saved template" : "Removed template");
  };

  const filterItem = (t: TemplateItem) => {
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      const matchTitle = t.title.toLowerCase().includes(q);
      const matchAuthor = t.author.toLowerCase().includes(q);
      const matchCat = t.category.toLowerCase().includes(q);
      if (!matchTitle && !matchAuthor && !matchCat) return false;
    }
    if (selectedCategory) {
      if (normCategory(t.category) !== normCategory(selectedCategory)) return false;
    }
    if (filterType === "Included in Plan") {
      return t.isPlanIncluded;
    }
    if (filterType === "Free") {
      return t.price.toLowerCase() === "free";
    }
    if (filterType === "Buy on UIForge") {
      return !t.isExternal && t.price.toLowerCase() !== "free";
    }
    if (filterType === "Verified") {
      return true;
    }
    return true;
  };

  const rawFilteredUiForge = ON_UIFORGE_TEMPLATES.filter(filterItem);
  const rawFilteredExternal = EXTERNAL_TEMPLATES.filter(filterItem);

  const filteredOnUiForge = sourceFilter === "external" ? [] : rawFilteredUiForge;
  const filteredExternal = sourceFilter === "uiforge" ? [] : rawFilteredExternal;
  const totalCount = filteredOnUiForge.length + filteredExternal.length;

  // View Mode (Pages vs Scroll) & Pagination
  const [viewMode, setViewMode] = useState<ViewMode>("page");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filterType, selectedCategory, sourceFilter]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);
  const allFiltered = [...filteredOnUiForge, ...filteredExternal];
  const pageSlice = viewMode === "scroll" ? allFiltered : allFiltered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const displayUiForge = viewMode === "scroll" ? filteredOnUiForge : pageSlice.filter((t) => !t.isExternal);
  const displayExternal = viewMode === "scroll" ? filteredExternal : pageSlice.filter((t) => t.isExternal);

  const activeFiltersCount = [
    filterType !== "All Templates",
    selectedCategory !== null,
    sourceFilter !== "all",
  ].filter(Boolean).length;

  const resetFilters = () => {
    setSearch("");
    setFilterType("All Templates");
    setSelectedCategory(null);
    setSourceFilter("all");
    navigate("#/templates");
  };

  const handleSelectCategory = (cat: string) => {
    if (selectedCategory && normCategory(selectedCategory) === normCategory(cat)) {
      setSelectedCategory(null);
      navigate("#/templates");
    } else {
      setSelectedCategory(cat);
      const slug = cat.toLowerCase().replace(/\s+/g, "-");
      navigate(`#/templates?cat=${slug}`);
    }
  };

  const handleSelectFilter = (label: string) => {
    setFilterType(label);
    setSelectedCategory(null);
    if (label === "Included in Plan") navigate("#/templates?filter=plan");
    else if (label === "Free") navigate("#/templates?filter=free");
    else navigate("#/templates");
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
              placeholder="Search templates..." 
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
            {["All Templates", "Included in Plan", "Free", "Buy on UIForge", "Verified"].map((label) => (
              <SidebarItem 
                key={label}
                label={label} 
                active={filterType === label && !selectedCategory}
                onClick={() => handleSelectFilter(label)}
              />
            ))}
          </div>

          <div className="px-3 mb-2 flex items-center justify-between text-xs font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider">
            <span>Marketing</span>
            {selectedCategory && (
              <button type="button" onClick={() => { setSelectedCategory(null); navigate("#/templates"); }} className="text-[10px] text-[var(--uf-accent)] hover:underline lowercase">
                clear
              </button>
            )}
          </div>
          <div className="space-y-1 mb-6">
            {["Landing Page", "Marketing", "Portfolio", "Startup", "Personal Website", "Agency", "Blog", "Documentation"].map((cat) => (
              <SidebarItem 
                key={cat}
                label={cat} 
                active={selectedCategory !== null && normCategory(selectedCategory) === normCategory(cat)}
                onClick={() => handleSelectCategory(cat)}
              />
            ))}
          </div>

          <div className="px-3 mb-2 text-xs font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider">
            Applications
          </div>
          <div className="space-y-1">
            {["Dashboard", "SaaS", "Admin Panel", "AI", "Boilerplate", "Developer Tool", "Ecommerce", "Analytics", "Chat", "Directory", "Authentication", "Mobile App", "CMS"].map((cat) => (
              <SidebarItem 
                key={cat}
                label={cat} 
                active={selectedCategory !== null && normCategory(selectedCategory) === normCategory(cat)}
                onClick={() => handleSelectCategory(cat)}
              />
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-[var(--uf-text)]">React & Next.js Website Templates</h1>
              <p className="mt-2 text-sm text-[var(--uf-text-secondary)] max-w-2xl">
                Complete website architectures and dashboard workflows. Crafted with Tailwind CSS, Next.js, and Framer Motion.
              </p>
            </div>

            {/* Right side controls: Filter + ViewModeToggle (Pages / Scroll) */}
            <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
              <div className="relative shrink-0" ref={filterPopoverRef}>
                <button
                  type="button"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                    isFilterOpen || activeFiltersCount > 0
                      ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/15 text-[var(--uf-accent)] shadow-sm"
                      : "border-[var(--uf-border)] bg-[var(--uf-panel-2)] text-[var(--uf-text)] hover:bg-white/5"
                  }`}
                >
                  <Icon icon={Filter} size={14} className={activeFiltersCount > 0 ? "text-[var(--uf-accent)]" : ""} />
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--uf-accent)] text-[10px] font-bold text-white">
                      {activeFiltersCount}
                    </span>
                  )}
                </button>

                {/* Popover */}
                {isFilterOpen && (
                  <div className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="flex items-center justify-between pb-3 border-b border-[var(--uf-border)]">
                      <span className="text-sm font-semibold text-[var(--uf-text)]">Template Filters</span>
                      {activeFiltersCount > 0 && (
                        <button
                          type="button"
                          onClick={resetFilters}
                          className="text-xs text-[var(--uf-accent)] hover:underline"
                        >
                          Reset all
                        </button>
                      )}
                    </div>

                    {/* Pricing Filter */}
                    <div className="py-3 border-b border-[var(--uf-border)]/60">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-[var(--uf-text-muted)] block mb-2">
                        Pricing & License
                      </label>
                      <div className="grid grid-cols-2 gap-1.5">
                        {[
                          { id: "All Templates", label: "All Pricing" },
                          { id: "Included in Plan", label: "Included in Plan" },
                          { id: "Free", label: "Free" },
                          { id: "Buy on UIForge", label: "Buy on UIForge" },
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleSelectFilter(item.id)}
                            className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition text-left ${
                              filterType === item.id
                                ? "bg-[var(--uf-accent)] text-white"
                                : "bg-[var(--uf-panel-2)] text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/5 border border-[var(--uf-border)]"
                            }`}
                          >
                            <span className="truncate">{item.label}</span>
                            {filterType === item.id && <Icon icon={Check} size={12} />}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Source Filter */}
                    <div className="py-3 border-b border-[var(--uf-border)]/60">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-[var(--uf-text-muted)] block mb-2">
                        Origin / Source
                      </label>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          { id: "all", label: "All Sources" },
                          { id: "uiforge", label: "UIForge Native" },
                          { id: "external", label: "External Sites" },
                        ].map((src) => (
                          <button
                            key={src.id}
                            type="button"
                            onClick={() => setSourceFilter(src.id as any)}
                            className={`px-2.5 py-1 rounded-md text-xs font-medium transition ${
                              sourceFilter === src.id
                                ? "bg-[var(--uf-accent)] text-white"
                                : "bg-[var(--uf-panel-2)] text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] border border-[var(--uf-border)]"
                            }`}
                          >
                            {src.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Quick Categories */}
                    <div className="pt-3">
                      <label className="text-[11px] font-semibold uppercase tracking-wider text-[var(--uf-text-muted)] block mb-2">
                        Popular Categories
                      </label>
                      <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto pr-1">
                        {["Landing Page", "SaaS", "Dashboard", "Marketing", "Portfolio", "Startup", "Ecommerce", "AI"].map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => handleSelectCategory(cat)}
                            className={`px-2 py-0.5 rounded text-[11px] font-medium transition ${
                              selectedCategory && normCategory(selectedCategory) === normCategory(cat)
                                ? "bg-purple-500 text-white"
                                : "bg-white/5 text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <ViewModeToggle viewMode={viewMode} onChange={setViewMode} />
            </div>
          </div>

          {/* Active Filter Chips */}
          {(selectedCategory || filterType !== "All Templates" || search || sourceFilter !== "all") && (
            <div className="mb-6 flex flex-wrap items-center gap-2 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)]/50 p-3 text-xs">
              <span className="text-[var(--uf-text-muted)] font-medium">Filtering by:</span>
              {filterType !== "All Templates" && (
                <span className="inline-flex items-center gap-1 rounded-md bg-[var(--uf-accent)]/20 px-2.5 py-1 font-semibold text-[var(--uf-accent)]">
                  {filterType}
                  <button type="button" onClick={() => setFilterType("All Templates")} className="hover:opacity-75">✕</button>
                </span>
              )}
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 rounded-md bg-purple-500/20 px-2.5 py-1 font-semibold text-purple-400">
                  Category: {selectedCategory}
                  <button type="button" onClick={() => setSelectedCategory(null)} className="hover:opacity-75">✕</button>
                </span>
              )}
              {sourceFilter !== "all" && (
                <span className="inline-flex items-center gap-1 rounded-md bg-blue-500/20 px-2.5 py-1 font-semibold text-blue-400">
                  Source: {sourceFilter === "uiforge" ? "UIForge Native" : "External"}
                  <button type="button" onClick={() => setSourceFilter("all")} className="hover:opacity-75">✕</button>
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

          {totalCount === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--uf-border)] p-12 text-center bg-[var(--uf-panel)]/40 my-8">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-[var(--uf-text-muted)] mb-3">
                <Icon icon={Search} size={20} />
              </div>
              <h3 className="text-base font-semibold text-[var(--uf-text)]">No matching templates</h3>
              <p className="mt-1 text-xs text-[var(--uf-text-secondary)] max-w-sm">
                No templates matched your selected category or query.
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
              {/* On UIForge Section */}
              {displayUiForge.length > 0 && (
                <div className="mb-12">
                  <div className="mb-6 flex items-baseline justify-between border-b border-[var(--uf-border)] pb-2">
                    <h2 className="text-lg font-bold text-[var(--uf-text)]">On UIForge ({filteredOnUiForge.length})</h2>
                    <span className="text-xs text-[var(--uf-text-muted)]">Hosted here, free with your plan or bought by card</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayUiForge.map((t) => (
                      <TemplateCard key={t.id} t={t} saved={isSaved(t.id)} onSave={(e) => handleSave(e, t.id)} />
                    ))}
                  </div>
                </div>
              )}

              {/* External Section */}
              {displayExternal.length > 0 && (
                <div className="mb-12">
                  <div className="mb-6 flex items-baseline justify-between border-b border-[var(--uf-border)] pb-2">
                    <h2 className="text-lg font-bold text-[var(--uf-text)]">From other sites ({filteredExternal.length})</h2>
                    <span className="text-xs text-[var(--uf-text-muted)]">Listed here, bought on the author's own site</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayExternal.map((t) => (
                      <TemplateCard key={t.id} t={t} saved={isSaved(t.id)} onSave={(e) => handleSave(e, t.id)} />
                    ))}
                  </div>
                </div>
              )}

              {/* Pagination Controls */}
              {viewMode === "page" && totalPages > 1 && (
                <div className="mt-8 flex justify-center pb-8">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    pageSize={itemsPerPage}
                    totalItems={totalCount}
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
      {count !== undefined && <span className="text-[10px] opacity-60 ml-2 shrink-0">{count}</span>}
    </button>
  );
}

function TemplateCard({ t, saved, onSave }: { t: TemplateItem, saved: boolean, onSave: (e: React.MouseEvent) => void }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] card-hover cursor-pointer">
      {/* Mockup Preview Area */}
      <div className={`relative h-40 w-full overflow-hidden bg-gradient-to-br ${t.gradient} flex flex-col justify-between border-b border-[var(--uf-border)] p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="rounded-md bg-black/40 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm border border-white/10">
              {t.category}
            </span>
            <span className="flex items-center justify-center rounded-md bg-black/40 px-1.5 py-0.5 text-white backdrop-blur-sm border border-white/10">
              <Icon icon={Play} size={10} />
            </span>
          </div>
          {t.isPlanIncluded ? (
            <span className="rounded-md bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-400 border border-blue-500/20">
              ✓ With plan
            </span>
          ) : (
            <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white border border-white/10 backdrop-blur-sm">
              {t.price}
            </span>
          )}
        </div>
        <div className="rounded-lg bg-[var(--uf-panel)]/80 p-2.5 backdrop-blur-md border border-[var(--uf-border)]">
          <p className="text-xs font-semibold text-[var(--uf-text)] truncate">{t.title}</p>
          <p className="text-[10px] text-[var(--uf-text-muted)]">@{t.author}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex items-center justify-between">
        <div className="min-w-0">
          <h3 className="font-semibold text-xs text-[var(--uf-text)] truncate">
            {t.title}
          </h3>
        </div>
        
        <div className="flex items-center gap-2 shrink-0 text-[10px] text-[var(--uf-text-muted)]">
          <span className="flex items-center gap-1">
            <Icon icon={Bookmark} size={10} className={saved ? "fill-amber-500 text-amber-500" : ""} />
            {t.bookmarks}
          </span>
          <button 
            onClick={onSave}
            className="hover:text-[var(--uf-text)] p-1 rounded-md hover:bg-white/[0.06] transition"
          >
            {t.isExternal ? <Icon icon={ExternalLink} size={12} /> : <Icon icon={Bookmark} size={12} />}
          </button>
        </div>
      </div>
    </div>
  );
}
