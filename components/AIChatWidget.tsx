'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles, Bot, Minimize2 } from 'lucide-react'

interface Message {
  id: number
  role: 'user' | 'bot'
  content: string
}

const quickQuestions = [
  'AI怎么帮我优化空运方案？',
  '旺季仓位紧张怎么办？',
  '超重超大货物能运吗？',
  '运费能便宜多少？',
]

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'bot', content: '你好！我是神仙的AI助理 🤖\n\n可以帮你：\n• 快速了解空运方案\n• 评估运费和时效\n• 解答仓位问题\n\n有什么想问的？' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    
    const userMessage: Message = { id: Date.now(), role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)
    
    // 模拟AI回复
    setTimeout(() => {
      const botResponses: Record<string, string> = {
        'AI怎么帮我优化空运方案？': '用AI分析你的货量、时效要求、目的港，帮你：\n\n✓ 匹配最优航线（直飞/中转）\n✓ 预警旺季仓位风险\n✓ 优化成本（ vs 其他方案）\n\n加微信 jnb931 详细聊',
        '旺季仓位紧张怎么办？': '我们有20-30吨/班包板仓位！\n\n✓ 提前申请板位\n✓ 旺季也能快速响应\n✓ 包机方案（最大单航班98.8吨）\n\n详聊加微信：jnb931',
        '超重超大货物能运吗？': '可以！我们专治各种疑难杂件 💪\n\n✓ 单件17吨操作过\n✓ 45吨单票没问题\n✓ B777全货机98.8吨\n\n发给我具体尺寸帮你评估',
        '运费能便宜多少？': '运费取决于：货量、航线、时效\n\n用AI分析可以：\n✓ 识别隐藏成本\n✓ 优化路线省10-20%\n✓ 淡季vs旺季方案对比\n\n发个具体需求帮你分析',
      }
      
      const response = botResponses[input] || `感谢你的问题！\n\n针对"${input}"，我需要了解更多信息：\n• 起运港和目的港？\n• 货量和货型？\n• 时效要求？\n\n直接加微信 jnb931 帮你分析，10年经验老兵给你支招！`
      
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'bot', content: response }])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-r from-amberGold to-orange-500 rounded-full shadow-lg shadow-amberGold/30 flex items-center justify-center hover:scale-110 transition-transform"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-amberGold to-orange-500 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">AI智能顾问</p>
                  <p className="text-white/70 text-xs">7×24在线</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.role === 'user' 
                      ? 'bg-amberGold text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">试试这样问：</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleQuickQuestion(q)}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-amberGold/10 hover:text-amberGold transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-gray-100 p-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="问点什么..."
                  className="flex-1 px-3 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amberGold/50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-10 h-10 bg-amberGold rounded-full flex items-center justify-center text-white disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
