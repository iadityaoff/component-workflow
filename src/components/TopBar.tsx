import React from "react";
import { Menu, Moon, Search, Sparkles, Sun } from "lucide-react";
import { useTheme } from "../lib/theme";
import { useRoute } from "../lib/router";
import { Icon } from "./ui/Icon";
import { Kbd } from "./ui/Kbd";
import { useAuth } from "../hooks/useAuth";
import { Button } from "./ui/Button";

interface Props {
  query: string;
  onQueryChange: (q: string) => void;
  onOpenMobileNav: () => void;
}

/**
 * Sticky top bar with brand mark, global search, theme toggle and "Sign in".
 * Mobile: collapses search behind the menu, keeps the brand + theme + sign in.
 *
 * Fixes:
 * B-04: Sign-in wired
 * B-07: Use navigate() instead of hrefs where applicable
 * B-10: Used Lucide icons through Icon wrapper
 */
export function TopBar({ query, onQueryChange, onOpenMobileNav }: Props) {
  const { route, navigate } = useRoute();
  return (
    <header className="sticky top-0 z-50 h-14 border-b border-ink-100 bg-surface-1/80 backdrop-blur supports-[backdrop-filter]:bg-surface-1/60 dark:border-ink-800/80">
      <div className="flex h-full items-center gap-3 px-3 sm:px-4">
        {/* Mobile menu */}
        <button
          type="button"
          onClick={onOpenMobileNav}
          className="-ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-700 hover:bg-ink-100 lg:hidden dark:text-ink-200 dark:hover:bg-ink-900"
          aria-label="Open navigation"
        >
          <Icon icon={Menu} size={18} />
        </button>

        {/* Brand */}
        <button
          onClick={() => navigate("#/")}
          className="flex cursor-pointer items-center gap-2 font-semibold tracking-tight p-0 border-none bg-transparent"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-ink-900 text-[11px] font-bold text-white shadow-sm dark:bg-white dark:text-ink-900">
            21
          </span>
          <span className="hidden sm:inline">21st Clone</span>
        </button>

        {/* Primary nav */}
        <nav className="ml-2 hidden items-center gap-1 text-sm md:flex">
          <NavLink
            onClick={() => navigate("#/")}
            active={route.page === "home"}
          >
            Components
          </NavLink>
          <NavLink
            onClick={() => navigate("#/agents")}
            active={route.page === "agents" || route.page === "agent-detail"}
          >
            Agents
          </NavLink>
          <NavLink
            onClick={() => navigate("#/magic")}
            active={route.page === "magic"}
          >
            Magic
          </NavLink>
          <NavLink
            onClick={() => navigate("#/mcp")}
            active={route.page === "mcp"}
          >
            MCP
          </NavLink>
          <NavLink
            onClick={() => navigate("#/publish")}
            active={route.page === "publish"}
          >
            Publish
          </NavLink>
          <NavLink
            onClick={() => navigate("#/docs")}
            active={route.page === "docs"}
          >
            Docs
          </NavLink>
        </nav>

        {/* Search */}
        <div className="ml-auto hidden flex-1 max-w-md md:block">
          <SearchField value={query} onChange={onQueryChange} />
        </div>

        {/* Right side */}
        <div className="ml-auto flex items-center gap-1.5 md:ml-2">
          <button
            onClick={() => navigate("#/magic")}
            className="hidden h-9 items-center gap-1.5 rounded-lg bg-gradient-to-br from-fuchsia-500 via-rose-500 to-amber-400 px-3 text-sm font-semibold text-white shadow-sm shadow-rose-500/20 transition hover:brightness-110 active:scale-[0.98] sm:inline-flex"
          >
            <Icon icon={Sparkles} size={16} />
            Magic
          </button>
          <ThemeToggle />
          
          <AuthSection />
        </div>
      </div>

      {/* Mobile-only search row */}
      <div className="border-t border-ink-100 px-3 py-2 md:hidden dark:border-ink-800/80">
        <SearchField value={query} onChange={onQueryChange} />
      </div>
    </header>
  );
}

function NavLink({
  children,
  onClick,
  active,
}: {
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={[
        "rounded-md px-3 py-1.5 text-[13px] transition border-none bg-transparent cursor-pointer font-medium",
        active
          ? "bg-ink-100 text-ink-900 dark:bg-ink-900 dark:text-white"
          : "text-ink-600 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-900 dark:hover:text-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

import { REGISTRY_COUNT } from "../data/registry";

function SearchField({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <Icon
        icon={Search}
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Search ${REGISTRY_COUNT}+ components…`}
        className="h-9 w-full rounded-lg border border-ink-200 bg-ink-50 pl-9 pr-14 text-sm placeholder:text-ink-400 focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-ink-800 dark:bg-ink-950 dark:placeholder:text-ink-500 dark:focus:border-violet-500 dark:focus:bg-ink-950 dark:focus:ring-violet-500/20"
      />
      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">
        <Kbd>⌘K</Kbd>
      </div>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-ink-700 transition hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-900"
    >
      <Icon icon={theme === "dark" ? Sun : Moon} size={18} />
    </button>
  );
}

function AuthSection() {
  const { user, loading } = useAuth();
  const { navigate } = useRoute();

  if (loading) {
    return <div className="h-9 w-20 animate-pulse rounded-lg bg-ink-100 dark:bg-ink-900" />;
  }

  if (user) {
    return (
      <button
        onClick={() => navigate("#/dashboard")}
        className="flex items-center gap-2 rounded-full border border-ink-200 bg-surface-1 p-0.5 pr-3 text-sm font-medium transition hover:bg-ink-50 dark:border-ink-800 dark:hover:bg-ink-900"
      >
        <div className="h-7 w-7 overflow-hidden rounded-full bg-gradient-to-br from-violet-500 to-rose-500">
          {user.user_metadata.avatar_url ? (
            <img src={user.user_metadata.avatar_url} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-[10px] text-white">
              {user.email?.slice(0, 2).toUpperCase()}
            </div>
          )}
        </div>
        <span className="hidden sm:inline">{user.user_metadata.full_name || user.email?.split('@')[0]}</span>
      </button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="h-9"
      onClick={() => navigate("#/signin")}
    >
      Sign in
    </Button>
  );
}
