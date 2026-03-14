'use client'

import { motion } from 'framer-motion'
import { Mountain, Brain, Briefcase, MessageCircle } from 'lucide-react'

const highlights = [
  {
    icon: Briefcase,
    label: '16年物流行业老兵',
  },
  {
    icon: Brain,
    label: 'AI工具物流实战派',
  },
  {
    icon: Mountain,
    label: '极限运动爱好者',
  },
]

export default function AboutMeSection() {
  return (
    <section id="about" className="py-32 bg-[#08121c]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">关于我</p>
          <h2 className="text-heading md:text-heading font-bold text-white mb-6">
            我是郑坚（神仙货运）
          </h2>
        </motion.div>

        {/* Identity Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          {highlights.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-6 py-3 border border-amberGold/30 bg-amberGold/[0.05]"
            >
              <item.icon className="w-5 h-5 text-amberGold" />
              <span className="text-white text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Content Blocks */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Paragraph 1 - Philosophy */}
            <div className="p-8 border border-white/5 hover:border-amberGold/20 transition-all duration-500">
              <h3 className="text-lg font-semibold text-amberGold mb-4">我的信念</h3>
              <p className="text-industrialGray/70 leading-relaxed">
                我相信，复杂的物流问题和极限运动一样，需要清晰的规划、精准的风险控制和强大的执行力。
                滑雪时，每一个弯道都需要提前判断；越野跑时，每一段赛道都需要配速策略。
                空运也是如此——不是拼运气，而是拼系统和判断力。
              </p>
            </div>

            {/* Paragraph 2 - Journey */}
            <div className="p-8 border border-white/5 hover:border-amberGold/20 transition-all duration-500">
              <h3 className="text-lg font-semibold text-amberGold mb-4">我的经历</h3>
              <p className="text-industrialGray/70 leading-relaxed">
                从操作到管理，从传统货代到探索AI赋能物流——16年里，我经历了行业的起伏变化。
                我厌倦了行业内信息不透明和低效沟通。现在，我正在用AI工具和数据分析，
                让货运过程像运动数据一样清晰可追踪，帮助客户减少不确定性，真正掌控成本与时效。
              </p>
            </div>
          </motion.div>

          {/* Right Column - What I Offer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            {/* Paragraph 3 - Current Focus */}
            <div className="p-8 border border-white/5 hover:border-amberGold/20 transition-all duration-500">
              <h3 className="text-lg font-semibold text-amberGold mb-4">我的专注</h3>
              <p className="text-industrialGray/70 leading-relaxed">
                目前，我专注于为跨境电商和高端制造企业，提供华东区域及全球的精准空运解决方案。
                我不仅提供仓位，更提供基于数据分析的路线优化、风险预警和成本透明化服务。
                每一个方案，都附带清晰的数据依据和风险备用方案。
              </p>
            </div>

            {/* CTA Block */}
            <div className="p-8 border border-amberGold/30 bg-amberGold/[0.03] hover:bg-amberGold/[0.06] transition-all duration-500">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-8 h-8 text-amberGold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">免费诊断交流</h3>
                  <p className="text-industrialGray/70 leading-relaxed mb-4">
                    如果你正在为旺季仓位、运费波动或物流黑盒而头疼，
                    欢迎加我微信，我们可以进行一次20分钟的免费诊断交流。
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-amberGold text-sm font-medium hover:text-amberGold/80 transition-colors"
                  >
                    <span>立即联系</span>
                    <span className="text-xs">→</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-white/80 italic">
            &ldquo;判断一个人，不是看他承诺什么，而是看他拒绝什么。&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
