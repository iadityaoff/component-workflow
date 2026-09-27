import React, { Component, type ReactNode, type ErrorInfo } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[ErrorBoundary caught error]:", error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ error: null });
    this.props.onReset?.();
  };

  handleGoHome = () => {
    this.setState({ error: null });
    window.location.hash = "#/";
    window.location.reload();
  };

  render() {
    if (this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center bg-[var(--uf-bg)] text-[var(--uf-text)]">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-500 shadow-lg shadow-rose-500/10">
            <AlertTriangle className="h-7 w-7" />
          </div>

          <h2 className="text-xl font-bold tracking-tight text-[var(--uf-text)] sm:text-2xl">
            Something went wrong
          </h2>
          <p className="mt-2 max-w-md text-sm text-[var(--uf-text-secondary)]">
            An unexpected error occurred while rendering this section.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--uf-accent)] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:bg-[var(--uf-accent-hover)] active:scale-95"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Try again
            </button>
            <button
              onClick={this.handleGoHome}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] px-4 py-2.5 text-xs font-medium text-[var(--uf-text)] transition hover:bg-white/[0.04] active:scale-95"
            >
              <Home className="h-3.5 w-3.5" />
              Go to Home
            </button>
          </div>

          <details className="mt-8 max-w-xl text-left rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-3 text-xs text-[var(--uf-text-muted)]">
            <summary className="cursor-pointer font-medium text-[var(--uf-text-secondary)] select-none hover:text-[var(--uf-text)]">
              View technical error details
            </summary>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-mono text-[11px] text-rose-400 bg-black/40 p-3 rounded-lg border border-rose-500/20">
              {this.state.error.message}
              {this.state.error.stack ? `\n\n${this.state.error.stack}` : ""}
            </pre>
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
