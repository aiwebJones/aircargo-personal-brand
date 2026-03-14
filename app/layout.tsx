import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '神仙货运 · 郑坚 | 16年国际空运 + AI赋能精准交付',
  description: '16年国际航空货运实战经验，结合AI数据分析，专注华东区域及全球精准空运解决方案。路线优化、风险预警、成本透明化——让货运过程清晰可控。',
  keywords: ['国际空运', '货代', '航空货运', '空运专家', '供应链', 'AI物流', '神仙货运', '郑坚', '跨境电商空运', '华东空运'],
  authors: [{ name: '郑坚（神仙货运）' }],
  creator: '郑坚（神仙货运）',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://yourdomain.com',
    title: '神仙货运 · 郑坚 | 16年国际空运 + AI赋能精准交付',
    description: '16年国际航空货运实战经验，结合AI数据分析，为跨境电商和高端制造企业提供精准空运解决方案。',
    siteName: '神仙货运 · 郑坚',
  },
  twitter: {
    card: 'summary_large_image',
    title: '神仙货运 · 郑坚 | 16年国际空运 + AI赋能精准交付',
    description: '16年国际航空货运实战经验，结合AI数据分析，为跨境电商和高端制造企业提供精准空运解决方案。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: '郑坚',
              alternateName: '神仙货运',
              jobTitle: '国际空运专家 · AI赋能物流实战派',
              description: '16年国际航空货运实战经验，结合AI数据分析，专注精准空运解决方案',
              url: 'https://yourdomain.com',
              knowsAbout: [
                '国际空运',
                '航空货运',
                '供应链管理',
                '项目物流',
                'AI物流应用',
                '跨境电商空运',
                '风险管理',
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-deepBlue`}>
        {children}
      </body>
    </html>
  )
}
