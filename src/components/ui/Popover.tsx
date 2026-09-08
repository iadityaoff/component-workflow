import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
function cn(...inputs: (string | undefined | null | boolean | number)[]) {
  return inputs.filter(Boolean).join(" ");
}

interface PopoverProps {
  children: React.ReactNode;
}

interface PopoverTriggerProps {
  children: React.ReactElement;
  asChild?: boolean;
}

interface PopoverContentProps {
  children: React.ReactNode;
  className?: string;
  align?: "start" | "center" | "end";
  side?: "top" | "bottom";
  sideOffset?: number;
}

const PopoverContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
} | null>(null);

export function Popover({ children }: PopoverProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);

  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef }}>
      {children}
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger({ children }: PopoverTriggerProps) {
  const context = React.useContext(PopoverContext);
  if (!context) throw new Error("PopoverTrigger must be used inside Popover");

  return React.cloneElement(children, {
    ref: context.triggerRef,
    onClick: (e: React.MouseEvent) => {
      children.props.onClick?.(e);
      context.setOpen(!context.open);
    },
  });
}

export function PopoverContent({
  children,
  className,
  align = "center",
  side = "bottom",
  sideOffset = 8,
}: PopoverContentProps) {
  const context = React.useContext(PopoverContext);
  const contentRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  const updatePosition = useCallback(() => {
    if (!context?.triggerRef.current || !context.open) return;

    const triggerRect = context.triggerRef.current.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let top = 0;
    let left = 0;

    if (side === "bottom") {
      top = triggerRect.bottom + scrollY + sideOffset;
    } else {
      top = triggerRect.top + scrollY - sideOffset;
    }

    if (align === "center") {
      left = triggerRect.left + scrollX + triggerRect.width / 2;
    } else if (align === "start") {
      left = triggerRect.left + scrollX;
    } else {
      left = triggerRect.right + scrollX;
    }

    setCoords({ top, left });
  }, [context?.open, side, align, sideOffset]);

  useEffect(() => {
    if (context?.open) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true);
      
      const handleClickOutside = (e: MouseEvent) => {
        if (
          contentRef.current &&
          !contentRef.current.contains(e.target as Node) &&
          context.triggerRef.current &&
          !context.triggerRef.current.contains(e.target as Node)
        ) {
          context.setOpen(false);
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") context.setOpen(false);
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);

      return () => {
        window.removeEventListener("resize", updatePosition);
        window.removeEventListener("scroll", updatePosition, true);
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [context?.open, updatePosition]);

  if (!context) throw new Error("PopoverContent must be used inside Popover");

  return createPortal(
    <AnimatePresence>
      {context.open && coords && (
        <div 
          className="fixed inset-0 z-[100] pointer-events-none"
          style={{ zIndex: 100 }}
        >
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, scale: 0.95, y: side === "bottom" ? -4 : 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: side === "bottom" ? -4 : 4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{
              position: "absolute",
              top: coords.top,
              left: coords.left,
              transform: align === "center" ? "translateX(-50%)" : align === "end" ? "translateX(-100%)" : "none",
              pointerEvents: "auto",
            }}
            role="dialog"
            className={cn(
              "min-w-[200px] rounded-xl border border-ink-200 bg-surface-1 p-4 shadow-xl dark:border-ink-800",
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
