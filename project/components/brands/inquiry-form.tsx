'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { submitInquiry, type InquiryState } from '@/app/actions/inquiry'
import { packages } from '@/lib/packages'
import { cn } from '@/lib/utils'

const initialState: InquiryState = { status: 'idle' }

const inputClass =
  'w-full rounded-xl border-2 border-foreground bg-background px-4 py-3 text-base outline-none transition-shadow focus:shadow-[4px_4px_0_0_var(--secondary)] aria-[invalid=true]:border-destructive'

function Field({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string
  label: string
  error?: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold">
        {label}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="text-xs text-muted-foreground">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm font-medium text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export function InquiryForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState)
  const e = state.errors ?? {}

  if (state.status === 'success') {
    return (
      <div role="status" className="brutal-lg flex flex-col items-center gap-4 rounded-3xl bg-primary p-10 text-center">
        <CheckCircle2 className="size-12" aria-hidden="true" />
        <p className="font-display text-3xl font-bold">{"You're on the list!"}</p>
        <p className="max-w-sm">{state.message}</p>
      </div>
    )
  }

  const describe = (id: keyof typeof e, hasHint = false) =>
    e[id] ? `${id}-error` : hasHint ? `${id}-hint` : undefined

  return (
    <form action={formAction} noValidate className="brutal-lg flex flex-col gap-5 rounded-3xl bg-card p-6 md:p-8">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_fax">Leave this empty</label>
        <input id="company_fax" name="company_fax" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field id="name" label="Your name" error={e.name}>
          <input id="name" name="name" autoComplete="name" required className={inputClass} aria-invalid={!!e.name} aria-describedby={describe('name')} />
        </Field>
        <Field id="email" label="Work email" error={e.email}>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} aria-invalid={!!e.email} aria-describedby={describe('email')} />
        </Field>
        <Field id="business" label="Business name" error={e.business}>
          <input id="business" name="business" autoComplete="organization" required className={inputClass} aria-invalid={!!e.business} aria-describedby={describe('business')} />
        </Field>
        <Field id="website" label="Website" error={e.website}>
          <input id="website" name="website" type="url" inputMode="url" placeholder="https://yourbrand.com" required className={inputClass} aria-invalid={!!e.website} aria-describedby={describe('website')} />
        </Field>
      </div>

      <Field id="targetUrl" label="Page you want backlinks to (optional)" error={e.targetUrl} hint="The exact URL you want us to link to.">
        <input id="targetUrl" name="targetUrl" type="url" inputMode="url" placeholder="https://yourbrand.com/product" className={inputClass} aria-invalid={!!e.targetUrl} aria-describedby={describe('targetUrl', true)} />
      </Field>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2 text-sm font-bold">Package</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {packages.map((pkg) => (
            <label
              key={pkg.id}
              className="flex cursor-pointer flex-col rounded-xl border-2 border-foreground bg-background p-3 transition-all has-[:checked]:-translate-y-0.5 has-[:checked]:bg-primary has-[:checked]:shadow-[3px_3px_0_0_var(--foreground)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-ring"
            >
              <input type="radio" name="package" value={pkg.id} defaultChecked={'popular' in pkg && pkg.popular} className="sr-only" />
              <span className="font-display font-bold">{pkg.name}</span>
              <span className="text-sm text-muted-foreground">${pkg.price}</span>
            </label>
          ))}
        </div>
        {e.package && <p className="text-sm font-medium text-destructive">{e.package}</p>}
      </fieldset>

      <Field id="brief" label="Tell us about your business and the story you want" error={e.brief}>
        <textarea id="brief" name="brief" rows={5} required className={cn(inputClass, 'resize-y')} aria-invalid={!!e.brief} aria-describedby={describe('brief')} />
      </Field>

      {state.status === 'error' && state.message && (
        <p role="alert" className="rounded-xl border-2 border-destructive p-3 text-sm font-medium text-destructive">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="brutal inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-4 font-display text-lg font-bold text-secondary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
      >
        {pending ? <Loader2 className="size-5 animate-spin" aria-hidden="true" /> : <Send className="size-5" aria-hidden="true" />}
        {pending ? 'Sending...' : 'Send my request'}
      </button>
    </form>
  )
}
