import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '大件空运公开项目记录 | LBV 8米长货、16.73吨单件与B777F',
  description:
    'EASCargo公开项目与装载记录：LBV 8米长货经LGG/BRU衔接B747F、单件16,730kg特殊装载、B777F单航班98.8吨历史记录。',
  alternates: {
    canonical: 'https://www.eascargo.com/cases/',
  },
  openGraph: {
    title: '大件空运公开项目记录 | EASCARGO',
    description:
      '查看LBV超长件、16.73吨单件和B777F 98.8吨历史记录的公开事实、判断逻辑与执行边界。',
    url: 'https://www.eascargo.com/cases/',
    type: 'website',
  },
}

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return children
}
