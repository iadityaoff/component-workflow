import React, { useRef } from "react";
import { Clock, Flame, Star, type LucideIcon } from "lucide-react";
import { Icon } from "./ui/Icon";

export type SortKey = "featured" | "newest" | "popular";

interface Props {
  active?: SortKey;
  current?: SortKey;
  onChange: (k: SortKey) => void;
  /** Total number of components currently in view, displayed alongside */
  count?: number;
  /** Right-aligned slot for view toggles, etc. (optional) */
  right?: React.ReactNode;
}

const TABS: { key: SortKey; label: string; icon: LucideIcon }[] = [
  { key: "featured", label: "Featured", icon: Star },
  { key: "newest",   label: "Newest",   icon: Clock },
  { key: "popular",  label: "Popular",  icon: Flame },
];

/**
 * Featured / Newest / Popular tabs with a subtle pill-style active state.
 * Fixes B-25: Arrow key roving focus in tablist.
 * Fixes B-10: Used Lucide icons through Icon wrapper.
 */
export function Tabs({ active, current, onChange, count, right }: Props) {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const selectedKey = active ?? current ?? "featured";

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    let nextIndex = index;

    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % TABS.length;
      e.preventDefault();
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + TABS.length) % TABS.length;
      e.preventDefault();
    }

    if (nextIndex !== index) {
      tabsRef.current[nextIndex]?.focus();
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-ink-100 pb-3 dark:border-ink-800/80">
      <div
        role="tablist"
        aria-label="Sort components"
        className="inline-flex items-center gap-1 rounded-lg bg-ink-100 p-1 dark:bg-ink-900"
      >
        {TABS.map(({ key, label, icon }, i) => {
          const isActive = selectedKey === key;
          return (
            <button
              key={key}
              ref={(el) => (tabsRef.current[i] = el)}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(key)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className={[
                "inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
                isActive
                  ? "bg-white text-ink-900 shadow-sm dark:bg-ink-800 dark:text-white"
                  : "text-ink-600 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white",
              ].join(" ")}
            >
              <Icon icon={icon} size={14} />
              {label}
            </button>
          );
        })}
      </div>

      {count !== undefined && (
        <span className="text-sm text-ink-500 dark:text-ink-400">
          <span className="font-medium text-ink-900 dark:text-ink-100 tabular-nums">
            {(count ?? 0).toLocaleString()}
          </span>{" "}
          component{count === 1 ? "" : "s"}
        </span>
      )}

      {right && <div className="ml-auto">{right}</div>}
    </div>
  );
}
