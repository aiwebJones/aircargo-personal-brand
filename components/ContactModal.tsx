'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/mqegzyby', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `网站联系表单 - ${formData.name}`,
        })
      })

      const data = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        
        // Reset after showing success
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', company: '', email: '', phone: '', message: '' })
          onClose()
        }, 2000)
      } else {
        // Formspree returned an error
        setError(data.error || '发送失败，请稍后重试')
      }
    } catch (err) {
      // Network error or other issue
      setError('网络错误，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
            className="fixed inset-0 z-50 bg-deepBlue/90 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg bg-[#0f1720] border border-white/10 p-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-industrialGray/50 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-amberGold mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    消息已发送
                  </h3>
                  <p className="text-industrialGray/60 text-center">
                    我会在24小时内回复你
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    发起对话
                  </h3>
                  <p className="text-industrialGray/60 text-sm mb-8">
                    填写下面的表单，我会尽快回复
                  </p>

                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-start gap-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-red-300 text-sm">{error}</p>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-industrialGray/80 mb-2">
                        姓名 <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B1C2D] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-amberGold/50 transition-colors"
                        placeholder="你的名字"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-industrialGray/80 mb-2">
                        公司
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B1C2D] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-amberGold/50 transition-colors"
                        placeholder="公司名称"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-industrialGray/80 mb-2">
                        邮箱 <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B1C2D] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-amberGold/50 transition-colors"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-industrialGray/80 mb-2">
                        电话
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B1C2D] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-amberGold/50 transition-colors"
                        placeholder="你的电话号码"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-industrialGray/80 mb-2">
                        需求描述 <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#0B1C2D] border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-amberGold/50 transition-colors resize-none"
                        placeholder="请描述你的需求..."
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-amberGold text-deepBlue font-semibold rounded-lg hover:bg-amberGold/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-deepBlue/30 border-t-deepBlue rounded-full animate-spin" />
                          <span>发送中...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>发送消息</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Privacy Note */}
                  <p className="text-xs text-industrialGray/40 text-center mt-6">
                    提交表单即表示你同意我们的隐私政策
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
