import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck } from 'lucide-react'

const pageUrl = 'https://www.eascargo.com/insights/china-africa-8-meter-oversized-air-freight-case/'

export const metadata: Metadata = {
  title: '中国到非洲8米长项目货空运案例：LGG/BRU中转怎么做？ | EASCARGO',
  description:
    '一票约8米长工业设备无法使用普通客机腹舱。案例拆解中国起运、LGG/BRU欧洲中转、B747F主甲板、LBV等非洲入口、报价逻辑和项目交付。',
  keywords: [
    '中国到非洲超大件空运',
    '8米长货空运',
    'LGG BRU非洲中转',
    'B747F main deck cargo',
    'China Africa oversized air freight',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '中国到非洲8米长项目货空运案例：LGG/BRU中转怎么做？',
    description:
      '中英双语拆解8米长项目货的装载、中转、非洲入口、报价和最终交付逻辑。',
    url: pageUrl,
    type: 'article',
    publishedTime: '2026-07-10',
    modifiedTime: '2026-07-10',
  },
}

const sections = [
  {
    heading: '案例背景 / Case background',
    body: [
      '这票货是一批从中国发往非洲项目区域的超长工业设备，最长单件约8米。客户真正需要确认的不是“哪家航空公司价格最低”，而是货物能否装机、从哪里中转、进入哪个非洲机场，以及到港后能否完成清关、卸货和项目现场交付。',
      'This shipment involved oversized industrial equipment moving from China to an African project area. The longest piece was about eight meters. The practical question was not which airline showed the lowest rate, but whether the cargo could be loaded, transferred, cleared and handed over at the final site.',
    ],
    points: ['约8米长单件', '普通腹舱不可行', '非洲项目现场交付', '先做路线可行性'],
  },
  {
    heading: '目的港和入口比较 / Gateway comparison',
    body: [
      '方案阶段比较了LBV利伯维尔、JNB约翰内斯堡、FBM卢本巴希和LUN卢萨卡。JNB适合南部非洲矿业和工程货延伸；FBM贴近刚果金Copperbelt矿区；LUN服务赞比亚工业和矿业供应链；LBV更适合加蓬及中非的油气、工程和长货项目。入口选择必须同时看最终使用地、清关能力、卸货设备和二程成本。',
      'LBV, JNB, FBM and LUN were compared as African gateways. Each airport serves a different project geography. Gateway selection therefore depends on the final site, importer readiness, ground handling, customs capability and inland delivery, not only the airport-to-airport rate.',
    ],
    points: ['LBV中非项目货', 'JNB南部非洲Hub', 'FBM铜钴矿区', 'LUN赞比亚供应链'],
  },
  {
    heading: '四个执行难点 / Four execution risks',
    body: [
      '第一是尺寸风险：每件长宽高、包装、叉车孔、吊点、重心和装载方向都要核对。第二是机型风险：普通客机腹舱无法承接，理论运价不等于实际可装。第三是中转风险：LGG或BRU仓库必须能接货、重新组板，并让二程承运人接受相同尺寸。第四是目的地风险：进口商文件、清关代理、机场地面设备和最终交付责任要在起运前确认。',
      'The four main risks were dimensions, aircraft acceptance, Europe transit handling and African destination readiness. An eight-meter piece cannot be judged by weight alone. The transit warehouse and second-leg carrier must accept the same dimensions, while the destination must be ready for customs, unloading and inland handover.',
    ],
    points: ['尺寸与重心', '主甲板机型', '欧洲仓库交接', '清关和卸货'],
  },
  {
    heading: '路线方案 / Routing solution',
    body: [
      '在普通直飞方案无法装载的前提下，可执行逻辑是中国起运后先进入LGG或BRU欧洲货运枢纽，完成仓库交接、组板和二程准备，再衔接B747F全货机或其他主甲板方案进入非洲。最后一段由目的港代理完成清关、机场操作和项目交付衔接。',
      'When a normal direct service cannot accept the cargo, the executable logic is China origin to LGG or BRU, warehouse handover and build-up in Europe, then an Africa-bound B747F or another main-deck option. Destination customs, airport handling and the final-site handover remain part of the same route plan.',
    ],
    points: ['中国起运', 'LGG/BRU中转', 'B747F主甲板', '非洲清关与二程'],
  },
  {
    heading: '报价逻辑 / Quotation logic',
    body: [
      '报价不能只按每公斤单价排序。先确认可用机型能否装载，再确认欧洲中转仓和二程承运人是否接受，最后确认非洲机场和项目现场能否接货。三项成立后，才比较欧洲中转、B747F主甲板、包机，以及不同非洲入口加二程的总成本。',
      'The quotation followed the same sequence: aircraft acceptance first, transit and second-leg acceptance second, destination and final-site readiness third. Only then were the Europe-transit, main-deck, charter and alternative-gateway costs compared. A low rate has no value if one of those links cannot execute.',
    ],
    points: ['不是只看公斤价', '比较总交付成本', '责任边界写进报价', '排除不可执行低价'],
  },
  {
    heading: '结果和时效判断 / Result and transit-time logic',
    body: [
      '这票原本没有普通直飞装载方案的货，被拆成了可执行链路：中国起运、LGG/BRU中转、非洲入口落地，再衔接当地清关和项目交付。欧洲中转增加了操作节点，但解决了直飞装不下、航司不接和目的地准备不足的问题。实际时效仍以货好时间、主甲板舱位、中转窗口、清关和现场接收条件为准。',
      'The result was an executable chain for cargo that did not fit a normal direct option: China origin, LGG or BRU transit, an African gateway, then customs and project delivery. Europe transit adds handling steps, but it solves the larger acceptance problem. Final timing remains case-specific and depends on cargo readiness, main-deck space, connection windows, customs and site access.',
    ],
    points: ['路线从不可行变为可执行', '时效按逐票条件确认', '稳定交付优先', '适合矿业能源工程货'],
  },
]

