import type { Metadata } from 'next'
import Link from 'next/link'
import { AlertTriangle, ArrowRight, CheckCircle2, Clock3, FileSearch, Plane, Route, ShieldCheck } from 'lucide-react'

const pageUrl = 'https://www.eascargo.com/tools/africa-urgent-spare-parts-route-risk-checklist/'

export const metadata: Metadata = {
  title: '非洲急件备件空运路线风险清单 | Africa Spare Parts Air Freight Route Risk Checklist | EASCargo Jones',
  description:
    'Pre-check China to Africa urgent spare-parts air freight route risk before quoting: airport code, downtime deadline, main-deck need, LGG/BRU transit, customs documents, importer readiness and final-site delivery.',
  keywords: [
    'Africa urgent spare parts air freight',
    'China to Africa spare parts air cargo',
    'Africa air freight route risk checklist',
    'JNB urgent spares air freight',
    'FBM mining spare parts air freight',
    'LUN industrial spare parts air freight',
    'LGG BRU Africa transit urgent cargo',
    '非洲急件空运',
    '非洲备件空运路线风险',
    '矿业备件空运非洲',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '非洲急件备件空运路线风险清单 | EASCargo Jones',
    description:
      'A route-risk checklist for China to Africa urgent spare-parts RFQs before promising price, transit time or airport delivery.',
    url: pageUrl,
    type: 'website',
  },
}

const riskChecks = [
  {
    title: '停产时间',
    question: '这票货是在救产线、矿区、油气现场，还是普通补货？',
    action: '写清最晚到现场时间，不要只写“urgent”。',
  },
  {
    title: '机场和最终现场',
    question: '只到 JNB/LOS/NBO/ACC，还是要继续到矿区、油田、工厂或项目现场？',
    action: '同时给目的机场、最终城市、现场联系人和卸货条件。',
  },
  {
    title: '主甲板和中转',
    question: '最长件、最重件、不可倒置或不可堆叠货物，腹舱是否根本装不下？',
    action: '先判断主甲板、B747F、LGG/BRU 中转或非洲 hub 转运。',
  },
  {
    title: '清关资料',
    question: '品名、HS Code、进口商、发票、箱单、证书和目的国系统资料是否可在起飞前确认？',
    action: '资料不完整时，先给风险清单，不要承诺到港放行时间。',
  },
  {
    title: '货物属性',
    question: '备件是否带电池、液体、压力、磁性、危险品、木包装、无线模块或旧设备属性？',
    action: '提前收 MSDS、UN38.3、照片、用途、品牌型号和监管证书。',
  },
  {
    title: '费用边界',
    question: '客户问的是机场到机场，还是含清关、税费、仓储、查验、二程和现场交付？',
    action: '报价前把责任边界写明，否则低价会变成争议。',
  },
]

const routeLinks = [
  {
    label: 'JNB Johannesburg urgent mining spares',
    href: '/africa-air-freight/jnb/',
    note: '南部非洲矿业、工厂维修和高价值急件的优先入口。',
  },
  {
    label: 'FBM Lubumbashi Copperbelt spares',
    href: '/africa-air-freight/fbm/',
    note: '铜钴矿区备件、泵、电机、变压器和现场维修货。',
  },
  {
    label: 'LUN Lusaka industrial spares',
    href: '/africa-air-freight/lun/',
    note: '赞比亚工业设备、矿区支持和内陆项目现场。',
  },
  {
    label: 'LOS / PHC Nigeria oil and gas spares',
    href: '/insights/nigeria-phc-oil-gas-spares-soncap-nsw-air-freight-clearance/',
    note: '尼日利亚油气急件要先看 SONCAP、Form M、PAAR 和清关边界。',
  },
  {
    label: 'LGG / BRU Africa transit',
    href: '/zh/lgg-africa-gateway/',
    note: '超长、超重或主甲板货，经欧洲中转时要提前看 ENS 和二程窗口。',
  },
  {
    label: 'Customs document checklist tool',
    href: '/tools/africa-air-freight-customs-document-checklist/',
    note: '按目的国和货物属性生成清关资料清单。',
  },
]

const rfqFields = [
  '停产/维修场景和最晚到现场时间',
  '目的机场、最终城市、项目现场地址和联系人',
  '品名、用途、HS Code、品牌型号、照片',
  '件数、每件尺寸、每件毛重、是否可堆叠/可倒置',
  '包装照片、吊点、叉车孔、重心和卸货条件',
  '进口商、清关代理、税号、许可证/证书状态',
  '电池、液体、化工、压力、磁性、木包装、旧设备等属性',
  '报价边界：机场到机场、到港清关、含税派送或现场交付',
]

