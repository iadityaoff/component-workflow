/**
 * UIForge Home Page
 *
 * Features:
 * - Featured hero spotlight with auto-rotate
 * - Horizontal rails
 * - Feature pillars
 * - Bottom CTA
 */
import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight, Sparkles, Search, Copy, Check, Bookmark, Eye,
  Terminal, Layers, Code2, ChevronRight, Zap, Bot,
  Play, Pause,
} from "lucide-react";
import { useRoute } from "../lib/router";
import { useToast } from "../components/Toast";
import { Icon } from "../components/ui/Icon";
import { ALL_COMPONENTS, type ComponentItem } from "../data/components";
import { TOTAL_COMPONENT_COUNT } from "../data/categories";
import { ComponentCard } from "../components/ComponentCard";
import { LazyCardPreview } from "../components/LazyCardPreview";
import { CopyPromptDropdown } from "../components/CopyPromptDropdown";

const QUICK_PILLS = [
  { label: "All", slug: "" },
  { label: "Heroes", slug: "heroes" },
  { label: "Buttons", slug: "buttons" },
  { label: "Cards", slug: "cards" },
  { label: "Backgrounds", slug: "backgrounds" },
  { label: "AI Chats", slug: "ai-chats" },
  { label: "Shaders", slug: "shaders" },
  { label: "Pricing", slug: "pricing-sections" },
  { label: "Testimonials", slug: "testimonials" },
  { label: "Gradients", slug: "gradients" },
];

