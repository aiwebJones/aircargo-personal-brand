'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, CheckCircle } from 'lucide-react'

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Send to email
    const mailtoLink = `mailto:globegsa@Gmail.com?subject=网站联系表单 - ${formData.name}&body=姓名: ${formData.name}%0A公司: ${formData.company}%0A邮箱: ${formData.email}%0A电话: ${formData.phone}%0A%0A需求描述:%0A${formData.message}`
    window.location.href = mailtoLink
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', company: '', email: '', phone: '', message: '' })
      onClose()
    }, 2000)
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
                    简单介绍一下你的需求，我会尽快回复
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-industrialGray/70 mb-2">
                          姓名 *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-industrialGray/30 focus:border-amberGold/50 focus:outline-none transition-colors"
                          placeholder="你的名字"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-industrialGray/70 mb-2">
                          公司
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-industrialGray/30 focus:border-amberGold/50 focus:outline-none transition-colors"
                          placeholder="公司名称"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-industrialGray/70 mb-2">
                          邮箱 *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-industrialGray/30 focus:border-amberGold/50 focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-industrialGray/70 mb-2">
                          电话
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-industrialGray/30 focus:border-amberGold/50 focus:outline-none transition-colors"
                          placeholder="联系电话"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-industrialGray/70 mb-2">
                        需求描述 *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-industrialGray/30 focus:border-amberGold/50 focus:outline-none transition-colors resize-none"
                        placeholder="简要描述你的空运需求或问题..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-amberGold text-deepBlue font-medium hover:bg-amberGold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-deepBlue/30 border-t-deepBlue rounded-full animate-spin" />
                          发送中...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          发送消息
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
