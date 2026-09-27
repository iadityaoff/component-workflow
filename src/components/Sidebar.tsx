/**
 * UIForge Drill-Down Sidebar
 *
 * A 240px collapsible sidebar with drill-down navigation.
 * Clicking items with `›` replaces the sidebar content with a sub-view.
 * Sub-views have a `‹ Back` header with slide transitions.
 *
 * Sections:
 *   Home
 *   ─ Explore ─
 *     Components ›  (drills into components sub-sidebar)
 *     Themes ›
 *     Templates ›
 *     Apps (New) ›
 *     Icons (New) ›
 *     Bookmarks
 *   ─ Build ─
 *     Creator Studio ›
 *     AI (generator) ›
 *     Design Bug Bot
 *     CLI & MCP
 *   ─ Publish button ─
 *   ─ Promo card ─
 */

import { useState, useMemo, useCallback, useEffect } from "react";
import {
  Home,
  Layers,
  Palette,
  LayoutTemplate,
  AppWindow,
  Smile,
  Bookmark,
  Wand2,
  Sparkles,
  Bot,
  Terminal,
  Upload,
  ArrowLeft,
  ChevronRight,
  Search,
  ArrowUpRight,
  LayoutGrid,
  List,
  Flame,
  Users,
  Library,
  Star,
  X,
} from "lucide-react";
import { CATEGORY_GROUPS, ALL_CATEGORIES, type Category } from "../data/categories";
import { useRoute } from "../lib/router";
import { Icon } from "./ui/Icon";

/* ── Types ── */
type SidebarView =
  | "main"
  | "components"
  | "themes"
  | "templates"
  | "apps"
  | "icons"
  | "studio"
  | "ai";

interface SidebarProps {
  activeSlug: string | null;
  onSelect: (slug: string | null) => void;
  open?: boolean;
  onClose?: () => void;
}

/* ── Category icon map ── */
const CATEGORY_ICONS: Record<string, typeof Home> = {
  heroes: LayoutTemplate,
  buttons: Layers,
  cards: LayoutGrid,
};

