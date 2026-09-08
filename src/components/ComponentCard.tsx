import React, { useState, memo } from "react";
import type { ComponentItem } from "../data/components";
import { CATEGORY_BY_SLUG } from "../data/categories";
import { useRoute } from "../lib/router";
import { LazyCardPreview } from "./LazyCardPreview";
import {
  Check,
  Copy,
  ExternalLink,
  Eye,
  Heart,
  Sparkles,
  FileText,
} from "lucide-react";
import { Icon } from "./ui/Icon";

interface Props {
  item: ComponentItem;
  priority?: number;
}

function ComponentCardInner({ item, priority = 0 }: Props) {
  const { navigate } = useRoute();
  const [copied, setCopied] = useState<"code" | "prompt" | null>(null);

  async function copy(e: React.MouseEvent, kind: "code" | "prompt") {
    e.stopPropagation();
    const text = kind === "code" ? item.code : item.prompt;
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      setCopied(kind);
      window.setTimeout(() => setCopied(null), 1400);
    }
  }

  const category = CATEGORY_BY_SLUG[item.categorySlug];

  return (
    <article
      className={[
        "card-premium group flex flex-col overflow-hidden rounded-xl border border-ink-200 bg-white shadow-card cursor-pointer dark:border-ink-800 dark:bg-ink-950",
        item.featured >= 9 ? "card-featured" : "",
      ].join(" ")}
      onClick={() => navigate(`#/component/${item.id}`)}
    >
      <div className="p-3 pb-0">
        <LazyCardPreview 
          code={item.code} 
          compiledCode={item.compiledCode} 
          title={item.title} 
          priority={priority} 
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <header className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-ink-900 dark:text-white">
              {item.title}
            </h3>
            <p className="mt-0.5 line-clamp-1 text-xs text-ink-500">
              {item.description}
            </p>
          </div>
          <button className="text-ink-400 hover:text-ink-900" onClick={e => e.stopPropagation()}>
            <Icon icon={Heart} size={16} />
          </button>
        </header>

        <div className="flex flex-wrap gap-1.5">
          {category && (
            <span className="rounded-full bg-ink-100 px-2 py-0.5 text-[10px] font-medium text-ink-600">
              {category.name}
            </span>
          )}
          {item.tags.slice(0, 2).map(t => (
            <span key={t} className="rounded-full border border-ink-100 px-2 py-0.5 text-[10px] text-ink-500">
              {t}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 mt-auto pt-2">
          <button
            onClick={e => copy(e, 'code')}
            className="flex h-8 items-center justify-center gap-1.5 rounded-md border border-ink-200 bg-white text-[11px] font-medium text-ink-700 hover:bg-ink-50"
          >
            <Icon icon={copied === 'code' ? Check : Copy} size={14} />
            {copied === 'code' ? 'Copied' : 'Copy code'}
          </button>
          <button
            onClick={e => copy(e, 'prompt')}
            className="flex h-8 items-center justify-center gap-1.5 rounded-md border border-ink-200 bg-white text-[11px] font-medium text-ink-700 hover:bg-ink-50"
          >
            <Icon icon={copied === 'prompt' ? Check : FileText} size={14} />
            {copied === 'prompt' ? 'Copied' : 'Copy prompt'}
          </button>
          <button
            onClick={e => { e.stopPropagation(); navigate(`#/component/${item.id}`); }}
            className="flex h-8 items-center justify-center gap-1.5 rounded-md border border-ink-200 bg-white text-[11px] font-medium text-ink-700 hover:bg-ink-50"
          >
            <Icon icon={ExternalLink} size={14} />
            Open
          </button>
          <button
            onClick={e => { e.stopPropagation(); navigate(`#/component/${item.id}`); }}
            className="flex h-8 items-center justify-center gap-1.5 rounded-md bg-violet-600 text-[11px] font-medium text-white hover:bg-violet-700"
          >
            <Icon icon={Sparkles} size={14} />
            Remix
          </button>
        </div>

        <footer className="mt-1 flex items-center justify-between border-t border-ink-100 pt-3 text-[10px] text-ink-400">
          <div className="flex items-center gap-2">
            <span className={`h-5 w-5 rounded-full flex items-center justify-center text-white font-bold ${item.author.avatarColor}`}>
              {item.author.avatarText}
            </span>
            <span>@{item.author.handle}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Icon icon={Heart} size={12} /> {item.likes}</span>
            <span className="flex items-center gap-1"><Icon icon={Eye} size={12} /> {item.views}</span>
          </div>
        </footer>
      </div>
    </article>
  );
}

export const ComponentCard = memo(ComponentCardInner);
