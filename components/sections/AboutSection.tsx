'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, ArrowRight, MessageCircle, Plane, Route, Ruler, Wrench } from 'lucide-react'

interface AboutSectionProps {
  onOpenContact: () => void
}

export default function AboutSection({ onOpenContact }: AboutSectionProps) {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header - 我是郑坚（神仙货运） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">关于我</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            我是郑坚（神仙货运）
          </h2>
        </motion.div>

        {/* 核心定位 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-amberGold/10 text-amberGold text-sm font-medium rounded-full">
              16年空运实操
            </span>
            <span className="px-4 py-2 bg-amberGold/10 text-amberGold text-sm font-medium rounded-full">
              大件项目货
            </span>
            <span className="px-4 py-2 bg-amberGold/10 text-amberGold text-sm font-medium rounded-full">
              非洲欧洲中转
            </span>
          </div>
          <p className="text-xl text-textPrimary leading-relaxed max-w-3xl">
            我现在只把重点放在一类货上：<span className="text-amberGold font-semibold">普通货代容易卡住的大件项目货</span>。
            先判断货能不能飞，再设计全货机、欧洲中转、非洲Hub和落地衔接。
          </p>
        </motion.div>

        {/* 经历与理念 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 p-8 bg-surface rounded-2xl border border-borderLight"
        >
          <h3 className="text-lg font-semibold text-textPrimary mb-4">不是卖一条运价，而是先把路线做成立</h3>
          <p className="text-textSecondary leading-relaxed mb-4">
            大件空运最贵的错误，不是价格高一点，而是前期没看清尺寸、重心、板型、机场装卸能力和二程节点，
            最后订了舱却装不上、到了欧洲接不上、到了非洲落不下。
          </p>
          <p className="text-textSecondary leading-relaxed">
            我的价值是把这些风险提前摊开：<span className="text-amberGold font-semibold">能不能飞、走哪个Hub、用什么机型、哪里需要确认、成本差在哪里</span>。
            这比单纯报一个“几块钱一公斤”更适合项目货。
          </p>
        </motion.div>

        {/* 现在能提供什么 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-lg font-semibold text-textPrimary mb-6">目前我专注于</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border border-borderLight rounded-xl">
              <p className="text-textSecondary">
                <span className="text-amberGold font-semibold">中国到非洲大件项目货</span>：JNB、FBM、LUN、LBV，以及更多非洲内陆目的地
              </p>
            </div>
            <div className="p-4 border border-borderLight rounded-xl">
              <p className="text-textSecondary">
                <span className="text-amberGold font-semibold">LGG/BRU欧洲中转方案</span>：B747F全货机、开鼻门、非洲Hub卡车延伸和成本对比
              </p>
            </div>
          </div>
        </motion.div>

        {/* 能力版图 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <p className="text-textMuted text-sm tracking-widest mb-6">我的能力版图</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 bg-surface border border-borderLight hover:border-amberGold/20 transition-all duration-500 group rounded-xl">
              <Ruler className="w-5 h-5 text-amberGold mb-4" />
              <h4 className="text-lg font-semibold text-textPrimary mb-2 group-hover:text-amberGold transition-colors">
                尺寸判断
              </h4>
              <p className="text-textMuted text-sm">
                超长、超重、超高先看装载边界，不先报虚价
              </p>
            </div>
            <div className="p-6 bg-surface border border-borderLight hover:border-amberGold/20 transition-all duration-500 group rounded-xl">
              <Plane className="w-5 h-5 text-amberGold mb-4" />
              <h4 className="text-lg font-semibold text-textPrimary mb-2 group-hover:text-amberGold transition-colors">
                全货机方案
              </h4>
              <p className="text-textMuted text-sm">
                B747F、B777F、重板、开鼻门和吊装资源匹配
              </p>
            </div>
            <div className="p-6 bg-surface border border-borderLight hover:border-amberGold/20 transition-all duration-500 group rounded-xl">
              <Route className="w-5 h-5 text-amberGold mb-4" />
              <h4 className="text-lg font-semibold text-textPrimary mb-2 group-hover:text-amberGold transition-colors">
                中转网络
              </h4>
              <p className="text-textMuted text-sm">
                中国到LGG/BRU，再接非洲Hub和内陆点
              </p>
            </div>
            <div className="p-6 bg-surface border border-borderLight hover:border-amberGold/20 transition-all duration-500 group rounded-xl">
              <Wrench className="w-5 h-5 text-amberGold mb-4" />
              <h4 className="text-lg font-semibold text-textPrimary mb-2 group-hover:text-amberGold transition-colors">
                现场操作
              </h4>
              <p className="text-textMuted text-sm">
                文件、仓库、装卸、打板、二程衔接逐项确认
              </p>
            </div>
          </div>
        </motion.div>

        {/* 强力行动号召 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 bg-gradient-to-r from-amberGold/10 to-orange-500/10 border border-amberGold/30 rounded-2xl text-center"
        >
          <p className="text-textPrimary text-lg mb-6">
            如果你手上有<span className="text-amberGold font-semibold">国内没有直飞方案</span>、<span className="text-amberGold font-semibold">尺寸重量超限</span>或<span className="text-amberGold font-semibold">非洲目的地难落地</span>的货——
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amberGold text-textPrimary font-medium hover:bg-amberGold/90 transition-all duration-300 rounded-lg shadow-lg shadow-amberGold/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm tracking-wider">加我微信，免费20分钟诊断交流</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
          <p className="text-textMuted text-sm mt-4">
            直接与主理人郑坚交流，无中间商
          </p>
        </motion.div>
      </div>
    </section>
  )
}
