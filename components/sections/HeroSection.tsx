'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import ParticleBackground from '@/components/ParticleBackground'

interface HeroSectionProps {
  onOpenContact: () => void
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deepBlue">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deepBlue via-deepBlue to-[#0a1623]" />

      {/* Particle animation */}
      <ParticleBackground />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 166, 35, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245, 166, 35, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Personal identity tag */}
          <p className="text-amberGold text-sm tracking-widest mb-6">
            郑坚 / 神仙货运 · 16年国际空运实战
          </p>

          {/* Main headline */}
          <h1 className="text-3xl md:text-display font-display font-bold text-white tracking-tight mb-6 leading-tight">
            告别物流盲区：<br />
            <span className="text-amberGold">用经验+AI工具</span>，<br className="md:hidden" />
            为您提供清晰可控的空运方案
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-industrialGray/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            16年一线操盘经验，结合AI数据分析，专注华东区域及全球精准空运。
            <br className="hidden md:block" />
            不只是报价，更是路线优化、风险预警和成本透明化。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amberGold text-deepBlue font-medium hover:bg-amberGold/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-4 h-4" />
              <span className="text-sm tracking-wider">免费获取《空运核心航线时效与风险自查清单》</span>
            </motion.button>

            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-amberGold/50 text-amberGold hover:bg-amberGold/10 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm tracking-wider font-medium">了解我的故事</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-amberGold/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
