import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, FileSearch, Plane, ShieldAlert } from 'lucide-react'

export const metadata: Metadata = {
  title: '为什么客户不理货代？非洲大件项目货销售真正该怎么切入 | EASCargo Jones',
  description:
    '客户不缺普通货代，客户缺能判断复杂异常票的人。本文讲清非洲大件项目货销售如何从泛泛报价，转向路线可执行性、资料缺口和风险清单。',
  keywords: [
    '非洲大件项目货销售',
    '非洲大件空运',
    '中国到非洲项目货',
    '货代获客',
    '项目货路线诊断',
    'LGG BRU欧洲中转',
    '非洲空运方案',
    '大件空运询价清单',
  ],
  alternates: {
    canonical: 'https://www.eascargo.com/insights/why-shippers-ignore-freight-brokers/',
  },
  openGraph: {
    title: '为什么客户不理货代？非洲大件项目货销售真正该怎么切入',
    description:
      '客户不缺货代，客户缺的是能判断复杂异常票、排除错误路线、讲清风险和资料缺口的人。',
    url: 'https://www.eascargo.com/insights/why-shippers-ignore-freight-brokers/',
    type: 'article',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '为什么客户不理货代？非洲大件项目货销售真正该怎么切入',
  description:
    '非洲大件项目货的销售重点不是泛泛报价，而是路线可执行性判断、资料缺口清单和风险预判。',
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
  },
  mainEntityOfPage: 'https://www.eascargo.com/insights/why-shippers-ignore-freight-brokers/',
  datePublished: '2026-05-06',
  dateModified: '2026-05-06',
  about: [
    'China to Africa oversized air freight',
    'Africa project cargo',
    'Freight forwarding sales',
    'Route feasibility',
  ],
}

const checklist = [
  '品名、HS Code、材质和用途',
  '每件尺寸、毛重、包装照片',
  '是否超长、超高、超重、不可倒置',
  '吊点、重心、叉车或吊装方式',
  '起运城市、目的机场和最终城市',
  '最晚到货时间和项目停产窗口',
  '进口商资质、发票、箱单和清关资料',
  '是否需要 LGG/BRU 欧洲中转或主甲板全货机',
]

