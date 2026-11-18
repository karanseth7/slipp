import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Post } from '@/lib/posts'

export function Hero({ featured }: { featured: Post }) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
      <div className="flex flex-col gap-6">
        <span className="w-fit -rotate-2 rounded-full border-2 border-foreground bg-secondary px-4 py-1 text-sm font-bold text-secondary-foreground">
          {'no cap, just good reads'}
        </span>
        <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl">
          The blog that{' '}
          <span className="relative inline-block">
            <span className="relative z-10">spills</span>
            <span aria-hidden="true" className="absolute inset-x-0 bottom-1 z-0 h-4 -rotate-1 bg-primary md:h-6" />
          </span>{' '}
          the tea.
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
          Real talk on money, tech, style, travel and wellness, written for the generation that grew up online.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#stories"
            className="brutal inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-background transition-transform hover:-translate-y-0.5"
          >
            Start reading <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/work-with-us"
            className="brutal inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
          >
            {"I'm a business"}
          </Link>
        </div>
        <dl className="flex gap-8 pt-2">
          {[
            ['250K+', 'monthly readers'],
            ['1.2K', 'stories published'],
            ['300+', 'brand partners'],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd className="font-display text-2xl font-bold">{value}</dd>
              <dd className="text-xs text-muted-foreground" aria-hidden="true">{label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <Link href={`/blog/${featured.slug}`} className="group relative block rotate-1 transition-transform hover:rotate-0">
        <div className="brutal-lg overflow-hidden rounded-3xl bg-card">
          <div className="relative aspect-[4/3] border-b-2 border-foreground">
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-secondary">Featured {'\u00B7'} {featured.category}</p>
            <p className="mt-1 font-display text-xl font-bold leading-tight text-balance group-hover:underline">
              {featured.title}
            </p>
          </div>
        </div>
        <span className="absolute -right-3 -top-4 rotate-12 rounded-full border-2 border-foreground bg-primary px-3 py-2 font-display text-sm font-bold">
          HOT TAKE
        </span>
      </Link>
    </section>
  )
}
