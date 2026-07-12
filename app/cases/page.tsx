import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, FileCheck2, Route, ShieldCheck } from 'lucide-react'
import { publicCaseRecords } from '@/lib/public-case-records'

const pageUrl = 'https://www.eascargo.com/cases/'

const relatedRoutes = [
  { label: 'LBV 利伯维尔大件空运', href: '/africa-air-freight/lbv/' },
  { label: 'FBM 卢本巴希矿业备件', href: '/africa-air-freight/fbm/' },
  { label: 'JNB 约翰内斯堡项目货', href: '/africa-air-freight/jnb/' },
  { label: 'LGG/BRU 非洲中转', href: '/zh/lgg-africa-gateway/' },
]

export default function CasesPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${pageUrl}#webpage`,
    name: 'EASCargo public project and loading records',
    alternateName: 'EASCargo 大件空运公开项目记录',
    url: pageUrl,
    description:
      'Public EASCargo records covering an 8-meter LBV project, a 16,730 kg single-piece loading operation and a 98.8-ton B777F single-flight operation.',
    dateModified: '2026-07-12',
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.eascargo.com/#organization',
      name: 'EASCargo Jones',
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: publicCaseRecords.length,
      itemListElement: publicCaseRecords.map((record, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: record.titleEn,
        url: record.detailHref ? `https://www.eascargo.com${record.detailHref}` : `${pageUrl}#${record.id}`,
      })),
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'EASCargo Jones', item: 'https://www.eascargo.com/' },
      { '@type': 'ListItem', position: 2, name: '公开项目记录', item: pageUrl },
    ],
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section
        className="relative flex min-h-[64svh] items-end overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/case-17t-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-24 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-amberGold hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            EASCargo Jones
          </Link>
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-black text-amberGold">Public operation records</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">大件空运公开项目记录</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              已完成非洲项目、历史特殊装载和历史全货机记录分开呈现。这里只写当前公开资料能支持的尺寸、重量、路线、判断动作和执行边界。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm font-black text-amber-700">已完成非洲项目</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">可说明具体货物、路线难点和执行结果，并链接完整复盘。</p>
          </div>
          <div>
            <p className="text-sm font-black text-amber-700">历史装载记录</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">证明处理过的重量、尺寸与地面操作经验，不代表当前航班接受条件。</p>
          </div>
          <div>
            <p className="text-sm font-black text-amber-700">航线判断内容</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">FBM、JNB 等目的地的路线比较属于服务知识，不冒充已经完成的客户案例。</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {publicCaseRecords.map((record, index) => (
            <article
              id={record.id}
              key={record.id}
              className="scroll-mt-8 border-t border-slate-200 pt-10"
            >
              <div className={`grid gap-9 lg:grid-cols-2 lg:items-start ${index % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="overflow-hidden rounded-lg bg-slate-100">
                  <img src={record.image} alt={record.imageAltZh} className="aspect-[4/3] h-full w-full object-cover" />
                </div>

                <div>
                  <p className="text-sm font-black text-amber-700">{record.statusZh}</p>
                  <h2 className="mt-3 text-3xl font-black leading-tight">{record.titleZh}</h2>
                  <p className="mt-4 flex items-center gap-2 font-semibold text-slate-500">
                    <Route className="h-5 w-5 text-amberGold" aria-hidden="true" />
                    {record.route} · {record.cargoZh}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {record.metrics.map((metric) => (
                      <div key={metric.labelZh} className="min-h-20 border-l-2 border-slate-950 pl-3">
                        <div className="text-lg font-black">{metric.value}</div>
                        <div className="mt-1 text-xs leading-5 text-slate-500">{metric.labelZh}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <h3 className="flex items-center gap-2 font-black">
                      <FileCheck2 className="h-5 w-5 text-amber-700" aria-hidden="true" />
                      已公开事实
                    </h3>
                    <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                      {record.factsZh.map((fact) => (
                        <li key={fact} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amberGold" aria-hidden="true" />
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 border-l-4 border-amberGold bg-slate-50 p-5">
                    <h3 className="font-black">路线与装载判断</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{record.decisionZh}</p>
                    <h3 className="mt-5 font-black">记录结果</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{record.outcomeZh}</p>
                  </div>

                  {record.detailHref && (
                    <Link
                      href={record.detailHref}
                      className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-slate-950 px-5 font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
                    >
                      阅读中英双语完整复盘
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-amber-700" aria-hidden="true" />
            <h2 className="text-2xl font-black">案例不代替当票确认。</h2>
          </div>
          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            历史项目只能说明判断方法和操作经验。当前货物能否装载、使用什么机型、是否有舱位、具体承运人、价格和时效，仍需根据尺寸、重量、货好日期和目的地逐票确认。
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {relatedRoutes.map((route) => (
              <Link key={route.href} href={route.href} className="rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-bold hover:border-amberGold hover:text-amber-700">
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="mx-auto grid max-w-6xl gap-7 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
          <div>
            <p className="text-sm font-black text-amberGold">Shipment-specific review</p>
            <h2 className="mt-3 text-3xl font-black">你的货要按当票资料判断。</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              提交每件尺寸重量、包装照片、起运地、目的机场和最终城市，再比较中国直出、ADD 或 LGG/BRU 中转路径。
            </p>
          </div>
          <Link
            href="/tools/africa-project-cargo-rfq/?source=cases"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-amberGold px-6 font-black text-slate-950 hover:bg-white"
          >
            提交逐票询价
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
