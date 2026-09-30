import { ALL_COMPONENTS } from "./components";

export type CategoryGroupKey = "marketing" | "ui";

export interface Category {
  slug: string;
  name: string;
  count: number;
  group: CategoryGroupKey;
  isNew?: boolean;
}

export interface CategoryGroup {
  key: CategoryGroupKey;
  label: string;
  categories: Category[];
}

/* ── Marketing Blocks (from spec) ── */
const MARKETING_BLOCKS: ReadonlyArray<[string, number, boolean?]> = [
  ["Announcements",        71],
  ["ASCII Art",            28, true],
  ["Backgrounds",         365],
  ["Borders",             111],
  ["Calls to Action",     501],
  ["Clients",              17],
  ["Comparisons",          31],
  ["Docks",                49],
  ["FAQs",                191],
  ["Features",            318],
  ["Footers",              65],
  ["Galleries",           272],
  ["Gradients",            95, true],
  ["Heroes",             1152],
  ["Hooks",                51],
  ["Images",              428],
  ["Maps",                 51],
  ["Marquees",            113],
  ["Navigation Menus",    477],
  ["Pricing Sections",    216],
  ["Scroll Areas",        293],
  ["Shaders",             118, true],
  ["Stats & KPIs",        153],
  ["Steppers",            124],
  ["Team Sections",       119],
  ["Testimonials",        161],
  ["Texts",               663],
  ["Timelines",            74],
  ["Videos",              162],
];

/* ── UI Components (from spec) ── */
const UI_COMPONENTS: ReadonlyArray<[string, number, boolean?]> = [
  ["Accordions",          234],
  ["AI Chats",            248],
  ["Alerts",              240],
  ["Avatars",             597],
  ["Badges",              605],
  ["Buttons",            2043],
  ["Calendars",           239],
  ["Cards",              1780],
  ["Carousels",           239],
  ["Charts & Data Viz",   246],
  ["Checkboxes",          238],
  ["Cursors",             152],
  ["Dashboards",          400],
  ["Date Pickers",        250],
  ["Dialogs / Modals",    328],
  ["Dropdowns",           506],
  ["Empty States",         77],
  ["File Trees",           61],
  ["File Uploads",        154],
  ["Forms",              1522],
  ["Globes",               41],
  ["Grids & Bento",       620],
  ["Icons",               851],
  ["Inputs",              949],
  ["Links",               354],
  ["Lists",               349],
  ["Menus",               287],
  ["Notifications",       247],
  ["Numbers",              54],
  ["Onboarding",           53],
  ["Paginations",         130],
  ["Popovers",            179],
  ["Profiles",            270],
  ["Progress",            375],
  ["Radio Groups",        152],
  ["Search Bars",         218],
  ["Selects",             316],
  ["Sidebars",             95],
  ["Sign Ins",            103],
  ["Sign Ups",             58],
  ["Sliders",             217],
  ["Spinner Loaders",     480],
  ["Tables",              313],
  ["Tabs",                239],
  ["Tags",                 74],
  ["Text Areas",          187],
  ["Toasts",               79],
  ["Toggles",             532],
  ["Tooltips",            267],
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Pre-calculate counts from the registry
const REGISTRY_COUNTS: Record<string, number> = {};
ALL_COMPONENTS.forEach(c => {
  REGISTRY_COUNTS[c.categorySlug] = (REGISTRY_COUNTS[c.categorySlug] || 0) + 1;
});

function toCategories(
  rows: ReadonlyArray<[string, number, boolean?]>,
  group: CategoryGroupKey,
): Category[] {
  return rows.map(([name, , isNew]) => {
    const slug = slugify(name);
    return {
      slug,
      name,
      count: REGISTRY_COUNTS[slug] || 0,
      group,
      isNew: !!isNew,
    };
  });
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    key: "marketing",
    label: "Marketing Blocks",
    categories: toCategories(MARKETING_BLOCKS, "marketing"),
  },
  {
    key: "ui",
    label: "UI Components",
    categories: toCategories(UI_COMPONENTS, "ui"),
  },
];

export const ALL_CATEGORIES: Category[] = CATEGORY_GROUPS.flatMap(
  (g) => g.categories,
);

export const CATEGORIES = ALL_CATEGORIES;

export const CATEGORY_BY_SLUG: Record<string, Category> = Object.fromEntries(
  ALL_CATEGORIES.map((c) => [c.slug, c]),
);

export const TOTAL_COMPONENT_COUNT = ALL_CATEGORIES.reduce(
  (sum, c) => sum + c.count,
  0,
);
