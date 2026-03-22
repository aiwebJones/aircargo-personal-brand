'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-16 border-t border-borderLight bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* 联系方式 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-textPrimary mb-6 text-center">
            直接与主理人郑坚交流
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://weixin.qq.com/cgi-bin/bin/checkopcode?operator=jnb931"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amberGold text-textPrimary font-medium rounded-lg hover:bg-amberGold/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>微信：jnb931</span>
            </a>
            <a
              href="mailto:globegsa@Gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-borderLight text-textSecondary font-medium rounded-lg hover:border-amberGold hover:text-amberGold transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>globegsa@Gmail.com</span>
            </a>
            <a
              href="tel:13816539222"
              className="inline-flex items-center gap-2 px-6 py-3 border border-borderLight text-textSecondary font-medium rounded-lg hover:border-amberGold hover:text-amberGold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>13816539222</span>
            </a>
          </div>
        </motion.div>

        {/* 底部信息 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-borderLight">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-textPrimary font-semibold">神仙货运 Jones</p>
            <p className="text-textMuted text-sm">16年物流老兵 · AI实战派 · 极限运动爱好者</p>
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-textMuted hover:text-amberGold transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">回到顶部</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textMuted text-sm"
          >
            <p>© {currentYear} 神仙货运Jones. 保留所有权利.</p>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-borderLight text-center"
        >
          <p className="text-textMuted text-sm tracking-wide">
            "告别物流盲区：用16年经验+AI工具，为您的跨境货物提供清晰、可控、高性价比的空运方案"
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
