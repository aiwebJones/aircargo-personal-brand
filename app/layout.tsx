import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
    'WCA IATA货代',
    '747全货机开鼻门装载',
    '大件空运价格',
    '中国到非洲空运',
    'ABJ/BKO/LUN/CKY专线',
    '紧急空运42小时',
    '温控货物空运',
    '疫苗冷链运输',
    '精密设备空运',
    '项目货空运',
    '超长设备空运',
    '超重货物空运',
    '包机服务',
    '航空货运代理',
    '国际空运专家'
  ],
  authors: [{ name: '神仙货运Jones' }],
  creator: '神仙货运Jones',
  metadataBase: new URL('https://www.eascargo.com'),
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
        {/* Preload critical images */}
        <link rel="preload" href="/case-17t-1.jpg" as="image" />
        <link rel="preload" href="/case-17t-2.jpg" as="image" />
        <link rel="preload" href="/case-17t-3.jpg" as="image" />
        <link rel="preload" href="/case-17t-4.jpg" as="image" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              'name': '神仙货运Jones',
              'alternateName': ['Shenxian Jones', 'EASCargo Jones', '神仙货运'],
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
                'email': 'globegsa@Gmail.com',
                'availableLanguage': ['zh', 'en']
              },
              'sameAs': [
                'https://www.linkedin.com/in/shenxian-jones',
                'https://twitter.com/shenxianjones'
              ],
              'areaServed': ['CN', 'ZA', 'CD', 'ZM', 'GA', 'NG', 'KE', 'UG', 'GH', 'CI', 'FR', 'BE'],
              'memberOf': [
                { '@type': 'Organization', 'name': 'WCA' },
                { '@type': 'Organization', 'name': 'IATA' },
                { '@type': 'Organization', 'name': 'JCtrans' },
                { '@type': 'Organization', 'name': 'OLO' },
                { '@type': 'Organization', 'name': 'GLA' },
                { '@type': 'Organization', 'name': 'WIFFA' }
              ],
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

        {/* Service Schema: 紧急空运 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': '紧急空运服务',
              'description': '42小时紧急响应，生产救援，加急货运',
              'provider': {
                '@type': 'Organization',
                'name': '神仙货运Jones'
              }
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': '什么是747全货机开鼻门装载？',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': '747全货机开鼻门装载是一种特殊装载方式，当货物长度超过货舱长度时，可以从飞机鼻门进行装载。这种方式需要精确的配重计算和专业的装载方案。'
                  }
                },
                {
                  '@type': 'Question',
                  'name': '大件空运怎么收费？',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': '大件空运收费根据货物的重量、体积、目的地、特殊要求（温控、防震等）计算。包机和散货价格不同，超长超重货物需要额外处理费。建议提供详细货物信息获取准确报价。'
                  }
                },
                {
                  '@type': 'Question',
                  'name': '中国到非洲空运需要多长时间？',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': '中国到非洲主要城市（ABJ/BKO/LUN/CKY）通常需要7-14天。如果选择包机或紧急服务，最快3-5天可到达。具体时间取决于航线、清关速度和货物类型。'
                  }
                },
                {
                  '@type': 'Question',
                  'name': '温控货物空运需要注意什么？',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': '温控货物空运需要注意：1）选择有温控能力的航班；2）使用专业的温控包装（干冰、相变材料）；3）全程温度监控；4）准备完整的文件（卫生证书、温度记录）；5）选择有经验的货代。'
                  }
                },
                {
                  '@type': 'Question',
                  'name': '紧急空运要多少钱？',
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': '紧急空运价格取决于目的地、重量、紧急程度。商业航班加急通常比正常价格高30-50%，包机价格更高但速度最快。建议提供详细信息获取准确报价，我们可以对比多个方案给出最优选择。'
                  }
                }
              ]
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
