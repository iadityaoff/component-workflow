/**
 * SEMANTIC REGISTRY SEARCH
 * ───────────────────────────────────────────────────────────────────
 * Lightweight, dependency-free scorer that ranks the entire
 * `ALL_COMPONENTS` catalogue (1,500+ entries) against a natural-language
 * prompt and returns the best match.
 *
 * Powers the Magic Chat "Semantic Registry Agent" — converts a prompt
 * like *"Give me a dark-mode glassmorphism pricing card"* into a real
 * component drawn from the registry, so the chat feels live without a
 * hosted LLM.
 *
 * Strategy:
 *   1. Tokenize the prompt <Icon icon={ArrowRight} size={16} /> lowercase words, strip punctuation,
 *      drop stopwords.
 *   2. Score every component with a weighted field-match model:
 *        title (×6) · category (×5) · tags (×4)
 *        description (×2) · prompt (×1)
 *   3. Apply style / intent boosts (glassmorphism, brutalist, dark,
 *      gradient, animated, …) against both tags and the raw code.
 *   4. Category intent boost — if the prompt mentions "pricing",
 *      "hero", "testimonial" etc., nudge items in that category.
 *   5. Tiny popularity tie-breaker so featured/popular variants win
 *      between otherwise-equal candidates.
 * ───────────────────────────────────────────────────────────────────
 */

import type { ComponentItem } from "../data/components";

/** English stopwords — kept small so domain words (`card`, `hero`) survive. */
const STOPWORDS = new Set<string>([
  "a", "an", "the", "and", "or", "but", "with", "without", "for", "of",
  "on", "in", "to", "from", "at", "by", "as", "is", "are", "was", "were",
  "be", "been", "being", "have", "has", "had", "do", "does", "did",
  "i", "you", "we", "they", "he", "she", "it", "me", "my", "your", "our",
  "give", "show", "make", "build", "create", "generate", "want", "need",
  "please", "some", "any", "that", "this", "these", "those", "can",
  "could", "would", "should", "will", "just", "like", "about", "into",
  "than", "then", "also", "too", "very", "really", "looks", "look",
  "looking", "use", "using", "component", "components", "element",
  "ui", "design", "kind", "type", "style", "styled",
]);

/** Style-synonym normalisation so "glassy" still hits "glassmorphism". */
const SYNONYMS: Record<string, string[]> = {
  glass: ["glassmorphism"],
  glassy: ["glassmorphism"],
  glassmorphism: ["glass"],
  brutalist: ["brutal"],
  brutal: ["brutalist"],
  neu: ["neumorphism", "neumorphic"],
  neumorphic: ["neumorphism"],
  neumorphism: ["neumorphic"],
  dark: ["night", "black"],
  light: ["white", "bright"],
  gradient: ["gradients"],
  neon: ["glow", "cyberpunk"],
  animated: ["animation", "motion"],
  saas: ["dashboard", "product"],
  minimal: ["minimalist", "clean"],
  retro: ["vintage"],
  pricing: ["price", "plans", "tier", "subscription"],
  hero: ["banner", "landing"],
  testimonial: ["testimonials", "reviews", "quote"],
  login: ["signin", "sign-in", "sign"],
  signup: ["sign-up", "register", "registration"],
  nav: ["navbar", "navigation", "header"],
  modal: ["dialog", "popup"],
  button: ["btn", "cta"],
  card: ["cards", "tile", "panel"],
  form: ["forms", "input"],
};

/** Category slugs that often show up verbatim in prompts. */
const CATEGORY_INTENT: Record<string, string[]> = {
  "pricing-sections": ["pricing", "price", "plans", "tier", "subscription"],
  "heroes": ["hero", "banner", "landing"],
  "testimonials": ["testimonial", "quote", "review"],
  "calls-to-action": ["cta", "call-to-action"],
  "sign-ins": ["signin", "login"],
  "sign-ups": ["signup", "register"],
  "navigation-menus": ["navbar", "navigation", "header", "menu"],
  "ai-chats": ["chat", "chatbot", "messenger", "conversation"],
  "dialogs-modals": ["modal", "dialog", "popup"],
  "forms": ["form", "contact"],
  "footers": ["footer"],
  "features": ["feature"],
  "cards": ["card", "tile"],
  "buttons": ["button", "btn", "cta"],
  "inputs": ["input", "field", "textbox"],
  "tables": ["table", "grid", "datagrid"],
  "tabs": ["tab", "tabbed"],
  "avatars": ["avatar", "profile"],
  "badges": ["badge", "chip", "pill"],
  "alerts": ["alert", "notice", "banner"],
  "notifications": ["notification", "toast"],
  "carousels": ["carousel", "slider", "slideshow"],
  "calendars": ["calendar", "datepicker"],
  "date-pickers": ["date", "picker", "datepicker"],
  "dropdowns": ["dropdown", "menu", "select"],
  "spinner-loaders": ["spinner", "loader", "loading"],
  "toasts": ["toast", "snackbar"],
  "tooltips": ["tooltip", "hint"],
  "tags": ["tag", "chip"],
  "toggles": ["toggle", "switch"],
  "sliders": ["slider", "range"],
  "checkboxes": ["checkbox"],
  "radio-groups": ["radio"],
  "selects": ["select", "dropdown"],
  "sidebars": ["sidebar", "drawer"],
  "accordions": ["accordion", "expand"],
  "text-areas": ["textarea"],
};

