/**
 * Pricing Page
 */
import React from "react";
import { Check, Sparkles, Zap, Building2 } from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { MetaHead } from "../components/ui/MetaHead";
import { useRoute } from "../lib/router";

const PLANS = [
  {
    name: "Developer",
    price: "$0",
    period: "/mo",
    description: "Perfect for exploring components",
    icon: Sparkles,
    gradient: "from-sky-500 to-blue-500",
    features: [
      "Browse full registry",
      "Copy standard components",
      "SVG icon search",
      "5 Magic generates / mo",
      "Community support",
    ],
    cta: "Get Started Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For professional frontend engineers",
    icon: Zap,
    gradient: "from-[var(--uf-accent)] to-indigo-500",
    features: [
      "Unlimited magic components",
      "10 template downloads / mo",
      "MCP server priority access",
      "UIForge Creator dashboard",
      "Advanced Design Bug Bot",
      "Export theme CSS variables",
    ],
    cta: "Upgrade to Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$149",
    period: "/mo",
    description: "For agencies and large teams",
    icon: Building2,
    gradient: "from-emerald-500 to-teal-500",
    features: [
      "Everything in Pro",
      "Unlimited template downloads",
      "Shared team workspaces",
      "Custom MCP integrations",
      "SSO & SAML authentication",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const FAQ = [
  {
    q: "How does the Magic Component generator work?",
    a: "The Magic generator uses AI to remix and build new variants of our components based on your prompt. Pro users get unlimited generations.",
  },
  {
    q: "Can I use the templates for client work?",
    a: "Yes! All templates you download on the Pro or Enterprise plans come with a commercial license allowing you to use them for client projects.",
  },
  {
    q: "What is the UIForge Creator Dashboard?",
    a: "It's a suite of tools that allows you to publish your own components and templates to our marketplace and earn revenue from sales.",
  },
  {
    q: "Do you offer discounts for students or non-profits?",
    a: "Yes, we offer a 50% discount on the Pro plan for verified students and non-profit organizations. Reach out to our support team.",
  },
];

export function PricingPage() {
  const { navigate } = useRoute();

  return (
    <div className="flex flex-col bg-[var(--uf-bg)] min-h-[calc(100vh-56px)] page-enter">
      <MetaHead
        title="UIForge Pricing"
        description="Simple, transparent pricing for frontend engineers and design teams."
      />

      <main className="flex-1">
        {/* Header */}
        <div className="border-b border-[var(--uf-border)] bg-[var(--uf-panel)] py-20 px-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--uf-accent)]/5 to-transparent pointer-events-none" />
          <div className="mx-auto max-w-3xl relative z-10">
            <h1 className="text-4xl font-black tracking-tight text-[var(--uf-text)] sm:text-5xl">
              Pricing for every stage
            </h1>
            <p className="mt-4 text-lg text-[var(--uf-text-secondary)] max-w-xl mx-auto">
              Whether you're hacking on a side project or building enterprise software, we have a plan that fits your needs.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto max-w-6xl px-8 py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {PLANS.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 transition-transform hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-[var(--uf-panel-2)] border-2 border-[var(--uf-accent)] shadow-2xl shadow-[var(--uf-accent)]/10"
                    : "bg-[var(--uf-panel)] border border-[var(--uf-border)]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[var(--uf-accent)] px-4 py-1 text-xs font-bold text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${plan.gradient} shadow-lg border border-white/10`}>
                  <Icon icon={plan.icon} size={24} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[var(--uf-text)]">{plan.name}</h3>
                <p className="mt-2 text-sm text-[var(--uf-text-secondary)] h-10">{plan.description}</p>
                
                <div className="my-6 flex items-baseline gap-2 border-b border-[var(--uf-border)] pb-8">
                  <span className="text-4xl font-black tracking-tight text-[var(--uf-text)]">{plan.price}</span>
                  <span className="text-sm font-semibold text-[var(--uf-text-muted)]">{plan.period}</span>
                </div>
                
                <ul className="mb-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium text-[var(--uf-text-secondary)]">
                      <div className="mt-0.5 rounded-full bg-[var(--uf-accent)]/10 p-1 text-[var(--uf-accent)] shrink-0">
                        <Icon icon={Check} size={10} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => navigate("#/signin")}
                  className={`w-full rounded-xl py-3.5 px-4 text-sm font-bold transition ${
                    plan.featured
                      ? "bg-[var(--uf-accent)] text-white hover:bg-[var(--uf-accent-hover)] shadow-lg"
                      : "bg-[var(--uf-panel-2)] border border-[var(--uf-border)] text-[var(--uf-text)] hover:bg-[var(--uf-panel)]"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto max-w-4xl px-8 pb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[var(--uf-text)]">Frequently Asked Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {FAQ.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-6">
                <h3 className="text-base font-bold text-[var(--uf-text)]">{faq.q}</h3>
                <p className="mt-3 text-sm text-[var(--uf-text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
