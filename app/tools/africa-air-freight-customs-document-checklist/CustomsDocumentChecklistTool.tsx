'use client'

import { useMemo, useState } from 'react'
import { AlertTriangle, ClipboardCheck, Copy, FileCheck2, Mail, MapPin, PackageCheck, ShieldCheck } from 'lucide-react'

const destinations = [
  {
    code: 'ACC',
    country: 'Ghana',
    city: 'Accra',
    label: 'Ghana ACC 加纳阿克拉',
    related: '/insights/ghana-acc-easypass-icums-air-freight-clearance/',
    documents: ['GSA EasyPASS / Certificate of Conformity 判断', 'ICUMS 进口申报资料', 'Import Declaration Form 状态', '进口商 TIN 或 GhanaCard PIN', 'GRA Customs 目的港清关代理确认'],
    risk: '2026 年 7 月 1 日后，ACC 询价要先判断 EasyPASS/CoC 是否适用，不能等货到港后再补。',
  },
  {
    code: 'LOS',
    country: 'Nigeria',
    city: 'Lagos / Port Harcourt',
    label: 'Nigeria LOS/PHC 尼日利亚',
    related: '/insights/nigeria-los-bodogwu-form-m-paar-air-freight-clearance/',
    documents: ['SONCAP 是否适用', 'Form M 状态', 'PAAR 状态', 'B’Odogwu / Nigeria Single Window 资料', '进口商 TIN、银行和清关代理资料'],
    risk: '尼日利亚文件链容易影响真实到港成本，Form M、PAAR 和进口商资料要在订舱前确认。',
  },
  {
    code: 'CAI',
    country: 'Egypt',
    city: 'Cairo',
    label: 'Egypt CAI 埃及开罗',
    related: '/insights/egypt-cai-nafeza-aci-cargox-air-freight-clearance/',
    documents: ['ACID 号', 'NAFEZA ACI 航空货物资料', 'CargoX 出口商账号和文件上传状态', 'NAFEZA 商业发票模板', 'Certificate of Origin 或特殊证书如需'],
    risk: '埃及空运 ACI 已进入强制阶段，ACID、CargoX 和 AWB/发票数据必须提前一致。',
  },
  {
    code: 'NBO',
    country: 'Kenya',
    city: 'Nairobi',
    label: 'Kenya NBO 肯尼亚内罗毕',
    related: '/insights/kenya-nbo-pvoc-idf-air-freight-documents/',
    documents: ['KEBS PVoC / CoC 判断', 'Import Declaration Form IDF', '进口商 KRA PIN', '产品规格书、照片和测试资料', 'NBO 或最终城市清关代理确认'],
    risk: 'NBO 常规航线多，但 PVoC/CoC 和 IDF 未确认时，报价时效不可靠。',
  },
  {
    code: 'DAR',
    country: 'Tanzania',
    city: 'Dar es Salaam',
    label: 'Tanzania DAR 坦桑尼亚',
    related: '/insights/tanzania-dar-pvoc-coc-air-freight-clearance/',
    documents: ['TBS PVoC / CoC 判断', 'TRA 预到港申报资料', 'TANCIS 清关资料', '进口许可如涉及 TMDA/TBS 等', '进口商授权和目的地代理确认'],
    risk: 'DAR 询价要把 TBS 合规和 TRA/TANCIS 申报提前拆清，否则到港后容易补料。',
  },
  {
    code: 'EBB',
    country: 'Uganda',
    city: 'Entebbe',
    label: 'Uganda EBB 乌干达恩德培',
    related: '/insights/uganda-ebb-unbs-pvoc-air-freight-clearance/',
    documents: ['UNBS PVoC / CoC 是否需要', 'URA 进口申报资料', 'Certificate of Origin', '进口商 TIN 和代理资料', 'EBB 或内陆交付城市确认'],
    risk: 'EBB 进口文件要和 AWB、发票箱单、原产地和 PVoC/CoC 对齐。',
  },
  {
    code: 'JNB',
    country: 'South Africa',
    city: 'Johannesburg / CPT / DUR',
    label: 'South Africa JNB/CPT/DUR 南非',
    related: '/insights/south-africa-cpt-dur-sars-invoice-itac-nrcs-air-freight-clearance/',
    documents: ['SARS goods declaration 资料', '商业发票完整数据', 'NRCS LOA 是否需要', 'ITAC 进口许可是否涉及', '目的港清关代理和最终城市确认'],
    risk: '南非看似成熟，但电子电器、受控货和港口/矿业设备要先判断 NRCS、ITAC 和 SARS 数据。',
  },
  {
    code: 'FBM',
    country: 'DRC',
    city: 'Lubumbashi / Kinshasa',
    label: 'DRC FBM/FIH 刚果金',
    related: '/insights/drc-fbm-guice-bivac-mining-spares-air-freight-clearance/',
    documents: ['DGDA / GUICE 申报资料', 'OCC / BIVAC 是否涉及', '进口许可证或矿业项目资料', '法语品名和 HS Code', '矿区最终交付责任确认'],
    risk: '刚果金矿业备件要把清关、代理、二程和矿区交付责任一起确认，不能只报机场到港价。',
  },
  {
    code: 'LUN',
    country: 'Zambia',
    city: 'Lusaka / Ndola',
    label: 'Zambia LUN/NLA 赞比亚',
    related: '/insights/ndola-nla-zra-asycuda-aci-copperbelt-mining-air-freight-clearance/',
    documents: ['ZRA / ASYCUDA 申报资料', 'Advanced Cargo Information 如适用', 'ZCSA 或其他监管许可判断', '进口商 TPIN', '铜带矿区二程交付资料'],
    risk: '赞比亚矿业设备要确认 LUN/NLA 到矿区的二程、卸货条件和进口商资料。',
  },
  {
    code: 'KGL',
    country: 'Rwanda',
    city: 'Kigali',
    label: 'Rwanda KGL 卢旺达',
    related: '/insights/rwanda-kgl-rra-rsb-air-freight-clearance-documents/',
    documents: ['RRA / Rwanda Electronic Single Window 资料', 'RSB 认证或进口检查是否需要', '进口商 TIN', '产品照片和规格书', 'KGL 到最终城市交付资料'],
    risk: 'KGL 适合小批量高价值货，但文件一致性和进口商电子申报要提前确认。',
  },
] as const

