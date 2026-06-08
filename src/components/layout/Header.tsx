import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { navItems } from '../../data/navigation'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { NavLink } from './NavLink'

const sectionIds = navItems.map((item) => item.id)

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useScrollSpy(sectionIds)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-bg/80 backdrop-blur-md">
      <div className="container-max flex h-16 items-center justify-between px-4 md:px-8 lg:px-16">
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="font-[family-name:var(--font-display)] text-xl font-bold uppercase tracking-widest text-text"
        >
          Ronaldo
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              href={`#${item.id}`}
              label={item.label}
              isActive={activeId === item.id}
            />
          ))}
        </nav>

        <button
          className="rounded-sm p-2 text-text lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/5 bg-bg/95 backdrop-blur-md lg:hidden"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  href={`#${item.id}`}
                  label={item.label}
                  isActive={activeId === item.id}
                  onClick={() => setMenuOpen(false)}
                />
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
