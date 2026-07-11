import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calculator, ClipboardCheck, Clock3, ExternalLink, FileSearch, Plane, ShieldCheck } from 'lucide-react'

const pageUrl = 'https://www.eascargo.com/tools/'

export const metadata: Metadata = {
  title: '非洲空运工具箱 | Air Freight Calculators and RFQ Tools | EASCargo Jones',
  description:
    'EASCargo Jones air freight tools for China to Africa project cargo: chargeable weight calculator, customs document checklist, RFQ readiness and route-risk triage.',
  keywords: [
    'air freight tools',
    'air freight calculator',
    'air cargo RFQ tools',
    'Africa air freight tools',
    'China to Africa air freight calculator',
    '非洲空运工具',
    '空运计费重计算器',
    '非洲清关资料清单',
    '非洲空运询价工具',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '非洲空运工具箱 | EASCargo Jones',
    description: '空运计费重、非洲清关资料和项目货询价前判断工具。',
    url: pageUrl,
    type: 'website',
  },
}

const tools = [
  {
    title: '空运计费重计算器',
    englishTitle: 'Air Freight Chargeable Weight Calculator',
    href: '/tools/air-freight-chargeable-weight-calculator/',
    icon: Calculator,
    description:
      '输入件数、单件尺寸、总毛重和体积重除数，计算 CBM、体积重、计费重和泡货/重货判断。',
    searchIntent: ['air freight chargeable weight calculator', 'volumetric weight calculator air freight', '空运计费重计算器'],
    nextStep: '算出计费重后，继续补目的机场、货名、HS Code、包装照片和最晚到货时间。',
  },
  {
    title: '非洲空运清关资料生成器',
    englishTitle: 'Africa Air Freight Customs Document Checklist',
    href: '/tools/africa-air-freight-customs-document-checklist/',
    icon: ClipboardCheck,
    description:
      '按目的国和货物属性生成清关资料清单，覆盖 EasyPASS、Form M/PAAR、ACI/CargoX、PVoC、SARS 等文件缺口。',
    searchIntent: ['Africa air freight customs document checklist', 'China to Africa air freight documents', '非洲空运清关资料'],
    nextStep: '生成清单后，把缺的文件标出来，再发给进口商、清关代理或 Jones 做路线判断。',
  },
  {
    title: '非洲急件备件路线风险清单',
    englishTitle: 'Africa Urgent Spare Parts Route Risk Checklist',
    href: '/tools/africa-urgent-spare-parts-route-risk-checklist/',
    icon: Clock3,
    description:
      '停产急件、矿业备件、油气维修件和工厂设备空运前，先检查机场代码、主甲板、中转、清关和最终现场交付风险。',
    searchIntent: ['Africa urgent spare parts air freight', 'Africa air freight route risk checklist', '非洲急件备件空运'],
    nextStep: '判断风险后，再进入 JNB/FBM/LUN/LOS/PHC 或 LGG/BRU 页面补路线细节。',
  },
]

const specialistTools = [
  {
    title: '空运单异常预判',
    englishTitle: 'AiCargoTrack AWB Exception Triage',
    href: 'https://aicargotrack.com/',
    domain: 'aicargotrack.com',
    icon: FileSearch,
    description:
      '输入起运港、非洲目的港、单件尺寸、重量和中转状态，先识别超长、超高、重货及二程衔接风险，再把完整资料交给 EASCargo 判断。',
  },
  {
    title: '非洲项目货计费重与询价准备',
    englishTitle: 'SkyRate Project Cargo Calculator',
    href: 'https://skyrate.info/',
    domain: 'skyrate.info',
    icon: Calculator,
    description:
      '计算项目货体积重与初步计费重，并按尺寸和单件重量提示主舱、装卸及人工报价审核条件。工具不展示未经核实的实时运价。',
  },
]

const workflows = [
  {
    title: '先算计费重',
    body: '泡货和重货的报价逻辑不同。先确定计费重，客户才知道价格为什么不是只看毛重。',
  },
  {
    title: '再查目的国资料',
    body: '加纳、埃及、尼日利亚、肯尼亚、南非等目的国文件要求不同，要在订舱前拆出来。',
  },
  {
    title: '最后判断能不能执行',
    body: '非洲项目货要同时看机型、主甲板、清关、二程、卸货和最终交付责任。',
  },
]

