/**
 * Sales phone and email are the numbers already published on the site.
 * WhatsApp is a separate number: +86 187 2185 6456.
 */
export const contactChannels = {
  phoneE164: '+8613816539222',
  phoneDisplay: '+86 138 1653 9222',
  email: 'globegsa@gmail.com',
  wechatId: 'jnb931',
  whatsappE164: '8618721856456',
} as const

export function whatsappHref(text: string) {
  return `https://wa.me/${contactChannels.whatsappE164}?text=${encodeURIComponent(text)}`
}

export function quoteMailto(body: string, subject: string) {
  return `mailto:${contactChannels.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
