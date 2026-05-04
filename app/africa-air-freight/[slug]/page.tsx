import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, FileCheck2, Globe2, Plane, Truck } from 'lucide-react'

const pages = {
  jnb: {
    code: 'JNB',
    city: 'Johannesburg',
    country: 'South Africa',
    title: 'JNB Johannesburg Oversized Air Freight from China',
    description:
      'Oversized and heavy air freight from China to Johannesburg JNB for mining, engineering, automotive and Southern Africa project cargo. LGG/BRU Europe transit and B747F planning.',
    cargo: ['Mining spare parts', 'Engineering equipment', 'Automotive parts', 'High-value urgent project cargo'],
    market:
      'Johannesburg is the main Southern Africa air cargo hub. It can serve South Africa directly and may support onward delivery to nearby countries and cities.',
    customs:
      'Check importer tax details, HS Code, commercial invoice, packing list, declared cargo description and any onward transit documents before booking.',
    business:
      'Best for urgent mining spares, industrial maintenance cargo and high-value equipment serving South Africa and Southern Africa projects.',
    culture:
      'South Africa has a mature logistics market and English business communication is common, but consignee readiness and local delivery appointment control still decide the final timeline.',
  },
  fbm: {
    code: 'FBM',
    city: 'Lubumbashi',
    country: 'Democratic Republic of the Congo',
    title: 'FBM Lubumbashi Air Freight for Mining Equipment',
    description:
      'China to FBM Lubumbashi air freight for Copperbelt mining equipment, heavy spare parts and project cargo via Europe and African hub routing.',
    cargo: ['Copperbelt mining spare parts', 'Transformers', 'Pumps', 'Electrical cabinets', 'Heavy maintenance equipment'],
    market:
      'Lubumbashi is a mining supply chain destination. Air freight planning must consider the airport, customs broker, inland delivery and mine-site handover.',
    customs:
      'Confirm consignee documents, HS Code, import responsibility, destination agent capability, unloading conditions and final delivery boundary.',
    business:
      'Best for Copperbelt mining equipment, plant maintenance cargo, heavy spares and emergency replacement parts where downtime is expensive.',
    culture:
      'French communication is useful. Many shipments are tied to mines, contractors and Chinese-backed industrial projects, so document consistency matters more than a cheap rate.',
  },
  lun: {
    code: 'LUN',
    city: 'Lusaka',
    country: 'Zambia',
    title: 'LUN Lusaka Air Freight for Industrial and Mining Cargo',
    description:
      'China to Lusaka LUN oversized air freight for Zambia industrial equipment, mining spare parts, pumps and urgent project cargo via LGG/BRU transit.',
    cargo: ['Mining spare parts', 'Chemical pumps', 'Generators', 'Factory equipment', 'Industrial maintenance parts'],
    market:
      'Lusaka is an important entry point for Zambia industrial and mining supply chains. Project cargo often needs stable documents and clear delivery timing.',
    customs:
      'Prepare importer information, invoice, packing list, HS Code, cargo value, packing photos and any license requirements before shipment.',
    business:
      'Best for Zambia mining support cargo, industrial spare parts, pumps, motors, chemical plant equipment and urgent factory maintenance cargo.',
    culture:
      'English is widely used in business. Chinese companies are active in mining and infrastructure, which makes China-origin project cargo common but still document-sensitive.',
  },
  lbv: {
    code: 'LBV',
    city: 'Libreville',
    country: 'Gabon',
    title: 'LBV Libreville Oversized Cargo via LGG/BRU and B747F',
    description:
      'China to Libreville LBV oversized air freight via LGG/BRU Europe transit and B747F freighter planning for long cargo, oil, energy and engineering projects.',
    cargo: ['Long cargo around 8 meters', 'Oil and energy equipment', 'Engineering spare parts', 'Project machinery'],
    market:
      'Libreville can serve Gabon and Central Africa projects. Long cargo requires aircraft, main-deck and ground handling checks before rate discussion.',
    customs:
      'French-language document communication, consignee readiness, cargo description, packing details and special handling at destination should be confirmed early.',
    business:
      'Best for oil, energy, construction and long engineering cargo where B747F main-deck loading or Europe transit can unlock a workable route.',
    culture:
      'French is the practical business language. For special cargo, the local agent must confirm ground handling and truck access before the shipment leaves China.',
  },
  nbo: {
    code: 'NBO',
    city: 'Nairobi',
    country: 'Kenya',
    title: 'NBO Nairobi Air Freight for East Africa Project Cargo',
    description:
      'China to Nairobi NBO air freight for East Africa project cargo, machinery, telecom equipment, industrial spare parts and oversized cargo via Europe or regional hub routing.',
    cargo: ['Telecom equipment', 'Factory spare parts', 'Project machinery', 'Medical and industrial equipment'],
    market:
      'Nairobi is one of the strongest East Africa cargo hubs and can support Kenya projects plus onward distribution to nearby countries.',
    customs:
      'Check importer PIN, HS Code, invoice value, packing list, permits for regulated goods and whether the consignee can clear at Jomo Kenyatta airport.',
    business:
      'Best for East Africa regional distribution, infrastructure projects, telecom rollouts and time-sensitive industrial maintenance cargo.',
    culture:
      'English is common and the business environment is relatively mature. Chinese suppliers and contractors are visible in infrastructure and equipment trades.',
  },
  ebb: {
    code: 'EBB',
    city: 'Entebbe',
    country: 'Uganda',
    title: 'EBB Entebbe Air Freight from China for Uganda Projects',
    description:
      'China to Entebbe EBB air freight for Uganda project cargo, industrial equipment, construction machinery parts and urgent spare parts via Europe or East Africa routing.',
    cargo: ['Construction equipment parts', 'Energy project cargo', 'Industrial spares', 'Telecom equipment'],
    market:
      'Entebbe is Uganda’s main air cargo entry point. Shipments often need close coordination between airport clearance and Kampala or project-site delivery.',
    customs:
      'Confirm importer tax details, HS Code, invoice, packing list, permits and final delivery responsibility before booking.',
    business:
      'Best for Uganda infrastructure, energy, telecom and industrial maintenance cargo where delivery predictability is more important than ordinary airfreight speed.',
    culture:
      'English is widely used. Chinese contractors and suppliers are active, but destination-side clearance capability must be checked case by case.',
  },
  los: {
    code: 'LOS',
    city: 'Lagos',
    country: 'Nigeria',
    title: 'LOS Lagos Heavy Air Freight from China to Nigeria',
    description:
      'China to Lagos LOS heavy air freight for Nigeria industrial cargo, oil and gas spare parts, factory machinery and project shipments requiring careful customs planning.',
    cargo: ['Oil and gas spare parts', 'Factory machinery', 'Electrical equipment', 'High-value urgent cargo'],
    market:
      'Lagos is Nigeria’s main commercial cargo gateway. Capacity exists, but customs documents, consignee readiness and demurrage risk must be controlled.',
    customs:
      'Check SONCAP or other regulated-goods requirements, HS Code, Form M where applicable, invoice value, packing list and importer documentation before departure.',
    business:
      'Best for Nigeria factory, oil service, power, telecom and trade cargo where customs preparation affects the real landed cost.',
    culture:
      'English is the business language. Nigeria has strong import demand, but clearance process discipline and trusted local agents are critical.',
  },
  acc: {
    code: 'ACC',
    city: 'Accra',
    country: 'Ghana',
    title: 'ACC Accra Air Freight from China for Ghana Project Cargo',
    description:
      'China to Accra ACC air freight for Ghana project cargo, mining spares, machinery parts, medical equipment and industrial shipments via Europe transit.',
    cargo: ['Mining spare parts', 'Medical equipment', 'Industrial equipment', 'Construction project cargo'],
    market:
      'Accra serves Ghana’s commercial and mining supply chain. It is often suitable for urgent spare parts and high-value equipment.',
    customs:
      'Confirm importer tax identity, HS Code, invoice, packing list, permits and destination handling for heavy or fragile equipment.',
    business:
      'Best for Ghana mining, construction, healthcare and factory maintenance cargo that needs clear documentation and predictable delivery.',
    culture:
      'English is common. Ghana has a stable business environment, but clearance cost items should be explained before the customer approves the shipment.',
  },
  abj: {
    code: 'ABJ',
    city: 'Abidjan',
    country: 'Cote dIvoire',
    title: 'ABJ Abidjan Air Freight from China to West Africa',
    description:
      'China to Abidjan ABJ air freight for West Africa industrial cargo, oversized equipment, construction parts and French-speaking Africa project shipments.',
    cargo: ['Construction machinery parts', 'Industrial equipment', 'Energy project cargo', 'Oversized spare parts'],
    market:
      'Abidjan is a key West Africa gateway and can serve Cote dIvoire and nearby francophone markets for project cargo.',
    customs:
      'Prepare French-compatible descriptions, HS Code, invoice, packing list, importer documents and special handling notes for heavy cargo.',
    business:
      'Best for francophone West Africa projects, construction equipment, mining support and urgent factory spare parts.',
    culture:
      'French is important. Chinese suppliers are active, but the local consignee and customs broker must align before cargo departure.',
  },
  bko: {
    code: 'BKO',
    city: 'Bamako',
    country: 'Mali',
    title: 'BKO Bamako Air Freight from China for Mali Projects',
    description:
      'China to Bamako BKO air freight for Mali mining, construction and industrial project cargo with Europe transit and Africa hub routing options.',
    cargo: ['Mining equipment parts', 'Construction parts', 'Power project cargo', 'Urgent industrial spares'],
    market:
      'Bamako serves Mali’s mining and construction import demand. Route feasibility and ground handling should be checked early for large pieces.',
    customs:
      'Confirm French documents, importer readiness, HS Code, invoice, packing list, permits and destination handling before booking.',
    business:
      'Best for mining and construction projects where delay cost is high and airfreight can rescue a project schedule.',
    culture:
      'French communication is useful. Because routings can be limited, cargo dimensions and latest arrival date should be shared before price negotiation.',
  },
  cky: {
    code: 'CKY',
    city: 'Conakry',
    country: 'Guinea',
    title: 'CKY Conakry Air Freight from China for Mining Cargo',
    description:
      'China to Conakry CKY air freight for Guinea mining cargo, industrial spares, project equipment and oversized shipments via Europe transit.',
    cargo: ['Mining spare parts', 'Bauxite project equipment', 'Generators', 'Industrial maintenance cargo'],
    market:
      'Conakry is tied to Guinea mining and infrastructure projects. Cargo plans must consider airport handling and onward delivery conditions.',
    customs:
      'Confirm consignee documents, French descriptions, HS Code, invoice, packing list and whether special permits are needed.',
    business:
      'Best for mining project support, urgent equipment replacement and industrial cargo where normal shipping is too slow.',
    culture:
      'French is common in documentation. Many shipments involve Chinese-backed mining supply chains, so bilingual coordination can reduce mistakes.',
  },
  kgl: {
    code: 'KGL',
    city: 'Kigali',
    country: 'Rwanda',
    title: 'KGL Kigali Air Freight from China to Rwanda',
    description:
      'China to Kigali KGL air freight for Rwanda project cargo, industrial equipment, medical equipment and East Africa inland distribution.',
    cargo: ['Medical equipment', 'Industrial spare parts', 'Telecom equipment', 'Project cargo'],
    market:
      'Kigali is a clean and organized East Africa destination with growing demand for infrastructure, healthcare and technology cargo.',
    customs:
      'Check importer registration, HS Code, invoice, packing list, permits for medical or regulated goods and local delivery appointment.',
    business:
      'Best for healthcare, telecom, factory and government-linked project cargo that needs controlled documents and clear arrival timing.',
    culture:
      'English and French can both be useful. The market values process clarity, so route plan and document checklist should be given early.',
  },
  dar: {
    code: 'DAR',
    city: 'Dar es Salaam',
    country: 'Tanzania',
    title: 'DAR Dar es Salaam Air Freight from China for Tanzania Cargo',
    description:
      'China to Dar es Salaam DAR air freight for Tanzania industrial cargo, mining parts, construction equipment and East Africa project shipments.',
    cargo: ['Mining spare parts', 'Construction equipment parts', 'Energy equipment', 'Factory maintenance cargo'],
    market:
      'Dar es Salaam supports Tanzania and regional East Africa logistics. It can be used for urgent cargo when ocean freight is too slow.',
    customs:
      'Confirm importer tax details, HS Code, invoice, packing list, regulated goods permits and final delivery responsibilities.',
    business:
      'Best for Tanzania mining, construction, energy and industrial cargo requiring predictable arrival and local delivery coordination.',
    culture:
      'English is used in business. Chinese contractors are active in infrastructure, but inland transport planning should be separated from airport-to-airport pricing.',
  },
  cpt: {
    code: 'CPT',
    city: 'Cape Town',
    country: 'South Africa',
    title: 'CPT Cape Town Air Freight from China for Project Cargo',
    description:
      'China to Cape Town CPT air freight for South Africa industrial cargo, marine equipment, engineering spares and urgent project shipments.',
    cargo: ['Marine equipment', 'Engineering spares', 'Factory equipment', 'High-value urgent cargo'],
    market:
      'Cape Town is useful for Western Cape projects, marine cargo and regional commercial shipments where Johannesburg is not the best final point.',
    customs:
      'Check importer VAT details, HS Code, commercial invoice, packing list and whether local delivery requires special equipment.',
    business:
      'Best for marine, engineering, food-processing and high-value equipment cargo serving Cape Town or nearby project sites.',
    culture:
      'English business communication is common. Final-mile planning matters when the cargo is heavy, fragile or needs direct site delivery.',
  },
  dur: {
    code: 'DUR',
    city: 'Durban',
    country: 'South Africa',
    title: 'DUR Durban Air Freight from China for South Africa Cargo',
    description:
      'China to Durban DUR air freight for South Africa industrial cargo, port-related equipment, factory spares and urgent project shipments.',
    cargo: ['Port equipment parts', 'Factory spare parts', 'Industrial machinery', 'Urgent maintenance cargo'],
    market:
      'Durban is important for port, industrial and coastal South Africa cargo. It may be better than JNB when final delivery is around KwaZulu-Natal.',
    customs:
      'Confirm importer details, HS Code, invoice, packing list and whether airport pickup or truck delivery is required.',
    business:
      'Best for port-related industry, factories, marine service companies and urgent equipment cargo around Durban.',
    culture:
      'English is common. Customers should compare total landed time and inland cost instead of only airport-to-airport freight.',
  },
  wdh: {
    code: 'WDH',
    city: 'Windhoek',
    country: 'Namibia',
    title: 'WDH Windhoek Air Freight from China for Namibia Projects',
    description:
      'China to Windhoek WDH air freight for Namibia mining, energy, construction and industrial spare parts via Europe or Southern Africa routing.',
    cargo: ['Mining spare parts', 'Energy equipment', 'Construction parts', 'Industrial maintenance cargo'],
    market:
      'Windhoek serves Namibia’s mining, energy and infrastructure demand. Large cargo needs routing and handling checks before booking.',
    customs:
      'Confirm importer documents, HS Code, invoice, packing list, permits and delivery terms for remote project sites.',
    business:
      'Best for Namibia mining, renewable energy, construction and urgent repair cargo where ocean freight is too slow.',
    culture:
      'English is used in business. Project sites can be remote, so airport arrival is only one part of the delivery plan.',
  },
  mpm: {
    code: 'MPM',
    city: 'Maputo',
    country: 'Mozambique',
    title: 'MPM Maputo Air Freight from China for Mozambique Projects',
    description:
      'China to Maputo MPM air freight for Mozambique energy, mining, construction and industrial project cargo with Europe transit planning.',
    cargo: ['Energy project parts', 'Mining equipment spares', 'Construction machinery parts', 'Industrial cargo'],
    market:
      'Maputo is a key Mozambique gateway for industrial and project cargo. Large shipments need destination agent and inland delivery confirmation.',
    customs:
      'Confirm importer documents, Portuguese or English descriptions, HS Code, invoice, packing list and regulated goods requirements.',
    business:
      'Best for Mozambique energy, construction, mining and factory project cargo where delivery deadline is tight.',
    culture:
      'Portuguese is helpful for local documents. Chinese project cargo is common, but consignee and broker coordination must be done before departure.',
  },
  fih: {
    code: 'FIH',
    city: 'Kinshasa',
    country: 'Democratic Republic of the Congo',
    title: 'FIH Kinshasa Air Freight from China for DRC Projects',
    description:
      'China to Kinshasa FIH air freight for DRC project cargo, telecom equipment, government and industrial shipments via Europe or Africa hub routing.',
    cargo: ['Telecom equipment', 'Industrial equipment', 'Government project cargo', 'Urgent spare parts'],
    market:
      'Kinshasa is the main DRC capital gateway. It is different from FBM and often serves administrative, telecom and western DRC demand.',
    customs:
      'Confirm consignee documents, French descriptions, HS Code, invoice, packing list and whether cargo needs special permits or project approvals.',
    business:
      'Best for telecom, infrastructure, industrial and capital-region cargo that requires bilingual coordination and controlled documents.',
    culture:
      'French is important. DRC cargo should never be sold only by rate; consignee readiness and local handling capability decide the real result.',
  },
  add: {
    code: 'ADD',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    title: 'ADD Addis Ababa Air Freight from China for Ethiopia Cargo',
    description:
      'China to Addis Ababa ADD air freight for Ethiopia industrial cargo, machinery parts, medical equipment and East Africa project shipments.',
    cargo: ['Industrial equipment', 'Medical equipment', 'Factory spare parts', 'Project cargo'],
    market:
      'Addis Ababa is a major East Africa aviation hub and can be suitable for Ethiopia cargo or regional air cargo planning.',
    customs:
      'Confirm importer license, HS Code, invoice, packing list, permits for regulated goods and final delivery terms.',
    business:
      'Best for industrial, healthcare, manufacturing and infrastructure cargo requiring airfreight speed and clear document planning.',
    culture:
      'English is often used in international trade. Import control can be document-sensitive, so check permit and consignee readiness first.',
  },
  dss: {
    code: 'DSS',
    city: 'Dakar',
    country: 'Senegal',
    title: 'DSS Dakar Air Freight from China to Senegal',
    description:
      'China to Dakar DSS air freight for Senegal industrial cargo, construction equipment parts, medical equipment and West Africa project shipments.',
    cargo: ['Construction parts', 'Medical equipment', 'Industrial spares', 'Project machinery'],
    market:
      'Dakar is a key francophone West Africa gateway. It can support Senegal and regional projects when documents and routing are arranged early.',
    customs:
      'Prepare French descriptions, importer documents, HS Code, invoice, packing list and any regulated-goods permits.',
    business:
      'Best for Senegal infrastructure, healthcare, factory and trade cargo requiring reliable airfreight and French-language coordination.',
    culture:
      'French is the main business language. Local agent quality and document clarity are important for avoiding clearance delays.',
  },
  cmn: {
    code: 'CMN',
    city: 'Casablanca',
    country: 'Morocco',
    title: 'CMN Casablanca Air Freight from China for Morocco Cargo',
    description:
      'China to Casablanca CMN air freight for Morocco industrial cargo, automotive parts, machinery and North Africa project shipments.',
    cargo: ['Automotive parts', 'Factory equipment', 'Industrial spares', 'High-value cargo'],
    market:
      'Casablanca is a strong North Africa commercial gateway with manufacturing, automotive and industrial import demand.',
    customs:
      'Confirm importer documents, HS Code, invoice, packing list, regulated goods permits and whether French or Arabic documentation support is needed.',
    business:
      'Best for Morocco automotive, manufacturing, industrial and time-sensitive trade cargo.',
    culture:
      'French is widely useful in business. Morocco has a more developed logistics environment, but special cargo still needs handling checks.',
  },
  cai: {
    code: 'CAI',
    city: 'Cairo',
    country: 'Egypt',
    title: 'CAI Cairo Air Freight from China for Egypt Project Cargo',
    description:
      'China to Cairo CAI air freight for Egypt industrial cargo, energy projects, machinery parts and urgent equipment shipments.',
    cargo: ['Energy equipment', 'Industrial machinery', 'Factory spare parts', 'Project cargo'],
    market:
      'Cairo is a major North Africa and Middle East-linked cargo gateway. It is suitable for urgent industrial and project shipments.',
    customs:
      'Check importer documents, HS Code, invoice, packing list, permits, cargo description and any regulated import approvals before departure.',
    business:
      'Best for Egypt energy, manufacturing, infrastructure and urgent industrial maintenance cargo.',
    culture:
      'Arabic is local, English is common in international trade. Documents must be consistent because customs review can be strict.',
  },
}

