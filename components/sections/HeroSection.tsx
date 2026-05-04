'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Plane, Route, Shield, Sparkles, Zap } from 'lucide-react'

interface HeroSectionProps {
  onOpenContact: () => void
  onOpenWechat: () => void
  onOpenAIQuote: () => void
}

const directHubs = [
  { code: 'LBV', name: '利伯维尔', note: '8米长货实操' },
  { code: 'JNB', name: '约翰内斯堡', note: '南部非洲Hub' },
  { code: 'LUN', name: '卢萨卡', note: '矿业项目入口' },
  { code: 'NBO', name: '内罗毕', note: '东非Hub' },
]

const inlandPoints = [
  { code: 'FBM', name: '卢本巴希' },
  { code: 'KGL', name: '基加利' },
  { code: 'CPT', name: '开普敦' },
  { code: 'DUR', name: '德班' },
  { code: 'WDH', name: '温得和克' },
  { code: 'ABJ', name: '阿比让' },
]

export default function HeroSection({ onOpenContact, onOpenWechat }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 166, 35, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245, 166, 35, 0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-16 pt-28 md:pt-32">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-semibold text-amberGold"
            >
              <Route className="h-4 w-4" />
              <span>中国 -> LGG/BRU -> 非洲大件中转网络</span>
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              国内没有直飞方案？
              <br />
              <span className="text-amberGold">把非洲大件路线做出来</span>
            </h1>

            <p className="mb-5 max-w-2xl text-xl leading-9 text-slate-600">
              面向中国货代、工厂和贸易商：超长、超重、超高货先飞欧洲LGG/BRU，
              再衔接B747F全货机或非洲Hub卡车中转，覆盖JNB、FBM、LUN、LBV及30+内陆目的地。
            </p>

            <div className="mb-8 grid gap-3 text-base text-slate-700 sm:grid-cols-2">
              <div className="rounded-lg border border-amberGold/30 bg-amberGold/10 p-4">
                <div className="mb-1 font-semibold text-slate-950">LBV 8米长货实操</div>
                <div className="text-sm leading-6">欧洲联运 + B747F开鼻门，成本比某全球货代方案节省接近20万人民币。</div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-1 font-semibold text-slate-950">单件14吨大件方案</div>
                <div className="text-sm leading-6">先判断能不能飞、怎么装、哪里会卡，再谈报价和时效。</div>
              </div>
            </div>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row">
              <motion.a
                href="/zh/lgg-africa-gateway/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amberGold to-orange-500 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-amberGold/25 transition hover:shadow-amberGold/40"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                进入非洲中转网络
                <ArrowRight className="h-5 w-5" />
              </motion.a>

              <motion.button
                onClick={onOpenWechat}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-amberGold px-7 py-4 text-base font-semibold text-amberGold transition hover:bg-amberGold hover:text-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                发尺寸重量，先判断路线
              </motion.button>

              <motion.button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 text-base font-semibold text-slate-700 transition hover:border-amberGold hover:text-amberGold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                加微信深度交流
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 md:grid-cols-4">
              <div className="flex items-center gap-2">
                <Plane className="h-5 w-5 text-amberGold" />
                <span>B747F全货机</span>
              </div>
              <div className="flex items-center gap-2">
                <Route className="h-5 w-5 text-amberGold" />
                <span>欧洲中转衔接</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-amberGold" />
                <span>尺寸风险预判</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-amberGold" />
                <span>成本路径对比</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-amberGold">Africa Transit Network</div>
                <h2 className="mt-1 text-2xl font-bold text-slate-950">非洲中转网络一眼看懂</h2>
              </div>
              <Sparkles className="h-7 w-7 text-amberGold" />
            </div>

            <div className="rounded-xl bg-slate-950 p-5 text-white">
              <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-sm font-semibold">
                <div className="rounded-lg bg-white/10 px-3 py-3">中国起运</div>
                <ArrowRight className="h-4 w-4 text-amberGold" />
                <div className="rounded-lg bg-amberGold px-3 py-3 text-slate-950">LGG / BRU</div>
                <ArrowRight className="h-4 w-4 text-amberGold" />
                <div className="rounded-lg bg-white/10 px-3 py-3">非洲Hub</div>
              </div>
              <div className="mt-4 text-center text-sm leading-6 text-slate-300">
                国内没有直飞大件方案时，先把欧洲中转和非洲二程拆清楚。
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-3 text-sm font-semibold text-slate-950">B747F直飞/主入口</div>
              <div className="grid gap-3 sm:grid-cols-2">
                {directHubs.map((hub) => (
                  <div key={hub.code} className="rounded-lg border border-borderLight bg-slate-50 p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <div className="text-lg font-bold text-slate-950">{hub.code}</div>
                      <div className="text-sm font-semibold text-amberGold">{hub.name}</div>
                    </div>
                    <div className="mt-2 text-sm text-slate-600">{hub.note}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-3 text-sm font-semibold text-slate-950">Hub卡车延伸/内陆点</div>
              <div className="flex flex-wrap gap-2">
                {inlandPoints.map((point) => (
                  <span key={point.code} className="rounded-full bg-amberGold/10 px-3 py-2 text-sm font-semibold text-slate-800">
                    {point.code} {point.name}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="/zh/lgg-africa-gateway/#cases"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-4 font-semibold text-white transition hover:bg-amberGold hover:text-slate-950"
            >
              看LBV 8米长货和14吨案例
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
