import { useState, useEffect, lazy, Suspense, useDeferredValue } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { CommandPalette } from "./components/CommandPalette";
import { BookmarksDrawer } from "./components/BookmarksDrawer";
import { CliTerminalModal } from "./components/CliTerminalModal";
import { PreviewModal } from "./components/PreviewModal";
import { MetaHead } from "./components/ui/MetaHead";
import { CATEGORY_BY_SLUG } from "./data/categories";
import { useRoute } from "./lib/router";
import { Skeleton } from "./components/ui";
import { useDebouncedValue } from "./hooks/useDebouncedValue";
import type { SortKey } from "./components/Tabs";
import type { ViewMode } from "./components/ViewModeToggle";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Lazy loaded pages
const CommunityPage = lazy(() => import("./pages/CommunityPage").then((m) => ({ default: m.CommunityPage })));
const ComponentDetailPage = lazy(() => import("./pages/ComponentDetailPage").then((m) => ({ default: m.ComponentDetailPage })));
const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const TemplatesPage = lazy(() => import("./pages/TemplatesPage").then((m) => ({ default: m.TemplatesPage })));
const ThemesPage = lazy(() => import("./pages/ThemesPage").then((m) => ({ default: m.ThemesPage })));
const MagicChatPage = lazy(() => import("./pages/MagicChatPage").then((m) => ({ default: m.MagicChatPage })));
const PublishPage = lazy(() => import("./pages/PublishPage").then((m) => ({ default: m.PublishPage })));
const DashboardPage = lazy(() => import("./pages/DashboardPage").then((m) => ({ default: m.DashboardPage })));
const SignInPage = lazy(() => import("./pages/SignInPage").then((m) => ({ default: m.SignInPage })));
const AgentRegistryPage = lazy(() => import("./pages/AgentRegistryPage").then((m) => ({ default: m.AgentRegistryPage })));
const AgentDetailPage = lazy(() => import("./pages/AgentDetailPage").then((m) => ({ default: m.AgentDetailPage })));
const MCPPage = lazy(() => import("./pages/MCPPage").then((m) => ({ default: m.MCPPage })));
const DocsPage = lazy(() => import("./pages/DocsPage").then((m) => ({ default: m.DocsPage })));
const PricingPage = lazy(() => import("./pages/PricingPage").then((m) => ({ default: m.PricingPage })));
const AuthorsPage = lazy(() => import("./pages/AuthorsPage").then((m) => ({ default: m.AuthorsPage })));
const LibrariesPage = lazy(() => import("./pages/LibrariesPage").then((m) => ({ default: m.LibrariesPage })));
const AppsPage = lazy(() => import("./pages/AppsPage").then((m) => ({ default: m.AppsPage })));
const IconsPage = lazy(() => import("./pages/IconsPage").then((m) => ({ default: m.IconsPage })));
const GradientsPage = lazy(() => import("./pages/GradientsPage").then((m) => ({ default: m.GradientsPage })));
const AsciiPage = lazy(() => import("./pages/AsciiPage").then((m) => ({ default: m.AsciiPage })));
const DesignBugBotPage = lazy(() => import("./pages/DesignBugBotPage").then((m) => ({ default: m.DesignBugBotPage })));
const ComponentsLandingPage = lazy(() => import("./pages/ComponentsLandingPage").then((m) => ({ default: m.ComponentsLandingPage })));
const BookmarksPage = lazy(() => import("./pages/BookmarksPage").then((m) => ({ default: m.BookmarksPage })));

/**
 * UIForge Root Shell
 *
 * Renders the global header + drill-down sidebar + main content area.
 * The sidebar is always visible and drills down into sub-sections.
 */
