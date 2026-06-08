import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import athlete from '../data/athlete.json'
import competitions from '../data/competitions.json'
import images from '../data/images.json'
import sponsors from '../data/sponsors.json'
import statistics from '../data/statistics.json'
import { imagePath } from '../lib/imagePath'
import type { Athlete, Competition, Sponsor, Statistics } from '../types'
import '../styles/curriculo.css'

const data = athlete as Athlete
const stats = statistics as Statistics
const results = competitions as Competition[]
const partners = sponsors as Sponsor[]

export function Curriculo() {
  const handlePrint = () => window.print()

  return (
    <div className="curriculo-page min-h-screen">
      <Helmet>
        <title>Currículo Esportivo — Ronaldo | Judô Sub-15</title>
        <meta
          name="description"
          content="Currículo esportivo de Ronaldo, atleta de judô Sub-15, Academia Corpo Arte, Brasília. Conquistas, estatísticas e contato."
        />
      </Helmet>

      <div className="no-print sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
        <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
          ← Voltar ao portfólio
        </Link>
        <button
          onClick={handlePrint}
          className="rounded bg-[#8b1a1a] px-5 py-2 text-sm font-semibold text-white hover:bg-[#6d1414]"
        >
          Salvar como PDF
        </button>
      </div>

      <article className="mx-auto max-w-[210mm] px-6 py-8 md:px-10 md:py-10">
        <header className="flex flex-col gap-6 border-b border-gray-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-5">
            <img
              src={imagePath(images.profile)}
              alt={`Foto de perfil de ${data.name}`}
              width={96}
              height={96}
              className="h-24 w-24 shrink-0 rounded object-cover object-top"
            />
            <div>
              <h1>{data.name}</h1>
              <p className="mt-1 text-base font-semibold text-[#8b1a1a]">
                Atleta de Judô — {data.technical.category}
              </p>
              <p className="text-sm text-gray-600">
                {data.technical.club} · {data.technical.city}
              </p>
              <p className="mt-2 text-sm text-gray-700">{data.tagline}</p>
            </div>
          </div>

          <address className="not-italic text-sm text-gray-700 sm:text-right">
            <p>
              <strong>E-mail:</strong>{' '}
              <a href={`mailto:${data.contact.email}`} className="text-[#8b1a1a]">
                {data.contact.email}
              </a>
            </p>
            <p>
              <strong>Telefone:</strong> {data.contact.whatsapp}
            </p>
            <p>
              <strong>Idade:</strong> {data.age} anos
            </p>
            <p>
              <strong>Federação:</strong> {data.technical.federation}
            </p>
          </address>
        </header>

        <section>
          <h2>Resumo Profissional</h2>
          <p>{data.bio}</p>
          <p className="mt-2">{data.history}</p>
        </section>

        <section>
          <h2>Dados Técnicos</h2>
          <ul>
            <li>
              <strong>Categoria:</strong> {data.technical.category}
            </li>
            <li>
              <strong>Clube:</strong> {data.technical.club}
            </li>
            <li>
              <strong>Cidade:</strong> {data.technical.city}
            </li>
            <li>
              <strong>Federação:</strong> {data.technical.federation}
            </li>
            <li>
              <strong>Carreira competitiva:</strong> {stats.careerYears} anos (desde 2022)
            </li>
          </ul>
        </section>

        <section>
          <h2>Estatísticas</h2>
          <ul>
            <li>
              <strong>{stats.competitions}</strong> competições disputadas
            </li>
            <li>
              <strong>{stats.fights}</strong> lutas realizadas
            </li>
            <li>
              <strong>{stats.goldMedals}</strong> medalhas de ouro ·{' '}
              <strong>{stats.silverMedals}</strong> prata ·{' '}
              <strong>{stats.bronzeMedals}</strong> bronze
            </li>
          </ul>
        </section>

        <section>
          <h2>Trajetória e Resultados</h2>
          <ul>
            {results.map((comp) => (
              <li key={comp.id}>
                <strong>
                  {comp.month}/{comp.year}
                </strong>{' '}
                — {comp.name}, {comp.location} — {comp.result} ({comp.category})
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Principais Conquistas</h2>
          <ul>
            <li>Campeão Brasileiro Regional Sub-15 — Campo Verde, MT (2026)</li>
            <li>Bronze Campeonato Brasileiro Nacional Sub-15 — Aracaju, SE (2026)</li>
            <li>Bronze Copa Minas de Judô Sub-13 — Belo Horizonte, MG (2025)</li>
            <li>Bronze Brasileiro Regional Sub-13 — Ji-Paraná, RO (2025)</li>
            <li>7º lugar Brasileiro Nacional — João Pessoa, PB (2025)</li>
          </ul>
        </section>

        <section>
          <h2>Metas</h2>
          <ul>
            {data.goals.map((goal) => (
              <li key={goal.text}>{goal.text}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Valores</h2>
          <p>{data.values.join(' · ')}</p>
        </section>

        <section>
          <h2>Patrocinadores e Apoio</h2>
          <p>{partners.map((s) => s.name).join(' · ')}</p>
        </section>
      </article>
    </div>
  )
}
