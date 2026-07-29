import Link from 'next/link'
import { ArrowUpRight, Bot, CheckCircle2 } from 'lucide-react'
import QuoteOrchestrationAgent from '@/components/QuoteOrchestrationAgent'

const agentBenefits = [
  '整理起运地、目的地、件数、尺寸和重量',
  '初算体积、体积重和计费重',
  '核对装载、路线、文件和最终交付',
]

export default function HomeQuoteAgentSection() {
  return (
    <section id="quote-agent" className="scroll-mt-16 border-y border-slate-200 bg-slate-50 py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
              <Bot className="h-5 w-5" aria-hidden="true" />
              首页直接询价
            </div>
            <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
              EASCARGO 询价 Agent
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              把一票货先整理成可执行 RFQ，再确认提交。Agent 不承诺未经核实的实时运价、舱位或时效。
            </p>
            <div className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-3">
              {agentBenefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/tools/africa-project-cargo-rfq/?source=home-agent-full-page"
            className="inline-flex min-h-11 items-center justify-center gap-2 text-sm font-bold text-slate-700 hover:text-emerald-700"
          >
            打开完整询价页
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <QuoteOrchestrationAgent />
      </div>
    </section>
  )
}
