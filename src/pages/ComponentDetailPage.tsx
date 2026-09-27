/**
 * Component Detail Page — UIForge Redesign.
 */

import { useMemo, useState } from "react";
import { 
  ArrowLeft, Check, Copy, ExternalLink, Eye, Heart, Sparkles, FileText, 
  Smartphone, Tablet, Monitor, MousePointer2, Settings, Zap, ArrowUp, 
  XCircle, Paintbrush, Atom, Accessibility, Moon, Sun, Bookmark, 
  Terminal, RotateCcw, Maximize2, Minimize2, Flag, ChevronDown 
} from "lucide-react";
import { COMPONENT_BY_ID, ALL_COMPONENTS, type ComponentItem } from "../data/components";
import { CATEGORY_BY_SLUG } from "../data/categories";
import { useRoute } from "../lib/router";
import { useBookmarks } from "../lib/bookmarks";
import { triggerCliModal } from "../components/CliTerminalModal";
import { useToast } from "../components/Toast";
import { Breadcrumb } from "../components/Breadcrumb";
import { SandpackEngine } from "../components/SandpackEngine";
import { LazyCardPreview } from "../components/LazyCardPreview";
import { ComponentCard } from "../components/ComponentCard";
import { CodePanel } from "../components/CodePanel";
import { UsagePanel } from "../components/UsagePanel";
import { RemixModal } from "../components/RemixModal";
import { CopyPromptDropdown } from "../components/CopyPromptDropdown";
import { Icon } from "../components/ui/Icon";
import { MetaHead } from "../components/ui/MetaHead";

type DetailTab = "preview" | "code" | "usage" | "features";

interface Props {
  componentId: string;
}

export function ComponentDetailPage({ componentId }: Props) {
  const item = COMPONENT_BY_ID[componentId];
  const { navigate } = useRoute();

  if (!item) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <MetaHead title="404 - Component Not Found" />
        <p className="text-5xl font-bold text-[var(--uf-text)]">404</p>
        <p className="mt-3 text-lg font-medium text-[var(--uf-text-secondary)]">
          Component not found
        </p>
        <button
          type="button"
          onClick={() => navigate("#/components")}
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-[var(--uf-panel)] border border-[var(--uf-border)] px-5 py-2 text-sm font-medium text-[var(--uf-text)] transition hover:bg-[var(--uf-border-hover)]"
        >
          <Icon icon={ArrowLeft} size={14} />
          Back to components
        </button>
      </div>
    );
  }

  return <DetailView item={item} />;
}

/* ------------------------------------------------------------------ */

