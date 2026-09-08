import React, { useState, useRef, useEffect, useCallback, useId } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
function cn(...inputs: (string | undefined | null | boolean | number)[]) {
  return inputs.filter(Boolean).join(" ");
}

interface TooltipProps {
  children: React.ReactNode;
  delayDuration?: number;
}

interface TooltipTriggerProps {
  children: React.ReactElement;
  asChild?: boolean;
}

interface TooltipContentProps {
  children: React.ReactNode;
  className?: string;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
}

const TooltipContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement>;
  tooltipId: string;
} | null>(null);

export function Tooltip({ children, delayDuration = 300 }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<number | null>(null);
  const tooltipId = useId();

  const handleOpen = () => {
    timeoutRef.current = window.setTimeout(() => setOpen(true), delayDuration);
  };

  const handleClose = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setOpen(false);
  };

  return (
    <TooltipContext.Provider value={{ open, setOpen, triggerRef, tooltipId }}>
      <div 
        onMouseEnter={handleOpen} 
        onMouseLeave={handleClose}
        onFocus={handleOpen}
        onBlur={handleClose}
        className="inline-block"
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

export function TooltipTrigger({ children }: TooltipTriggerProps) {
  const context = React.useContext(TooltipContext);
  if (!context) throw new Error("TooltipTrigger must be used inside Tooltip");

  return React.cloneElement(children, {
    ref: context.triggerRef,
    "aria-describedby": context.open ? context.tooltipId : undefined,
  });
}

export function TooltipContent({
  children,
  className,
  side = "top",
  sideOffset = 5,
}: TooltipContentProps) {
  const context = React.useContext(TooltipContext);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);

  const updatePosition = useCallback(() => {
    if (!context?.triggerRef.current || !context.open) return;

    const triggerRect = context.triggerRef.current.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let top = 0;
    let left = 0;

    if (side === "top") {
      top = triggerRect.top + scrollY - sideOffset;
      left = triggerRect.left + scrollX + triggerRect.width / 2;
    } else if (side === "bottom") {
      top = triggerRect.bottom + scrollY + sideOffset;
      left = triggerRect.left + scrollX + triggerRect.width / 2;
    }

    setCoords({ top, left });
  }, [context?.open, side, sideOffset]);

  useEffect(() => {
    if (context?.open) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      return () => window.removeEventListener("resize", updatePosition);
    }
  }, [context?.open, updatePosition]);

  if (!context) throw new Error("TooltipContent must be used inside Tooltip");

  return createPortal(
    <AnimatePresence>
      {context.open && coords && (
        <motion.div
          id={context.tooltipId}
          role="tooltip"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: coords.top,
            left: coords.left,
            transform: side === "top" ? "translate(-50%, -100%)" : "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 1000,
          }}
          className={cn(
            "rounded-md bg-ink-900 px-2 py-1 text-xs font-medium text-white shadow-md dark:bg-ink-100 dark:text-ink-900",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
