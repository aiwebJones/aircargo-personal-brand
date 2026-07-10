const CANONICAL_HOST = 'www.eascargo.com'
const PREVIEW_HOST = 'aircargo-personal-brand.pages.dev'
const APEX_HOST = 'eascargo.com'

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
    const redirect = canonicalRedirect(request)
    if (redirect) return redirect

    return env.ASSETS.fetch(assetRequest(request))
  },
}