/* ── Main Sidebar ── */
export function Sidebar({ activeSlug, onSelect, open = false, onClose }: SidebarProps) {
  const [view, setView] = useState<SidebarView>("main");
  const [slideDirection, setSlideDirection] = useState<"right" | "left">("right");
  const { navigate, route, query } = useRoute();
  const [collapsed, setCollapsed] = useState(false);
  const [promoCollapsed, setPromoCollapsed] = useState(false);

  // Sync drill-down view with active route
  useEffect(() => {
    if (route.page === "themes" || route.page === "themes-editor") {
      setView("themes");
    } else if (route.page === "templates") {
      setView("templates");
    } else if (route.page === "apps") {
      setView("apps");
    } else if (route.page === "icons") {
      setView("icons");
    } else if (route.page === "studio" || route.page === "dashboard") {
      setView("studio");
    } else if (route.page === "ai" || route.page === "magic") {
      setView("ai");
    } else if (route.page === "landing" || route.page === "home") {
      setView("main");
    }
  }, [route.page]);

  const drillInto = useCallback((target: SidebarView) => {
    setSlideDirection("right");
    setView(target);
  }, []);

  const drillBack = useCallback(() => {
    setSlideDirection("left");
    setView("main");
  }, []);

  const handleNav = useCallback((hash: string) => {
    navigate(hash);
    onClose?.();
  }, [navigate, onClose]);

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={[
          "fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={onClose}
        aria-hidden
      />

      <aside
        className={[
          "fixed top-14 z-40 flex h-[calc(100dvh-3.5rem)] flex-col border-r bg-[var(--uf-bg)] transition-all duration-200 overflow-hidden",
          "border-[var(--uf-border)]",
          collapsed ? "w-0 lg:w-0" : "w-60",
          "lg:sticky lg:top-14 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
        aria-label="Navigation sidebar"
      >
        {/* View container with overflow hidden for slide transitions */}
        <div className="relative flex-1 overflow-hidden">
          {view === "main" && (
            <MainSidebar
              onDrill={drillInto}
              onNav={handleNav}
              route={route}
              promoCollapsed={promoCollapsed}
              onTogglePromo={() => setPromoCollapsed(!promoCollapsed)}
            />
          )}
          {view === "components" && (
            <ComponentsSidebar
              onBack={drillBack}
              activeSlug={activeSlug}
              onSelect={(slug) => {
                onSelect(slug);
                onClose?.();
              }}
              onNav={handleNav}
              direction={slideDirection}
            />
          )}
          {view === "themes" && (
            <SubSidebar
              title="Themes"
              onBack={drillBack}
              direction={slideDirection}
            >
              <SidebarItem 
                label="All themes" 
                onClick={() => handleNav("#/themes")} 
                active={route.page === "themes" && !query.tag && !query.tab} 
              />
              <SidebarItem 
                label="My themes" 
                onClick={() => handleNav("#/themes?tab=mine")} 
                active={route.page === "themes" && query.tab === "mine"}
              />
              <SidebarItem 
                label="Bookmarked" 
                onClick={() => handleNav("#/themes?tab=bookmarked")} 
                active={route.page === "themes" && query.tab === "bookmarked"}
              />
              <SidebarItem 
                label="+ Create theme" 
                onClick={() => handleNav("#/themes/editor")} 
                active={route.page === "themes-editor"}
                accent 
              />
              <SidebarSectionHeader label="Tags" />
              {THEME_TAGS.map((t) => {
                const isTagActive = route.page === "themes" && (
                  query.tag?.toLowerCase() === t.slug || 
                  query.tag?.toLowerCase() === t.name.toLowerCase()
                );
                return (
                  <SidebarItem 
                    key={t.name} 
                    label={t.name} 
                    count={t.count} 
                    active={isTagActive}
                    onClick={() => handleNav(`#/themes?tag=${t.slug}`)} 
                  />
                );
              })}
            </SubSidebar>
          )}
          {view === "templates" && (
            <SubSidebar
              title="Templates"
              onBack={drillBack}
              direction={slideDirection}
            >
              <SidebarItem 
                label="All Templates" 
                onClick={() => handleNav("#/templates")} 
                active={route.page === "templates" && !query.filter && !query.cat} 
              />
              <SidebarItem 
                label="Included in Plan" 
                onClick={() => handleNav("#/templates?filter=plan")} 
                active={route.page === "templates" && query.filter === "plan"}
              />
              <SidebarItem 
                label="Free" 
                onClick={() => handleNav("#/templates?filter=free")} 
                active={route.page === "templates" && query.filter === "free"}
              />
              <SidebarSectionHeader label="Marketing" />
              {TEMPLATE_MARKETING.map((t) => {
                const isActive = Boolean(route.page === "templates" && (
                  query.cat?.toLowerCase() === t.slug || 
                  query.cat?.toLowerCase() === t.name.toLowerCase() ||
                  (query.cat && query.cat.toLowerCase().replace(/[^a-z0-9]/g, "") === t.name.toLowerCase().replace(/[^a-z0-9]/g, ""))
                ));
                return (
                  <SidebarItem 
                    key={t.name} 
                    label={t.name} 
                    count={t.count} 
                    active={isActive}
                    onClick={() => handleNav(`#/templates?cat=${t.slug}`)} 
                  />
                );
              })}
              <SidebarSectionHeader label="Applications" />
              {TEMPLATE_APPS.map((t) => {
                const isActive = Boolean(route.page === "templates" && (
                  query.cat?.toLowerCase() === t.slug || 
                  query.cat?.toLowerCase() === t.name.toLowerCase() ||
                  (query.cat && query.cat.toLowerCase().replace(/[^a-z0-9]/g, "") === t.name.toLowerCase().replace(/[^a-z0-9]/g, "")) ||
                  (t.slug === "authentication" && query.cat?.toLowerCase() === "auth")
                ));
                return (
                  <SidebarItem 
                    key={t.name} 
                    label={t.name} 
                    count={t.count} 
                    active={isActive}
                    onClick={() => handleNav(`#/templates?cat=${t.slug}`)} 
                  />
                );
              })}
            </SubSidebar>
          )}
          {view === "apps" && (
            <SubSidebar
              title="Apps"
              onBack={drillBack}
              direction={slideDirection}
            >
              <SidebarItem 
                label="All apps" 
                count={138} 
                onClick={() => handleNav("#/apps")} 
                active={route.page === "apps" && !query.group && !query.cat}
              />
              <SidebarItem 
                label="Business apps" 
                count={64} 
                onClick={() => handleNav("#/apps?group=business")} 
                active={route.page === "apps" && query.group === "business"}
              />
              <SidebarItem 
                label="Personal apps" 
                count={74} 
                onClick={() => handleNav("#/apps?group=personal")} 
                active={route.page === "apps" && query.group === "personal"}
              />
              <SidebarSectionHeader label="Business / SaaS" />
              {APPS_BUSINESS.map((a) => {
                const cleanQuery = query.cat?.toLowerCase().replace(/[^a-z0-9]/g, "");
                const cleanName = a.name.toLowerCase().replace(/[^a-z0-9]/g, "");
                const isActive = route.page === "apps" && (
                  query.cat?.toLowerCase() === a.slug || 
                  query.cat?.toLowerCase() === a.name.toLowerCase() ||
                  cleanQuery === cleanName ||
                  (a.slug === "booking" && (cleanQuery === "booking" || cleanQuery === "bookingandscheduling"))
                );
                return (
                  <SidebarItem 
                    key={a.name} 
                    label={a.name} 
                    count={a.count} 
                    active={isActive}
                    onClick={() => handleNav(`#/apps?cat=${a.slug}`)} 
                  />
                );
              })}
              <SidebarSectionHeader label="Personal apps" />
              {APPS_PERSONAL.map((a) => {
                const cleanQuery = query.cat?.toLowerCase().replace(/[^a-z0-9]/g, "");
                const cleanName = a.name.toLowerCase().replace(/[^a-z0-9]/g, "");
                const isActive = route.page === "apps" && (
                  query.cat?.toLowerCase() === a.slug || 
                  query.cat?.toLowerCase() === a.name.toLowerCase() ||
                  cleanQuery === cleanName ||
                  (a.slug === "utilities" && (cleanQuery === "utilities" || cleanQuery === "everydayutilities")) ||
                  (a.slug === "finance" && (cleanQuery === "finance" || cleanQuery === "personalfinance")) ||
                  (a.slug === "files" && (cleanQuery === "files" || cleanQuery === "filesandsync")) ||
                  (a.slug === "photos" && (cleanQuery === "photos" || cleanQuery === "cameraandphotos")) ||
                  (a.slug === "reading" && (cleanQuery === "reading" || cleanQuery === "bookmarksandreading")) ||
                  (a.slug === "media" && (cleanQuery === "media" || cleanQuery === "musicandmedia")) ||
                  (a.slug === "fitness" && (cleanQuery === "fitness" || cleanQuery === "healthandfitness"))
                );
                return (
                  <SidebarItem 
                    key={a.name} 
                    label={a.name} 
                    count={a.count} 
                    active={isActive}
                    onClick={() => handleNav(`#/apps?cat=${a.slug}`)} 
                  />
                );
              })}
            </SubSidebar>
          )}
          {view === "icons" && (
            <SubSidebar
              title="Icons"
              onBack={drillBack}
              direction={slideDirection}
            >
              <SidebarItem 
                label="Browse all" 
                count={17335} 
                onClick={() => handleNav("#/icons")} 
                active={route.page === "icons" && !query.animated && !query.family && !query.cat}
              />
              <SidebarItem 
                label="Animated" 
                count={1867} 
                onClick={() => handleNav("#/icons?animated=true")} 
                active={route.page === "icons" && query.animated === "true"}
              />
              <SidebarSectionHeader label="Families" />
              {ICON_FAMILIES.map((f) => (
                <SidebarItem 
                  key={f.name} 
                  label={f.name} 
                  count={f.count} 
                  active={route.page === "icons" && (query.family?.toLowerCase() === f.slug || query.family?.toLowerCase() === f.name.toLowerCase())}
                  onClick={() => handleNav(`#/icons?family=${f.slug}`)} 
                />
              ))}
              <SidebarSectionHeader label="Categories" />
              {ICON_CATEGORIES.map((c) => {
                const cleanQuery = query.cat?.toLowerCase().replace(/[^a-z0-9]/g, "");
                const cleanName = c.name.toLowerCase().replace(/[^a-z0-9]/g, "");
                const isActive = route.page === "icons" && (
                  query.cat?.toLowerCase() === c.slug ||
                  cleanQuery === cleanName
                );
                return (
                  <SidebarItem 
                    key={c.name} 
                    label={c.name} 
                    active={isActive}
                    onClick={() => handleNav(`#/icons?cat=${c.slug}`)} 
                  />
                );
              })}
            </SubSidebar>
          )}
          {view === "studio" && (
            <SubSidebar
              title="Creator Studio"
              onBack={drillBack}
              direction={slideDirection}
            >
              <SidebarItem 
                label="Overview" 
                onClick={() => handleNav("#/studio")} 
                active={route.page === "studio" && !query.tab}
              />
              <SidebarItem 
                label="Components" 
                count={0} 
                onClick={() => handleNav("#/studio?tab=components")} 
                active={route.page === "studio" && query.tab === "components"}
              />
              <SidebarItem 
                label="Libraries" 
                count={0} 
                onClick={() => handleNav("#/studio?tab=libraries")} 
                active={route.page === "studio" && query.tab === "libraries"}
              />
              <SidebarItem 
                label="Templates" 
                count={0} 
                onClick={() => handleNav("#/studio?tab=templates")} 
                active={route.page === "studio" && query.tab === "templates"}
              />
              <SidebarItem 
                label="Themes" 
                count={0} 
                onClick={() => handleNav("#/studio?tab=themes")} 
                active={route.page === "studio" && query.tab === "themes"}
              />
              <SidebarItem 
                label="Earnings" 
                onClick={() => handleNav("#/studio?tab=earnings")} 
                active={route.page === "studio" && query.tab === "earnings"}
              />
              <SidebarSectionHeader label="" />
              <SidebarItem label="API key · CLI" onClick={() => handleNav("#/mcp")} />
            </SubSidebar>
          )}
          {view === "ai" && (
            <SubSidebar
              title="AI"
              onBack={drillBack}
              direction={slideDirection}
            >
              <SidebarItem label="+ New Chat" onClick={() => handleNav("#/ai")} accent />
              <SidebarSectionHeader label="Recent" />
              <SidebarItem 
                label="Product catalog" 
                sublabel="6 months ago" 
                onClick={() => handleNav("#/ai?chat=1")} 
                active={route.page === "ai" && query.chat === "1"}
              />
              <SidebarItem 
                label="Pricing table" 
                sublabel="2 weeks ago" 
                onClick={() => handleNav("#/ai?chat=2")} 
                active={route.page === "ai" && query.chat === "2"}
              />
              <SidebarSectionHeader label="" />
              <SidebarItem 
                label="Archived" 
                onClick={() => handleNav("#/ai?tab=archived")} 
                active={route.page === "ai" && query.tab === "archived"}
              />
            </SubSidebar>
          )}
        </div>
      </aside>
    </>
  );
}

/* ════════════════════════════════════
   Main Sidebar View
   ════════════════════════════════════ */

function MainSidebar({
  onDrill,
  onNav,
  route,
  promoCollapsed,
  onTogglePromo,
}: {
  onDrill: (v: SidebarView) => void;
  onNav: (hash: string) => void;
  route: { page: string };
  promoCollapsed: boolean;
  onTogglePromo: () => void;
}) {
  return (
    <div className="flex flex-col h-full animate-fade-in">
      {/* Sidebar search */}
      <div className="px-3 py-3 border-b border-[var(--uf-border)]">
        <div className="relative">
          <Icon icon={Search} size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)]" />
          <input
            placeholder="Search components"
            className="h-8 w-full rounded-md border border-[var(--uf-border)] bg-[var(--uf-panel)] pl-8 pr-8 text-xs text-[var(--uf-text)] placeholder:text-[var(--uf-text-muted)] focus:border-[var(--uf-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--uf-accent)]/30"
          />
          <kbd className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-1 py-0.5 text-[9px] font-medium text-[var(--uf-text-muted)]">/</kbd>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto scrollbar-thin px-2 py-2 space-y-0.5">
        {/* Home */}
        <SidebarNavItem
          icon={Home}
          label="Home"
          onClick={() => onNav("#/")}
          active={route.page === "landing"}
        />

        {/* Explore */}
        <SidebarSectionHeader label="Explore" />
        <SidebarNavItem
          icon={Layers}
          label="Components"
          onClick={() => onDrill("components")}
          hasChevron
        />
        <SidebarNavItem
          icon={Palette}
          label="Themes"
          onClick={() => onDrill("themes")}
          hasChevron
        />
        <SidebarNavItem
          icon={LayoutTemplate}
          label="Templates"
          onClick={() => onDrill("templates")}
          hasChevron
        />
        <SidebarNavItem
          icon={AppWindow}
          label="Apps"
          badge="New"
          onClick={() => onDrill("apps")}
          hasChevron
        />
        <SidebarNavItem
          icon={Smile}
          label="Icons"
          badge="New"
          onClick={() => onDrill("icons")}
          hasChevron
        />
        <SidebarNavItem
          icon={Bookmark}
          label="Bookmarks"
          onClick={() => onNav("#/bookmarks")}
        />

        {/* Build */}
        <SidebarSectionHeader label="Build" />
        <SidebarNavItem
          icon={Wand2}
          label="Creator Studio"
          onClick={() => onDrill("studio")}
          hasChevron
        />
        <SidebarNavItem
          icon={Sparkles}
          label="AI"
          onClick={() => onDrill("ai")}
          hasChevron
        />
        <SidebarNavItem
          icon={Bot}
          label="Design Bug Bot"
          sublabel="Try free"
          onClick={() => onNav("#/design-bug-bot")}
        />
        <SidebarNavItem
          icon={Terminal}
          label="CLI & MCP"
          onClick={() => onNav("#/mcp")}
        />
      </nav>

      {/* Publish button */}
      <div className="px-3 py-2 border-t border-[var(--uf-border)]">
        <button
          onClick={() => onNav("#/publish")}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--uf-accent)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--uf-accent-hover)] active:scale-[0.98]"
        >
          <Icon icon={Upload} size={15} />
          Publish
        </button>
      </div>

      {/* Promo card */}
      {!promoCollapsed && (
        <div className="px-3 pb-3">
          <div className="relative rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.06] via-violet-500/[0.04] to-transparent p-3">
            <button
              onClick={onTogglePromo}
              className="absolute top-2 right-2 rounded p-0.5 text-[var(--uf-text-muted)] hover:text-[var(--uf-text-secondary)] transition"
              aria-label="Dismiss promo"
            >
              <span className="text-xs">—</span>
            </button>
            <div className="flex items-center gap-2">
              <div className="grid h-6 w-6 place-items-center rounded-md bg-blue-600 text-white shadow-sm">
                <Icon icon={Bot} size={13} />
              </div>
              <h4 className="text-xs font-semibold text-[var(--uf-text)]">Design Bug Bot</h4>
            </div>
            <p className="mt-1.5 text-[10px] leading-relaxed text-[var(--uf-text-secondary)]">
              Catch UI issues in pull requests and get code to fix them. 5 free reviews in your first week.
            </p>
            <button className="mt-2 rounded-md bg-blue-600 px-2.5 py-1 text-[10px] font-semibold text-white transition hover:bg-blue-500">
              Add Bug Bot ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════
   Components Sub-Sidebar
   ════════════════════════════════════ */

function ComponentsSidebar({
  onBack,
  activeSlug,
  onSelect,
  onNav,
  direction,
}: {
  onBack: () => void;
  activeSlug: string | null;
  onSelect: (slug: string | null) => void;
  onNav: (hash: string) => void;
  direction: "right" | "left";
}) {
  const [filter, setFilter] = useState("");
  const { query } = useRoute();
  const activeSort = query.sort || "featured";

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return CATEGORY_GROUPS;
    return CATEGORY_GROUPS.map((g) => ({
      ...g,
      categories: g.categories.filter((c) =>
        c.name.toLowerCase().includes(q),
      ),
    })).filter((g) => g.categories.length > 0);
  }, [filter]);

  return (
    <div className={`flex flex-col h-full ${direction === "right" ? "sidebar-enter-right" : "sidebar-enter-left"}`}>
      {/* Back header */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-3 py-2.5 border-b border-[var(--uf-border)] text-sm font-semibold text-[var(--uf-text)] hover:bg-[var(--uf-panel)] transition"
      >
        <Icon icon={ArrowLeft} size={15} className="text-[var(--uf-text-muted)]" />
        Components
      </button>

      {/* Search */}
      <div className="px-3 py-2 border-b border-[var(--uf-border)]">
        <div className="relative">
          <Icon icon={Search} size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)]" />
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search components"
            className="h-8 w-full rounded-md border border-[var(--uf-border)] bg-[var(--uf-panel)] pl-8 pr-8 text-xs text-[var(--uf-text)] placeholder:text-[var(--uf-text-muted)] focus:border-[var(--uf-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--uf-accent)]/30"
          />
          <kbd className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-1 py-0.5 text-[9px] font-medium text-[var(--uf-text-muted)]">/</kbd>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto scrollbar-thin px-2 py-2 space-y-0.5">
        {/* Quick nav */}
        <SidebarNavItem
          icon={Star}
          label="Featured"
          onClick={() => { onSelect(null); onNav("#/components/featured"); }}
          active={activeSort === "featured" && !activeSlug}
        />
        <SidebarNavItem
          icon={Flame}
          label="Newest"
          onClick={() => { onSelect(null); onNav("#/components/newest"); }}
          hasChevron
        />
        <SidebarNavItem
          icon={Users}
          label="Authors"
          onClick={() => onNav("#/authors")}
        />
        <SidebarNavItem
          icon={Library}
          label="Libraries"
          badge="Updated"
          onClick={() => onNav("#/libraries")}
          hasChevron
        />

        <div className="my-1.5" />

        {/* All components */}
        <SidebarItem
          label="All components"
          onClick={() => {
            onSelect(null);
            onNav("#/components");
          }}
          active={!activeSlug}
          bold
        />

        {/* Category groups */}
        {filtered.map((group) => (
          <div key={group.key} className="mt-2">
            <SidebarSectionHeader label={group.label} />
            {group.categories.map((cat) => (
              <SidebarItem
                key={cat.slug}
                label={cat.name}
                count={cat.count}
                isNew={cat.isNew}
                active={activeSlug === cat.slug}
                onClick={() => {
                  onSelect(cat.slug);
                  onNav(`#/components/s/${cat.slug}`);
                }}
              />
            ))}
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="px-2 py-6 text-center text-xs text-[var(--uf-text-muted)]">
            No categories match "{filter}"
          </p>
        )}
      </nav>
    </div>
  );
}

