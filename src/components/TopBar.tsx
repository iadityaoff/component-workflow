import React, { useState } from "react";
import {
  Menu,
  Moon,
  Search,
  Sun,
  Bookmark,
  Gem,
  MessageSquare,
  User,
  Settings,
  CreditCard,
  LogOut,
  Sparkles,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "../lib/theme";
import { useBookmarks } from "../lib/bookmarks";
import { useRoute } from "../lib/router";
import { Icon } from "./ui/Icon";
import { useAuth } from "../hooks/useAuth";
import { useCopyQuota } from "../lib/quota";
import { UpgradeDialog } from "./UpgradeDialog";

interface Props {
  query: string;
  onQueryChange: (q: string) => void;
  onOpenMobileNav: () => void;
}

/**
 * UIForge — Sticky top header (56px)
 *
 * Left: Logo + wordmark
 * Center: Breadcrumb (e.g. Components / Hero)
 * Right: Search ⌘K, Upgrade pill, Feedback, Bookmarks, Avatar
 */
export function TopBar({ query, onQueryChange, onOpenMobileNav }: Props) {
  const { route, navigate } = useRoute();

  return (
    <header className="sticky top-0 z-50 h-14 border-b border-[var(--uf-border)] bg-[var(--uf-bg)]/95 backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--uf-bg)]/80">
      <div className="flex h-full items-center gap-2 px-3 sm:px-4">
        {/* Mobile menu */}
        <button
          type="button"
          onClick={onOpenMobileNav}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[var(--uf-text-secondary)] hover:bg-white/[0.06] lg:hidden transition"
          aria-label="Open navigation"
        >
          <Icon icon={Menu} size={18} />
        </button>

        {/* Logo */}
        <button
          onClick={() => navigate("#/")}
          className="flex cursor-pointer items-center gap-2 border-none bg-transparent group shrink-0"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--uf-accent)] text-[10px] font-black tracking-tighter text-white shadow-sm transition group-hover:scale-105 group-hover:shadow-glow">
            UF
          </div>
          <span className="hidden sm:inline font-bold tracking-tight text-sm text-[var(--uf-text)]">
            UIForge
          </span>
        </button>

        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right side actions */}
        <div className="flex items-center gap-1">
          <SearchButton />
          <UpgradePill />
          <FeedbackButton />
          <BookmarksButton />
          <AuthSection />
        </div>
      </div>
    </header>
  );
}

