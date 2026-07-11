'use client'

import { motion } from 'framer-motion'
import { ArrowRight, FileCheck2, Plane, Route, ShieldCheck, Truck } from 'lucide-react'

interface HeroSectionENProps {
  onOpenContact: () => void
}

const valuePoints = [
  { icon: Plane, label: 'Main-deck fit review' },
  { icon: Route, label: 'Route comparison' },
  { icon: FileCheck2, label: 'Customs readiness' },
  { icon: Truck, label: 'Final-site delivery' },
]

export default function HeroSectionEN({ onOpenContact }: HeroSectionENProps) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 166, 35, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245, 166, 35, 0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amberGold/30 bg-amberGold/10 px-4 py-2 text-sm font-semibold text-amberGold">
            <ShieldCheck className="h-4 w-4" />
            China to Africa oversized and project cargo
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-tight text-textPrimary sm:text-5xl lg:text-6xl">
            Route feasibility before
            <span className="block text-amberGold">an air freight rate.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-textSecondary">
            EASCargo reviews oversized cargo from China to Africa through direct freighter options,
            LGG/BRU Europe transit, African gateways and final-site delivery planning.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-textMuted">
            Aircraft acceptance, capacity, operating carrier, transit time and price are confirmed shipment by shipment.
            Send dimensions, gross weight, origin, destination, cargo-ready date and customs details for a practical route review.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="/tools/africa-project-cargo-rfq/?source=home-hero-en"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-amberGold px-7 font-bold text-slate-950 transition hover:bg-amber-400"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit a shipment RFQ
              <ArrowRight className="h-5 w-5" />
            </motion.a>
            <motion.button
              onClick={onOpenContact}
              className="inline-flex min-h-12 items-center justify-center rounded-lg border-2 border-amberGold px-7 font-bold text-amberGold transition hover:bg-amberGold hover:text-slate-950"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact EASCargo
            </motion.button>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {valuePoints.map((point) => {
              const Icon = point.icon
              return (
                <div key={point.label} className="flex items-center gap-3 border-l-2 border-amberGold pl-3 text-sm font-semibold text-textSecondary">
                  <Icon className="h-5 w-5 shrink-0 text-amberGold" />
                  <span>{point.label}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
