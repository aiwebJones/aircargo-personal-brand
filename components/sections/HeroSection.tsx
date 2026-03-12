'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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
          {/* Main headline - under 12 characters as requested */}
          <h1 className="text-display md:text-display font-display font-bold text-white tracking-tight mb-6">
            确定性交付。
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-industrialGray/80 mb-4 tracking-wide">
            国际空运 · 系统化交付 · 高风险场景操盘
          </p>

          {/* Tagline */}
          <p className="text-lg text-industrialGray/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            我不是在卖运价，我是在把不可控的世界，变成你可以下注的系统。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#problems"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-amberGold/50 text-amberGold hover:bg-amberGold/10 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm tracking-wider font-medium">查看我解决过的问题</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amberGold text-deepBlue font-medium hover:bg-amberGold/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm tracking-wider">直接联系我</span>
            </motion.button>
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
