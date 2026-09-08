/**
 * Pricing Page — Three-tier pricing matching 21st.dev's model.
 */

import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { MetaHead } from "../components/ui/MetaHead";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    description: "Perfect for trying out",
    icon: Sparkles,
    gradient: "from-sky-500 to-blue-500",
    features: [
      "100 credits per month",
      "Unlimited UI inspirations",
      "Unlimited SVG logo searches",
      "Community components",
      "Community support",
    ],
    cta: "Get Started",
    ctaStyle: "border border-ink-200 bg-white text-ink-900 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:hover:bg-ink-800",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For professional developers",
    icon: Zap,
    gradient: "from-violet-500 to-fuchsia-500",
    features: [
      "400 credits per month",
      "Everything in Free",
      "Clone site feature",
      "Magic Generate (5 variants)",
      "Priority support",
      "Agent Registry publishing",
    ],
    cta: "Upgrade to Pro",
    ctaStyle: "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 hover:brightness-110",
    featured: true,
  },
  {
    name: "Max",
    price: "$49",
    period: "/mo",
    description: "For power users and teams",
    icon: Crown,
    gradient: "from-amber-500 to-orange-500",
    features: [
      "2,000 credits per month",
      "Everything in Pro",
      "Early access to new features",
      "Custom MCP server configs",
      "Team collaboration",
      "Priority support",
      "Revenue sharing for creators",
    ],
    cta: "Upgrade to Max",
    ctaStyle: "border border-ink-200 bg-white text-ink-900 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-900 dark:text-white dark:hover:bg-ink-800",
    featured: false,
  },
];

const FAQ = [
  {
    q: "How does credit-based pricing work?",
    a: "Each action (component generation, agent config export, magic generation) costs a certain number of credits. Basic searches are free and unlimited.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of the billing period.",
  },
  {
    q: "What happens when I run out of credits?",
    a: "You can continue using free features like browsing and searching. Paid features will be available again when your credits refresh at the start of the next billing cycle.",
  },
  {
    q: "Do you offer team plans?",
    a: "The Max plan supports team collaboration. For larger teams or enterprises, contact us for custom pricing.",
  },
];

export function PricingPage() {
  return (
    <>
      <MetaHead
        title="Pricing — Simple, Transparent Plans"
        description="Start free, upgrade when you need more. Three plans designed for developers at every stage."
      />
      <div className="page-enter mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, transparent pricing.
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm text-ink-500 dark:text-ink-400 sm:text-base">
            Start free, upgrade when you need more.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={[
                "relative flex flex-col rounded-2xl border p-6 transition",
                plan.featured
                  ? "border-violet-500 bg-white shadow-xl shadow-violet-500/10 dark:bg-ink-950 scale-[1.02]"
                  : "border-ink-200 bg-white dark:border-ink-800 dark:bg-ink-950",
              ].join(" ")}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-[11px] font-semibold text-white">
                  Most Popular
                </span>
              )}

              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${plan.gradient} shadow-sm`}>
                <Icon icon={plan.icon} size={20} className="text-white" />
              </div>

              <h3 className="mt-4 text-lg font-bold">{plan.name}</h3>
              <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">{plan.description}</p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                <span className="text-sm text-ink-500">{plan.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Icon icon={Check} size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span className="text-ink-600 dark:text-ink-300">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={[
                  "mt-6 w-full rounded-lg px-4 py-2.5 text-sm font-medium transition active:scale-[0.98]",
                  plan.ctaStyle,
                ].join(" ")}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-center text-2xl font-bold">Frequently asked questions</h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-6">
            {FAQ.map((item) => (
              <div key={item.q} className="rounded-xl border border-ink-200 bg-white p-5 dark:border-ink-800 dark:bg-ink-950">
                <h3 className="text-sm font-semibold">{item.q}</h3>
                <p className="mt-2 text-sm text-ink-500 dark:text-ink-400 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
