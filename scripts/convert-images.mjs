import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const ROOT = path.resolve('.')
const OUT = path.join(ROOT, 'public', 'media')

const FOLDERS = {
  perfil: {
    src: 'fotos_de_perfil',
    gallery: false,
  },
  'inicio-trajetoria': {
    src: 'fotos_inicio_da_trajetoria',
    category: 'treinos',
    label: 'Início da trajetória',
  },
  'brasileiro-2025-joaopessoa': {
    src: 'imagens_campeonatobrasileiro2025_joaopessoa',
    category: 'competicoes',
    label: 'Brasileiro Nacional 2025 — João Pessoa',
  },
  'regional-2025-jiparana': {
    src: 'imagens_campeonatobrasileiroregional2025_jiparana',
    category: 'podios',
    label: 'Brasileiro Regional 2025 — Ji-Paraná (Bronze)',
  },
  'regional-2026-matogrosso': {
    src: 'imagens_campeonatobrasileiroregional2026_matogrosso',
    category: 'podios',
    label: 'Brasileiro Regional 2026 — Campo Verde (Ouro)',
  },
  'brasileiro-2026-aracaju': {
    src: 'imagens_campeontatobrasileiro2026_aracaju',
    category: 'podios',
    label: 'Brasileiro Nacional 2026 — Aracaju (Bronze)',
  },
  'copa-minas-2025-bh': {
    src: 'imagens_copaminas2025_belohorizonte',
    category: 'podios',
    label: 'Copa Minas 2025 — Belo Horizonte (Bronze)',
  },
  'equipes-amizades': {
    src: 'imagens_equipes_amizades',
    category: 'bastidores',
    label: 'Equipe e amizades',
  },
  senseis: {
    src: 'imagens_senseis',
    category: 'bastidores',
    label: 'Senseis e mestres',
  },
  'certificado-louvor': {
    src: 'especial_cerfificado_de_moção_de_louvor',
    category: 'bastidores',
    label: 'Certificado de Moção de Louvor',
    altSrc: 'especial_cerfificado_de_mo%C3%A7%C3%A3o_de_louvor',
  },
  apoiadores: {
    src: 'imagens_apoiadores',
    gallery: false,
  },
}

const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i

function findFolder(folderName, altName) {
  const direct = path.join(ROOT, folderName)
  if (fs.existsSync(direct)) return direct
  if (altName) {
    const alt = path.join(ROOT, altName)
    if (fs.existsSync(alt)) return alt
  }
  const match = fs.readdirSync(ROOT).find((d) => {
    try {
      return fs.statSync(path.join(ROOT, d)).isDirectory() && d.startsWith(folderName.slice(0, 20))
    } catch {
      return false
    }
  })
  return match ? path.join(ROOT, match) : null
}

async function convertToWebp(inputPath, outputPath) {
  await sharp(inputPath)
    .rotate()
    .webp({ quality: 88, effort: 4 })
    .toFile(outputPath)
}

const manifest = {
  profile: [],
  gallery: [],
  sponsors: [],
  achievements: {},
}

if (fs.existsSync(OUT)) fs.rmSync(OUT, { recursive: true })
fs.mkdirSync(OUT, { recursive: true })

for (const [slug, config] of Object.entries(FOLDERS)) {
  const srcDir = findFolder(config.src, config.altSrc)
  if (!srcDir) {
    console.warn(`Pasta não encontrada: ${config.src}`)
    continue
  }

  const outDir = path.join(OUT, slug)
  fs.mkdirSync(outDir, { recursive: true })

  const files = fs
    .readdirSync(srcDir)
    .filter((f) => IMAGE_EXT.test(f))
    .sort()

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const outName = `${String(i + 1).padStart(2, '0')}.webp`
    const outPath = path.join(outDir, outName)
    await convertToWebp(path.join(srcDir, file), outPath)

    const webPath = `/media/${slug}/${outName}`

    if (slug === 'perfil') {
      manifest.profile.push({ src: webPath, alt: `Ronaldo — foto de perfil ${i + 1}` })
    } else if (slug === 'apoiadores') {
      const name = file.replace(/\.[^.]+$/, '').replace(/_/g, ' ')
      manifest.sponsors.push({ src: webPath, file: file.toLowerCase() })
    } else if (config.category) {
      manifest.gallery.push({
        id: `gal-${slug}-${i + 1}`,
        src: webPath,
        alt: `${config.label} — foto ${i + 1}`,
        category: config.category,
      })
    }

    console.log(`✓ ${slug}/${outName}`)
  }
}

manifest.achievements = {
  'ach-1': '/media/regional-2026-matogrosso/01.webp',
  'ach-2': '/media/brasileiro-2026-aracaju/01.webp',
  'ach-3': '/media/copa-minas-2025-bh/01.webp',
  'ach-4': '/media/regional-2025-jiparana/01.webp',
  'ach-5': '/media/brasileiro-2025-joaopessoa/01.webp',
  'ach-6': '/media/certificado-louvor/01.webp',
}

const dataDir = path.join(ROOT, 'src', 'data')

fs.writeFileSync(path.join(dataDir, 'media-manifest.json'), JSON.stringify(manifest, null, 2))
fs.writeFileSync(path.join(dataDir, 'gallery.json'), JSON.stringify(manifest.gallery, null, 2))

fs.writeFileSync(
  path.join(dataDir, 'images.json'),
  JSON.stringify(
    {
      hero: manifest.profile[0]?.src ?? '',
      heroBackground: '/media/brasileiro-2026-aracaju/03.webp',
      profile: manifest.profile[1]?.src ?? manifest.profile[0]?.src ?? '',
      og: manifest.profile[0]?.src ?? '',
    },
    null,
    2,
  ),
)

const sponsorMap = {
  r4: { id: 'sp-1', name: 'R4 Brasília Automóveis', type: 'patrocinador' },
  compete: { id: 'sp-2', name: 'Compete Brasília', type: 'parceiro' },
  corpo: { id: 'sp-3', name: 'Academia Corpo Arte', type: 'apoiador' },
  cbj: { id: 'sp-4', name: 'CBJ', type: 'apoiador' },
  femeju: { id: 'sp-5', name: 'Femeju', type: 'apoiador' },
}

const sponsors = manifest.sponsors
  .map((s) => {
    const key = Object.keys(sponsorMap).find((k) => s.file.includes(k))
    if (!key) return null
    return { ...sponsorMap[key], logo: s.src }
  })
  .filter(Boolean)

fs.writeFileSync(path.join(dataDir, 'sponsors.json'), JSON.stringify(sponsors, null, 2))

const achievementsPath = path.join(dataDir, 'achievements.json')
if (fs.existsSync(achievementsPath)) {
  const achievements = JSON.parse(fs.readFileSync(achievementsPath, 'utf8'))
  for (const item of achievements) {
    if (manifest.achievements[item.id]) item.image = manifest.achievements[item.id]
  }
  fs.writeFileSync(achievementsPath, JSON.stringify(achievements, null, 2))
}

console.log('\nArquivos atualizados: media-manifest, gallery, images, sponsors, achievements')
