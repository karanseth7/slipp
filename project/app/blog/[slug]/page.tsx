import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { ReadingProgress } from '@/components/blog/reading-progress'
import { Reactions } from '@/components/blog/reactions'
import { PostCard } from '@/components/post-card'
import { formatDate, getPost, posts } from '@/lib/posts'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image] },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <ReadingProgress />
      <article className="mx-auto max-w-3xl px-4 py-10 md:py-16">
        <Link href="/#stories" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">
          <ArrowLeft className="size-4" aria-hidden="true" /> All stories
        </Link>

        <header className="mt-8 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border-2 border-foreground bg-primary px-3 py-1 text-xs font-bold uppercase">
              {post.category}
            </span>
            {post.sponsored && (
              <span className="rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-bold uppercase">
                Sponsored
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">{post.title}</h1>
          <p className="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <p className="text-sm font-medium">
            By {post.author} {'\u00B7'} <time dateTime={post.date}>{formatDate(post.date)}</time> {'\u00B7'}{' '}
            {post.readMinutes} min read
          </p>
        </header>

        <div className="brutal-lg relative mt-10 aspect-[16/10] overflow-hidden rounded-3xl">
          <Image src={post.image} alt={post.imageAlt} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
        </div>

        <div className="mt-12 flex flex-col gap-8 text-lg leading-relaxed">
          {post.content.map((section, i) => (
            <section key={i} className="flex flex-col gap-4">
              {section.heading && <h2 className="text-2xl font-bold md:text-3xl">{section.heading}</h2>}
              {section.body.map((paragraph, j) => (
                <p key={j} className="text-pretty">{paragraph}</p>
              ))}
            </section>
          ))}
        </div>

        {post.sponsored && (
          <p className="mt-10 rounded-2xl border-2 border-dashed border-foreground p-4 text-sm text-muted-foreground">
            This story was produced in partnership with a brand.{' '}
            <Link href="/work-with-us" className="font-semibold text-foreground underline">
              Want your business featured?
            </Link>
          </p>
        )}

        <div className="mt-12">
          <Reactions title={post.title} />
        </div>
      </article>

      <section aria-labelledby="related" className="mx-auto max-w-6xl px-4 py-12">
        <h2 id="related" className="text-3xl font-bold tracking-tight">Keep scrolling</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      </section>
    </>
  )
}
