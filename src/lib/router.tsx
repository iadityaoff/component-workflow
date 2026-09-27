/**
 * UIForge Router — Hash-based router with query param manager.
 *
 * Routes:
 *   #/                    → landing (home)
 *   #/components          → components listing
 *   #/components/s/:slug  → category page
 *   #/components/featured → featured
 *   #/components/newest   → newest weekly leaderboard
 *   #/component/:id       → component detail
 *   #/templates           → templates
 *   #/themes              → themes
 *   #/themes/editor       → theme editor
 *   #/apps                → apps directory
 *   #/icons               → icons browser
 *   #/gradients           → gradients gallery
 *   #/ascii               → ascii art
 *   #/ai                  → AI generator
 *   #/authors             → top authors
 *   #/libraries           → component libraries
 *   #/bookmarks           → bookmarks
 *   #/studio              → creator studio
 *   #/publish             → publish flow
 *   #/pricing             → pricing page
 *   #/mcp                 → CLI & MCP
 *   #/design-bug-bot      → Design Bug Bot
 *   #/signin              → sign in
 *   #/dashboard           → legacy → studio
 *   #/profile             → user profile
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

export interface Route {
  page:
    | "landing"
    | "components"
    | "components-featured"
    | "components-newest"
    | "home"
    | "detail"
    | "templates"
    | "themes"
    | "themes-editor"
    | "apps"
    | "icons"
    | "gradients"
    | "ascii"
    | "ai"
    | "authors"
    | "libraries"
    | "bookmarks"
    | "studio"
    | "publish"
    | "pricing"
    | "mcp"
    | "design-bug-bot"
    | "signin"
    | "dashboard"
    | "profile"
    | "magic"
    | "agents"
    | "agent-detail"
    | "docs"
    | "blog";
  componentId?: string;
  agentId?: string;
  categorySlug?: string;
  weekId?: string;
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

  let route: Route = { page: "landing" };

  // Component detail
  const detailMatch = cleanPath.match(/^component\/(.+)$/);
  // Agent detail
  const agentDetailMatch = cleanPath.match(/^agents\/(.+)$/);
  // Category page: /components/s/:slug
  const categoryMatch = cleanPath.match(/^(?:community\/)?components\/s\/([^/]+)$/);
  // Legacy category route
  const legacyCategoryMatch = cleanPath.match(/^category\/([^/]+)$/);
  // Newest week: /components/newest/:weekId
  const newestWeekMatch = cleanPath.match(/^components\/newest\/(.+)$/);

  if (detailMatch) {
    route = { page: "detail", componentId: detailMatch[1] };
  } else if (categoryMatch) {
    let slug = categoryMatch[1];
    if (slug === "button") slug = "buttons";
    query.cat = slug;
    route = { page: "components", categorySlug: slug };
  } else if (legacyCategoryMatch) {
    let slug = legacyCategoryMatch[1];
    if (slug === "button") slug = "buttons";
    query.cat = slug;
    route = { page: "components", categorySlug: slug };
  } else if (newestWeekMatch) {
    route = { page: "components-newest", weekId: newestWeekMatch[1] };
  } else if (cleanPath === "components/newest") {
    route = { page: "components-newest" };
  } else if (cleanPath === "components/featured") {
    route = { page: "components-featured" };
  } else if (cleanPath === "" || cleanPath === "landing") {
    if (query.cat || query.q) {
      route = { page: "components" };
    } else {
      route = { page: "landing" };
    }
  } else if (cleanPath === "components" || cleanPath === "community/components" || cleanPath.startsWith("community/components/")) {
    route = { page: "components" };
  } else if (cleanPath === "templates" || cleanPath === "community/templates") {
    route = { page: "templates" };
  } else if (cleanPath === "themes/editor") {
    route = { page: "themes-editor" };
  } else if (cleanPath === "themes" || cleanPath === "community/themes") {
    route = { page: "themes" };
  } else if (cleanPath === "apps") {
    route = { page: "apps" };
  } else if (cleanPath === "icons") {
    route = { page: "icons" };
  } else if (cleanPath === "gradients" || cleanPath === "gradients/editor") {
    route = { page: "gradients" };
  } else if (cleanPath === "ascii") {
    route = { page: "ascii" };
  } else if (cleanPath === "ai") {
    route = { page: "ai" };
  } else if (cleanPath === "authors") {
    route = { page: "authors" };
  } else if (cleanPath === "libraries") {
    route = { page: "libraries" };
  } else if (cleanPath === "bookmarks") {
    route = { page: "bookmarks" };
  } else if (cleanPath === "studio" || cleanPath.startsWith("studio/")) {
    route = { page: "studio" };
  } else if (cleanPath === "profile" || cleanPath.startsWith("profile/")) {
    route = { page: "profile" };
  } else if (cleanPath === "design-bug-bot") {
    route = { page: "design-bug-bot" };
  } else if (cleanPath === "agents") {
    route = { page: "agents" };
  } else if (agentDetailMatch && agentDetailMatch[1] !== "publish") {
    route = { page: "agent-detail", agentId: agentDetailMatch[1] };
  } else if (cleanPath === "agents/publish") {
    route = { page: "agents" };
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
  route: { page: "landing" },
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
    window.location.hash = to;
  }, []);

  const goHome = useCallback(() => {
    window.location.hash = "#/";
  }, []);

  const { route, query } = useMemo(() => parseHash(hash), [hash]);

  const setQuery = useCallback(
    (update: Record<string, string>) => {
      const qs = new URLSearchParams();
      Object.entries(query).forEach(([k, v]) => qs.set(k, v));
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
