import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, FileCheck2, Plane, Route, ShieldCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: '非洲空运航线 Hub | JNB/FBM/LUN/LBV/ACC/BKO/CKY 项目货路线 | EASCARGO',
  description:
    'EASCARGO非洲空运航线Hub，覆盖中国到非洲大件项目货、矿业设备、LGG/BRU欧洲中转、JNB/FBM/LUN/LBV/ACC/BKO/CKY/OUA/HRE/NIM等机场路线判断。',
  keywords: [
    '非洲空运航线',
    '中国到非洲空运',
    '非洲大件项目货',
    'JNB约翰内斯堡空运',
    'FBM卢本巴希空运',
    'LUN卢萨卡空运',
    'LBV利伯维尔空运',
    'LGG BRU欧洲中转',
  ],
  alternates: {
    canonical: 'https://www.eascargo.com/africa-air-freight/',
  },
  openGraph: {
    title: '非洲空运航线 Hub | EASCARGO',
    description: '中国到非洲大件项目货、矿业设备和机场代码路线判断。',
    url: 'https://www.eascargo.com/africa-air-freight/',
    type: 'website',
  },
}

const priorityRoutes = [
  { slug: 'jnb', code: 'JNB', city: '约翰内斯堡', country: '南非', use: '南部非洲矿业、工厂和高价值急件入口。' },
  { slug: 'fbm', code: 'FBM', city: '卢本巴希', country: '刚果金', use: '铜钴矿区备件、泵、电机、电气柜和停产急件。' },
  { slug: 'lun', code: 'LUN', city: '卢萨卡', country: '赞比亚', use: '赞比亚矿业、工业设备、工程备件和项目货。' },
  { slug: 'lbv', code: 'LBV', city: '利伯维尔', country: '加蓬', use: '油气、能源、长货和中非工程项目货。' },
  { slug: 'acc', code: 'ACC', city: '阿克拉', country: '加纳', use: '西非英语区贸易、矿业、医疗和工程设备。' },
  { slug: 'abj', code: 'ABJ', city: '阿比让', country: '科特迪瓦', use: '西非法语区项目货、工程设备和二程延伸。' },
  { slug: 'bko', code: 'BKO', city: '巴马科', country: '马里', use: '内陆西非矿业、工程和紧急补给货。' },
  { slug: 'cky', code: 'CKY', city: '科纳克里', country: '几内亚', use: '铝土矿项目、矿业备件和法语区文件协调。' },
  { slug: 'oua', code: 'OUA', city: '瓦加杜古', country: '布基纳法索', use: '萨赫勒矿业、能源、基础设施和急件补给。' },
  { slug: 'hre', code: 'HRE', city: '哈拉雷', country: '津巴布韦', use: '农业机械、矿业、工厂设备和南部非洲项目货。' },
  { slug: 'nim', code: 'NIM', city: '尼亚美', country: '尼日尔', use: '内陆萨赫勒能源、工程和紧急工业备件。' },
  { slug: 'los', code: 'LOS', city: '拉各斯', country: '尼日利亚', use: '油气、工厂、贸易补货和清关风险敏感货。' },
  { slug: 'nbo', code: 'NBO', city: '内罗毕', country: '肯尼亚', use: '东非 Hub、通讯设备、医疗器械和区域分拨。' },
  { slug: 'ebb', code: 'EBB', city: '恩德培', country: '乌干达', use: '乌干达工程、能源、通讯和内陆交付。' },
  { slug: 'dar', code: 'DAR', city: '达累斯萨拉姆', country: '坦桑尼亚', use: '坦桑尼亚工业、矿业、建设和东非项目货。' },
  { slug: 'fih', code: 'FIH', city: '金沙萨', country: '刚果金', use: '刚果金首都区通讯、政府项目和工业货。' },
]

const quoteChecks = [
  '品名、用途、材质和 HS Code',
  '每件尺寸、毛重、包装照片、吊点和重心',
  '起运城市、目的机场、最终城市或工地地址',
  '是否需要 LGG/BRU 欧洲中转、主甲板、B747F 或包机',
  '进口商资料、发票箱单、许可证和目的地清关责任',
  '最晚到货时间、项目停产窗口和现场卸货条件',
]

