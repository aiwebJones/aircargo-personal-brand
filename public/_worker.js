const CANONICAL_HOST = 'www.eascargo.com'
const PREVIEW_HOST = 'aircargo-personal-brand.pages.dev'
const APEX_HOST = 'eascargo.com'
const LEGACY_REDIRECTS = new Map([
  ['/about/', '/'],
  ['/insights/africa-oil-gas-equipment-air-freight/', '/insights/nigeria-phc-oil-gas-spares-soncap-nsw-air-freight-clearance/'],
  ['/insights/africa-project-cargo-air-freight-rfq-checklist/', '/insights/oversized-air-freight-quote-checklist/'],
  ['/en/africa-mining-spares-air-freight/', '/en/africa-oversized-air-freight/'],
])

function legacyRedirect(request) {
  const url = new URL(request.url)
  const lookupPath = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`
  const targetPath = LEGACY_REDIRECTS.get(lookupPath)

  if (!targetPath) return null

  url.protocol = 'https:'
  url.hostname = CANONICAL_HOST
  url.pathname = targetPath
  url.search = ''
  return Response.redirect(url.toString(), 301)
}

function canonicalRedirect(request) {
  const url = new URL(request.url)

  if (url.hostname === APEX_HOST || url.hostname === PREVIEW_HOST) {
    url.protocol = 'https:'
    url.hostname = CANONICAL_HOST
    return Response.redirect(url.toString(), 301)
  }

  return null
}

function assetRequest(request) {
  const url = new URL(request.url)

  if (url.pathname === '/favicon.ico') {
    url.pathname = '/favicon.svg'
    return new Request(url.toString(), request)
  }

  return request
}

export default {
  async fetch(request, env) {
    const legacy = legacyRedirect(request)
    if (legacy) return legacy

    const redirect = canonicalRedirect(request)
    if (redirect) return redirect

    return env.ASSETS.fetch(assetRequest(request))
  },
}
