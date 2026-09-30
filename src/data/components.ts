import { COMPONENTS } from "./seed-components";
import { REGISTRY_COMPONENTS } from "./registry/index";
import type { ComponentItem } from "./component-types";
export type { Author, ComponentItem, PreviewKind } from "./component-types";
export { COMPONENTS } from "./seed-components";

// Listing and detail views must resolve duplicate IDs to the same record.
const catalog = new Map<string, ComponentItem>();
for (const item of [...COMPONENTS, ...REGISTRY_COMPONENTS]) {
  if (!catalog.has(item.id)) catalog.set(item.id, item);
}
export const ALL_COMPONENTS = [...catalog.values()];
export const COMPONENT_BY_ID = Object.fromEntries(catalog);
