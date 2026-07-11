'use client'

import { useState } from 'react'
import { AlertCircle, Send } from 'lucide-react'

type QuoteFormData = {
  name: string
  company: string
  contact: string
  email: string
  origin: string
  destination: string
  cargoName: string
  cargoType: string
  pieces: string
  dimensions: string
  grossWeight: string
  readyDate: string
  requiredArrival: string
  notes: string
}

const initialFormData: QuoteFormData = {
  name: '',
  company: '',
  contact: '',
  email: '',
  origin: '',
  destination: '',
  cargoName: '',
  cargoType: '超大件/项目货',
  pieces: '',
  dimensions: '',
  grossWeight: '',
  readyDate: '',
  requiredArrival: '',
  notes: '',
}

const inputClassName =
  'mt-2 h-12 w-full rounded-md border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amberGold focus:ring-2 focus:ring-amberGold/20 disabled:bg-slate-100'

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setError('')

    const query = new URLSearchParams(window.location.search)
    const source = (query.get('source') || 'direct').slice(0, 100)
    const topic = (query.get('topic') || '').slice(0, 140)

    try {
      const response = await fetch('https://formspree.io/f/mqegzyby', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `[EASCargo RFQ] ${formData.origin} -> ${formData.destination} | ${formData.cargoName}`,
          _source: source,
          _topic: topic,
          _page: window.location.pathname,
          _gotcha: '',
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || '提交失败，请稍后重试或改用邮件、微信联系。')
      }

      window.location.assign('/thank-you/')
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : '网络连接失败，请稍后重试或改用邮件、微信联系。'
      )
      setIsSubmitting(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
    >
      <div className="border-b border-slate-200 pb-5">
        <p className="text-sm font-bold text-amber-700">Shipment-specific RFQ</p>
        <h2 className="mt-2 text-2xl font-black text-slate-950">提交逐票询价资料</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          带 <span className="font-bold text-red-700">*</span> 的项目用于判断货物能否装载、路线是否成立和报价口径是否完整。
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-700">
          姓名 <span className="text-red-700">*</span>
          <input
            className={inputClassName}
            name="name"
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
            required
            disabled={isSubmitting}
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          公司
          <input
            className={inputClassName}
            name="company"
            value={formData.company}
            onChange={handleChange}
            autoComplete="organization"
            disabled={isSubmitting}
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          微信 / WhatsApp / 电话 <span className="text-red-700">*</span>
          <input
            className={inputClassName}
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="请写明使用哪种联系方式"
            required
            disabled={isSubmitting}
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          邮箱
          <input
            className={inputClassName}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            placeholder="用于接收路线和报价回复"
            disabled={isSubmitting}
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          货物所在地 / 起运城市 <span className="text-red-700">*</span>
          <input
            className={inputClassName}
            name="origin"
            value={formData.origin}
            onChange={handleChange}
            placeholder="例如：上海、深圳、MLE、SIN"
            required
            disabled={isSubmitting}
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          目的机场 + 最终城市 <span className="text-red-700">*</span>
          <input
            className={inputClassName}
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            placeholder="例如：FBM + Kolwezi 矿区"
            required
            disabled={isSubmitting}
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          具体品名 <span className="text-red-700">*</span>
          <input
            className={inputClassName}
            name="cargoName"
            value={formData.cargoName}
            onChange={handleChange}
            placeholder="不要只写 equipment / parts"
            required
            disabled={isSubmitting}
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          货物类型 <span className="text-red-700">*</span>
          <select
            className={inputClassName}
            name="cargoType"
            value={formData.cargoType}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          >
            <option>超大件/项目货</option>
            <option>矿业/油气/能源急件</option>
            <option>普通工业货</option>
            <option>带电设备</option>
            <option>危险品/化工品</option>
            <option>温控货</option>
            <option>其他需预审货物</option>
          </select>
        </label>

        <label className="text-sm font-bold text-slate-700">
          件数 <span className="text-red-700">*</span>
          <input
            className={inputClassName}
            name="pieces"
            value={formData.pieces}
            onChange={handleChange}
            placeholder="例如：3件"
            required
            disabled={isSubmitting}
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          总毛重 <span className="text-red-700">*</span>
          <input
            className={inputClassName}
            name="grossWeight"
            value={formData.grossWeight}
            onChange={handleChange}
            placeholder="例如：4,850 kg"
            required
            disabled={isSubmitting}
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-bold text-slate-700">
        每件长 × 宽 × 高 + 单件毛重 <span className="text-red-700">*</span>
        <textarea
          className="mt-2 min-h-28 w-full resize-y rounded-md border border-slate-300 bg-white px-4 py-3 text-base leading-7 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amberGold focus:ring-2 focus:ring-amberGold/20 disabled:bg-slate-100"
          name="dimensions"
          value={formData.dimensions}
          onChange={handleChange}
          placeholder={'例如：\n1件 320 × 180 × 195 cm / 2,400 kg\n2件 210 × 160 × 150 cm / 1,225 kg/件'}
          required
          disabled={isSubmitting}
        />
      </label>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-bold text-slate-700">
          货好日期
          <input
            className={inputClassName}
            type="date"
            name="readyDate"
            value={formData.readyDate}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </label>

        <label className="text-sm font-bold text-slate-700">
          最晚要求到达日期
          <input
            className={inputClassName}
            type="date"
            name="requiredArrival"
            value={formData.requiredArrival}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-bold text-slate-700">
        包装、货物属性和交付要求
        <textarea
          className="mt-2 min-h-32 w-full resize-y rounded-md border border-slate-300 bg-white px-4 py-3 text-base leading-7 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-amberGold focus:ring-2 focus:ring-amberGold/20 disabled:bg-slate-100"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="可补充 HS Code、包装照片情况、是否带电/危险品/温控、是否可叠放、吊点重心、进口商资料、清关和最终交付责任。"
          disabled={isSubmitting}
        />
      </label>

      {error && (
        <div className="mt-5 flex gap-3 rounded-md border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-800" role="alert">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        aria-busy={isSubmitting}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-amberGold px-6 font-black text-slate-950 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Send className="h-5 w-5" aria-hidden="true" />
        {isSubmitting ? '正在提交...' : '提交逐票询价'}
      </button>

      <p className="mt-4 text-xs leading-6 text-slate-500">
        请不要提交密码、支付信息或与本票运输无关的敏感资料。包装照片、装箱单和发票可在建立联系后通过邮件或微信补充。
      </p>
    </form>
  )
}
