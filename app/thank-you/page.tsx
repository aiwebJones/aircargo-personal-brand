import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: '询盘已收到 | EASCargo Jones',
  description: 'EASCargo已收到您的中国到非洲项目货空运询盘。',
  alternates: {
    canonical: 'https://www.eascargo.com/thank-you/',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#08111f] px-5 text-white">
      <div className="mx-auto w-full max-w-2xl py-16 text-center">
        <CheckCircle2 className="mx-auto h-16 w-16 text-amberGold" aria-hidden="true" />
        <h1 className="mt-6 text-3xl font-bold sm:text-4xl">询盘已收到</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
          我们会根据货物尺寸、重量、目的地和时效要求判断可执行路线，并尽快回复。
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-[#08111f] transition hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            返回首页
          </Link>
          <a
            href="mailto:globegsa@gmail.com"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-amberGold hover:text-amberGold"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            邮件补充资料
          </a>
        </div>
      </div>
    </main>
  )
}
