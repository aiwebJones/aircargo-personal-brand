import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = path.resolve(process.argv[2] || path.join(repoRoot, 'dist'))
const oldEgypt = 'egypt-cai-nafeza-aci-cargox-air-freight-clearance'
const egypt = 'egypt-cai-nafeza-aci-cargox-goeic-air-freight-clearance'
const oldNigeria = 'nigeria-los-bodogwu-form-m-paar-air-freight-clearance'
const nigeria = 'nigeria-los-soncap-formm-paar-air-freight'

function read(relativePath) {
  return fs.readFileSync(path.join(repoRoot, relativePath), 'utf8')
}

function readPage(route) {
  const file = path.join(distRoot, route, 'index.html')
  assert.ok(fs.existsSync(file), `Missing exported page: ${route}`)
  return fs.readFileSync(file, 'utf8')
}

function jsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
}

function headings(html) {
  return [...html.matchAll(/<h([23])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((match) => ({
    level: `h${match[1]}`,
    text: match[2]
      .replace(/<[^>]+>/g, ' ')
      .replace(/&(?:amp|lt|gt|quot|apos);/g, ' ')
      .replace(/\s+/g, ' ')
      .trim(),
  }))
}

function visibleMainText(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)
  assert.ok(main, 'Page has no main element')
  return main[1]
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:amp|lt|gt|quot|apos|nbsp);/g, ' ')
    .replace(/&#(?:x([0-9a-f]+)|(\d+));/gi, (_, hex, decimal) =>
      String.fromCodePoint(Number.parseInt(hex || decimal, hex ? 16 : 10)),
    )
    .replace(/\s+/g, ' ')
    .trim()
}

function assertChineseVisibleCopy(html, label) {
  const text = visibleMainText(html)
  const chineseCharacters = text.match(/[\u3400-\u9fff]/g) || []
  assert.ok(chineseCharacters.length > 300, `${label} has too little visible Chinese copy`)
  const sentenceFragment = text.match(
    /\b(?:the|and|or|but|when|this|these|those|there|it|our|we|can|need|before|after|by|of|on|in|at|from|with|that|which|what|where|who|whether|must|may|will|should|because|while|does|is|are|has|have|for|to|if)\b/,
  )
  assert.equal(sentenceFragment, null, `${label} contains a visible English sentence fragment: ${sentenceFragment?.[0]}`)
  const untranslatedUiTerm = text.replace(/\bIATA Cargo XML\b/g, '').match(/\b(?:hub|airport|freight|cargo|route|gateway|submit|read|check|review|compare|direct|option|service|quote|shipment|customer|delivery)\b/i)
  assert.equal(untranslatedUiTerm, null, `${label} contains untranslated English UI copy: ${untranslatedUiTerm?.[0]}`)
  return text
}

function assertChineseHeadings(html, label) {
  const found = headings(html)
  assert.ok(found.length > 0, `No H2/H3 headings found in ${label}`)
  for (const heading of found) {
    assert.match(heading.text, /[\u3400-\u9fff]/, `${label} ${heading.level} is not Chinese: ${heading.text}`)
  }
  return found.length
}

function assertCanonical(html, url, label) {
  assert.ok(html.includes(`rel="canonical" href="${url}"`), `${label} canonical mismatch`)
}

const redirectText = read('public/_redirects')
const redirectLines = redirectText.split(/\r?\n/).filter(Boolean)
assert.ok(redirectLines.slice(0, 4).every((line) => line === line.trim()), 'Redirect rules contain leading or trailing whitespace')
const redirectMap = new Map()
for (const line of redirectLines) {
  const [source, target, status] = line.trim().split(/\s+/)
  if (source && target && status) redirectMap.set(source, { target, status })
}

const redirects = [
  [`/insights/${oldEgypt}`, `/insights/${egypt}/`],
  [`/insights/${oldEgypt}/`, `/insights/${egypt}/`],
  [`/insights/${oldNigeria}`, `/insights/${nigeria}/`],
  [`/insights/${oldNigeria}/`, `/insights/${nigeria}/`],
]
for (const [source, expectedTarget] of redirects) {
  const rule = redirectMap.get(source)
  assert.deepEqual(rule, { target: expectedTarget, status: '301' }, `Missing exact 301 for ${source}`)
  const seen = new Set([source])
  let current = rule.target
  let hops = 1
  while (redirectMap.has(current)) {
    assert.ok(!seen.has(current), `Redirect loop at ${current}`)
    seen.add(current)
    current = redirectMap.get(current).target
    hops += 1
  }
  assert.equal(hops, 1, `Redirect chain found for ${source}`)
  assert.equal(current, expectedTarget, `Redirect destination mismatch for ${source}`)
}
assert.ok(!redirectLines.some((line) => /^\/(?:insights\/\*|\*)\s/.test(line)), 'Unexpected broad insights or site fallback redirect')

