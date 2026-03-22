'use client'

import { motion } from 'framer-motion'
import { Radar, GitBranch, Users2, Cpu } from 'lucide-react'

const methods = [
  {
    number: '01',
    icon: Radar,
    title: '我如何判断风险',
    description: '建立多维度风险评估模型：航线稳定性指数、航司财务健康度、季节性波动规律、地缘政治预警。不是拍脑袋，是数据驱动的概率计算。',
  },
  {
    number: '02',
    icon: GitBranch,
    title: '我如何设计路径',
    description: '每条航线至少准备Plan A/B/C。直飞快但贵，中转慢但稳，多式联运灵活但复杂。根据货物属性、时效要求、成本预算，输出最优路径矩阵。',
  },
  {
    number: '03',
    icon: Users2,
    title: '我如何让团队交付',
    description: '把个人经验转化为可复用的SOP。从询盘响应、方案设计、订舱执行到异常处理，每个节点有标准、有检查、有反馈。新人3天上手，老人持续进化。',
  },
  {
    number: '04',
    icon: Cpu,
    title: '我如何用系统而非个人英雄主义',
    description: '人管人是上限，系统管人是下限。自建数字化运营系统：自动抓取运价、智能匹配舱位、实时追踪轨迹、预警异常节点。让系统做重复决策，让人做价值判断。',
  },
]

export default function MethodologySection() {
  return (
    <section id="methodology" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">方法论</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            我的系统。
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            不是理论，是15年实战打磨的可执行逻辑。
          </p>
        </motion.div>

        {/* Methods List */}
        <div className="space-y-1">
          {methods.map((method, index) => (
            <motion.div
              key={method.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-borderLight hover:border-amberGold/20 transition-all duration-500"
            >
              <div className="py-12 grid md:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="md:col-span-1">
                  <span className="text-4xl font-bold text-textPrimary/10 group-hover:text-amberGold/30 transition-colors">
                    {method.number}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-4 mb-2">
                    <method.icon className="w-6 h-6 text-amberGold/70" />
                    <h3 className="text-xl font-semibold text-textPrimary">
                      {method.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="md:col-span-8">
                  <p className="text-textMuted leading-relaxed group-hover:text-textSecondary transition-colors">
                    {method.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="border-t border-borderLight" />
      </div>
    </section>
  )
}
