'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import ContactModal from '@/components/ContactModal'
import WechatModal from '@/components/WechatModal'
import AIQuoteModal from '@/components/AIQuoteModal'
import HeroSection from '@/components/sections/HeroSection'
import HeroSectionEN from '@/components/sections/HeroSectionEN'
import AfricaNetworkSection from '@/components/sections/AfricaNetworkSection'
import RouteProgramsSection from '@/components/sections/RouteProgramsSection'
import AboutSection from '@/components/sections/AboutSection'
import AboutSectionEN from '@/components/sections/AboutSectionEN'
import CasesSection from '@/components/sections/CasesSection'
import CasesSectionEN from '@/components/sections/CasesSectionEN'
import Footer from '@/components/sections/Footer'
import FooterEN from '@/components/sections/FooterEN'
import BlogSection from '@/components/BlogSection'
import BlogSectionEN from '@/components/BlogSectionEN'
import TestimonialsSection from '@/components/TestimonialsSection'

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '什么是747全货机开鼻门装载？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '747全货机开鼻门装载适合普通货舱门无法接收的超长货物。执行前必须核对尺寸、重量、重心、装载方向、地面设备和机型限制。',
      },
    },
    {
      '@type': 'Question',
      name: '中国到非洲大件空运怎么报价？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '报价需要每件长宽高、毛重、品名、包装照片、起运地、目的机场或项目地址、货好时间和最晚到货时间。超长或超重货还要确认主甲板、吊点、重心、中转和目的地操作条件。',
      },
    },
    {
      '@type': 'Question',
      name: '为什么中国到非洲大件货会经LGG或BRU中转？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '当中国直飞航班的舱门、机型或板位无法接受大件货时，可先进入LGG或BRU等欧洲货运枢纽，再衔接B747F主甲板或其他非洲二程方案。中转前需确认仓库接货、重新组板、文件和二程尺寸限制。',
      },
    },
    {
      '@type': 'Question',
      name: '非洲项目货为什么要提前检查清关和二程交付？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '机场到达不等于项目交付。进口商资料、HS Code、目的地代理、清关责任、机场卸货、卡车和现场接收条件都可能影响总时效和成本，应在订舱前确认。',
      },
    },
  ],
}

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isWechatOpen, setIsWechatOpen] = useState(false)
  const [isAIQuoteOpen, setIsAIQuoteOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />
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
            <RouteProgramsSection />
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
