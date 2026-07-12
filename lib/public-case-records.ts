export type PublicCaseRecord = {
  id: string
  statusZh: string
  statusEn: string
  titleZh: string
  titleEn: string
  route: string
  cargoZh: string
  cargoEn: string
  image: string
  imageAltZh: string
  imageAltEn: string
  factsZh: string[]
  factsEn: string[]
  decisionZh: string
  decisionEn: string
  outcomeZh: string
  outcomeEn: string
  metrics: Array<{
    value: string
    labelZh: string
    labelEn: string
  }>
  detailHref?: string
}

export const publicCaseRecords: PublicCaseRecord[] = [
  {
    id: 'lbv-8m-via-europe',
    statusZh: '已完成非洲项目',
    statusEn: 'Completed Africa project',
    titleZh: 'LBV 8米长项目货：经 LGG/BRU 衔接 B747F',
    titleEn: '8-meter project cargo to LBV via LGG/BRU and B747F',
    route: 'China -> LGG / BRU -> LBV',
    cargoZh: '非洲工业项目超长件',
    cargoEn: 'Long industrial project cargo',
    image: '/case-17t-3.jpg',
    imageAltZh: 'EASCargo 大件货物操作现场资料',
    imageAltEn: 'EASCargo oversized cargo handling reference',
    factsZh: [
      '单件长度约 8 米，普通客机腹舱无法接收。',
      '中国直飞方案不成立，需要核对欧洲仓库交接和非洲二程。',
      'LBV 到港前必须确认进口资料、地服和卸货条件。',
    ],
    factsEn: [
      'The single piece was approximately 8 meters long and could not move in a normal passenger belly hold.',
      'A direct China departure was not executable, so Europe handover and the Africa second leg had to be checked together.',
      'LBV import documents, ground handling and unloading conditions required confirmation before booking.',
    ],
    decisionZh:
      '把路线拆成中国起运、LGG/BRU 仓库交接与重组板、B747F 非洲二程和 LBV 到港操作，并前置核对包装、重心、吊点和文件。',
    decisionEn:
      'The route was split into China uplift, LGG/BRU warehouse handover and build-up, the B747F Africa leg, and LBV arrival handling, with packing, center of gravity, lifting points and documents reviewed first.',
    outcomeZh:
      '原本没有中国直飞方案的超长件形成了可执行路径。最终价格、承运人和时效均以该票实际确认结果为准。',
    outcomeEn:
      'The long piece moved from having no direct China option to an executable route. Final price, operating carrier and transit time remained shipment-specific.',
    metrics: [
      { value: '8M', labelZh: '单件长度', labelEn: 'single-piece length' },
      { value: 'LGG/BRU', labelZh: '欧洲中转', labelEn: 'Europe transit' },
      { value: 'B747F', labelZh: '主甲板判断', labelEn: 'main-deck review' },
      { value: 'LBV', labelZh: '非洲入口', labelEn: 'Africa gateway' },
    ],
    detailHref: '/insights/china-africa-8-meter-oversized-air-freight-case/',
  },
  {
    id: 'heavy-cargo-16730kg',
    statusZh: '历史装载记录',
    statusEn: 'Historical loading record',
    titleZh: '单件 16,730 kg 超重设备特殊装载',
    titleEn: 'Special loading for a 16,730 kg single piece',
    route: 'PVG -> Middle East',
    cargoZh: '超重工业设备',
    cargoEn: 'Heavy industrial equipment',
    image: '/case-17t-1.jpg',
    imageAltZh: '单件 16.73 吨设备机场操作照片',
    imageAltEn: 'Airport handling of a 16.73-ton single piece',
    factsZh: [
      '单件记录重量 16,730 kg，尺寸 735 x 135 x 150 cm。',
      '单票记录总重约 45 吨，普通叉车和标准板位无法直接处理。',
      '装载前需要航司、地服、吊装、安检和货物文件共同确认。',
    ],
    factsEn: [
      'The recorded single-piece weight was 16,730 kg with dimensions of 735 x 135 x 150 cm.',
      'The shipment record was approximately 45 tons in total and could not be handled as standard pallet cargo.',
      'Airline acceptance, ground handling, lifting, security screening and cargo documents had to align before loading.',
    ],
    decisionZh:
      '申请特殊加长重板，使用枕木分散受力，并协调吊车、安检和航司文件；先确认机场实际处理边界，再安排出运。',
    decisionEn:
      'The operation used a special extended heavy pallet, load-spreading timber and coordinated crane, screening and airline documentation after confirming the airport handling limits.',
    outcomeZh:
      '在航司和地面操作确认后完成特殊装载与出运。该历史记录只证明装载经验，不代表当前航班接受条件。',
    outcomeEn:
      'The special loading and uplift were completed after airline and ground-handler confirmation. This historical record does not represent current-flight acceptance.',
    metrics: [
      { value: '16.73T', labelZh: '单件重量', labelEn: 'single-piece weight' },
      { value: '735CM', labelZh: '最长边', labelEn: 'longest side' },
      { value: '45T', labelZh: '单票记录', labelEn: 'shipment record' },
      { value: 'PVG', labelZh: '操作机场', labelEn: 'handling airport' },
    ],
  },
  {
    id: 'b777f-98800kg',
    statusZh: '历史全货机记录',
    statusEn: 'Historical freighter record',
    titleZh: 'B777F 单航班 98.8 吨货物组织',
    titleEn: '98.8-ton single-flight B777F operation',
    route: 'PVG -> AMS',
    cargoZh: '大批量工业货物',
    cargoEn: 'High-volume industrial cargo',
    image: '/case-17t-4.jpg',
    imageAltZh: 'EASCargo 大批量货物机场操作资料',
    imageAltEn: 'EASCargo high-volume cargo handling reference',
    factsZh: [
      '现有项目记录为单航班装载 98.8 吨。',
      '路线记录为 PVG 至 AMS，使用 B777F 全货机。',
      '同航班组织需要统一交仓、组板、地服和装载顺序。',
    ],
    factsEn: [
      'The existing project record shows 98.8 tons loaded on one flight.',
      'The recorded route was PVG to AMS using a B777F freighter.',
      'A single-flight movement required coordinated delivery, build-up, ground handling and loading sequence.',
    ],
    decisionZh:
      '把总货量、交仓节奏、板位配置、地服能力和全货机装载顺序放进同一执行计划，而不是把大票货拆成互不衔接的普通订舱。',
    decisionEn:
      'Total volume, delivery sequence, pallet allocation, ground handling and freighter loading order were managed as one execution plan rather than unrelated standard bookings.',
    outcomeZh:
      '现有记录显示 98.8 吨在同一 B777F 航班完成装载。该历史项目不构成当前舱位、班期或价格承诺。',
    outcomeEn:
      'The existing record shows 98.8 tons loaded on the same B777F flight. It is not a promise of current capacity, schedule or price.',
    metrics: [
      { value: '98.8T', labelZh: '单航班记录', labelEn: 'single-flight record' },
      { value: 'B777F', labelZh: '记录机型', labelEn: 'recorded aircraft' },
      { value: 'PVG', labelZh: '起运机场', labelEn: 'origin airport' },
      { value: 'AMS', labelZh: '到达机场', labelEn: 'arrival airport' },
    ],
  },
]
