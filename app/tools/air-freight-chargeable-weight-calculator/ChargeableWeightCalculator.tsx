'use client'

import { useMemo, useState } from 'react'
import { AlertTriangle, Calculator, Copy, Mail, Plane, Ruler, Scale } from 'lucide-react'

type DivisorMode = '6000' | '5000' | 'custom'

const numberFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 2,
})

function formatNumber(value: number) {
  if (!Number.isFinite(value)) {
    return '0'
  }

  return numberFormatter.format(value)
}

function toNumber(value: string) {
  const parsed = Number(value)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0
}

export default function ChargeableWeightCalculator() {
  const [pieces, setPieces] = useState('1')
  const [lengthCm, setLengthCm] = useState('120')
  const [widthCm, setWidthCm] = useState('80')
  const [heightCm, setHeightCm] = useState('90')
  const [grossWeightKg, setGrossWeightKg] = useState('180')
  const [divisorMode, setDivisorMode] = useState<DivisorMode>('6000')
  const [customDivisor, setCustomDivisor] = useState('6000')

  const result = useMemo(() => {
    const pieceCount = toNumber(pieces)
    const length = toNumber(lengthCm)
    const width = toNumber(widthCm)
    const height = toNumber(heightCm)
    const grossWeight = toNumber(grossWeightKg)
    const divisor = divisorMode === 'custom' ? toNumber(customDivisor) || 6000 : Number(divisorMode)
    const totalCbm = pieceCount * length * width * height / 1000000
    const volumetricWeight = pieceCount * length * width * height / divisor
    const chargeableWeight = Math.max(grossWeight, volumetricWeight)
    const density = totalCbm > 0 ? grossWeight / totalCbm : 0
    const basis = volumetricWeight > grossWeight ? '按体积重计费 Volume weight' : '按实际毛重计费 Actual gross weight'
    const isOversized = length > 300 || width > 240 || height > 160
    const isLongCargo = length > 300
    const isBulky = volumetricWeight > grossWeight * 1.15
    const isDense = grossWeight > volumetricWeight * 1.15

    return {
      pieceCount,
      length,
      width,
      height,
      grossWeight,
      divisor,
      totalCbm,
      volumetricWeight,
      chargeableWeight,
      density,
      basis,
      isOversized,
      isLongCargo,
      isBulky,
      isDense,
    }
  }, [customDivisor, divisorMode, grossWeightKg, heightCm, lengthCm, pieces, widthCm])

  const rfqText = [
    'Please check China to Africa air freight route and chargeable weight.',
    `Pieces: ${formatNumber(result.pieceCount)}`,
    `Single piece dimensions: ${formatNumber(result.length)} x ${formatNumber(result.width)} x ${formatNumber(result.height)} cm`,
    `Gross weight: ${formatNumber(result.grossWeight)} kg`,
    `Total CBM: ${formatNumber(result.totalCbm)} CBM`,
    `Volumetric weight divisor: ${formatNumber(result.divisor)}`,
    `Volumetric weight: ${formatNumber(result.volumetricWeight)} kg`,
    `Chargeable weight: ${formatNumber(result.chargeableWeight)} kg`,
    'Destination airport / final delivery city:',
    'Cargo name / HS code / cargo photo:',
    'Required arrival date:',
  ].join('\n')

  const mailtoHref = `mailto:globegsa@Gmail.com?subject=${encodeURIComponent('Air freight chargeable weight RFQ')}&body=${encodeURIComponent(rfqText)}`

  const inputClass =
    'mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-base font-semibold text-slate-950 outline-none transition focus:border-amberGold focus:ring-2 focus:ring-amberGold/20'

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-amberGold">
            <Calculator className="h-5 w-5" />
            Air freight chargeable weight calculator
          </div>
          <h2 className="mt-2 text-2xl font-black text-slate-950">空运计费重计算器</h2>
        </div>
        <div className="rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
          L x W x H x 件数 / {formatNumber(result.divisor)}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Plane className="h-4 w-4 text-amberGold" />
            件数 Pieces
          </span>
          <input className={inputClass} inputMode="decimal" value={pieces} onChange={(event) => setPieces(event.target.value)} />
        </label>
        <label className="block">
          <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Scale className="h-4 w-4 text-amberGold" />
            总毛重 kg
          </span>
          <input className={inputClass} inputMode="decimal" value={grossWeightKg} onChange={(event) => setGrossWeightKg(event.target.value)} />
        </label>
        <label className="block">
          <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Ruler className="h-4 w-4 text-amberGold" />
            单件长 cm
          </span>
          <input className={inputClass} inputMode="decimal" value={lengthCm} onChange={(event) => setLengthCm(event.target.value)} />
        </label>
        <label className="block">
          <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Ruler className="h-4 w-4 text-amberGold" />
            单件宽 cm
          </span>
          <input className={inputClass} inputMode="decimal" value={widthCm} onChange={(event) => setWidthCm(event.target.value)} />
        </label>
        <label className="block">
          <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <Ruler className="h-4 w-4 text-amberGold" />
            单件高 cm
          </span>
          <input className={inputClass} inputMode="decimal" value={heightCm} onChange={(event) => setHeightCm(event.target.value)} />
        </label>
        <div>
          <span className="text-sm font-semibold text-slate-700">体积重除数 Divisor</span>
          <div className="mt-2 grid grid-cols-3 rounded-md border border-slate-300 bg-slate-100 p-1">
            {(['6000', '5000', 'custom'] as DivisorMode[]).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setDivisorMode(mode)}
                className={`h-9 rounded px-2 text-sm font-semibold transition ${
                  divisorMode === mode ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-600 hover:bg-white'
                }`}
              >
                {mode === 'custom' ? '自定义' : mode}
              </button>
            ))}
          </div>
          {divisorMode === 'custom' ? (
            <input
              aria-label="Custom divisor"
              className={inputClass}
              inputMode="decimal"
              value={customDivisor}
              onChange={(event) => setCustomDivisor(event.target.value)}
            />
          ) : null}
        </div>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-4">
        {[
          { label: 'Total CBM', value: `${formatNumber(result.totalCbm)} CBM` },
          { label: 'Volume weight', value: `${formatNumber(result.volumetricWeight)} kg` },
          { label: 'Chargeable weight', value: `${formatNumber(result.chargeableWeight)} kg` },
          { label: 'Density', value: `${formatNumber(result.density)} kg/CBM` },
        ].map((item) => (
          <div key={item.label} className="rounded-md bg-slate-950 p-4 text-white">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</div>
            <div className="mt-2 min-h-8 text-2xl font-black text-amberGold">{item.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-md border border-amberGold/40 bg-amberGold/10 p-4">
        <div className="text-sm font-bold text-slate-950">计费判断：{result.basis}</div>
        <div className="mt-3 grid gap-2 text-sm leading-6 text-slate-700 md:grid-cols-2">
          {result.isBulky ? <span>泡货：报价重点看体积重和舱位体积。</span> : null}
          {result.isDense ? <span>重货：注意单件重量、叉车和地面操作。</span> : null}
          {result.isLongCargo ? <span>长货：超过 300cm，优先检查主甲板、全货机或 LGG/BRU 中转。</span> : null}
          {result.isOversized ? <span>超尺寸：需要确认机型门高、板位、装卸设备和目的地二程。</span> : null}
          {!result.isBulky && !result.isDense && !result.isOversized ? <span>常规尺寸：下一步确认目的港、货名、HS code 和清关责任。</span> : null}
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_180px]">
        <pre className="min-h-52 overflow-x-auto rounded-md bg-slate-100 p-4 text-sm leading-6 text-slate-800">
          {rfqText}
        </pre>
        <div className="grid gap-3 self-start">
          <a
            href={mailtoHref}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-amberGold px-4 text-sm font-bold text-slate-950 transition hover:bg-amberGold/90"
          >
            <Mail className="h-4 w-4" />
            发送询价
          </a>
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(rfqText)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-300 px-4 text-sm font-bold text-slate-700 transition hover:border-amberGold hover:text-slate-950"
          >
            <Copy className="h-4 w-4" />
            复制资料
          </button>
          <div className="rounded-md bg-slate-50 p-3 text-xs leading-5 text-slate-600">
            <AlertTriangle className="mb-2 h-4 w-4 text-amberGold" />
            计费重只是报价入口。非洲项目货还要看机场、机型、清关资料、二程交付和进口商责任。
          </div>
        </div>
      </div>
    </section>
  )
}
