import { useEffect } from 'react'

interface InstagramEmbedProps {
  url: string
  className?: string
}

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } }
  }
}

export function InstagramEmbed({ url, className = '' }: InstagramEmbedProps) {
  const permalink = url.split('?')[0].replace(/\/$/, '')

  useEffect(() => {
    const processEmbeds = () => window.instgrm?.Embeds.process()

    if (window.instgrm) {
      processEmbeds()
      return
    }

    const scriptId = 'instagram-embed-script'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null

    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.onload = processEmbeds
      document.body.appendChild(script)
    } else {
      script.onload = processEmbeds
      processEmbeds()
    }
  }, [permalink])

  return (
    <div className={`instagram-embed-wrapper ${className}`}>
      <blockquote
        className="instagram-media !m-0 !max-w-full !min-w-0 !w-full"
        data-instgrm-captioned
        data-instgrm-permalink={`${permalink}/?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
        style={{
          background: '#1a1a1a',
          border: 0,
          borderRadius: 3,
          boxShadow: 'none',
          margin: 0,
          maxWidth: '100%',
          minWidth: 326,
          padding: 0,
          width: '100%',
        }}
      >
        <a href={permalink} target="_blank" rel="noopener noreferrer">
          Ver publicação no Instagram
        </a>
      </blockquote>
    </div>
  )
}
