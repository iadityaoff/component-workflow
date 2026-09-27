import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { PreviewKind } from '../data/components';
import PreviewMap from './previews/PreviewMap';

export function ComponentPreview({ kind, fullHeight = false }: { kind: PreviewKind; fullHeight?: boolean }) {
  return (
    <ErrorBoundary fallback={
      <div className={`preview-grid-bg flex ${fullHeight ? "min-h-[380px]" : "h-44"} w-full items-center justify-center overflow-hidden rounded-xl bg-ink-50 dark:bg-ink-900/60`}>
        <span className="text-xs text-rose-500">Preview unavailable</span>
      </div>
    }>
      <PreviewMap kind={kind} fullHeight={fullHeight} />
    </ErrorBoundary>
  );
}
