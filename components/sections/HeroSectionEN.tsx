'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Download, Clock, Shield, Zap, Plane, Sparkles } from 'lucide-react'

interface HeroSectionENProps {
  onOpenContact: () => void
  onOpenWechat?: () => void
  onOpenAIQuote?: () => void
}

export default function HeroSectionEN({ onOpenContact, onOpenWechat, onOpenAIQuote }: HeroSectionENProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
      
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 166, 35, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245, 166, 35, 0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* AI Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amberGold/10 border border-amberGold/30 text-amberGold text-sm font-medium rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-powered Air Freight Solutions</span>
          </motion.div>

          {/* Main headline */}
          <h1 className="text-display md:text-display font-display font-bold text-textPrimary tracking-tight mb-6">
            Say Goodbye to 
            <br />
            <span className="text-amberGold">Logistics Blind Spots</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-textSecondary mb-4 max-w-3xl mx-auto leading-relaxed">
            16 Years Experience + <span className="text-amberGold font-semibold">AI Analysis</span> for your cross-border cargo
            <br/>
            <span className="text-amberGold font-semibold">Clear</span> · <span className="text-amberGold font-semibold">Controllable</span> · <span className="text-amberGold font-semibold">Cost-Effective</span>
          </p>

          <p className="text-lg text-textMuted max-w-2xl mx-auto mb-12 leading-relaxed">
            AI monitors space availability in real-time, warns of risks, and optimizes routes. No more peak season panic.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            {onOpenAIQuote && (
              <motion.button
                onClick={onOpenAIQuote}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amberGold to-orange-500 text-textPrimary font-medium hover:shadow-xl hover:shadow-amberGold/30 transition-all duration-300 rounded-lg cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm tracking-wider">AI Quote - Get Plan in 30s</span>
              </motion.button>
            )}
            
            <motion.button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-amberGold text-amberGold hover:bg-amberGold hover:text-textPrimary transition-all duration-300 group rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-sm tracking-wider font-medium">Contact Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Value Props */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 text-textSecondary">
              <Sparkles className="w-5 h-5 text-amberGold" />
              <span className="text-sm">AI Optimization</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-textSecondary">
              <Plane className="w-5 h-5 text-amberGold" />
              <span className="text-sm">Real-time Monitoring</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-textSecondary">
              <Shield className="w-5 h-5 text-amberGold" />
              <span className="text-sm">Risk Warning</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-textSecondary">
              <Zap className="w-5 h-5 text-amberGold" />
              <span className="text-sm">Cost Transparency</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-amberGold/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
