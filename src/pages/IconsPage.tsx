import React, { useState, useMemo, useCallback, useEffect } from "react";
import {
  Search, Copy, Check, ChevronDown,
  Home, Settings, Bell, User, Heart, Star,
  Mail, Phone, Camera, Lock, Zap, Globe,
  ArrowRight, ArrowLeft, ArrowUp, ArrowDown,
  Plus, Minus, X, Menu, MoreHorizontal,
  Eye, EyeOff, Download, Upload, Share2,
  Folder, File, Image, Video, Music,
  Sun, Moon, Cloud, CloudRain, Wind,
  Code, Terminal, Database, Cpu, Wifi,
  ShoppingCart, CreditCard, Package, Truck,
  MessageSquare, Send, Bookmark, Flag,
  Calendar, Clock, Map, Navigation,
  Edit, Trash2, Save, Printer,
  Play, Pause, SkipForward, Volume2,
  Shield, Key, AlertTriangle, Info,
  Smile, Frown, Meh, ThumbsUp,
  Gift, Award, Target, Compass,
  CheckCircle, Sparkles,
  Type, Bold, Italic, AlignLeft,
  Layout, Grid, Columns, Layers,
  Maximize2, Minimize2, Move, RefreshCw,
  Sliders, Filter, HelpCircle, FileText
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useToast } from "../components/Toast";
import { useRoute } from "../lib/router";

type IconEntry = { 
  name: string; 
  icon: typeof Home; 
  family: string; 
  category: string;
  isAnimated?: boolean;
};

// Base icon templates
const BASE_ICONS: Array<{ name: string; icon: typeof Home; category: string; isAnimated?: boolean }> = [
  // Interface General
  { name: "home", icon: Home, category: "Interface General" },
  { name: "settings", icon: Settings, category: "Interface General", isAnimated: true },
  { name: "bell", icon: Bell, category: "Interface General", isAnimated: true },
  { name: "user", icon: User, category: "Interface General" },
  { name: "menu", icon: Menu, category: "Interface General" },
  { name: "more-horizontal", icon: MoreHorizontal, category: "Interface General" },
  { name: "eye", icon: Eye, category: "Interface General" },
  { name: "eye-off", icon: EyeOff, category: "Interface General" },
  { name: "search", icon: Search, category: "Interface General" },
  { name: "info", icon: Info, category: "Interface General" },
  { name: "plus", icon: Plus, category: "Interface General" },
  { name: "minus", icon: Minus, category: "Interface General" },
  { name: "x", icon: X, category: "Interface General" },
  { name: "copy", icon: Copy, category: "Interface General" },
  { name: "check", icon: Check, category: "Interface General" },
  { name: "sliders", icon: Sliders, category: "Interface General" },
  { name: "filter", icon: Filter, category: "Interface General" },
  { name: "help-circle", icon: HelpCircle, category: "Interface General" },
  { name: "sparkles", icon: Sparkles, category: "Interface General", isAnimated: true },

  // Arrows
  { name: "arrow-right", icon: ArrowRight, category: "Arrows", isAnimated: true },
  { name: "arrow-left", icon: ArrowLeft, category: "Arrows" },
  { name: "arrow-up", icon: ArrowUp, category: "Arrows" },
  { name: "arrow-down", icon: ArrowDown, category: "Arrows" },
  { name: "chevron-down", icon: ChevronDown, category: "Arrows" },
  { name: "refresh-cw", icon: RefreshCw, category: "Arrows", isAnimated: true },
  { name: "move", icon: Move, category: "Arrows" },
  { name: "maximize", icon: Maximize2, category: "Arrows" },
  { name: "minimize", icon: Minimize2, category: "Arrows" },

  // Devices & Signals
  { name: "cpu", icon: Cpu, category: "Devices & Signals", isAnimated: true },
  { name: "wifi", icon: Wifi, category: "Devices & Signals", isAnimated: true },
  { name: "terminal", icon: Terminal, category: "Devices & Signals" },
  { name: "database", icon: Database, category: "Devices & Signals" },
  { name: "code", icon: Code, category: "Devices & Signals" },
  { name: "printer", icon: Printer, category: "Devices & Signals" },

  // Typography
  { name: "type", icon: Type, category: "Typography" },
  { name: "bold", icon: Bold, category: "Typography" },
  { name: "italic", icon: Italic, category: "Typography" },
  { name: "align-left", icon: AlignLeft, category: "Typography" },
  { name: "file-text", icon: FileText, category: "Typography" },
  { name: "edit", icon: Edit, category: "Typography" },

  // Folders & Files
  { name: "folder", icon: Folder, category: "Folders & Files" },
  { name: "file", icon: File, category: "Folders & Files" },
  { name: "download", icon: Download, category: "Folders & Files", isAnimated: true },
  { name: "upload", icon: Upload, category: "Folders & Files", isAnimated: true },
  { name: "save", icon: Save, category: "Folders & Files" },
  { name: "trash", icon: Trash2, category: "Folders & Files" },

  // Social Media & Brands
  { name: "heart", icon: Heart, category: "Social Media & Brands", isAnimated: true },
  { name: "star", icon: Star, category: "Social Media & Brands", isAnimated: true },
  { name: "bookmark", icon: Bookmark, category: "Social Media & Brands" },
  { name: "share", icon: Share2, category: "Social Media & Brands" },
  { name: "flag", icon: Flag, category: "Social Media & Brands" },
  { name: "thumbs-up", icon: ThumbsUp, category: "Social Media & Brands" },
  { name: "globe", icon: Globe, category: "Social Media & Brands", isAnimated: true },

  // Communication
  { name: "mail", icon: Mail, category: "Communication" },
  { name: "phone", icon: Phone, category: "Communication", isAnimated: true },
  { name: "message-square", icon: MessageSquare, category: "Communication", isAnimated: true },
  { name: "send", icon: Send, category: "Communication", isAnimated: true },

  // Layout
  { name: "layout", icon: Layout, category: "Layout" },
  { name: "grid", icon: Grid, category: "Layout" },
  { name: "columns", icon: Columns, category: "Layout" },
  { name: "layers", icon: Layers, category: "Layout" },
];

