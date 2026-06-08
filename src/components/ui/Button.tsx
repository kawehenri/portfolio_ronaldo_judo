import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  href?: string
  children: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20',
  outline:
    'border border-white/30 text-text hover:border-white/60 hover:bg-white/5',
  ghost: 'text-muted hover:text-text hover:bg-white/5',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 ${variants[variant]} ${className}`

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
