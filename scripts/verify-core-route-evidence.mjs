import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = path.resolve(process.argv[2] || path.join(repoRoot, 'dist'))
const baselineRoot = path.resolve(process.argv[3] || path.join(repoRoot, 'dist'))
const coreRoutes = ['jnb', 'fbm', 'lun', 'lbv', 'abj']
const expectedModifiedDate = '2026-11-12'
const expectedCoreH1 = {
  jnb: '中国到约翰内斯堡（JNB）空运',
  fbm: '中国到卢本巴希（FBM）空运',
  lun: '中国到卢萨卡（LUN）空运',
  lbv: '中国到利伯维尔（LBV）空运',
  abj: '中国到阿比让（ABJ）空运',
}

function readPage(root, route) {
  const file = path.join(root, route, 'index.html')
  assert.ok(fs.existsSync(file), `Missing exported page: ${route}`)
  return fs.readFileSync(file, 'utf8')
}

function mainText(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)
  const content = main ? main[1] : html
  return content
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

function jsonLd(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]))
}

function sitemapUrls(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])
}

function sitemapEntry(xml, url) {
  const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => match[1])
  const entry = entries.find((block) => block.includes(`<loc>${url}</loc>`))
  assert.ok(entry, `Missing sitemap entry: ${url}`)
  return entry
}

function headingCount(html, level) {
  return [...html.matchAll(new RegExp(`<h${level}\\b`, 'gi'))].length
}

const routeDecisionMarkers = {
  jnb: '比较FOC / XMN本地起运与全国口岸集运',
  fbm: '先确认目的地是FBM机场',
  lun: '按赞比亚最终城市或项目现场比较LUN与NLA',
  lbv: '公开的约8米LBV记录仅作路线评估参考',
  abj: '先确认进口商与清关代理资料状态',
}
const routeBriefMarkers = {
  jnb: ['实际货物所在地', 'JNB机场提货'],
  fbm: ['FBM卸货工具', '报价责任终点'],
  lun: ['是否已有偏好LUN或NLA', '交付范围'],
  lbv: ['装载方向', '卸货条件', '匿名路线评估', '经LGG/BRU', '不代表当前舱位、运价或交付承诺'],
  abj: ['进口商、清关代理及GUCE / FDI状态', '发票与装箱单资料'],
}
assert.equal(new Set(Object.values(routeDecisionMarkers)).size, coreRoutes.length, 'Core route decision markers should be distinct')

