import { ArrowUpRight, MapPin, Search } from 'lucide-react'

const FINDER_PATH = '/airport-finder/'
const MAX_QUERY_LENGTH = 120

// 挑的都是真实会遇到的场景：矿区、内陆项目点、法语区、二程最贵的那几个
const samples = [
  { label: 'Kolwezi, DRC', hint: '铜钴矿区' },
  { label: 'Ndola, Zambia', hint: '赞比亚铜带省' },
  { label: 'Port Harcourt, Nigeria', hint: '尼日利亚油气' },
  { label: 'Tete, Mozambique', hint: '莫桑比克内陆' },
] as const

const facts = [
  '8800 个机场 / 249 个国家',
  '按直线距离和方位排序，可只看货运机场',
  '国内可直连，免费，不用注册',
] as const

export default function AirportFinderSection() {
  return (
    <section id="airport-finder" className="scroll-mt-16 border-y border-slate-200 bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              地图工具 · 免费
            </div>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              目的地是个地址，不是三字码
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              客户发过来的通常是工厂地址、矿区名或一个城市，不是 IATA 代码。
              输进去，直接看最近的货运机场、直线距离和方位。
            </p>

            <form action={FINDER_PATH} method="get" className="mt-6">
              <label htmlFor="airport-finder-q" className="sr-only">
                输入目的地地址或城市，查最近的货运机场
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Search
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />
                  <input
                    id="airport-finder-q"
                    name="q"
                    type="search"
                    required
                    minLength={2}
                    maxLength={MAX_QUERY_LENGTH}
                    autoComplete="off"
                    placeholder="例：Kolwezi, DRC　/　约翰内斯堡　/　Tema, Ghana"
                    className="min-h-12 w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-700/20"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-emerald-700 px-6 text-base font-bold text-white transition hover:bg-emerald-800"
                >
                  查最近机场
                </button>
              </div>
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-slate-500">试试：</span>
              {samples.map((sample) => (
                <a
                  key={sample.label}
                  href={`${FINDER_PATH}?q=${encodeURIComponent(sample.label)}`}
                  className="rounded-full border border-slate-300 px-3 py-1 text-slate-700 transition hover:border-emerald-700 hover:text-emerald-700"
                >
                  {sample.label}
                  <span className="ml-1 text-slate-400">{sample.hint}</span>
                </a>
              ))}
            </div>

            <a
              href={FINDER_PATH}
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700"
            >
              打开完整地图，点地图任意位置也能查
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-base font-bold text-slate-950">为什么这一步值得先查</p>
            <p className="mt-3 text-base leading-7 text-slate-600">
              目的机场选错，货能到，但落地之后的卡车、清关和交付会把账整个改写。
              内陆项目点尤其明显——空运省下来的两天，可能被 600 公里陆运和一次二次清关吃掉。
              先看清最近的几个货运机场和各自的距离，再决定报哪个。
            </p>
            <ul className="mt-5 space-y-2 border-t border-slate-200 pt-5 text-sm text-slate-700">
              {facts.map((fact) => (
                <li key={fact} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" aria-hidden="true" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
