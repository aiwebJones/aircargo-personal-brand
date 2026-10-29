'use client'

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, MessageCircle, Search, X } from 'lucide-react'
import EascargoLogo from '@/components/EascargoLogo'
import { contactChannels, whatsappHref } from '@/lib/contact'
import { languageCounterpart } from '@/lib/language-switch'
import type { SearchEntry, SearchKind } from '@/lib/site-search-index'

const kindLabel: Record<SearchKind, { zh: string; en: string }> = {
  airport: { zh: '机场', en: 'Airport' },
  guide: { zh: '指南', en: 'Guide' },
  certificate: { zh: '证书', en: 'Certificate' },
  case: { zh: '案例', en: 'Case' },
}

export default function SiteChrome({
  lang,
  searchIndex,
}: {
  lang: 'zh-CN' | 'en'
  searchIndex: SearchEntry[]
}) {
  const zh = lang === 'zh-CN'
  const pathname = usePathname() || '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [wechatNote, setWechatNote] = useState('')

  const quoteHref = zh ? '/quote/?source=header' : '/en/quote/?source=header'
  const homeHref = zh ? '/' : '/en/'
  const otherLangHref = languageCounterpart(pathname, zh ? 'en' : 'zh')
  const whatsappText = zh
    ? '中国到非洲超大件，我接着发尺寸和重量。'
    : 'China to Africa oversized cargo. I will send dimensions and weight.'

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
    if (!terms.length) return searchIndex.slice(0, 8)
    return searchIndex
      .filter((entry) => {
        const blob = `${entry.title} ${entry.hint} ${entry.href}`.toLowerCase()
        return terms.every((term) => blob.includes(term))
      })
      .slice(0, 12)
  }, [query, searchIndex])

  const copyWechat = async () => {
    try {
      await navigator.clipboard.writeText(contactChannels.wechatId)
      setWechatNote(zh ? `已复制 ${contactChannels.wechatId}` : `Copied ${contactChannels.wechatId}`)
    } catch {
      setWechatNote(zh ? `微信号 ${contactChannels.wechatId}` : `WeChat ${contactChannels.wechatId}`)
    }
  }

  const nav = [
    { href: homeHref, label: zh ? '首页' : 'Home' },
    { href: '/africa-air-freight/', label: zh ? '按目的地' : 'By destination' },
    { href: '/cases/', label: zh ? '案例' : 'Cases' },
  ]

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
          <a href={homeHref} aria-label="EASCARGO home" className="shrink-0">
            <EascargoLogo wordmarkClassName="text-sm sm:text-base" />
          </a>
          <nav aria-label={zh ? '主导航' : 'Main'} className="ml-4 hidden items-center gap-6 text-sm md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-zinc-700 hover:text-emerald-800">
                {item.label}
              </a>
            ))}
            <a href={quoteHref} className="inline-flex h-10 items-center rounded-md bg-emerald-800 px-4 font-semibold text-white hover:bg-emerald-900">
              {zh ? '获取报价' : 'Get a quote'}
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-700 hover:bg-zinc-100"
              aria-expanded={searchOpen}
              aria-controls="site-search"
              onClick={() => {
                setSearchOpen((open) => !open)
                setMenuOpen(false)
              }}
            >
              <Search className="h-5 w-5" aria-hidden="true" />
              <span className="sr-only">{zh ? '搜索' : 'Search'}</span>
            </button>
            <a href={otherLangHref} hrefLang={zh ? 'en' : 'zh-CN'} className="inline-flex h-10 items-center px-2 text-sm font-semibold text-emerald-800">
              {zh ? 'English' : '中文'}
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-800 md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => {
                setMenuOpen((open) => !open)
                setSearchOpen(false)
              }}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">{zh ? '菜单' : 'Menu'}</span>
            </button>
          </div>
        </div>
        {searchOpen && (
          <div id="site-search" className="border-t border-zinc-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
              <label className="block text-sm font-medium text-zinc-800" htmlFor="site-search-input">
                {zh ? '搜机场、证书或指南标题' : 'Search airports, certificates or guide titles'}
              </label>
              <input
                id="site-search-input"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                autoFocus
                placeholder={zh ? '例如 JNB、SONCAP、LGG' : 'e.g. JNB, SONCAP, LGG'}
                className="mt-2 h-11 w-full rounded-md border border-zinc-300 px-3 text-base"
              />
              <ul className="mt-2 max-h-80 overflow-auto">
                {results.length === 0 && (
                  <li className="px-1 py-3 text-sm text-zinc-500">{zh ? '没有匹配的页面。' : 'No matching page.'}</li>
                )}
                {results.map((entry) => (
                  <li key={`${entry.href}-${entry.title}`}>
                    <a href={entry.href} className="flex items-baseline justify-between gap-3 rounded-md px-2 py-2 hover:bg-zinc-50">
                      <span className="text-sm text-zinc-900">{entry.title}</span>
                      <span className="shrink-0 text-xs text-zinc-500">{zh ? kindLabel[entry.kind].zh : kindLabel[entry.kind].en}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </header>

      {menuOpen && (
        <nav id="mobile-nav" aria-label={zh ? '移动导航' : 'Mobile'} className="fixed inset-x-0 top-16 bottom-16 z-40 overflow-auto bg-white px-5 py-6 md:hidden">
          <div className="flex flex-col gap-2 text-lg">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="rounded-md px-2 py-3 hover:bg-zinc-50">
                {item.label}
              </a>
            ))}
            <a href={quoteHref} className="mt-2 inline-flex h-12 items-center justify-center rounded-md bg-emerald-800 font-semibold text-white">
              {zh ? '获取报价' : 'Get a quote'}
            </a>
          </div>
        </nav>
      )}

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white md:hidden" aria-label={zh ? '联系' : 'Contact'}>
        <div className="grid grid-cols-3">
          <a
            href={whatsappHref(whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-16 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-zinc-800"
          >
            <MessageCircle className="h-4 w-4 text-emerald-800" aria-hidden="true" />
            WhatsApp
          </a>
          <button type="button" onClick={copyWechat} className="inline-flex h-16 flex-col items-center justify-center gap-0.5 text-xs font-semibold text-zinc-800">
            <span className="text-sm font-bold text-emerald-800">WeChat</span>
            <span className="font-normal text-zinc-500">{wechatNote || contactChannels.wechatId}</span>
          </button>
          <a href={quoteHref} className="inline-flex h-16 items-center justify-center bg-emerald-800 text-sm font-semibold text-white">
            {zh ? '询价' : 'Quote'}
          </a>
        </div>
      </div>
    </>
  )
}
