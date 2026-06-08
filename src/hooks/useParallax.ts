import { useEffect, useState, type RefObject } from 'react'

export function useParallax(ref: RefObject<HTMLElement | null>, speed = 0.3, maxOffset = 30) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const viewCenter = window.innerHeight / 2
      const diff = (center - viewCenter) * speed
      setOffset(Math.max(-maxOffset, Math.min(maxOffset, diff)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref, speed, maxOffset])

  return offset
}
