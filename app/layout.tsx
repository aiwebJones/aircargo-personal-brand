import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '神仙Jones | 国际空运系统化交付专家',
  description: '15+年国际航空货运实战经验，擅长复杂航线、项目货、包机、系统化运营。把不可控的世界，变成你可以下注的系统。',
  keywords: ['国际空运', '货代', '航空货运', '空运专家', '供应链', '项目货', '包机'],
  authors: [{ name: '神仙Jones' }],
  creator: '神仙Jones',
  metadataBase: new URL('https://yourdomain.com'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://yourdomain.com',
    title: '神仙Jones | 国际空运系统化交付专家',
    description: '15+年国际航空货运实战经验，擅长复杂航线、项目货、包机、系统化运营。',
    siteName: '神仙Jones - 国际空运专家',
  },
  twitter: {
    card: 'summary_large_image',
    title: '神仙Jones | 国际空运系统化交付专家',
    description: '15+年国际航空货运实战经验，擅长复杂航线、项目货、包机、系统化运营。',
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
              name: '神仙Jones',
              jobTitle: '国际空运系统化交付专家',
              description: '15+年国际航空货运实战经验',
              url: 'https://yourdomain.com',
              sameAs: [
                'https://linkedin.com/in/yourprofile',
                'https://twitter.com/yourhandle',
              ],
              knowsAbout: [
                '国际空运',
                '航空货运',
                '供应链管理',
                '项目物流',
                '包机运营',
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
