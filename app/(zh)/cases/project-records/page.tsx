import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { publicCaseRecords } from '@/lib/public-case-records'

const pageUrl = 'https://www.eascargo.com/cases/project-records/'
const pageDate = '2026-10-29'

/**
 * Dates below are publication dates already stored on the source pages.
 * Shipment and flight dates are not in the public records, so they are not filled in.
 * - 8 m article: datePublished 2026-07-10 on the bilingual case page
 * - 16,730 kg and 98.8 t: dateModified 2026-07-17 on the /cases/ collection
 */
const sourceDates: Record<string, { date: string; noteZh: string; noteEn: string }> = {
  'lbv-8m-via-europe': {
    date: '2026-07-10',
    noteZh: '作业日期未写入公开记录。此日期是双语案例文章的发布日期。',
    noteEn: 'The job date is not in the public record. This is the bilingual article publication date.',
  },
  'heavy-cargo-16730kg': {
    date: '2026-07-17',
    noteZh: '作业日期未写入公开记录。此日期是案例集合页的更新日期，不是航班日期。',
    noteEn: 'The job date is not in the public record. This is the case-collection update, not a flight date.',
  },
  'b777f-98800kg': {
    date: '2026-07-17',
    noteZh: '作业日期未写入公开记录。此日期是案例集合页的更新日期，不是航班日期。',
    noteEn: 'The job date is not in the public record. This is the case-collection update, not a flight date.',
  },
}

export const metadata: Metadata = {
  title: '中国到非洲项目货数字对照表 | 8米、16730公斤、B777F 98.8吨 | EASCARGO',
  description:
    'EASCARGO 公开项目数字对照：约 8 米 LBV 长货、单件 16,730 公斤特殊装载、B777F 单航班 98.8 吨。只收录仓库里已有的记录，不把历史数字写成当前舱位或价格。',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '中国到非洲项目货数字对照表 | EASCARGO',
    description:
      '约 8 米长货、16,730 公斤单件和 B777F 98.8 吨历史记录的对照表。数字来自现有公开案例，不代表当前舱位。',
    url: pageUrl,
    type: 'article',
    publishedTime: pageDate,
    modifiedTime: pageDate,
  },
}

export default function ProjectRecordsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: '中国到非洲项目货与装载记录数字对照',
    alternativeHeadline: 'EASCARGO public case figures: 8 m, 16,730 kg, B777F 98.8 t',
    description: metadata.description,
    datePublished: pageDate,
    dateModified: pageDate,
    inLanguage: ['zh-CN', 'en'],
    mainEntityOfPage: pageUrl,
    author: {
      '@type': 'Person',
      '@id': 'https://www.eascargo.com/#jones',
      name: 'Jones Zheng',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.eascargo.com/#organization',
      name: 'EASCARGO',
    },
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: publicCaseRecords.length,
    itemListElement: publicCaseRecords.map((record, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: record.titleZh,
      description: record.factsZh.join(' '),
      url: record.detailHref ? `https://www.eascargo.com${record.detailHref}` : `${pageUrl}#${record.id}`,
    })),
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <Link href="/cases/" className="inline-flex items-center gap-2 text-sm font-bold text-amberGold hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            公开项目记录
          </Link>
          <p className="mt-8 text-sm font-bold text-amberGold">Case figures · {pageDate}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">中国到非洲项目货数字对照表</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            这张表只整理仓库里已经公开的三组数字：约 8 米的非洲项目长货、单件 16,730 公斤的特殊装载，以及一班 B777F 上 98.8 吨的历史组织记录。
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300" lang="en">
            This table repeats three figures already published on the site: an approximately 8-meter Africa project piece, a 16,730 kg single-piece loading, and a historical 98.8-ton load on one B777F. Shipment dates are not in those records, so the dates below are publication dates only.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[880px] border-collapse text-left text-sm">
            <caption className="mb-4 text-left text-base font-black">
              公开记录对照
              <span className="mt-1 block text-sm font-medium text-slate-500" lang="en">Published record comparison</span>
            </caption>
            <thead>
              <tr className="border-b-2 border-slate-950">
                <th className="px-3 py-3 font-black">记录 / Record</th>
                <th className="px-3 py-3 font-black">路线 / Route</th>
                <th className="px-3 py-3 font-black">公开数字 / Figures</th>
                <th className="px-3 py-3 font-black">记录日期 / Record date</th>
              </tr>
            </thead>
            <tbody>
              {publicCaseRecords.map((record) => {
                const source = sourceDates[record.id]
                return (
                  <tr key={record.id} id={record.id} className="border-b border-slate-200 align-top">
                    <td className="px-3 py-5">
                      <p className="font-black">{record.titleZh}</p>
                      <p className="mt-2 text-slate-500" lang="en">{record.titleEn}</p>
                      <p className="mt-3 text-slate-600">{record.cargoZh}</p>
                      {record.detailHref && (
                        <Link href={record.detailHref} className="mt-3 inline-flex items-center gap-1 font-bold text-amber-700 hover:text-slate-950">
                          完整复盘
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      )}
                    </td>
                    <td className="px-3 py-5 font-semibold">{record.route}</td>
                    <td className="px-3 py-5">
                      <ul className="space-y-2">
                        {record.metrics.map((metric) => (
                          <li key={metric.labelZh}>
                            <span className="font-black">{metric.value}</span>
                            <span className="text-slate-600"> · {metric.labelZh}</span>
                            <span className="text-slate-400" lang="en"> / {metric.labelEn}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 leading-6 text-slate-600">{record.factsZh[0]}</p>
                    </td>
                    <td className="px-3 py-5">
                      <time dateTime={source?.date}>{source?.date}</time>
                      <p className="mt-2 leading-6 text-slate-600">{source?.noteZh}</p>
                      <p className="mt-2 leading-6 text-slate-500" lang="en">{source?.noteEn}</p>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-6 border-t border-slate-200 pt-8 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-black">这些数字不能直接当报价</h2>
            <p className="mt-3 leading-7 text-slate-600">
              8 米说明普通腹舱接不了、需要把 LGG/BRU 和主甲板放进同一条路线。16,730 公斤和约 45 吨是 PVG 出发的历史装载记录，尺寸写的是 735 × 135 × 150 cm。98.8 吨是 PVG 到 AMS、一班 B777F 的历史组织记录。三条都写明：最终承运人、价格和时效以当票确认为准。
            </p>
          </div>
          <div lang="en">
            <h2 className="text-xl font-black">What the figures are for</h2>
            <p className="mt-3 leading-7 text-slate-600">
              The 8-meter piece is the Africa project that could not move in a normal belly hold and was planned through LGG/BRU toward LBV on a B747F review. The 16,730 kg piece, recorded at 735 × 135 × 150 cm with a shipment total near 45 tons, is a historical PVG loading. The 98.8-ton figure is a historical single-flight B777F operation from PVG to AMS. None of the three is a current capacity or price offer.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/cases/" className="inline-flex min-h-11 items-center rounded-md bg-slate-950 px-5 font-bold text-white hover:bg-amberGold hover:text-slate-950">
            返回完整项目记录
          </Link>
          <Link href="/tools/africa-project-cargo-rfq/?source=case-table" className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-5 font-bold hover:border-amberGold">
            按当票提交尺寸重量
          </Link>
          <Link href="/africa-air-freight/lbv/" className="inline-flex min-h-11 items-center rounded-md border border-slate-300 px-5 font-bold hover:border-amberGold">
            LBV 利伯维尔
          </Link>
        </div>
      </section>
    </main>
  )
}
