/**
 * Components Landing Page — Rail carousels with horizontal scrollers
 * Also handles "Featured" and "Newest" views.
 */
import React, { useRef, useState } from "react";
import { ArrowRight, ChevronRight, Star, Flame, TrendingUp, Sparkles, Bookmark, Eye } from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useRoute } from "../lib/router";
import { ALL_COMPONENTS, type ComponentItem } from "../data/components";
import { CATEGORY_BY_SLUG, ALL_CATEGORIES } from "../data/categories";
import { ComponentCard } from "../components/ComponentCard";

/* ── Rail data ── */
const RAIL_CONFIGS = [
  { title: "Newest", icon: Flame, color: "text-rose-400", filter: (c: ComponentItem) => true, sort: (a: ComponentItem, b: ComponentItem) => b.createdAt - a.createdAt, link: "#/components?sort=newest" },
  { title: "Popular", icon: TrendingUp, color: "text-emerald-400", filter: (c: ComponentItem) => true, sort: (a: ComponentItem, b: ComponentItem) => b.likes - a.likes, link: "#/components?sort=popular" },
  { title: "Heroes", icon: Sparkles, color: "text-amber-400", filter: (c: ComponentItem) => c.categorySlug === "heroes", sort: (a: ComponentItem, b: ComponentItem) => b.featured - a.featured, link: "#/components/s/heroes" },
  { title: "Buttons", icon: Star, color: "text-blue-400", filter: (c: ComponentItem) => c.categorySlug === "buttons", sort: (a: ComponentItem, b: ComponentItem) => b.likes - a.likes, link: "#/components/s/buttons" },
  { title: "Cards", icon: Star, color: "text-violet-400", filter: (c: ComponentItem) => c.categorySlug === "cards", sort: (a: ComponentItem, b: ComponentItem) => b.likes - a.likes, link: "#/components/s/cards" },
  { title: "AI Chat Components", icon: Sparkles, color: "text-cyan-400", filter: (c: ComponentItem) => c.categorySlug === "ai-chats", sort: (a: ComponentItem, b: ComponentItem) => b.featured - a.featured, link: "#/components/s/ai-chats" },
  { title: "Testimonials", icon: Star, color: "text-pink-400", filter: (c: ComponentItem) => c.categorySlug === "testimonials", sort: (a: ComponentItem, b: ComponentItem) => b.likes - a.likes, link: "#/components/s/testimonials" },
  { title: "Pricing Sections", icon: Star, color: "text-orange-400", filter: (c: ComponentItem) => c.categorySlug === "pricing-sections", sort: (a: ComponentItem, b: ComponentItem) => b.likes - a.likes, link: "#/components/s/pricing-sections" },
];

