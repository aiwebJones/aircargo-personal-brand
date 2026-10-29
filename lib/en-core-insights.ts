import { englishCoreInsightSlugs, type EnglishCoreInsightSlug } from '@/lib/hreflang-pairs'

export type EnCoreSection = {
  heading: string
  body: string[]
  bullets?: string[]
}

export type EnCoreInsight = {
  slug: EnglishCoreInsightSlug
  title: string
  description: string
  keywords: string[]
  datePublished: string
  dateModified: string
  readTime: string
  category: string
  audience: string[]
  angle: string
  lead: string
  sections: EnCoreSection[]
  checklist: string[]
  faqs: Array<{ question: string; answer: string }>
  related: Array<{ label: string; href: string }>
  sources: Array<{ label: string; href: string }>
}

const reviewed = 'Reviewed 29 October 2026.'

const caseBoundary =
  'Three figures on the public project-records table show that this kind of loading judgment has been done. They are not a rate, a carrier, or a transit time. The piece of about 8 m left China, was handed over and rebuilt at LGG or BRU, and was assessed on B747F main-deck logic. The African gateway compared for that job was LBV. The 16,730 kg piece measured 735 × 135 × 150 cm, and the shipment record is about 45 t. It left PVG on a historical special load to the Middle East, not on an African lane, and it is not current acceptance. The 98.8 t figure is one historical B777F organised from PVG to AMS. It is not African capacity and it is not a price.'

const records = { label: 'Project-record figures', href: '/cases/project-records/' }
const cases = { label: 'Public project records', href: '/cases/' }
const hub = { label: 'Africa route hub', href: '/africa-air-freight/' }
const rfq = { label: 'Shipment-by-shipment RFQ', href: '/tools/africa-project-cargo-rfq/?source=en-core-guide' }

