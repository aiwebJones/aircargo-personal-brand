import assert from 'node:assert/strict'
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = path.resolve(process.argv[2] || path.join(repoRoot, 'dist'))
const outputRoot = path.join(repoRoot, 'output/verify/browser')
const port = 4397
const baseUrl = `http://127.0.0.1:${port}`
const routes = ['jnb', 'fbm', 'lun', 'lbv', 'abj']
const prefillTopics = [...routes, 'jnb-foc']
const viewports = [
  { width: 1440, height: 900 },
  { width: 390, height: 844 },
  { width: 320, height: 720 },
]
const localRequests = []
const requestMethods = new Set(['GET', 'HEAD'])
const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
}

fs.mkdirSync(path.join(outputRoot, 'screenshots'), { recursive: true })

const server = http.createServer((request, response) => {
  const url = new URL(request.url || '/', baseUrl)
  localRequests.push({ method: request.method || '', path: url.pathname })
  if (!requestMethods.has(request.method || '')) {
    response.writeHead(405, { Allow: 'GET, HEAD' }).end()
    return
  }

  let relativePath
  try {
    relativePath = decodeURIComponent(url.pathname).replace(/^\/+/, '')
  } catch {
    response.writeHead(400).end()
    return
  }

  const root = path.resolve(distRoot)
  let target = path.resolve(root, relativePath)
  if (target !== root && !target.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403).end()
    return
  }
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, 'index.html')
  if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
    response.writeHead(404).end('Not found')
    return
  }

  response.writeHead(200, {
    'Content-Type': contentTypes[path.extname(target).toLowerCase()] || 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
  })
  if (request.method === 'HEAD') response.end()
  else fs.createReadStream(target).pipe(response)
})

const require = createRequire(import.meta.url)
const { chromium } = require('playwright')

function trackPage(page, postRequests, externalRequests) {
  page.on('request', (request) => {
    const url = request.url()
    if (request.method().toUpperCase() === 'POST') postRequests.push(url)
    if (/^https?:/i.test(url) && new URL(url).origin !== baseUrl) externalRequests.push(url)
  })
}

async function measureLayout(page, label) {
  const layout = await page.evaluate(() => ({
    width: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
  }))
  assert.ok(layout.documentWidth <= layout.width && layout.bodyWidth <= layout.width,
    `${label}: horizontal overflow (${layout.documentWidth}/${layout.bodyWidth} at ${layout.width}px)`)
  return layout
}

