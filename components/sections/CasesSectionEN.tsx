'use client'

import { motion } from 'framer-motion'
import { Scale, Package, Clock, CheckCircle, AlertTriangle, Wrench } from 'lucide-react'

const cases = [
  {
    id: 'lbv-long-cargo',
    title: '8-Meter Long Cargo to LBV via LGG/BRU',
    client: 'Industrial Equipment Trader',
    industry: 'Oversized Project Cargo',
    origin: 'China',
    destination: 'Libreville (LBV)',
    challenge: {
      icon: AlertTriangle,
      points: [
        'Single piece length around 8 meters',
        'No practical direct air option from China',
        'Normal lower-deck capacity could not support the cargo',
        'European transit handover had to match freighter departure',
        'Destination unloading and customs documents needed early confirmation',
      ]
    },
    solution: {
      icon: Wrench,
      points: [
        'Designed China to LGG/BRU Europe transit route',
        'Matched B747F nose-door freighter capability for the Africa leg',
        'Checked cargo length, height, center of gravity and lifting method',
        'Coordinated European warehouse transfer window',
        'Confirmed LBV ground handling and import document requirements',
      ]
    },
    result: {
      icon: CheckCircle,
      points: [
        'Created an executable route when direct departure had no solution',
        'Reduced project cost by nearly RMB 200,000 versus a global forwarder option',
        'Gave the factory and trader a clear risk checklist before booking',
      ]
    },
    stats: [
      { label: 'Length', value: '8M', unit: 'single piece' },
      { label: 'Aircraft', value: 'B747F', unit: 'main deck' },
      { label: 'Transit', value: 'LGG/BRU', unit: 'Europe hub' },
      { label: 'Saved', value: '¥200K', unit: 'approx.' },
    ]
  },
  {
    id: 'fbm-copperbelt',
    title: 'Mining Equipment to FBM Lubumbashi',
    client: 'Mining Supply Chain Client',
    industry: 'Mining and Copperbelt',
    origin: 'China',
    destination: 'Lubumbashi (FBM)',
    challenge: {
      icon: AlertTriangle,
      points: [
        'Copperbelt destination with limited direct cargo options',
        'Heavy spares and industrial equipment required route feasibility check',
        'Client needed clarity on hub selection, customs and inland delivery',
        'A false low-rate quote could cause serious production delay',
      ]
    },
    solution: {
      icon: Wrench,
      points: [
        'Compared Europe transit and Africa hub extension options',
        'Checked main-deck loading limits and second-leg availability',
        'Prepared customs document checklist before rate confirmation',
        'Separated air freight, destination clearance and final delivery risks',
      ]
    },
    result: {
      icon: CheckCircle,
      points: [
        'Turned a vague inquiry into an executable shipment plan',
        'Explained timing, cost boundaries and risk points to the importer',
        'Helped the client avoid booking a route that could not actually load',
      ]
    },
    stats: [
      { label: 'Destination', value: 'FBM', unit: 'Copperbelt' },
      { label: 'Cargo', value: 'Heavy', unit: 'mining spares' },
      { label: 'Route', value: 'Hub', unit: 'extension' },
      { label: 'Focus', value: 'Risk', unit: 'control' },
    ]
  },
  {
    id: 'jnb-southern-africa',
    title: 'Urgent Project Cargo to JNB Johannesburg',
    client: 'Factory and Trading Company',
    industry: 'Southern Africa Project Cargo',
    origin: 'China',
    destination: 'Johannesburg (JNB)',
    challenge: {
      icon: AlertTriangle,
      points: [
        'Urgent mining and industrial spares with a fixed shutdown window',
        'Cargo had to be judged by dimensions, weight and airport capability',
        'Destination handover and consignee readiness affected the real timeline',
        'Factories often only provided cargo name and total weight at inquiry stage',
      ]
    },
    solution: {
      icon: Wrench,
      points: [
        'Requested HS Code, packing photos, lifting points and latest arrival time',
        'Checked whether the cargo required main-deck or freighter uplift',
        'Confirmed customs document consistency before booking',
        'Planned JNB arrival and onward delivery as one complete chain',
      ]
    },
    result: {
      icon: CheckCircle,
      points: [
        'Made the route decision understandable for factory and trader teams',
        'Reduced back-and-forth by collecting the right inquiry data upfront',
        'Protected the client from hidden loading, clearance and handover risks',
      ]
    },
    stats: [
      { label: 'Gateway', value: 'JNB', unit: 'South Africa' },
      { label: 'Cargo', value: 'Urgent', unit: 'project spares' },
      { label: 'Checklist', value: '10+', unit: 'items' },
      { label: 'Goal', value: 'Clear', unit: 'route decision' },
    ]
  }
]

export default function CasesSectionEN() {
  return (
    <section id="cases" className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">Case Studies</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            Africa Oversized Cargo Cases.
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            Real route judgment for long, heavy and urgent China to Africa project cargo.
          </p>
        </motion.div>

        {/* Cases */}
        <div className="space-y-16">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-borderLight"
            >
              {/* Case Header */}
              <div className="p-8 border-b border-borderLight">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-amberGold/10 text-amberGold text-sm rounded-full">
                    {caseItem.industry}
                  </span>
                  <span className="text-textMuted text-sm">
                    {caseItem.origin} → {caseItem.destination}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-textPrimary">{caseItem.title}</h3>
              </div>

              {/* Case Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Challenge */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <caseItem.challenge.icon className="w-5 h-5 text-red-500" />
                      <h4 className="font-semibold text-textPrimary">Challenge</h4>
                    </div>
                    <ul className="space-y-2">
                      {caseItem.challenge.points.map((point, i) => (
                        <li key={i} className="text-sm text-textSecondary flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <caseItem.solution.icon className="w-5 h-5 text-amberGold" />
                      <h4 className="font-semibold text-textPrimary">Solution</h4>
                    </div>
                    <ul className="space-y-2">
                      {caseItem.solution.points.map((point, i) => (
                        <li key={i} className="text-sm text-textSecondary flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-amberGold mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Result */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <caseItem.result.icon className="w-5 h-5 text-green-500" />
                      <h4 className="font-semibold text-textPrimary">Result</h4>
                    </div>
                    <ul className="space-y-2">
                      {caseItem.result.points.map((point, i) => (
                        <li key={i} className="text-sm text-textSecondary flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 pt-8 border-t border-borderLight">
                  <div className="grid grid-cols-4 gap-4">
                    {caseItem.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-amberGold">{stat.value}</div>
                        <div className="text-xs text-textMuted">{stat.label}</div>
                        <div className="text-xs text-textMuted">{stat.unit}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-amberGold/5 border border-amberGold/20 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-6 h-6 text-amberGold" />
            <h3 className="text-lg font-bold text-textPrimary">Our Capacity Advantage</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-textSecondary">
            <div>
              <Package className="w-5 h-5 text-amberGold mb-2" />
              <p className="text-sm"><strong>China origin options</strong> from Shanghai, Zhengzhou, Guangzhou, Shenzhen, Hong Kong and other cargo gateways</p>
            </div>
            <div>
              <Clock className="w-5 h-5 text-amberGold mb-2" />
              <p className="text-sm">Route design through <strong>LGG/BRU Europe transit</strong>, B747F freighters, Africa hubs and inland delivery points</p>
            </div>
            <div>
              <CheckCircle className="w-5 h-5 text-amberGold mb-2" />
              <p className="text-sm">WCA, IATA, JCtrans, OLO, GLA and WIFFA network support for destination agent verification</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
