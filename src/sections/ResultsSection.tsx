import { motion } from 'framer-motion'
import competitions from '../data/competitions.json'
import { useFilter } from '../hooks/useFilter'
import { Badge } from '../components/ui/Badge'
import { SectionTitle } from '../components/ui/SectionTitle'
import type { Competition } from '../types'

const items = competitions as Competition[]

const positionVariant: Record<Competition['position'], 'gold' | 'silver' | 'bronze' | 'default'> = {
  gold: 'gold',
  silver: 'silver',
  bronze: 'bronze',
  other: 'default',
}

export function ResultsSection() {
  const { filter, setFilter, filtered, options } = useFilter(items, (c) => c.year)

  return (
    <section id="resultados" className="section-padding bg-surface/50">
      <div className="container-max">
        <SectionTitle
          subtitle="Histórico competitivo"
          title="Resultados"
          description="Desempenho em campeonatos regionais e nacionais."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`rounded-sm px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-white/5 text-muted hover:text-text'
            }`}
          >
            Todos
          </button>
          {options.map((year) => (
            <button
              key={year}
              onClick={() => setFilter(year)}
              className={`rounded-sm px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                filter === year
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-muted hover:text-text'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-sm border border-white/10">
          <div className="hidden grid-cols-4 gap-4 border-b border-white/10 bg-accent/50 px-6 py-4 text-xs font-medium uppercase tracking-wider text-muted md:grid">
            <span>Ano</span>
            <span>Competição</span>
            <span>Local</span>
            <span>Resultado</span>
          </div>

          {filtered.map((comp, i) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-1 gap-2 border-b border-white/5 px-6 py-4 last:border-0 md:grid-cols-4 md:items-center md:gap-4"
            >
              <span className="font-medium text-text md:text-sm">
                <span className="text-muted md:hidden">Ano: </span>
                {comp.year} · {comp.month}
              </span>
              <span className="text-text">
                <span className="text-muted md:hidden">Competição: </span>
                {comp.name}
                <span className="ml-2 text-xs text-muted">({comp.category})</span>
              </span>
              <span className="text-muted">{comp.location}</span>
              <span>
                <Badge variant={positionVariant[comp.position]}>{comp.result}</Badge>
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
