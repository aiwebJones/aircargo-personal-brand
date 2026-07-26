import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, MapPinned, Plane, ShieldAlert } from 'lucide-react'

export const metadata: Metadata = {
  title: '埃塞俄比亚航空特价：ACC/BKO/OUA/HRE/LUN/NIM/CKY 非洲空运怎么选 | EASCargo Jones',
  description:
    'ET埃塞俄比亚航空经ADD中转覆盖加纳ACC、马里BKO、布基纳法索OUA、津巴布韦HRE、赞比亚LUN、尼日尔NIM、几内亚CKY。本文讲清非洲空运询价、清关和项目货判断。',
  keywords: [
    '埃塞俄比亚航空',
    'ET空运',
    'ADD中转',
    '非洲空运',
    '中国到非洲空运',
    'ACC阿克拉空运',
    'BKO巴马科空运',
    'OUA瓦加杜古空运',
    'HRE哈拉雷空运',
    'LUN卢萨卡空运',
    'NIM尼亚美空运',
    'CKY科纳克里空运',
    '非洲项目货',
    '矿业设备空运',
  ],
  alternates: {
    canonical:
      'https://www.eascargo.com/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/',
  },
  openGraph: {
    title: '埃塞俄比亚航空特价：ACC/BKO/OUA/HRE/LUN/NIM/CKY 非洲空运怎么选',
    description:
      'ET经ADD中转的非洲多点空运判断：价格只是入口，真正要看目的国清关、机场操作和最终交付。',
    url: 'https://www.eascargo.com/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '埃塞俄比亚航空特价：ACC/BKO/OUA/HRE/LUN/NIM/CKY 非洲空运怎么选？',
  description:
    'ET埃塞俄比亚航空经ADD中转覆盖多个非洲目的地，适合工厂、贸易商和项目客户做非洲空运路线判断。',
  author: {
    '@type': 'Person',
    '@id': 'https://www.eascargo.com/#jones',
    name: '神仙货运Jones',
    jobTitle: 'China to Africa Oversized Air Freight Specialist',
  },
  publisher: {
    '@type': 'Organization',
    '@id': 'https://www.eascargo.com/#organization',
    name: 'EASCargo Jones',
  },
  mainEntityOfPage:
    'https://www.eascargo.com/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/',
  datePublished: '2026-05-21',
  dateModified: '2026-05-21',
  about: [
    'Ethiopian Airlines cargo',
    'China to Africa air freight',
    'Africa project cargo',
    'ADD transit',
    'ACC BKO OUA HRE LUN NIM CKY air freight',
  ],
}

const airportNotes = [
  {
    code: 'ACC',
    city: '阿克拉',
    country: '加纳',
    role: '西非英语区商业入口',
    cargo: '贸易补货、医疗器械、工程备件、电子产品、矿业相关急件。',
    note: '加纳市场商业活跃，询价时要提前确认收货人进口资质、货值申报、目的港费用和最终城市。',
  },
  {
    code: 'BKO',
    city: '巴马科',
    country: '马里',
    role: '内陆西非项目货入口',
    cargo: '矿业备件、工程物资、援助物资、发电机和维修急件。',
    note: '马里是内陆国家，空运到港只是第一步，后续清关、提货和内陆交付责任要提前拆清。',
  },
  {
    code: 'OUA',
    city: '瓦加杜古',
    country: '布基纳法索',
    role: '萨赫勒工程和矿业节点',
    cargo: '矿山配件、基础设施物资、能源项目小批量急件。',
    note: 'OUA 适合急件补给，但舱位和目的地操作能力要逐票确认，包装照片和尺寸重量不能省。',
  },
  {
    code: 'HRE',
    city: '哈拉雷',
    country: '津巴布韦',
    role: '南部非洲工业和农业设备入口',
    cargo: '农业机械配件、矿业设备、工厂备件、医疗和通信设备。',
    note: '津巴布韦客户常看重落地成本，报价要把到港费用、清关资料和收货人配合度讲明白。',
  },
  {
    code: 'LUN',
    city: '卢萨卡',
    country: '赞比亚',
    role: '铜矿带项目货重要入口',
    cargo: '泵、电机、电气柜、矿山维修件、工业设备和停产急件。',
    note: '如果最终目的地在矿区，还要判断 LUN 到 Copperbelt 的二程卡车、卸货设备和交付窗口。',
  },
  {
    code: 'NIM',
    city: '尼亚美',
    country: '尼日尔',
    role: '内陆萨赫勒紧急补给点',
    cargo: '能源项目物资、工程设备小件、高价值急件、备件补给。',
    note: '尼日尔内陆属性明显，文件一致性、收货人资料和当地清关代理响应速度会直接影响交付。',
  },
  {
    code: 'CKY',
    city: '科纳克里',
    country: '几内亚',
    role: '西非矿业和法语区项目入口',
    cargo: '铝土矿相关配件、输送设备、工程耗材、矿山维修急件。',
    note: 'CKY 项目货要特别注意法语资料沟通、HS Code、包装照片、货值和当地进口文件匹配。',
  },
]

const quoteChecklist = [
  '品名、用途、材质和 HS Code',
  '件数、每件尺寸、每件毛重、总体积和总毛重',
  '包装照片、是否木箱、是否可叠放、是否不可倒置',
  '是否带电、带磁、液体、粉末、危险品或二手设备',
  '起运地、目的机场、最终城市和是否需要门到门',
  '备货时间、最晚到货时间和是否涉及项目停产窗口',
  '收货人是否有进口资质、是否需要清关/DDU/DDP配合',
  '是否接受 ET 经 ADD 中转，是否需要同时比较其他航司路线',
]

const decisionPoints = [
  '先看货物能不能装：单件尺寸、毛重、包装高度、重心和吊点决定是否可走普通空运。',
  '再看目的地能不能接：非洲机场地面操作、清关代理、目的港费用和二程交付要同步确认。',
  '最后看价格是否成立：特价舱位有时效窗口，真实成本要把起运、空运、中转、目的地和交付拆开看。',
]

export default function EthiopianAirlinesAfricaSpecialRatesPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#101828]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="bg-[#08111f] text-white">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
          <Link
            href="/insights/"
            className="inline-flex items-center gap-2 text-sm text-amberGold hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回非洲空运情报
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_330px] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold text-amberGold">ET / ADD Transit / Africa Air Freight</p>
              <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                埃塞俄比亚航空特价大放送
                <span className="block text-amberGold">ACC/BKO/OUA/HRE/LUN/NIM/CKY 怎么选？</span>
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                ET 经亚的斯亚贝巴 ADD 中转，适合把中国货物快速接入多个非洲目的地。
                但非洲空运不能只问“多少钱一公斤”，更要先判断目的国清关、机场操作和最终交付是否成立。
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-amberGold">询价提醒</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                特价舱位以实时报价和实际舱位为准。请先准备品名、HS Code、尺寸、重量、包装照片、起运地、目的城市和最晚到货时间。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-emerald-900 bg-emerald-950 py-10 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold text-amberGold">当前可操作航线项目</p>
            <h2 className="mt-2 text-2xl font-black">MLE / SIN / MNL 经 ADD 至 10 个非洲点</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-emerald-50">
              查看马尔代夫、新加坡、菲律宾起运与中国直出的总成本比较、目的港风险和逐票确认条件。
            </p>
          </div>
          <Link
            href="/route-programs/et-asia-africa-via-add/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-amberGold px-5 font-black text-slate-950 transition hover:bg-white"
          >
            查看项目方案
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <article className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <section className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <Plane className="h-7 w-7 text-amberGold" />
                <h2 className="text-2xl font-black">为什么这波 ET 价格值得看？</h2>
              </div>
              <div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">
                <p>
                  对很多工厂和贸易商来说，非洲空运最难的不是找到一个航司名字，而是把多个非洲目的地的
                  可执行路线、清关资料和落地交付提前判断清楚。ET 埃塞俄比亚航空的价值，就在于它通过
                  ADD 中转把东非、西非、南部非洲和内陆点连接起来。
                </p>
                <p>
                  这次重点关注 ACC 阿克拉、BKO 巴马科、OUA 瓦加杜古、HRE 哈拉雷、LUN 卢萨卡、
                  NIM 尼亚美、CKY 科纳克里。它们背后不是一串机场代码，而是加纳、马里、布基纳法索、
                  津巴布韦、赞比亚、尼日尔、几内亚这些真实市场。
                </p>
                <p>
                  这些点常见货物包括矿业备件、工程物资、工厂维修件、医疗器械、通信设备、贸易补货和
                  小批量急件。价格有优势时，客户应该抓住窗口；但在确认舱位前，先把货物资料和目的地风险讲清楚。
                </p>
              </div>
            </section>

            <section className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <MapPinned className="h-7 w-7 text-amberGold" />
                <h2 className="text-2xl font-black">7 个目的地，不要只看代码</h2>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {airportNotes.map((airport) => (
                  <div key={airport.code} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-3xl font-black text-[#08111f]">{airport.code}</h3>
                      <span className="text-lg font-bold text-amberGold">
                        {airport.city} · {airport.country}
                      </span>
                    </div>
                    <p className="mt-3 font-semibold text-[#08111f]">{airport.role}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{airport.cargo}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{airport.note}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg bg-[#0b1c2d] p-7 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <ClipboardCheck className="h-7 w-7 text-amberGold" />
                <h2 className="text-2xl font-black">发资料前，先按这张清单准备</h2>
              </div>
              <p className="mt-5 text-lg leading-9 text-slate-300">
                非洲空运报价不能只发一个重量。资料越完整，越能快速判断能不能走、走哪条线、哪里会卡。
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {quoteChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amberGold" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-3">
                <ShieldAlert className="h-7 w-7 text-amberGold" />
                <h2 className="text-2xl font-black">真正决定成本的，不只是空运费</h2>
              </div>
              <div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">
                <p>
                  非洲线最容易误判的地方，是把“空运费低”直接理解成“总成本低”。实际操作里，
                  目的地清关、进口商资质、木包装、许可证、货值申报、当地提货和最后一公里，都会影响最终落地成本。
                </p>
                <p>
                  对 LUN、BKO、NIM 这类内陆属性明显的市场，机场到最终城市或矿区的二程也要提前设计。
                  对 CKY、OUA 等法语区目的地，资料语言、品名翻译和当地代理确认也会影响操作效率。
                </p>
              </div>
              <div className="mt-6 grid gap-3">
                {decisionPoints.map((point) => (
                  <div key={point} className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-slate-700">
                    {point}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg bg-amberGold p-7 text-[#08111f] shadow-sm">
              <h2 className="text-2xl font-black">EASCargo 怎么帮你判断？</h2>
              <p className="mt-5 text-lg leading-9">
                我们会先看货物资料，再比较 ET/ADD 中转和其他可行路线。对普通货、小批量急件、矿业备件、
                工程物资和非洲项目货，我们重点判断三件事：能不能装、能不能清、能不能按项目节点交付。
              </p>
              <Link
                href="mailto:globegsa@gmail.com?subject=ET%20Africa%20air%20freight%20quote%20ACC%20BKO%20OUA%20HRE%20LUN%20NIM%20CKY"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#08111f] px-6 py-3 font-bold text-white transition hover:bg-white hover:text-[#08111f]"
              >
                发送资料，测算 ET 非洲空运方案
              </Link>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-amberGold">覆盖目的地</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {airportNotes.map((airport) => (
                  <span key={airport.code} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                    {airport.code} {airport.city}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold text-amberGold">适合货物</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>矿业备件、泵、电机、电气柜</li>
                <li>工程物资、通信设备、医疗器械</li>
                <li>小批量急件、高货值贸易补货</li>
                <li>需要快速判断路线的非洲项目货</li>
              </ul>
            </div>
            <div className="rounded-lg bg-[#08111f] p-6 text-white shadow-sm">
              <p className="text-sm font-semibold text-amberGold">关键词</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                埃塞俄比亚航空、ET空运、ADD中转、非洲空运、中国到非洲空运、ACC阿克拉空运、BKO巴马科空运、LUN卢萨卡空运。
              </p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
