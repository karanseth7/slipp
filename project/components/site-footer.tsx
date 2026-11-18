import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-2 border-foreground bg-foreground text-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl font-bold">
            SPILL<span className="text-primary">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-background/70">
            Unfiltered stories for the internet generation. Culture, money, tech and everything in between.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-2 text-sm">
          <Link href="/#stories" className="hover:text-primary">Read stories</Link>
          <Link href="/work-with-us" className="hover:text-primary">Work with us</Link>
          <Link href="/work-with-us#packages" className="hover:text-primary">Sponsored post packages</Link>
          <Link href="/work-with-us#faq" className="hover:text-primary">FAQ</Link>
        </nav>
        <p className="text-sm text-background/70 md:text-right">
          {'\u00A9'} {new Date().getFullYear()} SPILL Media. Sponsored content is always clearly labeled.
        </p>
      </div>
    </footer>
  )
}
