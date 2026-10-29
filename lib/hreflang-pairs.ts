export const siteOrigin = 'https://www.eascargo.com'

/**
 * x-default points at the Chinese URL. That is the primary market page and the
 * site root already used as the canonical host.
 * Keep public/sitemap.xml xhtml:link entries in sync with these objects.
 */
export const homeLanguageAlternates = {
  'zh-CN': `${siteOrigin}/`,
  en: `${siteOrigin}/en/`,
  'x-default': `${siteOrigin}/`,
} as const

export const quoteLanguageAlternates = {
  'zh-CN': `${siteOrigin}/quote/`,
  en: `${siteOrigin}/en/quote/`,
  'x-default': `${siteOrigin}/quote/`,
} as const

export const jnbLanguageAlternates = {
  'zh-CN': `${siteOrigin}/africa-air-freight/jnb/`,
  en: `${siteOrigin}/en/africa-air-freight/jnb/`,
  'x-default': `${siteOrigin}/africa-air-freight/jnb/`,
} as const

/** Chinese LGG network page and the English Europe-transit gateway. */
export const lggLanguageAlternates = {
  'zh-CN': `${siteOrigin}/zh/lgg-africa-gateway/`,
  en: `${siteOrigin}/china-africa-oversized-cargo-via-europe/`,
  'x-default': `${siteOrigin}/zh/lgg-africa-gateway/`,
} as const

/**
 * The ten deepened China-to-Africa guides. Chinese stays at /insights/<slug>/,
 * English at /en/insights/<slug>/. x-default is the Chinese URL.
 */
export const englishCoreInsightSlugs = [
  'jnb-mining-spares-air-freight',
  'fbm-copperbelt-mining-equipment-air-freight',
  'lun-zambia-industrial-air-freight-guide',
  'lbv-gabon-8-meter-cargo-via-lgg-bru',
  'china-africa-via-europe-lgg-bru-transit',
  'oversized-air-freight-quote-checklist',
  'oversized-air-cargo-booking-documents-main-deck-africa',
  'africa-mining-equipment-air-freight-rfq-template',
  'china-africa-air-freight-cost-chargeable-weight',
  'africa-customs-documents-checklist-air-freight',
] as const

export type EnglishCoreInsightSlug = (typeof englishCoreInsightSlugs)[number]

export function isEnglishCoreInsight(slug: string): slug is EnglishCoreInsightSlug {
  return (englishCoreInsightSlugs as readonly string[]).includes(slug)
}

export function insightLanguageAlternates(slug: string) {
  const chinese = `${siteOrigin}/insights/${slug}/`
  const english = `${siteOrigin}/en/insights/${slug}/`
  return {
    'zh-CN': chinese,
    en: english,
    'x-default': chinese,
  }
}
