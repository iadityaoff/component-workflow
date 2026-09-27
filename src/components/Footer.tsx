/**
 * UIForge Footer
 */
import React from "react";
import { useRoute } from "../lib/router";

export function Footer() {
  const { navigate } = useRoute();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--uf-border)] bg-[var(--uf-bg)]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--uf-text-muted)] mb-3">Product</h4>
            <ul className="space-y-2">
              <FooterLink label="Components" onClick={() => navigate("#/components")} />
              <FooterLink label="Themes" onClick={() => navigate("#/themes")} />
              <FooterLink label="Templates" onClick={() => navigate("#/templates")} />
              <FooterLink label="Icons" onClick={() => navigate("#/icons")} />
              <FooterLink label="Apps" onClick={() => navigate("#/apps")} />
            </ul>
          </div>

          {/* Build */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--uf-text-muted)] mb-3">Build</h4>
            <ul className="space-y-2">
              <FooterLink label="AI Generator" onClick={() => navigate("#/ai")} />
              <FooterLink label="CLI & MCP" onClick={() => navigate("#/mcp")} />
              <FooterLink label="Creator Studio" onClick={() => navigate("#/studio")} />
              <FooterLink label="Design Bug Bot" onClick={() => navigate("#/design-bug-bot")} />
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--uf-text-muted)] mb-3">Community</h4>
            <ul className="space-y-2">
              <FooterLink label="Authors" onClick={() => navigate("#/authors")} />
              <FooterLink label="Libraries" onClick={() => navigate("#/libraries")} />
              <FooterLink label="Publish" onClick={() => navigate("#/publish")} />
              <FooterLink label="Pricing" onClick={() => navigate("#/pricing")} />
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--uf-text-muted)] mb-3">Legal</h4>
            <ul className="space-y-2">
              <FooterLink label="Terms of Service" />
              <FooterLink label="Privacy Policy" />
              <FooterLink label="License" />
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[var(--uf-border)] pt-6">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--uf-accent)] text-[8px] font-black text-white">
              UF
            </div>
            <span className="text-sm font-bold text-[var(--uf-text)]">UIForge</span>
          </div>
          <p className="text-xs text-[var(--uf-text-muted)]">
            © {year} UIForge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="text-xs text-[var(--uf-text-secondary)] hover:text-[var(--uf-text)] transition"
      >
        {label}
      </button>
    </li>
  );
}
