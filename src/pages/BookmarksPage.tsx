/**
 * Bookmarks Page
 * Meets Section 14 of Master Prompt
 */
import React, { useState } from "react";
import { 
  Bookmark, Plus, Search, Folder, Lock, Users, Sparkles, 
  Trash2, ExternalLink, Copy, Check, Clock, Grid, Layout
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useBookmarks } from "../lib/bookmarks";
import { useRoute } from "../lib/router";
import { useToast } from "../components/Toast";
import { ALL_COMPONENTS } from "../data/components";
import { LazyCardPreview } from "../components/LazyCardPreview";

interface CustomList {
  id: string;
  name: string;
  description: string;
  isPrivate: boolean;
  itemCount: number;
  updatedAt: string;
}

export function BookmarksPage() {
  const { savedComponents, removeSave } = useBookmarks();
  const { navigate, setQuery } = useRoute();
  const { toast } = useToast();

  const [activeTab, setActiveTab] = useState<"lists" | "all" | "opened">("lists");
  const [searchLists, setSearchLists] = useState("");
  const [newListModal, setNewListModal] = useState(false);
  const [newListName, setNewListName] = useState("");
  const [isPrivateList, setIsPrivateList] = useState(true);

  const [customLists, setCustomLists] = useState<CustomList[]>([
    {
      id: "list-1",
      name: "SaaS Dashboard Redesign",
      description: "Cards, charts and metric widgets for the upcoming sprint",
      isPrivate: true,
      itemCount: 8,
      updatedAt: "2 days ago",
    },
    {
      id: "list-2",
      name: "Team Marketing Blocks",
      description: "Hero sections and pricing tables shared with design team",
      isPrivate: false,
      itemCount: 14,
      updatedAt: "Yesterday",
    },
  ]);

  const handleCreateList = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newListName.trim()) return;
    const newList: CustomList = {
      id: `list-${Date.now()}`,
      name: newListName.trim(),
      description: "Custom user collection",
      isPrivate: isPrivateList,
      itemCount: 0,
      updatedAt: "Just now",
    };
    setCustomLists([...customLists, newList]);
    setNewListName("");
    setNewListModal(false);
    toast("success", `Created list "${newList.name}"!`);
  };

  // Seed sample thumbnails for the 4-thumbnail mosaic
  const mosaicItems = (savedComponents.length > 0 ? savedComponents : ALL_COMPONENTS.slice(0, 4)).slice(0, 4);

  return (
    <div className="flex-1 overflow-y-auto bg-[var(--uf-bg)] min-h-[calc(100vh-56px)] page-enter">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[var(--uf-border)] pb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-[var(--uf-text)] flex items-center gap-3">
              <Icon icon={Bookmark} size={28} className="text-[var(--uf-accent)]" />
              Bookmarks
            </h1>
            <p className="mt-1 text-sm text-[var(--uf-text-secondary)]">
              Organize saved components, themes and templates into private or shared team lists.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Icon icon={Search} size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)]" />
              <input
                type="text"
                value={searchLists}
                onChange={(e) => setSearchLists(e.target.value)}
                placeholder="Search lists..."
                className="w-48 sm:w-64 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] py-2 pl-9 pr-3 text-xs text-[var(--uf-text)] placeholder-[var(--uf-text-muted)] focus:border-[var(--uf-accent)] focus:outline-none"
              />
            </div>
            <button
              onClick={() => setNewListModal(true)}
              className="rounded-xl bg-[var(--uf-accent)] px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-[var(--uf-accent-hover)] transition flex items-center gap-1.5 shrink-0"
            >
              <Icon icon={Plus} size={15} />
              + New list
            </button>
          </div>
        </div>

        {/* Tabs: Lists | All saves | Opened */}
        <div className="mt-6 flex border-b border-[var(--uf-border)]">
          <button
            onClick={() => setActiveTab("lists")}
            className={`flex items-center gap-2 border-b-2 py-3 px-4 text-xs font-semibold transition ${
              activeTab === "lists"
                ? "border-[var(--uf-accent)] text-[var(--uf-accent)]"
                : "border-transparent text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
            }`}
          >
            <Icon icon={Folder} size={15} />
            Lists ({customLists.length + 1})
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={`flex items-center gap-2 border-b-2 py-3 px-4 text-xs font-semibold transition ${
              activeTab === "all"
                ? "border-[var(--uf-accent)] text-[var(--uf-accent)]"
                : "border-transparent text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
            }`}
          >
            <Icon icon={Grid} size={15} />
            All saves ({savedComponents.length})
          </button>
          <button
            onClick={() => setActiveTab("opened")}
            className={`flex items-center gap-2 border-b-2 py-3 px-4 text-xs font-semibold transition ${
              activeTab === "opened"
                ? "border-[var(--uf-accent)] text-[var(--uf-accent)]"
                : "border-transparent text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
            }`}
          >
            <Icon icon={Clock} size={15} />
            Opened (recently)
          </button>
        </div>

        {/* Tab 1: Lists Grid */}
        {activeTab === "lists" && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mosaic Card: "All saves" */}
            <div 
              onClick={() => setActiveTab("all")}
              className="group relative flex flex-col rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] overflow-hidden card-hover cursor-pointer p-4"
            >
              {/* 4 thumbnails mosaic */}
              <div className="grid grid-cols-2 gap-2 h-44 rounded-xl overflow-hidden bg-black/20 p-2">
                {mosaicItems.map((item, idx) => (
                  <div key={idx} className="relative rounded-lg bg-[var(--uf-panel-2)] overflow-hidden border border-white/5 flex items-center justify-center p-2 text-center">
                    <span className="text-[10px] font-mono text-[var(--uf-text-muted)] line-clamp-1">{item.title}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-[var(--uf-text)] group-hover:text-[var(--uf-accent)] transition">
                    All saves
                  </h3>
                  <p className="text-[11px] text-[var(--uf-text-muted)] mt-0.5">
                    Default collection · {savedComponents.length} items
                  </p>
                </div>
                <span className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-[var(--uf-text-muted)]">
                  Primary
                </span>
              </div>
            </div>

            {/* Custom Lists */}
            {customLists
              .filter(l => l.name.toLowerCase().includes(searchLists.toLowerCase()))
              .map((list) => (
                <div
                  key={list.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-6 card-hover"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {list.isPrivate ? (
                          <span className="flex items-center gap-1 rounded-md bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-400">
                            <Icon icon={Lock} size={11} /> Private
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
                            <Icon icon={Users} size={11} /> Team Shared
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-[var(--uf-text-muted)]">{list.updatedAt}</span>
                    </div>

                    <h3 className="text-base font-bold text-[var(--uf-text)]">{list.name}</h3>
                    <p className="text-xs text-[var(--uf-text-secondary)] mt-1 line-clamp-2 leading-relaxed">
                      {list.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[var(--uf-border)] flex items-center justify-between text-xs text-[var(--uf-text-muted)]">
                    <span>{list.itemCount} components</span>
                    <button 
                      onClick={() => setActiveTab("all")}
                      className="font-medium text-[var(--uf-accent)] hover:underline"
                    >
                      Open list →
                    </button>
                  </div>
                </div>
              ))}

            {/* Dashed "+ New list" Card */}
            <button
              onClick={() => setNewListModal(true)}
              className="group flex flex-col items-center justify-center min-h-[200px] rounded-2xl border-2 border-dashed border-[var(--uf-border)] hover:border-[var(--uf-accent)]/50 bg-[var(--uf-panel)]/40 hover:bg-[var(--uf-panel)] p-8 text-center transition"
            >
              <div className="h-10 w-10 rounded-full bg-[var(--uf-accent)]/10 text-[var(--uf-accent)] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Icon icon={Plus} size={20} />
              </div>
              <h3 className="text-sm font-bold text-[var(--uf-text)]">+ Create New List</h3>
              <p className="text-xs text-[var(--uf-text-muted)] mt-1 max-w-[200px]">
                Create a private workspace or collaborate with your team.
              </p>
            </button>
          </div>
        )}

        {/* Tab 2: All Saves */}
        {activeTab === "all" && (
          <div className="mt-8">
            {savedComponents.length === 0 ? (
              <div className="rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-12 text-center max-w-lg mx-auto">
                <div className="h-12 w-12 rounded-full bg-[var(--uf-accent)]/10 text-[var(--uf-accent)] flex items-center justify-center mx-auto mb-4">
                  <Icon icon={Bookmark} size={24} />
                </div>
                <h3 className="text-base font-bold text-[var(--uf-text)]">No saved items yet</h3>
                <p className="text-xs text-[var(--uf-text-muted)] mt-1 leading-relaxed">
                  Browse components, themes or templates and tap the bookmark button to collect your favorite UI blocks.
                </p>
                <button
                  onClick={() => navigate("#/components")}
                  className="mt-5 rounded-xl bg-[var(--uf-accent)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition"
                >
                  Explore Components
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {savedComponents.map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex flex-col rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] overflow-hidden card-hover"
                  >
                    <div 
                      onClick={() => setQuery({ preview: item.id })}
                      className="h-44 bg-[var(--uf-panel-2)] p-4 flex items-center justify-center cursor-pointer relative"
                    >
                      <LazyCardPreview
                        code={item.code}
                        compiledCode={item.compiledCode}
                        title={item.title}
                        priority={0}
                        fullHeight
                      />
                    </div>
                    <div className="p-4 border-t border-[var(--uf-border)] flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-[var(--uf-text)]">{item.title}</h4>
                        <span className="text-[10px] text-[var(--uf-text-muted)] uppercase tracking-wider">{item.categorySlug}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setQuery({ preview: item.id })}
                          className="rounded-lg p-1.5 text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] hover:bg-white/5 transition"
                          title="Preview"
                        >
                          <Icon icon={ExternalLink} size={14} />
                        </button>
                        <button
                          onClick={() => removeSave(item.id)}
                          className="rounded-lg p-1.5 text-[var(--uf-text-muted)] hover:text-rose-400 hover:bg-rose-500/10 transition"
                          title="Remove bookmark"
                        >
                          <Icon icon={Trash2} size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Opened (recently opened) */}
        {activeTab === "opened" && (
          <div className="mt-8">
            <div className="rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] divide-y divide-[var(--uf-border)]">
              {ALL_COMPONENTS.slice(0, 5).map((comp) => (
                <div key={comp.id} className="p-4 flex items-center justify-between hover:bg-white/[0.02] transition">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-[var(--uf-accent)]/10 text-[var(--uf-accent)] flex items-center justify-center font-bold text-xs">
                      UI
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--uf-text)]">{comp.title}</h4>
                      <p className="text-xs text-[var(--uf-text-muted)]">Opened today · {comp.categorySlug}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setQuery({ preview: comp.id })}
                    className="rounded-lg border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 py-1.5 text-xs font-medium text-[var(--uf-text)] hover:bg-white/[0.06] transition"
                  >
                    Open preview
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Modal: New List */}
      {newListModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-6 shadow-2xl">
            <h3 className="text-base font-bold text-[var(--uf-text)]">Create Collection List</h3>
            <p className="text-xs text-[var(--uf-text-secondary)] mt-1">
              Group related components, templates or inspiration.
            </p>

            <form onSubmit={handleCreateList} className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-semibold text-[var(--uf-text)]">List Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Design System V2"
                  value={newListName}
                  onChange={(e) => setNewListName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3.5 py-2 text-xs text-[var(--uf-text)] focus:border-[var(--uf-accent)] focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-[var(--uf-text)]">Privacy</label>
                <div className="mt-1.5 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPrivateList(true)}
                    className={`rounded-xl border p-3 text-left transition ${
                      isPrivateList 
                        ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/10 text-[var(--uf-accent)]" 
                        : "border-[var(--uf-border)] text-[var(--uf-text-secondary)]"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs">
                      <Icon icon={Lock} size={12} /> Private
                    </div>
                    <p className="text-[10px] text-[var(--uf-text-muted)] mt-0.5">Only you can view</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPrivateList(false)}
                    className={`rounded-xl border p-3 text-left transition ${
                      !isPrivateList 
                        ? "border-[var(--uf-accent)] bg-[var(--uf-accent)]/10 text-[var(--uf-accent)]" 
                        : "border-[var(--uf-border)] text-[var(--uf-text-secondary)]"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 font-bold text-xs">
                      <Icon icon={Users} size={12} /> Team Shared
                    </div>
                    <p className="text-[10px] text-[var(--uf-text-muted)] mt-0.5">Visible to workspace</p>
                  </button>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setNewListModal(false)}
                  className="rounded-lg border border-[var(--uf-border)] px-4 py-2 text-xs font-medium text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-lg bg-[var(--uf-accent)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition"
                >
                  Create List
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
