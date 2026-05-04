import type { Metadata } from 'next'
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileCheck2,
  MapPinned,
  PackageCheck,
  Plane,
  ShieldCheck,
  Truck,
  Waypoints,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'LGG Africa Gateway | China to Africa Oversized Cargo Network',
  description:
    'China to Africa oversized cargo via LGG. B747F direct flights and Africa truck transfer network covering JNB, FBM, LUN, EBB, NBO, LOS, ACC and 30+ inland destinations.',
  alternates: {
    canonical: 'https://www.eascargo.com/china-africa-oversized-cargo-via-europe/',
  },
  openGraph: {
    title: 'LGG Africa Gateway for Oversized Cargo',
    description:
      'LGG Europe transit network for Africa oversized cargo: B747F direct flights plus hub truck transfer to inland Africa.',
    url: 'https://www.eascargo.com/china-africa-oversized-cargo-via-europe/',
    type: 'website',
  },
}

const directFlightDestinations = [
  'ACC',
  'BGF',
  'BZV',
  'PNR',
  'LBV',
  'POG',
  'LOS',
  'NBO',
  'NIM',
  'PHC',
  'NBJ',
  'JNB',
  'LUN',
  'EBB',
]

const truckTransferGroups = [
  { hub: 'ACC', destinations: ['ABJ', 'LFW'] },
  { hub: 'LOS', destinations: ['ABV', 'COO', 'DLA', 'FIH', 'NDJ', 'OUA', 'SSG'] },
  { hub: 'NBO', destinations: ['DAR', 'FBM', 'HRE', 'JUB', 'LLW', 'LUN', 'MGQ', 'MPM', 'MWZ', 'EBB'] },
  { hub: 'EBB', destinations: ['KGL'] },
  { hub: 'JNB', destinations: ['CPT', 'DUR', 'PLZ', 'ELS', 'MTS', 'MSU', 'MPM', 'WDH', 'GBE'] },
  { hub: 'WDH', destinations: ['WVB'] },
]

const routeCards = [
  {
    label: 'China origin -> LGG -> B747F direct Africa points',
    detail: 'Use LGG as the Europe gateway, then connect to main-deck B747F capacity for key African airports.',
  },
  {
    label: 'China origin -> LGG -> Africa hub -> truck transfer',
    detail: 'For inland points such as FBM, KGL, CPT, DUR, WDH, ABJ, FIH and others, route through a workable African hub instead of forcing a broken direct plan.',
  },
]

const cargoTypes = [
  'Oversized machinery and production line equipment',
  'Mining equipment, spare parts, and urgent replacement units',
  'Project cargo rejected by passenger or standard freighter routes',
  'Heavy cargo that needs Europe-side freighter charter planning',
]

const process = [
  {
    icon: PackageCheck,
    title: 'Cargo feasibility check',
    text: 'We review dimensions, weight, stackability, lifting points, photos, packing, and airport restrictions before quoting.',
  },
  {
    icon: Plane,
    title: 'China to LGG uplift',
    text: 'Move the cargo out of China first using the most realistic available widebody or freighter option.',
  },
  {
    icon: FileCheck2,
    title: 'Europe transit handling',
    text: 'Coordinate handover, documents, warehouse handling, build-up, and transfer readiness at LGG.',
  },
  {
    icon: Truck,
    title: 'Africa hub and inland delivery',
    text: 'Connect by B747F direct service or hub truck transfer into JNB, FBM, LUN, EBB, NBO, LOS, ACC and inland points.',
  },
]

