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
    slug: 'kenya-nbo-pvoc-idf-air-freight-documents',
    title: '肯尼亚NBO空运清关：PVoC/CoC和IDF为什么要提前确认？',
    excerpt:
      '中国到肯尼亚NBO空运，设备、备件、电子电器、太阳能组件和工业品不能只看航班。PVoC/CoC、IDF、HS Code、进口商资料和监管许可要在出运前判断，否则到JKIA后补资料会拖慢清关。',
    date: '2026-06-30',
    readTime: '13 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['肯尼亚PVOC空运', 'NBO清关资料', '肯尼亚IDF进口', '中国到肯尼亚空运清关'],
    template: 'generated',
    audience: ['肯尼亚进口商', '设备工厂', '太阳能和电气产品供应商', '东非项目货代'],
    angle: '把肯尼亚 PVoC/CoC 和 IDF 要求转成 NBO 空运询价前的资料预审清单。',
    sections: [
      {
        heading: 'NBO空运不是只看航班',
        body: [
          'NBO/JKIA 是东非项目货的重要入口，常见货物包括设备备件、电子电器、太阳能组件、医疗物资、工业耗材和紧急维修件。很多客户只问中国到内罗毕空运多少钱，但真正影响交付的是货物能不能顺利清关。',
          '肯尼亚 Bureau of Standards 的 PVoC 是针对发往肯尼亚货物在供应国/原产国进行的符合性评估程序，用来判断是否符合肯尼亚标准或认可规范。对销售来说，第一步不是承诺时效，而是先判断这票货是否可能需要 CoC、是否有进口商配合以及资料是否足够。',
        ],
        bullets: ['NBO/JKIA 到港清关', 'PVoC/CoC 判断', '进口商配合', '货物品类监管'],
      },
      {
        heading: 'IDF要在货物离港前处理',
        body: [
          'Kenya InfoTrade 的 IDF 程序页说明，进口商需要完成 Import Declaration Form，并声明进口货物真实准确的价值。页面还把 IDF、CoC、ISM 或其他许可按不同品类列入每票货可能涉及的文件。',
          '这意味着中国发货人不能只准备发票箱单就交仓。HS Code、货值、品名、用途、规格、产品照片、技术资料和收货人资料，都会影响进口商能不能及时完成 IDF 和相关许可。',
        ],
        bullets: ['Import Declaration Form', '真实货值申报', 'HS Code 和品名一致', '收货人进口资料'],
      },
      {
        heading: '哪些货要特别提前问',
        body: [
          '电子电器、太阳能组件、化工品、食品相关产品、医疗产品、二手设备、备件和带监管属性的工业货，都不适合最后一刻才问清关资料。不同品类可能涉及 KEBS、KRA、EPRA、药监、植检或其他主管部门。',
          '专业做法是把 NBO 空运询价拆成两条线：一条判断航班、重量、尺寸、是否需要主甲板；另一条判断 PVoC/CoC、IDF、进口许可、目的港费用和最终交付。两条线都成立，报价才有意义。',
        ],
        bullets: ['电子电器', '太阳能组件', '医疗/化工品', '二手设备和备件'],
      },
    ],
    checklist: ['商业发票', '装箱单', 'HS Code', '英文品名和用途', '产品照片和规格书', 'PVoC/CoC是否需要', 'IDF是否已申请', '进口商KRA/PIN资料', '是否涉及EPRA/药监/植检等许可', 'NBO或最终城市', '每件尺寸重量', '最晚到货时间'],
    relatedRoutes: [
      { label: 'NBO 内罗毕航线页', href: '/africa-air-freight/nbo/' },
      { label: '东非NBO/EBB/DAR项目货', href: '/insights/east-africa-nbo-ebb-dar-project-cargo/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '超大件询价清单', href: '/insights/oversized-air-freight-quote-checklist/' },
    ],
    sources: [
      { label: 'Kenya Bureau of Standards: Pre-Export Verification of Conformity', href: 'https://www.kebs.org/pre-export-verification-of-conformity/' },
      { label: 'InfoTradeKenya: Import Declaration Form (IDF)', href: 'https://infotradekenya.go.ke/procedure/322?includeSearch=true&l=en' },
    ],
  },
  {
    slug: 'nigeria-los-soncap-formm-paar-air-freight',
    title: '尼日利亚LOS空运清关：SONCAP、Form M和PAAR要提前准备什么？',
    excerpt:
      '中国到尼日利亚LOS空运，电子电器、机械设备、工业品和项目备件不能只问航班价格。SONCAP、Form M、PAAR、发票箱单、英文标签和产品规格资料要在出运前对齐，否则到港后很容易补料、查验和产生仓储。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['尼日利亚SONCAP空运', 'LOS清关资料', 'Form M尼日利亚进口', 'PAAR尼日利亚清关'],
    template: 'generated',
    audience: ['尼日利亚进口商', '电子电器出口商', '机械设备工厂', '西非项目货代'],
    angle: '把 SONCAP、Form M 和 PAAR 转成 LOS 空运询价前的清关资料预审动作。',
    sections: [
      {
        heading: 'LOS空运先判断监管文件',
        body: [
          'LOS 拉各斯是西非大市场入口，但它不是只看航班和每公斤价格的目的地。电子电器、机械设备、建筑材料、工业耗材、汽车配件和项目备件，往往先要判断监管文件是否成立，再谈空运路线。',
          'Standards Organisation of Nigeria 的 SONCAP 页面把 SONCAP/IMPORT 作为进口合规服务入口。对销售来说，客户问“到 Lagos 多少钱”时，第一步要问这票货是否属于 SONCAP 管控范围、是否已经有产品证书/符合性文件、进口商是否能配合 Form M 和 PAAR。',
        ],
        bullets: ['SONCAP 适用性', '产品证书/符合性文件', '进口商银行配合', 'LOS 到港清关节奏'],
      },
      {
        heading: 'Form M不是到港后再补',
        body: [
          'SONCAP FAQ 把流程拆得很清楚：进口商需要取得 TIN，通过 trade.gov.ng 处理 Form M，随后提交 Product Certificate（PC）、Form M 和其他资料来申请 SONCAP Certificate（SC）。这些动作如果拖到货物到港后再处理，清关节奏会非常被动。',
          '这对空运很关键。空运快，但 Form M、PAAR、SONCAP 和最终文件如果没有提前对齐，飞机再快也会卡在清关资料。客户只给“spare parts”或“machine parts”这种模糊品名，风险会直接转成补料和查验。',
        ],
        bullets: ['e-Form M 注册', '清楚品名和规格', '型号/品牌/数量包装', '发票箱单一致'],
      },
      {
        heading: 'PAAR和最终文件要跟空运单一致',
        body: [
          'SONCAP FAQ 还把 PAAR 列在清关链路里，说明进口商拿到 SONCAP Certificate 后，需要通过银行把 SC 和 PAAR 资料提供给 Nigeria Customs Service 用于清关。',
          '所以 LOS 空运询价不能只收重量尺寸。AWB、商业发票、装箱单、CCVO、SONCAP 文件、Form M、PAAR、英文标签和实际货物照片要能相互对应。任何一个字段不一致，都可能把快速空运变成到港等待。',
        ],
        bullets: ['AWB 与发票箱单一致', 'PAAR 信息对应', '英文标签', '产品照片和规格书'],
      },
    ],
    checklist: ['商业发票', '装箱单', 'AWB资料', 'HS Code', '具体英文品名', '品牌/型号/规格', '数量和包装', 'SONCAP是否需要', 'Form M状态', 'PAAR状态', 'CCVO或原产地资料', '英文标签照片', '进口商TIN/银行资料', 'LOS或最终城市', '最晚到货时间'],
    relatedRoutes: [
      { label: 'LOS 拉各斯航线页', href: '/africa-air-freight/los/' },
      { label: '尼日利亚LOS/ABV/PHC风险', href: '/insights/nigeria-los-air-freight-customs-risk/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '危险品/化工品空运到非洲', href: '/insights/dangerous-goods-chemical-air-freight-africa-checklist/' },
    ],
    sources: [
      { label: 'Standards Organisation of Nigeria: SONCAP', href: 'https://son.gov.ng/soncapservice/' },
      { label: 'Standards Organisation of Nigeria: SONCAP scheme FAQ', href: 'https://son.gov.ng/helpie_faq/what-next-now-that-i-have-agreed-to-conform-to-the-soncap-scheme/' },
    ],
  },
  {
    slug: 'tanzania-dar-pvoc-coc-air-freight-clearance',
    title: '坦桑尼亚DAR空运清关：TBS PVoC/CoC和TRA预申报怎么准备？',
    excerpt:
      '中国到坦桑尼亚DAR空运，电子电器、机械设备、建材、汽配和项目备件不能只看航班。TBS PVoC/CoC、TRA预到港申报、TANCIS、发票箱单、AWB和进口许可要提前对齐。',
    date: '2026-06-30',
    readTime: '13 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['坦桑尼亚PVOC空运', 'DAR清关资料', 'TBS COC坦桑尼亚', '中国到坦桑尼亚空运清关'],
    template: 'generated',
    audience: ['坦桑尼亚进口商', '设备工厂', '建材和电子电器供应商', '东非项目货代'],
    angle: '把 TBS PVoC/CoC 和 TRA 预到港申报转成 DAR 空运询价前的清关资料预审动作。',
    sections: [
      {
        heading: 'DAR空运不能只看舱位',
        body: [
          'DAR 达累斯萨拉姆是坦桑尼亚和东非项目货的重要入口，电子电器、机械设备、建材、汽配、工业耗材和项目备件都常见。很多客户只问中国到 DAR 空运多少钱，但真正影响交付的是 TBS 和 TRA 的资料是否能提前跑通。',
          'Tanzania Bureau of Standards 说明，PVoC 是针对进口到坦桑尼亚的特定货物，在出口国装运前核验其是否符合适用国家标准的符合性评估程序。对销售来说，询价阶段就要判断是否属于 PVoC 管控、是否需要 CoC、谁负责申请和检测。',
        ],
        bullets: ['TBS PVoC适用性', 'Certificate of Conformity', '出口国装运前核验', 'DAR到港清关'],
      },
      {
        heading: 'CoC缺失会变成到港成本',
        body: [
          'TBS 页面写得很直接：受 PVoC 管制的货物在发往坦桑尼亚前必须取得清关文件和 Certificate of Conformity（CoC），否则到达坦桑尼亚口岸后可能被拒收或罚款。这个风险不能等到货到机场再处理。',
          '实际询价时，客户需要给出 HS Code、产品用途、规格型号、品牌、照片、检测/认证资料和进口商信息。只写“spare parts”“equipment”“building materials”，不够判断是否需要 PVoC 或目的地许可。',
        ],
        bullets: ['HS Code', '规格型号和品牌', '产品照片', '测试/认证资料'],
      },
      {
        heading: 'TRA预申报和TANCIS要提前跑',
        body: [
          'Tanzania Revenue Authority 的 Pre-Arrival Declaration 页面说明，进口商或代理可以在货物到达入境点前开始清关手续，从而减少到货后的清关时间。TRA 的进口程序页面还说明，进口文件通过 TANCIS 在线提交，进口文件包括 Final Invoice、Packing List、Airway Bill、授权书和相关进口许可。',
          '所以 DAR 空运询价必须拆成两条线：一条判断航班、尺寸、重量和是否需要主甲板；另一条判断 PVoC/CoC、TANCIS、AWB、发票箱单、进口许可和目的地代理。两条线都成立，报价才是可执行价格。',
        ],
        bullets: ['Pre-Arrival Declaration', 'TANCIS', 'Final Invoice和Packing List', 'Airway Bill'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Airway Bill资料', 'TBS PVoC是否适用', 'CoC是否已申请', '进口许可是否涉及TBS/TMDA等', '进口商授权书', '目的机场DAR或最终城市', '每件尺寸重量', '最晚到货时间'],
    relatedRoutes: [
      { label: 'DAR 达累斯萨拉姆航线页', href: '/africa-air-freight/dar/' },
      { label: '东非NBO/EBB/DAR项目货', href: '/insights/east-africa-nbo-ebb-dar-project-cargo/' },
      { label: '肯尼亚NBO PVoC/IDF', href: '/insights/kenya-nbo-pvoc-idf-air-freight-documents/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Tanzania Bureau of Standards: Imports and Export Control', href: 'https://www.tbs.go.tz/pages/inspection' },
      { label: 'Tanzania Revenue Authority: Pre-Arrival Declaration', href: 'https://www.tra.go.tz/page/pre-arrival-declaration' },
      { label: 'Tanzania Revenue Authority: Import Procedures', href: 'https://www.tra.go.tz/page/import-procedures' },
    ],
  },
  {
    slug: 'uganda-ebb-unbs-pvoc-air-freight-clearance',
    title: '乌干达EBB空运清关：UNBS PVoC/CoC和URA进口资料怎么准备？',
    excerpt:
      '中国到乌干达EBB空运，电子电器、建材、机械设备、工业品和项目备件不能只看航班。UNBS PVoC/CoC、URA IDF、商业发票、装箱单、Air Waybill和原产地资料要提前对齐。',
    date: '2026-06-30',
    readTime: '13 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['乌干达PVOC空运', 'EBB清关资料', 'UNBS COC乌干达', '中国到乌干达空运清关'],
    template: 'generated',
    audience: ['乌干达进口商', '设备工厂', '电子电器和建材供应商', '东非项目货代'],
    angle: '把 UNBS PVoC/CoC 和 URA 进口文件转成 EBB 空运询价前的清关资料预审动作。',
    sections: [
      {
        heading: 'EBB空运要先判断PVoC',
        body: [
          'EBB 恩德培是乌干达空运入口，常见货物包括电子电器、建材、机械设备、工业耗材、通讯设备、医疗相关货物和项目备件。客户只问中国到 EBB 空运多少钱时，销售必须先判断这票货是否触发 UNBS/URA 的进口合规资料。',
          'URA 的官方资料把 Pre-Export Verification of Conformity（PVoC）Certificate 列为部分货物需要的文件，并举例包括电子产品、建材等类别。对空运来说，这类文件不能等货到 EBB 后再补。',
        ],
        bullets: ['UNBS PVoC判断', 'Certificate of Conformity', '电子电器和建材', 'EBB到港清关'],
      },
      {
        heading: 'URA文件要跟空运单一致',
        body: [
          'URA 页面列出的进口清关文件包括 Import Declaration Form、Commercial Invoice、Packing List、Bill of Lading 或 Air Waybill、Certificate of Origin，以及部分货物需要的 PVoC Certificate。它还提到可通过 Uganda Electronic Single Window 或 ASYCUDA 等电子系统处理文件。',
          '这意味着 EBB 空运询价不能只收重量和机场代码。AWB、发票、箱单、HS Code、英文品名、规格型号、原产地、PVoC/CoC 和进口商资料要能互相对应，否则很容易触发补料、文件查询或到港等待。',
        ],
        bullets: ['Import Declaration Form', 'Commercial Invoice', 'Packing List', 'Air Waybill'],
      },
      {
        heading: '哪些货要提前问清楚',
        body: [
          '电子产品、照明设备、线缆、建材、五金、机械设备、医疗相关货物、化工品、二手设备和项目备件，都不适合最后一刻才问清关。不同品类可能涉及 UNBS、URA 或其他监管部门。',
          '专业做法是把 EBB 空运拆成两条线：一条判断航班、尺寸重量、是否适合腹舱或主甲板；另一条判断 PVoC/CoC、IDF、发票箱单、进口许可、目的地代理和最终交付。两条线都成立，报价才是可执行价格。',
        ],
        bullets: ['电子产品', '建材五金', '机械设备', '二手设备和项目备件'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', 'PVoC/CoC是否需要', 'Import Declaration Form状态', 'Certificate of Origin', '进口商资料', 'EBB或最终城市', '每件尺寸重量', '是否需要二程卡车', '最晚到货时间'],
    relatedRoutes: [
      { label: 'EBB 恩德培航线页', href: '/africa-air-freight/ebb/' },
      { label: '东非NBO/EBB/DAR项目货', href: '/insights/east-africa-nbo-ebb-dar-project-cargo/' },
      { label: '坦桑尼亚DAR PVoC/CoC', href: '/insights/tanzania-dar-pvoc-coc-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Uganda National Bureau of Standards: PVoC Key Documents', href: 'https://www.unbs.go.ug/content.php?src=pvoc-key-documents&pg=content' },
      { label: 'Uganda Revenue Authority: One Stop Border Post', href: 'https://ura.go.ug/en/import-export/one-stop-border-post/' },
    ],
  },
  {
    slug: 'ghana-acc-easypass-icums-air-freight-clearance',
    title: '加纳ACC空运清关：2026年7月1日GSA EasyPASS/CoC和ICUMS怎么准备？',
    excerpt:
      '2026年7月1日起，GSA EasyPASS按shipment date进入强制申请节点。中国到加纳ACC空运，电子电器、建材、矿业物资、机械设备和贸易补货要提前确认CoC、ICUMS、Air Waybill、发票箱单和HS Code。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['加纳EasyPASS 2026', 'ACC清关资料', 'GSA COC加纳', 'Ghana EasyPASS shipment date', 'Ghana ICUMS air freight clearance', '中国到加纳空运清关'],
    template: 'generated',
    audience: ['加纳进口商', '电子电器和建材供应商', '矿业设备工厂', '西非项目货代'],
    angle: '把 GSA EasyPASS 2026年7月1日强制节点、CoC和GRA ICUMS进口申报转成ACC空运询价前的资料预审动作。',
    sections: [
      {
        heading: '2026年7月1日起先判断GSA EasyPASS',
        body: [
          'ACC阿克拉是加纳空运入口，也常承接西非贸易补货、工程物资、矿业备件和电子电器类货物。客户只问中国到ACC空运多少钱时，销售不能只看航班和每公斤价格，要先判断货物是否落入 Ghana Standards Authority 的EasyPASS符合性核验范围。',
          'GSA 2026年5月版EasyPASS Data Sheet写明，该项目2026年6月1日launch，2026年7月1日起按shipment date进入强制申请节点，覆盖出口到加纳货物的符合性评估。对中国发货人来说，这意味着不能等货到ACC后才问CoC，订舱前就要判断HS Code、产品类别、测试资料和申请责任。',
        ],
        bullets: ['2026年7月1日shipment date', 'EasyPASS适用性', 'Certificate of Conformity资料', 'GSA符合性评估'],
      },
      {
        heading: 'ICUMS资料要跟空运单一致',
        body: [
          'Ghana Revenue Authority 的 Import Procedures 页面列出进口清关资料，包括 original waybill 或 Bill of Lading、attested invoice、packing list、Import Declaration Form、TIN 或 GhanaCard PIN，以及相关监管机构许可。对空运来说，Air Waybill、商业发票、装箱单、HS Code、英文品名和进口商资料必须提前统一。',
          'GRA 页面还说明，清关代理在 Integrated Customs Management System（ICUMS）提交申报，系统会处理 classification、valuation、approval，随后缴纳税费，并按风险等级进入查验、扫描或放行。空运速度快，但 ICUMS 资料错一项，到 ACC 后就会变成补料、查验和仓储成本。',
        ],
        bullets: ['Air Waybill', '商业发票和装箱单', 'IDF和TIN资料', 'ICUMS申报'],
      },
      {
        heading: '哪些货要提前问清楚',
        body: [
          'GSA Data Sheet列出的受管范围覆盖矿产品、化工相关产品、塑料橡胶、纺织品、石材/水泥/建材、贱金属及制品、机械和电气设备、车辆及配件、光学/测量仪器等多类HS章节。Trade.gov的加纳标准页面也说明，高风险货物可能需要符合性证书或接受GSA/FDA检查。',
          '专业做法是把 ACC 空运拆成两条线：一条判断航班、尺寸重量、腹舱或主甲板、是否要经欧洲或中东中转；另一条判断 EasyPASS/CoC、ICUMS、IDF、进口商 TIN、监管许可和最终交付。两条线都成立，报价才是可执行价格。',
        ],
        bullets: ['机械和电气设备', '建材五金', '矿业设备', '测量仪器和车辆配件'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', 'shipment date', 'GSA EasyPASS/CoC是否需要', 'CoC申请责任方', '测试报告/产品证书如有', 'ICUMS申报资料', '进口商TIN或GhanaCard PIN', 'Import Declaration Form状态', '相关监管许可', 'Certificate of Origin如需', 'ACC或最终城市', '每件尺寸重量', '是否需要二程卡车', '最晚到货时间'],
    relatedRoutes: [
      { label: 'ACC 阿克拉航线页', href: '/africa-air-freight/acc/' },
      { label: '加纳ACC与科特迪瓦ABJ', href: '/insights/ghana-acc-ivory-coast-abj-west-africa-air-freight/' },
      { label: '尼日利亚SONCAP/Form M/PAAR', href: '/insights/nigeria-los-soncap-formm-paar-air-freight/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Ghana Standards Authority: EasyPASS Programme Data Sheet', href: 'https://gsa.gov.gh/wp-content/uploads/2026/06/DATA-SHEET-1.pdf' },
      { label: 'Trade.gov: Ghana - Standards for Trade', href: 'https://www.trade.gov/country-commercial-guides/ghana-standards-trade' },
      { label: 'Trade.gov: Ghana - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/ghana-import-requirements-and-documentation' },
      { label: 'Ghana Revenue Authority: Customs', href: 'https://www.gra.gov.gh/customs/' },
      { label: 'ICUMS Ghana external portal', href: 'https://external.unipassghana.com/' },
    ],
  },
  {
    slug: 'south-africa-jnb-sars-nrcs-loa-air-freight-clearance',
    title: '南非JNB空运清关：SARS进口申报、NRCS LOA和ITAC许可要提前准备什么？',
    excerpt:
      '中国到南非JNB空运，电子电器、机械设备、汽车配件、二手设备和项目备件不能只看航班。SARS进口申报、Goods Declaration、NRCS Letter of Authority、ITAC进口许可、发票箱单和Air Waybill要提前对齐。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['南非JNB清关资料', 'NRCS LOA南非空运', 'SARS进口申报', '中国到南非空运清关'],
    template: 'generated',
    audience: ['南非进口商', '电子电器出口商', '机械设备工厂', '南部非洲项目货代'],
    angle: '把 SARS 进口申报、NRCS LOA 和 ITAC 进口许可转成 JNB 空运询价前的清关资料预审动作。',
    sections: [
      {
        heading: 'JNB空运先判断SARS申报资料',
        body: [
          'JNB 约翰内斯堡是南非本土和南部非洲内陆项目货的重要入口，常见货物包括电子电器、机械设备、汽车配件、矿业备件、工厂维修件和高价值急件。客户只问中国到 JNB 空运多少钱时，销售要先判断进口商、清关代理、税号、发票箱单和 Air Waybill 是否能跑通 SARS 进口申报。',
          'SARS 的 Imports 和 Goods Declaration 页面把进口清关放在 Customs 流程里处理。对空运来说，AWB、commercial invoice、packing list、HS Code、货值、原产地、进口商资料和目的地代理信息必须一致；否则航班再快，也会在 JNB 到港后变成补料、估价、查验或仓储。',
        ],
        bullets: ['SARS进口申报', 'Goods Declaration', 'Air Waybill', '发票箱单一致'],
      },
      {
        heading: '电子电器和受控产品要问NRCS LOA',
        body: [
          '南非不是所有货都只按普通清关处理。电子电器、照明设备、插头插座、电源类产品、部分机械和受强制规范管理的产品，可能涉及 National Regulator for Compulsory Specifications（NRCS）的 Letter of Authority（LOA）或相关合规文件。',
          'NRCS 的电工类 LOA 管理流程文件说明，相关产品需要按强制规范和申请流程提交资料。对出口商和货代来说，重点不是背法规，而是提前把产品规格、型号、测试报告、照片、HS Code、进口商/申请主体和是否已有 LOA 问清楚。LOA 不是货到机场后临时补一张纸。',
        ],
        bullets: ['NRCS Letter of Authority', '电子电器', '照明和电源类产品', '测试报告和型号资料'],
      },
      {
        heading: '二手设备和特殊货要查ITAC许可',
        body: [
          '南非对部分进口货物还有 import control 要求。ITAC 的 Import Control 页面是进口许可和受控货物的重要入口，二手设备、旧机械、受管制产品或敏感货物不能默认按普通货走。',
          '实际询价时，要把 JNB 空运拆成两条线：一条判断航班、尺寸重量、是否需要主甲板或欧洲中转；另一条判断 SARS 申报、NRCS LOA、ITAC 许可、目的地代理和最终城市交付。两条线都成立，报价才是可执行价格。',
        ],
        bullets: ['ITAC进口许可', '二手设备', '受控产品', '最终城市交付'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', '货值和原产地', '进口商税号/VAT资料', 'SARS清关代理', 'NRCS LOA是否需要', '测试报告或产品证书', 'ITAC进口许可是否涉及', 'JNB或最终城市', '每件尺寸重量', '是否需要主甲板或二程卡车', '最晚到货时间'],
    relatedRoutes: [
      { label: 'JNB 约翰内斯堡航线页', href: '/africa-air-freight/jnb/' },
      { label: 'JNB矿业急件路线判断', href: '/insights/jnb-mining-spares-air-freight/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '超大件询价清单', href: '/insights/oversized-air-freight-quote-checklist/' },
    ],
    sources: [
      { label: 'South African Revenue Service: Imports', href: 'https://www.sars.gov.za/customs-and-excise/import-export-and-transit/imports/' },
      { label: 'South African Revenue Service: Goods Declaration', href: 'https://www.sars.gov.za/customs-and-excise/goods-declaration/' },
      { label: 'NRCS: Electrotechnical LOA Admin Procedure', href: 'https://www.nrcs.org.za/Documents/Electrotech/LOA%20Admin%20Procedure/LOA%20ADMIN%20Revised%2012_06%20May%202019.pdf' },
      { label: 'International Trade Administration Commission: Import Control', href: 'https://itac.org.za/import-control/' },
    ],
  },
  {
    slug: 'egypt-cai-nafeza-aci-cargox-air-freight-clearance',
    title: '埃及CAI空运清关：2026空运ACI强制后，NAFEZA、CargoX和ACID号怎么准备？',
    excerpt:
      '2026年1月1日起埃及空运ACI进入强制运行阶段。中国到埃及CAI空运，机械设备、电子电器、医疗物资、项目备件和贸易补货要提前对齐NAFEZA、CargoX、ACID号、Air Waybill、商业发票模板和装箱单。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['埃及ACI空运2026', 'CAI清关资料', 'Egypt air cargo ACI 2026', 'NAFEZA CargoX', 'ACID number air freight Egypt', 'ACID号埃及空运'],
    template: 'generated',
    audience: ['埃及进口商', '机械设备工厂', '电子电器出口商', '北非项目货代'],
    angle: '把埃及2026空运ACI强制、NAFEZA、CargoX和ACID号要求转成CAI空运询价前的资料预审动作。',
    sections: [
      {
        heading: '2026年1月1日起空运ACI强制',
        body: [
          'CAI 开罗是埃及和北非项目货的重要空运入口，常见货物包括机械设备、电子电器、医疗相关货物、工业备件、工程物资和贸易补货。客户只问中国到 CAI 空运多少钱时，销售不能只看航班，要先判断 NAFEZA ACI、CargoX 和 ACID 号是否能提前跑通。',
          'NAFEZA 的 Advance Cargo Information System (Aviation) 页面说明，空运 ACI 试运行阶段持续到 31/12/2025，强制运行阶段从 01/01/2026 开始；埃及进口商需要更新 NAFEZA 平台资料，并通知境外出口商在区块链平台登记。2026年以后做埃及空运，不能把 ACI 当成海运才有的事情。',
        ],
        bullets: ['2026年1月1日强制', 'NAFEZA ACI空运', 'CargoX登记', 'ACID号'],
      },
      {
        heading: 'ACID号要进入空运文件链',
        body: [
          'NAFEZA 的 ACI 页面把流程写得很清楚：埃及进口商在 NAFEZA 注册，提前列明货物资料并取得 ACID；货物资料和单证要在装运前提交，境外出口商通过 CargoX 把相关发票和装运文件发送到 NAFEZA 平台。',
          '对空运来说，关键动作是把 ACID、Air Waybill、商业发票、装箱单、HS Code、货值、进口商税号、出口商资料和 CargoX 账号状态提前对齐。NAFEZA 的 ACI Validate Lock 页面还提供空运 bulk validate，并提示在完成 booking order、开始 shipping procedures 后尽快验证并锁定 ACI shipment data。',
        ],
        bullets: ['ACID提前取得', 'Air Waybill资料', 'CargoX上传', 'ACI Validate Lock'],
      },
      {
        heading: '文件格式和特殊货资料不能最后补',
        body: [
          'NAFEZA 的 ACI 文件页面列出常见资料：commercial invoice、Packing List、transport document copy、Certificate of origin，并提示上传到 NAFEZA 和 CargoX 的单个文件不要超过 5 MB。按货物属性，还可能需要 inspection certificate、insurance、Halal certificate、Health certificate、MSDS、Phytosanitary certificate、Veterinary certificate 等资料。',
          '实际询价时，要把 CAI 空运拆成两条线：一条判断航班、尺寸重量、是否适合腹舱或主甲板；另一条判断 ACI/ACID、CargoX、发票模板、AWB、原产地和特殊许可证。两条线都成立，报价才是可执行价格。',
        ],
        bullets: ['商业发票模板', 'Packing List', 'Certificate of Origin', 'MSDS/Health/Halal/Phyto如需'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票/NAFEZA模板', '装箱单', 'Air Waybill资料', 'ACID号', 'ACI是否已锁定', '进口商NAFEZA资料', '进口商税号', '出口商CargoX账号和验证状态', 'Certificate of Origin', 'MSDS如需', 'Halal/Health/Phytosanitary/Veterinary证书如需', 'CAI或最终城市', '每件尺寸重量', '是否需要主甲板或二程卡车', '最晚到货时间'],
    relatedRoutes: [
      { label: 'CAI 开罗航线页', href: '/africa-air-freight/cai/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '危险品/化工品空运到非洲', href: '/insights/dangerous-goods-chemical-air-freight-africa-checklist/' },
      { label: '超大件询价清单', href: '/insights/oversized-air-freight-quote-checklist/' },
    ],
    sources: [
      { label: 'NAFEZA: Advance Cargo Information System (Aviation)', href: 'https://www.nafeza.gov.eg/en/pages/39' },
      { label: 'NAFEZA: Advance Cargo Information System', href: 'https://www.nafeza.gov.eg/en/pages/15' },
      { label: 'NAFEZA: Documents required to create an ACI file', href: 'https://www.nafeza.gov.eg/en/pages/32' },
      { label: 'NAFEZA: ACI Lock Request validator', href: 'https://www.nafeza.gov.eg/en/aci/validate-lock' },
      { label: 'Egypt Ministry of Finance: Mandatory Air Cargo ACI Rollout', href: 'https://mof.gov.eg/en/posts/media/6954f7ae65be890008918a70/Finance-Minister%3A-With-Mandatory-Air-Cargo-ACI-Rollout-Starting-Tomorrow' },
      { label: 'CargoX Help: ACID number', href: 'https://cargox.help/en/articles/398421-what-is-the-acid-number-and-where-can-i-get-it' },
    ],
  },
  {
    slug: 'senegal-dss-dpi-dipa-customs-air-freight-clearance',
    title: '塞内加尔DSS空运清关：DPI、DIPA和海关申报资料要提前准备什么？',
    excerpt:
      '中国到塞内加尔DSS空运，机械设备、电子电器、食品相关货物、项目备件和贸易补货不能只看航班。DPI、DIPA、verification certificate、Air Waybill、商业发票、装箱单和原产地证要提前对齐。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['塞内加尔DPI空运', 'DSS清关资料', 'DIPA塞内加尔', '中国到塞内加尔空运清关'],
    template: 'generated',
    audience: ['塞内加尔进口商', '食品和日用品出口商', '机械设备工厂', '西非项目货代'],
    angle: '把 Senegal Customs 的 DPI/PVI、DIPA 和空运单证要求转成 DSS 空运询价前的资料预审动作。',
    sections: [
      {
        heading: 'DSS空运先判断DPI和PVI',
        body: [
          'DSS 达喀尔是塞内加尔和西非项目货的重要入口，常见货物包括机械设备、电子电器、食品相关产品、日用品、工业耗材和项目备件。客户只问中国到 DSS 空运多少钱时，销售要先判断 DPI、verification certificate 和目的地清关资料是否能提前跑通。',
          'Senegal Customs 的英文页面说明，进口相关资料可能包括 pre-import declaration、verification certificate 和 DIPA。官方贸易门户也说明，Import Verification Program（PVI）从 Pre-Arrival Declaration（DPI）开始，DPI 由进口商准备，并在部分货值条件下触发验货/核价链路。空运速度快，但 DPI 不是到港后才临时补的动作。',
        ],
        bullets: ['DPI预进口申报', 'PVI/verification certificate', '进口商配合', 'DSS到港清关节奏'],
      },
      {
        heading: 'Air Waybill和发票箱单要一致',
        body: [
          'Senegal Customs 页面列出的随附资料包括 commercial invoice、shipping note 或 Air waybill、Certificate of Origin、insurance certificate、health 或 phytosanitary certificate、pre-import declaration、verification certificate、DIPA，以及 customs value 相关声明。法文页面也列出 facture、liste de colisage、LTA、assurance 等基础文件。',
          '这意味着 DSS 空运询价不能只收重量和机场代码。AWB、商业发票、装箱单、HS Code、英文品名、货值、原产地、进口商资料、DPI 和目的地代理信息要互相对应。任何一项不一致，都可能把快速空运变成到港补料。',
        ],
        bullets: ['Air Waybill', '商业发票和装箱单', 'Certificate of Origin', '保险和货值资料'],
      },
      {
        heading: '食品和监管货要提前问DIPA',
        body: [
          'DIPA 是塞内加尔进口食品相关货物必须提前关注的资料之一。除了食品，动物/植物来源产品、农产品、化工品、医疗相关货物、受控设备和特殊许可证货物，也不适合最后一刻才问清关。',
          '专业做法是把 DSS 空运拆成两条线：一条判断航班、尺寸重量、是否需要主甲板或欧洲/中东中转；另一条判断 DPI、DIPA、verification certificate、原产地证、健康/植检证、保险和目的地清关代理。两条线都成立，报价才是可执行价格。',
        ],
        bullets: ['DIPA食品申报', 'Health certificate', 'Phytosanitary certificate', '特殊许可证货物'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', 'Certificate of Origin', 'insurance certificate', 'DPI状态', 'verification certificate/PVI是否涉及', 'DIPA是否涉及食品', 'health/phytosanitary certificate如需', '进口商资料', 'DSS或最终城市', '每件尺寸重量', '是否需要二程卡车', '最晚到货时间'],
    relatedRoutes: [
      { label: 'DSS 达喀尔航线页', href: '/africa-air-freight/dss/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '加纳ACC与科特迪瓦ABJ', href: '/insights/ghana-acc-ivory-coast-abj-west-africa-air-freight/' },
      { label: '危险品/化工品空运到非洲', href: '/insights/dangerous-goods-chemical-air-freight-africa-checklist/' },
    ],
    sources: [
      { label: 'Senegal Customs: Customs clearance information', href: 'https://www.douanes.sn/ndn85/?lang=en' },
      { label: 'Senegal Customs: Déclarer des marchandises en douane', href: 'https://www.douanes.sn/declarer-des-marchandises-en-douane/' },
      { label: 'Senegal Trade Portal: Import Procedure', href: 'https://senegalcommerce.sec.gouv.sn/ProcedureImportAnglais.aspx' },
      { label: 'International Trade Administration: Senegal Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/senegal-import-requirements-and-documentation' },
    ],
  },
  {
    slug: 'cote-divoire-abj-guce-fdi-sydam-air-freight-clearance',
    title: '科特迪瓦ABJ空运清关：GUCE/FDI、SYDAM和海关放行资料要提前准备什么？',
    excerpt:
      '中国到科特迪瓦ABJ空运，机械设备、电子电器、医疗物资、工程备件和贸易补货不能只看航班。GUCE账号、FDI、e-Certificate of Conformity、SYDAM/e-DAU、Air Waybill、发票箱单和海关放行资料要提前对齐。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['科特迪瓦FDI空运', 'ABJ清关资料', 'GUCE科特迪瓦', '中国到阿比让空运清关'],
    template: 'generated',
    audience: ['科特迪瓦进口商', '机械设备工厂', '医疗和电子电器出口商', '西非法语区项目货代'],
    angle: '把 GUCE/FDI、SYDAM/e-DAU 和 ABJ 空运海关放行流程转成询价前的资料预审动作。',
    sections: [
      {
        heading: 'ABJ空运先判断GUCE和FDI',
        body: [
          'ABJ 阿比让是科特迪瓦和西非法语区项目货的重要入口，常见货物包括机械设备、电子电器、医疗相关货物、工程备件、日用品和贸易补货。客户只问中国到 ABJ 空运多少钱时，销售要先判断进口商是否能在 GUCE 平台配合完成进口资料和前置申报。',
          'GUCE 官方说明，它是科特迪瓦外贸单一窗口，经济运营方可通过平台办理进口、出口和过境相关的无纸化手续。GUCE 模块介绍页写明，Trade Transaction 流程会产生 FDI（Fiche de Déclaration à l’Importation / Prior Import Declaration Form），这个资料不能等货到 ABJ 后再临时补。',
        ],
        bullets: ['GUCE账号', 'FDI预进口申报', '进口商配合', 'ABJ到港清关节奏'],
      },
      {
        heading: 'SYDAM和e-DAU资料要跟空运单一致',
        body: [
          '科特迪瓦海关的空运进口流程页面说明，ABJ 空运货物由机场海关流程处理，涉及 SYDAM WORLD、DPOD、BAE、ACD、RVIS、PVS 等节点。GUCE 模块页也说明 e-DAU 可用于录入和提交海关详细申报，并与海关 SYDAM 系统衔接。',
          '所以 ABJ 空运询价不能只收重量和机场代码。Air Waybill、商业发票、装箱单、HS Code、英文/法文品名、货值、原产地、进口商资料、FDI 和目的地清关代理信息要能互相对应。任何一项不一致，都可能把快速空运变成到港补料或查验。',
        ],
        bullets: ['SYDAM WORLD', 'e-DAU/海关详细申报', 'Air Waybill', '商业发票和装箱单'],
      },
      {
        heading: '受控货要提前问符合性和许可证',
        body: [
          'GUCE 页面列出 e-Certificate of Conformity、e-Phyto、Certificate of Origin、e-Licence、e-BSC 等前置或配套模块。不是每一票空运货都需要全部文件，但电子电器、医疗相关货物、食品/植物来源产品、化工品、二手设备和特殊许可证货物，必须在出运前问清楚。',
          '科特迪瓦海关的禁止/限制货物页面也说明，如果进口只允许在授权、许可证、证书或其他正规文件下进行，货物缺少相应文件就会被视为不合规。专业做法是把 ABJ 空运拆成两条线：航班和装载可行性一条线，GUCE/FDI/SYDAM/许可证资料另一条线。',
        ],
        bullets: ['e-Certificate of Conformity', 'e-Phyto如需', 'Certificate of Origin', 'e-Licence如需'],
      },
    ],
    checklist: ['HS Code', '具体英文/法文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', 'GUCE账号/进口商资料', 'FDI状态', 'SYDAM/e-DAU申报资料', 'Certificate of Origin', 'e-Certificate of Conformity是否涉及', 'e-Phyto/health certificate如需', 'e-Licence或特殊授权如需', 'ABJ或最终城市', '每件尺寸重量', '是否需要二程卡车', '最晚到货时间'],
    relatedRoutes: [
      { label: 'ABJ 阿比让航线页', href: '/africa-air-freight/abj/' },
      { label: '加纳ACC与科特迪瓦ABJ', href: '/insights/ghana-acc-ivory-coast-abj-west-africa-air-freight/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '塞内加尔DSS DPI/DIPA', href: '/insights/senegal-dss-dpi-dipa-customs-air-freight-clearance/' },
    ],
    sources: [
      { label: 'GUCE Côte d’Ivoire: General Terms and Modules', href: 'https://guce.gouv.ci/cgu?lang=en' },
      { label: 'GUCE Support: Présentation des modules GUCE', href: 'https://support.guce.gouv.ci/portal/fr/kb/articles/presentation-des-modules-guce' },
      { label: 'Douanes Ivoiriennes: Procédures et Bureau de dédouanement des marchandises', href: 'https://www.douanes.ci/professionnel/procedures-et-bureau-de-dedouanements' },
      { label: 'Douanes Ivoiriennes: Marchandises prohibées/interdites', href: 'https://www.douanes.ci/professionnel/marchandises-prohibeesinterdites' },
    ],
  },
  {
    slug: 'rwanda-kgl-rra-rsb-air-freight-clearance-documents',
    title: '卢旺达KGL空运清关：RRA ReSW、RICA进口检验和RSB认证资料怎么准备？',
    excerpt:
      '中国到卢旺达KGL空运，电子设备、医疗物资、工业备件、食品相关产品和东非内陆项目货不能只看航班。RRA Rwanda Electronic Single Window、RICA机场进口检验、RSB产品认证、Air Waybill、商业发票、装箱单和进口许可要提前对齐。',
    date: '2026-06-30',
    readTime: '13 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['KGL清关资料', 'Rwanda Electronic Single Window', 'RICA import inspection Rwanda', 'Kigali airport customs clearance', 'RSB认证卢旺达', '中国到卢旺达空运清关'],
    template: 'generated',
    audience: ['卢旺达进口商', '电子设备出口商', '医疗和食品供应商', '东非内陆项目货代'],
    angle: '把 RRA ReSW、RICA进口检验、RSB产品认证和KGL到港清关资料转成空运询价前的资料预审动作。',
    sections: [
      {
        heading: 'KGL空运先判断RRA电子单一窗口',
        body: [
          'KGL 基加利是卢旺达空运入口，也常承接东非内陆项目货、医疗设备、电子设备、工业备件和贸易补货。客户只问中国到 KGL 空运多少钱时，销售要先判断进口商、清关代理和 Rwanda Revenue Authority（RRA）电子单一窗口资料是否能提前跑通。',
          'RRA 的 Rwanda Electronic Single Window 页面说明，系统覆盖进口许可、到货通知、货物舱单、质量检查、海关申报、付款、查验和放行等流程。对空运来说，Air Waybill、商业发票、装箱单、HS Code、货值、原产地、进口商资料和目的地代理资料必须提前一致。',
        ],
        bullets: ['RRA电子单一窗口', '到货通知和舱单', '海关申报', 'KGL到港放行'],
      },
      {
        heading: 'RICA进口检验和RSB资料要提前问',
        body: [
          'RICA 的 Import Inspection Unit 页面说明，该部门会在边境、内陆货站和机场货物入口检查进口货物是否符合标准或技术法规；不符合要求的货物可能被拒收、退运、返工或按规定处理，相关成本由进口商承担。KGL空运急件如果到港后才发现标签、标准或监管资料不成立，会直接变成清关和仓储成本。',
          'Rwanda Standards Board 的 Product Certification 页面说明，产品认证包括在线申请、费用支付、工厂审核、抽样、产品测试、纠正措施关闭、认证决定和 Certificate of Conformity 等步骤。对出口商来说，重点是提前准备型号规格、测试报告、产品照片、HS Code、用途、标签资料和进口商资料。',
        ],
        bullets: ['RICA进口检验', '机场货物入口', 'RSB产品认证', 'Certificate of Conformity'],
      },
      {
        heading: '不同货类要拆开判断',
        body: [
          'Rwanda Trade Portal 列出了 KGL 国际机场普通货物清关、电子产品清关、食品清关、进口许可、Airway bill、原产地证等多个流程入口。这说明 KGL 空运不能用一个模板覆盖所有货。',
          '专业做法是把 KGL 空运拆成两条线：一条判断航班、尺寸重量、是否适合腹舱或主甲板；另一条判断 RRA/eSW、MAGERWA 到货通知、RSB/质量检查、进口许可、发票箱单、Air Waybill 和目的地代理。两条线都成立，报价才是可执行价格。',
        ],
        bullets: ['电子设备', '医疗和食品货物', '进口许可', 'Airway bill和原产地证'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', 'Certificate of Origin', '进口商TIN/RRA资料', '清关代理资料', 'MAGERWA到货通知', 'RRA ReSW电子单一窗口资料', 'RICA进口检验是否涉及', 'RSB/质量检查是否涉及', '进口许可或监管许可如需', '测试报告/产品证书如需', '标签和标准资料如需', 'KGL或最终城市', '每件尺寸重量', '最晚到货时间'],
    relatedRoutes: [
      { label: 'KGL 基加利航线页', href: '/africa-air-freight/kgl/' },
      { label: '东非NBO/EBB/DAR项目货', href: '/insights/east-africa-nbo-ebb-dar-project-cargo/' },
      { label: '乌干达EBB PVoC/CoC', href: '/insights/uganda-ebb-unbs-pvoc-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Rwanda Revenue Authority: Rwanda Electronic Single Window', href: 'https://www.rra.gov.rw/en/customs-services/rwanda-electronic-single-window' },
      { label: 'Rwanda Revenue Authority: Rwanda Electronic Single Window procedures', href: 'https://www.rra.gov.rw/en/customs-services/electronic-single-window/process-and-procedures-for-rwand-electronic-single-window' },
      { label: 'RICA: Import Inspection Unit', href: 'https://www.rica.gov.rw/import-inspection-unit' },
      { label: 'Rwanda Standards Board: Product Certification', href: 'https://www.rsb.gov.rw/certifications/product-certification' },
      { label: 'Rwanda Trade Portal: Kigali International Airport procedures', href: 'https://rwandatrade.rw/procedure/223?l=en' },
      { label: 'Trade.gov: Rwanda - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/rwanda-customs-regulations' },
    ],
  },
  {
    slug: 'zambia-lun-zra-asycuda-zcsa-air-freight-clearance',
    title: '赞比亚LUN空运清关：ZRA/ASYCUDA、ZCSA进口检查和资料怎么准备？',
    excerpt:
      '中国到赞比亚LUN空运，矿业备件、工业设备、电子电器、化工和项目急件不能只看航班。ZRA电子海关申报、ASYCUDA空运资料、商业发票、Air Waybill、许可证和ZCSA强制标准检查要提前对齐。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['赞比亚LUN清关资料', 'ZRA ASYCUDA空运', 'ZCSA进口检查', '中国到赞比亚空运清关'],
    template: 'generated',
    audience: ['赞比亚进口商', '矿业设备供应商', '工业备件工厂', '非洲内陆项目货代'],
    angle: '把 ZRA 电子海关、ASYCUDA 空运申报和 ZCSA 强制标准检查转成 LUN 空运询价前的资料预审动作。',
    sections: [
      {
        heading: 'LUN空运先判断ZRA电子申报',
        body: [
          'LUN 卢萨卡是赞比亚项目货、矿业备件、工业设备和贸易补货常用入口。客户只问中国到 LUN 空运多少钱时，销售要先判断进口商、清关代理和 Zambia Revenue Authority（ZRA）电子申报资料是否能提前跑通。',
          'ZRA 的进口说明把进口货分为随身行李、货运 cargo 和邮包，并说明商业/工业用途且价值超过 USD 2,000 的货物，需要通过海关电子处理系统清关。对空运来说，Air Waybill、商业发票、货物舱单、合同、证书、许可证和受控货文件要跟申报一致。',
        ],
        bullets: ['ZRA电子海关', 'ASYCUDA资料', 'Air Waybill', '商业发票和货物舱单'],
      },
      {
        heading: 'ZRA/ASYCUDA资料不只是到港动作',
        body: [
          'Trade.gov 赞比亚进口文件页也说明，清关需要 bills of lading、airway bills、commercial invoices 等商业单证，并指出 ZRA 已实施 ASYCUDA 平台支持海关清关和国内税务流程。换句话说，空运快不代表资料可以慢。',
          '赞比亚 LUN 询价时，不能只收重量和机场代码。HS Code、具体英文品名、型号规格、品牌、货值、收货人 TIN/清关代理、商业发票、装箱单、AWB 资料、许可证和最终交付城市，都要在订舱前对齐。',
        ],
        bullets: ['HS Code', '进口商TIN', '清关代理', '许可证和证书'],
      },
      {
        heading: '强制标准货要提前问ZCSA',
        body: [
          'Zambia Trade Portal 的 compulsory standards inspection 流程显示，相关货物可能涉及 Zambia Compulsory Standards Agency（ZCSA）的 consignment inspection、import inspection request、annual import quality certificate、pre-import quality certificate 和 certificate of conformance。',
          '不是每一票 LUN 空运都需要 ZCSA 文件，但电池、化工、食品、建材、汽车相关、肥料、燃油、电子电器、二手设备和其他强制标准货物，不能等货到卢萨卡后才问。正确动作是把航班装载和监管资料分开验证：能飞是一件事，能清是另一件事。',
        ],
        bullets: ['ZCSA进口检查', 'Certificate of Conformance', 'Pre-Import Quality Certificate', '受控产品预审'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', 'cargo/road manifest如需', '进口商TIN/ZRA资料', '清关代理资料', '合同和货值资料', '受控货许可证或证书如需', 'ZCSA强制标准检查是否涉及', 'Certificate of Conformance如需', 'LUN或最终城市', '每件尺寸重量', '是否需要主甲板或二程卡车', '最晚到货时间'],
    relatedRoutes: [
      { label: 'LUN 卢萨卡航线页', href: '/africa-air-freight/lun/' },
      { label: 'LUN工业设备空运指南', href: '/insights/lun-zambia-industrial-air-freight-guide/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
    ],
    sources: [
      { label: 'Zambia Revenue Authority: Importation of Goods', href: 'https://www.zra.org.zm/importation-of-goods/' },
      { label: 'ZRA: ASYCUDA IATA Cargo XML Filing Guidance', href: 'https://www.zra.org.zm/wp-content/uploads/2024/02/ASYCUDA_IATA_Cargo_XML_Filing_Guidance_Version_Zambia.pdf' },
      { label: 'Zambia Trade Portal: Procedure for Inspection of Compulsory Standards', href: 'https://www.zambiatradeportal.gov.zm/index.php?id=56&r=searchProcedure%2Fview1' },
      { label: 'International Trade Administration: Zambia Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/zambia-import-requirements-documentation' },
    ],
  },
  {
    slug: 'namibia-wdh-namra-sad500-asycuda-air-freight-clearance',
    title: '纳米比亚WDH空运清关：NamRA、SAD500/501、ASYCUDA和进口许可怎么准备？',
    excerpt:
      '中国到纳米比亚WDH空运，矿业设备、能源项目货、工业备件、电子电器和贸易补货不能只看航班。NamRA货物申报、SAD500/501、ASYCUDA、Air Waybill、商业发票箱单、进口许可和检查证书要提前对齐。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['纳米比亚WDH清关资料', 'NamRA SAD500空运', 'Namibia ASYCUDA清关', '中国到纳米比亚空运清关'],
    template: 'generated',
    audience: ['纳米比亚进口商', '矿业和能源设备供应商', '工业备件工厂', '南部非洲项目货代'],
    angle: '把 NamRA 进口申报、SAD500/501、ASYCUDA 和进口许可要求转成 WDH 空运询价前的资料预审动作。',
    sections: [
      {
        heading: 'WDH空运先判断NamRA申报资料',
        body: [
          'WDH 温得和克是纳米比亚项目货、矿业设备、能源设备、工业备件和贸易补货的重要入口。客户只问中国到 WDH 空运多少钱时，销售要先判断进口商、清关代理和 Namibia Revenue Agency（NamRA）申报资料是否能提前跑通。',
          'NamRA 的进口说明写明，进口货清关的主要义务包括提交 goods declaration 和 supporting documents，例如 invoice、bill of lading、Airway Bill、import license、certificates of origin 等，并支付适用税费。空运快，但这些文件如果到港后才补，WDH 也会卡。',
        ],
        bullets: ['NamRA货物申报', 'Air Waybill', '商业发票和运输文件', '进口许可和原产地证'],
      },
      {
        heading: 'SAD500/501和ASYCUDA要跟空运单一致',
        body: [
          'NamRA 页面说明，所有进口到纳米比亚的货物都要向 Customs and Excise 报告；用于销售、工业、商业、机构或类似用途的进口货，需要提交 SAD500/501 declaration form。Namibia Trade Portal 也说明 ASYCUDA World 用于全国海关站点，并支持清关申报通过 SAD500/501 电子处理。',
          '所以 WDH 询价不能只收重量和机场代码。HS Code、英文品名、型号规格、品牌、货值、收货人资料、清关代理、SAD500/501、Air Waybill、commercial invoice cum packing list 和 bill of entry 要能互相对应。',
        ],
        bullets: ['SAD500/501', 'ASYCUDA World', 'Bill of Entry', 'commercial invoice cum packing list'],
      },
      {
        heading: '受控货先问进口许可和检查证书',
        body: [
          'Namibia Trade Portal 的进口许可流程说明，受进口许可管制的货物需要先取得 import permit，并列出 summary of import documents：bill of lading or airway bill、commercial invoice cum packing list、bill of entry，额外可能需要 certificate of origin、inspection certificate 和 import license。',
          '矿业、能源、化工、电子电器、二手设备、车辆相关、食品/农业和受技术标准影响的货物，不适合最后一刻才问监管资料。正确做法是把航班可行性、NamRA/SAD500资料、进口许可和最终交付城市分开确认。',
        ],
        bullets: ['Import permit', 'Inspection certificate', 'Certificate of origin', '受控产品预审'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', 'Bill of Entry/SAD500资料', '进口商NamRA资料', '清关代理资料', '货值和保险/运费资料', 'Certificate of Origin如需', 'Import license/permit如需', 'Inspection certificate如需', 'WDH或最终城市', '每件尺寸重量', '是否需要经JNB或欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'WDH 温得和克航线页', href: '/africa-air-freight/wdh/' },
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '南非JNB清关资料', href: '/insights/south-africa-jnb-sars-nrcs-loa-air-freight-clearance/' },
    ],
    sources: [
      { label: 'NamRA: Importation of Goods', href: 'https://www.namra.org.na/customs-excise/page/importation-of-goods/' },
      { label: 'Namibia Trade Portal: General Export, Import and Transit Procedures', href: 'https://namibiatradeportal.gov.na/general-trade-information/general-export-import-and-transit-procedures' },
      { label: 'Namibia Trade Portal: Procedures for applying import permit at MIT', href: 'https://namibiatradeportal.gov.na/trade-goods/procedure-details/view_express_entity/432' },
      { label: 'NamRA: ASYCUDA Entry Processing System guide', href: 'https://www.namra.org.na/documents/cms/uploaded/asycuda-entry-processing-system-ad6b63734b.pdf' },
    ],
  },
  {
    slug: 'mozambique-mpm-mcnet-jue-air-freight-clearance',
    title: '莫桑比克MPM空运清关：MCNet/JUE、Documento Unico和进口许可怎么准备？',
    excerpt:
      '中国到莫桑比克MPM马普托空运，能源项目货、矿业备件、工业设备、电子电器和贸易补货不能只看航班。Mozambique Single Electronic Window、MCNet/JUE、Documento Unico、Air Waybill、商业发票箱单和进口许可要提前对齐。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['莫桑比克MPM清关资料', 'Mozambique Single Electronic Window', 'Documento Unico Mozambique air freight', 'Maputo airport customs clearance', 'MCNet JUE清关', '中国到莫桑比克空运清关'],
    template: 'generated',
    audience: ['莫桑比克进口商', '能源项目设备供应商', '矿业备件工厂', '东南非项目货代'],
    angle: '把 Mozambique Single Electronic Window、MCNet/JUE电子申报、Documento Unico和产品许可核验转成MPM空运询价前的资料预审动作。',
    sections: [
      {
        heading: 'MPM空运先判断JUE资料',
        body: [
          'MPM 马普托是莫桑比克项目货、能源设备、矿业备件、工业设备和贸易补货的核心入口。客户只问中国到 MPM 空运多少钱时，销售要先判断进口商、清关代理和 MCNet/JUE 资料是否能提前跑通。',
          'MCNet TradeNet 说明，它是 Janela Unica Electronica（JUE）的一部分，用于让国际贸易和运输参与方办理进出口、过境相关流程。页面列出的功能包括 Avisos de Chegada、电子货物舱单、电子申报、支付、许可证/授权和货物追踪。对空运来说，AWB、舱单和到货通知资料不能等货落地后才整理。',
        ],
        bullets: ['Mozambique Single Electronic Window', 'MCNet/JUE', '到货通知', '电子货物舱单'],
      },
      {
        heading: 'Documento Unico要跟商业资料一致',
        body: [
          'Autoridade Tributaria de Mocambique 的海关申报页面说明，报关申报需要提交支持文件和相应的海关程序代码，随后进入税费支付、风险管理、文件核验、实货查验和放行等环节。MCNet 的流程说明也反复出现 BL、invoice、document、item 等申报字段，说明监管系统看的是货物、单证和申报数据的一致性。',
          '所以 MPM 询价不能只收重量和机场代码。HS Code、英文/葡文品名、型号规格、品牌、货值、收货人 NUIT、清关代理、商业发票、装箱单、Air Waybill、合同/付款资料和最终交付城市，都要在订舱前对齐。',
        ],
        bullets: ['Documento Unico', 'Air Waybill', '海关程序代码', '进口商NUIT/清关代理'],
      },
      {
        heading: '进口许可和产品管制要提前问',
        body: [
          'Mozambique Foreign Trade Portal 的进口指南提示，进口流程会随商业属性、产品、原产地和具体要求变化，实操上要按产品数据库和进口商资料核验。也就是说，莫桑比克清关风险经常不是航班问题，而是货物属性和许可/授权问题。',
          '能源、矿业、化工、电气设备、电子电器、二手设备、车辆相关、食品/农业和受技术标准影响的货物，不适合最后一刻才问监管资料。正确动作是把航班可行性、JUE申报、进口许可/授权、目的港费用和马普托外二程交付分开确认。',
        ],
        bullets: ['许可证/授权', '产品数据库核验', '受控货预审', 'MPM外二程交付'],
      },
    ],
    checklist: ['HS Code', '英文/葡文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', '电子货物舱单资料', '到货通知资料', 'Documento Unico/JUE资料', '海关程序代码CPA', '进口商NUIT', '清关代理资料', '合同和货值资料', '许可证或授权如需', 'Certificate of Origin如需', '产品数据库/技术标准核验', 'MPM或最终城市', '每件尺寸重量', '是否需要经JNB/NBO/欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'MPM 马普托航线页', href: '/africa-air-freight/mpm/' },
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: 'JNB 南部非洲入口', href: '/insights/jnb-mining-spares-air-freight/' },
    ],
    sources: [
      { label: 'MCNet TradeNet: Mozambique Single Electronic Window', href: 'https://tradenet.mcnet.co.mz/' },
      { label: 'AT Mozambique: Submissao da Declaracao Aduaneira', href: 'https://www.at.gov.mz/por/Procedimentos-Aduaneiros/Procedimentos/Declaracao-Aduaneira/Submissao-da-Declaracao-Aduaneira' },
      { label: 'Mozambique Foreign Trade Portal: Commerce Guides', href: 'https://portalcomercioexterno.gov.mz/en/commerce-guides/' },
      { label: 'JUE Portal', href: 'https://jue.mcnet.co.mz/mcnet/portal/homepage' },
      { label: 'Trade.gov: Mozambique - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/mozambique-import-requirements-and-documentation' },
      { label: 'Trade.gov: Mozambique - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/mozambique-customs-regulations' },
    ],
  },
  {
    slug: 'drc-fih-dgda-guice-occ-air-freight-clearance',
    title: '刚果金FIH空运清关：DGDA、GUICE、OCC/BIVAC和DAU资料怎么准备？',
    excerpt:
      '中国到刚果金FIH金沙萨空运，通讯设备、政府项目货、工业备件、矿业物资和高价值急件不能只看航班。DGDA海关申报、GUICE单一窗口、DAU电子申报、航空舱单、法语文件和OCC/BIVAC检验要提前对齐。',
    date: '2026-06-30',
    readTime: '15 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['刚果金FIH清关资料', 'DGDA GUICE清关', 'OCC BIVAC刚果金', '中国到刚果金空运清关'],
    template: 'generated',
    audience: ['刚果金进口商', '通讯和政府项目供应商', '矿业设备工厂', '中非项目货代'],
    angle: '把 DGDA 进口清关、GUICE 单一窗口、DAU 电子申报和 OCC/BIVAC 预装运检验转成 FIH 询价前的资料预审动作。',
    sections: [
      {
        heading: 'FIH空运先判断DGDA和航空舱单',
        body: [
          'FIH 金沙萨是刚果金首都区、通讯项目、政府项目、工业备件和西部刚果金需求的重要入口。它和 FBM 卢本巴希矿区逻辑不同：FIH 更容易遇到行政资料、进口商资质、目的港文件和法语单证协同问题。',
          'DGDA 的进口清关说明写明，进入刚果金的国际货物不论海运、陆运还是空运，都要由承运人向海关提交运输工具载货申报。空运场景下，air cargo manifest 是航空货物的载货申报，AWB 是运输合同资料，二者要和发票箱单、品名、件数和重量一致。',
        ],
        bullets: ['DGDA海关', 'Air cargo manifest', 'AWB/LTA', 'FIH金沙萨入口'],
      },
      {
        heading: 'DAU电子申报和5天临时仓不能忽略',
        body: [
          'DGDA 进口流程还说明，进口货物进入海关监管后需要作海关申报，刚果金的海关申报以电子方式办理，使用 Document Administratif Unique（DAU）。页面同时提示，空运和陆运货物临时仓停留期限通常按 5 天计算，文件慢会直接挤压清关窗口。',
          '所以 FIH 询价不能只收重量和机场代码。HS Code、法语/英文品名、型号规格、品牌、货值、原产地、进口商 NIF、清关代理、商业发票、装箱单、AWB、保险/运费、合同和最终交付城市，都要在订舱前对齐。',
        ],
        bullets: ['DAU电子申报', '5天临时仓窗口', '进口商NIF', '法语文件'],
      },
      {
        heading: 'GUICE和OCC/BIVAC决定是否能顺利放行',
        body: [
          'SEGUCE 把 GUICE 定位为刚果金外贸单一窗口，用于进口、出口和过境文件的电子化流转；其预清关模块覆盖进口、出口和过境所需监管文件。Trade.gov 也说明，Kinshasa、Lubumbashi 等试点点位的预清关要在 GUICE 电子平台办理。',
          '刚果金还要提前判断 OCC/BIVAC 预装运检验。DGDA 页面提示进口货物装船前检验仍是法定义务并由 OCC 处理；Trade.gov 进一步列出 BIVAC、OCC、进口许可证、商业发票、装箱单、提单/AWB、保险证书和原产地证等文件。对中国发刚果金空运来说，能飞只是第一关，能通过 OCC/BIVAC、DAU 和 GUICE 才是交付风险的关键。',
        ],
        bullets: ['GUICE单一窗口', 'OCC/BIVAC预装运检验', '进口许可证', 'Certificate of Origin'],
      },
    ],
    checklist: ['HS Code', '法语/英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill/LTA资料', 'air cargo manifest资料', '进口商NIF', '清关代理资料', 'DAU电子申报资料', 'GUICE预清关资料', '进口许可证如需', 'OCC/BIVAC检验资料如需', 'Certificate of Origin如需', '保险证书如需', 'FIH或最终城市', '每件尺寸重量', '是否需要经JNB/NBO/欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'FIH 金沙萨航线页', href: '/africa-air-freight/fih/' },
      { label: 'FBM 卢本巴希矿区货', href: '/insights/fbm-copperbelt-mining-equipment-air-freight/' },
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'DGDA: Procedures de dedouanement a l importation en RDC', href: 'https://douane.gouv.cd/les-procedures-douanieres/les-procedures-de-dedouanement-a-limportation-en-rdc%EF%BF%BC/' },
      { label: 'SEGUCE RDC: Guichet Unique Integral pour le Commerce Exterieur', href: 'https://segucerdc.cd/' },
      { label: 'International Trade Administration: DRC Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/democratic-republic-congo-import-requirements-and-documentation' },
      { label: 'OCC: Office Congolais de Controle', href: 'https://www.occ.cd/' },
    ],
  },
  {
    slug: 'morocco-cmn-adii-badr-portnet-air-freight-clearance',
    title: '摩洛哥CMN空运清关：ADII/BADR、PortNet、DUM和产品许可怎么准备？',
    excerpt:
      '中国到摩洛哥CMN卡萨布兰卡空运，汽车零部件、工业设备、电子通信产品、样品和贸易补货不能只看航班。ADII/BADR电子清关、DUM、PortNet进口手续、法语发票、Air Waybill和产品许可要提前对齐。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['摩洛哥CMN清关资料', 'ADII BADR DUM清关', 'PortNet摩洛哥进口', '中国到摩洛哥空运清关'],
    template: 'generated',
    audience: ['摩洛哥进口商', '汽车零部件供应商', '工业设备工厂', '北非贸易货代'],
    angle: '把 ADII/BADR 电子清关、PortNet 外贸门户和产品许可核验转成 CMN 空运询价前的资料预审动作。',
    sections: [
      {
        heading: 'CMN空运先判断ADII/BADR和DUM',
        body: [
          'CMN 卡萨布兰卡是摩洛哥汽车零部件、工业设备、电子产品、样品和北非贸易补货的重要入口。摩洛哥物流环境比许多非洲目的地成熟，但成熟不等于资料可以晚补；清关数字化程度高，反而要求发票、申报和产品属性更一致。',
          'Trade.gov 的摩洛哥进口文件说明列出所有进出口所需文件：进口/出口许可证、商业发票、import commitment 和海关申报；商业或形式发票应完整描述货物，并在可用时标明 HS code。WCO 对摩洛哥海关数字化的介绍也说明，Déclaration Unique de Marchandises（DUM）和附件文件通过 BADR 在线提交和登记。',
        ],
        bullets: ['ADII/BADR', 'DUM海关申报', '法语货描', 'HS Code和货值'],
      },
      {
        heading: 'PortNet把进口手续前置',
        body: [
          'PortNet Commerce Extérieur 把自己定位为摩洛哥外贸程序的国家参考平台，用于进口和出口手续的编排、无纸化和系统集成。它覆盖进口手续、licences、autorisations、titres d importation、进口产品工业文件、产品符合性证书、计量器具预申报、ONSSA食品进口附件等服务。',
          'PortNet 首页还明确区分 Commerce Extérieur 和 PortNet Cargo；其中 Cargo Community System 面向航空货运、MEAD、机场操作和清关区域管理。对 CMN 空运来说，销售不能只问“到卡萨布兰卡几天”，还要问 importer、transitaire、PortNet/ADII 资料能否提前走。',
        ],
        bullets: ['PortNet Commerce Extérieur', 'titres d importation', 'licences/autorisations', 'PortNet Cargo/MEAD'],
      },
      {
        heading: '电子通信、食品和工业品要先筛许可',
        body: [
          'PortNet 的 ANRT 服务页说明，进口商可通过 PortNet 与 Agence Nationale des Réglementation des télécommunications 交换电信产品的 agrément、dispense 和 autorisation d importation 申请。PortNet Commerce Extérieur 也列出 ONSSA 食品进口附件、MIC 工业品文件、Certificate of Conformity、AMSSNuR 和 NARSA 等产品监管服务。',
          '所以中国到摩洛哥 CMN 空运报价前，要把普通工业货、汽车零部件、带无线/通信功能设备、食品/农产品、计量器具、核安全/辐射相关产品分开筛。能订舱不代表能快速放行；正确动作是把航班、ADII/BADR申报、PortNet许可、产品监管和最终交付城市分开确认。',
        ],
        bullets: ['ANRT电信产品', 'ONSSA食品进口', 'COC工业品符合性', '产品许可预审'],
      },
    ],
    checklist: ['HS Code', '法语/英文品名', '规格型号和品牌', '产品照片', '商业发票或形式发票', '装箱单', 'Air Waybill资料', '进口许可证如需', 'import commitment资料', 'DUM/BADR申报资料', '进口商ICE/税务资料', '清关代理/transitaire资料', 'PortNet账号和手续状态', 'ANRT许可或豁免如需', 'ONSSA文件如需', 'COC或MIC文件如需', '原产地证如需', 'CMN或最终城市', '每件尺寸重量', '最晚到货时间'],
    relatedRoutes: [
      { label: 'CMN 卡萨布兰卡航线页', href: '/africa-air-freight/cmn/' },
      { label: 'EU ICS2/ENS经欧洲中转资料', href: '/insights/eu-ics2-ens-lgg-bru-africa-transit-air-freight/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
    ],
    sources: [
      { label: 'Trade.gov: Morocco Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/morocco-import-requirements-and-documentation' },
      { label: 'PortNet: Commerce Extérieur', href: 'https://www.portnet.ma/portnet-commerce-exterieur' },
      { label: 'PortNet: Demandes d agrément ANRT', href: 'https://www.portnet.ma/demandes-agrement-anrt' },
      { label: 'WCO: Dématérialisation des procédures douanières au Maroc', href: 'https://mag.wcoomd.org/fr/magazine/omd-actu-94/dematerialisation-douane-maroc/' },
    ],
  },
  {
    slug: 'egypt-cai-nafeza-aci-cargox-goeic-air-freight-clearance',
    title: '埃及CAI空运清关：NAFEZA/ACI、ACID、CargoX和GOEIC资料怎么准备？',
    excerpt:
      '中国到埃及CAI开罗空运，工业设备、汽车零部件、电子电器、样品和贸易补货不能只看航班。NAFEZA ACI预申报、ACID、CargoX文件上传、商业发票箱单、Air Waybill和GOEIC产品检验要提前对齐。',
    date: '2026-06-30',
    readTime: '15 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['埃及CAI清关资料', 'NAFEZA ACI空运', 'CargoX ACID埃及', '中国到埃及空运清关'],
    template: 'generated',
    audience: ['埃及进口商', '汽车零部件供应商', '工业设备工厂', '北非中东贸易货代'],
    angle: '把 NAFEZA ACI、ACID、CargoX 文件包和 GOEIC 产品检验转成 CAI 空运询价前的资料预审动作。',
    sections: [
      {
        heading: 'CAI空运先判断ACI和ACID',
        body: [
          'CAI 开罗是埃及工业设备、汽车零部件、电子电器、样品和贸易补货的重要入口。埃及的清关风险不是单纯“目的港代理能不能清”，而是 ACI/ACID、进口商资料、文件上传和产品监管是否能在起飞前对齐。',
          'NAFEZA 的 Advance Cargo Information 页面说明，ACI 是埃及海关程序，要求货物数据或文件在出口国发运前至少 48 小时提交，以便通过风险管理系统监控风险；受影响方包括进口商、海外出口商/供应商、清关公司以及海运/空运公司。对 CAI 空运来说，订舱前就要问 ACID 是否已经申请、资料是否可以锁定。',
        ],
        bullets: ['NAFEZA ACI', 'ACID预申报', '48小时前资料', '空运公司/清关公司协同'],
      },
      {
        heading: 'CargoX文件包不能等航班起飞后补',
        body: [
          'NAFEZA 页面把 CargoX 列为认证的区块链服务提供方，并说明海外出口商需要通过供应链网络把装运文件发送到 NAFEZA。另一页文件清单列出多数 ACI filing 需要 commercial invoice、packing list、bill of lading copy、certificate of origin，并提醒单个文件上传大小不要超过 5 MB；根据货物，还可能需要 certificate of inspection、certificate of insurance、MSDS、phytosanitary certificate、health certificate、veterinary certificate 等。',
          '空运场景下，提单逻辑要转换成 Air Waybill/AWB 资料和航空舱单资料。发票、箱单、品名、HS Code、件数、重量、货值、原产地和 ACID 信息必须互相一致；否则即使航班能飞，CAI 到港后也会被文件差异拖慢。',
        ],
        bullets: ['CargoX上传', '商业发票和箱单', 'AWB资料', 'Certificate of Origin/MSDS如需'],
      },
      {
        heading: 'GOEIC检验和受控产品要提前筛',
        body: [
          'GOEIC 的工业进口说明显示，其职责包括防止不符合技术标准的进口商品通过合法渠道进入本地市场，并覆盖工程、建筑材料、化工、纺织皮革、金属机械、电器和杂项商品等品类。GOEIC 预装运检验证书服务还说明，特定清单商品可凭符合条件的检验证书和生产商注册信息办理进口批次清关。',
          '所以中国到埃及 CAI 空运，不能只问价格和航班。汽车配件、电器、灯具、机械设备、化工品、食品/健康相关、带电池或 MSDS 的货物，要先判断 GOEIC、进口许可证、检验证书、原产地证和 NAFEZA/CargoX 文件是否齐。正确动作是把航班可行性、ACI/ACID、CargoX文件、GOEIC检验和最终交付城市分开确认。',
        ],
        bullets: ['GOEIC工业进口', '预装运检验证书', '电器/机械/化工预审', '进口许可证和原产地证'],
      },
    ],
    checklist: ['HS Code', '英文/阿拉伯文或英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', '航空舱单资料', 'ACID号码', 'NAFEZA账号/进口商资料', 'CargoX账号和文件上传状态', '进口商税务/注册资料', '清关代理资料', 'Certificate of Origin如需', 'Certificate of Inspection如需', 'GOEIC产品检验是否涉及', 'MSDS/电池资料如需', '保险证书如需', 'CAI或最终城市', '每件尺寸重量', '最晚到货时间'],
    relatedRoutes: [
      { label: 'CAI 开罗航线页', href: '/africa-air-freight/cai/' },
      { label: 'CMN 北非清关资料', href: '/insights/morocco-cmn-adii-badr-portnet-air-freight-clearance/' },
      { label: 'EU ICS2/ENS经欧洲中转资料', href: '/insights/eu-ics2-ens-lgg-bru-africa-transit-air-freight/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'NAFEZA: Advance Cargo Information System', href: 'https://www.nafeza.gov.eg/en/pages/15' },
      { label: 'NAFEZA: Documents required to create an ACI file', href: 'https://www.nafeza.gov.eg/en/pages/32' },
      { label: 'GOEIC: Industrial Imports', href: 'https://www.goeic.gov.eg/en/services-and-activities/industrial-and-non-industrial-imports/industrial-imports' },
      { label: 'GOEIC: Goods Requiring Pre-shipment Inspection Certificates', href: 'https://www.goeic.gov.eg/en/electronic-services/show/1220' },
    ],
  },
  {
    slug: 'ethiopia-add-customs-ecms-esw-air-freight-clearance',
    title: '埃塞俄比亚ADD空运清关：Ethiopian Customs、eCMS、eSW和ECAE资料怎么准备？',
    excerpt:
      '中国到埃塞俄比亚ADD亚的斯亚贝巴空运，工业设备、医疗设备、电子电器、项目备件和贸易补货不能只看ET航班。Ethiopian Customs eCMS/e-SAD、Electronic Single Window、进口许可证、Air Waybill、商业发票箱单和ECAE产品认证要提前对齐。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['埃塞俄比亚ADD清关资料', 'Ethiopian Customs eCMS', '埃塞eSW进口许可', '中国到埃塞俄比亚空运清关'],
    template: 'generated',
    audience: ['埃塞俄比亚进口商', '工业设备供应商', '医疗和电子设备工厂', '东非项目货代'],
    angle: '把 Ethiopian Customs eCMS/e-SAD、Electronic Single Window、进口许可证和 ECAE 认证转成 ADD 空运询价前的资料预审动作。',
    sections: [
      {
        heading: 'ADD空运不能只看ET航班',
        body: [
          'ADD 亚的斯亚贝巴既是埃塞本地进口入口，也是 ET 航空非洲网络的核心中转点。客户只问中国到 ADD 空运多少钱时，销售要先判断是本地进口、区域中转，还是经 ADD 转往其他非洲点；这三种情况的文件风险完全不同。',
          'Ethiopian Customs 的 eCMS/Trade Transactions Portal 手册显示，进口申报会涉及 declarant、consignee、bank permit、manifest、country of consignment、transport mode、place of loading/unloading 等字段，并可在 ADDIS ABABA BOLE INTERNATIONAL AIRPORT 等关区处理。也就是说，AWB、舱单、进口商和银行/许可证资料要在订舱前对齐。',
        ],
        bullets: ['Ethiopian Customs', 'eCMS/e-SAD', 'ADD Bole Airport', 'bank permit和manifest'],
      },
      {
        heading: 'eSW和进口许可证要提前跑通',
        body: [
          'Trade.gov 的埃塞海关规则说明，埃塞已经建立 electronic single-window 服务用于国际贸易，并允许授权进口商用较少文件电子化完成行政程序。对空运急件来说，这不是到港后才开始做的流程，而是询价阶段就要核验进口商和清关代理是否具备线上提交能力。',
          '埃塞是内陆国，Trade.gov 同时提示其外贸高度依赖吉布提口岸；但 ADD 空运仍然要面对本地海关、进口许可证、税费、产品监管和最终交付责任。正确报价动作不是只报 ET 航班，而是先拿到 HS Code、英文品名、货值、进口商资料、许可证状态、AWB/舱单字段和最终城市。',
        ],
        bullets: ['Electronic Single Window', '进口许可证', '授权进口商', '本地交付责任'],
      },
      {
        heading: 'ECAE和受控产品要单独筛',
        body: [
          'Trade.gov 的埃塞进口文件说明列出 commercial invoice、certificate of origin、packing list、bill of lading、insurance certificate、import permit、foreign exchange permit 和 cargo transit document 等常见文件，并提示食品、医药、农业和通信等产品可能要走额外主管部门要求。',
          'Trade.gov 的埃塞标准页还说明，Ethiopian Conformity Assessment Enterprise（ECAE）涉及测试、检验和认证服务。工业设备、电器、医疗设备、通信设备、食品/农业相关、带电池或需要 MSDS 的货物，不能最后一刻才问产品认证。能飞到 ADD 是航段问题，能清关放行是监管资料问题。',
        ],
        bullets: ['ECAE认证', 'Certificate of Origin', 'Import permit', '受控产品预审'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', '航空舱单资料', '进口商TIN/资料', '清关代理/declarant资料', 'bank permit如需', 'import permit如需', 'eCMS/e-SAD字段预审', 'eSW提交状态', 'Certificate of Origin如需', 'ECAE认证或检验如需', 'MSDS/电池资料如需', 'ADD或最终城市', '每件尺寸重量', '是否为本地进口或ADD中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'ADD 亚的斯亚贝巴航线页', href: '/africa-air-freight/add/' },
      { label: 'ET/ADD非洲中转选择', href: '/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: 'CAI 北非ACI清关资料', href: '/insights/egypt-cai-nafeza-aci-cargox-goeic-air-freight-clearance/' },
    ],
    sources: [
      { label: 'Ethiopian Customs: eCMS Trade Transactions Portal Introduction', href: 'https://customs.erca.gov.et/files/downloads/WFET-CMS-MAN-0002%20ERCA%20Trade%20Transactions%20Portal%20Introduction_V1.7.pdf' },
      { label: 'Trade.gov: Ethiopia Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/ethiopia-import-requirements-and-documentation' },
      { label: 'Trade.gov: Ethiopia Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/ethiopia-customs-regulations' },
      { label: 'Trade.gov: Ethiopia Trade Standards', href: 'https://www.trade.gov/country-commercial-guides/ethiopia-trade-standards' },
    ],
  },
  {
    slug: 'zimbabwe-hre-zimra-asycuda-cbca-air-freight-clearance',
    title: '津巴布韦HRE空运清关：ZIMRA、ASYCUDA、Bill of Entry和CBCA怎么准备？',
    excerpt:
      '中国到津巴布韦HRE哈拉雷空运，矿业设备、农业机械、工厂备件、医疗设备和工业货不能只看航班。ZIMRA商业进口、ASYCUDA World、Bill of Entry/Form 21、商业发票箱单、Air Waybill和CBCA/PVoC证书要提前对齐。',
    date: '2026-06-30',
    readTime: '14 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['津巴布韦HRE清关资料', 'ZIMRA ASYCUDA清关', 'CBCA PVoC津巴布韦', '中国到津巴布韦空运清关'],
    template: 'generated',
    audience: ['津巴布韦进口商', '矿业设备供应商', '农业机械工厂', '南部非洲项目货代'],
    angle: '把 ZIMRA 商业进口、ASYCUDA World、Bill of Entry/Form 21 和 CBCA/PVoC 证书转成 HRE 空运询价前的资料预审动作。',
    sections: [
      {
        heading: 'HRE空运先判断ZIMRA商业进口',
        body: [
          'HRE 哈拉雷适合津巴布韦矿业、农业机械、工厂维修、医疗设备和工业项目货。客户只问中国到 HRE 空运多少钱时，销售要先判断进口商、注册清关代理和 ZIMRA 商业进口资料是否能跑通。',
          'ZIMRA 的商业进口指南说明，商业进口清关需要 Bill of Entry（Form 21）、supplier invoices、packing lists、freight statements、export/transit bill of entry 等文件；税费按进口货物的 CIF value 计算。空运场景下，Air Waybill、运费、保险、发票、箱单和货值要能互相对应。',
        ],
        bullets: ['ZIMRA商业进口', 'Bill of Entry/Form 21', 'CIF value', '商业发票和运费资料'],
      },
      {
        heading: 'ASYCUDA和清关代理不是到港才找',
        body: [
          'ZIMRA 的清关流程页说明，商业进口用 ASYCUDA World 处理 Bill of Entry，清关代理和注册公司通过这个互联网系统电子提交清关文件，所有支持文件要扫描后作为附件在线提交。页面还提示进口商应有用于海关目的的 Business Partner Number。',
          '所以 HRE 询价不能只收重量和机场代码。HS Code、英文品名、型号规格、品牌、货值、进口商 Business Partner Number、清关代理、AWB、发票箱单、保险/运费和最终交付城市都要在订舱前核验。',
        ],
        bullets: ['ASYCUDA World', '注册清关代理', 'Business Partner Number', '电子附件提交'],
      },
      {
        heading: 'CBCA/PVoC证书决定受控产品能否放行',
        body: [
          'Zimbabwe Ministry of Industry and Commerce 的 CBCA 页面说明，CBCA 是 Pre-Export Verification of Conformity（PVoC）项目，用于防止不合格产品进口；受管制产品进入津巴布韦前要做符合性评估并出具 Certificate of Conformity，以证明符合本地或认可国际标准。',
          '矿业设备、农业机械、汽车配件、电气设备、建材、化工、医疗和其他受标准影响的货物，不能等货到哈拉雷后才问 CBCA。正确动作是把航班装载、ZIMRA/ASYCUDA资料、CBCA/PVoC证书、进口许可证和最终交付责任分开确认。',
        ],
        bullets: ['CBCA Programme', 'PVoC', 'Certificate of Conformity', '受控产品预审'],
      },
    ],
    checklist: ['HS Code', '具体英文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', 'freight statement', 'insurance资料如需', 'Bill of Entry/Form 21资料', '进口商Business Partner Number', '注册清关代理资料', 'ASYCUDA附件扫描资料', 'export/transit bill of entry如需', 'CBCA/PVoC证书如需', 'Certificate of Conformity如需', '进口许可证如需', 'HRE或最终城市', '每件尺寸重量', '是否需RIB或内陆清关', '最晚到货时间'],
    relatedRoutes: [
      { label: 'HRE 哈拉雷航线页', href: '/africa-air-freight/hre/' },
      { label: 'ET/ADD非洲中转选择', href: '/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/' },
      { label: 'JNB 南部非洲入口', href: '/insights/jnb-mining-spares-air-freight/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'ZIMRA: Commercial guidelines on imports and exports', href: 'https://www.zimra.co.zw/customs/commercial-guidelines-on-imports-exports' },
      { label: 'ZIMRA: Customs clearance procedures', href: 'https://www.zimra.co.zw/customs/customs-clearance-procedures' },
      { label: 'ZIMRA: List of clearing agents', href: 'https://www.zimra.co.zw/13-tax/customs/350-list-of-clearing-agents' },
      { label: 'Zimbabwe Ministry of Industry and Commerce: CBCA Programme', href: 'https://www.mic.gov.zw/?service=programmes' },
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
    slug: 'china-africa-air-freight-cost-chargeable-weight',
    title: '中国到非洲空运多少钱一公斤？先算计费重和真实附加费',
    excerpt:
      '客户搜索“非洲空运多少钱一公斤”时，真正要回答的是计费重、泡货、目的港、清关资料、燃油和项目货操作边界。',
    date: '2026-06-30',
    readTime: '10 分钟',
    category: '询价转化',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['非洲空运多少钱一公斤', '中国到非洲空运价格', '空运计费重', '非洲空运报价'],
    template: 'generated',
    audience: ['中国工厂', '贸易商', '跨境项目采购', '货代同行'],
    angle: '把“多少钱一公斤”的泛搜索，转成可报价的计费重和资料清单。',
    sections: [
      {
        heading: '先别只问每公斤价格',
        body: [
          '中国到非洲空运报价不是把总重量乘一个单价。客户搜索“多少钱一公斤”时，通常还没有把货物尺寸、体积重、目的机场、最终城市、清关责任和时效要求讲清。',
          '同样是 300kg，实重货、泡货、超长件、带电设备和需要主甲板的项目货，价格逻辑完全不同。真正能成交的回复，应该先把计费重和操作边界讲出来。',
        ],
        bullets: ['实重和体积重', '目的机场', '货物属性', '清关责任'],
      },
      {
        heading: '计费重决定报价基础',
        body: [
          '空运通常按实重和体积重两者取高来计费。常见体积重口径是长 x 宽 x 高厘米数除以 6000，再乘件数；具体还要看航司、代理和产品规则。',
          '这就是为什么一个看起来很轻的机器外壳，可能按很高的计费重收费；一个很重但体积小的备件，反而更接近实重报价。',
        ],
        bullets: ['长宽高厘米', '件数', '实重', '体积重'],
      },
      {
        heading: '非洲报价要拆到落地风险',
        body: [
          '非洲空运不能只给机场到机场价格。客户真正关心的是能不能按时到、资料会不会卡、目的港费用谁承担、是否需要当地代理协助清关和二程。',
          '报价页面应该把价格问题变成询价表：起运城市、目的机场、最终城市、货物照片、HS Code、发票货值、进口商资料和最晚到货时间。',
        ],
        bullets: ['机场到机场', '目的港费用', '清关资料', '二程交付'],
      },
    ],
    checklist: ['起运城市', '目的机场', '最终城市', '品名用途', 'HS Code', '件数', '每件尺寸', '每件毛重', '包装照片', '货值', '是否带电/带液', '最晚到货时间'],
    relatedRoutes: [
      { label: '非洲航线 Hub', href: '/africa-air-freight/' },
      { label: '超大件询价清单', href: '/insights/oversized-air-freight-quote-checklist/' },
      { label: 'JNB 约翰内斯堡', href: '/africa-air-freight/jnb/' },
      { label: 'FBM 卢本巴希', href: '/africa-air-freight/fbm/' },
    ],
    sources: [
      { label: 'Maersk: Air cargo chargeable weight calculation explained', href: 'https://www.maersk.com/logistics-explained/transportation-and-freight/2025/03/10/air-cargo-chargeable-weight' },
      { label: 'DHL: Calculating Chargeable Weight by Air, Ocean, Road and Rail', href: 'https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html' },
      { label: 'UPS: Chargeable Weight Definition', href: 'https://www.ups.com/us/en/supplychain/resources/glossary-term/chargeable-weight' },
    ],
  },
  {
    slug: 'china-africa-air-freight-forwarder-for-factories',
    title: '中国工厂找非洲空运货代：不要只找低价，要找能判断异常票的人',
    excerpt:
      '工厂发非洲空运，最容易在尺寸、资料、目的港清关和二程交付上出问题。选货代要看路线判断能力，不是只看报价表。',
    date: '2026-06-30',
    readTime: '9 分钟',
    category: '获客方法',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['非洲空运货代', '中国到非洲货代', '工厂出口非洲空运', '非洲项目货货代'],
    template: 'generated',
    audience: ['出口工厂', '外贸业务员', '设备供应商', '项目采购'],
    angle: '承接“找货代”搜索，把选择标准转成 EASCargo 的路线判断能力。',
    sections: [
      {
        heading: '工厂最怕的不是运价高',
        body: [
          '工厂发非洲空运，真正贵的是货到机场才发现清不了、装不了、交不了、客户现场收不了。低价报价如果没有判断这些边界，风险会被推迟到出运后。',
          '尤其是矿业备件、机械设备、电气柜、医疗设备和工程急件，货代不能只转发价格，必须先判断货物能不能装、目的地能不能接。',
        ],
        bullets: ['装机限制', '清关资料', '目的港费用', '现场交付'],
      },
      {
        heading: '选货代先问三个问题',
        body: [
          '第一，他能不能看懂每件尺寸重量和包装照片；第二，他能不能说清楚目的机场和最终城市的区别；第三，他是否会主动追问进口商资料、HS Code、货值和最晚到货时间。',
          '如果对方只回答“多少钱一公斤”，但不问货物属性和目的地责任，这类报价对项目货没有保护价值。',
        ],
        bullets: ['是否看尺寸照片', '是否问最终城市', '是否问清关责任', '是否讲时效边界'],
      },
      {
        heading: 'EASCargo 适合哪类工厂询盘',
        body: [
          '更适合有真实货物、真实项目节点、真实非洲收货人的询盘。普通小包裹、纯比价和没有资料的套价，不是最好的匹配。',
          '如果你有非洲设备、备件、急件、大件或异常票，先把资料发完整，再判断直飞、ADD中转、LGG/BRU欧洲中转、主甲板或包机。',
        ],
        bullets: ['矿业设备', '工程备件', '大件异常票', '时效敏感急件'],
      },
    ],
    checklist: ['品名用途', 'HS Code', '件数', '每件尺寸重量', '包装照片', '起运地', '目的机场', '最终城市', '进口商资料', '最晚到货时间'],
    relatedRoutes: [
      { label: '非洲航线 Hub', href: '/africa-air-freight/' },
      { label: 'LGG/BRU 非洲中转', href: '/zh/lgg-africa-gateway/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '超大件询价清单', href: '/insights/oversized-air-freight-quote-checklist/' },
    ],
  },
  {
    slug: 'africa-mining-equipment-air-freight-rfq-template',
    title: '非洲矿业设备空运询价模板：泵、电机、备件和停产急件怎么发资料？',
    excerpt:
      '矿业备件空运到 JNB/FBM/LUN/CKY/BKO，不能只发品名重量。询价资料要能支持路线、装机、清关和现场交付判断。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '询价转化',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['非洲矿业设备空运', '矿业备件空运询价', 'FBM矿区空运', 'JNB矿业急件'],
    template: 'generated',
    audience: ['矿山供应商', '工业设备工厂', '非洲项目采购', '货代销售'],
    angle: '用可复制询价模板拦截矿业设备和停产急件搜索。',
    sections: [
      {
        heading: '矿业急件先判断停产成本',
        body: [
          '矿业备件不是普通补货。泵、电机、减速机、传感器、电气柜、阀门和破碎机配件，一旦影响现场停产，客户买的是确定性和速度。',
          '这类询价要先问最晚到货时间、现场位置、是否可以拆箱、是否有吊装条件和进口商清关能力，再判断走 JNB、FBM、LUN、CKY、BKO 或其他入口。',
        ],
        bullets: ['停产时间', '现场位置', '吊装条件', '清关能力'],
      },
      {
        heading: '模板要一次性收齐',
        body: [
          '低质量询价会浪费一整天：只发“300kg到非洲多少钱”，然后再补尺寸、再补照片、再补目的地。矿业急件应该一开始就用模板收资料。',
          '模板的目标不是让客户填表，而是让报价员能马上判断可行路线、计费重、舱位类型、目的地风险和需要谁确认。',
        ],
        bullets: ['品名用途', '型号照片', '尺寸重量', '最终矿区'],
      },
      {
        heading: '可以直接发给客户的资料要求',
        body: [
          '请提供品名、用途、品牌型号、HS Code、件数、每件尺寸重量、包装照片、货值、起运城市、目的机场、最终矿区或工厂地址、收货人/进口商信息、是否需要上门提货、最晚到货时间。',
          '如果货物超长、超重、不可倒置、含油、含电池、带液体或需要木包装，也要提前说明。否则报价成立不等于出运成立。',
        ],
        bullets: ['可复制给客户', '减少反复追问', '过滤套价询盘', '保护项目节点'],
      },
    ],
    checklist: ['品名用途', '品牌型号', 'HS Code', '件数', '每件尺寸重量', '包装照片', '货值', '起运城市', '目的机场', '最终矿区地址', '进口商资料', '最晚到货时间'],
    relatedRoutes: [
      { label: 'JNB 矿业急件', href: '/insights/jnb-mining-spares-air-freight/' },
      { label: 'FBM 铜钴矿区', href: '/insights/fbm-copperbelt-mining-equipment-air-freight/' },
      { label: 'LUN 工业设备', href: '/insights/lun-zambia-industrial-air-freight-guide/' },
      { label: 'CKY 几内亚', href: '/africa-air-freight/cky/' },
    ],
  },
  {
    slug: 'oversized-air-cargo-booking-documents-main-deck-africa',
    title: '非洲超大件空运订舱资料：主甲板、重心、吊点和包装照片怎么准备？',
    excerpt:
      '超长、超高、超重货去非洲，能不能订到舱取决于尺寸重量、重心、吊点、包装和飞机/ULD限制，不是只看总公斤数。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '航线方案',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['非洲超大件空运', '主甲板空运订舱资料', '大件空运包装照片', 'LGG BRU非洲大件'],
    template: 'generated',
    audience: ['项目采购', '设备工厂', '工程物流团队', '货代同行'],
    angle: '把“超大件能不能飞”的搜索，落到主甲板订舱资料和装机判断。',
    sections: [
      {
        heading: '超大件不是总重量问题',
        body: [
          '一票货 2 吨不一定难，一件 8 米长、1.9 米高、重心偏、不能倒置的货才难。非洲超大件空运要先看单件尺寸、地板承载、货舱门、ULD/板位、重心和装卸方式。',
          '如果资料不完整，航司或包机方无法判断能否装机。越晚补资料，越容易错过舱位窗口。',
        ],
        bullets: ['单件尺寸', '货舱门', '板位限制', '重心和吊点'],
      },
      {
        heading: '主甲板订舱要准备什么',
        body: [
          '主甲板或全货机方案，至少需要每件长宽高、毛重、包装底座、是否可叉、是否有吊点、重心位置、照片或图纸、是否可叠放、是否可倾斜、是否危险品或带电带液。',
          '去 JNB、FBM、LUN、LBV、ACC、ABJ 等非洲点，还要同步确认目的地卸货设备和最终交付城市。',
        ],
        bullets: ['包装底座', '叉车孔', '吊点图', '不可倒置标识'],
      },
      {
        heading: '什么时候走 LGG/BRU',
        body: [
          '当国内直飞不接、目的地舱位弱、货物尺寸需要主甲板或需要欧洲重新组合方案时，可以评估 LGG/BRU 中转非洲。',
          '欧洲中转不是为了把流程变复杂，而是为了把标准航线接不了的异常票做出来。前提是客户接受中转时间、交接责任和资料要求。',
        ],
        bullets: ['直飞不接', '主甲板窗口', '欧洲中转组合', '非洲二程能力'],
      },
    ],
    checklist: ['每件长宽高', '每件毛重', '包装照片', '重心位置', '吊点/叉车孔', '是否可叠放', '是否可倾斜', '是否不可倒置', '货物图纸', '目的机场', '最终城市', '卸货条件'],
    relatedRoutes: [
      { label: 'LGG/BRU 非洲中转', href: '/zh/lgg-africa-gateway/' },
      { label: 'LBV 8米长货', href: '/insights/lbv-gabon-8-meter-cargo-via-lgg-bru/' },
      { label: '非洲航线 Hub', href: '/africa-air-freight/' },
      { label: '超大件询价清单', href: '/insights/oversized-air-freight-quote-checklist/' },
    ],
    sources: [
      { label: 'IATA: What is Aircraft ULD in Air Transport?', href: 'https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/what-is-aircraft-uld-in-air-transport/' },
      { label: 'IATA: Unit Load Devices', href: 'https://www.iata.org/en/programs/cargo/cargo-operations/unit-load-devices/' },
      { label: 'IATA: What Types of Cargo are Transported by Air?', href: 'https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/what-types-of-cargo-are-transported-by-air/' },
    ],
  },
  {
    slug: 'eu-ics2-ncts-phase6-valid-ens-lgg-bru-africa-air-freight',
    title: '欧盟ICS2/NCTS Phase 6 2026：经LGG/BRU中转非洲为什么要提前补ENS资料？',
    excerpt:
      '欧盟ICS2和NCTS Phase 6让经欧洲中转的货物更依赖有效ENS资料。中国到非洲项目货经LGG/BRU时，不能等交仓后再补品名、HS Code和收发货人信息。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['ICS2 NCTS Phase 6', '欧盟ENS申报', 'valid ENS 2026', 'LGG BRU中转非洲', '欧洲中转空运资料'],
    template: 'generated',
    audience: ['中国货代', '项目货工厂', '欧洲中转操作', '非洲收货人'],
    angle: '用 2026 年欧盟 valid ENS 变化，承接经 LGG/BRU 中转非洲的合规搜索。',
    sections: [
      {
        heading: '为什么 2026 年还要继续盯 ICS2',
        body: [
          '很多客户以为 ICS2 只是欧盟进口货规则，和非洲项目货无关。实际操作里，中国到非洲的大件、矿业备件和工程设备，经常会先到 LGG/BRU 等欧洲节点，再衔接非洲航班、包机或地面交接。',
          '欧盟官方把 ICS2 定位为入境安全与安保预申报系统，要求相关经济运营方提交 ENS 数据。2026 年和 NCTS Phase 6 相关的 valid ENS 逻辑，会让数据完整性对欧洲中转链路更敏感。',
        ],
        bullets: ['入境安全申报', 'valid ENS', 'LGG/BRU 中转', '非洲二程衔接'],
      },
      {
        heading: '经欧洲中转时，问题通常不是系统名',
        body: [
          '真正造成延误的不是客户是否知道 ICS2 或 NCTS，而是资料质量：品名写得太泛、HS Code 不确定、收发货人信息不完整、路线和中转责任没讲清、包装和尺寸重量最后才补。',
          '对超大件和主甲板货来说，ENS 补料会影响的不只是报关动作。仓库交接、板位计划、航班窗口、欧洲到非洲二程和目的地清关，都可能被同一份资料拖住。',
        ],
        bullets: ['具体英文品名', 'HS Code', '收发货人信息', '中转责任'],
      },
      {
        heading: '销售应该怎样把规则变成询价动作',
        body: [
          '不要把欧盟政策讲成抽象新闻。对客户最有用的动作，是在询价阶段就把 ENS 需要的核心资料收齐：具体品名、用途材质、HS Code、发票货值、发货人、收货人、EORI/税号场景、起运机场、欧洲中转点、非洲目的机场和最终城市。',
          '如果客户只发“设备配件到非洲多少钱”，先不要报价。先让客户补资料，否则低价报价可能在欧洲中转时变成补料、查验或错过二程窗口。',
        ],
        bullets: ['询价前置', '资料预审', '欧洲节点确认', '非洲目的地确认'],
      },
    ],
    checklist: ['具体英文品名', '用途和材质', 'HS Code', '发票货值', '发货人信息', '收货人信息', '起运机场', 'LGG/BRU中转点', '非洲目的机场', '最终城市', '每件尺寸重量', '包装照片'],
    relatedRoutes: [
      { label: 'ICS2/ENS 通用说明', href: '/insights/eu-ics2-ens-lgg-bru-africa-transit-air-freight/' },
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: '超大件主甲板订舱资料', href: '/insights/oversized-air-cargo-booking-documents-main-deck-africa/' },
      { label: '非洲航线 Hub', href: '/africa-air-freight/' },
    ],
    sources: [
      { label: 'European Commission: Import Control System 2 (ICS2)', href: 'https://taxation-customs.ec.europa.eu/customs/customs-security/import-control-system-2_en' },
      { label: 'European Commission: ICS2 Release 3 - Maritime and Inland Waterways, Road and Rail', href: 'https://taxation-customs.ec.europa.eu/news/import-control-system-2-release-3-maritime-and-inland-waterways-road-and-rail-2025-02-27_en' },
      { label: 'European Commission: Union Customs Code Work Programme', href: 'https://taxation-customs.ec.europa.eu/customs-4/union-customs-code/ucc-work-programme_en' },
    ],
  },
  {
    slug: 'nigeria-los-bodogwu-form-m-paar-air-freight-clearance',
    title: '尼日利亚LOS空运清关新重点：B’Odogwu、Form M、PAAR和机场30天窗口怎么配合？',
    excerpt:
      '尼日利亚LOS空运不能只看运价。B’Odogwu、Form M、PAAR、运输单证、产品证书和机场到港后30天清关窗口，都要在订舱前讲清。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['B’Odogwu尼日利亚清关', 'Form M PAAR LOS空运', '尼日利亚空运清关资料', 'Nigeria B’Odogwu', 'LOS机场清关'],
    template: 'generated',
    audience: ['尼日利亚进口商', '中国设备工厂', '油气设备供应商', '货代同行'],
    angle: '把尼日利亚 B’Odogwu 和 Form M/PAAR 变化转成 LOS 空运询价前的资料清单。',
    sections: [
      {
        heading: 'B’Odogwu 不是一个可以忽略的后台名词',
        body: [
          '尼日利亚海关正在推进 B’Odogwu 相关系统和门户，官方材料把它放在电子服务和通关流程里。对中国到 LOS 的空运货来说，这类系统变化会影响 Form M、舱单、申报和放行资料的衔接。',
          '销售不能只告诉客户“尼日利亚可以走”。更应该问：进口商是否能处理 Form M，PAAR 是否匹配，产品证书是否需要，空运单证和发票箱单是否能对应。',
        ],
        bullets: ['B’Odogwu系统', 'Form M', 'PAAR', '空运单证一致'],
      },
      {
        heading: 'LOS空运报价前要把资料边界讲清',
        body: [
          '尼日利亚空运常见风险不是没有航班，而是清关资料不完整、申报信息不一致、监管证书缺失、目的港费用边界不清。官方 FAQ 中反复出现 Form M、PAAR、SGD、发票、装箱单、运输单证和产品证书这些核心材料。',
          '空运场景下，运输单证要对应 AWB。品名、HS Code、货值、件数、重量、收发货人和进口商资料必须和清关系统里的资料一致，否则到港后再改会拖慢放行。',
        ],
        bullets: ['AWB', 'Commercial invoice', 'Packing list', 'Product certificate'],
      },
      {
        heading: '机场30天窗口要提前提醒客户',
        body: [
          '尼日利亚海关公开提示里提到，机场货物到达后有30天清关窗口，超过期限会进入超期货物处理流程。对高价值设备、油气备件和工厂急件来说，到港后才发现文件不全，会把空运时效优势吃掉。',
          '正确做法是在订舱前给客户发资料清单，并把“不含目的地清关、不含目的港额外费用、进口商责任”写清楚。价格要服务交付，不是把风险藏起来。',
        ],
        bullets: ['30天清关窗口', '超期货物风险', '目的港费用边界', '进口商责任'],
      },
    ],
    checklist: ['Form M状态', 'PAAR状态', 'HS Code', '具体品名用途', 'Commercial invoice', 'Packing list', 'AWB资料', '产品证书/SONCAP场景', '进口商TIN/资料', '货值币种', '目的港费用边界', '最终城市'],
    relatedRoutes: [
      { label: '尼日利亚SONCAP/Form M/PAAR', href: '/insights/nigeria-los-soncap-formm-paar-air-freight/' },
      { label: 'LOS 拉各斯航线页', href: '/africa-air-freight/los/' },
      { label: '尼日利亚LOS风险说明', href: '/insights/nigeria-los-air-freight-customs-risk/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Nigeria Customs Service: B’Odogwu Portal', href: 'https://bodogwu.customs.gov.ng/' },
      { label: 'Nigeria Customs Service: Frequently Asked Questions', href: 'https://customs.gov.ng/?page_id=2819' },
      { label: 'Nigeria Customs Service: Things You Must Know', href: 'https://customs.gov.ng/?page_id=3078' },
      { label: 'Federal Ministry of Information: NCS to commence pilot of Form M on B’Odogwu platform', href: 'https://fmino.gov.ng/ncs-to-commence-pilot-of-form-m-on-bodogwu-platform/' },
    ],
  },
  {
    slug: 'iata-dgr-67-lithium-battery-3m-stack-test-africa-air-freight',
    title: 'IATA DGR第67版锂电池空运：PI966/PI967 3米堆码测试和非洲带电设备怎么准备？',
    excerpt:
      'IATA DGR每年更新，2026年第67版和锂电池包装要求会影响带电设备、工具、仪器和项目备件空运到非洲。询价前要确认UN编号、PI966/PI967场景、包装测试、MSDS和UN38.3。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['IATA DGR第67版', 'PI966 PI967空运', '锂电池3米堆码测试', 'UN3481非洲空运', '带电设备空运非洲'],
    template: 'generated',
    audience: ['带电设备工厂', '电动工具出口商', '检测仪器供应商', '矿业备件客户'],
    angle: '用 IATA DGR 2026 和锂电池包装要求，承接带电设备空运到非洲的合规搜索。',
    sections: [
      {
        heading: '为什么要单独看 DGR 第67版',
        body: [
          'IATA Dangerous Goods Regulations 每年发布新版本。IATA 页面说明，DGR 每年更新，客户使用最新规则能减少延误、罚款和合同损失；第67版相关更新在 2026 年 1 月 1 日起进入数字手册更新节奏。',
          '对中国到非洲带电设备来说，客户常见说法是“机器里有一点电池”。但航司和地面代理看的不是一句口头描述，而是 UN 编号、包装说明、MSDS、UN38.3、电池配置和包装是否符合要求。',
        ],
        bullets: ['DGR第67版', 'UN编号', 'MSDS', 'UN38.3'],
      },
      {
        heading: 'PI966/PI967为什么会影响普通设备',
        body: [
          '很多设备不是单独发电池，而是“电池与设备包装在一起”或“电池安装在设备中”。这就会落到 PI966、PI967 等具体包装说明场景，而不是普通机械设备空运。',
          'IATA 锂电池页面提到，从 2025 年 1 月起，PI966-II、PI967-I/II、PI969-II、PI970-I/II 等非 UN 规格包装场景引入了额外包装要求，也就是业内会讨论的 3 米堆码测试相关要求。',
        ],
        bullets: ['电池随设备包装', '电池安装在设备中', '非UN规格包装', '3米堆码测试'],
      },
      {
        heading: '非洲询价应该怎么收资料',
        body: [
          'JNB、NBO、LOS、ACC 等成熟口岸和 FBM、LUN、LBV、CKY 等项目点，对带电设备的处理不一样。能不能订舱只是第一步，目的地代理能不能清关、二程能不能接、现场是否接受带电设备，也要同步确认。',
          '销售回复应该直接给客户清单：请提供 MSDS、UN38.3、UN 编号、电池 Wh/Ah、电池数量、是否可拆、设备照片、包装照片、每件尺寸重量、HS Code、目的机场和最终城市。',
        ],
        bullets: ['航司接受能力', '目的港清关', '二程交付', '项目现场接收'],
      },
    ],
    checklist: ['MSDS', 'UN38.3', 'UN编号', 'PI966/PI967场景', '电池Wh/Ah', '电池数量', '是否可拆电池', '包装照片', '设备照片', '每件尺寸重量', 'HS Code', '目的机场和最终城市'],
    relatedRoutes: [
      { label: '带锂电池设备空运总入口', href: '/insights/lithium-battery-equipment-africa-air-freight-2026/' },
      { label: '危险品/化工品空运', href: '/insights/dangerous-goods-chemical-air-freight-africa-checklist/' },
      { label: 'JNB 约翰内斯堡', href: '/africa-air-freight/jnb/' },
      { label: 'FBM 卢本巴希', href: '/africa-air-freight/fbm/' },
    ],
    sources: [
      { label: 'IATA: Dangerous Goods Regulations', href: 'https://www.iata.org/en/publications/dgr/' },
      { label: 'IATA: Lithium Batteries', href: 'https://www.iata.org/en/programs/cargo/dgr/lithium-batteries/' },
      { label: 'IATA: DG Shipper’s Declaration and e-DGD', href: 'https://www.iata.org/en/programs/cargo/dgr/shippers-declaration/' },
    ],
  },
  {
    slug: 'air-cargo-data-loggers-tracking-devices-africa-cold-chain',
    title: '空运数据记录仪/货物追踪器到非洲：电池、设备批准和温控货怎么准备？',
    excerpt:
      '药品、冷链、电子产品和高价值货空运到非洲，经常会放数据记录仪或货物追踪器。它们本身可能带电池和无线发射功能，询价前要确认设备批准、TCR/PCR、温控标签和目的地冷链能力。',
    date: '2026-06-30',
    readTime: '10 分钟',
    category: '温控冷链',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['空运数据记录仪', '货物追踪器空运', '温控货空运非洲', 'IATA TCR非洲空运', '冷链空运数据记录器'],
    template: 'generated',
    audience: ['医药出口商', '冷链货主', '电子产品工厂', '非洲项目采购'],
    angle: '把数据记录仪和货物追踪器从“小配件”变成温控/电池合规的询价前置清单。',
    sections: [
      {
        heading: '数据记录仪不是无关小配件',
        body: [
          '药品、试剂、疫苗、电子产品、高价值设备和温控货空运到非洲时，客户经常会在箱内或托盘上放数据记录仪、温度记录器、GPS 追踪器或 IoT 设备。',
          'IATA 锂电池页面明确把 battery-powered cargo tracking devices and data loggers 放进电池指导材料。IATA 也推出了 Air Cargo Device Assessment，用于验证货物追踪器、数据记录仪和带传感器设备是否符合行业安全标准。',
        ],
        bullets: ['温度记录仪', 'GPS追踪器', 'IoT设备', '传感器设备'],
      },
      {
        heading: '温控货还要看TCR/PCR',
        body: [
          '如果货物是药品、试剂、疫苗或其他温控产品，问题不只是设备有没有电池。IATA Temperature Control Regulations 涵盖温控产品运输和处理要求，IATA Pharma 页面还提到 time and temperature sensitive label 和验收清单。',
          '对非洲目的地，冷链风险通常出现在三个地方：起运机场交接、转运机场等待、目的地清关和提货。数据记录仪能证明温度，但不能替代包装验证、标签、冷库预约和本地代理确认。',
        ],
        bullets: ['TCR', 'PCR', '温控标签', '冷库预约'],
      },
      {
        heading: '询价前要问清楚哪些问题',
        body: [
          '客户发温控货或高价值货时，销售不能只问重量和目的港。必须问清楚数据记录仪是否开启无线发射、是否含锂电池、电池型号和数量、是否有航空设备批准或厂家资料、货物温控范围、包装验证、是否需要 dry ice 或主动温控箱。',
          '如果目的地是 JNB、NBO、LOS、ACC 这类大口岸，先确认机场冷链和清关能力；如果是 FBM、LUN、LBV 等项目点，还要确认二程交付过程中温控是否能保持。',
        ],
        bullets: ['设备是否发射', '电池参数', '温控范围', '目的地冷链'],
      },
    ],
    checklist: ['数据记录仪型号', '是否无线发射', '电池类型和数量', '设备批准资料', '货物温控范围', '包装验证资料', '是否需要干冰', 'TCR/PCR场景', '目的机场冷链能力', '清关后提货时限', '最终交付城市'],
    relatedRoutes: [
      { label: '带锂电池设备空运总入口', href: '/insights/lithium-battery-equipment-africa-air-freight-2026/' },
      { label: 'JNB 约翰内斯堡', href: '/africa-air-freight/jnb/' },
      { label: 'NBO 内罗毕', href: '/africa-air-freight/nbo/' },
      { label: 'LOS 拉各斯', href: '/africa-air-freight/los/' },
    ],
    sources: [
      { label: 'IATA: Lithium Batteries', href: 'https://www.iata.org/en/programs/cargo/dgr/lithium-batteries/' },
      { label: 'IATA: Air Cargo Device Assessment Program', href: 'https://www.iata.org/en/pressroom/2024-releases/2024-12-11-01/' },
      { label: 'IATA: Pharma & Healthcare Cargo', href: 'https://www.iata.org/en/programs/cargo/pharma/' },
      { label: 'IATA: Temperature Control Regulations', href: 'https://www.iata.org/en/publications/manuals/temperature-control-regulations/' },
    ],
  },
  {
    slug: 'mali-bko-sydonia-import-intention-air-freight-clearance',
    title: '马里BKO空运清关：SYDONIA World、进口意向和发票原产地怎么准备？',
    excerpt:
      '中国到马里BKO的矿业设备、工程备件和项目货，不能只看空运价格。SYDONIA World、进口意向、发票、装箱单、原产地和HS Code要在订舱前和收货人确认。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['马里BKO清关资料', 'Mali SYDONIA World', 'Intention d’Importation Mali', '中国到马里空运清关', 'BKO巴马科空运'],
    template: 'generated',
    audience: ['马里进口商', '矿业设备供应商', '中国工程项目客户', '西非货代同行'],
    angle: '用马里进口资料和SYDONIA相关搜索词，承接BKO矿业/项目货高意图询盘。',
    sections: [
      {
        heading: 'BKO不是只要有航班就能交付',
        body: [
          '马里Bamako BKO常见货型包括矿业设备、工程备件、检测仪器、发电设备和项目急件。客户问“中国到马里空运多少钱”时，真正影响交付的经常不是头程舱位，而是进口商资料、申报系统、税费和目的地清关准备。',
          '马里海关公开资料把清关、申报、税费和进口资料放在正式流程里；官方页面也能看到SYDONIAWorld迁移相关信息，ASYCUDA国家页显示马里使用ASYCUDA World平台。销售端要把这些变成询价前置清单。',
        ],
        bullets: ['BKO巴马科', '矿业项目货', 'SYDONIA World', '清关前置'],
      },
      {
        heading: '进口意向和基础单证要先确认',
        body: [
          'Trade.gov在马里进口要求页面列出商业发票、装箱单、提单或空运单、原产地证、检验证书等常见文件，并提醒进口文件会随商品类别变化。空运场景下，AWB、商业发票、装箱单、HS Code和货值必须和进口商申报口径一致。',
          '如果客户只给中文品名和毛重，不要直接报全包价。先确认进口商是否已准备进口意向或相关进口手续，是否能提供税号/进口资质，是否接受发票货值、原产地和HS Code的申报责任。',
        ],
        bullets: ['Commercial invoice', 'Packing list', 'AWB', 'Certificate of origin'],
      },
      {
        heading: '马里空运报价要把责任边界写清',
        body: [
          'BKO项目货常见风险是资料晚、货值和HS Code不一致、收货人清关能力不足、目的地费用没有提前讲清。中国起运端能做的是把航班、尺寸重量、包装、危品/带电场景和出口文件做稳；马里进口申报和税费仍要由进口商或当地代理确认。',
          '报价话术不要写“包清关”这种容易留下风险的承诺。更好的写法是：空运到BKO，目的地清关资料请收货人按马里海关/进口商要求提前确认；我们可以协助核对发票、装箱单、AWB资料和目的地代理衔接。',
        ],
        bullets: ['进口商责任', '税费边界', '当地代理', '资料一致性'],
      },
    ],
    checklist: ['BKO目的机场', '最终城市/矿区', '进口商名称和税号', '进口意向/进口手续状态', '商业发票', '装箱单', 'AWB收发货人资料', 'HS Code', '原产地证场景', '检验证书场景', '每件尺寸重量', '包装照片', '目的地清关责任'],
    relatedRoutes: [
      { label: 'BKO 巴马科航线页', href: '/africa-air-freight/bko/' },
      { label: '埃塞俄比亚航空非洲特价', href: '/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '矿业设备空运询价模板', href: '/insights/africa-mining-equipment-air-freight-rfq-template/' },
    ],
    sources: [
      { label: 'Trade.gov: Mali - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/mali-import-requirements-and-documentation' },
      { label: 'Trade.gov: Mali - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/mali-custom-regulations' },
      { label: 'Direction Generale des Douanes du Mali: Dedouanement', href: 'https://douanes.gouv.ml/dedouanement/' },
      { label: 'Direction Generale des Douanes du Mali: Migration SYDONIAWorld', href: 'https://douanes.gouv.ml/migration-sydoniaworld' },
      { label: 'ASYCUDA: Mali', href: 'https://asycuda.org/fr/usercountries-mali-fr/' },
    ],
  },
  {
    slug: 'guinea-cky-guceg-import-declaration-air-freight-clearance',
    title: '几内亚CKY空运清关：GUCEG、进口申报和矿业项目货资料怎么准备？',
    excerpt:
      '中国到几内亚CKY的铝土矿、矿业设备和工程备件，询价时要提前确认GUCEG/进口申报、发票、装箱单、AWB、HS Code和收货人清关能力。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['几内亚CKY清关资料', 'GUCEG Guinea import declaration', '中国到几内亚空运清关', 'CKY科纳克里空运', 'Guinea mining equipment air freight'],
    template: 'generated',
    audience: ['几内亚进口商', '矿业设备供应商', '铝土矿项目采购', '西非空运同行'],
    angle: '用GUCEG和CKY矿业项目货长尾词，承接几内亚目的地清关型询盘。',
    sections: [
      {
        heading: 'CKY询价不能只问公斤价',
        body: [
          'Conakry CKY常见项目货包括矿山备件、工程车辆零件、实验室设备、发电机配件和急用耗材。几内亚目的地的关键不是“有没有航班”，而是进口商是否能按当地系统和文件要求完成申报。',
          'GUCEG官方门户把几内亚外贸单一窗口定位为贸易便利化入口，覆盖进口、出口、运输、物流和付款相关流程。对空运项目货来说，起运前确认进口申报路径比到港后补资料更重要。',
        ],
        bullets: ['CKY科纳克里', 'GUCEG', '单一窗口', '矿业项目货'],
      },
      {
        heading: '进口申报资料要和AWB同步',
        body: [
          'Trade.gov几内亚进口要求页面提醒，进口商通常要准备商业发票、提单或空运单、装箱单、原产地证等文件，并说明不同商品可能涉及额外要求。空运到CKY时，AWB收发货人、发票抬头、品名、件数、重量和HS Code要提前对齐。',
          '如果货物是电池设备、化工品、医疗/实验室设备、通信设备或高货值矿业备件，还要在订舱前确认是否需要额外许可、检验证书或进口商预审，不能等货落地后再问。',
        ],
        bullets: ['Commercial invoice', 'AWB', 'Packing list', 'HS Code'],
      },
      {
        heading: '把几内亚风险变成销售筛选问题',
        body: [
          '客户只给“设备到几内亚”时，先筛三件事：最终收货地点是不是矿区，进口商是否能办理GUCEG/当地进口手续，目的地是否已有清关代理和提货安排。没有这三项，低价报价很容易变成到港滞留。',
          '销售回复应该明确：我们报价中国到CKY空运段和可协助目的地代理沟通；几内亚进口申报、税费、许可证和收货人资质需要进口商或当地代理确认。这样既能成交，也不把不可控风险吞进报价。',
        ],
        bullets: ['最终矿区', '进口手续', '清关代理', '费用边界'],
      },
    ],
    checklist: ['CKY目的机场', '最终矿区/城市', '进口商名称和税号', 'GUCEG/进口手续状态', '商业发票', '装箱单', 'AWB资料', 'HS Code', '原产地证场景', '许可证/检验证书场景', '是否带电池/危品', '每件尺寸重量', '目的地提货安排'],
    relatedRoutes: [
      { label: 'CKY 科纳克里航线页', href: '/africa-air-freight/cky/' },
      { label: '埃塞俄比亚航空非洲特价', href: '/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '矿业设备空运询价模板', href: '/insights/africa-mining-equipment-air-freight-rfq-template/' },
    ],
    sources: [
      { label: 'GUCEG: Guichet Unique du Commerce Exterieur de Guinee', href: 'https://guceg.gov.gn/' },
      { label: 'Trade.gov: Guinea - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/guinea-import-requirements-and-documentation' },
      { label: 'Trade.gov: Guinea - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/guinea-customs-regulations' },
    ],
  },
  {
    slug: 'burkina-faso-oua-sydonia-waemu-air-freight-clearance',
    title: '布基纳法索OUA空运清关：SYDONIA World、WAEMU规则和法语单证怎么准备？',
    excerpt:
      '中国到布基纳法索OUA的矿业、能源和工程急件，不能只看瓦加杜古空运价格。SYDONIA World、WAEMU海关框架、法语发票装箱单、AWB和原产地资料要提前对齐。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['布基纳法索OUA清关资料', 'Burkina Faso SYDONIA World', 'WAEMU customs Burkina Faso', 'OUA瓦加杜古空运', '中国到布基纳法索空运清关'],
    template: 'generated',
    audience: ['布基纳法索进口商', '矿业设备供应商', '能源项目客户', '西非法语区货代同行'],
    angle: '用OUA目的港、SYDONIA World和WAEMU海关规则承接萨赫勒项目货清关搜索。',
    sections: [
      {
        heading: 'OUA空运的风险在文件语言和申报口径',
        body: [
          '瓦加杜古OUA常见货型包括矿业备件、能源项目设备、工程耗材、通信设备和紧急维修件。客户问“中国到布基纳法索空运”时，销售不能只报公斤价，还要判断进口商是否能按当地清关系统和法语文件要求完成申报。',
          'Trade.gov 2025年11月13日更新的布基纳法索进口要求页面提到，常见进口文件包括商业发票、装箱单、提单或空运单、原产地证，部分货物还可能需要技术、卫生或检验证书；文件使用法语能减少延误风险。',
        ],
        bullets: ['OUA瓦加杜古', '法语单证', 'AWB', '原产地证'],
      },
      {
        heading: 'WAEMU和DGD决定税则与估价边界',
        body: [
          'Trade.gov海关规则页面说明，布基纳法索海关法规受WAEMU框架影响，主管机构是General Directorate of Customs；关税和税费计算依赖HS Code、分类和估价。',
          '官方海关站点当前也暴露SYDONIA World入口和关税/模拟等在线服务信号。对空运项目货来说，HS Code、货值、用途、材质和收货人资料要在起运前一致，不能到港后再让进口商临时重做口径。',
        ],
        bullets: ['WAEMU框架', 'DGD海关', 'HS Code', '估价资料'],
      },
      {
        heading: '报价前要把进口责任讲成动作',
        body: [
          '布基纳法索是内陆西非目的地，OUA到港后的清关、提货和内陆交付窗口会影响客户实际拿货时间。如果客户是矿区或能源项目现场，还要确认最终城市、卸货条件、当地代理和是否有项目进口许可或免税文件。',
          '正确的询价回复不是“OUA可以走”。应该先要：英文或法文具体品名、HS Code、发票货值、装箱单、AWB收发货人、原产地资料、证书场景、最终交付地、每件尺寸重量和包装照片。',
        ],
        bullets: ['最终交付地', '项目许可', '当地代理', '责任边界'],
      },
    ],
    checklist: ['OUA目的机场', '最终城市/项目现场', '进口商税号/资料', '商业发票法语/英文版本', '装箱单', 'AWB收发货人资料', 'HS Code', '原产地证场景', '技术/卫生/检验证书场景', '货值币种', '每件尺寸重量', '包装照片', '目的地清关责任'],
    relatedRoutes: [
      { label: 'OUA 瓦加杜古航线页', href: '/africa-air-freight/oua/' },
      { label: '埃塞俄比亚航空非洲特价', href: '/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '矿业设备空运询价模板', href: '/insights/africa-mining-equipment-air-freight-rfq-template/' },
    ],
    sources: [
      { label: 'Trade.gov: Burkina Faso - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/burkina-faso-import-requirements-documentation' },
      { label: 'Trade.gov: Burkina Faso - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/burkina-faso-customs-regulations' },
      { label: 'Direction Generale des Douanes du Burkina Faso', href: 'http://www.douanes.bf/' },
    ],
  },
  {
    slug: 'niger-nim-guce-asycuda-air-freight-clearance',
    title: '尼日尔NIM空运清关：GUCE、ASYCUDA申报和进口资料怎么准备？',
    excerpt:
      '中国到尼日尔NIM的能源、矿业和工程项目货，要提前确认GUCE单一窗口、ASYCUDA申报、预到港资料、许可证和空运单证，不能只按公斤价报价。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['尼日尔NIM清关资料', 'Niger GUCE import documentation', 'Niger ASYCUDA declarations', 'NIM尼亚美空运', '中国到尼日尔空运清关'],
    template: 'generated',
    audience: ['尼日尔进口商', '能源项目供应商', '矿业设备客户', '萨赫勒项目货同行'],
    angle: '用尼日尔GUCE、ASYCUDA和NIM目的港词，承接内陆萨赫勒项目货清关型搜索。',
    sections: [
      {
        heading: 'NIM空运要先确认进口商系统能力',
        body: [
          '尼亚美NIM常见空运需求包括能源项目备件、通信设备、矿业耗材、工程急件和政府/援助类项目货。对内陆萨赫勒目的地来说，航班只是第一段，清关系统、进口文件和最终交付安排会决定客户能不能按时拿到货。',
          '尼日尔GUCE官方门户把National Single Window for Foreign Trade定位为外贸信息和交易入口，并列出预到港申报、进口/出口文件、许可证/许可/证书、电子支付、ASYCUDA申报和关税工具等功能。',
        ],
        bullets: ['NIM尼亚美', 'GUCE单一窗口', '预到港申报', 'ASYCUDA申报'],
      },
      {
        heading: '许可证和证书不能到港后才问',
        body: [
          'GUCE页面上的License Management覆盖import and export Licenses, Permits, Certificates and Others。空运项目货如果涉及通信、电池、化工、医疗、检测仪器或高价值工程设备，销售要在订舱前让进口商确认是否需要LPCO类文件或其他主管部门许可。',
          'NIM空运的单证要围绕AWB、商业发票、装箱单、HS Code、货值、收发货人资料和最终交付地点建立一致口径。只凭“设备配件到尼日尔”报价，容易在申报、税费和提货阶段失控。',
        ],
        bullets: ['LPCO', '许可证', '证书', '单证一致'],
      },
      {
        heading: '把内陆目的地风险前置到询价阶段',
        body: [
          '尼日尔项目货常常不是送到机场就结束。客户可能要转运到能源项目、矿区或边境城市，目的地清关代理、提货车辆、安全窗口和收货人付款/税费安排都需要提前确认。',
          '销售动作很简单：先把资料收齐，再分清空运段、清关段和内陆交付段。报价里明确不含或另计的目的地费用，反而更容易让真实客户信任，因为你把不可控风险讲在前面。',
        ],
        bullets: ['内陆交付', '清关代理', '税费安排', '费用边界'],
      },
    ],
    checklist: ['NIM目的机场', '最终城市/项目现场', '进口商注册资料', 'GUCE/进口手续状态', '商业发票', '装箱单', 'AWB资料', 'HS Code', 'LPCO/许可证场景', '证书/检验场景', '货值币种', '每件尺寸重量', '包装照片', '内陆交付安排'],
    relatedRoutes: [
      { label: 'NIM 尼亚美航线页', href: '/africa-air-freight/nim/' },
      { label: '埃塞俄比亚航空非洲特价', href: '/insights/ethiopian-airlines-africa-special-rates-acc-bko-oua-hre-lun-nim-cky/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '超大件空运询价清单', href: '/insights/oversized-air-freight-quote-checklist/' },
    ],
    sources: [
      { label: 'Niger GUCE: National Single Window for Foreign Trade', href: 'https://guce.gouv.ne/' },
      { label: 'CCINIGER: Chambre de Commerce et d’Industrie du Niger', href: 'https://cciniger.org/' },
      { label: 'Export.gov legacy: Niger - Import Requirements and Documentation', href: 'https://legacy.export.gov/article?id=Niger-Import-Requirements-and-Documentation' },
    ],
  },
  {
    slug: 'gabon-lbv-asycuda-cemac-air-freight-clearance',
    title: '加蓬LBV空运清关：ASYCUDA World、CEMAC和符合性证书怎么准备？',
    excerpt:
      '中国到加蓬LBV的油气、能源、木材设备和长货项目，不能只看航班。ASYCUDA World、CEMAC海关框架、发票/AWB、危险品许可和 regulated goods 符合性证书要提前确认。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['加蓬LBV清关资料', 'Gabon ASYCUDA World customs', 'Gabon CEMAC customs', 'LBV利伯维尔空运清关', '中国到加蓬空运'],
    template: 'generated',
    audience: ['加蓬进口商', '油气能源项目客户', '工程设备供应商', '中非法语区货代同行'],
    angle: '用LBV、ASYCUDA World、CEMAC和符合性证书承接加蓬油气/能源项目货清关搜索。',
    sections: [
      {
        heading: 'LBV长货能飞，不等于能顺利放行',
        body: [
          '利伯维尔LBV适合加蓬油气、能源、木材加工、工程设备和中非项目货。前面已经有长货经LGG/BRU进LBV的路线页，但实际成交时，客户更关心到港后能不能按时清关、提货和转运到项目现场。',
          'Trade.gov 2024年3月7日更新的加蓬进口要求页面提示，进入加蓬的货物需要随附运输单证和发票；空运场景下，运输单证要对应AWB，而不是海运提单。发票、装箱单、AWB、HS Code、货值、收货人和法语品名要提前一致。',
        ],
        bullets: ['LBV利伯维尔', 'AWB资料', '法语品名', '项目现场交付'],
      },
      {
        heading: 'ASYCUDA World和CEMAC决定申报口径',
        body: [
          'ASYCUDA国家页显示加蓬使用ASYCUDA World平台，Trade.gov海关规则页面也说明加蓬属于CEMAC自由贸易区，主管海关为Direction Generale des Douanes et Droits Indirects。',
          '这意味着销售不能把加蓬清关说成一句“目的港处理”。要提前让进口商或当地代理确认HS Code、货值、CEMAC税费口径、系统申报、当地代理资质和最终交付边界。',
        ],
        bullets: ['ASYCUDA World', 'CEMAC', 'DGDDI', 'HS Code和货值'],
      },
      {
        heading: '许可证和符合性证书要按货物属性筛',
        body: [
          'Trade.gov页面提到，农产品等货物可能涉及进口许可和卫生证书，危险产品如武器、爆炸品、化学品也需要许可；受监管货物自2016年2月起需要符合性证书。',
          '对空运项目货来说，化工品、带电设备、检测仪器、油气备件、电气设备和长货包装，都要先问清楚是否触发证书、危险品、符合性或特殊处理要求。询价和报价里把清关责任、目的地额外费用和进口商责任写清，比事后解释更能保护成交。',
        ],
        bullets: ['Certificate of conformity', '危险产品许可', '油气设备', '费用边界'],
      },
    ],
    checklist: ['LBV目的机场', '最终城市/项目现场', '进口商资料', '商业发票', '装箱单', 'AWB资料', 'HS Code', '法语/英文品名', '货值币种', 'ASYCUDA申报代理', 'CEMAC税费口径', '符合性证书场景', '危险品/化工许可场景', '每件尺寸重量', '长货包装照片', '目的地卸货和转运安排'],
    relatedRoutes: [
      { label: 'LBV 利伯维尔航线页', href: '/africa-air-freight/lbv/' },
      { label: 'LBV 8米长货经LGG/BRU', href: '/insights/lbv-gabon-8-meter-cargo-via-lgg-bru/' },
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: Gabon - Import Requirements and Documentations', href: 'https://www.trade.gov/country-commercial-guides/gabon-import-requirements-and-documentations' },
      { label: 'Trade.gov: Gabon - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/gabon-customs-regulations' },
      { label: 'ASYCUDA: Gabon', href: 'https://asycuda.org/fr/usercountries-gabon-fr/' },
      { label: 'Direction Generale des Douanes et Droits Indirects du Gabon', href: 'https://douanes.ga/' },
    ],
  },
  {
    slug: 'drc-fbm-guice-bivac-mining-spares-air-freight-clearance',
    title: '刚果金FBM矿业备件清关：GUICE、DGDA、OCC/BIVAC和Lubumbashi资料怎么准备？',
    excerpt:
      '中国到FBM卢本巴希的铜钴矿区备件，报价前要确认GUICE电子平台、DGDA海关、OCC/BIVAC预装运检验、法语文件、进口许可证和矿区最终交付。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['FBM卢本巴希清关资料', 'Lubumbashi GUICE import clearance', 'OCC BIVAC刚果金矿业备件', 'DGDA FBM空运清关', '中国到刚果金矿区空运'],
    template: 'generated',
    audience: ['刚果金矿业进口商', '铜钴矿区设备供应商', '矿山维修采购', '中非项目货代'],
    angle: '把刚果金GUICE/BIVAC规则从FIH首都货延伸到FBM铜钴矿区高价值备件询价。',
    sections: [
      {
        heading: 'FBM不是FIH的复制版',
        body: [
          'FBM卢本巴希服务的是刚果金铜钴矿区、工厂维修、泵阀电机、电气柜、破碎筛分设备和停产急件。FIH更偏首都区和政府/通讯项目，FBM更需要把清关、矿区转运、收货人代理和现场交付窗口放在一起判断。',
          'Trade.gov 2026年2月20日更新的刚果金进口要求页面明确提到，Kinshasa、Lubumbashi、Matadi、Goma、Boma、Kisangani 等试点点位的进口、出口和过境预清关要在GUICE电子平台办理。Lubumbashi被点名，这就是FBM页面单独存在的理由。',
        ],
        bullets: ['FBM卢本巴希', 'Lubumbashi试点', 'GUICE电子平台', '矿区备件'],
      },
      {
        heading: 'OCC/BIVAC会影响高货值备件',
        body: [
          'Trade.gov同一页面说明，BIVAC是刚果金授权的进口预装运检验机构，面向一定货值以上进口货物，并与DGDA和OCC相关。页面还列出商业发票、装箱单、提单或空运单、进口许可证、形式发票、保险证书和原产地证等文件。',
          '矿业备件常常价值高、型号具体、用途明确，一旦发票品名、型号、数量、货值、HS Code或许可证资料不一致，会直接影响BIVAC/OCC、GUICE和DGDA申报。销售报价前必须把文件一致性当作询价条件。',
        ],
        bullets: ['OCC/BIVAC', '进口许可证', 'Commercial invoice', 'AWB'],
      },
      {
        heading: '矿区最终交付要和清关一起谈',
        body: [
          '刚果金海关规则页面提示，DGDA管理海关，流程可能变化且进口商应使用持牌清关代理处理申报、付款和放行。对FBM矿区货来说，放行后还要看矿区位置、提货车辆、卸货设备、安保窗口和现场签收。',
          '正确报价不是只写“到FBM机场”。要把空运段、清关段、矿区转运段拆开：哪些费用包含，哪些由进口商或当地代理负责，哪些资料不齐会导致延误。真实客户更愿意买这种判断，而不是一个没有边界的低价。',
        ],
        bullets: ['持牌清关代理', '矿区转运', '卸货条件', '费用边界'],
      },
    ],
    checklist: ['FBM目的机场', '最终矿区/城市', '进口商NIF/注册资料', 'GUICE预清关状态', 'DGDA清关代理', '商业发票', '形式发票', '装箱单', 'AWB资料', 'HS Code', 'OCC/BIVAC检验场景', '进口许可证场景', '保险证书场景', '原产地证场景', '设备型号和用途', '每件尺寸重量', '包装照片', '矿区提货/卸货安排'],
    relatedRoutes: [
      { label: 'FBM 卢本巴希航线页', href: '/africa-air-freight/fbm/' },
      { label: 'FBM 铜钴矿区备件空运', href: '/insights/fbm-copperbelt-mining-equipment-air-freight/' },
      { label: 'FIH 刚果金首都区清关', href: '/insights/drc-fih-dgda-guice-occ-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: DRC - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/democratic-republic-congo-import-requirements-and-documentation' },
      { label: 'Trade.gov: DRC - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/democratic-republic-congo-customs-regulations' },
      { label: 'SEGUCE RDC: Guichet Unique Integral pour le Commerce Exterieur', href: 'https://segucerdc.cd/' },
      { label: 'Office Congolais de Controle', href: 'https://www.occ.cd/' },
    ],
  },
  {
    slug: 'south-africa-cpt-dur-sars-invoice-itac-nrcs-air-freight-clearance',
    title: '南非CPT/DUR空运清关：SARS发票数据、ITAC进口许可和NRCS LOA怎么准备？',
    excerpt:
      '中国到开普敦CPT和德班DUR空运，港口设备、海工备件、汽车零部件、电子电器和项目物资不能只看航班。SARS发票细节、进口商资料、ITAC许可、NRCS LOA和Air Waybill要提前对齐。',
    date: '2026-06-30',
    readTime: '13 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['南非CPT清关资料', 'DUR德班空运清关', 'SARS invoice details customs declaration', 'ITAC import permit South Africa', 'NRCS LOA air freight'],
    template: 'generated',
    audience: ['南非进口商', '港口设备供应商', '海工备件工厂', 'CPT/DUR目的地货代'],
    angle: '用CPT/DUR、SARS发票细节、ITAC进口许可和NRCS LOA承接南非沿海城市清关搜索。',
    sections: [
      {
        heading: 'CPT/DUR不要套用JNB报价逻辑',
        body: [
          'CPT开普敦和DUR德班常见需求不是普通内陆贸易货，而是港口设备、船用备件、海工项目物资、汽车零部件、食品/冷链相关设备和沿海工厂维修急件。客户只问中国到南非空运多少钱时，要先判断最终城市是不是开普敦、德班、港区、船厂或沿海项目现场。',
          'Trade.gov的南非进口文件页面提示，进口可能涉及permit、certificate和其他资料。对CPT/DUR空运来说，AWB、commercial invoice、packing list、HS Code、货值、原产地、进口商和目的地清关代理资料要先一致，再判断航班和二程。',
        ],
        bullets: ['CPT开普敦', 'DUR德班', '港口/海工备件', '进口文件一致'],
      },
      {
        heading: 'SARS发票细节会影响申报',
        body: [
          'SARS的Goods Declaration和Imports页面把进口申报放在海关流程中处理；SARS关于customs declarations发票细节的公告也强调，申报里的invoice details需要更完整的商品描述和资料匹配。',
          '空运销售不能只收一张模糊发票。要把英文品名、型号、品牌、材质、用途、数量、单价、总价、币种、Incoterms、原产地、进口商税务资料、清关代理和AWB资料提前核对。港口设备和维修备件尤其要避免只写spare parts、equipment、tools这种泛品名。',
        ],
        bullets: ['SARS Goods Declaration', 'Invoice details', '英文品名', 'AWB/发票一致'],
      },
      {
        heading: 'ITAC和NRCS先按货物属性筛',
        body: [
          'ITAC的Import Control页面说明，进口控制用于执行健康、环境、安全、安保和技术标准等要求；Gov.za的进口许可页面也提示，某些货物需要进口许可。NRCS则负责强制规范相关产品，电子电器、照明、电源、插头插座和部分受控产品可能需要LOA或合规资料。',
          '所以CPT/DUR询价要拆成两条线：一条判断航班、舱位、尺寸、温控或主甲板；另一条判断SARS申报、ITAC许可、NRCS LOA、进口商和最终交付。两条线都成立，报价才是能执行的价格。',
        ],
        bullets: ['ITAC进口许可', 'NRCS LOA', '受控产品', '可执行报价'],
      },
    ],
    checklist: ['CPT或DUR目的机场', '最终城市/港区/船厂地址', '进口商税号/VAT资料', '清关代理资料', '商业发票', '装箱单', 'Air Waybill资料', 'HS Code', '英文品名和具体用途', '品牌/型号/材质', '货值币种和Incoterms', '原产地', 'ITAC进口许可场景', 'NRCS LOA场景', '产品照片和规格书', '每件尺寸重量', '是否需要主甲板或温控', '最晚到货时间'],
    relatedRoutes: [
      { label: 'CPT 开普敦航线页', href: '/africa-air-freight/cpt/' },
      { label: 'DUR 德班航线页', href: '/africa-air-freight/dur/' },
      { label: '南非JNB清关资料', href: '/insights/south-africa-jnb-sars-nrcs-loa-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: South Africa - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/south-africa-import-requirements-and-documentation' },
      { label: 'South African Revenue Service: Goods Declaration', href: 'https://www.sars.gov.za/customs-and-excise/goods-declaration/' },
      { label: 'South African Revenue Service: Invoice details on customs declarations', href: 'https://www.sars.gov.za/latest-news/invoice-details-on-customs-declarations/' },
      { label: 'International Trade Administration Commission: Import Control', href: 'https://itac.org.za/import-control/' },
      { label: 'South African Government: Import permit for general goods', href: 'https://www.gov.za/services/import/import-permit-general-goods' },
    ],
  },
  {
    slug: 'south-africa-cpt-dur-port-marine-equipment-air-freight',
    title: '南非CPT/DUR港口设备和海工备件空运：什么时候走开普敦/德班而不是JNB？',
    excerpt:
      '南非港口设备、船用备件、海工维修件、冷链设备和沿海工厂急件，不一定都应该先报JNB。CPT/DUR要按最终交付、清关资料、航班舱位和目的地费用一起判断。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '航线方案',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['CPT开普敦空运', 'DUR德班港口设备空运', '南非海工备件空运', 'South Africa port equipment air freight', 'Cape Town Durban spare parts air freight'],
    template: 'generated',
    audience: ['港口设备厂家', '船用备件供应商', '海工维修客户', '南非沿海项目采购'],
    angle: '用CPT/DUR沿海交付场景承接港口设备、海工备件和南非空运路线判断搜索。',
    sections: [
      {
        heading: '最终地址决定入口机场',
        body: [
          '如果收货地在Cape Town、Durban、港口码头、船厂、冷链仓、沿海工厂或海工项目现场，直接判断CPT/DUR往往比先默认JNB更实际。JNB适合南非内陆和南部非洲中转，CPT/DUR更适合沿海交付和部分港口设备场景。',
          '路线不是只比机场三字码价格。要同时比较可用航班、单件尺寸、目的地地面操作、清关代理响应、二程距离、港区预约、卸货设备和最终签收窗口。客户买的是到货确定性，不是一个看起来低的机场价。',
        ],
        bullets: ['Cape Town', 'Durban', '港区交付', '沿海工厂维修'],
      },
      {
        heading: '这些货更适合先问CPT/DUR',
        body: [
          '港口机械备件、船用泵阀、电机、传感器、冷链设备、制冷压缩机、海工工具、维修耗材、汽车零部件和食品加工设备，都可能因为最终地址和时效要求而选择CPT或DUR。',
          '如果货物是长件、重件、带电设备、温控货、化工相关货或需要快速维修的停产件，询价时要先收单件尺寸重量、包装照片、产品用途、HS Code、是否带电/带液/带磁、最终地址和最晚到货时间，再决定是否走腹舱、主甲板或欧洲/中东中转。',
        ],
        bullets: ['港口机械备件', '船用泵阀', '冷链设备', '维修停产急件'],
      },
      {
        heading: '清关资料仍然是成交门槛',
        body: [
          'CPT/DUR不是绕开南非清关要求的捷径。SARS进口申报、发票箱单、AWB、HS Code、进口商资料、清关代理、ITAC许可和NRCS LOA场景仍然要提前判断。',
          '能成交的页面不应该只写“南非空运优势”。更有效的动作是把客户要补的资料列清楚：最终地址、货物用途、英文品名、发票数据、受控产品判断、交付边界和最晚到货窗口。这样页面既能吃关键词，也能把询盘筛成可报价需求。',
        ],
        bullets: ['SARS申报', 'ITAC/NRCS预审', '目的地费用边界', '可报价询盘'],
      },
    ],
    checklist: ['CPT/DUR/最终交付城市', '港区/船厂/工厂地址', '收货人和清关代理', '货物用途', 'HS Code', '英文品名', '品牌型号', '每件尺寸重量', '包装照片', '是否带电/液体/磁性/化工', '是否需温控', '商业发票', '装箱单', 'AWB资料', 'ITAC/NRCS场景', '卸货设备', '最晚到货时间', '报价责任边界'],
    relatedRoutes: [
      { label: 'CPT 开普敦航线页', href: '/africa-air-freight/cpt/' },
      { label: 'DUR 德班航线页', href: '/africa-air-freight/dur/' },
      { label: 'CPT/DUR清关资料', href: '/insights/south-africa-cpt-dur-sars-invoice-itac-nrcs-air-freight-clearance/' },
      { label: 'JNB矿业急件路线判断', href: '/insights/jnb-mining-spares-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: South Africa - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/south-africa-import-requirements-and-documentation' },
      { label: 'South African Revenue Service: Imports', href: 'https://www.sars.gov.za/customs-and-excise/import-export-and-transit/imports/' },
      { label: 'South African Revenue Service: Goods Declaration', href: 'https://www.sars.gov.za/customs-and-excise/goods-declaration/' },
      { label: 'International Trade Administration Commission: Import Control', href: 'https://itac.org.za/import-control/' },
    ],
  },
  {
    slug: 'cameroon-dla-avi-pecae-coc-air-freight-clearance',
    title: '喀麦隆DLA空运清关：AVI、PECAE/CoC、GUCE和Air Waybill资料怎么准备？',
    excerpt:
      '中国到喀麦隆DLA杜阿拉空运，工业设备、电子电器、港口备件、油气物资和中非项目货不能只看航班。AVI申请、PECAE/CoC、GUCE单一窗口、Air Waybill、发票箱单和进口商资料要提前对齐。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['喀麦隆DLA清关资料', 'Cameroon AVI SGS customs', 'PECAE CoC Cameroon', 'Douala air freight clearance', '中国到喀麦隆空运清关'],
    template: 'generated',
    audience: ['喀麦隆进口商', '中非法语区货代', '电子电器出口商', '油气港口设备供应商'],
    angle: '用DLA、AVI、PECAE/CoC、GUCE和Air Waybill承接喀麦隆清关资料搜索，并把询盘前置成文件预审。',
    sections: [
      {
        heading: 'DLA空运不能只问机场价',
        body: [
          'DLA杜阿拉服务的是喀麦隆商业和中非项目货入口，常见需求包括工业设备、港口机械备件、油气物资、电子电器、通讯设备、医疗和工程急件。客户只问中国到DLA空运多少钱时，销售要先判断进口商、清关代理、AVI、PECAE/CoC和GUCE资料是否能跑通。',
          'Trade.gov的喀麦隆进口文件页面说明，进口商要向负责检验的SGS提交AVI申请；同时列出airway bill、final invoice、packing list、local insurance certificate、customs clearance number、cargo manifest number等资料。空运单、发票、箱单、货值和HS Code必须提前一致。',
        ],
        bullets: ['DLA杜阿拉', 'AVI申请', 'Air Waybill', '发票箱单一致'],
      },
      {
        heading: 'PECAE/CoC要在装运前判断',
        body: [
          'Trade.gov的喀麦隆标准页说明，PECAE项目自2021年11月15日起覆盖所有进口产品，要求在出口国装运前进行符合性评估；合格后由ANOR基于CAB签发的AoC出具Certificate of Conformity（CoC）。',
          '这对中国出口商很关键。电子电器、机械设备、建材、照明、电源、检测仪器、食品接触材料和其他受标准影响的货物，不能等货到DLA才问CoC。询价阶段就要收型号、规格、品牌、照片、测试报告、HS Code、用途和进口商资料。',
        ],
        bullets: ['PECAE', 'Certificate of Conformity', 'ANOR', '装运前符合性评估'],
      },
      {
        heading: 'GUCE和目的地代理要提前对接',
        body: [
          '喀麦隆Guichet Unique des Operations du Commerce Exterieur（GUCE）是外贸单一窗口入口，清关资料、申报流程和目的地代理协同都不应该等航班起飞后才处理。',
          '实际报价要分三条线：航班和装载是否成立，AVI/PECAE/GUCE资料是否成立，DLA到最终城市或项目现场的交付边界是否成立。三条线都能说明白，价格才有成交意义。',
        ],
        bullets: ['GUCE单一窗口', '目的地清关代理', 'DLA最终交付', '报价责任边界'],
      },
    ],
    checklist: ['DLA目的机场', '最终城市/项目现场', '进口商资料', '清关代理资料', 'AVI申请状态', 'GUCE手续状态', 'Air Waybill资料', 'final invoice', 'packing list', 'HS Code', '英文/法文品名', '货值币种', 'local insurance certificate如需', 'customs clearance number如需', 'cargo manifest number如需', 'PECAE/CoC场景', 'AoC/测试报告如需', '产品照片和规格书', '每件尺寸重量', '是否需要主甲板或中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: 'LOS 拉各斯中非延伸', href: '/africa-air-freight/los/' },
      { label: 'LBV 中非项目货清关', href: '/insights/gabon-lbv-asycuda-cemac-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: Cameroon - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/cameroon-import-requirements-and-documentation' },
      { label: 'Trade.gov: Cameroon - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/cameroon-customs-regulations' },
      { label: 'Trade.gov: Cameroon - Standards for Trade', href: 'https://www.trade.gov/country-commercial-guides/cameroon-standards-trade' },
      { label: 'GUCE Cameroon: Guichet Unique des Operations du Commerce Exterieur', href: 'https://www.guichetunique.cm/' },
    ],
  },
  {
    slug: 'togo-lfw-awb-certificate-origin-air-freight-clearance',
    title: '多哥LFW空运清关：Air Waybill、原产地证、GUCE/OTR和受控货许可怎么准备？',
    excerpt:
      '中国到多哥LFW洛美空运，西非项目货、港口备件、电子电器、工程设备和贸易补货不能只看航班。Air Waybill、商业发票、原产地证、Packing List、GUCE/OTR手续和受控货许可要提前对齐。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['多哥LFW清关资料', 'Togo air waybill customs', 'Togo certificate of origin', 'Lome air freight clearance', '中国到多哥空运清关'],
    template: 'generated',
    audience: ['多哥进口商', '西非法语区货代', '工程设备工厂', '港口备件供应商'],
    angle: '用LFW、Air Waybill、原产地证、GUCE/OTR和受控货许可承接多哥空运清关搜索。',
    sections: [
      {
        heading: 'LFW空运先把文件链跑通',
        body: [
          'LFW洛美适合多哥本土贸易、港口城市备件、西非项目物资和经洛美延伸的区域货。客户只问中国到LFW空运多少钱时，要先判断进口商、清关代理、OTR申报资料、Air Waybill、商业发票和装箱单是否能一致。',
          'Trade.gov 2026年6月16日更新的多哥进口文件页面列出Bill of lading / air waybill、certificate of origin、commercial invoice、export declaration、licenses or permits for regulated goods、packing list、sanitary and phytosanitary certificates等资料。空运场景下，核心运输文件就是AWB。',
        ],
        bullets: ['LFW洛美', 'Air Waybill', 'Commercial invoice', 'Packing list'],
      },
      {
        heading: '原产地证已经是申报重点',
        body: [
          '同一Trade.gov页面还说明，2025年3月多哥启动Togo Customs 2025项目，Office Togolais des Recettes（OTR）要求证明货物原产地，申报必须包含有效原产地证及其编号。',
          '这意味着中国出口商不能把Certificate of Origin当成可有可无的补充文件。询价时就要确认出口商、生产商、HS Code、发票品名、原产地证类型、编号、收货人和清关代理要求，避免到港后因为证书和申报字段不一致而补料。',
        ],
        bullets: ['Certificate of Origin', 'OTR', 'Togo Customs 2025', '证书编号一致'],
      },
      {
        heading: 'GUCE流程和受控货许可提前筛',
        body: [
          'Togo Trade Portal的空运进口手续页面列出Air Waybill、prior import and marketing declaration、certificate of origin、Special Import Authorization等流程入口。不是每票货都需要全部文件，但受控货、食品/植物来源产品、医疗相关货、通信设备、电子电器和特殊货物要提前问清楚。',
          'Bureau Veritas的Togo VOC页面也显示多哥有符合性验证项目。实际报价时，把航班装载、AWB文件链、原产地证、受控货许可、GUCE/OTR流程和最终交付边界分开确认，才是能成交的报价。',
        ],
        bullets: ['GUCE流程', 'Special Import Authorization', 'VOC/CoC场景', '最终交付边界'],
      },
    ],
    checklist: ['LFW目的机场', '最终城市/项目现场', '进口商资料', '清关代理资料', 'Air Waybill资料', '商业发票', '装箱单', 'HS Code', '英文/法文品名', '货值币种', 'Certificate of Origin', '原产地证编号', 'export declaration如需', 'prior import declaration场景', 'Special Import Authorization场景', 'regulated goods许可场景', 'sanitary/phytosanitary证书如需', 'VOC/CoC场景', '每件尺寸重量', '包装照片', '最晚到货时间'],
    relatedRoutes: [
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: 'ACC 阿克拉航线页', href: '/africa-air-freight/acc/' },
      { label: 'ABJ 阿比让清关资料', href: '/insights/cote-divoire-abj-guce-fdi-sydam-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: Togo - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/togo-import-requirements-and-documentation' },
      { label: 'Trade.gov: Togo - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/togo-customs-regulations' },
      { label: 'Trade.gov: Togo - Standards for Trade', href: 'https://www.trade.gov/country-commercial-guides/togo-standards-trade' },
      { label: 'Togo Trade Portal: Air Import Formalities', href: 'https://togotrade.gouv.tg/procedure/91?embed=false&includeSearch=true&l=en' },
      { label: 'Bureau Veritas Verigates: Togo VOC Programme', href: 'https://verigates.bureauveritas.com/programmes/togo' },
    ],
  },
  {
    slug: 'benin-coo-guce-avd-origin-air-freight-clearance',
    title: '贝宁COO空运清关：GUCE/SEGUB、AVD估价分类、原产地和检验证书怎么准备？',
    excerpt:
      '中国到贝宁COO科托努空运，港口城市备件、西非贸易补货、工程设备和电子电器不能只看航班。GUCE/SEGUB单一窗口、AVD估价分类、发票、运输单证、原产地、检验证书和进口许可要提前对齐。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['贝宁COO清关资料', 'Cotonou air freight clearance', 'Benin GUCE import documents', 'Benin AVD customs valuation', '中国到贝宁空运清关'],
    template: 'generated',
    audience: ['贝宁进口商', '西非贸易商', '工程设备工厂', '法语区货代同行'],
    angle: '用COO/Cotonou、GUCE/SEGUB、AVD估价分类和原产地/检验证书承接贝宁空运清关搜索。',
    sections: [
      {
        heading: 'COO空运不是只报科托努机场价',
        body: [
          'COO科托努适合贝宁本土进口、西非港口城市贸易补货、工程设备、电子电器、汽车配件、医疗相关货物和经贝宁延伸的周边货。客户只问中国到COO空运多少钱时，销售要先判断进口商、清关代理、GUCE/SEGUB资料和目的地交付是否能跑通。',
          'Trade.gov的贝宁进口文件页面列出清关前需要的商业发票、运输单证、检验证书、进口商进口许可、货物原产地证明，以及动植物卫生检验证书等资料。空运场景下，运输单证要对应Air Waybill，不能只按海运B/L思路处理。',
        ],
        bullets: ['COO科托努', 'Air Waybill资料', '商业发票', '进口许可场景'],
      },
      {
        heading: 'GUCE/SEGUB决定文件流转',
        body: [
          'SEGUB页面把GUCE定位为覆盖进口、出口和过境手续的外贸单一窗口。Trade.gov海关规则页也说明，贝宁用于清关的Societe d’Exploitation du Guichet Unique（SEGUB）自2011年运行，并向清关代理出具Bordereau de Frais Unique（BFU）费用单。',
          'GUCE服务列表还包括Customs Declaration、Cargo Tracking、Management of Intentions、AVD Consultation、Licenses Management、Certificate of Origin、Phytosanitary certificate等模块。对空运急件来说，订舱前要先确认进口商和清关代理是否能在这些流程里配合。',
        ],
        bullets: ['GUCE单一窗口', 'SEGUB', 'BFU费用单', 'Customs Declaration'],
      },
      {
        heading: 'AVD估价分类和证书要前置',
        body: [
          'GUCE公开的进口文件流程中有Procedure de verification和DV Declaration Valeur等PDF资料，服务列表也明确有AVD Consultation（Classification & Valuation）。这意味着HS Code、货值、品名、用途、品牌型号、数量和发票字段要提前一致。',
          '如果货物涉及电子电器、医疗、食品/植物来源、通信设备、化工、二手设备或其他受控产品，还要提前判断检验证书、原产地证明、进口许可和卫生/植物检疫资料。能飞到COO不等于能快速放行，能把文件链讲清楚才是可成交报价。',
        ],
        bullets: ['AVD估价分类', 'Certificate of Origin', 'Inspection certificate', '受控货许可'],
      },
    ],
    checklist: ['COO目的机场', '最终城市/项目现场', '进口商资料', '清关代理资料', 'GUCE/SEGUB账号或流程状态', '商业发票', 'Air Waybill资料', '装箱单', 'HS Code', '英文/法文品名', '货值币种', 'AVD估价分类资料', 'Certificate of Origin', 'inspection certificate场景', 'import license场景', 'phytosanitary/health certificate如需', 'Cargo Tracking状态', 'BFU费用单责任', '每件尺寸重量', '包装照片', '最晚到货时间'],
    relatedRoutes: [
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: 'LOS 拉各斯西非延伸', href: '/africa-air-freight/los/' },
      { label: '多哥LFW清关资料', href: '/insights/togo-lfw-awb-certificate-origin-air-freight-clearance/' },
      { label: '喀麦隆DLA清关资料', href: '/insights/cameroon-dla-avi-pecae-coc-air-freight-clearance/' },
    ],
    sources: [
      { label: 'Trade.gov: Benin - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/benin-import-requirements-and-documentation' },
      { label: 'Trade.gov: Benin - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/benin-customs-regulations' },
      { label: 'Benin GUCE: Services and procedures', href: 'https://guce.gouv.bj/evoyage/public/list?lang=en' },
      { label: 'SEGUB: GUCE services', href: 'https://www.segub.bj/guce-services-offerts/?lang=en' },
      { label: 'Benin GUCE: Procedure de verification', href: 'https://guce.gouv.bj/trade-server/wp-content/uploads/2022/06/Procedure_de_verification.pdf' },
    ],
  },
  {
    slug: 'chad-ndj-air-waybill-asycuda-import-documents-clearance',
    title: '乍得NDJ空运清关：Air Waybill、ASYCUDA、发票编号和原产地资料怎么准备？',
    excerpt:
      '中国到乍得NDJ恩贾梅纳空运，萨赫勒项目货、矿业备件、工程设备、通信电力物资和贸易补货不能只看航班。Air Waybill、商业发票、原产地证、装箱单、进口商资料和ASYCUDA申报字段要提前一致。',
    date: '2026-06-30',
    readTime: '11 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['乍得NDJ清关资料', 'Chad air waybill customs', "N'Djamena air freight clearance", 'Chad ASYCUDA import declaration', '中国到乍得空运清关'],
    template: 'generated',
    audience: ['乍得进口商', '萨赫勒项目客户', '工程设备工厂', '法语区货代同行'],
    angle: '用NDJ/N’Djamena、Air Waybill、发票编号、原产地资料和ASYCUDA承接乍得空运清关搜索。',
    sections: [
      {
        heading: 'NDJ空运先判断文件能不能过',
        body: [
          'NDJ恩贾梅纳是乍得项目货和贸易补货的核心空运入口，常见货物包括工程机械备件、通信电力设备、矿业物资、医疗急件、车辆配件和萨赫勒区域项目物资。客户只问中国到NDJ空运多少钱时，销售要先确认进口商、清关代理、Air Waybill、商业发票、原产地证和装箱单能不能一致。',
          'Trade.gov的乍得进口文件页面列出商业发票、原产地证、装箱单和Air Waybill等资料，并强调运输单证和发票上的识别编号要完整准确。空运询价阶段就要把AWB收货人、发票号、货值、HS Code、品名、数量、毛重和包装信息对齐。',
        ],
        bullets: ['NDJ恩贾梅纳', 'Air Waybill', '商业发票', '原产地证'],
      },
      {
        heading: 'ASYCUDA不是到港后才处理',
        body: [
          'ASYCUDA官方说明该系统覆盖外贸流程中的舱单、海关申报、会计程序和仓储相关手续；ASYCUDA也把Chad列为用户国家。对NDJ空运来说，舱单、AWB、发票、装箱单、HS Code、货值和进口商资料越早一致，目的地清关代理越容易提前判断申报风险。',
          '这不是单纯合规话术，而是项目货的成交动作。乍得目的地信息相对不透明，客户如果没有进口商资料、发票编号、原产地证和法文/英文品名，报价只能是粗价，不能保证到港后的放行节奏。',
        ],
        bullets: ['ASYCUDA申报', '舱单资料', 'HS Code和货值', '进口商资料'],
      },
      {
        heading: '萨赫勒项目货要把交付边界说清楚',
        body: [
          'NDJ后续经常还要面对最终城市、项目现场、边境区域、吊装卸货、收货时间和安保安排。能飞到NDJ不等于能顺利交到项目现场，空运报价必须把机场到最终地点的责任边界拆开。',
          '专业回复应分三层：第一层确认航班和装载，第二层确认AWB/发票/原产地/ASYCUDA资料，第三层确认NDJ到最终城市或项目现场的交付能力。三层都能落地，客户才会把你当成解决问题的人，而不是只会报公斤价的货代。',
        ],
        bullets: ['NDJ到最终城市', '项目现场交付', '卸货条件', '责任边界'],
      },
    ],
    checklist: ['NDJ目的机场', '最终城市/项目现场', '进口商资料', '清关代理资料', 'Air Waybill收货人信息', '商业发票', '发票编号', '装箱单', 'HS Code', '英文/法文品名', '货值币种', 'Certificate of Origin', '数量和毛重', '包装照片', 'ASYCUDA申报字段', '舱单资料', '是否需要进口许可或受控货文件', '每件尺寸重量', '是否需要主甲板或中转', '最晚到货时间', 'NDJ后段交付边界'],
    relatedRoutes: [
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: 'LOS 拉各斯萨赫勒延伸', href: '/africa-air-freight/los/' },
      { label: '尼日尔NIM清关资料', href: '/insights/niger-nim-guce-asycuda-air-freight-clearance/' },
      { label: '喀麦隆DLA清关资料', href: '/insights/cameroon-dla-avi-pecae-coc-air-freight-clearance/' },
    ],
    sources: [
      { label: 'Trade.gov: Chad - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/chad-import-requirements-and-documentations' },
      { label: 'Legacy Export.gov: Chad - Import Requirements and Documentation', href: 'https://legacy.export.gov/article?id=Chad-Import-Requirements-and-Documentation' },
      { label: 'ASYCUDA: Chad', href: 'https://asycuda.org/en/usercountries-chad/' },
      { label: 'ASYCUDA: Programme overview', href: 'https://asycuda.org/en/programme/' },
    ],
  },
  {
    slug: 'angola-lad-asycuda-aduaneiro-air-freight-clearance',
    title: '安哥拉LAD空运清关：ASYCUDA/ASY5、Documento Unico和ADV资料怎么准备？',
    excerpt:
      '中国到安哥拉LAD罗安达空运，油气项目货、矿业设备、能源备件、医疗设备和贸易补货不能只看航班。Angola ASYCUDA/ASY5、Documento Unico、ADV、Air Waybill、商业发票箱单和进口许可要提前对齐。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['安哥拉LAD清关资料', 'Luanda airport customs clearance', 'Angola ASYCUDA air cargo', 'Documento Unico Angola air freight', 'ADV Angola customs', '中国到安哥拉空运清关'],
    template: 'generated',
    audience: ['安哥拉进口商', '油气和能源设备供应商', '矿业备件工厂', '南部非洲项目货代'],
    angle: '用2026年Angola ASY5上线、ASYCUDA空运舱单、Documento Unico和ADV承接LAD罗安达空运清关搜索。',
    sections: [
      {
        heading: 'LAD空运先判断ASYCUDA资料链',
        body: [
          'LAD罗安达是安哥拉油气项目货、矿业备件、能源设备、医疗设备和高价值贸易补货的核心空运入口。客户只问中国到LAD空运多少钱时，销售要先判断进口商、清关代理、Air Waybill、发票箱单和ASYCUDA资料链能不能提前跑通。',
          'ASYCUDA在2026年1月发布的消息显示，安哥拉已经上线第五代ASYCUDA海关管理软件ASY5，并由AGT、海关经纪人和私营部门参与，系统强调数字化申报、数据交换、货物跟踪和端到端海关流程。对LAD空运来说，价格不是第一风险，资料是否能进入系统才是第一风险。',
        ],
        bullets: ['LAD Luanda airport', 'Angola ASYCUDA air cargo', 'ASY5 customs digitalization', 'Air Waybill资料'],
      },
      {
        heading: 'Documento Unico和ADV要跟发票一致',
        body: [
          'Trade.gov的安哥拉进口文件说明列出商业发票、Customs import declaration（Documento Unico）、Declaration of Customs Value（ADV）、packing list、进口许可证和其他文件。页面同时提醒，安哥拉进口手续耗时且监管变化会影响清关，所以要提前确认进口商资质和清关代理能力。',
          '因此LAD询价不能只收重量和机场代码。HS Code、英文/葡文品名、型号规格、品牌、货值、币种、收货人税号、进口商注册状态、商业发票、装箱单、Air Waybill、ADV估价资料和Documento Unico申报字段要能互相对应。',
        ],
        bullets: ['Documento Unico', 'ADV customs value', 'Commercial invoice', '进口商注册和清关代理'],
      },
      {
        heading: '空运舱单和受控货许可要前置',
        body: [
          'Angola IATA Cargo XML filing guidance说明，ASYCUDAWorld可接收IATA Cargo XML消息，包括Flight Manifest、Air Waybill和House Air Waybill；空运货物应在实际到达安哥拉前电子报送给海关，货物申报需在飞机起飞后尽快提交。',
          'Trade.gov还提示，敏感产品如食品、医疗设备、药品和农业投入品可能需要MINCO进口许可；食品和药品也可能在清关期间涉及实验室检测。能源、医疗、化工、电子电器、二手设备、带电设备和油气项目备件，不适合到LAD后才问许可和产品监管。',
        ],
        bullets: ['Flight Manifest', 'MAWB/HAWB', 'MINCO import license', '受控货许可预审'],
      },
    ],
    checklist: ['LAD目的机场', '最终城市/项目现场', '进口商税号/注册状态', '清关代理资料', 'HS Code', '英文/葡文品名', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', 'MAWB/HAWB资料', 'Flight Manifest字段', 'Documento Unico资料', 'ADV估价资料', '进口许可证如需', 'MINCO license如需', '实验室检测或产品监管如需', '每件尺寸重量', '包装照片', '是否需要经JNB或欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'LGG/BRU 非洲中转网络', href: '/zh/lgg-africa-gateway/' },
      { label: 'JNB 南部非洲入口', href: '/africa-air-freight/jnb/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '纳米比亚WDH清关资料', href: '/insights/namibia-wdh-namra-sad500-asycuda-air-freight-clearance/' },
    ],
    sources: [
      { label: 'ASYCUDA: Angola operational launch of ASY5', href: 'https://asycuda.org/en/angola-marks-the-operational-launch-of-asy5-the-5th-generation-of-asycuda-customs-management-software/' },
      { label: 'CHAMP/ASYCUDA: IATA Cargo XML Filing Guidance Version Angola', href: 'https://www.champ.aero/hubfs/CHAMP_November2021/Pdf/asycuda_iata_cargo_xml_filing_guidance_version_angola.pdf' },
      { label: 'Trade.gov: Angola - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/angola-import-requirements-and-documentation' },
      { label: 'Trade.gov: Angola - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/angola-customs-regulations' },
      { label: 'Trade.gov: Angola - Standards for Trade', href: 'https://www.trade.gov/country-commercial-guides/angola-standards-trade' },
    ],
  },
  {
    slug: 'botswana-gbe-burs-single-window-sad500-air-freight-clearance',
    title: '博茨瓦纳GBE空运清关：BURS Single Window、SAD 500和进口许可怎么准备？',
    excerpt:
      '中国到博茨瓦纳GBE哈博罗内空运，矿业备件、钻石设备、工程物资、医疗设备和贸易补货不能只看航班。Botswana Single Window、BURS/ASYCUDA、SAD 500、Air Waybill、商业发票箱单和进口许可要提前对齐。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-1.jpg',
    keywords: ['博茨瓦纳GBE清关资料', 'Gaborone airport customs clearance', 'Botswana Single Window', 'SAD 500 Botswana customs', 'BURS ASYCUDA air freight', '中国到博茨瓦纳空运清关'],
    template: 'generated',
    audience: ['博茨瓦纳进口商', '矿业和钻石设备供应商', '医疗和工程设备工厂', '南部非洲货代同行'],
    angle: '用GBE/Gaborone、Botswana Single Window、SAD 500和BURS ASYCUDA承接博茨瓦纳空运清关搜索。',
    sections: [
      {
        heading: 'GBE空运先判断BURS电子申报',
        body: [
          'GBE哈博罗内适合博茨瓦纳矿业备件、钻石加工设备、工程物资、医疗设备、电子电器和贸易补货。客户只问中国到GBE空运多少钱时，销售要先判断进口商、清关代理和BURS电子申报资料是否能提前跑通。',
          'Botswana Single Window给贸易商的说明写明，货物进口到博茨瓦纳时，需要立即向BURS Customs & Excise Division申报，并提交适当海关表格和支持文件，例如进口许可、发票和原产地证等。商业进口货还应电子申报，并放在对应的海关程序下。',
        ],
        bullets: ['Botswana Single Window', 'BURS Customs & Excise', '电子海关申报', '进口许可/发票/原产地证'],
      },
      {
        heading: 'SAD 500和Manifest要跟AWB一致',
        body: [
          'Botswana Trade Portal的SAD 500海关申报流程列出支持文件：Commercial Invoice、Bill of Lading or Consignment Note、Manifest、Packing List和Certificate of Origin。空运场景下，Bill of Lading逻辑要转换成Air Waybill和航空舱单资料。',
          '该流程还提示，要任命获得BURS认证、可访问ASYCUDA海关系统的清关代理；ASYCUDA系统会生成SAD 500 Declaration、税费和Customs Clearance Reference Number。GBE询价前，发票、AWB、舱单、箱单、HS Code、货值、件数和重量不能互相打架。',
        ],
        bullets: ['SAD 500 Declaration', 'Air Waybill/Manifest', 'BURS认证清关代理', 'Customs Clearance Reference Number'],
      },
      {
        heading: '进口许可和受控货要先筛',
        body: [
          'Trade.gov的博茨瓦纳进口文件页面说明，从SACU之外直接进入博茨瓦纳的货物需要Department of International Trade签发的进口许可，许可不可转让，并且必须在装运前取得。MTI eServices也有Issue of Import Permit和Import Permit for Restricted Goods入口。',
          '矿业设备、医疗设备、食品/农业、化工、通信设备、电子电器、二手设备和受限制货物，不适合到GBE后才问许可。正确报价动作是把航班可行性、BURS/ASYCUDA申报、SAD 500、进口许可和GBE后段交付分开确认。',
        ],
        bullets: ['Import Permit', 'Restricted Goods', 'MTI eServices', 'GBE后段交付'],
      },
    ],
    checklist: ['GBE目的机场', '最终城市/项目现场', '进口商TIN/BURS资料', 'BURS认证清关代理', 'HS Code', '英文品名和用途', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', 'Manifest资料', 'SAD 500申报资料', 'Certificate of Origin如需', 'Import Permit如需', 'Restricted Goods许可如需', 'ASYCUDA申报字段', '税费和清关参考号责任', '每件尺寸重量', '包装照片', '是否经JNB或欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'JNB 南部非洲入口', href: '/africa-air-freight/jnb/' },
      { label: 'LUN 赞比亚矿业备件', href: '/africa-air-freight/lun/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '南非JNB清关资料', href: '/insights/south-africa-jnb-sars-nrcs-loa-air-freight-clearance/' },
    ],
    sources: [
      { label: 'Botswana Single Window: Information for Traders and Business', href: 'https://ecustoms.burs.org.bw/TFBSEW/cusLogin/traderAndBusiness.jsp' },
      { label: 'Botswana Trade Portal: Customs Declaration utilising SAD 500 Form', href: 'https://www.botswanatradeportal.org.bw/index.php?id=5&r=searchProcedure%2Fview1' },
      { label: 'BURS: Customs and Excise Forms', href: 'https://www.burs.org.bw/index.php/forms/category/16-customs-and-excise-forms' },
      { label: 'MTI eServices: Import Permits and Rebate Certificates', href: 'https://trade.gov.bw/' },
      { label: 'Trade.gov: Botswana - Import Requirements & Documentation', href: 'https://www.trade.gov/country-commercial-guides/botswana-import-requirements-documentation' },
      { label: 'Trade.gov: Botswana - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/botswana-customs-regulations' },
    ],
  },
  {
    slug: 'malawi-blz-llw-mra-asycuda-form12-air-freight-clearance',
    title: '马拉维BLZ/LLW空运清关：MRA ASYCUDA、Form 12和进口许可怎么准备？',
    excerpt:
      '中国到马拉维BLZ布兰太尔或LLW利隆圭空运，矿业备件、农业设备、医疗物资、工程设备和贸易补货不能只看航班。MRA ASYCUDA、Form 12、Form 19、Air Waybill、商业发票箱单和进口许可要提前对齐。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['马拉维BLZ清关资料', 'Lilongwe airport customs clearance', 'Malawi ASYCUDA air freight', 'MRA Form 12 customs declaration', 'Malawi import permit air cargo', '中国到马拉维空运清关'],
    template: 'generated',
    audience: ['马拉维进口商', '农业和矿业设备供应商', '医疗物资工厂', '南部非洲货代同行'],
    angle: '用BLZ/LLW、MRA ASYCUDA、Form 12、Form 19和进口许可承接马拉维空运清关搜索。',
    sections: [
      {
        heading: 'BLZ/LLW空运先判断MRA申报资料',
        body: [
          '马拉维空运常见入口包括BLZ布兰太尔和LLW利隆圭，适合农业设备、矿业备件、医疗物资、工程设备、电子电器和贸易补货。客户只问中国到马拉维空运多少钱时，销售要先判断进口商TPIN、清关代理、Air Waybill、发票箱单和MRA申报资料是否齐。',
          'Trade.gov的马拉维海关规则页面说明，进口商需要向Malawi Revenue Authority登记取得Taxpayer Identification Number（TPIN），所有进出口货物都要用适当表格申报，例如Malawi Customs Declaration Form 12和Declaration of Value Form 19。',
        ],
        bullets: ['BLZ/LLW机场', '进口商TPIN', 'MRA Form 12', 'Declaration of Value Form 19'],
      },
      {
        heading: 'Air Waybill和Form 12不能互相打架',
        body: [
          'Trade.gov的马拉维进口文件页面列出海关可能要求的资料，包括certificate of origin、commercial invoice、MRA Form 12、MRA Form 19、packing list、release order等。海关规则页进一步说明，支持文件包括commercial invoices、bills of lading or air waybills和certificates of origin。',
          '空运场景下，Bill of Lading逻辑要转换成Air Waybill和航空舱单资料。BLZ/LLW询价前，HS Code、英文品名、用途、货值、币种、件数、毛重、AWB收货人、发票箱单和Form 12字段必须一致，否则到港后再补会拖慢放行。',
        ],
        bullets: ['Air Waybill', 'Commercial invoice', 'Packing list', 'Certificate of Origin'],
      },
      {
        heading: '受限货和MBS/IQMS要提前筛',
        body: [
          'Trade.gov的马拉维受限进口页面列出部分需要进口许可的货物，例如动物及动物产品、肉类、家禽、鱼类等，并提示相关要求来自Control of Goods Act。马拉维标准相关页面和MBS IQMS入口也说明，受标准、检验或合格评定影响的产品不能等货到港后才确认。',
          '农业投入品、食品、医疗相关货、化工、电子电器、二手设备、通信设备和受限制货物，不适合只按普通空运报价。正确动作是把航班可行性、MRA/ASYCUDA申报、Form 12/19、进口许可、MBS/IQMS和最终交付城市分开确认。',
        ],
        bullets: ['Import permit', 'Restricted goods', 'MBS/IQMS', 'MRA ASYCUDA'],
      },
    ],
    checklist: ['BLZ或LLW目的机场', '最终城市/项目现场', '进口商TPIN/MRA资料', '清关代理资料', 'HS Code', '英文品名和用途', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', '航空舱单资料', 'MRA Form 12资料', 'Form 19估价资料', 'Certificate of Origin如需', 'Import permit如需', 'MBS/IQMS场景', '受限货或检验资料如需', '每件尺寸重量', '包装照片', '是否经JNB/NBO或欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'JNB 南部非洲入口', href: '/africa-air-freight/jnb/' },
      { label: 'LUN 赞比亚矿业备件', href: '/africa-air-freight/lun/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
      { label: '博茨瓦纳GBE清关资料', href: '/insights/botswana-gbe-burs-single-window-sad500-air-freight-clearance/' },
    ],
    sources: [
      { label: 'Trade.gov: Malawi - Import Requirements and Documentations', href: 'https://www.trade.gov/country-commercial-guides/malawi-import-requirements-and-documentations' },
      { label: 'Trade.gov: Malawi - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/malawi-customs-regulations' },
      { label: 'Trade.gov: Malawi - Prohibited and Restricted Imports', href: 'https://www.trade.gov/country-commercial-guides/malawi-prohibited-and-restricted-imports' },
      { label: 'Trade.gov: Malawi - Standards for Trade', href: 'https://www.trade.gov/country-commercial-guides/malawi-standards-trade' },
      { label: 'Malawi Trade Portal', href: 'https://portal.trade.gov.mw/' },
      { label: 'Malawi Bureau of Standards: IQMS', href: 'https://mbsmw.org/iqms/' },
    ],
  },
  {
    slug: 'sierra-leone-fna-nra-asycuda-idf-air-freight-clearance',
    title: '塞拉利昂FNA空运清关：NRA ASYCUDA、IDF和进口许可怎么准备？',
    excerpt:
      '中国到塞拉利昂FNA弗里敦空运，矿业备件、工程设备、医疗物资、化工品和贸易补货不能只看航班。NRA ASYCUDA World、Import Declaration Form、Air Waybill、商业发票箱单、原产地证和进口许可要提前对齐。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['塞拉利昂FNA清关资料', 'Freetown airport customs clearance', 'Sierra Leone ASYCUDA air freight', 'NRA customs declaration Sierra Leone', 'Import Declaration Form Sierra Leone', '中国到塞拉利昂空运清关'],
    template: 'generated',
    audience: ['塞拉利昂进口商', '矿业和工程设备供应商', '医疗与化工品工厂', '西非货代同行'],
    angle: '用FNA/Freetown、NRA ASYCUDA World、Import Declaration Form和进口许可承接塞拉利昂空运清关搜索。',
    sections: [
      {
        heading: 'FNA空运先判断NRA/ASYCUDA资料',
        body: [
          'FNA弗里敦适合塞拉利昂矿业备件、工程物资、医疗物资、化工品、通信设备和贸易补货。客户只问中国到FNA空运多少钱时，销售要先判断进口商、清关代理、Air Waybill、发票箱单和NRA/ASYCUDA资料是否能提前跑通。',
          'Trade.gov的塞拉利昂进口文件页面说明，基础文件包括Commercial Invoice、Bill of Lading or Air Waybill、Packing List、Certificate of Origin和Import Declaration Form（IDF），并通过ASYCUDA World系统提交。空运场景下，Air Waybill和IDF字段不能等货到FNA后才补。',
        ],
        bullets: ['FNA Freetown airport', 'NRA customs', 'ASYCUDA World', 'Import Declaration Form'],
      },
      {
        heading: 'IDF、AWB和发票箱单必须一致',
        body: [
          'NRA的进口和出口流程说明，ASYCUDA是用于海关数据的电子系统，清关代理可以代表贸易商连接海关服务器并提交电子申报。NRA的清关流程也写明，代理会在ASYCUDA系统中注册SCD申报，生成assessment notice，并附上进口商提供的运输、交易和其他资料。',
          '所以FNA询价不能只收目的港和重量。HS Code、英文品名、用途、货值、币种、件数、毛重、AWB收货人、商业发票、装箱单、Certificate of Origin和IDF字段必须互相对应；否则申报、付款、风险管理、查验和放行都会被拖慢。',
        ],
        bullets: ['SCD电子申报', 'Assessment notice', 'Commercial invoice', 'Packing List'],
      },
      {
        heading: '受控货许可和检验证书要前置',
        body: [
          'Trade.gov的海关规则页面说明，塞拉利昂进口受Customs Act和NRA海关部门管理，受限制品类可能需要许可证或许可文件，例如药品、化工品、武器和农业产品等。进口文件页面也提示，某些货物可能需要Pre-shipment Inspection Certificate或Sanitary/Phytosanitary Certificate。',
          'MOTI页面也说明，受控货进口许可由相关政府部门签发，农业产品可能涉及phytosanitary certificate，部分货物可能涉及Sierra Leone Standards Bureau质量证书。矿业、医疗、化工、食品/农业、通信设备和二手设备，不适合只按普通空运报价处理。',
        ],
        bullets: ['Import permit', 'Pre-shipment Inspection', 'Sanitary/Phytosanitary Certificate', 'SLSB质量证书场景'],
      },
    ],
    checklist: ['FNA目的机场', '最终城市/矿区/项目现场', '进口商NRA资料', '清关代理资料', 'HS Code', '英文品名和用途', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', '航空舱单资料', 'Import Declaration Form/IDF资料', 'Certificate of Origin如需', 'Pre-shipment Inspection如需', 'Sanitary/Phytosanitary Certificate如需', '进口许可或受控货批文如需', 'SLSB质量证书场景', '每件尺寸重量', '包装照片', '是否经ACC/LOS/欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'ACC 阿克拉西非入口', href: '/africa-air-freight/acc/' },
      { label: 'LOS 拉各斯西非入口', href: '/africa-air-freight/los/' },
      { label: '几内亚CKY清关资料', href: '/insights/guinea-cky-guceg-import-declaration-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: Sierra Leone - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/sierra-leone-import-requirements-and-documentation' },
      { label: 'Trade.gov: Sierra Leone - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/sierra-leone-customs-regulations' },
      { label: 'NRA Sierra Leone: Import and Export Procedure', href: 'https://mail.nra.gov.sl/import-and-export/import-and-export-procedure' },
      { label: 'NRA Sierra Leone: Customs Import Procedure', href: 'https://mail.nra.gov.sl/import-and-export/customs-import-procedure' },
      { label: 'Sierra Leone Ministry of Trade and Industry', href: 'https://moti.gov.sl/' },
    ],
  },
  {
    slug: 'liberia-rob-lra-asycuda-bivac-air-freight-clearance',
    title: '利比里亚ROB/RIA空运清关：LRA ASYCUDA、BIVAC和CTN资料怎么准备？',
    excerpt:
      '中国到利比里亚ROB/RIA蒙罗维亚空运，矿业备件、工程设备、医疗物资、通信设备和贸易补货不能只看航班。LRA ASYCUDA、BIVAC预检、CTN/ACD、Air Waybill、商业发票箱单和进口商资料要提前对齐。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['利比里亚ROB清关资料', 'Monrovia Roberts airport customs clearance', 'Liberia ASYCUDA air freight', 'LRA customs Liberia', 'Liberia BIVAC inspection', '中国到利比里亚空运清关'],
    template: 'generated',
    audience: ['利比里亚进口商', '矿业和工程设备供应商', '医疗与通信设备工厂', '西非货代同行'],
    angle: '用ROB/RIA、LRA ASYCUDA、BIVAC预检和CTN/ACD承接利比里亚空运清关搜索。',
    sections: [
      {
        heading: 'ROB/RIA空运先判断LRA申报资料',
        body: [
          'ROB/RIA Roberts International Airport是蒙罗维亚主要国际空运入口，适合利比里亚矿业备件、工程设备、医疗物资、通信设备、电子电器和贸易补货。客户只问中国到利比里亚空运多少钱时，销售要先判断进口商、清关代理、Air Waybill、商业发票箱单和LRA申报资料是否齐。',
          'Trade.gov的利比里亚海关规则页面说明，Liberia Revenue Authority管理利比里亚海关，并在所有口岸处理贸易税费；同页也说明LRA使用ASYCUDA System等电子服务。空运报价前，ROB到港、进口商TIN/税务资料、清关代理和ASYCUDA申报字段要前置核对。',
        ],
        bullets: ['ROB/RIA Roberts airport', 'LRA customs', 'ASYCUDA System', 'Air Waybill资料'],
      },
      {
        heading: 'CTN/ACD、BIVAC和AWB不能分开看',
        body: [
          'Trade.gov的利比里亚进口文件页面说明，NPA实施Cargo Tracking Note/Advanced Cargo Declaration（CTN/ACD），并提示缺少有效CTN的货物可能无法装载或卸货；同页还说明，货值达到门槛的货物需要Bureau Veritas/BIVAC预装运检验，未完成预检可能产生罚金。',
          '虽然CTN/ACD更多出现在港口和多式联运语境，但利比里亚询价不能忽略这类进口端合规动作。空运到ROB/RIA时，AWB收货人、商业发票、装箱单、HS Code、货值币种、产品描述、检验状态和进口商资料必须互相一致，避免到港后才发现BIVAC、估价或监管资料缺口。',
        ],
        bullets: ['CTN/ACD', 'BIVAC预检', 'Commercial invoice', 'Packing list'],
      },
      {
        heading: 'RIA清关窗口和受控货要提前拆',
        body: [
          'LRA的Customs Across Liberia页面把RIA列为海关点，并列出RIA 24小时运行、货物清关工作时段和航班处理安排。对ROB/RIA空运来说，航班到达不等于马上放行，清关窗口、代理上班时间、周末航班处理和货物查验都要提前问清。',
          'ASYCUDA官方用户国家页面也列出Liberia项目平台为ASYCUDA World。矿业设备、二手设备、医疗物资、通信设备、化工品、食品/农业相关货和政府项目货，不适合只报机场到机场价格；正确动作是把航班、LRA/ASYCUDA、BIVAC/检验、受控货许可和最终交付城市拆成一张执行清单。',
        ],
        bullets: ['RIA cargo clearance', 'ASYCUDA World', 'Import permit场景', '最终交付城市'],
      },
    ],
    checklist: ['ROB/RIA目的机场', '最终城市/矿区/项目现场', '进口商TIN/LRA资料', '清关代理资料', 'HS Code', '英文品名和用途', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', '航空舱单资料', 'ASYCUDA申报资料', 'CTN/ACD场景', 'BIVAC预检状态', '进口许可或受控货批文如需', '检验证书或质量文件如需', '每件尺寸重量', '包装照片', '是否经ACC/ABJ/LOS或欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'ACC 阿克拉西非入口', href: '/africa-air-freight/acc/' },
      { label: 'ABJ 阿比让西非入口', href: '/africa-air-freight/abj/' },
      { label: '塞拉利昂FNA清关资料', href: '/insights/sierra-leone-fna-nra-asycuda-idf-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: Liberia - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/liberia-import-requirements-and-documentation' },
      { label: 'Trade.gov: Liberia - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/liberia-customs-regulations' },
      { label: 'Liberia Revenue Authority: Customs Across Liberia', href: 'https://revenue.lra.gov.lr/customs-across-liberia/' },
      { label: 'ASYCUDA: Liberia', href: 'https://asycuda.org/en/usercountries-liberia/' },
    ],
  },
  {
    slug: 'gambia-bjl-gra-asycuda-sad-air-freight-clearance',
    title: '冈比亚BJL空运清关：GRA ASYCUDA World、SAD和IDF资料怎么准备？',
    excerpt:
      '中国到冈比亚BJL班珠尔空运，工程设备、医疗物资、电子电器、农产品相关货和贸易补货不能只看航班。GRA ASYCUDA World、SAD申报、IDF、Air Waybill、商业发票箱单、原产地和进口许可证要提前对齐。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['冈比亚BJL清关资料', 'Banjul airport customs clearance', 'Gambia ASYCUDA air freight', 'GRA customs declaration Gambia', 'Single Administrative Document Gambia', '中国到冈比亚空运清关'],
    template: 'generated',
    audience: ['冈比亚进口商', '工程设备供应商', '医疗与电子电器工厂', '西非货代同行'],
    angle: '用BJL/Banjul、GRA ASYCUDA World、SAD和IDF承接冈比亚空运清关搜索。',
    sections: [
      {
        heading: 'BJL空运先判断GRA/ASYCUDA资料',
        body: [
          'BJL班珠尔适合冈比亚工程设备、医疗物资、电子电器、通信设备、农业相关货和贸易补货。客户只问中国到冈比亚空运多少钱时，销售要先判断进口商TIN、清关代理、Air Waybill、商业发票箱单和GRA申报资料是否能提前跑通。',
          'GRA的Customs & Excise页面说明，海关岗位包括Airport和Seaport，并承担禁止/限制品管理、通关便利化和关税征收等职责。GRA的ASYCUDA World认证SOP也说明，ASYCUDA World用于电子申报、电子缴费和清关处理，进口商TIN和清关代理资料要在BJL到港前确认。',
        ],
        bullets: ['BJL Banjul airport', 'GRA Customs', 'ASYCUDA World', '进口商TIN'],
      },
      {
        heading: 'SAD、AWB和发票箱单必须一致',
        body: [
          'Trade.gov的冈比亚进口文件页面说明，进口商或代理需要用Single Administrative Document（SAD）向GRA申报，货物在清关完成前处于海关监管下。GRA清关FAQ也列出常见进口资料，包括invoice、Bill of Lading或Air Waybill、certificate of origin、packing list、TIN、许可证或证书等。',
          '所以BJL询价不能只收重量体积。HS Code、英文品名、用途、货值币种、件数毛重、AWB收货人、商业发票、装箱单、原产地、SAD字段和IDF资料必须互相对应；否则到港后会卡在申报、查验、付款或放行环节。',
        ],
        bullets: ['Single Administrative Document', 'Air Waybill', 'Commercial invoice', 'Packing list'],
      },
      {
        heading: 'IDF和受控货许可要前置筛',
        body: [
          'GRA清关FAQ写明，清关过程还可能涉及Import Declaration Form（IDF）和清关代理通过ASYCUDA电子处理报关。Trade.gov的冈比亚海关规则页面也提示，部分货物需要进口许可证或额外监管文件，尤其是受限制货、食品/农业、医药、化工、通信和二手设备等场景。',
          '对冈比亚空运来说，正确动作不是只报机场到机场价格，而是把航班可行性、BJL地面处理、GRA/ASYCUDA、SAD、IDF、进口许可、检验证书和最终交付城市拆成一张资料清单。小市场的风险往往不在航班，而在到港后资料补救慢。',
        ],
        bullets: ['Import Declaration Form', 'Import permit', '受控货资料', '最终交付城市'],
      },
    ],
    checklist: ['BJL目的机场', '最终城市/项目现场', '进口商TIN/GRA资料', '清关代理资料', 'HS Code', '英文品名和用途', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', '航空舱单资料', 'SAD申报字段', 'IDF资料', 'Certificate of Origin如需', '进口许可证或受控货批文如需', '检验证书或标准文件如需', '每件尺寸重量', '包装照片', '是否经ACC/LOS/ABJ或欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'ACC 阿克拉西非入口', href: '/africa-air-freight/acc/' },
      { label: 'LOS 拉各斯西非入口', href: '/africa-air-freight/los/' },
      { label: '利比里亚ROB清关资料', href: '/insights/liberia-rob-lra-asycuda-bivac-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: The Gambia - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/gambia-import-requirements-and-documentation' },
      { label: 'Trade.gov: The Gambia - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/gambia-customs-regulations' },
      { label: 'Gambia Revenue Authority: Customs & Excise', href: 'https://gra.gm/units/customs-excise' },
      { label: 'Gambia Revenue Authority: Clearance Processes FAQ', href: 'https://gra.gm/faqs/details/clearance-processes/26' },
      { label: 'Gambia Revenue Authority: ASYCUDA World Training and Certification SOP 2026', href: 'https://gra.gm/downloads/file/asycuda-world-training-and-certification-standard-operating-procedures-effective-15-march-2026' },
    ],
  },
  {
    slug: 'mauritania-nkc-douanes-sydonia-sgs-air-freight-clearance',
    title: '毛里塔尼亚NKC空运清关：Douanes、ASYCUDA++和SGS检验资料怎么准备？',
    excerpt:
      '中国到毛里塔尼亚NKC努瓦克肖特空运，矿业备件、工程设备、能源物资、医疗设备和贸易补货不能只看航班。Douanes/ASYCUDA++、SGS装运前检验、进口许可证、Air Waybill、商业发票箱单和法文品名要提前对齐。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-2.jpg',
    keywords: ['毛里塔尼亚NKC清关资料', 'Nouakchott airport customs clearance', 'Mauritania ASYCUDA air freight', 'Mauritania SGS inspection import', 'Douanes Mauritanie declaration import', '中国到毛里塔尼亚空运清关'],
    template: 'generated',
    audience: ['毛里塔尼亚进口商', '矿业和能源设备供应商', '工程项目客户', '西非货代同行'],
    angle: '用NKC/Nouakchott、Douanes Mauritaniennes、ASYCUDA++和SGS检验承接毛里塔尼亚空运清关搜索。',
    sections: [
      {
        heading: 'NKC空运先判断Douanes/ASYCUDA资料',
        body: [
          'NKC努瓦克肖特适合毛里塔尼亚矿业备件、能源设备、工程物资、医疗设备、通信设备和贸易补货。客户只问中国到毛里塔尼亚空运多少钱时，销售要先判断进口商、清关代理、Air Waybill、商业发票箱单、法文品名和Douanes/ASYCUDA资料是否能提前跑通。',
          'Trade.gov的毛里塔尼亚海关规则页面说明，毛里塔尼亚已在27个海关办公室采用ASYCUDA++自动化海关系统，并要求进口商注册；毛里塔尼亚政务流程站也把进口商、报关员、仓库和货运代理代码归在Douanes流程下。空运场景下，货到NKC之前就要把进口商识别、代理授权、货值、HS Code和运输单证准备好。',
        ],
        bullets: ['NKC Nouakchott', 'Douanes Mauritaniennes', 'ASYCUDA++', 'Air Waybill资料'],
      },
      {
        heading: 'SGS检验、AWB和发票箱单不能互相打架',
        body: [
          'Trade.gov的毛里塔尼亚进口文件页面说明，毛里塔尼亚要求装运前检验，SGS负责该项目；文档还列出商业发票、提单或Air Waybill、原产地证、检验证书、运输方式、数量、描述、价格和付款条款等资料。财政部海关法和政务流程站则说明，清关动作必须落到Douanes规则和被授权的报关流程里。',
          '所以NKC询价不能只收重量体积。HS Code、法文/英文品名、用途、规格型号、货值币种、件数毛重、AWB收货人、商业发票、装箱单、SGS检验状态和进口许可证必须互相对应；否则到港后容易卡在估价、风险控制、查验或补证。',
        ],
        bullets: ['SGS pre-shipment inspection', 'Commercial invoice', 'Packing list', 'Certificate of Origin'],
      },
      {
        heading: '受控货和法文单证要提前拆',
        body: [
          'Trade.gov的毛里塔尼亚海关规则页面提示，海关使用较现代化系统处理申报，但进口流程仍可能涉及许可、检验、估价和税费；同时提到不同海关代理对单证解释仍可能不一致。毛里塔尼亚政务流程站的清关页面也提示，货物清关通常要通过获批报关行办理。',
          '矿业备件、油气项目物资、二手设备、医疗设备、通信设备、化工品、食品/农业相关货和政府项目货，不适合只按普通空运报价处理。正确动作是把航班、NKC地面处理、Sydonia申报、SGS检验、进口许可证、法文单证和最终交付城市拆开确认。',
        ],
        bullets: ['Import permit', '法文品名', '价值和估价资料', '最终交付城市'],
      },
    ],
    checklist: ['NKC目的机场', '最终城市/矿区/项目现场', '进口商注册/NIF资料', '清关代理资料', 'HS Code', '英文/法文品名和用途', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', '航空舱单资料', 'ASYCUDA申报字段', 'SGS检验状态', 'Certificate of Origin如需', '保险证书如需', '进口许可证或受控货批文如需', '检验证书或标准文件如需', '每件尺寸重量', '包装照片', '是否经CMN/DSS/欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'DSS 达喀尔西非入口', href: '/africa-air-freight/dss/' },
      { label: 'CMN 卡萨布兰卡中转', href: '/africa-air-freight/cmn/' },
      { label: '冈比亚BJL清关资料', href: '/insights/gambia-bjl-gra-asycuda-sad-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: Mauritania - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/mauritania-import-requirements-and-documentations' },
      { label: 'Trade.gov: Mauritania - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/mauritania-customs-regulations' },
      { label: 'Mauritania Procedures Portal: Attribution de code importateur', href: 'https://www.procedures.gov.mr/fr/procedure/245' },
      { label: 'Mauritania Procedures Portal: Dedouanement d’une marchandise', href: 'https://www.procedures.gov.mr/fr/procedure/281' },
      { label: 'Ministere des Finances Mauritanie: Code des Douanes', href: 'https://www.finances.gov.mr/sites/default/files/2022-11/CODE_DES_DOUANES.pdf' },
    ],
  },
  {
    slug: 'madagascar-tnr-bsc-gasynet-air-freight-clearance',
    title: '马达加斯加TNR空运清关：BSC/GasyNet、Airway Bill和进口申报怎么准备？',
    excerpt:
      '中国到马达加斯加TNR塔那那利佛空运，工业设备、医疗物资、电子电器、项目货和贸易补货不能只看航班。BSC/GasyNet、Airway Bill、Packing List、Import Declaration、Certificate of Origin和受限货许可要提前对齐。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-3.jpg',
    keywords: ['马达加斯加TNR清关资料', 'Antananarivo airport customs clearance', 'Madagascar BSC air freight', 'Bordereau de Suivi des Cargaisons', 'GasyNet BSC Madagascar', '中国到马达加斯加空运清关'],
    template: 'generated',
    audience: ['马达加斯加进口商', '工业设备供应商', '医疗与电子电器工厂', '印度洋航线货代同行'],
    angle: '用TNR/Antananarivo、BSC、GasyNet、Airway Bill和Import Declaration承接马达加斯加空运清关搜索。',
    sections: [
      {
        heading: 'TNR空运先判断BSC/GasyNet资料',
        body: [
          'TNR塔那那利佛适合马达加斯加工厂设备、医疗物资、电子电器、通信设备、项目货和贸易补货。客户只问中国到马达加斯加空运多少钱时，销售要先判断进口商、清关代理、Airway Bill、商业发票、装箱单、BSC和进口申报资料是否能提前跑通。',
          'Trade.gov的马达加斯加进口文件页面明确列出，进口商强制需要BSC（Bordereau de Suivi des Cargaisons，cargo tracking document），并说明BSC需要在线填写；同页还列出Bill of Lading或Airway Bill、Packing List、Import Declaration和Certificate of Origin。空运场景下，BSC不是海运才关心的附属项，而是进口端资料一致性的前置动作。',
        ],
        bullets: ['TNR Antananarivo', 'BSC cargo tracking document', 'GasyNet/SGS portal', 'Airway Bill资料'],
      },
      {
        heading: 'Airway Bill、BSC和进口申报必须一致',
        body: [
          'BSC MG/SGS入口是马达加斯加BSC线上办理入口；Trade.gov进口文件页也把BSC、Airway Bill、Packing List、Import Declaration和Certificate of Origin放在强制资料组合里。对TNR空运来说，AWB收货人、发货人、件数毛重、品名、货值、币种和发票箱单必须和BSC/进口申报互相对应。',
          '如果客户只给中文品名、总重量和目的机场，报价只能算运费，不能算可执行方案。正确动作是把HS Code、英文/法文品名、用途、规格型号、商业发票、装箱单、Airway Bill资料、BSC状态、进口申报字段和原产地证一起前置核对。',
        ],
        bullets: ['Airway Bill', 'Packing List', 'Import Declaration', 'Certificate of Origin'],
      },
      {
        heading: '受限货和CIF估价要提前筛',
        body: [
          'Trade.gov的马达加斯加海关规则页面说明，马达加斯加采用WCO交易价值定义，进口关税按CIF估价。受限进口页面也说明，大多数进口不需要许可证，但战略性货物受特别监管，武器、爆炸品、药品、宝石、贵金属珠宝、香草、烟叶、润滑油等场景涉及授权或许可证。',
          '医疗设备、通信设备、化工品、二手设备、带电设备、食品/农业相关货、项目货和高货值设备，不适合只按普通空运报价处理。TNR询价要把航班、TNR地面处理、BSC/GasyNet、CIF估价、进口许可证、原产地证和最终交付城市拆成一张可执行清单。',
        ],
        bullets: ['CIF customs value', 'Import license场景', 'Restricted goods', '最终交付城市'],
      },
    ],
    checklist: ['TNR目的机场', '最终城市/项目现场', '进口商资料', '清关代理资料', 'HS Code', '英文/法文品名和用途', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Airway Bill资料', '航空舱单资料', 'BSC/GasyNet状态', 'Import Declaration字段', 'Certificate of Origin如需', 'CIF估价资料', '进口许可证或受控货批文如需', '检验证书或标准文件如需', '每件尺寸重量', '包装照片', '是否经MRU/JNB/NBO或欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'NBO 内罗毕东非入口', href: '/africa-air-freight/nbo/' },
      { label: 'JNB 约翰内斯堡入口', href: '/africa-air-freight/jnb/' },
      { label: '毛里塔尼亚NKC清关资料', href: '/insights/mauritania-nkc-douanes-sydonia-sgs-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Trade.gov: Madagascar - Import Requirements and Documentation', href: 'https://www.trade.gov/country-commercial-guides/madagascar-import-requirements-and-documentation' },
      { label: 'Trade.gov: Madagascar - Customs Regulations', href: 'https://www.trade.gov/country-commercial-guides/madagascar-customs-regulations' },
      { label: 'Trade.gov: Madagascar - Prohibited and Restricted Imports', href: 'https://www.trade.gov/country-commercial-guides/madagascar-prohibited-and-restricted-imports' },
      { label: 'BSC MG / SGS: Bordereau de Suivi des Cargaisons', href: 'https://bscmg.sgs.com/' },
    ],
  },
  {
    slug: 'mauritius-mru-mra-tradenet-boe-air-freight-clearance',
    title: '毛里求斯MRU空运清关：MRA TradeNet、Bill of Entry和机场放行资料怎么准备？',
    excerpt:
      '中国到毛里求斯MRU空运，工业设备、医疗物资、电子电器、样品、备件和贸易补货不能只看航班。MRA Customs、TradeNet、Bill of Entry、Air Waybill、发票箱单、原产地证和进口许可证要提前对齐。',
    date: '2026-06-30',
    readTime: '12 分钟',
    category: '政策合规',
    author: defaultAuthor,
    image: '/case-17t-4.jpg',
    keywords: ['毛里求斯MRU清关资料', 'Mauritius airport customs clearance', 'Mauritius TradeNet air freight', 'MRA customs Bill of Entry', 'MRU air cargo clearance', '中国到毛里求斯空运清关'],
    template: 'generated',
    audience: ['毛里求斯进口商', '工业设备供应商', '医疗与电子电器工厂', '印度洋航线货代同行'],
    angle: '用MRU/Mauritius airport、MRA Customs、TradeNet、Bill of Entry和机场清关承接毛里求斯空运清关搜索。',
    sections: [
      {
        heading: 'MRU空运先判断MRA/TradeNet资料',
        body: [
          'MRU毛里求斯适合工业设备、医疗物资、电子电器、样品、小批量备件、快周转贸易补货和印度洋项目货。客户只问中国到毛里求斯空运多少钱时，销售要先判断进口商、清关代理、TradeNet账号、Air Waybill、商业发票、装箱单和Bill of Entry资料是否能提前跑通。',
          'MRA Customs的进口页面说明，进口任何货物都需要完成海关手续，包括通过TradeNet电子提交Customs Declaration，也就是Bill of Entry（BOE），并填写数量、价值、精确品名、型号、品牌、原产国、税费等资料。空运报价前，MRU到港资料不能只停留在重量体积。',
        ],
        bullets: ['MRU airport', 'MRA Customs', 'TradeNet', 'Bill of Entry'],
      },
      {
        heading: 'BOE、AWB和扫描单证必须一致',
        body: [
          'MRA进口页面还说明，除了BOE，invoice、Bill of Lading、Packing List、Certificate of Origin、permits或其他随货文件也要扫描并电子提交。空运场景下，Bill of Lading逻辑要换成Air Waybill和航空舱单资料。',
          '所以MRU询价不能只收中文品名和总重量。HS Code、英文品名、用途、型号、品牌、货值币种、AWB收货人、商业发票、装箱单、原产地、进口许可证和BOE字段必须互相对应；否则会拖慢TradeNet受理、税费支付和海关放行。',
        ],
        bullets: ['Air Waybill', 'Commercial invoice', 'Packing List', 'Certificate of Origin'],
      },
      {
        heading: '机场一小时放行目标不等于资料可以晚给',
        body: [
          'MRA面向贸易和商业社群的服务页面说明，所有Bills of Entry通过Mauritius TradeNet电子处理，清关代理、货代和注册进口商通过TradeNet提交申报和扫描文件；页面也说明海关目标是在海港和机场站点整体一小时内完成清关手续并发送货物放行信息。',
          '这正说明资料前置的重要性。医疗设备、通信设备、带电设备、化工品、食品/农业相关货、高货值电子电器和项目备件，不适合只按普通空运报价处理。MRU询价要把航班、TradeNet申报、BOE、许可证、税费、仓库放行和最终交付城市拆成一张执行清单。',
        ],
        bullets: ['Electronic Bills of Entry', 'Airport cargo release', 'Import permit场景', '最终交付城市'],
      },
    ],
    checklist: ['MRU目的机场', '最终城市/项目现场', '进口商MRA/TradeNet资料', '清关代理或货代资料', 'HS Code', '英文品名和用途', '规格型号和品牌', '产品照片', '商业发票', '装箱单', 'Air Waybill资料', '航空舱单资料', 'Bill of Entry字段', 'Certificate of Origin如需', '进口许可证或受控货批文如需', '税费/货值资料', '扫描附件准备状态', '每件尺寸重量', '包装照片', '是否经JNB/NBO/DXB或欧洲中转', '最晚到货时间'],
    relatedRoutes: [
      { label: 'JNB 约翰内斯堡入口', href: '/africa-air-freight/jnb/' },
      { label: 'NBO 内罗毕东非入口', href: '/africa-air-freight/nbo/' },
      { label: '马达加斯加TNR清关资料', href: '/insights/madagascar-tnr-bsc-gasynet-air-freight-clearance/' },
      { label: '非洲清关资料清单', href: '/insights/africa-customs-documents-checklist-air-freight/' },
    ],
    sources: [
      { label: 'Mauritius Revenue Authority: Import', href: 'https://www.mra.mu/customs1/import' },
      { label: 'Mauritius Revenue Authority: Service to the Trading and Business Community', href: 'https://www.mra.mu/index.php/customs1/more-topics/service-trading-business-community' },
      { label: 'Mauritius Revenue Authority: Customs', href: 'https://www.mra.mu/index.php/customs' },
      { label: 'Mauritius Revenue Authority: Guide to Cargo Clearance', href: 'https://www.mra.mu/download/GuideCargo.pdf' },
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
