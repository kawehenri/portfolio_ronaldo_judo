import type { MouseEvent } from 'react'

interface NavLinkProps {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
}

export function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(href.replace('#', ''))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`text-sm font-medium uppercase tracking-wider transition-colors ${
        isActive ? 'text-primary' : 'text-muted hover:text-text'
      }`}
    >
      {label}
    </a>
  )
}
