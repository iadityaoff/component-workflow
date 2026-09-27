/**
 * MCP Server Page — Installation instructions for IDE integration.
 */
import React, { useState } from "react";
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
    "uiforge": {
      "command": "npx",
      "args": ["-y", "@uiforge/mcp@latest"],
      "env": {
        "UIFORGE_API_KEY": "<your-api-key>"
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
    "uiforge": {
      "command": "npx",
      "args": ["-y", "@uiforge/mcp@latest"],
      "env": {
        "UIFORGE_API_KEY": "<your-api-key>"
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
    "uiforge": {
      "command": "npx",
      "args": ["-y", "@uiforge/mcp@latest"],
      "env": {
        "UIFORGE_API_KEY": "<your-api-key>"
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
    gradient: "from-[var(--uf-accent)] to-indigo-500",
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
    <div className="flex h-full min-h-[calc(100vh-56px)] flex-col bg-[var(--uf-bg)] page-enter">
      <MetaHead
        title="UIForge MCP Server"
        description="Give your AI agents access to the UIForge registry directly in your IDE."
      />

      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative overflow-hidden border-b border-[var(--uf-border)] bg-[var(--uf-panel)] py-20 px-8 text-center">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--uf-accent)]/5 to-transparent pointer-events-none" />

          <div className="mx-auto max-w-3xl relative z-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--uf-accent)] to-indigo-600 shadow-xl shadow-[var(--uf-accent)]/20 border border-white/10">
              <Icon icon={Terminal} size={28} className="text-white" />
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[var(--uf-text)] sm:text-5xl">
              UIForge MCP Server
            </h1>
            <p className="mt-4 text-lg text-[var(--uf-text-secondary)]">
              Give your AI agents (Cursor, Windsurf, Cline) direct access to the UIForge registry. Let them find components, icons, and inspiration automatically.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#install"
                className="rounded-lg bg-[var(--uf-accent)] px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-[var(--uf-accent-hover)] transition"
              >
                Install Server
              </a>
              <a
                href="https://github.com/uiforge/mcp"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-6 py-3 text-sm font-bold text-[var(--uf-text)] hover:bg-[var(--uf-panel)] transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mx-auto max-w-5xl px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-[var(--uf-text)]">Agentic Capabilities</h2>
            <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">
              What your AI agents can do once connected to UIForge.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {TOOLS.map((t, i) => (
              <div key={i} className="group relative rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-6 card-hover">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${t.gradient} shadow-sm border border-white/10`}>
                  <Icon icon={t.icon} size={20} className="text-white" />
                </div>
                <h3 className="mb-2 font-bold text-[var(--uf-text)]">{t.name}</h3>
                <p className="text-sm leading-relaxed text-[var(--uf-text-muted)]">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Section */}
        <div id="install" className="border-t border-[var(--uf-border)] bg-[var(--uf-panel)] py-20">
          <div className="mx-auto max-w-3xl px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-[var(--uf-text)]">Quick Installation</h2>
              <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">
                Add the server configuration to your IDE's MCP settings file.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] shadow-sm">
              {/* Tabs */}
              <div className="flex border-b border-[var(--uf-border)] bg-[var(--uf-panel)] overflow-x-auto scrollbar-none">
                {(Object.entries(IDE_CONFIGS) as [IDE, typeof IDE_CONFIGS[IDE]][]).map(
                  ([key, conf]) => (
                    <button
                      key={key}
                      onClick={() => setActiveIDE(key)}
                      className={`flex flex-col items-start gap-1 whitespace-nowrap px-6 py-4 text-sm transition ${
                        activeIDE === key
                          ? "border-b-2 border-[var(--uf-accent)] bg-white/[0.03] text-[var(--uf-text)]"
                          : "border-b-2 border-transparent text-[var(--uf-text-muted)] hover:bg-white/[0.02] hover:text-[var(--uf-text)]"
                      }`}
                    >
                      <span className="font-bold">{conf.name}</span>
                      <span className="text-xs font-normal opacity-80">
                        {conf.desc}
                      </span>
                    </button>
                  )
                )}
              </div>

              {/* Code block */}
              <div className="relative group">
                <div className="absolute right-4 top-4 z-10">
                  <button
                    onClick={copyConfig}
                    className="flex items-center gap-1.5 rounded-md bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-white/20 transition backdrop-blur-md"
                  >
                    <Icon icon={copied ? Check : Copy} size={12} />
                    {copied ? "Copied!" : "Copy code"}
                  </button>
                </div>
                <pre className="overflow-x-auto p-6 text-sm leading-relaxed text-zinc-300 font-mono">
                  <code>{IDE_CONFIGS[activeIDE].config}</code>
                </pre>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-amber-500/20 bg-amber-500/10 p-6 flex items-start gap-4">
              <Icon icon={Key} size={20} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[var(--uf-text)]">API Key Required</h4>
                <p className="mt-1 text-sm text-[var(--uf-text-secondary)]">
                  You need an API key to access the MCP server. Go to your <a href="#/studio" className="text-[var(--uf-accent)] hover:underline font-medium">Settings</a> page to generate one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
