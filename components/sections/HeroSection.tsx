'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Plane, Shield, Zap, Send, Bot, User } from 'lucide-react'

interface Message {
  id: number
  role: 'user' | 'bot'
  content: string
}

interface HeroSectionProps {
  onOpenContact: () => void
  onOpenWechat: () => void
  onOpenAIQuote: () => void
}

export default function HeroSection({ onOpenContact, onOpenWechat, onOpenAIQuote }: HeroSectionProps) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'bot', content: '你好！我是神仙的AI助理 🤖\n\n有什么空运问题尽管问？' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    
    const userMessage: Message = { id: Date.now(), role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)
    
    setTimeout(() => {
      const botResponses: Record<string, string> = {
        'AI怎么帮我优化空运方案？': '用AI分析你的货量、时效、目的港，帮你匹配最优航线，预警仓位风险，优化成本10-20%',
        '旺季仓位紧张怎么办？': '我们有20-30吨/班包板仓位！提前申请，旺季也能快速响应，还可包机（最大98.8吨）',
        '超重超大货物能运吗？': '可以！单件17吨、45吨单票都操作过。发具体尺寸帮你评估',
        '运费能便宜多少？': '用AI分析可识别隐藏成本，优化路线省10-20%。发需求帮你分析',
      }
      
      const response = botResponses[input] || `感谢问题！需要了解：起运港、目的港、货量、时效。加微信 jnb931 详细聊~`
      
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', content: response }])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
      <div 
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `linear-gradient(rgba(245, 166, 35, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(245, 166, 35, 0.15) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amberGold/10 border border-amberGold/30 text-amberGold text-sm font-medium rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>用AI帮您优化空运方案，降低20%成本</span>
            </motion.div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
              告别物流盲区
              <br />
              <span className="text-amberGold">AI让货运更简单</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-slate-600 mb-4 max-w-xl">
              16年空运经验 + <span className="text-amberGold font-semibold">AI智能分析</span>，为您的跨境货物提供
              <span className="text-amberGold font-semibold">清晰</span>、<span className="text-amberGold font-semibold">可控</span>、<span className="text-amberGold font-semibold">高性价比</span>的空运方案
            </p>

            <p className="text-lg text-slate-500 mb-8">
              用AI实时监控仓位、预警风险、优化路线。旺季不慌，淡季不愁。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <motion.button
                onClick={onOpenWechat}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amberGold to-orange-500 text-white font-medium hover:shadow-xl hover:shadow-amberGold/30 transition-all duration-300 rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="w-4 h-4" />
                <span>免费领《华东空运风险自查清单》</span>
              </motion.button>
              
              <motion.button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-amberGold text-amberGold hover:bg-amberGold hover:text-white transition-all duration-300 rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">加微信深度交流</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-slate-600">
                <Sparkles className="w-5 h-5 text-amberGold" />
                <span className="text-sm">AI方案优化</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Plane className="w-5 h-5 text-amberGold" />
                <span className="text-sm">仓位实时监控</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Shield className="w-5 h-5 text-amberGold" />
                <span className="text-sm">风险预警</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Zap className="w-5 h-5 text-amberGold" />
                <span className="text-sm">成本透明</span>
              </div>
            </div>
          </motion.div>

          {/* Right - AI Chat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-amberGold to-orange-500 px-4 py-3 flex items-center gap-2">
              <Bot className="w-5 h-5 text-white" />
              <span className="text-white font-medium text-sm">在线对话 - 秒级响应</span>
              <span className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>

            {/* Messages */}
            <div className="h-72 overflow-y-auto p-4 bg-slate-50 space-y-3">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'user' ? 'bg-amberGold' : 'bg-slate-200'
                    }`}>
                      {msg.role === 'user' ? (
                        <User className="w-3 h-3 text-white" />
                      ) : (
                        <Bot className="w-3 h-3 text-slate-600" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-3 py-2 ${
                      msg.role === 'user' 
                        ? 'bg-amberGold text-white' 
                        : 'bg-white border border-slate-200 text-slate-800 text-sm'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-2">
                    <div className="w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center">
                      <Bot className="w-3 h-3 text-slate-600" />
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl px-3 py-2">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            <div className="px-4 py-2 bg-white border-t border-slate-100">
              <div className="flex flex-wrap gap-1">
                {['仓位？', '运费？', '超重件？'].map((q) => (
                  <button
                    key={q}
                    onClick={() => setInput(q)}
                    className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full hover:bg-amberGold/10 hover:text-amberGold"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="问点什么..."
                  className="flex-1 px-3 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amberGold/50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-9 h-9 bg-amberGold rounded-full flex items-center justify-center text-white disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