const checklist = [
  '中英文品名和HS Code',
  '每件长宽高和毛重',
  '包装及货物照片',
  '叉车孔、吊点和重心',
  '起运城市和货好时间',
  '目的机场及最终项目地址',
  '进口商和清关代理资料',
  '最晚到货时间',
  '危险品、带电或温控属性',
  '机场卸货和现场接收条件',
]

const relatedRoutes = [
  { label: 'LGG/BRU非洲中转网络', href: '/zh/lgg-africa-gateway/' },
  { label: 'LBV利伯维尔项目货', href: '/africa-air-freight/lbv/' },
  { label: 'JNB约翰内斯堡Hub', href: '/africa-air-freight/jnb/' },
  { label: 'FBM卢本巴希矿业货', href: '/africa-air-freight/fbm/' },
  { label: 'LUN卢萨卡项目货', href: '/africa-air-freight/lun/' },
  { label: '大件空运案例库', href: '/cases/' },
]

export default function OversizedCargoCasePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '中国到非洲8米长项目货空运案例：LGG/BRU中转怎么做？',
    description: metadata.description,
    mainEntityOfPage: pageUrl,
    datePublished: '2026-07-10',
    dateModified: '2026-07-10',
    inLanguage: ['zh-CN', 'en'],
    author: {
      '@type': 'Person',
      '@id': 'https://www.eascargo.com/#jones',
      name: '神仙货运Jones',
      jobTitle: 'China to Africa Oversized Air Freight Specialist',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.eascargo.com/#organization',
      name: 'EASCARGO',
      url: 'https://www.eascargo.com/',
    },
    about: ['China to Africa oversized air freight', 'LGG BRU transit', 'B747F main-deck cargo'],
  }
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'EASCARGO', item: 'https://www.eascargo.com/' },
      { '@type': 'ListItem', position: 2, name: '非洲空运情报库', item: 'https://www.eascargo.com/insights/' },
      { '@type': 'ListItem', position: 3, name: '中国到非洲8米长项目货空运案例', item: pageUrl },
    ],
  }

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#101828]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="bg-[#08111f] text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
          <Link href="/insights/" className="inline-flex items-center gap-2 text-sm text-amberGold hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            返回非洲空运情报
          </Link>
          <p className="mt-10 text-sm font-semibold text-amberGold">案例复盘 / Case study</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-black leading-tight sm:text-5xl">
            中国到非洲8米长项目货空运案例：LGG/BRU中转怎么做？
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            一票约8米长的工业设备无法使用普通客机腹舱。案例拆解中国起运、LGG/BRU欧洲中转、
            B747F主甲板、LBV等非洲入口、报价逻辑和项目现场交付。
          </p>
          <p className="mt-6 text-sm text-slate-400">2026-07-10 · 11 分钟 / 11 min</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_300px] lg:px-8">
        <article className="min-w-0 divide-y divide-slate-200 bg-white px-6 shadow-sm ring-1 ring-slate-200 sm:px-8">
          {sections.map((section) => (
            <section key={section.heading} className="py-9">
              <h2 className="text-2xl font-black sm:text-3xl">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-slate-700 sm:text-lg sm:leading-9">
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 border-l-2 border-amberGold bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amberGold" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="py-9">
            <h2 className="text-2xl font-black">EASCargo怎么处理这类询盘</h2>
            <p className="mt-5 text-lg leading-9 text-slate-700">
              先判断货物能不能装、路线能不能接、目的港能不能清、最终现场能不能交付。路线成立后再谈价格，
              否则低价只会把风险推迟到订舱和到港之后。
            </p>
            <a
              href="mailto:globegsa@gmail.com?subject=中国到非洲8米长项目货空运询价"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#08111f] px-6 py-3 font-bold text-white transition hover:bg-amberGold hover:text-[#08111f]"
            >
              发送资料做路线预判
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </section>
        </article>

        <aside className="space-y-9 lg:sticky lg:top-6 lg:self-start">
          <section>
            <div className="flex items-center gap-2 text-amberGold">
              <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
              <h2 className="font-bold text-[#101828]">询价资料</h2>
            </div>
            <ul className="mt-4 space-y-3 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-600">
              {checklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>
          <section>
            <h2 className="font-bold">相关航线</h2>
            <nav className="mt-4 space-y-3 border-t border-slate-200 pt-4 text-sm">
              {relatedRoutes.map((route) => (
                <Link key={route.href} href={route.href} className="block text-slate-600 hover:text-amberGold">
                  {route.label}
                </Link>
              ))}
            </nav>
          </section>
        </aside>
      </div>
    </main>
  )
}
