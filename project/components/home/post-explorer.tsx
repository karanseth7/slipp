'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { PostCard } from '@/components/post-card'
import { cn } from '@/lib/utils'
import type { Category, Post } from '@/lib/posts'

export function PostExplorer({ posts, categories }: { posts: Post[]; categories: Category[] }) {
  const [active, setActive] = useState<Category | 'All'>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return posts.filter((post) => {
      const matchesCategory = active === 'All' || post.category === active
      const matchesQuery =
        !q || post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [posts, active, query])

  return (
    <section id="stories" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-secondary">Fresh drops</p>
          <h2 className="mt-1 text-4xl font-bold tracking-tight md:text-5xl">{"What's the tea?"}</h2>
        </div>
        <label className="brutal flex w-full items-center gap-2 rounded-full bg-card px-4 py-2 md:w-72">
          <Search className="size-4 shrink-0" aria-hidden="true" />
          <span className="sr-only">Search stories</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search stories..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
      </div>

      <div role="group" aria-label="Filter by category" className="mt-8 flex flex-wrap gap-2">
        {(['All', ...categories] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={active === cat}
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border-2 border-foreground px-4 py-1.5 text-sm font-semibold transition-all',
              active === cat
                ? 'bg-foreground text-background shadow-[3px_3px_0_0_var(--secondary)]'
                : 'bg-card hover:-translate-y-0.5 hover:bg-primary',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? 'story' : 'stories'} shown
      </p>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="brutal mt-10 rounded-2xl bg-card p-10 text-center">
          <p className="font-display text-2xl font-bold">No tea here (yet).</p>
          <p className="mt-2 text-muted-foreground">Try a different search or category.</p>
        </div>
      )}
    </section>
  )
}