type Slug = keyof typeof pages

const quoteFields = [
  'Commodity and clear cargo description',
  'HS Code and declared customs value',
  'Length x width x height for every package',
  'Gross weight and chargeable weight check',
  'Packing photos, crate material and forklift access',
  'Lifting points, center of gravity and loading direction',
  'Origin city in China and cargo ready date',
  'Final city, site address or airport pickup plan',
  'Latest required arrival date and urgency reason',
]

const routeSteps = [
  {
    title: '1. China origin feasibility',
    body: 'Before quoting, we check whether the cargo can leave China by passenger widebody belly, scheduled freighter, B747F main deck, truck-to-Europe combination or another practical export route.',
  },
  {
    title: '2. LGG/BRU Europe transit option',
    body: 'When China direct flights cannot accept the size or weight, LGG/BRU can be used as a Europe cargo hub for rebuild, handover, charter connection or Africa second-leg planning.',
  },
  {
    title: '3. Africa arrival and inland delivery',
    body: 'Airport arrival is not the end. The real plan must include customs broker readiness, ground handling, unloading tools, truck access and final delivery boundary.',
  },
]

function getFaq(item: (typeof pages)[Slug]) {
  return [
    {
      question: `Can oversized cargo fly from China to ${item.code} ${item.city}?`,
      answer: `It depends on package dimensions, gross weight, lifting points, aircraft availability and destination handling at ${item.code}. For large pieces, we first check loading feasibility before discussing the airfreight rate.`,
    },
    {
      question: `When should LGG/BRU Europe transit be considered for ${item.code}?`,
      answer: `LGG/BRU should be considered when China direct flights cannot accept the cargo size, weight or timing. Europe transit can create a workable second-leg option for Africa project cargo, but it must be checked case by case.`,
    },
    {
      question: `What documents are needed before quoting China to ${item.code} air freight?`,
      answer: `Send commodity, HS Code, invoice value, packing list, dimensions, gross weight, packing photos, lifting points, origin city, destination city and latest arrival requirement. Regulated goods may need extra permits.`,
    },
    {
      question: `Is ${item.code} suitable for mining or engineering project cargo?`,
      answer: `${item.business} The key is not only airport-to-airport freight, but whether customs, handling and inland delivery can support the project schedule.`,
    },
  ]
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = pages[params.slug as Slug]
  if (!item) {
    return {
      title: 'Africa Air Freight from China | EASCargo Jones',
    }
  }

  return {
    title: `${item.title} | EASCargo Jones`,
    description: item.description,
    alternates: {
      canonical: `https://www.eascargo.com/africa-air-freight/${params.slug}/`,
    },
    openGraph: {
      title: item.title,
      description: item.description,
      url: `https://www.eascargo.com/africa-air-freight/${params.slug}/`,
      type: 'website',
    },
  }
}

