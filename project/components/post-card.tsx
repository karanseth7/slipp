import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Clock } from 'lucide-react'
import { formatDate, type Post } from '@/lib/posts'

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group brutal relative flex flex-col overflow-hidden rounded-2xl bg-card transition-transform hover:-translate-y-1 hover:-rotate-1">
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-foreground">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full border-2 border-foreground bg-primary px-3 py-1 text-xs font-bold uppercase">
          {post.category}
        </span>
        {post.sponsored && (
          <span className="absolute right-3 top-3 rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-bold uppercase">
            Sponsored
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-xl font-bold leading-tight text-balance">
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
        <div className="mt-auto flex items-center justify-between pt-2 text-xs font-medium text-muted-foreground">
          <span>
            {post.author} {'\u00B7'} {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden="true" />
            {post.readMinutes} min
            <ArrowUpRight
              className="ml-1 size-4 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </article>
  )
}
