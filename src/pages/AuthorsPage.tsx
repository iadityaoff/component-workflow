/**
 * Authors Page — Top authors ranked by bookmarks in the last 30 days.
 */
import React from "react";
import { Heart, ExternalLink, BookmarkIcon } from "lucide-react";
import { Icon } from "../components/ui/Icon";

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const now = new Date();
const currentMonth = `${MONTHS[now.getMonth()]} ${now.getFullYear()}`;

interface AuthorData {
  rank: number;
  name: string;
  handle: string;
  avatarText: string;
  avatarGradient: string;
  bookmarks: number;
  components: number;
  supportUrl?: string;
}

const TOP_AUTHORS: AuthorData[] = [
  { rank: 1, name: "ShadcnSpace", handle: "shadcnspace", avatarText: "S", avatarGradient: "from-blue-500 to-indigo-600", bookmarks: 7426, components: 50, supportUrl: "#" },
  { rank: 2, name: "Aceternity", handle: "aceternity", avatarText: "A", avatarGradient: "from-violet-500 to-purple-600", bookmarks: 6891, components: 42 },
  { rank: 3, name: "MagicUI", handle: "magicui", avatarText: "M", avatarGradient: "from-pink-500 to-rose-600", bookmarks: 5234, components: 38, supportUrl: "#" },
  { rank: 4, name: "Ibelick", handle: "ibelick", avatarText: "I", avatarGradient: "from-cyan-500 to-teal-600", bookmarks: 4102, components: 31 },
  { rank: 5, name: "Serafim", handle: "serafimcloud", avatarText: "SC", avatarGradient: "from-amber-500 to-orange-600", bookmarks: 3876, components: 27, supportUrl: "#" },
  { rank: 6, name: "Cult/ui", handle: "cultui", avatarText: "C", avatarGradient: "from-emerald-500 to-green-600", bookmarks: 3201, components: 24 },
  { rank: 7, name: "Nelson", handle: "nelsonr", avatarText: "N", avatarGradient: "from-red-500 to-rose-600", bookmarks: 2987, components: 19 },
  { rank: 8, name: "Horizon UI", handle: "horizonui", avatarText: "H", avatarGradient: "from-indigo-500 to-blue-600", bookmarks: 2456, components: 16 },
  { rank: 9, name: "Luxe UI", handle: "luxeui", avatarText: "L", avatarGradient: "from-fuchsia-500 to-pink-600", bookmarks: 2134, components: 14, supportUrl: "#" },
  { rank: 10, name: "Animata", handle: "animata", avatarText: "A", avatarGradient: "from-sky-500 to-cyan-600", bookmarks: 1890, components: 12 },
];

function getRankStyle(rank: number) {
  if (rank === 1) return "bg-amber-400/20 text-amber-400 border-amber-400/30";
  if (rank === 2) return "bg-neutral-300/20 text-neutral-300 border-neutral-300/30";
  if (rank === 3) return "bg-amber-700/20 text-amber-600 border-amber-700/30";
  return "bg-white/5 text-[var(--uf-text-muted)] border-[var(--uf-border)]";
}

export function AuthorsPage() {
  return (
    <div className="page-enter px-6 py-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-[var(--uf-text)]">
        Top authors in {currentMonth}
      </h1>
      <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">
        Ranked by bookmarks on components published in the last 30 days.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {TOP_AUTHORS.map((author) => (
          <div
            key={author.handle}
            className="flex items-center gap-4 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4 card-hover transition"
          >
            {/* Rank badge */}
            <div className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border text-xs font-bold ${getRankStyle(author.rank)}`}>
              {author.rank}
            </div>

            {/* Avatar */}
            <div className={`h-10 w-10 shrink-0 rounded-full bg-gradient-to-br ${author.avatarGradient} flex items-center justify-center text-sm font-bold text-white shadow-sm`}>
              {author.avatarText}
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-[var(--uf-text)] truncate">{author.name}</h3>
                {author.supportUrl && (
                  <button className="flex items-center gap-1 rounded-full border border-pink-500/20 bg-pink-500/10 px-2 py-0.5 text-[10px] font-medium text-pink-400 hover:bg-pink-500/20 transition">
                    <Icon icon={Heart} size={10} />
                    Support
                  </button>
                )}
              </div>
              <p className="text-xs text-[var(--uf-text-muted)]">@{author.handle}</p>

              <div className="mt-2 flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1 text-[var(--uf-text-secondary)]">
                  <Icon icon={BookmarkIcon} size={12} className="text-[var(--uf-accent)]" />
                  <span className="font-semibold">{(author.bookmarks ?? 0).toLocaleString()}</span>
                  <span className="text-[var(--uf-text-muted)]">bookmarks</span>
                </span>
                <span className="text-[var(--uf-text-muted)]">|</span>
                <span className="flex items-center gap-1 text-[var(--uf-text-secondary)]">
                  <span className="font-semibold">{author.components ?? 0}</span>
                  <span className="text-[var(--uf-text-muted)]">components</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
