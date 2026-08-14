import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ClipboardCheck, FileSearch, Plane, ShieldCheck } from 'lucide-react'
import CustomsDocumentChecklistTool from './CustomsDocumentChecklistTool'

const pageUrl = 'https://www.eascargo.com/tools/africa-air-freight-customs-document-checklist/'

export const metadata: Metadata = {
  title: '非洲空运清关资料生成器 | Africa Air Freight Customs Document Checklist | EASCargo Jones',
  description:
    'Generate a China to Africa air freight customs document checklist by destination and cargo type: Ghana EasyPASS, Nigeria Form M/PAAR, Egypt ACI/CargoX, Kenya PVoC, South Africa SARS and more.',
  keywords: [
    'Africa air freight customs document checklist',
    'China to Africa air freight documents',
    'Ghana EasyPASS air freight checklist',
    'Nigeria Form M PAAR air freight',
    'Egypt ACI CargoX air freight checklist',
    'Kenya PVoC IDF air freight',
    '非洲空运清关资料',
    '非洲空运文件清单',
    '非洲空运询价资料',
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: '非洲空运清关资料生成器 | Africa Air Freight Customs Document Checklist',
    description:
      'Select destination and cargo attributes to generate a document checklist before quoting China to Africa project air freight.',
    url: pageUrl,
    type: 'website',
  },
}

const relatedLinks = [
  {
    title: '非洲清关资料总清单',
    href: '/insights/africa-customs-documents-checklist-air-freight/',
    note: '基础资料、进口商资料、监管证书和目的地代理边界。',
  },
  {
    title: '空运计费重计算器',
    href: '/tools/air-freight-chargeable-weight-calculator/',
    note: '先算 CBM、体积重和计费重，再判断资料和路线。',
  },
  {
    title: '加纳 EasyPASS 2026',
    href: '/insights/ghana-acc-easypass-icums-air-freight-clearance/',
    note: 'ACC 询价前先判断 CoC、ICUMS 和进口商资料。',
  },
  {
    title: '埃及 ACI / CargoX',
    href: '/insights/egypt-cai-nafeza-aci-cargox-air-freight-clearance/',
    note: 'CAI 空运要提前对齐 ACID、NAFEZA 和 CargoX。',
  },
  {
    title: '尼日利亚 B’Odogwu / Form M',
    href: '/insights/nigeria-los-bodogwu-form-m-paar-air-freight-clearance/',
    note: 'LOS/PHC 文件链决定真实到港成本和机场放行。',
  },
  {
    title: '非洲矿业设备 RFQ 模板',
    href: '/insights/africa-mining-equipment-air-freight-rfq-template/',
    note: '矿业、油气、工厂急件需要更完整的项目资料。',
  },
]

const sourceLinks = [
  {
    label: 'Ghana Standards Authority EasyPASS Data Sheet',
    href: 'https://gsa.gov.gh/wp-content/uploads/2026/06/DATA-SHEET-1.pdf',
  },
  {
    label: 'NAFEZA Advance Cargo Information Aviation',
    href: 'https://www.nafeza.gov.eg/en/pages/39',
  },
  {
    label: 'Kenya Bureau of Standards PVoC',
    href: 'https://www.kebs.org/pre-export-verification-of-conformity/',
  },
  {
    label: 'Standards Organisation of Nigeria SONCAP',
    href: 'https://son.gov.ng/soncapservice/',
  },
  {
    label: 'South African Revenue Service Customs',
    href: 'https://www.sars.gov.za/customs-and-excise/',
  },
]

