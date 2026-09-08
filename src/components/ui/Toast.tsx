import React, { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Icon } from "./Icon";

function cn(...inputs: (string | undefined | null | boolean | number)[]) {
  return inputs.filter(Boolean).join(" ");
}

type ToastType = "success" | "error" | "info" | "warning";

interface Toast {
  id: string;
  title: string;
  description?: string;
  type: ToastType;
}

interface ToastContextType {
  toast: (title: string, description?: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within a ToastProvider");
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((title: string, description?: string, type: ToastType = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {createPortal(
        <div className="fixed bottom-0 right-0 z-[100] flex flex-col gap-2 p-6 w-full max-w-sm pointer-events-none">
          <AnimatePresence>
            {toasts.map((t) => (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9, transition: { duration: 0.2 } }}
                className={cn(
                  "pointer-events-auto relative flex w-full flex-col gap-1 rounded-xl border p-4 shadow-xl",
                  t.type === "success" && "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-200",
                  t.type === "error" && "border-rose-200 bg-rose-50 text-rose-900 dark:border-rose-900 dark:bg-rose-950/40 dark:text-rose-200",
                  t.type === "info" && "border-ink-200 bg-surface-1 text-ink-950 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-50",
                  t.type === "warning" && "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-200"
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold">{t.title}</h3>
                  <button
                    onClick={() => setToasts((prev) => prev.filter((toast) => toast.id !== t.id))}
                    className="rounded-md p-1 opacity-50 hover:opacity-100"
                  >
                    <Icon icon={X} size={14} />
                  </button>
                </div>
                {t.description && <p className="text-xs opacity-80">{t.description}</p>}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}
