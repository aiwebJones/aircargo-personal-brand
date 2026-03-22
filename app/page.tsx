'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import ContactModal from '@/components/ContactModal'
import WechatModal from '@/components/WechatModal'
import AIQuoteModal from '@/components/AIQuoteModal'
import HeroSection from '@/components/sections/HeroSection'
import HeroSectionEN from '@/components/sections/HeroSectionEN'
import AboutSection from '@/components/sections/AboutSection'
import AboutSectionEN from '@/components/sections/AboutSectionEN'
import CasesSection from '@/components/sections/CasesSection'
import Footer from '@/components/sections/Footer'

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
            <AboutSection onOpenContact={() => setIsContactOpen(true)} />
            <CasesSection />
            <Footer />
          </>
        ) : (
          <>
            <HeroSectionEN onOpenContact={() => setIsContactOpen(true)} />
            <AboutSectionEN onOpenContact={() => setIsContactOpen(true)} />
            <CasesSection />
            <Footer />
          </>
        )}
      </main>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <WechatModal isOpen={isWechatOpen} onClose={() => setIsWechatOpen(false)} />
      <AIQuoteModal isOpen={isAIQuoteOpen} onClose={() => setIsAIQuoteOpen(false)} />
    </>
  )
}
