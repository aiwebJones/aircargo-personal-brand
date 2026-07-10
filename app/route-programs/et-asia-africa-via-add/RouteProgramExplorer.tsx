'use client'

import { FormEvent, useState } from 'react'
import { Calculator, Scale } from 'lucide-react'

type OriginCode = 'MLE' | 'SIN' | 'MNL'
type DestinationCode = 'CMN' | 'ALG' | 'TUN' | 'ADD' | 'CKY' | 'OUA' | 'EBB' | 'HAH' | 'NBJ' | 'BKO'

const origins: Record<OriginCode, {
  label: string
  intro: string
  strengths: string[]
  risks: string[]
}> = {
  MLE: {
    label: '马尔代夫 MLE',
    intro:
      '适合货物已经在马尔代夫、当地项目返运或调拨，或具备合法出口条件的场景。低运价必须与岛内提货、出口文件和机场操作费用合并比较。',
    strengths: [
      '当期价格有明显优势时，可作为非洲方向替代起运市场',
      '普货、尺寸规则且资料完整的货物更容易快速比较',
    ],
    risks: [
      '确认当地出口主体及货物海关状态',
      '岛内提货、出口操作和冷链费用不得漏算',
      '电池、危险品、温控和重货逐票预审',
    ],
  },
  SIN: {
    label: '新加坡 SIN',
    intro:
      '适合新加坡库存、区域分拨、设备备件和高价值工业货。当地操作成熟，但固定费用可能较高，需要用足够的计费重摊薄成本。',
    strengths: [
      '适合区域库存和东南亚供应链货物进入非洲',
      '文件完整、时间要求清楚时便于做全程方案比较',
    ],
    risks: [
      '当地仓库到机场、出口文件和安保费用需计入',
      '确认费率适用货型、最低收费和有效期',
      '中转时间与项目到货窗口要留缓冲',
    ],
  },
  MNL: {
    label: '菲律宾 MNL',
    intro:
      '适合菲律宾生产的电子、零部件、设备和项目急件。价格优势要与当地提货、出口申报、航段衔接和货物接受条件一起验证。',
    strengths: [
      '可承接菲律宾本地生产或区域采购的非洲订单',
      '对常规普货和工业急件具有比价价值',
    ],
    risks: [
      '确认出口商、装箱资料和货物原产信息',
      '航班调整和转运衔接需留时间缓冲',
      '带电、带磁、化学品和超尺寸货必须预审',
    ],
  },
}

const destinations: Record<DestinationCode, {
  label: string
  market: string
  network: string
  focus: string[]
}> = {
  CMN: {
    label: '卡萨布兰卡 · 摩洛哥',
    market: '北非工业、汽车零部件、电子和项目急件',
    network: '航段与承运人逐票确认',
    focus: ['进口商与税号资料', '法语或阿拉伯语文件一致性', 'ADD 二程机型与目的港费用'],
  },
  ALG: {
    label: '阿尔及尔 · 阿尔及利亚',
    market: '能源、工程、设备和高价值工业备件',
    network: '航段与承运人逐票确认',
    focus: ['进口许可与银行文件', '货值、品名和 HS Code', '项目地最终交付责任'],
  },
  TUN: {
    label: '突尼斯 · 突尼斯',
    market: '制造业、电子、汽车供应链和维修件',
    network: '航段与承运人逐票确认',
    focus: ['收货人与进口资料', '最终城市及当地操作', '全程费用口径一致'],
  },
  ADD: {
    label: '亚的斯亚贝巴 · 埃塞俄比亚',
    market: 'ET 枢纽、本地进口、工业和区域项目货',
    network: 'ET 核心枢纽',
    focus: ['eCMS/eSW 与进口许可', '本地进口或继续转运', '清关代理和最终交付'],
  },
  CKY: {
    label: '科纳克里 · 几内亚',
    market: '铝土矿、矿业设备、工程和维修急件',
    network: '航段与承运人逐票确认',
    focus: ['法语资料与进口文件', '超尺寸和重货接受条件', '矿区二程与卸货能力'],
  },
  OUA: {
    label: '瓦加杜古 · 布基纳法索',
    market: '矿业、能源、工程和援助急件',
    network: 'ET 官方货运目的地页收录',
    focus: ['舱位及二程机型', '当地代理和清关资料', '安保与最终交付范围'],
  },
  EBB: {
    label: '恩德培 · 乌干达',
    market: '医疗、能源、矿业、通信和工业急件',
    network: 'ET 官方货运目的地页收录',
    focus: ['UNBS/PVoC 适用性', '进口商及 Kampala 或项目地', '当地清关和交付费用'],
  },
  HAH: {
    label: '莫罗尼 · 科摩罗',
    market: '岛屿项目、酒店设备、医疗和贸易补货',
    network: '航段与承运人逐票确认',
    focus: ['频次与中转衔接', '滞留、温控和仓储风险', '岛内地服和最终交付'],
  },
  NBJ: {
    label: '卢安达 · 安哥拉',
    market: '能源、油气、工业项目和紧急备件',
    network: 'NBJ/LAD 状态逐票确认',
    focus: ['实际到达机场代码', 'AWB、舱单与进口许可', '地服、提货和项目地交付'],
  },
  BKO: {
    label: '巴马科 · 马里',
    market: '矿业、能源、工程设备和内陆项目急件',
    network: 'ET 官方货运目的地页收录',
    focus: ['进口商和清关代理', '安保及项目地距离', '内陆运输和卸货条件'],
  },
}

