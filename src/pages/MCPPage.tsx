/**
 * MCP Server Page — Installation instructions for IDE integration.
 * Modeled after 21st.dev/mcp with IDE-specific installation steps.
 */

import { useState } from "react";
import {
  Search,
  Sparkles,
  Image,
  Copy,
  Check,
  Zap,
  Terminal,
  Key,
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { MetaHead } from "../components/ui/MetaHead";

type IDE = "cursor" | "windsurf" | "vscode";

const IDE_CONFIGS: Record<IDE, { name: string; desc: string; config: string }> = {
  cursor: {
    name: "Cursor",
    desc: "AI-first code editor",
    config: `{
  "mcpServers": {
    "21st-clone": {
      "command": "npx",
      "args": ["-y", "@21st-clone/mcp@latest"],
      "env": {
        "API_KEY": "<your-api-key>"
      }
    }
  }
}`,
  },
  windsurf: {
    name: "Windsurf",
    desc: "Agentic IDE",
    config: `{
  "mcpServers": {
    "21st-clone": {
      "command": "npx",
      "args": ["-y", "@21st-clone/mcp@latest"],
      "env": {
        "API_KEY": "<your-api-key>"
      }
    }
  }
}`,
  },
  vscode: {
    name: "VS Code + Cline",
    desc: "Open source AI agent",
    config: `{
  "cline.mcpServers": {
    "21st-clone": {
      "command": "npx",
      "args": ["-y", "@21st-clone/mcp@latest"],
      "env": {
        "API_KEY": "<your-api-key>"
      }
    }
  }
}`,
  },
};

const TOOLS = [
  {
    icon: Search,
    name: "Inspiration Search",
    desc: "Semantic search across thousands of components. Your agent automatically finds relevant UI examples and patterns before writing code — no manual browsing needed.",
    gradient: "from-violet-500 to-blue-500",
  },
  {
    icon: Image,
    name: "SVG Icon Search",
    desc: "Search across thousands of brand SVG icons powered by svgl. Your agent finds and inserts the right logo or icon directly into your code.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Sparkles,
    name: "Magic Generate",
    desc: "Generate 5 polished UI variants of any component. A browser page opens with the options — pick the one you like and the code is sent back to your agent automatically.",
    gradient: "from-fuchsia-500 to-rose-500",
  },
];

export function MCPPage() {
  const [activeIDE, setActiveIDE] = useState<IDE>("cursor");
  const [copied, setCopied] = useState(false);

  async function copyConfig() {
    try {
      await navigator.clipboard.writeText(IDE_CONFIGS[activeIDE].config);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* ignore */ }
  }

  return (
    <>
      <MetaHead
        title="MCP Server — IDE Integration"
        description="Install our MCP server in Cursor, Windsurf, or VS Code for semantic component search, SVG icons, and magic generation right in your editor."
      />
      <div className="page-enter mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20">
            <Icon icon={Zap} size={28} className="text-white" />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            MCP Server
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-500 dark:text-ink-400 sm:text-base">
            Install our MCP server in your favorite IDE and get semantic component search,
            SVG icon lookup, and magic generation right where you code.
          </p>
        </div>

        {/* Tools */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="rounded-xl border border-ink-200 bg-white p-6 transition hover:shadow-lg dark:border-ink-800 dark:bg-ink-950"
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${tool.gradient} shadow-sm`}>
                <Icon icon={tool.icon} size={20} className="text-white" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{tool.name}</h3>
              <p className="mt-2 text-xs text-ink-500 dark:text-ink-400 leading-relaxed">
                {tool.desc}
              </p>
            </div>
          ))}
        </div>

        {/* API Key */}
        <div className="mt-12">
          <h2 className="text-lg font-bold tracking-tight">
            <span className="flex items-center gap-2">
              <Icon icon={Key} size={20} className="text-amber-500" />
              API Key
            </span>
          </h2>
          <div className="mt-4 rounded-xl border border-ink-200 bg-surface-2 p-4 dark:border-ink-800">
            <div className="flex items-center gap-3">
              <input
                type="text"
                readOnly
                value="sk-21c-xxxxxxxxxxxxxxxxxxxx"
                className="h-10 flex-1 rounded-lg border border-ink-200 bg-white px-3 font-mono text-sm dark:border-ink-700 dark:bg-ink-900"
              />
              <button className="rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900">
                Generate Key
              </button>
            </div>
            <p className="mt-2 text-xs text-ink-400">
              Sign in to generate your API key. Free tier includes 100 requests/month.
            </p>
          </div>
        </div>

        {/* Install */}
        <div className="mt-12">
          <h2 className="text-lg font-bold tracking-tight">
            <span className="flex items-center gap-2">
              <Icon icon={Terminal} size={20} className="text-violet-500" />
              Install
            </span>
          </h2>
          <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
            Select your IDE and follow the instructions below.
          </p>

          {/* IDE tabs */}
          <div className="mt-6 flex gap-3">
            {(Object.keys(IDE_CONFIGS) as IDE[]).map((ide) => (
              <button
                key={ide}
                onClick={() => setActiveIDE(ide)}
                className={[
                  "rounded-lg border px-4 py-2.5 text-sm font-medium transition",
                  activeIDE === ide
                    ? "border-violet-500 bg-violet-50 text-violet-700 dark:border-violet-500 dark:bg-violet-950/40 dark:text-violet-300"
                    : "border-ink-200 text-ink-600 hover:bg-ink-50 dark:border-ink-800 dark:text-ink-400 dark:hover:bg-ink-900",
                ].join(" ")}
              >
                <span className="font-semibold">{IDE_CONFIGS[ide].name}</span>
                <span className="ml-1.5 text-xs opacity-60">{IDE_CONFIGS[ide].desc}</span>
              </button>
            ))}
          </div>

          {/* Config block */}
          <div className="relative mt-4 overflow-hidden rounded-xl border border-ink-200 bg-ink-950 dark:border-ink-800">
            <div className="flex items-center justify-between border-b border-ink-800 px-4 py-2">
              <span className="text-xs font-medium text-ink-400">settings.json</span>
              <button
                onClick={copyConfig}
                className="flex items-center gap-1 rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/80 transition hover:bg-white/20"
              >
                <Icon icon={copied ? Check : Copy} size={12} />
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-emerald-400 font-mono">
              {IDE_CONFIGS[activeIDE].config}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
