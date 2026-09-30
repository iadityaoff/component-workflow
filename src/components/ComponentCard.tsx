import React, { useState, memo } from "react";
import type { ComponentItem } from "../data/components";
import { CATEGORY_BY_SLUG } from "../data/categories";
import { useRoute } from "../lib/router";
import { useBookmarks } from "../lib/bookmarks";
import { useToast } from "./Toast";
import { LazyCardPreview } from "./LazyCardPreview";
import {
  Check,
  Copy,
  Terminal,
  Heart,
  Eye,
  Sparkles,
  Bookmark,
  ChevronDown,
  FileText
} from "lucide-react";
import { Icon } from "./ui/Icon";

interface Props {
  item: ComponentItem;
  priority?: number;
}

function ComponentCardInner({ item, priority = 0 }: Props) {
  const { navigate, setQuery } = useRoute();
  const { isSaved, toggleSave } = useBookmarks();
  const { toast } = useToast();
  const saved = isSaved(item.id);
  const [copiedKind, setCopiedKind] = useState<string | null>(null);
  const [promptMenuOpen, setPromptMenuOpen] = useState(false);

  async function copyPrompt(e: React.MouseEvent, modifier?: string) {
    e.stopPropagation();
    let text = item.prompt;
    if (modifier) {
      text = `[Optimized for ${modifier}]\n\n${text}`;
    }
    try {
      await navigator.clipboard.writeText(text);
      setCopiedKind(modifier || "prompt");
      toast("success", modifier ? `Prompt copied for ${modifier}!` : "Prompt copied!");
      setTimeout(() => setCopiedKind(null), 1400);
    } catch {
      toast("error", "Failed to copy");
    }
    setPromptMenuOpen(false);
  }

  const category = CATEGORY_BY_SLUG[item.categorySlug];

  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] card-hover transition cursor-pointer"
      onClick={() => setQuery({ preview: item.id })}
      onMouseLeave={() => setPromptMenuOpen(false)}
    >
      {/* ── Card Header: Author info + Bookmark ── */}
      <div className="flex items-center justify-between px-3 pt-3 pb-2">
        <div className="flex items-center gap-2 min-w-0">
          <div
            className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-[8px] font-bold text-white bg-gradient-to-br ${
              item.author?.avatarColor || "bg-indigo-600"
            }`}
          >
            {item.author?.avatarText || "U"}
          </div>
          <a href={`#/components?author=${encodeURIComponent(item.author.handle)}`} onClick={(e) => e.stopPropagation()} className="truncate text-xs font-medium text-[var(--uf-text-secondary)] hover:underline">
            {item.author?.name || "Anonymous"}
          </a>
        </div>

        <div className="flex items-center gap-1">
          {item.featured >= 9 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-1.5 py-0.5 text-[9px] font-semibold text-amber-500">
              <Icon icon={Sparkles} size={10} />
              Featured
            </span>
          )}
          <button
            type="button"
            className={`grid h-6 w-6 place-items-center rounded-md transition ${
              saved
                ? "text-amber-500 bg-amber-500/10"
                : "text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] hover:bg-white/[0.06]"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              const next = toggleSave(item.id);
              toast(next ? "success" : "info", next ? "Saved" : "Removed");
            }}
            aria-pressed={saved}
            aria-label={`${saved ? "Remove bookmark for" : "Bookmark"} ${item.title}`}
            title={saved ? "Remove" : "Save"}
          >
            <Icon icon={Bookmark} size={14} className={saved ? "fill-amber-500" : ""} />
          </button>
        </div>
      </div>

      {/* ── Preview Area ── */}
      <div className="relative aspect-[4/3] w-full border-y border-[var(--uf-border)] bg-[var(--uf-panel-2)] preview-grid-bg">
        <LazyCardPreview code={item.code} compiledCode={item.compiledCode} title={item.title} priority={priority} />

        {/* Hover overlay actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="pointer-events-auto flex gap-2 translate-y-2 group-hover:translate-y-0 transition-transform">
            
            <div className="relative">
              <div className="inline-flex rounded-lg shadow-xl">
                <button
                  type="button"
                  onClick={(e) => copyPrompt(e)}
                  className="inline-flex items-center gap-1.5 rounded-l-lg bg-[var(--uf-accent)] px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition"
                >
                  <Icon icon={copiedKind === "prompt" ? Check : FileText} size={12} />
                  <span>{copiedKind === "prompt" ? "Copied" : "Prompt"}</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPromptMenuOpen(!promptMenuOpen);
                  }}
                  className="rounded-r-lg border-l border-white/20 bg-[var(--uf-accent)] px-1.5 py-1.5 text-white hover:bg-[var(--uf-accent-hover)] transition"
                >
                  <Icon icon={ChevronDown} size={12} />
                </button>
              </div>

              {promptMenuOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 z-30 w-36 rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel)] p-1 shadow-xl">
                  <button
                    onClick={(e) => copyPrompt(e, "Claude")}
                    className="w-full rounded px-2 py-1 text-left text-[10px] font-medium text-[var(--uf-text)] hover:bg-white/[0.06] transition"
                  >
                    Claude
                  </button>
                  <button
                    onClick={(e) => copyPrompt(e, "Cursor")}
                    className="w-full rounded px-2 py-1 text-left text-[10px] font-medium text-[var(--uf-text)] hover:bg-white/[0.06] transition"
                  >
                    Cursor
                  </button>
                  <button
                    onClick={(e) => copyPrompt(e, "v0")}
                    className="w-full rounded px-2 py-1 text-left text-[10px] font-medium text-[var(--uf-text)] hover:bg-white/[0.06] transition"
                  >
                    v0.dev
                  </button>
                </div>
              )}
            </div>
            
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`#/component/${item.id}`);
              }}
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 transition"
              title="View details"
            >
              <Icon icon={Eye} size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Card Footer ── */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[13px] font-semibold text-[var(--uf-text)]">
            <button type="button" onClick={(e) => { e.stopPropagation(); setQuery({ preview: item.id }); }} className="max-w-full truncate text-left focus-visible:ring-2 focus-visible:ring-violet-500" aria-label={`Preview ${item.title}`}>{item.title}</button>
          </h3>
          <p className="truncate text-[11px] text-[var(--uf-text-muted)]">
            {category?.name || "Component"}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-[11px] font-medium text-[var(--uf-text-muted)] tabular-nums">
          <span className="flex items-center gap-1 group-hover:text-rose-400 transition-colors">
            <Icon icon={Heart} size={11} className={saved ? "fill-rose-400 text-rose-400" : ""} />
            {item.likes ?? 0}
          </span>
          <span className="flex items-center gap-1 group-hover:text-[var(--uf-text-secondary)] transition-colors">
            <Icon icon={Eye} size={11} />
            {item.views ?? 0}
          </span>
        </div>
      </div>
    </article>
  );
}

export const ComponentCard = memo(ComponentCardInner);
