import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, boxShadow: '0 8px 30px rgba(139,26,26,0.15)' } : undefined}
      className={`rounded-sm border border-white/10 bg-surface p-6 transition-colors ${className}`}
    >
      {children}
    </motion.div>
  )
}
