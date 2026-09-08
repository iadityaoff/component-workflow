import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
function cn(...inputs: (string | undefined | null | boolean | number)[]) {
  return inputs.filter(Boolean).join(" ");
}

interface DropdownMenuProps {
  children: React.ReactNode;
}

interface DropdownMenuTriggerProps {
  children: React.ReactElement;
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const DropdownMenuContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
} | null>(null);

export function DropdownMenu({ children }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const triggerRef = useRef<HTMLElement>(null);

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen, triggerRef, activeIndex, setActiveIndex }}>
      {children}
    </DropdownMenuContext.Provider>
  );
}

export function DropdownMenuTrigger({ children }: DropdownMenuTriggerProps) {
  const context = React.useContext(DropdownMenuContext);
  if (!context) throw new Error("DropdownMenuTrigger must be used inside DropdownMenu");

  return React.cloneElement(children, {
    ref: context.triggerRef,
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      context.setOpen(!context.open);
    },
    onKeyDown: (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        context.setOpen(true);
        context.setActiveIndex(0);
      }
    }
  });
}

export function DropdownMenuContent({
  children,
  className,
  align = "end",
}: DropdownMenuContentProps) {
  const context = React.useContext(DropdownMenuContext);
  const contentRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  const updatePosition = useCallback(() => {
    if (!context?.triggerRef.current || !context.open) return;
    const triggerRect = context.triggerRef.current.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let left = triggerRect.left + scrollX;
    if (align === "end") left = triggerRect.right + scrollX;
    else if (align === "center") left = triggerRect.left + scrollX + triggerRect.width / 2;

    setCoords({
      top: triggerRect.bottom + scrollY + 4,
      left,
    });
  }, [context?.open, align]);

  useEffect(() => {
    if (context?.open) {
      updatePosition();
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") context.setOpen(false);
        if (e.key === "ArrowDown") {
          e.preventDefault();
          context.setActiveIndex((context.activeIndex + 1) % React.Children.count(children));
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          context.setActiveIndex((context.activeIndex - 1 + React.Children.count(children)) % React.Children.count(children));
        }
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [context?.open, context?.activeIndex, children]);

  if (!context) throw new Error("DropdownMenuContent must be used inside DropdownMenu");

  return createPortal(
    <AnimatePresence>
      {context.open && coords && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: coords.top,
              left: coords.left,
              transform: align === "end" ? "translateX(-100%)" : align === "center" ? "translateX(-50%)" : "none",
              pointerEvents: "auto",
            }}
            role="menu"
            className={cn(
              "min-w-[160px] rounded-lg border border-ink-200 bg-surface-1 p-1 shadow-lg dark:border-ink-800",
              className
            )}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function DropdownMenuItem({ children, className, onClick, disabled }: DropdownMenuItemProps) {
  const context = React.useContext(DropdownMenuContext);
  return (
    <button
      role="menuitem"
      disabled={disabled}
      onClick={() => {
        onClick?.();
        context?.setOpen(false);
      }}
      className={cn(
        "flex w-full items-center rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-ink-100 disabled:opacity-50 dark:hover:bg-ink-800",
        className
      )}
    >
      {children}
    </button>
  );
}
