import type { Metadata } from 'next'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck2,
  MapPinned,
  PackageCheck,
  Plane,
  ShieldCheck,
  Truck,
  Waypoints,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'LGG欧洲中转枢纽 | 中国至非洲超大件运输网络',
  description:
    '中国至非洲超大件货物可评估经LGG中转，结合B747F直达航点及非洲枢纽卡车转运网络，覆盖JNB、FBM、LUN、EBB、NBO、LOS、ACC和30多个内陆目的地。',
  alternates: {
    canonical: 'https://www.eascargo.com/china-africa-oversized-cargo-via-europe/',
  },
  openGraph: {
    title: 'LGG非洲超大件中转枢纽',
    description:
      '面向非洲超大件货物的LGG欧洲中转网络：结合B747F直达航点与枢纽卡车转运，衔接非洲内陆目的地。',
    url: 'https://www.eascargo.com/china-africa-oversized-cargo-via-europe/',
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
    label: '中国起运 → LGG → B747F非洲直达航点',
    detail: '以LGG作为欧洲门户，再衔接B747F主甲板运力，服务非洲主要机场。',
  },
  {
    label: '中国起运 → LGG → 非洲枢纽 → 卡车转运',
    detail: '对于FBM、KGL、CPT、DUR、WDH、ABJ、FIH等内陆目的地，可评估经可行的非洲枢纽转运，不应勉强采用无法衔接的直达方案。',
  },
]

const cargoTypes = [
  '超大机械及生产线设备',
  '矿业设备、备件及紧急替换件',
  '被客机或常规全货机路线拒收的项目货',
  '需要评估欧洲全货机包机方案的重货',
]

const process = [
  {
    icon: PackageCheck,
    title: '货物可行性评估',
    text: '报价前核实尺寸、重量、能否堆叠、吊点、照片、包装及机场限制。',
  },
  {
    icon: Plane,
    title: '中国至 LGG 起运',
    text: '先评估可用的宽体客机或全货机方案，以更现实的方式将货物运出中国。',
  },
  {
    icon: FileCheck2,
    title: '欧洲中转操作',
    text: '协调货物交接、单证、仓库操作、组板及LGG中转准备。',
  },
  {
    icon: Truck,
    title: '非洲枢纽与内陆交付',
    text: '通过B747F直达服务或枢纽卡车转运，衔接JNB、FBM、LUN、EBB、NBO、LOS、ACC及内陆目的地。',
  },
]

export default function EuropeTransitCargoPage() {
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
            返回EASCargo首页
          </a>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-medium text-amberGold">
              <MapPinned className="h-4 w-4" />
              面向非洲超大件货物的LGG欧洲中转网络
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              LGG非洲中转枢纽
              <span className="block text-amberGold">中国起运超大件货物方案</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              对于无法按常规中国起运航班运输的超大件、重货和项目货，EASCargo评估中国至LGG的中转方案，再通过B747F直达服务或非洲枢纽卡车转运衔接目的地。网络覆盖JNB、FBM、LUN、EBB、NBO、LOS、ACC及30多个内陆目的地。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:globegsa@gmail.com?subject=LGG%20Africa%20Gateway%20oversized%20cargo%20quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950 transition hover:bg-amberGold/90"
              >
                提交货物资料
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#route-plan"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-amberGold hover:text-amberGold"
              >
                查看路线逻辑
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="route-plan" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">路线逻辑</p>
            <h2 className="mb-5 text-3xl font-bold text-slate-950 md:text-4xl">
              方案不止一个机场，而是一张可组合的枢纽网络。
            </h2>
            <p className="text-lg leading-8 text-textSecondary">
              许多中国至非洲超大件询价首先遇到的问题是没有直达机型、舱门尺寸不符、缺少主甲板选项，或没有承运人愿意接收。解决办法不只是寻找更低运价，而是评估以LGG作为欧洲门户，再衔接合适的非洲枢纽。
            </p>
          </div>
          <div className="grid gap-4">
            {routeCards.map((route) => (
              <div key={route.label} className="rounded-lg border border-borderLight bg-surface p-6">
                <div className="mb-3 flex items-center gap-3 text-lg font-semibold text-slate-950">
                  <Plane className="h-5 w-5 text-amberGold" />
                  {route.label}
                </div>
                <p className="leading-7 text-textSecondary">{route.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">网络覆盖</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              以 LGG 直达全货机节点衔接非洲枢纽卡车转运。
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-borderLight bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Plane className="h-6 w-6 text-amberGold" />
                <h3 className="text-xl font-semibold text-slate-950">B747F从LGG直达</h3>
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
                <h3 className="text-xl font-semibold text-slate-950">经非洲枢纽卡车转运</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {truckTransferGroups.map((group) => (
                  <div key={group.hub} className="rounded-lg bg-slate-50 p-4">
                    <div className="mb-2 text-sm font-semibold text-amberGold">经{group.hub}枢纽</div>
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">适配货物类型</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              面向普通空运难以承运的大件与项目货。
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {cargoTypes.map((item) => (
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
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">操作流程</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            从直飞不可行，到规划可执行的包机衔接方案。
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">询价需提供的资料</p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">先确认路线可行性，再询运价。</h2>
            <p className="text-lg leading-8 text-slate-300">
              请提供货物尺寸、毛重、包装照片、起运城市、目标机场、备货日期，以及特殊吊装或操作说明。我们会先判断中国直达是否可行，或是否应评估经LGG中转并衔接非洲枢纽。
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">询价资料清单</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>品名及HS Code（如已知）</li>
              <li>尺寸、重量和件数</li>
              <li>包装照片及吊点</li>
              <li>中国起运城市及非洲目的机场或内陆城市</li>
              <li>备货日期及最晚可接受到货日期</li>
            </ul>
            <a
              href="mailto:globegsa@gmail.com?subject=Oversized%20cargo%20via%20Europe%20quote%20request"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950 transition hover:bg-amberGold/90"
            >
              发送货物资料邮件
              <Clock className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
