import React, { useState } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Icon } from "./ui/Icon";
import { useRoute } from "../lib/router";

/**
 * Dismissible gradient announcement banner — sits at the very top of the page.
 * Modeled after 21st.dev's announcement ribbon. Persists dismissal in sessionStorage.
 */
export function AnnouncementBanner() {
  const { navigate } = useRoute();
  const [dismissed, setDismissed] = useState(() => {
    try {
      return sessionStorage.getItem("announcement-dismissed") === "1";
    } catch {
      return false;
    }
  });

  if (dismissed) return null;

  function dismiss(e: React.MouseEvent) {
    e.stopPropagation();
    setDismissed(true);
    try {
      sessionStorage.setItem("announcement-dismissed", "1");
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="announcement-banner group relative z-50 flex items-center justify-center gap-2 overflow-hidden border-b border-white/10 bg-gradient-to-r from-violet-600 via-fuchsia-500 to-rose-500 px-4 py-2.5 text-sm font-medium text-white">
      {/* Animated shimmer overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.12)_50%,transparent_70%)] bg-[length:200%_100%] animate-shimmer" />
      
      <Icon icon={Sparkles} size={15} className="shrink-0 opacity-90" />
      <button
        onClick={() => navigate("#/agents")}
        className="relative inline-flex items-center gap-1.5 border-none bg-transparent text-white hover:underline focus:outline-none"
      >
        <span className="hidden sm:inline">Agent Registry is live.</span>
        <span className="sm:hidden">Agents are live.</span>
        <span className="opacity-80">Share and discover AI agent configs with one click.</span>
        <Icon icon={ArrowRight} size={14} className="opacity-70 transition-transform group-hover:translate-x-0.5" />
      </button>

      <button
        onClick={dismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/70 transition hover:bg-white/10 hover:text-white focus:outline-none"
        aria-label="Dismiss announcement"
      >
        <Icon icon={X} size={14} />
      </button>
    </div>
  );
}
