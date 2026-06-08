import { motion } from 'framer-motion'
import { FaCalendarAlt, FaFistRaised, FaMedal } from 'react-icons/fa'
import statistics from '../data/statistics.json'
import { AnimatedCounter } from '../components/shared/AnimatedCounter'
import { Card } from '../components/ui/Card'
import { SectionTitle } from '../components/ui/SectionTitle'
import type { Statistics } from '../types'

const stats = statistics as Statistics

const statCards = [
  { key: 'goldMedals' as const, label: 'Medalhas de Ouro', icon: FaMedal, color: 'text-yellow-400' },
  { key: 'silverMedals' as const, label: 'Medalhas de Prata', icon: FaMedal, color: 'text-gray-300' },
  { key: 'bronzeMedals' as const, label: 'Medalhas de Bronze', icon: FaMedal, color: 'text-orange-400' },
  { key: 'competitions' as const, label: 'Competições', icon: FaFistRaised, color: 'text-primary' },
  { key: 'careerYears' as const, label: 'Anos de Carreira', icon: FaCalendarAlt, color: 'text-primary' },
]

export function StatsSection() {
  return (
    <section id="estatisticas" className="section-padding">
      <div className="container-max">
        <SectionTitle
          subtitle="Números que impressionam"
          title="Estatísticas"
          description={`${stats.fights} lutas disputadas em ${stats.competitions} competições.`}
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-5">
          {statCards.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="flex flex-col items-center py-8">
                <item.icon className={`mb-4 ${item.color}`} size={28} />
                <AnimatedCounter value={stats[item.key]} label={item.label} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
