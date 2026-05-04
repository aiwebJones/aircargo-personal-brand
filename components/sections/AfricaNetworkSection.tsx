'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle2, Globe2, Plane, Route, Truck } from 'lucide-react'

const mainGateways = [
  { code: 'LBV', city: '利伯维尔', country: '加蓬', role: '中非沿海项目入口，适合超长件、油气和工程备件。' },
  { code: 'JNB', city: '约翰内斯堡', country: '南非', role: '南部非洲核心Hub，可延伸开普敦、德班、温得和克等。' },
  { code: 'LUN', city: '卢萨卡', country: '赞比亚', role: '矿业和工业设备入口，适合备件、泵类、发电机。' },
  { code: 'FBM', city: '卢本巴希', country: '刚果金', role: '铜钴矿区项目点，重点看清关、二程和矿区交付。' },
]

const inlandPoints = [
  'NBO 内罗毕',
  'KGL 基加利',
  'CPT 开普敦',
  'DUR 德班',
  'WDH 温得和克',
  'ABJ 阿比让',
  'ACC 阿克拉',
  'LOS 拉各斯',
  'EBB 恩德培',
  'DAR 达累斯萨拉姆',
  'MPM 马普托',
  'FIH 金沙萨',
]

const memberships = ['WCA', 'IATA', 'JCtrans', 'OLO', 'GLA', 'WIFFA']

const countryCards = [
  {
    country: '南非',
    hubs: 'JNB / CPT / DUR',
    trade: '华人和中资企业较多，矿业、汽车、工程供应链成熟。',
    customs: '重点核对进口商税务资料、HS Code、商业发票和二程转运边界。',
  },
  {
    country: '赞比亚',
    hubs: 'LUN',
    trade: '中资矿业、工程和贸易客户活跃，矿业备件需求稳定。',
    customs: '矿业设备要提前确认进口商资质、装箱明细和目的地提货安排。',
  },
  {
    country: '刚果金',
    hubs: 'FBM / FIH',
    trade: '铜钴矿区项目需求强，空运常服务停产急件和高货值备件。',
    customs: '清关和内陆交付不确定性高，必须确认收货人文件和卸货条件。',
  },
  {
    country: '加蓬',
    hubs: 'LBV / POG',
    trade: '法语环境为主，中资工程、木材、能源项目常见。',
    customs: '超长件要先确认机场地面操作能力，文件沟通和代理响应要前置。',
  },
  {
    country: '尼日利亚',
    hubs: 'LOS / ABV / PHC',
    trade: '西非最大市场之一，油气、工程、发电机和贸易急件多。',
    customs: '收货人资质、目的港费用和许可证可能性必须先讲清。',
  },
  {
    country: '肯尼亚/乌干达',
    hubs: 'NBO / EBB',
    trade: '东非商业和项目入口，可延伸卢旺达、南苏丹、坦桑尼亚。',
    customs: '转往内陆国家时，转关、边境文件和最终交付城市要提前确认。',
  },
]

export default function AfricaNetworkSection() {
  return (
    <section id="africa-network" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">非洲中转网络</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-5xl">
            首页直接看清：从中国到LGG/BRU，再进非洲主入口和内陆点。
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            这个网站的核心不是展示机场代码，而是让工厂、贸易商和货代快速判断：
            货能不能飞、走哪个入口、二程怎么接、清关资料哪里容易卡。
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Route className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold text-slate-950">标准路径</h3>
            </div>
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center text-sm font-semibold">
              <div className="rounded-lg bg-slate-100 px-3 py-4">中国起运</div>
              <span className="text-amberGold">→</span>
              <div className="rounded-lg bg-amberGold px-3 py-4 text-slate-950">LGG / BRU</div>
              <span className="text-amberGold">→</span>
              <div className="rounded-lg bg-slate-950 px-3 py-4 text-white">非洲入口</div>
            </div>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <p><span className="font-semibold text-slate-950">适合：</span>超长、超重、超高，国内直飞没有可执行方案的大件项目货。</p>
              <p><span className="font-semibold text-slate-950">先看：</span>尺寸、毛重、包装、吊点、重心、机场装卸、清关资料和二程交付。</p>
              <p><span className="font-semibold text-slate-950">再谈：</span>机型、舱位、欧洲中转、非洲Hub、成本和时效。</p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Plane className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold text-slate-950">B747F直飞/主入口</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {mainGateways.map((item) => (
                <div key={item.code} className="rounded-lg bg-slate-50 p-4">
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <span className="text-2xl font-bold text-slate-950">{item.code}</span>
                    <span className="font-semibold text-amberGold">{item.city}</span>
                  </div>
                  <div className="mb-2 text-sm font-medium text-slate-500">{item.country}</div>
                  <p className="text-sm leading-6 text-slate-600">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <Truck className="h-6 w-6 text-amberGold" />
            <h3 className="text-xl font-semibold text-slate-950">Hub卡车延伸/内陆点</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {inlandPoints.map((point) => (
              <span key={point} className="rounded-full bg-amberGold/10 px-4 py-2 text-sm font-semibold text-slate-800">
                {point}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-xl bg-slate-950 p-6 text-white">
            <div className="mb-5 flex items-center gap-3">
              <Award className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">行业网络与资质</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {memberships.map((name) => (
                <div key={name} className="rounded-lg border border-white/10 bg-white/5 p-4 font-semibold">
                  {name}
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              会员资源用于快速验证目的港代理、清关能力和二程交付，具体仍按每票货实际要求确认。
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold text-slate-950">重点国家情报</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {countryCards.map((item) => (
                <div key={item.country} className="rounded-lg bg-slate-50 p-4">
                  <div className="mb-1 text-lg font-semibold text-slate-950">{item.country}</div>
                  <div className="mb-3 text-sm font-medium text-amberGold">{item.hubs}</div>
                  <p className="mb-2 text-sm leading-6 text-slate-600">
                    <span className="font-semibold text-slate-950">商务特点：</span>{item.trade}
                  </p>
                  <p className="text-sm leading-6 text-slate-600">
                    <span className="font-semibold text-slate-950">清关注意：</span>{item.customs}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-amberGold/30 bg-amberGold/10 p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-slate-950">发资料前，先看是否满足大件空运判断条件。</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                品名、HS Code、尺寸、重量、包装照片、吊点、重心、起运地、目的城市、最晚到货时间。
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <CheckCircle2 className="h-5 w-5 text-amberGold" />
              先判断路线成立，再谈价格
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
