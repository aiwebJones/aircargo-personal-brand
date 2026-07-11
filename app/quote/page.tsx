import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle2,
  FileCheck2,
  Mail,
  MessageCircle,
  Phone,
  Plane,
  Route,
  ShieldCheck,
  Truck,
} from 'lucide-react'
import QuoteForm from '@/components/QuoteForm'

const pageUrl = 'https://www.eascargo.com/quote/'

export const metadata: Metadata = {
  title: '中国到非洲大件空运询价 | 项目货路线预判 | EASCargo Jones',
  description:
    '提交中国到非洲超大件、矿业备件、油气能源急件和项目货逐票询价：按尺寸重量、起运地、目的机场、清关和最终交付判断可执行路线。',
  keywords: [
    '中国到非洲大件空运询价',
    '非洲项目货空运报价',
    '非洲矿业备件空运询价',
    'JNB FBM LUN LBV空运报价',
    'LGG BRU非洲中转询价',
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: '中国到非洲大件/项目货逐票询价 | EASCargo Jones',
    description: '先核对装载、路线、清关和最终交付，再按真实货物资料逐票报价。',
    url: pageUrl,
    type: 'website',
  },
}

const routeChecks = [
  {
    icon: Plane,
    title: '装载是否成立',
    body: '按每件尺寸、重量、包装、重心、吊点和可叠放性判断腹舱、主甲板、板型、舱门与地面设备边界。',
  },
  {
    icon: Route,
    title: '全程路线是否成立',
    body: '比较中国直出、ADD 中转、LGG/BRU 欧洲中转或非洲 Hub 延伸；承运人、机型、舱位与时效均逐票确认。',
  },
  {
    icon: FileCheck2,
    title: '进口资料是否成立',
    body: '核对品名、HS Code、发票装箱单、进口商、许可证、目的国合规文件和当地清关代理准备度。',
  },
  {
    icon: Truck,
    title: '最终交付是否成立',
    body: '机场到达不等于项目交付，还要确认提货、卡车、边境、卸货设备、项目现场和责任边界。',
  },
]

const faqs = [
  {
    question: '为什么不能只报总重量和目的港？',
    answer:
      '大件空运的可执行性由单件尺寸、单件重量、包装方向、舱门、板型、装卸设备和中转条件共同决定。总重量相同的两票货，路线和成本可能完全不同。',
  },
  {
    question: '提交后能直接得到固定运价和时效吗？',
    answer:
      '不能。EASCargo 先检查资料完整度和路线边界，再结合货好日期、实际承运条件、舱位、附加费和目的地操作逐票确认。页面不展示未经核实的固定运价、舱位或时效。',
  },
  {
    question: '哪些非洲目的地适合提交？',
    answer:
      '核心包括 JNB、FBM、LUN、LBV、EBB、ADD、CKY，也可提交 CMN、ALG、TUN、OUA、BKO、HAH、NBJ 及其他非洲机场和最终项目地点，由 EASCargo 按票判断。',
  },
]

