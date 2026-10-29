import { englishCoreInsightSlugs, isEnglishCoreInsight } from '@/lib/hreflang-pairs'

function withSlash(pathname: string) {
  if (pathname === '/') return '/'
  return pathname.endsWith('/') ? pathname : `${pathname}/`
}

/** Pair a URL with its published translation. Unpaired pages fall back to the homepage in that language. */
export function languageCounterpart(pathname: string, target: 'zh' | 'en') {
  const path = withSlash(pathname.split('?')[0] || '/')

  if (path === '/' || path === '/en/') return target === 'en' ? '/en/' : '/'
  if (path === '/quote/' || path === '/en/quote/') return target === 'en' ? '/en/quote/' : '/quote/'
  if (path === '/africa-air-freight/jnb/' || path === '/en/africa-air-freight/jnb/') {
    return target === 'en' ? '/en/africa-air-freight/jnb/' : '/africa-air-freight/jnb/'
  }
  if (path === '/zh/lgg-africa-gateway/' || path === '/china-africa-oversized-cargo-via-europe/') {
    return target === 'en' ? '/china-africa-oversized-cargo-via-europe/' : '/zh/lgg-africa-gateway/'
  }

  const englishInsight = path.match(/^\/en\/insights\/([^/]+)\/$/)
  if (englishInsight && isEnglishCoreInsight(englishInsight[1])) {
    return target === 'en' ? path : `/insights/${englishInsight[1]}/`
  }

  const chineseInsight = path.match(/^\/insights\/([^/]+)\/$/)
  if (chineseInsight && (englishCoreInsightSlugs as readonly string[]).includes(chineseInsight[1])) {
    return target === 'en' ? `/en/insights/${chineseInsight[1]}/` : path
  }

  return target === 'en' ? '/en/' : '/'
}
