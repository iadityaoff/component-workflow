/**
 * Accessible Dialog (modal) primitive.
 *
 * WAI-ARIA APG dialog pattern:
 *  - role="dialog" + aria-modal="true"
 *  - Focus trap (Tab / Shift+Tab cycles inside panel)
 *  - Focus return on close
 *  - Escape to close
 *  - Renders via portal to document.body
 *  - Reduced-motion aware animations
 */

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Icon } from "./Icon";

interface DialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  /** Width class override (default: max-w-lg) */
  maxWidth?: string;
  children: React.ReactNode;
}

export function Dialog({
  open,
  onClose,
  title,
  description,
  maxWidth = "max-w-lg",
  children,
}: DialogProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const returnRef = useRef<HTMLElement | null>(null);

  /* ── Focus management ── */
  useEffect(() => {
    if (!open) return;

    // Remember who had focus so we can return it
    returnRef.current = document.activeElement as HTMLElement | null;

    // Focus the first focusable child
    requestAnimationFrame(() => {
      const first = panelRef.current?.querySelector<HTMLElement>(
        'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',
      );
      first?.focus();
    });

    // Restore focus on close
    return () => {
      returnRef.current?.focus();
    };
  }, [open]);

  /* ── Keyboard ── */
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      // Focus trap
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]),[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    },
    [onClose],
  );

  /* ── Body scroll lock ── */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onKeyDown={onKeyDown}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dlg-title"
        aria-describedby={description ? "dlg-desc" : undefined}
        className={`relative w-full ${maxWidth} animate-slide-up rounded-2xl border border-ink-200 bg-surface-1 p-6 shadow-2xl dark:border-ink-800`}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="dlg-title"
              className="text-lg font-semibold text-ink-950 dark:text-ink-50"
            >
              {title}
            </h2>
            {description && (
              <p
                id="dlg-desc"
                className="mt-1 text-sm text-ink-600 dark:text-ink-400"
              >
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-md p-1.5 text-ink-500 transition hover:bg-ink-100 focus-visible:ring-2 focus-visible:ring-violet-500 dark:hover:bg-ink-800"
          >
            <Icon icon={X} size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="mt-4">{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export type { DialogProps };
