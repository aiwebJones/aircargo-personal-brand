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

export const jnbLanguageAlternates = {
  'zh-CN': `${siteOrigin}/africa-air-freight/jnb/`,
  en: `${siteOrigin}/en/africa-air-freight/jnb/`,
  'x-default': `${siteOrigin}/africa-air-freight/jnb/`,
} as const
