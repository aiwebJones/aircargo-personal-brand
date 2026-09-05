'use client'

import { useEffect, useRef, useState } from 'react'
import { AlertCircle, ArrowRight, ChevronDown, Send } from 'lucide-react'
import { buildThankYouUrl, captureAttribution } from '@/lib/attribution'

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

export default function QuoteForm({ compact = false, lang = 'zh' }: { compact?: boolean; lang?: 'zh' | 'en' }) {
  const [formData, setFormData] = useState<QuoteFormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [showContact, setShowContact] = useState(false)
  const contactRef = useRef<HTMLInputElement>(null)
  const zh = lang === 'zh'

  useEffect(() => {
    if (showContact) contactRef.current?.focus()
  }, [showContact])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return
    if (compact) {
      if (!formData.origin.trim() || !formData.destination.trim()) {
        setError(zh ? '请填写起运地和目的地。' : 'Enter an origin and destination.')
        return
      }
      if (!showContact) {
        setError('')
        setShowContact(true)
        return
      }
      if (!formData.contact.trim() || !formData.cargoName.trim()) {
        setError(zh ? '请填写联系方式和具体品名。' : 'Enter your contact details and commodity.')
        return
      }
    }
    setIsSubmitting(true)
    setError('')

    const attribution = captureAttribution()

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
          formType: 'detailed-rfq',
          ctaSource: attribution.ctaSource,
          firstSource: attribution.firstSource,
          topic: attribution.topic,
          utmMedium: attribution.medium,
          utmCampaign: attribution.campaign,
          utmTerm: attribution.term,
          utmContent: attribution.content,
          landingPage: attribution.landingPage,
          submissionPage: `${window.location.pathname}${window.location.search}`,
          externalReferrer: attribution.referrer,
          _source: attribution.ctaSource,
          _gotcha: '',
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || '提交失败，请稍后重试或改用邮件、微信联系。')
      }

      window.location.assign(buildThankYouUrl(attribution, 'detailed-rfq'))
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : '网络连接失败，请稍后重试或改用邮件、微信联系。'
      )
      setIsSubmitting(false)
    }
  }

  if (compact) {
    const fieldClass = 'mt-2 h-12 w-full min-w-0 rounded-md border border-zinc-300 bg-white px-3 text-base font-normal text-zinc-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15 disabled:bg-zinc-100'
    return (
      <form onSubmit={handleSubmit} className="rounded-lg border border-zinc-200 bg-zinc-50 p-5 sm:p-7" aria-labelledby="quick-quote-title">
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
          <h2 id="quick-quote-title" className="text-2xl font-semibold">{zh ? '空运询价' : 'Get an air freight quote'}</h2>
          <p className="text-sm text-zinc-500">{zh ? '逐票核价，人工回复' : 'Shipment-specific pricing, personal reply'}</p>
        </div>
        <fieldset disabled={isSubmitting} className="min-w-0">
          <div className="grid min-w-0 grid-cols-1 gap-x-4 gap-y-5 min-[360px]:grid-cols-2 lg:grid-cols-4">
            <label className="min-w-0 text-sm font-medium">{zh ? '起运地' : 'Origin'}
              <input name="origin" className={fieldClass} value={formData.origin} onChange={handleChange} placeholder={zh ? '城市 / 机场' : 'City / IATA'} required maxLength={100} />
            </label>
            <label className="min-w-0 text-sm font-medium">{zh ? '目的地' : 'Destination'}
              <input name="destination" className={fieldClass} value={formData.destination} onChange={handleChange} placeholder={zh ? '城市 / 机场' : 'City / IATA'} required maxLength={100} />
            </label>
            <label className="min-w-0 text-sm font-medium">{zh ? '总毛重（kg）' : 'Weight (kg)'}
              <input name="grossWeight" className={fieldClass} value={formData.grossWeight} onChange={handleChange} type="number" inputMode="decimal" placeholder="500" required min="0.01" max="10000000" step="0.01" />
            </label>
            <label className="min-w-0 text-sm font-medium">{zh ? '货物类型' : 'Cargo type'}
              <select name="cargoType" className={fieldClass} value={formData.cargoType} onChange={handleChange}>
                <option value="超大件/项目货">{zh ? '大件项目货' : 'Oversized'}</option>
                <option value="普通工业货">{zh ? '普通货物' : 'General'}</option>
                <option value="矿业/油气/能源急件">{zh ? '工业急件' : 'Urgent'}</option>
                <option value="带电设备">{zh ? '带电设备' : 'Batteries'}</option>
                <option value="危险品/化工品">{zh ? '危险品' : 'DG cargo'}</option>
                <option value="包机">{zh ? '包机' : 'Charter'}</option>
              </select>
            </label>
          </div>
          {showContact && (
            <div className="mt-6 border-t border-zinc-200 pt-5">
              <h3 className="font-semibold">{zh ? '接收报价' : 'Receive your quote'}</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="min-w-0 text-sm font-medium">{zh ? '微信 / 手机 / 邮箱' : 'WeChat / phone / email'}
                  <input ref={contactRef} name="contact" className={fieldClass} value={formData.contact} onChange={handleChange} required maxLength={200} autoComplete="off" />
                </label>
                <label className="min-w-0 text-sm font-medium">{zh ? '具体品名' : 'Commodity'}
                  <input name="cargoName" className={fieldClass} value={formData.cargoName} onChange={handleChange} required maxLength={160} placeholder={zh ? '例如：矿山电机' : 'e.g. mining motor'} />
                </label>
              </div>
              <details className="mt-5">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-sm text-zinc-600"><ChevronDown className="h-4 w-4 shrink-0" aria-hidden="true" />{zh ? '件数、尺寸与货好时间（选填）' : 'Pieces, dimensions and ready date (optional)'}</summary>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <label className="min-w-0 text-sm font-medium">{zh ? '件数' : 'Pieces'}<input name="pieces" type="number" min="1" step="1" className={fieldClass} value={formData.pieces} onChange={handleChange} /></label>
                  <label className="min-w-0 text-sm font-medium">{zh ? '货好日期' : 'Cargo ready date'}<input name="readyDate" type="date" className={fieldClass} value={formData.readyDate} onChange={handleChange} /></label>
                  <label className="min-w-0 text-sm font-medium sm:col-span-2">{zh ? '单件尺寸与重量' : 'Dimensions and weight per piece'}<textarea name="dimensions" maxLength={3000} className={`${fieldClass} h-24 resize-y py-3`} value={formData.dimensions} onChange={handleChange} placeholder="320 x 180 x 195 cm / 2,400 kg" /></label>
                </div>
              </details>
            </div>
          )}
          {error && <p role="alert" className="mt-4 text-sm leading-6 text-red-700">{zh ? error : 'Please check your details or contact Jones if submission fails.'}</p>}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <button type="submit" aria-busy={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-emerald-800 px-7 font-semibold text-white hover:bg-emerald-900 disabled:opacity-60 sm:w-auto">
              {showContact ? <Send className="h-4 w-4" aria-hidden="true" /> : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
              {isSubmitting ? (zh ? '正在提交...' : 'Sending...') : showContact ? (zh ? '提交询价' : 'Send quote request') : (zh ? '获取报价' : 'Get a quote')}
            </button>
            <a href="#contact" className="inline-flex min-h-10 items-center text-sm text-zinc-600 underline-offset-4 hover:underline">{zh ? '直接联系 Jones' : 'Contact Jones directly'}</a>
          </div>
        </fieldset>
      </form>
    )
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
