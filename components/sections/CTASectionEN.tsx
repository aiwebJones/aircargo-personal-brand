'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react'

interface CTASectionENProps {
  onOpenContact: () => void
}

export default function CTASectionEN({ onOpenContact }: CTASectionENProps) {
  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">Ready to Ship?</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            Let&apos;s Talk.
          </h2>
          <p className="text-textSecondary text-lg mb-12 max-w-2xl mx-auto">
            Tell me what you&apos;re shipping, where it&apos;s going, and when it needs to arrive. 
            I&apos;ll give you a solution—not just a quote.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          <a
            href="mailto:globegsa@gmail.com"
            className="p-6 bg-white border border-borderLight rounded-xl hover:border-amberGold/30 transition-all group"
          >
            <Mail className="w-8 h-8 text-amberGold mx-auto mb-4" />
            <h3 className="font-semibold text-textPrimary mb-2">Email</h3>
            <p className="text-textMuted text-sm">globegsa@gmail.com</p>
          </a>
          
          <a
            href="tel:13816539222"
            className="p-6 bg-white border border-borderLight rounded-xl hover:border-amberGold/30 transition-all group"
          >
            <Phone className="w-8 h-8 text-amberGold mx-auto mb-4" />
            <h3 className="font-semibold text-textPrimary mb-2">Phone</h3>
            <p className="text-textMuted text-sm">138-1653-9222</p>
          </a>
          
          <div className="p-6 bg-white border border-borderLight rounded-xl">
            <MessageCircle className="w-8 h-8 text-amberGold mx-auto mb-4" />
            <h3 className="font-semibold text-textPrimary mb-2">WeChat</h3>
            <p className="text-textMuted text-sm">jnb931</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-amberGold text-white rounded-xl font-medium 
                     hover:bg-amberGold/90 transition-all duration-300 shadow-lg shadow-amberGold/20"
          >
            Get a Quote Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-textMuted text-sm mt-4">
            Response within 2 hours during business hours
          </p>
        </motion.div>
      </div>
    </section>
  )
}
