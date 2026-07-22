'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { seoInsights } from '@/lib/seo-insights'

const featuredSlugs = [
  'jnb-mining-spares-air-freight',
  'fbm-copperbelt-mining-equipment-air-freight',
  'lun-zambia-industrial-air-freight-guide',
  'lbv-gabon-8-meter-cargo-via-lgg-bru',
  'oversized-air-freight-quote-checklist',
  'china-africa-air-freight-cost-chargeable-weight',
]

const featuredPosts = featuredSlugs
  .map((slug) => seoInsights.find((post) => post.slug === slug))
  .filter((post): post is (typeof seoInsights)[number] => Boolean(post))

export default function BlogSection() {
  return (
    <section id="blog" className="bg-[#0B1C2D] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-2 text-sm font-semibold text-amberGold">精选专业资料</p>
            <h2 className="text-3xl font-bold text-white">解决询价前最常见的六个问题</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
              先看核心路线、装载边界和报价资料；全部国家、机场与清关内容放在独立资料库中。
            </p>
          </div>
          <a
            href="/insights/"
            className="inline-flex items-center gap-2 self-start rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-amberGold hover:text-amberGold md:self-auto"
          >
            查看全部专业资料
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[#0f1720] transition hover:border-amberGold/30"
            >
              <a href={`/insights/${post.slug}/`} className="block h-full">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="rounded-full bg-amberGold/10 px-3 py-1 text-amberGold">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-semibold leading-7 text-white transition-colors group-hover:text-amberGold">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-6 text-slate-300">{post.excerpt}</p>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
