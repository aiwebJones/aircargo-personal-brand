'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ClipboardCheck, Copy, MessageCircle, X } from 'lucide-react'

interface WechatModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WechatModal({ isOpen, onClose }: WechatModalProps) {
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'manual'>('idle')

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

    setCopyState(copied ? 'copied' : 'manual')
    window.setTimeout(() => setCopyState('idle'), 2500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-white rounded-2xl p-8 shadow-2xl">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="关闭"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center">
                <div className="w-16 h-16 bg-amberGold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-amberGold" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  微信询价
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  复制微信号后搜索添加，把货物资料发来，先判断路线是否成立。
                </p>

                <button
                  type="button"
                  onClick={copyWechat}
                  data-conversion="wechat-copy"
                  className="mb-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-amberGold px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  {copyState === 'copied' ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                  {copyState === 'copied'
                    ? '已复制：jnb931'
                    : copyState === 'manual'
                      ? '请手动复制：jnb931'
                      : '复制微信号：jnb931'}
                </button>

                <div className="space-y-3 border-t border-gray-200 pt-5 text-left text-sm text-gray-600">
                  <p className="flex gap-3"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-amberGold" />微信搜索并添加 <span className="font-semibold text-gray-900">jnb931</span></p>
                  <p className="flex gap-3"><ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-amberGold" />发送起运地、目的港、品名、件数、重量和每件尺寸</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
