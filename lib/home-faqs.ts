export type HomeFaq = {
  question: string
  answer: string
}

export const chineseHomeFaqs: HomeFaq[] = [
  {
    question: 'EASCARGO 是做什么的？',
    answer:
      'EASCARGO 是设在上海的国际空运团队，由 Jones Zheng 负责。公开资料中的操作经验是 16 年国际空运。业务重点是中国到非洲的超大件、重货和项目货：按每一票核对能否装机、走哪条路线、资料是否齐、最终现场能否交付。',
  },
  {
    question: '核心非洲机场页面有哪些？',
    answer:
      '优先看非洲航线 Hub，以及 JNB 约翰内斯堡、FBM 卢本巴希、LUN 卢萨卡和 LBV 利伯维尔。Hub 里还有更多非洲机场。这些页面用于路线判断，不是固定航班或固定价格。',
  },
  {
    question: '询价前需要准备什么？',
    answer:
      '至少需要起运城市或机场、目的机场和最终现场、品名、每件尺寸、每件毛重、货好时间。超限件还要包装照片、吊点、叉车条件和重心。没有这些信息，只能给方向，不能给可执行报价。',
  },
  {
    question: '8 米、16,730 公斤和 98.8 吨说明什么？',
    answer:
      '这三组数字来自站内已公开的项目和装载记录：约 8 米的 LBV 长货、单件 16,730 公斤的特殊装载，以及一班 B777F 上 98.8 吨的历史组织记录。它们只说明做过这类判断，不代表当前舱位、承运人、价格或时效。',
  },
]

export const englishHomeFaqs: HomeFaq[] = [
  {
    question: 'What does EASCARGO do?',
    answer:
      'EASCARGO is a Shanghai-based international air freight forwarder led by Jones Zheng. The public profile states 16 years of international air freight operations. The specialization is oversized, heavy and project cargo from China to Africa: shipment-by-shipment checks of loading, route, customs documents and final-site delivery.',
  },
  {
    question: 'Which African airport pages should I read first?',
    answer:
      'Start with the Africa route hub, then JNB Johannesburg, FBM Lubumbashi, LUN Lusaka and LBV Libreville. The hub lists further African airports. These pages are route assessments, not published flight schedules or fixed rates.',
  },
  {
    question: 'What is needed before a quote?',
    answer:
      'At minimum: origin city or airport, destination airport and final site, commodity, dimensions and gross weight of every piece, and the cargo-ready date. Oversized pieces also need packing photos, lifting points, forklift access and center of gravity. Without that, a reply can only give a direction, not an executable quote.',
  },
  {
    question: 'What do the 8 m, 16,730 kg and 98.8 t figures mean?',
    answer:
      'They come from public records already on this site: an approximately 8-meter piece routed toward LBV, a 16,730 kg single-piece loading, and a historical 98.8-ton B777F single-flight operation. They show the kind of work reviewed. They are not a current offer of capacity, carrier, price or transit time.',
  },
]

export function faqPageSchema(pageUrl: string, faqs: HomeFaq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    url: pageUrl,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