const worker = read('public/_worker.js')
const workerMappings = new Map(
  [...worker.matchAll(/\['(\/[^']+\/)', '(\/[^']+\/)']\s*,?/g)].map((match) => [match[1], match[2]]),
)
for (const [source, target] of [
  [`/insights/${oldEgypt}/`, `/insights/${egypt}/`],
  [`/insights/${oldNigeria}/`, `/insights/${nigeria}/`],
]) {
  assert.equal(workerMappings.get(source), target, `Advanced-mode Worker redirect missing: ${source}`)
}
assert.match(worker, /url\.pathname\.endsWith\('\/'\) \? url\.pathname : `\$\{url\.pathname\}\/`/, 'Worker must normalize slash and no-slash paths')

const sitemap = fs.readFileSync(path.join(distRoot, 'sitemap.xml'), 'utf8')
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
assert.ok(sitemapUrls.length > 0, 'Exported sitemap is empty')
assert.equal(new Set(sitemapUrls).size, sitemapUrls.length, 'Sitemap contains duplicate URLs')
for (const slug of [oldEgypt, oldNigeria]) {
  assert.ok(!sitemap.includes(slug), `Legacy URL remains in sitemap: ${slug}`)
}
for (const slug of [egypt, nigeria]) {
  assert.ok(sitemap.includes(`https://www.eascargo.com/insights/${slug}/`), `Canonical URL missing from sitemap: ${slug}`)
  assert.ok(!fs.existsSync(path.join(distRoot, 'insights', slug === egypt ? oldEgypt : oldNigeria, 'index.html')),
    `Legacy static HTML was exported for ${slug}`)
}

const categoryPage = readPage('insights')
const categorySchema = jsonLd(categoryPage).find((item) => item['@type'] === 'CollectionPage')
assert.ok(categorySchema, 'Insights CollectionPage JSON-LD missing')
const listedUrls = categorySchema.mainEntity.itemListElement.map((item) => item.url)
for (const slug of [oldEgypt, oldNigeria]) {
  assert.ok(!categoryPage.includes(slug), `Legacy URL remains in rendered insights list: ${slug}`)
  assert.ok(!listedUrls.some((url) => url.endsWith(`/insights/${slug}/`)), `Legacy URL remains in CollectionPage JSON-LD: ${slug}`)
}
for (const slug of [egypt, nigeria]) {
  assert.ok(categoryPage.includes(`/insights/${slug}/`), `Canonical article missing from rendered insights list: ${slug}`)
  assert.ok(listedUrls.includes(`https://www.eascargo.com/insights/${slug}/`), `Canonical article missing from CollectionPage JSON-LD: ${slug}`)
}

const articleCases = [
  {
    slug: egypt,
    canonical: `https://www.eascargo.com/insights/${egypt}/`,
    requiredText: ['48 小时', '6 个月', '4 小时', '5 MB', '50 kg', 'GOEIC'],
  },
  {
    slug: nigeria,
    canonical: `https://www.eascargo.com/insights/${nigeria}/`,
    requiredText: ['SONCAP', 'B’Odogwu', 'NSW', 'LOS实际空运货站', '免费仓储期'],
  },
]
for (const article of articleCases) {
  const html = readPage(`insights/${article.slug}`)
  assertCanonical(html, article.canonical, article.slug)
  for (const text of article.requiredText) assert.ok(html.includes(text), `${article.slug} missing merged detail: ${text}`)
  if (article.slug === nigeria) {
    assert.ok(!html.includes('30–60') && !html.includes('60–90'), 'Unverified seaport dwell-time ranges remain in the Nigeria article')
    assert.ok(!html.includes('dwelling-time-guidelines'), 'Unsupported NCS dwelling-time source remains in the Nigeria article')
  }
  const schema = jsonLd(html).find((item) => item['@type'] === 'Article')
  assert.ok(schema, `${article.slug} Article JSON-LD missing`)
  assert.equal(schema.mainEntityOfPage, article.canonical, `${article.slug} JSON-LD canonical mismatch`)
  assert.equal(schema.dateModified, '2026-11-12', `${article.slug} modified date mismatch`)
}

const siteMapSource = read('public/sitemap.xml')
const rss = read('public/rss.xml')
const llms = read('public/llms.txt')
for (const slug of [oldEgypt, oldNigeria]) {
  assert.ok(!siteMapSource.includes(slug), `Legacy URL remains in source sitemap: ${slug}`)
  assert.ok(!rss.includes(slug), `Legacy URL remains in RSS: ${slug}`)
  assert.ok(!llms.includes(slug), `Legacy URL remains in llms.txt: ${slug}`)
}
for (const slug of [egypt, nigeria]) assert.ok(llms.includes(`/insights/${slug}/`), `Canonical missing from llms.txt: ${slug}`)
assert.ok(rss.includes(`/insights/${nigeria}/`), 'Nigeria canonical missing from RSS')

