'use client'

import { motion } from 'framer-motion'
import { Plane, Ship, MapPin, Calendar, Package, Globe } from 'lucide-react'

const routeCategories = [
  {
    title: 'US Routes',
    icon: Plane,
    routes: [
      { 
        name: 'US Air Freight Express', 
        capacity: '1000+ Tons/Month',
        frequency: 'Daily',
        note: 'Primary route, ample capacity'
      },
      { 
        name: 'Shanghai CZ/CA/CK', 
        capacity: 'Daily',
        frequency: 'Direct',
        note: 'China Southern/Air China/Cathay Pacific'
      },
      { 
        name: 'US Sea Freight', 
        capacity: '20+ Containers/Month',
        frequency: 'Weekly',
        note: 'Regular/Express options'
      },
      { 
        name: 'Ezhou 5Y ORD', 
        capacity: 'D3567',
        frequency: 'Regular',
        note: 'Chicago direct'
      },
      { 
        name: 'Ezhou 5Y JFK', 
        capacity: 'D1357',
        frequency: 'Regular',
        note: 'New York direct'
      },
      { 
        name: 'Zhengzhou 5Y JFK', 
        capacity: 'D246',
        frequency: 'Regular',
        note: 'New York direct'
      },
      { 
        name: 'Hangzhou K4 LAX', 
        capacity: 'D35',
        frequency: 'Regular',
        note: 'Los Angeles direct'
      },
      { 
        name: 'Ezhou K4 MIA', 
        capacity: 'D26',
        frequency: 'Regular',
        note: 'Miami direct'
      },
    ]
  },
  {
    title: 'Europe Direct',
    icon: Plane,
    routes: [
      { 
        name: 'Shanghai CZ/CA/CK', 
        capacity: 'Daily',
        frequency: 'Direct',
        note: 'Major carriers, Europe-wide coverage'
      },
      { 
        name: 'Shanghai EY/QR/TK/ET', 
        capacity: 'Daily',
        frequency: 'Regular',
        note: 'Middle East carriers, full Europe coverage'
      },
      { 
        name: 'Shanghai KJ ICN', 
        capacity: 'Daily',
        frequency: 'All cargo types',
        note: 'Seoul transfer, cost-effective'
      },
      { 
        name: 'Shanghai KJ MXP/FRA/VIE', 
        capacity: 'Fixed 2nd leg',
        frequency: 'Regular',
        note: 'Milan/Frankfurt/Vienna'
      },
      { 
        name: 'Ezhou O3 FRA', 
        capacity: 'D246',
        frequency: 'Regular',
        note: 'Frankfurt direct'
      },
      { 
        name: 'Ezhou O3 LGG', 
        capacity: 'D123567',
        frequency: 'Heavy cargo',
        note: 'Liege direct, heavy cargo advantage'
      },
      { 
        name: 'Ezhou O3 BUD', 
        capacity: 'D367',
        frequency: 'Regular',
        note: 'Budapest direct'
      },
      { 
        name: 'Ezhou O3 OSL', 
        capacity: 'D25',
        frequency: 'Regular',
        note: 'Oslo direct'
      },
    ]
  },
  {
    title: 'Europe Transfer',
    icon: Globe,
    routes: [
      { 
        name: 'Shanghai LH FRA', 
        capacity: 'Daily',
        frequency: 'Regular',
        note: 'Lufthansa, transfer to all Europe'
      },
      { 
        name: 'Shanghai 2C CDG', 
        capacity: 'Daily',
        frequency: 'Regular',
        note: 'Paris, transfer to all Europe'
      },
    ]
  },
  {
    title: 'Middle East/Africa',
    icon: MapPin,
    routes: [
      { 
        name: 'Ezhou/Shanghai/Shenzhen EY/O3/ET', 
        capacity: 'Daily',
        frequency: 'Regular',
        note: 'Middle East, Africa, Europe full coverage'
      },
      { 
        name: 'ET Singapore Transfer', 
        capacity: 'Daily',
        frequency: 'Advantage',
        note: 'BKO/DSS and other African destinations'
      },
    ]
  },
  {
    title: 'South America',
    icon: Globe,
    routes: [
      { 
        name: 'Maldives MLE Transfer', 
        capacity: 'Daily',
        frequency: 'Competitive',
        note: 'GRU/EZE/SCL/PUJ/SDQ and more'
      },
    ]
  },
  {
    title: 'Special Cargo',
    icon: Package,
    routes: [
      { 
        name: 'Oversized/Lengthy Cargo', 
        capacity: 'All routes',
        frequency: 'Available',
        note: 'Zhengzhou GI/U3/X7, Chengdu CB, Chongqing Y8, Hong Kong 5Y'
      },
      { 
        name: 'Charter Services', 
        capacity: 'On demand',
        frequency: 'Custom',
        note: 'If Shanghai can\'t handle it, ask about other cities'
      },
      { 
        name: 'Europe Oversized', 
        capacity: 'Large capacity',
        frequency: 'Regular',
        note: 'Extra long, nose loading available'
      },
    ]
  },
]

