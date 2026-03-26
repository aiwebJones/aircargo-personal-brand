'use client'

import { motion } from 'framer-motion'
import { Package, TrendingUp, Shield, Clock, Award, Target } from 'lucide-react'

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
  tags: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: '747开鼻门装载：超长设备12米',
    route: 'CAN → CDG (巴黎)',
    cargo: '工业设备（超长12米）',
    weight: '25吨',
    challenge: '超长设备超出货舱长度，747只能开鼻门装载，需要精确计算配重平衡',
    solution: '波音747-400F鼻门装载方案 + 3D模拟配重 + 分散固定点 + 地面操作培训',
    result: '12小时装载完成，重心完美平衡，节省40%舱位成本',
    timeline: '2024年3月',
    image: '/case-17t-1.jpg',
    tags: ['747全货机', '开鼻门', '超长货物', '配重平衡']
  },
  {
    id: '2',
    title: '超高项目货：3.5米高工业设备',
    route: 'CN → FRA (法兰克福)',
    cargo: '精密机床（高3.5米）',
    weight: '18吨',
    challenge: '货物高度超过747货舱限制（3.1米），需要特殊解决方案',
    solution: '拆解评估 + 替代机型选型（An-124）+ 重新设计装载方案 + 全程操作监控',
    result: '改用An-124，48小时送达，比包机节省50万美元',
    timeline: '2024年2月',
    image: '/case-17t-2.jpg',
    tags: ['超高货物', 'An-124', '机型替换', '成本优化']
  },
  {
    id: '3',
    title: '超重设备：35吨挖掘机部件',
    route: 'CAN → DXB (迪拜)',
    cargo: '挖掘机液压系统',
    weight: '35吨',
    challenge: '单件超重，需要分散装载，多点加固，避免飞行中移位',
    solution: '多点底座设计 + 特殊绑扎带系统 + 3D货物模型 + 飞行前压力测试',
    result: '分散装载3个托盘，安全抵达，零货损',
    timeline: '2024年1月',
    image: '/case-17t-3.jpg',
    tags: ['超重货物', '分散装载', '多点加固', '3D模拟']
  },
  {
    id: '4',
    title: '温控疫苗：-20°C全程冷链',
    route: 'CAN → CKY (科纳克里)',
    cargo: '生物制品疫苗',
    weight: '2吨',
    challenge: '需要-20°C恒温，文件要求严格（卫生证书、温度记录）',
    solution: '干冰包装 + 温度记录器 + 卫生证书协助 + 全程温度监控 + 优先清关',
    result: '全程温度-20°C±2°C，24小时清关完成',
    timeline: '2024年3月',
    image: '/case-17t-4.jpg',
    tags: ['温控运输', '疫苗冷链', '卫生证书', '温度监控']
  },
  {
    id: '5',
    title: '紧急备件：42小时跨国极速',
    route: 'CAN → LUN (赞比亚)',
    cargo: '矿山紧急备件',
    weight: '5吨',
    challenge: '生产线停工，每小时损失10万美元，需要48小时内送达',
    solution: '最快航线选择 + 商业航班优先舱位 + 目的地清关团队预置 + 陆运接驳准备',
    result: '42小时门到门，避免停产损失420万美元',
    timeline: '2023年12月',
    image: '/case-17t-1.jpg',
    tags: ['紧急运输', '42小时', '停产救援', '跨国协调']
  },
  {
    id: '6',
    title: '精密医疗设备：17吨MRI到ABJ',
    route: 'CAN → ABJ (阿比让)',
    cargo: '核磁共振仪（MRI）',
    weight: '17吨',
    challenge: '货物价值高（200万美元），温度敏感2-8°C，怕震动，需要清关协助',
    solution: 'ET联运（DUB-ABJ）+ 温控集装箱 + 防震包装 + 本地清关代理 + 全程跟踪',
    result: '14天门到门，零货损，海关查验一次通过',
    timeline: '2024年2月',
    image: '/case-17t-2.jpg',
    tags: ['精密设备', '温控运输', 'ET联运', '高价值货物']
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
              大件空运实战案例
            </h1>
            <p className="text-xl text-industrialGray/60 max-w-3xl mx-auto mb-4">
              747全货机、开鼻门装载、超长超重超高、特殊装载方式。
            </p>
            <p className="text-lg text-amberGold max-w-2xl mx-auto">
              不玩虚的。每个案例都是15年经验的实战沉淀。
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-4 gap-6 mt-16 text-center"
          >
            <div className="bg-[#0f1720] border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-amberGold mb-2">500+</div>
              <div className="text-sm text-industrialGray/60">成功案例</div>
            </div>
            <div className="bg-[#0f1720] border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-amberGold mb-2">99.2%</div>
              <div className="text-sm text-industrialGray/60">准时交付率</div>
            </div>
            <div className="bg-[#0f1720] border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-amberGold mb-2">0</div>
              <div className="text-sm text-industrialGray/60">货损记录</div>
            </div>
            <div className="bg-[#0f1720] border border-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-amberGold mb-2">15年</div>
              <div className="text-sm text-industrialGray/60">行业经验</div>
            </div>
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
                className="bg-[#0f1720] border border-white/10 rounded-lg overflow-hidden hover:border-amberGold/30 transition-all group"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1720] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-amberGold/10 text-amberGold text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Route */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amberGold transition-colors">
                      {caseStudy.title}
                    </h3>
                    <p className="text-industrialGray/60 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      {caseStudy.route}
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Package className="w-4 h-4 text-amberGold" />
                      <div>
                        <div className="text-white">{caseStudy.cargo}</div>
                        <div className="text-industrialGray/40 text-xs">{caseStudy.weight}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-amberGold" />
                      <div>
                        <div className="text-white">{caseStudy.timeline}</div>
                        <div className="text-industrialGray/40 text-xs">交付时间</div>
                      </div>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        挑战
                      </h4>
                      <p className="text-industrialGray/60 text-sm">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-amberGold mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        解决方案
                      </h4>
                      <p className="text-industrialGray/60 text-sm">{caseStudy.solution}</p>
                    </div>

                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-semibold text-green-400 mb-1">结果</h4>
                        <p className="text-industrialGray/60 text-sm">{caseStudy.result}</p>
                      </div>
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
            有大件运输需求？
          </h2>
          <p className="text-industrialGray/60 mb-4">
            747开鼻门、超长超重超高、特殊装载。
          </p>
          <p className="text-amberGold mb-8">
            15年实战经验，避开常见陷阱。
          </p>
          <button className="px-8 py-4 bg-amberGold text-deepBlue font-semibold rounded-lg hover:bg-amberGold/90 transition-colors">
            免费咨询方案
          </button>
        </div>
      </section>
    </div>
  )
}
