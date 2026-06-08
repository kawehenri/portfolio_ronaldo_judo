import { motion } from 'framer-motion'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import athlete from '../data/athlete.json'
import { SectionTitle } from '../components/ui/SectionTitle'
import type { Athlete } from '../types'

const data = athlete as Athlete

export function ContactSection() {
  return (
    <section id="contato" className="section-padding bg-surface/50">
      <div className="container-max">
        <SectionTitle
          subtitle="Fale comigo"
          title="Contato"
          description="Disponível para patrocínios, convocações e parcerias."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto grid max-w-2xl gap-4"
        >
          <a
            href={`https://wa.me/${data.contact.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-sm border border-white/10 bg-surface p-5 transition-colors hover:border-primary/30"
          >
            <FaWhatsapp className="text-green-500" size={24} />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted">WhatsApp</p>
              <p className="font-medium text-text">{data.contact.whatsapp}</p>
            </div>
          </a>

          <a
            href={`mailto:${data.contact.email}`}
            className="flex items-center gap-4 rounded-sm border border-white/10 bg-surface p-5 transition-colors hover:border-primary/30"
          >
            <MdEmail className="text-primary" size={24} />
            <div>
              <p className="text-xs uppercase tracking-wider text-muted">E-mail</p>
              <p className="font-medium text-text">{data.contact.email}</p>
            </div>
          </a>

          {data.contact.instagram && (
            <a
              href={`https://instagram.com/${data.contact.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-sm border border-white/10 bg-surface p-5 transition-colors hover:border-primary/30"
            >
              <FaInstagram className="text-pink-500" size={24} />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">Instagram</p>
                <p className="font-medium text-text">{data.contact.instagram}</p>
              </div>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
