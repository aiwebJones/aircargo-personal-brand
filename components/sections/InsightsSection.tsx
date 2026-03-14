'use client'

import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, TrendingUp, Shield, Bot } from 'lucide-react'

const articles = [
  {
    icon: Bot,
    title: 'AI在物流行业的实战避坑指南',
    summary: '分享我在物流场景中使用AI工具的真实经历：哪些有效、哪些是坑、如何用最低成本启动AI赋能。',
    tag: 'AI实战',
    date: '2024',
  },
  {
    icon: TrendingUp,
    title: '华东空运核心航线深度分析',
    summary: '基于历史数据，解读华东区域主要航线的时效稳定性、价格波动规律，以及旺季应对策略。',
    tag: '行业洞察',
    date: '2024',
  },
  {
    icon: Shield,
    title: '跨境电商空运风险管控实操',
    summary: '从真实案例出发，讲解跨境电商企业在空运环节最常踩的坑，以及如何用系统化方法规避风险。',
    tag: '风险管理',
    date: '2024',
  },
]

export default function InsightsSection() {
  return (
    <section id="insights" className="py-32 bg-[#08121c]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">我的思考</p>
          <h2 className="text-heading md:text-heading font-bold text-white mb-6">
            洞见与分享。
          </h2>
          <p className="text-industrialGray/70 text-lg max-w-2xl">
            不只是做事，也在思考。这些是我在实战中总结的经验和对行业的观察，持续更新于公众号。
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-white/5 hover:border-amberGold/20 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col"
            >
              {/* Tag & Date */}
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 text-xs text-amberGold border border-amberGold/30 bg-amberGold/[0.05]">
                  {article.tag}
                </span>
                <span className="text-xs text-industrialGray/40">{article.date}</span>
              </div>

              {/* Icon */}
              <article.icon className="w-8 h-8 text-amberGold/70 mb-4 group-hover:text-amberGold transition-colors" />

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-amberGold transition-colors">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="text-industrialGray/60 text-sm leading-relaxed flex-grow">
                {article.summary}
              </p>

              {/* Read More */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="inline-flex items-center gap-2 text-sm text-amberGold/60 group-hover:text-amberGold transition-colors">
                  <BookOpen className="w-4 h-4" />
                  <span>关注公众号阅读全文</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to WeChat Official Account */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-industrialGray/50 text-sm">
            更多干货内容，请关注公众号「神仙货运」· 持续输出行业洞察与AI实战经验
          </p>
        </motion.div>
      </div>
    </section>
  )
}
