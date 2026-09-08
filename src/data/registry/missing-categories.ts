/**
 * MISSING CATEGORIES REGISTRY — BATCH 1
 * Covers all 15 previously empty categories with real working components.
 */
import type { VariantSpec } from "./base";
import { ago } from "./base";

// ═══════════════════════════════════════════════════════════════
// AI CHATS
// ═══════════════════════════════════════════════════════════════
export const AI_CHAT_VARIANTS: VariantSpec[] = [
  {
    id: "ai-chat-bubble-01",
    title: "Chat bubble pair",
    description: "User and AI message bubbles with avatar and timestamp.",
    categorySlug: "ai-chats",
    tags: ["chat","ai","message","bubble"],
    previewKind: "button-primary",
    featured: 9, createdAt: ago(1), likes: 4200, views: 52000, authorIdx: 0,
    prompt: "A pair of chat bubbles — one from the user (right-aligned, dark) and one from the AI (left-aligned, light) with avatars and timestamps.",
    code: `export function ChatBubbles() {
  return (
    <div className="mx-auto max-w-lg space-y-4 p-6">
      <div className="flex items-end gap-2">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-violet-500 text-xs font-bold text-white">AI</span>
        <div className="rounded-2xl rounded-bl-md bg-white px-4 py-3 shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <p className="text-sm text-gray-700 dark:text-gray-200">Hello! I can help you build UI components. What would you like to create today?</p>
          <span className="mt-1 block text-[10px] text-gray-400">2:34 PM</span>
        </div>
      </div>
      <div className="flex items-end gap-2 flex-row-reverse">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gray-900 text-xs font-bold text-white dark:bg-white dark:text-gray-900">U</span>
        <div className="rounded-2xl rounded-br-md bg-gray-900 px-4 py-3 text-white dark:bg-white dark:text-gray-900">
          <p className="text-sm">I need a modern pricing table with 3 tiers</p>
          <span className="mt-1 block text-[10px] text-gray-400">2:35 PM</span>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "ai-chat-typing-01",
    title: "AI typing indicator",
    description: "Animated typing dots showing AI is generating a response.",
    categorySlug: "ai-chats",
    tags: ["chat","typing","loading","animation"],
    previewKind: "spinner",
    featured: 7, createdAt: ago(2), likes: 3100, views: 38000, authorIdx: 1,
    prompt: "An AI typing indicator with three animated bouncing dots in a chat bubble.",
    code: `export function TypingIndicator() {
  return (
    <div className="mx-auto max-w-lg p-6">
      <div className="flex items-end gap-2">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-violet-500 text-xs font-bold text-white">AI</span>
        <div className="rounded-2xl rounded-bl-md bg-white px-5 py-4 shadow-sm border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay:'0ms'}} />
            <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay:'150ms'}} />
            <span className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{animationDelay:'300ms'}} />
          </div>
        </div>
      </div>
    </div>
  );
}`,
  },
  {
    id: "ai-chat-input-01",
    title: "Chat input bar",
    description: "Bottom-anchored chat input with send button and attachments.",
    categorySlug: "ai-chats",
    tags: ["chat","input","send","attach"],
    previewKind: "input-search",
    featured: 8, createdAt: ago(1), likes: 3800, views: 44000, authorIdx: 2,
    prompt: "A chat input bar with text field, attachment button, and gradient send button.",
    code: `import { Paperclip } from 'lucide-react';
export function ChatInput() {
  return (
    <div className="mx-auto max-w-lg p-4">
      <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-2 shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <button className="shrink-0 rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700">
          <Paperclip className="h-5 w-5" />
        </button>
        <input className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400" placeholder="Ask AI anything..." />
        <button className="shrink-0 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:brightness-110 transition">
          Send
        </button>
      </div>
    </div>
  );
}`,
  },
  {
    id: "ai-chat-full-01",
    title: "Full chat interface",
    description: "Complete AI chat with message list, typing indicator, and input.",
    categorySlug: "ai-chats",
    tags: ["chat","ai","fullscreen","interface"],
    previewKind: "button-primary",
    featured: 10, createdAt: ago(0), likes: 5200, views: 64000, authorIdx: 3,
    prompt: "A complete AI chat interface with scrollable message history, AI typing indicator, and input bar.",
    code: `import { useState } from 'react';
