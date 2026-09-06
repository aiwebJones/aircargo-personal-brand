import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, FileCheck2, Plane, ShieldCheck } from 'lucide-react'
import RouteProgramExplorer from './RouteProgramExplorer'

const pageUrl = 'https://www.eascargo.com/route-programs/et-asia-africa-via-add/'

export const metadata: Metadata = {
  title: 'ET亚洲至非洲空运 | 马尔代夫/新加坡/菲律宾经ADD | EASCARGO',
  description:
    'EASCargo比较马尔代夫MLE、新加坡SIN、菲律宾MNL经ADD至CMN、ALG、TUN、CKY、OUA、EBB、HAH、NBJ、BKO的非洲空运价格、总成本和执行风险。',
  keywords: [
    '马尔代夫到非洲空运',
    '新加坡到非洲空运',
    '菲律宾到非洲空运',
    'ET埃塞俄比亚航空非洲空运',
    'ADD中转非洲',
    'MLE SIN MNL Africa air freight',
    '亚洲到非洲空运',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'MLE / SIN / MNL 经 ADD 至非洲空运项目 | EASCARGO',
    description: '比较亚洲第三地起运与中国直出的全程成本、舱位、文件和目的港执行风险。',
    url: pageUrl,
    type: 'website',
    images: [{ url: 'https://www.eascargo.com/case-17t-1.jpg', alt: 'EASCargo Africa project cargo handling' }],
  },
}

const destinationGroups = [
  {
    title: '北非工业市场',
    airports: [
      { code: 'CMN', name: '卡萨布兰卡 · 摩洛哥', body: '工业设备、汽车零部件、电子和项目急件。关注进口商资料、品名归类、语言文件与二程确认。', href: '/africa-air-freight/cmn/' },
      { code: 'ALG', name: '阿尔及尔 · 阿尔及利亚', body: '能源、工程和工业备件价值较高。进口许可、银行与货值文件往往比单纯运价更重要。' },
      { code: 'TUN', name: '突尼斯 · 突尼斯', body: '制造业、电子、汽车供应链和维修件。要核对最终城市、进口文件和目的港操作费用。' },
    ],
  },
  {
    title: '东非与印度洋',
    airports: [
      { code: 'ADD', name: '亚的斯亚贝巴 · 埃塞俄比亚', body: 'ET 核心枢纽及本地进口点。到 ADD 不代表自动清关，仍需进口商、许可证和交付责任判断。', href: '/africa-air-freight/add/' },
      { code: 'EBB', name: '恩德培 · 乌干达', body: '医疗、能源、矿业和工业急件。UNBS/PVoC、当地清关和 Kampala 或项目地交付要一起确认。', href: '/africa-air-freight/ebb/' },
      { code: 'HAH', name: '莫罗尼 · 科摩罗', body: '岛屿机场运力和频次敏感。中转衔接、滞留、温控、目的港操作和岛内交付要留足缓冲。' },
    ],
  },
  {
    title: '西非与萨赫勒',
    airports: [
      { code: 'CKY', name: '科纳克里 · 几内亚', body: '铝土矿、矿业设备和工程备件。法语资料、包装尺寸、进口文件和矿区二程是判断重点。', href: '/africa-air-freight/cky/' },
      { code: 'OUA', name: '瓦加杜古 · 布基纳法索', body: '矿业、能源、工程和援助急件。逐票确认舱位、当地代理、安保条件与最终交付范围。', href: '/africa-air-freight/oua/' },
      { code: 'BKO', name: '巴马科 · 马里', body: '内陆矿业和能源项目需求明确。清关代理、项目地距离、陆运安保和收货人配合度影响全程结果。', href: '/africa-air-freight/bko/' },
    ],
  },
  {
    title: '安哥拉新门户',
    airports: [
      { code: 'NBJ', name: '卢安达 · 安哥拉', body: 'NBJ 为 Dr. António Agostinho Neto International Airport。制单时要核对 NBJ/LAD 切换状态、实际到达机场、地服和提货安排。' },
    ],
  },
]

const commercialFit = [
  {
    label: '优先比较',
    tone: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    title: '货物已在当地，资料完整',
    body: '普货、尺寸规则、备货时间明确，并且 MLE/SIN/MNL 当期全程价格有明显优势时，适合快速比价和锁定舱位。',
  },
  {
    label: '人工审核',
    tone: 'border-amber-200 bg-amber-50 text-amber-900',
    title: '超长、超高、重货或敏感货',
    body: '电池、危险品、温控、不可叠、单件重货和超尺寸货，必须确认每一航段机型、装载位置、地服和中转接受条件。',
  },
  {
    label: '不要只看低价',
    tone: 'border-rose-200 bg-rose-50 text-rose-900',
    title: '中国货为低价而绕行',
    body: '先加入调拨、二次出口、仓储、时间和文件风险。只有全程成本和交付窗口同时成立，路线才有商业意义。',
  },
]

export default function EtAsiaAfricaRouteProgramPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: 'MLE, SIN and MNL to Africa air freight via ADD route program',
    alternateName: '马尔代夫、新加坡、菲律宾经ADD至非洲空运项目',
    url: pageUrl,
    description: metadata.description,
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.eascargo.com/#organization',
      name: 'EASCARGO',
      url: 'https://www.eascargo.com/',
    },
    areaServed: ['Morocco', 'Algeria', 'Tunisia', 'Ethiopia', 'Guinea', 'Burkina Faso', 'Uganda', 'Comoros', 'Angola', 'Mali'],
    serviceType: ['Africa air freight route comparison', 'Project cargo quote readiness', 'ADD transit planning'],
    mentions: {
      '@type': 'Organization',
      name: 'Ethiopian Airlines',
      url: 'https://cargo.ethiopianairlines.com/',
    },
    dateModified: '2026-07-11',
    termsOfService: 'Capacity, aircraft acceptance, operating carrier, transit time and rates require shipment-specific confirmation.',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.eascargo.com/' },
      { '@type': 'ListItem', position: 2, name: 'Route Programs', item: 'https://www.eascargo.com/route-programs/' },
      { '@type': 'ListItem', position: 3, name: 'ET Asia to Africa via ADD', item: pageUrl },
    ],
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section
        className="relative flex min-h-[78svh] items-end overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/case-17t-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-24 sm:px-6 lg:px-8">
          <Link href="/route-programs/" className="inline-flex items-center gap-2 text-sm font-bold text-amberGold hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            航线项目
          </Link>
          <p className="mt-10 text-sm font-bold uppercase text-amberGold">ET / ADD transit · Asia to Africa</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-6xl lg:text-7xl">
            马尔代夫、新加坡、菲律宾至非洲联运
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            当 MLE、SIN、MNL 的可执行运价明显优于中国起运时，先比较全程总成本，再判断是否值得采用。
            EASCargo 把起运地操作、ADD 中转、非洲二程、目的港清关与最终交付放在同一张报价逻辑里。
          </p>
          <div className="mt-7 flex flex-wrap gap-2 text-sm font-bold">
            {['MLE / SIN / MNL', 'via ADD', 'CMN · ALG · TUN', 'CKY · OUA · BKO', 'EBB · HAH · NBJ'].map((item) => (
              <span key={item} className="rounded border border-white/25 bg-slate-950/70 px-3 py-2">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-5 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ['3', '亚洲起运市场'],
            ['10', '非洲报价目标点'],
            ['ADD', '核心中转判断'],
            ['All-in', '比较全程成本'],
          ].map(([value, label]) => (
            <div key={label} className="min-h-28 border-r border-slate-200 p-5 first:border-l">
              <strong className="block text-2xl font-black">{value}</strong>
              <span className="mt-2 block text-sm leading-6 text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <RouteProgramExplorer />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase text-emerald-700">Destination analysis</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">10 个非洲点，分成四类运营场景</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              每个点的询价重点不同。路线项目要说明货物适配、进口资料、机场交接和最后一公里，而不是只列机场代码。
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {destinationGroups.map((group) => (
              <article key={group.title} className="rounded-lg border border-slate-200 p-6">
                <h3 className="text-xl font-black">{group.title}</h3>
                <div className="mt-4 divide-y divide-slate-200">
                  {group.airports.map((airport) => (
                    <div key={airport.code} className="grid grid-cols-[58px_1fr] gap-4 py-4">
                      <span className="text-xl font-black text-emerald-700">{airport.code}</span>
                      <div>
                        <h4 className="font-bold">{airport.name}</h4>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{airport.body}</p>
                        {airport.href && (
                          <Link href={airport.href} className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-emerald-700 hover:text-slate-950">
                            查看目的港资料 <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <h2 className="max-w-4xl text-3xl font-black md:text-4xl">什么情况下值得推，什么情况下必须复核</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {commercialFit.map((item) => (
              <article key={item.label} className={`rounded-lg border p-6 ${item.tone}`}>
                <p className="text-xs font-black uppercase">{item.label}</p>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase text-emerald-700">Verification sources</p>
            <h2 className="mt-3 text-3xl font-black">公开网络做基础核对，商业资源逐票确认</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              本页不会把价格资源包装成航空公司固定时刻，也不会把客机、货机、联运和合作承运人混为一谈。
            </p>
          </div>
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {[
              ['ET Cargo 官方货运目的地', 'https://cargo.ethiopianairlines.com/network/destinations'],
              ['ET Cargo 官方动态班期查询', 'https://cargo.ethiopianairlines.com/my-cargo/schedule'],
              ['ET Cargo 亚的斯亚贝巴枢纽设施', 'https://cargo.ethiopianairlines.com/about-us/facility-and-fleets/facility/addis-ababa-hub?page=JJJ2QQQ'],
            ].map(([label, href]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-between gap-4 py-3 text-sm font-bold text-slate-700 hover:text-emerald-700">
                {label}
                <ExternalLink className="h-4 w-4 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-black">先把真实报价变成可比较方案。</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
              发送货物所在地、目的机场、品名、HS Code、尺寸、重量、包装照片、备货时间和最晚到货时间，由 EASCargo 逐票比较中国直出与 MLE/SIN/MNL 起运。
            </p>
          </div>
          <Link href="/tools/africa-project-cargo-rfq/?source=route-program&topic=et-asia-africa-via-add" className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-amberGold px-6 font-black text-slate-950 hover:bg-white">
            <Plane className="h-5 w-5" />
            提交路线资料
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 py-8 text-slate-400">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 text-xs leading-6 sm:px-6 md:grid-cols-3 lg:px-8">
          <div className="flex gap-3"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amberGold" />不发布未经核实的固定运价或时效。</div>
          <div className="flex gap-3"><FileCheck2 className="mt-1 h-4 w-4 shrink-0 text-amberGold" />航段、承运人和机场代码按每票货确认。</div>
          <div className="flex gap-3"><ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-amberGold" />EASCargo 为独立货运服务商，本页不构成航空公司代理声明。</div>
        </div>
      </section>
    </main>
  )
}
