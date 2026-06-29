'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, ArrowUp } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-16 border-t border-borderLight bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* 联系方式 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-xl font-bold text-textPrimary mb-6 text-center">
            直接与主理人郑坚交流
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://weixin.qq.com/cgi-bin/bin/checkopcode?operator=jnb931"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amberGold text-textPrimary font-medium rounded-lg hover:bg-amberGold/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>微信：jnb931</span>
            </a>
            <a
              href="mailto:globegsa@Gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 border border-borderLight text-textSecondary font-medium rounded-lg hover:border-amberGold hover:text-amberGold transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>globegsa@Gmail.com</span>
            </a>
            <a
              href="tel:13816539222"
              className="inline-flex items-center gap-2 px-6 py-3 border border-borderLight text-textSecondary font-medium rounded-lg hover:border-amberGold hover:text-amberGold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>13816539222</span>
            </a>
          </div>
        </motion.div>

        {/* 底部信息 */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-borderLight">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-textPrimary font-semibold">神仙货运 Jones</p>
            <p className="text-textMuted text-sm">16年空运实操 · 大件项目货 · 非洲欧洲中转</p>
          </motion.div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-textMuted hover:text-amberGold transition-colors"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">回到顶部</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-textMuted text-sm"
          >
            <p>© {currentYear} 神仙货运Jones. 保留所有权利.</p>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 border-t border-borderLight pt-8 md:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-textPrimary">非洲航线</h4>
            <div className="grid gap-2 text-sm text-textMuted">
              <a href="/africa-air-freight/" className="hover:text-amberGold">非洲空运航线 Hub</a>
              <a href="/africa-air-freight/jnb/" className="hover:text-amberGold">JNB 约翰内斯堡空运</a>
              <a href="/africa-air-freight/fbm/" className="hover:text-amberGold">FBM 卢本巴希空运</a>
              <a href="/africa-air-freight/lun/" className="hover:text-amberGold">LUN 卢萨卡空运</a>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-textPrimary">大件专题</h4>
            <div className="grid gap-2 text-sm text-textMuted">
              <a href="/zh/lgg-africa-gateway/" className="hover:text-amberGold">LGG/BRU 非洲中转网络</a>
              <a href="/china-africa-oversized-cargo-via-europe/" className="hover:text-amberGold">LGG Africa Gateway</a>
              <a href="/insights/oversized-air-freight-quote-checklist/" className="hover:text-amberGold">超大件空运询价清单</a>
              <a href="/insights/africa-customs-documents-checklist-air-freight/" className="hover:text-amberGold">非洲清关资料清单</a>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-textPrimary">西非与东非</h4>
            <div className="grid gap-2 text-sm text-textMuted">
              <a href="/africa-air-freight/acc/" className="hover:text-amberGold">ACC 阿克拉空运</a>
              <a href="/africa-air-freight/abj/" className="hover:text-amberGold">ABJ 阿比让空运</a>
              <a href="/africa-air-freight/nbo/" className="hover:text-amberGold">NBO 内罗毕空运</a>
              <a href="/insights/east-africa-nbo-ebb-dar-project-cargo/" className="hover:text-amberGold">东非项目货入口</a>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-textPrimary">询价入口</h4>
            <div className="grid gap-2 text-sm text-textMuted">
              <a href="/insights/china-africa-air-freight-cost-chargeable-weight/" className="hover:text-amberGold">非洲空运多少钱一公斤</a>
              <a href="/insights/china-africa-air-freight-forwarder-for-factories/" className="hover:text-amberGold">工厂找非洲空运货代</a>
              <a href="/insights/africa-mining-equipment-air-freight-rfq-template/" className="hover:text-amberGold">矿业设备空运询价模板</a>
              <a href="/insights/oversized-air-cargo-booking-documents-main-deck-africa/" className="hover:text-amberGold">超大件主甲板订舱资料</a>
              <a href="/insights/eu-ics2-ncts-phase6-valid-ens-lgg-bru-africa-air-freight/" className="hover:text-amberGold">欧盟ICS2/NCTS政策更新</a>
              <a href="/insights/ghana-acc-easypass-icums-air-freight-clearance/" className="hover:text-amberGold">加纳EasyPASS 2026</a>
              <a href="/insights/egypt-cai-nafeza-aci-cargox-air-freight-clearance/" className="hover:text-amberGold">埃及ACI空运2026</a>
              <a href="/insights/nigeria-los-bodogwu-form-m-paar-air-freight-clearance/" className="hover:text-amberGold">尼日利亚B’Odogwu清关</a>
              <a href="/insights/iata-dgr-67-lithium-battery-3m-stack-test-africa-air-freight/" className="hover:text-amberGold">IATA锂电池DGR第67版</a>
              <a href="/insights/air-cargo-data-loggers-tracking-devices-africa-cold-chain/" className="hover:text-amberGold">温控货数据记录仪</a>
              <a href="/insights/mali-bko-sydonia-import-intention-air-freight-clearance/" className="hover:text-amberGold">马里BKO清关资料</a>
              <a href="/insights/guinea-cky-guceg-import-declaration-air-freight-clearance/" className="hover:text-amberGold">几内亚CKY清关资料</a>
              <a href="/insights/burkina-faso-oua-sydonia-waemu-air-freight-clearance/" className="hover:text-amberGold">布基纳法索OUA清关</a>
              <a href="/insights/niger-nim-guce-asycuda-air-freight-clearance/" className="hover:text-amberGold">尼日尔NIM清关资料</a>
              <a href="/insights/gabon-lbv-asycuda-cemac-air-freight-clearance/" className="hover:text-amberGold">加蓬LBV清关资料</a>
              <a href="/insights/drc-fbm-guice-bivac-mining-spares-air-freight-clearance/" className="hover:text-amberGold">刚果金FBM矿业清关</a>
              <a href="/insights/south-africa-cpt-dur-sars-invoice-itac-nrcs-air-freight-clearance/" className="hover:text-amberGold">南非CPT/DUR清关</a>
              <a href="/insights/south-africa-cpt-dur-port-marine-equipment-air-freight/" className="hover:text-amberGold">南非港口设备空运</a>
              <a href="/insights/cameroon-dla-avi-pecae-coc-air-freight-clearance/" className="hover:text-amberGold">喀麦隆DLA清关资料</a>
              <a href="/insights/togo-lfw-awb-certificate-origin-air-freight-clearance/" className="hover:text-amberGold">多哥LFW清关资料</a>
              <a href="/insights/benin-coo-guce-avd-origin-air-freight-clearance/" className="hover:text-amberGold">贝宁COO清关资料</a>
              <a href="/insights/chad-ndj-air-waybill-asycuda-import-documents-clearance/" className="hover:text-amberGold">乍得NDJ清关资料</a>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-borderLight text-center"
        >
          <p className="text-textMuted text-sm tracking-wide">
            "专注中国到非洲大件项目货：先判断能不能飞，再把欧洲中转、全货机和非洲二程路线做清楚"
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
