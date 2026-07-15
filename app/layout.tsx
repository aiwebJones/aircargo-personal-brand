import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import AttributionCapture from '@/components/AttributionCapture'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '中国到非洲大件空运专家 | JNB/FBM/LUN/LBV | LGG/BRU欧洲中转 | EASCargo Jones',
  description: 'EASCargo Jones专注中国到非洲大件项目空运：JNB约翰内斯堡、FBM卢本巴希、LUN卢萨卡、LBV利伯维尔，提供LGG/BRU欧洲中转、B747F全货机、矿业设备和清关资料预判。',
  keywords: [
    '非洲大件项目空运',
    'LGG欧洲中转非洲',
    'BRU欧洲中转非洲',
    'JNB大件空运',
    'FBM卢本巴希空运',
    'LUN卢萨卡空运',
    'LBV利伯维尔空运',
    '非洲清关资料',
    '矿业设备空运',
    '747全货机开鼻门装载',
    '大件空运价格',
    '中国到非洲空运',
    'ABJ/BKO/LUN/CKY专线',
    '项目货空运',
    '超长设备空运',
    '超重货物空运',
    '航空货运代理',
    '国际空运专家'
  ],
  authors: [{ name: '神仙货运Jones' }],
  creator: '神仙货运Jones',
  metadataBase: new URL('https://www.eascargo.com'),
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    shortcut: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://www.eascargo.com/',
    languages: {
      zh: 'https://www.eascargo.com/',
      en: 'https://www.eascargo.com/en/africa-oversized-air-freight/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.eascargo.com',
    title: 'EASCargo Jones | 中国到非洲大件空运专家',
    description: '面向工厂、贸易商和货代的非洲大件项目货路线判断：LGG/BRU欧洲中转、B747F全货机、JNB/FBM/LUN/LBV和矿业设备空运。',
    siteName: 'EASCargo Jones - Africa Project Cargo Air Freight',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EASCargo Jones | 中国到非洲大件空运专家',
    description: '中国到非洲大件项目货路线判断，覆盖JNB、FBM、LUN、LBV和LGG/BRU欧洲中转。',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="EASCargo Jones Africa Air Freight Insights"
          href="https://www.eascargo.com/rss.xml"
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://www.eascargo.com/#organization',
              'name': 'EASCargo Jones',
              'alternateName': ['神仙货运Jones', 'Shenxian Jones', '神仙货运'],
              'url': 'https://www.eascargo.com',
              'description': 'China to Africa oversized air freight specialist. LGG/BRU Europe transit, B747F freighters, JNB/FBM/LUN/LBV Africa project cargo routing, customs document checks and inland delivery planning.',
              'slogan': 'China to Africa oversized air freight expert',
              'address': {
                '@type': 'PostalAddress',
                'addressCountry': 'CN'
              },
              'contactPoint': {
                '@type': 'ContactPoint',
                'telephone': '+86-138-1653-9222',
                'contactType': 'sales',
                'email': 'globegsa@gmail.com',
                'availableLanguage': ['zh', 'en']
              },
              'areaServed': ['CN', 'ZA', 'CD', 'ZM', 'GA', 'NG', 'KE', 'UG', 'GH', 'CI', 'FR', 'BE'],
              'knowsAbout': [
                'China to Africa oversized air freight',
                'Africa project cargo',
                'LGG Europe transit',
                'BRU Europe transit',
                'B747F freighter cargo',
                'JNB air freight',
                'FBM Lubumbashi air freight',
                'LUN Lusaka air freight',
                'LBV Libreville air freight',
                '非洲大件项目空运',
                '矿业设备空运',
                '非洲清关资料'
              ]
            }),
          }}
        />

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              'name': 'Jones',
              'alternateName': ['神仙', '神仙货运Jones', 'Shenxian Jones'],
              'jobTitle': 'China to Africa Oversized Air Freight Specialist',
              'description': 'Specialist in oversized and heavy air freight from China to Africa, including LGG/BRU Europe transit, B747F freighter planning, African hubs and customs document checks.',
              'url': 'https://www.eascargo.com',
              'knowsAbout': [
                'Africa oversized air freight',
                'China to Africa air cargo',
                'B747F main deck cargo',
                'LGG Africa gateway',
                'African mining equipment logistics',
                'JNB FBM LUN LBV air freight',
                '非洲大件项目空运'
              ]
            }),
          }}
        />

        {/* Service Schema: Africa oversized cargo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'China to Africa oversized air freight',
              'alternateName': '非洲大件项目空运',
              'description': 'Oversized and heavy air freight from China to Africa via LGG/BRU Europe transit, B747F freighters, African hubs and inland delivery planning.',
              'provider': {
                '@type': 'Organization',
                'name': 'EASCargo Jones'
              },
              'areaServed': ['China', 'South Africa', 'Democratic Republic of the Congo', 'Zambia', 'Gabon', 'Nigeria', 'Kenya', 'Uganda', 'Ghana', 'Ivory Coast'],
              'serviceType': 'Oversized cargo air freight'
            }),
          }}
        />

        {/* Service Schema: 中国到非洲空运 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': 'LGG/BRU Europe transit for Africa project cargo',
              'description': 'Europe transit planning through LGG/BRU for China-origin Africa oversized cargo, including JNB, FBM, LUN, LBV and inland points.',
              'provider': {
                '@type': 'Organization',
                'name': 'EASCargo Jones'
              },
              'areaServed': ['ZA', 'CD', 'ZM', 'GA', 'NG', 'KE', 'UG', 'GH', 'CI']
            }),
          }}
        />

      </head>
      <body className={`${inter.className} bg-deepBlue`}>
        <AttributionCapture />
        {children}
      </body>
    </html>
  )
}
