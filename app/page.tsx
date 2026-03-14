import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero"
import { VisionSection } from "@/components/sections/vision"
import { PhilosophySection } from "@/components/sections/philosophy"
import { ExperienceSection } from "@/components/sections/experience"
import { AchievementsSection } from "@/components/sections/achievements"
import { TeamSection } from "@/components/sections/team"
import { PartnersSection } from "@/components/sections/partners"
import { GallerySection } from "@/components/sections/gallery"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <VisionSection />
      <PhilosophySection />
      <ExperienceSection />
      <AchievementsSection />
      <TeamSection />
      <PartnersSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
