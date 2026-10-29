import type { Metadata } from 'next'
import ShortQuoteForm from '@/components/ShortQuoteForm'
import { quoteLanguageAlternates, siteOrigin } from '@/lib/hreflang-pairs'

const pageUrl = `${siteOrigin}/quote/`

export const metadata: Metadata = {
  title: '超大件可行性判断 | EASCARGO',
  description: '把单件尺寸、毛重、目的地和联系方式发给 EASCARGO。先判断能不能装、走哪条路，再谈中国到非洲的空运价格。',
  alternates: {
    canonical: pageUrl,
    languages: quoteLanguageAlternates,
  },
  openGraph: {
    title: '把尺寸发来，做可行性判断',
    description: '尺寸、重量、目的地和联系方式。逐票判断，不是运价承诺。',
    url: pageUrl,
    type: 'website',
  },
}

export default function ChineseQuotePage() {
  return (
    <main className="min-h-[70vh] bg-zinc-50">
      <div className="mx-auto max-w-xl px-4 py-8 sm:px-6 sm:py-12">
        <ShortQuoteForm lang="zh" />
      </div>
    </main>
  )
}
