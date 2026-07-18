export type QuoteAgentProject = {
  brief: string
  name: string
  company: string
  contact: string
  email: string
  origin: string
  destination: string
  cargoName: string
  cargoType: string
  pieces: string
  dimensions: string
  grossWeight: string
  readyDate: string
  requiredArrival: string
  notes: string
}

export type QuoteCapability = {
  id: string
  label: string
  sideEffect: 'none' | 'external'
  approval: 'none' | 'required'
  verifier: string
}

export type CargoMeasurement = {
  pieces: number | null
  lengthCm: number | null
  widthCm: number | null
  heightCm: number | null
  grossWeightKg: number | null
  totalCbm: number | null
  volumetricWeightKg: number | null
  chargeableWeightKg: number | null
  densityKgCbm: number | null
  oversized: boolean
}

export type QuoteAgentStep = {
  capabilityId: string
  label: string
  status: 'ready' | 'needs-input' | 'approval-required'
  result: string
}

export type QuoteAgentPlan = {
  id: string
  projectRevision: number
  createdAt: string
  measurement: CargoMeasurement
  missingFields: string[]
  routeJudgment: string[]
  documentChecks: string[]
  steps: QuoteAgentStep[]
  rfqText: string
}

export const initialQuoteAgentProject: QuoteAgentProject = {
  brief: '',
  name: '',
  company: '',
  contact: '',
  email: '',
  origin: '',
  destination: '',
  cargoName: '',
  cargoType: '超大件/项目货',
  pieces: '',
  dimensions: '',
  grossWeight: '',
  readyDate: '',
  requiredArrival: '',
  notes: '',
}

export const quoteCapabilities: QuoteCapability[] = [
  {
    id: 'context.read',
    label: '读取当前页面与来源上下文',
    sideEffect: 'none',
    approval: 'none',
    verifier: '页面 URL、来源参数和项目版本已记录',
  },
  {
    id: 'cargo.normalize',
    label: '整理货物与运输字段',
    sideEffect: 'none',
    approval: 'none',
    verifier: '结构化字段通过类型和范围检查',
  },
  {
    id: 'chargeable-weight.calculate',
    label: '计算 CBM、体积重和初步计费重',
    sideEffect: 'none',
    approval: 'none',
    verifier: '使用 L x W x H x 件数 / 6000 重新计算',
  },
  {
    id: 'route-options.assess',
    label: '生成路线与装载核对项',
    sideEffect: 'none',
    approval: 'none',
    verifier: '只输出判断条件，不输出未经确认的运价、舱位或时效',
  },
  {
    id: 'documents.check',
    label: '检查报价和清关资料完整度',
    sideEffect: 'none',
    approval: 'none',
    verifier: '必填资料与特殊货物资料逐项核对',
  },
  {
    id: 'rfq.submit',
    label: '向 EASCargo 提交询价',
    sideEffect: 'external',
    approval: 'required',
    verifier: '外部询价服务返回成功状态且记录幂等编号',
  },
]

const destinationCodes = new Set([
  'JNB', 'FBM', 'LUN', 'LBV', 'EBB', 'ADD', 'CKY', 'CMN', 'ALG', 'TUN', 'OUA', 'BKO',
  'HAH', 'NBJ', 'ACC', 'ABJ', 'NBO', 'LOS', 'FIH', 'DAR', 'CPT', 'DUR', 'MPM', 'KGL',
])

const originNames: Array<[RegExp, string]> = [
  [/上海|\bPVG\b/i, '上海 / PVG'],
  [/深圳|\bSZX\b/i, '深圳 / SZX'],
  [/广州|\bCAN\b/i, '广州 / CAN'],
  [/香港|\bHKG\b/i, '香港 / HKG'],
  [/北京|\bPEK\b/i, '北京 / PEK'],
  [/郑州|\bCGO\b/i, '郑州 / CGO'],
  [/成都|\bCTU\b|\bTFU\b/i, '成都 / CTU-TFU'],
  [/厦门|\bXMN\b/i, '厦门 / XMN'],
  [/福州|\bFOC\b/i, '福州 / FOC'],
  [/马尔代夫|\bMLE\b/i, '马尔代夫 / MLE'],
  [/新加坡|\bSIN\b/i, '新加坡 / SIN'],
  [/菲律宾|马尼拉|\bMNL\b/i, '菲律宾 / MNL'],
]

