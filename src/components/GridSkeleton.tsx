/**
 * GridSkeleton — shimmer placeholder shown during search debounce or
 * while the virtualizer is measuring its first rows. Matches the
 * ComponentCard shape so layout doesn't jump.
 */
interface Props {
  rows?: number;
}

export function GridSkeleton({ rows = 2 }: Props) {
  const count = rows * 3;
  return (
    <div
      aria-busy="true"
      aria-live="polite"
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white p-3 dark:border-ink-800 dark:bg-ink-950"
        >
          <div className="h-44 w-full animate-pulse rounded-xl bg-ink-100 dark:bg-ink-900" />
          <div className="mt-4 space-y-2.5">
            <div className="h-3.5 w-2/3 animate-pulse rounded bg-ink-100 dark:bg-ink-900" />
            <div className="h-3 w-full animate-pulse rounded bg-ink-100/70 dark:bg-ink-900/70" />
            <div className="mt-3 flex gap-2">
              <div className="h-5 w-16 animate-pulse rounded-full bg-ink-100 dark:bg-ink-900" />
              <div className="h-5 w-12 animate-pulse rounded-full bg-ink-100 dark:bg-ink-900" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              <div className="h-8 w-full animate-pulse rounded-md bg-ink-100 dark:bg-ink-900" />
              <div className="h-8 w-full animate-pulse rounded-md bg-ink-100 dark:bg-ink-900" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
