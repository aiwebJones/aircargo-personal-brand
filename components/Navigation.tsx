'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'

interface NavigationProps {
  currentLang: 'zh' | 'en'
  onLangChange: (lang: 'zh' | 'en') => void
}

const navItemsZh = [
  { label: '关于', href: '#about' },
  { label: '案例', href: '#cases' },
  { label: '联系', href: '#contact' },
]

const navItemsEn = [
  { label: 'About', href: '#about' },
  { label: 'Cases', href: '#cases' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation({ currentLang, onLangChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = currentLang === 'zh' ? navItemsZh : navItemsEn

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-borderLight shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="font-semibold tracking-wide hover:text-amberGold transition-colors text-textPrimary"
            >
              {currentLang === 'zh' ? '神仙货运Jones' : 'Shenxian Jones'}
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm text-textSecondary hover:text-textPrimary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Language Switcher */}
              <button
                onClick={() => onLangChange(currentLang === 'zh' ? 'en' : 'zh')}
                className="flex items-center gap-1 px-3 py-1.5 text-sm border border-borderLight rounded-lg hover:border-amberGold/30 hover:bg-surface transition-all"
              >
                <Globe className="w-4 h-4 text-amberGold" />
                <span className="text-textSecondary">{currentLang === 'zh' ? 'EN' : '中文'}</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onLangChange(currentLang === 'zh' ? 'en' : 'zh')}
                className="flex items-center gap-1 px-3 py-1.5 text-sm border border-borderLight rounded-lg"
              >
                <Globe className="w-4 h-4 text-amberGold" />
                <span className="text-textSecondary">{currentLang === 'zh' ? 'EN' : '中文'}</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-textPrimary"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-white/98 backdrop-blur-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <nav className="relative flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-xl text-textPrimary hover:text-amberGold transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
