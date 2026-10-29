import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, Tags } from 'lucide-react'
import { englishCoreInsightParams, getEnglishCoreInsight } from '@/lib/en-core-insights'
import { insightLanguageAlternates, siteOrigin } from '@/lib/hreflang-pairs'

type Params = {
  params: {
    slug: string
  }
}

export const dynamicParams = false

export function generateStaticParams() {
  return englishCoreInsightParams()
}

export function generateMetadata({ params }: Params): Metadata {
  const insight = getEnglishCoreInsight(params.slug)

  if (!insight) {
    return { title: 'Africa air freight guide | EASCARGO' }
  }

  const url = `${siteOrigin}/en/insights/${insight.slug}/`

  return {
    title: `${insight.title} | EASCARGO`,
    description: insight.description,
    keywords: insight.keywords,
    alternates: {
      canonical: url,
      languages: insightLanguageAlternates(insight.slug),
    },
    openGraph: {
      title: insight.title,
      description: insight.description,
      url,
      type: 'article',
      publishedTime: insight.datePublished,
      modifiedTime: insight.dateModified,
    },
  }
}

export default function EnglishCoreInsightPage({ params }: Params) {
  const insight = getEnglishCoreInsight(params.slug)

  if (!insight) {
    notFound()
  }

  const url = `${siteOrigin}/en/insights/${insight.slug}/`
  const chineseUrl = `/insights/${insight.slug}/`
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}#faq`,
    inLanguage: 'en',
    mainEntity: insight.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    inLanguage: 'en',
    headline: insight.title,
    description: insight.description,
    author: {
      '@type': 'Person',
      '@id': `${siteOrigin}/#jones`,
      name: 'Jones',
      jobTitle: 'China to Africa Oversized Air Freight Specialist',
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteOrigin}/#organization`,
      name: 'EASCARGO',
      url: siteOrigin,
    },
    mainEntityOfPage: url,
    datePublished: insight.datePublished,
    dateModified: insight.dateModified,
    about: insight.keywords,
    citation: insight.sources.map((source) => source.href),
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'EASCARGO', item: `${siteOrigin}/en/` },
      { '@type': 'ListItem', position: 2, name: insight.title, item: url },
    ],
  }

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#101828]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-[#08111f] text-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href="/en/" className="inline-flex items-center gap-2 text-sm text-amberGold transition-colors hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              English homepage
            </Link>
            <Link href={chineseUrl} hrefLang="zh-CN" className="text-sm font-semibold text-white/80 hover:text-white">
              中文
            </Link>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_330px] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold text-amberGold">{insight.category}</p>
              <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-5xl">{insight.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{insight.lead}</p>
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
                <span className="text-sm font-semibold">What this page decides</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{insight.angle}</p>
              <div className="mt-5 text-sm text-slate-400">
                Published {insight.datePublished} · Updated {insight.dateModified} · {insight.readTime}
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
                <h2 className="text-2xl font-black">Have this ready before you send the file</h2>
              </div>
              <p className="mt-5 text-lg leading-9 text-slate-300">
                {insight.angle} The items below belong to this guide. They are not one document set for every African country.
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

            <section className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-black">Sources</h2>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                Figures on this page are taken from the pages linked below and were checked on 29 October 2026. Confirm the aircraft, airport and certificate on the shipment before booking.
              </p>
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

            <section id="faq" className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-black">Questions</h2>
              <div className="mt-5 divide-y divide-slate-200">
                {insight.faqs.map((faq) => (
                  <article key={faq.question} className="py-5">
                    <h3 className="text-lg font-black">{faq.question}</h3>
                    <p className="mt-3 leading-8 text-slate-700">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-lg bg-amberGold p-7 text-[#08111f] shadow-sm">
              <h2 className="text-2xl font-black">Send the shipment, not a rate request</h2>
              <p className="mt-5 text-lg leading-9">{insight.angle}</p>
              <Link
                href={`/tools/africa-project-cargo-rfq/?source=en-insight&topic=${encodeURIComponent(insight.slug)}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#08111f] px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#08111f]"
              >
                Open the shipment RFQ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-amberGold">Who this is for</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                {insight.audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-amberGold">Related pages</p>
              <div className="mt-4 space-y-3 text-sm">
                <Link href={chineseUrl} hrefLang="zh-CN" className="block text-slate-600 hover:text-amberGold">
                  Chinese version of this guide
                </Link>
                {insight.related.map((route) => (
                  <Link key={route.href} href={route.href} className="block text-slate-600 hover:text-amberGold">
                    {route.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