const originCodes = Object.keys(origins) as OriginCode[]
const destinationCodes = Object.keys(destinations) as DestinationCode[]

export default function RouteProgramExplorer() {
  const [originCode, setOriginCode] = useState<OriginCode>('MLE')
  const [destinationCode, setDestinationCode] = useState<DestinationCode>('CMN')
  const [result, setResult] = useState('填写真实费率后生成比较结果。')

  const origin = origins[originCode]
  const destination = destinations[destinationCode]
  const routeRisks = [...origin.risks, ...destination.focus]

  const compareCosts = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const weight = Number(form.get('weight'))
    const chinaRate = Number(form.get('chinaRate'))
    const chinaFixed = Number(form.get('chinaFixed') || 0)
    const alternateRate = Number(form.get('alternateRate'))
    const alternateFixed = Number(form.get('alternateFixed') || 0)
    const extraCost = Number(form.get('extraCost') || 0)

    if (![weight, chinaRate, alternateRate].every((value) => Number.isFinite(value) && value > 0)) {
      setResult('请输入有效的计费重和两条路线费率。')
      return
    }

    const chinaTotal = weight * chinaRate + chinaFixed
    const alternateTotal = weight * alternateRate + alternateFixed + extraCost
    const saving = chinaTotal - alternateTotal
    const breakEvenRate = (chinaTotal - alternateFixed - extraCost) / weight
    const formatter = new Intl.NumberFormat('zh-CN', { maximumFractionDigits: 2 })

    if (saving > 0) {
      setResult(
        `第三地起运预计节省 ${formatter.format(saving)}。中国直出总成本 ${formatter.format(chinaTotal)}；第三地起运总成本 ${formatter.format(alternateTotal)}。第三地费率高于 ${formatter.format(breakEvenRate)}/kg 后将不再便宜。`,
      )
      return
    }

    if (saving < 0) {
      setResult(
        `中国直出预计节省 ${formatter.format(Math.abs(saving))}。第三地固定费用或调拨费用已经抵消低运价；第三地费率需低于 ${formatter.format(breakEvenRate)}/kg 才具有成本优势。`,
      )
      return
    }

    setResult('两条路线成本相同。此时应优先比较舱位、时效、文件风险和目的港执行能力。')
  }

  return (
    <>
      <section id="route-selector" className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="text-sm font-bold uppercase text-emerald-700">Route decision</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
            选择起运地和目的港，查看这条线该怎么判断
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            这里展示的是路线判断逻辑，不是实时航班或报价。ET、合作承运人、机型、舱位、转运时限和最终承运条件均以逐票确认为准。
          </p>
        </div>

        <div className="mt-8 grid max-w-3xl gap-1 rounded-md border border-slate-200 bg-slate-100 p-1 sm:grid-cols-3" role="tablist" aria-label="起运地">
          {originCodes.map((code) => (
            <button
              key={code}
              type="button"
              role="tab"
              aria-selected={originCode === code}
              onClick={() => setOriginCode(code)}
              className={`min-h-12 rounded px-4 text-sm font-bold transition ${
                originCode === code ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {code} · {origins[code].label.split(' ')[0]}
            </button>
          ))}
        </div>

        <p className="mt-7 text-sm font-bold text-slate-600">非洲目的港</p>
        <div className="mt-3 grid grid-cols-5 gap-2 lg:grid-cols-10" role="tablist" aria-label="非洲目的港">
          {destinationCodes.map((code) => (
            <button
              key={code}
              type="button"
              role="tab"
              aria-selected={destinationCode === code}
              onClick={() => setDestinationCode(code)}
              className={`min-h-12 rounded border text-sm font-black transition ${
                destinationCode === code
                  ? 'border-emerald-700 bg-emerald-700 text-white'
                  : 'border-slate-200 bg-white text-slate-950 hover:border-amberGold'
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.4fr_0.6fr]" aria-live="polite">
          <article className="rounded-lg border border-slate-200 bg-white p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <h3 className="text-2xl font-black text-slate-950 md:text-3xl">
                {originCode} → ADD → {destinationCode}
              </h3>
              <span className="rounded-md bg-amberGold/15 px-3 py-2 text-xs font-bold text-amber-800">
                {destination.network}
              </span>
            </div>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {origin.intro} 目的地为{destination.label}，常见商业场景包括{destination.market}。
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {origin.strengths.map((item) => (
                <div key={item} className="border-l-4 border-amberGold bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
            <h3 className="text-xl font-black">报价前必须确认</h3>
            <ul className="mt-5 divide-y divide-white/10">
              {routeRisks.map((item) => (
                <li key={item} className="py-3 text-sm leading-7 text-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase text-emerald-700">All-in cost model</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">低运价是否真的更省，用总成本算</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              输入你当期拿到的真实数据。计算只在当前浏览器完成，不保存，也不代表 EASCargo 正式报价。
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.72fr]">
            <form onSubmit={compareCosts} className="rounded-lg border border-slate-200 bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <Calculator className="h-6 w-6 text-emerald-700" />
                <h3 className="text-xl font-black">中国直出 vs 亚洲第三地起运</h3>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <NumberField name="weight" label="计费重（kg）" required />
                <NumberField name="chinaRate" label="中国直出费率 / kg" required />
                <NumberField name="chinaFixed" label="中国直出固定费用" defaultValue="0" />
                <NumberField name="alternateRate" label="MLE/SIN/MNL 费率 / kg" required />
                <NumberField name="alternateFixed" label="第三地起运固定费用" defaultValue="0" />
                <NumberField name="extraCost" label="额外调拨/转运费用" defaultValue="0" />
              </div>
              <button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded bg-emerald-700 px-5 font-bold text-white transition hover:bg-emerald-800">
                <Scale className="h-5 w-5" />
                比较全程成本
              </button>
              <div className="mt-5 min-h-24 rounded border border-emerald-200 bg-emerald-50 p-5 text-sm leading-7 text-emerald-900" aria-live="polite">
                {result}
              </div>
            </form>

            <aside className="rounded-lg bg-amberGold/15 p-6 md:p-8">
              <h3 className="text-xl font-black text-slate-950">比较口径</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                如果货物本来就在 MLE、SIN 或 MNL，不应虚构一笔“中国到第三地”的费用；如果货物从中国调拨过去，则必须全部计入。
              </p>
              <div className="mt-5 rounded border border-amberGold/40 bg-white p-4 text-sm font-bold leading-7 text-amber-900">
                第三地总成本 = 计费重 × 第三地费率 + 起运固定费用 + 调拨/转运费用
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                <li>费率是否含燃油、安保、中转、文件及起运地机场费用</li>
                <li>最低收费和体积重除数是否一致</li>
                <li>ADD 中转仓储、改板或超期费用由谁承担</li>
                <li>二程机型是否接受单件尺寸、重量和货物属性</li>
                <li>目的港费用、清关和最终交付是否采用相同口径</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

function NumberField({
  name,
  label,
  required = false,
  defaultValue,
}: {
  name: string
  label: string
  required?: boolean
  defaultValue?: string
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-700">
      {label}
      <input
        name={name}
        type="number"
        inputMode="decimal"
        min="0"
        step="0.01"
        required={required}
        defaultValue={defaultValue}
        className="min-h-12 w-full rounded border border-slate-300 bg-white px-3 font-normal text-slate-950 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
      />
    </label>
  )
}