/* ── Breadcrumb ── */
function Breadcrumb() {
  const { route, query } = useRoute();
  const crumbs: { label: string; hash?: string }[] = [];

  if (route.page === "components" || route.page === "home") {
    crumbs.push({ label: "Components", hash: "#/components" });
    if (query.cat) {
      const name = query.cat.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      crumbs.push({ label: name });
    }
  } else if (route.page === "detail" && route.componentId) {
    crumbs.push({ label: "Components", hash: "#/components" });
    const title = route.componentId.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    crumbs.push({ label: title });
  } else if (route.page === "templates") {
    crumbs.push({ label: "Templates" });
  } else if (route.page === "themes") {
    crumbs.push({ label: "Themes" });
  } else if (route.page === "magic") {
    crumbs.push({ label: "AI" });
  } else if (route.page === "pricing") {
    crumbs.push({ label: "Pricing" });
  } else if (route.page === "mcp") {
    crumbs.push({ label: "CLI & MCP" });
  } else if (route.page === "dashboard") {
    crumbs.push({ label: "Creator Studio" });
  } else if (route.page === "publish") {
    crumbs.push({ label: "Publish" });
  } else if (route.page === "landing") {
    crumbs.push({ label: "Home" });
  }

  if (crumbs.length === 0) return null;

  return (
    <div className="hidden md:flex items-center gap-1 ml-3 text-[13px]">
      {crumbs.map((crumb, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <Icon icon={ChevronRight} size={12} className="text-[var(--uf-text-muted)]" />
          )}
          {crumb.hash ? (
            <a
              href={crumb.hash}
              className="text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] transition truncate max-w-[120px]"
            >
              {crumb.label}
            </a>
          ) : (
            <span className="text-[var(--uf-text-secondary)] font-medium truncate max-w-[180px]">
              {crumb.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ── Search Button ── */
function SearchButton() {
  return (
    <button
      type="button"
      onClick={() => {
        // Dispatch ⌘K event
        window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
      }}
      className="hidden sm:flex items-center gap-2 h-8 rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel)] px-3 text-xs text-[var(--uf-text-muted)] hover:border-[var(--uf-border-hover)] hover:text-[var(--uf-text-secondary)] transition"
    >
      <Icon icon={Search} size={14} />
      <span>Search</span>
      <kbd className="ml-1 rounded border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-1.5 py-0.5 text-[10px] font-medium">
        ⌘K
      </kbd>
    </button>
  );
}

/* ── Upgrade Pill ── */
function UpgradePill() {
  const { navigate } = useRoute();
  const { copiesUsed, maxFree, remainingCopies, isUpgradeOpen, openUpgradeModal, closeUpgradeModal } = useCopyQuota();

  return (
    <>
      <button
        type="button"
        onClick={openUpgradeModal}
        title={`${copiesUsed} of ${maxFree} free copies used today.`}
        className={`hidden md:flex items-center gap-1.5 h-7 rounded-full border px-2.5 text-[11px] font-semibold transition ${
          remainingCopies === 0
            ? "border-amber-500/30 bg-amber-500/15 text-amber-300 animate-pulse"
            : "border-purple-500/20 bg-purple-500/[0.08] text-purple-400 hover:bg-purple-500/[0.14]"
        }`}
      >
        <Icon icon={Gem} size={12} />
        <span>{remainingCopies > 0 ? `${remainingCopies} free` : "Upgrade"}</span>
      </button>

      <UpgradeDialog
        isOpen={isUpgradeOpen}
        onClose={closeUpgradeModal}
        copiesUsed={copiesUsed}
      />
    </>
  );
}

/* ── Feedback Button ── */
function FeedbackButton() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  return (
    <div className="relative hidden md:block">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[var(--uf-text-muted)] hover:bg-white/[0.06] hover:text-[var(--uf-text-secondary)] transition"
        aria-label="Send feedback"
      >
        <Icon icon={MessageSquare} size={16} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-50 w-72 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-3 shadow-xl animate-fade-in">
            <h4 className="text-xs font-semibold text-[var(--uf-text)] mb-2">Send feedback</h4>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What's on your mind?"
              rows={3}
              className="w-full rounded-md border border-[var(--uf-border)] bg-[var(--uf-bg)] px-3 py-2 text-xs text-[var(--uf-text)] placeholder:text-[var(--uf-text-muted)] focus:border-[var(--uf-accent)] focus:outline-none resize-none"
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={() => { setOpen(false); setText(""); }}
                className="rounded-md bg-[var(--uf-accent)] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition"
              >
                Send
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* ── Bookmarks Button ── */
function BookmarksButton() {
  const { openDrawer, savedComponents } = useBookmarks();
  return (
    <button
      type="button"
      onClick={openDrawer}
      aria-label={`Saved components (${savedComponents.length})`}
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-md text-[var(--uf-text-muted)] hover:bg-white/[0.06] hover:text-[var(--uf-text-secondary)] transition"
    >
      <Icon
        icon={Bookmark}
        size={16}
        className={savedComponents.length > 0 ? "text-[var(--uf-accent)] fill-[var(--uf-accent)]" : ""}
      />
      {savedComponents.length > 0 && (
        <span className="absolute -top-0.5 -right-0.5 grid h-3.5 min-w-3.5 place-items-center rounded-full bg-[var(--uf-accent)] px-0.5 text-[8px] font-bold text-white leading-none">
          {savedComponents.length}
        </span>
      )}
    </button>
  );
}

/* ── Auth Section ── */
function AuthSection() {
  const { user, loading } = useAuth();
  const { navigate } = useRoute();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();

  if (loading) {
    return <div className="h-8 w-16 rounded-lg skeleton" />;
  }

  if (user) {
    return (
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 rounded-full border border-[var(--uf-border)] bg-[var(--uf-panel)] p-0.5 pr-2.5 transition hover:border-[var(--uf-border-hover)]"
        >
          <div className="h-6 w-6 overflow-hidden rounded-full bg-gradient-to-br from-[var(--uf-accent)] to-purple-500">
            {user.user_metadata?.avatar_url ? (
              <img src={user.user_metadata.avatar_url} alt="" className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-[9px] font-bold text-white">
                {user.email?.slice(0, 2).toUpperCase()}
              </div>
            )}
          </div>
          <span className="hidden sm:inline text-xs font-medium text-[var(--uf-text-secondary)]">
            {user.user_metadata?.full_name || user.email?.split("@")[0]}
          </span>
        </button>

        {menuOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
            <div className="absolute right-0 top-full mt-2 z-50 w-52 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-1 shadow-xl animate-fade-in">
              <MenuButton icon={User} label="Profile" onClick={() => { navigate("#/profile"); setMenuOpen(false); }} />
              <MenuButton icon={Sparkles} label="Creator Studio" onClick={() => { navigate("#/studio"); setMenuOpen(false); }} />
              <MenuButton icon={CreditCard} label="Billing" onClick={() => { navigate("#/pricing"); setMenuOpen(false); }} />
              <div className="my-1 border-t border-[var(--uf-border)]" />
              <MenuButton
                icon={theme === "dark" ? Sun : Moon}
                label={theme === "dark" ? "Light mode" : "Dark mode"}
                onClick={toggle}
              />
              <div className="my-1 border-t border-[var(--uf-border)]" />
              <MenuButton icon={LogOut} label="Sign out" onClick={() => setMenuOpen(false)} />
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5">
      {/* Theme toggle for signed-out users */}
      <button
        type="button"
        onClick={toggle}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-[var(--uf-text-muted)] hover:bg-white/[0.06] transition"
      >
        <Icon icon={theme === "dark" ? Sun : Moon} size={16} />
      </button>

      <button
        type="button"
        onClick={() => navigate("#/signin")}
        className="px-2.5 py-1.5 text-xs font-medium text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] transition"
      >
        Sign in
      </button>
      <button
        type="button"
        onClick={() => navigate("#/signin?mode=signup")}
        className="rounded-lg bg-[var(--uf-accent)] px-3 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[var(--uf-accent-hover)] active:scale-[0.97]"
      >
        Sign up
      </button>
    </div>
  );
}

/* ── Avatar Menu Button ── */
function MenuButton({
  icon,
  label,
  onClick,
}: {
  icon: typeof User;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[13px] text-[var(--uf-text-secondary)] hover:bg-white/[0.06] hover:text-[var(--uf-text)] transition"
    >
      <Icon icon={icon} size={14} className="text-[var(--uf-text-muted)]" />
      <span>{label}</span>
    </button>
  );
}
