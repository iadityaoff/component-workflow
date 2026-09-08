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
}

export function CodePanel({ code, lang = "tsx" }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* fallback */
      const ta = document.createElement("textarea");
      ta.value = code;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }
  }

  const lines = code.split("\n");

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
    <div className="relative overflow-hidden rounded-xl border border-ink-800 bg-ink-950 shadow-sm">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-ink-800 px-4 py-2 bg-ink-900/50">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="rounded bg-ink-800 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-400">
          {lang}
        </span>
      </div>

      {/* Code area */}
      <div className="relative max-h-[500px] overflow-auto scrollbar-thin">
        <pre className="px-4 py-4 text-[13px] leading-relaxed">
          <code className="block font-mono">{renderedLines}</code>
        </pre>
      </div>

      {/* Copy button */}
      <button
        type="button"
        onClick={copy}
        className={[
          "absolute right-3 top-12 inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition active:scale-95 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
          copied
            ? "border border-emerald-700 bg-emerald-950/60 text-emerald-300"
            : "border border-ink-700 bg-ink-900/80 text-ink-300 hover:bg-ink-800 hover:text-white backdrop-blur-sm",
        ].join(" ")}
      >
        {copied ? (
          <>
            <Icon icon={Check} size={14} /> Copied!
          </>
        ) : (
          <>
            <Icon icon={Copy} size={14} /> Copy
          </>
        )}
      </button>
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
