import { destinations } from '@/lib/destinations'
import { englishCoreInsights } from '@/lib/en-core-insights'
import { seoInsights } from '@/lib/seo-insights'

export type SearchKind = 'airport' | 'guide' | 'certificate' | 'case'

export type SearchEntry = {
  title: string
  href: string
  kind: SearchKind
  hint: string
}

const certificatePattern = /SONCAP|PVoC|PVOc|SARS|ZRA|ASYCUDA|ICS2|KEBS|PAAR|Form M|CoC|ACI|ZCSA|BIVAC|GUICE|NRCS|ITAC/i

const hiddenFromSearch = new Set(['nigeria-los-air-freight-customs-risk'])

function kindForInsight(title: string, keywords: string[]): SearchKind {
  const blob = `${title} ${keywords.join(' ')}`
  return certificatePattern.test(blob) ? 'certificate' : 'guide'
}

/** Slim client index: titles, airport codes and certificate names. Bodies stay on the pages. */
export function buildSiteSearchIndex(): SearchEntry[] {
  const airports: SearchEntry[] = destinations.map((destination) => ({
    title: `${destination.code} ${destination.cityEn} / ${destination.cityZh}`,
    href: destination.href,
    kind: 'airport',
    hint: `${destination.countryEn} ${destination.countryZh} ${destination.cityEn} ${destination.cityZh} ${destination.code}`,
  }))

  const guides: SearchEntry[] = seoInsights
    .filter((insight) => !hiddenFromSearch.has(insight.slug))
    .map((insight) => ({
      title: insight.title,
      href: `/insights/${insight.slug}/`,
      kind: kindForInsight(insight.title, insight.keywords),
      hint: insight.keywords.join(' '),
    }))

  const englishGuides: SearchEntry[] = englishCoreInsights.map((insight) => ({
    title: insight.title,
    href: `/en/insights/${insight.slug}/`,
    kind: kindForInsight(insight.title, insight.keywords),
    hint: `English ${insight.keywords.join(' ')}`,
  }))

  const extras: SearchEntry[] = [
    { title: 'Public project records', href: '/cases/', kind: 'case', hint: '8 m 16730 kg 98.8 t cases 案例' },
    { title: 'Project record figures', href: '/cases/project-records/', kind: 'case', hint: '8 m 16730 98.8 B777F B747F' },
    { title: 'Africa airport hub', href: '/africa-air-freight/', kind: 'airport', hint: 'destination hub JNB FBM LUN LBV 航线' },
    { title: 'Short feasibility quote', href: '/quote/', kind: 'guide', hint: 'quote dimensions weight destination 询价' },
    { title: 'Short feasibility quote (English)', href: '/en/quote/', kind: 'guide', hint: 'quote dimensions weight destination' },
  ]

  const seen = new Set<string>()
  return [...airports, ...extras, ...englishGuides, ...guides].filter((entry) => {
    const key = `${entry.href}|${entry.title}`
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}
