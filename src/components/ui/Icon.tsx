/**
 * Shared SVG icon wrapper.
 *
 * Enforces stroke-width 1.75, currentColor, consistent sizing,
 * and correct a11y attributes across the entire app.
 *
 * Usage:
 *   import { Search } from "lucide-react";
 *   <Icon icon={Search} />
 *   <Icon icon={Search} size={20} label="Search" />
 */

import type { LucideIcon } from "lucide-react";

type IconSize = 10 | 12 | 13 | 14 | 15 | 16 | 18 | 20 | 24 | 28 | 32;

interface IconProps {
  icon: LucideIcon;
  /** Pixel size (default 16) */
  size?: IconSize;
  /** If provided: role="img" + aria-label; else aria-hidden */
  label?: string;
  className?: string;
}

export function Icon({ icon: I, size = 16, label, className = "" }: IconProps) {
  return (
    <I
      width={size}
      height={size}
      strokeWidth={1.75}
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
      className={`shrink-0 ${className}`}
    />
  );
}

export type { IconProps, IconSize };
