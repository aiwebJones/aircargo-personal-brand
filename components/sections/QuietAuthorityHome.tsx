'use client'

import { ArrowRight, BadgeCheck, Box, CheckCircle2, FileText, MapPin, Plane, Route, ShieldCheck } from 'lucide-react'

interface QuietAuthorityHomeProps {
  onOpenContact: () => void
  onOpenWechat: () => void
}

const FINDER_PATH = '/airport-finder/'
const MAX_QUERY_LENGTH = 120

const primaryGateways = [
  { code: 'JNB', city: '约翰内斯堡', country: '南非', role: '南部非洲主入口，可延伸开普敦、德班、温得和克。' },
  { code: 'FBM', city: '卢本巴希', country: '刚果金', role: '铜钴矿区急件入口，重点确认清关、二程和矿区交付。' },
  { code: 'LUN', city: '卢萨卡', country: '赞比亚', role: '矿业设备、工业备件和工程项目货常用入口。' },
  { code: 'LBV', city: '利伯维尔', country: '加蓬', role: '中非沿海项目入口，适合油气、工程和法语区项目货。' },
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
  'FIH 金沙萨',
  'MPM 马普托',
]

const inquiryItems = [
  '品名',
  'HS Code',
  '尺寸',
  '重量',
  '包装照片',
  '吊点',
  '重心',
  '起运地',
  '目的城市',
  '最晚到货时间',
]

const memberships = ['WCA', 'IATA', 'JCtrans', 'OLO', 'GLA', 'WIFFA']

const routeChecks = [
  '国内直飞没有方案时，先判断欧洲 Hub 能否承接。',
  '超长、超重、超高货先核对机型、板位、地面设备和开门限制。',
  '非洲入口不是只看机场代码，还要看清关资料和二程交付边界。',
  '报价前先列风险清单，避免客户被虚假低价误导。',
]