const sourceLinks = [
  {
    label: 'IATA: Air Cargo Demand Up 6.0% in May 2026',
    href: 'https://www.iata.org/en/pressroom/2026-releases/06-29-air-cargo-demand-up-may/',
  },
  {
    label: 'Google Search Central: Link best practices',
    href: 'https://developers.google.com/search/docs/crawling-indexing/links-crawlable',
  },
]

export default function AfricaUrgentSparePartsRouteRiskChecklistPage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Africa urgent spare parts air freight route risk checklist',
    url: pageUrl,
    description: metadata.description,
    about: ['urgent spare parts air freight', 'China to Africa air cargo', 'route risk checklist'],
    provider: {
      '@type': 'Organization',
      name: 'EASCargo Jones',
      url: 'https://www.eascargo.com/',
      email: 'globegsa@gmail.com',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.eascargo.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools',
        item: 'https://www.eascargo.com/tools/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Africa urgent spare parts route risk checklist',
        item: pageUrl,
      },
    ],
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to pre-check urgent Africa spare-parts air freight route risk',
    step: riskChecks.map((item, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: item.title,
      text: `${item.question} ${item.action}`,
    })),
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <section className="bg-slate-950 px-5 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Link href="/" className="text-sm font-semibold text-amberGold hover:text-white">
              EASCargo Jones
            </Link>
            <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-amberGold/40 bg-amberGold/10 px-3 py-2 text-sm font-semibold text-amberGold">
              <Clock3 className="h-4 w-4" />
              Urgent spare-parts route risk
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              非洲急件备件空运路线风险清单
              <span className="block text-amberGold">先判断能不能准时到现场。</span>
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              适合矿业、油气、工厂维修、能源项目和高价值设备备件。客户说“急”，还不够报价；
              先把停产时间、机场代码、主甲板、中转、清关资料和最终现场交付拆清楚。
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3 text-amberGold">
              <AlertTriangle className="h-6 w-6" />
              <span className="text-sm font-semibold">Why this matters now</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              IATA 2026 年 5 月数据显示，非洲航司货运需求同比增长 13.3%，Africa-Asia 航线同比增长 14.1%。
              需求增长不等于每票急件都好走；对停产备件，风险集中在主甲板窗口、欧洲中转、目的港清关和现场交付。
            </p>
            <div className="mt-5 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              {['机场代码', '主甲板尺寸', '清关资料', '现场交付'].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-md bg-white/5 p-3">
                  <CheckCircle2 className="h-4 w-4 text-amberGold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {riskChecks.map((item, index) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-sm font-black text-amberGold">
                {index + 1}
              </div>
              <h2 className="mt-5 text-xl font-black text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.question}</p>
              <p className="mt-4 rounded-md bg-amberGold/10 p-4 text-sm font-semibold leading-7 text-slate-800">
                {item.action}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 lg:grid-cols-[330px_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-amberGold">
              <Route className="h-5 w-5" />
              <p className="text-sm font-semibold uppercase tracking-wide">Route next step</p>
            </div>
            <h2 className="mt-3 text-3xl font-black">按目的点进入具体页面。</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              先用本页判断急件是否有路线风险，再进入对应机场、清关或中转页面补细节。
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {routeLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-lg border border-slate-200 p-5 transition hover:border-amberGold hover:bg-slate-50"
              >
                <span className="flex items-center justify-between gap-4 text-sm font-black text-slate-950 group-hover:text-amberGold">
                  {item.label}
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </span>
                <span className="mt-3 block text-sm leading-7 text-slate-600">{item.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
            <div className="flex items-center gap-3 text-amberGold">
              <FileSearch className="h-6 w-6" />
              <span className="text-sm font-semibold">Copy-ready RFQ checklist</span>
            </div>
            <h2 className="mt-4 text-2xl font-black">发给 Jones 前，至少补齐这些字段。</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {rfqFields.map((field) => (
                <div key={field} className="flex gap-3 rounded-md bg-white/5 p-3 text-sm leading-6 text-slate-200">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amberGold" />
                  <span>{field}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <Plane className="h-7 w-7 text-amberGold" />
            <h2 className="mt-4 text-2xl font-black">报价前的判断句式</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              “这票是急件，但需要先确认最长件、最重件、最终现场、进口商资料和清关责任。
              如果主甲板或中转窗口不成立，价格再低也不能保证到现场时间。”
            </p>
            <a
              href="mailto:globegsa@gmail.com?subject=Africa%20urgent%20spare%20parts%20route%20risk%20checklist"
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-amberGold px-5 text-sm font-bold text-slate-950 transition hover:bg-amberGold/90"
            >
              <Plane className="h-4 w-4" />
              发急件资料给 Jones
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-10">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Sources and SEO rationale</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {sourceLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition hover:text-slate-950 hover:ring-amberGold"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