export default function WhyShippersIgnoreFreightBrokersPage() {
  return (
    <main className="min-h-screen bg-[#f6f7f9] text-[#101828]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="bg-[#08111f] text-white">
        <div className="mx-auto max-w-5xl px-5 py-8 sm:px-6 lg:px-8">
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm text-amberGold hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            返回专业文章
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold text-amberGold">非洲大件项目货获客方法</p>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              为什么客户不理货代？
              <span className="block text-amberGold">非洲大件项目货销售真正该怎么切入</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              客户不是不需要货代。客户是不缺普通货代。真正能打开对话的，不是又一个报价，
              而是帮客户判断这票复杂货到底能不能走、怎么走、哪里会卡。
            </p>
            <div className="mt-8 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                关键词：中国到非洲项目货
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                场景：大件/重货/异常票
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                方法：路线诊断优先
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-5xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_300px]">
          <div className="space-y-10">
            <section className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold">客户不缺货代，缺的是判断复杂票的人</h2>
              <div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">
                <p>
                  很多货代销售会把客户不回复理解成价格不够低、同行太多、客户暂时没有货。
                  这些原因可能存在，但在非洲大件项目货里，更关键的问题是：客户每天都能收到
                  大量类似的信息。
                </p>
                <p>
                  “我们价格好”“我们时效快”“有货可以询价”“非洲空运优势渠道”，这些话客户听得太多。
                  它们没有帮客户降低判断成本，也没有说明你和其他货代有什么不同。
                </p>
                <p>
                  对工厂、贸易商和项目客户来说，真正难的不是找一个能报价的人，而是找到一个能提前判断
                  这票货会不会出问题的人。特别是 JNB、FBM、LUN、LBV、NBO、LOS、ACC 这类非洲目的地，
                  货物一旦超长、超重、超高，问题马上从“运费多少”变成“路线是否成立”。
                </p>
              </div>
            </section>

            <section className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold">不要卖价格，卖可执行性</h2>
              <div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">
                <p>
                  普通空运可以先问价格。但非洲大件项目货不能只问价格，因为低价不等于方案成立。
                  一票货如果装不上飞机、接不上二程、清不了关、卸不了货，再便宜也不是方案。
                </p>
                <p>
                  对复杂项目货来说，报价前必须先排除不可执行路线：国内段能不能起飞，是否需要主甲板，
                  LGG/BRU 欧洲中转仓能不能接，二程全货机是否匹配，非洲入口机场是否能操作，
                  最后一公里是否有吊装、卡车和清关资源。
                </p>
                <p>
                  这就是项目货销售的切入点。你不要急着告诉客户“我便宜”，而要先告诉客户：
                  哪些路线不能走，哪些路线能走但有风险，哪些资料缺了就不能给终端客户承诺时效。
                </p>
              </div>
            </section>

            <section className="rounded-lg bg-[#0b1c2d] p-7 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <FileSearch className="h-7 w-7 text-amberGold" />
                <h2 className="text-2xl font-bold">报价前，先给客户一张资料缺口清单</h2>
              </div>
              <p className="mt-5 text-lg leading-9 text-slate-300">
                客户不回你，很多时候不是因为没看到，而是因为不知道该发什么资料。
                大件项目货不能只发一个重量。资料越完整，越能提前排除装不上、接不上、清不了、卸不了的风险。
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amberGold" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold">不要追着客户问货，帮他判断“这票能不能走”</h2>
              <div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">
                <p>
                  普通销售会反复问：“最近有货吗？”“这个项目怎么样了？”“价格考虑得如何？”
                  但复杂项目货更有效的动作，是直接帮客户判断异常点。
                </p>
                <p>
                  比如：单件超过普通板型限制时，客机腹舱基本不用看；目的地不是主机场时，
                  要提前确认非洲 Hub 和内陆延伸；国内没有直飞方案时，要评估中国到 LGG/BRU，
                  再接欧洲全货机或包机进入非洲。
                </p>
                <p>
                  这种沟通方式不是催单，而是诊断。客户一旦发现你能帮他减少误判，就会愿意继续聊。
                  你不是去替代他现有所有货代，而是切入现有货代解决不了的异常票。
                </p>
              </div>
            </section>

            <section className="rounded-lg bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-2xl font-bold">非洲项目货的机会，在“普通方案解决不了”的地方</h2>
              <div className="mt-5 space-y-4 text-lg leading-9 text-slate-700">
                <p>
                  如果什么货都想接，客户反而看不出你是谁。非洲大件项目货应该反过来讲：
                  只讲复杂票、异常票、普通航班解决不了的票、国内没有直飞方案时如何经欧洲中转的票。
                </p>
                <p>
                  8 米长货物能不能走空运？单件 14 吨怎么判断路线？国内没有直飞方案时，
                  能不能走 BRU/LGG？JNB、FBM、LUN、LBV、NBO、ACC 的操作差异在哪里？
                  目的地清关和卸货谁负责？这些问题越具体，你的价值越明显。
                </p>
                <p>
                  真正的专业不是把话说得复杂，而是把复杂问题讲清楚。客户不缺货代，
                  客户缺的是能在货还没出问题之前，指出问题、排除错误路线、解释风险边界的人。
                </p>
              </div>
            </section>

            <section className="rounded-lg bg-amberGold p-7 text-[#08111f] shadow-sm">
              <div className="flex items-center gap-3">
                <Plane className="h-7 w-7" />
                <h2 className="text-2xl font-black">EASCargo 的切入方式</h2>
              </div>
              <p className="mt-5 text-lg leading-9">
                我们不把非洲大件项目货当成普通空运报价处理。先判断货物能不能飞、国内段有没有方案、
                是否需要 LGG/BRU 欧洲中转、非洲入口机场能否操作、清关资料是否足够、最后一公里如何交付。
                只有路线可执行，报价才有意义。
              </p>
              <Link
                href="/tools/africa-project-cargo-rfq/?source=insight&topic=why-shippers-ignore-freight-brokers"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#08111f] px-5 py-3 font-semibold text-white hover:bg-[#14233a] transition-colors"
              >
                发送大件资料做路线预判
              </Link>
            </section>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <h2 className="text-lg font-bold">本文适合谁看</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li>中国工厂和外贸公司</li>
                <li>非洲采购代理和进口商</li>
                <li>处理矿业、工程设备、备件的项目团队</li>
                <li>遇到国内无直飞方案的大件空运询盘</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex items-center gap-2 text-amberGold">
                <ShieldAlert className="h-5 w-5" />
                <h2 className="font-bold text-[#101828]">核心判断</h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                客户不缺普通货代。客户缺的是能判断复杂异常票、排除错误路线、讲清资料缺口和风险边界的人。
              </p>
            </div>

            <div className="rounded-lg bg-[#08111f] p-5 text-white shadow-sm">
              <h2 className="font-bold">相关页面</h2>
              <div className="mt-4 space-y-3 text-sm">
                <Link className="block text-slate-300 hover:text-amberGold" href="/china-africa-oversized-cargo-via-europe/">
                  中国到非洲大件经欧洲中转
                </Link>
                <Link className="block text-slate-300 hover:text-amberGold" href="/zh/lgg-africa-gateway/">
                  LGG/BRU 非洲中转网络
                </Link>
                <Link className="block text-slate-300 hover:text-amberGold" href="/cases/">
                  非洲大件空运案例
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  )
}
