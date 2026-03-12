'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, XCircle } from 'lucide-react'

const goodFit = [
  '年空运货量超过500吨，或年空运预算超过500万',
  '有复杂的项目货需求（超大、超重、温控、危险品）',
  '正在从"拼货代"向"建体系"转型',
  '重视长期稳定合作，而非单次比价',
  '愿意为确定性支付合理溢价',
  '团队有学习意愿，愿意配合流程优化',
]

const badFit = [
  '只看价格，不关心服务和稳定性',
  '需要当天报价、当天订舱的紧急订单为主',
  '对合规性要求模糊，存在灰色操作需求',
  '决策链条过长，无法快速响应',
  '没有固定货量，随机性很强的偶发需求',
  '不愿意分享信息，把货代当"黑箱"使用',
]

export default function AudienceSection() {
  return (
    <section id="audience" className="py-32 bg-deepBlue">
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
          <h2 className="text-heading md:text-heading font-bold text-white mb-6">
            我们合适吗？
          </h2>
          <p className="text-industrialGray/70 text-lg max-w-2xl">
            明确边界，是对彼此时间的尊重。
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
              <h3 className="text-xl font-semibold text-white">适合合作</h3>
            </div>

            <ul className="space-y-4">
              {goodFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-industrialGray/80 text-sm leading-relaxed">
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
            className="p-8 border border-white/5 bg-white/[0.02]"
          >
            <div className="flex items-center gap-3 mb-8">
              <XCircle className="w-6 h-6 text-industrialGray/50" />
              <h3 className="text-xl font-semibold text-white/70">不适合合作</h3>
            </div>

            <ul className="space-y-4">
              {badFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-industrialGray/50 text-sm leading-relaxed">
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
          <p className="text-industrialGray/50 text-sm">
            如果不确定自己是否适合，可以直接联系我，我会诚实告诉你。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
