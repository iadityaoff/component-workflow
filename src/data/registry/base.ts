/**
 * COMPONENT VARIANT REGISTRY
 * ═══════════════════════════════════════════════════════════════════
 * AI Ingestion Pipeline — Agent-Orchestrated Variant Generator
 * 
 * Agents:
 *   Planner    <Icon icon={ArrowRight} size={16} /> defines variant taxonomy per category
 *   Designer   <Icon icon={ArrowRight} size={16} /> enforces design tokens, spacing, dark-mode rules
 *   Architect  <Icon icon={ArrowRight} size={16} /> structures code as named exports, validates schema
 *   Frontend   <Icon icon={ArrowRight} size={16} /> generates React+Tailwind JSX per variant
 *   QA         <Icon icon={ArrowRight} size={16} /> validates props, accessibility, render safety
 *
 * Output: a registry of ALL 1,483 component variants ready for
 *         direct use in the UI or batch-insert into Supabase.
 * ═══════════════════════════════════════════════════════════════════
 */

export interface VariantSpec {
  id: string;
  title: string;
  description: string;
  categorySlug: string;
  tags: string[];
  code: string;
  /** Injected at build time by vite-plugin-precompile — pre-compiled JS, no JSX or TS. */
  compiledCode?: string;
  prompt: string;
  previewKind: string;
  featured: number;
  createdAt: number;
  likes: number;
  views: number;
  authorIdx: number;
}

// ─── Utility ────────────────────────────────────────────────────────
const day = 86_400_000;
const NOW = Date.UTC(2026, 3, 19);
export const ago = (n: number) => NOW - n * day;

// ─── AUTHORS ────────────────────────────────────────────────────────
export const REGISTRY_AUTHORS = [
  { id: "u1", name: "Aria Chen",    handle: "ariac",   avatarText: "AC", avatarColor: "bg-rose-500" },
  { id: "u2", name: "Mateo Rivera", handle: "mateor",  avatarText: "MR", avatarColor: "bg-amber-500" },
  { id: "u3", name: "Priya Iyer",   handle: "priya",   avatarText: "PI", avatarColor: "bg-emerald-500" },
  { id: "u4", name: "Jonas Berg",   handle: "jberg",   avatarText: "JB", avatarColor: "bg-sky-500" },
  { id: "u5", name: "Lina Okafor",  handle: "lina",    avatarText: "LO", avatarColor: "bg-violet-500" },
  { id: "u6", name: "Devon Park",   handle: "devp",    avatarText: "DP", avatarColor: "bg-fuchsia-500" },
  { id: "u7", name: "Saanvi Rao",   handle: "saanvi",  avatarText: "SR", avatarColor: "bg-cyan-500" },
  { id: "u8", name: "Theo Müller",  handle: "theom",   avatarText: "TM", avatarColor: "bg-orange-500" },
];
