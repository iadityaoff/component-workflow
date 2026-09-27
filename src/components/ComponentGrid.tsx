/**
 * Component Grid — Virtualised using @tanstack/react-virtual
 *
 * Fixes from audit:
 *  B-11: Virtualised grid mapping rows to fixed height (320px)
 *  B-12: AnimatePresence wrapper is stable; variants trigger on mount.
 *
 * FIX: Split into WindowGrid / ContainerGrid sub-components so each
 *      virtualizer hook is only called in the component that uses it.
 *      Previously both hooks were called unconditionally (hooks rules violation).
 */

import { useRef } from "react";
import { useVirtualizer, useWindowVirtualizer } from "@tanstack/react-virtual";
import { motion, AnimatePresence } from "framer-motion";
import { SearchX } from "lucide-react";
import type { ComponentItem } from "../data/components";
import { ComponentCard } from "./ComponentCard";
import { Icon } from "./ui/Icon";
import { useResponsiveCols } from "../hooks/useResponsiveCols";

interface Props {
  items: ComponentItem[];
  /** Optional container bounded height; default is window scroll */
  isWindowScroll?: boolean;
  overrideCols?: number;
}

interface GridCoreProps {
  items: ComponentItem[];
  cols: number;
  rowCount: number;
}

const GAP_PX = 24;
const ROW_HEIGHT = 440;

function VirtualRows({
  virtualizer,
  items,
  cols,
}: {
  virtualizer: any;
  items: ComponentItem[];
  cols: number;
}) {
  return (
    <div
      className="relative w-full"
      style={{ height: `${virtualizer.getTotalSize()}px` }}
    >
      <AnimatePresence>
        {virtualizer.getVirtualItems().map((virtualRow: any) => {
          const startIdx = virtualRow.index * cols;
          const rowItems = items.slice(startIdx, startIdx + cols);
          return (
            <div
              key={virtualRow.index}
              className="cv-auto absolute left-0 top-0 w-full"
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <div
                className="grid gap-6 w-full"
                style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
              >
                {rowItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, delay: i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <ComponentCard item={item} priority={startIdx + i} />
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

function WindowGrid({ items, cols, rowCount }: GridCoreProps) {
  const virtualizer = useWindowVirtualizer({
    count: rowCount,
    estimateSize: () => ROW_HEIGHT,
    overscan: 3,
    gap: GAP_PX,
  });
  return (
    <div role="region" aria-label="Component grid">
      <VirtualRows virtualizer={virtualizer} items={items} cols={cols} />
    </div>
  );
}

function ContainerGrid({ items, cols, rowCount }: GridCoreProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => containerRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 3,
    gap: GAP_PX,
  });
  return (
    <div
      ref={containerRef}
      className="h-full w-full overflow-y-auto"
      role="region"
      aria-label="Component grid"
    >
      <VirtualRows virtualizer={virtualizer} items={items} cols={cols} />
    </div>
  );
}

export function ComponentGrid({ items, isWindowScroll = true, overrideCols }: Props) {
  const responsiveCols = useResponsiveCols({ base: 1, md: 2, lg: 3, xl: 3 });
  const cols = overrideCols ?? responsiveCols;
  const rowCount = Math.ceil(items.length / cols);

  if (items.length === 0) {
    return (
      <div className="flex h-64 flex-col items-center justify-center p-8 text-center bg-surface-2 rounded-2xl border border-dashed border-ink-200 dark:border-ink-800">
        <div className="rounded-full bg-ink-100 p-3 mb-4 dark:bg-ink-800 text-ink-500 dark:text-ink-400">
          <Icon icon={SearchX} size={20} label="No results" />
        </div>
        <h3 className="text-lg font-medium text-ink-900 dark:text-ink-50">
          No components found
        </h3>
        <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
          Try adjusting your search or category filter.
        </p>
      </div>
    );
  }

  if (isWindowScroll) {
    return <WindowGrid items={items} cols={cols} rowCount={rowCount} />;
  }
  return <ContainerGrid items={items} cols={cols} rowCount={rowCount} />;
}
