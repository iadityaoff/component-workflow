import React, { useState } from "react";
import { Bug, Search, Upload, AlertCircle, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Icon } from "../components/ui/Icon";
import { useToast } from "../components/Toast";

export function DesignBugBotPage() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const { toast } = useToast();

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      setScanned(true);
      toast("success", "Scan complete. 3 issues found.");
    }, 2000);
  };

  return (
    <div className="flex h-full min-h-[calc(100vh-56px)] flex-col bg-[var(--uf-bg)] page-enter">
      {/* Header */}
      <div className="border-b border-[var(--uf-border)] bg-[var(--uf-panel)] py-12 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-500 to-orange-500 shadow-xl shadow-rose-500/20 border border-white/10">
            <Icon icon={Bug} size={28} className="text-white" />
          </div>
          <h1 className="text-3xl font-black text-[var(--uf-text)] sm:text-4xl">
            Design Bug Bot
          </h1>
          <p className="mt-4 text-[var(--uf-text-secondary)]">
            AI-powered QA for your UI. Enter your localhost or production URL and we'll flag contrast issues, layout shifts, and inconsistent padding.
          </p>
          
          <form onSubmit={handleScan} className="mt-8 flex max-w-xl mx-auto gap-2">
            <div className="relative flex-1">
              <Icon icon={Search} size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--uf-text-muted)]" />
              <input 
                type="url" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://localhost:3000"
                className="h-12 w-full rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel-2)] pl-11 pr-4 text-sm text-[var(--uf-text)] placeholder-[var(--uf-text-muted)] focus:border-[var(--uf-accent)] focus:outline-none transition"
              />
            </div>
            <button 
              type="submit"
              disabled={scanning || !url}
              className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--uf-text)] px-6 font-bold text-[var(--uf-bg)] hover:bg-[var(--uf-text-secondary)] transition disabled:opacity-50"
            >
              {scanning ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--uf-bg)] border-r-transparent" />
              ) : (
                <>Scan <Icon icon={ArrowRight} size={16} /></>
              )}
            </button>
          </form>
          <div className="mt-4">
            <button className="text-xs font-medium text-[var(--uf-text-muted)] hover:text-[var(--uf-text)] flex items-center justify-center gap-2 mx-auto">
              <Icon icon={Upload} size={14} />
              Or upload a screenshot
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {!scanned && !scanning && (
          <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--uf-border)] border-dashed p-12 text-center text-[var(--uf-text-muted)]">
            <Icon icon={Bug} size={48} className="mx-auto mb-4 opacity-20" />
            <p>Enter a URL above to start the automated design QA.</p>
          </div>
        )}

        {scanning && (
          <div className="mx-auto max-w-4xl py-20 text-center">
            <div className="relative mx-auto h-24 w-24">
              <div className="absolute inset-0 animate-ping rounded-full border border-rose-500/50" />
              <div className="absolute inset-2 animate-ping rounded-full border border-rose-500/30 animation-delay-150" />
              <div className="absolute inset-4 animate-ping rounded-full border border-rose-500/10 animation-delay-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon icon={Search} size={32} className="text-rose-500 animate-pulse" />
              </div>
            </div>
            <p className="mt-6 text-sm font-bold text-[var(--uf-text)]">Analyzing DOM elements...</p>
            <p className="mt-1 text-xs text-[var(--uf-text-muted)]">Checking color contrast and padding consistency</p>
          </div>
        )}

        {scanned && (
          <div className="mx-auto max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-[var(--uf-text)]">Scan Results for {url}</h2>
              <button className="flex items-center gap-2 rounded-lg bg-[var(--uf-accent)] px-4 py-2 text-sm font-bold text-white hover:bg-[var(--uf-accent-hover)] transition shadow-lg shadow-[var(--uf-accent)]/20">
                <Icon icon={Zap} size={16} />
                Apply Fixes via CLI
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Original Preview */}
              <div className="flex flex-col rounded-2xl border border-rose-500/30 bg-[var(--uf-panel)] overflow-hidden">
                <div className="bg-rose-500/10 px-4 py-2 border-b border-rose-500/20 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-rose-500" />
                  <span className="text-xs font-bold text-rose-500 uppercase tracking-wider">Original (3 Issues)</span>
                </div>
                <div className="p-8 flex-1 bg-[var(--uf-panel-2)] relative">
                  {/* Mock UI with issues */}
                  <div className="max-w-sm mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden relative">
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                      <span className="font-semibold text-slate-800">Dashboard</span>
                      <div className="h-6 w-6 rounded bg-slate-100" />
                    </div>
                    
                    {/* Issue 1: Contrast */}
                    <div className="p-4 relative group">
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold z-10 shadow-lg ring-2 ring-[var(--uf-panel-2)]">1</div>
                      <p className="text-sm text-slate-400">Total Revenue</p>
                      <p className="text-2xl font-bold text-slate-800">$12,450</p>
                    </div>
                    
                    {/* Issue 2: Padding */}
                    <div className="px-6 py-2 border-t border-slate-100 relative group">
                      <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs font-bold z-10 shadow-lg ring-2 ring-[var(--uf-panel-2)]">2</div>
                      <button className="bg-blue-600 text-white rounded px-3 py-1 text-sm w-full">View Details</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fixed Preview */}
              <div className="flex flex-col rounded-2xl border border-emerald-500/30 bg-[var(--uf-panel)] overflow-hidden">
                <div className="bg-emerald-500/10 px-4 py-2 border-b border-emerald-500/20 flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">Fixed</span>
                </div>
                <div className="p-8 flex-1 bg-[var(--uf-panel-2)]">
                  {/* Mock UI Fixed */}
                  <div className="max-w-sm mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                      <span className="font-semibold text-slate-800">Dashboard</span>
                      <div className="h-8 w-8 rounded-full bg-slate-100" />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium text-slate-500">Total Revenue</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">$12,450</p>
                    </div>
                    <div className="p-4 border-t border-slate-100">
                      <button className="bg-blue-600 font-medium text-white rounded-lg px-4 py-2 text-sm w-full hover:bg-blue-700 transition">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Issue List */}
            <div className="mt-8 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] overflow-hidden">
              <div className="divide-y divide-[var(--uf-border)]">
                <div className="p-4 flex items-start gap-4">
                  <div className="shrink-0 mt-0.5 h-6 w-6 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center font-bold text-xs">1</div>
                  <div>
                    <h4 className="font-bold text-[var(--uf-text)] flex items-center gap-2">
                      Low Contrast <span className="rounded bg-rose-500/20 px-1.5 py-0.5 text-[10px] text-rose-500">WCAG 2.1</span>
                    </h4>
                    <p className="text-sm text-[var(--uf-text-secondary)] mt-1">The text color <code className="text-xs text-rose-400">text-slate-400</code> on white background has a contrast ratio of 3.2:1. Required is 4.5:1.</p>
                    <p className="text-sm text-[var(--uf-text)] font-medium mt-2 flex items-center gap-2">
                      <Icon icon={ArrowRight} size={14} className="text-emerald-500" /> Fix: Change to <code className="text-xs text-emerald-400">text-slate-500</code>
                    </p>
                  </div>
                </div>
                <div className="p-4 flex items-start gap-4">
                  <div className="shrink-0 mt-0.5 h-6 w-6 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center font-bold text-xs">2</div>
                  <div>
                    <h4 className="font-bold text-[var(--uf-text)] flex items-center gap-2">
                      Inconsistent Padding
                    </h4>
                    <p className="text-sm text-[var(--uf-text-secondary)] mt-1">The bottom section has <code className="text-xs">px-6 py-2</code> which breaks the established <code className="text-xs">p-4</code> grid from the upper section.</p>
                    <p className="text-sm text-[var(--uf-text)] font-medium mt-2 flex items-center gap-2">
                      <Icon icon={ArrowRight} size={14} className="text-emerald-500" /> Fix: Normalize to <code className="text-xs text-emerald-400">p-4</code>
                    </p>
                  </div>
                </div>
                <div className="p-4 flex items-start gap-4">
                  <div className="shrink-0 mt-0.5 h-6 w-6 rounded-full bg-rose-500/20 text-rose-500 flex items-center justify-center font-bold text-xs">3</div>
                  <div>
                    <h4 className="font-bold text-[var(--uf-text)] flex items-center gap-2">
                      Click Target Size
                    </h4>
                    <p className="text-sm text-[var(--uf-text-secondary)] mt-1">The top right icon placeholder is 24x24px, which is below the recommended 44x44px tap target size.</p>
                    <p className="text-sm text-[var(--uf-text)] font-medium mt-2 flex items-center gap-2">
                      <Icon icon={ArrowRight} size={14} className="text-emerald-500" /> Fix: Increase dimensions to <code className="text-xs text-emerald-400">h-8 w-8</code> or add padding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}
