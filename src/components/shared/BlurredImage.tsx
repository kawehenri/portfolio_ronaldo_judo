import { imagePath } from '../../lib/imagePath'

interface BlurredImageProps {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  objectFit?: 'contain' | 'cover'
  priority?: boolean
}

export function BlurredImage({
  src,
  alt,
  className = '',
  aspectRatio,
  objectFit = 'contain',
  priority = false,
}: BlurredImageProps) {
  const resolved = imagePath(src)

  return (
    <div
      className={`relative overflow-hidden bg-accent ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <img
        src={resolved}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-50 saturate-150"
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      <div className="absolute inset-0 bg-bg/30" />
      <img
        src={resolved}
        alt={alt}
        className={`relative z-10 h-full w-full ${objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}