export default function AfricaDestinationPage({ params }: { params: { slug: string } }) {
  const item = pages[params.slug as Slug] || pages.jnb
  const currentSlug = params.slug as Slug
  const relatedPages = Object.entries(pages)
    .filter(([slug]) => slug !== currentSlug)
    .slice(0, 8)
  const faq = getFaq(item)

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <a href="/en/africa-oversized-air-freight/" className="mb-10 inline-flex text-sm font-semibold text-amberGold">
            China to Africa oversized air freight
          </a>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amberGold/40 bg-amberGold/10 px-4 py-2 text-sm font-semibold text-amberGold">
              <Plane className="h-4 w-4" />
              {item.code} - {item.city}, {item.country}
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">{item.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{item.description}</p>
            <a
              href={`mailto:globegsa@Gmail.com?subject=China%20to%20${item.code}%20oversized%20air%20freight%20quote`}
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950"
            >
              Send cargo details
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Destination profile</p>
            <h2 className="text-3xl font-bold md:text-4xl">What makes {item.code} different?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{item.market}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <div className="mb-4 flex items-center gap-3">
              <FileCheck2 className="h-6 w-6 text-amberGold" />
              <h3 className="text-xl font-semibold">Customs and document checks</h3>
            </div>
            <p className="leading-7 text-slate-600">{item.customs}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-6">
            <Globe2 className="mb-4 h-8 w-8 text-amberGold" />
            <h2 className="mb-3 text-2xl font-semibold">Local market and import profile</h2>
            <p className="leading-8 text-slate-600">{item.business}</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-6">
            <Truck className="mb-4 h-8 w-8 text-amberGold" />
            <h2 className="mb-3 text-2xl font-semibold">Business culture and coordination</h2>
            <p className="leading-8 text-slate-600">{item.culture}</p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Best fit cargo</p>
            <h2 className="text-3xl font-bold md:text-4xl">Cargo types usually worth checking first.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {item.cargo.map((cargo) => (
              <div key={cargo} className="flex gap-3 rounded-lg bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                <span className="leading-7 text-slate-600">{cargo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {routeSteps.map((step, index) => (
            <div key={step.title} className="rounded-xl border border-slate-200 p-6">
              {index === 0 && <Plane className="mb-4 h-8 w-8 text-amberGold" />}
              {index === 1 && <Globe2 className="mb-4 h-8 w-8 text-amberGold" />}
              {index === 2 && <Truck className="mb-4 h-8 w-8 text-amberGold" />}
              <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
              <p className="leading-7 text-slate-600">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Quote checklist</p>
            <h2 className="text-3xl font-bold md:text-4xl">Send these details before asking for a {item.code} rate.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              For oversized air cargo, a low quote without these details is usually not a real solution.
              This checklist helps us judge whether the cargo can be loaded, transferred, cleared and delivered.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {quoteFields.map((field) => (
              <div key={field} className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm font-semibold leading-6 text-slate-200">
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">FAQ</p>
          <h2 className="text-3xl font-bold md:text-4xl">Common questions about China to {item.code} air freight.</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {faq.map((entry) => (
            <div key={entry.question} className="rounded-xl border border-slate-200 p-6">
              <h3 className="mb-3 text-lg font-semibold">{entry.question}</h3>
              <p className="leading-7 text-slate-600">{entry.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Related destinations</p>
            <h2 className="text-3xl font-bold md:text-4xl">Other Africa project cargo routes to compare.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedPages.map(([slug, page]) => (
              <a
                key={slug}
                href={`/africa-air-freight/${slug}/`}
                className="rounded-xl border border-slate-200 bg-white p-5 transition hover:border-amberGold"
              >
                <div className="mb-2 text-2xl font-bold">{page.code}</div>
                <div className="font-semibold text-amberGold">{page.city}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600">{page.country}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: item.title,
            provider: { '@type': 'Organization', name: 'EASCargo Jones', url: 'https://www.eascargo.com' },
            areaServed: item.country,
            serviceType: 'Oversized air freight and project cargo routing',
            description: item.description,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((entry) => ({
              '@type': 'Question',
              name: entry.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: entry.answer,
              },
            })),
          }),
        }}
      />
    </main>
  )
}
