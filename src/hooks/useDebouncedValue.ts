/**
 * useDebouncedValue
 * ───────────────────────────────────────────────────────────────────
 * Returns a value that lags behind the input by `delay` ms. Pairs
 * nicely with React 18's `useDeferredValue` — the deferred value keeps
 * the UI responsive during a render burst, while the debounced value
 * prevents *kicking off* expensive filter passes on every keystroke.
 *
 * Usage:
 *   const debouncedQuery = useDebouncedValue(query, 300);
 *   const deferredQuery  = useDeferredValue(debouncedQuery);
 *   // feed `deferredQuery` to the filter memo.
 * ───────────────────────────────────────────────────────────────────
 */
import { useEffect, useState } from "react";

export function useDebouncedValue<T>(value: T, delay = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handle = window.setTimeout(() => setDebounced(value), delay);
    return () => window.clearTimeout(handle);
  }, [value, delay]);

  return debounced;
}
