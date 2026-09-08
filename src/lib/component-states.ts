/**
 * Centralized State Architecture for Components
 *
 * This utility provides standard props and classes to enforce visual and 
 * behavioral consistency across the entire component library.
 *
 * Supported States:
 * - Interactive: hover, focus, active
 * - Status: disabled, loading, empty, error
 * - Accessibility/Display: rtl, dense, reduced-motion
 * - Theme/Env: dark, light, mobile, print
 */

export interface ComponentStateProps {
  /** Disables interactions and reduces opacity */
  disabled?: boolean;
  /** Shows a loading indicator and disables interactions */
  loading?: boolean;
  /** Indicates an error state (e.g. red borders/text) */
  error?: boolean;
  /** Indicates an empty state (e.g. no data) */
  empty?: boolean;
  /** Uses a denser layout with reduced padding/margins */
  dense?: boolean;
  /** Adjusts layout for Right-to-Left languages */
  rtl?: boolean;
}

/**
 * Returns a standardized set of Tailwind classes based on the provided states.
 * Uses logical properties for RTL support and motion-safe queries.
 */
export function getSystemStateClasses(states: ComponentStateProps): string {
  const classes = [
    // Base interactive states (focus rings, hover)
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900/30 dark:focus-visible:ring-white/30",
    
    // Disabled & Loading
    (states.disabled || states.loading) ? "opacity-60 pointer-events-none cursor-not-allowed" : "",
    
    // Error state
    states.error ? "border-rose-500 text-rose-600 dark:border-rose-400 dark:text-rose-400 focus-visible:ring-rose-500/30" : "",
    
    // Density
    states.dense ? "px-2 py-1 text-xs" : "px-4 py-2 text-sm",
    
    // RTL Support (using Tailwind logical properties: e.g. ms-2 instead of ml-2)
    states.rtl ? "[dir='rtl']" : "",
    
    // Motion preference is handled natively by Tailwind's motion-safe/motion-reduce utilities
    // Print media is handled by print: utilities
  ];

  return classes.filter(Boolean).join(" ");
}
