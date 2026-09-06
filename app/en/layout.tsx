import SiteDocument, { siteMetadata } from '@/components/SiteDocument'

export const metadata = siteMetadata

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="en">{children}</SiteDocument>
}
