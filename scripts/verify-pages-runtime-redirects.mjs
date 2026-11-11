import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const fixtureDir = path.resolve(process.argv[2] || path.join(repoRoot, 'output', 'verify', 'pages-fixture'))
const baseUrl = process.argv[3] || 'http://127.0.0.1:4191'
const sentinel = 'STALE_LEGACY_ASSET_SENTINEL'
const cases = [
  {
    slug: 'egypt-cai-nafeza-aci-cargox-air-freight-clearance',
    target: '/insights/egypt-cai-nafeza-aci-cargox-goeic-air-freight-clearance/',
  },
  {
    slug: 'nigeria-los-bodogwu-form-m-paar-air-freight-clearance',
    target: '/insights/nigeria-los-soncap-formm-paar-air-freight/',
  },
]

for (const { slug, target } of cases) {
  const sentinelPath = path.join(fixtureDir, 'insights', slug, 'index.html')
  assert.ok(fs.readFileSync(sentinelPath, 'utf8').includes(sentinel), `Missing stale asset fixture: ${slug}`)

  for (const suffix of ['', '/']) {
    const sourcePath = `/insights/${slug}${suffix}`
    const response = await fetch(`${baseUrl}${sourcePath}?source=runtime-verify&topic=route`, { redirect: 'manual' })
    assert.equal(response.status, 301, `Expected single 301 for ${sourcePath}, got ${response.status}`)
    const locationValue = response.headers.get('location')
    assert.ok(locationValue, `Location header missing for ${sourcePath}`)
    const location = new URL(locationValue)
    assert.equal(location.protocol, 'https:', `HTTPS target mismatch for ${sourcePath}`)
    assert.equal(location.hostname, 'www.eascargo.com', `Canonical host mismatch for ${sourcePath}`)
    assert.equal(location.pathname, target, `Canonical path mismatch for ${sourcePath}`)
    assert.equal(location.search, '', `Unexpected query string on legacy redirect for ${sourcePath}`)
    assert.ok(!(await response.text()).includes(sentinel), `Stale static asset was returned for ${sourcePath}`)
  }

  const targetResponse = await fetch(`${baseUrl}${target}`, { redirect: 'manual' })
  assert.equal(targetResponse.status, 200, `Canonical target did not resolve directly: ${target}`)
  const targetHtml = await targetResponse.text()
  assert.ok(targetHtml.includes(`rel="canonical" href="https://www.eascargo.com${target}"`), `Canonical metadata missing at ${target}`)
  assert.ok(!targetHtml.includes(sentinel), `Stale sentinel leaked into canonical target: ${target}`)
}

console.log(`PASS: ${cases.length * 2} local Advanced Mode requests returned one 301 despite stale assets; both targets returned direct 200.`)
