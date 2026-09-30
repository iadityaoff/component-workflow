/**
 * Libraries Page — React UI Component Libraries directory.
 */
import React, { useState } from "react";
import { Search, ExternalLink, Package, Eye, Clock } from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { ALL_COMPONENTS } from "../data/components";
import { ComponentGrid } from "../components/ComponentGrid";
import { useRoute } from "../lib/router";

interface LibraryData {
  slug: string;
  name: string;
  handle: string;
  description: string;
  logoText: string;
  logoGradient: string;
  components: number;
  views: string;
  updated: string;
  categories: string[];
  badge?: string;
}

const LIBRARIES: LibraryData[] = [
  { slug: "shadcn-ui", name: "shadcn/ui", handle: "@shadcn", description: "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.", logoText: "S", logoGradient: "from-neutral-700 to-neutral-900", components: 88, views: "19M", updated: "yesterday", categories: ["Design system"], badge: "Updated" },
  { slug: "aceternity-ui", name: "Aceternity UI", handle: "@aceternity", description: "Copy paste the most trending React components without having to worry about styling and integrations.", logoText: "A", logoGradient: "from-violet-600 to-indigo-800", components: 124, views: "8.2M", updated: "2 days ago", categories: ["Motion", "Marketing UI"] },
  { slug: "magic-ui", name: "Magic UI", handle: "@magicui", description: "UI library for design engineers. Free and open-source animated components and effects.", logoText: "M", logoGradient: "from-blue-500 to-cyan-600", components: 76, views: "5.1M", updated: "3 days ago", categories: ["Motion", "Marketing UI"], badge: "Updated" },
  { slug: "cult-ui", name: "Cult/ui", handle: "@cultui", description: "Accessible components built with Radix UI and Tailwind CSS. Production-ready.", logoText: "C", logoGradient: "from-emerald-500 to-teal-600", components: 54, views: "3.4M", updated: "1 week ago", categories: ["Design system"] },
  { slug: "ibelick", name: "Ibelick", handle: "@ibelick", description: "Beautiful background components, text animations and interactive effects for React and Tailwind CSS.", logoText: "I", logoGradient: "from-pink-500 to-rose-600", components: 42, views: "2.8M", updated: "4 days ago", categories: ["Motion"] },
  { slug: "luxe-ui", name: "Luxe UI", handle: "@luxeui", description: "Premium component library with smooth animations and glass effects.", logoText: "L", logoGradient: "from-fuchsia-500 to-purple-700", components: 38, views: "1.9M", updated: "5 days ago", categories: ["Design system", "Marketing UI"] },
  { slug: "animata", name: "Animata", handle: "@animata", description: "Hand-crafted interaction design components for modern React applications.", logoText: "A", logoGradient: "from-amber-500 to-orange-600", components: 31, views: "1.2M", updated: "1 week ago", categories: ["Motion"] },
  { slug: "horizon-ui", name: "Horizon UI", handle: "@horizonui", description: "Full-stack React dashboard template for professional and admin panels.", logoText: "H", logoGradient: "from-sky-500 to-blue-700", components: 67, views: "980K", updated: "2 weeks ago", categories: ["Dashboard UI"] },
];

export function LibrariesPage() {
  const [search, setSearch] = useState("");
  const { navigate, route } = useRoute();

  const filtered = LIBRARIES.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.handle.toLowerCase().includes(search.toLowerCase())
  );

  if (route.librarySlug) {
    const library = LIBRARIES.find(lib => lib.slug === route.librarySlug);
    const handle = library?.handle.replace(/^@/, "");
    const items = ALL_COMPONENTS.filter(item => item.author.handle === handle);
    return <section className="mx-auto max-w-6xl p-4 sm:p-8">
      <a href="#/libraries" className="text-sm underline">All libraries</a>
      <h1 className="mt-5 text-2xl font-bold">{library?.name || "Library not found"}</h1>
      <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">{library?.description || "This library is not in the local catalog."}</p>
      <p className="my-6 text-sm">{items.length} local components attributed to this library. Reference membership has not been verified.</p>
      <ComponentGrid items={items} />
    </section>;
  }
  return (
    <div className="page-enter px-6 py-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-[var(--uf-text)]">
        React UI Component Libraries
      </h1>
      <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">
        Discover and browse curated component libraries from the community.
      </p>

      {/* Search */}
      <div className="mt-6 relative max-w-md">
        <Icon icon={Search} size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)]" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search libraries..."
          className="h-9 w-full rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel)] pl-9 pr-4 text-sm text-[var(--uf-text)] placeholder:text-[var(--uf-text-muted)] focus:border-[var(--uf-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--uf-accent)]/30"
        />
      </div>

      {/* Library grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((lib) => (
          <div
            key={lib.slug}
            className="rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-5 card-hover transition cursor-pointer group"
            onClick={() => navigate(`#/libraries/${lib.slug}`)}
          >
            <div className="flex items-start gap-3">
              {/* Logo */}
              <div className={`h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br ${lib.logoGradient} flex items-center justify-center text-sm font-bold text-white shadow-sm`}>
                {lib.logoText}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-[var(--uf-text)] group-hover:text-[var(--uf-accent)] transition truncate">
                    {lib.name}
                  </h3>
                  {lib.badge && (
                    <span className="shrink-0 rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-400">
                      {lib.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--uf-text-muted)]">{lib.handle}</p>
              </div>
            </div>

            <p className="mt-3 text-xs text-[var(--uf-text-secondary)] line-clamp-2 leading-relaxed">
              {lib.description}
            </p>

            <div className="mt-3 flex items-center gap-3 text-[10px] text-[var(--uf-text-muted)]">
              <span className="flex items-center gap-1">
                <Icon icon={Package} size={11} />
                {lib.components} components
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Icon icon={Eye} size={11} />
                {lib.views} views
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Icon icon={Clock} size={11} />
                updated {lib.updated}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
