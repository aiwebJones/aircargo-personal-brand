import type { Metadata } from 'next'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  FileCheck2,
  Globe2,
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
    canonical: 'https://www.eascargo.com/',
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: 'LGG欧洲中转非洲大件空运网络',
    description:
      '国内无法直飞非洲的大件项目货，先飞LGG，再通过B747F直飞或非洲Hub卡车中转覆盖主要非洲点。',
    url: 'https://www.eascargo.com/',
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

const memberships = ['WCA', 'IATA', 'JCtrans', 'OLO', 'GLA', 'WIFFA']

const ownedCaseStudies = [
  {
    route: '中国 -> LGG/BRU -> LBV 利伯维尔',
    title: '8米长大件，经欧洲联运到加蓬',
    cargo: '单件约8米长，需按全货机主甲板和开鼻门装载逻辑评估。',
    solution: '中国段先飞欧洲LGG/BRU，再衔接B747F全货机飞往LBV，重点控制欧洲中转交接、板型、开鼻门装载窗口和目的地文件。',
    result: '对比某全球货代方案，整体成本节省接近20万人民币，同时把“国内无直飞”的路线做成可执行方案。',
  },
  {
    route: '中国 -> LGG/BRU -> JNB 约翰内斯堡',
    title: '矿山急件经欧洲中转到南非',
    cargo: '矿山维修备件、泵类、电机和控制柜类货物，单件重量和包装尺寸经常超过普通客机可操作边界。',
    solution: '先做停产风险排序，再确认中国段可出运窗口、欧洲中转交接时间、JNB到港提货和二程配送条件。',
    result: '把客户最关心的“能不能赶上检修窗口”拆成装载、文件、航班、中转和目的地交付五个确认点。',
  },
  {
    route: '中国 -> LGG -> NBO/EBB -> 东非内陆',
    title: '工程项目设备进入东非内陆市场',
    cargo: '工程备件、发电机组、通讯设备、施工工具和紧急替换部件，目的地不一定是主机场。',
    solution: '经NBO或EBB作为东非入口，提前确认内陆卡车、边境文件、收货人资质和目的地卸货条件。',
    result: '避免只看机场代码报价，先把“主机场到最终工地”的二程路线和清关节点讲清楚。',
  },
  {
    route: '中国 -> 欧洲Hub -> FBM 卢本巴希',
    title: '铜钴矿区重型备件路线判断',
    cargo: '变压器、泵、液压部件、电气柜和矿山生产线备件，货值高、停产代价大、目的地内陆属性强。',
    solution: '把FBM当作矿区供应链节点处理，比较JNB/NBO/EBB等Hub延伸可能性，并提前核对收货人清关文件。',
    result: '客户能在报价前先知道：空运值不值得、哪段风险最高、哪些资料必须先补齐。',
  },
  {
    route: '中国 -> LGG/BRU -> LUN 卢萨卡',
    title: '赞比亚工业设备和备件空运',
    cargo: '化工泵、矿业备件、维修件和工厂设备，常见问题是包装、防潮、防震、文件和目的地提货节奏。',
    solution: '用欧洲中转解决主甲板装载和舱位问题，再把LUN目的地清关、税号资料、装箱单和商业发票提前列清。',
    result: '让工厂和贸易商知道，非洲项目货不是“发出去就完了”，到港文件和本地交接同样决定时效。',
  },
]

const publicMarketSignals = [
  {
    title: 'LUN 卢萨卡：工业设备和备件空运',
    summary:
      '适合工厂设备、化工泵、备件和矿业相关急件。重点不是普通运价，而是包装、防震、防潮、文件完整和中转时效稳定。',
    point: '卢萨卡是赞比亚工业和矿业项目的重要入口，货物到港后的文件、清关和提货节奏要提前确认。',
  },
  {
    title: 'JNB 约堡：矿业急件和南部非洲项目货有强时效压力',
    summary:
      '适合矿山备件、工程设备、发电机、泵类和维修急件。项目方真正担心的是停产损失，所以装载方案、固定绑扎和到港衔接要一起看。',
    point: 'JNB可以作为南部非洲主入口，再延伸到周边项目点，适合先做空运可行性判断。',
  },
  {
    title: 'FBM 卢本巴希：矿区逻辑决定大件需求长期存在',
    summary:
      '适合铜钴矿区相关设备、重型备件、变压器、发电机和工程物资。难点通常不在中国段，而在非洲入口、内陆转运和目的地交付。',
    point: 'FBM不是普通空运点，路线要从欧洲Hub、非洲Hub和卡车延伸一起设计。',
  },
  {
    title: '非洲矿业项目：重货不一定都走空运，但判断方法相同',
    summary:
      '有些矿业设备最终会走海运、多式联运或包机组合，但第一步都一样：先看尺寸、重量、重心、吊点、机场能力和二程节点。',
    point: '客户发来尺寸重量后，先判断能不能飞、从哪里中转、哪里会卡，再决定是否值得走空运。',
  },
]

