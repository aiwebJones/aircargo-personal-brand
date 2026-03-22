'use client'

import { motion } from 'framer-motion'
import { Clock, Coins, Zap, Shield, TrendingUp, Bot } from 'lucide-react'

interface CapabilitiesSectionProps {
  onOpenContact?: () => void
}

const capabilities = [
  {
    icon: Clock,
    title: '精准时效保障方案',
    description: '不只是"快"，而是确定性。通过历史数据+实时监控，为您规划确定性最高的时间窗口，并明确告知潜在延误风险。',
    benefit: '让交付时间可预测，不再提心吊胆',
    tags: ['历史数据分析', '实时监控', '风险预警'],
  },
  {
    icon: Coins,
    title: '成本透明化分析',
    description: '不只是"报价"，而是拆解。用可视化的方式，为您拆解运费构成，识别并优化隐藏成本。',
    benefit: '每一分钱花在哪清清楚楚，拒绝暗箱报价',
    costBenefit: '一般能优化10-15%成本',
    tags: ['运费拆解', '隐藏成本识别', '优化建议'],
  },
  {
    icon: Zap,
    title: '紧急货物绿色通道',
    description: '我有20-30吨/班包板仓位，旺季也能快速响应。提前申请板位或包机，为紧急货物提供解决方案。',
    benefit: '急件不再被拒，旺季也有仓位保障',
    tags: ['快速响应', '包板仓位', '包机服务'],
  },
  {
    icon: Shield,
    title: '超重超大货物专家',
    description: '17吨单件、45吨单票都操作过。安检、报关、吊装、特殊板位申请，我有的是办法。',
    benefit: '别人搞不定的货，找我大概率能搞定',
    tags: ['超重货', '超大件', '特殊货物'],
  },
  {
    icon: TrendingUp,
    title: '物流数据简报',
    description: '用AI监控航司动态、港口情况、仓位变化。定期给您一份简报，让信息差消失。',
    benefit: '不再闭眼跑市场，数据驱动决策',
    tags: ['AI监控', '航司动态', '定期简报'],
  },
  {
    icon: Bot,
    title: '运营自动化',
    description: '询盘自动响应、运价自动抓取、轨迹实时追踪、异常自动预警。用AI替代重复劳动。',
    benefit: '省人力、省时间、把精力放在刀刃上',
    tags: ['AI自动化', '智能询盘', '异常预警'],
  },
]

export default function CapabilitiesSection({ onOpenContact }: CapabilitiesSectionProps) {
  return (
    <section id="capabilities" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">服务内容</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            我能为您解决的具体问题
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            不只是罗列服务，而是告诉你<span className="text-amberGold">能得到什么</span>。
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="space-y-6">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-borderLight hover:border-amberGold/20 transition-all duration-500 bg-white hover:bg-surfaceHover rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center border border-amberGold/30 group-hover:border-amberGold transition-colors rounded-lg">
                    <cap.icon className="w-7 h-7 text-amberGold" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-textPrimary mb-3 group-hover:text-amberGold transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-textMuted leading-relaxed mb-4">
                    {cap.description}
                  </p>
                  
                  {/* 客户收益 */}
                  <div className="p-4 bg-amberGold/5 border-l-4 border-amberGold rounded-r-lg mb-4">
                    <p className="text-textPrimary font-medium">
                      ✨ {cap.benefit}
                    </p>
                    {cap.costBenefit && (
                      <p className="text-amberGold text-sm mt-1">
                        📊 {cap.costBenefit}
                      </p>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-textMuted border border-borderLight group-hover:border-amberGold/20 group-hover:text-textSecondary transition-all rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 核心优势总结 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 bg-gradient-to-r from-amberGold/10 to-orange-500/10 border border-amberGold/30 rounded-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amberGold mb-2">20-30吨</div>
              <div className="text-textSecondary text-sm">每班包板仓位</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amberGold mb-2">65吨</div>
              <div className="text-textSecondary text-sm">单航班最高装载</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amberGold mb-2">16年</div>
              <div className="text-textSecondary text-sm">行业经验</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