async function assertPrefill(page, topic) {
  await page.waitForFunction(() => {
    const agentDestination = document.querySelector('[data-testid="quote-agent-destination"]')
    const formDestination = document.querySelector('form input[name="destination"]')
    return Boolean(agentDestination?.value && formDestination?.value)
  }, null, { timeout: 15000 })

  const state = await page.evaluate(() => {
    const agentCargo = document.querySelector('[data-testid="quote-agent-cargo-type"]')
    const form = document.querySelector('form')
    const formCargo = form?.querySelector('select[name="cargoType"]')
    return {
      agent: {
        origin: document.querySelector('[data-testid="quote-agent-origin"]')?.value || '',
        destination: document.querySelector('[data-testid="quote-agent-destination"]')?.value || '',
        cargoType: agentCargo?.value || '',
        cargoTypeLabel: agentCargo?.selectedOptions[0]?.textContent?.trim() || '',
        dimensions: document.querySelector('[data-testid="quote-agent-dimensions"]')?.value || '',
        grossWeight: document.querySelector('[data-testid="quote-agent-gross-weight"]')?.value || '',
        notes: document.querySelector('[data-testid="quote-agent-notes"]')?.value || '',
      },
      quoteForm: {
        origin: form?.querySelector('input[name="origin"]')?.value || '',
        destination: form?.querySelector('input[name="destination"]')?.value || '',
        cargoType: formCargo?.value || '',
        cargoTypeLabel: formCargo?.selectedOptions[0]?.textContent?.trim() || '',
        dimensions: form?.querySelector('textarea[name="dimensions"]')?.value || '',
        grossWeight: form?.querySelector('input[name="grossWeight"]')?.value || '',
        notes: form?.querySelector('textarea[name="notes"]')?.value || '',
      },
      attribution: JSON.parse(sessionStorage.getItem('eascargo_attribution') || '{}'),
    }
  })

  const expectedDestination = topic === 'jnb-foc' ? 'JNB' : topic.toUpperCase()
  const expectedOrigin = topic === 'jnb-foc' ? '福州（FOC）/ 福建工厂周边' : ''
  for (const [formName, values] of Object.entries({ Agent: state.agent, QuoteForm: state.quoteForm })) {
    assert.equal(values.origin, expectedOrigin, `${topic} ${formName}: origin prefill mismatch`)
    assert.ok(values.destination.includes(expectedDestination), `${topic} ${formName}: destination prefill missing`)
    assert.equal(values.cargoType, '', `${topic} ${formName}: cargo type must remain unselected`)
    assert.equal(values.cargoTypeLabel, '请选择货物类型', `${topic} ${formName}: empty cargo type placeholder missing`)
    assert.equal(values.dimensions, '', `${topic} ${formName}: dimensions were prefilled without visitor input`)
    assert.equal(values.grossWeight, '', `${topic} ${formName}: weight was prefilled without visitor input`)
    assert.ok(values.notes, `${topic} ${formName}: route notes missing`)
    assert.doesNotMatch(values.notes, /\b(?:route context|please add|china origin|final south africa|final zambia|final gabon|copperbelt|lubumbashi|libreville|johannesburg)\b/i,
      `${topic} ${formName}: Chinese route note contains English prefill copy`)
  }
  assert.equal(state.agent.notes, state.quoteForm.notes, `${topic}: form notes disagree`)
  assert.equal(state.attribution.ctaSource, 'route', `${topic}: CTA source attribution was lost`)
  assert.equal(state.attribution.topic, topic, `${topic}: route topic attribution was lost`)
  return state
}

