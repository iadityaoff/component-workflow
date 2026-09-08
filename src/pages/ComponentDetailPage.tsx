/**
 * Component Detail Page — Production Level.
 *
 * Features:
 *   • Breadcrumb navigation
 *   • Title + Author + Stats + Tags
 *   • Variant selector (same-category components as quick-switch chips)
 *   • Tabs: Preview / Code / Usage / Features
 *   • Actions: Copy Code / Copy Prompt / Open / Remix — all with toast feedback
 *   • Related components section
 *
 * Fixes:
 * B-10: Lucide Icon wrapper and focus states.
 * Tabs now accessible via button list.
 */

import { useMemo, useState } from "react";
import { ArrowLeft, Check, Copy, ExternalLink, Eye, Heart, Sparkles, FileText, Smartphone, Tablet, Monitor, MousePointer2, Settings, Zap, ArrowUp, XCircle, Paintbrush, Atom, Accessibility, Moon, Sun } from "lucide-react";
import type { ComponentItem } from "../data/components";
import { COMPONENT_BY_ID, ALL_COMPONENTS } from "../data/components";
import { CATEGORY_BY_SLUG } from "../data/categories";
import { useRoute } from "../lib/router";
import { useToast } from "../components/Toast";
import { Breadcrumb } from "../components/Breadcrumb";
import { SandpackEngine } from "../components/SandpackEngine";
import { CodePanel } from "../components/CodePanel";
import { UsagePanel } from "../components/UsagePanel";
import { RemixModal } from "../components/RemixModal";
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
        <p className="text-5xl font-bold text-ink-200 dark:text-ink-800">404</p>
        <p className="mt-3 text-lg font-medium text-ink-600 dark:text-ink-400">
          Component not found
        </p>
        <button
          type="button"
          onClick={() => navigate("#/")}
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100 focus-visible:ring-2 focus-visible:ring-violet-500 outline-none"
        >
          <ArrowLeft size={14} strokeWidth={1.75} aria-hidden="true" />
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
  const [copied, setCopied] = useState<"code" | "prompt" | null>(null);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(item.likes);
  const [isRemixOpen, setIsRemixOpen] = useState(false);
  const [viewport, setViewport] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const [previewTheme, setPreviewTheme] = useState<"light" | "dark">("light");
  const { toast } = useToast();
  const { navigate } = useRoute();

  const category = CATEGORY_BY_SLUG[item.categorySlug];

  async function copy(kind: "code" | "prompt") {
    const text = kind === "code" ? item.code : item.prompt;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* ignore */
    }
    setCopied(kind);
    toast("success", kind === "code" ? "Code copied to clipboard!" : "Prompt copied to clipboard!");
    setTimeout(() => setCopied(null), 1400);
  }

  function handleLike() {
    const next = !liked;
    setLiked(next);
    setLikeCount((c) => c + (next ? 1 : -1));
    toast(next ? "success" : "info", next ? "Component liked!" : "Like removed");
  }

  // Same-category variants for switcher
  const variants = useMemo(
    () =>
      ALL_COMPONENTS.filter(
        (c) => c.categorySlug === item.categorySlug,
      ).slice(0, 12),
    [item.categorySlug],
  );

  // Related components — same category, excluding self
  const related = useMemo(
    () =>
      ALL_COMPONENTS.filter(
        (c) => c.categorySlug === item.categorySlug && c.id !== item.id,
      ).slice(0, 4),
    [item],
  );

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
        canonical={window.location.origin + window.location.hash}
      />
      <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <Breadcrumb
        crumbs={[
          { label: "Components", href: "#/" },
          ...(category
            ? [{ label: category.name, href: `#/?cat=${item.categorySlug}` }]
            : []),
          { label: item.title },
        ]}
      />

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {item.title}
          </h1>
          <p className="mt-1.5 max-w-2xl text-sm text-ink-500 dark:text-ink-400">
            {item.description}
          </p>

          {/* Author + Stats */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span
                className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-semibold text-white ${item.author.avatarColor}`}
              >
                {item.author.avatarText}
              </span>
              <div>
                <p className="font-medium">{item.author.name}</p>
                <p className="text-xs text-ink-500">@{item.author.handle}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-ink-500 dark:text-ink-400 tabular-nums">
              <span className="inline-flex items-center gap-1">
                <Icon icon={Heart} size={14} />
                {likeCount.toLocaleString()}
              </span>
              <span className="inline-flex items-center gap-1">
                <Icon icon={Eye} size={14} />
                {item.views.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {category && (
              <span className="inline-flex items-center rounded-full bg-ink-100 px-2.5 py-0.5 text-xs font-medium text-ink-700 dark:bg-ink-800 dark:text-ink-300">
                {category.name}
              </span>
            )}
            {item.tags.map((t) => (
              <span
                key={t}
                className="inline-flex items-center rounded-full border border-ink-200 px-2.5 py-0.5 text-xs text-ink-500 dark:border-ink-800 dark:text-ink-400"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Like button */}
        <button
          type="button"
          onClick={handleLike}
          className={[
            "flex items-center gap-2 self-start rounded-lg border px-4 py-2 text-sm font-medium transition active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400",
            liked
              ? "border-rose-300 bg-rose-50 text-rose-600 dark:border-rose-800 dark:bg-rose-950/40 dark:text-rose-400"
              : "border-ink-200 text-ink-700 hover:bg-ink-50 dark:border-ink-800 dark:text-ink-200 dark:hover:bg-ink-900",
          ].join(" ")}
        >
          <Icon icon={Heart} size={16} />
          {liked ? "Liked" : "Like"}
        </button>
      </div>

      {/* ── Variant Selector ─────────────────────────────── */}
      {variants.length > 1 && (
        <div className="mt-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-ink-400">
            Variants ({variants.length})
          </p>
          <div className="flex flex-wrap gap-2">
            {variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => navigate(`#/component/${v.id}`)}
                className={[
                  "rounded-lg border px-3 py-1.5 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
                  v.id === item.id
                    ? "border-ink-900 bg-ink-900 text-white dark:border-white dark:bg-white dark:text-ink-900"
                    : "border-ink-200 text-ink-600 hover:bg-ink-50 dark:border-ink-800 dark:text-ink-400 dark:hover:bg-ink-900",
                ].join(" ")}
              >
                {v.title}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab bar */}
      <div className="mt-8 flex items-center justify-between border-b border-ink-200 dark:border-ink-800">
        <div className="flex gap-0" role="tablist">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              role="tab"
              aria-selected={activeTab === key}
              onClick={() => setActiveTab(key)}
              className={[
                "relative px-5 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:bg-ink-100 dark:focus-visible:bg-ink-800",
                activeTab === key
                  ? "text-ink-900 dark:text-white"
                  : "text-ink-500 hover:text-ink-900 dark:text-ink-400 dark:hover:text-white",
              ].join(" ")}
            >
              {label}
              {activeTab === key && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-ink-900 dark:bg-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <div className="mt-6 animate-fade-in" key={activeTab}>
        {activeTab === "preview" && (
          <div className="overflow-hidden rounded-2xl border border-ink-200 dark:border-ink-800">
            {/* ── Responsive Preview Toolbar ── */}
            <div className="flex items-center justify-between border-b border-ink-100 bg-surface-2 px-4 py-2 dark:border-ink-800 dark:bg-ink-900/80">
              <div className="flex items-center gap-1 rounded-lg bg-ink-100 p-0.5 dark:bg-ink-800">
                {([
                  { key: "mobile" as const, icon: Smartphone, label: "Mobile (360px)" },
                  { key: "tablet" as const, icon: Tablet, label: "Tablet (768px)" },
                  { key: "desktop" as const, icon: Monitor, label: "Desktop" },
                ] as const).map(({ key, icon, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setViewport(key)}
                    title={label}
                    className={[
                      "rounded-md p-1.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
                      viewport === key
                        ? "bg-white text-ink-900 shadow-sm dark:bg-ink-700 dark:text-white"
                        : "text-ink-500 hover:text-ink-700 dark:text-ink-400 dark:hover:text-ink-200",
                    ].join(" ")}
                  >
                    <Icon icon={icon} size={16} />
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-medium text-ink-400 tabular-nums">
                  {viewport === "mobile" ? "360px" : viewport === "tablet" ? "768px" : "100%"}
                </span>
                <button
                  type="button"
                  onClick={() => setPreviewTheme(previewTheme === "light" ? "dark" : "light")}
                  title={`Switch to ${previewTheme === "light" ? "dark" : "light"} mode`}
                  className="rounded-md border border-ink-200 p-1.5 text-ink-500 transition hover:bg-ink-50 dark:border-ink-700 dark:hover:bg-ink-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  <Icon icon={previewTheme === "light" ? Moon : Sun} size={14} />
                </button>
              </div>
            </div>
            {/* ── Preview Container ── */}
            <div className={`flex min-h-[400px] w-full items-center justify-center p-4 transition-colors duration-200 ${previewTheme === "dark" ? "bg-ink-950" : "bg-surface-1"}`}>
              <div
                className="w-full transition-all duration-300 ease-out"
                style={{
                  maxWidth: viewport === "mobile" ? 360 : viewport === "tablet" ? 768 : "100%",
                  margin: "0 auto",
                }}
              >
                <SandpackEngine code={item.code} showEditor={false} />
              </div>
            </div>
          </div>
        )}

        {activeTab === "code" && <CodePanel code={item.code} />}

        {activeTab === "usage" && <UsagePanel item={item} />}

        {activeTab === "features" && <FeaturesPanel item={item} />}
      </div>

      {/* Action bar */}
      <div className="mt-6 flex flex-wrap gap-2">
        <ActionBtn
          onClick={() => copy("code")}
          label={copied === "code" ? "Copied!" : "Copy Code"}
          icon={copied === "code" ? Check : Copy}
          active={copied === "code"}
        />
        <ActionBtn
          onClick={() => copy("prompt")}
          label={copied === "prompt" ? "Copied!" : "Copy Prompt"}
          icon={copied === "prompt" ? Check : FileText}
          active={copied === "prompt"}
        />
        <ActionBtn
          onClick={() =>
            window.open(`#/component/${item.id}`, "_blank", "noopener")
          }
          label="Open in New Tab"
          icon={ExternalLink}
        />
        <ActionBtn
          onClick={() => setIsRemixOpen(true)}
          label="Remix with AI"
          icon={Sparkles}
          gradient
        />
      </div>

      {/* Remix Modal Overlay */}
      <RemixModal 
        isOpen={isRemixOpen} 
        onClose={() => setIsRemixOpen(false)} 
        component={item} 
      />

      {/* Related components */}
      {related.length > 0 && (
        <RelatedSection items={related} />
      )}
      </div>
    </>
  );
}

/* ---------- Features Panel ---------- */

function FeaturesPanel({ item }: { item: ComponentItem }) {
  const features = [
    { label: "Dark mode support", value: item.code.includes("dark:"), icon: <Icon icon={Moon} size={18} /> },
    { label: "Responsive design", value: item.code.includes("sm:") || item.code.includes("md:") || item.code.includes("lg:"), icon: <Icon icon={Smartphone} size={18} /> },
    { label: "Hover interactions", value: item.code.includes("hover:"), icon: <Icon icon={MousePointer2} size={18} /> },
    { label: "Focus states", value: item.code.includes("focus:"), icon: <Icon icon={Settings} size={18} /> },
    { label: "Transition animations", value: item.code.includes("transition") || item.code.includes("animate"), icon: <Icon icon={Zap} size={18} /> },
    { label: "Active states", value: item.code.includes("active:"), icon: <Icon icon={ArrowUp} size={18} /> },
    { label: "Disabled states", value: item.code.includes("disabled"), icon: <Icon icon={XCircle} size={18} /> },
    { label: "Custom colors", value: item.code.includes("gradient") || item.code.includes("bg-gradient"), icon: <Icon icon={Paintbrush} size={18} /> },
    { label: "React state (interactive)", value: item.code.includes("useState"), icon: <Icon icon={Atom} size={18} /> },
    { label: "Accessibility (ARIA)", value: item.code.includes("aria-"), icon: <Icon icon={Accessibility} size={18} /> },
  ];

  // Need a quick placeholder Moon import workaround:

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {features.map((f) => (
        <div
          key={f.label}
          className={[
            "flex items-center gap-3 rounded-xl border p-4 transition",
            f.value
              ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-900/50 dark:bg-emerald-950/20"
              : "border-ink-100 bg-surface-1 dark:border-ink-800 dark:bg-ink-900/50",
          ].join(" ")}
        >
          <span className="text-ink-600 dark:text-ink-300">{f.icon}</span>
          <span className="flex-1 text-sm font-medium">{f.label}</span>
          <span
            className={[
              "grid h-6 w-6 place-items-center rounded-full text-xs font-bold",
              f.value
                ? "bg-emerald-500 text-white"
                : "bg-ink-100 text-ink-400 dark:bg-ink-800",
            ].join(" ")}
          >
            {f.value ? <Icon icon={Check} size={12} /> : "—"}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------- subcomponents ---------- */

interface ActionBtnProps {
  onClick: () => void;
  label: string;
  icon: any; // LucideIcon type alias bypass
  active?: boolean;
  gradient?: boolean;
}

function ActionBtn({
  onClick,
  label,
  icon,
  active,
  gradient,
}: ActionBtnProps) {
  let cls: string;
  if (active) {
    cls =
      "border border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400";
  } else if (gradient) {
    cls =
      "border border-transparent bg-gradient-featured text-white shadow-sm shadow-rose-500/20 hover:brightness-110";
  } else {
    cls =
      "border border-ink-200 bg-surface-1 text-ink-700 hover:bg-ink-50 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200 dark:hover:bg-ink-800";
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
        cls,
      ].join(" ")}
    >
      <Icon icon={icon} size={16} />
      {label}
    </button>
  );
}

function RelatedSection({ items }: { items: ComponentItem[] }) {
  const { navigate } = useRoute();

  return (
    <section className="mt-12 border-t border-ink-100 pt-8 dark:border-ink-800">
      <h2 className="mb-5 text-lg font-semibold tracking-tight">
        Related Components
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const cat = CATEGORY_BY_SLUG[item.categorySlug];
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => navigate(`#/component/${item.id}`)}
              className="group cursor-pointer text-left block w-full overflow-hidden rounded-xl border border-ink-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md dark:border-ink-800 dark:bg-ink-900 outline-none focus-within:ring-2 focus-within:ring-violet-500"
            >
              <div className="p-3 pb-0 pointer-events-none">
                <div className="flex h-32 items-center justify-center rounded-lg bg-surface-2 dark:bg-ink-900/60 overflow-hidden">
                  <SandpackEngine code={item.code} />
                </div>
              </div>
              <div className="p-3">
                <p className="truncate text-sm font-medium group-hover:text-rose-500 transition-colors">{item.title}</p>
                <p className="mt-0.5 text-xs text-ink-500 dark:text-ink-400">
                  {cat?.name}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
