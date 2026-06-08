export interface Contact {
  whatsapp: string
  email: string
  instagram: string
}

export interface TechnicalProfile {
  category: string
  belt: string
  weight: string
  height: string
  club: string
  city: string
  federation: string
}

export interface Athlete {
  name: string
  category: string
  tagline: string
  age: number
  birthYear?: number
  origin: string
  bio: string
  history: string
  values: string[]
  goals: { text: string; status: 'achieved' | 'in_progress' | 'planned' }[]
  contact: Contact
  technical: TechnicalProfile
  cvPdf: string
}

export interface Statistics {
  competitions: number
  fights: number
  goldMedals: number
  silverMedals: number
  bronzeMedals: number
  careerYears: number
}

export interface Competition {
  id: string
  year: number
  month: string
  name: string
  location: string
  result: string
  position: 'gold' | 'silver' | 'bronze' | 'other'
  category: string
}

export interface TimelineEvent {
  id: string
  year: number
  month?: string
  title: string
  description: string
  type: 'start' | 'achievement' | 'category' | 'convocation' | 'milestone'
}

export type AchievementType = 'campeonato' | 'medalha' | 'titulo' | 'premiacao'

export interface Achievement {
  id: string
  title: string
  year: number
  type: AchievementType
  location: string
  result: string
  description: string
  image: string
}

export type GalleryCategory = 'treinos' | 'competicoes' | 'podios' | 'bastidores'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  category: GalleryCategory
}

export type SponsorType = 'patrocinador' | 'parceiro' | 'apoiador'

export interface Sponsor {
  id: string
  name: string
  type: SponsorType
  logo?: string
  url?: string
}

export interface NavItem {
  id: string
  label: string
}
