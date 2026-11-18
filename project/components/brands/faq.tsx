import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'Are the backlinks dofollow?',
    a: 'Yes. Every package includes contextual dofollow backlinks placed naturally in the story, and they stay live permanently.',
  },
  {
    q: 'Who writes the blog post?',
    a: 'Our in-house Gen Z writers. We interview you, then write a story in the SPILL voice so it resonates with our readers. You get one round of review before publishing.',
  },
  {
    q: 'Will the post be labeled as sponsored?',
    a: 'Yes. Transparency builds trust with readers, which is exactly what makes our audience valuable to your brand.',
  },
  {
    q: 'What kinds of businesses do you accept?',
    a: 'Most legit businesses, from local cafes to SaaS startups. We do not accept gambling, adult content, or anything misleading.',
  },
  {
    q: 'How fast will my post go live?',
    a: 'Between 5 and 7 days after we receive your brief, depending on the package.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16">
      <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Questions? Valid.</h2>
      <div className="mt-8 flex flex-col gap-4">
        {faqs.map(({ q, a }) => (
          <details key={q} className="brutal group rounded-2xl bg-card p-5 open:bg-primary">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
              {q}
              <Plus className="size-5 shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="mt-3 leading-relaxed">{a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
