import { motion } from 'framer-motion'
import { useState } from 'react'
import achievements from '../data/achievements.json'
import { BlurredImage } from '../components/shared/BlurredImage'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { Modal } from '../components/ui/Modal'
import { SectionTitle } from '../components/ui/SectionTitle'
import type { Achievement } from '../types'

const items = achievements as Achievement[]

const typeLabels: Record<Achievement['type'], string> = {
  campeonato: 'Campeonato',
  medalha: 'Medalha',
  titulo: 'Título',
  premiacao: 'Premiação',
}

export function AchievementsSection() {
  const [selected, setSelected] = useState<Achievement | null>(null)

  return (
    <section id="conquistas" className="section-padding">
      <div className="container-max">
        <SectionTitle
          subtitle="Títulos e medalhas"
          title="Conquistas"
          description="Principais resultados em campeonatos regionais e nacionais."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <button
                onClick={() => setSelected(item)}
                className="w-full text-left"
                aria-label={`Ver detalhes: ${item.title}`}
              >
                <Card className="h-full cursor-pointer overflow-hidden p-0">
                  {item.image && (
                    <BlurredImage
                      src={item.image}
                      alt={item.title}
                      aspectRatio="16/10"
                      className="w-full"
                    />
                  )}
                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <Badge variant="primary">{typeLabels[item.type]}</Badge>
                      <span className="text-sm text-muted">{item.year}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-primary">{item.result}</p>
                    <p className="mt-1 text-sm text-muted">{item.location}</p>
                  </div>
                </Card>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <div className="space-y-4">
            {selected.image && (
              <div className="overflow-hidden rounded-sm border border-white/10">
                <BlurredImage
                  src={selected.image}
                  alt={selected.title}
                  aspectRatio="16/10"
                  className="w-full"
                />
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">{typeLabels[selected.type]}</Badge>
              <Badge>{selected.year}</Badge>
            </div>
            <p className="text-lg text-primary">{selected.result}</p>
            <p className="text-muted">{selected.location}</p>
            <p className="leading-relaxed text-text">{selected.description}</p>
          </div>
        )}
      </Modal>
    </section>
  )
}
