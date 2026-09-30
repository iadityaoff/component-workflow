import React, { useState, useEffect, useMemo, useRef } from "react";
import { 
  X, ExternalLink, Link2, Sun, Moon, MoreVertical, 
  ChevronLeft, ChevronRight, Bookmark, Sparkles, Flag, Share2, 
  Check, ArrowDown
} from "lucide-react";
import { Icon } from "./ui/Icon";
import { useRoute } from "../lib/router";
import { useBookmarks } from "../lib/bookmarks";
import { useToast } from "./Toast";
import { COMPONENT_BY_ID, ALL_COMPONENTS, type ComponentItem } from "../data/components";
import { LazyCardPreview } from "./LazyCardPreview";
import { CopyPromptDropdown } from "./CopyPromptDropdown";
import { RemixModal } from "./RemixModal";

export function PreviewModal() {
  const { query, setQuery, replaceQuery, navigate } = useRoute();
  const { isSaved, toggleSave } = useBookmarks();
  const { toast } = useToast();

  const previewId = query.preview;
  const item: ComponentItem | undefined = previewId ? COMPONENT_BY_ID[previewId] : undefined;

  const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isRemixOpen, setIsRemixOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const similarRef = useRef<HTMLDivElement>(null);

  // Find index and prev/next items
  const currentIndex = useMemo(() => {
    if (!item) return -1;
    return ALL_COMPONENTS.findIndex((c) => c.id === item.id);
  }, [item]);

  const prevItem = currentIndex > 0 ? ALL_COMPONENTS[currentIndex - 1] : ALL_COMPONENTS[ALL_COMPONENTS.length - 1];
  const nextItem = currentIndex >= 0 && currentIndex < ALL_COMPONENTS.length - 1 ? ALL_COMPONENTS[currentIndex + 1] : ALL_COMPONENTS[0];

  const similarItems = useMemo(() => {
    if (!item) return [];
    return ALL_COMPONENTS
      .filter((c) => c.id !== item.id && (c.categorySlug === item.categorySlug || c.tags.some(t => item.tags.includes(t))))
      .slice(0, 4);
  }, [item]);

  const closeModal = () => {
    const next = { ...query };
    delete next.preview;
    replaceQuery(next);
  };

  const goToItem = (target: ComponentItem) => {
    setQuery({ preview: target.id });
  };

  // Keyboard navigation: Esc to close, Left/Right arrow for prev/next, T for theme toggle
  useEffect(() => {
    if (!item) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft" && prevItem) {
        goToItem(prevItem);
      } else if (e.key === "ArrowRight" && nextItem) {
        goToItem(nextItem);
      } else if (e.key === "t" || e.key === "T") {
        setThemeMode((m) => (m === "dark" ? "light" : "dark"));
        toast("info", `Theme switched to ${themeMode === "dark" ? "light" : "dark"}`);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, prevItem, nextItem, themeMode]);

  const open = Boolean(item);
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const frame = requestAnimationFrame(() => panelRef.current?.focus());
    const trap = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const controls = Array.from(panelRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], input, select, textarea, [tabindex="0"]') || []).filter(el => el.getClientRects().length > 0);
      const first = controls[0], last = controls[controls.length - 1];
      if (!first) { event.preventDefault(); panelRef.current?.focus(); return; }
      if (event.shiftKey && (document.activeElement === first || document.activeElement === panelRef.current)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", trap);
    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", trap);
      previous?.focus();
    };
  }, [open]);

  if (!item) return null;

  const saved = isSaved(item.id);

  const handleCopyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#/component/${item.id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedLink(true);
      toast("success", "Direct link copied!");
      setTimeout(() => setCopiedLink(false), 1500);
    } catch {
      toast("error", "Failed to copy link");
    }
  };

  const handleScrollToSimilar = () => {
    if (similarRef.current) {
      similarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={closeModal}
        />

        {/* Modal Window Container */}
        <div ref={panelRef} tabIndex={-1} role="dialog" aria-modal="true" aria-label={`${item.title} preview`} className="relative z-10 flex flex-col w-full max-w-4xl max-h-[92vh] rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-bg)] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 my-auto">
          
          {/* Top Bar Outside the Card */}
          <header className="flex h-14 shrink-0 items-center justify-between border-b border-[var(--uf-border)] bg-[var(--uf-panel)] px-4 sm:px-6">
            {/* Left: Author & Title */}
            <div className="flex items-center gap-3 min-w-0">
              <div 
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-bold text-white bg-gradient-to-br ${
                  item.author?.avatarColor || "bg-indigo-600"
                }`}
              >
                {item.author?.avatarText || "U"}
              </div>
              <div className="min-w-0 flex items-baseline gap-2">
                <span className="text-sm font-bold text-[var(--uf-text)] truncate">{item.title}</span>
                <span className="text-xs text-[var(--uf-text-muted)] truncate hidden sm:inline">
                  by @{item.author?.handle || "creator"}
                </span>
                {item.author?.handle && (
                  <a
                    href={`https://21st.dev/@${item.author.handle}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[var(--uf-text-muted)] hover:text-cyan-400 transition hidden sm:inline"
                    title={`View @${item.author.handle} on 21st`}
                  >
                    𝕏
                  </a>
                )}
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => { closeModal(); navigate(`#/component/${item.id}`); }}
                className="hidden sm:flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10 transition"
                title="Open in new page"
              >
                <Icon icon={ExternalLink} size={13} />
                <span>Open page</span>
              </button>

              <button
                type="button"
                onClick={handleCopyLink}
                className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10 transition"
                title="Copy shareable link"
              >
                <Icon icon={copiedLink ? Check : Link2} size={13} className={copiedLink ? "text-emerald-400" : ""} />
                <span className="hidden sm:inline">{copiedLink ? "Copied" : "Copy link"}</span>
              </button>

              <button
                type="button"
                onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")}
                className="grid h-8 w-8 place-items-center rounded-lg text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10 transition"
                title="Toggle preview theme (T)"
              >
                <Icon icon={themeMode === "dark" ? Sun : Moon} size={14} />
              </button>

              {/* More menu */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                  className="grid h-8 w-8 place-items-center rounded-lg text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10 transition"
                  title="More actions"
                >
                  <Icon icon={MoreVertical} size={14} />
                </button>
                {moreMenuOpen && (
                  <div className="absolute right-0 top-full mt-1 z-30 w-40 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-1 shadow-xl">
                    <button
                      type="button"
                      onClick={() => { setMoreMenuOpen(false); handleCopyLink(); }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10 text-left"
                    >
                      <Icon icon={Share2} size={13} />
                      <span>Share</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => { setMoreMenuOpen(false); toast("info", "Thank you. Component reported to moderators."); }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-1.5 text-xs text-rose-400 hover:bg-rose-500/10 text-left"
                    >
                      <Icon icon={Flag} size={13} />
                      <span>Report</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="h-4 w-px bg-[var(--uf-border)] mx-1" />

              {/* Close Button */}
              <button
                type="button"
                onClick={closeModal}
                className="grid h-8 w-8 place-items-center rounded-lg text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] hover:bg-white/10 transition"
                title="Close modal (Esc)"
              >
                <Icon icon={X} size={16} />
              </button>
            </div>
          </header>

          {/* Modal Main Body (Scrollable) */}
          <div className="flex-1 overflow-y-auto scrollbar-thin">
            {/* Live Interactive Preview Canvas */}
            <div className={`relative flex items-center justify-center p-6 sm:p-10 min-h-[380px] sm:min-h-[460px] border-b border-[var(--uf-border)] transition-colors ${
              themeMode === "dark" ? "bg-black/90 text-white" : "bg-white text-slate-900"
            }`}>
              {/* Prev / Next Nav Buttons */}
              {prevItem && (
                <button
                  type="button"
                  onClick={() => goToItem(prevItem)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/60 text-white/80 hover:text-white hover:bg-black/90 hover:scale-110 transition shadow-lg"
                  title="Previous component (←)"
                >
                  <Icon icon={ChevronLeft} size={18} />
                </button>
              )}
              {nextItem && (
                <button
                  type="button"
                  onClick={() => goToItem(nextItem)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-black/60 text-white/80 hover:text-white hover:bg-black/90 hover:scale-110 transition shadow-lg"
                  title="Next component (→)"
                >
                  <Icon icon={ChevronRight} size={18} />
                </button>
              )}

              <div className="w-full flex items-center justify-center max-w-xl">
                <LazyCardPreview code={item.code} compiledCode={item.compiledCode} title={item.title} fullHeight />
              </div>
            </div>

            {/* Description & Details Row */}
            <div className="p-6 border-b border-[var(--uf-border)] bg-[var(--uf-panel-2)]/30">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-[var(--uf-text)]">{item.title}</h3>
                  <p className="mt-1 text-xs text-[var(--uf-text-secondary)] max-w-xl">
                    {item.description || "Production-grade React component crafted with Tailwind CSS and Framer Motion."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-[var(--uf-text-muted)] font-medium">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Similar Components Rail */}
            {similarItems.length > 0 && (
              <div className="p-6" ref={similarRef}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--uf-text-muted)] mb-4">
                  Similar {item.categorySlug.replace(/-/g, " ")} components
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {similarItems.map((sim) => (
                    <div
                      key={sim.id}
                      onClick={() => goToItem(sim)}
                      className="group cursor-pointer rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-2.5 transition hover:border-[var(--uf-accent)] hover:shadow-lg"
                    >
                      <div className="h-20 w-full rounded-lg bg-black/40 flex items-center justify-center overflow-hidden mb-2">
                        <LazyCardPreview code={sim.code} compiledCode={sim.compiledCode} title={sim.title} />
                      </div>
                      <div className="text-[11px] font-semibold text-[var(--uf-text)] truncate group-hover:text-[var(--uf-accent)]">
                        {sim.title}
                      </div>
                      <div className="text-[9px] text-[var(--uf-text-muted)] truncate">
                        by {sim.author?.name || "creator"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Bar */}
          <footer className="flex h-16 shrink-0 items-center justify-between border-t border-[var(--uf-border)] bg-[var(--uf-panel)] px-4 sm:px-6">
            <button
              type="button"
              onClick={handleScrollToSimilar}
              className="hidden sm:inline-flex items-center gap-1 rounded-full border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 py-1.5 text-[11px] font-medium text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] transition"
            >
              <span>See similar</span>
              <Icon icon={ArrowDown} size={11} />
            </button>

            <div className="flex items-center gap-2.5 ml-auto">
              {/* Remix AI Sparkle */}
              <button
                type="button"
                onClick={() => setIsRemixOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3.5 py-2 text-xs font-semibold text-[var(--uf-text)] hover:bg-white/10 transition cursor-pointer"
                title="Remix with AI"
              >
                <Icon icon={Sparkles} size={14} className="text-purple-400" />
                <span>Remix</span>
              </button>

              {/* Bookmark Save */}
              <button
                type="button"
                onClick={() => {
                  const next = toggleSave(item.id);
                  toast(next ? "success" : "info", next ? "Saved to bookmarks" : "Removed bookmark");
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition cursor-pointer ${
                  saved
                    ? "border-amber-500/50 bg-amber-500/10 text-amber-400"
                    : "border-[var(--uf-border)] bg-[var(--uf-panel-2)] text-[var(--uf-text)] hover:bg-white/10"
                }`}
                title={saved ? "Saved" : "Save bookmark"}
              >
                <Icon icon={Bookmark} size={14} className={saved ? "fill-amber-400 text-amber-400" : ""} />
                <span>{saved ? "Saved" : "Save"}</span>
              </button>

              {/* Master Blue Split Copy Prompt Dropdown */}
              <CopyPromptDropdown item={item} />
            </div>
          </footer>
        </div>
      </div>

      <RemixModal
        isOpen={isRemixOpen}
        onClose={() => setIsRemixOpen(false)}
        component={item}
      />
    </>
  );
}
