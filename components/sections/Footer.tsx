'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, ClipboardCheck, Mail, MessageCircle, Phone } from 'lucide-react'

const footerGroups = [
  {
    title: '核心航线',
    links: [
      ['非洲航线 Hub', '/africa-air-freight/'],
      ['JNB 约翰内斯堡', '/africa-air-freight/jnb/'],
      ['FBM 卢本巴希', '/africa-air-freight/fbm/'],
      ['LUN 卢萨卡', '/africa-air-freight/lun/'],
      ['LBV 利伯维尔', '/africa-air-freight/lbv/'],
    ],
  },
  {
    title: '航线与案例',
    links: [
      ['当前航线项目', '/route-programs/'],
      ['MLE/SIN/MNL 经 ADD', '/route-programs/et-asia-africa-via-add/'],
      ['LGG/BRU 中转方案', '/zh/lgg-africa-gateway/'],
      ['公开项目记录', '/cases/'],
    ],
  },
  {
    title: '询价工具',
    links: [
      ['项目货询价 Agent', '/tools/africa-project-cargo-rfq/?source=home-footer-links'],
      ['非洲空运工具箱', '/tools/'],
      ['计费重计算器', '/tools/air-freight-chargeable-weight-calculator/'],
      ['清关资料生成器', '/tools/africa-air-freight-customs-document-checklist/'],
    ],
  },
  {
    title: '专业资料',
    links: [
      ['全部专业资料', '/insights/'],
      ['超大件询价清单', '/insights/oversized-air-freight-quote-checklist/'],
      ['非洲清关资料清单', '/insights/africa-customs-documents-checklist-air-freight/'],
      ['矿业设备询价模板', '/insights/africa-mining-equipment-air-freight-rfq-template/'],
    ],
  },
] as const

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [wechatCopyState, setWechatCopyState] = useState<'idle' | 'copied' | 'manual'>('idle')

  const copyWechat = async () => {
    let copied = false
    try {
      await navigator.clipboard.writeText('jnb931')
      copied = true
    } catch {
      const input = document.createElement('textarea')
      input.value = 'jnb931'
      input.style.position = 'fixed'
      input.style.opacity = '0'
      document.body.appendChild(input)
      input.select()
      copied = document.execCommand('copy')
      input.remove()
    }
    setWechatCopyState(copied ? 'copied' : 'manual')
    window.setTimeout(() => setWechatCopyState('idle'), 2500)
  }

  return (
    <footer className="border-t border-borderLight bg-surface py-14">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="mb-5 text-center text-xl font-bold text-textPrimary">把货物资料发来，先判断路线是否成立</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="/tools/africa-project-cargo-rfq/?source=home-footer" className="inline-flex items-center gap-2 rounded-lg bg-amberGold px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-400">
              <ClipboardCheck className="h-5 w-5" />项目货询价 Agent
            </a>
            <button type="button" onClick={copyWechat} aria-live="polite" title="复制微信号 jnb931" className="inline-flex items-center gap-2 rounded-lg border border-borderLight px-5 py-3 font-medium text-textSecondary transition hover:border-amberGold hover:text-amberGold">
              <MessageCircle className="h-5 w-5" />
              {wechatCopyState === 'copied' ? '已复制：jnb931' : wechatCopyState === 'manual' ? '请复制：jnb931' : '微信：jnb931'}
            </button>
            <a href="mailto:globegsa@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-borderLight px-5 py-3 font-medium text-textSecondary transition hover:border-amberGold hover:text-amberGold"><Mail className="h-5 w-5" />globegsa@gmail.com</a>
            <a href="tel:+8613816539222" className="inline-flex items-center gap-2 rounded-lg border border-borderLight px-5 py-3 font-medium text-textSecondary transition hover:border-amberGold hover:text-amberGold"><Phone className="h-5 w-5" />+86 138 1653 9222</a>
          </div>
        </motion.div>

        <nav aria-label="页脚导航" className="grid gap-8 border-t border-borderLight py-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-3 text-sm font-semibold text-textPrimary">{group.title}</h4>
              <div className="grid gap-2 text-sm text-textMuted">
                {group.links.map(([label, href]) => <a key={href} href={href} className="hover:text-amberGold">{label}</a>)}
              </div>
            </div>
          ))}
        </nav>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-borderLight pt-7 text-sm text-textMuted md:flex-row">
          <div><p className="font-semibold text-textPrimary">EASCargo Jones · 神仙货运</p><p>中国到非洲大件项目货逐票路线判断</p></div>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 transition hover:text-amberGold"><span>回到顶部</span><ArrowUp className="h-4 w-4" /></button>
          <p>© {currentYear} EASCargo Jones</p>
        </div>
      </div>
    </footer>
  )
}
