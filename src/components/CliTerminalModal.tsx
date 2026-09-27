import React, { useState, useEffect } from "react";
import { useToast } from "./Toast";
import { Icon } from "./ui/Icon";
import { Terminal, Copy, Check, Play, RotateCcw, X, Sparkles, CheckCircle2 } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  componentId?: string;
  componentTitle?: string;
}

type PkgManager = "npx" | "pnpm" | "bun" | "yarn";

interface LogStep {
  text: string;
  type: "info" | "success" | "pending";
}

export function triggerCliModal(componentId?: string, componentTitle?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("twentyfirst:open-cli", {
        detail: { componentId, componentTitle },
      })
    );
  }
}

export function CliTerminalModal({ isOpen, onClose, componentId = "btn-shiny-01", componentTitle = "Shiny Button" }: Props) {
  const [pkg, setPkg] = useState<PkgManager>("npx");
  const [running, setRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [logs, setLogs] = useState<LogStep[]>([]);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const getCommand = () => {
    switch (pkg) {
      case "pnpm":
        return `pnpm dlx 21st dev add ${componentId}`;
      case "bun":
        return `bunx 21st dev add ${componentId}`;
      case "yarn":
        return `yarn dlx 21st dev add ${componentId}`;
      default:
        return `npx 21st dev add ${componentId}`;
    }
  };

  useEffect(() => {
    if (isOpen) {
      setLogs([]);
      setCompleted(false);
      setRunning(false);
    }
  }, [isOpen, componentId]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  function runSimulation() {
    if (running) return;
    setRunning(true);
    setCompleted(false);
    setLogs([]);

    const steps: { text: string; delay: number; type: "info" | "success" | "pending" }[] = [
      { text: "⠋ Inspecting project environment & tsconfig...", delay: 200, type: "pending" },
      { text: "✔ Detected Next.js 15 (App Router) + TypeScript", delay: 600, type: "success" },
      { text: "✔ Detected Tailwind CSS v4 setup", delay: 900, type: "success" },
      { text: "⠋ Resolving peer dependencies (framer-motion, lucide-react)...", delay: 1300, type: "pending" },
      { text: "✔ Peer dependencies installed or already satisfied", delay: 1800, type: "success" },
      { text: `✔ Created components/ui/${componentId}.tsx`, delay: 2300, type: "success" },
      { text: `✔ Configured styles and animations for ${componentTitle}`, delay: 2700, type: "success" },
      { text: "✨ Component successfully installed! Ready to import.", delay: 3000, type: "success" },
    ];

    steps.forEach(({ text, delay, type }) => {
      setTimeout(() => {
        setLogs((prev) => {
          // Replace previous pending if current is success
          const filtered = type === "success" ? prev.filter((p) => !p.text.startsWith("⠋")) : prev;
          return [...filtered, { text, type }];
        });
      }, delay);
    });

    setTimeout(() => {
      setRunning(false);
      setCompleted(true);
      toast("success", `Installed components/ui/${componentId}.tsx successfully!`);
    }, 3100);
  }

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(getCommand());
      setCopied(true);
      toast("success", "CLI command copied to clipboard!");
      setTimeout(() => setCopied(false), 1400);
    } catch {
      toast("error", "Failed to copy command");
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-ink-800 bg-[#0c0d12] text-white shadow-2xl z-10 flex flex-col font-mono">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-[#161822] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block cursor-pointer hover:opacity-80" onClick={onClose} />
            <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 text-xs font-sans font-medium text-white/50">21st dev cli — {componentId}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-white/40 hover:text-white hover:bg-white/10 transition"
          >
            <Icon icon={X} size={16} />
          </button>
        </div>

        {/* Toolbar & Package Managers */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-[#12131c] px-4 py-2 text-xs">
          <div className="flex items-center gap-1 font-sans">
            {(["npx", "pnpm", "bun", "yarn"] as const).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPkg(p)}
                className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                  pkg === p ? "bg-white/15 text-white" : "text-white/40 hover:text-white hover:bg-white/5"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 font-sans">
            <button
              type="button"
              onClick={runSimulation}
              disabled={running}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold transition ${
                running
                  ? "bg-white/10 text-white/50 cursor-not-allowed"
                  : "bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm shadow-emerald-500/20 active:scale-95"
              }`}
            >
              <Icon icon={running ? RotateCcw : Play} size={13} className={running ? "animate-spin" : ""} />
              <span>{running ? "Simulating..." : completed ? "Run Again" : "Run Simulator"}</span>
            </button>

            <button
              type="button"
              onClick={copyCommand}
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white hover:bg-white/20 transition active:scale-95"
            >
              <Icon icon={copied ? Check : Copy} size={13} />
              <span>{copied ? "Copied" : "Copy Command"}</span>
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-5 text-xs min-h-[260px] max-h-[360px] overflow-y-auto space-y-2 select-text scrollbar-thin">
          <div className="text-white/40 text-[11px] mb-3">
            # Add component directly to your React / Next.js workspace
          </div>

          {/* Active Command Line */}
          <div className="flex items-center gap-2 text-white">
            <span className="text-emerald-400 font-bold">$</span>
            <span className="text-sky-300 font-medium">{getCommand()}</span>
            {!running && !completed && <span className="h-4 w-2 bg-emerald-400 animate-pulse" />}
          </div>

          {/* Simulation Output Logs */}
          <div className="pt-2 space-y-1.5 font-mono text-[11px]">
            {logs.map((log, i) => (
              <div
                key={i}
                className={`animate-fade-in ${
                  log.type === "success"
                    ? log.text.startsWith("✨")
                      ? "text-emerald-300 font-bold mt-2"
                      : "text-emerald-400"
                    : "text-amber-300"
                }`}
              >
                {log.text}
              </div>
            ))}
          </div>

          {!running && logs.length === 0 && (
            <div className="pt-4 text-white/30 text-[11px] leading-relaxed">
              Click <span className="text-emerald-400 font-semibold">"Run Simulator"</span> above to see how 21st CLI detects your framework, installs dependencies, and creates the component in your project.
            </div>
          )}
        </div>

        {/* Terminal Footer */}
        <div className="border-t border-white/10 bg-[#12131c] px-4 py-2.5 flex items-center justify-between text-[11px] font-sans text-white/50">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            <span>Registry: 21st.dev/r/{componentId}</span>
          </div>

          <div className="text-white/40">
            Press <kbd className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white/70">ESC</kbd> to exit
          </div>
        </div>
      </div>
    </div>
  );
}
