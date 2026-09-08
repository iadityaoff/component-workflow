import { useMemo, useState } from "react";
import { Tabs, type SortKey } from "../components/Tabs";
import { ComponentGrid } from "../components/ComponentGrid";
import { Pagination } from "../components/Pagination";
import { ViewModeToggle, type ViewMode } from "../components/ViewModeToggle";
import { ALL_COMPONENTS } from "../data/components";
import { CATEGORY_BY_SLUG, TOTAL_COMPONENT_COUNT } from "../data/categories";

// CommunityPage props interface
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
  // Page-level pagination (Fixes B-14)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredComponents = useMemo(() => {
    let result = ALL_COMPONENTS;
    if (activeSlug) {
      result = result.filter((c) => c.categorySlug === activeSlug);
    }
    if (deferredSearch) {
      const q = deferredSearch.toLowerCase();
      result = result.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.description?.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

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
  }, [activeSlug, deferredSearch, sort]);

  const activeCategory = activeSlug ? CATEGORY_BY_SLUG[activeSlug] : null;

  // Pagination logic (Fixes B-14)
  const totalItems = filteredComponents.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const displayedComponents = useMemo(() => {
    if (viewMode === "scroll") return filteredComponents;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredComponents.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredComponents, currentPage, itemsPerPage, viewMode]);

  return (
    <div className="w-full max-w-[1600px] mx-auto pb-24">
      {/* Category Header */}
      <div className="border-b border-ink-100 bg-surface-1 px-4 py-8 sm:px-6 lg:px-8 dark:border-ink-800/80">
        <h1 className="text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
          {activeCategory ? activeCategory.name : "All Components"}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-ink-600 dark:text-ink-400">
          {activeCategory
            ? `Browse ${activeCategory.count}+ ${activeCategory.name.toLowerCase()} components.`
            : `Browse ${TOTAL_COMPONENT_COUNT}+ production-ready UI components.`}
        </p>
      </div>

      <div className="px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <Tabs active={sort} onChange={setSort} count={totalItems} />
          <ViewModeToggle mode={viewMode} onChange={setViewMode} />
        </div>

        {/* The Grid */}
        <ComponentGrid items={displayedComponents} isWindowScroll={viewMode === "scroll"} />

        {/* Pagination Controls */}
        {viewMode === "page" && totalPages > 1 && (
          <div className="mt-12 flex justify-center pb-8">
            <Pagination
              page={currentPage}
              pageCount={totalPages}
              onPageChange={setCurrentPage}
              totalItems={totalItems}
              pageSize={itemsPerPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