export default function AfricaAirFreightCustomsDocumentChecklistPage() {
  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Africa Air Freight Customs Document Checklist',
    url: pageUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Any',
    description:
      'Generate destination-specific customs document checklists for China to Africa air freight RFQs.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.eascargo.com/#organization',
      name: 'EASCARGO',
      url: 'https://www.eascargo.com/',
      email: 'globegsa@gmail.com',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.eascargo.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools',
        item: 'https://www.eascargo.com/tools/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Africa Air Freight Customs Document Checklist',
        item: pageUrl,
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What documents are needed before quoting China to Africa air freight?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At minimum, prepare commercial invoice, packing list, AWB details, HS code, cargo description, dimensions, weights, cargo photos, importer details and final delivery city. Destination-specific documents such as Ghana EasyPASS, Nigeria Form M or Egypt ACID may also be required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this checklist a customs ruling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. It is a pre-RFQ readiness checklist. Final HS classification, taxes, permits and release decisions must be confirmed by the importer and destination customs broker.',
        },
      },
    ],
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-slate-950 px-5 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="pt-4">
            <Link href="/" className="text-sm font-semibold text-amberGold hover:text-white">
              EASCargo Jones
            </Link>
            <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-amberGold/40 bg-amberGold/10 px-3 py-2 text-sm font-semibold text-amberGold">
              <ClipboardCheck className="h-4 w-4" />
              Customs document readiness
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
              非洲空运清关资料生成器
              <span className="block text-amberGold">Africa Air Freight Customs Document Checklist</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              选择目的国和货物属性，先生成询价前资料清单。适合中国工厂、贸易商、项目采购和货代同行在报价前判断
              Ghana EasyPASS、Nigeria Form M、Egypt ACI、Kenya PVoC、South Africa SARS 等文件缺口。
            </p>
            <div className="mt-7 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {[
                '先确认资料，再承诺价格和时效',
                '按目的国拆分 CoC、ACI、IDF、Form M、PAAR 等文件',
                '按货物属性叠加电池、危险品、木包装和超大件要求',
                '输出可复制 RFQ，减少客户来回补资料',
              ].map((item) => (
                <div key={item} className="flex gap-2 rounded-md bg-white/5 p-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-amberGold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <CustomsDocumentChecklistTool />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-amberGold">Conversion logic</p>
          <h2 className="mt-3 text-3xl font-black">客户问价格，先把资料缺口打出来。</h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            非洲空运真正拖慢成交的，经常不是航班，而是目的国文件。报价前把进口商、HS Code、CoC、ACI、IDF、Form M、
            PAAR、木包装、电池和危险品资料拆清楚，客户才知道这票货为什么不能只比每公斤价格。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: FileSearch,
              title: '目的国资料',
              body: '按 ACC、LOS、CAI、NBO、DAR、JNB、FBM 等目的点输出清关文件。',
            },
            {
              icon: Plane,
              title: '货物属性',
              body: '电池、危险品、木包装、超大件、冷链和二手设备会叠加不同资料。',
            },
            {
              icon: ClipboardCheck,
              title: '询价承接',
              body: '把清单复制给客户或直接发邮件，减少反复补料，提高有效询盘率。',
            },
          ].map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="h-7 w-7 text-amberGold" />
                <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-amberGold">Internal search paths</p>
              <h2 className="mt-3 text-3xl font-black">生成清单后，继续看具体专题。</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-lg border border-slate-200 p-5 transition hover:border-amberGold hover:bg-slate-50"
                >
                  <span className="flex items-center justify-between gap-3 font-bold text-slate-950 group-hover:text-amberGold">
                    {item.title}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </span>
                  <span className="mt-3 block text-sm leading-7 text-slate-600">{item.note}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-center">
            <div>
              <h2 className="text-2xl font-black">清关资料不是售后问题，是报价前问题。</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                如果目的国文件缺口没有提前暴露，低价报价会变成补料、查验、仓储、改航班和客户投诉。
                把文件清单前置，才能把普通询价变成可执行路线判断。
              </p>
            </div>
            <a
              href="mailto:globegsa@gmail.com?subject=Africa%20air%20freight%20customs%20document%20checklist"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-amberGold px-5 text-sm font-bold text-slate-950 transition hover:bg-amberGold/90"
            >
              <Plane className="h-4 w-4" />
              发资料给 Jones
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14 sm:px-6 lg:px-8">
        <h2 className="text-xl font-black">Official reference entry points</h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          {sourceLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 transition hover:border-amberGold hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
