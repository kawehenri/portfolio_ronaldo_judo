import { Helmet } from 'react-helmet-async'
import images from '../../data/images.json'
import { imagePath } from '../../lib/imagePath'

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function SEO({
  title = 'Ronaldo — Atleta de Judô',
  description = 'Portfólio profissional de Ronaldo, atleta de judô de alto rendimento da Academia Corpo Arte, Brasília.',
  image = imagePath(images.og),
  url = 'https://kawehenri.github.io/portfolio_ronaldo_judo/',
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
