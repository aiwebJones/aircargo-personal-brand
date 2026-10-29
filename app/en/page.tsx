import type { Metadata } from 'next'
import SimpleHome from '@/components/SimpleHome'
import { englishHomeFaqs, faqPageSchema } from '@/lib/home-faqs'
import { homeLanguageAlternates, siteOrigin } from '@/lib/hreflang-pairs'

const pageUrl = `${siteOrigin}/en/`

export const metadata: Metadata = {
  title: 'China to Africa Oversized and Project Cargo Air Freight | EASCARGO',
  description:
    'EASCARGO plans oversized and project cargo air freight from China to Africa. Shanghai-based, with 16 years of international air freight operations. Compare direct uplift, ADD and LGG/BRU transit, then check loading, customs documents and final-site delivery.',
  keywords: [
    'China to Africa oversized air freight',
    'Africa project cargo air freight',
    'JNB project cargo',
    'FBM Lubumbashi air freight',
    'LUN Lusaka air freight',
    'LBV Libreville air freight',
    'LGG BRU Africa transit',
  ],
  alternates: {
    canonical: pageUrl,
    languages: homeLanguageAlternates,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'EASCARGO',
    title: 'China to Africa Oversized and Project Cargo Air Freight | EASCARGO',
    description:
      'Shanghai-based specialist for oversized and project cargo from China to Africa. 16 years of international air freight operations. Shipment-specific loading, route, customs and delivery checks.',
    alternateLocale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China to Africa Oversized and Project Cargo Air Freight | EASCARGO',
    description:
      'Oversized and project cargo air freight from China to Africa. 16 years of operations. Loading, route and delivery checked per shipment.',
  },
}

export default function EnglishHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(pageUrl, englishHomeFaqs)) }}
      />
      <SimpleHome lang="en" />
    </>
  )
}
