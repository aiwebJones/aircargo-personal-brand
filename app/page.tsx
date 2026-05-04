'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import ContactModal from '@/components/ContactModal'
import WechatModal from '@/components/WechatModal'
import AIQuoteModal from '@/components/AIQuoteModal'
import HeroSection from '@/components/sections/HeroSection'
import HeroSectionEN from '@/components/sections/HeroSectionEN'
import AfricaNetworkSection from '@/components/sections/AfricaNetworkSection'
import AboutSection from '@/components/sections/AboutSection'
import AboutSectionEN from '@/components/sections/AboutSectionEN'
import CasesSection from '@/components/sections/CasesSection'
import CasesSectionEN from '@/components/sections/CasesSectionEN'
import Footer from '@/components/sections/Footer'
import FooterEN from '@/components/sections/FooterEN'
import BlogSection from '@/components/BlogSection'
import BlogSectionEN from '@/components/BlogSectionEN'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isWechatOpen, setIsWechatOpen] = useState(false)
  const [isAIQuoteOpen, setIsAIQuoteOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh')

  return (
    <>
      <Navigation currentLang={currentLang} onLangChange={setCurrentLang} />
      <main className="min-h-screen bg-white">
        {currentLang === 'zh' ? (
          <>
            <HeroSection 
              onOpenContact={() => setIsContactOpen(true)} 
              onOpenWechat={() => setIsWechatOpen(true)}
              onOpenAIQuote={() => setIsAIQuoteOpen(true)}
            />
            <AfricaNetworkSection />
            <AboutSection onOpenContact={() => setIsContactOpen(true)} />
            <CasesSection />
            <TestimonialsSection />
            <BlogSection />
            <Footer />
          </>
        ) : (
          <>
            <HeroSectionEN onOpenContact={() => setIsContactOpen(true)} />
            <AboutSectionEN onOpenContact={() => setIsContactOpen(true)} />
            <CasesSectionEN />
            <BlogSectionEN />
            <FooterEN />
          </>
        )}
      </main>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WechatModal isOpen={isWechatOpen} onClose={() => setIsWechatOpen(false)} />
      <AIQuoteModal isOpen={isAIQuoteOpen} onClose={() => setIsAIQuoteOpen(false)} />
    </>
  )
}
