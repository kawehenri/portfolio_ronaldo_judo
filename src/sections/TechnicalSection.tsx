import { motion } from 'framer-motion'
import athlete from '../data/athlete.json'
import images from '../data/images.json'
import { BlurredImage } from '../components/shared/BlurredImage'
import { SectionTitle } from '../components/ui/SectionTitle'
import type { Athlete } from '../types'

const data = athlete as Athlete
const { technical } = data

const fields = [
  { label: 'Categoria', value: technical.category },
  { label: 'Faixa', value: technical.belt },
  { label: 'Peso', value: technical.weight },
  { label: 'Altura', value: technical.height },
  { label: 'Clube', value: technical.club },
  { label: 'Cidade', value: technical.city },
  { label: 'Federação', value: technical.federation },
  { label: 'Idade', value: `${data.age} anos` },
]

export function TechnicalSection() {
  return (
    <section id="perfil" className="section-padding bg-surface/50">
      <div className="container-max">
        <SectionTitle
          subtitle="Ficha do atleta"
          title="Perfil Técnico"
          description="Informações profissionais para federações, clubes e patrocinadores."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl overflow-hidden rounded-sm border border-white/10 bg-surface"
        >
          <div className="h-1 bg-primary" />

          <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:p-10">
            <div className="h-36 w-36 shrink-0 overflow-hidden rounded-sm border-2 border-primary/30">
              <BlurredImage
                src={images.profile}
                alt={data.name}
                className="h-full w-full"
              />
            </div>

            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold uppercase">
                {data.name}
              </h3>
              <p className="text-primary">{data.category}</p>
              <p className="mt-1 text-sm text-muted">{technical.club}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {fields.map((field) => (
              <div key={field.label} className="bg-surface p-5">
                <p className="text-xs uppercase tracking-wider text-muted">{field.label}</p>
                <p className="mt-1 font-semibold text-text">{field.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