/* ════════════════════════════════════
   Generic Sub-Sidebar Wrapper
   ════════════════════════════════════ */

function SubSidebar({
  title,
  onBack,
  direction,
  children,
}: {
  title: string;
  onBack: () => void;
  direction: "right" | "left";
  children: React.ReactNode;
}) {
  return (
    <div className={`flex flex-col h-full ${direction === "right" ? "sidebar-enter-right" : "sidebar-enter-left"}`}>
      <button
        type="button"
        onClick={onBack}
        className="flex shrink-0 items-center gap-2 px-3 py-2.5 border-b border-[var(--uf-border)] text-sm font-semibold text-[var(--uf-text)] hover:bg-[var(--uf-panel)] transition"
      >
        <Icon icon={ArrowLeft} size={15} className="text-[var(--uf-text-muted)]" />
        {title}
      </button>
      <nav className="flex-1 overflow-y-auto scrollbar-thin px-2 py-2 pb-24 space-y-0.5">
        {children}
      </nav>
    </div>
  );
}

/* ════════════════════════════════════
   Sidebar Primitives
   ════════════════════════════════════ */

function SidebarNavItem({
  icon,
  label,
  onClick,
  active,
  hasChevron,
  badge,
  sublabel,
}: {
  icon: typeof Home;
  label: string;
  onClick: () => void;
  active?: boolean;
  hasChevron?: boolean;
  badge?: string;
  sublabel?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={[
        "group flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-left text-[13px] transition",
        active
          ? "bg-white/[0.08] text-[var(--uf-text)] font-medium"
          : "text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]",
      ].join(" ")}
    >
      <Icon icon={icon} size={15} className={active ? "text-[var(--uf-accent)]" : "text-[var(--uf-text-muted)]"} />
      <span className="flex-1 truncate">{label}</span>
      {sublabel && (
        <span className="text-[10px] text-[var(--uf-text-muted)]">{sublabel}</span>
      )}
      {badge && (
        <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${
          badge === "New"
            ? "bg-blue-500/15 text-blue-400"
            : "bg-emerald-500/15 text-emerald-400"
        }`}>
          {badge}
        </span>
      )}
      {hasChevron && (
        <Icon icon={ChevronRight} size={13} className="shrink-0 text-[var(--uf-text-muted)] group-hover:text-[var(--uf-text-secondary)]" />
      )}
    </button>
  );
}

function SidebarItem({
  label,
  count,
  isNew,
  active,
  onClick,
  bold,
  accent,
  sublabel,
}: {
  label: string;
  count?: number | null;
  isNew?: boolean;
  active?: boolean;
  onClick: () => void;
  bold?: boolean;
  accent?: boolean;
  sublabel?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={[
        "group flex w-full items-center justify-between rounded-md px-2.5 py-1 text-left text-[13px] transition",
        active
          ? "bg-white/[0.1] text-[var(--uf-text)] font-medium"
          : accent
            ? "text-[var(--uf-accent)] hover:bg-[var(--uf-accent-subtle)]"
            : "text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]",
        bold && !active ? "font-medium text-[var(--uf-text)]" : "",
      ].join(" ")}
    >
      <span className="truncate">{label}</span>
      <span className="flex items-center gap-1.5">
        {sublabel && (
          <span className="text-[10px] text-[var(--uf-text-muted)]">{sublabel}</span>
        )}
        {isNew ? (
          <span className="shrink-0 rounded-full bg-blue-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-blue-400">
            New
          </span>
        ) : count != null ? (
          <span className={[
            "shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium tabular-nums",
            active
              ? "bg-white/10 text-[var(--uf-text)]"
              : "text-[var(--uf-text-muted)]",
          ].join(" ")}>
            {count >= 1000 ? `${(count / 1000).toFixed(1).replace(/\.0$/, "")}K` : count}
          </span>
        ) : null}
      </span>
    </button>
  );
}

function SidebarSectionHeader({ label }: { label: string }) {
  if (!label) return <div className="my-2" />;
  return (
    <h3 className="mt-3 mb-1 px-2.5 text-[10px] font-bold uppercase tracking-wider text-[var(--uf-text-muted)]">
      {label}
    </h3>
  );
}

/* ════════════════════════════════════
   Static data for sub-sidebars
   ════════════════════════════════════ */

const THEME_TAGS = [
  { name: "Minimal", slug: "minimal", count: 377 },
  { name: "Professional", slug: "professional", count: 332 },
  { name: "Website", slug: "website", count: 118 },
  { name: "Modern", slug: "modern", count: 111 },
  { name: "Warm", slug: "warm", count: 101 },
  { name: "Dark", slug: "dark", count: 88 },
  { name: "Classic", slug: "classic", count: 77 },
  { name: "Colorful", slug: "colorful", count: 69 },
  { name: "Pastel", slug: "pastel", count: 60 },
  { name: "Monochrome", slug: "monochrome", count: 60 },
  { name: "Vibrant", slug: "vibrant", count: 49 },
  { name: "Muted", slug: "muted", count: 45 },
  { name: "Nature", slug: "nature", count: 42 },
  { name: "Retro", slug: "retro", count: 35 },
  { name: "Playful", slug: "playful", count: 35 },
  { name: "Light", slug: "light", count: 35 },
  { name: "Corporate", slug: "corporate", count: 34 },
  { name: "Brutalist", slug: "brutalist", count: 34 },
  { name: "High Contrast", slug: "high-contrast", count: 34 },
  { name: "Earthy", slug: "earthy", count: 33 },
  { name: "Neon", slug: "neon", count: 30 },
  { name: "Cyberpunk", slug: "cyberpunk", count: 19 },
  { name: "Glass", slug: "glass", count: 13 },
  { name: "Gradient", slug: "gradient", count: 6 },
];

const TEMPLATE_MARKETING = [
  { name: "Landing Page", slug: "landing-page", count: 134 },
  { name: "Marketing", slug: "marketing", count: 57 },
  { name: "Portfolio", slug: "portfolio", count: 42 },
  { name: "Startup", slug: "startup", count: 32 },
  { name: "Personal Website", slug: "personal-website", count: 28 },
  { name: "Agency", slug: "agency", count: 23 },
  { name: "Blog", slug: "blog", count: 17 },
  { name: "Documentation", slug: "documentation", count: 11 },
];

const TEMPLATE_APPS = [
  { name: "Dashboard", slug: "dashboard", count: 85 },
  { name: "SaaS", slug: "saas", count: 80 },
  { name: "Admin Panel", slug: "admin-panel", count: 73 },
  { name: "AI", slug: "ai", count: 52 },
  { name: "Boilerplate", slug: "boilerplate", count: 47 },
  { name: "Developer Tool", slug: "developer-tool", count: 33 },
  { name: "Ecommerce", slug: "ecommerce", count: 12 },
  { name: "Analytics", slug: "analytics", count: 12 },
  { name: "Chat", slug: "chat", count: 9 },
  { name: "Directory", slug: "directory", count: 7 },
  { name: "Authentication", slug: "authentication", count: 6 },
  { name: "Mobile App", slug: "mobile-app", count: 5 },
  { name: "CMS", slug: "cms", count: 5 },
];

const APPS_BUSINESS = [
  { name: "Analytics", slug: "analytics", count: 17 },
  { name: "Commerce", slug: "commerce", count: 8 },
  { name: "Automation", slug: "automation", count: 7 },
  { name: "Marketing", slug: "marketing", count: 5 },
  { name: "Team knowledge", slug: "team-knowledge", count: 5 },
  { name: "Project management", slug: "project-management", count: 4 },
  { name: "Customer support", slug: "customer-support", count: 4 },
  { name: "Booking & scheduling", slug: "booking", count: 4 },
  { name: "Team messaging", slug: "team-messaging", count: 3 },
  { name: "CRM", slug: "crm", count: 3 },
];

const APPS_PERSONAL = [
  { name: "Everyday utilities", slug: "utilities", count: 32 },
  { name: "Notes", slug: "notes", count: 8 },
  { name: "Personal finance", slug: "finance", count: 8 },
  { name: "Files and sync", slug: "files", count: 6 },
  { name: "Camera and photos", slug: "photos", count: 5 },
  { name: "Bookmarks and reading", slug: "reading", count: 5 },
  { name: "Music and media", slug: "media", count: 4 },
  { name: "Health and fitness", slug: "fitness", count: 2 },
];

const ICON_FAMILIES = [
  { name: "Tabler", slug: "tabler", count: 5130 },
  { name: "Hugeicons", slug: "hugeicons", count: 5098 },
  { name: "Lucide", slug: "lucide", count: 2743 },
  { name: "Remix", slug: "remix", count: 1669 },
  { name: "Phosphor", slug: "phosphor", count: 1512 },
  { name: "Heroicons", slug: "heroicons", count: 640 },
  { name: "Material Line", slug: "material-line", count: 543 },
];

const ICON_CATEGORIES = [
  { name: "Interface General", slug: "interface-general" },
  { name: "Arrows", slug: "arrows" },
  { name: "Devices & Signals", slug: "devices-signals" },
  { name: "Typography", slug: "typography" },
  { name: "Folders & Files", slug: "folders-files" },
  { name: "Social Media & Brands", slug: "social-media-brands" },
  { name: "Communication", slug: "communication" },
  { name: "Layout", slug: "layout" },
];

// Re-export for callers that want the type
export type { Category };
