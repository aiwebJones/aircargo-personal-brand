import type { Metadata } from 'next'
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  MapPinned,
  PackageCheck,
  Plane,
  ShieldCheck,
  Truck,
  Waypoints,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'LGG欧洲中转非洲大件空运网络 | 中国到非洲项目货方案',
  description:
    '面向中国货代、工厂和外贸公司：国内没有直飞方案时，通过LGG欧洲中转，衔接B747F直飞非洲与非洲Hub卡车中转，覆盖JNB、FBM、LUN、EBB、NBO、LOS、ACC及30+内陆点。',
  alternates: {
    canonical: 'https://www.eascargo.com/zh/lgg-africa-gateway/',
  },
  openGraph: {
    title: 'LGG欧洲中转非洲大件空运网络',
    description:
      '国内无法直飞非洲的大件项目货，先飞LGG，再通过B747F直飞或非洲Hub卡车中转覆盖主要非洲点。',
    url: 'https://www.eascargo.com/zh/lgg-africa-gateway/',
    type: 'website',
  },
}

const directFlightDestinations = [
  'ACC',
  'BGF',
  'BZV',
  'PNR',
  'LBV',
  'POG',
  'LOS',
  'NBO',
  'NIM',
  'PHC',
  'NBJ',
  'JNB',
  'LUN',
  'EBB',
]

const truckTransferGroups = [
  { hub: 'ACC', destinations: ['ABJ', 'LFW'] },
  { hub: 'LOS', destinations: ['ABV', 'COO', 'DLA', 'FIH', 'NDJ', 'OUA', 'SSG'] },
  { hub: 'NBO', destinations: ['DAR', 'FBM', 'HRE', 'JUB', 'LLW', 'LUN', 'MGQ', 'MPM', 'MWZ', 'EBB'] },
  { hub: 'EBB', destinations: ['KGL'] },
  { hub: 'JNB', destinations: ['CPT', 'DUR', 'PLZ', 'ELS', 'MTS', 'MSU', 'MPM', 'WDH', 'GBE'] },
  { hub: 'WDH', destinations: ['WVB'] },
]

const routeCards = [
  {
    title: '中国起运 -> LGG -> B747F直飞非洲点',
    text: '适合JNB、LUN、EBB、NBO、LOS、ACC等有全货机主甲板能力的重点机场。',
  },
  {
    title: '中国起运 -> LGG -> 非洲Hub -> 卡车中转',
    text: '适合FBM、KGL、CPT、DUR、WDH、ABJ、FIH等国内直飞难做、但可以通过非洲Hub延伸的内陆点。',
  },
]

const customerTypes = [
  '中国货代同行：客户有非洲大件需求，但国内直飞没有可执行方案',
  '设备工厂和外贸公司：货物尺寸、重量、时效都卡住，需要先判断路线是否成立',
  '项目物流团队：矿山、工厂、工程设备需要从中国快速进非洲',
  '采购代理和供应链公司：要给非洲买家一个能解释清楚的运输路径',
]

const process = [
  {
    icon: PackageCheck,
    title: '先判断货能不能飞',
    text: '看尺寸、重量、包装、吊点、照片、机场限制，不先报虚价。',
  },
  {
    icon: Plane,
    title: '中国段先飞LGG',
    text: '国内没有直飞方案时，先设计中国到LGG的可执行出运路径。',
  },
  {
    icon: FileCheck2,
    title: 'LGG中转衔接',
    text: '处理欧洲中转交接、文件、仓库操作、组板和二程准备。',
  },
  {
    icon: Truck,
    title: '非洲段直飞或卡车延伸',
    text: '通过B747F直飞非洲点，或经ACC、LOS、NBO、EBB、JNB、WDH等Hub卡车中转。',
  },
]

