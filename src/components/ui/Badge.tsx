import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'primary' | 'gold' | 'silver' | 'bronze' | 'default'
}

const variants = {
  primary: 'bg-primary/20 text-primary border-primary/30',
  gold: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  silver: 'bg-gray-400/20 text-gray-300 border-gray-400/30',
  bronze: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  default: 'bg-white/10 text-muted border-white/10',
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-sm border px-3 py-1 text-xs font-medium uppercase tracking-wider ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
