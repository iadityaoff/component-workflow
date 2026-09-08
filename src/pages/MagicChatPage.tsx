import { useState, useRef, useEffect } from "react";
import {
  SendIcon,
  SparklesIcon,
  LayoutIcon,
  HistoryIcon,
  ArrowRightIcon,
  WandSparklesIcon,
} from "lucide-react";
import { SandpackEngine } from "../components/SandpackEngine";
import { ALL_COMPONENTS } from "../data/components";
import { CATEGORY_BY_SLUG } from "../data/categories";
import { searchRegistry, type SearchMatch } from "../lib/semanticSearch";
import { REGISTRY_COUNT } from "../data/registry";
import { useRoute } from "../lib/router";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  code?: string;
  /** The matched component (if any) so the UI can deep-link to its detail page */
  matchId?: string;
  categorySlug?: string;
  categoryCount?: number;
  /** Alternative matches so the user can swap to a runner-up with one click */
  alternatives?: { id: string; title: string; category: string }[];
}

const SUGGESTIONS = [
  "Dark mode glassmorphism pricing card",
  "Brutalist hero section for a SaaS landing page",
  "Animated testimonial carousel with glow",
  "Minimal sign-in form with gradient button",
  "Neumorphic toggle switch",
  "AI chat bubble with typing indicator",
];

function categoryName(slug: string): string {
  return CATEGORY_BY_SLUG[slug]?.name ?? slug;
}

/**
 * Human-readable assistant reply built from the semantic-search match.
 * Keeps the tone chatty so the feature still reads like an AI, even
 * though the retrieval is deterministic.
 */
function describeMatch(match: SearchMatch, tokens: string[]): string {
  const name = match.item.title;
  const cat = categoryName(match.item.categorySlug);
  const tokenList = tokens.slice(0, 4).join(", ");
  return [
    `I found **"${name}"** in the **${cat}** collection — it's the strongest match for your prompt${tokenList ? ` (keywords: ${tokenList})` : ""}.`,
    `You can preview the live code on the right, tweak it in the editor, or open the full detail page for variants and usage notes.`,
  ].join("\n\n");
}

function describeFallback(query: string): string {
  return [
    `I couldn't find a confident match for *"${query}"* in the ${REGISTRY_COUNT}+ component registry.`,
    `Try adding a category word (pricing, hero, testimonial, card, button, chat) or a style (glassmorphism, brutalist, minimal, neon, gradient).`,
  ].join("\n\n");
}

