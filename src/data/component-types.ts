export interface Author {
  id: string;
  name: string;
  handle: string;
  /** Initial(s) shown in the avatar */
  avatarText: string;
  /** Tailwind background class for the avatar */
  avatarColor: string;
}

export interface ComponentItem {
  id: string;
  title: string;
  description: string;
  /** matches `Category.slug` */
  categorySlug: string;
  tags: string[];
  /** Source code shown in the Code tab and copied via "Copy code" */
  code: string;
  /** Pre-compiled JavaScript injected at build time by vite-plugin-precompile */
  compiledCode?: string;
  /** Natural-language prompt copied via "Copy prompt" */
  prompt: string;
  author: Author;
  /** Higher = more featured */
  featured: number;
  /** ms since epoch — drives the "Newest" sort */
  createdAt: number;
  /** drives the "Popular" sort */
  likes: number;
  views: number;
  /** Optional preview renderer key — see ComponentCard */
  previewKind: PreviewKind;
}

export type PreviewKind =
  | "button-primary"
  | "button-gradient"
  | "button-ghost"
  | "button-outline"
  | "button-destructive"
  | "button-icon"
  | "button-loading"
  | "button-sizes"
  | "btn-shiny"
  | "btn-texture"
  | "btn-eclipse"
  | "btn-letter-swap"
  | "btn-app-store"
  | "btn-compact-msg"
  | "btn-heroui-group"
  | "btn-notification-badge"
  | "btn-flow"
  | "btn-subtext"
  | "btn-dashed"
  | "btn-matrix"
  | "card-pricing"
  | "card-stat"
  | "card-product"
  | "card-user-profile"
  | "card-notification"
  | "input-search"
  | "input-floating"
  | "input-password"
  | "input-otp"
  | "badge-row"
  | "avatar-stack"
  | "alert-success"
  | "alert-error"
  | "alert-warning"
  | "alert-info"
  | "tabs-pill"
  | "toggle-switch"
  | "spinner"
  | "progress-bar"
  | "hero-gradient"
  | "hero-minimal"
  | "testimonial"
  | "feature-grid"
  | "dropdown-menu"
  | "code-block"
  | "tooltip"
  | "accordion"
  | "checkbox-list"
  | "select-custom"
  | "dialog-confirm"
  | "nav-bar"
  | "slider-range"
  | "notification-toast"
  | "radio-group"
  | "sidebar-nav"
  | "sign-in-form"
  | "sign-up-form"
  | "file-upload"
  | "pagination"
  | "table-simple"
  | "footer-simple"
  | "calendar-mini"
  | "scroll-hero"
  | "shader-visual"
  | "liquid-metal"
  | "bento-grid"
  | "ascii-art"
  | "spotlight-card"
  | "border-beam"
  | "dock-menu"
  | "text-shimmer"
  | "btn-magnetic";

