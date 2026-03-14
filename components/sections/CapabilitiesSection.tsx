'use client'

import { motion } from 'framer-motion'
import { Clock, BarChart3, Zap, FileBarChart } from 'lucide-react'

const services = [
  {
    icon: Clock,
    title: '精准时效保障方案',
    subtitle: '不只是"快"',
    description: '通过历史数据+实时监控，为您规划确定性最高的时间窗口，并明确告知潜在延误风险。让每一票货的到达时间，从"大概"变成"精确"。',
    tags: ['数据驱动', '风险预判', '备选路线'],
  },
  {
    icon: BarChart3,
    title: '成本透明化分析',
    subtitle: '不只是"报价"',
    description: '用可视化的方式，为您拆解运费构成，识别并优化隐藏成本。航线选择、中转方案、淡旺季策略——每一分钱花在哪里，清清楚楚。',
    tags: ['成本拆解', '可视化报告', '优化建议'],
  },
  {
    icon: Zap,
    title: '紧急货物绿色通道',
    subtitle: '快速响应，资源调动',
    description: '16年积累的航司关系网络和操作经验，让紧急需求不再是赌博。从接到需求到方案输出，最快2小时响应，全程可追踪。',
    tags: ['快速响应', '资源网络', '全程追踪'],
  },
  {
    icon: FileBarChart,
    title: '物流数据简报',
    subtitle: 'AI驱动的行业情报',
    description: '利用AI工具持续监控港口动态、航司运力变化、市场价格趋势。定期为合作客户提供定制化数据简报，让您的决策永远领先一步。',
    tags: ['AI监控', '市场趋势', '决策支持'],
  },
]

export default function CapabilitiesSection() {
  return (
    <section id="services" className="py-32 bg-deepBlue">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">我能帮你</p>
          <h2 className="text-heading md:text-heading font-bold text-white mb-6">
            我能为您解决的具体问题。
          </h2>
          <p className="text-industrialGray/70 text-lg max-w-2xl">
            不是服务清单，是你能直接感知到的价值。每一项服务，都围绕一个核心：让你的货运过程更清晰、更可控。
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-white/5 hover:border-amberGold/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.04]"
            >
              {/* Icon & Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-amberGold/30 group-hover:border-amberGold transition-colors">
                  <service.icon className="w-6 h-6 text-amberGold" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-amberGold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-amberGold/60 text-sm mt-1">{service.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-industrialGray/60 leading-relaxed mb-5 pl-16">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pl-16">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs text-industrialGray/50 border border-white/10 group-hover:border-amberGold/20 group-hover:text-industrialGray/70 transition-all"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
