import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { IoChevronUp } from 'react-icons/io5'

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 rounded-sm bg-primary p-3 text-white shadow-lg shadow-primary/30 transition-colors hover:bg-primary/90"
          aria-label="Voltar ao topo"
        >
          <IoChevronUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
