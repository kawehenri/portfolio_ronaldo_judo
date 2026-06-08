import { motion } from 'framer-motion'
import { FaBullseye, FaHeart, FaMedal } from 'react-icons/fa'
import athlete from '../data/athlete.json'
import { SectionTitle } from '../components/ui/SectionTitle'
import type { Athlete } from '../types'

const data = athlete as Athlete

const valueIcons = [FaMedal, FaHeart, FaBullseye]

const statusLabels = {
  achieved: 'Conquistado',
  in_progress: 'Em preparação',
  planned: 'Planejado',
}

const statusColors = {
  achieved: 'text-yellow-400',
  in_progress: 'text-primary',
  planned: 'text-muted',
}

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-surface/50">
      <div className="container-max">
        <SectionTitle
          subtitle="Conheça o atleta"
          title="Sobre o Atleta"
          description="Disciplina, respeito e busca constante por excelência no tatame."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4 text-lg font-semibold uppercase tracking-wider text-primary">
              Biografia
            </h3>
            <p className="mb-6 leading-relaxed text-muted">{data.bio}</p>

            <h3 className="mb-4 text-lg font-semibold uppercase tracking-wider text-primary">
              História no Judô
            </h3>
            <p className="leading-relaxed text-muted">{data.history}</p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center border-l-4 border-primary pl-8"
          >
            <p className="font-[family-name:var(--font-display)] text-2xl font-medium uppercase leading-relaxed tracking-wide md:text-3xl">
              &ldquo;Disciplina no tatame. Excelência em cada luta.&rdquo;
            </p>
            <cite className="mt-4 text-sm text-muted not-italic">
              — {data.name}, {data.age} anos · {data.origin}
            </cite>
          </motion.blockquote>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-semibold uppercase tracking-wider text-primary">
              Valores Pessoais
            </h3>
            <ul className="space-y-4">
              {data.values.map((value, i) => {
                const Icon = valueIcons[i % valueIcons.length]
                return (
                  <li key={value} className="flex items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-primary/20 text-primary">
                      <Icon size={18} />
                    </span>
                    <span className="text-text">{value}</span>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-6 text-lg font-semibold uppercase tracking-wider text-primary">
              Objetivos Futuros
            </h3>
            <ul className="space-y-4">
              {data.goals.map((goal) => (
                <li key={goal.text} className="flex items-start gap-3">
                  <span className={`mt-1 text-lg ${statusColors[goal.status]}`}>●</span>
                  <div>
                    <p className="text-text">{goal.text}</p>
                    <p className="text-xs uppercase tracking-wider text-muted">
                      {statusLabels[goal.status]}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
