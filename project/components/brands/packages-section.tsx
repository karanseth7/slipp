import Link from 'next/link'
import { Check } from 'lucide-react'
import { packages } from '@/lib/packages'
import { cn } from '@/lib/utils'

export function PackagesSection() {
  return (
    <section id="packages" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
      <p className="text-sm font-bold uppercase tracking-wider text-secondary">Packages</p>
      <h2 className="mt-1 text-4xl font-bold tracking-tight md:text-5xl">Pick your vibe.</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {packages.map((pkg) => {
          const popular = 'popular' in pkg && pkg.popular
          return (
            <div
              key={pkg.id}
              className={cn(
                'brutal relative flex flex-col gap-5 rounded-3xl p-7',
                popular ? 'bg-primary md:-translate-y-3' : 'bg-card',
              )}
            >
              {popular && (
                <span className="absolute -top-4 right-6 rotate-3 rounded-full border-2 border-foreground bg-secondary px-3 py-1 text-xs font-bold uppercase text-secondary-foreground">
                  Most popular
                </span>
              )}
              <div>
                <h3 className="text-2xl font-bold">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.blurb}</p>
              </div>
              <p className="font-display text-5xl font-bold">
                ${pkg.price}
                <span className="text-base font-medium text-muted-foreground"> / post</span>
              </p>
              <ul className="flex flex-col gap-2 text-sm">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className="mt-auto rounded-full border-2 border-foreground bg-foreground px-5 py-3 text-center font-semibold text-background transition-transform hover:-translate-y-0.5"
              >
                Choose {pkg.name}
              </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
