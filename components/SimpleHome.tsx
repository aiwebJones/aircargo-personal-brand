'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react'
import EascargoLogo from '@/components/EascargoLogo'
import QuoteForm from '@/components/QuoteForm'
import { chineseHomeFaqs, englishHomeFaqs } from '@/lib/home-faqs'

const coreRoutes = {
  zh: [
    { href: '/africa-air-freight/', label: '非洲航线 Hub', note: '中国到非洲机场路线入口' },
    { href: '/africa-air-freight/jnb/', label: 'JNB 约翰内斯堡', note: '南非及南部非洲项目货' },
    { href: '/africa-air-freight/fbm/', label: 'FBM 卢本巴希', note: '铜钴矿区备件与现场交付' },
    { href: '/africa-air-freight/lun/', label: 'LUN 卢萨卡', note: '赞比亚工业与矿业货' },
    { href: '/africa-air-freight/lbv/', label: 'LBV 利伯维尔', note: '加蓬长货与能源项目' },
    { href: '/cases/', label: '公开项目记录', note: '8 米长货、重货和全货机记录' },
    { href: '/cases/project-records/', label: '项目数字对照表', note: '8 米、16,730 公斤、98.8 吨' },
  ],
  en: [
    { href: '/africa-air-freight/', label: 'Africa route hub', note: 'China to Africa airport routes' },
    { href: '/en/africa-air-freight/jnb/', label: 'JNB Johannesburg', note: 'South Africa project cargo' },
    { href: '/africa-air-freight/fbm/', label: 'FBM Lubumbashi', note: 'Copperbelt spares and site delivery' },
    { href: '/africa-air-freight/lun/', label: 'LUN Lusaka', note: 'Zambia industrial and mining cargo' },
    { href: '/africa-air-freight/lbv/', label: 'LBV Libreville', note: 'Gabon long cargo and energy projects' },
    { href: '/cases/', label: 'Public project records', note: 'Long-cargo, heavy-lift and freighter records' },
    { href: '/cases/project-records/', label: 'Case-study figures', note: '8 m, 16,730 kg and 98.8 t' },
  ],
} as const

const checks = {
  zh: [
    { title: '能不能装', body: '核对每件长宽高、毛重、包装、吊点、叉车条件和重心，再判断腹舱、主甲板或 B747F 是否值得继续问。' },
    { title: '哪条路能走', body: '比较中国直出、ADD 中转和 LGG/BRU 欧洲中转。机型、舱位和中转接受条件按当票确认。' },
    { title: '资料是否齐', body: '进口商、发票箱单、HS Code、许可证和目的港代理要在订舱前对齐。' },
    { title: '交到哪里', body: '报价写明止于机场、清关后，还是矿区、工厂或项目现场，以及谁负责卸货。' },
  ],
  en: [
    { title: 'Can it load?', body: 'Check length, width, height, gross weight, packing, lifting points, forklift access and center of gravity before talking about belly, main deck or a B747F.' },
    { title: 'Which route works?', body: 'Compare China direct uplift, ADD transit and LGG/BRU Europe transit. Aircraft, space and transfer acceptance are confirmed shipment by shipment.' },
    { title: 'Are the documents ready?', body: 'Importer, invoice, packing list, HS code, permits and the destination broker need to line up before booking.' },
    { title: 'Where does it end?', body: 'The quote states whether it stops at the airport, after customs, or at a mine, factory or project site, and who unloads it.' },
  ],
} as const

