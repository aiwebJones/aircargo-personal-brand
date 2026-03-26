import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '747全货机开鼻门装载 | 大件空运专家Jones | 15年经验',
  description: '15年国际空运专家，擅长747全货机开鼻门装载、大件空运、包机服务。中国到非洲ABJ/BKO/LUN/CKY专线，门到门价格，避免常见陷阱。大件空运、超长超重超高、紧急空运42小时、温控货物冷链运输。',
  keywords: [
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
    canonical: 'https://www.eascargo.com',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.eascargo.com',
    title: '神仙货运Jones | 国际空运系统化交付专家',
    description: '15+年国际航空货运实战经验，擅长复杂航线、项目货、包机、系统化运营。',
    siteName: '神仙货运Jones - 国际空运专家',
  },
  twitter: {
    card: 'summary_large_image',
    title: '神仙货运Jones | 国际空运系统化交付专家',
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
              'alternateName': 'Shenxian Jones',
              'url': 'https://www.eascargo.com',
              'description': '15年国际航空货运专家，擅长747全货机开鼻门装载、大件空运、包机服务。中国到非洲ABJ/BKO/LUN/CKY专线。',
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
              'areaServed': ['CN', 'CI', 'ML', 'ZM', 'GN', 'FR', 'DE'],
              'knowsAbout': [
                '国际空运',
                '航空货运',
                '747全货机',
                '开鼻门装载',
                '大件运输',
                '包机运营',
                '冷链运输',
                '非洲航线'
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
              'name': '神仙货运Jones',
              'jobTitle': '国际空运系统化交付专家',
              'description': '15年国际航空货运实战经验，擅长复杂航线、项目货、包机、系统化运营',
              'url': 'https://www.eascargo.com',
              'knowsAbout': [
                '国际空运',
                '航空货运',
                '747全货机',
                '开鼻门装载',
                '大件运输',
                '包机运营',
                '非洲航线',
                'ET联运'
              ]
            }),
          }}
        />

        {/* Service Schema: 747开鼻门装载 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              'name': '747全货机开鼻门装载服务',
              'description': '专业747-400F开鼻门装载方案，精确配重计算，安全装载超长设备',
              'provider': {
                '@type': 'Organization',
                'name': '神仙货运Jones'
              },
              'areaServed': ['CN', 'FR', 'DE']
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
              'name': '中国到非洲空运专线',
              'description': 'ABJ/BKO/LUN/CKY专线，ET联运，清关协助，门到门服务',
              'provider': {
                '@type': 'Organization',
                'name': '神仙货运Jones'
              },
              'areaServed': ['CI', 'ML', 'ZM', 'GN']
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
