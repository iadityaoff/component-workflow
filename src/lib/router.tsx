/**
 * Minimal hash-based router + query param manager.
 * Fixes: B-05, B-07, B-16.
 *
 * Routes:
 *   #/                <Icon icon={ArrowRight} size={16} /> home (grid)
 *   #/component/:id   <Icon icon={ArrowRight} size={16} /> detail
 *
 * Supports search params in the hash:
 *   #/component/foo?theme=dark&device=sm
 */

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  type ReactNode,
} from "react";

interface Route {
  page: "home" | "detail" | "magic" | "publish" | "dashboard" | "signin" | "agents" | "agent-detail" | "mcp" | "docs" | "pricing" | "blog";
  componentId?: string;
  agentId?: string;
}

interface RouterContext {
  route: Route;
  query: Record<string, string>;
  navigate: (to: string) => void;
  goHome: () => void;
  setQuery: (update: Record<string, string>) => void;
  replaceQuery: (update: Record<string, string>) => void;
}

function parseHash(hash: string): { route: Route; query: Record<string, string> } {
  const raw = hash.replace(/^#\/?/, "");
  const [pathPart, queryPart] = raw.split("?");

  const query: Record<string, string> = {};
  if (queryPart) {
    const searchParams = new URLSearchParams(queryPart);
    searchParams.forEach((val, key) => {
      query[key] = val;
    });
  }

  const cleanPath = pathPart.replace(/\/$/, "");

  let route: Route = { page: "home" };

  const detailMatch = cleanPath.match(/^component\/(.+)$/);
  const agentDetailMatch = cleanPath.match(/^agents\/(.+)$/);
  if (detailMatch) {
    route = { page: "detail", componentId: detailMatch[1] };
  } else if (cleanPath === "agents") {
    route = { page: "agents" };
  } else if (agentDetailMatch && agentDetailMatch[1] !== "publish") {
    route = { page: "agent-detail", agentId: agentDetailMatch[1] };
  } else if (cleanPath === "agents/publish") {
    route = { page: "agents" }; // Handle in agents page
  } else if (cleanPath === "magic") {
    route = { page: "magic" };
  } else if (cleanPath === "publish") {
    route = { page: "publish" };
  } else if (cleanPath === "dashboard") {
    route = { page: "dashboard" };
  } else if (cleanPath === "signin") {
    route = { page: "signin" };
  } else if (cleanPath === "mcp") {
    route = { page: "mcp" };
  } else if (cleanPath.startsWith("docs")) {
    route = { page: "docs" };
  } else if (cleanPath === "pricing") {
    route = { page: "pricing" };
  } else if (cleanPath.startsWith("blog")) {
    route = { page: "blog" };
  }

  return { route, query };
}

const Ctx = createContext<RouterContext>({
  route: { page: "home" },
  query: {},
  navigate: () => {},
  goHome: () => {},
  setQuery: () => {},
  replaceQuery: () => {},
});

export function RouterProvider({ children }: { children: ReactNode }) {
  const [hash, setHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash : "#/"
  );

  useEffect(() => {
    const handler = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = useCallback((to: string) => {
    // Prevent direct assignment elsewhere by making this the only blessed way
    window.location.hash = to;
  }, []);

  const goHome = useCallback(() => {
    window.location.hash = "#/";
  }, []);

  const { route, query } = useMemo(() => parseHash(hash), [hash]);

  const setQuery = useCallback(
    (update: Record<string, string>) => {
      const qs = new URLSearchParams();
      // Keep existing
      Object.entries(query).forEach(([k, v]) => qs.set(k, v));
      // Append new (or delete if empty)
      Object.entries(update).forEach(([k, v]) => {
        if (!v) qs.delete(k);
        else qs.set(k, v);
      });

      const nextQueryStr = qs.toString();
      const basePath = hash.split("?")[0] || "#/";
      window.location.hash = nextQueryStr ? `${basePath}?${nextQueryStr}` : basePath;
    },
    [query, hash]
  );

  const replaceQuery = useCallback(
    (update: Record<string, string>) => {
      const qs = new URLSearchParams();
      Object.entries(update).forEach(([k, v]) => {
        if (v) qs.set(k, v);
      });
      const nextQueryStr = qs.toString();
      const basePath = hash.split("?")[0] || "#/";
      window.location.hash = nextQueryStr ? `${basePath}?${nextQueryStr}` : basePath;
    },
    [hash]
  );

  const value = useMemo(
    () => ({ route, query, navigate, goHome, setQuery, replaceQuery }),
    [route, query, navigate, goHome, setQuery, replaceQuery]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useRoute() {
  return useContext(Ctx);
}
