import SiteDocument from '@/components/SiteDocument'

// English-majority pages that keep their existing URLs. The (zh) layout would
// otherwise force <html lang="zh-CN"> on all of them.
// Covered routes: /africa-air-freight/[slug]/, /china-africa-oversized-cargo-via-europe/,
// /insights/eascargo-answer-engine-profile/.
export default function EnglishContentLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>
}
