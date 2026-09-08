import { useState, useEffect, lazy, Suspense, useDeferredValue } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { AnnouncementBanner } from "./components/AnnouncementBanner";
import { Footer } from "./components/Footer";
import { CommandPalette } from "./components/CommandPalette";
import { MetaHead } from "./components/ui/MetaHead";
import { CATEGORY_BY_SLUG } from "./data/categories";
import { useRoute } from "./lib/router";
import { Skeleton } from "./components/ui";
import { useDebouncedValue } from "./hooks/useDebouncedValue";
import type { SortKey } from "./components/Tabs";
import type { ViewMode } from "./components/ViewModeToggle";

// Lazy loaded pages (Fixes B-16 and B-25 Bundle Size Optimization)
const CommunityPage = lazy(() => import("./pages/CommunityPage").then((m) => ({ default: m.CommunityPage })));
const ComponentDetailPage = lazy(() => import("./pages/ComponentDetailPage").then((m) => ({ default: m.ComponentDetailPage })));
const MagicChatPage = lazy(() => import("./pages/MagicChatPage").then((m) => ({ default: m.MagicChatPage })));
const PublishPage = lazy(() => import("./pages/PublishPage").then((m) => ({ default: m.PublishPage })));
const DashboardPage = lazy(() => import("./pages/DashboardPage").then((m) => ({ default: m.DashboardPage })));
const SignInPage = lazy(() => import("./pages/SignInPage").then((m) => ({ default: m.SignInPage })));
const AgentRegistryPage = lazy(() => import("./pages/AgentRegistryPage").then((m) => ({ default: m.AgentRegistryPage })));
const AgentDetailPage = lazy(() => import("./pages/AgentDetailPage").then((m) => ({ default: m.AgentDetailPage })));
const MCPPage = lazy(() => import("./pages/MCPPage").then((m) => ({ default: m.MCPPage })));
const DocsPage = lazy(() => import("./pages/DocsPage").then((m) => ({ default: m.DocsPage })));
const PricingPage = lazy(() => import("./pages/PricingPage").then((m) => ({ default: m.PricingPage })));

/**
 * Root shell — renders Sidebar + TopBar chrome around either:
 *   • CommunityPage (the marketplace grid)          — route: #/
 *   • ComponentDetailPage (single component view)   — route: #/component/:id
 */
export default function App() {
  const { route, query, setQuery, replaceQuery } = useRoute();

  // Hydrate states from query via router, fallback to default (Fixes B-05)
  const activeSlug = query.cat || null;
  const sort = (query.sort as SortKey) || "featured";
  const search = query.q || "";
  const viewMode: ViewMode = query.view === "scroll" ? "scroll" : "page";

  // Two-layer input smoothing:
  const debouncedSearch = useDebouncedValue(search, 150);
  const deferredSearch = useDeferredValue(debouncedSearch);

  // Sync sort to URL
  const setSort = (s: SortKey) => setQuery({ sort: s });
  // Sync viewMode to URL (default is page, so clear if page)
  const setViewMode = (v: ViewMode) => {
    if (v === "page") replaceQuery({ view: "" });
    else replaceQuery({ view: v });
  };

  const [cmdOpen, setCmdOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  // Keyboard shortcut for Command Palette
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const activeCategory = activeSlug ? CATEGORY_BY_SLUG[activeSlug] : null;

  return (
    <div className="flex min-h-screen flex-col bg-surface-1 text-ink-900 dark:bg-ink-950 dark:text-ink-100">
      <MetaHead 
        title={activeCategory ? `${activeCategory.name} Components` : undefined}
        description={activeCategory ? `Browse ${activeCategory.count}+ ${activeCategory.name.toLowerCase()} components and variants.` : undefined}
      />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <AnnouncementBanner />

      <TopBar
        query={search}
        onQueryChange={(q) => setQuery({ q })}
        onOpenMobileNav={() => setNavOpen(true)}
      />

      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />

      <div className="flex flex-1 relative">
        {route.page === "home" && (
          <Sidebar
            activeSlug={activeSlug}
            onSelect={(slug) => {
              if (!slug) replaceQuery({ cat: "" });
              else replaceQuery({ cat: slug });
              setNavOpen(false); // Auto-close on mobile
            }}
            open={navOpen}
            onClose={() => setNavOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main id="main-content" className="min-w-0 flex-1 outline-none" tabIndex={-1}>
          <Suspense fallback={
            <div className="flex-1 p-8 space-y-6">
              <Skeleton className="h-40 w-full max-w-3xl" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Skeleton className="h-64" />
                <Skeleton className="h-64" />
                <Skeleton className="h-64" />
              </div>
            </div>
          }>
            {route.page === "detail" && route.componentId ? (
              <ComponentDetailPage 
                componentId={route.componentId} 
              />
            ) : route.page === "magic" ? (
              <MagicChatPage />
            ) : route.page === "publish" ? (
              <PublishPage />
            ) : route.page === "dashboard" ? (
              <DashboardPage />
            ) : route.page === "signin" ? (
              <SignInPage />
            ) : route.page === "agents" ? (
              <AgentRegistryPage />
            ) : route.page === "agent-detail" && route.agentId ? (
              <AgentDetailPage agentId={route.agentId} />
            ) : route.page === "mcp" ? (
              <MCPPage />
            ) : route.page === "docs" ? (
              <DocsPage />
            ) : route.page === "pricing" ? (
              <PricingPage />
            ) : route.page === "home" ? (
              <CommunityPage 
                activeSlug={activeSlug}
                deferredSearch={deferredSearch}
                sort={sort}
                setSort={setSort}
                viewMode={viewMode}
                setViewMode={setViewMode}
              />
            ) : null}
          </Suspense>
        </main>
      </div>

      <Footer />
    </div>
  );
}
