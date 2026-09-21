import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Languages,
  PackageCheck,
  Plane,
  Route,
  ShieldCheck,
  Truck,
} from 'lucide-react'

const pageUrl = 'https://www.eascargo.com/en/africa-air-freight/jnb/'
const chinesePageUrl = 'https://www.eascargo.com/africa-air-freight/jnb/'
const rfqUrl = '/tools/africa-project-cargo-rfq/?source=route&topic=jnb-foc'
const dateModified = '2026-09-21'

export const metadata: Metadata = {
  title: 'China to JNB Air Freight | Project Cargo from China | EASCARGO',
  description:
    'China to Johannesburg JNB air freight for oversized, mining, industrial and urgent spare-parts cargo. Compare FOC, XMN, PVG, CAN, SZX, HKG and other gateways, then confirm SARS customs and final-site delivery.',
  keywords: [
    'China to JNB air freight',
    'JNB project cargo from China',
    'FOC to JNB air freight',
    'XMN to Johannesburg cargo',
    'Johannesburg mining spare parts air freight',
    'South Africa oversized air cargo',
  ],
  alternates: {
    canonical: pageUrl,
    languages: {
      en: pageUrl,
      'zh-CN': chinesePageUrl,
    },
  },
  openGraph: {
    locale: 'en_US',
    title: 'China to JNB Air Freight for Project Cargo',
    description:
      'Route assessment from China gateways to Johannesburg for oversized, industrial and urgent cargo, including customs and final-site handover checks.',
    url: pageUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China to JNB Air Freight | EASCARGO',
    description:
      'Compare China origin gateways, loading feasibility, SARS customs readiness and South Africa delivery before requesting a JNB quote.',
  },
}

const gatewayChecks = [
  {
    title: 'FOC or XMN origin',
    text: 'Use a local uplift only when the booked aircraft, transfer points and the longest piece all work. Otherwise compare trucking to a stronger export gateway before fixing the route.',
  },
  {
    title: 'PVG, CAN, SZX or HKG comparison',
    text: 'A larger gateway may provide a better operating path for dense, long or main-deck cargo, but the inland pickup, terminal cut-off and transfer risk must be included in the comparison.',
  },
  {
    title: 'JNB is not the final handover',
    text: 'The quote must state whether it ends at JNB, after customs release, or at a mine, factory or project site. Truck access, lifting and unloading are separate checks.',
  },
]

const quoteFields = [
  'Commodity and HS Code, with restricted or controlled-goods status disclosed',
  'Piece count, dimensions and gross weight for every package',
  'Packing photos, lifting points and center of gravity for heavy or awkward pieces',
  'China pickup city and cargo-ready date',
  'JNB airport delivery or the exact South Africa final site',
  'Importer, customs broker and required-arrival date',
]

const faq = [
  {
    question: 'Can cargo from Fuzhou FOC or Xiamen XMN fly directly to JNB?',
    answer:
      'It must be checked shipment by shipment. Piece dimensions, aircraft type, transfer acceptance and current operating options decide whether a local departure works or trucking to another China gateway is safer.',
  },
  {
    question: 'Which China airport is best for oversized cargo to Johannesburg?',
    answer:
      'There is no fixed best airport. Compare the origin pickup, longest piece, gross weight, aircraft loading limits, transfer handling and total route risk across practical gateways before requesting the rate.',
  },
  {
    question: 'What should the South African importer prepare before arrival?',
    answer:
      'Confirm importer registration or the appointed registered agent, customs broker, HS Code, commercial invoice, packing list and AWB data. Controlled or used goods may require additional authority approval before shipment.',
  },
  {
    question: 'Does a JNB quote include delivery to a mine or factory?',
    answer:
      'Only when the quote explicitly includes it. Customs, destination handling, inland trucking, permits, lifting and unloading should be separated so the handover point and exclusions are clear.',
  },
]

