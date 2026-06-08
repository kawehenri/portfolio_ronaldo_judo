import { motion } from 'framer-motion'
import { IoDocumentText } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import athlete from '../data/athlete.json'
import images from '../data/images.json'
import { imagePath } from '../lib/imagePath'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import type { Athlete } from '../types'

const data = athlete as Athlete

export function HeroSection() {
  const navigate = useNavigate()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0">
        <img
          src={imagePath(images.heroBackground)}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/40 lg:to-transparent" />
      </div>

      <div className="container-max relative z-10 grid items-center gap-8 px-4 md:px-8 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-12 lg:py-0"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Badge variant="primary">{data.category}</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-tight tracking-wide md:text-6xl lg:text-7xl"
          >
            {data.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-lg text-lg text-muted md:text-xl"
          >
            {data.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button onClick={() => scrollTo('contato')}>Entrar em Contato</Button>
            <Button variant="outline" onClick={() => navigate('/curriculo')}>
              <IoDocumentText size={18} />
              Currículo PDF
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none lg:h-[80vh]"
        >
          <div className="aspect-[3/4] overflow-hidden rounded-sm border border-white/20 shadow-2xl shadow-black/50 lg:h-full lg:aspect-auto">
            <img
              src={imagePath(images.hero)}
              alt={`${data.name} — atleta de judô`}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg to-transparent" />
    </section>
  )
}
