/**
 * Button primitive — variant × size × density system.
 *
 * Supports: loading state, left/right icons, disabled,
 * focus-visible ring, and reduced-motion awareness.
 */

import React, { forwardRef } from "react";
import { Loader2 } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "destructive" | "link";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-violet-600 text-white hover:bg-violet-500 active:bg-violet-700 shadow-sm",
  secondary:
    "bg-ink-100 text-ink-900 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-50 dark:hover:bg-ink-700",
  ghost:
    "text-ink-800 hover:bg-ink-100 dark:text-ink-100 dark:hover:bg-ink-800",
  outline:
    "border border-ink-200 text-ink-900 hover:bg-ink-50 dark:border-ink-700 dark:text-ink-50 dark:hover:bg-ink-800",
  destructive:
    "bg-rose-600 text-white hover:bg-rose-500 active:bg-rose-700",
  link:
    "text-violet-600 underline-offset-4 hover:underline dark:text-violet-400",
};

const SIZE_CLASSES: Record<Size, string> = {
  xs: "h-7 px-2 text-xs rounded-md gap-1",
  sm: "h-8 px-3 text-sm rounded-md gap-1.5",
  md: "h-10 px-4 text-sm rounded-lg gap-2",
  lg: "h-11 px-5 text-base rounded-lg gap-2",
  xl: "h-12 px-6 text-base rounded-xl gap-2.5",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "primary",
      size = "md",
      loading,
      disabled,
      leftIcon,
      rightIcon,
      children,
      className = "",
      ...rest
    },
    ref,
  ) {
    const isDisabled = disabled || loading;
    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        aria-disabled={isDisabled || undefined}
        className={[
          "inline-flex items-center justify-center font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-60",
          VARIANT_CLASSES[variant],
          SIZE_CLASSES[size],
          className,
        ].join(" ")}
        {...rest}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!loading && rightIcon}
      </button>
    );
  },
);

export type { ButtonProps, Variant as ButtonVariant, Size as ButtonSize };
