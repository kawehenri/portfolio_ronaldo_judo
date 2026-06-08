import { motion } from 'framer-motion'
import sponsors from '../data/sponsors.json'
import { BlurredImage } from '../components/shared/BlurredImage'
import { SectionTitle } from '../components/ui/SectionTitle'
import type { Sponsor, SponsorType } from '../types'

const items = sponsors as Sponsor[]

const typeLabels: Record<SponsorType, string> = {
  patrocinador: 'Patrocinador',
  parceiro: 'Parceiro',
  apoiador: 'Apoiador',
}

function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  if (sponsor.logo) {
    return (
      <div className="h-20 w-28 shrink-0 overflow-hidden rounded-sm border border-white/10 bg-white/5">
        <BlurredImage
          src={sponsor.logo}
          alt={`Logo ${sponsor.name}`}
          className="h-full w-full"
        />
      </div>
    )
  }

  const initials = sponsor.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 3)
    .toUpperCase()

  return (
    <div className="flex h-20 w-28 shrink-0 items-center justify-center rounded-sm bg-white/5 font-[family-name:var(--font-display)] text-lg font-bold text-muted">
      {initials}
    </div>
  )
}

export function SponsorsSection() {
  return (
    <section id="patrocinadores" className="section-padding">
      <div className="container-max">
        <SectionTitle
          subtitle="Quem apoia"
          title="Patrocinadores"
          description="Parceiros e instituições que impulsionam a carreira esportiva."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((sponsor, i) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="group flex items-center gap-5 rounded-sm border border-white/10 bg-surface p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <SponsorLogo sponsor={sponsor} />
                <div>
                  <h3 className="font-semibold text-text transition-colors group-hover:text-primary">
                    {sponsor.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    {typeLabels[sponsor.type]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
