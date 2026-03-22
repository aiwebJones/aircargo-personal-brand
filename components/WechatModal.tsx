'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageCircle } from 'lucide-react'

interface WechatModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function WechatModal({ isOpen, onClose }: WechatModalProps) {
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
                  扫码领清单
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  添加微信 <span className="font-semibold text-amberGold">jnb931</span>，备注"领清单"，我拉你
                </p>

                {/* QR Code Placeholder */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <div className="w-48 h-48 bg-white border-2 border-amberGold/20 rounded-lg mx-auto flex items-center justify-center">
                    {/* 这里放微信二维码图片 */}
                    <div className="text-center">
                      <MessageCircle className="w-16 h-16 text-amberGold mx-auto mb-2" />
                      <p className="text-xs text-gray-400">微信二维码</p>
                    </div>
                  </div>
                </div>

                {/* Alternative */}
                <p className="text-xs text-gray-500">
                  或者直接搜索 <span className="font-semibold">jnb931</span> 添加
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