function parsePositiveNumber(value: string) {
  const parsed = Number(value.replace(/,/g, '').trim())
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null
}

function round(value: number, precision = 2) {
  const factor = 10 ** precision
  return Math.round(value * factor) / factor
}

function parseWeightKg(value: string) {
  const match = value.replace(/,/g, '').match(/([0-9]+(?:\.[0-9]+)?)\s*(kg|公斤|千克|吨|t\b)?/i)
  if (!match) return null
  const amount = Number(match[1])
  if (!Number.isFinite(amount) || amount <= 0) return null
  return /吨|t\b/i.test(match[2] || '') ? amount * 1000 : amount
}

function parseDimensions(value: string) {
  const match = value.match(
    /([0-9]+(?:\.[0-9]+)?)\s*[xX×*]\s*([0-9]+(?:\.[0-9]+)?)\s*[xX×*]\s*([0-9]+(?:\.[0-9]+)?)\s*(cm|厘米|m|米)?/i,
  )
  if (!match) return null
  const unitFactor = /^(m|米)$/i.test(match[4] || '') ? 100 : 1
  return {
    lengthCm: Number(match[1]) * unitFactor,
    widthCm: Number(match[2]) * unitFactor,
    heightCm: Number(match[3]) * unitFactor,
  }
}

function extractDestination(brief: string) {
  const codes = brief.toUpperCase().match(/\b[A-Z]{3}\b/g) || []
  return codes.reverse().find((code) => destinationCodes.has(code)) || ''
}

export function extractProjectFromBrief(
  current: QuoteAgentProject,
): { project: QuoteAgentProject; extracted: string[] } {
  const brief = current.brief.trim()
  const next = { ...current }
  const extracted: string[] = []
  if (!brief) return { project: next, extracted }

  const origin = originNames.find(([pattern]) => pattern.test(brief))?.[1]
  if (!next.origin && origin) {
    next.origin = origin
    extracted.push('起运地')
  }

  const destination = extractDestination(brief)
  if (!next.destination && destination) {
    next.destination = destination
    extracted.push('目的机场')
  }

  const piecesMatch = brief.match(/([0-9]+)\s*(?:件|pcs?|pieces?)/i)
  if (!next.pieces && piecesMatch) {
    next.pieces = piecesMatch[1]
    extracted.push('件数')
  }

  const dimensions = parseDimensions(brief)
  if (!next.dimensions && dimensions) {
    next.dimensions = `${dimensions.lengthCm} x ${dimensions.widthCm} x ${dimensions.heightCm} cm`
    extracted.push('单件尺寸')
  }

  const weightMatch = brief.match(/(?:总毛重|总重|毛重|重量)\s*[:：]?\s*([0-9,.]+)\s*(kg|公斤|千克|吨|t\b)/i)
  if (!next.grossWeight && weightMatch) {
    const weight = parseWeightKg(`${weightMatch[1]} ${weightMatch[2]}`)
    if (weight) {
      next.grossWeight = `${weight} kg`
      extracted.push('总毛重')
    }
  }

  const cargoHints: Array<[RegExp, string, string]> = [
    [/电池|锂电|battery/i, '带电设备', '带电设备'],
    [/危险品|化工|DG\b|chemical/i, '危险品/化工品', '危险品/化工品'],
    [/温控|冷链|temperature/i, '温控货', '温控货'],
    [/矿业|矿山|mining/i, '矿业设备/备件', '矿业/油气/能源急件'],
    [/油气|能源|oil|gas|energy/i, '油气/能源设备', '矿业/油气/能源急件'],
  ]
  const cargoHint = cargoHints.find(([pattern]) => pattern.test(brief))
  if (cargoHint) {
    if (!next.cargoName) {
      next.cargoName = cargoHint[1]
      extracted.push('货物类型提示')
    }
    next.cargoType = cargoHint[2]
  }

  return { project: next, extracted }
}