export function MagicChatPage() {
  const { navigate } = useRoute();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        `Hello! I'm your UI companion wired to the full ${REGISTRY_COUNT}+ component registry. Describe what you want — style, category, or vibe — and I'll pull the best matching component straight into the preview.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const runSearch = (text: string) => {
    const result = searchRegistry(text, ALL_COMPONENTS, { alternatives: 3 });

    // Enforce a strict threshold so weak single-word matches don't dominate
    if (!result.top || result.top.score < 4) {
      return {
        content: describeFallback(text),
        code: undefined,
        matchId: undefined,
        categorySlug: undefined,
        categoryCount: 0,
        alternatives: [] as Message["alternatives"],
      };
    }

    const categorySlug = result.top.item.categorySlug;
    const sameCategoryCount = ALL_COMPONENTS.filter(c => c.categorySlug === categorySlug).length;

    return {
      content: describeMatch(result.top, result.tokens),
      code: result.top.item.code,
      matchId: result.top.item.id,
      categorySlug,
      categoryCount: sameCategoryCount,
      alternatives: result.alternatives.map(a => ({
        id: a.item.id,
        title: a.item.title,
        category: categoryName(a.item.categorySlug),
      })),
    };
  };

  const handleSend = (text: string) => {
    if (!text.trim() || isGenerating) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsGenerating(true);

    // Brief artificial latency so the "thinking" state reads naturally.
    // (The search itself is synchronous and sub-millisecond.)
    window.setTimeout(() => {
      const { content, code, matchId, categorySlug, categoryCount, alternatives } = runSearch(text);
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content,
        code,
        matchId,
        categorySlug,
        categoryCount,
        alternatives,
      };
      setMessages(prev => [...prev, assistantMsg]);
      setIsGenerating(false);
    }, 450);
  };

  /** Pick an alternative match — treat it as if the user re-asked for it. */
  const pickAlternative = (id: string) => {
    const component = ALL_COMPONENTS.find(c => c.id === id);
    if (!component) return;
    const assistantMsg: Message = {
      id: Date.now().toString(),
      role: "assistant",
      content: `Switched to **"${component.title}"** from the **${categoryName(component.categorySlug)}** collection.`,
      code: component.code,
      matchId: component.id,
    };
    setMessages(prev => [...prev, assistantMsg]);
  };

  const activeMessage = [...messages].reverse().find(m => m.code);
  const activeCode = activeMessage?.code;
  const activeMatchId = activeMessage?.matchId;

  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-full overflow-hidden bg-white dark:bg-ink-950">
      {/* Sidebar: History/Suggestions */}
      <aside className="hidden w-80 flex-col border-r border-ink-100 dark:border-ink-800/80 md:flex">
        <div className="p-4 border-b border-ink-100 dark:border-ink-800/80">
          <button
            onClick={() =>
              setMessages([
                {
                  id: "1",
                  role: "assistant",
                  content:
                    "New session started. Describe the component you need and I'll pull it from the registry.",
                },
              ])
            }
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white hover:bg-ink-800 dark:bg-white dark:text-ink-900"
          >
            <SparklesIcon className="h-4 w-4" />
            New Building Session
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-ink-400">
            Prompt History
          </h3>
          <div className="space-y-2">
            {messages
              .filter(m => m.role === "user")
              .map(m => (
                <button
                  key={m.id}
                  onClick={() => handleSend(m.content)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-ink-600 hover:bg-ink-50 dark:text-ink-300 dark:hover:bg-ink-900/50"
                >
                  <HistoryIcon className="h-4 w-4 shrink-0 text-ink-400" />
                  <span className="truncate">{m.content}</span>
                </button>
              ))}
            {messages.filter(m => m.role === "user").length === 0 && (
              <p className="py-4 text-center text-xs text-ink-400">
                No prompt history yet.
              </p>
            )}
          </div>

          <h3 className="mb-4 mt-8 text-xs font-semibold uppercase tracking-widest text-ink-400">
            Inspire Me
          </h3>
          <div className="space-y-2">
            {SUGGESTIONS.map(s => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="w-full rounded-lg border border-ink-100 p-2.5 text-left text-xs text-ink-500 hover:border-ink-200 hover:bg-ink-50 dark:border-ink-800 dark:text-ink-400 dark:hover:bg-ink-900/50"
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-ink-100 bg-gradient-to-br from-violet-50 to-rose-50 p-3 dark:border-ink-800 dark:from-violet-950/30 dark:to-rose-950/30">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink-700 dark:text-ink-200">
              <WandSparklesIcon className="h-3.5 w-3.5 text-violet-500" />
              Semantic Registry Agent
            </div>
            <p className="mt-1.5 text-[11px] leading-relaxed text-ink-500 dark:text-ink-400">
              Searches {ALL_COMPONENTS.length.toLocaleString()} real components by title, tags,
              category and description — no external LLM required.
            </p>
          </div>
        </div>
      </aside>

      {/* Main Builder Area */}
      <main className="flex flex-1 flex-col overflow-hidden">
        <div className="flex-1 flex overflow-hidden">
          {/* Chat Panel */}
          <div className="flex w-full flex-col border-r border-ink-100 dark:border-ink-800/80 md:w-[450px]">
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-6">
              {messages.map(m => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-4 text-sm whitespace-pre-wrap ${
                      m.role === "user"
                        ? "bg-ink-900 text-white dark:bg-white dark:text-ink-900"
                        : "bg-ink-50 text-ink-800 dark:bg-ink-900 dark:text-ink-200"
                    }`}
                  >
                    {renderMarkdownInline(m.content)}

                    {m.matchId && (
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => navigate(`#/component/${m.matchId}`)}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-600 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-300"
                        >
                          Open full detail page
                          <ArrowRightIcon className="h-3 w-3" />
                        </button>
                        
                        {(m.categoryCount || 0) > 1 && m.categorySlug && (
                          <button
                            onClick={() => navigate(`#/?category=${m.categorySlug}`)}
                            className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-2 py-0.5 text-[11px] font-medium text-ink-600 hover:border-ink-300 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300 dark:hover:bg-ink-700"
                          >
                            See {(m.categoryCount || 0) - 1} more variants
                          </button>
                        )}
                      </div>
                    )}

                    {m.alternatives && m.alternatives.length > 0 && (
                      <div className="mt-3 border-t border-ink-200/50 pt-3 dark:border-ink-700/50">
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-ink-400">
                          Other close matches
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {m.alternatives.map(a => (
                            <button
                              key={a.id}
                              onClick={() => pickAlternative(a.id)}
                              title={`${a.title} — ${a.category}`}
                              className="rounded-md border border-ink-200 bg-white px-2 py-1 text-[11px] text-ink-600 hover:border-ink-400 hover:bg-ink-50 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-300 dark:hover:border-ink-500"
                            >
                              {a.title}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isGenerating && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-ink-50 p-4 text-sm dark:bg-ink-900">
                    <div className="flex gap-1.5">
                      <div
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-400"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-400"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="h-1.5 w-1.5 animate-bounce rounded-full bg-ink-400"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-ink-100 dark:border-ink-800/80">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  handleSend(input);
                }}
                className="relative flex items-center gap-2"
              >
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Describe a component (e.g. dark glassmorphism pricing card)"
                  className="h-12 w-full rounded-xl border border-ink-200 bg-ink-50 pl-4 pr-12 text-sm focus:border-ink-400 focus:outline-none focus:ring-2 focus:ring-ink-400/10 dark:border-ink-800 dark:bg-ink-900 dark:text-white"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isGenerating}
                  className="absolute right-1.5 top-1.5 grid h-9 w-9 place-items-center rounded-lg bg-ink-900 text-white transition hover:bg-ink-800 disabled:opacity-50 dark:bg-white dark:text-ink-900"
                >
                  <SendIcon className="h-4 w-4" />
                </button>
              </form>
              <p className="mt-2 text-center text-[10px] text-ink-400 uppercase tracking-widest font-semibold">
                Matches drawn from {ALL_COMPONENTS.length.toLocaleString()} curated components
              </p>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="hidden flex-1 flex-col bg-ink-50/50 dark:bg-ink-950/50 md:flex">
            {activeCode ? (
              <div className="flex-1 p-6 overflow-hidden">
                <div className="h-full w-full rounded-2xl border border-ink-100 bg-white shadow-2xl overflow-hidden dark:border-ink-800 dark:bg-ink-900">
                  <SandpackEngine
                    key={activeMatchId ?? "preview"}
                    code={activeCode}
                    showEditor
                  />
                </div>
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white shadow-lg dark:bg-ink-900">
                  <LayoutIcon className="h-8 w-8 text-ink-300" />
                </div>
                <h3 className="mt-6 font-semibold text-ink-900 dark:text-white">
                  Live Preview Area
                </h3>
                <p className="mt-2 max-w-xs text-sm text-ink-500">
                  Describe a component in the chat and I'll pull the closest match from the
                  registry into this preview.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

/**
 * Very small inline markdown renderer — supports **bold** and *italic*.
 * The search replies only use those two, so we avoid pulling in a full
 * markdown library just for this page.
 */
function renderMarkdownInline(text: string) {
  const segments: Array<string | { type: "bold" | "italic"; text: string }> = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      segments.push({ type: "bold", text: token.slice(2, -2) });
    } else {
      segments.push({ type: "italic", text: token.slice(1, -1) });
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) segments.push(text.slice(lastIndex));

  return segments.map((seg, i) => {
    if (typeof seg === "string") return <span key={i}>{seg}</span>;
    if (seg.type === "bold") return <strong key={i}>{seg.text}</strong>;
    return <em key={i}>{seg.text}</em>;
  });
}
