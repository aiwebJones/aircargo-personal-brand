import type { Metadata } from 'next'
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  MapPinned,
  PackageCheck,
  Plane,
  ShieldCheck,
  Truck,
  Waypoints,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'LGG欧洲中转非洲大件空运网络 | 中国到非洲项目货方案',
  description:
    '面向中国货代、工厂和外贸公司：国内没有直飞方案时，通过LGG欧洲中转，衔接B747F直飞非洲与非洲Hub卡车中转，覆盖JNB、FBM、LUN、EBB、NBO、LOS、ACC及30+内陆点。',
  alternates: {
    canonical: 'https://www.eascargo.com/zh/lgg-africa-gateway/',
  },
  openGraph: {
    title: 'LGG欧洲中转非洲大件空运网络',
    description:
      '国内无法直飞非洲的大件项目货，先飞LGG，再通过B747F直飞或非洲Hub卡车中转覆盖主要非洲点。',
    url: 'https://www.eascargo.com/zh/lgg-africa-gateway/',
    type: 'website',
  },
}

type Destination = {
  code: string
  name: string
  country: string
  note: string
}

type Hub = {
  code: string
  name: string
  country: string
}

const directFlightDestinations: Destination[] = [
  {
    code: 'ACC',
    name: '阿克拉',
    country: '加纳',
    note: '西非英语区重要入口，可衔接加纳及周边市场。',
  },
  {
    code: 'BGF',
    name: '班吉',
    country: '中非共和国',
    note: '中非内陆点，适合项目物资和工程设备。',
  },
  {
    code: 'BZV',
    name: '布拉柴维尔',
    country: '刚果共和国',
    note: '刚果河流域入口，可衔接黑角、让蒂尔港等周边点。',
  },
  {
    code: 'PNR',
    name: '黑角',
    country: '刚果共和国',
    note: '港口城市，油气和工程项目相关货物常见。',
  },
  {
    code: 'LBV',
    name: '利伯维尔',
    country: '加蓬',
    note: '中非沿海入口，适合加蓬项目货。',
  },
  {
    code: 'POG',
    name: '让蒂尔港',
    country: '加蓬',
    note: '油气、能源类项目货目的地。',
  },
  {
    code: 'LOS',
    name: '拉各斯',
    country: '尼日利亚',
    note: '西非最大商业城市之一，可作为尼日利亚和周边中转Hub。',
  },
  {
    code: 'NBO',
    name: '内罗毕',
    country: '肯尼亚',
    note: '东非核心Hub，可衔接坦桑尼亚、乌干达、卢旺达、南苏丹等方向。',
  },
  {
    code: 'NIM',
    name: '尼亚美',
    country: '尼日尔',
    note: '萨赫勒内陆目的地，适合工程项目物资。',
  },
  {
    code: 'PHC',
    name: '哈科特港',
    country: '尼日利亚',
    note: '尼日利亚油气工业重镇。',
  },
  {
    code: 'NBJ',
    name: '尼日利亚内陆专线点',
    country: '尼日利亚',
    note: '需按承运人当前可操作站点确认。',
  },
  {
    code: 'JNB',
    name: '约翰内斯堡',
    country: '南非',
    note: '南部非洲核心空运Hub，可延伸开普敦、德班、温得和克等。',
  },
  {
    code: 'LUN',
    name: '卢萨卡',
    country: '赞比亚',
    note: '铜矿带和南部非洲内陆项目货入口。',
  },
  {
    code: 'EBB',
    name: '恩德培',
    country: '乌干达',
    note: '东非内陆入口，可衔接基加利等。',
  },
]

