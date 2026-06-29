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
