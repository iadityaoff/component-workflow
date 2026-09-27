import React, { useState, useRef, useEffect } from "react";
import { 
  ChevronDown, Check, FileText, Code2, Terminal, Image, 
  Sparkles, Layers, Copy, Zap 
} from "lucide-react";
import { Icon } from "./ui/Icon";
import { useToast } from "./Toast";
import { useCopyQuota } from "../lib/quota";
import { UpgradeDialog } from "./UpgradeDialog";
import type { ComponentItem } from "../data/components";

interface Props {
  item: ComponentItem;
  className?: string;
  size?: "sm" | "md";
}

export function CopyPromptDropdown({ item, className = "", size = "md" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const { recordCopy, isUpgradeOpen, closeUpgradeModal, copiesUsed } = useCopyQuota();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const generateFullPrompt = (targetModel?: string) => {
    const deps = item.tags.length > 0 ? item.tags.join(" ") : "lucide-react framer-motion clsx tailwind-merge";
    const componentFileName = `${item.id}.tsx`;

    let prefix = "";
    if (targetModel) {
      prefix = `[Optimized for ${targetModel}]\n\n`;
    }

    return `${prefix}You are given a task to integrate an existing React component in the codebase.
The codebase should support: shadcn project structure, Tailwind CSS, TypeScript.
If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or TypeScript.
Determine the default path for components and styles (usually /components/ui); explain why it's important to create this folder if missing.

Copy-paste this component to /components/ui folder:
\`\`\`tsx
// ${componentFileName}
${item.code}
\`\`\`

demo.tsx:
\`\`\`tsx
import React from "react";
import { ${item.title.replace(/[^a-zA-Z0-9]/g, "")} } from "./components/ui/${componentFileName.replace(".tsx", "")}";

export default function Demo() {
  return (
    <div className="flex min-h-[350px] w-full items-center justify-center p-6 bg-slate-950">
      <${item.title.replace(/[^a-zA-Z0-9]/g, "")} />
    </div>
  );
}
\`\`\`

Install NPM dependencies: ${deps}

Implementation guidelines:
1. Analyze component structure
2. Identify required context/props/state
3. Review hooks and animation triggers
4. Place in the right folder (/components/ui)
5. Ensure responsive styling for mobile, tablet, and desktop
6. Use lucide-react or unsplash for missing icons/images

Questions to ask:
- What data/props need to be passed from parent views?
- What state management solution (Zustand, Context, or local useState) should be bound?
- What responsive behaviors are expected?
- What is the best place to integrate this component in your application?`;
  };

  const handleCopy = async (type: "prompt" | "file" | "all-files" | "image" | "cli", target?: string) => {
    // Check daily quota
    const allowed = recordCopy();
    if (!allowed) {
      setIsOpen(false);
      return;
    }

    let textToCopy = "";
    let successMessage = "";

    switch (type) {
      case "prompt":
        textToCopy = generateFullPrompt(target);
        successMessage = target ? `Prompt copied for ${target}!` : "Prompt copied to clipboard!";
        break;
      case "file":
        textToCopy = item.code;
        successMessage = `Copied ${item.id}.tsx!`;
        break;
      case "all-files":
        textToCopy = `// ── ${item.id}.tsx ──\n${item.code}\n\n// ── demo.tsx ──\nexport function Demo() {\n  return <${item.title.replace(/[^a-zA-Z0-9]/g, "")} />;\n}`;
        successMessage = "Copied 2 source files!";
        break;
      case "cli":
        textToCopy = `npx uiforge add ${item.id}`;
        successMessage = "CLI command copied!";
        break;
      case "image":
        textToCopy = `https://uiforge.dev/api/og/${item.id}.png`;
        successMessage = "Image URL copied!";
        break;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopiedLabel(target || type);
      toast("success", successMessage);
      setTimeout(() => setCopiedLabel(null), 1600);
    } catch {
      toast("error", "Failed to copy to clipboard");
    }

    setIsOpen(false);
  };

  const isSmall = size === "sm";

  return (
    <>
      <div className={`relative inline-flex items-center rounded-xl shadow-sm ${className}`} ref={dropdownRef}>
        {/* Primary Action Button */}
        <button
          type="button"
          onClick={() => handleCopy("prompt")}
          className={`inline-flex items-center gap-1.5 rounded-l-xl bg-[var(--uf-accent)] font-semibold text-white transition hover:bg-[var(--uf-accent-hover)] ${
            isSmall ? "px-2.5 py-1 text-[11px]" : "px-3.5 py-2 text-xs"
          }`}
          title="Copy AI Integration Prompt (↵)"
        >
          <Icon icon={copiedLabel === "prompt" ? Check : Copy} size={isSmall ? 12 : 14} />
          <span>{copiedLabel === "prompt" ? "Copied!" : "Copy prompt"}</span>
        </button>

        {/* Dropdown Toggle Caret */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`rounded-r-xl border-l border-white/20 bg-[var(--uf-accent)] text-white hover:bg-[var(--uf-accent-hover)] transition ${
            isSmall ? "px-1.5 py-1" : "px-2 py-2"
          }`}
          aria-expanded={isOpen}
          title="More copy options"
        >
          <Icon icon={ChevronDown} size={isSmall ? 12 : 14} />
        </button>

        {/* Popover Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 top-full mt-2 z-50 w-64 rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-2 shadow-2xl backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
            {/* Direct Copy Options */}
            <div className="space-y-0.5 pb-2 border-b border-[var(--uf-border)]">
              <button
                type="button"
                onClick={() => handleCopy("prompt")}
                className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[var(--uf-text)] hover:bg-white/10 transition text-left"
              >
                <div className="flex items-center gap-2">
                  <Icon icon={FileText} size={13} className="text-[var(--uf-accent)]" />
                  <span>Copy prompt</span>
                </div>
                <kbd className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-mono text-[var(--uf-text-muted)]">↵</kbd>
              </button>

              <button
                type="button"
                onClick={() => handleCopy("file")}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10 transition text-left"
              >
                <Icon icon={Code2} size={13} className="text-emerald-400" />
                <span className="truncate">{item.id}.tsx</span>
              </button>

              <button
                type="button"
                onClick={() => handleCopy("all-files")}
                className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10 transition text-left"
              >
                <div className="flex items-center gap-2">
                  <Icon icon={Layers} size={13} className="text-indigo-400" />
                  <span>Copy all files</span>
                </div>
                <span className="text-[10px] text-[var(--uf-text-muted)]">2 files</span>
              </button>

              <button
                type="button"
                onClick={() => handleCopy("cli")}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10 transition text-left"
              >
                <Icon icon={Terminal} size={13} className="text-amber-400" />
                <span>Copy CLI command</span>
              </button>

              <button
                type="button"
                onClick={() => handleCopy("image")}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10 transition text-left"
              >
                <Icon icon={Image} size={13} className="text-purple-400" />
                <span>Copy image link</span>
              </button>
            </div>

            {/* Optimized For Section */}
            <div className="pt-2">
              <span className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--uf-text-muted)] block">
                Optimized for
              </span>
              <div className="grid grid-cols-1 gap-0.5 mt-1">
                {[
                  "Claude Code",
                  "Codex",
                  "Cursor",
                  "Replit",
                  "Lovable",
                  "Bolt.new",
                  "v0",
                ].map((tool) => (
                  <button
                    key={tool}
                    type="button"
                    onClick={() => handleCopy("prompt", tool)}
                    className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] hover:bg-white/10 transition text-left"
                  >
                    <div className="flex items-center gap-2">
                      <Icon icon={Sparkles} size={12} className="text-cyan-400" />
                      <span>{tool}</span>
                    </div>
                    {copiedLabel === tool && (
                      <Icon icon={Check} size={12} className="text-emerald-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <UpgradeDialog
        isOpen={isUpgradeOpen}
        onClose={closeUpgradeModal}
        copiesUsed={copiesUsed}
      />
    </>
  );
}
