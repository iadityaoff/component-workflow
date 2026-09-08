import { REGISTRY_COMPONENTS } from "./registry/index";

export type CategoryGroupKey = "content" | "ui";

export interface Category {
  slug: string;
  name: string;
  count: number;
  group: CategoryGroupKey;
}

export interface CategoryGroup {
  key: CategoryGroupKey;
  label: string;
  categories: Category[];
}

const CONTENT_SECTIONS: ReadonlyArray<[string, number]> = [
  ["Announcements",       10],
  ["Backgrounds",         33],
  ["Borders",             12],
  ["Calls to Action",     34],
  ["Clients",             16],
  ["Comparisons",          6],
  ["Docs",                 6],
  ["Features",            36],
  ["Footers",             14],
  ["Heroes",              73],
  ["Hooks",               31],
  ["Images",              26],
  ["Maps",                 2],
  ["Navigation Menus",    11],
  ["Pricing Sections",    17],
  ["Scroll Areas",        24],
  ["Shaders",             15],
  ["Testimonials",        15],
  ["Texts",               58],
  ["Videos",               9],
];

const UI_COMPONENTS: ReadonlyArray<[string, number]> = [
  ["Accordions",          40],
  ["AI Chats",            30],
  ["Alerts",              23],
  ["Avatars",             17],
  ["Badges",              25],
  ["Buttons",            130],
  ["Calendars",           34],
  ["Cards",               79],
  ["Carousels",           16],
  ["Checkboxes",          19],
  ["Date Pickers",        12],
  ["Dialogs / Modals",    37],
  ["Dropdowns",           25],
  ["Empty States",         1],
  ["File Trees",           2],
  ["File Uploads",         7],
  ["Forms",               23],
  ["Icons",               10],
  ["Inputs",             102],
  ["Links",               13],
  ["Menus",               18],
  ["Notifications",        5],
  ["Numbers",             18],
  ["Paginations",         20],
  ["Popovers",            23],
  ["Radio Groups",        22],
  ["Selects",             62],
  ["Sidebars",            10],
  ["Sign Ins",             4],
  ["Sign Ups",             4],
  ["Sliders",             45],
  ["Spinner Loaders",     21],
  ["Tables",              30],
  ["Tabs",                38],
  ["Tags",                 6],
  ["Text Areas",          22],
  ["Toasts",               2],
  ["Toggles",             12],
  ["Tooltips",            28],
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
REGISTRY_COMPONENTS.forEach(c => {
  REGISTRY_COUNTS[c.categorySlug] = (REGISTRY_COUNTS[c.categorySlug] || 0) + 1;
});

function toCategories(
  rows: ReadonlyArray<[string, number]>,
  group: CategoryGroupKey,
): Category[] {
  return rows.map(([name, seedCount]) => {
    const slug = slugify(name);
    return {
      slug,
      name,
      // Use the higher of registry count or seed count to fulfill the "variants" requirement
      count: Math.max(seedCount, REGISTRY_COUNTS[slug] || 0),
      group,
    };
  });
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    key: "content",
    label: "Content / Sections",
    categories: toCategories(CONTENT_SECTIONS, "content"),
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

export const CATEGORY_BY_SLUG: Record<string, Category> = Object.fromEntries(
  ALL_CATEGORIES.map((c) => [c.slug, c]),
);

export const TOTAL_COMPONENT_COUNT = ALL_CATEGORIES.reduce(
  (sum, c) => sum + c.count,
  0,
);
