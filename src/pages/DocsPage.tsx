/**
 * Documentation Page — Landing page for docs, API reference, and guides.
 */

import {
  BookOpen,
  Code2,
  Terminal,
  Zap,
  ArrowRight,
  Bot,
  Sparkles,
  FileCode,
  Globe,
  Key,
  Shield,
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useRoute } from "../lib/router";
import { MetaHead } from "../components/ui/MetaHead";

const SECTIONS = [
  {
    title: "Getting Started",
    icon: Zap,
    gradient: "from-emerald-500 to-teal-500",
    links: [
      { label: "Introduction", href: "#/docs" },
      { label: "Quick Start", href: "#/docs/quickstart" },
      { label: "Installation", href: "#/docs/install" },
    ],
  },
  {
    title: "Core Concepts",
    icon: BookOpen,
    gradient: "from-violet-500 to-fuchsia-500",
    links: [
      { label: "Agents", href: "#/docs/agents" },
      { label: "Models", href: "#/docs/models" },
      { label: "System Prompts", href: "#/docs/prompts" },
      { label: "Tools & MCPs", href: "#/docs/tools" },
    ],
  },
  {
    title: "Build",
    icon: Code2,
    gradient: "from-sky-500 to-blue-500",
    links: [
      { label: "Skills System", href: "#/docs/skills" },
      { label: "Sandbox", href: "#/docs/sandbox" },
      { label: "Themes", href: "#/docs/themes" },
      { label: "Credentials", href: "#/docs/credentials" },
    ],
  },
  {
    title: "Deploy",
    icon: Terminal,
    gradient: "from-amber-500 to-orange-500",
    links: [
      { label: "Deploy Guide", href: "#/docs/deploy" },
      { label: "Frontend Integration", href: "#/docs/frontend" },
      { label: "Backend Integration", href: "#/docs/backend" },
      { label: "CLI Reference", href: "#/docs/cli" },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    gradient: "from-rose-500 to-red-500",
    links: [
      { label: "Overview", href: "#/docs/security" },
      { label: "API Keys & Env Vars", href: "#/docs/api-keys" },
      { label: "Rate Limiting", href: "#/docs/rate-limiting" },
    ],
  },
  {
    title: "API Reference",
    icon: FileCode,
    gradient: "from-indigo-500 to-purple-500",
    links: [
      { label: "Server SDK", href: "#/docs/api/server" },
      { label: "Client SDK", href: "#/docs/api/client" },
      { label: "REST API", href: "#/docs/api/rest" },
    ],
  },
];

const QUICK_LINKS = [
  { icon: Bot, label: "Agent Registry", desc: "Browse community agents", href: "#/agents" },
  { icon: Sparkles, label: "Magic Chat", desc: "Generate UI with AI", href: "#/magic" },
  { icon: Globe, label: "MCP Server", desc: "IDE integration", href: "#/mcp" },
  { icon: Key, label: "API Keys", desc: "Manage credentials", href: "#/dashboard" },
];

export function DocsPage() {
  const { navigate } = useRoute();

  return (
    <>
      <MetaHead
        title="Documentation"
        description="Learn how to build, deploy, and manage AI agents and UI components with our comprehensive documentation."
      />
      <div className="page-enter mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Documentation
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-ink-500 dark:text-ink-400 sm:text-base">
            Everything you need to build and ship AI agents and UI components.
          </p>
        </div>

        {/* Quick links */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {QUICK_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => navigate(link.href)}
              className="group flex flex-col items-center gap-2 rounded-xl border border-ink-200 bg-white p-4 text-center transition hover:border-violet-300 hover:shadow-md dark:border-ink-800 dark:bg-ink-950 dark:hover:border-violet-700"
            >
              <Icon icon={link.icon} size={24} className="text-ink-400 transition group-hover:text-violet-500" />
              <span className="text-sm font-semibold">{link.label}</span>
              <span className="text-[11px] text-ink-400">{link.desc}</span>
            </button>
          ))}
        </div>

        {/* Documentation sections */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-950"
            >
              <div className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${section.gradient}`}>
                <Icon icon={section.icon} size={18} className="text-white" />
              </div>
              <h3 className="mt-3 text-sm font-bold">{section.title}</h3>
              <ul className="mt-3 space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => navigate(link.href)}
                      className="group flex w-full items-center justify-between text-left text-sm text-ink-600 transition hover:text-violet-600 dark:text-ink-400 dark:hover:text-violet-400 border-none bg-transparent"
                    >
                      {link.label}
                      <Icon icon={ArrowRight} size={14} className="opacity-0 transition group-hover:opacity-100" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
