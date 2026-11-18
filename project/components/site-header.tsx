import Link from 'next/link'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-display text-2xl font-bold tracking-tight">
          SPILL<span className="text-secondary">.</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-2 text-sm font-medium">
          <Link href="/#stories" className="hidden rounded-full px-3 py-2 hover:bg-muted sm:inline-block">
            Stories
          </Link>
          <Link href="/work-with-us#packages" className="hidden rounded-full px-3 py-2 hover:bg-muted sm:inline-block">
            Packages
          </Link>
          <Link
            href="/work-with-us"
            className="brutal rounded-full bg-primary px-4 py-2 font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Feature your brand
          </Link>
        </nav>
      </div>
    </header>
  )
}