export function HomePage() {
  const { navigate } = useRoute();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Spotlight rotation
  const featured = ALL_COMPONENTS.filter((c) => c.featured >= 8).slice(0, 5);
  const [spotlightIdx, setSpotlightIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || featured.length === 0) return;
    const timer = setInterval(() => {
      setSpotlightIdx((i) => (i + 1) % featured.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [paused, featured.length]);

  const current = featured[spotlightIdx] || featured[0];
  const nextItem = featured[(spotlightIdx + 1) % featured.length];

  const handleCopy = async (e: React.MouseEvent, item: ComponentItem) => {
    e.stopPropagation();
    await navigator.clipboard.writeText(item.prompt);
    setCopiedId(item.id);
    toast("success", "Prompt copied!");
    setTimeout(() => setCopiedId(null), 1500);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`#/components?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate("#/components");
    }
  };

  // Rail data
  const newestItems = [...ALL_COMPONENTS].sort((a, b) => b.createdAt - a.createdAt).slice(0, 8);
  const popularItems = [...ALL_COMPONENTS].sort((a, b) => b.likes - a.likes).slice(0, 8);

  return (
    <div className="relative min-h-screen bg-[var(--uf-bg)] text-[var(--uf-text)] overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-tr from-[var(--uf-accent)]/15 via-indigo-500/10 to-purple-600/5 blur-[150px]" />
      <div className="pointer-events-none absolute top-[600px] -left-40 h-[400px] w-[400px] rounded-full bg-[var(--uf-accent)]/5 blur-[120px]" />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-12 pb-24 sm:px-6 lg:px-8">
        {/* Announcement pill */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("#/components")}
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs text-[var(--uf-text-secondary)] backdrop-blur-md transition hover:border-white/[0.15] hover:bg-white/[0.06]"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-[var(--uf-accent)] animate-pulse" />
            <span className="font-medium">{TOTAL_COMPONENT_COUNT.toLocaleString()}+ crafted React components & templates</span>
            <span className="text-[var(--uf-text-muted)] group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>

        {/* Hero */}
        <div className="mt-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            The{" "}
            <span className="font-display italic font-normal bg-gradient-to-r from-[var(--uf-accent)] via-indigo-300 to-rose-300 bg-clip-text text-transparent">
              living
            </span>{" "}
            library
            <br />
            of interfaces
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-[var(--uf-text-secondary)] leading-relaxed">
            Crafted React components, templates, and shadcn themes. Built by real design engineers with copy-paste code and AI prompts.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-xl">
          <form onSubmit={handleSearch} className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)]">
              <Icon icon={Search} size={18} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${TOTAL_COMPONENT_COUNT.toLocaleString()}+ components, shaders, buttons…`}
              className="h-12 w-full rounded-2xl border border-white/[0.08] bg-white/[0.04] pl-11 pr-28 text-sm text-[var(--uf-text)] placeholder-[var(--uf-text-muted)] backdrop-blur-md transition focus:border-[var(--uf-accent)]/40 focus:bg-white/[0.06] focus:outline-none focus:ring-4 focus:ring-[var(--uf-accent)]/10"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-xl bg-[var(--uf-accent)] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-[var(--uf-accent)]/20 transition hover:bg-[var(--uf-accent-hover)] active:scale-95"
            >
              Explore
            </button>
          </form>
        </div>

        {/* Quick pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {QUICK_PILLS.map((pill) => (
            <button
              key={pill.label}
              type="button"
              onClick={() => {
                if (pill.slug) navigate(`#/components/s/${pill.slug}`);
                else navigate("#/components");
              }}
              className="rounded-full px-4 py-1.5 text-xs font-medium border border-white/[0.08] bg-white/[0.02] text-[var(--uf-text-secondary)] hover:border-white/[0.15] hover:bg-white/[0.06] transition"
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* ── Featured Spotlight ── */}
        {current && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold tracking-tight text-[var(--uf-text)] flex items-center gap-2">
                <Icon icon={Sparkles} size={18} className="text-[var(--uf-accent)]" />
                Featured
              </h2>
              <button onClick={() => navigate("#/components/featured")} className="text-xs font-medium text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] flex items-center gap-1 transition">
                View all <Icon icon={ArrowRight} size={14} />
              </button>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
              {/* Spotlight content */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="text-2xl sm:text-3xl font-display italic text-[var(--uf-text)]">
                      {current.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--uf-text-secondary)] line-clamp-2 max-w-lg">
                      {current.description}
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white bg-gradient-to-br ${current.author?.avatarColor || "bg-indigo-600"}`}>
                          {current.author?.avatarText || "U"}
                        </div>
                        <span className="text-xs text-[var(--uf-text-secondary)]">{current.author?.name || "Anonymous"}</span>
                      </div>
                      <span className="flex items-center gap-1 text-xs text-[var(--uf-text-muted)]">
                        <Icon icon={Bookmark} size={12} /> {(current.likes ?? 0).toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[var(--uf-text-muted)]">
                        <Icon icon={Eye} size={12} /> {(current.views ?? 0).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => navigate(`#/component/${current.id}`)}
                      className="rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel)] px-3 py-2 text-xs font-medium text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] transition"
                      title="View component details"
                    >
                      <Icon icon={Bookmark} size={14} />
                    </button>
                    <CopyPromptDropdown item={current} />
                  </div>
                </div>
              </div>

              {/* Preview area */}
              <div className="h-64 sm:h-80 bg-[var(--uf-panel-2)] preview-grid-bg relative border-t border-white/[0.06] overflow-hidden">
                <LazyCardPreview
                  code={current.code}
                  compiledCode={current.compiledCode}
                  title={current.title}
                  priority={0}
                  fullHeight
                />
              </div>

              {/* Progress footer */}
              <div className="flex items-center justify-between px-6 py-3 border-t border-white/[0.06] text-xs text-[var(--uf-text-muted)]">
                <div className="flex items-center gap-2">
                  {/* Progress ring */}
                  <svg width="16" height="16" viewBox="0 0 16 16" className="-rotate-90">
                    <circle cx="8" cy="8" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
                    <circle
                      cx="8" cy="8" r="6" fill="none"
                      stroke="var(--uf-accent)" strokeWidth="1.5"
                      strokeDasharray={`${((spotlightIdx + 1) / featured.length) * 37.7} 37.7`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Up next — {nextItem?.title}</span>
                </div>
                <button
                  onClick={() => setSpotlightIdx((i) => (i + 1) % featured.length)}
                  className="text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] transition"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Rails ── */}
        <div className="mt-16 space-y-12">
          <HomeRail title="Newest" items={newestItems} link="#/components?sort=newest" />
          <HomeRail title="Popular" items={popularItems} link="#/components?sort=popular" />
        </div>

        {/* ── Design Bug Bot Banner ── */}
        <div className="mt-16 rounded-2xl border border-blue-500/15 bg-gradient-to-r from-blue-500/[0.06] via-transparent to-violet-500/[0.04] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <Icon icon={Bot} size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-[var(--uf-text)]">Design Bug Bot</h3>
            <p className="text-xs text-[var(--uf-text-secondary)] mt-1">Design review on every pull request. Five reviews free.</p>
          </div>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 transition shrink-0">
            Add Bug Bot
          </button>
        </div>

        {/* ── Feature Pillars ── */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-white/[0.06] pt-12">
          <FeatureCard
            icon={Code2}
            gradient="from-[var(--uf-accent)]/20 to-[var(--uf-accent)]/5"
            iconColor="text-[var(--uf-accent)]"
            title="Copy, Paste, Ship"
            desc="Clean React code with Tailwind CSS and Framer Motion. Zero vendor lock-in."
          />
          <FeatureCard
            icon={Sparkles}
            gradient="from-violet-500/20 to-violet-500/5"
            iconColor="text-violet-400"
            title="AI Prompts Built-In"
            desc="Every component includes prompts optimized for Claude, Cursor, v0, and more."
          />
          <FeatureCard
            icon={Layers}
            gradient="from-emerald-500/20 to-emerald-500/5"
            iconColor="text-emerald-400"
            title="Templates & Themes"
            desc="Full landing page templates, dashboard layouts, and custom shadcn themes."
          />
        </div>

        {/* ── Explore Everything ── */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-[var(--uf-text)]">Explore everything</h2>
          <p className="mt-1 text-sm text-[var(--uf-text-secondary)]">
            The whole catalogue, ranked for you and reshuffled daily.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_COMPONENTS.slice(0, 18).map((item, i) => (
              <ComponentCard key={item.id} item={item} priority={i} />
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-20 relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[var(--uf-accent)]/[0.06] via-[var(--uf-panel)] to-[var(--uf-bg)] p-10 sm:p-16 text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[var(--uf-accent)]/15 via-transparent to-transparent" />
          <h2 className="relative z-10 text-3xl sm:text-5xl font-black tracking-tight text-[var(--uf-text)]">
            Ready to craft exceptional interfaces?
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-sm sm:text-base text-[var(--uf-text-secondary)]">
            Join thousands of design engineers building modern websites with UIForge.
          </p>
          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate("#/components")}
              className="rounded-full bg-[var(--uf-accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--uf-accent)]/20 transition hover:bg-[var(--uf-accent-hover)] active:scale-95"
            >
              Browse All Components
            </button>
            <button
              onClick={() => navigate("#/signin?mode=signup")}
              className="rounded-full border border-white/[0.15] bg-white/[0.04] px-6 py-3 text-sm font-semibold text-[var(--uf-text)] backdrop-blur-md transition hover:bg-white/[0.08] active:scale-95"
            >
              Create Free Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Home Rail Component ── */
function HomeRail({ title, items, link }: { title: string; items: ComponentItem[]; link: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { navigate } = useRoute();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-[var(--uf-text)]">{title}</h2>
        <button
          onClick={() => navigate(link)}
          className="text-xs font-medium text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] flex items-center gap-1 transition"
        >
          View all <Icon icon={ChevronRight} size={14} />
        </button>
      </div>
      <div ref={scrollRef} className="flex gap-4 overflow-x-auto scrollbar-thin pb-3 scroll-smooth">
        {items.map((item, i) => (
          <div key={item.id} className="shrink-0 w-[270px]">
            <ComponentCard item={item} priority={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Feature Card ── */
function FeatureCard({
  icon,
  gradient,
  iconColor,
  title,
  desc,
}: {
  icon: typeof Code2;
  gradient: string;
  iconColor: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
      <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} ${iconColor} border border-white/[0.06]`}>
        <Icon icon={icon} size={20} />
      </div>
      <h3 className="mt-4 text-base font-bold text-[var(--uf-text)]">{title}</h3>
      <p className="mt-2 text-sm text-[var(--uf-text-secondary)] leading-relaxed">{desc}</p>
    </div>
  );
}
