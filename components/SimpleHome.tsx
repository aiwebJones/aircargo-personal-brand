'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Globe, Mail, Phone } from 'lucide-react'
import EascargoLogo from '@/components/EascargoLogo'
import QuoteForm from '@/components/QuoteForm'

export default function SimpleHome() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh')
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const zh = lang === 'zh'

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText('jnb931')
      setCopied(true)
      setCopyFailed(false)
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopyFailed(true)
    }
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900" lang={zh ? 'zh-CN' : 'en'}>
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex min-h-16 max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3 sm:px-8">
          <a href="/" aria-label="EASCARGO home"><EascargoLogo wordmarkClassName="text-sm sm:text-base" /></a>
          <nav aria-label={zh ? '主导航' : 'Main navigation'} className="flex items-center gap-4 text-sm sm:gap-6">
            <a href="/africa-air-freight/" className="hover:text-emerald-700">{zh ? '航线' : 'Routes'}</a>
            <a href="#contact" className="hover:text-emerald-700">{zh ? '联系' : 'Contact'}</a>
            <button type="button" onClick={() => setLang(zh ? 'en' : 'zh')} className="inline-flex min-h-10 items-center gap-1.5" aria-label={zh ? 'Switch to English' : '切换到中文'}>
              <Globe className="h-4 w-4" aria-hidden="true" />{zh ? 'EN' : '中文'}
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <section className="pb-7 pt-9 sm:pb-9 sm:pt-12">
          <h1 className="text-3xl font-bold leading-tight tracking-normal sm:text-4xl">EASCARGO <span className="inline-block">{zh ? '国际空运' : 'Air Freight'}</span></h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
            {zh ? '上海团队，15年以上空运经验。中国出口空运、大件项目货与包机，覆盖非洲、中东、欧美。' : 'Shanghai-based, with 15+ years in air freight. China exports, oversized cargo and charters to Africa, the Middle East, Europe and the Americas.'}
          </p>
        </section>
        <section id="quote-agent" className="scroll-mt-6 pb-9 sm:pb-12" aria-label={zh ? '空运询价' : 'Air freight quote'}>
          <QuoteForm compact lang={lang} />
        </section>
        <section id="about" className="grid items-center gap-5 border-t border-zinc-200 py-7 sm:grid-cols-[160px_1fr] sm:gap-7">
          <img src="/case-17t-1.jpg" width={240} height={160} alt={zh ? 'EASCARGO 超重设备机场操作实拍' : 'EASCARGO heavy equipment handling at the airport'} className="aspect-[3/2] w-40 rounded-md object-cover" loading="lazy" />
          <div>
            <h2 className="text-lg font-semibold">{zh ? '大件、急件、难运的货，直接找我们。' : 'Oversized, urgent or complex cargo? Talk to us.'}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{zh ? '全国集货，逐票核对航班、装载和目的地交付。' : 'China-wide collection, shipment-specific flight planning and destination delivery.'}</p>
            <a href="/cases/" className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-medium text-emerald-800 hover:text-emerald-950">{zh ? '查看实际项目' : 'View cargo projects'}<ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-5 py-7 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            <span className="font-semibold">{zh ? '联系 Jones' : 'Contact Jones'}</span>
            <a href="tel:+8613816539222" className="inline-flex min-h-10 items-center gap-2 hover:text-emerald-700"><Phone className="h-4 w-4" aria-hidden="true" />+86 138 1653 9222</a>
            <a href="mailto:globegsa@gmail.com" className="inline-flex min-h-10 items-center gap-2 break-all hover:text-emerald-700"><Mail className="h-4 w-4 shrink-0" aria-hidden="true" />globegsa@gmail.com</a>
            <button type="button" onClick={copyWechat} data-conversion="wechat-copy" title={zh ? '复制微信号' : 'Copy WeChat ID'} className="inline-flex min-h-10 items-center gap-2 hover:text-emerald-700" aria-live="polite">
              {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              {copied ? (zh ? '已复制 jnb931' : 'Copied jnb931') : copyFailed ? (zh ? '微信号：jnb931（请手动复制）' : 'WeChat: jnb931 (copy manually)') : 'WeChat: jnb931'}
            </button>
          </div>
          <nav aria-label={zh ? '资料与工具' : 'Resources and tools'} className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-t border-zinc-200 pt-5 text-xs text-zinc-600">
            <a href="/insights/" className="hover:text-emerald-700">{zh ? '物流资料' : 'Freight guides'}</a>
            <a href="/tools/" className="hover:text-emerald-700">{zh ? '全部工具' : 'All tools'}</a>
            <a href="/airport-finder/" className="hover:text-emerald-700">{zh ? '查最近机场' : 'Airport finder'}</a>
            <a href="/tools/africa-project-cargo-rfq/?source=home-detailed" className="hover:text-emerald-700">{zh ? '大件详细询价' : 'Detailed project RFQ'}</a>
            <a href="/insights/eascargo-answer-engine-profile/" className="hover:text-emerald-700">{zh ? '公司资料' : 'Company profile'}</a>
            <span className="sm:ml-auto">© {new Date().getFullYear()} EASCARGO</span>
          </nav>
        </div>
      </footer>
    </div>
  )
}