export function ComponentsLandingPage() {
  const { route, navigate } = useRoute();

  if (route.page === "components-featured") {
    return <FeaturedView />;
  }

  if (route.page === "components-newest") {
    return <NewestView />;
  }

  // Default: Components landing with rails
  return (
    <div className="page-enter px-6 py-8 max-w-[1400px] mx-auto">
      <h1 className="text-2xl font-bold text-[var(--uf-text)]">Components</h1>
      <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">
        Browse 12,000+ React components built with Tailwind CSS. Copy code or AI prompts.
      </p>

      <div className="mt-8 space-y-10">
        {RAIL_CONFIGS.map((rail) => {
          const items = ALL_COMPONENTS
            .filter(rail.filter)
            .sort(rail.sort)
            .slice(0, 12);

          if (items.length === 0) return null;

          return (
            <Rail
              key={rail.title}
              title={rail.title}
              icon={rail.icon}
              iconColor={rail.color}
              items={items}
              viewAllLink={rail.link}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ── Horizontal Rail ── */
function Rail({
  title,
  icon,
  iconColor,
  items,
  viewAllLink,
}: {
  title: string;
  icon: typeof Star;
  iconColor: string;
  items: ComponentItem[];
  viewAllLink: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { navigate } = useRoute();

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Icon icon={icon} size={16} className={iconColor} />
          <h2 className="text-base font-semibold text-[var(--uf-text)]">{title}</h2>
        </div>
        <button
          onClick={() => navigate(viewAllLink)}
          className="flex items-center gap-1 text-xs font-medium text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] transition"
        >
          View all
          <Icon icon={ChevronRight} size={14} />
        </button>
      </div>

      <div className="relative group/rail">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-thin pb-2 scroll-smooth"
        >
          {items.map((item) => (
            <RailCard key={item.id} item={item} />
          ))}
        </div>

        {/* Scroll button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-[var(--uf-border)] bg-[var(--uf-panel)] shadow-lg flex items-center justify-center text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] hover:border-[var(--uf-border-hover)] transition opacity-0 group-hover/rail:opacity-100"
        >
          <Icon icon={ChevronRight} size={18} />
        </button>
      </div>
    </div>
  );
}

/* ── Rail Card ── */
function RailCard({ item }: { item: ComponentItem }) {
  return (
    <div className="shrink-0 w-[270px]">
      <ComponentCard item={item} />
    </div>
  );
}

/* ── Featured View ── */
function FeaturedView() {
  const { navigate } = useRoute();
  const featured = ALL_COMPONENTS.filter((c) => c.featured >= 6).slice(0, 24);

  return (
    <div className="page-enter px-6 py-8 max-w-[1400px] mx-auto">
      <h1 className="text-2xl font-bold text-[var(--uf-text)]">Featured Components</h1>
      <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">
        Hand-curated components with exceptional design and interactivity.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((item, i) => (
          <ComponentCard key={item.id} item={item} priority={i} />
        ))}
      </div>
    </div>
  );
}

/* ── Newest Weekly Leaderboard ── */
function NewestView() {
  const { navigate } = useRoute();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Get current ISO week
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  const weekLabel = weekStart.toLocaleDateString("en-US", { month: "short", day: "numeric" }) +
    " - " +
    new Date(weekStart.getTime() + 6 * 86400000).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  const newest = ALL_COMPONENTS
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 30);

  const getRankBadge = (i: number) => {
    if (i === 0) return { emoji: "🥇", text: "#1 of Week", style: "bg-amber-400/15 text-amber-400 border-amber-400/30" };
    if (i === 1) return { emoji: "🥈", text: "#2 of Week", style: "bg-neutral-300/15 text-neutral-300 border-neutral-300/30" };
    if (i === 2) return { emoji: "🥉", text: "#3 of Week", style: "bg-amber-700/15 text-amber-600 border-amber-700/30" };
    return { emoji: "", text: `#${i + 1}`, style: "bg-white/5 text-[var(--uf-text-muted)] border-[var(--uf-border)]" };
  };

  return (
    <div className="page-enter px-6 py-8 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[var(--uf-text)]">
            Best Components of This Week
          </h1>
          <p className="mt-1 text-sm text-[var(--uf-text-secondary)]">{weekLabel}</p>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel)] p-0.5">
          <button
            onClick={() => setViewMode("grid")}
            className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
              viewMode === "grid" ? "bg-white/[0.1] text-[var(--uf-text)]" : "text-[var(--uf-text-muted)]"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`rounded-md px-2.5 py-1 text-xs font-medium transition ${
              viewMode === "list" ? "bg-white/[0.1] text-[var(--uf-text)]" : "text-[var(--uf-text-muted)]"
            }`}
          >
            List
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newest.map((item, i) => {
            const rank = getRankBadge(i);
            return (
              <div key={item.id} className="relative">
                {i < 3 && (
                  <span className={`absolute top-2 right-2 z-10 rounded-full border px-2 py-0.5 text-[9px] font-bold ${rank.style}`}>
                    {rank.text}
                  </span>
                )}
                <ComponentCard item={item} priority={i} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border border-[var(--uf-border)] overflow-hidden">
          {newest.map((item, i) => {
            const rank = getRankBadge(i);
            return (
              <div
                key={item.id}
                onClick={() => navigate(`#/component/${item.id}`)}
                className="flex items-center gap-4 px-4 py-3 border-b border-[var(--uf-border)] last:border-b-0 hover:bg-white/[0.02] transition cursor-pointer"
              >
                {/* Rank */}
                <div className="w-10 text-center shrink-0">
                  {i < 3 ? (
                    <span className="text-lg">{rank.emoji}</span>
                  ) : (
                    <span className="text-xs font-bold text-[var(--uf-text-muted)]">{rank.text}</span>
                  )}
                </div>

                {/* Thumbnail */}
                <div className="h-12 w-20 shrink-0 rounded-md bg-[var(--uf-panel-2)] preview-grid-bg flex items-center justify-center">
                  <span className="text-[8px] text-[var(--uf-text-muted)]">{item.categorySlug}</span>
                </div>

                {/* Info */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[var(--uf-text)] truncate">{item.title}</span>
                    <span className="text-xs text-[var(--uf-text-muted)]">·</span>
                    <span className="text-xs text-[var(--uf-text-muted)] truncate">Default</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className={`h-4 w-4 rounded-full flex items-center justify-center text-[7px] font-bold text-white bg-gradient-to-br ${item.author?.avatarColor || "bg-indigo-600"}`}>
                      {item.author?.avatarText || "U"}
                    </div>
                    <span className="text-[11px] text-[var(--uf-text-muted)]">{item.author?.name || "Anonymous"}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 shrink-0 text-xs text-[var(--uf-text-muted)]">
                  <span className="flex items-center gap-1">
                    <Icon icon={Eye} size={12} />
                    {(item.views ?? 0).toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon icon={Bookmark} size={12} />
                    {(item.likes ?? 0).toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