const truckTransferGroups: Array<{ hub: Hub; viaText: string; destinations: Destination[] }> = [
  {
    hub: { code: 'ACC', name: '阿克拉', country: '加纳' },
    viaText: '经阿克拉衔接西非法语区和沿海贸易节点',
    destinations: [
      {
        code: 'ABJ',
        name: '阿比让',
        country: '科特迪瓦',
        note: '西非法语区重要商业港口城市。',
      },
      {
        code: 'LFW',
        name: '洛美',
        country: '多哥',
        note: '西非沿海中转和贸易节点。',
      },
    ],
  },
  {
    hub: { code: 'LOS', name: '拉各斯', country: '尼日利亚' },
    viaText: '经拉各斯衔接尼日利亚内陆和中西非目的地',
    destinations: [
      {
        code: 'ABV',
        name: '阿布贾',
        country: '尼日利亚',
        note: '尼日利亚首都及政府项目货目的地。',
      },
      {
        code: 'COO',
        name: '科托努',
        country: '贝宁',
        note: '西非港口城市，常服务贝宁及周边贸易。',
      },
      {
        code: 'DLA',
        name: '杜阿拉',
        country: '喀麦隆',
        note: '中非重要港口和工业城市。',
      },
      {
        code: 'FIH',
        name: '金沙萨',
        country: '刚果金',
        note: '刚果金首都，内陆项目和矿业设备需求多。',
      },
      {
        code: 'NDJ',
        name: '恩贾梅纳',
        country: '乍得',
        note: '萨赫勒内陆点，工程和援助项目常见。',
      },
      {
        code: 'OUA',
        name: '瓦加杜古',
        country: '布基纳法索',
        note: '西非内陆目的地。',
      },
      {
        code: 'SSG',
        name: '马拉博',
        country: '赤道几内亚',
        note: '岛屿目的地，油气项目相关。',
      },
    ],
  },
  {
    hub: { code: 'NBO', name: '内罗毕', country: '肯尼亚' },
    viaText: '经内罗毕衔接东非、南苏丹和中南部非洲内陆点',
    destinations: [
      {
        code: 'DAR',
        name: '达累斯萨拉姆',
        country: '坦桑尼亚',
        note: '东非港口城市，可服务坦桑尼亚及周边。',
      },
      {
        code: 'FBM',
        name: '卢本巴希',
        country: '刚果金',
        note: '铜钴矿区核心点，矿山设备和备件需求强。',
      },
      {
        code: 'HRE',
        name: '哈拉雷',
        country: '津巴布韦',
        note: '南部非洲内陆市场。',
      },
      {
        code: 'JUB',
        name: '朱巴',
        country: '南苏丹',
        note: '项目和援助物资目的地。',
      },
      {
        code: 'LLW',
        name: '利隆圭',
        country: '马拉维',
        note: '马拉维内陆目的地。',
      },
      {
        code: 'LUN',
        name: '卢萨卡',
        country: '赞比亚',
        note: '赞比亚项目货和矿业供应链入口。',
      },
      {
        code: 'MGQ',
        name: '摩加迪沙',
        country: '索马里',
        note: '东非和非洲之角目的地。',
      },
      {
        code: 'MPM',
        name: '马普托',
        country: '莫桑比克',
        note: '南部非洲港口城市，可经内罗毕或约堡路径确认。',
      },
      {
        code: 'MWZ',
        name: '姆万扎',
        country: '坦桑尼亚',
        note: '坦桑尼亚内陆湖区和矿业相关点。',
      },
      {
        code: 'EBB',
        name: '恩德培',
        country: '乌干达',
        note: '乌干达及东非内陆入口。',
      },
    ],
  },
  {
    hub: { code: 'EBB', name: '恩德培', country: '乌干达' },
    viaText: '经恩德培延伸东非内陆市场',
    destinations: [
      {
        code: 'KGL',
        name: '基加利',
        country: '卢旺达',
        note: '东非内陆市场，可经恩德培衔接。',
      },
    ],
  },
  {
    hub: { code: 'JNB', name: '约翰内斯堡', country: '南非' },
    viaText: '经约堡衔接南非本土和南部非洲内陆市场',
    destinations: [
      {
        code: 'CPT',
        name: '开普敦',
        country: '南非',
        note: '南非西开普市场。',
      },
      {
        code: 'DUR',
        name: '德班',
        country: '南非',
        note: '南非港口城市和工业货目的地。',
      },
      {
        code: 'PLZ',
        name: '伊丽莎白港/格贝哈',
        country: '南非',
        note: '汽车和制造业相关城市。',
      },
      {
        code: 'ELS',
        name: '东伦敦',
        country: '南非',
        note: '南非东开普区域点。',
      },
      {
        code: 'MTS',
        name: '曼齐尼/马察帕',
        country: '斯威士兰',
        note: '南部非洲小市场，需按承运人确认落地安排。',
      },
      {
        code: 'MSU',
        name: '马塞卢',
        country: '莱索托',
        note: '南非周边内陆国家目的地。',
      },
      {
        code: 'MPM',
        name: '马普托',
        country: '莫桑比克',
        note: '南部非洲港口城市，需结合货物尺寸和二程安排确认路径。',
      },
      {
        code: 'WDH',
        name: '温得和克',
        country: '纳米比亚',
        note: '纳米比亚首都及矿业项目目的地。',
      },
      {
        code: 'GBE',
        name: '哈博罗内',
        country: '博茨瓦纳',
        note: '南部非洲内陆市场，矿业相关需求常见。',
      },
    ],
  },
  {
    hub: { code: 'WDH', name: '温得和克', country: '纳米比亚' },
    viaText: '经温得和克延伸纳米比亚港口城市',
    destinations: [
      {
        code: 'WVB',
        name: '沃尔维斯湾',
        country: '纳米比亚',
        note: '港口城市，经温得和克延伸，适合矿业和工程项目。',
      },
    ],
  },
]