export default function JnbAirFreightPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="bg-slate-950 px-5 py-12 text-white sm:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-sm font-semibold md:mb-10">
            <Link href="/en/africa-oversized-air-freight/" className="text-amberGold">
              EASCARGO Africa air freight
            </Link>
            <Link href="/africa-air-freight/jnb/" className="inline-flex items-center gap-2 text-slate-200 hover:text-white">
              <Languages className="h-4 w-4" />
              中文 JNB 路线
            </Link>
          </div>

          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-semibold text-amberGold">
              <Plane className="h-4 w-4" />
              JNB - Johannesburg, South Africa
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              China to JNB air freight
              <span className="block text-amberGold">for project and urgent cargo.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:hidden">
              Compare China gateways, loading, SARS customs and final-site handover before a manual JNB quote.
            </p>
            <p className="mt-6 hidden max-w-3xl text-lg leading-8 text-slate-300 sm:block">
              Nationwide China pickup with a shipment-specific comparison of FOC, XMN, PVG, CAN, SZX, HKG and other
              practical gateways. We check loading, transfer acceptance, South Africa customs readiness and the final
              handover before issuing a manual quote.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={rfqUrl}
                className="inline-flex items-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950"
              >
                <span className="sm:hidden">Review the JNB route</span>
                <span className="hidden sm:inline">Request a JNB route review</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="mailto:globegsa@gmail.com?subject=China%20to%20JNB%20project%20cargo%20review"
                className="hidden items-center rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white hover:border-slate-400 sm:inline-flex"
              >
                Email cargo details
              </a>
            </div>
            <p className="mt-4 hidden text-sm leading-6 text-slate-400 sm:block">
              Rates, capacity, routing and transit time are confirmed manually for each shipment.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-amberGold">Route decision</p>
            <h2 className="text-3xl font-bold md:text-4xl">Choose the export gateway after the cargo is measured.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The local airport is not automatically the lowest-risk choice. For long, heavy or urgent pieces, the useful
              comparison is the complete path: China pickup, export terminal, aircraft and transfer acceptance, JNB
              handling, customs release and the final South Africa delivery point.
            </p>
          </div>
          <div className="grid gap-4">
            {gatewayChecks.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <h3 className="flex items-center gap-3 text-xl font-semibold">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amberGold" />
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase text-amberGold">Shipment fit</p>
            <h2 className="text-3xl font-bold md:text-4xl">Useful for cargo where downtime and handling risk matter.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <PackageCheck className="mb-4 h-8 w-8 text-amberGold" />
              <h3 className="text-xl font-semibold">Oversized project pieces</h3>
              <p className="mt-3 leading-7 text-slate-600">Engineering equipment and awkward packages that need door, pallet, loading and transfer checks.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <Route className="mb-4 h-8 w-8 text-amberGold" />
              <h3 className="text-xl font-semibold">Mining and industrial spares</h3>
              <p className="mt-3 leading-7 text-slate-600">Replacement parts where the airport-to-site handover and required-arrival date must be explicit.</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <ShieldCheck className="mb-4 h-8 w-8 text-amberGold" />
              <h3 className="text-xl font-semibold">Customs-sensitive cargo</h3>
              <p className="mt-3 leading-7 text-slate-600">Used, restricted or controlled goods that need importer and permit checks before booking.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-amberGold">Customs and handover</p>
          <h2 className="text-3xl font-bold md:text-4xl">Confirm the importer and the final site before uplift.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            South African Revenue Service guidance says importers must register; a foreign importer must nominate a
            registered agent in South Africa. Product controls are separate from airfreight booking, so the importer and
            broker must confirm permits or authority approvals before departure.
          </p>
        </div>
        <div className="rounded-lg border border-slate-200 p-6 md:p-8">
          <div className="mb-5 flex items-center gap-3">
            <Truck className="h-7 w-7 text-amberGold" />
            <h3 className="text-2xl font-semibold">Define the delivery boundary</h3>
          </div>
          <ul className="space-y-4 text-slate-600">
            <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amberGold" />JNB airport handover, customs-cleared handover or final-site delivery</li>
            <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amberGold" />Destination handling, storage and customs-broker responsibility</li>
            <li className="flex gap-3"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amberGold" />Truck access, permits, lifting equipment and unloading at the site</li>
          </ul>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-amberGold">Quote input</p>
            <h2 className="text-3xl font-bold md:text-4xl">Send enough data to test the route, not only the total weight.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              An airfreight rate is only useful after the physical cargo, customs responsibility and handover point are clear.
            </p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-900 p-6 md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <FileCheck2 className="h-7 w-7 text-amberGold" />
              <h3 className="text-2xl font-semibold">Required details</h3>
            </div>
            <ul className="space-y-4 text-slate-300">
              {quoteFields.map((field) => (
                <li key={field} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amberGold" />
                  <span>{field}</span>
                </li>
              ))}
            </ul>
            <Link href={rfqUrl} className="mt-8 inline-flex items-center gap-2 font-semibold text-amberGold">
              Open the project cargo RFQ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-amberGold">Cost boundary</p>
            <h2 className="text-3xl font-bold md:text-4xl">A complete comparison separates each cost block.</h2>
            <div className="mt-6 space-y-4 leading-7 text-slate-600">
              <p><strong className="text-slate-950">China origin:</strong> pickup, export customs, terminal and special handling.</p>
              <p><strong className="text-slate-950">Air route:</strong> chargeable weight, current airfreight, surcharges and transfer handling.</p>
              <p><strong className="text-slate-950">South Africa:</strong> destination handling, customs, taxes, storage and inspections where applicable.</p>
              <p><strong className="text-slate-950">Final site:</strong> inland trucking, permits, escort, lifting and unloading when included.</p>
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-amberGold">Official references</p>
            <h2 className="text-3xl font-bold md:text-4xl">Public sources checked for this route page.</h2>
            <div className="mt-6 space-y-4">
              <a className="block rounded-lg border border-slate-200 p-5 hover:border-amberGold" href="https://www.sars.gov.za/customs-and-excise/registration-licensing-and-accreditation/importers/" target="_blank" rel="noreferrer">
                <span className="font-semibold">SARS: Importers</span>
                <span className="mt-1 block text-sm text-slate-500">Importer and registered-agent requirements; checked 21 September 2026.</span>
              </a>
              <a className="block rounded-lg border border-slate-200 p-5 hover:border-amberGold" href="https://www.sars.gov.za/customs-and-excise/prohibited-restricted-and-counterfeit-goods/" target="_blank" rel="noreferrer">
                <span className="font-semibold">SARS: Prohibited and restricted goods</span>
                <span className="mt-1 block text-sm text-slate-500">Authority and permit reference; checked 21 September 2026.</span>
              </a>
              <a className="block rounded-lg border border-slate-200 p-5 hover:border-amberGold" href="https://www.gov.za/services/import/import-permit-general-goods" target="_blank" rel="noreferrer">
                <span className="font-semibold">South African Government: Import permit for general goods</span>
                <span className="mt-1 block text-sm text-slate-500">Controlled and used-goods reference; checked 21 September 2026.</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase text-amberGold">FAQ</p>
          <h2 className="text-3xl font-bold md:text-4xl">China to JNB air freight questions.</h2>
          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {faq.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="text-xl font-semibold">{item.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amberGold px-5 py-14 text-slate-950 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">Have the dimensions and destination ready?</h2>
            <p className="mt-3 text-lg leading-8">Send the shipment facts for a manual JNB route and handover review.</p>
          </div>
          <Link href={rfqUrl} className="inline-flex w-fit items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 font-semibold text-white">
            Start the RFQ
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              name: 'China to JNB project cargo air freight',
              serviceType: 'International project cargo air freight',
              url: pageUrl,
              inLanguage: 'en',
              dateModified,
              provider: {
                '@type': 'Organization',
                name: 'EASCARGO',
                url: 'https://www.eascargo.com/',
              },
              areaServed: {
                '@type': 'Country',
                name: 'South Africa',
              },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'EASCARGO', item: 'https://www.eascargo.com/' },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Africa oversized air freight',
                  item: 'https://www.eascargo.com/en/africa-oversized-air-freight/',
                },
                { '@type': 'ListItem', position: 3, name: 'China to JNB air freight', item: pageUrl },
              ],
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            },
          ]),
        }}
      />
    </main>
  )
}
