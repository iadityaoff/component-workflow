/**
 * Kbd — keyboard key display primitive.
 *
 * Shows a keyboard shortcut in a styled <kbd> element.
 * Used in CommandPalette footer, shortcut legend, etc.
 */

interface KbdProps {
  children: React.ReactNode;
  className?: string;
}

export function Kbd({ children, className = "" }: KbdProps) {
  return (
    <kbd
      className={[
        "inline-flex h-5 min-w-[20px] items-center justify-center rounded border border-ink-200 bg-ink-100 px-1.5 text-[10px] font-medium text-ink-600",
        "dark:border-ink-700 dark:bg-ink-800 dark:text-ink-400",
        className,
      ].join(" ")}
    >
      {children}
    </kbd>
  );
}

export type { KbdProps };
