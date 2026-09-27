/**
 * MASTER REGISTRY INDEX
 * ───────────────────────────────────────────────────────────────────
 * Merges ALL variant batches into a single flat ComponentItem array.
 * Single source of truth for the entire component catalogue.
 *
 * Agents: Architect (merge) · QA (dedup) · Planner (ordering)
 * ───────────────────────────────────────────────────────────────────
 */
import { REGISTRY_AUTHORS } from "./base";
import type { VariantSpec } from "./base";
import { BUTTON_VARIANTS } from "./buttons";
import {
  CARD_VARIANTS, HERO_VARIANTS, ALERT_VARIANTS, INPUT_VARIANTS,
  BADGE_VARIANTS, AVATAR_VARIANTS, SPINNER_VARIANTS, TAB_VARIANTS,
  TOGGLE_VARIANTS,
} from "./components";
import {
  ANNOUNCEMENT_VARIANTS, CTA_VARIANTS, FEATURE_VARIANTS, FOOTER_VARIANTS,
  PRICING_VARIANTS, TESTIMONIAL_VARIANTS, NAV_VARIANTS, ACCORDION_VARIANTS,
  DIALOG_VARIANTS, FORM_VARIANTS, SELECT_VARIANTS, TABLE_VARIANTS,
  TOOLTIP_VARIANTS, CHECKBOX_VARIANTS, DROPDOWN_VARIANTS, RADIO_VARIANTS,
  NOTIFICATION_VARIANTS, SIGNIN_VARIANTS, SIGNUP_VARIANTS,
  PAGINATION_VARIANTS, SLIDER_VARIANTS,
} from "./expanded";
import { AI_CHAT_VARIANTS } from "./missing-categories";
import { STYLE_VARIANTS } from "./style-generator";
import { BATCH_B_VARIANTS } from "./premium-batch-b";
import { ANNOUNCEMENT_VARIANTS_V2 } from "./announcements";
import { BATCH_1_BASE } from "./batch-1-base";
import { BACKGROUND_VARIANTS } from "./batch-4-backgrounds";
import { BORDER_VARIANTS } from "./batch-4-borders";
import { SHADER_VARIANTS, TEXT_DISPLAY_VARIANTS } from "./batch-4-shaders-texts";
import { GRADIENT_VARIANTS } from "./batch-5-gradients";
import { ASCII_ART_VARIANTS } from "./batch-6-ascii-art";
import { SIDEBAR_EXPANSION_VARIANTS } from "./batch-7-sidebar-expansion";
import { GENERATED_VARIANTS } from "./generated-batch";
import type { ComponentItem, Author } from "../components";

function toAuthor(idx?: number): Author {
  const i = typeof idx === "number" ? Math.max(0, idx) : 0;
  return REGISTRY_AUTHORS[i % REGISTRY_AUTHORS.length] || REGISTRY_AUTHORS[0];
}

function toComponentItem(v: VariantSpec): ComponentItem {
  return {
    id: v.id,
    title: v.title || "Untitled Component",
    description: v.description || "",
    categorySlug: v.categorySlug || "buttons",
    tags: Array.isArray(v.tags) ? v.tags : [],
    code: v.code || "",
    compiledCode: v.compiledCode,
    prompt: v.prompt || "",
    previewKind: (v.previewKind || "button-primary") as ComponentItem["previewKind"],
    featured: typeof v.featured === "number" ? v.featured : 5,
    createdAt: typeof v.createdAt === "number" ? v.createdAt : Date.now(),
    likes: typeof v.likes === "number" ? v.likes : 0,
    views: typeof v.views === "number" ? v.views : 0,
    author: toAuthor(v.authorIdx),
  };
}

// ── Combine ALL batches ────────────────────────────────────────────
const ALL_SPECS: VariantSpec[] = [
  // Core UI
  ...BUTTON_VARIANTS,
  ...CARD_VARIANTS,
  ...HERO_VARIANTS,
  ...ALERT_VARIANTS,
  ...INPUT_VARIANTS,
  ...BADGE_VARIANTS,
  ...AVATAR_VARIANTS,
  ...SPINNER_VARIANTS,
  ...TAB_VARIANTS,
  ...TOGGLE_VARIANTS,
  // Expanded categories
  ...ANNOUNCEMENT_VARIANTS,
  ...CTA_VARIANTS,
  ...FEATURE_VARIANTS,
  ...FOOTER_VARIANTS,
  ...PRICING_VARIANTS,
  ...TESTIMONIAL_VARIANTS,
  ...NAV_VARIANTS,
  ...ACCORDION_VARIANTS,
  ...DIALOG_VARIANTS,
  ...FORM_VARIANTS,
  ...SELECT_VARIANTS,
  ...TABLE_VARIANTS,
  ...TOOLTIP_VARIANTS,
  ...CHECKBOX_VARIANTS,
  ...DROPDOWN_VARIANTS,
  ...RADIO_VARIANTS,
  ...NOTIFICATION_VARIANTS,
  ...SIGNIN_VARIANTS,
  ...SIGNUP_VARIANTS,
  ...PAGINATION_VARIANTS,
  ...SLIDER_VARIANTS,
  // Previously missing categories (AI Chats, Carousels, Date Pickers, etc.)
  ...AI_CHAT_VARIANTS,
  // Premium unique variants (batch A — diverse styles)
  ...STYLE_VARIANTS,
  // Premium unique variants (batch B — fill remaining gaps)
  ...BATCH_B_VARIANTS,
  // Complete announcement library (15 premium variants)
  ...ANNOUNCEMENT_VARIANTS_V2,
  // Phase 5: Batch 1 (Premium Base Components)
  ...BATCH_1_BASE,
  // Phase 5: Batch 4 — Aesthetic Expansion (Backgrounds, Borders, Shaders, Texts)
  ...BACKGROUND_VARIANTS,
  ...BORDER_VARIANTS,
  ...SHADER_VARIANTS,
  ...TEXT_DISPLAY_VARIANTS,
  ...GRADIENT_VARIANTS,
  ...ASCII_ART_VARIANTS,
  ...SIDEBAR_EXPANSION_VARIANTS,
  ...GENERATED_VARIANTS,
];

// QA: Deduplication guard
const seen = new Set<string>();
const deduplicated = ALL_SPECS.filter(v => {
  if (seen.has(v.id)) {
    // Silently skip duplicates in production
    return false;
  }
  seen.add(v.id);
  return true;
});

export const REGISTRY_COMPONENTS: ComponentItem[] = deduplicated.map(toComponentItem);

// Lookup helpers
export const REGISTRY_BY_ID: Record<string, ComponentItem> = Object.fromEntries(
  REGISTRY_COMPONENTS.map(c => [c.id, c])
);

export const REGISTRY_COUNT = REGISTRY_COMPONENTS.length;

