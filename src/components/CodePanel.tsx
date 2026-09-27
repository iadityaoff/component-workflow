/**
 * Code panel with syntax-style highlighting, line numbers, and a copy button.
 *
 * Uses a simple token-based highlighter (no heavy deps like Prism/Shiki).
 * Tokens are colored via Tailwind classes to match the dark terminal aesthetic.
 *
 * Fixes:
 * B-08: CodePanel dangerouslySetInnerHTML safety (rewritten to React nodes).
 * B-10: Used Lucide icons through Icon wrapper.
 */

import { useMemo, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Icon } from "./ui/Icon";

interface Props {
  code: string;
  /** Language tag shown in the corner badge */
  lang?: string;
  language?: string;
  onCopy?: () => Promise<void> | void;
  copied?: boolean;
}

const TAILWIND_CONFIG_SNIPPET = `/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
};`;

export function CodePanel({ code, lang, language, onCopy, copied: externalCopied }: Props) {
  const currentLang = lang || language || "tsx";
  const [activeFile, setActiveFile] = useState<"component" | "tailwind">("component");
  const [internalCopied, setInternalCopied] = useState(false);
  const copied = externalCopied ?? internalCopied;
  const setCopied = setInternalCopied;
  const [copiedDeps, setCopiedDeps] = useState(false);

  const activeContent = activeFile === "component" ? code : TAILWIND_CONFIG_SNIPPET;

  async function copy(text: string, isDeps = false) {
    try {
      await navigator.clipboard.writeText(text);
      if (isDeps) {
        setCopiedDeps(true);
        setTimeout(() => setCopiedDeps(false), 1400);
      } else {
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }
    } catch {
      /* fallback */
    }
  }

  const lines = activeContent.split("\n");

  const renderedLines = useMemo(() => {
    return lines.map((line, i) => {
      const nodes = highlightLine(line);
      return (
        <div key={i} className="flex">
          <span className="mr-4 inline-block w-8 select-none text-right text-ink-600 tabular-nums">
            {i + 1}
          </span>
          <span className="flex-1 text-ink-200">
            {nodes.map((node, j) => (
              <span key={j}>{node}</span>
            ))}
          </span>
        </div>
      );
    });
  }, [lines]);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-ink-800 bg-[#0c0d12] text-white shadow-xl font-mono">
      {/* Top File Tabs Bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-[#141620]">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />

          {/* File switcher tabs */}
          <div className="ml-3 flex items-center gap-1 font-sans text-xs">
            <button
              type="button"
              onClick={() => setActiveFile("component")}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                activeFile === "component"
                  ? "bg-white/15 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              Component.tsx
            </button>
            <button
              type="button"
              onClick={() => setActiveFile("tailwind")}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition ${
                activeFile === "tailwind"
                  ? "bg-white/15 text-white"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`}
            >
              tailwind.config.ts
            </button>
          </div>
        </div>

        <button
          type="button"
          onClick={() => copy(activeContent)}
          className={[
            "inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-sans font-semibold transition active:scale-95 cursor-pointer outline-none",
            copied
              ? "bg-emerald-500 text-white"
              : "border border-white/15 bg-white/10 text-white hover:bg-white/20",
          ].join(" ")}
        >
          <Icon icon={copied ? Check : Copy} size={13} />
          <span>{copied ? "Copied!" : "Copy Code"}</span>
        </button>
      </div>

      {/* Code area */}
      <div className="relative max-h-[500px] overflow-auto scrollbar-thin">
        <pre className="px-4 py-4 text-[13px] leading-relaxed">
          <code className="block font-mono">{renderedLines}</code>
        </pre>
      </div>

      {/* Dependencies footer bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#12131c] px-4 py-2.5 text-xs font-sans text-white/60">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white/80">Peer Dependencies:</span>
          <code className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-mono text-emerald-400">
            framer-motion lucide-react clsx tailwind-merge
          </code>
        </div>
        <button
          type="button"
          onClick={() => copy("npm install framer-motion lucide-react clsx tailwind-merge", true)}
          className="inline-flex items-center gap-1 rounded-md border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white hover:bg-white/20 transition"
        >
          <Icon icon={copiedDeps ? Check : Copy} size={12} />
          <span>{copiedDeps ? "Copied command" : "Copy install command"}</span>
        </button>
      </div>
    </div>
  );
}

/* ---------- safe token highlighter ---------- */

function highlightLine(line: string): React.ReactNode[] {
  // Define categories with colors
  const patterns: { regex: RegExp; cls: string }[] = [
    // Comments
    { regex: /(\/\/.*)$/g, cls: "text-ink-600 italic" },
    // Strings (double, single, template)
    { regex: /("(?:[^"\\]|\\.)*")/g, cls: "text-emerald-300" },
    { regex: /('(?:[^'\\]|\\.)*')/g, cls: "text-emerald-300" },
    { regex: /(`[^`]*`)/g, cls: "text-emerald-300" },
    // Keywords
    {
      regex:
        /\b(import|export|from|const|let|var|function|return|default|if|else|switch|case|break|new|typeof|void|null|undefined|true|false|async|await)\b/g,
      cls: "text-rose-400",
    },
    // JSX Tags (we match on unescaped now since we return nodes)
    { regex: /(<\/?)([A-Z][A-Za-z0-9]*)/g, cls: "text-sky-400" },
    // JSX Attributes
    { regex: /\b([a-z][a-z0-9-]*)(?==)/g, cls: "text-amber-300" },
    // Numbers
    { regex: /(?<![\w-])(\d+\.?\d*)(?![\w-])/g, cls: "text-amber-400" },
    // Brackets/Braces
    { regex: /([{}()[\]])/g, cls: "text-ink-500" },
  ];

  const tokenMap = new Map<string, React.ReactNode>();
  let result = line;

  patterns.forEach(({ regex, cls }) => {
    result = result.replace(regex, (match) => {
      const id = tokenMap.size;
      const key = `\uF000${id}\uF000`;
      tokenMap.set(
        key,
        <span className={cls}>{match}</span>
      );
      return key;
    });
  });

  const fragments = result.split(/(\uF000\d+\uF000)/);
  return fragments.map((fragment) => {
    if (tokenMap.has(fragment)) {
      return tokenMap.get(fragment);
    }
    return fragment;
  });
}
