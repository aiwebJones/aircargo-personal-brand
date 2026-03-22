'use client'

import { motion } from 'framer-motion'
import { Plane, Mail, Phone, MapPin } from 'lucide-react'

export default function FooterEN() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-borderLight">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-6 h-6 text-amberGold" />
              <span className="text-xl font-bold text-textPrimary">Shenxian Jones Air Freight</span>
            </div>
            <p className="text-textMuted mb-6 max-w-md">
              Don&apos;t just move cargo. Solve problems. 10+ years of international air freight expertise, 
              delivering end-to-end logistics solutions for businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a href="mailto:globegsa@gmail.com" className="text-textMuted hover:text-amberGold transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:13816539222" className="text-textMuted hover:text-amberGold transition-colors">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-textPrimary mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#capabilities" className="text-textMuted hover:text-amberGold transition-colors">Services</a></li>
              <li><a href="#routes" className="text-textMuted hover:text-amberGold transition-colors">Route Network</a></li>
              <li><a href="#about" className="text-textMuted hover:text-amberGold transition-colors">About</a></li>
              <li><a href="#contact" className="text-textMuted hover:text-amberGold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-textPrimary mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-textMuted">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>globegsa@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-textMuted">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>138-1653-9222</span>
              </li>
              <li className="flex items-start gap-2 text-textMuted">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>WeChat: jnb931</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-borderLight flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-sm">
            © {currentYear} Shenxian Jones Air Freight. All rights reserved.
          </p>
          <p className="text-textMuted text-sm">
            Professional Air Freight Solutions
          </p>
        </div>
      </div>
    </footer>
  )
}
