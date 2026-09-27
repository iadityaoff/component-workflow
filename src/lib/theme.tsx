import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";
export type Accent = "violet" | "emerald" | "rose" | "sky" | "amber";

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
  accent: Accent;
  setAccent: (a: Accent) => void;
}

const Ctx = createContext<ThemeCtx | null>(null);

const STORAGE_KEY = "twentyfirst-theme";
const ACCENT_STORAGE_KEY = "twentyfirst-accent";

function readInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  return prefersLight ? "light" : "dark";
}

function readInitialAccent(): Accent {
  if (typeof window === "undefined") return "violet";
  const stored = window.localStorage.getItem(ACCENT_STORAGE_KEY) as Accent | null;
  if (["violet", "emerald", "rose", "sky", "amber"].includes(stored as string)) {
    return stored as Accent;
  }
  return "violet";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme);
  const [accent, setAccentState] = useState<Accent>(readInitialAccent);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore quota */
    }
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-accent", accent);
    try {
      window.localStorage.setItem(ACCENT_STORAGE_KEY, accent);
    } catch {
      /* ignore quota */
    }
  }, [accent]);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);
  const toggle = useCallback(() => setThemeState((t) => (t === "dark" ? "light" : "dark")), []);
  const setAccent = useCallback((a: Accent) => setAccentState(a), []);

  const value = useMemo(
    () => ({ theme, toggle, setTheme, accent, setAccent }),
    [theme, toggle, setTheme, accent, setAccent]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTheme(): ThemeCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error("useTheme must be used inside <ThemeProvider />");
  return v;
}
