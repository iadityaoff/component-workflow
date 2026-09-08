/**
 * Skeleton loading primitive.
 *
 * Respects prefers-reduced-motion: disables shimmer animation
 * when the user prefers reduced motion.
 */

interface SkeletonProps {
  className?: string;
  /** Rounds to pill shape */
  rounded?: boolean;
}

export function Skeleton({ className = "", rounded }: SkeletonProps) {
  return (
    <div
      aria-hidden
      className={[
        "skeleton",
        rounded ? "rounded-full" : "rounded-lg",
        className,
      ].join(" ")}
    />
  );
}

export type { SkeletonProps };
