import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import type { PreviewKind } from '../data/components';

// Dynamically target the chunk
const PreviewMap = React.lazy(() => import('./previews/PreviewMap'));

export function ComponentPreview({ kind }: { kind: PreviewKind }) {
  return (
    <ErrorBoundary fallback={
      <div className="preview-grid-bg flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-ink-50 dark:bg-ink-900/60">
        <span className="text-xs text-rose-500">Preview couldn't be loaded.</span>
      </div>
    }>
      <Suspense fallback={
        <div className="preview-grid-bg flex h-44 w-full items-center justify-center overflow-hidden rounded-xl bg-ink-50 dark:bg-ink-900/60 skeleton" />
      }>
        <PreviewMap kind={kind} />
      </Suspense>
    </ErrorBoundary>
  );
}
