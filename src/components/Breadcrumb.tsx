/**
 * Navigation breadcrumb for the detail page.
 *
 *   Components  >  Buttons  >  Primary button — minimal
 *
 * Fix:
 * B-05: Sets hash directly with proper ?cat= param so it hydrates the filter view.
 * B-07: Uses router navigate instead of raw anchors.
 */

import { useRoute } from "../lib/router";

interface Crumb {
  label: string;
  /** If provided, clicking navigates via router */
  href?: string;
}

interface Props {
  crumbs: Crumb[];
}

export function Breadcrumb({ crumbs }: Props) {
  const { navigate } = useRoute();

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && (
                <span className="text-ink-400 dark:text-ink-600" aria-hidden>
                  /
                </span>
              )}
              {crumb.href && !isLast ? (
                <button
                  type="button"
                  onClick={() => navigate(crumb.href!)}
                  className="text-ink-500 transition hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                >
                  {crumb.label}
                </button>
              ) : (
                <span
                  className={
                    isLast
                      ? "truncate font-medium text-ink-900 dark:text-white"
                      : "text-ink-500 dark:text-ink-400"
                  }
                  aria-current={isLast ? "page" : undefined}
                >
                  {crumb.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