const clusterLinks = [
  { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
  { label: 'LGG Africa Gateway 英文页', href: '/china-africa-oversized-cargo-via-europe/' },
  { label: 'LGG/BRU 大件中转判断', href: '/insights/china-africa-via-europe-lgg-bru-transit/' },
  { label: '非洲空运情报库', href: '/insights/' },
  { label: '非洲大件空运案例', href: '/cases/' },
]

const decisionTools = [
  {
    label: '提交非洲项目货资料',
    href: '/tools/africa-project-cargo-rfq/?source=africa-route-hub',
    note: '把尺寸重量、照片、HS Code、目的地和到货窗口一次整理清楚，避免只拿公斤价做错误判断。',
  },
  {
    label: '非洲清关资料预审',
    href: '/tools/africa-air-freight-customs-document-checklist/',
    note: '先检查发票箱单、进口商、许可证、SONCAP/PVoC/ACI等资料责任，再决定能不能订舱。',
  },
  {
    label: '急件备件路线风险清单',
    href: '/tools/africa-urgent-spare-parts-route-risk-checklist/',
    note: '适合矿业、能源、工厂停产急件，先判断主甲板、二程、清关和现场卸货风险。',
  },
  {
    label: 'HAK-JNB全货机容量判断',
    href: '/insights/haikou-johannesburg-freighter-china-africa-project-cargo/',
    note: '把海口到约堡公开运力信号和LGG/BRU、JNB二程交付一起比较，而不是直接承诺航班。',
  },
]

export default function AfricaAirFreightHubPage() {
  const routeSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Africa air freight destination routes',
    itemListElement: priorityRoutes.map((route, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: `${route.code} ${route.city} air freight`,
      url: `https://www.eascargo.com/africa-air-freight/${route.slug}/`,
    })),
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routeSchema) }}
      />

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <Link href="/" className="text-sm font-semibold text-amberGold hover:text-white">
            EASCARGO
          </Link>
          <div className="mt-10 max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-semibold text-amberGold">
              <Route className="h-4 w-4" />
              China to Africa air freight route hub
            </div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              非洲空运航线 Hub
              <span className="block text-amberGold">按机场代码判断项目货能不能走。</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              中国到非洲大件、矿业设备、工程备件和紧急项目货，先看货物尺寸重量、目的地机场、
              清关资料、LGG/BRU 欧洲中转和最终交付边界，再给可执行报价。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-emerald-900 bg-emerald-950 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-amberGold">Current route program</p>
            <h2 className="mt-3 text-3xl font-black">MLE / SIN / MNL 经 ADD 至非洲</h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-emerald-50">
              比较马尔代夫、新加坡、菲律宾起运与中国直出的全程成本，覆盖 CMN、ALG、TUN、ADD、CKY、OUA、EBB、HAH、NBJ、BKO。
            </p>
          </div>
          <Link
            href="/route-programs/et-asia-africa-via-add/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-amberGold px-5 font-black text-slate-950 transition hover:bg-white"
          >
            查看航线项目
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Destination routes</p>
            <h2 className="text-3xl font-black md:text-4xl">机场代码要翻译成可执行路线。</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            JNB、FBM、LUN、LBV、ACC、ABJ、BKO、CKY 不是一串代码。每个点背后都有不同的清关、
            语言、二程、地面操作和项目货场景。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {priorityRoutes.map((route) => (
            <Link
              key={route.slug}
              href={`/africa-air-freight/${route.slug}/`}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amberGold"
            >
              <div className="mb-4 flex items-baseline justify-between gap-3">
                <span className="text-3xl font-black text-slate-950">{route.code}</span>
                <span className="text-right text-sm font-semibold text-amberGold">
                  {route.city}
                  <span className="block text-xs text-slate-500">{route.country}</span>
                </span>
              </div>
              <p className="text-sm leading-7 text-slate-600">{route.use}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Quote discipline</p>
            <h2 className="text-3xl font-black md:text-4xl">先判断路线，再谈价格。</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              非洲大件空运最怕拿到一个看似便宜、实际装不上、接不上、清不了、卸不了的价格。
              这张清单用于把询盘变成可判断的项目资料。
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quoteChecks.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-white p-4 ring-1 ring-slate-200">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amberGold" />
                <span className="text-sm leading-7 text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Decision tools</p>
            <h2 className="text-3xl font-black md:text-4xl">把询盘先变成可判断资料。</h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            如果客户只问中国到非洲空运多少钱，先把问题拆成路线、资料、时效和交付边界。
            下面这些工具适合矿业备件、能源设备、工厂急件、长货和清关敏感货。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {decisionTools.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-amberGold"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-black text-slate-950">{item.label}</h2>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-amberGold transition group-hover:translate-x-1" />
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 p-6">
            <Plane className="mb-5 h-8 w-8 text-amberGold" />
            <h2 className="text-xl font-bold">飞不飞得出去</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              单件尺寸、门高、主甲板、B747F、欧洲中转和包机可行性先判断。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <FileCheck2 className="mb-5 h-8 w-8 text-amberGold" />
            <h2 className="text-xl font-bold">清不清得出来</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              HS Code、发票箱单、进口商资料、许可证和语言文件要提前对齐。
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <ShieldCheck className="mb-5 h-8 w-8 text-amberGold" />
            <h2 className="text-xl font-bold">交不交得到现场</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              目的地代理、二程卡车、卸货设备、矿区或工地交付责任要拆清。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Topic cluster</p>
          <h2 className="text-3xl font-black md:text-4xl">继续看相关专题。</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {clusterLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-5 text-sm font-semibold text-slate-200 transition hover:border-amberGold hover:text-amberGold"
              >
                {item.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
