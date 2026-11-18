import type { Metadata } from 'next'
import { PackagesSection } from '@/components/brands/packages-section'
import { InquiryForm } from '@/components/brands/inquiry-form'
import { Faq } from '@/components/brands/faq'
import { Marquee } from '@/components/marquee'

export const metadata: Metadata = {
  title: 'Work with us — sponsored posts & backlinks',
  description:
    'Get your business featured on SPILL. We write sponsored blog posts for your brand with dofollow backlinks, reaching 250K+ Gen Z readers a month.',
}

const steps = [
  ['01', 'Send your brief', 'Tell us about your business and the link you want to boost.'],
  ['02', 'We write the story', 'Our writers craft a native post that fits the SPILL vibe.'],
  ['03', 'You approve', 'One round of edits so everything is on brand.'],
  ['04', 'It goes live', 'Published with backlinks and shared on our socials.'],
]

export default function WorkWithUsPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <span className="inline-block -rotate-2 rounded-full border-2 border-foreground bg-primary px-4 py-1 text-sm font-bold">
          For businesses
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl">
          Get your brand <span className="text-secondary">in the feed</span> of a generation.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We write sponsored blog posts about your business for our audience of 250K+ monthly readers, complete with
          high-authority dofollow backlinks that help your site rank.
        </p>
        <dl className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ['DA 58', 'Domain authority'],
            ['250K+', 'Monthly readers'],
            ['4m 12s', 'Avg. time on page'],
            ['300+', 'Brands featured'],
          ].map(([value, label]) => (
            <div key={label} className="brutal rounded-2xl bg-card p-5">
              <dd className="font-display text-3xl font-bold">{value}</dd>
              <dt className="text-sm text-muted-foreground">{label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <Marquee className="bg-secondary text-secondary-foreground" items={['Dofollow backlinks', 'Native stories', 'Gen Z reach', 'Permanent placement', 'Social amplification']} />

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">How it works</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map(([num, title, text]) => (
            <li key={num} className="brutal rounded-2xl bg-card p-6">
              <span className="font-display text-4xl font-bold text-secondary">{num}</span>
              <p className="mt-3 font-display text-xl font-bold">{title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <PackagesSection />

      <section id="contact" className="mx-auto grid max-w-6xl scroll-mt-20 gap-10 px-4 py-16 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="text-sm font-bold uppercase tracking-wider text-secondary">Contact us</p>
          <h2 className="mt-1 text-4xl font-bold tracking-tight text-balance md:text-5xl">{"Let's spill about your brand."}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Fill this in and our partnerships team will get back to you within 24 hours with next steps and a content
            plan.
          </p>
        </div>
        <div className="md:col-span-3">
          <InquiryForm />
        </div>
      </section>

      <Faq />
    </>
  )
}
