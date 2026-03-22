'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageCircle } from 'lucide-react'

interface CTASectionProps {
  onOpenContact: () => void
}

export default function CTASection({ onOpenContact }: CTASectionProps) {
  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <p className="text-amberGold text-sm tracking-widest mb-6">行动入口</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            如果你正在面对高风险决策，<br />
            我们可以聊一次。
          </h2>
          <p className="text-textMuted text-lg mb-12 max-w-2xl mx-auto">
            不是销售对话，是理性探讨。我会告诉你我的判断，你也可以验证我的思路是否匹配你的需求。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA - Opens Modal */}
            <motion.button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-amberGold text-deepBlue font-medium hover:bg-amberGold/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-5 h-5" />
              <span className="tracking-wide">发起一次理性对话</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* Secondary CTA */}
            <motion.a
              href="weixin://dl/chat?jnb931"
              className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-textPrimary hover:border-amberGold/50 hover:text-amberGold transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="tracking-wide">微信联系</span>
            </motion.a>
          </div>

          {/* Additional Info */}
          <div className="mt-16 pt-16 border-t border-borderLight">
            <div className="grid md:grid-cols-3 gap-8 text-sm text-textMuted">
              <div>
                <p className="text-textPrimary/70 mb-2">响应时间</p>
                <p>工作日 24 小时内</p>
              </div>
              <div>
                <p className="text-textPrimary/70 mb-2">首次沟通</p>
                <p>30 分钟，免费</p>
              </div>
              <div>
                <p className="text-textPrimary/70 mb-2">后续合作</p>
                <p>按项目或年度</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
