export type Destination = {
  code: string
  countryZh: string
  countryEn: string
  cityZh: string
  cityEn: string
  href: string
  hrefEn?: string
}

/** Airport pages that already exist. JNB is the only code with a separate English URL. */
export const destinations: Destination[] = [
  { code: 'JNB', countryZh: '南非', countryEn: 'South Africa', cityZh: '约翰内斯堡', cityEn: 'Johannesburg', href: '/africa-air-freight/jnb/', hrefEn: '/en/africa-air-freight/jnb/' },
  { code: 'CPT', countryZh: '南非', countryEn: 'South Africa', cityZh: '开普敦', cityEn: 'Cape Town', href: '/africa-air-freight/cpt/' },
  { code: 'DUR', countryZh: '南非', countryEn: 'South Africa', cityZh: '德班', cityEn: 'Durban', href: '/africa-air-freight/dur/' },
  { code: 'FBM', countryZh: '刚果金', countryEn: 'DR Congo', cityZh: '卢本巴希', cityEn: 'Lubumbashi', href: '/africa-air-freight/fbm/' },
  { code: 'FIH', countryZh: '刚果金', countryEn: 'DR Congo', cityZh: '金沙萨', cityEn: 'Kinshasa', href: '/africa-air-freight/fih/' },
  { code: 'LUN', countryZh: '赞比亚', countryEn: 'Zambia', cityZh: '卢萨卡', cityEn: 'Lusaka', href: '/africa-air-freight/lun/' },
  { code: 'LBV', countryZh: '加蓬', countryEn: 'Gabon', cityZh: '利伯维尔', cityEn: 'Libreville', href: '/africa-air-freight/lbv/' },
  { code: 'LOS', countryZh: '尼日利亚', countryEn: 'Nigeria', cityZh: '拉各斯', cityEn: 'Lagos', href: '/africa-air-freight/los/' },
  { code: 'ACC', countryZh: '加纳', countryEn: 'Ghana', cityZh: '阿克拉', cityEn: 'Accra', href: '/africa-air-freight/acc/' },
  { code: 'ABJ', countryZh: '科特迪瓦', countryEn: "Cote d'Ivoire", cityZh: '阿比让', cityEn: 'Abidjan', href: '/africa-air-freight/abj/' },
  { code: 'BKO', countryZh: '马里', countryEn: 'Mali', cityZh: '巴马科', cityEn: 'Bamako', href: '/africa-air-freight/bko/' },
  { code: 'CKY', countryZh: '几内亚', countryEn: 'Guinea', cityZh: '科纳克里', cityEn: 'Conakry', href: '/africa-air-freight/cky/' },
  { code: 'OUA', countryZh: '布基纳法索', countryEn: 'Burkina Faso', cityZh: '瓦加杜古', cityEn: 'Ouagadougou', href: '/africa-air-freight/oua/' },
  { code: 'NIM', countryZh: '尼日尔', countryEn: 'Niger', cityZh: '尼亚美', cityEn: 'Niamey', href: '/africa-air-freight/nim/' },
  { code: 'DSS', countryZh: '塞内加尔', countryEn: 'Senegal', cityZh: '达喀尔', cityEn: 'Dakar', href: '/africa-air-freight/dss/' },
  { code: 'NBO', countryZh: '肯尼亚', countryEn: 'Kenya', cityZh: '内罗毕', cityEn: 'Nairobi', href: '/africa-air-freight/nbo/' },
  { code: 'EBB', countryZh: '乌干达', countryEn: 'Uganda', cityZh: '恩德培', cityEn: 'Entebbe', href: '/africa-air-freight/ebb/' },
  { code: 'DAR', countryZh: '坦桑尼亚', countryEn: 'Tanzania', cityZh: '达累斯萨拉姆', cityEn: 'Dar es Salaam', href: '/africa-air-freight/dar/' },
  { code: 'KGL', countryZh: '卢旺达', countryEn: 'Rwanda', cityZh: '基加利', cityEn: 'Kigali', href: '/africa-air-freight/kgl/' },
  { code: 'ADD', countryZh: '埃塞俄比亚', countryEn: 'Ethiopia', cityZh: '亚的斯亚贝巴', cityEn: 'Addis Ababa', href: '/africa-air-freight/add/' },
  { code: 'HRE', countryZh: '津巴布韦', countryEn: 'Zimbabwe', cityZh: '哈拉雷', cityEn: 'Harare', href: '/africa-air-freight/hre/' },
  { code: 'MPM', countryZh: '莫桑比克', countryEn: 'Mozambique', cityZh: '马普托', cityEn: 'Maputo', href: '/africa-air-freight/mpm/' },
  { code: 'WDH', countryZh: '纳米比亚', countryEn: 'Namibia', cityZh: '温得和克', cityEn: 'Windhoek', href: '/africa-air-freight/wdh/' },
  { code: 'CAI', countryZh: '埃及', countryEn: 'Egypt', cityZh: '开罗', cityEn: 'Cairo', href: '/africa-air-freight/cai/' },
  { code: 'CMN', countryZh: '摩洛哥', countryEn: 'Morocco', cityZh: '卡萨布兰卡', cityEn: 'Casablanca', href: '/africa-air-freight/cmn/' },
]

export function destinationHref(destination: Destination, lang: 'zh' | 'en') {
  if (lang === 'en' && destination.hrefEn) return destination.hrefEn
  return destination.href
}

export function destinationLabel(destination: Destination, lang: 'zh' | 'en') {
  return lang === 'zh'
    ? `${destination.countryZh} · ${destination.cityZh} ${destination.code}`
    : `${destination.countryEn} · ${destination.cityEn} ${destination.code}`
}
