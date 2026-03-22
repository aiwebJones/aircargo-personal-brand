'use client'

import { motion } from 'framer-motion'
import { Mountain, Brain, Users, TrendingUp, ArrowRight, MessageCircle } from 'lucide-react'

interface AboutSectionENProps {
  onOpenContact: () => void
}

export default function AboutSectionEN({ onOpenContact }: AboutSectionENProps) {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">About Me</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            I&apos;m Zheng Jian (Shenxian)
          </h2>
        </motion.div>

        {/* Core Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-amberGold/10 text-amberGold text-sm font-medium rounded-full">
              16 Years Logistics Veteran
            </span>
            <span className="px-4 py-2 bg-amberGold/10 text-amberGold text-sm font-medium rounded-full">
              AI Tools Practitioner
            </span>
            <span className="px-4 py-2 bg-amberGold/10 text-amberGold text-sm font-medium rounded-full">
              Extreme Sports Enthusiast
            </span>
          </div>
          <p className="text-xl text-textPrimary leading-relaxed max-w-3xl">
            I believe <span className="text-amberGold font-semibold">complex logistics problems are like extreme sports</span> — they require clear planning, precise risk control, and strong execution.
          </p>
        </motion.div>

        {/* Experience & Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-8 bg-surface rounded-2xl border border-borderLight"
        >
          <h3 className="text-lg font-semibold text-textPrimary mb-4">From Operations to Management, Traditional to AI</h3>
          <p className="text-textSecondary leading-relaxed mb-4">
            16 years in logistics, from ground operations to team management. But I got increasingly tired of the <span className="text-red-500">information opacity</span> and <span className="text-red-500">inefficient communication</span> in this industry.
          </p>
          <p className="text-textSecondary leading-relaxed">
            Now I use <span className="text-amberGold font-semibold">AI tools and data analysis</span> to make freight as <span className="text-amberGold font-semibold">trackable as my sports data</span>. Helping clients reduce uncertainty and truly control costs and timelines.
          </p>
        </motion.div>

        {/* What I Focus On */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-textPrimary mb-6">What I Focus On</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-borderLight rounded-xl">
              <p className="text-textSecondary">
                Precision air freight solutions for <span className="text-amberGold font-semibold">cross-border e-commerce</span> and <span className="text-amberGold font-semibold">high-end manufacturing</span> enterprises, covering East China and global routes.
              </p>
            </div>
            <div className="p-4 border border-borderLight rounded-xl">
              <p className="text-textSecondary">
                Not just space — but <span className="text-amberGold font-semibold">data-driven route optimization, risk warning, and cost transparency</span> services.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 bg-gradient-to-r from-amberGold/10 to-orange-500/10 border border-amberGold/30 rounded-2xl text-center"
        >
          <p className="text-textPrimary text-lg mb-6">
            If you&apos;re struggling with <span className="text-amberGold font-semibold">peak season space</span>, <span className="text-amberGold font-semibold">freight rate fluctuations</span>, or <span className="text-amberGold font-semibold">logistics black boxes</span> —
          </p>
          <motion.button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-amberGold text-textPrimary font-medium hover:bg-amberGold/90 transition-all duration-300 rounded-lg shadow-lg shadow-amberGold/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm tracking-wider">Add me for a FREE 20-min diagnosis</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <p className="text-textMuted text-sm mt-4">
            Direct with Zheng Jian, no middleman
          </p>
        </motion.div>
      </div>
    </section>
  )
}
