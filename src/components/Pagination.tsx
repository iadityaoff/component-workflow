/**
 * Pagination — compact page-nav control.
 * ───────────────────────────────────────────────────────────────────
 * Renders a "1 … 4 5 [6] 7 8 … 64" window so nav stays tidy even for
 * hundreds of pages. Keyboard accessible and aria-labelled.
 * ───────────────────────────────────────────────────────────────────
 */
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Icon } from "./ui/Icon";

interface Props {
  page?: number;        // 1-based
  currentPage?: number; // alias
  pageCount?: number;   // total pages
  totalPages?: number;  // alias
  onPageChange: (page: number) => void;
  /** Total items across all pages — shown as "Showing X–Y of Z". */
  totalItems?: number;
  pageSize?: number;
}

function buildPageWindow(page: number, pageCount: number): (number | "…")[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
  const out: (number | "…")[] = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(pageCount - 1, page + 1);
  if (start > 2) out.push("…");
  for (let i = start; i <= end; i += 1) out.push(i);
  if (end < pageCount - 1) out.push("…");
  out.push(pageCount);
  return out;
}

export function Pagination({
  page,
  currentPage,
  pageCount,
  totalPages,
  onPageChange,
  totalItems,
  pageSize = 24,
}: Props) {
  const activePage = Math.max(1, page ?? currentPage ?? 1);
  const count = Math.max(1, pageCount ?? totalPages ?? 1);

  if (count <= 1) return null;

  const total = totalItems ?? count * pageSize;
  const windowed = buildPageWindow(activePage, count);
  const first = Math.min((activePage - 1) * pageSize + 1, total);
  const last = Math.min(activePage * pageSize, total);

  const go = (target: number) => {
    const clamped = Math.min(Math.max(1, target), count);
    if (clamped !== activePage) {
      onPageChange(clamped);
      // Nudge to the top of the grid so the user doesn't stay at the
      // bottom of the previous page's content.
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Component grid pagination"
      className="mt-8 flex flex-col items-center gap-3 border-t border-ink-100 pt-6 dark:border-ink-800/80 sm:flex-row sm:justify-between"
    >
      <p className="text-xs text-ink-500 dark:text-ink-400">
        Showing <span className="font-medium text-ink-700 dark:text-ink-200">{(first ?? 0).toLocaleString()}</span>–
        <span className="font-medium text-ink-700 dark:text-ink-200">{(last ?? 0).toLocaleString()}</span> of
        <span className="font-medium text-ink-700 dark:text-ink-200"> {(total ?? 0).toLocaleString()}</span>
      </p>

      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Previous page"
          onClick={() => go(activePage - 1)}
          disabled={activePage === 1}
          className="inline-flex h-8 items-center gap-1 rounded-md border border-ink-200 bg-white px-2.5 text-xs font-medium text-ink-700 transition hover:bg-ink-50 disabled:opacity-40 disabled:cursor-not-allowed dark:border-ink-800 dark:bg-ink-950 dark:text-ink-200 dark:hover:bg-ink-900"
        >
          <Icon icon={ChevronLeft} size={14} />
          Prev
        </button>

        {windowed.map((slot, i) =>
          slot === "…" ? (
            <span key={`e${i}`} className="px-2 text-xs text-ink-400">
              …
            </span>
          ) : (
            <button
              key={slot}
              type="button"
              aria-current={slot === activePage ? "page" : undefined}
              aria-label={`Go to page ${slot}`}
              onClick={() => go(slot)}
              className={[
                "min-w-[2rem] h-8 rounded-md px-2 text-xs font-medium transition",
                slot === activePage
                  ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900"
                  : "border border-ink-200 bg-white text-ink-700 hover:bg-ink-50 dark:border-ink-800 dark:bg-ink-950 dark:text-ink-200 dark:hover:bg-ink-900",
              ].join(" ")}
            >
              {slot}
            </button>
          ),
        )}

        <button
          type="button"
          aria-label="Next page"
          onClick={() => go(activePage + 1)}
          disabled={activePage === count}
          className="inline-flex h-8 items-center gap-1 rounded-md border border-ink-200 bg-white px-2.5 text-xs font-medium text-ink-700 transition hover:bg-ink-50 disabled:opacity-40 disabled:cursor-not-allowed dark:border-ink-800 dark:bg-ink-950 dark:text-ink-200 dark:hover:bg-ink-900"
        >
          Next
          <Icon icon={ChevronRight} size={14} />
        </button>
      </div>
    </nav>
  );
}
