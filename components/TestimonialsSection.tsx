'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  project?: string
  image?: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: '张总',
    company: '某矿业公司',
    role: '供应链总监',
    content: '17吨精密设备运到阿比让，Jones 帮我们设计了 ET 联运方案。原以为要20天，结果14天就到了，而且零货损。最关键的是清关问题，他都提前帮我们搞定了。这种专业度，在行业里很少见。',
    rating: 5,
    project: 'ABJ 精密设备运输',
  },
  {
    id: '2',
    name: '李总',
    company: '某医疗器械公司',
    role: '总经理',
    content: '我们有一批疫苗需要运到几内亚，温度要求-20°C，非常苛刻。Jones 不仅提供了专业方案，还全程跟踪温度数据。最后顺利通关，客户非常满意。这种项目货，我只找他。',
    rating: 5,
    project: 'CKY 疫苗运输',
  },
  {
    id: '3',
    name: '王总',
    company: '某工矿企业',
    role: '物流经理',
    content: '紧急备件42小时从中国到赞比亚，这个速度真的救了我们。生产线停一天损失几十万，Jones 帮我们抢出了时间。这种应急能力，不是一般货代能做到的。',
    rating: 5,
    project: 'LUN 紧急备件',
  },
  {
    id: '4',
    name: '陈总',
    company: '某贸易公司',
    role: 'CEO',
    content: '之前试过几家货代，非洲航线总是出问题。认识 Jones 后，他的系统化方法让我很放心。不是靠运气，是靠流程和经验。现在我们所有非洲货都交给他。',
    rating: 5,
  },
  {
    id: '5',
    name: '刘总',
    company: '某制造企业',
    role: '采购总监',
    content: '包机价格谈得很好，比我们直接找航司省了30%。关键是 Jones 对市场行情很了解，知道什么时候可以谈，什么时候不能谈。这种判断力，需要很多年经验。',
    rating: 5,
  },
  {
    id: '6',
    name: '赵总',
    company: '某物流公司',
    role: '运营总监',
    content: '我们是同行，有时候忙不过来会找 Jones 协调。他的专业性和责任心都很强，合作很愉快。在行业里，这样的人品真的很难得。',
    rating: 5,
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
          className="grid md:grid-cols-3 gap-8 mb-16 text-center"
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
            <div className="text-4xl font-bold text-amberGold mb-2">98%</div>
            <div className="text-industrialGray/60">客户满意度</div>
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

              {/* Content */}
              <p className="text-industrialGray/80 mb-6 line-clamp-4">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amberGold text-amberGold" />
                ))}
              </div>

              {/* Author Info */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-industrialGray/60 mb-2">
                  {testimonial.role} · {testimonial.company}
                </div>
                {testimonial.project && (
                  <div className="text-xs text-amberGold">
                    项目：{testimonial.project}
                  </div>
                )}
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
            想了解更多客户案例？
          </p>
          <button className="px-8 py-4 bg-amberGold text-deepBlue font-semibold rounded-lg hover:bg-amberGold/90 transition-colors">
            查看所有案例
          </button>
        </motion.div>
      </div>
    </section>
  )
}
