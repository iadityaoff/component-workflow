import React, { useState, useMemo } from "react";
import { useBookmarks } from "../lib/bookmarks";
import { useRoute } from "../lib/router";
import { useToast } from "./Toast";
import { ComponentPreview } from "./ComponentPreview";
import { CATEGORY_BY_SLUG } from "../data/categories";
import { Icon } from "./ui/Icon";
import { Bookmark, X, Copy, Check, Trash2, ExternalLink, Search, Sparkles } from "lucide-react";

export function BookmarksDrawer() {
  const { isDrawerOpen, closeDrawer, savedComponents, removeSave, clearAll } = useBookmarks();
  const { navigate } = useRoute();
  const { toast } = useToast();
  const [filterQuery, setFilterQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!filterQuery.trim()) return savedComponents;
    const q = filterQuery.toLowerCase();
    return savedComponents.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.categorySlug.toLowerCase().includes(q) ||
        c.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [savedComponents, filterQuery]);

  async function handleCopy(e: React.MouseEvent, code: string, id: string) {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      toast("success", "Component code copied to clipboard!");
      setTimeout(() => setCopiedId(null), 1400);
    } catch {
      toast("error", "Failed to copy code");
    }
  }

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <aside
          className="w-screen max-w-md bg-white dark:bg-ink-950 border-l border-ink-200 dark:border-ink-800 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out animate-slide-in-right"
          role="dialog"
          aria-label="Saved Components"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-ink-100 dark:border-ink-800/80 px-5 py-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-500">
                <Icon icon={Bookmark} size={18} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-ink-900 dark:text-white">Saved Components</h2>
                  <span className="rounded-full bg-ink-100 dark:bg-ink-800 px-2 py-0.5 text-xs font-semibold text-ink-600 dark:text-ink-400">
                    {savedComponents.length}
                  </span>
                </div>
                <p className="text-xs text-ink-500">Your personal bookmarked library</p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {savedComponents.length > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="rounded-lg px-2.5 py-1 text-xs font-medium text-ink-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition"
                  title="Clear all saved components"
                >
                  Clear all
                </button>
              )}
              <button
                type="button"
                onClick={closeDrawer}
                className="rounded-lg p-1.5 text-ink-400 hover:text-ink-700 dark:hover:text-ink-200 hover:bg-ink-100 dark:hover:bg-ink-800 transition"
                aria-label="Close drawer"
              >
                <Icon icon={X} size={18} />
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          {savedComponents.length > 0 && (
            <div className="border-b border-ink-100 dark:border-ink-800/80 px-5 py-2.5">
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-ink-400">
                  <Icon icon={Search} size={14} />
                </span>
                <input
                  type="text"
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  placeholder="Filter saved items..."
                  className="w-full rounded-lg border border-ink-200 bg-surface-1 dark:border-ink-800 dark:bg-ink-900/60 pl-8 pr-3 py-1.5 text-xs text-ink-900 dark:text-white placeholder:text-ink-400 focus:border-violet-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* Body / List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3 scrollbar-thin">
            {savedComponents.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-ink-100 dark:bg-ink-800/60 text-ink-400 mb-3">
                  <Icon icon={Bookmark} size={28} />
                </div>
                <h3 className="text-sm font-semibold text-ink-900 dark:text-white">No saved components yet</h3>
                <p className="mt-1 text-xs text-ink-500 max-w-xs">
                  Click the heart or bookmark icon on any component to save it here for quick reference and copying.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    closeDrawer();
                    navigate("#/components");
                  }}
                  className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100 transition"
                >
                  <Icon icon={Sparkles} size={14} />
                  <span>Browse Components</span>
                </button>
              </div>
            ) : filtered.length === 0 ? (
              <p className="text-center text-xs text-ink-400 py-10">No components match "{filterQuery}".</p>
            ) : (
              filtered.map((item) => {
                const cat = CATEGORY_BY_SLUG[item.categorySlug];
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      closeDrawer();
                      navigate(`#/component/${item.id}`);
                    }}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-900/60 p-3 shadow-sm hover:border-violet-500/50 hover:shadow-md transition cursor-pointer"
                  >
                    {/* Thumbnail preview */}
                    <div className="pointer-events-none mb-2.5 overflow-hidden rounded-lg bg-surface-2 dark:bg-ink-950/60 max-h-32 flex items-center justify-center">
                      <ComponentPreview kind={item.previewKind} />
                    </div>

                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <h4 className="truncate text-xs font-bold text-ink-900 dark:text-white group-hover:text-violet-500 transition-colors">
                          {item.title}
                        </h4>
                        <p className="mt-0.5 text-[11px] text-ink-500 line-clamp-1">{item.description}</p>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSave(item.id);
                        }}
                        className="text-ink-400 hover:text-red-500 p-1 rounded transition"
                        title="Remove from bookmarks"
                      >
                        <Icon icon={Trash2} size={14} />
                      </button>
                    </div>

                    {/* Meta & Actions */}
                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-ink-100 dark:border-ink-800/60 text-[10px]">
                      <span className="rounded-full bg-ink-100 dark:bg-ink-800 px-2 py-0.5 font-medium text-ink-600 dark:text-ink-400">
                        {cat?.name || item.categorySlug}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={(e) => handleCopy(e, item.code, item.id)}
                          className="inline-flex items-center gap-1 rounded-md border border-ink-200 dark:border-ink-700 bg-white dark:bg-ink-800 px-2 py-1 font-medium text-ink-700 dark:text-ink-300 hover:bg-ink-50 dark:hover:bg-ink-700 transition"
                        >
                          <Icon icon={copiedId === item.id ? Check : Copy} size={11} />
                          <span>{copiedId === item.id ? "Copied" : "Copy Code"}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {savedComponents.length > 0 && (
            <div className="border-t border-ink-100 dark:border-ink-800/80 p-4 bg-surface-2 dark:bg-ink-900/40 flex items-center justify-between text-xs">
              <span className="text-ink-500">Stored locally in your browser</span>
              <button
                type="button"
                onClick={() => {
                  closeDrawer();
                  navigate("#/components");
                }}
                className="font-semibold text-violet-600 dark:text-violet-400 hover:underline"
              >
                Explore more →
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