export default function SimpleHome({ lang }: { lang: 'zh' | 'en' }) {
  const [copied, setCopied] = useState(false)
  const [copyFailed, setCopyFailed] = useState(false)
  const zh = lang === 'zh'
  const faqs = zh ? chineseHomeFaqs : englishHomeFaqs
  const routes = zh ? coreRoutes.zh : coreRoutes.en
  const steps = zh ? checks.zh : checks.en

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
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="border-b border-zinc-200">
        <div className="mx-auto flex min-h-16 max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3 sm:px-8">
          <a href={zh ? '/' : '/en/'} aria-label="EASCARGO home">
            <EascargoLogo wordmarkClassName="text-sm sm:text-base" />
          </a>
          <nav aria-label={zh ? '主导航' : 'Main navigation'} className="flex items-center gap-4 text-sm sm:gap-6">
            <a href="/africa-air-freight/" className="hover:text-emerald-700">{zh ? '非洲航线' : 'Africa routes'}</a>
            <a href="/cases/" className="hover:text-emerald-700">{zh ? '案例' : 'Cases'}</a>
            <a href="#contact" className="hover:text-emerald-700">{zh ? '联系' : 'Contact'}</a>
            <a href={zh ? '/en/' : '/'} className="inline-flex min-h-10 items-center font-medium text-emerald-800 hover:text-emerald-950" hrefLang={zh ? 'en' : 'zh-CN'}>
              {zh ? 'English' : '中文'}
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 sm:px-8">
        <section className="pb-8 pt-9 sm:pb-10 sm:pt-12">
          <p className="text-sm font-semibold text-emerald-800">
            {zh ? '上海 · 中国到非洲超大件 / 项目货空运' : 'Shanghai · China to Africa oversized and project cargo'}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight tracking-normal sm:text-4xl">
            {zh ? '中国到非洲超大件与项目货空运' : 'China to Africa oversized and project cargo air freight'}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
            {zh
              ? 'EASCARGO 是设在上海的国际空运团队，公开资料记载 16 年国际空运操作经验。业务重点是把超长、超重和项目货从中国运到非洲机场和项目现场：先判断装载、路线、清关资料和交付边界，再做逐票报价。'
              : 'EASCARGO is a Shanghai-based international air freight forwarder. The public profile records 16 years of international air freight operations. The work is oversized, heavy and project cargo from China to African airports and job sites: loading, route, customs documents and delivery boundaries first, then a shipment-specific quote.'}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
            {zh
              ? '全国集货。中国直出、ADD 中转和 LGG/BRU 欧洲中转放在同一票里比较。不把未核实的舱位、承运人或时效写成承诺。'
              : 'Cargo can be collected across China. Direct uplift, ADD transit and LGG/BRU Europe transit are compared on the same shipment. Unconfirmed space, carrier and transit time are not stated as promises.'}
          </p>
        </section>

        <section aria-label={zh ? '核心页面' : 'Core pages'} className="pb-9 sm:pb-12">
          <h2 className="text-lg font-semibold">{zh ? '先看这些页面' : 'Start with these pages'}</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {routes.map((route) => (
              <li key={route.href}>
                <a href={route.href} className="flex items-start justify-between gap-3 rounded-md border border-zinc-200 px-4 py-3 hover:border-emerald-700">
                  <span>
                    <span className="block text-sm font-semibold">{route.label}</span>
                    <span className="mt-1 block text-sm leading-6 text-zinc-500">{route.note}</span>
                  </span>
                  <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-emerald-800" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="quote-agent" className="scroll-mt-6 pb-9 sm:pb-12" aria-label={zh ? '空运询价' : 'Air freight quote'}>
          <QuoteForm compact lang={lang} />
        </section>

        <section className="border-t border-zinc-200 py-8" aria-label={zh ? '报价前核对' : 'Checks before a quote'}>
          <h2 className="text-lg font-semibold">{zh ? '报价前先核对四件事' : 'Four checks before a rate'}</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {steps.map((step) => (
              <div key={step.title} className="rounded-md bg-zinc-50 px-4 py-4">
                <h3 className="text-sm font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="border-t border-zinc-200 py-8" aria-labelledby="home-faq-heading">
          <h2 id="home-faq-heading" className="text-lg font-semibold">{zh ? '常见问题' : 'Questions'}</h2>
          <div className="mt-4 divide-y divide-zinc-200 border-y border-zinc-200">
            {faqs.map((faq) => (
              <article key={faq.question} className="py-4">
                <h3 className="text-sm font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-5xl px-5 py-7 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
            <span className="font-semibold">{zh ? '联系 Jones' : 'Contact Jones'}</span>
            <a href="tel:+8613816539222" className="inline-flex min-h-10 items-center gap-2 hover:text-emerald-700">
              <Phone className="h-4 w-4" aria-hidden="true" />+86 138 1653 9222
            </a>
            <a href="mailto:globegsa@gmail.com" className="inline-flex min-h-10 items-center gap-2 break-all hover:text-emerald-700">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />globegsa@gmail.com
            </a>
            <button type="button" onClick={copyWechat} data-conversion="wechat-copy" title={zh ? '复制微信号' : 'Copy WeChat ID'} className="inline-flex min-h-10 items-center gap-2 hover:text-emerald-700" aria-live="polite">
              {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
              {copied ? (zh ? '已复制 jnb931' : 'Copied jnb931') : copyFailed ? (zh ? '微信号：jnb931（请手动复制）' : 'WeChat: jnb931 (copy manually)') : 'WeChat: jnb931'}
            </button>
          </div>
          <nav aria-label={zh ? '资料与工具' : 'Resources and tools'} className="mt-5 flex flex-wrap gap-x-6 gap-y-3 border-t border-zinc-200 pt-5 text-xs text-zinc-600">
            <a href="/insights/" className="hover:text-emerald-700">{zh ? '物流资料' : 'Freight guides'}</a>
            <a href="/tools/" className="hover:text-emerald-700">{zh ? '全部工具' : 'All tools'}</a>
            <a href="/tools/africa-project-cargo-rfq/?source=home-detailed" className="hover:text-emerald-700">{zh ? '大件详细询价' : 'Detailed project RFQ'}</a>
            <a href="/insights/eascargo-answer-engine-profile/" className="hover:text-emerald-700">{zh ? '公司资料' : 'Company profile'}</a>
            <a href={zh ? '/en/' : '/'} className="hover:text-emerald-700" hrefLang={zh ? 'en' : 'zh-CN'}>{zh ? 'English homepage' : '中文首页'}</a>
            <span className="sm:ml-auto">© {new Date().getFullYear()} EASCARGO</span>
          </nav>
        </div>
      </footer>
    </div>
  )
}
