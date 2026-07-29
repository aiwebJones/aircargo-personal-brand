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
