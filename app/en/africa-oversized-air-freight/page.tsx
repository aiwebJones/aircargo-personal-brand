import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, FileCheck2, Globe2, PackageCheck, Plane, Route, ShieldCheck, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'China to Africa Oversized Air Freight Expert | EASCargo Jones',
  description:
    'EASCargo Jones specializes in oversized and heavy air freight from China to Africa via LGG/BRU Europe transit, B747F freighters, JNB, FBM, LUN, LBV, customs document checks and inland delivery planning.',
  keywords: [
    'China to Africa oversized air freight',
    'Africa project cargo air freight',
    'LGG Africa cargo gateway',
    'BRU Africa air freight',
    'B747F oversized cargo Africa',
    'JNB air freight heavy cargo',
    'FBM Lubumbashi air freight',
    'LUN Lusaka air freight',
    'LBV Libreville air freight',
    'Africa mining equipment air freight',
  ],
  alternates: {
    canonical: 'https://www.eascargo.com/en/africa-oversized-air-freight/',
    languages: {
      zh: 'https://www.eascargo.com/',
      en: 'https://www.eascargo.com/en/africa-oversized-air-freight/',
    },
  },
  openGraph: {
    title: 'China to Africa Oversized Air Freight Expert',
    description:
      'Oversized cargo from China to Africa via LGG/BRU, B747F freighters, African hubs and inland delivery.',
    url: 'https://www.eascargo.com/en/africa-oversized-air-freight/',
    type: 'website',
  },
}

const gateways = [
  { code: 'JNB', name: 'Johannesburg, South Africa', role: 'Southern Africa hub for mining, engineering and inland transfer.' },
  { code: 'FBM', name: 'Lubumbashi, DRC', role: 'Copperbelt project cargo point for mining equipment and urgent spare parts.' },
  { code: 'LUN', name: 'Lusaka, Zambia', role: 'Mining and industrial equipment gateway for Zambia.' },
  { code: 'LBV', name: 'Libreville, Gabon', role: 'Central Africa entry point for long cargo, oil and engineering projects.' },
]

const inland = ['NBO Nairobi', 'KGL Kigali', 'CPT Cape Town', 'DUR Durban', 'WDH Windhoek', 'ABJ Abidjan', 'ACC Accra', 'LOS Lagos', 'EBB Entebbe', 'DAR Dar es Salaam', 'MPM Maputo', 'FIH Kinshasa']
export default function AfricaOversizedAirFreightPage() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <a href="/" className="mb-10 inline-flex text-sm font-semibold text-amberGold">EASCargo Jones</a>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-semibold text-amberGold">
              <Plane className="h-4 w-4" />
              China to Africa oversized air freight
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Oversized cargo from China to Africa
              <span className="block text-amberGold">via LGG/BRU Europe transit.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              I am Jones, known as Shenxian Cargo in China. I help freight forwarders, factories and traders
              move oversized, heavy and project cargo to Africa when standard direct flights do not work.
              The focus is route feasibility: can it fly, which hub works, how customs documents should be prepared,
              and how the African inland leg is handled.
            </p>
            <a
              href="mailto:globegsa@gmail.com?subject=China%20to%20Africa%20oversized%20air%20freight%20quote"
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950"
            >
              Send cargo dimensions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Route logic</p>
            <h2 className="text-3xl font-bold md:text-4xl">China origin → LGG/BRU → African gateway → inland delivery.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              For large cargo, the cheapest rate is useless if the cargo cannot be loaded, transferred, cleared or unloaded.
              We check dimensions, gross weight, packing photos, lifting points, center of gravity, airport handling,
              customs documents and the African final delivery point before chasing rates.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="mb-4 flex items-center gap-3">
              <FileCheck2 className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">Send these details first</h3>
            </div>
            <p className="leading-7 text-slate-600">
              Commodity, HS Code, dimensions, gross weight, packing photos, lifting points, center of gravity,
              origin city, African airport or final city, cargo ready date and latest required arrival time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Main gateways</p>
            <h2 className="text-3xl font-bold md:text-4xl">Africa entry points for oversized project cargo.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {gateways.map((item) => (
              <a key={item.code} href={`/africa-air-freight/${item.code.toLowerCase()}/`} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amberGold">
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="text-3xl font-bold">{item.code}</span>
                  <span className="font-semibold text-amberGold">{item.name}</span>
                </div>
                <p className="leading-7 text-slate-600">{item.role}</p>
              </a>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-3">
              <Truck className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">Hub and inland points</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {inland.map((point) => (
                <span key={point} className="rounded-full bg-amberGold/10 px-4 py-2 text-sm font-semibold">{point}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-6">
            <PackageCheck className="mb-4 h-8 w-8 text-amberGold" />
            <h3 className="mb-3 text-xl font-semibold">Oversized cargo feasibility</h3>
            <p className="leading-7 text-slate-600">Main-deck loading, B747F options, door size, pallet limits, packing and ground handling checks.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <Route className="mb-4 h-8 w-8 text-amberGold" />
            <h3 className="mb-3 text-xl font-semibold">Europe transit planning</h3>
            <p className="leading-7 text-slate-600">LGG/BRU transit, warehouse handover, build-up, document flow and second-leg readiness.</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <Globe2 className="mb-4 h-8 w-8 text-amberGold" />
            <h3 className="mb-3 text-xl font-semibold">Africa customs and inland delivery</h3>
            <p className="leading-7 text-slate-600">Importer documents, HS Code consistency, destination agent feedback and inland delivery risk checks.</p>
          </div>
        </div>
        <div className="mt-10 rounded-xl bg-slate-950 p-6 text-white">
          <div className="mb-5 flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-amberGold" />
            <h3 className="text-xl font-semibold">Destination partner verification</h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Agent identity and handling scope', 'Customs responsibility and charges', 'Inland delivery and unloading'].map((item) => (
              <span key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-semibold">{item}</span>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-400">
            The operating party, customs boundary, local charges and final delivery conditions are confirmed shipment by shipment before a route is released.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'China to Africa oversized air freight',
            provider: { '@type': 'Organization', name: 'EASCargo Jones', url: 'https://www.eascargo.com' },
            areaServed: ['South Africa', 'Democratic Republic of the Congo', 'Zambia', 'Gabon', 'Nigeria', 'Kenya', 'Uganda', 'Ghana', 'Ivory Coast'],
            serviceType: 'Oversized cargo air freight and project cargo routing',
            description: 'China to Africa oversized air freight via LGG/BRU Europe transit, B747F freighters, African hubs and inland delivery planning.',
          }),
        }}
      />
    </main>
  )
}