for (const slug of coreRoutes) {
  const url = `https://www.eascargo.com/africa-air-freight/${slug}/`
  const html = readPage(distRoot, `africa-air-freight/${slug}`)
  const text = mainText(html)
  assert.equal(headingCount(html, 1), 1, `${slug}: expected one H1`)
  const h1 = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/i)?.[0]
  assert.equal(mainText(`<main>${h1 || ''}</main>`), expectedCoreH1[slug], `${slug}: H1 should be one concise destination line`)
  assert.ok(html.includes('aria-label="EASCARGO 首页"'), `${slug}: home-linked EASCARGO logo missing`)
  assert.match(html, /href="\/en\/[^\"]+"[^>]*>\s*英文版\s*<\/a>/, `${slug}: English-switch label missing`)
  assert.ok(!h1?.includes('项目货空运'), `${slug}: duplicated project-cargo H1 suffix remains`)
  assert.ok(html.includes(`rel="canonical" href="${url}"`), `${slug}: canonical mismatch`)
  const robotsMeta = [...html.matchAll(/<meta\b[^>]*>/gi)].map((match) => match[0]).find((tag) => /\bname="robots"/i.test(tag))
  assert.ok(!robotsMeta || !/\bcontent="[^"]*noindex/i.test(robotsMeta), `${slug}: unexpected noindex`)

  const schemas = jsonLd(html)
  const service = schemas.find((schema) => schema['@type'] === 'Service' && schema.url === url)
  assert.ok(service, `${slug}: Service JSON-LD missing`)
  assert.equal(service.url, url, `${slug}: Service JSON-LD URL mismatch`)
  assert.equal(service.mainEntityOfPage?.['@id'], url, `${slug}: WebPage JSON-LD URL mismatch`)
  assert.equal(service.mainEntityOfPage?.dateModified, expectedModifiedDate, `${slug}: JSON-LD dateModified mismatch`)
  assert.ok(text.includes(slug.toUpperCase()), `${slug}: destination missing from visible copy`)

  const brief = html.match(/<section id="core-route-brief"[\s\S]*?<\/section>/)?.[0]
  assert.ok(brief, `${slug}: visible route brief missing`)
  assert.match(html, /<details\b(?![^>]*\bopen\b)/i, `${slug}: supplementary content should be closed by default`)
  assert.doesNotMatch(brief, /<img\b|case-[^"']+\.(?:jpg|png|webp)/i, `${slug}: new case image usage found in route brief`)
  for (const [, href] of brief.matchAll(/href="([^"]+)"/g)) {
    assert.ok(href.startsWith('/'), `${slug}: contextual link must stay on-site: ${href}`)
    const target = href.split(/[?#]/, 1)[0].replace(/^\/+/, '')
    assert.ok(fs.existsSync(path.join(distRoot, target, 'index.html')), `${slug}: contextual link target missing: ${href}`)
  }

  const primaryCta = `/tools/africa-project-cargo-rfq/?source=route&amp;topic=${slug}`
  assert.ok(html.includes(primaryCta), `${slug}: primary RFQ CTA is missing source/topic attribution`)

  const faqSchema = schemas.find((schema) => schema['@type'] === 'FAQPage')
  assert.ok(faqSchema?.mainEntity?.length, `${slug}: FAQ structured data missing`)
  for (const question of faqSchema.mainEntity) {
    assert.ok(text.includes(question.name), `${slug}: structured FAQ question is not present in the accessible page content`)
  }

  const dateEntry = sitemapEntry(fs.readFileSync(path.join(repoRoot, 'public/sitemap.xml'), 'utf8'), url)
  assert.ok(dateEntry.includes(`<lastmod>${expectedModifiedDate}</lastmod>`), `${slug}: source sitemap date mismatch`)
  assert.ok(sitemapEntry(fs.readFileSync(path.join(distRoot, 'sitemap.xml'), 'utf8'), url).includes(`<lastmod>${expectedModifiedDate}</lastmod>`), `${slug}: exported sitemap date mismatch`)

  const briefText = mainText(brief)
  assert.ok(text.includes(routeDecisionMarkers[slug]), `${slug}: route-specific hero decision marker missing`)
  assert.ok(!briefText.includes(routeDecisionMarkers[slug]), `${slug}: route decision is duplicated in the inquiry brief`)
  for (const marker of routeBriefMarkers[slug]) assert.ok(briefText.includes(marker), `${slug}: route-specific inquiry field missing: ${marker}`)

  if (slug === 'lbv') {
    assert.ok(brief.includes('/cases/#lbv-8m-via-europe'), 'LBV route assessment record link missing')
    assert.ok(briefText.includes('不代表当前舱位、运价或交付承诺'), 'LBV case note should state current operational limits')
    assert.ok(!briefText.includes('不作为本票已完成证明'), 'LBV case note should not use internal audit phrasing')
  } else {
    assert.ok(!html.includes('/cases/#lbv-8m-via-europe'), `${slug}: LBV-specific record linked from another destination`)
    assert.ok(!/16,?730\s*kg|98\.8\s*t|heavy-cargo-16730kg|b777f-98/i.test(text), `${slug}: unrelated generic loading facts were attached to this route`)
  }
}

const casesUrl = 'https://www.eascargo.com/cases/'
const casesHtml = readPage(distRoot, 'cases')
const casesText = mainText(casesHtml)
const casesSchema = jsonLd(casesHtml).find((schema) => schema['@type'] === 'CollectionPage')
assert.equal(casesSchema?.dateModified, expectedModifiedDate, 'Cases CollectionPage dateModified mismatch')
assert.ok(casesText.includes('匿名路线评估记录'), 'Cases summary should identify anonymous route assessments')
assert.ok(casesText.includes('路线难点与评估动作，不声称交付完成'), 'Cases summary should avoid an implied completed-delivery claim')
assert.ok(!casesText.includes('已完成非洲项目'), 'Cases page still describes LBV as a completed Africa project')
const baselineCasesHtml = readPage(baselineRoot, 'cases')
const articleIds = (html) => [...html.matchAll(/<article\b[^>]*\bid="([^"]+)"/gi)].map((match) => match[1])
const imageSources = (html) => [...html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/gi)].map((match) => match[1])
assert.deepEqual(articleIds(casesHtml), articleIds(baselineCasesHtml), 'Cases record structure changed')
assert.deepEqual(imageSources(casesHtml), imageSources(baselineCasesHtml), 'Cases photos changed')
assert.ok(casesText.includes('16,730 kg') && casesText.includes('98.8T'), 'Historical loading records were removed from Cases')

const sourceRecords = fs.readFileSync(path.join(repoRoot, 'lib/public-case-records.ts'), 'utf8')
assert.match(sourceRecords, /id: 'lbv-8m-via-europe',[\s\S]*?statusZh: '路线评估记录',[\s\S]*?statusEn: 'Route assessment record'/, 'LBV public record status is not synchronized in Chinese and English')

const sourceSitemap = fs.readFileSync(path.join(repoRoot, 'public/sitemap.xml'), 'utf8')
const exportedSitemap = fs.readFileSync(path.join(distRoot, 'sitemap.xml'), 'utf8')
for (const [label, xml] of [['source', sourceSitemap], ['exported', exportedSitemap]]) {
  const urls = sitemapUrls(xml)
  assert.equal(urls.length, 130, `${label} sitemap should retain 130 URLs`)
  assert.equal(new Set(urls).size, 130, `${label} sitemap has duplicate URLs`)
}
assert.ok(sitemapEntry(sourceSitemap, casesUrl).includes(`<lastmod>${expectedModifiedDate}</lastmod>`), 'Source cases sitemap date mismatch')
assert.ok(sitemapEntry(exportedSitemap, casesUrl).includes(`<lastmod>${expectedModifiedDate}</lastmod>`), 'Exported cases sitemap date mismatch')
assert.ok(sitemapEntry(sourceSitemap, 'https://www.eascargo.com/en/africa-air-freight/jnb/').includes('<lastmod>2026-09-21</lastmod>'), 'English JNB sitemap behavior changed')

const currentRouteRoot = path.join(distRoot, 'africa-air-freight')
const baselineRouteRoot = path.join(baselineRoot, 'africa-air-freight')
const routeDirs = (root) => fs.readdirSync(root).filter((slug) => fs.existsSync(path.join(root, slug, 'index.html')))
const currentRoutes = routeDirs(currentRouteRoot)
const baselineRoutes = routeDirs(baselineRouteRoot)
const currentOtherRoutes = currentRoutes.filter((slug) => !coreRoutes.includes(slug))
const baselineOtherRoutes = baselineRoutes.filter((slug) => !coreRoutes.includes(slug))
assert.equal(currentOtherRoutes.length, 20, 'Expected 20 non-core route pages in the export')
assert.deepEqual([...currentOtherRoutes].sort(), [...baselineOtherRoutes].sort(), 'Non-core route set changed')
for (const slug of currentOtherRoutes) {
  assert.equal(
    mainText(readPage(distRoot, `africa-air-freight/${slug}`)),
    mainText(readPage(baselineRoot, `africa-air-freight/${slug}`)),
    `${slug}: visible page content changed outside the five-page scope`,
  )
}

const englishJnb = readPage(distRoot, 'en/africa-air-freight/jnb')
assert.ok(englishJnb.includes('https://www.eascargo.com/en/africa-air-freight/jnb/'), 'English JNB page was not exported')

console.log(`PASS: five route briefs, concise H1s and logo links; LBV boundary; Cases copy/date updated with historical records/photos retained; five canonical/schema/date/CTA checks; 130 sitemap URLs; English JNB preserved; ${currentOtherRoutes.length} non-core route pages match baseline visible content.`)
