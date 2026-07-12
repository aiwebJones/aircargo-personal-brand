import Link from 'next/link'
import { ArrowRight, CheckCircle2, Route, ShieldCheck } from 'lucide-react'
import { publicCaseRecords } from '@/lib/public-case-records'

export default function CasesSection() {
  return (
    <section id="cases" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm font-bold text-amber-700">公开项目记录</p>
          <h2 className="mt-3 text-3xl font-black text-textPrimary md:text-4xl">
            只展示当前公开资料能支持的事实。
          </h2>
          <p className="mt-5 text-lg leading-8 text-textSecondary">
            已完成非洲项目与历史装载记录分开标注。历史重量、机型和路线用于说明判断经验，
            不代表当前舱位、班期、价格或时效。
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {publicCaseRecords.map((record) => (
            <article key={record.id} className="overflow-hidden rounded-lg border border-borderLight bg-white">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img src={record.image} alt={record.imageAltZh} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-black text-amber-700">{record.statusZh}</p>
                <h3 className="mt-3 text-xl font-black leading-7 text-textPrimary">{record.titleZh}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-textMuted">
                  <Route className="h-4 w-4 shrink-0 text-amberGold" aria-hidden="true" />
                  {record.route}
                </p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-textSecondary">
                  {record.factsZh.slice(0, 2).map((fact) => (
                    <li key={fact} className="flex gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amberGold" aria-hidden="true" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-borderLight pt-5 text-sm leading-7 text-textSecondary">
                  {record.outcomeZh}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-borderLight pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3 text-sm leading-7 text-textSecondary">
            <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-amberGold" aria-hidden="true" />
            <p>报价仍需按当票尺寸、货好时间、承运条件、清关和最终交付逐项确认。</p>
          </div>
          <Link
            href="/cases/"
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
          >
            查看项目记录
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
