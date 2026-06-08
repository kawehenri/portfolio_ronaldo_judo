import { useEffect, useState } from 'react'

export function useCountUp(end: number, duration = 2000, active = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return

    let start = 0
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * end)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [end, duration, active])

  return count
}
