'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

const goodFit = [
  '不以货量大小论英雄，一票样品和一千吨项目同等对待',
  '紧急订单不推诿，当天报价、当天订舱是基本操作',
  '承认物流的不确定性，愿意和我一起想办法而不是互相甩锅',
  '重视合规，灰色清关、瞒报漏报的事不碰',
  '愿意分享信息，把货代当合作伙伴而不是"黑箱"',
  '长期主义，哪怕一年只有一票货，也值得建立信任',
]

const badFit = [
  '只看价格谁低，不在乎服务质量和风险管控',
  '出了问题第一反应是找人背锅，而不是解决问题',
  '要求100%确定性，不能接受任何意外和风险',
  '信息不透明，关键信息藏着掖着',
  '不尊重专业建议，"我就要这么走"的固执',
  '只想薅羊毛，没有建立长期合作关系的意愿',
]

export default function AudienceSection() {
  return (
    <section id="audience" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">合作对象</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            挑人，不挑货。
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            一票样品和一千吨项目，都值得认真对待。我挑的是合作态度，不是货量大小。
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Good Fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="p-8 border border-amberGold/20 bg-amberGold/[0.02]"
          >
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="w-6 h-6 text-amberGold" />
              <h3 className="text-xl font-semibold text-textPrimary">这样的客户，我抢着做</h3>
            </div>

            <ul className="space-y-4">
              {goodFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-textSecondary text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amberGold/70 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bad Fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 border border-borderLight bg-white"
          >
            <div className="flex items-center gap-3 mb-8">
              <XCircle className="w-6 h-6 text-textMuted" />
              <h3 className="text-xl font-semibold text-textPrimary/70">这样的合作，我敬而远之</h3>
            </div>

            <ul className="space-y-4">
              {badFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-textMuted text-sm leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-industrialGray/30 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-textMuted text-sm">
            不确定是不是一路人？聊一次就知道。反正聊聊又不收钱。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