export function calculateCargoMeasurement(project: QuoteAgentProject): CargoMeasurement {
  const dimensions = parseDimensions(project.dimensions)
  const pieces = parsePositiveNumber(project.pieces)
  const grossWeightKg = parseWeightKg(project.grossWeight)

  if (!dimensions || !pieces) {
    return {
      pieces,
      lengthCm: dimensions?.lengthCm ?? null,
      widthCm: dimensions?.widthCm ?? null,
      heightCm: dimensions?.heightCm ?? null,
      grossWeightKg,
      totalCbm: null,
      volumetricWeightKg: null,
      chargeableWeightKg: grossWeightKg,
      densityKgCbm: null,
      oversized: false,
    }
  }

  const totalCbm = pieces * dimensions.lengthCm * dimensions.widthCm * dimensions.heightCm / 1_000_000
  const volumetricWeightKg = pieces * dimensions.lengthCm * dimensions.widthCm * dimensions.heightCm / 6000
  const chargeableWeightKg = Math.max(grossWeightKg || 0, volumetricWeightKg)
  const densityKgCbm = grossWeightKg && totalCbm ? grossWeightKg / totalCbm : null

  return {
    pieces,
    ...dimensions,
    grossWeightKg,
    totalCbm: round(totalCbm),
    volumetricWeightKg: round(volumetricWeightKg),
    chargeableWeightKg: round(chargeableWeightKg),
    densityKgCbm: densityKgCbm ? round(densityKgCbm) : null,
    oversized:
      dimensions.lengthCm > 300 || dimensions.widthCm > 240 || dimensions.heightCm > 160,
  }
}

function buildMissingFields(project: QuoteAgentProject) {
  const required: Array<[keyof QuoteAgentProject, string]> = [
    ['origin', '货物所在地或起运城市'],
    ['destination', '目的机场和最终城市'],
    ['cargoName', '具体品名'],
    ['pieces', '件数'],
    ['dimensions', '每件尺寸'],
    ['grossWeight', '总毛重'],
    ['name', '联系人姓名'],
    ['contact', '微信、WhatsApp 或电话'],
  ]
  return required.filter(([key]) => !project[key].trim()).map(([, label]) => label)
}

function buildRouteJudgment(project: QuoteAgentProject, measurement: CargoMeasurement) {
  const judgments = [
    '先按货物所在地做全国集货，再比较上海、深圳、广州、郑州、北京、成都、香港等区域出口枢纽；具体出口机场逐票确认。',
    '同时比较中国直出、ADD 中转、LGG/BRU 欧洲中转及非洲 Hub 延伸，使用相同的全程费用和责任边界。',
  ]
  if (measurement.oversized) {
    judgments.push('当前尺寸触发超大件标记：需要预审主甲板、舱门、板位、地板承重、装卸设备和二程机型。')
  } else if (measurement.lengthCm) {
    judgments.push('当前尺寸未触发本工具的超大件阈值，但仍需由实际承运人确认机型、包装方向和单件接受条件。')
  } else {
    judgments.push('缺少可解析的单件尺寸，暂时不能判断腹舱、主甲板或中转装载边界。')
  }
  if (/FBM|LUN|LBV|CKY|BKO|OUA/i.test(project.destination)) {
    judgments.push('该目的地需要把非洲二程、目的港操作、清关代理、最终项目地卡车和卸货条件一起确认。')
  }
  if (/JNB/i.test(project.destination)) {
    judgments.push('JNB 方案需同时确认南非进口商或注册代理、清关资料以及 JNB 到最终项目地的交付责任。')
  }
  return judgments
}

function buildDocumentChecks(project: QuoteAgentProject) {
  const checks = [
    'Commercial Invoice、Packing List、准确英文品名、HS Code、品牌型号和货值币种',
    '每件尺寸、每件毛重、总毛重、包装照片、货物照片、重心/吊点及可叠放性',
    '进口商名称、税号、清关代理、最终城市/项目地址、贸易条款和交付责任',
  ]
  if (/带电|电池/i.test(project.cargoType + project.brief)) {
    checks.push('电池型号、UN38.3、MSDS、电池声明及适用包装/危险品资料')
  }
  if (/危险品|化工/i.test(project.cargoType + project.brief)) {
    checks.push('MSDS、UN 编号、危险品类别、包装等级和运输鉴定资料')
  }
  if (/温控/i.test(project.cargoType + project.brief)) {
    checks.push('温度范围、包装验证、温控时长、数据记录和中转补充条件')
  }
  return checks
}

