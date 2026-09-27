/**
 * Creator Studio Page
 * Meets Section 13 of Master Prompt
 */
import React, { useState } from "react";
import { 
  LayoutDashboard, FileEdit, CheckCircle, BarChart2, 
  DollarSign, Settings, Plus, TrendingUp, Package, 
  MoreVertical, Eye, Download, Bookmark, Rocket, 
  ChevronDown, ExternalLink, Key, Terminal, Code2, 
  Share2, Heart, Shield, Sparkles, Layers, Sliders, ArrowUpRight
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useRoute } from "../lib/router";
import { useToast } from "../components/Toast";

type Scope = "Personal" | "@shadcn_crafter" | "Acme Design Team";

export function DashboardPage() {
  const { navigate } = useRoute();
  const { toast } = useToast();
  const [scope, setScope] = useState<Scope>("Personal");
  const [scopeDropdown, setScopeDropdown] = useState(false);
  const [newDropdown, setNewDropdown] = useState(false);
  const [activeNav, setActiveNav] = useState("overview");
  const [topTab, setTopTab] = useState<"components" | "libraries" | "templates" | "themes">("components");

  const NAV_ITEMS = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "components", label: "Components", count: 12, icon: Code2 },
    { id: "libraries", label: "Libraries", count: 2, icon: Package },
    { id: "templates", label: "Templates", count: 4, icon: LayoutDashboard },
    { id: "themes", label: "Themes", count: 6, icon: Sparkles },
    { id: "ascii", label: "ASCII art", count: 3, icon: Terminal },
    { id: "gradients", label: "Gradients", count: 5, icon: Layers },
    { id: "shaders", label: "Shaders", count: 2, icon: Sliders },
    { id: "earnings", label: "Earnings", icon: DollarSign },
  ];

  return (
    <div className="flex h-full min-h-[calc(100vh-56px)] bg-[var(--uf-bg)] page-enter">
      {/* ── Sub-Sidebar ── */}
      <aside className="w-64 shrink-0 border-r border-[var(--uf-border)] bg-[var(--uf-panel)] flex flex-col">
        {/* Scope Switcher */}
        <div className="p-4 border-b border-[var(--uf-border)] relative">
          <button
            onClick={() => setScopeDropdown(!scopeDropdown)}
            className="flex w-full items-center justify-between rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 py-2 text-xs font-semibold text-[var(--uf-text)] hover:bg-white/[0.04] transition"
          >
            <div className="flex items-center gap-2 truncate">
              <div className="h-5 w-5 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-500 text-[10px] font-bold text-white flex items-center justify-center shrink-0">
                {scope[0]}
              </div>
              <span className="truncate">{scope}</span>
            </div>
            <Icon icon={ChevronDown} size={14} className="text-[var(--uf-text-muted)] shrink-0" />
          </button>

          {scopeDropdown && (
            <div className="absolute top-14 left-4 right-4 z-30 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] shadow-xl p-1.5 space-y-1">
              {(["Personal", "@shadcn_crafter", "Acme Design Team"] as Scope[]).map((s) => (
                <button
                  key={s}
                  onClick={() => { setScope(s); setScopeDropdown(false); }}
                  className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs transition ${
                    scope === s ? "bg-[var(--uf-accent)]/10 text-[var(--uf-accent)] font-semibold" : "text-[var(--uf-text-secondary)] hover:bg-white/5"
                  }`}
                >
                  <span className="truncate">{s}</span>
                </button>
              ))}
            </div>
          )}

          {/* Quick links: Profile · Site · Stats */}
          <div className="mt-3 flex items-center justify-between text-[11px] text-[var(--uf-text-muted)] px-1">
            <button onClick={() => navigate("#/authors")} className="hover:text-[var(--uf-text)] transition">Profile</button>
            <span>·</span>
            <button onClick={() => navigate("#/")} className="hover:text-[var(--uf-text)] transition">Site</button>
            <span>·</span>
            <button onClick={() => setActiveNav("overview")} className="hover:text-[var(--uf-text)] transition">Stats</button>
          </div>

          {/* Blue New ▾ split button */}
          <div className="mt-3 relative">
            <button
              onClick={() => setNewDropdown(!newDropdown)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--uf-accent)] py-2 text-xs font-semibold text-white shadow-sm hover:bg-[var(--uf-accent-hover)] transition"
            >
              <Icon icon={Plus} size={15} />
              <span>New ▾</span>
            </button>

            {newDropdown && (
              <div className="absolute top-10 left-0 right-0 z-30 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] shadow-xl p-1.5 space-y-1">
                {[
                  { label: "New component", action: () => navigate("#/publish") },
                  { label: "New theme", action: () => navigate("#/themes/editor") },
                  { label: "New template", action: () => navigate("#/publish") },
                  { label: "New gradient", action: () => navigate("#/gradients?editor=true") },
                  { label: "New shader", action: () => navigate("#/publish") },
                  { label: "New library", action: () => navigate("#/libraries") },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { item.action(); setNewDropdown(false); }}
                    className="flex w-full items-center px-2.5 py-1.5 text-xs text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/5 rounded-lg transition"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1 scrollbar-thin">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs font-medium transition ${
                activeNav === item.id
                  ? "bg-white/[0.08] text-[var(--uf-text)] font-semibold border-l-2 border-[var(--uf-accent)] pl-2.5"
                  : "text-[var(--uf-text-secondary)] hover:bg-white/[0.04] hover:text-[var(--uf-text)]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Icon icon={item.icon} size={15} />
                <span>{item.label}</span>
              </div>
              {item.count !== undefined && (
                <span className="text-[10px] text-[var(--uf-text-muted)] font-mono">{item.count}</span>
              )}
            </button>
          ))}
        </div>

        {/* Bottom CLI & API Key */}
        <div className="p-3 border-t border-[var(--uf-border)] space-y-1">
          <button
            onClick={() => navigate("#/mcp")}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] hover:bg-white/5 transition"
          >
            <Icon icon={Key} size={14} />
            <span>API keys · CLI</span>
          </button>
        </div>
      </aside>

      {/* ── Main Content Area ── */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[var(--uf-border)] pb-6 mb-8">
            <div>
              <h1 className="text-2xl font-black text-[var(--uf-text)]">
                Your work on UIForge
              </h1>
              <p className="text-xs text-[var(--uf-text-secondary)] mt-1">
                What you've built and how it's reaching the community across web, CLI, and AI agents.
              </p>
            </div>
            <button
              onClick={() => navigate("#/publish")}
              className="rounded-xl bg-[var(--uf-accent)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition flex items-center gap-1.5 self-start sm:self-auto"
            >
              <Icon icon={Plus} size={15} />
              Publish component
            </button>
          </div>

          {/* ── 30-Day KPI Tiles with % change ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Views", value: "142.8k", change: "+18.4%", icon: Eye },
              { label: "Copies & Prompts", value: "38.2k", change: "+24.1%", icon: Download },
              { label: "Bookmarks", value: "7,426", change: "+12.9%", icon: Bookmark },
              { label: "Profile views", value: "9,810", change: "+9.3%", icon: Sparkles },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-5">
                <div className="flex items-center justify-between text-[var(--uf-text-muted)] mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider">{kpi.label}</span>
                  <Icon icon={kpi.icon} size={16} />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[var(--uf-text)]">{kpi.value}</span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center">
                    <Icon icon={TrendingUp} size={12} className="mr-0.5" />
                    {kpi.change}
                  </span>
                </div>
                <span className="text-[10px] text-[var(--uf-text-muted)] block mt-1">vs previous 30 days</span>
              </div>
            ))}
          </div>

          {/* ── Analytics Pulse Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4">
              <span className="text-[11px] text-[var(--uf-text-muted)] uppercase tracking-wider font-semibold">Weekly Rank</span>
              <p className="text-xl font-bold text-[var(--uf-text)] mt-1">#4 Author</p>
              <span className="text-[10px] text-amber-400 mt-0.5 block">Top 1% this week</span>
            </div>
            <div className="rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4">
              <span className="text-[11px] text-[var(--uf-text-muted)] uppercase tracking-wider font-semibold">Clicks from Search</span>
              <p className="text-xl font-bold text-[var(--uf-text)] mt-1">68,240</p>
              <span className="text-[10px] text-emerald-400 mt-0.5 block">+14% organic CTR</span>
            </div>
            <div className="rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4">
              <span className="text-[11px] text-[var(--uf-text-muted)] uppercase tracking-wider font-semibold">Top Referrer</span>
              <p className="text-xl font-bold text-[var(--uf-text)] mt-1">Claude / Cursor</p>
              <span className="text-[10px] text-[var(--uf-text-muted)] mt-0.5 block">54% CLI/MCP installs</span>
            </div>
            <div className="rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4 flex flex-col justify-between">
              <div>
                <span className="text-[11px] text-[var(--uf-text-muted)] uppercase tracking-wider font-semibold">Clicks Out to You</span>
                <p className="text-xl font-bold text-[var(--uf-text)] mt-1">2,840</p>
              </div>
              <button 
                onClick={() => toast("info", "Detailed analytics module loading...")}
                className="text-xs font-semibold text-[var(--uf-accent)] hover:underline flex items-center gap-1 mt-2"
              >
                Open analytics →
              </button>
            </div>
          </div>

          {/* ── Activity Over Time Chart (Views / Copies / CLI installs) ── */}
          <div className="rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-bold text-[var(--uf-text)]">Activity Over Time</h3>
                <p className="text-xs text-[var(--uf-text-muted)] mt-0.5">Views, Copies & CLI installs · last 30 days complete</p>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium">
                <span className="flex items-center gap-1.5 text-[var(--uf-accent)]">
                  <span className="h-2 w-2 rounded-full bg-[var(--uf-accent)]" /> Views
                </span>
                <span className="flex items-center gap-1.5 text-violet-400">
                  <span className="h-2 w-2 rounded-full bg-violet-400" /> Copies
                </span>
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> CLI Installs
                </span>
              </div>
            </div>

            {/* Visual Bars Simulation */}
            <div className="h-48 flex items-end justify-between gap-1.5 relative border-b border-[var(--uf-border)] pb-2">
              {[45, 60, 52, 78, 65, 90, 84, 98, 110, 95, 120, 105, 130, 115, 140, 128, 145, 160, 150, 175, 168, 185, 190, 178, 205, 195, 210, 225, 215, 240].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5 group relative cursor-pointer">
                  <div className="w-full bg-[var(--uf-accent)]/80 rounded-t-sm group-hover:bg-[var(--uf-accent)] transition" style={{ height: `${(val / 240) * 140}px` }} />
                  <div className="w-full bg-violet-500/60 rounded-t-xs" style={{ height: `${(val / 240) * 40}px` }} />
                  {/* Tooltip on hover */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black border border-[var(--uf-border)] px-2 py-1 rounded text-[10px] font-mono text-white opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-20 pointer-events-none">
                    Day {i + 1}: {val * 35} views
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-[10px] text-[var(--uf-text-muted)] font-mono">
              <span>Day 1</span>
              <span>Day 15</span>
              <span>Day 30 (Yesterday)</span>
            </div>
          </div>

          {/* ── Top Components Tabs & Table ── */}
          <div className="rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] overflow-hidden mb-8">
            <div className="px-6 py-4 border-b border-[var(--uf-border)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[var(--uf-text)]">Top Releases</span>
                <div className="flex rounded-lg border border-[var(--uf-border)] p-0.5 bg-[var(--uf-panel-2)] text-xs font-semibold">
                  {(["components", "libraries", "templates", "themes"] as const).map(tab => (
                    <button
                      key={tab}
                      onClick={() => setTopTab(tab)}
                      className={`px-3 py-1 rounded-md capitalize transition ${
                        topTab === tab ? "bg-[var(--uf-accent)] text-white" : "text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => navigate("#/components")}
                className="text-xs font-semibold text-[var(--uf-accent)] hover:underline"
              >
                See all {topTab} →
              </button>
            </div>

            <div className="divide-y divide-[var(--uf-border)]">
              {[
                { name: "Integration Card · Default", category: "Cards", views: "29,598", copies: "4,120", bookmarks: "1,223", status: "Published" },
                { name: "Interactive Gradient Button", category: "Buttons", views: "18,420", copies: "3,890", bookmarks: "892", status: "Published" },
                { name: "SaaS Pricing Comparison Table", category: "Pricing", views: "14,310", copies: "2,450", bookmarks: "610", status: "Published" },
                { name: "Animated Dynamic Dock", category: "Docks", views: "12,190", copies: "1,980", bookmarks: "440", status: "Published" },
              ].map((row, idx) => (
                <div key={idx} className="px-6 py-4 flex items-center justify-between hover:bg-white/[0.02] transition">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-9 w-9 rounded-lg bg-[var(--uf-panel-2)] border border-[var(--uf-border)] flex items-center justify-center font-bold text-xs text-[var(--uf-accent)] shrink-0">
                      #{idx + 1}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-[var(--uf-text)] truncate">{row.name}</h4>
                      <p className="text-xs text-[var(--uf-text-muted)]">{row.category} · MIT License</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8 text-right shrink-0">
                    <div>
                      <p className="text-xs font-bold text-[var(--uf-text)] font-mono">{row.views}</p>
                      <p className="text-[10px] text-[var(--uf-text-muted)]">Views</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--uf-text)] font-mono">{row.copies}</p>
                      <p className="text-[10px] text-[var(--uf-text-muted)]">Copies</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--uf-text)] font-mono">{row.bookmarks}</p>
                      <p className="text-[10px] text-[var(--uf-text-muted)]">Bookmarks</p>
                    </div>
                    <span className="hidden sm:inline-flex rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/20">
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Publishing CLI banner & Next steps ── */}
          <div className="rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-6">
            <h3 className="text-sm font-bold text-[var(--uf-text)] flex items-center gap-2">
              <Icon icon={Terminal} size={16} className="text-[var(--uf-accent)]" />
              Publish from your terminal or CI
            </h3>
            <p className="text-xs text-[var(--uf-text-secondary)] mt-1">
              Publish directly without leaving your editor using the official UIForge CLI:
            </p>
            <div className="mt-3 flex items-center justify-between rounded-xl bg-black/60 border border-white/5 px-4 py-2.5 font-mono text-xs text-white">
              <span>npx @uiforge/cli publish ./components/MyComponent.tsx</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText("npx @uiforge/cli publish ./components/MyComponent.tsx");
                  toast("success", "Copied CLI publish command!");
                }}
                className="text-[var(--uf-text-muted)] hover:text-white transition"
              >
                <Icon icon={Download} size={14} />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