export default function LggAfricaGatewayZhPage() {
  return (
    <main className="min-h-screen bg-white text-textPrimary">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,166,35,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.35) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28">
          <a href="/" className="mb-10 inline-flex items-center text-sm text-amberGold hover:text-white">
            返回 EASCargo 首页
          </a>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-medium text-amberGold">
              <MapPinned className="h-4 w-4" />
              LGG欧洲中转非洲大件空运网络
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              国内没有直飞方案？
              <span className="block text-amberGold">用LGG把非洲大件路线做出来。</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              面向中国货代、工厂和外贸公司：当超限大件无法从国内直飞非洲时，
              先飞LGG，再衔接B747F直飞非洲点或非洲Hub卡车中转。
              覆盖JNB、FBM、LUN、EBB、NBO、LOS、ACC及30+内陆目的地。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:globegsa@Gmail.com?subject=LGG%E9%9D%9E%E6%B4%B2%E4%B8%AD%E8%BD%AC%E5%A4%A7%E4%BB%B6%E8%AF%A2%E4%BB%B7"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950 transition hover:bg-amberGold/90"
              >
                发送货物资料
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#network"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-amberGold hover:text-amberGold"
              >
                查看覆盖点
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">为什么不是老外优先</p>
            <h2 className="mb-5 text-3xl font-bold text-slate-950 md:text-4xl">
              这个产品更适合中文区客户。
            </h2>
            <p className="text-lg leading-8 text-textSecondary">
              欧美和法语区客户天然更信任CEVA、JAS、K&N、DHL这类全球公司。我们的机会不在于和巨头抢品牌信任，
              而在于帮中文区客户把“国内没有直飞方案”的非洲大件货先做出可执行路线，再把成本、节点和风险解释清楚。
            </p>
          </div>
          <div className="grid gap-4">
            {routeCards.map((route) => (
              <div key={route.title} className="rounded-lg border border-borderLight bg-surface p-6">
                <div className="mb-3 flex items-center gap-3 text-lg font-semibold text-slate-950">
                  <Plane className="h-5 w-5 text-amberGold" />
                  {route.title}
                </div>
                <p className="leading-7 text-textSecondary">{route.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="network" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">覆盖网络</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              LGG直飞全货机点 + 非洲Hub卡车中转点。
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-borderLight bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Plane className="h-6 w-6 text-amberGold" />
                <h3 className="text-xl font-semibold text-slate-950">LGG B747F直飞点</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {directFlightDestinations.map((code) => (
                  <span key={code} className="rounded-full bg-amberGold/10 px-3 py-1 text-sm font-semibold text-slate-800">
                    {code}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-borderLight bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Waypoints className="h-6 w-6 text-amberGold" />
                <h3 className="text-xl font-semibold text-slate-950">经非洲Hub卡车中转</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {truckTransferGroups.map((group) => (
                  <div key={group.hub} className="rounded-lg bg-slate-50 p-4">
                    <div className="mb-2 text-sm font-semibold text-amberGold">经 {group.hub}</div>
                    <div className="text-sm leading-7 text-textSecondary">{group.destinations.join(' / ')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">适合谁</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              不是普通空运价，是“没方案时的方案”。
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {customerTypes.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                <p className="leading-7 text-textSecondary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">操作路径</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            先判断路线成立，再谈价格。
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="rounded-lg border border-borderLight p-6">
                <Icon className="mb-5 h-8 w-8 text-amberGold" />
                <h3 className="mb-3 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="text-sm leading-7 text-textSecondary">{step.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">询价资料</p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">不要只问“几块钱一公斤”。先把货物说清楚。</h2>
            <p className="text-lg leading-8 text-slate-300">
              发货物尺寸、毛重、件数、包装照片、起运城市、目的机场或城市、备货时间、最晚到货时间。
              我会先判断国内直飞是否可能；如果不现实，再给LGG中转和非洲Hub延伸方案。
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">请至少提供</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>品名，最好有HS Code</li>
              <li>尺寸、重量、件数、是否可叠放</li>
              <li>包装照片、吊点、重心或特殊装卸要求</li>
              <li>中国起运城市、非洲目的机场或内陆城市</li>
              <li>备货时间和最晚到货时间</li>
            </ul>
            <a
              href="mailto:globegsa@Gmail.com?subject=LGG%E9%9D%9E%E6%B4%B2%E4%B8%AD%E8%BD%AC%E5%A4%A7%E4%BB%B6%E8%AF%A2%E4%BB%B7"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950 transition hover:bg-amberGold/90"
            >
              发送询价资料
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
