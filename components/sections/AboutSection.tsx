'use client'

import { motion } from 'framer-motion'
import { Mountain, Droplets, Brain, Users, TrendingUp, ArrowRight, MessageCircle } from 'lucide-react'

interface AboutSectionProps {
  onOpenContact: () => void
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - 我是郑坚（神仙货运） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">关于我</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            我是郑坚（神仙货运）
          </h2>
        </motion.div>

        {/* 核心定位 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-amberGold/10 text-amberGold text-sm font-medium rounded-full">
              16年物流老兵
            </span>
            <span className="px-4 py-2 bg-amberGold/10 text-amberGold text-sm font-medium rounded-full">
              AI工具实战派
            </span>
            <span className="px-4 py-2 bg-amberGold/10 text-amberGold text-sm font-medium rounded-full">
              极限运动爱好者
            </span>
          </div>
          <p className="text-xl text-textPrimary leading-relaxed max-w-3xl">
            我相信，<span className="text-amberGold font-semibold">复杂的物流问题和极限运动一样</span>，需要清晰的规划、精准的风险控制和强大的执行力。
          </p>
        </motion.div>

        {/* 经历与理念 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-8 bg-surface rounded-2xl border border-borderLight"
        >
          <h3 className="text-lg font-semibold text-textPrimary mb-4">从操作到管理，从传统到AI</h3>
          <p className="text-textSecondary leading-relaxed mb-4">
            16年物流行业摸爬滚打，从底层操作到团队管理，该踩的坑都踩遍了。但我越来越厌倦行业内<span className="text-red-500">信息不透明</span>和<span className="text-red-500">低效沟通</span>的现状。
          </p>
          <p className="text-textSecondary leading-relaxed">
            现在，我正尝试用<span className="text-amberGold font-semibold">AI工具和数据分析</span>，让货运过程像我的运动数据一样<span className="text-amberGold font-semibold">清晰可追踪</span>。帮助客户减少不确定性，真正掌控成本与时效。
          </p>
        </motion.div>

        {/* 现在能提供什么 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-textPrimary mb-6">目前我专注于</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-borderLight rounded-xl">
              <p className="text-textSecondary">
                为<span className="text-amberGold font-semibold">跨境电商</span>和<span className="text-amberGold font-semibold">高端制造企业</span>，提供华东区域及全球的精准空运解决方案
              </p>
            </div>
            <div className="p-4 border border-borderLight rounded-xl">
              <p className="text-textSecondary">
                不仅提供仓位，更提供<span className="text-amberGold font-semibold">基于数据分析的路线优化、风险预警和成本透明化</span>服务
              </p>
            </div>
          </div>
        </motion.div>

        {/* 能力版图 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <p className="text-textMuted text-sm tracking-widest mb-6">我的能力版图</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-surface border border-borderLight hover:border-amberGold/20 transition-all duration-500 group rounded-xl">
              <Mountain className="w-5 h-5 text-amberGold mb-4" />
              <h4 className="text-lg font-semibold text-textPrimary mb-2 group-hover:text-amberGold transition-colors">
                风险嗅觉
              </h4>
              <p className="text-textMuted text-sm">
                滑雪/冲浪/越野跑，风险评估的直觉用在物流上
              </p>
            </div>
            <div className="p-6 bg-surface border border-borderLight hover:border-amberGold/20 transition-all duration-500 group rounded-xl">
              <Brain className="w-5 h-5 text-amberGold mb-4" />
              <h4 className="text-lg font-semibold text-textPrimary mb-2 group-hover:text-amberGold transition-colors">
                AI工具
              </h4>
              <p className="text-textMuted text-sm">
                报价自动化、数据分析，用技术为业务服务
              </p>
            </div>
            <div className="p-6 bg-surface border border-borderLight hover:border-amberGold/20 transition-all duration-500 group rounded-xl">
              <Users className="w-5 h-5 text-amberGold mb-4" />
              <h4 className="text-lg font-semibold text-textPrimary mb-2 group-hover:text-amberGold transition-colors">
                团队搭建
              </h4>
              <p className="text-textMuted text-sm">
                从0到1建团队经验，帮你少走弯路
              </p>
            </div>
            <div className="p-6 bg-surface border border-borderLight hover:border-amberGold/20 transition-all duration-500 group rounded-xl">
              <TrendingUp className="w-5 h-5 text-amberGold mb-4" />
              <h4 className="text-lg font-semibold text-textPrimary mb-2 group-hover:text-amberGold transition-colors">
                销售实战
              </h4>
              <p className="text-textMuted text-sm">
                懂客户需求，优化报价策略和成交话术
              </p>
            </div>
          </div>
        </motion.div>

        {/* 强力行动号召 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 bg-gradient-to-r from-amberGold/10 to-orange-500/10 border border-amberGold/30 rounded-2xl text-center"
        >
          <p className="text-textPrimary text-lg mb-6">
            如果你正在为<span className="text-amberGold font-semibold">旺季仓位</span>、<span className="text-amberGold font-semibold">运费波动</span>或<span className="text-amberGold font-semibold">物流黑盒</span>而头疼——
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amberGold text-textPrimary font-medium hover:bg-amberGold/90 transition-all duration-300 rounded-lg shadow-lg shadow-amberGold/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm tracking-wider">加我微信，免费20分钟诊断交流</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
          <p className="text-textMuted text-sm mt-4">
            直接与主理人郑坚交流，无中间商
          </p>
        </motion.div>
      </div>
    </section>
  )
}