function DetailView({ item }: { item: ComponentItem }) {
  const [activeTab, setActiveTab] = useState<DetailTab>("preview");
  const [copied, setCopied] = useState<"code" | "prompt" | "cli" | null>(null);
  const [liked, setLiked] = useState(false);
  const { isSaved, toggleSave } = useBookmarks();
  const saved = isSaved(item.id);
  const [likeCount, setLikeCount] = useState(item.likes);
  const [isRemixOpen, setIsRemixOpen] = useState(false);
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [previewTheme, setPreviewTheme] = useState<"light" | "dark">("dark");
  const [previewEngine, setPreviewEngine] = useState<"native" | "sandpack">("native");
  const [previewKey, setPreviewKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [promptMenuOpen, setPromptMenuOpen] = useState(false);

  const { toast } = useToast();
  const { navigate } = useRoute();
  const category = CATEGORY_BY_SLUG[item.categorySlug];

  async function copy(kind: "code" | "prompt" | "cli", modifier?: string) {
    let text = "";
    if (kind === "code") {
      text = item.code;
    } else if (kind === "prompt") {
      text = item.prompt;
      if (modifier) {
        text = `[Optimized for ${modifier}]\n\n${text}`;
      }
    } else if (kind === "cli") {
      text = `npx uiforge add ${item.id}`;
    }

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* ignore */
    }
    setCopied(kind);
    const msg =
      kind === "code"
        ? "Code copied!"
        : kind === "prompt"
        ? `Prompt copied${modifier ? ` for ${modifier}` : ""}!`
        : "CLI command copied!";
    toast("success", msg);
    setTimeout(() => setCopied(null), 1400);
  }

  function handleLike() {
    const next = !liked;
    setLiked(next);
    setLikeCount((c) => c + (next ? 1 : -1));
    toast(next ? "success" : "info", next ? "Component liked!" : "Like removed");
  }

  function handleSave() {
    const nextSaved = toggleSave(item.id);
    toast(
      nextSaved ? "success" : "info",
      nextSaved ? "Saved to your bookmarks!" : "Removed from bookmarks"
    );
  }

  const related = useMemo(() => {
    const sameCat = ALL_COMPONENTS.filter(
      (c) => c.categorySlug === item.categorySlug && c.id !== item.id
    );
    if (sameCat.length >= 4) return sameCat.slice(0, 4);
    const others = ALL_COMPONENTS.filter(
      (c) => c.categorySlug !== item.categorySlug && c.id !== item.id
    ).slice(0, 4 - sameCat.length);
    return [...sameCat, ...others];
  }, [item]);

  const TABS: { key: DetailTab; label: string }[] = [
    { key: "preview", label: "Preview" },
    { key: "code", label: "Code" },
    { key: "usage", label: "Usage" },
    { key: "features", label: "Features" },
  ];

  return (
    <>
      <MetaHead 
        title={item.title} 
        description={item.description}
      />
      <div className="page-enter mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8 space-y-6">
        <Breadcrumb
          crumbs={[
            { label: "Components", href: "#/components" },
            ...(category
              ? [{ label: category.name, href: `#/components?cat=${item.categorySlug}` }]
              : []),
            { label: item.title },
          ]}
        />

        {/* Header */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between border-b border-[var(--uf-border)] pb-6">
          <div className="min-w-0 space-y-2">
            <h1 className="text-2xl font-black tracking-tight sm:text-3xl text-[var(--uf-text)]">
              {item.title}
            </h1>
            <p className="max-w-2xl text-sm text-[var(--uf-text-secondary)] leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs pt-1">
              <div className="flex items-center gap-2">
                <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[9px] font-bold text-white bg-gradient-to-br ${item.author?.avatarColor || "bg-indigo-600"}`}>
                  {item.author?.avatarText || "U"}
                </span>
                <div>
                  <p className="font-semibold text-[var(--uf-text)]">{item.author?.name || "Anonymous"}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[var(--uf-text-muted)]">
                <span className="flex items-center gap-1">
                  <Icon icon={Heart} size={13} className="text-rose-500" />
                  {(likeCount ?? 0).toLocaleString()}
                </span>
                <span className="flex items-center gap-1">
                  <Icon icon={Eye} size={13} />
                  {(item.views ?? 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            {/* Copy Prompt Dropdown */}
            <CopyPromptDropdown item={item} />

            {/* Save */}
            <button
              onClick={handleSave}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-medium transition ${
                saved
                  ? "bg-amber-500 text-white"
                  : "border border-[var(--uf-border)] bg-[var(--uf-panel)] text-[var(--uf-text)] hover:bg-[var(--uf-border-hover)]"
              }`}
            >
              <Icon icon={Bookmark} size={14} />
              <span>{saved ? "Saved" : "Save"}</span>
            </button>

            {/* Remix */}
            <button
              onClick={() => setIsRemixOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] px-3.5 py-2 text-xs font-medium text-[var(--uf-text)] transition hover:bg-[var(--uf-border-hover)]"
            >
              <Icon icon={Sparkles} size={14} className="text-[var(--uf-accent)]" />
              <span>Remix</span>
            </button>

            {/* CLI */}
            <button
              onClick={() => triggerCliModal(item.id, item.title)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] px-3.5 py-2 text-xs font-medium text-[var(--uf-text)] transition hover:bg-[var(--uf-border-hover)] hidden sm:flex"
            >
              <Icon icon={Terminal} size={14} />
              <span>CLI</span>
            </button>
          </div>
        </div>

        {/* Tabs & Tools */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-1 rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel)] p-1">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                  activeTab === tab.key
                    ? "bg-white/[0.1] text-[var(--uf-text)] shadow-sm"
                    : "text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "preview" && (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel)] p-1">
                {(["mobile", "tablet", "desktop"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setViewport(v)}
                    className={`rounded p-1.5 transition ${
                      viewport === v
                        ? "bg-white/[0.1] text-[var(--uf-text)]"
                        : "text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
                    }`}
                  >
                    <Icon
                      icon={v === "mobile" ? Smartphone : v === "tablet" ? Tablet : Monitor}
                      size={14}
                    />
                  </button>
                ))}
              </div>
              <div className="h-4 w-px bg-[var(--uf-border)] mx-1" />
              <button
                onClick={() => setPreviewTheme(t => t === "dark" ? "light" : "dark")}
                className="rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel)] p-2 text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] transition"
              >
                <Icon icon={previewTheme === "dark" ? Sun : Moon} size={14} />
              </button>
              <button
                onClick={() => setPreviewKey(k => k + 1)}
                className="rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel)] p-2 text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] transition"
              >
                <Icon icon={RotateCcw} size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] overflow-hidden min-h-[500px]">
          {activeTab === "preview" && (
            <div className={`relative h-[600px] w-full bg-[var(--uf-panel-2)] transition-colors ${
              previewTheme === "light" ? "light bg-[#f8f9fa]" : "dark bg-[var(--uf-panel-2)]"
            }`}>
              {previewEngine === "sandpack" ? (
                <SandpackEngine
                  code={item.code}
                  theme={previewTheme}
                  key={`sp-${previewKey}`}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center p-4">
                  <div className="w-full transition-all duration-300 mx-auto preview-grid-bg rounded-xl border border-[var(--uf-border)] h-full"
                    style={{
                      maxWidth: viewport === "mobile" ? "375px" : viewport === "tablet" ? "768px" : "100%",
                    }}
                  >
                    <LazyCardPreview
                      code={item.code}
                      compiledCode={item.compiledCode}
                      title={item.title}
                      priority={0}
                      fullHeight
                      key={`native-${previewKey}`}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "code" && (
            <CodePanel
              code={item.code}
              language="tsx"
              onCopy={() => copy("code")}
              copied={copied === "code"}
            />
          )}

          {activeTab === "usage" && (
            <UsagePanel
              item={item}
            />
          )}

          {activeTab === "features" && (
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Icon icon={Accessibility} size={18} className="text-[var(--uf-accent)]" />
                  <div>
                    <h4 className="font-medium text-[var(--uf-text)]">Accessible</h4>
                    <p className="text-sm text-[var(--uf-text-secondary)]">ARIA attributes and keyboard navigation supported.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icon icon={Monitor} size={18} className="text-[var(--uf-accent)]" />
                  <div>
                    <h4 className="font-medium text-[var(--uf-text)]">Responsive</h4>
                    <p className="text-sm text-[var(--uf-text-secondary)]">Looks great on mobile, tablet, and desktop.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Icon icon={Moon} size={18} className="text-[var(--uf-accent)]" />
                  <div>
                    <h4 className="font-medium text-[var(--uf-text)]">Dark Mode</h4>
                    <p className="text-sm text-[var(--uf-text-secondary)]">First-class support for Tailwind dark mode.</p>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Related Components */}
        {related.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[var(--uf-border)]">
            <h2 className="text-lg font-bold text-[var(--uf-text)] mb-6">More like this</h2>
            <div className="bordered-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((c) => (
                <div key={c.id} className="p-3">
                  <ComponentCard item={c} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <RemixModal
        isOpen={isRemixOpen}
        onClose={() => setIsRemixOpen(false)}
        component={item}
      />
    </>
  );
}
