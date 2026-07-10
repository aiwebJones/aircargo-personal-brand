import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calculator, FileCheck2, Plane, Route, ShieldCheck } from 'lucide-react'

const pageUrl = 'https://www.eascargo.com/route-programs/'

export const metadata: Metadata = {
  title: '非洲航线项目 | 当前可操作的价格与运力方案 | EASCargo Jones',
  description:
    'EASCargo非洲航线项目中心：把当前可操作的起运地、ADD/LGG/BRU中转、目的港、价格逻辑、货物限制、清关和最终交付整理成可执行方案。',
  keywords: ['非洲航线项目', '非洲空运价格方案', 'ADD中转非洲', '亚洲到非洲空运', '非洲项目货运力'],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '非洲航线项目 | EASCargo Jones',
    description: '当前可操作的非洲空运价格、运力和多起运地方案。',
    url: pageUrl,
    type: 'website',
    images: [{ url: 'https://www.eascargo.com/case-17t-4.jpg', alt: 'EASCargo route programs for Africa air freight' }],
  },
}

const decisionSteps = [
  { icon: Plane, title: '先看运力是否成立', body: '确认起运市场、实际承运航段、机型、舱位、尺寸重量和中转接受条件。' },
  { icon: Calculator, title: '再算全程成本', body: '把起运操作、中转、仓储、二程、目的港和调拨成本放进同一口径。' },
  { icon: FileCheck2, title: '最后核对交付', body: '进口商、清关文件、地服、提货、内陆运输和现场卸货必须同时成立。' },
]

export default function RouteProgramsPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'EASCargo Africa Air Freight Route Programs',
    url: pageUrl,
    description: metadata.description,
    provider: { '@type': 'Organization', '@id': 'https://www.eascargo.com/#organization', name: 'EASCargo Jones' },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: 1,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'MLE, SIN and MNL to Africa via ADD route program',
          url: 'https://www.eascargo.com/route-programs/et-asia-africa-via-add/',
        },
      ],
    },
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <section
        className="relative flex min-h-[68svh] items-end overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/case-17t-4.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/82" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-24 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-bold text-amberGold hover:text-white">EASCargo Jones</Link>
          <div className="mt-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded border border-amberGold/40 bg-slate-950/70 px-3 py-2 text-sm font-bold text-amberGold">
              <Route className="h-4 w-4" />
              Africa air freight route programs
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">非洲航线项目</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              航线页解释长期有效的目的港知识；航线项目则发布当前具有价格、运力或多起运地优势的可操作方案。
              每个项目都要把低运价翻译成全程成本、货物限制和最终交付条件。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase text-emerald-700">Current route program</p>
          <div className="mt-5 grid overflow-hidden rounded-lg border border-slate-200 bg-white lg:grid-cols-[0.72fr_1.28fr]">
            <div className="min-h-72 bg-cover bg-center" style={{ backgroundImage: "url('/case-17t-1.jpg')" }} role="img" aria-label="Oversized cargo handled by EASCargo" />
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                <span className="rounded bg-emerald-50 px-3 py-2 text-emerald-800">MLE · SIN · MNL</span>
                <span className="rounded bg-amberGold/15 px-3 py-2 text-amber-800">via ADD</span>
                <span className="rounded bg-slate-100 px-3 py-2 text-slate-600">逐票确认</span>
              </div>
              <h2 className="mt-6 text-3xl font-black">马尔代夫、新加坡、菲律宾至非洲联运</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                覆盖 CMN、ALG、TUN、ADD、CKY、OUA、EBB、HAH、NBJ、BKO。比较亚洲第三地起运与中国直出的全程成本，并核对 ADD 二程、清关和最后一公里。
              </p>
              <Link href="/route-programs/et-asia-africa-via-add/" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded bg-slate-950 px-5 font-bold text-white transition hover:bg-emerald-700">
                查看项目方案
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-emerald-700">Decision discipline</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">航线项目不是一张低价表。</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {decisionSteps.map((step) => {
              const Icon = step.icon
              return (
                <article key={step.title} className="rounded-lg border border-slate-200 p-6">
                  <Icon className="h-7 w-7 text-amberGold" />
                  <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.body}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <div className="flex items-center gap-2 text-amberGold"><ShieldCheck className="h-5 w-5" /><span className="text-sm font-bold">EASCargo route review</span></div>
            <h2 className="mt-4 text-3xl font-black">拿到低价之后，先验证它能不能执行。</h2>
          </div>
          <a href="mailto:globegsa@gmail.com?subject=Africa%20route%20program%20review" className="inline-flex min-h-12 items-center justify-center rounded bg-amberGold px-6 font-black text-slate-950 hover:bg-white">发送项目资料</a>
        </div>
      </section>
    </main>
  )
}
