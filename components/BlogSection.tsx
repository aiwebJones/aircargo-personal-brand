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

const blogPosts: BlogPost[] = [
  {
    id: 'jnb-mining',
    title: 'JNB约翰内斯堡空运：南部非洲矿业急件怎么判断路线？',
    excerpt: 'JNB不是一个普通目的港，它更像南部非洲项目货入口。矿山备件、工程设备、停产急件，要先判断装载、清关和二程。',
    content: 'JNB适合南非本土项目货，也常作为南部非洲中转入口。前期需要确认货物尺寸重量、是否需要主甲板、进口商税号、商业发票、装箱单、HS Code以及到港后的提货和二程安排。矿山急件最怕只看空运费，真正决定交付的是停产窗口、地面装卸、清关资料和最终工地交接。',
    date: '2026-05-04',
    readTime: '12 分钟',
    category: '非洲国家',
    author: '神仙货运Jones',
    image: '/case-17t-1.jpg'
  },
  {
    id: 'fbm-copperbelt',
    title: 'FBM卢本巴希：铜钴矿区大件空运为什么不能只问价格？',
    excerpt: '卢本巴希背后是刚果金铜钴矿区。重型备件、变压器、泵类和电气柜要把欧洲Hub、非洲Hub和内陆交付一起设计。',
    content: 'FBM的难点不只在航班，而在内陆属性和目的地交付。客户发来货物后，要先判断是否适合空运、是否需要经LGG/BRU中转、可选非洲Hub有哪些、清关责任由谁承担、矿区卸货资源是否具备。对矿业客户来说，几天停产损失往往远高于运费差价。',
    date: '2026-05-04',
    readTime: '13 分钟',
    category: '非洲国家',
    author: '神仙货运Jones',
    image: '/case-17t-2.jpg'
  },
  {
    id: 'lun-zambia',
    title: 'LUN卢萨卡：赞比亚工业设备和矿业备件空运指南',
    excerpt: '赞比亚项目货常见于矿业、工业设备和维修备件。重点是包装、防潮、防震、文件一致和目的地提货节奏。',
    content: 'LUN适合作为赞比亚项目货入口。询价时应提供品名、HS Code、尺寸重量、包装照片、货值、收货人资料和最晚到货时间。矿业设备和工业备件要特别注意商业发票、装箱单、进口商资料、特殊许可证可能性和目的地清关代理响应速度。',
    date: '2026-05-04',
    readTime: '11 分钟',
    category: '非洲国家',
    author: '神仙货运Jones',
    image: '/case-17t-3.jpg'
  },
  {
    id: 'lbv-gabon-8m',
    title: 'LBV利伯维尔8米长货：国内无直飞时如何经LGG/BRU做出来？',
    excerpt: '8米长件不是普通空运。要先看开鼻门、主甲板、欧洲中转交接、LBV到港文件和现场装卸。',
    content: '这类货物的关键不是找一个低价，而是先证明路线可执行。中国段可以先飞欧洲LGG/BRU，再衔接B747F全货机飞LBV。前期要确认货长、包装高度、重心、叉车/吊装方式、欧洲仓库交接窗口、二程板型和目的地文件。我们曾通过类似路径比某全球货代方案节省接近20万人民币。',
    date: '2026-05-04',
    readTime: '14 分钟',
    category: '大件案例',
    author: '神仙货运Jones',
    image: '/case-17t-4.jpg'
  },
  {
    id: 'africa-customs-docs',
    title: '非洲空运清关资料清单：工厂和贸易商最容易漏什么？',
    excerpt: '商业发票、装箱单、HS Code、进口商资质、许可证、木包装、原产地和目的港费用，任何一项都可能卡住。',
    content: '非洲清关不能用“一套资料打天下”。前期至少要核对商业发票、装箱单、合同、HS Code、货值币种、收货人进口资质、是否需要许可证、是否有木包装熏蒸、是否涉及二手设备或管制产品。大件货还要额外确认包装照片、吊点、重心和目的地卸货能力。',
    date: '2026-05-04',
    readTime: '16 分钟',
    category: '清关指南',
    author: '神仙货运Jones',
    image: '/case-17t-1.jpg'
  },
  {
    id: 'china-africa-via-europe',
    title: '中国到非洲大件为什么要经欧洲？LGG/BRU中转逻辑讲透',
    excerpt: '国内没有直飞方案时，欧洲不是绕路，而是把主甲板、全货机、开鼻门和非洲二程重新组合。',
    content: '经欧洲中转适合超长、超重、超高或目的地难落地的非洲项目货。判断顺序是：国内段能否起飞，欧洲中转仓是否能接，二程全货机是否匹配，非洲入口机场是否能落，最后一公里是否能卸。只有这五件事成立，报价才有意义。',
    date: '2026-05-04',
    readTime: '15 分钟',
    category: '航线方案',
    author: '神仙货运Jones',
    image: '/case-17t-2.jpg'
  },
  {
    id: 'nigeria-logistics',
    title: '尼日利亚LOS/ABV/PHC：西非大市场空运要注意什么？',
    excerpt: '尼日利亚需求大，但清关、收货人资质、目的港费用和油气项目要求都要提前讲清。',
    content: '尼日利亚适合油气设备、工程机械、发电机、工厂备件和贸易急件。LOS偏商业贸易，ABV偏政府和项目，PHC偏油气工业。操作前要确认进口商资质、品名归类、货值申报、目的港费用承担方和是否需要特殊许可证。',
    date: '2026-05-04',
    readTime: '12 分钟',
    category: '非洲国家',
    author: '神仙货运Jones',
    image: '/case-17t-3.jpg'
  },
  {
    id: 'ghana-ivory-coast',
    title: '加纳ACC与科特迪瓦ABJ：西非英语区/法语区入口怎么选？',
    excerpt: 'ACC和ABJ都是西非重要入口，但语言、代理网络、清关沟通和二程方向不同。',
    content: 'ACC适合作为加纳和部分英语区西非入口，ABJ是西非法语区重要商业节点。选择哪个点，不只看空运费，还要看客户最终目的地、收货人清关能力、语言沟通、二程时效和目的港费用。法语区项目货尤其要提前准备好品名、货值、HS Code和本地代理确认。',
    date: '2026-05-04',
    readTime: '10 分钟',
    category: '非洲国家',
    author: '神仙货运Jones',
    image: '/case-17t-4.jpg'
  },
  {
    id: 'oversized-checklist',
    title: '超大件空运询价清单：发尺寸重量之前先准备这12项',
    excerpt: '只发一个重量没用。超大件要看长宽高、单件毛重、包装、重心、吊点、照片、可否叠放和卸货条件。',
    content: '超大件询价请一次性提供：品名、HS Code、件数、每件尺寸、每件毛重、包装照片、是否可叠放、重心/吊点、是否带电/带磁/液体、起运城市、目的城市、备货时间、最晚到货时间。资料越完整，越能提前排除装不上、接不上、清不了、卸不了的风险。',
    date: '2026-05-04',
    readTime: '9 分钟',
    category: '清关指南',
    author: '神仙货运Jones',
    image: '/case-17t-1.jpg'
  },
  {
    id: 'tanzania-kenya-uganda',
    title: '东非NBO/EBB/DAR：肯尼亚、乌干达、坦桑尼亚项目货入口',
    excerpt: '东非不是一个点，NBO、EBB、DAR分别适合不同的清关、转运和项目交付逻辑。',
    content: 'NBO适合作为东非商业和转运Hub，EBB适合乌干达及部分内陆延伸，DAR兼具港口和市场属性。项目货要提前确认最终交付城市、是否跨境、边境文件、道路条件和卸货设备。东非适合通讯设备、工程设备、医疗器械、农业机械和紧急备件。',
    date: '2026-05-04',
    readTime: '13 分钟',
    category: '非洲国家',
    author: '神仙货运Jones',
    image: '/case-17t-2.jpg'
  },
  {
    id: 'member-network',
    title: 'WCA/IATA/JCtrans等网络对非洲空运有什么实际价值？',
    excerpt: '会员牌子不是用来摆的，真正价值是快速找到目的港代理、验证清关能力、确认二程和降低信息差。',
    content: '非洲项目货最怕目的地信息不透明。WCA、IATA、JCtrans、OLO、GLA、WIFFA等网络的实际价值，是在遇到非标货、内陆点、目的港清关和紧急二程时，能快速找到可验证的代理资源。但每票货仍要逐项确认代理能力、费用边界和责任分工。',
    date: '2026-05-04',
    readTime: '8 分钟',
    category: '航线方案',
    author: '神仙货运Jones',
    image: '/case-17t-3.jpg'
  }
]

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('全部')
  const [expandedPost, setExpandedPost] = useState<string | null>(null)

  const categories = ['全部', '非洲国家', '大件案例', '清关指南', '航线方案']

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
                  <p className="mt-4 text-sm text-industrialGray/50">
                    具体方案需要结合货物尺寸、重量、HS Code、收货人资质和目的地代理反馈逐票确认。
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}
