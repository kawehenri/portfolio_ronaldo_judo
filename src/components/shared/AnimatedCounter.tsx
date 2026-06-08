import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from '../../hooks/useInView'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  label: string
}

export function AnimatedCounter({ value, suffix = '', label }: AnimatedCounterProps) {
  const { ref, inView } = useInView()
  const count = useCountUp(value, 2000, inView)

  return (
    <div ref={ref} className="text-center">
      <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-text md:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-wider text-muted">{label}</p>
    </div>
  )
}
