'use client'

import { motion } from 'framer-motion'
import { Check, X, Infinity, Ban } from 'lucide-react'

const beliefs = [
  {
    category: '我相信',
    icon: Check,
    items: [
      '系统比人可靠，但人比系统有创造力',
      '长期关系比单次交易更有价值',
      '信息透明是信任的基础',
      '专业主义是对客户的尊重',
      '技术应该服务于人，而不是替代人',
    ],
  },
  {
    category: '我拒绝',
    icon: X,
    items: [
      '为了成交过度承诺',
      '用低价竞争换取短期订单',
      '把问题推给"行业惯例"',
      '让客户处于信息弱势',
      '停止学习和进化',
    ],
  },
  {
    category: '我长期做',
    icon: Infinity,
    items: [
      '每周研究航线数据和市场趋势',
      '维护和拓展航司关系网络',
      '优化内部流程和系统',
      '培养团队成员的专业能力',
      '投资新技术和工具',
    ],
  },
  {
    category: '我不碰',
    icon: Ban,
    items: [
      '灰色清关或违规操作',
      '明知不可为而为之的订单',
      '与价值观不符的客户合作',
      '牺牲服务质量换取低价',
      '短期投机心态的业务',
    ],
  },
]

export default function PersonalSection() {
  return (
    <section id="beliefs" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">人格与信任</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            我的判断标准。
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            用极少文字，呈现我的价值观边界。
          </p>
        </motion.div>

        {/* Beliefs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {beliefs.map((belief, index) => (
            <motion.div
              key={belief.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white border border-borderLight hover:border-amberGold/20 transition-all duration-500 rounded-xl"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <belief.icon className="w-5 h-5 text-amberGold" />
                <h3 className="text-lg font-semibold text-textPrimary">
                  {belief.category}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-4">
                {belief.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-textSecondary text-sm leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-amberGold/50 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-textPrimary/80 italic">
            "判断一个人，不是看他承诺什么，而是看他拒绝什么。"
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
