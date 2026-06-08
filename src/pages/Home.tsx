import { VideoSection } from '../sections/VideoSection'
import { AboutSection } from '../sections/AboutSection'
import { AchievementsSection } from '../sections/AchievementsSection'
import { ContactSection } from '../sections/ContactSection'
import { GallerySection } from '../sections/GallerySection'
import { HeroSection } from '../sections/HeroSection'
import { ResultsSection } from '../sections/ResultsSection'
import { SponsorsSection } from '../sections/SponsorsSection'
import { StatsSection } from '../sections/StatsSection'
import { TechnicalSection } from '../sections/TechnicalSection'
import { TimelineSection } from '../sections/TimelineSection'

export function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <TimelineSection />
      <AchievementsSection />
      <ResultsSection />
      <GallerySection />
      <VideoSection />
      <TechnicalSection />
      <SponsorsSection />
      <ContactSection />
    </>
  )
}
