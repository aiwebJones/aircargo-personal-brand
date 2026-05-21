import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, FileText, Plane, SearchCheck, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: '非洲空运情报与项目货文章 | EASCargo Jones',
  description:
    'EASCargo Jones 非洲空运情报：覆盖中国到非洲空运、ET埃塞俄比亚航空、LGG/BRU欧洲中转、ACC/BKO/OUA/HRE/LUN/NIM/CKY等非洲目的地和项目货路线判断。',
  keywords: [
    '非洲空运情报',
    '中国到非洲空运',
    '埃塞俄比亚航空空运',
    'ET空运',
    '非洲大件项目货',
    'LGG BRU欧洲中转',
    'ACC阿克拉空运',
    'BKO巴马科空运',
    'LUN卢萨卡空运',
  ],
  alternates: {
    canonical: 'https://www.eascargo.com/insights/',
  },
  openGraph: {
    title: '非洲空运情报与项目货文章 | EASCargo Jones',
    description: '面向工厂、贸易商和项目客户的非洲空运路线判断、清关资料和市场情报。',
    url: 'https://www.eascargo.com/insights/',
    type: 'website',
  },
}

const insights = [
  {
    href: '/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/',
    category: '航线情报',
    date: '2026-05-21',
    title: '埃塞俄比亚航空特价：ACC/BKO/OUA/HRE/LUN/NIM/CKY 非洲空运怎么选？',
    excerpt:
      'ET 经 ADD 中转覆盖多个非洲项目点。本文把加纳、马里、布基纳法索、津巴布韦、赞比亚、尼日尔、几内亚的空运场景和询价资料讲清楚。',
    keywords: ['ET空运', 'ADD中转', '西非空运', '矿业备件'],
  },
  {
    href: '/insights/why-shippers-ignore-freight-brokers/',
    category: '获客方法',
    date: '2026-05-06',
    title: '为什么客户不理货代？非洲大件项目货销售真正该怎么切入',
    excerpt:
      '客户不缺普通货代，客户缺能判断复杂异常票的人。项目货销售要卖路线可执行性、资料缺口和风险清单。',
    keywords: ['非洲大件空运', '项目货路线诊断', '资料缺口清单', 'LGG/BRU'],
  },
]

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#101828]">
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

        <div className="mt-10 space-y-5">
          {insights.map((item) => (
            <Link
              key={item.href}
              href={item.href}
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
