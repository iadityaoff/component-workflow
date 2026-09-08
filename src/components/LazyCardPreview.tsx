import { useState, useRef, useEffect, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { requestSlot, releaseSlot } from "../lib/previewQueue";

const IDLE_UNLOAD_MS = 30_000;
const LOAD_TIMEOUT_MS = 10_000;

const CSP = [
  "default-src 'none'",
  "script-src 'unsafe-inline' 'self' https://unpkg.com https://cdn.tailwindcss.com",
  "style-src 'unsafe-inline' 'self' https://cdn.tailwindcss.com",
  "img-src data: blob: *",
  "font-src data: *",
].join("; ");

interface Props {
  code: string;
  compiledCode?: string;
  title?: string;
  priority?: number;
}

export function LazyCardPreview({ code, compiledCode, title = "Component", priority = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const unloadTimer = useRef<number | null>(null);
  const safetyTimer = useRef<number | null>(null);
  const hasSlot = useRef(false);

  const [shouldRender, setShouldRender] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [queueReady, setQueueReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (unloadTimer.current) {
            window.clearTimeout(unloadTimer.current);
            unloadTimer.current = null;
          }
          setShouldRender(true);
        } else {
          if (unloadTimer.current) window.clearTimeout(unloadTimer.current);
          unloadTimer.current = window.setTimeout(() => {
            setShouldRender(false);
            setIsLoaded(false);
            setQueueReady(false);
            if (hasSlot.current) {
              releaseSlot();
              hasSlot.current = false;
            }
          }, IDLE_UNLOAD_MS);
        }
      },
      { rootMargin: "400px", threshold: 0 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (unloadTimer.current) window.clearTimeout(unloadTimer.current);
      if (safetyTimer.current) window.clearTimeout(safetyTimer.current);
      if (hasSlot.current) {
        releaseSlot();
        hasSlot.current = false;
      }
    };
  }, []);

  useEffect(() => {
    if (!shouldRender || hasSlot.current) return;
    let cancelled = false;

    requestSlot(priority).then(() => {
      if (cancelled) {
        releaseSlot();
        return;
      }
      hasSlot.current = true;
      setQueueReady(true);
      
      safetyTimer.current = window.setTimeout(() => {
        if (hasSlot.current) {
          releaseSlot();
          hasSlot.current = false;
        }
      }, LOAD_TIMEOUT_MS);
    });

    return () => {
      cancelled = true;
    };
  }, [shouldRender, priority]);

  const srcdoc = useMemo(() => {
    if (!queueReady) return "";

    const nameMatch = code.match(/export\s+(?:default\s+)?function\s+(\w+)/);
    const componentName = nameMatch?.[1] || "Component";

    const cleanCode = code
      .replace(/^import\s+.*?['"];?\s*$/gm, "")
      .replace(/export\s+default\s+function/, "function")
      .replace(/export\s+function/, "function")
      .replace(/<\/script/gi, "<\\/script");

    const renderCall = `
      // Use legacy synchronous ReactDOM.render so the DOM is committed before
      // the iframe's onLoad fires and Tailwind CDN can scan utility classes.
      ReactDOM.render(
        React.createElement('div', { className: 'scale-wrap' },
          React.createElement(${componentName}, {})
        ),
        document.getElementById('root')
      );
    `;

    const injectionScript = `
      // Destructure all commonly-used React hooks as globals so component code
      // can reference them directly after its import statements are stripped.
      const {
        useState, useRef, useEffect, useCallback, useMemo,
        useContext, useReducer, useId, useLayoutEffect, useImperativeHandle,
        forwardRef, createContext, memo, Fragment
      } = React;

      // Expose every Lucide icon as a React component global so compiled code
      // (e.g. React.createElement(ArrowRight, {})) resolves without errors.
      //
      // lucide@0.x UMD exports icons as 3-element arrays:
      //   ["svg", { xmlns, viewBox, stroke, "stroke-width", ... }, children]
      // where children = [["path", {d:"..."}], ["circle", {cx,cy,r}], ...]
      // Attribute names use kebab-case; React needs camelCase.
      (function() {
        function makeIcon(svgAttrs, children) {
          return function LucideIcon(p) {
            p = p || {};
            var attrs = {
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: svgAttrs.viewBox || '0 0 24 24',
              fill: 'none',
              stroke: 'currentColor',
              strokeWidth: p.strokeWidth || 2,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              width: p.size || p.width || 16,
              height: p.size || p.height || 16,
              className: p.className || '',
            };
            var ch = (children || []).map(function(c, i) {
              if (!Array.isArray(c) || !c[0]) return null;
              return React.createElement(c[0], Object.assign({ key: i }, c[1]));
            }).filter(Boolean);
            return React.createElement.apply(React, ['svg', attrs].concat(ch));
          };
        }
        if (window.lucide) {
          Object.keys(window.lucide).forEach(function(k) {
            if (!k || k[0] !== k[0].toUpperCase() || window[k]) return;
            var v = window.lucide[k];
            if (typeof v === 'function') {
              // lucide-react style: already a React component function
              window[k] = v;
            } else if (Array.isArray(v) && v.length === 3 && v[0] === 'svg') {
              // lucide@0.x format: ["svg", {svgAttrs}, [[childTag, childAttrs], ...]]
              window[k] = makeIcon(v[1] || {}, v[2] || []);
            }
          });
        }
      })();

      // Icon utility — supports both component references and string names.
      window.Icon = function({ icon, size, className }) {
        size = size || 16; className = className || '';
        if (!icon) return null;
        if (typeof icon === 'function') return React.createElement(icon, { size: size, className: className });
        var name = String(icon).replace(/[A-Z]/g, function(m) { return '-' + m.toLowerCase(); }).replace(/^-/, '');
        return React.createElement('i', { 'data-lucide': name, style: { width: size, height: size, display: 'inline-block' }, className: className });
      };

      // Keep lucide's data-lucide icons in sync with DOM changes (vanilla — no hooks).
      (function() {
        if (window.lucide) window.lucide.createIcons();
        var obs = new MutationObserver(function() { if (window.lucide) window.lucide.createIcons(); });
        obs.observe(document.body, { childList: true, subtree: true });
      })();
    `;

    const sanitizedCompiledCode = compiledCode
      ? compiledCode
          // Strip ES module imports — the iframe runs UMD globals, not ESM
          .replace(/^import\s+.*?['"];?\s*$/gm, "")
          // Strip exports so functions are plain globals
          .replace(/export\s+default\s+function/g, "function")
          .replace(/export\s+function/g, "function")
          .replace(/export\s+default\s+/g, "")
          .replace(/export\s+\{[^}]*\};?\s*/g, "")
          .replace(/<\/script/gi, "<\\/script")
      : "";

    const scripts = sanitizedCompiledCode
      ? `<script src="https://unpkg.com/lucide@0.473.0/dist/umd/lucide.min.js"></script>
        <script>
          (function() {
            ${injectionScript}
            try {
              ${sanitizedCompiledCode}
              ${renderCall}
            } catch (e) {
              document.body.innerHTML = '<pre style="padding:12px;color:#b91c1c;font:12px ui-monospace">' + String(e) + '</pre>';
            }
          })();
        </script>`
      : `<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
        <script src="https://unpkg.com/lucide@0.473.0/dist/umd/lucide.min.js"></script>
        <script type="text/babel">
          (function() {
            ${injectionScript}
            try {
              ${cleanCode}
              ${renderCall}
            } catch (e) {
              document.body.innerHTML = '<pre style="padding:12px;color:#b91c1c;font:12px ui-monospace">' + String(e) + '</pre>';
            }
          })();
        </script>`;

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Security-Policy" content="${CSP}" />
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      display: flex; align-items: center; justify-content: center;
      min-height: 100vh; padding: 12px; overflow: hidden;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: transparent;
    }
    #root { width: 100%; display: flex; justify-content: center; }
    .scale-wrap { transform: scale(0.65); transform-origin: center center; width: 154%; }
  </style>
</head>
<body>
  <div id="root"></div>
  ${scripts}
</body>
</html>`;
  }, [queueReady, code, compiledCode]);

  const handleFrameLoad = () => {
    setIsLoaded(true);
    if (safetyTimer.current) {
      window.clearTimeout(safetyTimer.current);
      safetyTimer.current = null;
    }
    if (hasSlot.current) {
      releaseSlot();
      hasSlot.current = false;
    }
  };

  return (
    <div
      ref={ref}
      className="relative h-44 w-full overflow-hidden rounded-xl bg-ink-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ErrorBoundary fallback={<PreviewError />}>
        {!shouldRender || !queueReady ? (
          <PremiumPlaceholder pending={shouldRender && !queueReady} />
        ) : (
          <>
            {!isLoaded && <div className="absolute inset-0 z-10 preview-shimmer" />}
            <iframe
              title={`preview-${title}`}
              srcDoc={srcdoc}
              sandbox="allow-scripts"
              loading="lazy"
              className={`h-full w-full border-0 transition-opacity duration-300 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={handleFrameLoad}
              style={{ pointerEvents: isHovered ? "auto" : "none" }}
            />
          </>
        )}
      </ErrorBoundary>
    </div>
  );
}

function PremiumPlaceholder({ pending }: { pending: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-ink-50 dark:bg-ink-900/40">
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-white/80 shadow-sm dark:bg-ink-800">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
        </div>
        <p className="text-[10px] font-medium uppercase tracking-wider text-ink-500">
          {pending ? "Loading…" : "Preview"}
        </p>
      </div>
    </div>
  );
}

function PreviewError() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-ink-50 p-4 text-center">
      <p className="text-xs text-ink-400">Preview Error</p>
    </div>
  );
}
