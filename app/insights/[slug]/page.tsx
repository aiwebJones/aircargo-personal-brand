import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Tags } from 'lucide-react'
import { generatedSeoInsights, getInsightBySlug } from '@/lib/seo-insights'

type Params = {
  params: {
    slug: string
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return generatedSeoInsights.map((insight) => ({ slug: insight.slug }))
}

export function generateMetadata({ params }: Params): Metadata {
  const insight = getInsightBySlug(params.slug)

  if (!insight || insight.template !== 'generated') {
    return {
      title: '非洲空运情报 | EASCargo Jones',
    }
  }

  const url = `https://www.eascargo.com/insights/${insight.slug}/`
  const modifiedTime = insight.modifiedDate ?? insight.date

  return {
    title: `${insight.title} | EASCargo Jones`,
    description: insight.excerpt,
    keywords: insight.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: insight.title,
      description: insight.excerpt,
      url,
      type: 'article',
      publishedTime: insight.date,
      modifiedTime,
    },
  }
}

export default function InsightDetailPage({ params }: Params) {
  const insight = getInsightBySlug(params.slug)

  if (!insight || insight.template !== 'generated') {
    notFound()
  }

  const url = `https://www.eascargo.com/insights/${insight.slug}/`
  const modifiedTime = insight.modifiedDate ?? insight.date
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: insight.title,
    description: insight.excerpt,
    author: {
      '@type': 'Person',
      '@id': 'https://www.eascargo.com/#jones',
      name: insight.author,
      jobTitle: 'China to Africa Oversized Air Freight Specialist',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.eascargo.com/#organization',
      name: 'EASCARGO',
      url: 'https://www.eascargo.com',
    },
    mainEntityOfPage: url,
    datePublished: insight.date,
    dateModified: modifiedTime,
    about: insight.keywords,
    citation: insight.sources?.map((source) => source.href),
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'EASCARGO',
        item: 'https://www.eascargo.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '非洲空运情报库',
        item: 'https://www.eascargo.com/insights/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: insight.title,
        item: url,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#101828]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-[#08111f] text-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
          <Link
            href="/insights/"
            className="inline-flex items-center gap-2 text-sm text-amberGold transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            返回非洲空运情报
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_330px] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold text-amberGold">{insight.category}</p>
              <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
                {insight.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{insight.excerpt}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {insight.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-300">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 text-amberGold">
                <Tags className="h-6 w-6" />
                <span className="text-sm font-semibold">搜索意图</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{insight.angle}</p>
              <div className="mt-5 text-sm text-slate-400">
                {insight.modifiedDate
                  ? `发布 ${insight.date} · 更新 ${insight.modifiedDate}`
                  : insight.date}{' '}
                · {insight.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            {insight.sections.map((section) => (
              <section key={section.heading} className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-2xl font-black">{section.heading}</h2>
                <div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets && (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amberGold" />
                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            <section className="rounded-lg bg-[#0b1c2d] p-7 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-7 w-7 text-amberGold" />
                <h2 className="text-2xl font-black">发资料前先准备这些</h2>
              </div>
              <p className="mt-5 text-lg leading-9 text-slate-300">
                非洲空运报价不能只发一个目的港和总重量。资料越完整，越能快速判断能不能走、走哪条线、哪里会卡。
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {insight.checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amberGold" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {insight.sources && (
              <section className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-2xl font-black">参考来源</h2>
                <div className="mt-5 space-y-3 text-sm leading-7">
                  {insight.sources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-slate-600 underline decoration-slate-300 underline-offset-4 hover:text-amberGold"
                    >
                      {source.label}
                    </a>
                  ))}
                </div>
              </section>
            )}

            <section className="rounded-lg bg-amberGold p-7 text-[#08111f] shadow-sm">
              <h2 className="text-2xl font-black">EASCargo 怎么处理这类询盘</h2>
              <p className="mt-5 text-lg leading-9">
                先判断货物能不能装、路线能不能接、目的港能不能清、最终现场能不能交付。路线成立后再谈价格，
                否则低价只会把风险推迟到订舱和到港之后。
              </p>
              <Link
                href={`/tools/africa-project-cargo-rfq/?source=insight&topic=${encodeURIComponent(insight.slug)}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#08111f] px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#08111f]"
              >
                在线提交逐票询价
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-amberGold">适合谁看</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {insight.audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-amberGold">相关航线</p>
              <div className="mt-4 space-y-3 text-sm">
                {insight.relatedRoutes.map((route) => (
                  <Link key={route.href} href={route.href} className="block text-slate-600 hover:text-amberGold">
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-[#08111f] p-6 text-white shadow-sm">
              <p className="text-sm font-semibold text-amberGold">核心判断</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{insight.angle}</p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
