'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import ContactModal from '@/components/ContactModal'
import HeroSection from '@/components/sections/HeroSection'
import AboutMeSection from '@/components/sections/AboutMeSection'
import InsightSection from '@/components/sections/InsightSection'
import MethodologySection from '@/components/sections/MethodologySection'
import CapabilitiesSection from '@/components/sections/CapabilitiesSection'
import InsightsSection from '@/components/sections/InsightsSection'
import AudienceSection from '@/components/sections/AudienceSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-deepBlue">
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <AboutMeSection />
        <InsightSection />
        <MethodologySection />
        <CapabilitiesSection />
        <InsightsSection />
        <AudienceSection />
        <CTASection onOpenContact={() => setIsContactOpen(true)} />
        <Footer />
      </main>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
