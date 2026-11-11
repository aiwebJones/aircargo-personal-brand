export type MarketingAttribution = {
  ctaSource: string
  firstSource: string
  topic: string
  medium: string
  campaign: string
  term: string
  content: string
  landingPage: string
  referrer: string
}

export type RouteRfqPrefill = {
  origin?: string
  destination: string
  cargoType: string
  notes: string
}

const ATTRIBUTION_KEY = 'eascargo_attribution'
const CONVERSION_KEY = 'eascargo_last_conversion'

function clean(value: string | null | undefined, limit = 240) {
  return (value || '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, limit)
}

function readStoredAttribution(): Partial<MarketingAttribution> {
  try {
    return JSON.parse(window.sessionStorage.getItem(ATTRIBUTION_KEY) || '{}')
  } catch {
    return {}
  }
}

function externalReferrer() {
  const referrer = clean(document.referrer, 500)
  if (!referrer) return ''

  try {
    const url = new URL(referrer)
    return url.hostname === window.location.hostname ? '' : `${url.origin}${url.pathname}`
  } catch {
    return ''
  }
}

function referrerHost(referrer: string) {
  try {
    return clean(new URL(referrer).hostname, 100)
  } catch {
    return ''
  }
}

export function captureAttribution(): MarketingAttribution {
  const stored = readStoredAttribution()
  const query = new URLSearchParams(window.location.search)
  const referrer = stored.referrer || externalReferrer()
  const querySource = clean(query.get('utm_source') || query.get('source'), 100)
  const ctaSource = clean(query.get('source') || query.get('utm_source'), 100)
  const page = clean(`${window.location.pathname}${window.location.search}`, 500)

  const attribution: MarketingAttribution = {
    ctaSource: ctaSource || stored.ctaSource || page || 'direct',
    firstSource:
      stored.firstSource || querySource || referrerHost(referrer) || 'direct',
    topic: clean(query.get('topic'), 140) || stored.topic || '',
    medium: clean(query.get('utm_medium'), 100) || stored.medium || '',
    campaign: clean(query.get('utm_campaign'), 140) || stored.campaign || '',
    term: clean(query.get('utm_term'), 140) || stored.term || '',
    content: clean(query.get('utm_content'), 140) || stored.content || '',
    landingPage: stored.landingPage || page,
    referrer,
  }

  try {
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution))
  } catch {
    // Attribution must never interrupt the inquiry flow.
  }

  return attribution
}

export function buildThankYouUrl(attribution: MarketingAttribution, form: string) {
  const query = new URLSearchParams({
    form: clean(form, 40),
    source: attribution.ctaSource,
  })

  if (attribution.topic) query.set('topic', attribution.topic)
  if (attribution.campaign) query.set('campaign', attribution.campaign)

  return `/thank-you/?${query.toString()}`
}

export function getRouteRfqPrefill(attribution: Pick<MarketingAttribution, 'topic'>): RouteRfqPrefill | null {
  const topic = clean(attribution.topic, 140).toLowerCase()

  if (topic === 'jnb-foc') {
    return {
      origin: '福州（FOC）/ 福建工厂周边',
      destination: 'JNB 约翰内斯堡；最终南非城市或现场待补',
      cargoType: '',
      notes:
        '路线背景：请补充实际货物所在地、单件尺寸重量、HS Code、进口商或清关代理，以及交付止于JNB机场还是继续到南非项目现场。FOC/XMN本地起运与国内集运口岸需按实际货物比较。',
    }
  }

  const routeTopics: Record<string, RouteRfqPrefill> = {
    jnb: {
      destination: 'JNB 约翰内斯堡；最终南非城市或现场待补',
      cargoType: '',
      notes:
        '请补充货物所在地、单件尺寸重量、HS Code、进口商或清关代理，以及交付止于JNB机场还是继续到南非项目现场。FOC/XMN本地起运与全国集运口岸可按货物情况比较。',
    },
    fbm: {
      destination: 'FBM 卢本巴希；最终城市、矿区或工厂待补',
      cargoType: '',
      notes:
        '请补充最终城市或矿区/工厂、交付期限、单件尺寸重量、卸货条件、进口商与清关代理、HS Code及法文品名，并说明报价止于FBM机场还是包含现场交接。',
    },
    lun: {
      destination: 'LUN 卢萨卡或 NLA 恩多拉；最终赞比亚地点待补',
      cargoType: '',
      notes:
        '请补充赞比亚最终城市或现场、是否比较LUN与NLA、件数及单件尺寸重量、货好日期、进口商或清关代理、单证准备情况、卡车进场/卸货条件，并说明机场或现场交付范围。',
    },
    lbv: {
      destination: 'LBV 利伯维尔；最终加蓬城市或现场待补',
      cargoType: '',
      notes:
        '请补充每件包装尺寸与毛重、装载方向、吊点及已知重心、收货人准备情况，并说明交付止于LBV机场还是继续到项目现场。历史约8米路线记录仅供参考，不代表本票已获接收。',
    },
    abj: {
      destination: 'ABJ 阿比让；最终科特迪瓦城市或现场待补',
      cargoType: '',
      notes:
        '请补充最终城市或现场、法文货物描述、HS Code、进口商与清关代理，以及GUCE、FDI、SYDAM/e-DAU相关资料的当前准备状态；同时说明交付止于ABJ机场还是继续到现场。',
    },
  }

  return routeTopics[topic] || null
}

export function recordConversionFromUrl() {
  const query = new URLSearchParams(window.location.search)
  const receipt = {
    form: clean(query.get('form'), 40),
    source: clean(query.get('source'), 100),
    topic: clean(query.get('topic'), 140),
    campaign: clean(query.get('campaign'), 140),
    recordedAt: new Date().toISOString(),
  }

  try {
    window.sessionStorage.setItem(CONVERSION_KEY, JSON.stringify(receipt))
  } catch {
    // The confirmation page remains functional when storage is unavailable.
  }

  window.dispatchEvent(new CustomEvent('eascargo:conversion', { detail: receipt }))
}
