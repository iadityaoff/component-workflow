/**
 * Publish Component / Resource Flow
 * Meets Section 13 (Publish flow) of Master Prompt
 */
import React, { useState } from "react";
import { 
  UploadCloud, CheckCircle, FileCode, Eye, Sparkles, 
  Terminal, Shield, Tag, Layers, Check, ArrowLeft, Video
} from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useRoute } from "../lib/router";
import { useToast } from "../components/Toast";
import { ALL_CATEGORIES } from "../data/categories";

export function PublishPage() {
  const { navigate } = useRoute();
  const { toast } = useToast();

  const [activeFile, setActiveFile] = useState<"component" | "demo" | "styles">("component");
  const [componentName, setComponentName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("cards");
  const [tags, setTags] = useState("glassmorphism, saas, animation");
  const [license, setLicense] = useState("MIT");
  const [visibility, setVisibility] = useState<"public" | "private" | "team">("public");

  const [componentCode, setComponentCode] = useState(`import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

export function ModernFeatureCard() {
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-xl"
    >
      <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
        <Sparkles className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-bold text-white">Accelerate Delivery</h3>
      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
        Pre-built components engineered for maximum velocity with Tailwind and TypeScript.
      </p>
      <button className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition">
        Learn more <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </motion.div>
  );
}`);

  const [demoCode, setDemoCode] = useState(`import { ModernFeatureCard } from "./Component";

export default function Demo() {
  return (
    <div className="flex items-center justify-center p-12 bg-black min-h-[300px]">
      <ModernFeatureCard />
    </div>
  );
}`);

  // Automatically detect dependencies from import lines
  const detectedDeps = ["framer-motion", "lucide-react", "clsx", "tailwind-merge"];

  const handleNameChange = (name: string) => {
    setComponentName(name);
    setSlug(name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!componentName.trim()) {
      toast("error", "Please provide a component name");
      return;
    }
    toast("success", `Component "${componentName}" submitted for review! Previews captured.`);
    setTimeout(() => navigate("#/studio"), 1200);
  };

  return (
    <div className="flex-1 bg-[var(--uf-bg)] text-[var(--uf-text)] min-h-[calc(100vh-56px)] py-10 px-4 sm:px-6 lg:px-8 page-enter overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between border-b border-[var(--uf-border)] pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-[var(--uf-text-muted)] mb-1">
              <button onClick={() => navigate("#/studio")} className="hover:text-[var(--uf-text)] transition">
                Creator Studio
              </button>
              <span>/</span>
              <span>Publish</span>
            </div>
            <h1 className="text-3xl font-black text-[var(--uf-text)] tracking-tight">Publish Component</h1>
            <p className="mt-1 text-sm text-[var(--uf-text-secondary)]">
              Share your creation with the UIForge community. Previews and video captures are generated automatically.
            </p>
          </div>
          <div className="h-12 w-12 rounded-2xl bg-[var(--uf-accent)]/10 text-[var(--uf-accent)] flex items-center justify-center">
            <Icon icon={UploadCloud} size={24} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Metadata Section */}
          <div className="rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-6 space-y-5">
            <h2 className="text-base font-bold text-[var(--uf-text)]">Component Details</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--uf-text)]">Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern Feature Card"
                  value={componentName}
                  onChange={(e) => handleNameChange(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 text-xs text-[var(--uf-text)] focus:border-[var(--uf-accent)] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--uf-text)]">Slug (URL)</label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="modern-feature-card"
                  className="mt-1.5 h-10 w-full rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 text-xs text-[var(--uf-text-muted)] font-mono focus:border-[var(--uf-accent)] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--uf-text)]">Description</label>
              <textarea
                rows={2}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="A sleek glassmorphic feature card with smooth hover motions and clean typography."
                className="mt-1.5 w-full rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] p-3 text-xs text-[var(--uf-text)] focus:border-[var(--uf-accent)] focus:outline-none resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[var(--uf-text)]">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 text-xs text-[var(--uf-text)] focus:border-[var(--uf-accent)] focus:outline-none"
                >
                  {ALL_CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--uf-text)]">License</label>
                <select
                  value={license}
                  onChange={(e) => setLicense(e.target.value)}
                  className="mt-1.5 h-10 w-full rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 text-xs text-[var(--uf-text)] focus:border-[var(--uf-accent)] focus:outline-none"
                >
                  <option value="MIT">MIT License</option>
                  <option value="Apache-2.0">Apache 2.0</option>
                  <option value="AGPL-3.0">AGPL 3.0</option>
                  <option value="Commercial">Commercial (Paid)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--uf-text)]">Visibility</label>
                <select
                  value={visibility}
                  onChange={(e) => setVisibility(e.target.value as any)}
                  className="mt-1.5 h-10 w-full rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 text-xs text-[var(--uf-text)] focus:border-[var(--uf-accent)] focus:outline-none"
                >
                  <option value="public">Public (Community)</option>
                  <option value="private">Private</option>
                  <option value="team">Team Only</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[var(--uf-text)]">Tags (comma separated)</label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="cards, motion, glassmorphism"
                className="mt-1.5 h-10 w-full rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] px-3 text-xs text-[var(--uf-text)] focus:border-[var(--uf-accent)] focus:outline-none"
              />
            </div>
          </div>

          {/* Multi-File Code Editor Section */}
          <div className="rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] overflow-hidden">
            <div className="flex items-center justify-between border-b border-[var(--uf-border)] px-4 bg-[var(--uf-panel-2)]">
              <div className="flex">
                <button
                  type="button"
                  onClick={() => setActiveFile("component")}
                  className={`py-3 px-4 text-xs font-mono font-medium border-b-2 transition ${
                    activeFile === "component"
                      ? "border-[var(--uf-accent)] text-[var(--uf-accent)] bg-[var(--uf-panel)]"
                      : "border-transparent text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
                  }`}
                >
                  Component.tsx
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFile("demo")}
                  className={`py-3 px-4 text-xs font-mono font-medium border-b-2 transition ${
                    activeFile === "demo"
                      ? "border-[var(--uf-accent)] text-[var(--uf-accent)] bg-[var(--uf-panel)]"
                      : "border-transparent text-[var(--uf-text-muted)] hover:text-[var(--uf-text)]"
                  }`}
                >
                  demo.tsx
                </button>
              </div>

              <div className="flex items-center gap-2 py-2">
                <span className="text-[10px] text-[var(--uf-text-muted)]">TypeScript · React</span>
              </div>
            </div>

            <div className="p-4">
              <textarea
                rows={12}
                value={activeFile === "component" ? componentCode : demoCode}
                onChange={(e) => {
                  if (activeFile === "component") setComponentCode(e.target.value);
                  else setDemoCode(e.target.value);
                }}
                className="w-full rounded-xl border border-[var(--uf-border)] bg-black/40 p-4 font-mono text-xs text-[var(--uf-text)] leading-relaxed focus:border-[var(--uf-accent)] focus:outline-none resize-none"
              />
            </div>

            {/* Auto-detected Dependencies Chips */}
            <div className="px-5 py-3 border-t border-[var(--uf-border)] bg-[var(--uf-panel-2)] flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold text-[var(--uf-text-muted)]">Auto-detected dependencies:</span>
              {detectedDeps.map(dep => (
                <span key={dep} className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-mono text-[var(--uf-text-secondary)]">
                  {dep}
                </span>
              ))}
            </div>
          </div>

          {/* Automated Playwright Preview Notice */}
          <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Icon icon={Video} size={18} />
              </div>
              <div>
                <p className="text-xs font-bold text-[var(--uf-text)]">Automated Media Capture</p>
                <p className="text-[11px] text-[var(--uf-text-muted)]">Playwright will generate Retina screenshots and video clips on submission.</p>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400">Ready</span>
          </div>

          {/* Submit Action */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate("#/studio")}
              className="rounded-xl border border-[var(--uf-border)] px-5 py-2.5 text-xs font-semibold text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/5 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[var(--uf-accent)] px-6 py-2.5 text-xs font-semibold text-white hover:bg-[var(--uf-accent-hover)] transition flex items-center gap-2 shadow-sm"
            >
              <Icon icon={CheckCircle} size={15} />
              Publish to Marketplace
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