export default function App() {
  const { route, query, setQuery, replaceQuery } = useRoute();

  // Hydrate states from query
  const activeSlug = query.cat || null;
  const sort = (query.sort as SortKey) || "featured";
  const search = query.q || "";
  const viewMode: ViewMode = query.view === "scroll" ? "scroll" : "page";

  // Two-layer input smoothing
  const debouncedSearch = useDebouncedValue(search, 150);
  const deferredSearch = useDeferredValue(debouncedSearch);

  const setSort = (s: SortKey) => setQuery({ sort: s });
  const setViewMode = (v: ViewMode) => {
    if (v === "page") replaceQuery({ view: "" });
    else replaceQuery({ view: v });
  };

  const [cmdOpen, setCmdOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [cliModal, setCliModal] = useState<{
    isOpen: boolean;
    componentId?: string;
    componentTitle?: string;
  }>({
    isOpen: false,
    componentId: "btn-shiny-01",
    componentTitle: "Shiny Button",
  });

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

  // Listen for CLI Terminal open events
  useEffect(() => {
    function handleOpenCli(e: Event) {
      const customEvent = e as CustomEvent<{ componentId?: string; componentTitle?: string }>;
      setCliModal({
        isOpen: true,
        componentId: customEvent.detail?.componentId || "btn-shiny-01",
        componentTitle: customEvent.detail?.componentTitle || "Shiny Button",
      });
    }
    window.addEventListener("twentyfirst:open-cli", handleOpenCli);
    return () => window.removeEventListener("twentyfirst:open-cli", handleOpenCli);
  }, []);

  const activeCategory = activeSlug ? CATEGORY_BY_SLUG[activeSlug] : null;

  // Pages that show the sidebar
  const showSidebar = ![
    "signin",
    "detail",
  ].includes(route.page);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--uf-bg)] text-[var(--uf-text)]">
      <MetaHead
        title={activeCategory ? `${activeCategory.name} Components` : undefined}
        description={activeCategory ? `Browse ${activeCategory.count}+ ${activeCategory.name.toLowerCase()} components and variants.` : undefined}
      />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <TopBar
        query={search}
        onQueryChange={(q) => setQuery({ q })}
        onOpenMobileNav={() => setNavOpen(true)}
      />

      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
      <BookmarksDrawer />
      <PreviewModal />
      <CliTerminalModal
        isOpen={cliModal.isOpen}
        onClose={() => setCliModal((prev) => ({ ...prev, isOpen: false }))}
        componentId={cliModal.componentId}
        componentTitle={cliModal.componentTitle}
      />

      <div className="flex flex-1 relative">
        {showSidebar && (
          <Sidebar
            activeSlug={activeSlug}
            onSelect={(slug) => {
              if (!slug) replaceQuery({ cat: "" });
              else replaceQuery({ cat: slug });
              setNavOpen(false);
            }}
            open={navOpen}
            onClose={() => setNavOpen(false)}
          />
        )}

        {/* Main Content Area */}
        <main id="main-content" className="min-w-0 flex-1 outline-none" tabIndex={-1}>
          <ErrorBoundary key={route.page + (route.componentId || "") + (route.categorySlug || "")}>
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
              {route.page === "landing" ? (
                <HomePage />
              ) : route.page === "detail" && route.componentId ? (
                <ComponentDetailPage
                  componentId={route.componentId}
                />
              ) : route.page === "templates" ? (
                <TemplatesPage />
              ) : route.page === "themes" || route.page === "themes-editor" ? (
                <ThemesPage />
              ) : route.page === "magic" || route.page === "ai" ? (
                <MagicChatPage />
              ) : route.page === "publish" ? (
                <PublishPage />
              ) : route.page === "dashboard" || route.page === "studio" ? (
                <DashboardPage />
              ) : route.page === "signin" ? (
                <SignInPage />
              ) : route.page === "agents" ? (
                <AgentRegistryPage />
              ) : route.page === "agent-detail" && route.agentId ? (
                <AgentDetailPage agentId={route.agentId} />
              ) : route.page === "mcp" ? (
                <MCPPage />
              ) : route.page === "design-bug-bot" ? (
                <DesignBugBotPage />
              ) : route.page === "docs" ? (
                <DocsPage />
              ) : route.page === "pricing" ? (
                <PricingPage />
              ) : route.page === "authors" ? (
                <AuthorsPage />
              ) : route.page === "libraries" ? (
                <LibrariesPage />
              ) : route.page === "apps" ? (
                <AppsPage />
              ) : route.page === "icons" ? (
                <IconsPage />
              ) : route.page === "gradients" ? (
                <GradientsPage />
              ) : route.page === "ascii" ? (
                <AsciiPage />
              ) : route.page === "bookmarks" ? (
                <BookmarksPage />
              ) : route.page === "components-featured" || route.page === "components-newest" ? (
                <ComponentsLandingPage />
              ) : (route.page === "components" || route.page === "home") ? (
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
          </ErrorBoundary>
        </main>
      </div>

      <Footer />
    </div>
  );
}