const africaCountryProfiles = [
  {
    country: '南非',
    gateways: 'JNB 约翰内斯堡 / CPT 开普敦 / DUR 德班',
    people: '华人和中资企业较多，矿业、汽车、零售和工程供应链成熟。',
    cargo: '矿山备件、汽车零部件、机电设备、精密仪器和项目急件。',
    customs: '重视商业发票、装箱单、HS Code、进口商税务资料和货物申报一致性；二程到周边国家时要另看转运文件。',
  },
  {
    country: '赞比亚',
    gateways: 'LUN 卢萨卡 / 铜矿带方向',
    people: '中资矿业、工程和贸易客户活跃，项目货需求稳定。',
    cargo: '矿山设备、化工泵、发电机、变压器、维修备件。',
    customs: '矿业和工业设备要提前确认进口商资质、品名归类、装箱明细和目的地提货安排。',
  },
  {
    country: '刚果金',
    gateways: 'FBM 卢本巴希 / FIH 金沙萨',
    people: '矿区中资和贸易群体明显，铜钴矿相关供应链需求强。',
    cargo: '铜钴矿备件、重型设备、电气柜、工程车辆部件。',
    customs: '清关和内陆交付不确定性高，必须先确认收货人文件、目的地卸货能力和内陆段责任边界。',
  },
  {
    country: '加蓬',
    gateways: 'LBV 利伯维尔 / POG 让蒂尔港',
    people: '法语环境为主，中资工程、木材、能源项目常见。',
    cargo: '8米级超长件、油气设备、工程备件、项目物资。',
    customs: '法文文件沟通、目的地代理响应和特殊装卸资源要提前确认，超长件需先看机场地面操作能力。',
  },
  {
    country: '肯尼亚',
    gateways: 'NBO 内罗毕',
    people: '东非商业Hub，华人贸易和中资项目基础较好。',
    cargo: '通讯设备、工程设备、医疗器械、东非内陆转运货。',
    customs: '适合作为东非入口，但转往乌干达、卢旺达、南苏丹时要先确认转关和边境资料。',
  },
  {
    country: '乌干达',
    gateways: 'EBB 恩德培',
    people: '华人贸易、工程和项目型客户存在，常经东非网络衔接。',
    cargo: '工程设备、农业机械、通讯设备、项目备件。',
    customs: '内陆国家对到港后配送节奏敏感，需提前核对进口商资料、税号和最终交付城市。',
  },
  {
    country: '尼日利亚',
    gateways: 'LOS 拉各斯 / ABV 阿布贾 / PHC 哈科特港',
    people: '西非最大市场之一，华人贸易群体和工程需求明显。',
    cargo: '油气设备、消费品急件、工程机械、发电机和工厂备件。',
    customs: '清关文件、收货人资质、品名归类和目的港费用要提前讲清，避免客户只盯空运费。',
  },
  {
    country: '加纳',
    gateways: 'ACC 阿克拉',
    people: '英语区商业环境较友好，华人贸易和工程客户较多。',
    cargo: '工程设备、矿业备件、消费品、转运西非周边货。',
    customs: '适合作为西非入口之一，需提前确认是否本地清关还是继续转往周边国家。',
  },
  {
    country: '科特迪瓦',
    gateways: 'ABJ 阿比让',
    people: '西非法语区重要商业中心，华人和中资项目活跃。',
    cargo: '工程项目物资、农业加工设备、工业备件和贸易货。',
    customs: '法语文件沟通和本地代理配合很关键，货值、品名、HS Code和收货人资料要一致。',
  },
  {
    country: '坦桑尼亚',
    gateways: 'DAR 达累斯萨拉姆 / MWZ 姆万扎',
    people: '中资工程、贸易和东非区域供应链较多。',
    cargo: '工程设备、矿区备件、农业机械、港口转运货。',
    customs: 'DAR可作为港口和空运入口，内陆项目需提前确认最终交付城市、道路和卸货条件。',
  },
  {
    country: '莫桑比克',
    gateways: 'MPM 马普托',
    people: '能源、矿业和工程项目带动中资需求。',
    cargo: '能源设备、项目备件、工程机械和紧急维修件。',
    customs: '葡语环境，文件沟通和目的地代理能力要提前确认；部分货物可能更适合经JNB延伸。',
  },
  {
    country: '纳米比亚',
    gateways: 'WDH 温得和克 / WVB 沃尔维斯湾',
    people: '矿业、港口和工程项目中有中资参与。',
    cargo: '矿业设备、港口项目物资、工程备件。',
    customs: '市场体量不大但项目货明确，空运到WDH后是否转WVB等二程要提前拆清。',
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
              <a
                href="#cases"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-amberGold hover:text-amberGold"
              >
                查看大件案例
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

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">行业网络与资质</p>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                大件项目货靠的不是单点报价，而是全球代理网络和航司资源。
              </h2>
              <p className="text-lg leading-8 text-slate-300">
                我们长期参与国际货运代理网络和航空货运体系，能把中国段、欧洲中转段、非洲目的港代理、
                清关和二程配送放在同一张操作表里确认。
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {memberships.map((name) => (
                <div key={name} className="rounded-lg border border-white/10 bg-white/5 p-5">
                  <Award className="mb-4 h-7 w-7 text-amberGold" />
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-400">国际空运/货代网络会员资源</div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-500">
            注：会员身份和可用资源以公司当前有效资料为准；具体项目仍按航司、代理和目的国当期要求逐票确认。
          </p>
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
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">非洲国家情报</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              客户不只想知道机场代码，还想知道这个国家怎么做生意、怎么清关。
            </h2>
            <p className="mt-4 text-lg leading-8 text-textSecondary">
              下面不是法律意见，而是空运项目货前期判断清单：当地市场特点、华人/中资存在感、常见货型和清关注意点。
              具体税费、许可证和监管要求必须按HS Code、收货人资质和当地代理反馈逐票确认。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {africaCountryProfiles.map((item) => (
              <div key={item.country} className="rounded-lg border border-borderLight bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{item.country}</h3>
                    <p className="mt-1 text-sm font-medium text-amberGold">{item.gateways}</p>
                  </div>
                  <Globe2 className="h-6 w-6 flex-shrink-0 text-amberGold" />
                </div>
                <div className="space-y-3 text-sm leading-6 text-textSecondary">
                  <p>
                    <span className="font-semibold text-slate-950">人文/商务：</span>
                    {item.people}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-950">适合货型：</span>
                    {item.cargo}
                  </p>
                  <p>
                    <span className="font-semibold text-slate-950">清关注意：</span>
                    {item.customs}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">大件案例</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              客户最想看的不是口号，是这种货到底有没有做过。
            </h2>
            <p className="mt-4 text-lg leading-8 text-textSecondary">
              下面分两类：前面是我们实际操作过的非洲大件路线，后面是根据公开市场资料整理后的项目场景。
              页面不展示第三方外链，重点让客户看懂JNB、FBM、LUN这类非洲工业和矿业目的地为什么需要提前做路线判断。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {ownedCaseStudies.map((item) => (
              <div key={item.title} className="rounded-lg border border-borderLight bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex rounded-full bg-amberGold/10 px-3 py-1 text-sm font-semibold text-amberGold">
                  自有操作案例
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mb-5 text-sm font-semibold text-textSecondary">{item.route}</p>
                <div className="space-y-4 text-sm leading-7 text-textSecondary">
                  <div>
                    <span className="font-semibold text-slate-950">货物情况：</span>
                    {item.cargo}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-950">方案设计：</span>
                    {item.solution}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-950">结果：</span>
                    {item.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg bg-slate-950 p-6 text-white">
            <div className="mb-5 flex items-center gap-3">
              <PackageCheck className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">非洲项目场景拆解</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {publicMarketSignals.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-white/5 p-5"
                >
                  <h4 className="mb-2 font-semibold leading-6 text-white">{item.title}</h4>
                  <p className="text-sm leading-6 text-slate-300">{item.summary}</p>
                  <div className="mt-4 rounded-md bg-amberGold/10 p-3 text-sm leading-6 text-amberGold">
                    {item.point}
                  </div>
                </div>
              ))}
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
