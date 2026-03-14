'use client'

import { motion } from 'framer-motion'
import { MessageCircle, QrCode, Clock, Gift, Handshake } from 'lucide-react'

interface CTASectionProps {
  onOpenContact: () => void
}

export default function CTASection({ onOpenContact }: CTASectionProps) {
  return (
    <section id="contact" className="py-32 bg-[#08121c]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline */}
          <p className="text-amberGold text-sm tracking-widest mb-6">直接与主理人交流</p>
          <h2 className="text-heading md:text-heading font-bold text-white mb-6">
            如果你正在为物流问题头疼，<br />
            我们可以聊20分钟。
          </h2>
          <p className="text-industrialGray/60 text-lg mb-12 max-w-2xl mx-auto">
            不是销售对话，是理性诊断。我会告诉你我的判断，你可以验证我的思路是否匹配你的需求。
          </p>

          {/* WeChat Primary CTA */}
          <div className="max-w-md mx-auto mb-12">
            <motion.div
              className="p-8 border border-amberGold/30 bg-amberGold/[0.03]"
              whileHover={{ borderColor: 'rgba(245, 166, 35, 0.5)' }}
            >
              <QrCode className="w-16 h-16 text-amberGold mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">微信扫码联系</h3>
              <p className="text-industrialGray/60 text-sm mb-4">
                直接与主理人郑坚交流，无中间环节
              </p>
              <p className="text-amberGold text-sm font-medium">
                微信号：air931
              </p>
            </motion.div>
          </div>

          {/* Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.a
              href="weixin://dl/chat?air931"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-amberGold text-deepBlue font-medium hover:bg-amberGold/90 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="tracking-wide">微信直接联系</span>
            </motion.a>

            <motion.button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white hover:border-amberGold/50 hover:text-amberGold transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="tracking-wide">留下您的需求</span>
            </motion.button>
          </div>

          {/* Service Details */}
          <div className="pt-12 border-t border-white/5">
            <div className="grid md:grid-cols-3 gap-8 text-sm text-industrialGray/50">
              <div className="flex flex-col items-center gap-2">
                <Clock className="w-5 h-5 text-amberGold/50" />
                <p className="text-white/70">响应时间</p>
                <p>工作日 24 小时内</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Gift className="w-5 h-5 text-amberGold/50" />
                <p className="text-white/70">首次诊断</p>
                <p>20 分钟，完全免费</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Handshake className="w-5 h-5 text-amberGold/50" />
                <p className="text-white/70">合作方式</p>
                <p>按项目或年度合作</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
