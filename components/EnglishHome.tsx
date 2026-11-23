'use client'

import { ArrowUpRight, Clock, Mail, MessageCircle, Plane, ShieldCheck, Weight, Globe } from 'lucide-react'
import EascargoLogo from '@/components/EascargoLogo'
import QuoteForm from '@/components/QuoteForm'

const lanes = [
  { code: 'EBB', name: 'Entebbe, Uganda' },
  { code: 'CKY', name: 'Conakry, Guinea' },
  { code: 'JNB', name: 'Johannesburg, South Africa' },
  { code: 'LBV', name: 'Libreville, Gabon' },
  { code: 'WDH', name: 'Windhoek, Namibia' },
]

const proof = [
  { icon: Clock, title: '15+ years', text: 'Hands-on China-to-Africa air freight and project cargo operations.' },
  { icon: Plane, title: 'B777F charters', text: 'Dedicated 777 freighter capacity for large and time-critical shipments.' },
  { icon: Weight, title: '16.73 t single piece', text: 'Handling of single pieces up to 16.73 tonnes and 8 m in length.' },
  { icon: ShieldCheck, title: '2-hour quote turnaround', text: 'A named person reviews your cargo details and replies with a quote.' },
]

const services = [
  { title: 'China to Africa air freight', text: 'Scheduled and consolidated air cargo from China to major African gateways, with door pickup and destination delivery arranged shipment by shipment.' },
  { title: 'Oversized and project cargo', text: 'Machinery, generators, vehicles and heavy equipment, planned for loading, aircraft limits and destination handling.' },
  { title: 'Charter and urgent shipments', text: 'Full or partial B777F charters when schedules cannot wait for the next available flight.' },
]

export default function EnglishHome() {
  return (
    <div className="min-h-screen bg-white text-zinc-900" lang="en">
      <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-5 py-3 sm:px-8">
          <a href="/" aria-label="EASCARGO home"><EascargoLogo wordmarkClassName="text-sm sm:text-base" /></a>
          <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a href="/africa-air-freight/" className="hover:text-emerald-700">Africa routes</a>
            <a href="/cases/" className="hover:text-emerald-700">Projects</a>
            <a href="/tools/" className="hover:text-emerald-700">Tools</a>
            <a href="/insights/" className="hover:text-emerald-700">Insights</a>
            <a href="#quote" className="inline-flex min-h-10 items-center rounded-md bg-emerald-800 px-4 font-medium text-white hover:bg-emerald-900">Get a quote</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-zinc-200">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-800">Shanghai air freight forwarder</p>
              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-5xl">China to Africa air freight, including oversized project cargo.</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                EASCARGO has 15+ years of experience moving China exports to Africa by air. We handle B777F charters, single pieces up to 16.73 tonnes and 8 m in length, and urgent shipments. Send your cargo details and get a quote within 2 hours.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#quote" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-emerald-800 px-6 font-semibold text-white hover:bg-emerald-900">Get a quote <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
                <a href="mailto:globegsa@gmail.com" data-conversion="email-hero" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-zinc-300 px-6 font-semibold hover:border-emerald-700 hover:text-emerald-800"><Mail className="h-4 w-4" aria-hidden="true" />Email globegsa@gmail.com</a>
                <span className="inline-flex min-h-12 items-center gap-2 rounded-md border border-zinc-300 px-6 font-semibold"><MessageCircle className="h-4 w-4" aria-hidden="true" />WeChat ID: jnb931</span>
              </div>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <h2 className="text-base font-semibold">Key Africa lanes</h2>
              <ul className="mt-4 divide-y divide-zinc-200">
                {lanes.map((lane) => (
                  <li key={lane.code} className="flex items-center justify-between py-3 text-sm">
                    <span className="font-mono font-semibold text-emerald-800">{lane.code}</span>
                    <span className="text-zinc-700">{lane.name}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-5 text-zinc-500">Other origins and destinations are available. Transit times depend on the flight schedule and are confirmed per shipment.</p>
              <a href="/africa-air-freight/" className="mt-4 inline-flex min-h-10 items-center gap-1 text-sm font-medium text-emerald-800 hover:text-emerald-950">See all Africa routes <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section aria-labelledby="proof-heading" className="border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
            <h2 id="proof-heading" className="sr-only">Why EASCARGO</h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {proof.map((item) => (
                <li key={item.title} className="rounded-lg border border-zinc-200 bg-white p-5">
                  <item.icon className="h-6 w-6 text-emerald-800" aria-hidden="true" />
                  <p className="mt-3 font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="services-heading" className="border-b border-zinc-200">
          <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
            <h2 id="services-heading" className="text-2xl font-bold sm:text-3xl">What we ship</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="border-t-2 border-emerald-800 pt-5">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{service.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              <a href="/tools/africa-project-cargo-rfq/?source=home-en" className="inline-flex min-h-10 items-center gap-1 text-emerald-800 hover:text-emerald-950">Detailed project cargo RFQ <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              <a href="/airport-finder/" className="inline-flex min-h-10 items-center gap-1 text-emerald-800 hover:text-emerald-950">Find the nearest airport <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
              <a href="/cases/" className="inline-flex min-h-10 items-center gap-1 text-emerald-800 hover:text-emerald-950">View past projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section id="quote" aria-labelledby="quote-heading" className="scroll-mt-20 border-b border-zinc-200 bg-zinc-50">
          <div className="mx-auto max-w-4xl px-5 py-14 sm:px-8">
            <h2 id="quote-heading" className="text-2xl font-bold sm:text-3xl">Request an air freight quote</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">Give us the origin, destination, weight, dimensions and cargo type. A person on our team replies within 2 hours.</p>
            <div className="mt-8">
              <QuoteForm compact lang="en" />
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <span className="font-semibold">Contact EASCARGO</span>
            <span className="inline-flex min-h-10 items-center gap-2"><MessageCircle className="h-4 w-4" aria-hidden="true" />WeChat ID: jnb931</span>
            <a href="mailto:globegsa@gmail.com" data-conversion="email-footer" className="inline-flex min-h-10 items-center gap-2 hover:text-emerald-700"><Mail className="h-4 w-4" aria-hidden="true" />globegsa@gmail.com</a>
            <span className="inline-flex min-h-10 items-center gap-2 text-zinc-600"><Globe className="h-4 w-4" aria-hidden="true" />Shanghai, China</span>
          </div>
          <nav aria-label="Resources and tools" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-zinc-200 pt-6 text-xs text-zinc-600">
            <a href="/insights/" className="hover:text-emerald-700">Freight guides</a>
            <a href="/tools/" className="hover:text-emerald-700">All tools</a>
            <a href="/airport-finder/" className="hover:text-emerald-700">Airport finder</a>
            <a href="/insights/eascargo-answer-engine-profile/" className="hover:text-emerald-700">Company profile</a>
            <span className="sm:ml-auto">© {new Date().getFullYear()} EASCARGO</span>
          </nav>
        </div>
      </footer>
    </div>
  )
}
