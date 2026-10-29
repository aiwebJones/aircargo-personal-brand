import Link from 'next/link'

type ArticleFeasibilityCtaProps = {
  lang: 'zh' | 'en'
  summary?: string
  placement: 'top' | 'end'
}

export default function ArticleFeasibilityCta({ lang, summary, placement }: ArticleFeasibilityCtaProps) {
  const zh = lang === 'zh'
  const href = zh ? '/quote/?source=article-feasibility' : '/en/quote/?source=article-feasibility'
  const label = zh ? '把尺寸发来做可行性判断' : 'Send dimensions for a feasibility check'

  if (placement === 'end') {
    return (
      <section className="rounded-lg bg-emerald-800 p-7 text-white shadow-sm">
        <h2 className="text-2xl font-black">{label}</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-emerald-50">
          {zh
            ? '写下单件长宽高、毛重和目的地。Jones 先判断能不能装、走哪条路，再谈价格。'
            : 'Send length, width, height, gross weight and the destination. Jones checks whether it can load and which route works before talking about a rate.'}
        </p>
        <Link href={href} className="mt-5 inline-flex min-h-12 items-center rounded-md bg-white px-5 font-semibold text-emerald-900 hover:bg-emerald-50">
          {label}
        </Link>
      </section>
    )
  }

  return (
    <aside className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-zinc-900">
      <p className="text-sm font-semibold text-emerald-800">{zh ? '先看结论' : 'Answer first'}</p>
      {summary && <p className="mt-3 text-base leading-7 text-zinc-800">{summary}</p>}
      <Link href={href} className="mt-4 inline-flex min-h-11 items-center rounded-md bg-emerald-800 px-4 text-sm font-semibold text-white hover:bg-emerald-900">
        {label}
      </Link>
    </aside>
  )
}
