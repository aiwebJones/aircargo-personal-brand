'use client'

import { motion } from 'framer-motion'
import { Scale, Package, Clock, CheckCircle, AlertTriangle, Wrench } from 'lucide-react'

const cases = [
  {
    id: 'heavy-cargo-17t',
    title: '17-Ton Single Piece Heavy Cargo',
    client: 'Industrial Equipment Manufacturer',
    industry: 'Manufacturing',
    origin: 'Shanghai (PVG)',
    destination: 'Middle East',
    challenge: {
      icon: AlertTriangle,
      points: [
        'Single piece weight: 16,730 kg (normal limit: 6,500 kg)',
        'Dimensions: 735×135×150 cm (exceeds standard pallet size)',
        'Airport forklift max: 1,000 kg',
        'Security scanner limit: 1,000 kg / 150 cm width',
        'Return goods: complex customs clearance required',
      ]
    },
    solution: {
      icon: Wrench,
      points: [
        'Applied for oversized/heavy-duty pallet from airline',
        'Added 1 ton of wooden supports to distribute weight',
        'Coordinated crane rental at airport (¥1,000+/hour)',
        'Pre-arranged 24-hour warehouse hold to bypass security scan',
        'Handled magnetic inspection and customs documentation',
        'Avoided mandatory customs inspection (saved ¥10,000+)',
      ]
    },
    result: {
      icon: CheckCircle,
      points: [
        'Delivered on time despite 3x weight limit',
        'Zero customs inspection fees',
        'Client continued partnership for future shipments',
      ]
    },
    stats: [
      { label: 'Weight', value: '16.7T', unit: 'single piece' },
      { label: 'vs Limit', value: '3x', unit: 'over standard' },
      { label: 'Timeline', value: '48h', unit: 'total' },
      { label: 'Cost Saved', value: '¥10K+', unit: 'customs fees' },
    ]
  },
  {
    id: 'bulk-charter',
    title: '65-Ton Charter-Size Cargo on Scheduled Flight',
    client: 'Automotive Parts Supplier',
    industry: 'Automotive',
    origin: 'Shanghai (PVG)',
    destination: 'Europe',
    challenge: {
      icon: AlertTriangle,
      points: [
        '45 tons total shipment weight',
        'Required same-flight departure',
        'Peak season capacity constraints',
        'Multiple oversized pieces',
      ]
    },
    solution: {
      icon: Wrench,
      points: [
        'Leveraged 20-30 ton block space agreement with EY',
        'Coordinated multiple flights for simultaneous departure',
        'Pre-allocated positions on A330 freighter',
        'Managed ground handling at all airports',
      ]
    },
    result: {
      icon: CheckCircle,
      points: [
        '65 tons shipped on single flight (excluding charter)',
        'Nearly 50% of A330 cargo capacity utilized',
        'On-time delivery for production line',
      ]
    },
    stats: [
      { label: 'Total Weight', value: '45T', unit: 'shipment' },
      { label: 'Flight Share', value: '65T', unit: 'our cargo' },
      { label: 'Capacity Used', value: '50%', unit: 'of aircraft' },
      { label: 'Delivery', value: '100%', unit: 'on time' },
    ]
  },
  {
    id: 'repair-return',
    title: 'Complex Repair Return Shipment',
    client: 'Medical Equipment Company',
    industry: 'Healthcare',
    origin: 'China',
    destination: 'Germany',
    challenge: {
      icon: AlertTriangle,
      points: [
        'Sea-imported goods requiring air export for repair',
        'Mandatory customs inspection for return goods',
        '9 different documents required',
        'Magnetic materials requiring special clearance',
      ]
    },
    solution: {
      icon: Wrench,
      points: [
        'Prepared complete documentation package',
        'Obtained airline guarantee letter for magnetic cargo',
        'Coordinated with customs broker for expedited clearance',
        'Used relationships to minimize inspection probability',
      ]
    },
    result: {
      icon: CheckCircle,
      points: [
        'Zero customs inspection (avoided mandatory check)',
        'Saved client ¥10,000+ in warehouse fees',
        'Shipped within 48-hour deadline',
      ]
    },
    stats: [
      { label: 'Documents', value: '9', unit: 'types' },
      { label: 'Risk', value: '100%', unit: 'inspection rate' },
      { label: 'Result', value: '0', unit: 'inspections' },
      { label: 'Saved', value: '¥10K+', unit: 'fees' },
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
            Problems Solved.
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            Real challenges. Real solutions. Here&apos;s how we move what others can&apos;t.
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
              <p className="text-sm"><strong>20-30 tons</strong> block space per flight with EY, CZ, CA, QR, LH, and more across Shanghai, Zhengzhou, Guangzhou, and Hong Kong</p>
            </div>
            <div>
              <Clock className="w-5 h-5 text-amberGold mb-2" />
              <p className="text-sm">Handle <strong>multiple 30+ ton shipments monthly</strong>. Up to <strong>65 tons</strong> on a single scheduled flight (not charter)</p>
            </div>
            <div>
              <CheckCircle className="w-5 h-5 text-amberGold mb-2" />
              <p className="text-sm">Strong relationships with airlines and ground handling companies. Professional field operations team</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
