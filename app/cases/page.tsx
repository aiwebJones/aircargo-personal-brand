'use client'

import { motion } from 'framer-motion'
import { Package, TrendingUp, Shield, Clock } from 'lucide-react'

interface CaseStudy {
  id: string
  title: string
  route: string
  cargo: string
  weight: string
  challenge: string
  solution: string
  result: string
  timeline: string
  image: string
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: '17吨精密设备运往阿比让（ABJ）',
    route: 'CAN → ABJ (科特迪瓦)',
    cargo: '精密医疗设备',
    weight: '17吨',
    challenge: '货物价值高，温度敏感2-8°C，需清关协助',
    solution: 'ET联运 + 温控集装箱 + 本地清关团队',
    result: '14天门到门，零货损',
    timeline: '2024年2月',
    image: '/case-17t-1.jpg'
  },
  {
    id: '2',
    title: '项目货：矿山设备运往巴马科（BKO）',
    route: 'CN → BKO (马里)',
    cargo: '矿山机械设备',
    weight: '22吨',
    challenge: '超大件，需要特殊包装，内陆运输复杂',
    solution: '包机 + 定制木箱 + 马里内陆卡车运输',
    result: '18天到达，节省30%成本',
    timeline: '2024年1月',
    image: '/case-17t-2.jpg'
  },
  {
    id: '3',
    title: '紧急备件运往卢萨卡（LUN）',
    route: 'CAN → LUN (赞比亚)',
    cargo: '矿山紧急备件',
    weight: '5吨',
    challenge: '生产线停工，急需48小时内送达',
    solution: '商业航班最快路径 + 优先清关',
    result: '42小时送达，避免停产损失',
    timeline: '2023年12月',
    image: '/case-17t-3.jpg'
  },
  {
    id: '4',
    title: '恒温药品运往科纳克里（CKY）',
    route: 'CAN → CKY (几内亚)',
    cargo: '生物制品疫苗',
    weight: '2吨',
    challenge: '需要-20°C恒温，文件要求严格',
    solution: '干冰包装 + 温度记录器 + 卫生证书',
    result: '全程温度合规，顺利通关',
    timeline: '2024年3月',
    image: '/case-17t-4.jpg'
  }
]

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-[#0B1C2D]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f1720] to-[#0B1C2D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              成功案例
            </h1>
            <p className="text-xl text-industrialGray/60 max-w-3xl mx-auto">
              真实的交付记录，不玩虚的。每个案例都是实战经验的沉淀。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0f1720] border border-white/10 rounded-lg overflow-hidden hover:border-amberGold/30 transition-all"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Title & Route */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-industrialGray/60">
                      {caseStudy.route}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Package className="w-4 h-4 text-amberGold" />
                      <span className="text-industrialGray/60">{caseStudy.cargo}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-amberGold" />
                      <span className="text-industrialGray/60">{caseStudy.weight}</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-amberGold mb-2">挑战</h4>
                      <p className="text-industrialGray/60 text-sm">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-amberGold mb-2">解决方案</h4>
                      <p className="text-industrialGray/60 text-sm">{caseStudy.solution}</p>
                    </div>

                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-1">结果</h4>
                        <p className="text-industrialGray/60 text-sm">{caseStudy.result}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-industrialGray/40 pt-4 border-t border-white/10">
                      <Clock className="w-4 h-4" />
                      <span>{caseStudy.timeline}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f1720]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            有类似的运输需求？
          </h2>
          <p className="text-industrialGray/60 mb-8">
            15年经验，避开常见陷阱。告诉我你的需求，给你系统化方案。
          </p>
          <button className="px-8 py-4 bg-amberGold text-deepBlue font-semibold rounded-lg hover:bg-amberGold/90 transition-colors">
            免费咨询
          </button>
        </div>
      </section>
    </div>
  )
}
