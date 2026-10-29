'use client'

import { useEffect, useMemo, useState } from 'react'
import { Send } from 'lucide-react'
import { buildThankYouUrl, captureAttribution } from '@/lib/attribution'
import { contactChannels, quoteMailto } from '@/lib/contact'

type ShortQuoteFormProps = {
  lang: 'zh' | 'en'
  initialDestination?: string
}

const fieldClass =
  'mt-2 h-12 w-full rounded-md border border-zinc-300 bg-white px-3 text-base text-zinc-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15'

export default function ShortQuoteForm({ lang, initialDestination = '' }: ShortQuoteFormProps) {
  const zh = lang === 'zh'
  const [dimensions, setDimensions] = useState('')
  const [weight, setWeight] = useState('')
  const [destination, setDestination] = useState(initialDestination)
  const [contact, setContact] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get('destination')
    if (preset) setDestination((current) => current || preset)
  }, [])

  const mailtoHref = useMemo(() => {
    const subject = zh ? '超大件可行性判断' : 'Oversized cargo feasibility check'
    const body = [
      zh ? '单件尺寸' : 'Dimensions',
      dimensions,
      '',
      zh ? '毛重 kg' : 'Gross weight kg',
      weight,
      '',
      zh ? '目的地' : 'Destination',
      destination,
      '',
      zh ? '联系方式' : 'Contact',
      contact,
    ].join('\n')
    return quoteMailto(body, subject)
  }, [zh, dimensions, weight, destination, contact])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return
    if (!dimensions.trim() || !weight.trim() || !destination.trim() || !contact.trim()) {
      setError(zh ? '请填写尺寸、重量、目的地和联系方式。' : 'Enter dimensions, weight, destination and a contact.')
      return
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
          dimensions,
          grossWeight: weight,
          destination,
          contact,
          _subject: `[EASCargo feasibility] ${destination} | ${weight} kg`,
          formType: 'short-feasibility',
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
        throw new Error(data?.error || (zh ? '提交没有成功。请改用下面的邮件。' : 'The form did not send. Use the email link below.'))
      }

      window.location.assign(buildThankYouUrl(attribution, 'short-feasibility'))
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : zh ? '网络没有连上。请改用邮件。' : 'The network failed. Use the email link.')
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm sm:p-7" aria-labelledby="short-quote-title">
      <h1 id="short-quote-title" className="text-2xl font-bold text-zinc-950">
        {zh ? '把尺寸发来，做可行性判断' : 'Send dimensions for a feasibility check'}
      </h1>
      <p className="mt-2 text-sm leading-6 text-zinc-600">
        {zh
          ? '四项就够开始：尺寸、重量、目的地、联系方式。这不是运价承诺。Jones 按当票回复。'
          : 'Four fields start the check: dimensions, weight, destination and how to reach you. This is not a rate promise. Jones replies on the shipment.'}
      </p>
      <fieldset disabled={isSubmitting} className="mt-6 grid gap-4">
        <label className="text-sm font-medium text-zinc-900">
          {zh ? '单件尺寸（长 × 宽 × 高）' : 'Dimensions (L × W × H)'}
          <input name="dimensions" required maxLength={300} className={fieldClass} value={dimensions} onChange={(event) => setDimensions(event.target.value)} placeholder="320 x 180 x 195 cm" />
        </label>
        <label className="text-sm font-medium text-zinc-900">
          {zh ? '毛重（kg）' : 'Gross weight (kg)'}
          <input name="grossWeight" required type="number" inputMode="decimal" min="0.01" max="10000000" step="0.01" className={fieldClass} value={weight} onChange={(event) => setWeight(event.target.value)} placeholder="2400" />
        </label>
        <label className="text-sm font-medium text-zinc-900">
          {zh ? '目的地机场或城市' : 'Destination airport or city'}
          <input name="destination" required maxLength={120} className={fieldClass} value={destination} onChange={(event) => setDestination(event.target.value)} placeholder={zh ? '例如 JNB 或卢本巴希矿区' : 'e.g. JNB or a Lubumbashi mine'} />
        </label>
        <label className="text-sm font-medium text-zinc-900">
          {zh ? '联系方式（微信 / 电话 / 邮箱）' : 'Contact (WeChat, phone or email)'}
          <input name="contact" required maxLength={200} autoComplete="email" className={fieldClass} value={contact} onChange={(event) => setContact(event.target.value)} placeholder={zh ? '微信、手机或邮箱' : 'WeChat, phone or email'} />
        </label>
        {error && <p role="alert" className="text-sm leading-6 text-red-700">{error}</p>}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-emerald-800 px-6 font-semibold text-white hover:bg-emerald-900 disabled:opacity-60">
            <Send className="h-4 w-4" aria-hidden="true" />
            {isSubmitting ? (zh ? '正在发送...' : 'Sending...') : zh ? '发送给 Jones' : 'Send to Jones'}
          </button>
          <a href={mailtoHref} className="text-sm font-medium text-emerald-800 underline-offset-4 hover:underline">
            {zh ? `或发邮件到 ${contactChannels.email}` : `Or email ${contactChannels.email}`}
          </a>
        </div>
      </fieldset>
    </form>
  )
}
