import { useState, useLayoutEffect } from "react";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeViewer,
  SandpackPreview,
} from "@codesandbox/sandpack-react";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";
import { Moon, Sun } from "lucide-react";
import { Icon as UIIcon } from "./ui/Icon";

interface Props {
  code: string;
  showEditor?: boolean;
}

function SandpackEngineFallback({ error }: FallbackProps) {
  const err = error instanceof Error ? error : new Error(String(error));
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-rose-200 bg-rose-50/50 p-6 text-center dark:border-rose-900/50 dark:bg-rose-950/20">
      <span className="mb-2 grid h-8 w-8 place-items-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400">
        !
      </span>
      <p className="text-sm font-semibold text-rose-900 dark:text-rose-300">
        Execution Failed
      </p>
      <p className="mt-1 text-xs text-rose-700/80 dark:text-rose-400/80">
        Review your code structure or check dependencies.
      </p>
      <p className="mt-3 font-mono text-[9px] text-rose-500 opacity-70 break-all">
        {err.message}
      </p>
    </div>
  );
}

/**
 * Build the App.tsx wrapper that:
 *  1. Configures Tailwind via the global `tailwind` object
 *  2. Applies `dark` class to <html> if localTheme is dark
 *  3. Injects Icon and Lucide mock globals (Fixes "Icon is not defined")
 *  4. Imports the user Component and renders it with safe dummy props
 */
function getAppCode(isDark: boolean) {
  return `
import React from 'react';
import * as Module from './Component';

// ── Configure Tailwind (loaded via externalResources CDN) ──
if (typeof window !== 'undefined' && window.tailwind) {
  window.tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          ink: {
            50: '#f7f7f8', 100: '#ececee', 200: '#d9d9de', 300: '#b9b9c1',
            400: '#8d8d97', 500: '#6b6b75', 600: '#4f4f57', 700: '#3a3a40',
            800: '#222227', 900: '#141418', 950: '#0a0a0d',
          }
        }
      }
    }
  };
}

// ── Injected Globals for Registry Components ──
if (typeof window !== 'undefined') {
  // Mock Lucide Icons (passed as strings to our Icon primitive)
  const MOCK_LUCIDE = "Check,ArrowRight,ArrowLeft,ArrowUp,ArrowDown,AlertTriangle,Info,X,Folder,PartyPopper,Zap,Palette,Package,Lock,Flower,Sparkles,Rocket,BarChart,Target,MessageCircle,Rainbow,User,Laptop,Bot,Gift,Settings,Users,Mail,Link,Home,CheckCircle,Search,Menu,Bell,Heart,Eye,ExternalLink,FileText,Smartphone,Tablet,Monitor,MousePointer2,Accessibility,Moon,Sun,Calendar,ChevronDown,ChevronUp,ChevronLeft,ChevronRight,MoreHorizontal,MoreVertical,Plus,Minus,Trash2,Edit,Copy,Download,Share2,Github,Twitter,Chrome".split(',');
  MOCK_LUCIDE.forEach(name => {
    window[name] = name;
  });

  // The Icon primitive used in 21st.dev registry components
  window.Icon = ({ icon, size = 16, className = '' }) => {
    // Convert CamelCase to kebab-case for lucide.createIcons()
    const name = typeof icon === 'string' 
      ? icon.replace(/[A-Z]/g, m => '-' + m.toLowerCase()).replace(/^-/, '') 
      : 'circle';
    
    return React.createElement('i', { 
      'data-lucide': name, 
      style: { width: size, height: size, display: 'inline-block' }, 
      className 
    });
  };
}

// ── Apply dark class to root element ──
if (typeof document !== 'undefined') {
  document.documentElement.classList.${isDark ? "add" : "remove"}('dark');
  document.body.style.margin = '0';
  document.body.style.display = 'flex';
  document.body.style.alignItems = 'center';
  document.body.style.justifyContent = 'center';
  document.body.style.minHeight = '100vh';
  document.body.style.backgroundColor = '${isDark ? "#0a0a0d" : "transparent"}';
  document.body.style.padding = '16px';
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("Preview Render Error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{display:'flex',height:'100%',width:'100%',alignItems:'center',justifyContent:'center',padding:'16px',textAlign:'center'}}>
          <div style={{maxWidth:'320px',background:'#fff1f2',padding:'16px',borderRadius:'12px',border:'1px solid #fecdd3',boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)'}}>
            <p style={{fontSize:'13px',fontWeight:'600',color:'#b91c1c',marginBottom:'4px'}}>Render Error</p>
            <p style={{fontSize:'12px',color:'#e11d48',fontFamily:'ui-monospace'}}>
              {this.state.error?.message}
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const exports = Object.values(Module);
  const Component = exports.find(x => typeof x === 'function' || (typeof x === 'object' && x !== null));

  React.useEffect(() => {
    // Initial Lucide icon generation
    if (window.lucide) window.lucide.createIcons();
    
    // Observer to re-run lucide on DOM changes (e.g. if component mounts icons later)
    const observer = new MutationObserver(() => {
      if (window.lucide) window.lucide.createIcons();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  if (!Component) {
    return (
      <div style={{display:'flex',height:'100%',alignItems:'center',justifyContent:'center',fontSize:'12px',color:'#6b6b75'}}>
        No valid React component exported.
      </div>
    );
  }

  const dummyProps = {
    name: "Pro Tier",
    price: "$29",
    features: ["Unlimited projects", "Priority support", "Analytics"],
    label: "Monthly recurring",
    value: "$48,210",
    delta: "+12.4%",
    title: "Success",
    body: "Action completed successfully.",
    message: "A new message arrived.",
    time: "2m ago",
    icon: "PartyPopper",
    loading: false,
    checked: true,
    onChange: () => {}
  };

  return (
    <ErrorBoundary>
      <div style={{width:'100%', display:'flex', justifyContent:'center'}}>
        <Component {...dummyProps} />
      </div>
    </ErrorBoundary>
  );
}
`;
}