const relatedLinks = [
  { label: '非洲空运航线 Hub', href: '/africa-air-freight/' },
  { label: '非洲空运情报库', href: '/insights/' },
  { label: '非洲清关资料总清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
  { label: '非洲矿业设备 RFQ 模板', href: '/insights/africa-mining-equipment-air-freight-rfq-template/' },
  { label: '非洲急件备件路线风险清单', href: '/tools/africa-urgent-spare-parts-route-risk-checklist/' },
  { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
  { label: '超大件主甲板订舱资料', href: '/insights/oversized-air-cargo-booking-documents-main-deck-africa/' },
]

export default function ToolsPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'EASCargo Jones Air Freight Tools',
    url: pageUrl,
    description: metadata.description,
    mainEntity: {
      '@type': 'ItemList',
      name: 'China to Africa air freight tools',
      numberOfItems: tools.length + specialistTools.length,
      itemListElement: [...tools, ...specialistTools].map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: tool.englishTitle,
        url: tool.href.startsWith('https://') ? tool.href : `https://www.eascargo.com${tool.href}`,
      })),
    },
    provider: {
      '@type': 'Organization',
      name: 'EASCargo Jones',
      url: 'https://www.eascargo.com/',
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
        item: pageUrl,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-slate-950 px-5 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="text-sm font-semibold text-amberGold hover:text-white">
            EASCargo Jones
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md border border-amberGold/40 bg-amberGold/10 px-3 py-2 text-sm font-semibold text-amberGold">
                <FileSearch className="h-4 w-4" />
                China to Africa air freight tools
              </div>
              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
                非洲空运工具箱
                <span className="block text-amberGold">把询价先变成可判断资料。</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                这里不是泛泛介绍空运，而是把客户询价前必须补齐的计费重、清关文件、
                货物属性和目的地风险拆成可操作工具。适合工厂、贸易商、项目采购和货代同行快速判断。
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 text-amberGold">
                <ShieldCheck className="h-6 w-6" />
                <span className="text-sm font-semibold">使用顺序</span>
              </div>
              <div className="mt-5 grid gap-3">
                {workflows.map((item, index) => (
                  <div key={item.title} className="grid grid-cols-[32px_1fr] gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amberGold text-sm font-black text-slate-950">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{item.title}</div>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon

            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-amberGold"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-950 text-amberGold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="mt-2 h-5 w-5 text-slate-400 transition group-hover:text-amberGold" />
                </div>
                <h2 className="mt-6 text-2xl font-black text-slate-950 group-hover:text-amberGold">
                  {tool.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-slate-500">{tool.englishTitle}</p>
                <p className="mt-5 text-base leading-8 text-slate-600">{tool.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tool.searchIntent.map((keyword) => (
                    <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {keyword}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-md bg-amberGold/10 p-4 text-sm leading-7 text-slate-700">
                  {tool.nextStep}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-amberGold">EASCargo specialist tools</p>
            <h2 className="mt-3 text-3xl font-black">独立工具域名，同一个 EASCargo 服务主体。</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              下面两个公开工具由 EASCargo 提供，用于超大件询价前的异常预判和计费重整理。
              计算结果是初步判断，最终路线与报价以人工复核为准。
            </p>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {specialistTools.map((tool) => {
              const Icon = tool.icon

              return (
                <a
                  key={tool.href}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:border-amberGold"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-slate-950 text-amberGold">
                      <Icon className="h-6 w-6" />
                    </div>
                    <ExternalLink className="mt-2 h-5 w-5 text-slate-400 transition group-hover:text-amberGold" />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-slate-950 group-hover:text-amberGold">
                    {tool.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{tool.englishTitle}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{tool.description}</p>
                  <p className="mt-5 text-xs font-bold text-slate-500">{tool.domain}</p>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-amberGold">Topic cluster</p>
              <h2 className="mt-3 text-3xl font-black">工具解决入口，专题解决细节。</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                工具页负责把询价变成结构化资料，专题页负责解释目的国、航线、清关和项目货执行逻辑。
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 p-5 text-sm font-bold text-slate-700 transition hover:border-amberGold hover:text-slate-950"
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4 shrink-0 text-amberGold" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-center">
            <div>
              <h2 className="text-2xl font-black">下一步不是“再问一遍价格”。</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                用工具把重量、尺寸、目的地、文件缺口和货物属性整理好，再发给 Jones 判断路线。
                这样报价更快，也更容易提前发现装不上、清不了、交不到现场的问题。
              </p>
            </div>
            <Link
              href="/tools/africa-project-cargo-rfq/?source=tools"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-amberGold px-5 text-sm font-bold text-slate-950 transition hover:bg-amberGold/90"
            >
              <Plane className="h-4 w-4" />
              提交逐票询价
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
