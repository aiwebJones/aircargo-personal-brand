'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  author: string
  image?: string
}

// Sample blog posts (can be replaced with API later)
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '非洲航线实操指南：如何避开90%的坑',
    excerpt: '非洲航线ABJ/BKO/LUN/CKY看似机会巨大，实则暗藏杀机。15年实战经验总结，帮你避开最常见的陷阱。',
    content: '详细内容...',
    date: '2026-03-20',
    readTime: '15 分钟',
    category: '航线运营',
    author: '神仙货运Jones',
    image: '/case-17t-1.jpg'
  },
  {
    id: '2',
    title: '包机价格谈判的7个关键时刻',
    excerpt: '包机不是有钱就能做好。这7个关键时刻决定了你是赚还是亏。',
    content: '详细内容...',
    date: '2026-03-15',
    readTime: '12 分钟',
    category: '包机运营',
    author: '神仙货运Jones',
    image: '/case-17t-2.jpg'
  },
  {
    id: '3',
    title: '大件空运：从方案到交付的SOP',
    excerpt: '项目货、精密仪器、医疗设备...大件空运的标准化流程。把不可控变成可控。',
    content: '详细内容...',
    date: '2026-03-10',
    readTime: '20 分钟',
    category: '项目货',
    author: '神仙货运Jones',
    image: '/case-17t-3.jpg'
  },
  {
    id: '4',
    title: '系统化运营：一个人如何管理10条航线',
    excerpt: '不做低价值忙碌。用系统替代人，让规模成为竞争力。',
    content: '详细内容...',
    date: '2026-03-05',
    readTime: '18 分钟',
    category: '系统管理',
    author: '神仙货运Jones',
    image: '/case-17t-4.jpg'
  }
]

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部')
  const [expandedPost, setExpandedPost] = useState<string | null>(null)

  const categories = ['全部', '航线运营', '包机运营', '项目货', '系统管理']

  const filteredPosts = selectedCategory === '全部' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <section id="blog" className="py-20 bg-[#0B1C2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            专业文章
          </h2>
          <p className="text-industrialGray/60 text-lg max-w-2xl mx-auto">
            15年实战经验，系统化总结
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-amberGold text-deepBlue'
                  : 'bg-white/5 text-industrialGray/60 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0f1720] border border-white/10 rounded-lg overflow-hidden hover:border-amberGold/30 transition-all group"
            >
              {/* Image */}
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-industrialGray/60 mb-3">
                  <span className="px-3 py-1 bg-amberGold/10 text-amberGold rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amberGold transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-industrialGray/60 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <button
                  onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  className="flex items-center gap-2 text-amberGold hover:gap-3 transition-all group"
                >
                  {expandedPost === post.id ? '收起' : '阅读全文'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Expanded Content */}
        {expandedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 bg-[#0f1720] border border-white/10 rounded-lg p-8"
          >
            {blogPosts.find(p => p.id === expandedPost) && (
              <>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {blogPosts.find(p => p.id === expandedPost)?.title}
                </h3>
                <div className="prose prose-invert max-w-none text-industrialGray/60">
                  <p>{blogPosts.find(p => p.id === expandedPost)?.content}</p>
                  <p className="mt-4">（完整文章内容待添加...）</p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
