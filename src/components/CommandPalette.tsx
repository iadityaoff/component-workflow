/**
 * ⌘K Command Palette — global keyboard-triggered search overlay.
 * Opens on ⌘K (Mac) or Ctrl+K (Windows/Linux).
 * Searches across ALL components and navigates on selection.
 *
 * Fixes B-03: Full WAI-ARIA combobox/listbox primitive logic.
 */
import React, { useState, useEffect, useRef, useMemo } from "react";
import { createPortal } from "react-dom";
import { Search, ArrowUp, ArrowDown, CornerDownLeft } from "lucide-react";
import { ALL_COMPONENTS } from "../data/components";
import { CATEGORY_BY_SLUG } from "../data/categories";
import { useRoute } from "../lib/router";
import { Icon } from "./ui/Icon";
import { Kbd } from "./ui/Kbd";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLDivElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);
  const { navigate } = useRoute();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ALL_COMPONENTS.slice(0, 8);
    return ALL_COMPONENTS.filter((c) => {
      const cat = CATEGORY_BY_SLUG[c.categorySlug];
      return [c.title, c.description, c.tags.join(" "), cat?.name ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(q);
    }).slice(0, 12);
  }, [query]);

  // Handle focus return & body lock
  useEffect(() => {
    if (isOpen) {
      returnRef.current = document.activeElement as HTMLElement | null;
      document.body.style.overflow = "hidden";
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      returnRef.current?.focus();
    }
  }, [isOpen]);

  // Reset selected index on query change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Auto-scroll selected item into view
  useEffect(() => {
    if (!isOpen || !listboxRef.current) return;
    const selectedEl = listboxRef.current.querySelector(
      `[aria-selected="true"]`
    ) as HTMLElement;
    if (selectedEl) {
      selectedEl.scrollIntoView({ block: "nearest" });
    }
  }, [selectedIndex, isOpen]);

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      e.preventDefault();
      navigate(`#/component/${results[selectedIndex].id}`);
      onClose();
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  }

  // Trap focus (simple version for just input)
  function handleTrapFocus(e: React.KeyboardEvent) {
    if (e.key === "Tab") {
      e.preventDefault();
      inputRef.current?.focus();
    }
  }

  if (!isOpen) return null;

  const activeId = results.length > 0 ? `cmd-item-${results[selectedIndex].id}` : undefined;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4"
      onKeyDown={handleTrapFocus}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
        aria-hidden
      />

      {/* Palette / Combobox Widget */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command Palette"
        className="relative w-full max-w-xl animate-slide-down rounded-2xl border border-ink-200 bg-surface-1 shadow-2xl dark:border-ink-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 border-b border-ink-100 px-4 dark:border-ink-800">
          <Icon icon={Search} size={18} className="text-ink-400" />
          <input
            ref={inputRef}
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-listbox"
            aria-activedescendant={activeId}
            aria-autocomplete="list"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search components..."
            className="h-14 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-ink-400"
          />
          <Kbd>ESC</Kbd>
        </div>

        {/* Results Listbox */}
        <div
          id="cmd-listbox"
          role="listbox"
          ref={listboxRef}
          className="max-h-[320px] overflow-y-auto py-2 scrollbar-thin"
        >
          {results.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-ink-500" role="status" aria-live="polite">
              No components found for "<span className="font-medium text-ink-900 dark:text-ink-50">{query}</span>"
            </div>
          ) : (
            results.map((item, i) => {
              const cat = CATEGORY_BY_SLUG[item.categorySlug];
              const isSelected = i === selectedIndex;
              return (
                <div
                  key={item.id}
                  id={`cmd-item-${item.id}`}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setSelectedIndex(i)}
                  onClick={() => {
                    navigate(`#/component/${item.id}`);
                    onClose();
                  }}
                  className={[
                    "flex w-full cursor-pointer items-center gap-3 px-4 py-2.5 text-left transition select-none",
                    isSelected
                      ? "bg-violet-50 dark:bg-violet-900/20"
                      : "hover:bg-ink-50 dark:hover:bg-ink-800/50",
                  ].join(" ")}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-[10px] font-bold text-white shadow-sm ${item.author.avatarColor}`}
                    aria-hidden
                  >
                    {item.author.avatarText}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`truncate text-sm font-medium ${isSelected ? "text-violet-700 dark:text-violet-300" : "text-ink-900 dark:text-ink-50"}`}>
                      {item.title}
                    </p>
                    <p className="truncate text-xs text-ink-500 dark:text-ink-400">
                      {cat?.name} · {item.description}
                    </p>
                  </div>
                  <span
                    className={[
                      "shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-medium",
                      isSelected
                        ? "bg-violet-100 text-violet-700 dark:bg-violet-950 dark:text-violet-300"
                        : "bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400",
                    ].join(" ")}
                  >
                    {cat?.name}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Real-time announcer for screen readers */}
        <div className="sr-only" role="status" aria-live="polite">
          {results.length} results available.
        </div>

        {/* Footer */}
        <div className="flex items-center gap-4 border-t border-ink-100 px-4 py-2 bg-surface-2 dark:border-ink-800 rounded-b-2xl">
          <div className="flex items-center gap-1.5">
            <Kbd><Icon icon={ArrowUp} size={12} label="Up arrow key" /></Kbd>
            <Kbd><Icon icon={ArrowDown} size={12} label="Down arrow key" /></Kbd>
            <span className="text-[10px] text-ink-500 font-medium">Navigate</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Kbd><Icon icon={CornerDownLeft} size={12} label="Return key" /></Kbd>
            <span className="text-[10px] text-ink-500 font-medium">Open</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Kbd>ESC</Kbd>
            <span className="text-[10px] text-ink-500 font-medium">Close</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