try {
  await new Promise((resolve, reject) => {
    server.once('error', reject)
    server.listen(port, '127.0.0.1', resolve)
  })

  const chromeBinary = process.env.CHROME_BIN || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  assert.ok(fs.existsSync(chromeBinary), `Chrome executable not found: ${chromeBinary}`)
  const browser = await chromium.launch({
    headless: true,
    executablePath: chromeBinary,
    args: ['--disable-background-networking', '--disable-sync', '--no-first-run', '--no-default-browser-check'],
  })
  const contexts = []
  const postRequests = []
  const externalRequests = []
  const pageResults = []
  const detailInteractions = []
  const routeBottomResults = []
  const rfqBottomResults = []
  const prefillResults = []

  try {
    for (const slug of routes) {
      const context = await browser.newContext()
      contexts.push(context)
      const page = await context.newPage()
      trackPage(page, postRequests, externalRequests)
      await page.goto(`${baseUrl}/africa-air-freight/${slug}/`, { waitUntil: 'domcontentloaded' })

      for (const viewport of viewports) {
        await page.setViewportSize(viewport)
        await page.evaluate(async () => {
          await document.fonts.ready
          document.documentElement.style.scrollBehavior = 'auto'
          document.body.style.scrollBehavior = 'auto'
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
          await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)))
        })
        const images = await page.evaluate(async () => {
          const nodes = [...document.images]
          nodes.forEach((image) => { image.loading = 'eager' })
          await Promise.race([
            Promise.all(nodes.map((image) => image.decode().catch(() => null))),
            new Promise((resolve) => setTimeout(resolve, 5000)),
          ])
          return nodes.map((image) => ({ src: image.getAttribute('src'), complete: image.complete, naturalWidth: image.naturalWidth }))
        })
        const state = await page.evaluate(() => ({
          width: window.innerWidth,
          scrollY: window.scrollY,
          documentWidth: document.documentElement.scrollWidth,
          bodyWidth: document.body.scrollWidth,
          h1Count: document.querySelectorAll('main h1').length,
          title: document.querySelector('main h1')?.innerText || '',
          brief: document.querySelector('#core-route-brief')?.innerText || '',
          brandLink: document.querySelector('a[aria-label="EASCARGO 首页"]')?.getAttribute('href') || '',
          brandText: document.querySelector('a[aria-label="EASCARGO 首页"]')?.innerText.trim() || '',
          englishSwitch: [...document.querySelectorAll('main a')].find((link) => link.innerText.trim() === '英文版')?.getAttribute('href') || '',
          detailsClosed: document.querySelector('[data-testid="route-supplement"]')?.open === false,
          routeCta: [...document.querySelectorAll('main a[href*="source=route"]')].map((link) => link.getAttribute('href')),
        }))
        assert.equal(state.width, viewport.width, `${slug}: browser did not apply ${viewport.width}px viewport`)
        assert.equal(state.scrollY, 0, `${slug}: viewport screenshot did not start at page top`)
        assert.equal(state.h1Count, 1, `${slug}: expected one visible H1`)
        assert.equal(state.title, ({
          jnb: '中国到约翰内斯堡（JNB）空运',
          fbm: '中国到卢本巴希（FBM）空运',
          lun: '中国到卢萨卡（LUN）空运',
          lbv: '中国到利伯维尔（LBV）空运',
          abj: '中国到阿比让（ABJ）空运',
        })[slug], `${slug}: H1 copy mismatch`)
        assert.ok(state.documentWidth <= viewport.width && state.bodyWidth <= viewport.width,
          `${slug}: horizontal overflow at ${viewport.width}px (${state.documentWidth}/${state.bodyWidth})`)
        assert.ok(state.brief && state.detailsClosed, `${slug}: route brief missing or supplement open by default`)
        assert.equal(state.brandLink, '/', `${slug}: home logo link missing`)
        assert.ok(state.brandText.includes('EASCARGO'), `${slug}: EASCARGO wordmark missing`)
        assert.ok(state.englishSwitch.startsWith('/en/'), `${slug}: English switch missing`)
        assert.ok(state.routeCta.some((href) => href.includes(`topic=${slug}`)), `${slug}: route topic CTA missing at ${viewport.width}px`)
        assert.ok(images.every((image) => image.complete && image.naturalWidth > 0), `${slug}: broken image at ${viewport.width}px: ${JSON.stringify(images)}`)

        const screenshot = path.join(outputRoot, 'screenshots', `${slug}-${viewport.width}.png`)
        await page.screenshot({ path: screenshot, fullPage: false })
        pageResults.push({ slug, ...viewport, ...state, imageCount: images.length, images, screenshot })

        if (viewport.width === 390) {
          const supplement = page.getByTestId('route-supplement')
          const summary = page.getByTestId('route-supplement-toggle')
          await summary.click()
          await page.waitForFunction(() => document.querySelector('[data-testid="route-supplement"]')?.open === true)
          const expandedLayout = await measureLayout(page, `${slug}: expanded route supplement`)
          assert.ok((await supplement.innerText()).includes('常见问题'), `${slug}: expanded supplement did not reveal FAQ content`)
          const expandedScreenshot = path.join(outputRoot, 'screenshots', `${slug}-details-open-390.png`)
          await page.screenshot({ path: expandedScreenshot, fullPage: false })
          await summary.click()
          await page.waitForFunction(() => document.querySelector('[data-testid="route-supplement"]')?.open === false)
          detailInteractions.push({ slug, expandedLayout, collapsed: true, screenshot: expandedScreenshot })
        }
      }

      await page.setViewportSize({ width: 390, height: 844 })
      const bottomSection = page.locator('main > section:last-of-type')
      await bottomSection.scrollIntoViewIfNeeded()
      const bottomState = await bottomSection.evaluate((section) => ({
        heading: section.querySelector('h2')?.innerText || '',
        links: [...section.querySelectorAll('a')].map((link) => link.getAttribute('href')),
      }))
      await measureLayout(page, `${slug}: route bottom`)
      assert.ok(bottomState.heading.includes('可比较的其他非洲项目货路线'), `${slug}: route bottom section missing`)
      assert.ok(bottomState.links.length >= 8, `${slug}: related-route links missing at page bottom`)
      const bottomScreenshot = path.join(outputRoot, 'screenshots', `${slug}-route-bottom-390.png`)
      await page.screenshot({ path: bottomScreenshot, fullPage: false })
      routeBottomResults.push({ slug, ...bottomState, screenshot: bottomScreenshot })

      await page.locator(`main a[href*="topic=${slug}"]`).first().click()
      await page.waitForURL((url) => url.pathname === '/tools/africa-project-cargo-rfq/' && url.searchParams.get('topic') === slug)
      const prefillState = await assertPrefill(page, slug)
      prefillResults.push({ topic: slug, ...prefillState, sessionFresh: true })

      await page.getByRole('button', { name: '生成 dry-run 执行计划' }).click()
      await page.locator('#quote-agent-plan').waitFor()
      const agentSubmit = page.getByRole('button', { name: '确认并提交一次询价' })
      assert.equal(await agentSubmit.isDisabled(), true, `${slug}: incomplete RFQ should not enable submission`)
      const legacyDetails = page.locator('details').filter({ hasText: '使用原来的详细询价表单' })
      await legacyDetails.locator('summary').click()
      await page.waitForFunction(() => [...document.querySelectorAll('details')]
        .some((details) => details.textContent.includes('使用原来的详细询价表单') && details.open))
      await page.setViewportSize({ width: 320, height: 720 })
      const detailedSubmit = page.locator('form button[type="submit"]')
      await detailedSubmit.scrollIntoViewIfNeeded()
      assert.ok(await detailedSubmit.isVisible(), `${slug}: detailed RFQ submit CTA missing at bottom`)
      const rfqBottomLayout = await measureLayout(page, `${slug}: RFQ bottom`)
      const rfqBottomScreenshot = path.join(outputRoot, 'screenshots', `${slug}-rfq-bottom-320.png`)
      await page.screenshot({ path: rfqBottomScreenshot, fullPage: false })
      rfqBottomResults.push({ slug, layout: rfqBottomLayout, submitVisible: true, submitText: await detailedSubmit.innerText(), screenshot: rfqBottomScreenshot })

      await context.close()
    }

    const jnbFocContext = await browser.newContext()
    contexts.push(jnbFocContext)
    const jnbFocPage = await jnbFocContext.newPage()
    trackPage(jnbFocPage, postRequests, externalRequests)
    await jnbFocPage.setViewportSize({ width: 390, height: 844 })
    await jnbFocPage.goto(`${baseUrl}/africa-air-freight/jnb/`, { waitUntil: 'domcontentloaded' })
    await jnbFocPage.getByTestId('route-supplement-toggle').click()
    await jnbFocPage.locator('a[href*="topic=jnb-foc"]').click()
    await jnbFocPage.waitForURL((url) => url.pathname === '/tools/africa-project-cargo-rfq/' && url.searchParams.get('topic') === 'jnb-foc')
    prefillResults.push({ topic: 'jnb-foc', ...(await assertPrefill(jnbFocPage, 'jnb-foc')), sessionFresh: true })

    const draftContext = await browser.newContext()
    contexts.push(draftContext)
    const draftPage = await draftContext.newPage()
    trackPage(draftPage, postRequests, externalRequests)
    const savedDraft = {
      revision: 7,
      project: {
        brief: '用户已编辑货物描述',
        name: '用户联系人',
        company: '用户公司',
        contact: '用户联系方式',
        email: 'user@example.test',
        origin: '用户已填写起运地',
        destination: '用户已填写目的地',
        cargoName: '用户已填写品名',
        cargoType: '超大件/项目货',
        pieces: '2',
        dimensions: '用户已填写尺寸',
        grossWeight: '用户已填写重量',
        readyDate: '',
        requiredArrival: '',
        notes: '用户已填写备注',
      },
    }
    await draftPage.addInitScript(({ key, draft }) => {
      window.sessionStorage.setItem(key, JSON.stringify(draft))
    }, { key: 'eascargo_quote_agent_draft_v1', draft: savedDraft })
    await draftPage.goto(`${baseUrl}/tools/africa-project-cargo-rfq/?source=route&topic=jnb`, { waitUntil: 'domcontentloaded' })
    await draftPage.waitForFunction(() =>
      document.querySelector('[data-testid="quote-agent-destination"]')?.value === '用户已填写目的地' &&
      document.querySelector('form input[name="destination"]')?.value.includes('JNB'), null, { timeout: 15000 })
    const draftState = await draftPage.evaluate(() => ({
      agent: {
        origin: document.querySelector('[data-testid="quote-agent-origin"]')?.value || '',
        destination: document.querySelector('[data-testid="quote-agent-destination"]')?.value || '',
        cargoType: document.querySelector('[data-testid="quote-agent-cargo-type"]')?.value || '',
        dimensions: document.querySelector('[data-testid="quote-agent-dimensions"]')?.value || '',
        grossWeight: document.querySelector('[data-testid="quote-agent-gross-weight"]')?.value || '',
        notes: document.querySelector('[data-testid="quote-agent-notes"]')?.value || '',
      },
      quoteForm: {
        destination: document.querySelector('form input[name="destination"]')?.value || '',
        cargoType: document.querySelector('form select[name="cargoType"]')?.value || '',
        dimensions: document.querySelector('form textarea[name="dimensions"]')?.value || '',
        grossWeight: document.querySelector('form input[name="grossWeight"]')?.value || '',
      },
      saved: JSON.parse(sessionStorage.getItem('eascargo_quote_agent_draft_v1') || '{}'),
    }))
    assert.deepEqual(draftState.agent, {
      origin: savedDraft.project.origin,
      destination: savedDraft.project.destination,
      cargoType: savedDraft.project.cargoType,
      dimensions: savedDraft.project.dimensions,
      grossWeight: savedDraft.project.grossWeight,
      notes: savedDraft.project.notes,
    }, 'Existing edited Agent draft was overwritten by route prefill')
    assert.ok(draftState.quoteForm.destination.includes('JNB'), 'Separate QuoteForm should still receive fresh route prefill')
    assert.equal(draftState.quoteForm.cargoType, '', 'Separate QuoteForm cargo type should remain unselected')
    assert.equal(draftState.quoteForm.dimensions, '', 'Separate QuoteForm dimensions should remain blank')
    assert.equal(draftState.quoteForm.grossWeight, '', 'Separate QuoteForm weight should remain blank')

    const englishContext = await browser.newContext()
    contexts.push(englishContext)
    const englishPage = await englishContext.newPage()
    trackPage(englishPage, postRequests, externalRequests)
    await englishPage.addInitScript(() => {
      window.__rfqTestCapture = null
      window.fetch = async (input, init = {}) => {
        window.__rfqTestCapture = { url: String(input), method: init.method || 'GET', body: String(init.body || '') }
        return new Response(JSON.stringify({ error: 'locally intercepted test request' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        })
      }
    })
    await englishPage.setViewportSize({ width: 390, height: 844 })
    await englishPage.goto(`${baseUrl}/?source=route&topic=jnb-foc`, { waitUntil: 'domcontentloaded' })
    await englishPage.waitForFunction(() => document.querySelector('input[name="origin"]')?.value.includes('FOC'), null, { timeout: 15000 })
    const initialEnglishHome = await englishPage.evaluate(() => ({
      origin: document.querySelector('input[name="origin"]')?.value || '',
      destination: document.querySelector('input[name="destination"]')?.value || '',
      cargoType: document.querySelector('select[name="cargoType"]')?.value || '',
      cargoTypeLabel: document.querySelector('select[name="cargoType"]')?.selectedOptions[0]?.textContent?.trim() || '',
    }))
    assert.ok(initialEnglishHome.destination.includes('JNB'), 'Home QuoteForm route destination prefill missing')
    assert.equal(initialEnglishHome.cargoType, '', 'Home QuoteForm should not infer cargo type')
    assert.equal(initialEnglishHome.cargoTypeLabel, '请选择货物类型', 'Home QuoteForm blank type placeholder missing')
    await englishPage.locator('input[name="destination"]').fill('User-entered destination')
    await englishPage.locator('select[name="cargoType"]').selectOption('普通工业货')
    await englishPage.getByRole('button', { name: 'Switch to English' }).click()
    await englishPage.waitForFunction(() => document.querySelector('[lang="en"]') &&
      document.querySelector('input[name="origin"]')?.value === '' &&
      document.querySelector('input[name="destination"]')?.value === 'User-entered destination', null, { timeout: 10000 })
    const englishHomeState = await englishPage.evaluate(() => ({
      origin: document.querySelector('input[name="origin"]')?.value || '',
      destination: document.querySelector('input[name="destination"]')?.value || '',
      cargoType: document.querySelector('select[name="cargoType"]')?.value || '',
      cargoTypeLabel: document.querySelector('select[name="cargoType"]')?.selectedOptions[0]?.textContent?.trim() || '',
      visibleText: document.querySelector('main')?.innerText || '',
    }))
    assert.equal(englishHomeState.origin, '', 'English home should clear untouched Chinese route origin')
    assert.equal(englishHomeState.destination, 'User-entered destination', 'English switch overwrote user-entered destination')
    assert.equal(englishHomeState.cargoType, '普通工业货', 'English switch overwrote user-selected cargo type')
    assert.equal(englishHomeState.cargoTypeLabel, 'General', 'English cargo type option did not render in English')
    assert.doesNotMatch(englishHomeState.visibleText, /福州（FOC）|JNB 约翰内斯堡/, 'English home still displays Chinese route prefill')
    const englishScreenshot = path.join(outputRoot, 'screenshots', 'home-english-prefill.png')
    await englishPage.screenshot({ path: englishScreenshot, fullPage: false })

    await englishPage.locator('input[name="origin"]').fill('Shanghai')
    await englishPage.locator('input[name="grossWeight"]').fill('500')
    await englishPage.getByRole('button', { name: 'Get a quote' }).click()
    await englishPage.locator('input[name="contact"]').fill('qa@example.test')
    await englishPage.locator('input[name="cargoName"]').fill('Test machinery')
    await englishPage.getByRole('button', { name: 'Send quote request' }).click()
    await englishPage.waitForFunction(() => Boolean(window.__rfqTestCapture), null, { timeout: 10000 })
    const mockedPayload = await englishPage.evaluate(() => JSON.parse(window.__rfqTestCapture.body))
    assert.equal(mockedPayload.origin, 'Shanghai', 'English test payload lost user-entered origin')
    assert.equal(mockedPayload.destination, 'User-entered destination', 'English test payload lost user-entered destination')
    assert.equal(mockedPayload.cargoType, '普通工业货', 'English test payload lost user-selected cargo type')
    assert.equal(mockedPayload.notes, '', 'Chinese auto-prefill notes would leak into the English form')

    assert.deepEqual(postRequests, [], 'Unexpected POST request; no RFQ form submission is permitted during verification')
    assert.deepEqual(externalRequests, [], 'Unexpected external HTTP request during the local preview')
    const methods = [...new Set(localRequests.map((request) => request.method))]
    assert.ok(localRequests.every((request) => requestMethods.has(request.method)), `Unexpected non-read local request: ${JSON.stringify(localRequests.filter((request) => !requestMethods.has(request.method)))}`)
    const result = {
      browser: { engine: 'Google Chrome headless', profileUsed: false },
      viewports: viewports.map((viewport) => viewport.width),
      pages: pageResults,
      detailInteractions,
      routeBottom: routeBottomResults,
      rfqBottom: rfqBottomResults,
      prefill: prefillResults,
      editedDraft: draftState,
      englishHome: { initial: initialEnglishHome, final: { ...englishHomeState, screenshot: englishScreenshot }, mockedPayload },
      postRequests,
      externalRequests,
      localMethods: methods,
      localRequestCount: localRequests.length,
      profileUsed: false,
    }
    fs.writeFileSync(path.join(outputRoot, 'browser-results.json'), JSON.stringify(result, null, 2))
    console.log(`PASS: ${pageResults.length} route screenshots; ${detailInteractions.length} open/close checks; ${routeBottomResults.length} route bottoms; ${rfqBottomResults.length} RFQ bottoms; ${prefillResults.length} fresh-session Agent + QuoteForm prefills; edited-draft and English-home checks; 0 network POST/external HTTP requests.`)
  } finally {
    await Promise.all(contexts.map((context) => context.close().catch(() => {})))
    await browser.close()
  }
} finally {
  await new Promise((resolve) => server.close(resolve))
}