export function FullChat() {
  const [msg, setMsg] = useState('');
  const messages = [
    { role: 'ai', text: 'Hi! I\\'m your AI assistant. How can I help?' },
    { role: 'user', text: 'Create a responsive navbar component' },
    { role: 'ai', text: 'Sure! Here\\'s a responsive navbar with mobile menu, logo, and navigation links. It uses Tailwind CSS for styling and includes dark mode support.' },
  ];
  return (
    <div className="mx-auto flex h-[400px] max-w-lg flex-col rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3 dark:border-gray-800">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold text-white">AI</span>
        <div><p className="text-sm font-semibold dark:text-white">AI Assistant</p><p className="text-[10px] text-green-500">Online</p></div>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div key={i} className={\`flex \${m.role === 'user' ? 'justify-end' : 'justify-start'}\`}>
            <div className={\`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm \${m.role === 'user' ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200'}\`}>
              {m.text}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 p-3 dark:border-gray-800">
        <div className="flex items-center gap-2 rounded-xl bg-gray-50 px-3 py-2 dark:bg-gray-800">
          <input value={msg} onChange={e => setMsg(e.target.value)} className="flex-1 bg-transparent text-sm outline-none dark:text-white placeholder:text-gray-400" placeholder="Type a message..." />
          <button className="rounded-lg bg-violet-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-violet-600">Send</button>
        </div>
      </div>
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // CAROUSELS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "carousel-image-01",
    title: "Image carousel",
    description: "Horizontal image slider with navigation arrows and dots.",
    categorySlug: "carousels",
    tags: ["carousel","slider","image","gallery"],
    previewKind: "hero-gradient",
    featured: 8, createdAt: ago(2), likes: 3400, views: 41000, authorIdx: 4,
    prompt: "An image carousel with prev/next arrows, dot indicators, and smooth transitions.",
    code: `import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export function ImageCarousel() {
  const [idx, setIdx] = useState(0);
  const slides = [
    { bg: 'from-violet-500 to-fuchsia-500', label: 'Premium Design' },
    { bg: 'from-sky-500 to-cyan-400', label: 'Modern UI Kit' },
    { bg: 'from-amber-500 to-rose-500', label: 'Creative Templates' },
  ];
  const prev = () => setIdx(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx(i => (i + 1) % slides.length);
  return (
    <div className="relative mx-auto max-w-lg overflow-hidden rounded-2xl">
      <div className={\`flex h-48 items-center justify-center bg-gradient-to-br \${slides[idx].bg} transition-all duration-500\`}>
        <p className="text-2xl font-bold text-white">{slides[idx].label}</p>
      </div>
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow backdrop-blur hover:bg-white">
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow backdrop-blur hover:bg-white">
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => <span key={i} onClick={() => setIdx(i)} className={\`h-2 w-2 rounded-full cursor-pointer transition \${i === idx ? 'bg-white w-6' : 'bg-white/50'}\`} />)}
      </div>
    </div>
  );
}`,
  },
  {
    id: "carousel-testimonial-01",
    title: "Testimonial carousel",
    description: "Auto-rotating testimonial quotes with author info.",
    categorySlug: "carousels",
    tags: ["carousel","testimonial","quote","slider"],
    previewKind: "testimonial",
    featured: 7, createdAt: ago(3), likes: 2800, views: 34000, authorIdx: 5,
    prompt: "A testimonial carousel with rotating quotes, star ratings, author photo placeholder, and navigation dots.",
    code: `import { useState } from 'react';
import { Star } from 'lucide-react';
export function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const testimonials = [
    { name: 'Sarah L.', role: 'Designer', text: 'This component library saved us weeks of development time. The quality is outstanding!', stars: 5 },
    { name: 'Mike T.', role: 'Developer', text: 'Best React components I\\'ve used. The Tailwind integration is seamless.', stars: 5 },
    { name: 'Ana R.', role: 'PM', text: 'Our team productivity increased 3x after adopting these components.', stars: 4 },
  ];
  const t = testimonials[idx];
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mb-4 flex justify-center gap-1">
        {Array.from({length: 5}, (_, i) => (
          <Star key={i} className={\`h-5 w-5 \${i < t.stars ? 'fill-amber-400 text-amber-400' : 'text-gray-200 dark:text-gray-700'}\`} />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">"{t.text}"</p>
      <div className="mt-6">
        <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400" />
        <p className="text-sm font-semibold dark:text-white">{t.name}</p>
        <p className="text-xs text-gray-400">{t.role}</p>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((_, i) => <button key={i} onClick={() => setIdx(i)} className={\`h-2 rounded-full transition \${i === idx ? 'w-6 bg-violet-500' : 'w-2 bg-gray-200 dark:bg-gray-700'}\`} />)}
      </div>
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // DATE PICKERS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "date-picker-01",
    title: "Inline date picker",
    description: "Calendar-style date picker with month navigation.",
    categorySlug: "date-pickers",
    tags: ["date","picker","calendar","input"],
    previewKind: "calendar-mini",
    featured: 8, createdAt: ago(2), likes: 3600, views: 43000, authorIdx: 6,
    prompt: "An inline date picker with month/year navigation, weekday headers, and selectable days with hover and active states.",
    code: `import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
export function DatePicker() {
  const [selected, setSelected] = useState(15);
  const days = Array.from({length: 30}, (_, i) => i + 1);
  return (
    <div className="mx-auto w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-4 flex items-center justify-between">
        <button onClick={() => {}} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-semibold dark:text-white">April 2026</span>
        <button onClick={() => {}} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs">
        {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <span key={d} className="py-2 font-medium text-gray-400">{d}</span>)}
        {days.map(d => (
          <button key={d} onClick={() => setSelected(d)} className={\`aspect-square rounded-lg text-sm transition hover:bg-violet-50 dark:hover:bg-gray-800 \${d === selected ? 'bg-violet-500 font-semibold text-white hover:bg-violet-600' : 'text-gray-700 dark:text-gray-300'}\`}>
            {d}
          </button>
        ))}
      </div>
      <div className="mt-3 border-t border-gray-100 pt-3 dark:border-gray-800">
        <p className="text-center text-xs text-gray-500">Selected: April {selected}, 2026</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "date-picker-range-01",
    title: "Date range picker",
    description: "Select a start and end date with visual range highlight.",
    categorySlug: "date-pickers",
    tags: ["date","range","picker","calendar"],
    previewKind: "calendar-mini",
    featured: 7, createdAt: ago(3), likes: 2900, views: 35000, authorIdx: 7,
    prompt: "A date range picker showing a calendar grid with start/end selection and highlighted range between.",
    code: `import { useState } from 'react';
export function DateRangePicker() {
  const [start, setStart] = useState(10);
  const [end, setEnd] = useState(18);
  const days = Array.from({length: 30}, (_, i) => i + 1);
  const inRange = (d: number) => d >= start && d <= end;
  const handleClick = (d: number) => { if (d < start || !start) setStart(d); else setEnd(d); };
  return (
    <div className="mx-auto w-72 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-3 text-center text-sm font-semibold dark:text-white">April 2026</p>
      <div className="grid grid-cols-7 gap-0.5 text-center text-xs">
        {['S','M','T','W','T','F','S'].map(d => <span key={d} className="py-2 font-medium text-gray-400">{d}</span>)}
        {days.map(d => (
          <button key={d} onClick={() => handleClick(d)} className={\`py-2 text-sm transition \${d === start || d === end ? 'rounded-lg bg-violet-500 font-semibold text-white' : inRange(d) ? 'bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg'}\`}>
            {d}
          </button>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-xs dark:bg-gray-800">
        <span className="text-gray-500">Apr {start}</span>
        <span className="text-gray-300"><Icon icon={ArrowRight} size={16} /></span>
        <span className="text-gray-500">Apr {end}</span>
      </div>
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // EMPTY STATES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "empty-no-data-01",
    title: "No data empty state",
    description: "Friendly illustration placeholder when no data exists.",
    categorySlug: "empty-states",
    tags: ["empty","state","no-data","placeholder"],
    previewKind: "button-primary",
    featured: 8, createdAt: ago(1), likes: 2200, views: 28000, authorIdx: 0,
    prompt: "A centered empty state with icon, heading, description, and CTA button for when no data is available.",
    code: `import { Inbox } from 'lucide-react';
export function EmptyNoData() {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-dashed border-gray-200 bg-white p-10 text-center dark:border-gray-700 dark:bg-gray-900">
      <div className="mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-gray-50 text-gray-400 dark:bg-gray-800">
        <Inbox className="h-10 w-10" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">No data yet</h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Get started by creating your first item. It only takes a few seconds.</p>
      <button className="mt-6 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
        Create first item
      </button>
    </div>
  );
}`,
  },
  {
    id: "empty-no-results-01",
    title: "No search results",
    description: "Empty state shown when search yields no matches.",
    categorySlug: "empty-states",
    tags: ["empty","search","no-results","filter"],
    previewKind: "button-primary",
    featured: 7, createdAt: ago(2), likes: 1800, views: 22000, authorIdx: 1,
    prompt: "A search empty state with magnifying glass icon, 'No results found' heading, and suggestion to try different keywords.",
    code: `import { Search } from 'lucide-react';
export function EmptyNoResults() {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center rounded-2xl bg-white p-10 text-center dark:bg-gray-900">
      <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-amber-50 text-amber-500 dark:bg-amber-950/30">
        <Search className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">No results found</h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
      <button className="mt-5 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
        Clear filters
      </button>
    </div>
  );
}`,
  },
  {
    id: "empty-error-01",
    title: "Error empty state",
    description: "Error state with retry action for failed data loading.",
    categorySlug: "empty-states",
    tags: ["empty","error","retry","failed"],
    previewKind: "alert-error",
    featured: 7, createdAt: ago(3), likes: 1600, views: 19000, authorIdx: 2,
    prompt: "An error empty state with warning icon, error message, and retry button.",
    code: `import { AlertTriangle } from 'lucide-react';
export function EmptyError() {
  return (
    <div className="mx-auto flex max-w-sm flex-col items-center rounded-2xl border border-rose-100 bg-rose-50/50 p-10 text-center dark:border-rose-900/30 dark:bg-rose-950/10">
      <div className="mb-4 grid h-16 w-16 place-items-center rounded-full bg-rose-100 text-rose-500 dark:bg-rose-900/30">
        <AlertTriangle className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-semibold text-rose-900 dark:text-rose-300">Something went wrong</h3>
      <p className="mt-2 text-sm text-rose-600/80 dark:text-rose-400/80">We couldn't load the data. Please check your connection and try again.</p>
      <button className="mt-5 rounded-xl bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-600">
        Try again
      </button>
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // FILE TREES
  // ═══════════════════════════════════════════════════════════════
  {
    id: "file-tree-basic-01",
    title: "Basic file tree",
    description: "Collapsible directory tree with file/folder icons.",
    categorySlug: "file-trees",
    tags: ["file","tree","directory","explorer"],
    previewKind: "sidebar-nav",
    featured: 7, createdAt: ago(2), likes: 2400, views: 29000, authorIdx: 3,
    prompt: "A file tree component with collapsible folders, file icons, and indentation.",
    code: `import { useState } from 'react';
import { Folder, FolderOpen, File, Atom, Palette, Package, Settings } from 'lucide-react';
export function FileTree() {
  const [open, setOpen] = useState<Record<string,boolean>>({ src: true, components: true });
  const toggle = (k: string) => setOpen(o => ({...o, [k]: !o[k]}));
  const FolderIcon = ({ name, children }: { name: string; children?: React.ReactNode }) => (
    <div>
      <button onClick={() => toggle(name)} className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-800">
        <span className="text-amber-500">
          {open[name] ? <FolderOpen className="h-4 w-4" /> : <Folder className="h-4 w-4" />}
        </span>
        <span className="font-medium text-gray-700 dark:text-gray-200">{name}</span>
      </button>
      {open[name] && <div className="ml-4 border-l border-gray-200 pl-2 dark:border-gray-700">{children}</div>}
    </div>
  );
  const FileIcon = ({ name, icon }: { name: string; icon: React.ReactNode }) => (
    <div className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 cursor-pointer">
      <span className="shrink-0">{icon}</span>{name}
    </div>
  );
  return (
    <div className="w-64 rounded-2xl border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-900">
      <FolderIcon name="src">
        <FolderIcon name="components">
          <FileIcon name="Button.tsx" icon={<Atom className="h-4 w-4 text-sky-500" />} />
          <FileIcon name="Card.tsx" icon={<Atom className="h-4 w-4 text-sky-500" />} />
          <FileIcon name="Input.tsx" icon={<Atom className="h-4 w-4 text-sky-500" />} />
        </FolderIcon>
        <FileIcon name="App.tsx" icon={<Atom className="h-4 w-4 text-sky-500" />} />
        <FileIcon name="index.css" icon={<Palette className="h-4 w-4 text-rose-500" />} />
      </FolderIcon>
      <FileIcon name="package.json" icon={<Package className="h-4 w-4 text-orange-500" />} />
      <FileIcon name="tsconfig.json" icon={<Settings className="h-4 w-4 text-gray-500" />} />
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // FILE UPLOADS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "file-upload-dropzone-01",
    title: "Drag & drop upload zone",
    description: "Dashed dropzone area with click-to-browse and drag support.",
    categorySlug: "file-uploads",
    tags: ["upload","dropzone","drag","file"],
    previewKind: "file-upload",
    featured: 8, createdAt: ago(1), likes: 3200, views: 39000, authorIdx: 4,
    prompt: "A file upload dropzone with dashed border, cloud icon, drag & drop text, and browse button.",
    code: `import { Cloud } from 'lucide-react';
export function DropzoneUpload() {
  return (
    <div className="mx-auto max-w-md">
      <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/50 p-10 text-center transition hover:border-violet-400 hover:bg-violet-50/30 dark:border-gray-600 dark:bg-gray-800/50 dark:hover:border-violet-500 dark:hover:bg-violet-950/10 cursor-pointer">
        <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-violet-100 text-violet-500 dark:bg-violet-900/30">
          <Cloud className="h-8 w-8" />
        </div>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">Drag & drop files here</p>
        <p className="mt-1 text-xs text-gray-400">or click to browse</p>
        <p className="mt-3 text-[11px] text-gray-400">PNG, JPG, PDF up to 10MB</p>
      </div>
    </div>
  );
}`,
  },
  {
    id: "file-upload-progress-01",
    title: "Upload with progress",
    description: "File upload card showing upload progress with cancel option.",
    categorySlug: "file-uploads",
    tags: ["upload","progress","file","status"],
    previewKind: "progress-bar",
    featured: 7, createdAt: ago(2), likes: 2600, views: 31000, authorIdx: 5,
    prompt: "A file upload card showing file name, size, upload progress bar, and cancel button.",
    code: `import { CheckCircle2, File, X } from 'lucide-react';
export function UploadProgress() {
  return (
    <div className="mx-auto max-w-sm space-y-2">
      {[{name:'design-system.fig',size:'12.4 MB',progress:75},{name:'readme.md',size:'2.1 KB',progress:100}].map(f => (
        <div key={f.name} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-900">
          <span className="shrink-0">
            {f.progress === 100 ? <CheckCircle2 className="h-5 w-5 text-emerald-500" /> : <File className="h-5 w-5 text-gray-400" />}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-200">{f.name}</p>
              <span className="text-[10px] font-medium text-gray-400">{f.progress}%</span>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-gray-100 dark:bg-gray-800">
              <div className={\`h-full rounded-full transition-all \${f.progress === 100 ? 'bg-emerald-500' : 'bg-violet-500'}\`} style={{width: f.progress + '%'}} />
            </div>
          </div>
          {f.progress < 100 && <button className="shrink-0 text-gray-400 hover:text-rose-500 transition-colors"><X className="h-4 w-4" /></button>}
        </div>
      ))}
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // LINKS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "link-underline-01",
    title: "Animated underline links",
    description: "Links with animated underline on hover.",
    categorySlug: "links",
    tags: ["link","underline","animation","hover"],
    previewKind: "button-ghost",
    featured: 6, createdAt: ago(3), likes: 1900, views: 23000, authorIdx: 6,
    prompt: "A set of links with different animated underline styles on hover.",
    code: `export function AnimatedLinks() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-start gap-4 p-6">
      <a href="#" className="group relative text-sm font-medium text-gray-800 dark:text-gray-200">
        Slide-in underline
        <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-violet-500 transition-all group-hover:w-full" />
      </a>
      <a href="#" className="border-b-2 border-transparent text-sm font-medium text-gray-800 transition hover:border-violet-500 dark:text-gray-200">
        Border underline
      </a>
      <a href="#" className="text-sm font-medium text-violet-600 underline decoration-violet-200 decoration-2 underline-offset-4 transition hover:decoration-violet-500 dark:text-violet-400 dark:decoration-violet-800 dark:hover:decoration-violet-400">
        Decorative underline
      </a>
      <a href="#" className="text-sm font-medium text-gray-800 decoration-wavy underline-offset-4 hover:underline dark:text-gray-200">
        Wavy hover underline
      </a>
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // MENUS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "menu-context-01",
    title: "Context menu",
    description: "Right-click style context menu with icons and shortcuts.",
    categorySlug: "menus",
    tags: ["menu","context","right-click","dropdown"],
    previewKind: "dropdown-menu",
    featured: 7, createdAt: ago(2), likes: 2700, views: 33000, authorIdx: 7,
    prompt: "A context menu with grouped items, keyboard shortcuts, icons, and dividers.",
    code: `import { Scissors, Clipboard, Pin, CheckSquare, Trash2 } from 'lucide-react';
export function ContextMenu() {
  const items = [
    { label: 'Cut', shortcut: '⌘X', icon: <Scissors className="h-4 w-4" /> },
    { label: 'Copy', shortcut: '⌘C', icon: <Clipboard className="h-4 w-4" /> },
    { label: 'Paste', shortcut: '⌘V', icon: <Pin className="h-4 w-4" /> },
    null,
    { label: 'Select All', shortcut: '⌘A', icon: <CheckSquare className="h-4 w-4" /> },
    null,
    { label: 'Delete', shortcut: '⌫', icon: <Trash2 className="h-4 w-4" />, danger: true },
  ];
  return (
    <div className="mx-auto w-56 rounded-xl border border-gray-200 bg-white py-1.5 shadow-lg dark:border-gray-700 dark:bg-gray-900">
      {items.map((item, i) =>
        item === null ? <div key={i} className="my-1 border-t border-gray-100 dark:border-gray-800" /> :
        <button key={i} className={\`flex w-full items-center gap-3 px-3 py-2 text-sm transition hover:bg-gray-100 dark:hover:bg-gray-800 \${(item as any).danger ? 'text-rose-600' : 'text-gray-700 dark:text-gray-200'}\`}>
          <span className="shrink-0">{(item as any).icon}</span>
          <span className="flex-1 text-left">{(item as any).label}</span>
          <span className="text-[11px] text-gray-400">{(item as any).shortcut}</span>
        </button>
      )}
    </div>
  );
}`,
  },
  {
    id: "menu-action-01",
    title: "Action menu",
    description: "Floating action menu with grouped options.",
    categorySlug: "menus",
    tags: ["menu","action","floating","options"],
    previewKind: "dropdown-menu",
    featured: 6, createdAt: ago(3), likes: 2100, views: 26000, authorIdx: 0,
    prompt: "A floating action menu with icon buttons for common actions like edit, share, bookmark, and delete.",
    code: `import { Edit2, Link2, Bookmark, Trash2 } from 'lucide-react';
export function ActionMenu() {
  const actions = [
    { icon: <Edit2 className="h-4 w-4" />, label: 'Edit', color: 'hover:bg-sky-50 hover:text-sky-600 dark:hover:bg-sky-950/30' },
    { icon: <Link2 className="h-4 w-4" />, label: 'Share', color: 'hover:bg-violet-50 hover:text-violet-600 dark:hover:bg-violet-950/30' },
    { icon: <Bookmark className="h-4 w-4" />, label: 'Save', color: 'hover:bg-amber-50 hover:text-amber-600 dark:hover:bg-amber-950/30' },
    { icon: <Trash2 className="h-4 w-4" />, label: 'Delete', color: 'hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/30' },
  ];
  return (
    <div className="mx-auto w-48 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-900">
      {actions.map(a => (
        <button key={a.label} className={\`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 transition dark:text-gray-300 \${a.color}\`}>
          <span className="shrink-0">{a.icon}</span>{a.label}
        </button>
      ))}
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // NUMBERS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "number-counter-01",
    title: "Animated counter",
    description: "Number counter with increment/decrement buttons.",
    categorySlug: "numbers",
    tags: ["number","counter","increment","stepper"],
    previewKind: "button-sizes",
    featured: 6, createdAt: ago(3), likes: 1800, views: 22000, authorIdx: 1,
    prompt: "A number counter component with minus/plus buttons and animated digit display.",
    code: `import { useState } from 'react';
export function NumberCounter() {
  const [count, setCount] = useState(5);
  return (
    <div className="mx-auto flex items-center gap-1 rounded-2xl border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-900">
      <button onClick={() => setCount(c => Math.max(0, c - 1))} className="grid h-10 w-10 place-items-center rounded-xl text-lg font-medium text-gray-500 transition hover:bg-gray-100 dark:hover:bg-gray-800">−</button>
      <span className="w-14 text-center text-xl font-bold tabular-nums text-gray-900 dark:text-white">{count}</span>
      <button onClick={() => setCount(c => c + 1)} className="grid h-10 w-10 place-items-center rounded-xl text-lg font-medium text-gray-500 transition hover:bg-gray-100 dark:hover:bg-gray-800">+</button>
    </div>
  );
}`,
  },
  {
    id: "number-stats-row-01",
    title: "Stats row",
    description: "Horizontal stat cards showing key metrics.",
    categorySlug: "numbers",
    tags: ["stats","metrics","numbers","kpi"],
    previewKind: "card-stat",
    featured: 8, createdAt: ago(1), likes: 3400, views: 41000, authorIdx: 2,
    prompt: "A row of stat cards showing KPIs with labels, values, and trend indicators.",
    code: `export function StatsRow() {
  const stats = [
    { label: 'Revenue', value: '$48.2k', delta: '+12.4%', up: true },
    { label: 'Users', value: '2,847', delta: '+8.1%', up: true },
    { label: 'Bounce Rate', value: '24.3%', delta: '-3.2%', up: false },
  ];
  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map(s => (
        <div key={s.label} className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400">{s.label}</p>
          <p className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{s.value}</p>
          <span className={\`mt-1 inline-block text-xs font-semibold \${s.up ? 'text-emerald-500' : 'text-rose-500'}\`}>{s.delta}</span>
        </div>
      ))}
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // POPOVERS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "popover-info-01",
    title: "Info popover",
    description: "Tooltip-like popover with rich content on click.",
    categorySlug: "popovers",
    tags: ["popover","info","tooltip","panel"],
    previewKind: "tooltip",
    featured: 7, createdAt: ago(2), likes: 2300, views: 28000, authorIdx: 3,
    prompt: "An info popover that appears on button click with header, description, and action links.",
    code: `import { useState } from 'react';
export function InfoPopover() {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative mx-auto flex justify-center py-16">
      <button onClick={() => setOpen(!open)} className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-gray-900">
        Show info
      </button>
      {open && (
        <div className="absolute top-full mt-2 w-72 rounded-xl border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-900">
          <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900" />
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Component Info</h4>
          <p className="mt-1.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">This component supports dark mode, responsive layouts, and custom themes. Click to learn more.</p>
          <div className="mt-3 flex gap-2">
            <button className="rounded-lg bg-violet-500 px-3 py-1.5 text-xs font-medium text-white hover:bg-violet-600">Learn more</button>
            <button onClick={() => setOpen(false)} className="rounded-lg px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">Dismiss</button>
          </div>
        </div>
      )}
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // SIDEBARS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "sidebar-dashboard-01",
    title: "Dashboard sidebar",
    description: "Full-height sidebar with logo, nav groups, and user avatar.",
    categorySlug: "sidebars",
    tags: ["sidebar","navigation","dashboard","menu"],
    previewKind: "sidebar-nav",
    featured: 9, createdAt: ago(1), likes: 4200, views: 51000, authorIdx: 4,
    prompt: "A full-height dashboard sidebar with logo, grouped navigation items with icons, active state, and user profile at the bottom.",
    code: `import { Home, BarChart2, Users, FileText, Image, MessageSquare } from 'lucide-react';
export function DashboardSidebar() {
  const navItems = [
    { group: 'Main', items: [{ icon: <Home className="h-4 w-4" />, label: 'Dashboard', active: true }, { icon: <BarChart2 className="h-4 w-4" />, label: 'Analytics' }, { icon: <Users className="h-4 w-4" />, label: 'Users' }] },
    { group: 'Content', items: [{ icon: <FileText className="h-4 w-4" />, label: 'Posts' }, { icon: <Image className="h-4 w-4" />, label: 'Media' }, { icon: <MessageSquare className="h-4 w-4" />, label: 'Comments' }] },
  ];
  return (
    <div className="flex h-[420px] w-56 flex-col rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-4 dark:border-gray-800">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 text-sm font-bold text-white">A</span>
        <span className="text-sm font-semibold dark:text-white">Acme Inc</span>
      </div>
      <nav className="flex-1 overflow-y-auto p-3">
        {navItems.map(g => (
          <div key={g.group} className="mb-4">
            <p className="mb-1 px-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">{g.group}</p>
            {g.items.map(item => (
              <button key={item.label} className={\`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm transition \${(item as any).active ? 'bg-violet-50 font-medium text-violet-700 dark:bg-violet-950/30 dark:text-violet-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'}\`}>
                <span className="shrink-0">{item.icon}</span>{item.label}
              </button>
            ))}
          </div>
        ))}
      </nav>
      <div className="border-t border-gray-100 p-3 dark:border-gray-800">
        <div className="flex items-center gap-2 rounded-xl px-2 py-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-rose-400" />
          <div><p className="text-xs font-medium dark:text-white">John Doe</p><p className="text-[10px] text-gray-400">Admin</p></div>
        </div>
      </div>
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // TEXT AREAS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "textarea-basic-01",
    title: "Basic textarea",
    description: "Standard textarea with label, placeholder, and character count.",
    categorySlug: "text-areas",
    tags: ["textarea","input","text","form"],
    previewKind: "input-floating",
    featured: 6, createdAt: ago(3), likes: 1700, views: 21000, authorIdx: 5,
    prompt: "A textarea with floating label, character count, and focus ring.",
    code: `import { useState } from 'react';
export function BasicTextarea() {
  const [val, setVal] = useState('');
  const max = 280;
  return (
    <div className="mx-auto max-w-sm">
      <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
      <textarea value={val} onChange={e => setVal(e.target.value)} maxLength={max} rows={4} placeholder="Type your message here..."
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-violet-900/30 placeholder:text-gray-400 resize-none" />
      <p className={\`mt-1 text-right text-xs \${val.length > max * 0.9 ? 'text-rose-500' : 'text-gray-400'}\`}>{val.length}/{max}</p>
    </div>
  );
}`,
  },
  {
    id: "textarea-markdown-01",
    title: "Markdown editor",
    description: "Rich textarea with markdown formatting toolbar.",
    categorySlug: "text-areas",
    tags: ["textarea","markdown","editor","formatting"],
    previewKind: "code-block",
    featured: 8, createdAt: ago(1), likes: 3100, views: 37000, authorIdx: 6,
    prompt: "A markdown text editor with formatting toolbar buttons for bold, italic, code, link, and list.",
    code: `import { useState } from 'react';
import { Bold, Italic, Code, Link2, List } from 'lucide-react';
export function MarkdownEditor() {
  const [text, setText] = useState('# Hello World\\n\\nStart writing **markdown** here...');
  const tools = [
    { icon: <Bold className="h-4 w-4" />, label: 'Bold', style: 'font-bold text-ink-900 dark:text-white' },
    { icon: <Italic className="h-4 w-4" />, label: 'Italic', style: 'italic text-ink-900 dark:text-white' },
    { icon: <Code className="h-4 w-4" />, label: 'Code', style: 'font-mono text-ink-900 dark:text-white' },
    { icon: <Link2 className="h-4 w-4" />, label: 'Link', style: '' },
    { icon: <List className="h-4 w-4" />, label: 'List', style: '' },
  ];
  return (
    <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="flex items-center gap-1 border-b border-gray-100 px-3 py-2 dark:border-gray-800">
        {tools.map(t => (
          <button key={t.label} title={t.label} className={\`grid h-8 w-8 place-items-center rounded-lg text-xs text-gray-500 transition hover:bg-gray-100 dark:hover:bg-gray-800 \${t.style}\`}>{t.icon}</button>
        ))}
      </div>
      <textarea value={text} onChange={e => setText(e.target.value)} rows={6}
        className="w-full resize-none bg-transparent px-4 py-3 font-mono text-sm outline-none dark:text-white placeholder:text-gray-400" />
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // TOASTS (as components, not the notification system)
  // ═══════════════════════════════════════════════════════════════
  {
    id: "toast-success-01",
    title: "Success toast",
    description: "Floating success notification with icon and dismiss.",
    categorySlug: "toasts",
    tags: ["toast","notification","success","feedback"],
    previewKind: "alert-success",
    featured: 7, createdAt: ago(2), likes: 2500, views: 30000, authorIdx: 7,
    prompt: "A floating success toast notification with green check icon, message, and close button.",
    code: `import { Check, X } from 'lucide-react';
export function SuccessToast() {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 shadow-lg dark:border-emerald-900 dark:bg-emerald-950/40">
      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
        <Check className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-emerald-900 dark:text-emerald-200">Success!</p>
        <p className="text-xs text-emerald-700/70 dark:text-emerald-400/70">Your changes have been saved.</p>
      </div>
      <button className="shrink-0 text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-200 transition-colors">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}`,
  },
  {
    id: "toast-action-01",
    title: "Action toast",
    description: "Toast with undo action button.",
    categorySlug: "toasts",
    tags: ["toast","undo","action","notification"],
    previewKind: "alert-info",
    featured: 7, createdAt: ago(3), likes: 2200, views: 27000, authorIdx: 0,
    prompt: "A neutral toast notification with message and an undo action button.",
    code: `import { Trash2 } from 'lucide-react';
export function ActionToast() {
  return (
    <div className="mx-auto flex max-w-sm items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
        <Trash2 className="h-4 w-4" />
      </span>
      <p className="flex-1 text-sm text-gray-700 dark:text-gray-300">Item deleted successfully</p>
      <button className="shrink-0 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">Undo</button>
    </div>
  );
}`,
  },

  // ═══════════════════════════════════════════════════════════════
  // ICONS
  // ═══════════════════════════════════════════════════════════════
  {
    id: "icon-grid-01",
    title: "Icon showcase grid",
    description: "Grid of icons with labels and copy-on-click.",
    categorySlug: "icons",
    tags: ["icon","grid","showcase","display"],
    previewKind: "badge-row",
    featured: 6, createdAt: ago(3), likes: 1600, views: 20000, authorIdx: 1,
    prompt: "A grid of commonly used icons with labels, displayed in a clean card layout.",
    code: `import { Home, Settings, MessageSquare, Bell, BarChart2, User, Folder, Search, Heart, Star, Mail, Lock } from 'lucide-react';
export function IconGrid() {
  const icons = [
    { icon: <Home className="h-6 w-6" />, name: 'Home' }, 
    { icon: <Settings className="h-6 w-6" />, name: 'Settings' },
    { icon: <MessageSquare className="h-6 w-6" />, name: 'Chat' }, 
    { icon: <Bell className="h-6 w-6" />, name: 'Alerts' },
    { icon: <BarChart2 className="h-6 w-6" />, name: 'Charts' }, 
    { icon: <User className="h-6 w-6" />, name: 'User' },
    { icon: <Folder className="h-6 w-6" />, name: 'Files' }, 
    { icon: <Search className="h-6 w-6" />, name: 'Search' },
    { icon: <Heart className="h-6 w-6" />, name: 'Heart' }, 
    { icon: <Star className="h-6 w-6" />, name: 'Star' },
    { icon: <Mail className="h-6 w-6" />, name: 'Email' }, 
    { icon: <Lock className="h-6 w-6" />, name: 'Lock' },
  ];
  return (
    <div className="grid grid-cols-4 gap-2 p-2">
      {icons.map(i => (
        <button key={i.name} className="flex flex-col items-center gap-1.5 rounded-xl border border-gray-100 bg-white p-3 transition hover:border-violet-200 hover:bg-violet-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-800 dark:hover:bg-violet-950/20">
          <span className="text-violet-500">{i.icon}</span>
          <span className="text-[10px] text-gray-500">{i.name}</span>
        </button>
      ))}
    </div>
  );
}`,
  },
];