const FAMILIES = [
  "Lucide",
  "Tabler",
  "Hugeicons",
  "Remix",
  "Phosphor",
  "Heroicons",
  "Material Line",
];

// Generate populated icons distributed across all 7 families
const ICON_DATA: IconEntry[] = FAMILIES.flatMap((family) =>
  BASE_ICONS.map((base) => ({
    name: `${family.toLowerCase().replace(/\s+/g, "")}-${base.name}`,
    icon: base.icon,
    family,
    category: base.category,
    isAnimated: base.isAnimated,
  }))
);

type CopyFormat = "react" | "svg" | "name" | "vue" | "react-native";

export function IconsPage() {
  const { navigate, query } = useRoute();
  const [search, setSearch] = useState("");
  const [size, setSize] = useState(24);
  const [stroke, setStroke] = useState(2);
  const [copyFormat, setCopyFormat] = useState<CopyFormat>("react");
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [animatedOnly, setAnimatedOnly] = useState(false);
  const { toast } = useToast();

  const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Sync with URL query parameters
  useEffect(() => {
    if (query.family) {
      setSelectedFamily(query.family);
      setSelectedCategory(null);
      setAnimatedOnly(false);
    } else if (query.cat) {
      setSelectedCategory(query.cat);
      setSelectedFamily(null);
      setAnimatedOnly(false);
    } else if (query.animated === "true") {
      setAnimatedOnly(true);
      setSelectedFamily(null);
      setSelectedCategory(null);
    } else {
      setSelectedFamily(null);
      setSelectedCategory(null);
      setAnimatedOnly(false);
    }
  }, [query.family, query.cat, query.animated]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return ICON_DATA.filter((i) => {
      if (q && !i.name.includes(q) && !i.category.toLowerCase().includes(q) && !i.family.toLowerCase().includes(q)) {
        return false;
      }
      if (selectedFamily && norm(i.family) !== norm(selectedFamily)) {
        return false;
      }
      if (selectedCategory && norm(i.category) !== norm(selectedCategory)) {
        return false;
      }
      if (animatedOnly && !i.isAnimated) {
        return false;
      }
      return true;
    });
  }, [search, selectedFamily, selectedCategory, animatedOnly]);

  const handleSelectFamily = (f: string) => {
    if (selectedFamily && norm(selectedFamily) === norm(f)) {
      setSelectedFamily(null);
      navigate("#/icons");
    } else {
      setSelectedFamily(f);
      setSelectedCategory(null);
      setAnimatedOnly(false);
      const slug = f.toLowerCase().replace(/\s+/g, "-");
      navigate(`#/icons?family=${slug}`);
    }
  };

  const handleSelectCategory = (c: string) => {
    if (selectedCategory && norm(selectedCategory) === norm(c)) {
      setSelectedCategory(null);
      navigate("#/icons");
    } else {
      setSelectedCategory(c);
      setSelectedFamily(null);
      setAnimatedOnly(false);
      const slug = c.toLowerCase().replace(/\s+/g, "-");
      navigate(`#/icons?cat=${slug}`);
    }
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedFamily(null);
    setSelectedCategory(null);
    setAnimatedOnly(false);
    navigate("#/icons");
  };

  const handleCopy = useCallback(async (entry: IconEntry) => {
    let text = "";
    const pascalName = entry.name.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join("");
    
    if (copyFormat === "react") {
      text = `<${pascalName} size={${size}} strokeWidth={${stroke}} />`;
    } else if (copyFormat === "svg") {
      text = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}"><use href="#${entry.name}" /></svg>`;
    } else if (copyFormat === "vue") {
      text = `<${pascalName}Icon :size="${size}" :stroke-width="${stroke}" />`;
    } else if (copyFormat === "react-native") {
      text = `<${pascalName} size={${size}} strokeWidth={${stroke}} color="black" />`;
    } else {
      text = entry.name;
    }
    await navigator.clipboard.writeText(text);
    setCopiedName(entry.name);
    toast("success", `Copied ${entry.name}`);
    setTimeout(() => setCopiedName(null), 1200);
  }, [copyFormat, size, stroke, toast]);

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
              placeholder="Search by meaning..." 
              className="w-full rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] py-1.5 pl-8 pr-7 text-xs text-[var(--uf-text)] placeholder-[var(--uf-text-muted)] focus:border-[var(--uf-accent)] focus:outline-none"
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
        
        <div className="flex-1 overflow-y-auto px-2 py-4 pb-20 scrollbar-thin">
          <div className="space-y-1 mb-6">
            <SidebarItem 
              label="Browse all" 
              count={17335} 
              active={!selectedFamily && !selectedCategory && !animatedOnly} 
              onClick={resetFilters}
            />
            <SidebarItem 
              label="Animated" 
              count={1867} 
              active={animatedOnly}
              onClick={() => {
                setAnimatedOnly(true);
                setSelectedFamily(null);
                setSelectedCategory(null);
                navigate("#/icons?animated=true");
              }}
            />
          </div>

          <div className="px-3 mb-2 flex items-center justify-between text-xs font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider">
            <span>Families</span>
            {selectedFamily && (
              <button type="button" onClick={() => { setSelectedFamily(null); navigate("#/icons"); }} className="text-[10px] text-[var(--uf-accent)] hover:underline lowercase">
                clear
              </button>
            )}
          </div>
          <div className="space-y-1 mb-6">
            {["Tabler", "Hugeicons", "Lucide", "Remix", "Phosphor", "Heroicons", "Material Line"].map((f) => (
              <SidebarItem 
                key={f}
                label={f} 
                active={selectedFamily !== null && norm(selectedFamily) === norm(f)}
                onClick={() => handleSelectFamily(f)}
              />
            ))}
          </div>

          <div className="px-3 mb-2 flex items-center justify-between text-xs font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider">
            <span>Categories</span>
            {selectedCategory && (
              <button type="button" onClick={() => { setSelectedCategory(null); navigate("#/icons"); }} className="text-[10px] text-[var(--uf-accent)] hover:underline lowercase">
                clear
              </button>
            )}
          </div>
          <div className="space-y-1">
            {["Interface General", "Arrows", "Devices & Signals", "Typography", "Folders & Files", "Social Media & Brands", "Communication", "Layout"].map((c) => (
              <SidebarItem 
                key={c}
                label={c} 
                active={selectedCategory !== null && norm(selectedCategory) === norm(c)}
                onClick={() => handleSelectCategory(c)}
              />
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[var(--uf-bg)] relative">
        <div className="px-8 py-8">
          <h1 className="text-3xl font-black text-[var(--uf-text)]">Icons</h1>
          <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">
            Browse 17,335 icons from 7 families. Click to copy. Search by meaning.
          </p>
        </div>

        {/* Icon grid */}
        <div className="flex-1 overflow-y-auto scrollbar-thin px-8 pb-32">
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1">
            {filtered.map((entry) => (
              <button
                key={entry.name}
                onClick={() => handleCopy(entry)}
                title={entry.name}
                className={`group relative flex flex-col items-center justify-center rounded-lg py-4 transition ${
                  copiedName === entry.name
                    ? "bg-[var(--uf-accent)]/10 ring-1 ring-[var(--uf-accent)]"
                    : "hover:bg-[var(--uf-panel)] border border-transparent hover:border-[var(--uf-border)]"
                }`}
              >
                {copiedName === entry.name ? (
                  <Icon icon={CheckCircle} size={size} strokeWidth={stroke} className="text-[var(--uf-accent)]" />
                ) : (
                  <Icon icon={entry.icon} size={size} strokeWidth={stroke} className="text-[var(--uf-text-secondary)] group-hover:text-[var(--uf-text)]" />
                )}
                
                {/* Hover Details tooltip */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-10 w-28 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all pointer-events-none">
                  <div className="bg-[var(--uf-panel)] border border-[var(--uf-border)] rounded-md shadow-xl p-1.5 flex flex-col items-center gap-1 text-center">
                    <span className="rounded bg-white/5 px-1.5 py-0.5 text-[8px] font-semibold text-[var(--uf-text-muted)] uppercase tracking-wider">{entry.family}</span>
                    <span className="text-[9px] font-medium text-[var(--uf-text)] truncate w-full">{entry.name}</span>
                    <span className="text-[8px] text-[var(--uf-accent)]">Details ›</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Floating Toolbar */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="flex items-center gap-2 rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)]/80 p-2 shadow-2xl backdrop-blur-xl">
            {/* Style */}
            <div className="flex items-center gap-1 border-r border-[var(--uf-border)] pr-2">
              <span className="px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--uf-text-muted)]">Style</span>
              <select className="appearance-none bg-transparent pl-2 pr-6 py-1.5 text-xs font-medium text-[var(--uf-text)] outline-none hover:bg-white/[0.04] rounded-md transition cursor-pointer">
                <option>Outlined</option>
                <option>Filled</option>
                <option>Duotone</option>
              </select>
            </div>
            
            {/* Size */}
            <div className="flex items-center gap-1 border-r border-[var(--uf-border)] px-2">
              <span className="px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--uf-text-muted)]">Size</span>
              <select 
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="appearance-none bg-transparent pl-2 pr-6 py-1.5 text-xs font-medium text-[var(--uf-text)] outline-none hover:bg-white/[0.04] rounded-md transition cursor-pointer"
              >
                <option value={16}>16px</option>
                <option value={20}>20px</option>
                <option value={24}>24px</option>
                <option value={32}>32px</option>
              </select>
            </div>

            {/* Stroke */}
            <div className="flex items-center gap-1 border-r border-[var(--uf-border)] px-2">
              <span className="px-2 text-[10px] font-semibold uppercase tracking-wider text-[var(--uf-text-muted)]">Stroke</span>
              <select 
                value={stroke}
                onChange={(e) => setStroke(Number(e.target.value))}
                className="appearance-none bg-transparent pl-2 pr-6 py-1.5 text-xs font-medium text-[var(--uf-text)] outline-none hover:bg-white/[0.04] rounded-md transition cursor-pointer"
              >
                <option value={1}>1px</option>
                <option value={1.5}>1.5px</option>
                <option value={2}>2px</option>
                <option value={2.5}>2.5px</option>
              </select>
            </div>

            {/* Copy Format */}
            <div className="pl-2 relative group">
              <select 
                value={copyFormat}
                onChange={(e) => setCopyFormat(e.target.value as CopyFormat)}
                className="appearance-none bg-[var(--uf-accent)] pl-4 pr-8 py-2 text-xs font-semibold text-white outline-none hover:bg-[var(--uf-accent-hover)] rounded-xl transition cursor-pointer"
              >
                <option value="react">Copy as React ✓</option>
                <option value="svg">Copy as SVG</option>
                <option value="vue">Copy as Vue</option>
                <option value="react-native">Copy as React Native</option>
                <option value="name">Copy name</option>
              </select>
              <Icon icon={ChevronDown} size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none" />
            </div>
          </div>
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
