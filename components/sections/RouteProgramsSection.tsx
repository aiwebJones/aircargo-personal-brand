import Link from 'next/link'
import { ArrowRight, Route } from 'lucide-react'

export default function RouteProgramsSection() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('/case-17t-1.jpg')" }}
    >
      <div className="absolute inset-0 bg-emerald-950/90" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase text-amberGold">
              <Route className="h-5 w-5" />
              当前航线项目
            </div>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">MLE / SIN / MNL 经 ADD 至非洲</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
              马尔代夫、新加坡、菲律宾起运价格有时明显优于中国直出。先比较全程总成本，再核对二程机型、清关和最终交付。
            </p>
          </div>
          <div>
            <div className="flex flex-wrap gap-2 text-sm font-bold text-emerald-50">
              {['CMN', 'ALG', 'TUN', 'ADD', 'CKY', 'OUA', 'EBB', 'HAH', 'NBJ', 'BKO'].map((code) => (
                <span key={code} className="rounded border border-white/20 bg-emerald-950/65 px-3 py-2">{code}</span>
              ))}
            </div>
            <Link href="/route-programs/et-asia-africa-via-add/" className="mt-6 inline-flex min-h-12 items-center gap-2 rounded bg-amberGold px-5 font-black text-slate-950 transition hover:bg-white">
              查看项目方案
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
