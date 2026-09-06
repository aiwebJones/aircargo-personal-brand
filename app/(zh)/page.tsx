import type { Metadata } from 'next'
import SimpleHome from '@/components/SimpleHome'

export const metadata: Metadata = {
  title: 'EASCARGO 国际空运 | 中国出口、大件项目货与包机询价',
  description: '上海国际空运团队，15年以上经验，覆盖非洲、中东、欧美。提交起运地、目的地、重量与货物类型，获取逐票人工报价。',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.eascargo.com/',
    siteName: 'EASCARGO',
    title: 'EASCARGO 国际空运',
    description: '中国出口空运、大件项目货与包机。提交货物信息，获取逐票人工报价。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EASCARGO 国际空运',
    description: '中国出口空运、大件项目货与包机。提交货物信息，获取逐票人工报价。',
  },
}

export default function Home() {
  return <SimpleHome />
}
