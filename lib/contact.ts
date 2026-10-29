/**
 * Contact channels already published in the repo (public/llms-full.txt,
 * the homepage, and SiteDocument). Do not add a channel that is not there.
 *
 * WHATSAPP_E164: no separate WhatsApp number is published. The mobile bar
 * reuses the sales phone so a tap still opens a chat. Replace this constant
 * if a dedicated WhatsApp number is later added to llms-full.txt.
 */
export const contactChannels = {
  phoneE164: '+8613816539222',
  phoneDisplay: '+86 138 1653 9222',
  email: 'globegsa@gmail.com',
  wechatId: 'jnb931',
  whatsappE164: '8613816539222',
} as const

export function whatsappHref(text: string) {
  return `https://wa.me/${contactChannels.whatsappE164}?text=${encodeURIComponent(text)}`
}

export function quoteMailto(body: string, subject: string) {
  return `mailto:${contactChannels.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
