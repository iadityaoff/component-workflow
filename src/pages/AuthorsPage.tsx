import { useState } from "react";
import { ALL_COMPONENTS } from "../data/components";

const authors = [...new Map(ALL_COMPONENTS.map(item => [item.author.handle, item.author])).values()]
  .map(author => ({ ...author, count: ALL_COMPONENTS.filter(item => item.author.handle === author.handle).length }))
  .sort((a, b) => b.count - a.count);

export function AuthorsPage() {
  const [search, setSearch] = useState("");
  const matches = authors.filter(author => `${author.name} ${author.handle}`.toLowerCase().includes(search.toLowerCase()));
  return <section className="page-enter mx-auto max-w-5xl px-4 sm:px-6 py-8">
    <h1 className="text-2xl font-bold">Authors</h1>
    <p className="mt-2 text-sm text-[var(--uf-text-secondary)]">Browse creators attributed in the local catalog.</p>
    <input aria-label="Search authors" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search authors" className="mt-6 w-full rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-3" />
    <div className="mt-6 grid gap-4 md:grid-cols-2">{matches.map(author => <a key={author.handle} href={`#/components?author=${encodeURIComponent(author.handle)}`} className="flex items-center gap-4 rounded-xl border border-[var(--uf-border)] bg-[var(--uf-panel)] p-4 hover:border-violet-500 focus-visible:ring-2 focus-visible:ring-violet-500">
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white ${author.avatarColor}`}>{author.avatarText}</span>
      <div className="min-w-0"><h2 className="font-semibold truncate">{author.name}</h2><p className="text-xs text-[var(--uf-text-muted)] truncate">@{author.handle}</p><p className="mt-2 text-sm">{author.count} local components</p></div>
    </a>)}</div>
    {!matches.length && <p role="status" className="py-12 text-center">No authors match your search.</p>}
  </section>;
}
