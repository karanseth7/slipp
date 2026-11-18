import 'server-only'
import { neon } from '@neondatabase/serverless'

export function getSql() {
  const url = process.env.DATABASE_URL
  if (!url) throw new Error('DATABASE_URL is not set. Connect the Neon integration.')
  return neon(url)
}
