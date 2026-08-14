import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileText, Plane, Ruler, ShieldCheck } from 'lucide-react'
import ChargeableWeightCalculator from './ChargeableWeightCalculator'

const pageUrl = 'https://www.eascargo.com/tools/air-freight-chargeable-weight-calculator/'

export const metadata: Metadata = {
  title: '空运计费重计算器 | Air Freight Chargeable Weight Calculator | EASCargo Jones',
  description:
    'Use this air freight chargeable weight calculator to calculate CBM, volumetric weight, chargeable weight, 6000/5000 divisor, and China to Africa project cargo RFQ data.',
  keywords: [
    'air freight chargeable weight calculator',
    'volumetric weight calculator air freight',
    'air cargo chargeable weight calculator Africa',
    '空运计费重计算器',
    '空运体积重计算器',
    '非洲空运体积重',
    '中国到非洲空运计费重',
    'air freight volumetric weight 6000',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '空运计费重计算器 | Air Freight Chargeable Weight Calculator',
    description:
      'Calculate CBM, volumetric weight and chargeable weight before sending a China to Africa air freight RFQ.',
    url: pageUrl,
    type: 'website',
  },
}

const relatedLinks = [
  {
    title: '非洲空运多少钱一公斤',
    href: '/insights/china-africa-air-freight-cost-chargeable-weight/',
    note: '把计费重、泡货/重货和非洲目的地风险拆开看。',
  },
  {
    title: '超大件空运询价清单',
    href: '/insights/oversized-air-freight-quote-checklist/',
    note: '单件尺寸、重量、吊点、包装和交付责任怎么发。',
  },
  {
    title: '超大件主甲板订舱资料',
    href: '/insights/oversized-air-cargo-booking-documents-main-deck-africa/',
    note: '超过常规舱门时，订舱前要准备哪些文件。',
  },
  {
    title: '非洲空运航线 Hub',
    href: '/africa-air-freight/',
    note: '按 JNB、FBM、LUN、LBV、ACC 等机场判断路线。',
  },
  {
    title: 'LGG/BRU 非洲中转网络',
    href: '/zh/lgg-africa-gateway/',
    note: '长货、大件和主甲板货经欧洲中转的判断入口。',
  },
]

const sourceLinks = [
  {
    label: 'DHL chargeable weight guide',
    href: 'https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html',
  },
  {
    label: 'UPS chargeable weight glossary',
    href: 'https://www.ups.com/us/en/supplychain/resources/glossary-term/chargeable-weight',
  },
  {
    label: 'Maersk air cargo chargeable weight explainer',
    href: 'https://www.maersk.com/logistics-explained/transportation-and-freight/2025/03/10/air-cargo-chargeable-weight',
  },
]

export default function AirFreightChargeableWeightCalculatorPage() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Air Freight Chargeable Weight Calculator',
    url: pageUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description:
      'Calculate air freight CBM, volumetric weight and chargeable weight for China to Africa air cargo RFQs.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.eascargo.com/#organization',
      name: 'EASCARGO',
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
        name: 'Air Freight Chargeable Weight Calculator',
        item: pageUrl,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-slate-950 px-5 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="pt-4">
            <Link href="/" className="text-sm font-semibold text-amberGold hover:text-white">
              EASCargo Jones
            </Link>
            <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-amberGold/40 bg-amberGold/10 px-3 py-2 text-sm font-semibold text-amberGold">
              <Ruler className="h-4 w-4" />
              Volumetric weight / Chargeable weight
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              空运计费重计算器
              <span className="block text-amberGold">Air Freight Chargeable Weight Calculator</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              先算 CBM、体积重和计费重，再判断这票货是泡货、重货，还是需要主甲板、全货机、
              LGG/BRU 欧洲中转或非洲目的地清关预审。
            </p>
            <div className="mt-7 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {[
                'Volume weight (kg) = Length x Width x Height (cm) x pieces / divisor',
                'Chargeable weight = max(gross weight, volume weight)',
                '常用空运除数：6000；部分渠道或快递会用 5000',
                '非洲项目货还要检查尺寸、机型、清关资料和二程交付',
              ].map((item) => (
                <div key={item} className="flex gap-2 rounded-md bg-white/5 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amberGold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <ChargeableWeightCalculator />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-amberGold">Why this matters</p>
          <h2 className="mt-3 text-3xl font-black">空运价格不是只看毛重。</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            空运承运人会比较实际毛重和体积重，取更高的重量作为计费基础。
            所以 300kg 的轻泡货，可能按 700kg 甚至更高计费。非洲项目货还经常叠加超长、
            超高、木箱、清关资料、目的港地面操作和矿区/工地二程交付风险。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Plane,
              title: '先判断能不能飞',
              body: '超过 300cm、160cm 高或单件过重时，先查机型、门高、板位和中转方案。',
            },
            {
              icon: ShieldCheck,
              title: '再判断能不能清',
              body: 'HS code、发票箱单、进口商资质、许可证和目的国清关系统要提前对齐。',
            },
            {
              icon: FileText,
              title: '最后判断报价边界',
              body: '价格要说明计费重、路线、时效、清关责任、仓储和最终交付是否包含。',
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="h-7 w-7 text-amberGold" />
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-amberGold">Related search paths</p>
              <h2 className="mt-3 text-3xl font-black">算完以后，继续看路线和资料。</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-lg border border-slate-200 p-5 transition hover:border-amberGold hover:bg-slate-50"
                >
                  <span className="flex items-center justify-between gap-3 font-bold text-slate-950 group-hover:text-amberGold">
                    {item.title}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </span>
                  <span className="mt-3 block text-sm leading-7 text-slate-600">{item.note}</span>
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
              <h2 className="text-2xl font-black">要报价，不要只发一个重量。</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                发目的机场、最终城市、货名、HS code、件数、每件尺寸、每件毛重、包装照片、
                是否带电/液体/粉末/危险品，以及最晚到货时间。这样才能判断非洲航线、计费重、
                清关和二程交付。
              </p>
            </div>
            <a
              href="mailto:globegsa@gmail.com?subject=China%20to%20Africa%20air%20freight%20RFQ"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-amberGold px-5 text-sm font-bold text-slate-950 transition hover:bg-amberGold/90"
            >
              <Plane className="h-4 w-4" />
              发资料给 Jones
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 lg:px-8">
        <h2 className="text-xl font-black">Formula references</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {sourceLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-amberGold hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
