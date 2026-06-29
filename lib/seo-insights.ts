export type SeoInsight = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  author: string
  image: string
  keywords: string[]
  template: 'static' | 'generated'
  audience: string[]
  angle: string
  sections: Array<{
    heading: string
    body: string[]
    bullets?: string[]
  }>
  checklist: string[]
  relatedRoutes: Array<{
    label: string
    href: string
  }>
  sources?: Array<{
    label: string
    href: string
  }>
}

const defaultAuthor = '神仙货运Jones'

export const seoInsights: SeoInsight[] = [
  {
    slug: 'ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky',
    title: '埃塞俄比亚航空特价：ACC/BKO/OUA/HRE/LUN/NIM/CKY 非洲空运怎么选？',
    excerpt:
      'ET 经 ADD 中转覆盖多个非洲项目点，适合小批量急件、矿业备件、工程物资和贸易补货。关键不是只看价格，而是先看目的国清关和二程交付。',
    date: '2026-05-21',
    readTime: '9 分钟',
    category: '航线情报',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['ET空运', 'ADD中转', '西非空运', '矿业备件'],
    template: 'static',
    audience: ['工厂', '贸易商', '非洲项目客户'],
    angle: 'ET/ADD 中转多点非洲空运的价格窗口和资料预判。',
    sections: [],
    checklist: [],
    relatedRoutes: [],
  },
  {
    slug: 'why-shippers-ignore-freight-brokers',
    title: '为什么客户不理货代？非洲大件项目货销售真正该怎么切入',
    excerpt:
      '客户不缺普通货代，客户缺能判断复杂异常票的人。不要卖价格，先卖路线可执行性、资料缺口和风险清单。',
    date: '2026-05-06',
    readTime: '10 分钟',
    category: '获客方法',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['非洲大件空运', '项目货路线诊断', '资料缺口清单', 'LGG/BRU'],
    template: 'static',
    audience: ['货代销售', '非洲项目货团队'],
    angle: '把普通报价销售切换成路线可执行性诊断。',
    sections: [],
    checklist: [],
    relatedRoutes: [],
  },
  {
    slug: 'africa-air-cargo-demand-2026-route-risk',
    title: '2026非洲空运需求增长但运力收紧：项目货询价该怎么判断？',
    excerpt:
      'IATA数据显示2026年非洲航司货运需求增长，但运力同比下降。对中国到非洲项目货来说，真正要提前判断的是舱位、主甲板、清关资料和二程交付。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '市场情报',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['2026非洲空运', '非洲空运需求', '非洲空运运力', 'Africa air cargo 2026'],
    template: 'generated',
    audience: ['中国工厂', '非洲项目采购', '货代同行', '矿业设备供应商'],
    angle: '把非洲空运增长和运力收紧，翻译成项目货询价前的路线判断动作。',
    sections: [
      {
        heading: '为什么 2026 年非洲空运更值得盯',
        body: [
          'IATA 2026 年 4 月航空货运数据里，非洲航司货运需求同比增长，但可用货运运力同比下降。这个组合对普通小货是价格波动，对项目货就是路线可执行性风险：舱位有，但不一定适合你的尺寸；需求在涨，但主甲板和目的地操作不一定同步增加。',
          '对中国到非洲的大件、矿业备件、能源设备和紧急维修件来说，市场热度不是直接利好。真正的利好，是客户更愿意为“能不能走、什么时候能到、哪里会卡”付费，而不是只压低每公斤价格。',
        ],
        bullets: ['需求增长', '运力收缩', '非洲目的地分化', '项目货更依赖预判'],
      },
      {
        heading: '不要把市场增长误读成每票货都好走',
        body: [
          '非洲空运增长说明货量和需求在上升，但项目货的瓶颈通常不在总市场，而在某一个具体环节：国内段能不能接、LGG/BRU 能不能中转、二程全货机能不能排上、JNB/FBM/LUN/LBV 到港后能不能清关和卸货。',
          '如果客户只问“现在非洲空运多少钱一公斤”，回答应该先转成判断问题：什么货、每件多大、去哪个机场、最终城市在哪里、最晚什么时候必须到、收货人能不能清。',
        ],
        bullets: ['客机腹舱限制', '全货机主甲板', '欧洲中转窗口', '目的地清关和卸货'],
      },
      {
        heading: '2026 年更适合做哪些内容和询盘承接',
        body: [
          'SEO 上，2026 年的非洲空运内容不能只写“价格上涨”“市场增长”。更应该写买家会搜索的具体问题：JNB 矿业急件怎么走，FBM 铜钴矿区备件需要什么资料，LUN 赞比亚工业设备怎么清关，LBV 长货为什么要经 LGG/BRU。',
          '成交上，销售回复也要从报价切到诊断。把市场变化变成客户能执行的清单：尺寸重量、HS Code、包装照片、吊点重心、进口商资料、最终交付城市、最晚到货时间。',
        ],
        bullets: ['机场代码专题', '矿业/能源/工业货专题', '清关资料清单', '超大件询价模板'],
      },
    ],
    checklist: ['目的机场和最终城市', '每件尺寸重量', '包装照片', 'HS Code和货值', '进口商资料', '是否需要主甲板', '是否可接受LGG/BRU中转', '最晚到货时间'],
    relatedRoutes: [
      { label: '非洲航线 Hub', href: '/africa-air-freight/' },
      { label: 'JNB 约翰内斯堡', href: '/africa-air-freight/jnb/' },
      { label: 'FBM 卢本巴希', href: '/africa-air-freight/fbm/' },
      { label: 'LGG/BRU 非洲中转', href: '/zh/lgg-africa-gateway/' },
    ],
    sources: [
      { label: 'IATA: Air Cargo Demand Up 4.0% in April 2026', href: 'https://www.iata.org/en/pressroom/2026-releases/05-28-air-cargo-demand-up-april-middle-east-disruption/' },
      { label: 'IATA: Air Cargo Market Analysis February 2026', href: 'https://www.iata.org/en/publications/economics/reports/air-cargo-market-analysis-february-2026/' },
    ],
  },
  {
    slug: 'eu-ics2-ens-lgg-bru-africa-transit-air-freight',
    title: 'LGG/BRU中转非洲大件：欧盟ICS2/ENS资料为什么会卡住空运？',
    excerpt:
      '中国货经LGG/BRU欧洲中转再飞非洲时，欧盟ICS2/ENS资料质量会影响放行、补料和装载节奏。项目货询价不能只看运价，必须提前准备品名、HS Code、收发货人和路线资料。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['ICS2 ENS空运', 'LGG BRU欧洲中转', '欧盟空运资料', '中国到非洲大件空运'],
    template: 'generated',
    audience: ['中国货代', '项目货工厂', '非洲贸易商', '欧洲中转操作团队'],
    angle: '把欧盟 ICS2/ENS 合规要求转化成中国到非洲经 LGG/BRU 中转的资料预审清单。',
    sections: [
      {
        heading: '为什么非洲货也会被欧盟资料规则影响',
        body: [
          '很多中国到非洲大件项目货不是直接飞非洲，而是先进入 LGG/BRU 等欧洲货运节点，再衔接全货机、包机或非洲二程。只要货物进入或经由欧盟安全监管链路，就不能把它当成“只是去非洲”的普通询价。',
          '欧盟 ICS2 是提前货物信息系统，要求相关经济运营方通过 Entry Summary Declaration（ENS）提交安全与安保数据。对经欧洲中转的空运项目货来说，资料质量会直接影响预审、补料、放行和中转节奏。',
        ],
        bullets: ['LGG/BRU 中转', 'ENS 预申报', '项目货资料预审', '非洲二程衔接'],
      },
      {
        heading: 'ICS2/ENS 对空运项目货的实际影响',
        body: [
          '欧盟官方说明，空运需要在装载前提交最低信息集，并在到达前提交完整 ENS。ENS 不完整或数据不准确时，海关可能拒绝申报，或要求补充资料、筛查高风险货物，甚至在风险处理完成前不允许装载。',
          '这对大件货的影响比普通小货更明显。大件项目货通常需要仓库交接、板位安排、地面设备、主甲板计划和二程窗口。如果 ENS 资料到最后一刻才补，延误的不是一份文件，而是整条 LGG/BRU 到非洲的衔接链。',
        ],
        bullets: ['预装载信息', '完整 ENS', '补料和风险 referral', '中转窗口延误'],
      },
      {
        heading: '客户询价时必须提前给什么',
        body: [
          '走 LGG/BRU 中转非洲的询盘，不能只发目的港和重量。品名必须具体，不能写泛泛的 parts、equipment、tools；HS Code、用途、材质、发货人、收货人、件数、包装、尺寸重量和路线信息都要尽早确认。',
          '销售动作上，应把 ICS2/ENS 变成资料清单，而不是拿来吓客户。客户越早给出完整资料，就越容易判断能不能接、在哪里中转、是否需要主甲板或 B747F、非洲到港后清关和二程有没有风险。',
        ],
        bullets: ['具体品名', 'HS Code 和用途', '收发货人资料', '尺寸重量和包装照片'],
      },
    ],
    checklist: ['具体英文品名', 'HS Code', '货物用途和材质', '发货人和收货人信息', '每件尺寸重量', '包装照片', '起运机场和欧洲中转点', '非洲目的机场和最终城市', '是否需要主甲板或包机'],
    relatedRoutes: [
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: 'LGG Africa Gateway', href: '/china-africa-oversized-cargo-via-europe/' },
      { label: '非洲航线 Hub', href: '/africa-air-freight/' },
      { label: '超大件询价清单', href: '/insights/oversized-air-freight-quote-checklist/' },
    ],
    sources: [
      { label: 'European Commission: Import Control System 2 (ICS2)', href: 'https://taxation-customs.ec.europa.eu/customs/customs-security/import-control-system-2_en' },
    ],
  },
  {
    slug: 'lithium-battery-equipment-africa-air-freight-2026',
    title: '带锂电池设备空运到非洲：2026 IATA 规则下询价前要准备什么？',
    excerpt:
      '无人机、电动工具、检测仪器、储能设备和带电矿业备件空运到非洲，不能只问价格。2026 IATA 锂电池规则要求更细，询价前要先确认 UN 编号、MSDS、电池配置、SOC、包装和目的地清关。',
    date: '2026-06-30',
    readTime: '13 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['锂电池空运非洲', 'UN3481空运', '带电设备空运', 'IATA锂电池2026'],
    template: 'generated',
    audience: ['带电设备工厂', '无人机和仪器出口商', '矿业设备供应商', '非洲项目采购'],
    angle: '把 2026 IATA 锂电池空运要求转成中国到非洲带电设备询价前的资料清单。',
    sections: [
      {
        heading: '带电设备不是普通空运',
        body: [
          '中国到非洲项目货里，越来越多货物自带锂电池或电池模块：无人机、检测仪器、电动工具、通信设备、矿业监测设备、医疗设备、储能组件。它们看起来像普通设备，实际订舱时可能被按危险品、受限货或需要额外资料处理。',
          'IATA 2026 锂电池指南把规则变化写得很清楚：包括小型锂电池货物的分类调整、钠离子电池新增规则，以及锂离子电池按不超过 30% 荷电状态运输的要求延伸到部分设备包装场景。客户询价时如果没有资料，价格就不是真价格。',
        ],
        bullets: ['无人机', '检测仪器', '电动工具', '通信设备', '矿业监测设备'],
      },
      {
        heading: '先判断 UN 编号和电池状态',
        body: [
          '带电设备询价的第一步不是问到 JNB、FBM、LUN 或 LBV 多少钱，而是先判断它到底是 UN3480、UN3481、UN3090、UN3091，还是 2026 规则里新增关注的钠离子电池相关条目。电池是单独出运、随设备包装、还是装在设备里，处理方式完全不同。',
          '如果客户只说“设备带一点电池”，很容易在交仓或航司审核时被退回。专业做法是提前收集 MSDS、UN38.3、产品照片、电池参数、包装方式、件数重量和是否可拆电池。',
        ],
        bullets: ['UN3480/UN3481', 'UN3090/UN3091', '钠离子电池', 'MSDS 和 UN38.3'],
      },
      {
        heading: '非洲目的地还要看清关和二程',
        body: [
          '带电设备到非洲不只卡在航司。JNB、NBO、LOS、ACC 这类成熟口岸和 FBM、LUN、LBV 等项目点，对文件、代理、清关、二程和现场交付的要求不同。电池类货物如果目的地代理没有提前确认，到了非洲再补资料会非常被动。',
          '销售上要把问题拆清楚：电池能不能飞、哪家航司接、是否需要 DG 申报、目的地能不能清、矿区或项目现场是否能接收。只有这些成立，报价才有意义。',
        ],
        bullets: ['航司接受能力', 'DG 申报', '目的地代理确认', '矿区或现场交付'],
      },
    ],
    checklist: ['MSDS', 'UN38.3', 'UN 编号', '电池类型和 Wh/Ah', '电池数量和是否内置', 'SOC 荷电状态', '包装照片', '品名和 HS Code', '目的机场和最终城市', '是否需要 DG 申报'],
    relatedRoutes: [
      { label: '非洲航线 Hub', href: '/africa-air-freight/' },
      { label: 'JNB 约翰内斯堡', href: '/africa-air-freight/jnb/' },
      { label: 'FBM 卢本巴希', href: '/africa-air-freight/fbm/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'IATA: Lithium Batteries', href: 'https://www.iata.org/en/programs/cargo/dgr/lithium-batteries/' },
    ],
  },
  {
    slug: 'dangerous-goods-chemical-air-freight-africa-checklist',
    title: '危险品/化工品空运到非洲：MSDS、UN编号和DGD资料怎么准备？',
    excerpt:
      '油漆、胶水、试剂、气雾剂、化工样品和带危险属性设备空运到非洲，先不要只问价格。询价前要确认 UN 编号、Proper Shipping Name、危险类别、包装等级、MSDS、DGD、标签和目的地清关能力。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['危险品空运非洲', '化工品空运非洲', 'MSDS空运', 'DGD危险品申报'],
    template: 'generated',
    audience: ['化工品出口商', '项目货工厂', '实验室试剂供应商', '非洲工程采购'],
    angle: '把 IATA DGR/DGD 要求转成非洲危险品空运询价前的资料预审动作。',
    sections: [
      {
        heading: '危险品询价不能先报价格',
        body: [
          '中国到非洲空运里，危险品不只是不明液体或化工品。油漆、胶水、固化剂、清洗剂、气雾剂、实验室试剂、磁性材料、带压力容器或带危险属性的设备，都可能触发危险品审核。',
          'IATA Dangerous Goods Regulations 用于危险品航空运输的分类、包装、标记、标签和文件要求。对销售来说，真正的第一步不是找最低价，而是判断这票货是否能按航空危险品要求被承运人接受。',
        ],
        bullets: ['油漆和胶水', '化工试剂', '气雾剂', '磁性材料', '压力容器'],
      },
      {
        heading: 'MSDS 不是唯一资料',
        body: [
          '很多客户只发一份 MSDS 就要求报价，但危险品空运通常还要核对 UN 编号、Proper Shipping Name、危险类别、包装等级、数量限制、包装说明、标签和是否需要 Shipper’s Declaration for Dangerous Goods（DGD）。',
          'IATA 对 DGD 的说明很直接：托运人需要准备表格，证明货物已经按 IATA DGR 进行包装、标签和申报。换句话说，如果客户连 UN 编号和危险类别都说不清，报价很容易在订舱后失效。',
        ],
        bullets: ['UN 编号', 'Proper Shipping Name', '危险类别', '包装等级', 'DGD'],
      },
      {
        heading: '非洲目的地还要提前确认接货能力',
        body: [
          '危险品到非洲的风险不只在起运机场。JNB、NBO、LOS、ACC 这类大口岸和 FBM、LUN、LBV、CKY 等项目点，目的港代理、清关资质、仓库接收、二程卡车和现场交付能力不同。',
          '对非洲项目货，专业回复应先拆四件事：货物分类是否清楚，航司是否接受，目的地能否清关，最后一公里能否合法安全交付。四件事成立后，再谈价格和时效。',
        ],
        bullets: ['航司接受能力', '目的地 DG 代理', '清关文件', '二程交付限制'],
      },
    ],
    checklist: ['MSDS', 'UN 编号', 'Proper Shipping Name', '危险类别', 'Packing Group', '包装规格和净重', 'DGD 是否可提供', '标签和唛头照片', 'HS Code', '目的机场和最终城市', '收货人清关资质'],
    relatedRoutes: [
      { label: '非洲航线 Hub', href: '/africa-air-freight/' },
      { label: 'LOS 拉各斯', href: '/africa-air-freight/los/' },
      { label: 'JNB 约翰内斯堡', href: '/africa-air-freight/jnb/' },
      { label: '带锂电池设备空运到非洲', href: '/insights/lithium-battery-equipment-africa-air-freight-2026/' },
    ],
    sources: [
      { label: 'IATA: Dangerous Goods Regulations', href: 'https://www.iata.org/en/publications/dgr/' },
      { label: 'IATA: DG Shipper’s Declaration and e-DGD', href: 'https://www.iata.org/en/programs/cargo/dgr/shippers-declaration/' },
      { label: 'ICAO: Doc 9284 Technical Instructions', href: 'https://www.icao.int/publications/doc-series/doc-9284' },
    ],
  },
  {
    slug: 'wood-packaging-ispm15-africa-air-freight',
    title: '木包装/熏蒸空运到非洲：ISPM 15为什么会影响大件项目货？',
    excerpt:
      '泵、电机、矿业备件、电气柜和长件设备空运到非洲，经常会用木箱、托盘、木架或垫木。ISPM 15标识、热处理/熏蒸证明和包装照片不清楚，可能在清关、查验和二程交付前就卡住。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['木包装熏蒸非洲空运', 'ISPM 15空运', '木箱空运非洲', '非洲大件木包装'],
    template: 'generated',
    audience: ['设备工厂', '矿业备件供应商', '非洲工程采购', '项目货货代'],
    angle: '把 ISPM 15 木包装要求转成非洲大件空运询价前的包装资料预审清单。',
    sections: [
      {
        heading: '为什么木包装会影响非洲空运',
        body: [
          '中国到非洲项目货里，泵、电机、阀门、变压器、电气柜、矿业备件和长件设备经常会用木箱、木托盘、木框架或垫木。客户通常以为木包装只是保护货物，但在国际贸易里，木包装本身也会触发植物检疫和目的地查验问题。',
          'IPPC 的 ISPM 15 针对国际贸易中的木质包装材料，核心是通过规定处理和标识降低有害生物传播风险。对空运销售来说，这不是一句“做了熏蒸”就结束，而是要在订舱前确认包装形式、标识、证明和目的地进口要求。',
        ],
        bullets: ['木箱', '木托盘', '木框架', '垫木和固定木方'],
      },
      {
        heading: '客户说有熏蒸，不等于资料可用',
        body: [
          '很多询盘只写“木箱包装，已熏蒸”，但没有包装照片、IPPC 标识照片、处理方式、证书或目的国进口商确认。这类资料不完整时，价格和时效都只能算初步判断。',
          '更稳的动作是让客户拍清楚木包装四周、IPPC mark、唛头、货物固定方式和是否有裸露原木垫木。USDA APHIS 对木包装材料的说明也强调按 ISPM 15 处理并认证，实际查验时标识是否清楚会影响判断。',
        ],
        bullets: ['IPPC mark 照片', '热处理或熏蒸证明', '包装全景照片', '木方/垫木是否遗漏'],
      },
      {
        heading: '非洲项目货要把清关和二程一起问',
        body: [
          'JNB、FBM、LUN、LOS、ACC、LBV 等非洲目的地的执行差异很大。木包装是否被接受、进口商是否能配合、到港后是否查验、矿区或项目现场是否能处理包装问题，都需要目的地代理提前确认。',
          '这类页面的成交价值不在解释法规，而在把客户的问题转成可执行清单：什么包装、什么标识、什么证书、谁负责目的地确认、如果木包装风险高能不能改成胶合板、金属架或其他非原木方案。',
        ],
        bullets: ['目的港代理确认', '进口商文件配合', '查验和仓储风险', '替代包装方案'],
      },
    ],
    checklist: ['包装照片', 'IPPC mark近照', '木包装类型', '热处理或熏蒸证明', '品名和HS Code', '目的机场和最终城市', '收货人/进口商确认', '是否有裸露垫木', '是否可改非原木包装', '最晚到货时间'],
    relatedRoutes: [
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '超大件询价清单', href: '/insights/oversized-air-freight-quote-checklist/' },
      { label: 'FBM 卢本巴希', href: '/africa-air-freight/fbm/' },
      { label: 'JNB 约翰内斯堡', href: '/africa-air-freight/jnb/' },
    ],
    sources: [
      { label: 'IPPC: ISPM 15 regulation of wood packaging material in international trade', href: 'https://www.ippc.int/en/publications/regulation-wood-packaging-material-international-trade-0/' },
      { label: 'USDA APHIS: Wood Packaging Material', href: 'https://www.aphis.usda.gov/plant-imports/wood-packaging-material' },
    ],
  },
  {
    slug: 'jnb-mining-spares-air-freight',
    title: 'JNB约翰内斯堡空运：南部非洲矿业急件怎么判断路线？',
    excerpt:
      'JNB不是一个普通目的港，它更像南部非洲项目货入口。矿山备件、工程设备、停产急件，要先判断装载、清关和二程。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '非洲国家',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['JNB约翰内斯堡空运', '南非矿业设备空运', '南部非洲项目货'],
    template: 'generated',
    audience: ['南非矿业供应商', '工程设备工厂', '贸易商'],
    angle: 'JNB 的价值是南部非洲入口判断，不是只报一个机场价。',
    sections: [
      {
        heading: 'JNB 适合什么货',
        body: [
          'JNB 适合南非本土项目货，也常作为南部非洲中转入口。矿山备件、工程设备、汽车零部件、工厂维修件和高价值急件，通常不是单纯比每公斤价格，而是比谁能把停产窗口、清关资料和二程交付讲清楚。',
          '如果客户最终目的地在矿区、工厂或内陆城市，JNB 到港只是方案的一段。真正要提前判断的是机场地面操作、收货人进口资料、目的港费用、卡车交付和现场卸货责任。',
        ],
        bullets: ['矿山停产急件', '工程设备备件', '南非内陆工厂交付', '需要主甲板或欧洲中转的大件货'],
      },
      {
        heading: '报价前先排除的风险',
        body: [
          'JNB 询价最常见的误区，是客户只给总重量，不给单件尺寸、包装照片、重心和吊点。对大件空运来说，能不能装比价格更早决定方案是否成立。',
          '另一个误区是只看机场到机场。南非市场相对成熟，但目的地预约、清关代理响应、税号资料和最终交付城市，都会影响真实到货时间。',
        ],
        bullets: ['单件尺寸和包装高度', '进口商 VAT/税务资料', '是否需要 CPT/DUR 替代入口', '矿区卸货和卡车预约'],
      },
    ],
    checklist: ['品名和 HS Code', '每件长宽高和毛重', '包装照片和吊点', '最终城市或矿区地址', '最晚到货时间', '收货人进口资料'],
    relatedRoutes: [
      { label: 'JNB 航线页', href: '/africa-air-freight/jnb/' },
      { label: 'CPT 开普敦', href: '/africa-air-freight/cpt/' },
      { label: 'DUR 德班', href: '/africa-air-freight/dur/' },
    ],
  },
  {
    slug: 'fbm-copperbelt-mining-equipment-air-freight',
    title: 'FBM卢本巴希：铜钴矿区大件空运为什么不能只问价格？',
    excerpt:
      '卢本巴希背后是刚果金铜钴矿区。重型备件、变压器、泵类和电气柜要把欧洲Hub、非洲Hub和内陆交付一起设计。',
    date: '2026-06-30',
    readTime: '13 分钟',
    category: '非洲国家',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['FBM卢本巴希空运', '刚果金矿业设备空运', '铜钴矿区备件空运'],
    template: 'generated',
    audience: ['矿业设备供应商', '刚果金项目承包商', '非洲贸易商'],
    angle: 'FBM 的成交点是矿区停产风险控制，不是普通空运低价。',
    sections: [
      {
        heading: 'FBM 背后是矿业供应链',
        body: [
          'FBM 卢本巴希不是普通贸易口岸，它连接刚果金铜钴矿区。泵、电机、变压器、电气柜、输送设备和维修备件一旦晚到，客户损失通常不是几百公斤空运费，而是生产停摆。',
          '所以 FBM 空运必须把航段、清关、地面装卸和矿区二程一起判断。客户只问价格时，先把风险边界讲清楚，反而更容易建立信任。',
        ],
        bullets: ['铜钴矿区备件', '停产维修急件', '欧洲 Hub 转运', '矿区现场交付'],
      },
      {
        heading: 'FBM 询价资料不能省',
        body: [
          'FBM 项目货要提前确认法语资料、HS Code、发票箱单、收货人清关能力、目的地代理和最终矿区交付条件。只给一个机场代码，无法判断路线是否可执行。',
          '重货和长货还要提前核实地面叉车、吊车、卸货方向、包装强度和是否需要经 LGG/BRU 做主甲板或全货机衔接。',
        ],
        bullets: ['法语品名描述', '收货人和代理确认', '矿区卸货条件', '二程费用边界'],
      },
    ],
    checklist: ['用途和材质', 'HS Code', '尺寸重量', '包装照片', '矿区或仓库地址', '清关责任', '卸货设备'],
    relatedRoutes: [
      { label: 'FBM 航线页', href: '/africa-air-freight/fbm/' },
      { label: 'FIH 金沙萨', href: '/africa-air-freight/fih/' },
      { label: 'LGG/BRU 中转', href: '/zh/lgg-africa-gateway/' },
    ],
  },
  {
    slug: 'lun-zambia-industrial-air-freight-guide',
    title: 'LUN卢萨卡：赞比亚工业设备和矿业备件空运指南',
    excerpt:
      '赞比亚项目货常见于矿业、工业设备和维修备件。重点是包装、防潮、防震、文件一致和目的地提货节奏。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '非洲国家',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['LUN卢萨卡空运', '赞比亚矿业备件空运', '中国到赞比亚空运'],
    template: 'generated',
    audience: ['赞比亚矿业供应商', '工业设备工厂', '工程项目采购'],
    angle: 'LUN 重点是文件一致、包装保护和最终交付节奏。',
    sections: [
      {
        heading: 'LUN 常见货物场景',
        body: [
          'LUN 卢萨卡常见于赞比亚矿业、工厂、化工、能源和基础设施项目。泵、电机、发电机、阀门、电气柜、维修备件和小批量高价值急件，都适合先做空运可行性判断。',
          '赞比亚沟通通常可以用英文推进，但项目货仍然不能只看航班。最终目的地如果不在卢萨卡，卡车、卸货、现场预约和清关节奏要提前拆分。',
        ],
        bullets: ['矿业维修备件', '工业泵和电机', '能源项目设备', '工厂停产急件'],
      },
      {
        heading: 'LUN 报价要看总交付',
        body: [
          '一票赞比亚项目货是否成功，取决于起运、空运、中转、目的港清关和最终提货的连续性。客户只问空运费时，容易忽略进口商资料、许可证、包装照片和最终城市。',
          '如果货物防潮、防震、不可倒置或单件较重，要提前把包装和卸货方式写入操作说明，避免到港后才发现不能安全交付。',
        ],
        bullets: ['进口商资料', '许可证可能性', '防潮防震包装', '最终城市交付'],
      },
    ],
    checklist: ['品名用途', 'HS Code', '发票箱单', '尺寸重量', '包装照片', '是否防潮防震', '最终城市'],
    relatedRoutes: [
      { label: 'LUN 航线页', href: '/africa-air-freight/lun/' },
      { label: 'ET 非洲空运', href: '/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/' },
      { label: 'NBO 东非 Hub', href: '/africa-air-freight/nbo/' },
    ],
  },
  {
    slug: 'lbv-gabon-8-meter-cargo-via-lgg-bru',
    title: 'LBV利伯维尔8米长货：国内无直飞时如何经LGG/BRU做出来？',
    excerpt:
      '8米长件不是普通空运。要先看开鼻门、主甲板、欧洲中转交接、LBV到港文件和现场装卸。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '大件案例',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['LBV利伯维尔空运', '加蓬超长货空运', 'B747F开鼻门装载'],
    template: 'generated',
    audience: ['油气项目客户', '工程设备工厂', '大件货代同行'],
    angle: 'LBV 长货案例用来证明复杂货的路线判断能力。',
    sections: [
      {
        heading: '8 米长货先判断能不能装',
        body: [
          'LBV 利伯维尔适合油气、能源、工程和中非项目货。8 米左右的长件不能按普通空运思路处理，必须先看飞机门、主甲板、重心、吊点、包装高度和装卸方向。',
          '国内没有直飞大件方案时，可以先判断中国到 LGG/BRU 的出口段，再从欧洲衔接 B747F 或适合的全货机进入非洲。',
        ],
        bullets: ['长货门高限制', 'B747F 主甲板', 'LGG/BRU 欧洲交接', 'LBV 地面操作'],
      },
      {
        heading: 'LBV 的难点在目的地',
        body: [
          '路线能飞只是第一关。LBV 到港后还要确认法语文件、收货人清关能力、地面卸货设备、卡车进入条件和最终现场交付。',
          '对客户来说，这类货最怕拿到一个看起来便宜的价格，最后发现欧洲接不上、非洲卸不了、清关资料不一致。先做路线拆解，才是节省成本的方式。',
        ],
        bullets: ['法语文件', '目的地卸货工具', '卡车进入条件', '现场交付窗口'],
      },
    ],
    checklist: ['单件长度', '包装高度', '重心和吊点', '是否可倾斜', '装卸照片', '目的地卸货条件', '最晚到货时间'],
    relatedRoutes: [
      { label: 'LBV 航线页', href: '/africa-air-freight/lbv/' },
      { label: 'LGG Africa Gateway', href: '/china-africa-oversized-cargo-via-europe/' },
      { label: '非洲大件 Hub', href: '/africa-air-freight/' },
    ],
  },
  {
    slug: 'africa-customs-documents-checklist-air-freight',
    title: '非洲空运清关资料清单：工厂和贸易商最容易漏什么？',
    excerpt:
      '商业发票、装箱单、HS Code、进口商资质、许可证、木包装、原产地和目的港费用，任何一项都可能卡住。',
    date: '2026-06-30',
    readTime: '16 分钟',
    category: '清关指南',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['非洲空运清关资料', '非洲进口清关', 'HS Code空运'],
    template: 'generated',
    audience: ['出口工厂', '外贸公司', '非洲进口商'],
    angle: '用资料清单吃下“非洲清关会不会卡”的搜索流量。',
    sections: [
      {
        heading: '非洲清关不能一套资料打天下',
        body: [
          '非洲空运最容易被低估的不是飞行时间，而是清关资料。商业发票、装箱单、合同、HS Code、货值、币种、收货人进口资质、许可证、木包装和原产地，任何一项不一致都可能拖慢提货。',
          '对大件货、二手设备、带电设备、医疗器械、化工相关产品和矿业设备，资料审核通常更严格。报价前就要把资料缺口列出来。',
        ],
        bullets: ['发票箱单一致', 'HS Code 与品名一致', '进口商资质', '许可证或监管要求'],
      },
      {
        heading: '目的港费用要提前讲清',
        body: [
          '很多客户只问空运费，到了非洲目的港才发现仓储、地面操作、清关代理、查验、卡车和卸货都可能产生费用。',
          '销售上不要回避这些费用。越早讲清楚费用边界，越能过滤低质量询盘，也越容易拿到真正有预算的项目客户。',
        ],
        bullets: ['到港杂费', '仓储和查验', '清关代理', '二程卡车和卸货'],
      },
    ],
    checklist: ['商业发票', '装箱单', 'HS Code', '合同', '货值币种', '进口商资料', '许可证', '包装照片', '木包装证明'],
    relatedRoutes: [
      { label: '非洲航线 Hub', href: '/africa-air-freight/' },
      { label: 'LOS 尼日利亚', href: '/africa-air-freight/los/' },
      { label: 'FBM 刚果金', href: '/africa-air-freight/fbm/' },
    ],
  },
  {
    slug: 'china-africa-via-europe-lgg-bru-transit',
    title: '中国到非洲大件为什么要经欧洲？LGG/BRU中转逻辑讲透',
    excerpt:
      '国内没有直飞方案时，欧洲不是绕路，而是把主甲板、全货机、开鼻门和非洲二程重新组合。',
    date: '2026-06-30',
    readTime: '15 分钟',
    category: '航线方案',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['LGG BRU欧洲中转', '中国到非洲大件空运', 'B747F非洲空运'],
    template: 'generated',
    audience: ['大件项目客户', '中国货代同行', '非洲工程采购'],
    angle: '把欧洲中转从“绕路”解释成“大件可执行性工具”。',
    sections: [
      {
        heading: '欧洲中转不是为了绕远',
        body: [
          '很多中国到非洲大件询价失败，是因为国内直飞没有门高、板位、主甲板或目的地承接能力。LGG/BRU 的作用，是把中国段、欧洲仓库交接、全货机二程和非洲 Hub 重新组合。',
          '对超长、超重、超高、不可倒置或目的地难落地的货物，先飞欧洲再进非洲，有时比硬找直飞更可执行，也更容易控制风险。',
        ],
        bullets: ['中国段出口', '欧洲仓库交接', 'B747F 或包机', '非洲 Hub 二程'],
      },
      {
        heading: '什么时候值得考虑 LGG/BRU',
        body: [
          '当客机腹舱不能装、常规货机不接、目的地无稳定大件舱位、或客户有明确项目节点时，就应该先判断欧洲中转方案。',
          '这不是每票货都适合。普通小货可能直接走航司网络更好。欧洲中转真正适合的是标准空运解决不了的异常票。',
        ],
        bullets: ['单件超长', '需要主甲板', '目的地承接弱', '项目节点紧'],
      },
    ],
    checklist: ['尺寸重量', '包装方式', '是否可倒置', '起运机场', '目的地机场', '欧洲交接窗口', '非洲二程需求'],
    relatedRoutes: [
      { label: 'LGG Africa Gateway', href: '/china-africa-oversized-cargo-via-europe/' },
      { label: '中文 LGG/BRU 网络', href: '/zh/lgg-africa-gateway/' },
      { label: 'LBV 长货', href: '/africa-air-freight/lbv/' },
    ],
  },
  {
    slug: 'nigeria-los-air-freight-customs-risk',
    title: '尼日利亚LOS/ABV/PHC：西非大市场空运要注意什么？',
    excerpt:
      '尼日利亚需求大，但清关、收货人资质、目的港费用和油气项目要求都要提前讲清。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '非洲国家',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['LOS拉各斯空运', '尼日利亚空运清关', '中国到尼日利亚空运'],
    template: 'generated',
    audience: ['尼日利亚进口商', '油气设备供应商', '贸易补货客户'],
    angle: '尼日利亚流量要用“落地风险”转化，而不是只讲大市场。',
    sections: [
      {
        heading: '尼日利亚询价先看清关',
        body: [
          'LOS 拉各斯适合工厂设备、油气备件、电气产品、贸易补货和高价值急件。但尼日利亚不能只看航班，进口商资料、监管文件、目的港费用和本地代理会直接影响真实交付。',
          'ABV 和 PHC 也有项目场景，但是否适合直达或转运，要看最终城市、货物属性和清关责任。',
        ],
        bullets: ['油气设备', '工厂备件', '贸易补货', '高价值急件'],
      },
      {
        heading: '报价要拆成落地成本',
        body: [
          '尼日利亚客户经常对价格敏感，但便宜空运费不等于低落地成本。SONCAP 或其他监管要求、Form M 场景、HS Code、发票货值和目的地费用，都要在出运前确认。',
          '这类询盘适合用清单式回复：什么已包含，什么未包含，收货人必须准备什么，哪些费用需要当地确认。',
        ],
        bullets: ['监管文件', 'Form M 场景', '目的港费用', '当地代理确认'],
      },
    ],
    checklist: ['品名用途', 'HS Code', '发票货值', '进口商资料', '监管文件', '目的港费用边界', '最终城市'],
    relatedRoutes: [
      { label: 'LOS 航线页', href: '/africa-air-freight/los/' },
      { label: 'ACC 加纳', href: '/africa-air-freight/acc/' },
      { label: 'ABJ 科特迪瓦', href: '/africa-air-freight/abj/' },
    ],
  },
  {
    slug: 'ghana-acc-ivory-coast-abj-west-africa-air-freight',
    title: '加纳ACC与科特迪瓦ABJ：西非英语区/法语区入口怎么选？',
    excerpt:
      'ACC和ABJ都是西非重要入口，但语言、代理网络、清关沟通和二程方向不同。',
    date: '2026-06-30',
    readTime: '10 分钟',
    category: '非洲国家',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['ACC阿克拉空运', 'ABJ阿比让空运', '西非空运'],
    template: 'generated',
    audience: ['西非贸易客户', '工程项目供应商', '货代同行'],
    angle: '用英语区/法语区入口判断承接西非长尾搜索。',
    sections: [
      {
        heading: 'ACC 和 ABJ 不是替代关系',
        body: [
          'ACC 阿克拉适合加纳和部分英语区西非贸易、矿业、医疗和工程货。ABJ 阿比让更适合法语区西非项目货和周边市场延伸。',
          '客户询价时不要只问哪个机场便宜，而要看最终国家、收货人语言、清关代理、二程方向和目的地费用。',
        ],
        bullets: ['ACC 英语区沟通', 'ABJ 法语区项目', '矿业和工程货', '周边国家延伸'],
      },
      {
        heading: '语言和文件会影响效率',
        body: [
          '西非法语区的资料翻译不能随便处理。品名、用途、材质、HS Code、发票和箱单要一致，否则到港沟通成本会变高。',
          '对中国工厂来说，最好的方式是把中文技术信息、英文贸易文件和法语目的地沟通提前对齐。',
        ],
        bullets: ['品名翻译', 'HS Code 一致', '代理沟通', '二程费用边界'],
      },
    ],
    checklist: ['最终国家', '语言要求', 'HS Code', '收货人资料', '目的地费用', '是否需要二程', '包装照片'],
    relatedRoutes: [
      { label: 'ACC 航线页', href: '/africa-air-freight/acc/' },
      { label: 'ABJ 航线页', href: '/africa-air-freight/abj/' },
      { label: 'BKO 马里', href: '/africa-air-freight/bko/' },
    ],
  },
  {
    slug: 'oversized-air-freight-quote-checklist',
    title: '超大件空运询价清单：发尺寸重量之前先准备这12项',
    excerpt:
      '只发一个重量没用。超大件要看长宽高、单件毛重、包装、重心、吊点、照片、可否叠放和卸货条件。',
    date: '2026-06-30',
    readTime: '9 分钟',
    category: '清关指南',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['超大件空运询价', '大件空运价格', '空运尺寸重量清单'],
    template: 'generated',
    audience: ['工厂业务员', '货代销售', '项目采购'],
    angle: '把低质量询盘转成可报价资料收集页。',
    sections: [
      {
        heading: '为什么只发重量没用',
        body: [
          '普通空运可以先估重量，但超大件空运必须看单件长宽高、包装高度、毛重、重心、吊点、叉车孔、是否可叠放、是否不可倒置和装卸照片。',
          '没有这些资料，任何价格都只是猜测。猜出来的低价，往往会在订舱、交仓、装机或目的地卸货时变成问题。',
        ],
        bullets: ['单件尺寸', '包装照片', '重心和吊点', '装卸方向'],
      },
      {
        heading: '资料越完整，报价越快',
        body: [
          '对真正有项目节点的客户，最好的沟通方式不是来回问零散问题，而是一次性发完整清单。这样可以快速判断直飞、欧洲中转、全货机、包机或非洲 Hub 二程是否成立。',
          '这张清单也能过滤掉只想套价的询盘，把时间留给有真实货物和真实截止日期的客户。',
        ],
        bullets: ['起运地', '目的城市', '备货时间', '最晚到货时间'],
      },
    ],
    checklist: ['品名', 'HS Code', '件数', '每件尺寸', '每件毛重', '包装照片', '是否可叠放', '重心/吊点', '货值', '起运城市', '目的城市', '最晚到货时间'],
    relatedRoutes: [
      { label: '非洲大件 Hub', href: '/africa-air-freight/' },
      { label: 'LGG/BRU 中转', href: '/zh/lgg-africa-gateway/' },
      { label: 'LBV 长货', href: '/africa-air-freight/lbv/' },
    ],
  },
  {
    slug: 'east-africa-nbo-ebb-dar-project-cargo',
    title: '东非NBO/EBB/DAR：肯尼亚、乌干达、坦桑尼亚项目货入口',
    excerpt:
      '东非不是一个点，NBO、EBB、DAR分别适合不同的清关、转运和项目交付逻辑。',
    date: '2026-06-30',
    readTime: '13 分钟',
    category: '非洲国家',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['NBO内罗毕空运', 'EBB恩德培空运', 'DAR坦桑尼亚空运'],
    template: 'generated',
    audience: ['东非项目客户', '通讯设备供应商', '工程货工厂'],
    angle: '用 NBO/EBB/DAR 三点对比承接东非区域搜索。',
    sections: [
      {
        heading: '东非要按最终交付点判断',
        body: [
          'NBO 内罗毕适合作为肯尼亚和东非区域 Hub，EBB 恩德培适合乌干达入口，DAR 达累斯萨拉姆适合坦桑尼亚工业和项目货。三个点都能做空运，但不是同一个解法。',
          '最终城市、是否跨境、收货人清关能力、边境文件、道路条件和卸货设备，决定哪个入口更合适。',
        ],
        bullets: ['NBO 区域 Hub', 'EBB 乌干达入口', 'DAR 坦桑尼亚项目', '跨境二程'],
      },
      {
        heading: '适合哪些项目货',
        body: [
          '东非常见货物包括通讯设备、医疗器械、农业机械、工程设备、工厂备件和紧急维修件。小批量高价值货可以直接看航司网络，大件或异常票要先判断欧洲中转和主甲板能力。',
          '如果客户只给国家名，不给最终城市，报价会很容易偏离实际交付成本。',
        ],
        bullets: ['通讯设备', '医疗器械', '农业机械', '工程备件'],
      },
    ],
    checklist: ['最终城市', '是否跨境', '尺寸重量', '进口商资料', '许可证', '卸货条件', '时效要求'],
    relatedRoutes: [
      { label: 'NBO 内罗毕', href: '/africa-air-freight/nbo/' },
      { label: 'EBB 恩德培', href: '/africa-air-freight/ebb/' },
      { label: 'DAR 达累斯萨拉姆', href: '/africa-air-freight/dar/' },
    ],
  },
  {
    slug: 'freight-network-value-wca-iata-jctrans-africa',
    title: 'WCA/IATA/JCtrans等网络对非洲空运有什么实际价值？',
    excerpt:
      '会员牌子不是用来摆的，真正价值是快速找到目的港代理、验证清关能力、确认二程和降低信息差。',
    date: '2026-06-30',
    readTime: '8 分钟',
    category: '航线方案',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['WCA非洲代理', 'IATA空运代理', '非洲目的港代理'],
    template: 'generated',
    audience: ['项目客户', '货代同行', '非洲进口商'],
    angle: '把资质展示转成“目的港代理验证能力”的信任资产。',
    sections: [
      {
        heading: '会员网络的价值不是 Logo',
        body: [
          'WCA、IATA、JCtrans、OLO、GLA、WIFFA 这类网络的实际价值，不是把 Logo 放在网站上，而是在非洲目的地信息不透明时，快速找到可验证的代理、清关和二程资源。',
          '对 JNB、FBM、LUN、LBV、LOS、ACC、ABJ 等项目货来说，目的地代理能不能接，往往比起运地报价更关键。',
        ],
        bullets: ['代理验证', '清关能力', '二程资源', '异常票协作'],
      },
      {
        heading: '每票货仍要逐项确认',
        body: [
          '网络不能替代逐票判断。真正负责的做法，是每票货确认收货人资料、代理费用、卸货条件、二程责任、目的地风险和时效边界。',
          '客户买的不是会员身份，而是你能不能在出运前把目的地不确定性降下来。',
        ],
        bullets: ['费用边界', '责任分工', '卸货条件', '时效边界'],
      },
    ],
    checklist: ['目的机场', '最终城市', '代理能力', '清关责任', '二程费用', '卸货设备', '风险边界'],
    relatedRoutes: [
      { label: '非洲航线 Hub', href: '/africa-air-freight/' },
      { label: 'FBM 卢本巴希', href: '/africa-air-freight/fbm/' },
      { label: 'JNB 约翰内斯堡', href: '/africa-air-freight/jnb/' },
    ],
  },
]

export const generatedSeoInsights = seoInsights.filter((insight) => insight.template === 'generated')

export function getInsightBySlug(slug: string) {
  return seoInsights.find((insight) => insight.slug === slug)
}
