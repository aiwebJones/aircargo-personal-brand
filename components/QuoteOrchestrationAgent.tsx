'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  AlertCircle,
  Bot,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Loader2,
  Plane,
  RefreshCcw,
  Route,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { buildThankYouUrl, captureAttribution } from '@/lib/attribution'
import {
  buildQuoteAgentPlan,
  extractProjectFromBrief,
  initialQuoteAgentProject,
  quoteCapabilities,
  type QuoteAgentPlan,
  type QuoteAgentProject,
} from '@/lib/quote-agent'

const DRAFT_KEY = 'eascargo_quote_agent_draft_v1'
const SUBMITTED_RUN_KEY = 'eascargo_quote_agent_submitted_run_v1'

const fieldClass =
  'mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

function formatNumber(value: number | null, suffix: string) {
  if (value === null) return '待计算'
  return `${new Intl.NumberFormat('zh-CN', { maximumFractionDigits: 2 }).format(value)} ${suffix}`
}

export default function QuoteOrchestrationAgent() {
  const [project, setProject] = useState<QuoteAgentProject>(initialQuoteAgentProject)
  const [revision, setRevision] = useState(1)
  const [plan, setPlan] = useState<QuoteAgentPlan | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [extractionMessage, setExtractionMessage] = useState('')
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [submitError, setSubmitError] = useState('')
  const [submittedRunId, setSubmittedRunId] = useState('')
  const submittingRunRef = useRef('')

  useEffect(() => {
    try {
      const stored = window.sessionStorage.getItem(DRAFT_KEY)
      if (stored) {
        const parsed = JSON.parse(stored) as { project?: QuoteAgentProject; revision?: number }
        if (parsed.project) setProject({ ...initialQuoteAgentProject, ...parsed.project })
        if (parsed.revision) setRevision(parsed.revision)
      }
      setSubmittedRunId(window.sessionStorage.getItem(SUBMITTED_RUN_KEY) || '')
    } catch {
      // A blocked storage API must not prevent the inquiry workflow.
    } finally {
      setLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify({ project, revision }))
    } catch {
      // The Agent remains usable without browser storage.
    }
  }, [loaded, project, revision])

  const planIsStale = Boolean(plan && plan.projectRevision !== revision)
  const canSubmit = Boolean(plan && !planIsStale && plan.missingFields.length === 0 && submitState !== 'submitting')
  const capabilityById = useMemo(
    () => new Map(quoteCapabilities.map((capability) => [capability.id, capability])),
    [],
  )

  const updateField = (key: keyof QuoteAgentProject, value: string) => {
    setProject((current) => ({ ...current, [key]: value }))
    setRevision((current) => current + 1)
    setSubmitState('idle')
    setSubmitError('')
    submittingRunRef.current = ''
  }

  const organizeBrief = () => {
    const extraction = extractProjectFromBrief(project)
    setProject(extraction.project)
    setRevision((current) => current + 1)
    setExtractionMessage(
      extraction.extracted.length
        ? `已识别：${extraction.extracted.join('、')}。请核对后生成计划。`
        : '没有识别到可靠字段，请在下方补充起运地、目的港、件数、尺寸和重量。',
    )
  }

  const generatePlan = () => {
    const nextPlan = buildQuoteAgentPlan(project, revision)
    setPlan(nextPlan)
    setSubmitState('idle')
    setSubmitError('')
    window.setTimeout(() => document.getElementById('quote-agent-plan')?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  const clearDraft = () => {
    setProject(initialQuoteAgentProject)
    setRevision((current) => current + 1)
    setPlan(null)
    setExtractionMessage('')
    setSubmitState('idle')
    setSubmitError('')
    try {
      window.sessionStorage.removeItem(DRAFT_KEY)
    } catch {
      // No action required when storage is unavailable.
    }
  }

  const submitPlan = async () => {
    if (!plan || !canSubmit) return
    if (submittingRunRef.current === plan.id) return
    if (submittedRunId === plan.id) {
      setSubmitState('success')
      return
    }

    submittingRunRef.current = plan.id
    setSubmitState('submitting')
    setSubmitError('')
    const attribution = captureAttribution()

    try {
      const response = await fetch('https://formspree.io/f/mqegzyby', {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...project,
          agentRunId: plan.id,
          agentPlanVersion: plan.projectRevision,
          agentRfqPreview: plan.rfqText,
          preliminaryChargeableWeightKg: plan.measurement.chargeableWeightKg,
          preliminaryCbm: plan.measurement.totalCbm,
          routeJudgment: plan.routeJudgment.join('\n'),
          documentChecks: plan.documentChecks.join('\n'),
          _subject: `[EASCargo Agent RFQ] ${project.origin} -> ${project.destination} | ${project.cargoName}`,
          formType: 'quote-orchestration-agent',
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
        throw new Error(data?.error || '询价服务没有确认接收，请稍后重试。')
      }

      try {
        window.sessionStorage.setItem(SUBMITTED_RUN_KEY, plan.id)
      } catch {
        // The success state still prevents another click in the current render.
      }
      setSubmittedRunId(plan.id)
      setSubmitState('success')
      window.setTimeout(() => {
        window.location.assign(buildThankYouUrl(attribution, 'quote-orchestration-agent'))
      }, 900)
    } catch (error) {
      submittingRunRef.current = ''
      setSubmitState('error')
      setSubmitError(error instanceof Error ? error.message : '网络连接失败，请稍后重试。')
    }
  }

  return (
    <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm" aria-labelledby="quote-agent-title">
      <header className="bg-slate-950 px-5 py-6 text-white sm:px-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex max-w-2xl items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-emerald-700">
              <Bot className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-300">EASCargo Quote Agent</p>
              <h2 id="quote-agent-title" className="mt-1 text-2xl font-black">项目货询价编排 Agent</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                整理货物资料、计算初步计费重、检查路线与文件，再由你确认一次后提交。不会生成未经确认的实时运价、舱位或时效。
              </p>
            </div>
          </div>
          <div className="rounded-md border border-white/15 px-3 py-2 text-xs font-bold text-slate-300">
            项目版本 v{revision}
          </div>
        </div>
      </header>

      <div className="p-5 sm:p-7">
        <div className="rounded-md border border-emerald-200 bg-emerald-50 p-4">
          <label className="text-sm font-black text-slate-950" htmlFor="agent-brief">先用一句话描述这票货</label>
          <textarea
            id="agent-brief"
            value={project.brief}
            onChange={(event) => updateField('brief', event.target.value)}
            className="mt-3 min-h-28 w-full resize-y rounded-md border border-emerald-200 bg-white px-4 py-3 text-base leading-7 text-slate-950 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
            placeholder="例如：上海出发到 JNB，3件矿业设备，单件 320×180×195cm，总重 4,850kg，8月20日货好，需要送到约翰内斯堡项目现场。"
          />
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={organizeBrief}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-emerald-700 px-4 text-sm font-bold text-white hover:bg-emerald-800"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              让 Agent 整理
            </button>
            {extractionMessage ? <p className="text-sm leading-6 text-emerald-900">{extractionMessage}</p> : null}
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <TextField label="货物所在地 / 起运城市" value={project.origin} onChange={(value) => updateField('origin', value)} placeholder="上海、深圳、郑州、MLE、SIN..." />
          <TextField label="目的机场 + 最终城市" value={project.destination} onChange={(value) => updateField('destination', value)} placeholder="JNB + 项目现场" />
          <TextField label="具体品名" value={project.cargoName} onChange={(value) => updateField('cargoName', value)} placeholder="矿山电机、钻机部件、变压器..." />
          <label className="text-sm font-bold text-slate-700">
            货物类型
            <select className={fieldClass} value={project.cargoType} onChange={(event) => updateField('cargoType', event.target.value)}>
              <option>超大件/项目货</option>
              <option>矿业/油气/能源急件</option>
              <option>普通工业货</option>
              <option>带电设备</option>
              <option>危险品/化工品</option>
              <option>温控货</option>
              <option>其他需预审货物</option>
            </select>
          </label>
          <TextField label="件数" value={project.pieces} onChange={(value) => updateField('pieces', value)} placeholder="3" inputMode="numeric" />
          <TextField label="总毛重" value={project.grossWeight} onChange={(value) => updateField('grossWeight', value)} placeholder="4,850 kg" />
        </div>

        <label className="mt-4 block text-sm font-bold text-slate-700">
          每件尺寸（长 × 宽 × 高）
          <textarea className={`${fieldClass} min-h-24 py-3`} value={project.dimensions} onChange={(event) => updateField('dimensions', event.target.value)} placeholder="320 × 180 × 195 cm；如尺寸不同，请逐件列出并在备注说明" />
        </label>

        <details className="mt-5 border-y border-slate-200 py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-black text-slate-950">
            联系方式、日期和特殊要求
            <ChevronDown className="h-5 w-5 text-slate-500" aria-hidden="true" />
          </summary>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <TextField label="联系人姓名" value={project.name} onChange={(value) => updateField('name', value)} autoComplete="name" />
            <TextField label="公司" value={project.company} onChange={(value) => updateField('company', value)} autoComplete="organization" />
            <TextField label="微信 / WhatsApp / 电话" value={project.contact} onChange={(value) => updateField('contact', value)} autoComplete="tel" />
            <TextField label="邮箱" value={project.email} onChange={(value) => updateField('email', value)} type="email" autoComplete="email" />
            <TextField label="货好日期" value={project.readyDate} onChange={(value) => updateField('readyDate', value)} type="date" />
            <TextField label="最晚要求到达日期" value={project.requiredArrival} onChange={(value) => updateField('requiredArrival', value)} type="date" />
          </div>
          <label className="mt-4 block text-sm font-bold text-slate-700">
            包装、货物属性和最终交付要求
            <textarea className={`${fieldClass} min-h-28 py-3`} value={project.notes} onChange={(event) => updateField('notes', event.target.value)} placeholder="木箱/裸装、是否可叠放、带电/危险品、是否需要清关、卡车和现场卸货..." />
          </label>
        </details>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={generatePlan}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-md bg-slate-950 px-5 font-black text-white hover:bg-slate-800 sm:flex-none"
          >
            <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
            生成 dry-run 执行计划
          </button>
          <button type="button" onClick={clearDraft} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-slate-300 px-4 text-sm font-bold text-slate-700 hover:border-slate-950">
            <RefreshCcw className="h-4 w-4" aria-hidden="true" />
            清空草稿
          </button>
        </div>

        {plan ? (
          <div id="quote-agent-plan" className="mt-8 border-t-4 border-emerald-700 pt-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-emerald-700">Dry-run preview</p>
                <h3 className="mt-1 text-2xl font-black text-slate-950">执行计划与询价预览</h3>
              </div>
              <span className="rounded-md bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600">Run {plan.id.slice(0, 8)}</span>
            </div>

            {planIsStale ? (
              <div className="mt-5 flex items-start gap-3 rounded-md border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                资料已在计划生成后修改。旧计划已锁定，重新生成后才能确认提交。
              </div>
            ) : null}

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Metric label="总体积" value={formatNumber(plan.measurement.totalCbm, 'CBM')} />
              <Metric label="体积重 /6000" value={formatNumber(plan.measurement.volumetricWeightKg, 'kg')} />
              <Metric label="初步计费重" value={formatNumber(plan.measurement.chargeableWeightKg, 'kg')} />
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="space-y-3">
                {plan.steps.map((step, index) => {
                  const capability = capabilityById.get(step.capabilityId)
                  const needsInput = step.status === 'needs-input'
                  const approval = step.status === 'approval-required'
                  return (
                    <div key={step.capabilityId} className="flex gap-3 rounded-md border border-slate-200 p-4">
                      <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-black ${needsInput ? 'bg-amber-100 text-amber-800' : approval ? 'bg-slate-950 text-white' : 'bg-emerald-100 text-emerald-800'}`}>
                        {needsInput ? '!' : approval ? index + 1 : <Check className="h-4 w-4" aria-hidden="true" />}
                      </div>
                      <div>
                        <p className="font-black text-slate-950">{step.label}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{step.result}</p>
                        <p className="mt-2 text-xs leading-5 text-slate-500">验证：{capability?.verifier}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="space-y-5">
                {plan.missingFields.length ? (
                  <div className="rounded-md border border-amber-300 bg-amber-50 p-4">
                    <div className="flex items-center gap-2 font-black text-amber-950"><AlertCircle className="h-5 w-5" />还需补充</div>
                    <p className="mt-2 text-sm leading-7 text-amber-900">{plan.missingFields.join('、')}</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-3 rounded-md border border-emerald-200 bg-emerald-50 p-4 font-black text-emerald-900">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />必要询价字段已完整
                  </div>
                )}

                <PlanList icon={Route} title="路线判断" items={plan.routeJudgment} />
                <PlanList icon={ShieldCheck} title="资料核对" items={plan.documentChecks} />
              </div>
            </div>

            <div className="mt-6 rounded-md bg-slate-100 p-4 sm:p-5">
              <div className="flex items-center gap-2 font-black text-slate-950"><FileText className="h-5 w-5" />将要提交的 RFQ</div>
              <pre className="mt-4 max-h-96 overflow-auto whitespace-pre-wrap break-words font-sans text-sm leading-7 text-slate-700">{plan.rfqText}</pre>
            </div>

            {submitState === 'error' ? (
              <div className="mt-5 flex items-start gap-3 rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-800">
                <X className="h-5 w-5 shrink-0" aria-hidden="true" />{submitError}
              </div>
            ) : null}
            {submitState === 'success' ? (
              <div className="mt-5 flex items-start gap-3 rounded-md border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
                <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden="true" />询价服务已确认接收，正在打开提交成功页。
              </div>
            ) : null}

            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm leading-7 text-slate-600">
                点击下方按钮即表示你确认以上资料并授权 Agent 执行一次外部提交。提交成功后不能从网站撤回，但 Run 编号会随询价一并发送，避免当前会话重复执行。
              </p>
              <button
                type="button"
                disabled={!canSubmit || submitState === 'success'}
                onClick={submitPlan}
                className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-amberGold px-5 font-black text-slate-950 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitState === 'submitting' ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Send className="h-5 w-5" aria-hidden="true" />}
                {submitState === 'submitting' ? '正在提交...' : '确认并提交一次询价'}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  autoComplete,
  inputMode,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: string
  autoComplete?: string
  inputMode?: 'numeric' | 'decimal'
}) {
  return (
    <label className="text-sm font-bold text-slate-700">
      {label}
      <input className={fieldClass} value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} type={type} autoComplete={autoComplete} inputMode={inputMode} />
    </label>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-black text-slate-950">{value}</p>
    </div>
  )
}

function PlanList({ icon: Icon, title, items }: { icon: typeof Plane; title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-slate-200 p-4">
      <div className="flex items-center gap-2 font-black text-slate-950"><Icon className="h-5 w-5 text-emerald-700" aria-hidden="true" />{title}</div>
      <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600">
        {items.map((item) => <li key={item} className="border-l-2 border-slate-200 pl-3">{item}</li>)}
      </ul>
    </div>
  )
}
