import { UploadCloudIcon, CheckCircleIcon } from "lucide-react";

export function PublishPage() {

  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-white p-6 dark:bg-ink-950">
      <div className="w-full max-w-2xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink-900 dark:text-white">Publish Component</h1>
            <p className="mt-2 text-ink-500">Share your creation with the 21st community.</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
            <UploadCloudIcon className="h-6 w-6" />
          </div>
        </div>

        <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-xl dark:border-ink-800 dark:bg-ink-900">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-ink-700 dark:text-ink-300">Component Name</label>
              <input 
                placeholder="e.g. Modern Pricing Card"
                className="mt-2 h-11 w-full rounded-lg border border-ink-200 bg-ink-50 px-4 text-sm focus:border-ink-400 focus:outline-none dark:border-ink-800 dark:bg-ink-950"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-ink-700 dark:text-ink-300">Category</label>
                <select className="mt-2 h-11 w-full rounded-lg border border-ink-200 bg-ink-50 px-4 text-sm focus:border-ink-400 focus:outline-none dark:border-ink-800 dark:bg-ink-950">
                  <option>Buttons</option>
                  <option>Cards</option>
                  <option>Heroes</option>
                  <option>Navigation</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ink-700 dark:text-ink-300">Tags</label>
                <input 
                  placeholder="e.g. glassmorphism, saas"
                  className="mt-2 h-11 w-full rounded-lg border border-ink-200 bg-ink-50 px-4 text-sm focus:border-ink-400 focus:outline-none dark:border-ink-800 dark:bg-ink-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-700 dark:text-ink-300">React Code</label>
              <textarea 
                rows={8}
                placeholder="export function MyComponent() { ... }"
                className="mt-2 w-full rounded-lg border border-ink-200 bg-ink-50 p-4 font-mono text-xs focus:border-ink-400 focus:outline-none dark:border-ink-800 dark:bg-ink-950"
              />
            </div>

            <button className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-ink-900 font-semibold text-white transition hover:bg-ink-800 dark:bg-white dark:text-ink-900">
              <CheckCircleIcon className="h-5 w-5" />
              Publish to Marketplace
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
