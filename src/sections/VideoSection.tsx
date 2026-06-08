import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import videos from '../data/videos.json'
import { InstagramEmbed } from '../components/shared/InstagramEmbed'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { SectionTitle } from '../components/ui/SectionTitle'

const { instagramReel } = videos

export function VideoSection() {
  return (
    <section id="video" className="section-padding bg-surface/50">
      <div className="container-max">
        <SectionTitle
          subtitle="Assista"
          title="Vídeo em Destaque"
          description="Acompanhe um momento da trajetória competitiva no tatame."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-md"
        >
          <Card className="overflow-hidden p-0" hover={false}>
            <div className="border-b border-white/10 bg-surface px-6 py-4">
              <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wide">
                {instagramReel.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{instagramReel.description}</p>
            </div>

            <div className="bg-bg p-4">
              <InstagramEmbed url={instagramReel.url} />
            </div>

            <div className="border-t border-white/10 px-6 py-4">
              <Button
                variant="outline"
                href={instagramReel.url}
                className="w-full justify-center"
              >
                <FaInstagram size={18} />
                Ver no Instagram
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
