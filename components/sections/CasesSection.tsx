'use client'

import { motion } from 'framer-motion'
import { Scale, Package, Clock, CheckCircle, AlertTriangle, Wrench, Plane } from 'lucide-react'

const cases = [
  {
    id: 'heavy-cargo-17t',
    title: '单件17吨！单票45吨超重超大货物',
    client: '某工业设备制造商',
    industry: '制造业',
    origin: '上海 (PVG)',
    destination: '中东',
    images: ['/case-17t-1.jpg', '/case-17t-2.jpg', '/case-17t-3.jpg', '/case-17t-4.jpg'],
    challenge: {
      icon: AlertTriangle,
      points: [
        '单件重量：16,730 kg（一般高板限重：6,500kg）',
        '单件尺寸：735×135×150 cm（超出标准航空板尺寸）',
        '机场叉车最大承重：1,000 kg',
        '安检机承重限制：1,000 kg / 门宽150cm',
        '返修物品：海关必查验，流程复杂',
      ]
    },
    solution: {
      icon: Wrench,
      points: [
        '向航空公司申请加长超重板装载',
        '加近1吨枕木分担重量，避免压烂航空板',
        '协调吊车到机场（¥1000+/小时）',
        '提前操作，压仓24小时搞定安检',
        '搞定磁检和航司保函',
        '避免海关查验，节省¥10,000+费用',
      ]
    },
    result: {
      icon: CheckCircle,
      points: [
        '超出限重3倍仍顺利出运',
        '零海关查验费用',
        '客户后续持续合作',
      ]
    },
    stats: [
      { label: '单件重量', value: '16.7T', unit: '单件' },
      { label: '超限', value: '3倍', unit: '标准限制' },
      { label: '操作周期', value: '48h', unit: '总计' },
      { label: '节省', value: '¥10K+', unit: '查验费用' },
    ]
  },
  {
    id: 'bulk-charter',
    title: 'B777 F全货机！单航班98.8吨包机',
    client: '某电子企业',
    industry: '电子产品',
    origin: '上海 (PVG)',
    destination: '阿姆斯特丹 (AMS)',
    images: [],
    challenge: {
      icon: AlertTriangle,
      points: [
        '单票电子产品总重近百吨',
        '客户要求同航班出发',
        '旺季仓位极度紧张',
        '需要B777 F全货机才能装下',
      ]
    },
    solution: {
      icon: Wrench,
      points: [
        '申请包机解决方案',
        'B777 F全货机单航班装载98.8吨',
        '上海直飞阿姆斯特丹',
        '全程专业护航',
      ]
    },
    result: {
      icon: CheckCircle,
      points: [
        '单航班实际装载98.8吨',
        'B777 F全货机满载出运',
        '准时交付，保障客户产线',
        'A330货机近半数货物为我们公司',
        '准时送达生产线',
      ]
    },
    stats: [
      { label: '总货量', value: '98.8T', unit: '单航班' },
      { label: '机型', value: 'B777 F', unit: '全货机' },
      { label: '航线', value: 'PVG-AMS', unit: '直飞' },
      { label: '交付', value: '100%', unit: '准时' },
    ]
  },
  {
    id: 'repair-return',
    title: '复杂返修货物出口',
    client: '某医疗设备公司',
    industry: '医疗',
    origin: '中国',
    destination: '德国',
    images: [],
    challenge: {
      icon: AlertTriangle,
      points: [
        '海运进口货物需空运出口返修',
        '返修货海关必查验',
        '需要9种不同文件',
        '含磁性物质需特殊鉴定',
      ]
    },
    solution: {
      icon: Wrench,
      points: [
        '准备完整报关资料包',
        '获取航司含磁保函',
        '与报关行协调加急查验',
        '利用关系降低查验概率',
      ]
    },
    result: {
      icon: CheckCircle,
      points: [
        '零查验（避免强制查验）',
        '为客户节省¥10,000+仓租费用',
        '48小时内完成出运',
      ]
    },
    stats: [
      { label: '文件数', value: '9', unit: '种类型' },
      { label: '查验风险', value: '100%', unit: '必查' },
      { label: '实际查验', value: '0', unit: '次' },
      { label: '节省', value: '¥10K+', unit: '费用' },
    ]
  }
]

export default function CasesSection() {
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
          <p className="text-amberGold text-sm tracking-widest mb-4">成功案例</p>
          <h2 className="text-heading md:text-heading font-bold text-textPrimary mb-6">
            解决别人解决不了的难题
          </h2>
          <p className="text-textSecondary text-lg max-w-2xl">
            真实案例，硬核实力。这就是别人搞不定的货最后都找我们的原因。
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

              {/* Case Images */}
              {caseItem.images && caseItem.images.length > 0 && (
                <div className="p-8 pb-0">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {caseItem.images.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="aspect-square rounded-lg overflow-hidden bg-gray-100"
                      >
                        <img 
                          src={img} 
                          alt={`案例图片 ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Content */}
              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Challenge */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <caseItem.challenge.icon className="w-5 h-5 text-red-500" />
                      <h4 className="font-semibold text-textPrimary">挑战</h4>
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
                      <h4 className="font-semibold text-textPrimary">解决方案</h4>
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
                      <h4 className="font-semibold text-textPrimary">结果</h4>
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
            <h3 className="text-lg font-bold text-textPrimary">我们的仓位优势</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-textSecondary">
            <div>
              <Plane className="w-5 h-5 text-amberGold mb-2" />
              <p className="text-sm"><strong>20-30吨/班</strong>包板仓位，涵盖EY、CZ、CA、QR、LH等航司，覆盖上海、郑州、广州、香港</p>
            </div>
            <div>
              <Package className="w-5 h-5 text-amberGold mb-2" />
              <p className="text-sm">每月操作多票<strong>30吨+</strong>货物，单航班最高装载<strong>65吨</strong>（不含包机）</p>
            </div>
            <div>
              <CheckCircle className="w-5 h-5 text-amberGold mb-2" />
              <p className="text-sm">与航司、地勤公司关系铁，现场操作团队专业靠谱</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
