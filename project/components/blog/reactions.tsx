'use client'

import { useState } from 'react'
import { Flame, Heart, Lightbulb, Share2, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

const options = [
  { key: 'fire', label: 'Fire', icon: Flame, base: 128 },
  { key: 'love', label: 'Love', icon: Heart, base: 94 },
  { key: 'smart', label: 'Big brain', icon: Lightbulb, base: 57 },
] as const

export function Reactions({ title }: { title: string }) {
  const [picked, setPicked] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  async function share() {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({ title, url }).catch(() => {})
      return
    }
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="brutal flex flex-col gap-4 rounded-2xl bg-card p-5 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-display text-lg font-bold">How did this hit?</p>
      <div className="flex flex-wrap gap-2">
        {options.map(({ key, label, icon: Icon, base }) => {
          const isActive = picked === key
          return (
            <button
              key={key}
              type="button"
              aria-pressed={isActive}
              onClick={() => setPicked(isActive ? null : key)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border-2 border-foreground px-4 py-2 text-sm font-semibold transition-all',
                isActive ? 'scale-105 bg-primary' : 'bg-background hover:-translate-y-0.5',
              )}
            >
              <Icon className={cn('size-4', isActive && 'fill-current')} aria-hidden="true" />
              {label}
              <span className="tabular-nums text-muted-foreground">{base + (isActive ? 1 : 0)}</span>
            </button>
          )
        })}
        <button
          type="button"
          onClick={share}
          className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
        >
          {copied ? <Check className="size-4" aria-hidden="true" /> : <Share2 className="size-4" aria-hidden="true" />}
          {copied ? 'Link copied' : 'Share'}
        </button>
      </div>
    </div>
  )
}