const cargoAttributes = [
  {
    id: 'battery',
    label: '带锂电池/带电设备',
    documents: ['MSDS', 'UN38.3', 'UN 编号和电池配置', 'SOC 荷电状态', '电池是否内置或随设备包装'],
    risk: '带电设备要先判断 UN3480/UN3481/UN3090/UN3091、航司接受能力和目的地清关。',
  },
  {
    id: 'dg',
    label: '危险品/化工品',
    documents: ['最新 MSDS', 'UN 编号', 'Proper Shipping Name', '危险类别和 Packing Group', 'DGD 或危险品申报安排'],
    risk: '危险品不能只凭品名报价，必须先看分类、包装、标签、净重和航司接受能力。',
  },
  {
    id: 'wood',
    label: '木箱/木托包装',
    documents: ['IPPC mark 照片', 'ISPM 15 热处理或熏蒸证明', '木包装近照', '是否含裸露垫木', '包装清单与唛头一致性'],
    risk: '木包装缺 IPPC/ISPM 15 证明时，目的港可能查验、熏蒸、退运或产生仓储。',
  },
  {
    id: 'oversized',
    label: '超长/超高/超重项目货',
    documents: ['每件尺寸和毛重', '包装照片', '吊点、叉车孔和重心', '是否可堆叠', '主甲板或全货机需求'],
    risk: '超大件要同时检查机型门高、板位、地面设备、目的港卸货和二程卡车。',
  },
  {
    id: 'medical',
    label: '医疗/检测/电子设备',
    documents: ['产品规格书', '品牌型号', '用途说明', '监管许可证或注册资料如需', '序列号或设备清单'],
    risk: '医疗和电子设备常触发目的国监管、标准认证、无线模块或电池资料要求。',
  },
  {
    id: 'coldChain',
    label: '温控/数据记录仪/追踪器',
    documents: ['温控区间', '数据记录仪型号和电池资料', '包装验证资料', '可接受温控中断时间', '目的地冷链交接责任'],
    risk: '冷链货要把温控责任、记录仪电池和目的地交接写进报价边界。',
  },
  {
    id: 'used',
    label: '二手机器/旧设备',
    documents: ['设备年份和状态', '维修或翻新说明', '旧设备进口许可判断', '序列号和照片', '是否含油液或残留物'],
    risk: '二手设备在部分国家会触发进口限制、估价、检验或许可证要求。',
  },
  {
    id: 'mining',
    label: '矿业/油气/工厂急件',
    documents: ['项目或最终用户信息', '停产或急件说明', '矿区/工地最终地址', '收货人清关代理', '现场卸货条件'],
    risk: '矿业和油气备件不是只到机场，必须提前确认清关、二程、现场接收和停产窗口。',
  },
] as const

type DestinationCode = (typeof destinations)[number]['code']
type CargoAttributeId = (typeof cargoAttributes)[number]['id']

const baseDocuments = [
  'Commercial Invoice 商业发票',
  'Packing List 装箱单',
  'Air Waybill 资料',
  'HS Code',
  '具体英文品名、用途、材质',
  '品牌、型号、规格',
  '每件尺寸和每件毛重',
  '产品照片和包装照片',
  'Invoice value and currency',
  '进口商税号、地址和联系人',
  '目的机场、最终城市或项目现场地址',
]

const initialAttributes = cargoAttributes.reduce(
  (acc, item) => ({ ...acc, [item.id]: item.id === 'oversized' || item.id === 'mining' }),
  {} as Record<CargoAttributeId, boolean>,
)

function unique(items: string[]) {
  return Array.from(new Set(items))
}

