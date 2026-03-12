'use client'

import { motion } from 'framer-motion'
import { Plane, Boxes, Building2, Users, Bot } from 'lucide-react'

const capabilities = [
  {
    icon: Plane,
    title: '高确定性航线系统',
    description: '基于历史数据和实时情报，构建航线稳定性评级体系。优先推荐高可靠性航线，主动规避高风险时段和航司。',
    tags: ['航线评估', '风险预警', '备选方案'],
  },
  {
    icon: Boxes,
    title: '项目与包机操盘',
    description: '超尺寸、超重、时效敏感、特殊温控。从方案设计、航司谈判、地面操作到交付验收，全流程闭环管理。',
    tags: ['项目货', '包机运营', '特殊货物'],
  },
  {
    icon: Building2,
    title: '企业空运体系搭建',
    description: '为年空运量超1000吨的企业，搭建专属空运运营体系。包括供应商管理、成本优化、流程标准化、数字化改造。',
    tags: ['体系搭建', '成本优化', '数字化'],
  },
  {
    icon: Users,
    title: '团队与销售系统设计',
    description: '从0到1搭建空运团队，设计薪酬激励、培训体系、客户分级、销售流程。让团队从游击队变成正规军。',
    tags: ['团队搭建', '销售系统', '培训体系'],
  },
  {
    icon: Bot,
    title: 'AI驱动的运营自动化',
    description: '用AI和自动化工具替代重复性工作：智能询盘响应、运价自动抓取、轨迹实时追踪、异常自动预警。',
    tags: ['AI应用', '自动化', '效率提升'],
  },
]

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-32 bg-deepBlue">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">能力版图</p>
          <h2 className="text-heading md:text-heading font-bold text-white mb-6">
            我解决什么问题。
          </h2>
          <p className="text-industrialGray/70 text-lg max-w-2xl">
            不是服务列表，是你可以依赖的解决方案。
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
              className="group p-8 border border-white/5 hover:border-amberGold/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.04]"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 flex items-center justify-center border border-amberGold/30 group-hover:border-amberGold transition-colors">
                    <cap.icon className="w-7 h-7 text-amberGold" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amberGold transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-industrialGray/60 leading-relaxed mb-4">
                    {cap.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs text-industrialGray/50 border border-white/10 group-hover:border-amberGold/20 group-hover:text-industrialGray/70 transition-all"
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
      </div>
    </section>
  )
}