const routeCards = [
  {
    title: '中国起运 -> LGG -> B747F直飞非洲点',
    text: '适合JNB、LUN、EBB、NBO、LOS、ACC等有全货机主甲板能力的重点机场。',
  },
  {
    title: '中国起运 -> LGG -> 非洲Hub -> 卡车中转',
    text: '适合FBM、KGL、CPT、DUR、WDH、ABJ、FIH等国内直飞难做、但可以通过非洲Hub延伸的内陆点。',
  },
]

const customerTypes = [
  '中国货代同行：客户有非洲大件需求，但国内直飞没有可执行方案',
  '设备工厂和外贸公司：货物尺寸、重量、时效都卡住，需要先判断路线是否成立',
  '项目物流团队：矿山、工厂、工程设备需要从中国快速进非洲',
  '采购代理和供应链公司：要给非洲买家一个能解释清楚的运输路径',
]

const process = [
  {
    icon: PackageCheck,
    title: '先判断货能不能飞',
    text: '看尺寸、重量、包装、吊点、照片、机场限制，不先报虚价。',
  },
  {
    icon: Plane,
    title: '中国段先飞LGG',
    text: '国内没有直飞方案时，先设计中国到LGG的可执行出运路径。',
  },
  {
    icon: FileCheck2,
    title: 'LGG中转衔接',
    text: '处理欧洲中转交接、文件、仓库操作、组板和二程准备。',
  },
  {
    icon: Truck,
    title: '非洲段直飞或卡车延伸',
    text: '通过B747F直飞非洲点，或经ACC、LOS、NBO、EBB、JNB、WDH等Hub卡车中转。',
  },
]

