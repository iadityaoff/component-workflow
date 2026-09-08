/**
 * Preview Load Queue
 * ───────────────────────────────────────────────────────────────────
 * Every live card preview runs inside a sandboxed iframe that loads
 * Tailwind, React, ReactDOM and @babel/standalone (≈1.8MB per frame).
 * Stacking 24 of those on a single page melts low-end devices and
 * saturates the network.
 *
 * This module is a tiny semaphore:
 *   1. A card that wants to render calls `requestSlot()`.
 *   2. If fewer than MAX_ACTIVE slots are in use, the promise resolves
 *      immediately. Otherwise it joins a FIFO wait-list.
 *   3. The card calls `releaseSlot()` once its iframe fires `onLoad`,
 *      freeing the slot for the next card in the queue.
 *
 * Priority: requests from cards closer to the viewport (`priority = 0`)
 * jump ahead of cards further away. The grid passes its virtual row
 * distance so above-the-fold previews always render first.
 *
 * This is entirely in-memory; no storage, no leaks across sessions.
 * ───────────────────────────────────────────────────────────────────
 */

/**
 * Max concurrent iframes loading.
 *
 * With precompiled code + local vendor assets (~130 KB React + 112 KB
 * Tailwind, all same-origin and cached) the per-iframe cost is mostly
 * layout/paint, not network. We still cap concurrency at 8 so that
 * first-paint for the above-the-fold row stays snappy on low-end
 * hardware — 24 simultaneous iframe reflows is enough to stall scroll
 * even when the scripts are cheap.
 */
const MAX_ACTIVE = 8;

interface Waiter {
  priority: number;
  resolve: () => void;
}

let active = 0;
const waiters: Waiter[] = [];

function drain() {
  while (active < MAX_ACTIVE && waiters.length > 0) {
    // Pop the lowest-priority number (closer to viewport = served first).
    let bestIdx = 0;
    for (let i = 1; i < waiters.length; i += 1) {
      if (waiters[i].priority < waiters[bestIdx].priority) bestIdx = i;
    }
    const [next] = waiters.splice(bestIdx, 1);
    active += 1;
    next.resolve();
  }
}

export function requestSlot(priority = 0): Promise<void> {
  if (active < MAX_ACTIVE) {
    active += 1;
    return Promise.resolve();
  }
  return new Promise<void>(resolve => {
    waiters.push({ priority, resolve });
  });
}

export function releaseSlot(): void {
  if (active > 0) active -= 1;
  drain();
}

/** Expose counters for debugging (never used in render paths). */
export function __queueStats() {
  return { active, waiting: waiters.length, max: MAX_ACTIVE };
}
