'use client'

import { motion } from 'framer-motion'
import { TrendingDown, Route, Users, EyeOff, ShieldAlert } from 'lucide-react'

const problems = [
  {
    icon: TrendingDown,
    title: '价格波动',
    description: '运价像过山车，今天锁的舱位明天就亏。没有预判体系，永远在被动应对。',
  },
  {
    icon: Route,
    title: '航线不稳定',
    description: '航班取消、舱位暴仓、中转延误。一条航线断了，整个交付链条崩塌。',
  },
  {
    icon: Users,
    title: '人依赖',
    description: '关键信息在个别人脑子里，离职就断层。没有系统，只有经验主义。',
  },
  {
    icon: EyeOff,
    title: '信息不透明',
    description: '货物在哪？什么状态？什么时候到？客户问三句，你答不上来一句。',
  },
  {
    icon: ShieldAlert,
    title: '责任无法锚定',
    description: '出了问题互相甩锅。没有清晰的责任边界，客户信任一步步消耗殆尽。',
  },
]

export default function InsightSection() {
  return (
    <section id="problems" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4 font-medium">问题洞察</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            真正困扰你的，<br />从来不是价格。
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            价格只是表象。真正吞噬你利润的，是这五个系统性问题。
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-white border border-borderLight hover:border-amberGold/30 transition-all duration-500 rounded-xl shadow-sm hover:shadow-md"
            >
              <problem.icon className="w-8 h-8 text-amberGold mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-textPrimary mb-3">
                {problem.title}
              </h3>
              <p className="text-textMuted text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-textSecondary text-lg italic">
            "这些问题像慢性病，不致命，但每天都在失血。"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
