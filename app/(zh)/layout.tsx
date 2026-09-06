import SiteDocument, { siteMetadata } from '@/components/SiteDocument'

export const metadata = siteMetadata

export default function ChineseLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="zh-CN">{children}</SiteDocument>
}
