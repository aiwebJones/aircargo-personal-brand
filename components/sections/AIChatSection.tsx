'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send, Sparkles, Bot, User } from 'lucide-react'

interface Message {
  id: number
  role: 'user' | 'bot'
  content: string
  time?: string
}

const quickQuestions = [
  'AI怎么帮我优化空运方案？',
  '旺季仓位紧张怎么办？',
  '超重超大货物能运吗？',
  '运费能便宜多少？',
]

export default function AIChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      role: 'bot', 
      content: '你好！我是神仙的AI助理 🤖\n\n可以帮你：\n• 快速了解空运方案\n• 评估运费和时效\n• 解答仓位问题\n\n有什么想问的？',
      time: '刚刚'
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = async () => {
    if (!input.trim()) return
    
    const userMessage: Message = { 
      id: Date.now(), 
      role: 'user', 
      content: input,
      time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    }
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
      
      const response = botResponses[input] || `感谢你的问题！\n\n针对"${input}"，我需要了解更多信息：\n• 起运港和目的港？\n• 货量和货型？\n• 时效要求？\n\n直接加微信 jnb931 帮你分析，16年经验老兵给你支招！`
      
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        role: 'bot', 
        content: response,
        time: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
      }])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <section id="chat" className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amberGold/10 border border-amberGold/30 text-amberGold text-sm font-medium rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span>在线对话</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            直接和神仙对话
          </h2>
          <p className="text-slate-600">
            16年物流老兵 + AI智能分析，在线帮你解决问题
          </p>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-amberGold to-orange-500 px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-medium">神仙的AI助理</p>
              <p className="text-white/70 text-xs">7×24在线 · 秒级响应</p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">在线</span>
            </div>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {/* Avatar */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.role === 'user' ? 'bg-amberGold' : 'bg-slate-200'
                  }`}>
                    {msg.role === 'user' ? (
                      <User className="w-4 h-4 text-white" />
                    ) : (
                      <Bot className="w-4 h-4 text-slate-600" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`rounded-2xl px-4 py-3 ${
                      msg.role === 'user' 
                        ? 'bg-amberGold text-white' 
                        : 'bg-white border border-slate-200 text-slate-800'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                    {msg.time && (
                      <span className="text-xs text-slate-400 mt-1">{msg.time}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-slate-600" />
                  </div>
                  <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3">
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
          {messages.length <= 2 && (
            <div className="px-6 py-3 bg-white border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-2">试试这样问：</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-xs px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full hover:bg-amberGold/10 hover:text-amberGold transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-slate-200 p-4 bg-white">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="问点什么..."
                className="flex-1 px-4 py-3 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amberGold/50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-12 h-12 bg-amberGold rounded-full flex items-center justify-center text-white disabled:opacity-50 hover:bg-amber-400 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
              详细方案可添加微信：jnb931
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
