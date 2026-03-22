'use client'

import { motion } from 'framer-motion'
import { Plane, Ship, MapPin, Calendar, Package, Globe } from 'lucide-react'

const routeCategories = [
  {
    title: '美线产品',
    icon: Plane,
    routes: [
      { 
        name: '全国美国空派专线', 
        capacity: '单月产能 1000吨+',
        frequency: 'Daily',
        note: '主力航线，仓位充足'
      },
      { 
        name: '上海CZ/CA/CK', 
        capacity: 'Daily',
        frequency: '统配直飞',
        note: '南航/国航/国泰，美线全境'
      },
      { 
        name: '全国美国海派专线', 
        capacity: '单月 20条柜起',
        frequency: 'Weekly',
        note: '普船/快船可选'
      },
      { 
        name: '鄂州5Y ORD', 
        capacity: 'D3567',
        frequency: '长期收',
        note: '芝加哥直飞'
      },
      { 
        name: '鄂州5Y JFK', 
        capacity: 'D1357',
        frequency: '长期收',
        note: '纽约直飞'
      },
      { 
        name: '郑州5Y JFK', 
        capacity: 'D246',
        frequency: '长期收',
        note: '纽约直飞'
      },
      { 
        name: '杭州K4 LAX', 
        capacity: 'D35',
        frequency: '长期收',
        note: '洛杉矶直飞'
      },
      { 
        name: '鄂州K4 MIA', 
        capacity: 'D26',
        frequency: '长期收',
        note: '迈阿密直飞'
      },
    ]
  },
  {
    title: '欧线直飞',
    icon: Plane,
    routes: [
      { 
        name: '上海CZ/CA/CK', 
        capacity: 'Daily',
        frequency: '统配直飞',
        note: '南航/国航/国泰，欧洲全境'
      },
      { 
        name: '上海EY/QR/TK/ET', 
        capacity: 'Daily',
        frequency: '长期收',
        note: '中东航司，覆盖欧洲全境'
      },
      { 
        name: '上海KJ ICN', 
        capacity: 'Daily',
        frequency: '平重畅收',
        note: '首尔中转，性价比高'
      },
      { 
        name: '上海KJ MXP/FRA/VIE', 
        capacity: '固定二程',
        frequency: '长期收',
        note: '米兰/法兰克福/维也纳'
      },
      { 
        name: '鄂州O3 FRA', 
        capacity: 'D246',
        frequency: '长期收',
        note: '法兰克福直飞'
      },
      { 
        name: '鄂州O3 LGG', 
        capacity: 'D123567',
        frequency: '长期收重货',
        note: '列日直飞，重货优势'
      },
      { 
        name: '鄂州O3 BUD', 
        capacity: 'D367',
        frequency: '长期收',
        note: '布达佩斯直飞'
      },
      { 
        name: '鄂州O3 OSL', 
        capacity: 'D25',
        frequency: '长期收',
        note: '奥斯陆直飞'
      },
    ]
  },
  {
    title: '欧线中转',
    icon: Globe,
    routes: [
      { 
        name: '上海LH FRA', 
        capacity: 'Daily',
        frequency: '长期收',
        note: '汉莎直飞，转欧洲全境'
      },
      { 
        name: '上海2C CDG', 
        capacity: 'Daily',
        frequency: '长期收',
        note: '巴黎直飞，转欧洲全境'
      },
    ]
  },
  {
    title: '中东/非洲线',
    icon: MapPin,
    routes: [
      { 
        name: '鄂州/上海/深圳 EY/O3/ET', 
        capacity: 'Daily',
        frequency: '长期收',
        note: '中东、非洲、欧洲全覆盖'
      },
      { 
        name: 'ET新加坡SIN联运', 
        capacity: 'Daily',
        frequency: '强势点',
        note: 'BKO/DSS等非洲点'
      },
    ]
  },
  {
    title: '南美线',
    icon: Globe,
    routes: [
      { 
        name: '马尔代夫MLE联运', 
        capacity: 'Daily',
        frequency: '好价',
        note: 'GRU/EZE/SCL/PUJ/SDQ等南美点'
      },
    ]
  },
  {
    title: '特殊产品',
    icon: Package,
    routes: [
      { 
        name: '大件/超长板', 
        capacity: '全航线',
        frequency: '可接',
        note: '郑州GI/U3/X7，成都CB，重庆Y8，香港5Y'
      },
      { 
        name: '包机服务', 
        capacity: '按需',
        frequency: '定制',
        note: '上海搞不定的，外地包机来问'
      },
      { 
        name: '欧洲大件仓位', 
        capacity: '大仓位',
        frequency: '长期收',
        note: '超长、开机头均可操作'
      },
    ]
  },
]

const interlineProducts = [
  {
    title: '科特迪瓦航空HF-ABJ',
    description: '上海HF → ABJ(阿比让) 科特迪瓦航空独家，巴黎直飞阿比让',
    note: '全国独家',
  },
  {
    title: '马尔代夫联运方案',
    description: '北京JD/上海MU/RH → MLE 换单到中东、欧洲、非洲',
    note: '独家联运',
  },
  {
    title: '义乌CF MNL中转',
    description: '义乌CF → MNL 转 AMM/CMN/RUH/DXB 等地',
    note: '东南亚中转优势',
  },
  {
    title: '鄂州I9-MNL联运',
    description: '鄂州I9 → MNL 联运SV全航线',
    note: '菲律宾中转',
  },
  {
    title: 'ET新加坡联运',
    description: 'SIN中转 → BKO/DSS 等非洲点',
    note: '强势点',
  },
  {
    title: 'MLE欧洲联运',
    description: '马尔代夫 → FRA/LHR/MXP 等欧洲点',
    note: '好价',
  },
]

export default function RoutesSection() {
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
          <p className="text-amberGold text-sm tracking-widest mb-4">航线产品手册</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            核心运力资源。
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            美线月产能1000吨+，海派20条柜/月，全国独家航线资源。<br/>
            上海搞不定的，外地包机可以来问。
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
            { number: '1000+', label: '美线月产能(吨)', icon: Plane },
            { number: '20+', label: '海派月柜量', icon: Ship },
            { number: '50+', label: '直飞航线', icon: MapPin },
            { number: '100+', label: '全球覆盖点', icon: Globe },
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
            <h3 className="text-xl font-bold text-textPrimary">独家联运方案</h3>
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
            需要具体报价或仓位查询？
          </h3>
          <p className="text-textSecondary mb-6">
            以上仅为部分航线展示，更多资源和定制化方案欢迎咨询。
          </p>
          <p className="text-amberGold font-medium">
            上海搞不定的，外地包机可以来问 →
          </p>
        </motion.div>
      </div>
    </section>
  )
}
