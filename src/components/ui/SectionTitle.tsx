import { motion } from 'framer-motion'

interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
}

export function SectionTitle({ subtitle, title, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center md:mb-16"
    >
      {subtitle && (
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold uppercase tracking-wide text-text md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-muted">{description}</p>
      )}
      <div className="mx-auto mt-6 h-0.5 w-16 bg-primary" />
    </motion.div>
  )
}
