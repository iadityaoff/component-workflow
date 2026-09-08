import { useMemo, useState } from "react";
import { CATEGORY_GROUPS, type Category } from "../data/categories";

interface Props {
  /** Slug of the active category, or null for "all" */
  activeSlug: string | null;
  onSelect: (slug: string | null) => void;
  /** Mobile drawer state */
  open?: boolean;
  onClose?: () => void;
}

/**
 * Left sidebar — exact-style clone:
 *
 *   • Vertical list grouped by Content / Sections and UI Components
 *   • Right-aligned count badges for every category
 *   • Hover, active, and focus states
 *   • Internal filter input narrows the list within the sidebar itself
 *   • Scrolls independently of the page
 *   • Renders inline on lg+, slides in as a drawer on mobile
 */
export function Sidebar({ activeSlug, onSelect, open = false, onClose }: Props) {
  const [filter, setFilter] = useState("");

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
    <>
      {/* Mobile backdrop */}
      <div
        className={[
          "fixed inset-0 z-30 bg-ink-950/40 backdrop-blur-sm transition-opacity lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={onClose}
        aria-hidden
      />

      <aside
        className={[
          "fixed top-14 z-40 flex h-[calc(100dvh-3.5rem)] w-72 flex-col border-r border-ink-100 bg-white transition-transform dark:border-ink-800/80 dark:bg-ink-950",
          "lg:sticky lg:top-14 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        ].join(" ")}
        aria-label="Component categories"
      >
        {/* In-sidebar filter */}
        <div className="border-b border-ink-100 px-4 py-3 dark:border-ink-800/80">
          <label className="sr-only" htmlFor="sidebar-filter">
            Filter categories
          </label>
          <input
            id="sidebar-filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filter categories…"
            className="h-9 w-full rounded-lg border border-ink-200 bg-ink-50 px-3 text-sm placeholder:text-ink-400 focus:border-ink-400 focus:outline-none focus:ring-2 focus:ring-ink-900/10 dark:border-ink-800 dark:bg-ink-900 dark:placeholder:text-ink-500 dark:focus:border-ink-600 dark:focus:ring-white/10"
          />
        </div>

        <nav className="scrollbar-thin flex-1 overflow-y-auto px-2 py-3">
          {/* "All components" pseudo-row */}
          <SidebarRow
            name="All components"
            count={null}
            active={activeSlug === null}
            onClick={() => {
              onSelect(null);
              onClose?.();
            }}
            emphasize
          />

          {filtered.map((group) => (
            <div key={group.key} className="mt-5 first:mt-3">
              <h3 className="mb-1 px-3 text-[11px] font-semibold uppercase tracking-wider text-ink-400 dark:text-ink-500">
                {group.label}
              </h3>
              <ul className="flex flex-col gap-0.5">
                {group.categories.map((cat) => (
                  <li key={cat.slug}>
                    <SidebarRow
                      name={cat.name}
                      count={cat.count}
                      active={activeSlug === cat.slug}
                      onClick={() => {
                        onSelect(cat.slug);
                        onClose?.();
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {filtered.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-ink-400">
              No categories match “{filter}”.
            </p>
          )}
        </nav>
      </aside>
    </>
  );
}

interface RowProps {
  name: string;
  /** null hides the count chip (used by "All components") */
  count: number | null;
  active: boolean;
  onClick: () => void;
  emphasize?: boolean;
}

function SidebarRow({ name, count, active, onClick, emphasize }: RowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={[
        "group flex w-full items-center justify-between gap-2 rounded-md px-3 py-1.5 text-left text-sm transition",
        active
          ? "bg-ink-900 text-white shadow-sm dark:bg-white dark:text-ink-900"
          : "text-ink-700 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-900",
        emphasize && !active ? "font-medium text-ink-900 dark:text-white" : "",
      ].join(" ")}
    >
      <span className="truncate">{name}</span>
      {count !== null && (
        <span
          className={[
            "shrink-0 rounded-md px-1.5 py-0.5 text-[11px] font-medium tabular-nums",
            active
              ? "bg-white/15 text-white dark:bg-ink-900/10 dark:text-ink-900"
              : "bg-ink-100 text-ink-500 group-hover:bg-ink-200 dark:bg-ink-900 dark:text-ink-400 dark:group-hover:bg-ink-800",
          ].join(" ")}
        >
          {count}
        </span>
      )}
    </button>
  );
}

// Re-export for callers that want the type
export type { Category };
