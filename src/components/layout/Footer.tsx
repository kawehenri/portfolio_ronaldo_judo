import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { navItems } from '../../data/navigation'
import athlete from '../../data/athlete.json'
import type { Athlete } from '../../types'

const data = athlete as Athlete

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/30 bg-surface">
      <div className="container-max section-padding !py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold uppercase tracking-wider">
              Ronaldo
            </h3>
            <p className="mt-2 text-sm text-muted">
              Atleta de judô — Academia Corpo Arte
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
              Navegação
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navItems.slice(0, 6).map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted transition-colors hover:text-text"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-primary">
              Redes Sociais
            </h4>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${data.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-primary"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href={`mailto:${data.contact.email}`}
                className="text-muted transition-colors hover:text-primary"
                aria-label="E-mail"
              >
                <MdEmail size={20} />
              </a>
              {data.contact.instagram && (
                <a
                  href={`https://instagram.com/${data.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-primary"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-muted">
          © {year} Ronaldo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
