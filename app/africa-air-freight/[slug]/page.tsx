import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, FileCheck2, Plane, Truck } from 'lucide-react'

const pages = {
  jnb: {
    code: 'JNB',
    city: 'Johannesburg',
    country: 'South Africa',
    title: 'JNB Johannesburg Oversized Air Freight from China',
    description:
      'Oversized and heavy air freight from China to Johannesburg JNB for mining, engineering, automotive and Southern Africa project cargo. LGG/BRU Europe transit and B747F planning.',
    cargo: ['Mining spare parts', 'Engineering equipment', 'Automotive parts', 'High-value urgent project cargo'],
    market:
      'Johannesburg is the main Southern Africa air cargo hub. It can serve South Africa directly and may support onward delivery to nearby countries and cities.',
    customs:
      'Check importer tax details, HS Code, commercial invoice, packing list, declared cargo description and any onward transit documents before booking.',
  },
  fbm: {
    code: 'FBM',
    city: 'Lubumbashi',
    country: 'Democratic Republic of the Congo',
    title: 'FBM Lubumbashi Air Freight for Mining Equipment',
    description:
      'China to FBM Lubumbashi air freight for Copperbelt mining equipment, heavy spare parts and project cargo via Europe and African hub routing.',
    cargo: ['Copperbelt mining spare parts', 'Transformers', 'Pumps', 'Electrical cabinets', 'Heavy maintenance equipment'],
    market:
      'Lubumbashi is a mining supply chain destination. Air freight planning must consider the airport, customs broker, inland delivery and mine-site handover.',
    customs:
      'Confirm consignee documents, HS Code, import responsibility, destination agent capability, unloading conditions and final delivery boundary.',
  },
  lun: {
    code: 'LUN',
    city: 'Lusaka',
    country: 'Zambia',
    title: 'LUN Lusaka Air Freight for Industrial and Mining Cargo',
    description:
      'China to Lusaka LUN oversized air freight for Zambia industrial equipment, mining spare parts, pumps and urgent project cargo via LGG/BRU transit.',
    cargo: ['Mining spare parts', 'Chemical pumps', 'Generators', 'Factory equipment', 'Industrial maintenance parts'],
    market:
      'Lusaka is an important entry point for Zambia industrial and mining supply chains. Project cargo often needs stable documents and clear delivery timing.',
    customs:
      'Prepare importer information, invoice, packing list, HS Code, cargo value, packing photos and any license requirements before shipment.',
  },
  lbv: {
    code: 'LBV',
    city: 'Libreville',
    country: 'Gabon',
    title: 'LBV Libreville Oversized Cargo via LGG/BRU and B747F',
    description:
      'China to Libreville LBV oversized air freight via LGG/BRU Europe transit and B747F freighter planning for long cargo, oil, energy and engineering projects.',
    cargo: ['Long cargo around 8 meters', 'Oil and energy equipment', 'Engineering spare parts', 'Project machinery'],
    market:
      'Libreville can serve Gabon and Central Africa projects. Long cargo requires aircraft, main-deck and ground handling checks before rate discussion.',
    customs:
      'French-language document communication, consignee readiness, cargo description, packing details and special handling at destination should be confirmed early.',
  },
}

type Slug = keyof typeof pages

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = pages[params.slug as Slug]
  if (!item) {
    return {
      title: 'Africa Air Freight from China | EASCargo Jones',
    }
  }

  return {
    title: `${item.title} | EASCargo Jones`,
    description: item.description,
    alternates: {
      canonical: `https://www.eascargo.com/africa-air-freight/${params.slug}/`,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `https://www.eascargo.com/africa-air-freight/${params.slug}/`,
      type: 'website',
    },
  }
}

export default function AfricaDestinationPage({ params }: { params: { slug: string } }) {
  const item = pages[params.slug as Slug] || pages.jnb

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <a href="/en/africa-oversized-air-freight/" className="mb-10 inline-flex text-sm font-semibold text-amberGold">
            China to Africa oversized air freight
          </a>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-semibold text-amberGold">
              <Plane className="h-4 w-4" />
              {item.code} - {item.city}, {item.country}
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">{item.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{item.description}</p>
            <a
              href={`mailto:globegsa@Gmail.com?subject=China%20to%20${item.code}%20oversized%20air%20freight%20quote`}
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950"
            >
              Send cargo details
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Destination profile</p>
            <h2 className="text-3xl font-bold md:text-4xl">What makes {item.code} different?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{item.market}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="mb-4 flex items-center gap-3">
              <FileCheck2 className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">Customs and document checks</h3>
            </div>
            <p className="leading-7 text-slate-600">{item.customs}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Best fit cargo</p>
            <h2 className="text-3xl font-bold md:text-4xl">Cargo types usually worth checking first.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {item.cargo.map((cargo) => (
              <div key={cargo} className="flex gap-3 rounded-lg bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                <span className="leading-7 text-slate-600">{cargo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6">
            <Plane className="mb-4 h-8 w-8 text-amberGold" />
            <h3 className="mb-3 text-xl font-semibold">China origin feasibility</h3>
            <p className="leading-7 text-slate-600">Check whether the cargo can leave China by standard widebody, freighter, charter or Europe transit.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <Truck className="mb-4 h-8 w-8 text-amberGold" />
            <h3 className="mb-3 text-xl font-semibold">Africa inland leg</h3>
            <p className="leading-7 text-slate-600">Confirm whether the final delivery is airport pickup, city delivery, mine-site or project-site handover.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <FileCheck2 className="mb-4 h-8 w-8 text-amberGold" />
            <h3 className="mb-3 text-xl font-semibold">Documents before price</h3>
            <p className="leading-7 text-slate-600">Commodity, HS Code, dimensions, weight, packing photos, origin city, destination and latest arrival time.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: item.title,
            provider: { '@type': 'Organization', name: 'EASCargo Jones', url: 'https://www.eascargo.com' },
            areaServed: item.country,
            serviceType: 'Oversized air freight and project cargo routing',
            description: item.description,
          }),
        }}
      />
    </main>
  )
}
