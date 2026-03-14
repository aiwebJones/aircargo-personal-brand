'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-white/5 bg-deepBlue">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white font-semibold">神仙货运 · 郑坚</p>
            <p className="text-industrialGray/50 text-sm">16年国际空运 · AI赋能物流 · 精准交付</p>
          </motion.div>

          {/* WeChat Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <a
              href="weixin://dl/chat?air931"
              className="flex items-center gap-2 px-4 py-2 border border-amberGold/30 text-amberGold text-sm hover:bg-amberGold/10 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>微信：air931</span>
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-industrialGray/40 text-sm"
          >
            <p>&copy; {currentYear} 神仙货运 All rights reserved.</p>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-industrialGray/30 text-xs tracking-wider">
            &ldquo;复杂的物流问题和极限运动一样，需要清晰的规划、精准的风险控制和强大的执行力。&rdquo;
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
