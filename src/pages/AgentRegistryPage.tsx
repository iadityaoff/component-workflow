/**
 * Agent Registry Page — Browse and discover AI agent configurations.
 * Modeled after 21st.dev's Agent Registry with category filtering,
 * search, and one-click copy.
 */

import React, { useState, useMemo } from "react";
import {
  Search,
  Copy,
  Check,
  Bookmark,
  Bot,
  Cpu,
  Code2,
  FileText,
  Globe,
  Headphones,
  BarChart3,
  Workflow,
  Network,
  Sparkles,
  Terminal,
  Filter,
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useRoute } from "../lib/router";
import {
  SEED_AGENTS,
  AGENT_CATEGORIES,
  type AgentConfig,
  type AgentCategory,
} from "../data/agents";
import { MetaHead } from "../components/ui/MetaHead";

const CATEGORY_ICONS: Record<AgentCategory, any> = {
  coding: Code2,
  "data-analysis": BarChart3,
  devops: Terminal,
  content: FileText,
  research: Globe,
  "customer-support": Headphones,
  workflow: Workflow,
  monitoring: Cpu,
  "multi-agent": Network,
};

export function AgentRegistryPage() {
  const { navigate } = useRoute();
  const [activeCategory, setActiveCategory] = useState<AgentCategory | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let results = SEED_AGENTS;
    if (activeCategory) {
      results = results.filter((a) => a.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.tags.some((t) => t.includes(q))
      );
    }
    return results;
  }, [activeCategory, searchQuery]);

  async function copyConfig(e: React.MouseEvent, agent: AgentConfig) {
    e.stopPropagation();
    const yaml = `name: ${agent.name.toLowerCase().replace(/\s+/g, "-")}
model: ${agent.model}
tools:
${agent.mcpServers.map((s) => `  - type: mcp_toolset\n    server_label: ${s.label.toLowerCase()}\n    server_url: ${s.url}`).join("\n")}
system_prompt: |
  ${agent.systemPrompt.split("\n").join("\n  ")}`;

    try {
      await navigator.clipboard.writeText(yaml);
      setCopiedId(agent.id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <>
      <MetaHead
        title="Agent Registry — Discover AI Agent Configs"
        description="Browse and discover production-ready AI agent configurations. Copy agent configs into your workflow with one click."
      />
      <div className="page-enter mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20">
            <Icon icon={Bot} size={28} className="text-white" />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            <span className="gradient-text">Agent Registry</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-500 dark:text-ink-400 sm:text-base">
            Discover production-ready AI agent configurations. Browse by category,
            search by keyword, and copy any agent config into your workflow with one click.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={() => navigate("#/agents/publish")}
              className="inline-flex items-center gap-2 rounded-lg bg-ink-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-ink-800 active:scale-[0.98] dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
            >
              <Icon icon={Sparkles} size={16} />
              Publish Agent
            </button>
          </div>
        </div>

        {/* Search + Filters */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Icon
              icon={Search}
              size={16}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink-400"
            />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search agents by name, tag, or keyword…"
              className="h-10 w-full rounded-lg border border-ink-200 bg-ink-50 pl-9 pr-4 text-sm placeholder:text-ink-400 focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-ink-800 dark:bg-ink-900 dark:placeholder:text-ink-500 dark:focus:border-violet-500 dark:focus:bg-ink-950"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-ink-500">
            <Icon icon={Filter} size={14} />
            <span>{filtered.length} agents</span>
          </div>
        </div>

        {/* Category chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={[
              "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition",
              !activeCategory
                ? "border-ink-900 bg-ink-900 text-white dark:border-white dark:bg-white dark:text-ink-900"
                : "border-ink-200 text-ink-600 hover:bg-ink-50 dark:border-ink-800 dark:text-ink-400 dark:hover:bg-ink-900",
            ].join(" ")}
          >
            All
          </button>
          {AGENT_CATEGORIES.map((cat) => {
            const CatIcon = CATEGORY_ICONS[cat.key];
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(activeCategory === cat.key ? null : cat.key)}
                className={[
                  "inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition",
                  activeCategory === cat.key
                    ? "border-violet-500 bg-violet-50 text-violet-700 dark:border-violet-500 dark:bg-violet-950/40 dark:text-violet-300"
                    : "border-ink-200 text-ink-600 hover:bg-ink-50 dark:border-ink-800 dark:text-ink-400 dark:hover:bg-ink-900",
                ].join(" ")}
              >
                <Icon icon={CatIcon} size={13} />
                {cat.label}
                <span className="ml-0.5 opacity-60">{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* Agent Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((agent) => (
            <AgentCard
              key={agent.id}
              agent={agent}
              copied={copiedId === agent.id}
              onCopy={(e) => copyConfig(e, agent)}
              onClick={() => navigate(`#/agents/${agent.id}`)}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-ink-100 dark:bg-ink-900">
              <Icon icon={Bot} size={32} className="text-ink-300 dark:text-ink-600" />
            </div>
            <p className="mt-4 text-sm font-medium text-ink-600 dark:text-ink-400">
              No agents match your search
            </p>
            <p className="mt-1 text-xs text-ink-400">
              Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

function AgentCard({
  agent,
  copied,
  onCopy,
  onClick,
}: {
  agent: AgentConfig;
  copied: boolean;
  onCopy: (e: React.MouseEvent) => void;
  onClick: () => void;
}) {
  const CatIcon = CATEGORY_ICONS[agent.category];

  return (
    <article
      className="agent-card group flex flex-col rounded-xl border border-ink-200 bg-white p-5 cursor-pointer dark:border-ink-800 dark:bg-ink-950"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${agent.author.avatarColor} shadow-sm`}>
            <Icon icon={Bot} size={20} className="text-white" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-ink-900 group-hover:text-violet-600 dark:text-white dark:group-hover:text-violet-400 transition-colors">
              {agent.name}
            </h3>
            <p className="text-xs text-ink-500">
              {agent.model}
            </p>
          </div>
        </div>
        {agent.featured && (
          <span className="shrink-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-2 py-0.5 text-[10px] font-semibold text-white">
            Featured
          </span>
        )}
      </div>

      {/* Description */}
      <p className="mt-3 line-clamp-2 text-xs text-ink-600 dark:text-ink-400 leading-relaxed">
        {agent.description}
      </p>

      {/* MCP Servers */}
      {agent.mcpServers.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {agent.mcpServers.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-1 rounded-md border border-ink-100 bg-ink-50 px-2 py-0.5 text-[10px] font-medium text-ink-600 dark:border-ink-800 dark:bg-ink-900 dark:text-ink-400"
            >
              {s.label}
            </span>
          ))}
        </div>
      )}

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-1">
        <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-0.5 text-[10px] font-medium text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
          <Icon icon={CatIcon} size={10} />
          {AGENT_CATEGORIES.find((c) => c.key === agent.category)?.label}
        </span>
        {agent.tags.slice(0, 2).map((t) => (
          <span
            key={t}
            className="rounded-full border border-ink-100 px-2 py-0.5 text-[10px] text-ink-500 dark:border-ink-800 dark:text-ink-400"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-center justify-between border-t border-ink-100 pt-3 mt-4 dark:border-ink-800">
        <div className="flex items-center gap-2">
          <span className={`grid h-5 w-5 place-items-center rounded-full text-[9px] font-bold text-white ${agent.author.avatarColor}`}>
            {agent.author.avatarText}
          </span>
          <span className="text-[11px] text-ink-500">@{agent.author.handle}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-[11px] text-ink-400">
            <Icon icon={Bookmark} size={12} />
            {agent.bookmarks}
          </span>
          <button
            onClick={onCopy}
            className="flex items-center gap-1 rounded-md border border-ink-200 bg-white px-2 py-1 text-[11px] font-medium text-ink-700 transition hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-300 dark:hover:bg-ink-800"
          >
            <Icon icon={copied ? Check : Copy} size={12} />
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>
    </article>
  );
}
