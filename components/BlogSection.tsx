'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { seoInsights } from '@/lib/seo-insights'

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部')
  const categories = ['全部', ...Array.from(new Set(seoInsights.map((post) => post.category)))]

  const filteredPosts =
    selectedCategory === '全部'
      ? seoInsights
      : seoInsights.filter((post) => post.category === selectedCategory)

  return (
    <section id="blog" className="bg-[#0B1C2D] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-white">非洲空运专题</h2>
          <p className="mx-auto max-w-2xl text-lg text-industrialGray/60">
            每篇只解决一个搜索问题：这票货能不能飞、走哪个入口、资料哪里会卡。
          </p>
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-amberGold text-deepBlue'
                  : 'bg-white/5 text-industrialGray/60 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[#0f1720] transition-all hover:border-amberGold/30"
            >
              <a href={`/insights/${post.slug}/`} className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-industrialGray/60">
                    <span className="rounded-full bg-amberGold/10 px-3 py-1 text-amberGold">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-amberGold">
                    {post.title}
                  </h3>

                  <p className="mb-5 line-clamp-3 text-industrialGray/60">{post.excerpt}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {post.keywords.slice(0, 3).map((keyword) => (
                      <span key={keyword} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <span className="flex items-center gap-2 text-amberGold transition-all group-hover:gap-3">
                    阅读全文
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