export default function EuropeTransitCargoPage() {
  return (
    <main className="min-h-screen bg-white text-textPrimary">
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(rgba(245,166,35,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.35) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28">
          <a href="/" className="mb-10 inline-flex items-center text-sm text-amberGold hover:text-white">
            Back to EASCargo
          </a>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-medium text-amberGold">
              <MapPinned className="h-4 w-4" />
              LGG Europe transit network for Africa oversized cargo
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              LGG Africa Gateway
              <span className="block text-amberGold">for oversized cargo from China.</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              For oversized, heavy, and project cargo that cannot move on standard China-origin flights,
              EASCargo designs China to LGG transit plans, then connects to Africa by B747F direct service
              or hub truck transfer. Coverage includes JNB, FBM, LUN, EBB, NBO, LOS, ACC and 30+ inland destinations.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:globegsa@Gmail.com?subject=LGG%20Africa%20Gateway%20oversized%20cargo%20quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950 transition hover:bg-amberGold/90"
              >
                Send cargo details
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#route-plan"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:border-amberGold hover:text-amberGold"
              >
                View route logic
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="route-plan" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Route logic</p>
            <h2 className="mb-5 text-3xl font-bold text-slate-950 md:text-4xl">
              The product is not one airport. It is a gateway network.
            </h2>
            <p className="text-lg leading-8 text-textSecondary">
              Many China to Africa oversized cargo enquiries fail at the first step: no direct aircraft,
              no door size, no main deck option, or no operator willing to accept the cargo. The solution is
              not another cheap rate. The solution is LGG as a Europe gateway, then the right African hub.
            </p>
          </div>
          <div className="grid gap-4">
            {routeCards.map((route) => (
              <div key={route.label} className="rounded-lg border border-borderLight bg-surface p-6">
                <div className="mb-3 flex items-center gap-3 text-lg font-semibold text-slate-950">
                  <Plane className="h-5 w-5 text-amberGold" />
                  {route.label}
                </div>
                <p className="leading-7 text-textSecondary">{route.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Network coverage</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              LGG direct freighter points plus inland truck transfer.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-lg border border-borderLight bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Plane className="h-6 w-6 text-amberGold" />
                <h3 className="text-xl font-semibold text-slate-950">B747F direct ex LGG</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {directFlightDestinations.map((code) => (
                  <span key={code} className="rounded-full bg-amberGold/10 px-3 py-1 text-sm font-semibold text-slate-800">
                    {code}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-borderLight bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Waypoints className="h-6 w-6 text-amberGold" />
                <h3 className="text-xl font-semibold text-slate-950">Truck transfer via Africa hubs</h3>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {truckTransferGroups.map((group) => (
                  <div key={group.hub} className="rounded-lg bg-slate-50 p-4">
                    <div className="mb-2 text-sm font-semibold text-amberGold">via {group.hub}</div>
                    <div className="text-sm leading-7 text-textSecondary">{group.destinations.join(' / ')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Best fit cargo</p>
            <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
              Built for cargo that ordinary air freight cannot absorb.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {cargoTypes.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                <p className="leading-7 text-textSecondary">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Execution process</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            From impossible direct routing to a workable charter plan.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="rounded-lg border border-borderLight p-6">
                <Icon className="mb-5 h-8 w-8 text-amberGold" />
                <h3 className="mb-3 text-lg font-semibold text-slate-950">{step.title}</h3>
                <p className="text-sm leading-7 text-textSecondary">{step.text}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">What to send</p>
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">Get a route answer before you chase rates.</h2>
            <p className="text-lg leading-8 text-slate-300">
              Send the cargo dimensions, gross weight, packing photos, origin city, required airport,
              ready date, and any special lifting or handling notes. We will first tell you whether
              China direct is possible, or whether LGG transit plus an African hub is the realistic path.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">Quote checklist</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li>Commodity and HS code if available</li>
              <li>Dimensions, weight, and number of pieces</li>
              <li>Packing photos and lifting points</li>
              <li>Origin city in China and destination airport or inland city in Africa</li>
              <li>Ready date and latest acceptable arrival date</li>
            </ul>
            <a
              href="mailto:globegsa@Gmail.com?subject=Oversized%20cargo%20via%20Europe%20quote%20request"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950 transition hover:bg-amberGold/90"
            >
              Email the cargo file
              <Clock className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
