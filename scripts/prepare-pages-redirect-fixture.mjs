import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const verifyRoot = path.join(repoRoot, 'output', 'verify')
const sourceDir = path.resolve(process.argv[2] || path.join(verifyRoot, 'buildtree', 'dist'))
const fixtureDir = path.resolve(process.argv[3] || path.join(verifyRoot, 'pages-fixture'))
const legacySlugs = [
  'egypt-cai-nafeza-aci-cargox-air-freight-clearance',
  'nigeria-los-bodogwu-form-m-paar-air-freight-clearance',
]

assert.ok(sourceDir.startsWith(`${verifyRoot}${path.sep}`), 'Source must be inside output/verify')
assert.ok(fixtureDir.startsWith(`${verifyRoot}${path.sep}`), 'Fixture must be inside output/verify')
assert.ok(fs.statSync(sourceDir).isDirectory(), `Build output is missing: ${sourceDir}`)
assert.ok(!fs.existsSync(fixtureDir), `Refusing to overwrite existing fixture: ${fixtureDir}`)

fs.cpSync(sourceDir, fixtureDir, { recursive: true, errorOnExist: true, force: false })
for (const slug of legacySlugs) {
  const assetDir = path.join(fixtureDir, 'insights', slug)
  fs.mkdirSync(assetDir, { recursive: true })
  fs.writeFileSync(path.join(assetDir, 'index.html'), '<!doctype html><title>STALE_LEGACY_ASSET_SENTINEL</title><p>STALE_LEGACY_ASSET_SENTINEL</p>')
}

console.log(`Prepared Pages fixture with stale static HTML at ${legacySlugs.length} legacy URLs: ${fixtureDir}`)
