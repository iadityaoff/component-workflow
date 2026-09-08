import { Code2, ExternalLink, MessageCircle } from "lucide-react";
import { Icon } from "./ui/Icon";
import { useRoute } from "../lib/router";

const FOOTER_LINKS = {
  product: [
    { label: "Components", href: "#/" },
    { label: "Agents", href: "#/agents" },
    { label: "Magic Chat", href: "#/magic" },
    { label: "MCP Server", href: "#/mcp" },
    { label: "Pricing", href: "#/pricing" },
  ],
  build: [
    { label: "Documentation", href: "#/docs" },
    { label: "API Reference", href: "#/docs/api" },
    { label: "Templates", href: "#/agents" },
    { label: "Publish", href: "#/publish" },
  ],
  community: [
    { label: "GitHub", href: "https://github.com", external: true },
    { label: "Discord", href: "https://discord.gg", external: true },
    { label: "X / Twitter", href: "https://x.com", external: true },
    { label: "Blog", href: "#/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#/privacy" },
    { label: "Terms of Service", href: "#/terms" },
    { label: "License", href: "#/license" },
  ],
};

export function Footer() {
  const { navigate } = useRoute();

  function handleClick(href: string, external?: boolean) {
    if (external) {
      window.open(href, "_blank", "noopener");
    } else {
      navigate(href);
    }
  }

  return (
    <footer className="border-t border-ink-200 bg-white dark:border-ink-800/80 dark:bg-ink-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-ink-900 dark:text-white">Product</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="border-none bg-transparent text-sm text-ink-500 transition hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Build */}
          <div>
            <h4 className="text-sm font-semibold text-ink-900 dark:text-white">Build</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.build.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="border-none bg-transparent text-sm text-ink-500 transition hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold text-ink-900 dark:text-white">Community</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.community.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href, (link as any).external)}
                    className="border-none bg-transparent text-sm text-ink-500 transition hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-ink-900 dark:text-white">Legal</h4>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="border-none bg-transparent text-sm text-ink-500 transition hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-ink-100 pt-8 sm:flex-row dark:border-ink-800/80">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-ink-900 text-[11px] font-bold text-white shadow-sm dark:bg-white dark:text-ink-900">
              21
            </span>
            <span className="text-sm font-semibold text-ink-900 dark:text-white">21st Clone</span>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink icon={Code2} label="GitHub" href="https://github.com" />
            <SocialLink icon={ExternalLink} label="X / Twitter" href="https://x.com" />
            <SocialLink icon={MessageCircle} label="Discord" href="https://discord.gg" />
          </div>

          <p className="text-xs text-ink-400 dark:text-ink-500">
            © {new Date().getFullYear()} 21st Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon, label, href }: { icon: any; label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-ink-400 transition hover:text-ink-900 dark:text-ink-500 dark:hover:text-white"
    >
      <Icon icon={icon} size={18} />
    </a>
  );
}
