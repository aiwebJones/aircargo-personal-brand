'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, Loader2, Send, Plane, MapPin } from 'lucide-react'

interface AIQuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AIQuoteModal({ isOpen, onClose }: AIQuoteModalProps) {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    weight: '',
    cargoType: '',
  })
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleGenerate = async () => {
    if (!formData.origin || !formData.destination || !formData.weight) return
    
    setIsGenerating(true)
    
    // 模拟AI分析
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setResult(`
✈️ AI智能空运方案

📍 路线：${formData.origin} → ${formData.destination}
📦 货量：${formData.weight}kg
📋 货型：${formData.cargoType || '普货'}

—— AI分析结果 ——

💰 推荐方案：
1. 【最优】上海直飞XX航班
   预计时效：2-3天
   预计价格：¥XX/kg
   优势：直飞快、时效稳

2. 【经济】郑州/广州中转
   预计时效：3-4天
   预计价格：¥XX/kg  
   优势：价格低10%

⏰ 仓位状态：
- 当前航班余位充足
- 建议提前3天订仓

⚠️ 风险提示：
- 旺季(9-12月)价格波动大
- 返修/品牌货物需额外资料

📱 添加微信获取详细报价：jnb931
    `.trim())
    
    setIsGenerating(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <div className="relative w-full max-w-lg bg-white rounded-2xl p-8 shadow-2xl my-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {!result ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-amberGold rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">AI智能询价</h3>
                      <p className="text-sm text-gray-500">30秒获取最优空运方案</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">起运港 *</label>
                        <div className="relative">
                          <Plane className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            value={formData.origin}
                            onChange={(e) => setFormData({...formData, origin: e.target.value})}
                            placeholder="上海/广州/郑州"
                            className="w-full pl-10 px-4 py-3 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-amberGold focus:outline-none rounded-xl"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">目的港 *</label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            value={formData.destination}
                            onChange={(e) => setFormData({...formData, destination: e.target.value})}
                            placeholder="JFK/LAX/FRA"
                            className="w-full pl-10 px-4 py-3 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-amberGold focus:outline-none rounded-xl"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">货量(kg) *</label>
                        <input
                          type="number"
                          value={formData.weight}
                          onChange={(e) => setFormData({...formData, weight: e.target.value})}
                          placeholder="如：100"
                          className="w-full px-4 py-3 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-amberGold focus:outline-none rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">货型</label>
                        <select
                          value={formData.cargoType}
                          onChange={(e) => setFormData({...formData, cargoType: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-200 text-gray-900 focus:border-amberGold focus:outline-none rounded-xl"
                        >
                          <option value="">普货</option>
                          <option value="带电">带电</option>
                          <option value="液体">液体</option>
                          <option value="粉末">粉末</option>
                          <option value="超重">超重/超大</option>
                          <option value="敏感">敏感货</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating || !formData.origin || !formData.destination || !formData.weight}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-amberGold text-white font-bold hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-xl"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          AI正在分析中...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-5 h-5" />
                          获取AI方案
                        </>
                      )}
                    </button>
                  </div>
                </>
              ) : (
                <div className="bg-gray-50 rounded-xl p-6">
                  <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                    {result}
                  </pre>
                  <button
                    onClick={onClose}
                    className="w-full mt-6 py-3 bg-amberGold text-white font-medium hover:bg-amber-400 transition-colors rounded-xl"
                  >
                    添加微信获取详细报价
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
