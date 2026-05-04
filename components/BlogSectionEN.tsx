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
    title: 'JNB Johannesburg Air Freight: routing urgent mining cargo into Southern Africa',
    excerpt: 'JNB is more than a South Africa airport. For mining spares and urgent project cargo, it often becomes the practical entry point for Southern Africa.',
    content: 'For JNB shipments, the route decision should start with cargo feasibility, not only rate. We check piece dimensions, gross weight, main-deck requirement, consignee import status, HS Code, invoice, packing list, ground handling, customs timing and onward trucking. For mining clients, a few days of plant stoppage can cost far more than the air freight difference.',
    date: '2026-05-04',
    readTime: '12 min',
    category: 'Africa Markets',
    author: 'EASCargo Jones',
    image: '/case-17t-1.jpg'
  },
  {
    id: 'fbm-copperbelt',
    title: 'FBM Lubumbashi: why Copperbelt cargo needs route feasibility before pricing',
    excerpt: 'Lubumbashi serves the copper and cobalt belt. Heavy spares, transformers, pumps and power equipment need route design before a quote is useful.',
    content: 'FBM cargo is often driven by mine shutdown risk, not ordinary freight planning. We first confirm whether the cargo can fly, whether LGG or BRU transit is needed, which Africa hub can support the second leg, who owns clearance responsibility, and whether the mine site has unloading resources. A low rate without an executable route is not a solution.',
    date: '2026-05-04',
    readTime: '13 min',
    category: 'Africa Markets',
    author: 'EASCargo Jones',
    image: '/case-17t-2.jpg'
  },
  {
    id: 'lun-zambia',
    title: 'LUN Lusaka: air freight guide for Zambia industrial and mining equipment',
    excerpt: 'Zambia project cargo is common in mining, industrial equipment and maintenance spares. Documentation and ground handover decide the real delivery time.',
    content: 'For LUN shipments, factories and traders should provide cargo name, HS Code, dimensions, gross weight, packing photos, cargo value, consignee details and latest required arrival time. For mining equipment and industrial spares, we also check permits, packaging, moisture protection, shock protection and local broker response before confirming the route.',
    date: '2026-05-04',
    readTime: '11 min',
    category: 'Africa Markets',
    author: 'EASCargo Jones',
    image: '/case-17t-3.jpg'
  },
  {
    id: 'lbv-long-cargo',
    title: 'LBV Libreville: long cargo via LGG/BRU and B747F nose-door planning',
    excerpt: 'Long cargo is not normal air freight. The work is to prove the cargo can be loaded, transferred, cleared and unloaded at destination.',
    content: 'For long pieces into LBV, China direct departure may not provide a workable aircraft. A practical setup can be China to LGG or BRU, then Europe charter or freighter leg into Africa. The early checklist includes piece length, package height, center of gravity, lifting points, fork or crane method, European warehouse handover window, B747F loading plan and destination ground handling.',
    date: '2026-05-04',
    readTime: '14 min',
    category: 'Oversized Cases',
    author: 'EASCargo Jones',
    image: '/case-17t-4.jpg'
  },
  {
    id: 'customs-docs',
    title: 'Africa air freight customs documents: what factories and traders should prepare',
    excerpt: 'Invoice, packing list, HS Code, import license, consignee status, wooden packing, certificate of origin and destination charges can all delay clearance.',
    content: 'Africa customs cannot be handled with one fixed document set. At minimum, confirm commercial invoice, packing list, contract, HS Code, currency, cargo value, consignee import qualification, license requirement, wooden packing treatment, second-hand equipment status and any restricted product rules. Oversized cargo also needs packing photos, lifting points, center of gravity and destination unloading capacity.',
    date: '2026-05-04',
    readTime: '16 min',
    category: 'Customs Guide',
    author: 'EASCargo Jones',
    image: '/case-17t-1.jpg'
  },
  {
    id: 'via-europe',
    title: 'Why China to Africa oversized cargo often needs LGG/BRU Europe transit',
    excerpt: 'When China direct departure has no workable aircraft, Europe is not a detour. It is a way to combine main-deck capacity, freighters and Africa second legs.',
    content: 'LGG and BRU are useful for oversized Africa cargo because they can connect China uplift, European freighter handling, charter options and Africa main gateways. The decision order is simple: can the China leg depart, can the Europe hub receive it, can the second leg aircraft load it, can the Africa airport accept it, and can the final delivery point unload it.',
    date: '2026-05-04',
    readTime: '15 min',
    category: 'Route Planning',
    author: 'EASCargo Jones',
    image: '/case-17t-2.jpg'
  },
  {
    id: 'west-africa',
    title: 'LOS, ABV, PHC and ABJ: West Africa air freight notes for project cargo',
    excerpt: 'West Africa has strong demand, but customs communication, consignee qualification, local charges and oil or infrastructure project rules must be clear early.',
    content: 'LOS is usually commercial and industrial, ABV is often government or project related, PHC is important for oil and gas, and ABJ is a key French-speaking West Africa gateway. Before quoting, we confirm final city, importer capability, product classification, declared value, destination charges and any special permit requirements.',
    date: '2026-05-04',
    readTime: '12 min',
    category: 'Africa Markets',
    author: 'EASCargo Jones',
    image: '/case-17t-3.jpg'
  },
  {
    id: 'network-memberships',
    title: 'WCA, IATA, JCtrans, OLO, GLA and WIFFA: what network membership means in Africa cargo',
    excerpt: 'Membership logos are not decoration. The real value is faster agent verification, destination feedback and risk control for difficult Africa shipments.',
    content: 'For Africa project cargo, destination information is often the hardest part. Networks such as WCA, IATA, JCtrans, OLO, GLA and WIFFA help us verify agents, customs capability, inland delivery options and local cost boundaries faster. Every shipment still needs shipment-by-shipment confirmation before a final solution is released.',
    date: '2026-05-04',
    readTime: '8 min',
    category: 'Route Planning',
    author: 'EASCargo Jones',
    image: '/case-17t-4.jpg'
  }
]

export default function BlogSectionEN() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [expandedPost, setExpandedPost] = useState<string | null>(null)

  const categories = ['All', 'Africa Markets', 'Oversized Cases', 'Customs Guide', 'Route Planning']
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <section id="blog" className="py-20 bg-[#0B1C2D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Africa Air Freight Insights
          </h2>
          <p className="text-industrialGray/60 text-lg max-w-2xl mx-auto">
            Practical route notes for China to Africa oversized and project cargo.
          </p>
        </motion.div>

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
              {post.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-4 text-sm text-industrialGray/60 mb-3">
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

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amberGold transition-colors">
                  {post.title}
                </h3>

                <p className="text-industrialGray/60 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <button
                  onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                  className="flex items-center gap-2 text-amberGold hover:gap-3 transition-all group"
                >
                  {expandedPost === post.id ? 'Close' : 'Read more'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {expandedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 bg-[#0f1720] border border-white/10 rounded-lg p-8"
          >
            {blogPosts.find((post) => post.id === expandedPost) && (
              <>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {blogPosts.find((post) => post.id === expandedPost)?.title}
                </h3>
                <div className="prose prose-invert max-w-none text-industrialGray/60">
                  <p>{blogPosts.find((post) => post.id === expandedPost)?.content}</p>
                  <p className="mt-4 text-sm text-industrialGray/50">
                    Final routing, loading method, customs requirement and destination charges must be confirmed shipment by shipment.
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