export default function LggAfricaGatewayZhPage() {
  return (
    <main className="min-h-screen bg-white text-textPrimary">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,166,35,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.35) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28">
          <a href="/" className="mb-10 inline-flex items-center text-sm text-amberGold hover:text-white">
            返回 EASCargo 首页
          </a>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-medium text-amberGold">
              <MapPinned className="h-4 w-4" />
              LGG欧洲中转非洲大件空运网络
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              国内没有直飞方案？
              <span className="block text-amberGold">用LGG把非洲大件路线做出来。</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              面向中国货代、工厂和外贸公司：当超限大件无法从国内直飞非洲时，
              先飞LGG，再衔接B747F直飞非洲点或非洲Hub卡车中转。
              覆盖JNB、FBM、LUN、EBB、NBO、LOS、ACC及30+内陆目的地。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:globegsa@Gmail.com?subject=LGG%E9%9D%9E%E6%B4%B2%E4%B8%AD%E8%BD%AC%E5%A4%A7%E4%BB%B6%E8%AF%A2%E4%BB%B7"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950 transition hover:bg-amberGold/90"
              >
                发送货物资料
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#network"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-amberGold hover:text-amberGold"
              >
                查看覆盖点
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">为什么选择这条路线</p>
            <h2 className="mb-5 text-3xl font-bold text-slate-950 md:text-4xl">
              不是和全球大公司抢品牌，而是把复杂路线讲清楚、做出来。
            </h2>
            <p className="text-lg leading-8 text-textSecondary">
              大型全球货代更适合标准化、规模化的常规货。真正卡住中文区客户的，往往是尺寸超限、国内无直飞、
              二程衔接和目的地落地不确定。这个页面先解决“能不能飞、走哪个Hub、风险在哪里、资料怎么准备”，
              让工厂、贸易商和中国货代先看懂路线，再判断成本和时效。
            </p>
          </div>
          <div className="grid gap-4">
            {routeCards.map((route) => (
              <div key={route.title} className="rounded-lg border border-borderLight bg-surface p-6">
                <div className="mb-3 flex items-center gap-3 text-lg font-semibold text-slate-950">
                  <Plane className="h-5 w-5 text-amberGold" />
                  {route.title}
                </div>
                <p className="leading-7 text-textSecondary">{route.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="network" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">覆盖网络</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              不只看机场代码，要看这个点在非洲网络里的作用。
            </h2>
            <p className="mt-4 text-lg leading-8 text-textSecondary">
              下面把常见机场代码翻译成中文，并说明每个点更像“入口机场”“项目货目的地”还是“二程延伸节点”。
              实际是否可操作，还要按货物尺寸、重量、承运人当期舱位和目的地清关条件确认。
            </p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-lg border border-borderLight bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Plane className="h-6 w-6 text-amberGold" />
                <h3 className="text-xl font-semibold text-slate-950">LGG B747F直飞点：先把货送到非洲主入口</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {directFlightDestinations.map((destination) => (
                  <div key={destination.code} className="rounded-lg bg-slate-50 p-4">
                    <div className="mb-1 text-base font-semibold text-slate-950">
                      {destination.code} - {destination.name}
                    </div>
                    <div className="mb-3 text-sm font-medium text-amberGold">{destination.country}</div>
                    <p className="text-sm leading-6 text-textSecondary">{destination.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-borderLight bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Waypoints className="h-6 w-6 text-amberGold" />
                <h3 className="text-xl font-semibold text-slate-950">经非洲Hub卡车中转：解决内陆点和非直达点</h3>
              </div>
              <div className="grid gap-5 lg:grid-cols-2">
                {truckTransferGroups.map((group) => (
                  <div key={group.hub.code} className="rounded-lg bg-slate-50 p-5">
                    <div className="mb-2 text-base font-semibold text-slate-950">
                      经 {group.hub.name}（{group.hub.code}，{group.hub.country}）中转
                    </div>
                    <p className="mb-4 text-sm leading-6 text-textSecondary">{group.viaText}</p>
                    <div className="space-y-3">
                      {group.destinations.map((destination) => (
                        <div key={`${group.hub.code}-${destination.code}`} className="border-t border-borderLight pt-3">
                          <div className="text-sm font-semibold text-slate-950">
                            {destination.code} - {destination.name}（{destination.country}）
                          </div>
                          <p className="mt-1 text-sm leading-6 text-textSecondary">{destination.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">适合谁</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              不是普通空运价，是“没方案时的方案”。
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {customerTypes.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                <p className="leading-7 text-textSecondary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">操作路径</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            先判断路线成立，再谈价格。
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="rounded-lg border border-borderLight p-6">
                <Icon className="mb-5 h-8 w-8 text-amberGold" />
                <h3 className="mb-3 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="text-sm leading-7 text-textSecondary">{step.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">询价资料</p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">不要只问“几块钱一公斤”。先把货物说清楚。</h2>
            <p className="text-lg leading-8 text-slate-300">
              发货物尺寸、毛重、件数、包装照片、起运城市、目的机场或城市、备货时间、最晚到货时间。
              我会先判断国内直飞是否可能；如果不现实，再给LGG中转和非洲Hub延伸方案。
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">请至少提供</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>品名，最好有HS Code</li>
              <li>尺寸、重量、件数、是否可叠放</li>
              <li>包装照片、吊点、重心或特殊装卸要求</li>
              <li>中国起运城市、非洲目的机场或内陆城市</li>
              <li>备货时间和最晚到货时间</li>
            </ul>
            <a
              href="mailto:globegsa@Gmail.com?subject=LGG%E9%9D%9E%E6%B4%B2%E4%B8%AD%E8%BD%AC%E5%A4%A7%E4%BB%B6%E8%AF%A2%E4%BB%B7"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950 transition hover:bg-amberGold/90"
            >
              发送询价资料
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
