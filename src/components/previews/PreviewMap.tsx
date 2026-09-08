import React from 'react';
import type { PreviewKind } from '../../data/components';
import {
  Frame, PrimaryButton, GradientButton, GhostButton, OutlineButton, DestructiveButton,
  IconButtons, LoadingButton, ButtonSizes, PricingCard, StatCard, ProductCard, UserProfileCard,
  NotificationCard, SearchField, FloatingInput, PasswordInput, OTPInput, BadgeRow, AvatarStack,
  SuccessAlert, ErrorAlert, WarningAlert, InfoAlert, PillTabs, ToggleSwitch, Spinner, ProgressBar,
  HeroGradient, HeroMinimal, Testimonial, FeatureGrid, DropdownMenu, CodeBlock, TooltipDemo,
  AccordionDemo, CheckboxList, SelectCustom, DialogConfirm, NavBarPreview, SliderRange, ToastPreview,
  RadioGroup, SidebarNav, SignInPreview, SignUpPreview, FileUploadPreview, PaginationPreview,
  TablePreview, FooterPreview, CalendarPreview
} from './AllPreviews';

const KIND_MAP: Record<PreviewKind, React.ComponentType> = {
  "button-primary":    PrimaryButton,
  "button-gradient":   GradientButton,
  "button-ghost":      GhostButton,
  "button-outline":    OutlineButton,
  "button-destructive":DestructiveButton,
  "button-icon":       IconButtons,
  "button-loading":    LoadingButton,
  "button-sizes":      ButtonSizes,
  "card-pricing":      PricingCard,
  "card-stat":         StatCard,
  "card-product":      ProductCard,
  "card-user-profile": UserProfileCard,
  "card-notification": NotificationCard,
  "input-search":      SearchField,
  "input-floating":    FloatingInput,
  "input-password":    PasswordInput,
  "input-otp":         OTPInput,
  "badge-row":         BadgeRow,
  "avatar-stack":      AvatarStack,
  "alert-success":     SuccessAlert,
  "alert-error":       ErrorAlert,
  "alert-warning":     WarningAlert,
  "alert-info":        InfoAlert,
  "tabs-pill":         PillTabs,
  "toggle-switch":     ToggleSwitch,
  "spinner":           Spinner,
  "progress-bar":      ProgressBar,
  "hero-gradient":     HeroGradient,
  "hero-minimal":      HeroMinimal,
  "testimonial":       Testimonial,
  "feature-grid":      FeatureGrid,
  "dropdown-menu":     DropdownMenu,
  "code-block":        CodeBlock,
  "tooltip":           TooltipDemo,
  "accordion":         AccordionDemo,
  "checkbox-list":     CheckboxList,
  "select-custom":     SelectCustom,
  "dialog-confirm":    DialogConfirm,
  "nav-bar":           NavBarPreview,
  "slider-range":      SliderRange,
  "notification-toast":ToastPreview,
  "radio-group":       RadioGroup,
  "sidebar-nav":       SidebarNav,
  "sign-in-form":      SignInPreview,
  "sign-up-form":      SignUpPreview,
  "file-upload":       FileUploadPreview,
  "pagination":        PaginationPreview,
  "table-simple":      TablePreview,
  "footer-simple":     FooterPreview,
  "calendar-mini":     CalendarPreview,
};

// Re-export so React.lazy gets a proper default export
export default function PreviewMap({ kind }: { kind: PreviewKind }) {
  const Component = KIND_MAP[kind] ?? Frame;
  return <Component />;
}


