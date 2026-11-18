import { cn } from '@/lib/utils'

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const loop = [...items, ...items]
  return (
    <div className={cn('overflow-hidden border-y-2 border-foreground py-3', className)}>
      <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-display text-lg font-bold uppercase">
        {loop.map((item, i) => (
          <span key={i} aria-hidden={i >= items.length} className="flex items-center gap-8">
            {item}
            <span aria-hidden="true">{'\u2726'}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
