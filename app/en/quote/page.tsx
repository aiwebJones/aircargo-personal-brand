import type { Metadata } from 'next'
import ShortQuoteForm from '@/components/ShortQuoteForm'
import { quoteLanguageAlternates, siteOrigin } from '@/lib/hreflang-pairs'

const pageUrl = `${siteOrigin}/en/quote/`

export const metadata: Metadata = {
  title: 'Send dimensions for a feasibility check | EASCARGO',
  description:
    'Send piece dimensions, gross weight, the African destination and a contact. EASCARGO checks whether the cargo can load before talking about a China-to-Africa rate.',
  alternates: {
    canonical: pageUrl,
    languages: quoteLanguageAlternates,
  },
  openGraph: {
    title: 'Send dimensions for a feasibility check',
    description: 'Dimensions, weight, destination and a contact. A shipment check, not a rate promise.',
    url: pageUrl,
    type: 'website',
  },
}

export default function EnglishQuotePage() {
  return (
    <main className="min-h-[70vh] bg-zinc-50">
      <div className="mx-auto max-w-xl px-4 py-8 sm:px-6 sm:py-12">
        <ShortQuoteForm lang="en" />
      </div>
    </main>
  )
}
