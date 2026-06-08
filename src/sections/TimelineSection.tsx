import { motion } from 'framer-motion'
import timeline from '../data/timeline.json'
import { SectionTitle } from '../components/ui/SectionTitle'
import type { TimelineEvent } from '../types'

const events = timeline as TimelineEvent[]

const typeColors: Record<TimelineEvent['type'], string> = {
  start: 'bg-primary',
  achievement: 'bg-yellow-500',
  category: 'bg-blue-500',
  convocation: 'bg-green-500',
  milestone: 'bg-primary',
}

export function TimelineSection() {
  return (
    <section id="trajetoria" className="section-padding bg-surface/50">
      <div className="container-max">
        <SectionTitle
          subtitle="A jornada"
          title="Linha do Tempo"
          description="Marcos importantes da carreira competitiva."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/30 md:left-1/2 md:-translate-x-px" />

          {events.map((event, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08 }}
                className={`relative mb-10 flex items-center md:mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full pl-12 md:w-1/2 md:pl-0 ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                  <div className="rounded-sm border border-white/10 bg-surface p-5">
                    <span className="text-sm font-medium text-primary">
                      {event.year}
                      {event.month && ` · ${event.month}`}
                    </span>
                    <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-bold uppercase">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{event.description}</p>
                  </div>
                </div>

                <div
                  className={`absolute left-4 h-3 w-3 -translate-x-1/2 rounded-full md:left-1/2 ${typeColors[event.type]}`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
