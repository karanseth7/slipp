import Link from 'next/link'
import { ArrowRight, Link2, PenLine, TrendingUp } from 'lucide-react'

const perks = [
  { icon: PenLine, title: 'Written by our team', text: 'Native stories in our voice that readers actually finish.' },
  { icon: Link2, title: 'Dofollow backlinks', text: 'Permanent, contextual links that boost your SEO.' },
  { icon: TrendingUp, title: 'Real reach', text: 'Shared across our socials and newsletter.' },
]

export function BrandCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="brutal-lg grid gap-10 rounded-3xl bg-secondary p-8 text-secondary-foreground md:grid-cols-2 md:p-12">
        <div className="flex flex-col gap-5">
          <p className="w-fit rounded-full border-2 border-foreground bg-primary px-3 py-1 text-xs font-bold uppercase text-foreground">
            For businesses
          </p>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
            Put your brand where Gen Z is reading.
          </h2>
          <p className="text-lg leading-relaxed text-secondary-foreground/90">
            We write sponsored blog posts about your business, complete with high-authority backlinks to your site.
          </p>
          <Link
            href="/work-with-us"
            className="brutal inline-flex w-fit items-center gap-2 rounded-full bg-card px-6 py-3 font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Get featured <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <ul className="flex flex-col gap-4">
          {perks.map(({ icon: Icon, title, text }) => (
            <li key={title} className="brutal flex gap-4 rounded-2xl bg-card p-5 text-foreground">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border-2 border-foreground bg-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display font-bold">{title}</p>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
