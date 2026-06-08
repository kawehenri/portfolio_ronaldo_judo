import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { IoChevronBack, IoChevronForward, IoClose } from 'react-icons/io5'
import gallery from '../data/gallery.json'
import { BlurredImage } from '../components/shared/BlurredImage'
import { SectionTitle } from '../components/ui/SectionTitle'
import type { GalleryCategory, GalleryImage } from '../types'

const images = gallery as GalleryImage[]

const tabs: { key: GalleryCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'Todas' },
  { key: 'treinos', label: 'Treinos' },
  { key: 'competicoes', label: 'Competições' },
  { key: 'podios', label: 'Pódios' },
  { key: 'bastidores', label: 'Bastidores' },
]

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<GalleryCategory | 'all'>('all')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filtered =
    activeTab === 'all' ? images : images.filter((img) => img.category === activeTab)

  const navigate = (dir: 1 | -1) => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + dir + filtered.length) % filtered.length)
  }

  return (
    <section id="galeria" className="section-padding">
      <div className="container-max">
        <SectionTitle
          subtitle="Momentos marcantes"
          title="Galeria"
          description="Treinos, competições, pódios e bastidores."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`rounded-sm px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                activeTab === tab.key
                  ? 'bg-primary text-white'
                  : 'bg-white/5 text-muted hover:text-text'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {filtered.map((img, i) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.03, 0.3) }}
              onClick={() => setSelectedIndex(i)}
              className="group overflow-hidden rounded-sm border border-white/10 transition-colors hover:border-primary/40"
              aria-label={`Abrir imagem: ${img.alt}`}
            >
              <BlurredImage
                src={img.src}
                alt={img.alt}
                aspectRatio="1"
                className="w-full"
              />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedIndex(null)
              }}
              className="absolute right-4 top-4 z-10 rounded-sm bg-white/10 p-2 text-white hover:bg-white/20"
              aria-label="Fechar galeria"
            >
              <IoClose size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigate(-1)
              }}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-sm bg-white/10 p-3 text-white hover:bg-white/20 md:left-4"
              aria-label="Imagem anterior"
            >
              <IoChevronBack size={24} />
            </button>

            <motion.div
              key={filtered[selectedIndex].id}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="h-[75vh] w-full max-w-5xl overflow-hidden rounded-sm border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <BlurredImage
                src={filtered[selectedIndex].src}
                alt={filtered[selectedIndex].alt}
                className="h-full w-full"
                priority
              />
            </motion.div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                navigate(1)
              }}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-sm bg-white/10 p-3 text-white hover:bg-white/20 md:right-4"
              aria-label="Próxima imagem"
            >
              <IoChevronForward size={24} />
            </button>

            <p className="absolute bottom-6 left-1/2 max-w-lg -translate-x-1/2 text-center text-sm text-muted">
              {filtered[selectedIndex].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
