import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, FileCheck2, Globe2, Plane, Truck } from 'lucide-react'

const pages = {
  jnb: {
    code: 'JNB',
    city: 'Johannesburg',
    country: 'South Africa',
    title: 'JNB Johannesburg Oversized Air Freight from China',
    description:
      'China major air cargo gateways to Johannesburg JNB for mining, engineering and urgent project cargo. Compare PVG, CAN, SZX, PEK, XMN, FOC, CTU, CKG and HAK origin options with global transit, main-deck planning, SARS customs and Southern Africa delivery.',
    cargo: ['Mining spare parts', 'Engineering equipment', 'Automotive parts', 'High-value urgent project cargo'],
    market:
      'O.R. Tambo International Airport is South Africa\'s principal international cargo gateway. Airports Company South Africa states that the airport has annual cargo facilitation capacity of 650,000 tonnes and direct road access to the national network.',
    customs:
      'Check the South African importer or registered agent, customs code, HS Code, commercial invoice, packing list, AWB data and Goods Declaration before booking. Restricted goods may need a permit, certificate or Letter of Authority; used goods can require ITAC import control.',
    business:
      'Best for urgent mining spares, industrial maintenance cargo, automotive parts and high-value equipment serving Gauteng, South Africa and selected Southern Africa projects after route-specific customs and trucking checks.',
    culture:
      'English business communication is common, but the importer, customs broker, airline handler and final-site receiver must agree on documents, release responsibility, truck appointment and unloading before departure.',
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
      'China major air cargo gateways to Lusaka LUN for Zambia industrial equipment, mining spares and urgent project cargo. Compare nationwide pickup, LGG/BRU main-deck transit, LUN versus NLA entry, ZRA/ASYCUDA data and Copperbelt delivery.',
    cargo: ['Mining spare parts', 'Chemical pumps', 'Generators', 'Factory equipment', 'Industrial maintenance parts'],
    market:
      'Lusaka is an important entry point for Zambia industrial and mining supply chains. Project cargo often needs stable documents and clear delivery timing.',
    customs:
      'Align the importer and appointed clearing agent, HS Code, commercial invoice, packing list, AWB data, cargo value, permits and any ZCSA checks before shipment. Zambia air-cargo manifest data may be filed electronically through the ZRA ASYCUDA ACI process before arrival.',
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
  oua: {
    code: 'OUA',
    city: 'Ouagadougou',
    country: 'Burkina Faso',
    title: 'OUA Ouagadougou Air Freight from China for Burkina Faso Projects',
    description:
      'China to Ouagadougou OUA air freight for Burkina Faso mining, infrastructure, energy and urgent project cargo via ADD, Europe or West Africa hub routing.',
    cargo: ['Mining spare parts', 'Infrastructure project cargo', 'Power equipment', 'Urgent industrial spares'],
    market:
      'Ouagadougou is an inland West Africa destination. Route planning must account for limited uplift, destination handling and importer readiness before shipment.',
    customs:
      'Prepare French cargo descriptions, HS Code, invoice, packing list, importer documents, permits and destination agent confirmation before booking.',
    business:
      'Best for Burkina Faso mining, energy, infrastructure and emergency spare parts where air freight protects the project schedule.',
    culture:
      'French is the practical documentation language. Because routing choices can be limited, cargo dimensions and final delivery deadline should be confirmed early.',
  },
  hre: {
    code: 'HRE',
    city: 'Harare',
    country: 'Zimbabwe',
    title: 'HRE Harare Air Freight from China for Zimbabwe Cargo',
    description:
      'China to Harare HRE air freight for Zimbabwe mining, agriculture, factory equipment, medical and industrial cargo via Africa hub or Europe transit.',
    cargo: ['Agricultural machinery parts', 'Mining spare parts', 'Factory equipment', 'Medical and telecom equipment'],
    market:
      'Harare serves Zimbabwe industrial, mining and agricultural import demand. Landed cost and consignee readiness matter as much as the air sector.',
    customs:
      'Confirm importer documentation, HS Code, invoice, packing list, permits, cargo value and destination pickup or delivery responsibility before departure.',
    business:
      'Best for Zimbabwe mining, agriculture, factory maintenance and urgent equipment replacement cargo.',
    culture:
      'English is commonly used in trade. Customers often care about total landed cost, so destination charges and clearance requirements should be explained before booking.',
  },
  nim: {
    code: 'NIM',
    city: 'Niamey',
    country: 'Niger',
    title: 'NIM Niamey Air Freight from China for Niger Projects',
    description:
      'China to Niamey NIM air freight for Niger energy, construction, humanitarian, mining and urgent industrial cargo via ADD, Europe or West Africa routing.',
    cargo: ['Energy project cargo', 'Construction equipment parts', 'Humanitarian supplies', 'Urgent industrial spares'],
    market:
      'Niamey is an inland Sahel destination where route options, documents and local agent response must be checked before committing to a delivery promise.',
    customs:
      'Confirm French descriptions, HS Code, invoice, packing list, consignee documents, permits and final delivery handover before shipment.',
    business:
      'Best for energy, infrastructure, mining support and emergency cargo where airfreight speed is needed but routing options are limited.',
    culture:
      'French communication is useful. For inland Sahel cargo, the professional task is to verify route feasibility and consignee readiness before rate negotiation.',
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
type DeepDive = {
  heading: string
  intro: string
  scenarios: string[]
  risks: string[]
  salesAngle: string
}

const chineseDestinations: Record<Slug, { city: string; country: string; keywords: string[] }> = {
  jnb: { city: '约翰内斯堡', country: '南非', keywords: ['JNB约翰内斯堡空运', '南非矿业设备空运', '南部非洲项目货'] },
  fbm: { city: '卢本巴希', country: '刚果金', keywords: ['FBM卢本巴希空运', '刚果金矿业设备空运', '铜钴矿区备件空运'] },
  lun: { city: '卢萨卡', country: '赞比亚', keywords: ['LUN卢萨卡空运', '赞比亚矿业备件空运', '中国到赞比亚空运'] },
  lbv: { city: '利伯维尔', country: '加蓬', keywords: ['LBV利伯维尔空运', '加蓬超长货空运', 'B747F开鼻门装载'] },
  nbo: { city: '内罗毕', country: '肯尼亚', keywords: ['NBO内罗毕空运', '肯尼亚项目货空运', '东非空运Hub'] },
  ebb: { city: '恩德培', country: '乌干达', keywords: ['EBB恩德培空运', '乌干达项目货空运', '中国到乌干达空运'] },
  los: { city: '拉各斯', country: '尼日利亚', keywords: ['LOS拉各斯空运', '尼日利亚空运清关', '中国到尼日利亚空运'] },
  acc: { city: '阿克拉', country: '加纳', keywords: ['ACC阿克拉空运', '加纳项目货空运', '中国到加纳空运'] },
  abj: { city: '阿比让', country: '科特迪瓦', keywords: ['ABJ阿比让空运', '科特迪瓦空运', '西非法语区空运'] },
  bko: { city: '巴马科', country: '马里', keywords: ['BKO巴马科空运', '马里项目货空运', '西非内陆空运'] },
  cky: { city: '科纳克里', country: '几内亚', keywords: ['CKY科纳克里空运', '几内亚矿业设备空运', '铝土矿项目货空运'] },
  oua: { city: '瓦加杜古', country: '布基纳法索', keywords: ['OUA瓦加杜古空运', '布基纳法索空运', '萨赫勒项目货空运'] },
  hre: { city: '哈拉雷', country: '津巴布韦', keywords: ['HRE哈拉雷空运', '津巴布韦空运', '南部非洲工业设备空运'] },
  nim: { city: '尼亚美', country: '尼日尔', keywords: ['NIM尼亚美空运', '尼日尔空运', '萨赫勒紧急空运'] },
  kgl: { city: '基加利', country: '卢旺达', keywords: ['KGL基加利空运', '卢旺达空运', '东非内陆空运'] },
  dar: { city: '达累斯萨拉姆', country: '坦桑尼亚', keywords: ['DAR达累斯萨拉姆空运', '坦桑尼亚项目货空运', '东非工程设备空运'] },
  cpt: { city: '开普敦', country: '南非', keywords: ['CPT开普敦空运', '南非开普敦空运', '海工设备空运'] },
  dur: { city: '德班', country: '南非', keywords: ['DUR德班空运', '南非德班空运', '港口设备空运'] },
  wdh: { city: '温得和克', country: '纳米比亚', keywords: ['WDH温得和克空运', '纳米比亚矿业设备空运', '中国到纳米比亚空运'] },
  mpm: { city: '马普托', country: '莫桑比克', keywords: ['MPM马普托空运', '莫桑比克项目货空运', '能源设备空运'] },
  fih: { city: '金沙萨', country: '刚果金', keywords: ['FIH金沙萨空运', '刚果金空运', '中非项目货空运'] },
  add: { city: '亚的斯亚贝巴', country: '埃塞俄比亚', keywords: ['ADD亚的斯亚贝巴空运', '埃塞俄比亚空运', 'ET空运中转'] },
  dss: { city: '达喀尔', country: '塞内加尔', keywords: ['DSS达喀尔空运', '塞内加尔空运', '西非法语区项目货'] },
  cmn: { city: '卡萨布兰卡', country: '摩洛哥', keywords: ['CMN卡萨布兰卡空运', '摩洛哥空运', '北非空运'] },
  cai: { city: '开罗', country: '埃及', keywords: ['CAI开罗空运', '埃及项目货空运', '北非工程设备空运'] },
}

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

const urgentSparePartChecks = [
  'Downtime deadline and latest acceptable site arrival',
  'Longest piece, heaviest piece and main-deck loading need',
  'Importer documents, regulated-goods permits and customs broker readiness',
  'Airport pickup, inland truck, unloading tools and final-site handover',
]

const jnbCapacityChecks = [
  'Can the cargo move through HAK/JNB, or does it still need LGG/BRU main-deck planning?',
  'Is JNB the true handover point, or only the first airport before a mine, plant or cross-border truck leg?',
  'Do SARS, NRCS, ITAC or importer-side documents match the cargo description before booking?',
]

const southAfricaCoastalChecks = [
  'Is CPT or DUR closer to the final site than a JNB handover plus inland trucking?',
  'Do the commercial invoice, HS Code, origin, importer and regulated-goods documents match before uplift?',
  'Does the cargo need marine, port, factory or cold-chain handling instead of a normal airport pickup?',
]

const nigeriaOilGasChecks = [
  'Is LOS the right clearance airport, or is PHC needed for Port Harcourt, Onne, Bonny, Warri or oil-service delivery?',
  'Do Form M, PAAR, SONCAP or National Single Window responsibilities match the AWB, invoice and product certificate data?',
  'Is the quote boundary airport-only, customs-assisted, airport pickup, or final-site delivery for a shutdown spare?',
]

const chinaOriginClusters = [
  {
    region: '华东出口口岸',
    airports: 'PVG / HGH / NKG',
    coverage: '上海、江苏、浙江、安徽及周边制造业货源',
    decision: '优先比较宽体腹舱、全货机衔接、欧洲或全球Hub中转，以及超限件国内集卡成本。',
  },
  {
    region: '华南及香港口岸',
    airports: 'CAN / SZX / HKG / HAK',
    coverage: '广东、广西、海南和珠三角工厂货源',
    decision: '比较广州、深圳、香港国际网络与海南可用资源，逐票核实主甲板、跨境交接和目的港接受条件。',
  },
  {
    region: '华北及东北口岸',
    airports: 'PEK / PKX / TSN / TAO / DLC / SHE',
    coverage: '北京、天津、山东、河北及东北工业货源',
    decision: '根据货物位置、国内运输、航司收货限制和中转窗口选择北京、天津、青岛或东北集货方案。',
  },
  {
    region: '华中及西部口岸',
    airports: 'WUH / CGO / XIY / CTU / TFU / CKG',
    coverage: '湖北、河南、陕西、四川、重庆及西部项目货源',
    decision: '比较本地起运与卡车转PVG/CAN/SZX等枢纽的总成本、装载可行性和最晚到货时间。',
  },
  {
    region: '福建及东南沿海口岸',
    airports: 'XMN / FOC',
    coverage: '厦门、福州、泉州及福建周边工厂货源',
    decision: 'FOC和XMN都是全国网络中的起运选项；本地舱位不适合时，再比较华东或华南枢纽集运。',
  },
]

type OriginStrategy = {
  heading: string
  intro: string
  routeOptions: Array<{ title: string; body: string }>
}

const originStrategies: Partial<Record<Slug, OriginStrategy>> = {
  jnb: {
    heading: '全国主要航空口岸到 JNB：先选起运区域，再比较逐票路线。',
    intro:
      'EASCargo不把JNB限定为某一个中国起运机场。根据货物所在地、单件尺寸重量和时效，比较全国主要口岸，再判断全球中转网络、HAK全货机容量信号和LGG/BRU主甲板方案。',
    routeOptions: [
      {
        title: 'China gateway and domestic feeder',
        body: 'Compare uplift from the nearest major airport with domestic trucking to a stronger gateway. The correct origin depends on total landed route cost, longest piece, heaviest piece, cargo-ready date and confirmed transfer acceptance, not airport code alone.',
      },
      {
        title: 'Global hub connection',
        body: 'ADD, DXB/DWC and IST are route families to screen for JNB, while other hubs may be available by shipment. Published connectivity does not prove acceptance: every booking still needs current capacity, aircraft, interline and transfer checks.',
      },
      {
        title: 'HAK-JNB freighter capacity signal',
        body: 'Astral Aviation has publicly documented a Haikou-Johannesburg Boeing 767-300 freighter launch. Treat HAK as a capacity option to verify for each shipment, not a permanent schedule or guaranteed allocation.',
      },
      {
        title: 'LGG / BRU main-deck alternative',
        body: 'When a piece cannot fit passenger belly or a connecting freighter, compare Europe transit and main-deck loading. Confirm door size, contour, floor loading, build-up, transfer handling and JNB unloading before quoting.',
      },
    ],
  },
  fbm: {
    heading: '全国主要航空口岸到 FBM：路线必须落到铜钴矿区交付。',
    intro:
      'FBM不是换一个机场代码的普通非洲报价。全国集货后，要把可装载机型、欧洲或非洲Hub衔接、刚果金进口资料、Lubumbashi卸货和最终矿区交付放在同一票方案里。',
    routeOptions: [
      {
        title: 'Nearest gateway vs stronger freighter gateway',
        body: 'Compare local uplift with trucking to PVG, CAN, SZX, HKG or another stronger export gateway. Pumps, transformers and electrical cabinets must be checked by single-piece dimensions, floor loading, lifting points and transfer acceptance.',
      },
      {
        title: 'LGG / BRU and Africa second-leg planning',
        body: 'For pieces rejected by normal belly routes, Europe transit can create a main-deck option. The second leg into FBM, transfer warehouse, build-up and destination unloading must all be confirmed before the Europe sector is booked.',
      },
      {
        title: 'Africa hub comparison',
        body: 'ADD, NBO, JNB or another African hub may be screened when current interline or truck options support the shipment. Do not assume a hub connection is valid until transit customs, piece acceptance and handover responsibility are confirmed.',
      },
      {
        title: 'FBM clearance and mine-site handover',
        body: 'The quote boundary must state whether it ends at FBM airport, includes customs coordination, or continues to a Copperbelt mine or plant. French cargo descriptions, consignee documents, unloading tools and final truck access are shipment-critical.',
      },
    ],
  },
  lun: {
    heading: '全国主要航空口岸到 LUN：不能把Lusaka机场价当作最终交付价。',
    intro:
      'LUN可承接赞比亚工业、能源、矿业和工厂急件，但全国起运后仍要区分只到Lusaka、继续到Copperbelt，还是交付Ndola、Kitwe或具体项目现场。',
    routeOptions: [
      {
        title: 'China origin and global hub screening',
        body: 'Compare the nearest China uplift with stronger gateways and current hub connections. Passenger belly, freighter and interline acceptance must be checked against the longest and heaviest piece before selecting the origin airport.',
      },
      {
        title: 'Europe main-deck option for oversized pieces',
        body: 'LGG/BRU can be compared when standard connections cannot accept package height, length or weight. Confirm the Africa second leg, transfer build-up and LUN ground handling before promising a route.',
      },
      {
        title: 'LUN arrival vs regional extension',
        body: 'A route ending at LUN is different from a plan continuing to Ndola, Kitwe, a mine or an industrial site. Compare airport clearance, in-country trucking and any alternative regional gateway on total delivery responsibility.',
      },
      {
        title: 'Zambia documents and final-site readiness',
        body: 'Importer information, HS Code, invoice, packing list, permits, packing photos, truck access and unloading equipment must be aligned before departure. A fast flight does not solve an unprepared consignee or project site.',
      },
    ],
  },
  lbv: {
    heading: '全国主要航空口岸到 LBV：长货先判断能不能装，再讨论价格。',
    intro:
      'LBV的核心不是从哪个中国机场报出最低公斤价，而是长货、油气设备和工程件能否完成国内集运、主甲板装载、欧洲或非洲中转、Libreville卸货和项目现场交接。',
    routeOptions: [
      {
        title: 'China gateway fit for long cargo',
        body: 'Compare nationwide pickup and export gateways by aircraft door, contour, floor loading and warehouse handling. The nearest airport may be unsuitable for a six-to-eight-metre piece even when ordinary cargo capacity exists.',
      },
      {
        title: 'LGG / BRU and B747F feasibility',
        body: 'Europe transit and B747F main-deck or nose-door planning may unlock long cargo, but only after loading direction, center of gravity, crate strength, transfer build-up and second-leg acceptance are checked.',
      },
      {
        title: 'Africa connection and LBV handling',
        body: 'Any Africa hub or direct second leg must be screened against the actual piece. Confirm LBV unloading equipment, forklift or crane access, storage constraints and truck collection before cargo leaves China.',
      },
      {
        title: 'Gabon documents and project-site delivery',
        body: 'French-compatible cargo descriptions, consignee readiness, customs broker responsibility and final oil, energy or construction site access must be clear. Airport arrival is only one milestone in the project plan.',
      },
    ],
  },
}

const jnbOfficialFacts = [
  {
    label: 'O.R. Tambo airport and cargo capacity',
    detail: 'ACSA describes JNB as its flagship airport, connected to South Africa\'s national road network, with annual cargo facilitation capacity of 650,000 tonnes.',
    href: 'https://www.airports.co.za/airports/or-tambo-international-airport/the-airport/about-or-tambo',
  },
  {
    label: 'South African importer and Goods Declaration',
    detail: 'SARS requires importers or their agents to declare imported goods; foreign importers must nominate a registered agent in South Africa.',
    href: 'https://www.sars.gov.za/customs-and-excise/registration-licensing-and-accreditation/importers/',
  },
  {
    label: 'Restricted and controlled goods',
    detail: 'SARS states that restricted goods may enter only under specified conditions, such as a permit, certificate or Letter of Authority from the responsible authority.',
    href: 'https://www.sars.gov.za/customs-and-excise/prohibited-restricted-and-counterfeit-goods/',
  },
  {
    label: 'Used and second-hand goods import control',
    detail: 'South African government guidance says used goods, second-hand goods, waste and scrap are subject to import control and should be checked with ITAC before shipment.',
    href: 'https://www.gov.za/services/import/import-permit-general-goods',
  },
  {
    label: 'JNB road-feeder reach',
    detail: 'Carrier-published road networks show JNB links into South African cities and selected Southern Africa points; availability and cargo acceptance must be reconfirmed per shipment.',
    href: 'https://www.turkishcargo.com/documents/karayolu_tasimaciligi/EN/africa_truck_service2.pdf',
  },
]

const lunOfficialFacts = [
  {
    label: 'LUN and NLA are different Zambia gateways',
    detail: 'Zambia Airports Corporation identifies Kenneth Kaunda International Airport in Lusaka and Simon Mwansa Kapwepwe International Airport in Ndola among the international airports it manages. Final-site geography should therefore be checked before choosing a Zambia entry point.',
    href: 'https://www.zacl.co.zm/corporate',
  },
  {
    label: 'Zambia import documents and ASYCUDA',
    detail: 'Trade.gov lists airway bills and commercial invoices among customs-clearance documents and states that ZRA uses ASYCUDA. It also notes the Import Declaration Form and product-specific advance certification requirements.',
    href: 'https://www.trade.gov/country-commercial-guides/zambia-import-requirements-documentation',
  },
  {
    label: 'Advanced Cargo Information for air cargo',
    detail: 'ASYCUDA reports that Zambia introduced an ACI module at international airports so airlines and cargo couriers can submit electronic manifests before arrival using ASYCUDAWorld and IATA Cargo XML standards.',
    href: 'https://asycuda.org/en/zambia-pilots-advanced-cargo-information-module-at-international-airports/',
  },
  {
    label: 'ZRA air-cargo filing responsibility',
    detail: 'ZRA guidance says air cargo is reported electronically before arrival and distinguishes carrier manifest and AWB filing from freight-forwarder house-waybill filing. Shipment data should be aligned before uplift rather than corrected after arrival.',
    href: 'https://www.zra.org.zm/wp-content/uploads/2024/02/ASYCUDA_IATA_Cargo_XML_Filing_Guidance_Version_Zambia.pdf',
  },
  {
    label: 'Appointment of a Zambia clearing agent',
    detail: 'ZRA states that importers and exporters appoint licensed clearing agents through a module linked to ASYCUDAWorld. The appointed broker and importer identity should be confirmed before the cargo departs China.',
    href: 'https://www.zra.org.zm/appointment-of-clearing-agents-2/',
  },
]

const lunGatewayChecks = [
  'Is the final site in Lusaka, Ndola, Kitwe, Mufulira, Chingola or another Copperbelt or project location?',
  'Can the longest and heaviest piece be accepted through LUN, or should NLA or another currently confirmed regional route be compared?',
  'Are the importer, appointed broker, AWB data, invoice, packing list, HS Code and permit or ZCSA checks aligned before uplift?',
  'Does the quote stop at the airport, include customs coordination, or continue to the factory, mine or project site with unloading?',
]

const coreRouteModifiedDates: Partial<Record<Slug, string>> = {
  jnb: '2026-07-13',
  fbm: '2026-07-13',
  lun: '2026-07-16',
  lbv: '2026-07-13',
}

const deepDives: Partial<Record<Slug, DeepDive>> = {
  jnb: {
    heading: 'Deep route note for JNB Johannesburg oversized cargo',
    intro:
      'JNB is the benchmark route for many Africa oversized cargo quotes because it has stronger airport handling, more freight options and better inland distribution than many secondary African points. The trap is assuming that JNB solves every South Africa shipment. For oversized project cargo, we still compare final delivery city, unloading equipment, customs broker readiness and whether CPT or DUR is actually closer to the job site.',
    scenarios: [
      'Mining or engineering spare parts for South Africa plants where downtime cost is higher than airfreight cost.',
      'High-value automotive or industrial parts that can fly to JNB and move inland by controlled truck.',
      'Oversized pieces rejected by China direct options, then rebuilt through LGG/BRU or a freighter-capable hub.',
    ],
    risks: [
      'Quoting airport-to-airport only while the customer needs mine-site or factory-site delivery.',
      'Ignoring package height, forklift pockets, lifting points and unloading responsibility.',
      'Treating Johannesburg as the final answer when Cape Town or Durban may reduce inland cost.',
    ],
    salesAngle:
      'For JNB inquiries, the professional position is not just "we have airfreight to South Africa". It is "send dimensions and final site first, then we judge whether JNB is the right entry point or only the cheapest looking airport".',
  },
  fbm: {
    heading: 'Deep route note for FBM Lubumbashi mining cargo',
    intro:
      'FBM is a high-intent project cargo destination because Lubumbashi is tied to the Copperbelt mining supply chain. Buyers are often not shopping for ordinary freight; they are trying to rescue production, maintenance or a site deadline. For this route, customs broker capability, consignee readiness and final mine-site handover are as important as the air sector.',
    scenarios: [
      'Copperbelt mining spare parts, pumps, transformers, electrical cabinets and repair equipment.',
      'Urgent plant maintenance cargo where a few days of delay can cost more than the freight bill.',
      'Heavy pieces that need Europe transit and Africa hub extension because China direct acceptance is limited.',
    ],
    risks: [
      'Customer only provides "airport FBM" but the real destination is a mine or remote industrial site.',
      'French document description, HS Code and invoice value are inconsistent across documents.',
      'Destination unloading conditions are not confirmed before the cargo leaves China.',
    ],
    salesAngle:
      'For FBM, sell risk control, not cheap freight. The buyer needs someone to tell them early whether the route is executable, which documents can block clearance and where the final delivery responsibility starts.',
  },
  lun: {
    heading: 'Deep route note for LUN Lusaka industrial and mining cargo',
    intro:
      'LUN is often used for Zambia industrial, mining and maintenance cargo. Compared with FBM, the business communication is usually easier in English, but the route still needs a strict pre-check for HS Code, permits, consignee readiness and whether the final delivery goes beyond Lusaka.',
    scenarios: [
      'Mining support equipment, pumps, motors, chemical plant spares and generators.',
      'Factory maintenance cargo where stable arrival date matters more than the lowest rate.',
      'Project cargo for Zambia where the consignee needs clear document guidance before shipment.',
    ],
    risks: [
      'Assuming all Zambia cargo ends in Lusaka while the final site may be far from the airport.',
      'Missing permit or license checks for regulated industrial or chemical-related cargo.',
      'Underestimating packaging, moisture protection and handling requirements for valuable equipment.',
    ],
    salesAngle:
      'For LUN, the strongest selling point is clarity: route, document checklist, customs notes and final delivery boundary in one answer before the customer commits.',
  },
  lbv: {
    heading: 'Deep route note for LBV Libreville long cargo',
    intro:
      'LBV is a good page to prove expertise because long cargo cannot be sold with a normal airfreight mindset. An 8-meter piece may need B747F nose-door loading, main-deck checks, Europe transit and destination ground handling confirmation. This is exactly where factories and trading companies need someone to judge feasibility before price.',
    scenarios: [
      'Long engineering cargo around 6-8 meters where belly space is impossible.',
      'Oil, energy, construction and Central Africa project cargo requiring controlled handover.',
      'Cargo rejected by standard carriers but possible through B747F and LGG/BRU coordination.',
    ],
    risks: [
      'Only checking weight while ignoring length, center of gravity and loading direction.',
      'Destination airport cannot confirm unloading equipment or truck access in time.',
      'French document communication is late and customs description does not match cargo photos.',
    ],
    salesAngle:
      'For LBV, show the customer that the real product is feasibility judgment: can it load, where to transit, who handles it and what must be confirmed before money is spent.',
  },
  los: {
    heading: 'Deep route note for LOS Lagos heavy cargo',
    intro:
      'LOS has large import demand, but Nigeria cargo is document-sensitive. The freight rate is only one part of the result. Importer documents, SONCAP or regulated goods checks, Form M where applicable, HS Code and local broker quality can change the real landed cost and timeline.',
    scenarios: [
      'Oil and gas spare parts, factory machinery, power equipment and high-value urgent cargo.',
      'Industrial cargo where customs preparation affects the real delivery date more than flight time.',
      'Heavy cargo that needs Europe transit or hub routing before entering Nigeria.',
    ],
    risks: [
      'The customer compares only freight rate and ignores destination charges or clearance risk.',
      'Regulated goods documents are missing before cargo departure.',
      'Invoice value, HS Code and product description are not aligned with Nigerian import requirements.',
    ],
    salesAngle:
      'For LOS, position the service as landed-risk control. Explain early that a cheap airfreight quote can become expensive if customs preparation is weak.',
  },
  abj: {
    heading: 'Deep route note for ABJ Abidjan and francophone West Africa',
    intro:
      'ABJ is an important gateway for Cote dIvoire and nearby francophone West Africa. For Chinese factories and traders, the value is often bilingual coordination: English or Chinese on the origin side, French-compatible document logic on the destination side.',
    scenarios: [
      'Construction machinery parts, industrial equipment, energy project cargo and oversized spares.',
      'West Africa project cargo that needs a practical alternative when direct options are limited.',
      'Cargo for French-speaking consignees where document wording must be controlled.',
    ],
    risks: [
      'Cargo description is translated casually and does not match HS Code or invoice.',
      'Local broker and consignee are not aligned before the shipment leaves China.',
      'Oversized pieces are quoted without destination handling confirmation.',
    ],
    salesAngle:
      'For ABJ, the message should be "we reduce communication gaps". The customer is paying for route judgment plus Chinese-English-French coordination, not just kilograms.',
  },
  nbo: {
    heading: 'Deep route note for NBO Nairobi and East Africa distribution',
    intro:
      'NBO is one of the strongest East Africa cargo hubs. It is useful for Kenya projects and sometimes regional distribution, but the right solution depends on whether the cargo ends in Nairobi, moves to another Kenyan city, or continues to nearby countries.',
    scenarios: [
      'Telecom, medical, infrastructure and factory spare parts for Kenya or East Africa projects.',
      'Project cargo where NBO offers a better regional hub option than a smaller final airport.',
      'Oversized pieces needing a balance of airport handling capability and inland delivery planning.',
    ],
    risks: [
      'Assuming NBO is final destination while customer needs inland or cross-border delivery.',
      'Medical or regulated cargo permits are not checked before booking.',
      'Packaging and handling notes are too vague for fragile or high-value equipment.',
    ],
    salesAngle:
      'For NBO, sell regional judgment. Help the buyer decide whether to clear in Kenya, transfer inland, or use another East Africa route.',
  },
  acc: {
    heading: 'Deep route note for ACC Accra Ghana project cargo',
    intro:
      'ACC is a strong West Africa destination for Ghana mining, healthcare, construction and industrial cargo. The opportunity is not only moving cargo into Accra, but explaining destination charges, customs documents and delivery expectations clearly before the buyer approves.',
    scenarios: [
      'Mining spare parts, medical equipment, industrial machinery and construction project cargo.',
      'High-value or fragile equipment that needs predictable handling and customs preparation.',
      'Urgent cargo where airfreight is used to protect a project or maintenance schedule.',
    ],
    risks: [
      'Destination cost items are not explained and the customer only sees the airfreight line.',
      'Importer tax identity, permit requirements or product classification are not ready.',
      'Fragile or heavy equipment arrives without clear unloading and delivery responsibility.',
    ],
    salesAngle:
      'For ACC, win trust by being transparent about what is included, what is not included and what the consignee must prepare before cargo departure.',
  },
}

function getFaq(item: (typeof pages)[Slug]) {
  const commonFaq = [
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

  const nationwideOriginFaq = ['JNB', 'FBM', 'LUN', 'LBV'].includes(item.code)
    ? {
        question: `Which China airports can be used for ${item.code} ${item.city} air freight?`,
        answer: `EASCargo compares PVG, HGH, NKG, CAN, SZX, HKG, PEK, PKX, TSN, TAO, XMN, FOC, WUH, CGO, CTU, TFU, CKG, XIY and HAK according to cargo location and current acceptance. These are origin options, not claims of direct service. Heavy or oversized pieces may need domestic trucking to a stronger gateway, global hub transit or LGG/BRU main-deck planning.`,
      }
    : null

  if (item.code === 'LUN') {
    return [
      nationwideOriginFaq!,
      {
        question: 'Should Zambia project cargo arrive at LUN Lusaka or NLA Ndola?',
        answer:
          'Choose only after checking the final site, cargo acceptance and total delivery responsibility. LUN can suit Lusaka and national project demand, while NLA may be worth screening for Ndola, Kitwe and Copperbelt sites. Neither airport code proves current capacity or oversized-piece acceptance.',
      },
      {
        question: 'What Zambia customs data should be ready before LUN uplift?',
        answer:
          'Align the importer and appointed clearing agent, HS Code, commercial invoice, packing list, AWB and house-waybill data, value, origin and any permits or ZCSA checks. ZRA air-cargo electronic manifest requirements make consistent pre-arrival data important.',
      },
      ...commonFaq.slice(0, 2),
    ]
  }

  if (item.code !== 'JNB') return nationwideOriginFaq ? [nationwideOriginFaq, ...commonFaq] : commonFaq

  return [
    {
      question: 'Which China airports can be used for JNB Johannesburg air freight?',
      answer: nationwideOriginFaq!.answer,
    },
    {
      question: 'What must a South African importer prepare before JNB arrival?',
      answer:
        'Confirm the importer or registered agent, customs code, clearing broker, HS Code, invoice, packing list, AWB data and Goods Declaration inputs. Restricted products may require a permit, certificate or Letter of Authority, and used goods may require ITAC import control before shipment.',
    },
    {
      question: 'Can JNB be used for delivery beyond Johannesburg?',
      answer:
        'JNB can support inland and selected cross-border planning, but it is not automatic. Confirm whether cargo clears in South Africa, moves in bond or in transit, which carrier or trucker accepts the piece, and who controls permits, proof of export, unloading and final-site delivery.',
    },
    ...commonFaq,
  ]
}

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = pages[params.slug as Slug]
  const chinese = chineseDestinations[params.slug as Slug]
  if (!item) {
    return {
      title: 'Africa Air Freight from China | EASCargo Jones',
    }
  }

  const title = chinese
    ? currentMetadataTitle(params.slug as Slug, item, chinese)
    : `${item.title} | EASCargo Jones`
  const description = chinese
    ? currentMetadataDescription(params.slug as Slug, item, chinese)
    : item.description

  return {
    title,
    description,
    keywords: [
      ...(chinese?.keywords || []),
      ...(params.slug === 'jnb'
        ? ['中国各大机场到JNB空运', '华东到南非空运', '华南到JNB空运', '华北到JNB空运', 'FOC JNB空运']
        : params.slug === 'lun'
          ? ['中国各大机场到LUN空运', 'LUN全国集货空运', 'LUN还是NLA', '赞比亚ZRA ASYCUDA空运', '铜带矿区备件空运']
        : ['fbm', 'lbv'].includes(params.slug)
          ? [`中国各大机场到${item.code}空运`, `${item.code}全国集货空运`, `${item.code}项目货路线`]
        : []),
      `${item.code} air freight`,
      `China to ${item.city} air freight`,
      '中国到非洲空运',
      '非洲大件项目货',
      'LGG BRU欧洲中转',
      '矿业设备空运',
    ],
    alternates: {
      canonical: `https://www.eascargo.com/africa-air-freight/${params.slug}/`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.eascargo.com/africa-air-freight/${params.slug}/`,
      type: 'website',
    },
  }
}

function currentMetadataTitle(
  slug: Slug,
  item: (typeof pages)[Slug],
  chinese: (typeof chineseDestinations)[Slug],
) {
  if (slug === 'jnb') return 'JNB约翰内斯堡空运 | 中国各大机场到南非项目货 | EASCargo Jones'
  if (slug === 'fbm') return 'FBM卢本巴希空运 | 中国各大机场到刚果金矿业项目货 | EASCargo Jones'
  if (slug === 'lun') return 'LUN卢萨卡空运 | 中国各大机场到赞比亚项目货 | EASCargo Jones'
  if (slug === 'lbv') return 'LBV利伯维尔空运 | 中国各大机场到加蓬长货项目 | EASCargo Jones'
  return `${item.code} ${chinese.city}空运 | 中国到${chinese.country}大件项目货 | EASCargo Jones`
}

function currentMetadataDescription(
  slug: Slug,
  item: (typeof pages)[Slug],
  chinese: (typeof chineseDestinations)[Slug],
) {
  if (slug === 'jnb') {
    return '中国各大机场到JNB约翰内斯堡空运：比较PVG、CAN、SZX、PEK、XMN、FOC、CTU、CKG、HAK起运，全球Hub中转、LGG/BRU主甲板、SARS清关和南部非洲交付。'
  }
  if (slug === 'fbm') {
    return '中国各大机场到FBM卢本巴希空运：全国集货、LGG/BRU主甲板、非洲Hub衔接、刚果金清关和Copperbelt矿区交付逐票判断。'
  }
  if (slug === 'lun') {
    return '中国各大机场到LUN卢萨卡空运：全国集货、LUN或NLA入口、ZRA/ASYCUDA资料、LGG/BRU主甲板及Lusaka/Copperbelt项目现场交付判断。'
  }
  if (slug === 'lbv') {
    return '中国各大机场到LBV利伯维尔空运：全国集货、长货主甲板、LGG/BRU与B747F方案、加蓬清关及油气能源项目现场交付。'
  }
  return `中国到${item.code}${chinese.city}空运方案：${chinese.country}大件项目货、矿业备件、工程设备、LGG/BRU欧洲中转、清关资料和二程交付判断。`
}

export default function AfricaDestinationPage({ params }: { params: { slug: string } }) {
  const item = pages[params.slug as Slug] || pages.jnb
  const currentSlug = params.slug as Slug
  const chinese = chineseDestinations[currentSlug]
  const relatedPages = Object.entries(pages)
    .filter(([slug]) => slug !== currentSlug)
    .slice(0, 8)
  const faq = getFaq(item)
  const deepDive = deepDives[currentSlug]
  const originStrategy = originStrategies[currentSlug]
  const isSouthAfricaCoastalRoute = currentSlug === 'cpt' || currentSlug === 'dur'
  const isNigeriaRoute = currentSlug === 'los'
  const officialFacts = currentSlug === 'jnb' ? jnbOfficialFacts : currentSlug === 'lun' ? lunOfficialFacts : null

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
              {chinese ? `${item.code} - ${chinese.city} / ${item.city}, ${chinese.country}` : `${item.code} - ${item.city}, ${item.country}`}
            </div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              {chinese ? `中国到 ${item.code} ${chinese.city} 空运` : item.title}
              {chinese && <span className="block text-amberGold">China to {item.city} project cargo</span>}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {chinese
                ? `覆盖${chinese.country}大件项目货、矿业备件、工程设备和紧急空运。先判断尺寸重量、LGG/BRU欧洲中转、清关资料、机场操作和最终交付，再给可执行报价。`
                : item.description}
            </p>
            <a
              href={`/tools/africa-project-cargo-rfq/?source=route&topic=${item.code.toLowerCase()}`}
              className="mt-10 inline-flex items-center gap-2 rounded-lg bg-amberGold px-6 py-3 font-semibold text-slate-950"
            >
              {chinese ? `提交 ${item.code} 逐票询价` : `Request a ${item.code} route review`}
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

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Urgent spares decision</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              If this {item.code} shipment is stopping a site, check route risk before rate.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              For mining, oil and gas, factory maintenance or energy-project spares, the first question is not the cheapest
              airport-to-airport price. Confirm the deadline, aircraft fit, customs documents and final-site handover before
              promising a {item.code} arrival plan.
            </p>
            <a
              href="/tools/africa-urgent-spare-parts-route-risk-checklist/"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
            >
              Check {item.code} urgent spare-parts route risk
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {urgentSparePartChecks.map((check) => (
              <div key={check} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mb-4 h-5 w-5 text-amberGold" />
                <p className="text-sm font-semibold leading-7 text-slate-700">{check}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isSouthAfricaCoastalRoute && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">CPT/DUR route decision</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            Check South Africa coastal customs and final-site fit before routing via JNB.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            For Cape Town or Durban marine, port, factory and industrial spares, the route decision is not only
            HAK/JNB capacity or the lowest airport code. Compare SARS document readiness, ITAC or NRCS risk,
            coastal final delivery and whether JNB adds avoidable inland time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/insights/south-africa-cpt-dur-sars-invoice-itac-nrcs-air-freight-clearance/"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
            >
              Read the CPT/DUR customs document check
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/insights/south-africa-cpt-dur-port-marine-equipment-air-freight/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
            >
              Review CPT/DUR port and marine spares
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          {southAfricaCoastalChecks.map((check) => (
            <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
              <p className="leading-7 text-slate-700">{check}</p>
            </div>
          ))}
        </div>
      </section>}

      {isNigeriaRoute && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Nigeria route decision</p>
          <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
            Separate Lagos import demand from PHC oil-and-gas final-site risk.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Nigeria heavy cargo can look like a simple LOS rate request, but oil and gas spares often need a PHC or
            Port Harcourt delivery decision, importer document discipline, and a clear handover boundary before booking.
            Treat Form M, PAAR, SONCAP, B&apos;Odogwu data and final-site urgency as part of the route plan.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/insights/nigeria-phc-oil-gas-spares-soncap-nsw-air-freight-clearance/"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
            >
              Check PHC oil and gas spares documents
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/insights/nigeria-los-bodogwu-form-m-paar-air-freight-clearance/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
            >
              Review B&apos;Odogwu, Form M and PAAR risk
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="grid gap-3">
          {nigeriaOilGasChecks.map((check) => (
            <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
              <p className="leading-7 text-slate-700">{check}</p>
            </div>
          ))}
        </div>
      </section>}

      {originStrategy && (
        <>
          <section className="border-y border-slate-200 bg-slate-50 py-20">
            <div className="mx-auto max-w-6xl px-6">
              <div className="max-w-4xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">
                  China origins to {item.code}
                </p>
                <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">{originStrategy.heading}</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">{originStrategy.intro}</p>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {chinaOriginClusters.map((cluster) => (
                  <article key={cluster.region} className="rounded-lg border border-slate-200 bg-white p-6">
                    <h3 className="text-xl font-semibold text-slate-950">{cluster.region}</h3>
                    <p className="mt-2 font-bold text-amberGold">{cluster.airports}</p>
                    <p className="mt-3 text-sm leading-7 text-slate-500">{cluster.coverage}</p>
                    <p className="mt-3 leading-7 text-slate-700">{cluster.decision}</p>
                  </article>
                ))}
              </div>
              <div className="mt-14 max-w-4xl">
                <h3 className="text-2xl font-bold text-slate-950">四类路线框架</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  起运机场只是第一步。舱位、机型、中转接受、主甲板尺寸、清关和最终交付必须按票组合判断。
                </p>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {originStrategy.routeOptions.map((option) => (
                  <article key={option.title} className="rounded-lg border border-slate-200 bg-white p-6">
                    <h3 className="text-xl font-semibold text-slate-950">{option.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{option.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {currentSlug === 'jnb' && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">HAK/JNB capacity signal</p>
              <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                Compare Haikou-Johannesburg capacity before locking a South Africa project-cargo route.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                For South Africa mining, automotive, electronics, pharma or industrial spares, the useful question is not
                only whether JNB has a flight. Check whether the cargo can use the HAK/JNB freighter signal, whether
                LGG/BRU remains safer for oversized pieces, and who owns the JNB customs and final-site handover.
              </p>
              <a
                href="/insights/haikou-johannesburg-freighter-china-africa-project-cargo/"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
              >
                Read the HAK-JNB project-cargo route check
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="grid gap-3">
              {jnbCapacityChecks.map((check) => (
                <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                  <p className="leading-7 text-slate-700">{check}</p>
                </div>
              ))}
            </div>
          </section>}

          {currentSlug === 'lun' && <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">LUN or NLA gateway decision</p>
              <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">
                Match the Zambia entry airport to the final site, not the cheapest airport rate.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                LUN and NLA serve different project geographies. A nationwide China-origin quote should compare cargo fit,
                current connection acceptance, ZRA data readiness, airport handover and the truck or site-delivery boundary
                before choosing Lusaka or Ndola.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/insights/zambia-lun-zra-asycuda-zcsa-air-freight-clearance/"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-amberGold hover:text-slate-950"
                >
                  Review LUN customs documents
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/insights/ndola-nla-zra-asycuda-aci-copperbelt-mining-air-freight-clearance/"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:border-amberGold hover:text-amberGold"
                >
                  Compare NLA Copperbelt entry
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="grid gap-3">
              {lunGatewayChecks.map((check) => (
                <div key={check} className="flex gap-3 rounded-lg bg-slate-50 p-5">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                  <p className="leading-7 text-slate-700">{check}</p>
                </div>
              ))}
            </div>
          </section>}

          {officialFacts && <section className="bg-slate-950 py-20 text-white">
            <div className="mx-auto max-w-6xl px-6">
              <div className="max-w-4xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Primary-source research</p>
                <h2 className="text-3xl font-bold md:text-4xl">{item.code} facts used in this route assessment.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  These sources support airport, customs and network facts. They do not guarantee today&apos;s flight,
                  allocation, rate, clearance time or truck acceptance; EASCargo reconfirms those items shipment by shipment.
                </p>
              </div>
              <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
                {officialFacts.map((fact) => (
                  <div key={fact.label} className="grid gap-3 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-8">
                    <a
                      href={fact.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-amberGold hover:text-white"
                    >
                      {fact.label}
                    </a>
                    <p className="leading-7 text-slate-300">{fact.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>}
        </>
      )}

      {deepDive && (
        <section className="border-y border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 max-w-4xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-amberGold">Priority route analysis</p>
              <h2 className="text-3xl font-bold md:text-4xl">{deepDive.heading}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{deepDive.intro}</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-6">
                <h3 className="mb-4 text-xl font-semibold">Best-fit scenarios</h3>
                <div className="space-y-3">
                  {deepDive.scenarios.map((scenario) => (
                    <div key={scenario} className="flex gap-3 text-slate-600">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                      <p className="leading-7">{scenario}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 p-6">
                <h3 className="mb-4 text-xl font-semibold">Common risk points</h3>
                <div className="space-y-3">
                  {deepDive.risks.map((risk) => (
                    <div key={risk} className="flex gap-3 text-slate-600">
                      <FileCheck2 className="mt-1 h-5 w-5 flex-shrink-0 text-amberGold" />
                      <p className="leading-7">{risk}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-slate-950 p-6 text-white">
                <h3 className="mb-4 text-xl font-semibold text-amberGold">How we explain it to buyers</h3>
                <p className="leading-8 text-slate-300">{deepDive.salesAngle}</p>
              </div>
            </div>
          </div>
        </section>
      )}

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
            url: `https://www.eascargo.com/africa-air-freight/${currentSlug}/`,
            ...(coreRouteModifiedDates[currentSlug]
              ? {
                  mainEntityOfPage: {
                    '@type': 'WebPage',
                    '@id': `https://www.eascargo.com/africa-air-freight/${currentSlug}/`,
                    dateModified: coreRouteModifiedDates[currentSlug],
                  },
                }
              : {}),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'EASCargo', item: 'https://www.eascargo.com/' },
              { '@type': 'ListItem', position: 2, name: 'Africa air freight', item: 'https://www.eascargo.com/africa-air-freight/' },
              {
                '@type': 'ListItem',
                position: 3,
                name: `${item.code} ${item.city}`,
                item: `https://www.eascargo.com/africa-air-freight/${currentSlug}/`,
              },
            ],
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