const legacySlugsInSource = read('lib/seo-insights.ts')
assert.ok(!legacySlugsInSource.includes(oldEgypt), 'Egypt duplicate still exists in seoInsights source')
assert.ok(!legacySlugsInSource.includes(oldNigeria), 'Nigeria duplicate still exists in seoInsights source')

const routeRoot = path.join(distRoot, 'africa-air-freight')
const routeSlugs = fs.readdirSync(routeRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(routeRoot, entry.name, 'index.html')))
  .map((entry) => entry.name)
assert.ok(routeSlugs.length >= 20, `Expected shared airport template export, found ${routeSlugs.length} routes`)
let routeHeadingCount = 0
for (const slug of routeSlugs) routeHeadingCount += assertChineseHeadings(readPage(`africa-air-freight/${slug}`), `route ${slug}`)

for (const slug of routeSlugs) {
  const html = readPage(`africa-air-freight/${slug}`)
  const text = assertChineseVisibleCopy(html, `route ${slug}`)
  assert.ok(html.includes(`topic=${slug}`), `route ${slug} RFQ CTA lost its topic prefill`)
  if (slug === 'jnb') {
    assert.match(text, /提交\s*JNB\s*货物资料，获取路线判断/, 'JNB route CTA is not Chinese')
    assert.ok(text.includes('货物能否从FOC福州空运到JNB约翰内斯堡？'), 'JNB FOC FAQ question missing')
    assert.ok(text.includes('先核实装载可行性，再讨论空运价格'), 'JNB FAQ answer is not Chinese')
    assert.ok(text.includes('English版JNB路线'), 'JNB English-language switch was removed')
  } else {
    assert.match(text, new RegExp(`提交\\s*${slug.toUpperCase()}\\s*逐票询价`), `route ${slug} CTA is not Chinese`)
  }
}

for (const route of [
  'tools/africa-air-freight-customs-document-checklist',
  'tools/air-freight-chargeable-weight-calculator',
  'china-africa-oversized-cargo-via-europe',
]) {
  assertChineseHeadings(readPage(route), route)
}

const europePage = readPage('china-africa-oversized-cargo-via-europe')
const europeText = assertChineseVisibleCopy(europePage, 'Europe transit page')
assert.ok(europeText.includes('对于无法按常规中国起运航班运输的超大件、重货和项目货'), 'Europe transit body copy is missing')
assert.ok(europeText.includes('发送货物资料邮件'), 'Europe transit CTA is not Chinese')

const chineseJnb = readPage('africa-air-freight/jnb')
const englishJnb = readPage('en/africa-air-freight/jnb')
const englishService = readPage('en/africa-oversized-air-freight')
const jnbEn = 'https://www.eascargo.com/en/africa-air-freight/jnb/'
const jnbZh = 'https://www.eascargo.com/africa-air-freight/jnb/'
const englishServiceUrl = 'https://www.eascargo.com/en/africa-oversized-air-freight/'
assertCanonical(chineseJnb, jnbZh, 'Chinese JNB')
assertCanonical(englishJnb, jnbEn, 'English JNB')
const hasAlternate = (html, language, url) =>
  new RegExp(`<link rel="alternate" (?:hrefLang|hreflang)="${language}" href="${url}"`, 'i').test(html)
assert.ok(hasAlternate(chineseJnb, 'en', jnbEn), 'Chinese JNB is missing its true English alternate')
assert.ok(hasAlternate(chineseJnb, 'zh-CN', jnbZh), 'Chinese JNB is missing its zh-CN alternate')
assert.ok(hasAlternate(englishJnb, 'en', jnbEn), 'English JNB reciprocal en alternate missing')
assert.ok(hasAlternate(englishJnb, 'zh-CN', jnbZh), 'English JNB reciprocal zh-CN alternate missing')
assertCanonical(englishService, englishServiceUrl, 'Existing English commercial page')
assert.ok(englishService.includes('China to Africa Oversized Air Freight Expert'), 'Existing English service page content missing')

const jnbPrefill = '/tools/africa-project-cargo-rfq/?source=route&topic=jnb-foc'
assert.ok(chineseJnb.includes('topic=jnb-foc'), 'JNB route CTA no longer carries FOC prefill parameters')
assert.ok(chineseJnb.includes('topic=jnb'), 'JNB route CTA no longer carries route prefill parameters')
assert.ok(fs.existsSync(path.join(distRoot, `${jnbPrefill.split('?')[0]}`, 'index.html')), 'Read-only RFQ preview route missing')

console.log(`PASS: ${redirects.length} exact static 301 variants plus Advanced-mode Worker mappings; canonical/JSON-LD/list/sitemap checks; ${routeSlugs.length} routes with ${routeHeadingCount} Chinese H2/H3 and visible-copy/CTA checks; Europe transit body/CTA; English JNB alternates and RFQ prefill links.`)