export interface SearchMatch {
  item: ComponentItem;
  score: number;
}

export interface SearchResult {
  top: SearchMatch | null;
  alternatives: SearchMatch[];
  tokens: string[];
  /** ms, useful for debug / stats surfacing in chat */
  elapsedMs: number;
}

/** Tokenise + stopword filter + synonym expansion. */
export function tokenize(raw: string): string[] {
  const cleaned = raw
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const base = cleaned
    .split(" ")
    .filter(w => w.length > 1 && !STOPWORDS.has(w));

  const expanded = new Set<string>(base);
  for (const word of base) {
    const syns = SYNONYMS[word];
    if (syns) syns.forEach(s => expanded.add(s));
  }
  return Array.from(expanded);
}

/**
 * Score a single component against the token set.
 * Weights are tuned so that a title hit easily outranks a lone tag hit,
 * but multiple weaker matches still compound.
 */
function scoreComponent(item: ComponentItem, tokens: string[]): number {
  if (tokens.length === 0) return 0;

  const title = item.title.toLowerCase();
  const description = item.description.toLowerCase();
  const prompt = (item.prompt || "").toLowerCase();
  const category = item.categorySlug.toLowerCase();
  const tagBlob = item.tags.join(" ").toLowerCase();
  const codeBlob = item.code.toLowerCase();

  let score = 0;
  let titleHits = 0;
  let tagHits = 0;
  let categoryHit = false;

  for (const token of tokens) {
    if (title.includes(token)) {
      score += 6;
      titleHits += 1;
    }
    if (tagBlob.includes(token)) {
      score += 4;
      tagHits += 1;
    }
    if (category.includes(token)) {
      score += 5;
      categoryHit = true;
    }
    if (description.includes(token)) {
      score += 2;
    }
    if (prompt.includes(token)) {
      score += 1;
    }
    // Lighter match inside code — useful for rare style tokens
    // ("backdrop-blur", "gradient-to-r") that only appear there.
    if (token.length >= 5 && codeBlob.includes(token)) {
      score += 0.5;
    }
  }

  // Category-intent boost — "dark pricing card" should favour
  // pricing-sections even if the word "pricing" only matched via a
  // synonym expansion.
  const intentWords = CATEGORY_INTENT[item.categorySlug];
  if (intentWords) {
    for (const token of tokens) {
      if (intentWords.includes(token)) {
        score += 3;
        categoryHit = true;
      }
    }
  }

  // Coverage multipliers — reward components that match *multiple*
  // tokens so "dark glassmorphism pricing" beats a plain "pricing" hit.
  if (titleHits >= 2) score += 3;
  if (tagHits >= 2) score += 2;
  if (categoryHit && titleHits >= 1) score += 2;

  // Popularity tie-breaker (tiny — never outranks a real content match)
  score += Math.min(item.featured, 10) * 0.05;
  score += Math.log10(Math.max(item.likes, 1)) * 0.1;

  return score;
}

/**
 * Rank every component in the catalogue against the prompt and return
 * the best match plus a few runners-up.
 */
export function searchRegistry(
  query: string,
  catalogue: ComponentItem[],
  options: { alternatives?: number } = {},
): SearchResult {
  const started = performance.now();
  const tokens = tokenize(query);
  const alternativesCount = options.alternatives ?? 3;

  if (tokens.length === 0 || catalogue.length === 0) {
    return {
      top: null,
      alternatives: [],
      tokens,
      elapsedMs: performance.now() - started,
    };
  }

  const scored: SearchMatch[] = [];
  for (const item of catalogue) {
    const score = scoreComponent(item, tokens);
    if (score > 0) scored.push({ item, score });
  }

  scored.sort((a, b) => b.score - a.score);

  const top = scored[0] ?? null;
  const alternatives = scored.slice(1, 1 + alternativesCount);

  return {
    top,
    alternatives,
    tokens,
    elapsedMs: performance.now() - started,
  };
}
