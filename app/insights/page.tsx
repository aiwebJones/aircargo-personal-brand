import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, FileText, Plane, SearchCheck, ShieldCheck } from 'lucide-react'
import { seoInsights } from '@/lib/seo-insights'

export const metadata: Metadata = {
  title: '非洲空运情报库 | 中国到非洲空运价格、清关与项目货路线 | EASCargo Jones',
  description:
    'EASCargo Jones非洲空运情报库，覆盖中国到非洲空运价格、清关资料、ET埃塞俄比亚航空、LGG/BRU欧洲中转、JNB/FBM/LUN/LBV/ACC/BKO/CKY等项目货路线判断。',
  keywords: [
    '非洲空运情报',
    '中国到非洲空运',
    '非洲大件项目货',
    'LGG BRU欧洲中转',
    'JNB约翰内斯堡空运',
    'FBM卢本巴希空运',
    'LUN卢萨卡空运',
    '非洲清关资料',
  ],
  alternates: {
    canonical: 'https://www.eascargo.com/insights/',
  },
  openGraph: {
    title: '非洲空运情报库 | 中国到非洲空运价格、清关与项目货路线',
    description: '面向工厂、贸易商和项目客户的非洲空运路线判断、清关资料和市场情报。',
    url: 'https://www.eascargo.com/insights/',
    type: 'website',
  },
}

const sortedSeoInsights = [...seoInsights].sort((a, b) => b.date.localeCompare(a.date))
const categories = Array.from(new Set(sortedSeoInsights.map((item) => item.category)))
const miningProjectLinks = [
  {
    title: '中国到非洲8米长货案例（中英双语）',
    href: '/insights/china-africa-8-meter-oversized-air-freight-case/',
    note: '从装载、LGG/BRU中转、B747F主甲板到非洲项目现场交付的完整复盘。',
  },
  {
    title: 'JNB 矿业急件怎么走',
    href: '/insights/jnb-mining-spares-air-freight/',
    note: '南部非洲矿业、工厂维修件和高价值备件入口。',
  },
  {
    title: 'FBM 铜钴矿区备件空运',
    href: '/insights/fbm-copperbelt-mining-equipment-air-freight/',
    note: '卢本巴希/铜带项目货，先判断主甲板和目的地清关。',
  },
  {
    title: 'LUN 赞比亚工业设备空运',
    href: '/insights/lun-zambia-industrial-air-freight-guide/',
    note: '卢萨卡、铜带和内陆项目现场的文件与二程判断。',
  },
  {
    title: 'LBV 8米长货经LGG/BRU',
    href: '/insights/lbv-gabon-8-meter-cargo-via-lgg-bru/',
    note: '长件、能源和油气项目货先看欧洲中转窗口。',
  },
  {
    title: '非洲矿业设备RFQ模板',
    href: '/insights/africa-mining-equipment-air-freight-rfq-template/',
    note: '把询价变成尺寸、资料、清关和交付责任清单。',
  },
]

export default function InsightsPage() {
  const insightsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'EASCargo Jones 非洲空运情报库',
    url: 'https://www.eascargo.com/insights/',
    description: metadata.description,
    mainEntity: {
      '@type': 'ItemList',
      name: 'China to Africa air freight insights',
      numberOfItems: sortedSeoInsights.length,
      itemListElement: sortedSeoInsights.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.title,
        url: `https://www.eascargo.com/insights/${item.slug}/`,
      })),
    },
  }

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#101828]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insightsSchema) }}
      />

      <section className="bg-[#08111f] text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-semibold text-amberGold hover:text-white">
            返回首页
          </Link>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
            <div>
              <p className="text-sm font-semibold text-amberGold">Africa Air Freight Insights</p>
              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                非洲空运情报库
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                每篇文章只解决一个具体问题：这票货能不能飞、走哪个非洲入口、资料哪里会卡、
                成本为什么会变。适合工厂、贸易商、项目采购和货代同行做路线判断。
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3 text-amberGold">
                <SearchCheck className="h-6 w-6" />
                <span className="text-sm font-semibold">SEO 主题</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                中国到非洲空运、非洲大件项目货、ET/ADD中转、LGG/BRU欧洲中转、JNB/FBM/LUN/ACC/BKO/CKY航线。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <Plane className="h-7 w-7 text-amberGold" />
            <h2 className="mt-4 text-xl font-bold">航线情报</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              跟踪非洲航线价格、舱位、中转、包机和全货机可行性。
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <ShieldCheck className="h-7 w-7 text-amberGold" />
            <h2 className="mt-4 text-xl font-bold">清关风险</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              把 HS Code、进口商资质、发票箱单、木包装和许可证提前讲清。
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <FileText className="h-7 w-7 text-amberGold" />
            <h2 className="mt-4 text-xl font-bold">项目货判断</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              对超长、超重、超高、急件和矿业备件先做可执行性判断。
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200">
              {category}
            </span>
          ))}
        </div>

        <section className="mt-10 rounded-lg bg-[#08111f] p-6 text-white shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold text-amberGold">Mining project cargo cluster</p>
              <h2 className="mt-3 text-2xl font-black">矿业/能源备件优先看这些页面</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                中国到非洲项目货搜索通常不是泛泛找货代，而是在问 JNB、FBM、LUN、LBV 这类目的点能不能飞、
                怎么清关、二程怎么接。这里按买家会搜索的问题集中入口。
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {miningProjectLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-amberGold hover:bg-white/10"
                >
                  <span className="flex items-center justify-between gap-3 font-semibold text-white transition group-hover:text-amberGold">
                    {item.title}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-slate-300">{item.note}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-10 space-y-5">
          {sortedSeoInsights.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}/`}
              className="group block rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:ring-amberGold/60"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-amberGold/10 px-3 py-1 font-semibold text-amberGold">
                  {item.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </span>
              </div>
              <h2 className="mt-4 text-2xl font-black text-[#08111f] transition group-hover:text-amberGold">
                {item.title}
              </h2>
              <p className="mt-3 max-w-4xl text-base leading-8 text-slate-600">{item.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.keywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    {keyword}
                  </span>
                ))}
              </div>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-amberGold">
                阅读全文
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
