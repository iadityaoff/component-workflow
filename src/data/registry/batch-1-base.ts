import { VariantSpec, ago } from "./base";

export const BATCH_1_BASE: VariantSpec[] = [
  {
    id: "hero-modern-glow",
    title: "Modern SaaS Hero with Radial Glow",
    description: "High-converting hero section with pill announcement and soft background glow.",
    categorySlug: "heroes",
    tags: ["hero", "saas", "glow", "gradient"],
    previewKind: "iframe",
    featured: 1,
    createdAt: ago(0),
    likes: 124,
    views: 850,
    authorIdx: 0,
    prompt: "A modern SaaS hero section with a radial glow background, pill announcement 'New Features Live', a gradient text headline, and dual CTA buttons.",
    code: `import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroModernGlow() {
  return (
    <div className="relative isolate flex flex-col items-center justify-center overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-black">
      {/* Background Glow */}
      <div 
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" 
        aria-hidden="true"
      >
        <div 
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        {/* Announcement Pill */}
        <div className="mb-8 flex justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-ink-600 ring-1 ring-ink-900/10 hover:ring-ink-900/20 dark:text-ink-400 dark:ring-ink-100/10 dark:hover:ring-ink-100/20">
            <span className="flex items-center gap-1">
              <Sparkles className="h-3.5 w-3.5 text-violet-500" />
              New Features Live. {' '}
              <a href="#" className="font-semibold text-violet-600 dark:text-violet-400">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-b from-ink-900 to-ink-500 bg-clip-text text-transparent sm:text-6xl dark:from-white dark:to-ink-400">
          Transform your component workflow with AI
        </h1>
        <p className="mt-6 text-lg leading-8 text-ink-600 dark:text-ink-400">
          Ship components 10x faster with a production-ready marketplace built for senior developers. Fully tokenized, accessible, and ready to scale.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-xl bg-ink-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-ink-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100"
          >
            Get started
          </a>
          <a href="#" className="flex items-center gap-1.5 text-sm font-semibold leading-6 text-ink-900 dark:text-white">
            Live demo <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}`,
  },
  {
    id: "bg-fading-dots",
    title: "Fading Dot Pattern Background",
    description: "A reusable background wrapper with a repeating dot pattern that fades toward the edges.",
    categorySlug: "backgrounds",
    tags: ["background", "dots", "fading", "pattern"],
    previewKind: "iframe",
    featured: 0,
    createdAt: ago(1),
    likes: 45,
    views: 320,
    authorIdx: 2,
    prompt: "A reusable layout background component with a repeating dot pattern that fades out at the edges using a radial mask.",
    code: `import React from 'react';

export default function BgFadingDots() {
  return (
    <div className="relative flex h-full min-h-[400px] w-full items-center justify-center overflow-hidden bg-white dark:bg-black">
      <div 
        className="absolute inset-0 z-0 opacity-[0.4]"
        style={{
          backgroundImage: 'radial-gradient(circle, #8d8d97 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          WebkitMaskImage: 'radial-gradient(circle, black, transparent 80%)',
          maskImage: 'radial-gradient(circle, black, transparent 80%)',
        }}
      />
      <div className="relative z-10 text-center">
        <h2 className="text-xl font-medium text-ink-900 dark:text-white">Background Showcase</h2>
        <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">The dot pattern above smoothly fades out at the edges.</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "pricing-tier-popular",
    title: "Premium Pro Pricing Tier",
    description: "A pricing card variant highlighting the 'Most Popular' tier with gradient borders.",
    categorySlug: "pricing-sections",
    tags: ["pricing", "popular", "tier", "premium"],
    previewKind: "iframe",
    featured: 1,
    createdAt: ago(2),
    likes: 89,
    views: 540,
    authorIdx: 4,
    prompt: "A pricing section card for a 'Pro' tier, featuring a gradient border, a 'Most Popular' badge, and Lucide checkmark icons.",
    code: `import React from 'react';
import { Check } from 'lucide-react';

export default function PricingTierPopular() {
  return (
    <div className="flex items-center justify-center p-8 bg-zinc-50 dark:bg-zinc-950">
      <div className="relative w-full max-w-sm">
        {/* Gradient Border Decorator */}
        <div className="absolute -inset-[1px] rounded-[24px] bg-gradient-to-b from-violet-500 to-fuchsia-500 opacity-75 blur-[0.5px]" />
        
        <div className="relative flex flex-col rounded-[23px] bg-white p-8 dark:bg-zinc-900">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-ink-900 dark:text-white">Pro</h3>
            <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
              Most Popular
            </span>
          </div>
          
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-4xl font-bold tracking-tight text-ink-900 dark:text-white">$49</span>
            <span className="text-sm font-medium text-ink-500">/mo</span>
          </div>
          
          <p className="mt-4 text-sm text-ink-600 dark:text-ink-400">
            Perfect for professionals and growing teams who need more power.
          </p>
          
          <ul className="mt-8 space-y-4">
            {['Unlimited components', 'Custom design tokens', 'Priority AI generation', 'Team collaboration', 'SSO & Advanced Security'].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm text-ink-700 dark:text-ink-300">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <Check className="h-3 w-3" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
          
          <button className="mt-10 w-full rounded-xl bg-ink-900 py-3 text-sm font-bold text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900 dark:hover:bg-ink-100">
            Start free trial
          </button>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "popover-user-card",
    title: "Micro-Interactive User Popover",
    description: "A profile popover with spring animations and social metrics.",
    categorySlug: "popovers",
    tags: ["popover", "user", "profile", "animation"],
    previewKind: "iframe",
    featured: 0,
    createdAt: ago(3),
    likes: 67,
    views: 410,
    authorIdx: 5,
    prompt: "A profile popover card that appears on hover/click, showing username, bio, and social stats with Framer Motion animations.",
    code: `import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserPlus, MessageCircle } from 'lucide-react';

export default function PopoverUserCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[300px] w-full items-center justify-center bg-white dark:bg-black">
      <div className="relative">
        <button
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="text-sm font-semibold text-violet-600 hover:underline dark:text-violet-400"
        >
          @ariac
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="absolute bottom-full left-1/2 mb-2 w-64 -translate-x-1/2 overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-xl dark:border-ink-800 dark:bg-zinc-900"
            >
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-rose-500 flex items-center justify-center text-white font-bold text-lg">
                    AC
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-ink-900 dark:text-white">Aria Chen</p>
                    <p className="truncate text-xs text-ink-500">Principal Designer</p>
                  </div>
                </div>
                
                <p className="mt-3 text-xs leading-relaxed text-ink-600 dark:text-ink-400">
                  Building the future of AI-driven design systems. Loves SVG and micro-interactions.
                </p>
                
                <div className="mt-4 flex items-center gap-4 border-t border-ink-100 pt-3 dark:border-ink-800">
                  <div className="text-center">
                    <p className="text-xs font-bold text-ink-900 dark:text-white">12.4k</p>
                    <p className="text-[10px] text-ink-500">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-bold text-ink-900 dark:text-white">842</p>
                    <p className="text-[10px] text-ink-500">Following</p>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-lg bg-ink-900 py-1.5 text-xs font-bold text-white dark:bg-white dark:text-ink-900">
                    Follow
                  </button>
                  <button className="rounded-lg border border-ink-200 p-1.5 text-ink-600 dark:border-ink-800 dark:text-ink-400">
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}`,
  },
  {
    id: "empty-state-dashed",
    title: "Premium Dashed Empty State",
    description: "An empty state variant with a dashed border and floating animated icon.",
    categorySlug: "empty-states",
    tags: ["empty", "state", "dashed", "animation"],
    previewKind: "iframe",
    featured: 0,
    createdAt: ago(4),
    likes: 31,
    views: 280,
    authorIdx: 6,
    prompt: "A premium empty state with a dashed rounded border, a floating Lucide Inbox icon, and a ghost CTA button.",
    code: `import React from 'react';
import { Inbox, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmptyStateDashed() {
  return (
    <div className="flex h-[400px] w-full items-center justify-center p-8 bg-white dark:bg-black">
      <div className="relative group flex w-full max-w-sm flex-col items-center justify-center rounded-[32px] border-2 border-dashed border-ink-200 bg-ink-50/50 p-12 text-center transition-all hover:bg-ink-50 hover:border-violet-400/50 dark:border-ink-800 dark:bg-white/[0.02] dark:hover:border-violet-500/30">
        
        {/* Floating Icon Container */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-ink-900/5 dark:bg-zinc-900 dark:ring-white/10"
        >
          <Inbox className="h-8 w-8 text-violet-500" />
        </motion.div>
        
        <h3 className="mt-6 text-lg font-bold text-ink-900 dark:text-white">No projects found</h3>
        <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
          You haven't created any AI-powered components yet. Start by generating your first variant.
        </p>
        
        <button className="mt-8 flex items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2 text-sm font-bold text-ink-900 shadow-sm transition hover:bg-ink-50 dark:border-ink-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
          <Plus className="h-4 w-4" />
          Create new component
        </button>

        {/* Decorative corner glow on hover */}
        <div className="absolute inset-0 -z-10 bg-gradient-radial from-violet-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </div>
  );
}`,
  },
];