export const englishCoreInsights: EnCoreInsight[] = [
  {
    slug: 'jnb-mining-spares-air-freight',
    title: 'China to JNB mining spares: what to check before a Johannesburg rate',
    description:
      'For mining breakdown spares from China to Johannesburg, check the single piece, the export gateway, SARS documents and whether delivery stops at JNB or at the mine. The published 8 m, 16,730 kg and 98.8 t records are not a JNB rate.',
    keywords: [
      'China to JNB air freight',
      'Johannesburg mining spare parts',
      'South Africa project cargo',
      'SARS importer registration',
    ],
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    readTime: '16 min',
    category: 'South Africa',
    audience: ['Mine suppliers shipping from China', 'Engineering factories', 'Buyers in South Africa'],
    angle: 'A Johannesburg quote is usable only after loading, the China gateway, SARS papers and the delivery boundary are all written down.',
    lead:
      'On a mining spare from China to JNB, settle four things before anyone talks about a rate per kilo: whether the piece can load, which China gateway can actually take it that week, whether the SARS file is complete, and whether handover is at the airport or at the mine. The public loading figures you can cite are a piece of about 8 m, a 16,730 kg piece, and 98.8 t on one B777F. None of those is a current JNB rate.',
    sections: [
      {
        heading: 'Start with the job, not the airport code',
        body: [
          'JNB is the right place to compare a project that stays in South Africa, and it can be a candidate gateway for some southern African cargo. It is not the default airport for every South African shipment. If the site is around Cape Town or Durban, put CPT, DUR and “JNB plus an inland truck” on the same sheet.',
          'The working order does not change: the piece itself, the export gateway and any transfer, the SARS file, then what happens after the airport. If one of those is blank, the reply is a direction, not a price. ' + caseBoundary,
        ],
        bullets: ['Loading first', 'Then the route', 'Then the SARS file', 'Write the delivery boundary last'],
      },
      {
        heading: 'China gateways are comparison points, not a published direct flight',
        body: [
          'Cargo in East China is compared through PVG, HGH and NKG. South China and Hong Kong are compared through CAN, SZX, HKG and HAK. North and northeast China use PEK, PKX, TSN and TAO. Central and western China use WUH, CGO, XIY, CTU, TFU and CKG. Fujian is compared through XMN and FOC. Those names come from the existing JNB route note. They are places to compare. They are not a promise that each airport has direct space to Johannesburg.',
          'Ordinary dimensions can start with a nearby wide-body and a normal transfer. A piece that is long, tall or heavy moves the comparison to trucking inside China toward a stronger freighter gateway, a Haikou–Johannesburg freighter signal that still has to be checked on the day, or an LGG/BRU main deck. A published Haikou–Johannesburg flight is a capacity signal. This page does not turn it into a timetable.',
        ],
        bullets: ['Nearest gateway', 'Stronger freighter gateway', 'Recheck the HAK signal', 'LGG/BRU main deck as the alternative'],
      },
      {
        heading: 'What a mine spare usually fails to include',
        body: [
          'Pumps, motors, electrical cabinets and repair parts most often arrive without length, width and height on every piece, gross weight, packing photos, forklift pockets, lifting points, and a yes or no on tilting. A total weight can look fine while one piece is out of contour, and the cheap plan dies there. This warehouse does not hold measured door centimetres for a B747F or a B777F, so this page does not say “above this many centimetres you must use the main deck.”',
          'Published floor figures are a range, not proof that Johannesburg will accept the piece. Boeing’s 747-8F sheet dated 14 May 2024 says main-deck running load matches the 747-400F and runs from 15 to 52 kg/cm (85 to 290 lb/in) by station. A sample 96 × 125 in unit on the main deck is shown from 3,401 kg to 8,210 kg. Lower-hold running load is 21 kg/cm (116 lb/in). ANA Cargo’s 767-300F page states a main-deck floor limit of 1,221 kg/m² and says that is a compartment limit, not the aircraft payload. Neither document publishes contour codes or the crane tonnes on the Johannesburg apron. The booked carrier and the ground handler still confirm the piece. ' + reviewed,
        ],
        bullets: ['Size and gross weight of every piece', 'Lifting points and forklift pockets', 'No unpublished door size', 'Used parts declared on their own'],
      },
      {
        heading: 'Use the route page, the records table and the SARS page together',
        body: [
          'Route judgment sits on the JNB route page and the Africa hub. Loading evidence sits on the public project records and the figures table. Customs names sit on the South Africa SARS / NRCS / ITAC guide. Do not invent a second set of document names in the quote email.',
          'The RFQ form is the intake. Origin, destination, piece count and dimensions have to be in before the four checks above can be filled in.',
        ],
        bullets: ['Route page', 'Figures table', 'South Africa customs guide', 'One shipment, one RFQ'],
      },
      {
        heading: 'Seven steps for one JNB spare',
        body: [
          'Write the final place as a city or a mine, not “South Africa.” Record length, width, height and gross weight on every piece, with packing photos. Use the chargeable-weight calculator and note whether the divisor is 6,000 or 5,000. That step produces a chargeable weight, not a freight rate. Choose the export gateway from the comparison points already on the JNB page — PVG, CAN, SZX, HKG, HAK, FOC, XMN and the others — instead of promising a direct flight.',
          'Then read the figures table with its boundaries. About 8 m means a belly hold will fail. 16,730 kg means the weight of one piece changes the loading method. 98.8 t means a whole-flight build has to be handed over as one plan. None of the three fills in a JNB price. Open the South Africa customs page and line up the importer or a registered agent in South Africa, the invoice, the packing list and the HS code, and ask whether used parts touch ITAC. The quote then says whether it stops at the airport, after customs, or at the mine. Space and transit days that are not confirmed stay blank.',
          'A shutdown window is only the date the customer gives. There is no stored figure for “what one late day costs,” and sales should not invent one. The HAK–JNB freighter stays a signal to recheck, not a schedule.',
        ],
        bullets: ['Name the mine', 'One line per piece', 'Chargeable weight is not the rate', 'The delivery boundary sits in the quote'],
      },
    ],
    checklist: [
      'English description and HS code',
      'Length, width, height and gross weight of every piece',
      'Packing photos, forklift pockets and lifting points',
      'Where the cargo sits in China, and the ready date',
      'Final city or mine address',
      'Latest arrival, as given by the buyer',
      'Importer and customs broker',
      'New, used, repaired or controlled goods',
    ],
    faqs: [
      {
        question: 'Can Fuzhou FOC, or the nearest airport, fly direct to JNB?',
        answer:
          'You can compare it. You cannot write it down as a standing direct flight. The JNB route page treats FOC, XMN, PVG, CAN, SZX, HKG and HAK as export comparison points. Which one works depends on the longest piece, the heaviest piece, the ready date and whether a transfer will accept the cargo. The airport code by itself does not decide.',
      },
      {
        question: 'Can the 8 m, 16,730 kg and 98.8 t records be used as a JNB quote?',
        answer:
          'No. The African gateway on the 8 m record is LBV, not JNB. The published routes for 16,730 kg and 98.8 t are PVG to the Middle East and PVG to AMS. They show that a special load and a whole-flight build have been organised. They do not show that Johannesburg has the same space or the same price today.',
      },
      {
        question: 'What has to line up for South African customs?',
        answer:
          'The importer, or a registered agent in South Africa, the customs code, the broker, the HS code, the commercial invoice, the packing list and the AWB. SARS requires the importer, exporter or their clearing or registered agent to hold the right registration before a goods declaration is lodged, and a foreign importer normally appoints an agent in South Africa. Restricted goods may need a permit, a certificate or a Letter of Authority. Used goods and old parts are a separate question for ITAC. “Mining spare” is not a product description.',
      },
      {
        question: 'Where should the quote stop?',
        answer:
          'Say whether it stops at JNB, includes customs coordination, covers collection after release, or continues to the mine or the factory. If the truck, the unloading tools and the site contact are not in the quote, it is not an executable quote yet.',
      },
    ],
    related: [
      { label: 'JNB route page', href: '/en/africa-air-freight/jnb/' },
      { label: 'South Africa customs guide', href: '/insights/south-africa-jnb-sars-nrcs-loa-air-freight-clearance/' },
      { label: 'Haikou–Johannesburg freighter signal', href: '/insights/haikou-johannesburg-freighter-china-africa-project-cargo/' },
      hub,
      records,
      cases,
      rfq,
    ],
    sources: [
      { label: `Airports Company South Africa, about O.R. Tambo. ${reviewed}`, href: 'https://www.airports.co.za/airports/or-tambo-international-airport/the-airport/about-or-tambo' },
      { label: `SARS, importer registration and registered agents. ${reviewed}`, href: 'https://www.sars.gov.za/customs-and-excise/registration-licensing-and-accreditation/importers/' },
      { label: `SARS, goods declaration. ${reviewed}`, href: 'https://www.sars.gov.za/customs-and-excise/goods-declaration/' },
      { label: `SARS, prohibited and restricted goods. ${reviewed}`, href: 'https://www.sars.gov.za/customs-and-excise/prohibited-restricted-and-counterfeit-goods/' },
      { label: `South African Government, ITAC import permits. ${reviewed}`, href: 'https://www.gov.za/services/import/import-permit-general-goods' },
      { label: `Boeing StartupBoeing 747-8 Freighter sheet, figure dated 14 May 2024. ${reviewed}`, href: 'https://www.boeing.com/content/dam/boeing/v2/company/startupboeing/freighters/747-8F-freighter.pdf' },
      { label: `ANA Cargo, Boeing 767-300F specification. ${reviewed}`, href: 'https://www.anacargo.jp/en/int/specification/b6_300f.html' },
    ],
  },
  {
    slug: 'fbm-copperbelt-mining-equipment-air-freight',
    title: 'FBM Lubumbashi: Copperbelt equipment is three jobs, not one airport rate',
    description:
      'Lubumbashi serves the DRC copper-cobalt belt. Price the airport leg, French-language customs, unloading in Lubumbashi, and any onward move to the mine as separate boundaries. The 8 m record entered Africa at LBV, not FBM.',
    keywords: [
      'FBM Lubumbashi air freight',
      'DRC mining equipment air freight',
      'Copperbelt spare parts',
      'Lubumbashi project cargo',
    ],
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    readTime: '15 min',
    category: 'DR Congo',
    audience: ['Mining equipment suppliers', 'DRC project contractors', 'Buyers on the Copperbelt'],
    angle: 'An FBM quote that does not name the mine, the language of the invoice and who unloads is still a rate request, not a plan.',
    lead:
      'FBM serves the copper-cobalt mines in the DRC. It is not a swap-in code for another African airport. Split the quote: the FBM airport leg, customs and French-language papers, unloading in Lubumbashi, and whether the truck continues to the mine or the plant. The public 8 m record shows what to do when a belly hold cannot take the piece. That job’s published African entry was LBV, not a ready-made FBM product.',
    sections: [
      {
        heading: 'Say where it actually ends',
        body: [
          'When someone asks how to fly a Copperbelt spare, the first question is whether the end point is the airport, a warehouse in town, or the mine. A late pump, motor, transformer or electrical cabinet usually costs a shutdown, not the difference in freight. The first reply should name the delivery boundary.',
          caseBoundary,
        ],
        bullets: ['Airport leg', 'Customs leg', 'Unloading', 'Mine leg'],
      },
      {
        heading: 'How the route is built',
        body: [
          'After collection in China, compare a local departure with stronger export gateways such as PVG, CAN, SZX and HKG, then ask whether an LGG/BRU main deck and an African hub can connect to FBM. If one leg has not confirmed acceptance, do not add the price of the next leg.',
          'Length that a normal belly hold cannot take is judged against the published piece of about 8 m into LBV: prove the main-deck or nose-door logic first, then talk about the African onward flight. Do not copy that LBV path and call it a fixed FBM route.',
        ],
        bullets: ['Stronger export gateway', 'LGG/BRU', 'African hub', 'Do not copy the LBV path'],
      },
      {
        heading: 'Papers, the runway, and the apron',
        body: [
          'You need a French or bilingual description, an HS code, invoice and packing list, the importer, the destination broker, packing photos and the unloading conditions. At the mine you also need to know whether the truck can enter, who supplies the crane or forklift, and whether the site receives only in daylight.',
          'A single official runway length and an apron crane rating for FBM do not line up, so this page does not publish a crane tonne. The DRC civil aviation authority RVA, in an airport table dated 30 September 2009, describes Lubumbashi as a remaining length after the runway threshold was displaced. That is not a full length you can quote, and the hours column says H24. That table is from 2009. It is not proof that a freighter is accepted today. Two secondary databases disagree with each other and are labelled as indicative, not AIP. OurAirports, updated 24 January 2026, lists runway 07/25 as 3,238 × 50 m, asphalt, lighted. SkyVector lists 3,200 × 50 m (10,499 × 164 ft against OurAirports’ 10,623 × 164 ft). The gap is about 40 m, so the honest range is about 3,200–3,240 m until RVA issues the current AIP. Crane tonnes, height limits and night work are not on an authority page. Send dimensions and weight and confirm them with the airport or the carrier for that shipment. ' + reviewed,
        ],
        bullets: ['French description', 'Importer and broker', 'Site access', 'No unpublished crane rating'],
      },
      {
        heading: 'Six steps, then a reply the customer can act on',
        body: [
          'Confirm whether the end point is FBM airport, Lubumbashi town or the copper-cobalt mine. Those are not one price. Collect a French or bilingual description, HS code, invoice and packing list. A Chinese description alone stops the file at the document stage. Measure packed size and gross weight on every piece. Photos have to show lifting points and forklift pockets. Compare China export gateways and an LGG/BRU main deck. A leg that has not accepted the cargo does not get the next leg’s price added on.',
          'Open the FBM customs guide and use only the systems and sources already written there. Do not invent a certificate name in the email. Write who unloads and whether the truck can enter the site. The public piece of about 8 m entered at LBV. Use it to show that a failed belly hold moves the question to the main deck. Do not rewrite that path as a fixed FBM product. The 16,730 kg figure is a historical PVG load. It is not Lubumbashi ground handling.',
          'A practical reply has six lines: what the cargo is and whether it contains oil, batteries or a wooden case; piece count with size and weight, or a clear statement that loading cannot be judged yet; the customer’s final place, classed as airport, town or mine, with a question if it cannot be classed; the China gateways you will compare, named as comparison points and not as a direct flight; whether LGG/BRU belongs in the comparison because a normal connection cannot load the piece; and which customs papers are still missing, with a link to the FBM customs page. Under any cited record, add that it does not represent FBM space, ground handling or price today. Crane tonnes, night work and clearance days stay blank.',
        ],
        bullets: ['Three prices, kept apart', 'French description first', 'Main deck judged on its own', 'Crane tonnes left blank'],
      },
    ],
    faqs: [
      {
        question: 'Is airport delivery at FBM the same quote as delivery to the mine?',
        answer:
          'No. The route page already separates the FBM airport leg, DRC customs, unloading in Lubumbashi, and whether the truck continues to a Copperbelt mine or a factory. A quote that does not name the mine cannot be read as site delivery.',
      },
      {
        question: 'How far do the French papers need to go?',
        answer:
          'The description, the use and the invoice wording have to be usable by the destination broker. If you only have a Chinese description and a gross weight, do not quote an all-in price. Whether GUICE, the importer and a local agent apply is checked against the commodity on that shipment. This page does not say every cargo needs the same certificate.',
      },
      {
        question: 'Can a heavy-lift record be used as FBM ground handling?',
        answer:
          'The 16,730 kg piece, and the shipment record of about 45 t, are historical loads out of PVG. The route was not FBM. They show how a special pallet and lifting were organised. They do not show that Lubumbashi has the same ground handling today.',
      },
    ],
    checklist: [
      'Use and material',
      'HS code',
      'Packed dimensions and gross weight',
      'Packing photos',
      'Mine or warehouse address',
      'Who clears',
      'Who unloads',
    ],
    related: [
      { label: 'FBM route page', href: '/africa-air-freight/fbm/' },
      { label: 'FBM customs guide', href: '/insights/drc-fbm-guice-bivac-mining-spares-air-freight-clearance/' },
      { label: 'English JNB mining guide', href: '/en/insights/jnb-mining-spares-air-freight/' },
      hub,
      records,
      rfq,
    ],
    sources: [
      { label: `RVA airport table, document dated 30 September 2009. Lubumbashi is a threshold-displacement note, not a usable full length. ${reviewed}`, href: 'https://www.rva.cd/admin/app/docs/ais.pdf' },
      { label: `OurAirports, FZQA runways, data updated 24 January 2026. Indicative, not AIP. ${reviewed}`, href: 'https://ourairports.com/airports/FZQA/runways.html' },
      { label: `SkyVector, Lubumbashi FZQA. Indicative, not AIP. ${reviewed}`, href: 'https://skyvector.com/airport/FZQA/Lubumbashi-Airport' },
    ],
  },
  {
    slug: 'lun-zambia-industrial-air-freight-guide',
    title: 'Zambia industrial air freight: choose LUN or NLA before you choose a rate',
    description:
      'Zambia cargo starts with the gateway. Lusaka LUN and Ndola NLA are different quotes from a delivery into Kitwe or the Copperbelt. ZRA and ASYCUDA names stay on the country pages. This guide does not publish a clearance-day promise.',
    keywords: [
      'LUN Lusaka air freight',
      'NLA Ndola air freight',
      'Zambia mining spares',
      'ZRA ASYCUDA air cargo',
    ],
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    readTime: '15 min',
    category: 'Zambia',
    audience: ['Zambia mine suppliers', 'Industrial factories', 'Project buyers'],
    angle: 'Lusaka airport and a Copperbelt site are two quotes. Pick the gateway from the final city, then open the ZRA page that matches it.',
    lead:
      'For Zambia, decide whether the gateway is LUN Lusaka or NLA Ndola before you argue about which Chinese airport it leaves from. Delivery that stops at Lusaka airport, and delivery that continues to Ndola, Kitwe or a Copperbelt site, are two quotes. ZRA and ASYCUDA document names stay on the matching customs pages. This guide does not invent a second list, and it does not state a clearance time in days.',
    sections: [
      {
        heading: 'Pick the Zambian gateway first',
        body: [
          'LUN is the Lusaka gateway. It is the right place to compare industrial equipment, mining spares and factory breakdown parts, but an airport price is not a site price. NLA is a different international airport. When the job serves the Copperbelt it has to be looked at on its own. It is not another name for LUN.',
          'On the China side the cargo can still be collected nationwide: the nearest gateway and a stronger freighter gateway are compared together. Without the size of each piece, neither African airport can be judged.',
        ],
        bullets: ['LUN Lusaka', 'NLA Ndola', 'Copperbelt site', 'Collection across China'],
      },
      {
        heading: 'Documents, published airport facts, and delivery',
        body: [
          'Keep the ZRA declaration, invoice, packing list, AWB and any permit on one line. Keep the flight and the loading plan on another. A price is executable only when both lines hold. If the goods may be subject to a compulsory standard, ask whether ZCSA applies before arrival. Do not guess on the apron.',
          'Zambia Airports Corporation Limited’s Kenneth Kaunda page says the LUN runway is 3.9 km by 45 m, orientation 10/28, and can land up to a maximum of a B747. The same organisation’s 2022 annual report says LUN is 3,962 m by 46 m, fire category 9, and open 24 hours. The NLA aerodrome page says the runway is 3.5 km, width 46 m, design aircraft B737-800, fire category 7, hours 04:00–18:00 UTC. The annual report says NLA is 3,500 m by 45 m and 06:00–20:00 CAT. The two official texts do not agree on width or hours, so the current AIP is the booking reference. Neither document publishes a maximum single-piece weight for freighter main-deck acceptance. A design aircraft of B737-800 is not, on these pages, a published ban on freighters. An ASYCUDA news item dated Lusaka, 30 May 2024, says that from 1 June 2024 airlines and couriers must file electronic manifests before arrival at Zambia’s international airports. It does not state how many hours before. IATA’s advance-cargo guidance restates a WCO practice: long-haul no later than four hours before arrival, short-haul by wheels-up. That is industry guidance, not a ZRA hour. Send dimensions and weight, and confirm the single-piece limit with the airport and the carrier. ' + caseBoundary + ' ' + reviewed,
        ],
        bullets: ['ZRA document line', 'Loading line', 'Ask ZCSA before guessing', 'No clearance-day promise'],
      },
      {
        heading: 'The order of a Zambia decision',
        body: [
          'Mark the final city as Lusaka, Ndola, Kitwe or a named mine. Around Lusaka, put LUN at the front of the comparison. On the Copperbelt, put NLA at the front. If you are not sure, ask both airports. Do not let the lower airport price decide. Then collect size, gross weight and photos of every piece. Without those, neither airport can say whether it can take the cargo.',
          'For documents, open the LUN customs page or the NLA Copperbelt page and line up the importer, the broker, the invoice, the packing list and the AWB, and ask whether a permit or ZCSA applies. For loading, decide separately whether you need a main deck or LGG/BRU. Only when both lines are clear does a price belong in the reply. Clearance days and a maximum ground piece weight are not stored here, so they stay blank.',
          'A reply can follow six sentences. Repeat the customer’s final city. If it is Lusaka, LUN goes into the comparison. If it is Ndola, Kitwe or a Copperbelt mine, NLA and LUN are compared together, and you do not pick the cheaper code for them. List the sizes you have and the photos you still need. Say chargeable weight will be the higher of gross weight and centimetre volume divided by 6,000, and that this step is not a rate. Point at the LUN or NLA customs page and ask only for items that page already names. If length is near the published 8 m, or one piece is near the 16,730 kg order of magnitude, say a main-deck check is separate and link the figures table, with the route boundaries left as published. Leave clearance days, maximum ground piece weight and the live rate per kilo blank.',
        ],
        bullets: ['Mark the final city', 'LUN and NLA can both be checked', 'Documents and loading stay apart', 'Days stay blank'],
      },
    ],
    faqs: [
      {
        question: 'How do you choose between LUN and NLA?',
        answer:
          'If handover is around Lusaka, put LUN in the comparison first. If the site is Ndola, Kitwe or the Copperbelt, and the connection and the dimensions are both plausible, put NLA in as well. If both are uncertain, check both. Do not let the lower airport price decide.',
      },
      {
        question: 'Which documents does industrial equipment need?',
        answer:
          'The importer, the appointed broker, the HS code, the commercial invoice, the packing list, the AWB, and whether this shipment triggers a permit or a ZCSA inspection. The electronic-filing fields stay on the LUN and NLA customs pages, which cite the public sources.',
      },
      {
        question: 'Does out-of-gauge cargo move via Europe?',
        answer:
          'Only when a standard connection cannot take the height, the length or the weight. Then LGG/BRU main deck goes into the comparison. The 8 m record shows that this judgment has been made, and the gateway was LBV. A Zambia shipment still has to confirm the onward flight and ground acceptance on its own.',
      },
    ],
    checklist: [
      'Commodity and use',
      'HS code',
      'Invoice and packing list',
      'Dimensions and weight',
      'Packing photos',
      'Moisture and shock protection, if it matters',
      'Final city',
    ],
    related: [
      { label: 'LUN route page', href: '/africa-air-freight/lun/' },
      { label: 'LUN customs guide', href: '/insights/zambia-lun-zra-asycuda-zcsa-air-freight-clearance/' },
      { label: 'NLA Copperbelt customs guide', href: '/insights/ndola-nla-zra-asycuda-aci-copperbelt-mining-air-freight-clearance/' },
      { label: 'English FBM guide', href: '/en/insights/fbm-copperbelt-mining-equipment-air-freight/' },
      hub,
      records,
      rfq,
    ],
    sources: [
      { label: `ZACL, Kenneth Kaunda International Airport. ${reviewed}`, href: 'https://www.zacl.co.zm/airport-section/airports/kkia' },
      { label: `ZACL, Simon Mwansa Kapwepwe general aerodrome information. ${reviewed}`, href: 'https://www.zacl.co.zm/airport-section/airports/smkia/general-aerodrome-info' },
      { label: `ZACL annual report 2022. ${reviewed}`, href: 'https://www.zacl.co.zm/application/files/9916/9536/6057/ZACL_Annual_Report_2022_Final.pdf' },
      { label: `ASYCUDA, Zambia pilots an advance cargo information module, dated Lusaka 30 May 2024. ${reviewed}`, href: 'https://asycuda.org/en/zambia-pilots-advanced-cargo-information-module-at-international-airports/' },
      { label: `IATA guidance on electronic advance cargo information. Industry guidance, not a ZRA hour. ${reviewed}`, href: 'https://www.iata.org/contentassets/2c4495c8abb64352acaef69b73d0b783/guidance-on-compliance-with-electronic-aci-requirement.pdf' },
    ],
  },
  {
    slug: 'lbv-gabon-8-meter-cargo-via-lgg-bru',
    title: 'An 8-metre piece into Libreville: what the LGG/BRU record actually shows',
    description:
      'A single piece of about 8 m does not fit a passenger belly hold. The published method was a China departure, a rebuild at LGG or BRU, and a B747F main-deck assessment into LBV. Price, carrier and transit days were not published.',
    keywords: [
      'LBV Libreville air freight',
      'Gabon oversized cargo',
      '8 metre air freight',
      'LGG BRU main deck',
    ],
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    readTime: '15 min',
    category: 'Gabon',
    audience: ['Energy and industrial project buyers', 'Factories shipping long pieces', 'Forwarders handling outsize cargo'],
    angle: 'The 8 m job is a four-leg record. A missing leg means the route is not established, and the unpublished width and height stay unpublished.',
    lead:
      'A single piece of about 8 m does not go in a normal passenger belly hold. The published method was a departure from China, a warehouse handover and rebuild at LGG or BRU, then a B747F main-deck assessment of the African onward flight, with LBV as the gateway that was compared. Price, carrier and transit days were not published as a promise. The 6-to-8 m band on the LBV route page is a screen for long cargo. It is not a door-clearance pass line.',
    sections: [
      {
        heading: 'Split the job into four legs',
        body: [
          'The bilingual write-up splits execution into four legs: departure from China, warehouse handover and build-up at LGG or BRU, a B747F or other main-deck sector into Africa, then destination customs and site handover. If one leg is missing, the route is not established.',
          'The gateways compared at the time included LBV, JNB, FBM and LUN. LBV was chosen because of where the project sat and how the long piece had to be handled, not because it showed the lowest rate per kilo. ' + caseBoundary,
        ],
        bullets: ['China departure', 'Europe build-up', 'Main-deck onward flight', 'Site handover'],
      },
      {
        heading: 'What has to be in the file before booking',
        body: [
          'You need the length of the piece, packed width and height, gross weight, centre of gravity, lifting points, whether it can tilt, photos of loading and unloading, and, at LBV, who unloads and whether the truck can enter the site. French descriptions and consignee details are collected with the dimensions. Do not wait for a verbal “the space is fine” and then start the documents.',
          'No authority page states one cut-off hour for Gabon unloading equipment or for every European warehouse. The ASECNA AIP, effective 1 October 2026, lists LBV runway 16/34 as 3,000 m × 45 m, composite strength 80/F/B/W/T, PCR 820. That is a runway. It is not a crane rating. Liège Airport’s freight-types page lists oversized cargo and does not publish an airport-wide cut-off. Brussels Airport says BRUcargo has 24-hour customs and that freight and mail ground transport is handled by licensed handlers. The internal rule for the Q19 dock is 03:00–22:00 daily. That is not an outsize acceptance cut-off. The WFS Liège 2026 tariff says special and heavy cargo is handled on request, with a weekday daytime band of 08:00–20:00 and a different band at night and on holidays, and that hours can change and operations will confirm them. Outsized cargo uses external equipment. There is no cut-off hour that applies to every flight. LBV crane tonnes are not on an authority page either. Confirm both with the warehouse, the airport and the carrier, and send dimensions and weight for a feasibility check. The euro amounts in the handler tariff are terminal charges, not a freight rate, and they are not copied here. ' + reviewed,
        ],
        bullets: ['Packed dimensions', 'Centre of gravity and lifting points', 'Who unloads at destination', 'No invented door height'],
      },
      {
        heading: 'Retell the long piece without adding a scene',
        body: [
          'The China leg only answers which city feeds which export airport, and whether packed length, width, height, gross weight, centre of gravity and lifting points are complete. The Europe leg only answers whether the LGG or BRU warehouse can take the piece and build it, and whether the onward carrier accepts the same dimensions. The Africa leg only answers LBV customs papers, ground handling and unloading. The site leg only answers who owns the truck and the project site. If one of the four is empty, do not say the route is established.',
          'The published facts are these: one piece of about 8 m, a normal belly hold will not take it, a direct plan did not work, so the European handover and the African onward flight were looked at together. The LBV route page uses 6 to 8 m as a screen for long cargo, not as a door standard. Door centimetres, a warehouse cut-off and Gabon crane tonnes are not in the record. Mark them as still to be confirmed. Do not fill in a number that only looks precise.',
          'Do not fold the other two public records into this piece. The 16,730 kg unit measured 735 × 135 × 150 cm and went from PVG toward the Middle East. The 98.8 t figure is a B777F from PVG to AMS. They show that a special load and a whole-flight build have been organised. They are not the width, the height or the price of this 8 m piece. If a customer asks for the packed width and height, the answer is that the 8 m record does not publish them. Ask for the packed three dimensions, gross weight, centre of gravity, lifting points and handling photos.',
        ],
        bullets: ['All four legs need an answer', '6 to 8 m is only a screen', 'Do not invent a door height', 'Do not merge the three records'],
      },
    ],
    faqs: [
      {
        question: 'What did the public record of this 8 m shipment actually say?',
        answer:
          'One piece of about 8 m, and a normal belly hold would not take it. A direct plan from China did not work, so the European warehouse handover and the African onward flight were checked together. Before arrival at LBV, import papers, ground handling and unloading had to be confirmed. The final price, the carrier and the transit time were left to that shipment’s own confirmation.',
      },
      {
        question: 'Does every long piece move LGG/BRU to LBV?',
        answer:
          'No. Europe transit goes into the comparison only when a direct flight or a normal transfer cannot load the piece. The LBV route page still requires Gabon customs, unloading and the project site to be checked. Landing at the airport is not delivery.',
      },
      {
        question: 'Why does this page not print a door size for that shipment?',
        answer:
          'The 8 m record does not include a measured door or a floor rating. A door height that only looks precise would be an invented limit. Booking still sends packed length, width and height, centre of gravity, lifting points and the loading direction to the airline for confirmation. Published door ranges for other aircraft sit on the main-deck guide, labelled by source.',
      },
    ],
    checklist: [
      'Length of the piece',
      'Packed height and width',
      'Centre of gravity and lifting points',
      'Whether it can tilt',
      'Handling photos',
      'Who unloads at destination',
      'Latest arrival, as given by the buyer',
    ],
    related: [
      { label: 'LBV route page', href: '/africa-air-freight/lbv/' },
      { label: 'Bilingual 8 m write-up', href: '/insights/china-africa-8-meter-oversized-air-freight-case/' },
      { label: 'English LGG/BRU transit guide', href: '/en/insights/china-africa-via-europe-lgg-bru-transit/' },
      hub,
      records,
      rfq,
    ],
    sources: [
      { label: `ASECNA AIP, Libreville FOOL, effective 1 October 2026. ${reviewed}`, href: 'https://aim.asecna.aero/html/eAIP/FR-_07AD-2.FOOL-fr-FR.html' },
      { label: `Liège Airport, freight types. ${reviewed}`, href: 'https://www.liegeairport.com/en/cargo/freight-types' },
      { label: `Brussels Airport, logistics real estate, including 24-hour customs at BRUcargo. ${reviewed}`, href: 'https://www.brusselsairport.be/en/real-estate/logistics-real-estate' },
      { label: `Brussels Airport Q19 dock rule, 03:00–22:00. Not an outsize cut-off. ${reviewed}`, href: 'https://media.brusselsairport.be/bruweb/default/0001/26/4b5d23e4f7f8309f21e510725029415b89351242.pdf' },
      { label: `WFS Liège terminal handling charges effective 1 January 2026. Hours and request handling only; euro amounts are not copied. ${reviewed}`, href: 'https://www.wfs.aero/wp-content/uploads/2025/11/2026-01-Belgium-Terminal-Handling-Charges-010126-WFS-LGG19.pdf' },
    ],
  },
  {
    slug: 'china-africa-via-europe-lgg-bru-transit',
    title: 'When China-to-Africa cargo should detour through Liège or Brussels',
    description:
      'LGG and BRU are a rebuild point when a direct flight from China has no door, no pallet position or no main deck. Ordinary small freight usually should not use the chain. The 8 m LBV record is the public example.',
    keywords: [
      'LGG BRU Africa transit',
      'China to Africa oversized air freight',
      'B747F Africa cargo',
      'ICS2 ENS air freight',
    ],
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    readTime: '16 min',
    category: 'Routing',
    audience: ['Project shippers', 'Forwarders in China', 'Engineering buyers in Africa'],
    angle: 'Europe transit is a way to make an otherwise impossible piece executable. It is an extra warehouse handover, so small freight should stay on the airline network.',
    lead:
      'LGG and BRU are not a scenic route. They are how you reconnect a China leg, a European warehouse and an African onward flight when a direct departure has no door height, no pallet position or no main deck. Ordinary small freight usually should not travel this chain. The public example is the piece of about 8 m into LBV. The 16,730 kg piece and the 98.8 t B777F are not sample prices for Europe-to-Africa transit.',
    sections: [
      {
        heading: 'The chain holds only if every leg holds',
        body: [
          'The cargo has to be able to leave China. The European warehouse has to be able to receive it and build it. The African onward carrier has to accept the same dimensions. The destination has to be able to unload it. If one of those four is only “possible in theory,” the chain is not quotable.',
          'Many China-to-Africa outsize enquiries fail because a direct flight has no door, no pallet, no main deck or no destination handling. Liège or Brussels is the place where the China sector, the warehouse, a freighter onward flight and an African hub can be reassembled. For a piece that is long, heavy, tall, this-side-up, or aimed at a weak destination, Europe can be more executable than forcing a direct plan. It is also an extra handover, so it earns its place only when it makes a shipment possible.',
        ],
        bullets: ['China leg', 'European warehouse', 'African onward flight', 'Destination unloading'],
      },
      {
        heading: 'A main deck is a loading system, not a slogan',
        body: [
          'Total weight does not replace the longest, widest, tallest and heaviest piece, together with the packing shape, this-side-up marks, lifting points, forklift pockets and centre of gravity. Those decide whether the piece passes a door, whether it makes an acceptable main-deck contour, and whether it needs its own restraint plan.',
          'IATA describes aircraft pallets, containers and their restraint as part of the aircraft loading system. Asking “is there a B747F?” is not enough. You still ask about a pallet or a loose load, centre of gravity, contour and the warehouse. This page does not add contour codes that are not in the record.',
        ],
        bullets: ['One piece at a time', 'Packing and centre of gravity', 'Door and contour', 'Pallet restraint and floor load'],
      },
      {
        heading: 'LGG and BRU are not a fixed pair',
        body: [
          'Both airports appear in the transit notes. Which one is used depends on whether that warehouse can take the piece, whether the onward carrier accepts the same dimensions, and which African gateway is in play. A quote should not say the cargo always goes to one of them first.',
          'Liège Airport lists oversized cargo among its freight types, which shows the local cargo ecosystem. Brussels Airport’s historical material also records outsize pieces, large machinery and machine parts. An airport that has handled similar freight has not accepted this shipment. Compare the China arrival airport, the European warehouse, transit customs responsibility, lifting gear, the storage window, the onward aircraft and destination acceptance. Without a check you can verify, do not write LGG, BRU, a fixed flight or a fixed transit time into a promise.',
        ],
        bullets: ['Where the China sector lands', 'Whether the European warehouse accepts it', 'Storage and transfer responsibility', 'African onward confirmation'],
      },
      {
        heading: 'Published door figures, and what the airports do not publish',
        body: [
          caseBoundary,
          'A nose door is an aircraft capability. It is not proof that an airport has accepted the piece. Boeing’s 747-8 airplane characteristics manual, Revision E, says the 747-8F keeps the 747-400F nose door. The StartupBoeing sheet dated 14 May 2024 draws the nose-door clear opening as non-rectangular, with labels including 381 cm (150 in), 356 cm (140 in) and 249 cm (98 in). The side-cargo door clear opening is marked 3.41 m (134.4 in) by 3.05 m (120 in), and the sheet says the side door can take a 20-ft ULD. Liège acknowledges oversized cargo and does not publish an acceptance list or a cut-off clock. Brussels does not publish a notice that nose-door cargo is accepted. WFS at Liège treats special and heavy cargo as work by appointment, with a daytime band of 08:00–20:00, and outsized cargo uses rented external equipment. Whether a nose door can be worked at the warehouse on this shipment is confirmed with that warehouse and the carrier. Send dimensions and weight. ' + reviewed,
        ],
        bullets: ['8 m is the African case', 'The other two records are not an African rate', 'No cut-off clock is published', 'ICS2 stays on its own page'],
      },
      {
        heading: 'Six cost blocks, ENS data, and different African gateways',
        body: [
          'An executable quote splits at least six blocks: collection and export in China, the first flight, unloading and the warehouse in Europe, rebuild or special loading, the African second flight, and destination handling plus final delivery. A low rate per kilo with one block missing tends to reappear as storage, a crane, the onward flight or destination charges.',
          'Cargo that enters or transits the European Union can be stopped by ENS / ICS2 filing. The European Commission describes ICS2 as the system for safety and security data, lodged as an Entry Summary Declaration. For air cargo, part of the data is lodged before loading. Line up the description, use, HS code, shipper, consignee, pieces, weight, the route and the house data before booking. Vague descriptions and documents that disagree with each other can stop the transfer before departure or after arrival. Who files is confirmed with the carrier, the filer and the European handler. This page does not invent a new ENS form. The field list lives on the existing ICS2 article.',
          'JNB can be a southern African candidate and still needs South African customs and the final site. FBM needs DRC import papers, unloading in Lubumbashi and Copperbelt delivery. LUN needs a choice between Lusaka, NLA and a Copperbelt onward move. LBV long cargo needs the Libreville warehouse, lifting and the project site confirmed in advance. Those codes are candidate gateways. They are not a fixed Europe onward flight, fixed space or a fixed transit time. Milestones are more honest than one total number of days: pickup in China, export delivery, first departure, arrival at the European warehouse, readiness of the onward flight, arrival in Africa, customs and the final window, with buffer for rebuild, inspection and outsize handling. A plan is executable only after the carrier, the warehouse and the destination have confirmed it.',
        ],
        bullets: ['Six cost blocks', 'ENS before a vague description flies', 'JNB, FBM, LUN and LBV are different onward jobs', 'Milestones, not one promised day-count'],
      },
    ],
    faqs: [
      {
        question: 'Which cargo is worth a Europe-transit check?',
        answer:
          'Cargo a passenger belly hold cannot load, a routine freighter will not accept, or a destination that has no steady outsize space. Standard small freight should stay on the airline network first. Europe transit adds a warehouse handover. It earns that handover only when it makes an otherwise impossible shipment executable.',
      },
      {
        question: 'Are LGG and BRU a fixed pair?',
        answer:
          'No. Both airports appear in the transit notes. Which one is used depends on whether that warehouse can take the piece, whether the onward carrier accepts the same dimensions, and which African gateway is in play. A quote should not say the cargo always arrives at one of them first.',
      },
      {
        question: 'What extra data does the European leg need?',
        answer:
          'Cargo transiting the European Union can be held for ENS / ICS2 data. Fields and responsibility stay on the existing ICS2 article and with the broker on the shipment. This page does not publish a new ENS form.',
      },
    ],
    checklist: [
      'Dimensions and gross weight of every piece',
      'Packing photos, lifting points and centre of gravity',
      'Whether it can be inverted or stacked',
      'China origin city and ready date',
      'African airport and final address',
      'Description, use and HS code',
      'Shipper and consignee',
      'Who owns the European handover and the ENS',
      'Onward flight and unloading',
      'Latest arrival window',
    ],
    related: [
      { label: 'English LGG gateway', href: '/china-africa-oversized-cargo-via-europe/' },
      { label: 'Chinese LGG network', href: '/zh/lgg-africa-gateway/' },
      { label: 'ICS2 / ENS guide', href: '/insights/eu-ics2-ens-lgg-bru-africa-transit-air-freight/' },
      { label: 'English LBV 8 m guide', href: '/en/insights/lbv-gabon-8-meter-cargo-via-lgg-bru/' },
      hub,
      records,
      rfq,
    ],
    sources: [
      { label: `Liège Airport, cargo. ${reviewed}`, href: 'https://www.liegeairport.com/en/cargo' },
      { label: `Liège Airport, freight types. ${reviewed}`, href: 'https://www.liegeairport.com/en/cargo/freight-types' },
      { label: `Brussels Airport, historical Singapore Airlines Cargo note recording outsize and machinery freight. ${reviewed}`, href: 'https://pressroom.brusselsairport.be/en-35-years-singapore' },
      { label: `IATA, what an aircraft ULD is. ${reviewed}`, href: 'https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/what-is-aircraft-uld-in-air-transport/' },
      { label: `European Commission, Import Control System 2. ${reviewed}`, href: 'https://taxation-customs.ec.europa.eu/customs/customs-security/import-control-system-2_en' },
      { label: `Boeing 747-8 airplane characteristics, Revision E. ${reviewed}`, href: 'https://www.boeing.com/content/dam/boeing/v2/airports/acaps/747-8_Rev_E.pdf' },
      { label: `Boeing StartupBoeing 747-8 Freighter sheet, figure dated 14 May 2024. ${reviewed}`, href: 'https://www.boeing.com/content/dam/boeing/v2/company/startupboeing/freighters/747-8F-freighter.pdf' },
      { label: `WFS Liège terminal handling charges effective 1 January 2026. ${reviewed}`, href: 'https://www.wfs.aero/wp-content/uploads/2025/11/2026-01-Belgium-Terminal-Handling-Charges-010126-WFS-LGG19.pdf' },
    ],
  },
  {
    slug: 'oversized-air-freight-quote-checklist',
    title: 'Oversized air freight quote checklist: twelve items before a rate',
    description:
      'An oversized enquiry needs the size and weight of every piece, packing photos, centre of gravity or lifting points, the origin city, the African airport, the final site and the ready date. A total weight alone makes any rate per kilo a guess.',
    keywords: [
      'oversized air freight quote',
      'project cargo dimensions',
      'air freight chargeable weight',
      'Africa oversized cargo checklist',
    ],
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    readTime: '13 min',
    category: 'Quoting',
    audience: ['Factory shipping desks', 'Forwarder sales', 'Project buyers'],
    angle: 'Collect the gaps first. Chargeable weight comes second. A rate is last, and only after a carrier has accepted the piece.',
    lead:
      'An oversized enquiry needs, at minimum, length, width and height of every piece, gross weight, packing photos, centre of gravity or lifting points, the origin city, the African airport, the final site and the ready date. A total weight alone makes any rate per kilo a guess. Chargeable weight can be calculated first. In centimetres, volume divided by 6,000, then the higher of that result and gross weight. That number is not a freight rate.',
    sections: [
      {
        heading: 'Weight alone cannot price an outsize piece',
        body: [
          'Ordinary air freight can start from weight. Oversized freight has to see length, width, height, packed height, gross weight, centre of gravity, lifting points, forklift pockets, whether it stacks, whether it is this-side-up, and photos of how it is handled. Without those, a price is a guess, and a guessed low price usually breaks at booking, at the warehouse, on the aircraft or at destination unloading.',
          'The twelve items are the description, the HS code, the piece count, the size of each piece, the gross weight of each piece, packing photos, whether it stacks, centre of gravity or lifting points, cargo value, origin city, destination city and the latest arrival. Miss one and loading, chargeable weight or customs has a hole in it.',
        ],
        bullets: ['Size of each piece', 'Packing photos', 'Centre of gravity and lifting points', 'How it will be handled'],
      },
      {
        heading: 'The order after an enquiry lands',
        body: [
          'First, list what is missing. Do not quote. Second, run chargeable weight: length × width × height in centimetres, divided by 6,000, multiplied by the piece count, then take the higher of that and gross weight. Some courier rules use 5,000. The email has to say which divisor was used. Third, decide among a belly hold, a main deck, LGG/BRU, or “not movable yet.”',
          'The calculator page uses a sentence about a light 300 kg shipment that may bill at a higher chargeable weight. That sentence explains the method. It is not an African rate, and it is not a promise about a 700 kg shipment.',
        ],
        bullets: ['Missing items first', 'Then chargeable weight', 'Then loading', 'Price last'],
      },
      {
        heading: 'How the three public records fit the checklist',
        body: [
          caseBoundary + ' If a customer says “we also have something close to 8 m,” the reply is: send packed length, width, height and gross weight, then walk this checklist. Do not reuse a case price.',
          'Photos follow the same list: the outside of the packing, the base, forklift pockets, lifting points, this-side-up marks, and an angle that shows the longest side. This site does not publish a customer’s cargo photos. Send the dimensions, the weight and those photos before anyone judges feasibility.',
        ],
        bullets: ['The table proves a record, not a tariff', 'Do not reuse a case price', 'Name the divisor', 'No photo, no main-deck judgment'],
      },
      {
        heading: 'Collect the twelve items in three groups',
        body: [
          'Identity: description, HS code, value, origin city, destination city. Loading: piece count, size of each piece, gross weight of each piece, packing photos, whether it stacks, centre of gravity or lifting points. Time: ready date and latest arrival. If the customer replies with only a total weight, say the loading group is empty, and that an empty loading group cannot tell a belly hold from a main deck and cannot produce chargeable weight.',
          'Write the arithmetic in the same reply: centimetres multiplied, divided by 6,000, multiplied by pieces, then the higher of that and gross weight. If they use 5,000, they say so. Next to the result, write “chargeable weight, not freight.” If the longest side is near the published 8 m, or one piece is near the 16,730 kg order of magnitude, raise it to a main-deck question, link the figures table, and keep the route boundaries of those records. The 98.8 t figure only says a whole-flight handover has to be sequenced. A full checklist is still not confirmed space until a carrier says so.',
          'Description and HS code come before dimensions, so the papers and the piece do not describe two different commodities. One line per piece for size and weight, and number the photos. Only then look at loading: stacking, tilting, centre of gravity, lifting points, and whether the longest side is near the published 8 m. Near means you ask a main-deck question. It does not mean a B747F is already booked. Origin city, African airport, final site and ready date come last. Any missing item gets listed. It does not get a rate.',
        ],
        bullets: ['Description before dimensions', 'Chargeable weight on its own line', 'Near 8 m, escalate the question', 'A gap means no rate'],
      },
    ],
    faqs: [
      {
        question: 'Why twelve items, instead of asking for the weight?',
        answer:
          'Description, HS code, piece count, size of each piece, gross weight of each piece, packing photos, whether it stacks, centre of gravity or lifting points, cargo value, origin city, destination city and latest arrival. Miss one and loading, chargeable weight or customs has a gap.',
      },
      {
        question: 'What should the photos show?',
        answer:
          'The outside of the packing, the base, forklift pockets, lifting points, this-side-up marks, and an angle that shows the longest side. Without photos, a length in the region of 8 m cannot be judged as a main-deck conversation.',
      },
      {
        question: 'Can you give a rate range first?',
        answer:
          'This warehouse does not publish an unverified rate per kilo. A range without dimensions and a route is still a guess. Collect the list, then ask the carrier what it will accept.',
      },
    ],
    checklist: [
      'Description',
      'HS code',
      'Piece count',
      'Size of each piece',
      'Gross weight of each piece',
      'Packing photos',
      'Whether it stacks',
      'Centre of gravity or lifting points',
      'Cargo value',
      'Origin city',
      'Destination city',
      'Latest arrival',
    ],
    related: [
      hub,
      { label: 'Chargeable-weight calculator', href: '/tools/air-freight-chargeable-weight-calculator/' },
      { label: 'English chargeable-weight guide', href: '/en/insights/china-africa-air-freight-cost-chargeable-weight/' },
      { label: 'English main-deck guide', href: '/en/insights/oversized-air-cargo-booking-documents-main-deck-africa/' },
      records,
      rfq,
    ],
    sources: [
      { label: `Maersk, how air cargo chargeable weight is calculated. ${reviewed}`, href: 'https://www.maersk.com/logistics-explained/transportation-and-freight/2025/03/10/air-cargo-chargeable-weight' },
      { label: `DHL, calculating chargeable weight. ${reviewed}`, href: 'https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html' },
      { label: `UPS, chargeable weight definition. ${reviewed}`, href: 'https://www.ups.com/us/en/supplychain/resources/glossary-term/chargeable-weight' },
    ],
  },
  {
    slug: 'oversized-air-cargo-booking-documents-main-deck-africa',
    title: 'Main-deck booking file for Africa: pieces, doors and who unloads',
    description:
      'A main-deck booking is judged piece by piece. Each piece needs dimensions, gross weight, centre of gravity, lifting points or forklift pockets, tilt limits and photos. Published door and floor figures are ranges from Boeing, airlines and one A330 operator, not a universal acceptance.',
    keywords: [
      'main deck air cargo Africa',
      'oversized booking documents',
      'B747F door dimensions',
      'A330-200F cargo door',
    ],
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    readTime: '16 min',
    category: 'Booking',
    audience: ['Project buyers', 'Equipment factories', 'Forwarders building a main-deck file'],
    angle: 'Five folders have to be complete before you ask a carrier whether the main deck is required. Published door figures stay labelled as that source’s fleet.',
    lead:
      'A main-deck booking looks at the piece, not the total kilos. Every piece needs length, width, height, gross weight, centre of gravity, lifting points or forklift pockets, whether it can tilt, and packing photos. On the African side, say who unloads at JNB, FBM, LUN or LBV. The record of about 8 m shows how a failed belly hold becomes a main-deck question. It does not publish a door size of its own.',
    sections: [
      {
        heading: 'One awkward piece is the problem, not the total weight',
        body: [
          'Two tonnes in ordinary pieces can be straightforward. One long piece, with an offset centre of gravity and a this-side-up mark, is the shipment that stalls. The published 8 m record states a length of about 8 m and does not state packed width or height. A line such as “8 m long and 1.9 m high” is an illustration of why one awkward piece is harder than a total weight. It is not the measured size of that shipment. The 16,730 kg piece measured 735 × 135 × 150 cm, and it was not an African lane. Do not merge the two.',
          'Each piece is its own row: length, width, height, gross weight, whether it stacks, whether it tilts, where the lifting points are, forklift pockets, whether the centre of gravity is known, and a photo or drawing number. Total weight and total pieces do not replace that row. For JNB, FBM, LUN or LBV, the same sheet names the final city and who unloads. Airport receipt and mine receipt are two columns, so the booking email is not just a three-letter code.',
        ],
        bullets: ['One row per piece', 'Number the photos', 'Unloading in its own column', 'Invoice description matches the packing'],
      },
      {
        heading: 'When the question moves to the main deck',
        body: [
          'Only when a belly hold or a normal transfer cannot take the door, the contour or the weight do you put a main deck, B747F nose-door logic and an LGG/BRU build-up into the comparison. The 8 m record followed that judgment. It is not a product you can reorder.',
          'ULD maximum gross weights are the publishing airline’s figures, not one table for every carrier. Lufthansa Cargo’s ULD brochure lists PMC/PAG 96 in or 88 in standard pallets at a maximum gross weight of 6,804 kg, and an AKE (LD3) at 1,588 kg. Boeing’s 747-8F sheet also lists lower-hold LD-3 maximum gross weight as 1,588 kg, subject to lower-hold running load of 116 lb/in and airframe limits. Contour codes still come from the booked carrier’s loading manual. Three lines do not prove every pallet can be built to that weight. The 98.8 t B777F is not a main-deck template for Africa. ' + reviewed,
        ],
        bullets: ['Prove the belly hold fails first', 'Then assess the main deck', 'Do not invent a pallet code', '98.8 t is not an African limit'],
      },
      {
        heading: 'Five folders before you ask the airline',
        body: [
          'Folder one is the piece list: length, width, height, gross weight, stackable or not, tiltable or not, one row each. Folder two is drawings or photos of the base, forklift pockets, lifting points and this-side-up marks, with filenames that match the piece numbers. Folder three is the centre of gravity: write the position if it is known, and write “unknown” if it is not. Do not estimate a centimetre. Folder four is African delivery: the airport code, the final city, and who unloads. Folder five is the commercial file: invoice description, HS code, wood packing, batteries or oil.',
          'With all five, you can ask whether the belly hold fails, whether a main deck or a nose door needs to be assessed, and whether LGG/BRU has to build the cargo. The record of about 8 m only proves that this question has been asked, and that the gateway was LBV. Do not write 735 × 135 × 150 cm onto that 8 m piece. Those are the dimensions of a different, 16,730 kg historical load. Leave pallet type as “to be confirmed by the carrier.” The 98.8 t B777F, PVG to AMS, reminds you that a whole-flight handover needs a sequence. It is not an African main-deck ceiling.',
          'Do not ask a carrier “can this go on the main deck?” while a folder is empty. Ask the customer for the missing folder first.',
        ],
        bullets: ['Five folders', 'Unknown centre of gravity stays unknown', 'Pallet type left blank', 'Do not merge two sets of dimensions'],
      },
      {
        heading: 'Published doors and floors, as ranges',
        body: [
          'Use published doors and floors as ranges. The booking still follows the carrier’s loading manual. Boeing 747-8F, StartupBoeing sheet dated 14 May 2024: side-cargo door clear opening 3.41 m × 3.05 m (134.4 in × 120 in). The nose door is a non-rectangular opening with labels including 381 cm, 356 cm and 249 cm. Main-deck running load matches the 747-400F, 15–52 kg/cm by station. A sample 96 × 125 in unit is shown from 3,401 kg to 8,210 kg. Lower-hold running load is 21 kg/cm. Those side-door centimetres are on the 747-8F sheet. They are not a sentence of 747-400F dimensions.',
          'Operator sheets for the 747-400F are indicative and they do not match each other. Atlas Air’s January 2024 one-sheet gives a main-deck side-door clear opening 134 in wide (3.4 m) and 120 in high (3.1 m), and lower doors 110 in wide by 66 in high. Qantas Freight’s flyer gives a main door of 122 in × 134 in (3.10 m × 3.41 m) and a nose-loading opening of 100 in × 128 in (2.54 m × 3.25 m). Book against the carrier on the airway bill. The two operator sheets are not the same drawing.',
          'Lufthansa Cargo’s 777F page: side door height × width 120 × 142 in, main-deck loading height up to 118 in, lower doors 66 × 105 in, lower-hold loading height up to 64 in, published capacity 227,075 lb and route-dependent. ANA Cargo’s 767-300F page: main door 340 × 262 cm, lower doors 340 × 170 cm, and the BCF aft lower door 178 × 175 cm. Main-deck floor 1,221 kg/m², compartment maximum 24,734 kg, and the page says that is not the aircraft payload.',
          'Airbus’s A330 aircraft characteristics file dated 1 August 2022 gives main-deck usable volume of 336.8 m³ on 96 × 125 in pallets, a Trent 700 estimated payload of 65 to 70 tonnes, and maximum take-off weight of 227 or 233 tonnes. Airbus marketing from the same period states payload both as “up to 70 tonnes” and as “61 tonnes.” Use the characteristics file, and let the operator confirm. Door millimetres on that file sit on a figure, not in a sentence. Avianca Cargo, as an A330-200F operator, publishes a main door of 2.56 × 3.58 m (101 × 141 in), a forward lower door of 1.70 × 2.70 m, an aft lower door of 1.68 × 2.72 m, and a straight-load maximum width of 3.372 m. That is that airline’s fleet. Another A330-200F is confirmed with its own carrier. ' + reviewed,
        ],
        bullets: ['747-8F from Boeing’s text sheet', '747-400F from the operator, and they differ', '777F and 767F from the airline pages', 'A330-200F doors from Avianca, not from every freighter'],
      },
    ],
    faqs: [
      {
        question: 'How is a main-deck file different from an ordinary booking?',
        answer:
          'An ordinary booking can start with a description and a weight. A main deck also needs the packing base, whether a forklift can enter, lifting points, centre of gravity, this-side-up marks, and the unloading equipment at destination. Without those, the airline cannot judge whether the piece loads.',
      },
      {
        question: 'Is 1.9 m the height of the 8 m shipment?',
        answer:
          'No. “Eight metres long, an offset centre of gravity, and this-side-up” describes why one piece is difficult. The 8 m record publishes a length of about 8 m and does not publish packed width or height. The 16,730 kg piece measured 735 × 135 × 150 cm, and it was not an African lane. Do not merge the two sets of numbers into one piece of cargo.',
      },
      {
        question: 'Do the commercial documents travel with the loading file?',
        answer:
          'Yes. If the invoice description, the HS code and the description on the packing disagree, a piece that loads can still fail customs. The African customs pages own the document names. This page owns the loading fields.',
      },
    ],
    checklist: [
      'Length, width and height of every piece',
      'Gross weight of every piece',
      'Packing photos',
      'Centre of gravity, or “unknown”',
      'Lifting points and forklift pockets',
      'Stackable, tiltable, this-side-up',
      'Drawing reference',
      'Destination airport and final city',
      'Who unloads',
    ],
    related: [
      { label: 'English LGG/BRU guide', href: '/en/insights/china-africa-via-europe-lgg-bru-transit/' },
      { label: 'English LBV 8 m guide', href: '/en/insights/lbv-gabon-8-meter-cargo-via-lgg-bru/' },
      { label: 'English quote checklist', href: '/en/insights/oversized-air-freight-quote-checklist/' },
      hub,
      records,
      rfq,
    ],
    sources: [
      { label: `IATA, what an aircraft ULD is. ${reviewed}`, href: 'https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/what-is-aircraft-uld-in-air-transport/' },
      { label: `IATA, unit load devices. ${reviewed}`, href: 'https://www.iata.org/en/programs/cargo/cargo-operations/unit-load-devices/' },
      { label: `Lufthansa Cargo, pallets, containers and fleet brochure. ${reviewed}`, href: 'https://www.lufthansa-cargo.com/documents/d/guest/brochure_pallets_containers_and_fleet' },
      { label: `Boeing StartupBoeing 747-8 Freighter sheet, figure dated 14 May 2024. ${reviewed}`, href: 'https://www.boeing.com/content/dam/boeing/v2/company/startupboeing/freighters/747-8F-freighter.pdf' },
      { label: `Boeing 747-8 airplane characteristics, Revision E. ${reviewed}`, href: 'https://www.boeing.com/content/dam/boeing/v2/airports/acaps/747-8_Rev_E.pdf' },
      { label: `Atlas Air 747-400F one-sheet, January 2024. Indicative for that fleet. ${reviewed}`, href: 'https://www.atlasairworldwide.com/wp-content/uploads/2024/01/747-400F_A4One-Sheet_013024.pdf' },
      { label: `Qantas Freight 747-400F flyer. Indicative, and not identical to Atlas. ${reviewed}`, href: 'https://www.qantas.com/adobe/assets/urn:aaid:aem:0537add8-193f-4c40-bb31-0cadc7785821/original/as/b747-400f-flyer.pdf' },
      { label: `Lufthansa Cargo, Boeing 777F. Lufthansa figures, not a universal freighter. ${reviewed}`, href: 'https://www.lufthansa-cargo.com/en/fleet-ulds/fleet/b777f' },
      { label: `ANA Cargo, Boeing 767-300F. ${reviewed}`, href: 'https://www.anacargo.jp/en/int/specification/b6_300f.html' },
      { label: `Airbus A330 aircraft characteristics, file dated 1 August 2022. ${reviewed}`, href: 'https://www.airbus.com/sites/g/files/jlcbta136/files/2022-08/Airbus-Commercial-Aircraft-AC-A330.pdf' },
      { label: `Avianca Cargo, A330-200F doors for that fleet. ${reviewed}`, href: 'https://www.aviancacargo.com/eng/pye/aircraft-container.aspx' },
    ],
  },
  {
    slug: 'africa-mining-equipment-air-freight-rfq-template',
    title: 'Mining equipment RFQ: the fields a pump, motor or breakdown spare needs',
    description:
      'A mining-spare enquiry should name the commodity, model, HS code, size and weight of every piece, photos, origin city, African airport, mine address, importer and latest arrival in one pass. Downtime cost is the buyer’s own deadline, not a number this site invents.',
    keywords: [
      'Africa mining equipment air freight',
      'mine spare parts RFQ',
      'FBM JNB LUN spares',
      'breakdown spare air freight',
    ],
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    readTime: '13 min',
    category: 'RFQ',
    audience: ['Mine suppliers', 'Industrial factories', 'Project buyers in Africa', 'Forwarder sales'],
    angle: 'Send the whole template back. A total weight and the word Africa cannot choose JNB, FBM or LUN, and they cannot price a shutdown.',
    lead:
      'A mining breakdown enquiry should state, in one pass, the description, model, HS code, size and gross weight of every piece, photos, origin city, African airport, mine address, importer and latest arrival. The gateway is chosen among JNB, FBM and LUN, not from the words “to Africa.” This warehouse does not hold a downtime-cost figure. Do not invent one for the customer.',
    sections: [
      {
        heading: 'The buyer is buying certainty, and the file still has to be specific',
        body: [
          'A mine spare is not a replenishment order. A pump, motor, gearbox, sensor, electrical cabinet, valve or crusher part that stops a plant is bought for certainty and speed. Ask for the latest arrival, where the site is, whether the case can be opened, what lifting exists, and whether the importer can clear, before you choose among JNB, FBM, LUN or another gateway already on the route hub, such as CKY or BKO when the country is actually Guinea or Mali.',
          'A thin enquiry wastes the day: “300 kg to Africa, what is the rate?”, then dimensions, then photos, then the destination. Start with the template. Its job is to let someone judge the route, chargeable weight, the deck, destination risk and who still has to confirm.',
        ],
        bullets: ['Latest arrival', 'Where the site is', 'Lifting at site', 'Who can clear'],
      },
      {
        heading: 'Three gateways, three different next pages',
        body: [
          'A South African mine starts on the JNB page: nationwide collection in China, then the SARS file. A DRC copper-belt job starts on the FBM page and keeps the airport, customs and the mine as three boundaries. Zambia starts by asking whether LUN or NLA is closer to the site. The “final mine” field exists so that choice can be made.',
          'Loading risk uses the 8 m and 16,730 kg rows on the figures table to show the customer that length and the weight of one piece change the aircraft. Neither row is a mine rate you can copy. ' + caseBoundary,
        ],
        bullets: ['JNB for the South Africa file', 'FBM for three boundaries', 'LUN or NLA from the site', 'Do not copy a case price'],
      },
      {
        heading: 'Text you can send back as-is',
        body: [
          'Please reply by field, not with a total weight only: description, use, model, HS code, piece count, length, width, height and gross weight of every piece, packing photos, origin city, destination airport, mine or factory address, importer, ready date, latest arrival, and whether the cargo contains oil or batteries. Wood packing, liquid and “cannot be inverted” belong on their own lines.',
          'Downtime is recorded only as the deadline the customer gives. Do not fill in a money amount. Nothing in the public file supports a stock sentence such as “one lost day is worth this much.”',
        ],
        bullets: ['Send the whole block', 'Total weight is not enough', 'Oil and batteries on their own line', 'Do not invent a shutdown cost'],
      },
      {
        heading: 'What to do when the template comes back full',
        body: [
          'Sort three things, and stop at price if any one is empty. First, the final mine: South Africa goes to the JNB page, the DRC copper belt goes to the FBM page, Zambia is a comparison of LUN and NLA. Second, whether the size or weight of one piece has to be raised to a main-deck question. Third, the file itself: HS code, importer, photos, and a separate line for oil or batteries.',
          'When you raise the main-deck question, link the figures table and repeat the boundaries as published. About 8 m is long cargo into LBV, not a standard length for mine spares. 16,730 kg is a historical load from PVG to the Middle East, not a weight the mine has accepted. 98.8 t is one B777F from PVG to AMS, not African space. The latest arrival is recorded as the customer’s requirement. It is not answered with a promised number of days. If the customer did not state a downtime figure, leave it empty. The template shortens the back-and-forth into one email. It is still not a tariff. The figures table, the route hub and the RFQ form are the three links that follow, and the price waits for the carrier.',
        ],
        bullets: ['Pick the route page first', 'Then ask if a main deck is in play', 'Do not promise days', 'Do not fill in a loss amount'],
      },
    ],
    faqs: [
      {
        question: 'What is the shortest set of fields?',
        answer:
          'Description and use, brand and model, HS code, piece count, size and gross weight of every piece, packing photos, cargo value, origin city, destination airport, final mine, importer and latest arrival. Oil, batteries, liquid or wood packing each get their own line.',
      },
      {
        question: 'What if the reply is only “300 kg to Africa”?',
        answer:
          'Send the template back in full, and say that without dimensions and a final mine you cannot judge chargeable weight or the gateway. Do not offer a rate per kilo and then chase the facts. 300 kg is a weight. It is not a route.',
      },
      {
        question: 'Can you promise a number of days to the mine?',
        answer:
          'No. There is no current transit time for African lanes stored here. The 8 m case also says timing is confirmed shipment by shipment from the ready date, the space, the transfer window and whether the site can receive.',
      },
    ],
    checklist: [
      'Description and use',
      'Brand and model',
      'HS code',
      'Piece count',
      'Size and weight of each piece',
      'Packing photos',
      'Cargo value',
      'Origin city',
      'Destination airport',
      'Mine address',
      'Importer',
      'Latest arrival',
    ],
    related: [
      { label: 'English JNB guide', href: '/en/insights/jnb-mining-spares-air-freight/' },
      { label: 'English FBM guide', href: '/en/insights/fbm-copperbelt-mining-equipment-air-freight/' },
      { label: 'English Zambia guide', href: '/en/insights/lun-zambia-industrial-air-freight-guide/' },
      hub,
      records,
      rfq,
    ],
    sources: [
      { label: 'Project-record figures used as loading evidence, with the route boundaries on that page.', href: 'https://www.eascargo.com/cases/project-records/' },
    ],
  },
  {
    slug: 'china-africa-air-freight-cost-chargeable-weight',
    title: 'China to Africa air freight cost: calculate chargeable weight before a rate',
    description:
      'A rate per kilo cannot be answered from a weight alone, and this site does not publish an unverified tariff. What you can calculate is chargeable weight: centimetres length × width × height ÷ 6,000 × pieces, then the higher of that and gross weight.',
    keywords: [
      'China to Africa air freight cost',
      'air freight chargeable weight',
      'volumetric weight divisor 6000',
      'Africa air freight surcharges',
    ],
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    readTime: '14 min',
    category: 'Cost',
    audience: ['Factories in China', 'Traders', 'Project buyers', 'Forwarders'],
    angle: 'Chargeable weight is a billing base. Fuel, security, outsize handling, a European warehouse and destination charges sit outside the formula and are quoted live.',
    lead:
      '“How much per kilo?” cannot be answered directly, because this warehouse does not publish an unverified rate. What you can calculate first is chargeable weight: length × width × height in centimetres, divided by 6,000, multiplied by the number of pieces, then the higher of that result and gross weight. If the divisor changes to 5,000, say so. Fuel, war-risk, outsize handling and destination charges in Africa are not outputs of that formula.',
    sections: [
      {
        heading: 'The same 300 kg can be three different shipments',
        body: [
          'A China-to-Africa quote is not total weight times a unit rate. Someone searching “how much per kilo” usually has not yet stated dimensions, volumetric weight, the destination airport, the final city, who clears, or the arrival they need. Dense cargo, volumetric cargo, a long piece, a battery, and a main-deck project do not share a price logic. A reply that can actually be booked starts by stating chargeable weight and the operating boundary.',
          'The formula stops at chargeable weight. Volumetric weight of one piece is length × width × height in centimetres, divided by the divisor. Multiply by the piece count. Chargeable weight is the higher of volumetric weight and gross weight. That matches the calculator on this site. The calculator’s remark that a light shipment may be billed on a higher weight explains the method. It is not a tariff. The same chargeable weight still has a different cost structure in a belly hold, on a main deck, and via LGG/BRU. A result of 400 kg does not answer “what does it cost to JNB?”',
        ],
        bullets: ['Name the divisor', 'Take the higher of gross and volumetric', 'Do not multiply by a made-up rate', 'A main deck is priced apart'],
      },
      {
        heading: 'Which divisor, and why the result is not the freight',
        body: [
          'The on-site calculator defaults to 6,000 and can be switched to 5,000 or a custom divisor. 6,000 is the common air-freight divisor. Some products and courier services use 5,000. The quote email has to name the divisor, or the chargeable weight cannot be checked. Maersk, DHL and UPS describe the same higher-of-gross-and-volumetric idea. They are not an EASCARGO rate card.',
          'Chargeable weight is only the billing base. Extra length, a main deck, Europe transit, customs and destination charges sit outside the formula. Until a carrier confirms, do not multiply chargeable weight by a unit rate you composed yourself.',
        ],
        bullets: ['6,000 unless the channel says 5,000', 'Write the divisor in the same sentence', 'The output is named chargeable weight', 'Empty fields mean no unit rate'],
      },
      {
        heading: 'Surcharges stay on their own lines, without a published amount',
        body: [
          'Keep these off the rate per kilo: outsize handling, the European warehouse, the African onward flight, the customs broker, storage, the truck and unloading. Say which of those the shipper pays and which the importer pays. That boundary belongs in the quote.',
          'Fuel, war-risk, extra length and ground charges are not given amounts here. They are not an output of the chargeable-weight formula. Carriers usually assess fuel and war-risk as a surcharge that moves with chargeable weight or with the kilo. Outsize add-ons follow that airline’s own size bands. Ground charges are the airport or warehouse tariff, separate from the air freight. Lufthansa and ANA both say the weight an aircraft can actually carry changes with the route, the weather and the payload, and that sales has to confirm it. A handler can publish its own tariff. WFS at Liège publishes terminal handling charges. Those are warehouse charges, not an EASCARGO rate, and the euro figures are not copied onto this page. A live amount is given only through a shipment-specific quote. ' + caseBoundary + ' ' + reviewed,
        ],
        bullets: ['Surcharges on their own lines', 'Say who pays', 'Do not fill a missing ground charge', 'The case records are not a rate card'],
      },
      {
        heading: 'From one sentence to a weight you can compare',
        body: [
          'When the customer says “300 kg to Africa, what is the rate?”, ask for the three dimensions and the piece count, and say you will use length × width × height in centimetres, divided by 6,000, multiplied by pieces, then the higher of that and gross weight. If they insist on a courier divisor, change it to 5,000 and write that in the same sentence. The calculator can do the arithmetic. The output is still called chargeable weight. Do not clip the light-cargo sentence and present it as an African price.',
          'After chargeable weight, open three more lines: whether the piece may be outsize or need a main deck, whether the destination airport and the final city are known, and whether the invoice and the importer are in the file. If any line is empty, do not move on to a rate per kilo. Outsize handling, the European warehouse, the African onward flight, customs, storage and the truck each get their own line. Where there is no current amount, write that it will be confirmed. Do not write zero.',
          'A three-line reply is enough. Line one asks for length, width, height and pieces, and states the 6,000 divisor, or 5,000 if they said courier. Line two names the result chargeable weight and says it is not the freight to Africa. Line three lists what is still empty: destination airport, final city, whether it is outsize, invoice and importer. A blank stops the unit rate. The 8 m record says length changes both chargeable weight and loading. The 16,730 kg piece, 735 × 135 × 150 cm, says a heavy piece that also occupies a pallet cannot be quoted on total weight alone. The 98.8 t record says a whole flight is not a per-kilo question. Their original routes stay as published. They are not converted into today’s African rate.',
        ],
        bullets: ['Ask for three dimensions first', 'The divisor sits in the same sentence', 'A blank line means no rate', 'A missing surcharge is not zero'],
      },
    ],
    faqs: [
      {
        question: 'Do you use 6,000 or 5,000?',
        answer:
          'The calculator on this site defaults to 6,000 and can be switched to 5,000 or a custom divisor. 6,000 is the common air-freight divisor. Some channels and courier products use 5,000. The quote email has to name the divisor, or the chargeable weight cannot be checked.',
      },
      {
        question: 'Is chargeable weight the freight charge?',
        answer:
          'No. It is only the billing base. Extra length, a main deck, Europe transit, customs and destination charges sit outside the formula. Until a carrier confirms, do not multiply chargeable weight by a unit rate you made up.',
      },
      {
        question: 'How do the public records separate dense cargo from volumetric cargo?',
        answer:
          'The 16,730 kg piece, measuring 735 × 135 × 150 cm, is a dense-load record, and the route was not Africa. The 8 m piece is a volume and length problem. Neither converts into today’s African rate per kilo.',
      },
    ],
    checklist: [
      'Origin city',
      'Destination airport',
      'Final city',
      'Description and use',
      'HS code',
      'Piece count',
      'Size of each piece',
      'Gross weight of each piece',
      'Packing photos',
      'Cargo value',
      'Batteries or liquid, if any',
      'Latest arrival',
    ],
    related: [
      { label: 'Chargeable-weight calculator', href: '/tools/air-freight-chargeable-weight-calculator/' },
      { label: 'English quote checklist', href: '/en/insights/oversized-air-freight-quote-checklist/' },
      { label: 'English JNB guide', href: '/en/insights/jnb-mining-spares-air-freight/' },
      { label: 'English FBM guide', href: '/en/insights/fbm-copperbelt-mining-equipment-air-freight/' },
      { label: 'English LBV guide', href: '/en/insights/lbv-gabon-8-meter-cargo-via-lgg-bru/' },
      hub,
      records,
      rfq,
    ],
    sources: [
      { label: `Maersk, air cargo chargeable weight. ${reviewed}`, href: 'https://www.maersk.com/logistics-explained/transportation-and-freight/2025/03/10/air-cargo-chargeable-weight' },
      { label: `DHL, calculating chargeable weight. ${reviewed}`, href: 'https://www.dhl.com/gb-en/home/global-forwarding/freight-forwarding-education-center/calculating-chargeable-weights.html' },
      { label: `UPS, chargeable weight definition. ${reviewed}`, href: 'https://www.ups.com/us/en/supplychain/resources/glossary-term/chargeable-weight' },
      { label: `Lufthansa Cargo, Boeing 777F. Payload varies by route. ${reviewed}`, href: 'https://www.lufthansa-cargo.com/en/fleet-ulds/fleet/b777f' },
      { label: `ANA Cargo, Boeing 767-300F. Payload is not the floor limit. ${reviewed}`, href: 'https://www.anacargo.jp/en/int/specification/b6_300f.html' },
      { label: `WFS Belgium terminal handling charges, Liège, stated as effective 1 August 2025. Warehouse charges, not copied as a rate. ${reviewed}`, href: 'https://www.wfs.aero/wp-content/uploads/2022/08/2025-08-WFS-Belgium-Terminal-Handling-Charges-LGG-.pdf' },
    ],
  },
  {
    slug: 'africa-customs-documents-checklist-air-freight',
    title: 'Africa air freight customs documents: the shared list, then the country page',
    description:
      'No single document set covers every African country. Every air shipment still needs a commercial invoice, packing list, HS code, value, an AWB and an importer. Permits and conformity certificates stay on the country page that cites them.',
    keywords: [
      'Africa air freight customs documents',
      'commercial invoice packing list',
      'SONCAP certificate validity',
      'PVoC certificate of conformity',
    ],
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    readTime: '15 min',
    category: 'Customs',
    audience: ['Export factories', 'Trading companies', 'Importers in Africa'],
    angle: 'Use this page for the papers almost every shipment needs. Open the destination page before you name a permit, a system or a number of days.',
    lead:
      'There is no customs file that covers every African country. Every air shipment still has to line up a commercial invoice, a packing list, an HS code, a value, an AWB and an importer. Permits, conformity certificates and the names of electronic systems belong on the country page, where the source links are. This page is the shared checklist. It does not replace those pages, and it does not state one clearance time or one fee for the continent.',
    sections: [
      {
        heading: 'One pack does not clear a continent',
        body: [
          'What usually slows an African air shipment is the file, not the flying time. A commercial invoice, packing list, contract, HS code, value, currency, the consignee’s right to import, a permit, wood packing and origin can each hold the cargo if they disagree with each other. Outsize freight, used equipment, batteries, medical devices, chemical-related goods and mining equipment are usually one permit or certificate stricter than general cargo. Whether that applies is decided from the sources on that country’s page, not from a trade nickname.',
          'Use this page first to see whether the shared items are missing. Then open the destination customs page and adopt only the systems, certificates and sources written there. In parallel, hand the piece dimensions to the loading check. If any of the three steps has a gap, do not quote an all-in price “including customs.” Many shippers ask only for the air freight and meet storage, ground handling, the broker, an inspection, the truck and unloading at the African airport. Name that boundary early.',
        ],
        bullets: ['Shared items first', 'Then open the country page', 'Dimensions travel with the documents', 'No unverified all-in price'],
      },
      {
        heading: 'Papers that show up on almost every shipment',
        body: [
          'Commercial invoice, packing list, an HS code that matches the description, value and currency, the AWB, and the identity of the importer or consignee. For wood packing, confirm whether it has been treated to ISPM 15. A verbal “it was fumigated” is not the document.',
          'Country pages already name their own systems and official links: SARS in South Africa, ZRA in Zambia, ACI/ACID in Egypt, and the others. Copying all of them onto this checklist would go stale, and it would make a thin page look like a sourced one. After the shared items match, stop. System names, certificate names and electronic-filing names move to the country page.',
        ],
        bullets: ['Invoice and packing list agree', 'HS code matches the description', 'Importer identified', 'ISPM 15 is a document, not a remark'],
      },
      {
        heading: 'Certificate validity that has actually been checked',
        body: [
          'The validity periods below cover the regimes that were checked. They are not one table for Africa. Nigeria’s Standards Organisation says a Product Certificate PC1 is valid for six months and single use, while PC2 and PC3 are valid for 12 months and may be used more than once. A SONCAP Certificate (SC) is tied to one PAAR and one shipment. SON says product certificates and the SC are generated within 96 hours after time zones are considered, and within 24 hours when the file is complete. That is certificate generation, not release at the airport. The import permit used with Form M is valid for 12 months, as SON states it.',
          'Tanzania Bureau of Standards’ 2025 PVoC guideline says a Certificate of Conformity is valid for three months from issue. Kenya Bureau of Standards says PVoC Route B registration is valid for one year and a Route C licence for three years. That is registration or a licence, not the validity of each Certificate of Conformity. SARS does not, on the pages used here, state that clearance “usually takes” a set number of days.',
          'World Bank Doing Business 2020, with data collected through May 2019, measures documentary compliance and border compliance hours for a standardised import, often a sea or land shipment. It is an order of magnitude, not an air-cargo release promise. The profiles record import documentary compliance and border compliance of 120 hours and 242 hours for Nigeria, 120 hours and 84 hours for Gabon, and 174 hours and 336 hours for the Democratic Republic of Congo. Release after an air arrival is still confirmed shipment by shipment, country by country, and by the nature of the goods. Zambia’s hours were not taken from these profiles and are not stated here. Certificate validity for other countries is not in these three profiles. Open the country page, or send the description to be checked. ' + reviewed,
        ],
        bullets: ['Country page owns the system name', 'The records table owns the loading story', 'No single transit time', 'Checked validity only'],
      },
      {
        heading: 'A factory can tick this order before the cargo leaves',
        body: [
          'Check that the invoice, packing list, HS code, value and currency, AWB and importer describe the same goods. Then see whether wood packing is treated to ISPM 15, and whether batteries, oil, medical devices or used equipment are declared on their own. Then open the destination country’s customs page and copy into the email only the system and certificate names that appear there, such as the SARS material for South Africa, the ZRA material for Zambia, or ACI for Egypt.',
          'Dimensions and documents move together. The record of about 8 m was stuck on both a belly hold and the destination file. An invoice without dimensions does not let an airline judge loading. Dimensions without an importer do not let the destination judge customs. The 16,730 kg and 98.8 t records do not belong in the customs pack. They are loading and whole-flight records. ' + caseBoundary,
          'How many days clearance takes, how many months a certificate still has, and what the destination extras cost are not on one table. Leave the blanks and the links, and let the local broker fill them. Do not harden a number on this shared list.',
        ],
        bullets: ['Align the description first', 'Then open the country page', 'Dimensions and documents in parallel', 'Days and extras stay blank'],
      },
    ],
    faqs: [
      {
        question: 'Which documents show up on almost every air shipment?',
        answer:
          'A commercial invoice, a packing list, an HS code that matches the description, value and currency, an AWB, and the identity of the importer or consignee. For wood packing, confirm ISPM 15 treatment. Do not treat a verbal “it was fumigated” as the document.',
      },
      {
        question: 'Why are fifty country systems not listed here?',
        answer:
          'Each country page already names its own system and official link, for example SARS in South Africa, ZRA in Zambia, and ACI/ACID in Egypt. Copying them onto this checklist would go stale, and it would make a thin page look like a sourced one.',
      },
      {
        question: 'Do outsize documents and dimensions have to travel together?',
        answer:
          'Yes. The record of about 8 m was stuck on both loading and the destination file. An invoice without the size of each piece does not let an airline judge the aircraft. Dimensions without an importer do not let the destination judge customs.',
      },
    ],
    checklist: [
      'Commercial invoice',
      'Packing list',
      'HS code',
      'Contract, if the destination asks for it',
      'Value and currency',
      'Importer details',
      'Permits, from the country page only',
      'Packing photos',
      'Wood-packing treatment',
    ],
    related: [
      hub,
      { label: 'South Africa customs guide', href: '/insights/south-africa-jnb-sars-nrcs-loa-air-freight-clearance/' },
      { label: 'Zambia LUN customs guide', href: '/insights/zambia-lun-zra-asycuda-zcsa-air-freight-clearance/' },
      { label: 'Customs document tool', href: '/tools/africa-air-freight-customs-document-checklist/' },
      { label: 'English JNB guide', href: '/en/insights/jnb-mining-spares-air-freight/' },
      records,
      rfq,
    ],
    sources: [
      { label: `SON, SONCAP FAQ. PC and SC validity, and generation time, not port release. ${reviewed}`, href: 'https://son.gov.ng/soncap-faq/' },
      { label: `Tanzania Bureau of Standards, PVoC programme guideline 2025. ${reviewed}`, href: 'https://www.tbs.go.tz/uploads/files/GUIDELINE%20FOR%20PVOC%20PROGRAMME%20-%202025.pdf' },
      { label: `KEBS, PVoC registration routes. Registration and licence, not each CoC. ${reviewed}`, href: 'https://inspection.kebs.go.ke/product-registration-routes/' },
      { label: `World Bank Doing Business 2020, Nigeria profile. Data through May 2019. Not an air-release promise. ${reviewed}`, href: 'https://documents1.worldbank.org/curated/en/270991575031203294/txt/Doing-Business-2020-Comparing-Business-Regulation-in-190-Economies-Economy-Profile-of-Nigeria.txt' },
      { label: `World Bank Doing Business 2020, Gabon profile. ${reviewed}`, href: 'https://documents1.worldbank.org/curated/en/134861574860295761/pdf/Doing-Business-2020-Comparing-Business-Regulation-in-190-Economies-Economy-Profile-of-Gabon.pdf' },
      { label: `World Bank Doing Business 2020, DR Congo profile. ${reviewed}`, href: 'https://documents1.worldbank.org/curated/en/479351575467144366/pdf/Doing-Business-2020-Comparing-Business-Regulation-in-190-Economies-Economy-Profile-of-Congo-Democratic-Republic-of.pdf' },
    ],
  },
]

const bySlug = new Map(englishCoreInsights.map((insight) => [insight.slug, insight]))

export function getEnglishCoreInsight(slug: string) {
  return bySlug.get(slug as EnglishCoreInsightSlug)
}

export function englishCoreInsightParams() {
  return englishCoreInsightSlugs.map((slug) => ({ slug }))
}