function valueOrPending(value: string) {
  return value.trim() || '[待补充]'
}

function buildRfqText(project: QuoteAgentProject, measurement: CargoMeasurement) {
  const computed = measurement.chargeableWeightKg
    ? `${measurement.chargeableWeightKg} kg（初步，按 /6000；以承运条件为准）`
    : '[尺寸完整后计算]'

  return [
    'EASCargo China-Africa Project Cargo RFQ',
    '',
    `Contact: ${valueOrPending(project.name)} / ${valueOrPending(project.contact)}`,
    `Company: ${valueOrPending(project.company)}`,
    `Email: ${valueOrPending(project.email)}`,
    `Origin: ${valueOrPending(project.origin)}`,
    `Destination airport + final city: ${valueOrPending(project.destination)}`,
    `Commodity: ${valueOrPending(project.cargoName)}`,
    `Cargo type: ${valueOrPending(project.cargoType)}`,
    `Pieces: ${valueOrPending(project.pieces)}`,
    `Dimensions per piece: ${valueOrPending(project.dimensions)}`,
    `Total gross weight: ${valueOrPending(project.grossWeight)}`,
    `Preliminary chargeable weight: ${computed}`,
    `Cargo ready date: ${valueOrPending(project.readyDate)}`,
    `Required arrival date: ${valueOrPending(project.requiredArrival)}`,
    `Packing / cargo attributes / delivery notes: ${valueOrPending(project.notes)}`,
    '',
    'Please compare nationwide China collection and suitable regional export hubs, then assess direct, ADD, LGG/BRU or Africa-hub options shipment by shipment. No fixed rate, capacity, carrier or transit time is assumed by this request.',
  ].join('\n')
}

export function buildQuoteAgentPlan(project: QuoteAgentProject, projectRevision: number): QuoteAgentPlan {
  const measurement = calculateCargoMeasurement(project)
  const missingFields = buildMissingFields(project)
  const routeJudgment = buildRouteJudgment(project, measurement)
  const documentChecks = buildDocumentChecks(project)
  const calculationReady = Boolean(measurement.lengthCm && measurement.pieces && measurement.grossWeightKg)

  return {
    id: typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}`,
    projectRevision,
    createdAt: new Date().toISOString(),
    measurement,
    missingFields,
    routeJudgment,
    documentChecks,
    rfqText: buildRfqText(project, measurement),
    steps: [
      {
        capabilityId: 'context.read',
        label: '读取页面与询价上下文',
        status: 'ready',
        result: '已读取当前询价页、URL 来源参数和本次项目版本。',
      },
      {
        capabilityId: 'cargo.normalize',
        label: '整理货物资料',
        status: missingFields.length ? 'needs-input' : 'ready',
        result: missingFields.length ? `仍缺少 ${missingFields.length} 项必要资料。` : '必要询价字段已完整。',
      },
      {
        capabilityId: 'chargeable-weight.calculate',
        label: '计算初步计费重',
        status: calculationReady ? 'ready' : 'needs-input',
        result: calculationReady
          ? `初步计费重 ${measurement.chargeableWeightKg} kg，总体积 ${measurement.totalCbm} CBM。`
          : '需要可解析的件数、单件尺寸和总毛重。',
      },
      {
        capabilityId: 'route-options.assess',
        label: '生成路线判断条件',
        status: project.destination.trim() ? 'ready' : 'needs-input',
        result: project.destination.trim() ? `已针对 ${project.destination} 生成逐票核对项。` : '需要目的机场和最终城市。',
      },
      {
        capabilityId: 'documents.check',
        label: '检查报价与清关资料',
        status: 'ready',
        result: `生成 ${documentChecks.length} 组资料核对项。`,
      },
      {
        capabilityId: 'rfq.submit',
        label: '提交 EASCargo 询价',
        status: 'approval-required',
        result: '只在资料完整、计划版本未变化且用户一次确认后执行。',
      },
    ],
  }
}

