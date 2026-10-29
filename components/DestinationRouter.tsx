'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { destinationHref, destinationLabel, destinations } from '@/lib/destinations'

export default function DestinationRouter({ lang }: { lang: 'zh' | 'en' }) {
  const zh = lang === 'zh'
  const [code, setCode] = useState('JNB')
  const selected = destinations.find((destination) => destination.code === code) ?? destinations[0]

  return (
    <section aria-labelledby="destination-router-heading" className="pb-9 sm:pb-12">
      <h2 id="destination-router-heading" className="text-lg font-semibold">
        {zh ? '超大件要运到哪里？' : 'Where are you shipping oversized cargo?'}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-500">
        {zh
          ? '选国家和机场，打开那一页。下一页顶栏就是询价。'
          : 'Choose the country and airport. The next page has the quote button in the header.'}
      </p>
      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault()
          window.location.assign(destinationHref(selected, lang))
        }}
      >
        <label className="sr-only" htmlFor="destination-router">
          {zh ? '目的地机场' : 'Destination airport'}
        </label>
        <select
          id="destination-router"
          value={code}
          onChange={(event) => setCode(event.target.value)}
          className="h-12 min-w-0 flex-1 rounded-md border border-zinc-300 bg-white px-3 text-base text-zinc-900"
        >
          {destinations.map((destination) => (
            <option key={destination.code} value={destination.code}>
              {destinationLabel(destination, lang)}
            </option>
          ))}
        </select>
        <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-emerald-800 px-5 text-sm font-semibold text-white hover:bg-emerald-900">
          {zh ? '打开这个机场' : 'Open this airport'}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </section>
  )
}