export default function CustomsDocumentChecklistTool() {
  const [destinationCode, setDestinationCode] = useState<DestinationCode>('ACC')
  const [attributes, setAttributes] = useState<Record<CargoAttributeId, boolean>>(initialAttributes)
  const [copied, setCopied] = useState(false)

  const result = useMemo(() => {
    const destination = destinations.find((item) => item.code === destinationCode) ?? destinations[0]
    const selectedAttributes = cargoAttributes.filter((item) => attributes[item.id])
    const documents = unique([
      ...baseDocuments,
      ...destination.documents,
      ...selectedAttributes.flatMap((item) => item.documents),
    ])
    const risks = [destination.risk, ...selectedAttributes.map((item) => item.risk)]
    const rfqText = [
      'Please pre-check China to Africa air freight customs document readiness.',
      `Destination: ${destination.label}`,
      '',
      'Cargo attributes:',
      ...(selectedAttributes.length ? selectedAttributes.map((item) => `- ${item.label}`) : ['- General cargo']),
      '',
      'Documents available / pending:',
      ...documents.map((item) => `- ${item}`),
      '',
      'Cargo details to add:',
      '- Origin city / airport:',
      '- Destination airport and final delivery city:',
      '- Cargo name / HS code:',
      '- Pieces, dimensions, gross weight:',
      '- Cargo photos and packing photos:',
      '- Invoice value and Incoterms:',
      '- Required arrival date:',
    ].join('\n')

    return { destination, selectedAttributes, documents, risks, rfqText }
  }, [attributes, destinationCode])

  const mailtoHref = `mailto:globegsa@Gmail.com?subject=${encodeURIComponent(`Africa air freight document checklist ${result.destination.code}`)}&body=${encodeURIComponent(result.rfqText)}`

  const copyText = async () => {
    await navigator.clipboard?.writeText(result.rfqText)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-amberGold">
            <ClipboardCheck className="h-5 w-5" />
            Africa air freight customs document checklist
          </div>
          <h2 className="mt-2 text-2xl font-black text-slate-950">非洲空运清关资料生成器</h2>
        </div>
        <div className="rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
          {result.documents.length} 项资料
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[300px_1fr]">
        <div className="space-y-5">
          <label className="block">
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <MapPin className="h-4 w-4 text-amberGold" />
              目的地 Destination
            </span>
            <select
              value={destinationCode}
              onChange={(event) => setDestinationCode(event.target.value as DestinationCode)}
              className="mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-950 outline-none transition focus:border-amberGold focus:ring-2 focus:ring-amberGold/20"
            >
              {destinations.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>

          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <PackageCheck className="h-4 w-4 text-amberGold" />
              货物属性 Cargo attributes
            </div>
            <div className="mt-3 grid gap-2">
              {cargoAttributes.map((item) => (
                <label key={item.id} className="flex min-h-11 items-center gap-3 rounded-md border border-slate-200 px-3 text-sm text-slate-700 transition hover:border-amberGold">
                  <input
                    type="checkbox"
                    checked={attributes[item.id]}
                    onChange={(event) => setAttributes((current) => ({ ...current, [item.id]: event.target.checked }))}
                    className="h-4 w-4 accent-amberGold"
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="rounded-md bg-slate-950 p-5 text-white">
            <div className="flex items-center gap-2 text-amberGold">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-bold">当前判断</span>
            </div>
            <h3 className="mt-3 text-2xl font-black">{result.destination.label}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{result.destination.risk}</p>
            <a
              href={result.destination.related}
              className="mt-4 inline-flex items-center text-sm font-bold text-amberGold hover:text-white"
            >
              查看目的国详细页面
            </a>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {result.documents.map((item) => (
              <div key={item} className="flex gap-3 rounded-md border border-slate-200 bg-slate-50 p-3">
                <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-amberGold" />
                <span className="text-sm leading-6 text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="rounded-md border border-amberGold/40 bg-amberGold/10 p-4">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-950">
              <AlertTriangle className="h-4 w-4 text-amberGold" />
              重点风险
            </div>
            <div className="mt-3 grid gap-2 text-sm leading-6 text-slate-700">
              {result.risks.map((risk) => (
                <p key={risk}>{risk}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1fr_176px]">
            <pre className="min-h-56 overflow-x-auto rounded-md bg-slate-100 p-4 text-sm leading-6 text-slate-800">
              {result.rfqText}
            </pre>
            <div className="grid content-start gap-3">
              <a
                href={mailtoHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-amberGold px-4 text-sm font-bold text-slate-950 transition hover:bg-amberGold/90"
              >
                <Mail className="h-4 w-4" />
                发给 Jones
              </a>
              <button
                type="button"
                onClick={copyText}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-300 px-4 text-sm font-bold text-slate-700 transition hover:border-amberGold hover:text-slate-950"
              >
                <Copy className="h-4 w-4" />
                {copied ? '已复制' : '复制清单'}
              </button>
              <p className="rounded-md bg-slate-50 p-3 text-xs leading-5 text-slate-600">
                这是询价前资料清单，不替代目的国清关代理的最终归类和税费判断。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