const interlineProducts = [
  {
    title: 'Air Cote d\'Ivoire HF-ABJ',
    description: 'Shanghai HF → ABJ (Abidjan), Paris direct to Abidjan',
    note: 'China Exclusive',
  },
  {
    title: 'Maldives Transfer Solution',
    description: 'Beijing JD/Shanghai MU/RH → MLE transfer to Middle East, Europe, Africa',
    note: 'Exclusive Interline',
  },
  {
    title: 'Yiwu CF MNL Transfer',
    description: 'Yiwu CF → MNL to AMM/CMN/RUH/DXB and more',
    note: 'SE Asia Hub Advantage',
  },
  {
    title: 'Ezhou I9-MNL Interline',
    description: 'Ezhou I9 → MNL interline SV all routes',
    note: 'Philippines Hub',
  },
  {
    title: 'ET Singapore Interline',
    description: 'SIN transfer → BKO/DSS and other African points',
    note: 'Advantage Routes',
  },
  {
    title: 'MLE Europe Interline',
    description: 'Maldives → FRA/LHR/MXP and other European points',
    note: 'Competitive Rates',
  },
]

export default function RoutesSectionEN() {
  return (
    <section id="routes" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amberGold text-sm tracking-widest mb-4">Route Network</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            Core Capacity Resources.
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            US route: 1000+ tons/month. Sea freight: 20+ containers/month. 
            Exclusive route resources nationwide.<br/>
            If Shanghai can't handle it, ask about charter options from other cities.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { number: '1000+', label: 'US Tons/Month', icon: Plane },
            { number: '20+', label: 'Sea Containers/Month', icon: Ship },
            { number: '50+', label: 'Direct Routes', icon: MapPin },
            { number: '100+', label: 'Global Destinations', icon: Globe },
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-surface rounded-xl text-center">
              <stat.icon className="w-6 h-6 text-amberGold mx-auto mb-3" />
              <div className="text-3xl font-bold text-textPrimary mb-1">{stat.number}</div>
              <div className="text-textMuted text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Route Categories */}
        <div className="space-y-16">
          {routeCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-amberGold" />
                <h3 className="text-xl font-bold text-textPrimary">{category.title}</h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.routes.map((route, index) => (
                  <div
                    key={index}
                    className="p-5 bg-surface border border-borderLight rounded-lg hover:border-amberGold/30 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-textPrimary">{route.name}</h4>
                      <span className="text-xs px-2 py-1 bg-amberGold/10 text-amberGold rounded">
                        {route.frequency}
                      </span>
                    </div>
                    <div className="text-sm text-amberGold font-medium mb-1">{route.capacity}</div>
                    <p className="text-xs text-textMuted">{route.note}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interline Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-16 border-t border-borderLight"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-6 h-6 text-amberGold" />
            <h3 className="text-xl font-bold text-textPrimary">Exclusive Interline Solutions</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {interlineProducts.map((product, index) => (
              <div
                key={index}
                className="p-5 bg-surface border border-amberGold/20 rounded-lg"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-textPrimary">{product.title}</h4>
                  <span className="text-xs px-2 py-1 bg-amberGold/10 text-amberGold rounded">
                    {product.note}
                  </span>
                </div>
                <p className="text-sm text-textSecondary">{product.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 bg-surface border border-amberGold/20 rounded-xl text-center"
        >
          <h3 className="text-xl font-bold text-textPrimary mb-4">
            Need specific quotes or capacity checks?
          </h3>
          <p className="text-textSecondary mb-6">
            Above is a partial route display. More resources and customized solutions available upon request.
          </p>
          <p className="text-amberGold font-medium">
            If Shanghai can't handle it, ask about charter options →
          </p>
        </motion.div>
      </div>
    </section>
  )
}
