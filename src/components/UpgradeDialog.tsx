import React from "react";
import { Check, Gem, Sparkles, X, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Icon } from "./ui/Icon";
import { useRoute } from "../lib/router";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  copiesUsed?: number;
}

export function UpgradeDialog({ isOpen, onClose, copiesUsed = 2 }: Props) {
  const { navigate } = useRoute();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-6 sm:p-8 shadow-2xl backdrop-blur-2xl animate-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-1.5 text-[var(--uf-text-muted)] hover:bg-white/10 hover:text-[var(--uf-text)] transition"
        >
          <Icon icon={X} size={18} />
        </button>

        <div className="flex items-center gap-2 mb-2 text-purple-400 font-semibold text-xs uppercase tracking-wider">
          <Icon icon={Gem} size={14} />
          <span>Daily Limit Reached</span>
        </div>

        <h2 className="text-2xl font-black tracking-tight text-[var(--uf-text)] sm:text-3xl">
          Keep building without limits
        </h2>
        <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">
          You've used all <strong className="text-[var(--uf-text)]">{copiesUsed} of 2 free copies</strong> today. 
          Upgrade to unlock unlimited code & prompt copies, CLI/MCP installs, and AI synthesis.
        </p>

        {/* Pricing Cards Comparison */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Builder Plan */}
          <div className="relative flex flex-col rounded-xl border border-[var(--uf-accent)]/50 bg-[var(--uf-panel-2)] p-5 shadow-lg">
            <span className="absolute -top-2.5 right-4 rounded-full bg-[var(--uf-accent)] px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
              Most Popular
            </span>
            <div className="text-sm font-bold text-[var(--uf-text)]">Builder</div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-black text-[var(--uf-text)]">$6</span>
              <span className="text-xs text-[var(--uf-text-secondary)]">/ month, billed yearly</span>
            </div>
            <ul className="mt-4 space-y-2 text-xs text-[var(--uf-text-secondary)] flex-1">
              <li className="flex items-center gap-2 text-[var(--uf-text)]">
                <Icon icon={Check} size={14} className="text-emerald-400 shrink-0" />
                <span>Unlimited code & prompt copies</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--uf-text)]">
                <Icon icon={Check} size={14} className="text-emerald-400 shrink-0" />
                <span>Unlimited CLI & MCP installs</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--uf-text)]">
                <Icon icon={Check} size={14} className="text-emerald-400 shrink-0" />
                <span>29,000+ icons searched by meaning</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--uf-text)]">
                <Icon icon={Check} size={14} className="text-emerald-400 shrink-0" />
                <span>Custom gradients, themes & shaders</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => { onClose(); navigate("#/pricing"); }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--uf-accent)] py-2.5 text-xs font-bold text-white hover:bg-[var(--uf-accent-hover)] transition cursor-pointer shadow-md"
            >
              <span>Upgrade to Builder</span>
              <Icon icon={ArrowRight} size={14} />
            </button>
          </div>

          {/* Builder + AI Plan */}
          <div className="flex flex-col rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-5">
            <div className="text-sm font-bold text-[var(--uf-text)]">Builder + AI</div>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-3xl font-black text-[var(--uf-text)]">$15</span>
              <span className="text-xs text-[var(--uf-text-secondary)]">/ month</span>
            </div>
            <ul className="mt-4 space-y-2 text-xs text-[var(--uf-text-secondary)] flex-1">
              <li className="flex items-center gap-2 text-[var(--uf-text)]">
                <Icon icon={Check} size={14} className="text-purple-400 shrink-0" />
                <span>Everything in Builder</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--uf-text)]">
                <Icon icon={Check} size={14} className="text-purple-400 shrink-0" />
                <span>1,000 AI synthesis credits / mo</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--uf-text)]">
                <Icon icon={Check} size={14} className="text-purple-400 shrink-0" />
                <span>Design Bug Bot code review included</span>
              </li>
              <li className="flex items-center gap-2 text-[var(--uf-text)]">
                <Icon icon={Check} size={14} className="text-purple-400 shrink-0" />
                <span>Multi-variant AI component generation</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => { onClose(); navigate("#/pricing"); }}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--uf-border)] bg-white/5 py-2.5 text-xs font-bold text-[var(--uf-text)] hover:bg-white/10 transition cursor-pointer"
            >
              <span>Get Builder + AI</span>
            </button>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[var(--uf-border)] pt-4 text-xs text-[var(--uf-text-muted)]">
          <div className="flex items-center gap-2">
            <Icon icon={ShieldCheck} size={14} className="text-emerald-400" />
            <span>Cancel anytime · 14-day money-back guarantee</span>
          </div>
          <button 
            type="button"
            onClick={() => { onClose(); navigate("#/pricing"); }}
            className="hover:text-[var(--uf-text)] underline"
          >
            Compare all plans →
          </button>
        </div>
      </div>
    </div>
  );
}
