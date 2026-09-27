/**
 * Usage / Props documentation panel for the Component Detail page.
 *
 * Shows:
 *   1. Installation snippet
 *   2. Import example
 *   3. Props table (auto-parsed from the component code when available)
 *   4. Prompt used to generate the component
 */

import type { ComponentItem } from "../data/components";
import { Copy, Check } from "lucide-react";
import { Icon } from "./ui/Icon";
import { useState } from "react";

interface Props {
  item: ComponentItem;
}

export function UsagePanel({ item }: Props) {
  return (
    <div className="space-y-8">
      {/* CLI Installation */}
      <Section title="CLI Installation (Recommended)">
        <CopyBlock text={`npx 21st dev add ${item.id}`} />
      </Section>

      {/* Peer Dependencies */}
      <Section title="Peer Dependencies">
        <CopyBlock text="npm install framer-motion lucide-react clsx tailwind-merge" />
      </Section>

      {/* Import */}
      <Section title="Import">
        <CopyBlock
          text={`import { ${extractExportName(item.code)} } from "@/components/ui/${item.id}";`}
        />
      </Section>

      {/* Basic Usage */}
      <Section title="Basic Usage">
        <pre className="overflow-x-auto rounded-xl border border-ink-200 bg-surface-1 p-4 font-mono text-sm text-ink-800 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-200 shadow-sm">
          <code>{item.code}</code>
        </pre>
      </Section>

      {/* Props */}
      <Section title="Props" scrollable>
        <PropsTable code={item.code} />
      </Section>

      {/* Prompt */}
      <Section title="AI Prompt">
        <div className="rounded-xl border border-ink-200 bg-surface-1 p-4 dark:border-ink-800 dark:bg-ink-900 shadow-sm">
          <p className="text-sm leading-relaxed text-ink-700 dark:text-ink-300">
            "{item.prompt}"
          </p>
        </div>
      </Section>
    </div>
  );
}

/* ---------- subcomponents ---------- */

function Section({
  title,
  children,
  scrollable
}: {
  title: string;
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <div className={scrollable ? "max-h-[600px] overflow-y-auto scrollbar-thin overflow-x-hidden" : ""}>
      <h3 className="mb-3 text-sm font-semibold text-ink-900 dark:text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}

function CopyBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      /* ignore */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <div className="group relative overflow-hidden rounded-xl border border-ink-200 bg-surface-1 dark:border-ink-800 dark:bg-ink-900 shadow-sm">
      <pre className="px-4 py-3 pr-20 font-mono text-sm text-ink-800 dark:text-ink-200">
        <code>{text}</code>
      </pre>
      <button
        type="button"
        onClick={copy}
        className={[
          "absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
          copied
            ? "border border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400"
            : "border border-ink-200 bg-white text-ink-600 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300",
        ].join(" ")}
      >
        {copied ? (
          <>
            <Icon icon={Check} size={12} /> Copied
          </>
        ) : (
          <>
            <Icon icon={Copy} size={12} /> Copy
          </>
        )}
      </button>
    </div>
  );
}

function PropsTable({ code }: { code: string }) {
  const props = parseProps(code);

  if (props.length === 0) {
    return (
      <p className="text-sm text-ink-500 dark:text-ink-400">
        No explicit props detected. Check the source code for the component API.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-ink-200 dark:border-ink-800 shadow-sm">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead>
          <tr className="border-b border-ink-200 bg-surface-1 dark:border-ink-800 dark:bg-ink-900">
            <th className="px-4 py-2.5 font-semibold text-ink-700 dark:text-ink-300">
              Prop
            </th>
            <th className="px-4 py-2.5 font-semibold text-ink-700 dark:text-ink-300">
              Type
            </th>
            <th className="px-4 py-2.5 font-semibold text-ink-700 dark:text-ink-300">
              Required
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink-100 dark:divide-ink-800 bg-surface-1 dark:bg-ink-950">
          {props.map((p) => (
            <tr
              key={p.name}
              className="transition hover:bg-ink-50 dark:hover:bg-ink-900/60"
            >
              <td className="px-4 py-2.5 font-mono text-xs text-rose-600 dark:text-rose-400">
                {p.name}
              </td>
              <td className="px-4 py-2.5 font-mono text-xs text-sky-600 dark:text-sky-400 max-w-xs truncate" title={p.type}>
                {p.type}
              </td>
              <td className="px-4 py-2.5">
                {p.required ? (
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-medium text-amber-800 dark:bg-amber-950/40 dark:text-amber-400">
                    required
                  </span>
                ) : (
                  <span className="text-xs text-ink-400">optional</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- simple prop parser ---------- */

interface ParsedProp {
  name: string;
  type: string;
  required: boolean;
}

function parseProps(code: string): ParsedProp[] {
  const results: ParsedProp[] = [];

  // Match destructured props: { foo, bar, baz }
  const destructured = code.match(
    /(?:function|const)\s+\w+\s*\(\s*\{([^}]+)\}/,
  );
  if (destructured) {
    const inner = destructured[1];
    const parts = inner.split(",").map((s) => s.trim()).filter(Boolean);
    for (const part of parts) {
      const spread = part.match(/^\.\.\.(\w+)/);
      if (spread) {
        results.push({ name: `...${spread[1]}`, type: "object", required: false });
        continue;
      }
      const withDefault = part.match(/^(\w+)\s*=\s*/);
      if (withDefault) {
        results.push({ name: withDefault[1], type: "any", required: false });
        continue;
      }
      const name = part.replace(/\?$/, "");
      if(name) {
         results.push({ name, type: "any", required: !part.endsWith("?") });
      }
    }
  }

  return results;
}

function extractExportName(code: string): string {
  const match = code.match(
    /export\s+(?:default\s+)?(?:function|const)\s+(\w+)/,
  );
  return match ? match[1] : "Component";
}
