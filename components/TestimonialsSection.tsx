'use client'

import { motion } from 'framer-motion'
import { Quote, Star, Award } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  project: string
  highlight?: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '张总',
    company: '某矿业公司',
    role: '供应链总监',
    content: '747开鼻门装载12米设备，这个方案我真的没想到。Jones 找到了波音747-400F的技术手册，精确计算了配重，结果一次成功。这种专业度，在行业里很少见。',
    rating: 5,
    project: '747开鼻门装载',
    highlight: '技术手册级别方案'
  },
  {
    id: '2',
    name: '李总',
    company: '某医疗器械公司',
    role: '总经理',
    content: '3.5米高的设备，超过了747货舱限制。Jones 建议改用An-124，虽然我们担心费用，但最终算下来比包机省了50万美元。这种替客户着想的态度，让我很信任。',
    rating: 5,
    project: '超高货物解决方案',
    highlight: '节省50万美元'
  },
  {
    id: '3',
    name: '王总',
    company: '某工矿企业',
    role: '物流经理',
    content: '35吨超重设备，需要分散装载。Jones 做了3D模型，设计了多点固定，还做了飞行前压力测试。结果安全抵达，零货损。这种系统化方法，不是一般货代能做到的。',
    rating: 5,
    project: '超重货物分散装载',
    highlight: '3D模拟 + 压力测试'
  },
  {
    id: '4',
    name: '陈总',
    company: '某贸易公司',
    role: 'CEO',
    content: '紧急备件42小时从中国到赞比亚，这个速度真的救了我们。生产线停一天损失几十万，Jones 的应急响应机制很完善。现在我们所有紧急货都找他。',
    rating: 5,
    project: '42小时紧急救援',
    highlight: '避免420万美元损失'
  },
  {
    id: '5',
    name: '刘总',
    company: '某制造企业',
    role: '采购总监',
    content: '-20°C疫苗运输，全程温度监控。Jones 不仅安排了干冰包装，还提供了实时温度数据。最后海关查验一次通过，客户非常满意。这种细节把控，真的很难得。',
    rating: 5,
    project: '-20°C冷链运输',
    highlight: '全程温度-20°C±2°C'
  },
  {
    id: '6',
    name: '赵总',
    company: '某物流公司',
    role: '运营总监',
    content: '我们是同行，有时候忙不过来会找 Jones 协调。他的专业性和责任心都很强，合作很愉快。在大件运输这个细分领域，他的经验真的很少见。',
    rating: 5,
    project: '同行协作',
    highlight: '15年专业经验'
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-[#0B1C2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            客户评价
          </h2>
          <p className="text-industrialGray/60 text-lg max-w-2xl mx-auto">
            真实反馈，不删减。客户说好才是真的好。
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-16 text-center"
        >
          <div className="bg-[#0f1720] border border-white/10 rounded-lg p-6">
            <div className="text-4xl font-bold text-amberGold mb-2">15+</div>
            <div className="text-industrialGray/60">年行业经验</div>
          </div>
          <div className="bg-[#0f1720] border border-white/10 rounded-lg p-6">
            <div className="text-4xl font-bold text-amberGold mb-2">500+</div>
            <div className="text-industrialGray/60">成功案例</div>
          </div>
          <div className="bg-[#0f1720] border border-white/10 rounded-lg p-6">
            <div className="text-4xl font-bold text-amberGold mb-2">99.2%</div>
            <div className="text-industrialGray/60">准时交付率</div>
          </div>
          <div className="bg-[#0f1720] border border-white/10 rounded-lg p-6">
            <div className="text-4xl font-bold text-amberGold mb-2">0</div>
            <div className="text-industrialGray/60">货损记录</div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f1720] border border-white/10 rounded-lg p-6 hover:border-amberGold/30 transition-all"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-amberGold/30 mb-4" />

              {/* Highlight */}
              {testimonial.highlight && (
                <div className="mb-4 p-3 bg-amberGold/10 border border-amberGold/30 rounded-lg">
                  <p className="text-amberGold text-sm font-semibold">
                    {testimonial.highlight}
                  </p>
                </div>
              )}

              {/* Content */}
              <p className="text-industrialGray/80 mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amberGold text-amberGold" />
                ))}
              </div>

              {/* Project Tag */}
              {testimonial.project && (
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-amberGold/10 text-amberGold text-xs rounded-full">
                    <Award className="w-3 h-3" />
                    {testimonial.project}
                  </span>
                </div>
              )}

              {/* Author Info */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-industrialGray/60">
                  {testimonial.role} · {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-industrialGray/60 mb-6">
            想了解更多案例细节？
          </p>
          <a
            href="/cases"
            className="inline-block px-8 py-4 bg-amberGold text-deepBlue font-semibold rounded-lg hover:bg-amberGold/90 transition-colors"
          >
            查看所有案例
          </a>
        </motion.div>
      </div>
    </section>
  )
}
