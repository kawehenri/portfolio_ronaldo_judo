import { useRef } from 'react'
import { useParallax } from '../../hooks/useParallax'
import { BlurredImage } from './BlurredImage'

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
}

export function ParallaxImage({ src, alt, className = '' }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const offset = useParallax(ref, 0.3, 30)

  return (
    <div
      ref={ref}
      className={`transition-transform duration-100 ${className}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      <BlurredImage src={src} alt={alt} className="h-full w-full" priority />
    </div>
  )
}
