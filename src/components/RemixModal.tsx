/**
 * Remix Modal — uses the accessible Dialog primitive.
 *
 * Fixes from audit:
 *  B-02: role="dialog", aria-modal, focus trap, focus return (via Dialog)
 *  B-06: catch (err: unknown), inline error UI, no alert()
 *  B-07: Uses router navigate() instead of window.location.hash
 */

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Check } from "lucide-react";
import { Dialog } from "./ui/Dialog";
import { Icon } from "./ui/Icon";
import type { ComponentItem } from "../data/components";
import { ALL_COMPONENTS } from "../data/components";
import { searchRegistry } from "../lib/semanticSearch";
import { useRoute } from "../lib/router";

interface RemixModalProps {
  isOpen: boolean;
  onClose: () => void;
  component: ComponentItem;
}

export function RemixModal({ isOpen, onClose, component }: RemixModalProps) {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<ComponentItem | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { navigate } = useRoute();

  async function handleRemix(e: React.FormEvent) {
    e.preventDefault();
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setError(null);

    try {
      // Simulate slight processing delay
      await new Promise(r => setTimeout(r, 600));

      const searchResult = searchRegistry(prompt, ALL_COMPONENTS);
      
      if (searchResult.top && searchResult.top.score > 2) {
        setResult(searchResult.top.item);
      } else {
        setError("Could not find a close enough match in the registry to simulate this remix.");
      }
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(message);
    } finally {
      setIsGenerating(false);
    }
  }

  function handleClose() {
    // Reset state on close
    setPrompt("");
    setResult(null);
    setError(null);
    onClose();
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      title="Remix with AI"
      description={`Modifying: ${component.title}`}
    >
      {result ? (
        /* ── Success state ── */
        <div className="py-6 text-center">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
            <Icon icon={Check} size={24} />
          </div>
          <h3 className="text-lg font-medium text-ink-900 dark:text-white">
            Remix complete!
          </h3>
          <button
            type="button"
            onClick={() => {
              handleClose();
              navigate(`#/component/${result.id}`);
            }}
            className="mt-6 w-full rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
          >
            View new component
          </button>
        </div>
      ) : (
        /* ── Form state ── */
        <form onSubmit={handleRemix}>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400">
              <Icon icon={Sparkles} size={18} />
            </div>
            <p className="text-sm text-ink-500 dark:text-ink-400">
              Describe how you'd like to modify this component
            </p>
          </div>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. Make it dark mode only and add a bouncy hover effect..."
            className="h-32 w-full resize-none rounded-xl border border-ink-200 bg-ink-50 p-4 text-sm text-ink-900 shadow-inner placeholder:text-ink-400 focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
            autoFocus
          />

          {/* Inline error */}
          {error && (
            <p
              className="mt-2 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:bg-rose-950/40 dark:text-rose-300"
              role="alert"
            >
              {error}
            </p>
          )}

          <div className="mt-4 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="rounded-lg px-4 py-2 text-sm font-medium text-ink-600 transition hover:bg-ink-50 dark:text-ink-400 dark:hover:bg-ink-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isGenerating || !prompt.trim()}
              className="relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-ink-900 px-6 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-ink-800 disabled:opacity-50 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
            >
              {isGenerating ? (
                <>
                  <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white dark:border-ink-900/30 dark:border-t-ink-900" />
                  Generating...
                </>
              ) : (
                "Remix"
              )}
            </button>
          </div>
        </form>
      )}
    </Dialog>
  );
}
