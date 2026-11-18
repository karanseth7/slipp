import { Hero } from '@/components/home/hero'
import { PostExplorer } from '@/components/home/post-explorer'
import { BrandCta } from '@/components/home/brand-cta'
import { Marquee } from '@/components/marquee'
import { categories, posts } from '@/lib/posts'

export default function HomePage() {
  const featured = posts.find((post) => post.featured) ?? posts[0]

  return (
    <>
      <Hero featured={featured} />
      <Marquee
        className="bg-primary"
        items={['Money moves', 'Tech takes', 'Thrift finds', 'Soft life', 'Side hustles', 'Travel hacks']}
      />
      <PostExplorer posts={posts} categories={categories} />
      <BrandCta />
    </>
  )
}
