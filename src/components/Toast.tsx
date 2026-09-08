/**
 * Global Toast Notification System
 *
 * Fixes from audit:
 *  B-10: Text glyphs replaced with Lucide SVG icons
 *  B-17: Timer map tracks orphan timers; cleared on unmount
 */

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { Check, X, AlertTriangle, Info } from "lucide-react";
import { Icon } from "./ui/Icon";

type ToastType = "success" | "error" | "warning" | "info";

interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

interface ToastContextValue {
  toasts: Toast[];
  toast: (type: ToastType, message: string) => void;
  dismiss: (id: number) => void;
}

const ToastCtx = createContext<ToastContextValue>({
  toasts: [],
  toast: () => {},
  dismiss: () => {},
});

let nextId = 0;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timersRef = useRef<Map<number, ReturnType<typeof setTimeout>>>(
    new Map(),
  );

  // Clean up all timers on unmount
  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
      timersRef.current.clear();
    };
  }, []);

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timersRef.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timersRef.current.delete(id);
    }
  }, []);

  const toast = useCallback(
    (type: ToastType, message: string) => {
      const id = ++nextId;
      setToasts((prev) => [...prev, { id, type, message }]);
      const timer = setTimeout(() => {
        dismiss(id);
      }, 3500);
      timersRef.current.set(id, timer);
    },
    [dismiss],
  );

  return (
    <ToastCtx.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <ToastContainer toasts={toasts} dismiss={dismiss} />
    </ToastCtx.Provider>
  );
}

export function useToast() {
  return useContext(ToastCtx);
}

/* ── Visual layer ── */

const TOAST_ICONS: Record<ToastType, typeof Check> = {
  success: Check,
  error: X,
  warning: AlertTriangle,
  info: Info,
};

const STYLES: Record<ToastType, string> = {
  success:
    "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300",
  error:
    "border-rose-200 bg-rose-50 text-rose-800 dark:border-rose-900 dark:bg-rose-950/60 dark:text-rose-300",
  warning:
    "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-300",
  info: "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-900 dark:bg-sky-950/60 dark:text-sky-300",
};

const ICON_STYLES: Record<ToastType, string> = {
  success:
    "bg-emerald-200 text-emerald-700 dark:bg-emerald-800 dark:text-emerald-200",
  error: "bg-rose-200 text-rose-700 dark:bg-rose-800 dark:text-rose-200",
  warning:
    "bg-amber-200 text-amber-700 dark:bg-amber-800 dark:text-amber-200",
  info: "bg-sky-200 text-sky-700 dark:bg-sky-800 dark:text-sky-200",
};

function ToastContainer({
  toasts,
  dismiss,
}: {
  toasts: Toast[];
  dismiss: (id: number) => void;
}) {
  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex flex-col-reverse gap-2"
      role="status"
      aria-live="polite"
      aria-label="Notifications"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className={[
            "flex items-center gap-3 rounded-xl border px-4 py-3 shadow-lg backdrop-blur animate-slide-up",
            STYLES[t.type],
          ].join(" ")}
          role="alert"
        >
          <span
            className={[
              "grid h-6 w-6 shrink-0 place-items-center rounded-full",
              ICON_STYLES[t.type],
            ].join(" ")}
          >
            <Icon icon={TOAST_ICONS[t.type]} size={14} />
          </span>
          <p className="flex-1 text-sm font-medium">{t.message}</p>
          <button
            onClick={() => dismiss(t.id)}
            className="ml-2 rounded-md p-0.5 text-current opacity-50 transition hover:opacity-100"
            aria-label="Dismiss notification"
          >
            <Icon icon={X} size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}
