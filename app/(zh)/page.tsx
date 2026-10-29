import type { Metadata } from 'next'
import SimpleHome from '@/components/SimpleHome'
import { chineseHomeFaqs, faqPageSchema } from '@/lib/home-faqs'
import { homeLanguageAlternates, siteOrigin } from '@/lib/hreflang-pairs'

const pageUrl = `${siteOrigin}/`

export const metadata: Metadata = {
  title: '中国到非洲超大件与项目货空运 | EASCARGO',
  description:
    'EASCARGO 专注中国到非洲超大件与项目货空运。上海团队，16年国际空运操作经验。全国集货，比较中国直出、ADD 与 LGG/BRU 中转，核对装载、清关资料和现场交付。',
  keywords: [
    '中国到非洲超大件空运',
    '非洲项目货空运',
    'JNB大件空运',
    'FBM卢本巴希空运',
    'LUN卢萨卡空运',
    'LBV利伯维尔空运',
    'LGG BRU欧洲中转',
  ],
  alternates: {
    canonical: pageUrl,
    languages: homeLanguageAlternates,
  },
  openGraph: {
    type: 'website',
    url: pageUrl,
    siteName: 'EASCARGO',
    title: '中国到非洲超大件与项目货空运 | EASCARGO',
    description:
      '上海团队，16年国际空运操作经验。中国到非洲超大件和项目货逐票判断装载、路线、清关资料和现场交付。',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: '中国到非洲超大件与项目货空运 | EASCARGO',
    description: '中国到非洲超大件和项目货空运。16年国际空运操作经验，逐票核对装载、路线和交付。',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(pageUrl, chineseHomeFaqs)) }}
      />
      <SimpleHome lang="zh" />
    </>
  )
}