export default function QuietAuthorityHome({ onOpenContact, onOpenWechat }: QuietAuthorityHomeProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#141312] text-[#f3eadb]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#f3eadb]/10 bg-[#141312]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="/" className="font-serif text-lg font-semibold tracking-normal text-[#f3eadb]">
            神仙货运 Jones
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs uppercase tracking-[0.22em] text-[#8f8779] sm:inline">
              Quiet Authority Preview
            </span>
            <button
              onClick={onOpenWechat}
              className="shrink-0 border border-[#b68a3a] px-4 py-2 text-sm font-semibold text-[#d7ad5c] transition hover:bg-[#b68a3a] hover:text-[#141312]"
            >
              <span className="sm:hidden">判断</span>
              <span className="hidden sm:inline">发资料判断</span>
            </button>
          </div>
        </div>
      </header>

      <section className="relative min-h-[92vh] border-b border-[#f3eadb]/10 px-6 pb-16 pt-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-10 max-w-full text-xs font-semibold uppercase tracking-[0.18em] text-[#b68a3a] sm:text-sm sm:tracking-[0.28em]">
              <span className="sm:hidden">Africa oversized cargo</span>
              <span className="hidden sm:inline">China to Africa oversized air freight</span>
            </p>
            <h1 className="font-serif text-[3.05rem] font-semibold leading-[1.08] tracking-normal text-[#f3eadb] md:text-7xl lg:text-[5.4rem]">
              <span className="block sm:hidden">
                非洲大件
                <br />
                空运
                <br />
                先判断
                <br />
                能不能走。
              </span>
              <span className="hidden sm:block">
                非洲大件空运
                <br />
                先判断
                <br />
                能不能走。
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-9 text-[#b9b0a2] [overflow-wrap:anywhere]">
              中国出发的大件、超限、项目货，国内直飞没有可执行方案时，经 LGG/BRU
              欧洲中转，再进入 JNB、FBM、LUN、LBV 及非洲内陆点。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onOpenWechat}
                className="inline-flex items-center justify-center gap-3 bg-[#b68a3a] px-7 py-4 text-base font-semibold text-[#141312] transition hover:bg-[#d7ad5c]"
              >
                发尺寸重量，先判断路线
                <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-3 border border-[#f3eadb]/25 px-7 py-4 text-base font-semibold text-[#f3eadb] transition hover:border-[#d7ad5c] hover:text-[#d7ad5c]"
              >
                预约项目货讨论
              </button>
            </div>
          </div>

          <div className="min-w-0 border border-[#f3eadb]/14 bg-[#1c1a18] p-6 md:p-8">
            <div className="mb-7 flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b68a3a] sm:text-sm sm:tracking-[0.24em]">
                  Before quotation
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold leading-tight tracking-normal text-[#f3eadb] sm:text-3xl">
                  发资料前，先看是否满足大件空运判断条件。
                </h2>
              </div>
              <FileText className="h-8 w-8 shrink-0 text-[#b68a3a]" />
            </div>
            <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3">
              {inquiryItems.map((item) => (
                <div key={item} className="min-w-0 border border-[#f3eadb]/10 bg-[#141312] px-4 py-3 text-sm font-semibold text-[#d8d0c2]">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 border-l-2 border-[#b68a3a] pl-4 text-base leading-8 text-[#b9b0a2] [overflow-wrap:anywhere]">
              先把尺寸、毛重、吊点、重心和最晚到货时间讲清楚，再判断机型、Hub、清关和二程。
              价格不是第一步，可执行性才是。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#f3eadb]/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#b68a3a]">
                Transit network
              </p>
              <h2 className="font-serif text-4xl font-semibold leading-tight tracking-normal text-[#f3eadb] md:text-6xl">
                从中国到 LGG/BRU，
                <br />
                再进非洲主入口和内陆点。
              </h2>
            </div>
            <p className="text-lg leading-9 text-[#b9b0a2]">
              这个版本不再把网络藏在跳转页里，而是直接在首页说明：
              哪些机场是主入口、哪些是 Hub 延伸点、每条路最容易卡在哪里。
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_auto_0.9fr_auto_1fr] lg:items-stretch">
            <div className="border border-[#f3eadb]/12 p-6">
              <Route className="mb-8 h-7 w-7 text-[#b68a3a]" />
              <div className="font-serif text-3xl font-semibold">中国起运</div>
              <p className="mt-4 text-sm leading-7 text-[#9d9488]">工厂、仓库、机场口岸，先核尺寸和包装。</p>
            </div>
            <div className="hidden items-center text-[#b68a3a] lg:flex">→</div>
            <div className="border border-[#b68a3a] bg-[#b68a3a] p-6 text-[#141312]">
              <Plane className="mb-8 h-7 w-7" />
              <div className="font-serif text-3xl font-semibold">LGG / BRU</div>
              <p className="mt-4 text-sm font-semibold leading-7">欧洲中转、包机、全货机、板位和地面操作。</p>
            </div>
            <div className="hidden items-center text-[#b68a3a] lg:flex">→</div>
            <div className="border border-[#f3eadb]/12 p-6">
              <Box className="mb-8 h-7 w-7 text-[#b68a3a]" />
              <div className="font-serif text-3xl font-semibold">非洲入口</div>
              <p className="mt-4 text-sm leading-7 text-[#9d9488]">清关、二程、矿区或工地交付提前拆分。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#f3eadb]/10 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#b68a3a]">
              Africa gateways
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-normal text-[#f3eadb] md:text-5xl">
              机场代码必须翻译成客户能看懂的项目语言。
            </h2>
            <div className="mt-8 space-y-4">
              {routeChecks.map((item) => (
                <div key={item} className="flex gap-3 text-base leading-7 text-[#b9b0a2]">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#b68a3a]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {primaryGateways.map((item) => (
              <article key={item.code} className="border border-[#f3eadb]/12 bg-[#1c1a18] p-5">
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-4xl font-semibold text-[#f3eadb]">{item.code}</h3>
                  <div className="text-right">
                    <div className="font-semibold text-[#d7ad5c]">{item.city}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#8f8779]">{item.country}</div>
                  </div>
                </div>
                <p className="text-sm leading-7 text-[#b9b0a2]">{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#f3eadb]/10 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#b68a3a]">
                Inland extension
              </p>
              <h2 className="font-serif text-4xl font-semibold tracking-normal text-[#f3eadb] md:text-5xl">
                Hub 延伸和内陆点。
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#b9b0a2]">
              客户看到的不是一串代码，而是“能到哪里、怎么接、哪里有风险”。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {inlandPoints.map((point) => (
              <div key={point} className="border border-[#f3eadb]/12 px-5 py-4 text-base font-semibold text-[#d8d0c2]">
                {point}
              </div>
            ))}
          </div>

          <div className="mt-10 border border-[#f3eadb]/14 bg-[#1c1a18] p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#b68a3a]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  Nearest cargo airport
                </p>
                <h3 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#f3eadb]">
                  给一个地址，先看最近哪个货运机场。
                </h3>
                <p className="mt-4 text-base leading-8 text-[#b9b0a2]">
                  目的机场选错，货能到，但落地后的卡车、清关和交付会把账整个改写。
                </p>
              </div>
              <div>
                <form action={FINDER_PATH} method="get" className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="quiet-airport-finder-q" className="sr-only">
                    输入目的地地址或城市，查最近的货运机场
                  </label>
                  <input
                    id="quiet-airport-finder-q"
                    name="q"
                    type="search"
                    required
                    minLength={2}
                    maxLength={MAX_QUERY_LENGTH}
                    autoComplete="off"
                    placeholder="例：Kolwezi, DRC"
                    className="min-h-12 flex-1 border border-[#f3eadb]/20 bg-[#141312] px-4 py-3 text-base text-[#f3eadb] placeholder:text-[#8f8779] focus:border-[#b68a3a] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#b68a3a] px-6 text-base font-semibold text-[#141312] transition hover:bg-[#d7ad5c]"
                  >
                    查最近机场
                  </button>
                </form>
                <a
                  href={FINDER_PATH}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d7ad5c] hover:text-[#f3eadb]"
                >
                  打开完整地图
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#b68a3a]">
              Credentials
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-normal text-[#f3eadb] md:text-6xl">
              不是普通货代销售，
              <br />
              是复杂非洲项目货的判断者。
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-[#b9b0a2]">
              会员网络用于验证目的港代理、清关能力和二程交付资源。最终仍按每票货的尺寸、
              重量、文件和时效要求做可执行性判断。
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-3">
              {memberships.map((name) => (
                <div key={name} className="border border-[#f3eadb]/12 bg-[#1c1a18] p-5">
                  <BadgeCheck className="mb-4 h-6 w-6 text-[#b68a3a]" />
                  <div className="font-serif text-2xl font-semibold text-[#f3eadb]">{name}</div>
                </div>
              ))}
            </div>
            <button
              onClick={onOpenWechat}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-[#f3eadb] px-7 py-4 text-base font-semibold text-[#141312] transition hover:bg-[#d7ad5c]"
            >
              发资料，让 Jones 先判断能不能走
              <ShieldCheck className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
