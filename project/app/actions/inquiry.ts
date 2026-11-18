'use server'

import { getSql } from '@/lib/db'
import { packageIds } from '@/lib/packages'

export type InquiryState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'business' | 'website' | 'targetUrl' | 'package' | 'brief', string>>
}

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

function isUrl(value: string) {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  if (clean(formData.get('company_fax'), 100)) {
    return { status: 'success', message: 'Thanks! We will be in touch soon.' }
  }

  const data = {
    name: clean(formData.get('name'), 120),
    email: clean(formData.get('email'), 200).toLowerCase(),
    business: clean(formData.get('business'), 160),
    website: clean(formData.get('website'), 500),
    targetUrl: clean(formData.get('targetUrl'), 500),
    package: clean(formData.get('package'), 40),
    brief: clean(formData.get('brief'), 2000),
  }

  const errors: InquiryState['errors'] = {}
  if (data.name.length < 2) errors.name = 'Tell us your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email.'
  if (data.business.length < 2) errors.business = 'Add your business name.'
  if (!isUrl(data.website)) errors.website = 'Enter a full URL, e.g. https://yourbrand.com'
  if (data.targetUrl && !isUrl(data.targetUrl)) errors.targetUrl = 'Enter a full URL or leave it blank.'
  if (!packageIds.includes(data.package)) errors.package = 'Pick a package.'
  if (data.brief.length < 20) errors.brief = 'Give us at least a sentence or two (20+ characters).'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', message: 'Please fix the highlighted fields.', errors }
  }

  try {
    const sql = getSql()
    await sql`
      CREATE TABLE IF NOT EXISTS business_inquiries (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        business TEXT NOT NULL,
        website TEXT NOT NULL,
        target_url TEXT,
        package TEXT NOT NULL,
        brief TEXT NOT NULL,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      )
    `
    await sql`
      INSERT INTO business_inquiries (name, email, business, website, target_url, package, brief)
      VALUES (${data.name}, ${data.email}, ${data.business}, ${data.website}, ${data.targetUrl || null}, ${data.package}, ${data.brief})
    `
  } catch (error) {
    console.error('[v0] Failed to save inquiry:', error instanceof Error ? error.message : error)
    return { status: 'error', message: 'Something went wrong saving your request. Please try again.' }
  }

  return {
    status: 'success',
    message: `Thanks ${data.name.split(' ')[0]}! Your request is in. We reply within 24 hours.`,
  }
}
