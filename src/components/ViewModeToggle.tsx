/**
 * ViewModeToggle — flip between classic pagination and infinite scroll.
 * State lives in the URL (`?view=scroll`) so it survives refreshes and
 * can be deep-linked.
 */
import { LayoutGrid, Infinity as InfinityIcon } from "lucide-react";
import { Icon } from "./ui/Icon";

export type ViewMode = "page" | "scroll";

interface Props {
  mode?: ViewMode;
  viewMode?: ViewMode;
  onChange?: (mode: ViewMode) => void;
  setViewMode?: (mode: ViewMode) => void;
}

export function ViewModeToggle({ mode, viewMode, onChange, setViewMode }: Props) {
  const currentMode = mode ?? viewMode ?? "page";
  const handleChange = onChange ?? setViewMode ?? (() => {});
  return (
    <div
      role="radiogroup"
      aria-label="Grid view mode"
      className="inline-flex items-center rounded-lg border border-ink-200 bg-white p-0.5 text-xs dark:border-ink-800 dark:bg-ink-950"
    >
      <button
        type="button"
        role="radio"
        aria-checked={currentMode === "page"}
        onClick={() => handleChange("page")}
        className={[
          "inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 font-medium transition",
          currentMode === "page"
            ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900"
            : "text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-200",
        ].join(" ")}
      >
        <Icon icon={LayoutGrid} size={14} />
        Pages
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={currentMode === "scroll"}
        onClick={() => handleChange("scroll")}
        className={[
          "inline-flex h-7 items-center gap-1.5 rounded-md px-2.5 font-medium transition",
          currentMode === "scroll"
            ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900"
            : "text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-200",
        ].join(" ")}
      >
        <Icon icon={InfinityIcon} size={14} />
        Scroll
      </button>
    </div>
  );
}