export function SandpackEngine({ code, showEditor = false }: Props) {
  const [mounted, setMounted] = useState(false);
  const [localTheme, setLocalTheme] = useState<'light' | 'dark'>('light');

  useLayoutEffect(() => {
    let frameId: number;
    frameId = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  if (!mounted) {
    return (
      <div className="preview-grid-bg flex h-full min-h-[11rem] w-full items-center justify-center overflow-hidden rounded-xl bg-ink-50 dark:bg-ink-900/60 skeleton" />
    );
  }

  return (
    <ErrorBoundary FallbackComponent={SandpackEngineFallback}>
      <div className="group relative w-full h-full overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm dark:border-ink-800 dark:bg-ink-950 flex flex-col">
        {/* Local Theme Toggle */}
        <button
          onClick={() => setLocalTheme(t => t === 'light' ? 'dark' : 'light')}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-surface-1 border border-ink-100 shadow-sm backdrop-blur transition hover:bg-ink-50 dark:bg-ink-900/80 dark:border-ink-800 dark:hover:bg-ink-900 focus-visible:ring-2 focus-visible:ring-violet-500 outline-none"
          title="Toggle component theme"
        >
          <UIIcon icon={localTheme === 'dark' ? Sun : Moon} size={16} />
        </button>

        <SandpackProvider
          key={localTheme}
          template="react-ts"
          theme="auto"
          files={{
            "/App.tsx": { code: getAppCode(localTheme === 'dark'), hidden: true },
            "/Component.tsx": { code, active: true },
          }}
          customSetup={{
            dependencies: {
              "framer-motion": "latest",
              "lucide-react": "latest",
            },
          }}
          options={{
            externalResources: [
              "https://cdn.tailwindcss.com",
              "https://unpkg.com/lucide@0.473.0/dist/umd/lucide.min.js",
            ],
          }}
          className="h-full w-full flex-1"
        >
          <SandpackLayout className="h-full w-full !border-0 bg-transparent flex">
            {showEditor && (
              <SandpackCodeViewer />
            )}
            <SandpackPreview
              showSandpackErrorOverlay={false}
              showOpenInCodeSandbox={false}
              showRefreshButton={false}
              className="flex-1 h-full min-h-[11rem] preview-grid-bg"
            />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </ErrorBoundary>
  );
}