export default function QuotePage() {
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${pageUrl}#webpage`,
    name: 'EASCargo China to Africa project cargo RFQ',
    alternateName: '中国到非洲大件项目货逐票询价',
    url: pageUrl,
    description: metadata.description,
    dateModified: '2026-07-11',
    mainEntity: {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'China to Africa oversized and project cargo air freight route review',
      serviceType: 'Shipment-specific oversized air freight quotation and route feasibility review',
      provider: {
        '@type': 'Organization',
        '@id': 'https://www.eascargo.com/#organization',
        name: 'EASCargo Jones',
      },
      areaServed: ['China', 'Africa'],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: pageUrl,
        servicePhone: {
          '@type': 'ContactPoint',
          telephone: '+86-138-1653-9222',
          contactType: 'sales',
          availableLanguage: ['zh', 'en'],
        },
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'EASCargo Jones', item: 'https://www.eascargo.com/' },
      { '@type': 'ListItem', position: 2, name: '中国到非洲项目货询价', item: pageUrl },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <main className="min-h-screen bg-[#f6f7f9] text-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-8 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-amberGold hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            EASCargo Jones
          </Link>
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-bold text-amberGold">China to Africa project cargo RFQ</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">中国到非洲大件/项目货逐票询价</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              先提交真实货物资料，再判断能不能装、走哪条线、目的地能不能清和最终现场能不能交。
              EASCargo 不用未经确认的固定价格、舱位或时效代替逐票判断。
            </p>
          </div>
          <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
            {['JNB / FBM / LUN / LBV', 'LGG / BRU 欧洲中转', 'B747F 主甲板预判', '清关 + 最终交付'].map((item) => (
              <div key={item} className="flex items-center gap-2 border-l-2 border-amberGold pl-3 text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-amberGold" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8 lg:py-16">
        <aside className="space-y-9 lg:sticky lg:top-6 lg:self-start">
          <div>
            <p className="text-sm font-bold text-amber-700">报价判断顺序</p>
            <h2 className="mt-3 text-3xl font-black">先把路线做成立，再比较全程成本。</h2>
            <p className="mt-5 leading-8 text-slate-600">
              航空运费只是总成本的一部分。超大件和项目货还会受到国内调拨、出口操作、特殊地服、欧洲或 ADD 中转、目的港费用、清关、卡车和现场卸货影响。
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {routeChecks.map((check) => {
              const Icon = check.icon
              return (
                <div key={check.title} className="py-5">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-amber-700" aria-hidden="true" />
                    <h3 className="font-black">{check.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{check.body}</p>
                </div>
              )
            })}
          </div>

          <div className="border-l-4 border-amberGold bg-white px-5 py-5 shadow-sm">
            <div className="flex items-center gap-2 font-black">
              <ShieldCheck className="h-5 w-5 text-amber-700" aria-hidden="true" />
              直接联系方式
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-700">
              <a href="mailto:globegsa@gmail.com" className="inline-flex items-center gap-2 hover:text-amber-700">
                <Mail className="h-4 w-4" aria-hidden="true" />
                globegsa@gmail.com
              </a>
              <a href="tel:+8613816539222" className="inline-flex items-center gap-2 hover:text-amber-700">
                <Phone className="h-4 w-4" aria-hidden="true" />
                +86 138 1653 9222
              </a>
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WeChat: jnb931
              </span>
            </div>
          </div>
        </aside>

        <QuoteForm />
      </section>

      <section className="border-y border-slate-200 bg-white py-14">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold text-amber-700">可比较的报价口径</p>
            <h2 className="mt-3 text-3xl font-black">同一票货，至少比较四种可能路径。</h2>
            <p className="mt-5 leading-8 text-slate-600">
              中国直出、经 ADD 中转、经 LGG/BRU 欧洲中转、非洲 Hub 到最终城市延伸，并不是每票都适用。
              判断依据是实际尺寸、货好时间、目的地、全程责任和当票承运条件，而不是先选一个看起来便宜的机场代码。
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ['中国直出', '核对国内起运机场、舱门、机型、板位和出口操作。'],
              ['ADD 中转', '核对一程与二程接受条件、转运文件和目的港连接。'],
              ['LGG / BRU', '适合需要欧洲仓库交接、重组板或非洲全货机衔接的异常货。'],
              ['非洲 Hub 延伸', '把机场到项目城市的清关、卡车、边境和卸货一起比较。'],
            ].map(([title, body]) => (
              <article key={title} className="border-t-2 border-slate-950 pt-4">
                <h3 className="font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 border-l-2 border-slate-300 pl-4 text-sm leading-7 text-slate-500" lang="en">
            English RFQ: send origin, destination airport and final city, commodity, HS code, pieces, dimensions and gross weight per piece, packing photos, cargo-ready date, required arrival date, and any battery, DG, temperature-control or final-delivery requirement.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-bold text-amber-700">询价常见问题</p>
        <h2 className="mt-3 text-3xl font-black">提交之前先看清这三点。</h2>
        <div className="mt-7 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq) => (
            <section key={faq.question} className="py-6">
              <h3 className="text-lg font-black">{faq.question}</h3>
              <p className="mt-3 leading-8 text-slate-600">{faq.answer}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}
