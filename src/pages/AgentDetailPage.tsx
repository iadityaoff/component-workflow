/**
 * Agent Detail Page — View full agent configuration with copy/export.
 * Shows system prompt, MCP servers, model, tags, and export formats.
 */

import { useState } from "react";
import {
  ArrowLeft,
  Bot,
  Copy,
  Check,
  Bookmark,
  BookmarkCheck,
  Terminal,
  FileCode,
  FileJson,
  Code2,
  Globe,
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useRoute } from "../lib/router";
import { AGENT_BY_ID } from "../data/agents";
import { MetaHead } from "../components/ui/MetaHead";

type ExportFormat = "yaml" | "json" | "cli" | "typescript" | "python";

export function AgentDetailPage({ agentId }: { agentId: string }) {
  const { navigate } = useRoute();
  const agent = AGENT_BY_ID[agentId];
  const [copied, setCopied] = useState<ExportFormat | "prompt" | null>(null);
  const [bookmarked, setBookmarked] = useState(false);
  const [activeFormat, setActiveFormat] = useState<ExportFormat>("yaml");

  if (!agent) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <MetaHead title="404 - Agent Not Found" />
        <p className="text-5xl font-bold text-ink-200 dark:text-ink-800">404</p>
        <p className="mt-3 text-lg font-medium text-ink-600 dark:text-ink-400">
          Agent not found
        </p>
        <button
          onClick={() => navigate("#/agents")}
          className="mt-6 inline-flex items-center gap-1.5 rounded-lg bg-ink-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900"
        >
          <Icon icon={ArrowLeft} size={14} />
          Back to registry
        </button>
      </div>
    );
  }

  function generateExport(format: ExportFormat): string {
    switch (format) {
      case "yaml":
        return `name: ${agent.name.toLowerCase().replace(/\s+/g, "-")}
model: ${agent.model}
tools:
${agent.mcpServers.map((s) => `  - type: mcp_toolset
    server_label: ${s.label.toLowerCase()}
    server_url: ${s.url}`).join("\n")}
system_prompt: |
  ${agent.systemPrompt.split("\n").join("\n  ")}`;

      case "json":
        return JSON.stringify(
          {
            name: agent.name.toLowerCase().replace(/\s+/g, "-"),
            model: agent.model,
            tools: agent.mcpServers.map((s) => ({
              type: "mcp_toolset",
              server_label: s.label.toLowerCase(),
              server_url: s.url,
            })),
            system_prompt: agent.systemPrompt,
          },
          null,
          2
        );

      case "cli":
        return `ant agents create \\
  --name "${agent.name.toLowerCase().replace(/\s+/g, "-")}" \\
  --model ${agent.model} \\
  --system-prompt "${agent.systemPrompt.split("\n")[0]}"`;

      case "typescript":
        return `import { Agent } from "@21st-sdk/agents";

const ${agent.name.replace(/\s+/g, "")} = new Agent({
  name: "${agent.name.toLowerCase().replace(/\s+/g, "-")}",
  model: "${agent.model}",
  systemPrompt: \`${agent.systemPrompt}\`,
  tools: [${agent.mcpServers.map((s) => `\n    { type: "mcp_toolset", serverLabel: "${s.label.toLowerCase()}", serverUrl: "${s.url}" }`).join(",")}
  ],
});`;

      case "python":
        return `from agents_sdk import Agent

${agent.name.toLowerCase().replace(/\s+/g, "_")} = Agent(
    name="${agent.name.toLowerCase().replace(/\s+/g, "-")}",
    model="${agent.model}",
    system_prompt="""${agent.systemPrompt}""",
    tools=[${agent.mcpServers.map((s) => `\n        {"type": "mcp_toolset", "server_label": "${s.label.toLowerCase()}", "server_url": "${s.url}"}`).join(",")}
    ],
)`;

      default:
        return "";
    }
  }

  async function copyExport(format: ExportFormat | "prompt") {
    const text = format === "prompt" ? agent.systemPrompt : generateExport(format as ExportFormat);
    try {
      await navigator.clipboard.writeText(text);
      setCopied(format);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      /* ignore */
    }
  }

  const FORMAT_TABS: { key: ExportFormat; label: string; icon: any }[] = [
    { key: "yaml", label: "YAML", icon: FileCode },
    { key: "json", label: "JSON", icon: FileJson },
    { key: "cli", label: "CLI", icon: Terminal },
    { key: "typescript", label: "TypeScript", icon: Code2 },
    { key: "python", label: "Python", icon: Globe },
  ];

  return (
    <>
      <MetaHead title={agent.name} description={agent.description} />
      <div className="page-enter mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Back */}
        <button
          onClick={() => navigate("#/agents")}
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-ink-500 transition hover:text-ink-900 dark:hover:text-white"
        >
          <Icon icon={ArrowLeft} size={14} />
          Back to registry
        </button>

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${agent.author.avatarColor} shadow-lg`}>
              <Icon icon={Bot} size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{agent.name}</h1>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{agent.description}</p>
              <div className="mt-3 flex items-center gap-3 text-xs text-ink-500">
                <span className="flex items-center gap-1.5">
                  <span className={`grid h-5 w-5 place-items-center rounded-full text-[9px] font-bold text-white ${agent.author.avatarColor}`}>
                    {agent.author.avatarText}
                  </span>
                  @{agent.author.handle}
                </span>
                <span className="rounded-full bg-violet-50 px-2 py-0.5 font-medium text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
                  {agent.model}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={[
              "flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition active:scale-95",
              bookmarked
                ? "border-violet-300 bg-violet-50 text-violet-600 dark:border-violet-800 dark:bg-violet-950/40 dark:text-violet-400"
                : "border-ink-200 text-ink-700 hover:bg-ink-50 dark:border-ink-800 dark:text-ink-200 dark:hover:bg-ink-900",
            ].join(" ")}
          >
            <Icon icon={bookmarked ? BookmarkCheck : Bookmark} size={16} />
            {bookmarked ? "Saved" : "Save"}
          </button>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {agent.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-ink-200 px-2.5 py-0.5 text-xs text-ink-600 dark:border-ink-800 dark:text-ink-400"
            >
              {t}
            </span>
          ))}
        </div>

        {/* MCP Servers */}
        {agent.mcpServers.length > 0 && (
          <div className="mt-6">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-400">
              Connected MCP Servers
            </h3>
            <div className="flex flex-wrap gap-3">
              {agent.mcpServers.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 rounded-lg border border-ink-200 bg-surface-2 px-3 py-2 dark:border-ink-800"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-md bg-ink-100 dark:bg-ink-800">
                    <Icon icon={Globe} size={16} className="text-ink-600 dark:text-ink-300" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{s.label}</p>
                    <p className="text-[10px] text-ink-400 font-mono">{s.url}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* System Prompt */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-400">
              System Prompt
            </h3>
            <button
              onClick={() => copyExport("prompt")}
              className="flex items-center gap-1 rounded-md border border-ink-200 px-2 py-1 text-[11px] font-medium text-ink-700 transition hover:bg-ink-50 dark:border-ink-700 dark:text-ink-300"
            >
              <Icon icon={copied === "prompt" ? Check : Copy} size={12} />
              {copied === "prompt" ? "Copied" : "Copy prompt"}
            </button>
          </div>
          <pre className="mt-3 overflow-x-auto rounded-xl border border-ink-200 bg-ink-50 p-4 text-sm leading-relaxed text-ink-700 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-300 font-mono whitespace-pre-wrap">
            {agent.systemPrompt}
          </pre>
        </div>

        {/* Export Config */}
        <div className="mt-8">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-ink-400">
            Export Config
          </h3>
          {/* Format tabs */}
          <div className="flex gap-0 border-b border-ink-200 dark:border-ink-800">
            {FORMAT_TABS.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setActiveFormat(key)}
                className={[
                  "relative px-4 py-2.5 text-xs font-medium transition",
                  activeFormat === key
                    ? "text-ink-900 dark:text-white"
                    : "text-ink-500 hover:text-ink-700 dark:text-ink-400 dark:hover:text-ink-200",
                ].join(" ")}
              >
                <span className="flex items-center gap-1.5">
                  <Icon icon={icon} size={13} />
                  {label}
                </span>
                {activeFormat === key && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-violet-500" />
                )}
              </button>
            ))}
          </div>
          {/* Config block */}
          <div className="relative mt-0 overflow-hidden rounded-b-xl border border-t-0 border-ink-200 bg-ink-950 dark:border-ink-800">
            <button
              onClick={() => copyExport(activeFormat)}
              className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80 transition hover:bg-white/20"
            >
              <Icon icon={copied === activeFormat ? Check : Copy} size={12} />
              {copied === activeFormat ? "Copied" : "Copy"}
            </button>
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-emerald-400 font-mono whitespace-pre-wrap">
              {generateExport(activeFormat)}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
