import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '中国到非洲大件空运案例 | B747F、超长重货与项目交付',
  description:
    'EASCargo中国到非洲大件与项目货空运案例，覆盖B747F主甲板、超长超重设备、LGG/BRU欧洲中转、LBV/FBM/LUN等非洲入口及清关和二程交付。',
  alternates: {
    canonical: 'https://www.eascargo.com/cases/',
  },
  openGraph: {
    title: '中国到非洲大件空运案例 | EASCargo Jones',
    description:
      '查看超长设备、矿业备件、B747F主甲板和非洲项目交付的路线难点、方案与结果。',
    url: 'https://www.eascargo.com/cases/',
    type: 'website',
  },
}

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return children
}
