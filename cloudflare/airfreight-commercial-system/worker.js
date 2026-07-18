const PRIMARY_SITE = "https://www.eascargo.com";
const CONTACT_EMAIL = "globegsa@gmail.com";
const WECHAT_ID = "jnb931";
const LAST_MODIFIED = "2026-07-11";
const CARGO_IMAGE = `${PRIMARY_SITE}/case-17t-1.jpg`;

const BASE_HEADERS = {
  "cache-control": "public, max-age=300, s-maxage=3600",
  "referrer-policy": "strict-origin-when-cross-origin",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "permissions-policy": "camera=(), microphone=(), geolocation=()",
};

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "img-src 'self' https://www.eascargo.com data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
  "connect-src 'self' https://cloudflareinsights.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
].join("; ");

const CSS = `
:root {
  --ink: #17202a;
  --muted: #586474;
  --line: #d8dee7;
  --soft: #f4f6f8;
  --paper: #ffffff;
  --green: #0b6b57;
  --green-soft: #e8f5f0;
  --amber: #a86106;
  --amber-soft: #fff4df;
  --red: #a23131;
  --red-soft: #fff0f0;
  --blue: #155e8a;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--ink);
  background: var(--paper);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  line-height: 1.55;
}
a { color: inherit; }
button, input, select, textarea { font: inherit; }
button, input, select, textarea { letter-spacing: 0; }
.skip-link {
  position: absolute;
  left: 12px;
  top: -60px;
  z-index: 100;
  padding: 10px 12px;
  background: var(--ink);
  color: white;
}
.skip-link:focus { top: 12px; }
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.96);
  backdrop-filter: blur(12px);
}
.nav-wrap {
  width: min(1160px, calc(100% - 32px));
  min-height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand {
  display: flex;
  align-items: baseline;
  gap: 8px;
  text-decoration: none;
  white-space: nowrap;
}
.brand strong { font-size: 18px; }
.brand span { color: var(--muted); font-size: 12px; }
nav { display: flex; align-items: center; gap: 18px; }
nav a { color: var(--muted); font-size: 14px; text-decoration: none; }
nav a:hover, nav a:focus-visible { color: var(--ink); }
.nav-command {
  padding: 8px 11px;
  border: 1px solid var(--line);
  border-radius: 6px;
  color: var(--ink);
  font-weight: 700;
}
.intro-band {
  border-bottom: 1px solid var(--line);
  background: var(--soft);
}
.intro-grid {
  width: min(1160px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
  min-height: 280px;
}
.intro-copy { padding: 42px 42px 42px 0; align-self: center; }
.eyebrow {
  margin: 0 0 10px;
  color: var(--green);
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
}
h1, h2, h3, p { letter-spacing: 0; }
h1 { margin: 0; max-width: 760px; font-size: 34px; line-height: 1.16; }
h2 { margin: 0; font-size: 25px; line-height: 1.24; }
h3 { margin: 0; font-size: 17px; }
.lead { max-width: 760px; margin: 14px 0 0; color: var(--muted); font-size: 17px; }
.proof-image { min-height: 280px; overflow: hidden; background: #d9e1e8; }
.proof-image img { width: 100%; height: 100%; min-height: 280px; display: block; object-fit: cover; }
.workspace {
  width: min(1160px, calc(100% - 32px));
  margin: 0 auto;
  padding: 38px 0 48px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(340px, 0.82fr);
  gap: 28px;
  align-items: start;
}
.tool-section, .result-section {
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--paper);
}
.section-head { padding: 22px 24px; border-bottom: 1px solid var(--line); }
.section-head p { margin: 6px 0 0; color: var(--muted); font-size: 14px; }
.form-grid {
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
.field { display: grid; gap: 7px; }
.field-wide { grid-column: 1 / -1; }
label { font-size: 13px; font-weight: 750; }
input, select {
  width: 100%;
  min-height: 44px;
  padding: 9px 11px;
  border: 1px solid #bfc8d4;
  border-radius: 5px;
  background: white;
  color: var(--ink);
}
input:focus, select:focus {
  outline: 3px solid rgba(21, 94, 138, 0.16);
  border-color: var(--blue);
}
.field-note { margin: 0; color: var(--muted); font-size: 12px; }
.dimension-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.command {
  min-height: 45px;
  padding: 10px 16px;
  border: 1px solid var(--green);
  border-radius: 6px;
  background: var(--green);
  color: white;
  cursor: pointer;
  font-weight: 800;
}
.command:hover, .command:focus-visible { background: #075746; }
.result-body {
  min-height: 355px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 22px;
}
.status {
  display: inline-flex;
  width: fit-content;
  padding: 5px 8px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 850;
}
.status-neutral { background: var(--soft); color: var(--muted); }
.status-low { background: var(--green-soft); color: var(--green); }
.status-medium { background: var(--amber-soft); color: var(--amber); }
.status-high { background: var(--red-soft); color: var(--red); }
.result-title { margin: 14px 0 6px; font-size: 22px; }
.result-summary { margin: 0; color: var(--muted); }
.result-list { margin: 18px 0 0; padding-left: 20px; }
.result-list li { margin: 8px 0; }
.result-actions { display: grid; gap: 10px; }
.text-link { color: var(--green); font-weight: 800; }
.secondary-command {
  display: inline-flex;
  min-height: 43px;
  padding: 9px 14px;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--line);
  border-radius: 6px;
  text-decoration: none;
  font-weight: 800;
}
.secondary-command:hover, .secondary-command:focus-visible { border-color: var(--ink); }
.knowledge-band { border-top: 1px solid var(--line); background: var(--soft); }
.knowledge-inner { width: min(1160px, calc(100% - 32px)); margin: 0 auto; padding: 44px 0; }
.knowledge-grid { margin-top: 22px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; border-top: 1px solid var(--line); }
.knowledge-grid article { padding: 22px 22px 0 0; }
.knowledge-grid article + article { padding-left: 22px; border-left: 1px solid var(--line); }
.knowledge-grid p { margin: 8px 0 0; color: var(--muted); }
.route-links { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 20px; }
.route-links a { padding: 6px 9px; border: 1px solid var(--line); border-radius: 5px; background: white; text-decoration: none; font-size: 13px; font-weight: 750; }
.methodology { width: min(820px, calc(100% - 32px)); margin: 0 auto; padding: 48px 0 64px; }
.methodology section { padding: 26px 0; border-bottom: 1px solid var(--line); }
.methodology p, .methodology li { color: var(--muted); }
.site-footer { border-top: 1px solid var(--line); }
.footer-inner {
  width: min(1160px, calc(100% - 32px));
  min-height: 88px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  color: var(--muted);
  font-size: 13px;
}
.footer-links { display: flex; flex-wrap: wrap; gap: 16px; }
.footer-links a { color: var(--ink); font-weight: 700; }
.not-found { width: min(720px, calc(100% - 32px)); margin: 0 auto; padding: 90px 0; }
@media (max-width: 820px) {
  .nav-wrap { align-items: flex-start; padding: 13px 0; }
  nav { justify-content: flex-end; flex-wrap: wrap; gap: 10px 14px; }
  nav a:not(.nav-command) { display: none; }
  .intro-grid, .workspace { grid-template-columns: 1fr; }
  .intro-copy { padding: 34px 0; }
  .proof-image, .proof-image img { min-height: 210px; }
  .workspace { padding-top: 26px; }
  .knowledge-grid { grid-template-columns: 1fr; }
  .knowledge-grid article, .knowledge-grid article + article { padding: 20px 0; border-left: 0; border-bottom: 1px solid var(--line); }
}
@media (max-width: 560px) {
  .nav-wrap { width: min(100% - 24px, 1160px); }
  .brand { display: grid; gap: 0; }
  h1 { font-size: 29px; }
  .intro-grid, .workspace, .knowledge-inner, .footer-inner { width: min(100% - 24px, 1160px); }
  .form-grid { grid-template-columns: 1fr; padding: 18px; }
  .field-wide { grid-column: auto; }
  .dimension-grid { grid-template-columns: 1fr; }
  .result-body { min-height: 320px; padding: 18px; }
  .footer-inner { align-items: flex-start; flex-direction: column; justify-content: center; padding: 20px 0; }
}
`;

function response(request, body, options = {}) {
  const headers = new Headers(BASE_HEADERS);
  for (const [key, value] of Object.entries(options.headers || {})) {
    headers.set(key, value);
  }
  if (options.html) {
    headers.set("content-type", "text/html; charset=utf-8");
    headers.set("content-security-policy", CONTENT_SECURITY_POLICY);
  }
  if (options.noindex) {
    headers.set("x-robots-tag", "noindex, nofollow");
  }
  return new Response(request.method === "HEAD" ? null : body, {
    status: options.status || 200,
    headers,
  });
}

function permanentRedirect(location) {
  return new Response(null, {
    status: 301,
    headers: {
      location,
      "cache-control": "public, max-age=3600",
      "x-robots-tag": "noindex",
    },
  });
}

function canonicalHostRedirect(url, hostname) {
  return permanentRedirect(`https://${hostname}${url.pathname}${url.search}`);
}

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${PRIMARY_SITE}/#organization`,
    name: "EASCargo",
    url: `${PRIMARY_SITE}/`,
    email: CONTACT_EMAIL,
    description: "China-to-Africa oversized and project cargo air freight planning and execution.",
  };
}

function documentHead({ title, description, canonical, siteName, schema }) {
  return `
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <link rel="canonical" href="${canonical}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${siteName}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${CARGO_IMAGE}">
  <meta name="twitter:card" content="summary_large_image">
  <style>${CSS}</style>
  <script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}

function siteHeader(name, canonicalDomain) {
  const source = encodeURIComponent(canonicalDomain);
  return `
  <a class="skip-link" href="#tool">Skip to tool</a>
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="/" aria-label="${name} home">
        <strong>${name}</strong><span>by EASCargo</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="${PRIMARY_SITE}/en/africa-oversized-air-freight/?utm_source=${source}&utm_medium=referral&utm_campaign=domain_ecosystem">Oversized freight</a>
        <a href="${PRIMARY_SITE}/cases/?utm_source=${source}&utm_medium=referral&utm_campaign=domain_ecosystem">Cases</a>
        <a class="nav-command" href="${PRIMARY_SITE}/?utm_source=${source}&utm_medium=referral&utm_campaign=domain_ecosystem#contact">Contact EASCargo</a>
      </nav>
    </div>
  </header>`;
}

function siteFooter(name, canonicalDomain) {
  const source = encodeURIComponent(canonicalDomain);
  return `
  <footer class="site-footer">
    <div class="footer-inner">
      <span>${name} is provided by EASCargo · WeChat ${WECHAT_ID}</span>
      <div class="footer-links">
        <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
        <a href="${PRIMARY_SITE}/?utm_source=${source}&utm_medium=referral&utm_campaign=domain_ecosystem">EASCargo.com</a>
        <a href="/llms-full.txt">AI reference</a>
      </div>
    </div>
  </footer>`;
}

function aiCargoPage() {
  const canonical = "https://aicargotrack.com/";
  const title = "AWB Exception Triage for China-Africa Air Freight | AiCargoTrack by EASCargo";
  const description = "Check oversized cargo, transfer, documentation and destination risks before requesting a China-to-Africa air freight solution from EASCargo.";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": `${canonical}#website`,
        name: "AiCargoTrack by EASCargo",
        url: canonical,
        publisher: { "@id": `${PRIMARY_SITE}/#organization` },
      },
      {
        "@type": "WebApplication",
        "@id": `${canonical}#application`,
        name: "AiCargoTrack AWB Exception Triage",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: canonical,
        provider: { "@id": `${PRIMARY_SITE}/#organization` },
        description,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  };

  return `<!doctype html>
<html lang="zh-CN">
<head>${documentHead({ title, description, canonical, siteName: "AiCargoTrack", schema })}</head>
<body>
${siteHeader("AiCargoTrack", "aicargotrack.com")}
<main>
  <section class="intro-band">
    <div class="intro-grid">
      <div class="intro-copy">
        <p class="eyebrow">AWB exception triage · 空运异常预判</p>
        <h1>先判断超大件和中转风险，再决定怎么追这一票货。</h1>
        <p class="lead">输入起运港、目的港、单件尺寸、重量和当前卡点。工具给出初步风险清单，并把完整资料带入 EASCargo 中国至非洲项目货询价。</p>
      </div>
      <div class="proof-image">
        <img src="${CARGO_IMAGE}" width="900" height="600" alt="Oversized project cargo handled for air freight by EASCargo">
      </div>
    </div>
  </section>

  <div class="workspace" id="tool">
    <section class="tool-section" aria-labelledby="triage-heading">
      <div class="section-head">
        <h2 id="triage-heading">AWB risk input</h2>
        <p>这是异常预判，不是航司实时轨迹查询。输入仅在当前浏览器计算。</p>
      </div>
      <form class="form-grid" id="triage-form">
        <div class="field field-wide">
          <label for="awb">AWB number / 运单号（可选）</label>
          <input id="awb" name="awb" autocomplete="off" maxlength="24" placeholder="例如 999-12345678">
        </div>
        <div class="field">
          <label for="origin">Origin IATA / 起运港</label>
          <input id="origin" name="origin" required maxlength="3" pattern="[A-Za-z]{3}" placeholder="PVG">
        </div>
        <div class="field">
          <label for="destination">Destination IATA / 目的港</label>
          <input id="destination" name="destination" required maxlength="3" pattern="[A-Za-z]{3}" placeholder="FBM">
        </div>
        <div class="field field-wide">
          <label>Largest piece dimensions / 最大单件尺寸（cm）</label>
          <div class="dimension-grid">
            <input id="length" name="length" type="number" min="1" max="3000" step="0.1" required placeholder="长 L">
            <input id="width" name="width" type="number" min="1" max="1000" step="0.1" required placeholder="宽 W">
            <input id="height" name="height" type="number" min="1" max="1000" step="0.1" required placeholder="高 H">
          </div>
        </div>
        <div class="field">
          <label for="weight">Largest piece weight / 最大单件重量（kg）</label>
          <input id="weight" name="weight" type="number" min="1" max="100000" step="0.1" required placeholder="1200">
        </div>
        <div class="field">
          <label for="issue">Current issue / 当前卡点</label>
          <select id="issue" name="issue" required>
            <option value="unknown">尚未定位 / Unknown</option>
            <option value="space">舱位或板位 / Capacity</option>
            <option value="transfer">中转衔接 / Transfer</option>
            <option value="documents">清关文件 / Documents</option>
            <option value="delivery">目的港二程 / Last mile</option>
          </select>
        </div>
        <div class="field field-wide">
          <button class="command" type="submit">生成异常预判 / Run triage</button>
          <p class="field-note">结果用于询价准备，最终装载和路线可行性须由承运人与操作团队确认。</p>
        </div>
      </form>
    </section>

    <section class="result-section" aria-labelledby="result-heading">
      <div class="section-head">
        <h2 id="result-heading">Preliminary result</h2>
        <p>结果会列出下一步必须复核的事项。</p>
      </div>
      <div class="result-body" id="triage-result" aria-live="polite">
        <div>
          <span class="status status-neutral">Ready for input</span>
          <h3 class="result-title">填写左侧资料开始判断</h3>
          <p class="result-summary">超长、超高、超重、中转与非洲目的港二程会分别检查。</p>
        </div>
        <div class="result-actions">
          <a class="secondary-command" href="${PRIMARY_SITE}/en/africa-oversized-air-freight/?utm_source=aicargotrack.com&utm_medium=referral&utm_campaign=awb_triage">查看 EASCargo 超大件方案</a>
        </div>
      </div>
    </section>
  </div>

  <section class="knowledge-band">
    <div class="knowledge-inner">
      <h2>工具检查的三类风险</h2>
      <div class="knowledge-grid">
        <article><h3>Aircraft acceptance</h3><p>单件尺寸、重量、货舱门和板型是否匹配；超长货不能只看总重量。</p></article>
        <article><h3>Transfer continuity</h3><p>欧洲或非洲中转时，二程机型、板位与地面衔接必须一起确认。</p></article>
        <article><h3>Destination execution</h3><p>清关资料、收货人能力、机场操作和矿区或项目现场二程决定最终交付。</p></article>
      </div>
      <div class="route-links" aria-label="EASCargo route references">
        <a href="${PRIMARY_SITE}/africa-air-freight/fbm/?utm_source=aicargotrack.com&utm_medium=referral">FBM</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/lun/?utm_source=aicargotrack.com&utm_medium=referral">LUN</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/lbv/?utm_source=aicargotrack.com&utm_medium=referral">LBV</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/ebb/?utm_source=aicargotrack.com&utm_medium=referral">EBB</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/add/?utm_source=aicargotrack.com&utm_medium=referral">ADD</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/cky/?utm_source=aicargotrack.com&utm_medium=referral">CKY</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/jnb/?utm_source=aicargotrack.com&utm_medium=referral">JNB</a>
      </div>
    </div>
  </section>
</main>
${siteFooter("AiCargoTrack", "aicargotrack.com")}
<script>
(function () {
  var form = document.getElementById('triage-form');
  var result = document.getElementById('triage-result');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var origin = String(data.get('origin') || '').toUpperCase();
    var destination = String(data.get('destination') || '').toUpperCase();
    var awb = String(data.get('awb') || 'Not provided');
    var length = Number(data.get('length'));
    var width = Number(data.get('width'));
    var height = Number(data.get('height'));
    var weight = Number(data.get('weight'));
    var issue = String(data.get('issue'));
    var maxDimension = Math.max(length, width, height);
    var score = 0;
    var findings = [];

    if (maxDimension > 300) {
      score += 3;
      findings.push('最大边超过 300 cm：优先复核全货机货舱门、主舱板型与中转二程机型。');
    } else if (maxDimension > 200) {
      score += 2;
      findings.push('最大边超过 200 cm：需要航司按单件尺寸做装载确认。');
    } else {
      findings.push('尺寸未触发本工具的超长阈值，但仍需以承运人装载确认为准。');
    }
    if (height > 160) {
      score += 2;
      findings.push('单件高度超过 160 cm：客机腹舱可行性低，应检查货机或拆分方案。');
    }
    if (weight > 1000) {
      score += 2;
      findings.push('单件超过 1,000 kg：检查地面吊装、叉车能力、地板承重与重货附加费。');
    } else if (weight > 500) {
      score += 1;
      findings.push('单件超过 500 kg：确认起运、中转和目的站地面设备。');
    }
    if (issue === 'transfer') {
      score += 2;
      findings.push('当前卡点是中转：二程板位、机型与最短衔接时间必须同时锁定。');
    } else if (issue === 'documents') {
      score += 2;
      findings.push('当前卡点是文件：补齐 HS Code、用途、收货人清关能力和目的国许可。');
    } else if (issue === 'delivery') {
      score += 2;
      findings.push('当前卡点是目的港二程：先确认机场提货、吊装和项目现场接货条件。');
    } else if (issue === 'space') {
      score += 1;
      findings.push('当前卡点是舱位：不要只比较价格，应同时确认板位和可接受尺寸。');
    } else {
      findings.push('尚未定位卡点：先收齐照片、包装方式、HS Code、时限与收货人信息。');
    }

    var level = score >= 6 ? 'High review priority' : score >= 3 ? 'Medium review priority' : 'Standard review';
    var statusClass = score >= 6 ? 'status-high' : score >= 3 ? 'status-medium' : 'status-low';
    result.innerHTML = '<div><span class="status ' + statusClass + '">' + level + '</span><h3 class="result-title" id="dynamic-title"></h3><p class="result-summary">这是初步预判，不代表航司接货承诺。</p><ul class="result-list" id="dynamic-list"></ul></div><div class="result-actions"><a class="command" id="email-result" href="#">把完整资料发给 EASCargo</a><a class="secondary-command" href="https://www.eascargo.com/?utm_source=aicargotrack.com&utm_medium=referral&utm_campaign=awb_triage#contact">打开 EASCargo 询价入口</a></div>';
    document.getElementById('dynamic-title').textContent = origin + ' → ' + destination + ' 初步风险清单';
    var list = document.getElementById('dynamic-list');
    findings.forEach(function (finding) {
      var item = document.createElement('li');
      item.textContent = finding;
      list.appendChild(item);
    });
    var subject = 'AWB exception triage ' + origin + '-' + destination;
    var body = [
      'Source: aicargotrack.com',
      'AWB: ' + awb,
      'Route: ' + origin + ' to ' + destination,
      'Largest piece: ' + length + ' x ' + width + ' x ' + height + ' cm',
      'Largest piece weight: ' + weight + ' kg',
      'Current issue: ' + issue,
      'Preliminary priority: ' + level,
      '',
      'Please review aircraft, transfer, customs and destination feasibility.'
    ].join('\\n');
    document.getElementById('email-result').href = 'mailto:${CONTACT_EMAIL}?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
</script>
</body>
</html>`;
}

function skyRatePage() {
  const canonical = "https://skyrate.info/";
  const title = "Air Freight Chargeable Weight and Quote Readiness | SkyRate by EASCargo";
  const description = "Calculate preliminary chargeable weight and prepare a China-to-Africa oversized air freight quote request without publishing unverifiable live rates.";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "WebSite",
        "@id": `${canonical}#website`,
        name: "SkyRate by EASCargo",
        url: canonical,
        publisher: { "@id": `${PRIMARY_SITE}/#organization` },
      },
      {
        "@type": "WebApplication",
        "@id": `${canonical}#application`,
        name: "SkyRate Chargeable Weight Calculator",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: canonical,
        provider: { "@id": `${PRIMARY_SITE}/#organization` },
        description,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  };

  return `<!doctype html>
<html lang="zh-CN">
<head>${documentHead({ title, description, canonical, siteName: "SkyRate", schema })}</head>
<body>
${siteHeader("SkyRate", "skyrate.info")}
<main>
  <section class="intro-band">
    <div class="intro-grid">
      <div class="intro-copy">
        <p class="eyebrow">Quote readiness · 空运报价准备</p>
        <h1>先算计费重量，再确认超大件、板位和非洲目的港成本。</h1>
        <p class="lead">SkyRate 不发布无法核验的“实时低价”。这里计算基础计费重量，并整理 EASCargo 报价必须具备的尺寸、重量、路线与交付资料。</p>
      </div>
      <div class="proof-image">
        <img src="${CARGO_IMAGE}" width="900" height="600" alt="Oversized industrial cargo prepared for EASCargo air freight planning">
      </div>
    </div>
  </section>

  <div class="workspace" id="tool">
    <section class="tool-section" aria-labelledby="rate-heading">
      <div class="section-head">
        <h2 id="rate-heading">Chargeable weight input</h2>
        <p>按 6000 cm³/kg 体积系数做初算；具体航司、路线和货物可能采用不同规则。</p>
      </div>
      <form class="form-grid" id="rate-form">
        <div class="field field-wide">
          <label>Piece dimensions / 单件尺寸（cm）</label>
          <div class="dimension-grid">
            <input name="length" type="number" min="1" max="3000" step="0.1" required placeholder="长 L">
            <input name="width" type="number" min="1" max="1000" step="0.1" required placeholder="宽 W">
            <input name="height" type="number" min="1" max="1000" step="0.1" required placeholder="高 H">
          </div>
        </div>
        <div class="field">
          <label for="pieces">Pieces / 件数</label>
          <input id="pieces" name="pieces" type="number" min="1" max="10000" step="1" required value="1">
        </div>
        <div class="field">
          <label for="gross">Total gross weight / 总毛重（kg）</label>
          <input id="gross" name="gross" type="number" min="1" max="1000000" step="0.1" required placeholder="1800">
        </div>
        <div class="field">
          <label for="rate-origin">Origin / 起运港</label>
          <input id="rate-origin" name="origin" required maxlength="3" pattern="[A-Za-z]{3}" placeholder="PVG">
        </div>
        <div class="field">
          <label for="rate-destination">Africa destination / 非洲目的港</label>
          <select id="rate-destination" name="destination" required>
            <option value="jnb">JNB · Johannesburg</option>
            <option value="fbm">FBM · Lubumbashi</option>
            <option value="lun">LUN · Lusaka</option>
            <option value="lbv">LBV · Libreville</option>
            <option value="ebb">EBB · Entebbe</option>
            <option value="add">ADD · Addis Ababa</option>
            <option value="cky">CKY · Conakry</option>
            <option value="other">Other destination</option>
          </select>
        </div>
        <div class="field field-wide">
          <button class="command" type="submit">计算并生成询价资料 / Calculate</button>
          <p class="field-note">计算结果不是承运人报价；超长、超高、重货和项目二程费用需要单独确认。</p>
        </div>
      </form>
    </section>

    <section class="result-section" aria-labelledby="rate-result-heading">
      <div class="section-head">
        <h2 id="rate-result-heading">Calculation result</h2>
        <p>计费重量取毛重与体积重量中的较高值。</p>
      </div>
      <div class="result-body" id="rate-result" aria-live="polite">
        <div>
          <span class="status status-neutral">Ready for input</span>
          <h3 class="result-title">填写左侧尺寸和重量</h3>
          <p class="result-summary">结果会同时标记可能影响报价的超大件因素。</p>
        </div>
        <div class="result-actions">
          <a class="secondary-command" href="/methodology/">查看计算与报价方法</a>
        </div>
      </div>
    </section>
  </div>

  <section class="knowledge-band">
    <div class="knowledge-inner">
      <h2>完整报价不是“公斤价 × 重量”</h2>
      <div class="knowledge-grid">
        <article><h3>Air freight basis</h3><p>计费重量、起运港、目的港、时限和舱位构成基础运费。</p></article>
        <article><h3>Oversize handling</h3><p>板型、货舱门、吊装、重货与特殊地面操作会改变可行航班和成本。</p></article>
        <article><h3>Africa execution</h3><p>清关、机场操作、收货人条件与项目现场二程需要独立核价。</p></article>
      </div>
      <div class="route-links" aria-label="EASCargo route pages">
        <a href="${PRIMARY_SITE}/africa-air-freight/jnb/?utm_source=skyrate.info&utm_medium=referral">JNB route</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/fbm/?utm_source=skyrate.info&utm_medium=referral">FBM route</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/lun/?utm_source=skyrate.info&utm_medium=referral">LUN route</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/lbv/?utm_source=skyrate.info&utm_medium=referral">LBV route</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/ebb/?utm_source=skyrate.info&utm_medium=referral">EBB route</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/add/?utm_source=skyrate.info&utm_medium=referral">ADD route</a>
        <a href="${PRIMARY_SITE}/africa-air-freight/cky/?utm_source=skyrate.info&utm_medium=referral">CKY route</a>
      </div>
    </div>
  </section>
</main>
${siteFooter("SkyRate", "skyrate.info")}
<script>
(function () {
  var form = document.getElementById('rate-form');
  var result = document.getElementById('rate-result');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var length = Number(data.get('length'));
    var width = Number(data.get('width'));
    var height = Number(data.get('height'));
    var pieces = Number(data.get('pieces'));
    var gross = Number(data.get('gross'));
    var origin = String(data.get('origin') || '').toUpperCase();
    var destination = String(data.get('destination'));
    var volumetric = length * width * height * pieces / 6000;
    var chargeable = Math.max(gross, volumetric);
    var maxDimension = Math.max(length, width, height);
    var flags = [];
    if (maxDimension > 300) flags.push('最大边超过 300 cm，需要货机主舱和中转二程装载确认。');
    else if (maxDimension > 200) flags.push('最大边超过 200 cm，需要按单件尺寸确认板型与舱门。');
    if (height > 160) flags.push('高度超过 160 cm，客机腹舱可行性较低。');
    if (gross / pieces > 1000) flags.push('平均单件超过 1,000 kg，需要重货地面操作确认。');
    if (!flags.length) flags.push('未触发本工具的超大件阈值，仍需承运人最终确认。');
    var level = flags.length > 1 ? 'Manual quote review' : 'Quote-ready input';
    var statusClass = flags.length > 1 ? 'status-medium' : 'status-low';
    result.innerHTML = '<div><span class="status ' + statusClass + '">' + level + '</span><h3 class="result-title"><span id="chargeable-value"></span> kg preliminary chargeable weight</h3><p class="result-summary" id="weight-breakdown"></p><ul class="result-list" id="rate-flags"></ul></div><div class="result-actions"><a class="command" id="rate-email" href="#">把计算结果发给 EASCargo</a><a class="secondary-command" id="route-page" href="#">查看对应路线资料</a><a class="text-link" href="/methodology/">Calculation methodology</a></div>';
    document.getElementById('chargeable-value').textContent = chargeable.toFixed(1);
    document.getElementById('weight-breakdown').textContent = 'Gross ' + gross.toFixed(1) + ' kg · Volumetric ' + volumetric.toFixed(1) + ' kg · ' + pieces + ' piece(s)';
    var flagList = document.getElementById('rate-flags');
    flags.forEach(function (flag) {
      var item = document.createElement('li');
      item.textContent = flag;
      flagList.appendChild(item);
    });
    var routeUrl = destination === 'other' ? 'https://www.eascargo.com/africa-air-freight/' : 'https://www.eascargo.com/africa-air-freight/' + destination + '/';
    document.getElementById('route-page').href = routeUrl + '?utm_source=skyrate.info&utm_medium=referral&utm_campaign=quote_readiness';
    var subject = 'China-Africa air freight quote input ' + origin + '-' + destination.toUpperCase();
    var body = [
      'Source: skyrate.info',
      'Route: ' + origin + ' to ' + destination.toUpperCase(),
      'Piece dimensions: ' + length + ' x ' + width + ' x ' + height + ' cm',
      'Pieces: ' + pieces,
      'Total gross weight: ' + gross.toFixed(1) + ' kg',
      'Preliminary volumetric weight: ' + volumetric.toFixed(1) + ' kg',
      'Preliminary chargeable weight: ' + chargeable.toFixed(1) + ' kg',
      '',
      'Please confirm aircraft acceptance, routing, capacity and destination charges.'
    ].join('\\n');
    document.getElementById('rate-email').href = 'mailto:${CONTACT_EMAIL}?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
})();
</script>
</body>
</html>`;
}

function skyRateMethodologyPage() {
  const canonical = "https://skyrate.info/methodology/";
  const title = "Air Freight Quote Methodology | SkyRate by EASCargo";
  const description = "How SkyRate calculates preliminary volumetric weight and which aircraft, handling, customs and destination inputs EASCargo verifies before quoting.";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "Article",
        "@id": `${canonical}#article`,
        headline: "Air Freight Quote Methodology",
        description,
        dateModified: LAST_MODIFIED,
        mainEntityOfPage: canonical,
        author: { "@id": `${PRIMARY_SITE}/#organization` },
        publisher: { "@id": `${PRIMARY_SITE}/#organization` },
      },
    ],
  };
  return `<!doctype html>
<html lang="en">
<head>${documentHead({ title, description, canonical, siteName: "SkyRate", schema })}</head>
<body>
${siteHeader("SkyRate", "skyrate.info")}
<main class="methodology">
  <p class="eyebrow">Methodology · Updated ${LAST_MODIFIED}</p>
  <h1>How SkyRate prepares a China-Africa air freight quote</h1>
  <p class="lead">The calculator provides a preliminary chargeable-weight input. EASCargo confirms aircraft acceptance, routing, capacity and destination execution before issuing a commercial quotation.</p>
  <section>
    <h2>1. Preliminary volumetric weight</h2>
    <p>SkyRate uses length × width × height × pieces ÷ 6000, with dimensions in centimetres. Chargeable weight is the higher of gross and volumetric weight. A carrier may apply a different divisor or minimum charge.</p>
  </section>
  <section>
    <h2>2. Oversized-piece feasibility</h2>
    <p>Chargeable weight does not prove that cargo fits. The largest piece is checked against cargo-door dimensions, pallet or contour limits, floor loading and available loading equipment.</p>
  </section>
  <section>
    <h2>3. Route and transfer continuity</h2>
    <p>For Europe-to-Africa connections or multi-sector routings, every sector must accept the same piece. EASCargo separately confirms second-sector aircraft type, pallet position and transfer time.</p>
  </section>
  <section>
    <h2>4. Destination and project delivery</h2>
    <p>Customs documents, consignee capability, airport handling, lifting equipment and final delivery are outside a simple per-kilogram rate. These inputs are priced and scheduled separately.</p>
  </section>
  <section>
    <h2>Required quote evidence</h2>
    <ul>
      <li>Origin, destination and required delivery date</li>
      <li>Piece count, dimensions, gross weight and packing method</li>
      <li>Cargo photos, HS Code, commodity use and dangerous-goods status</li>
      <li>Consignee details, customs capability and final delivery location</li>
    </ul>
    <p><a class="text-link" href="/?utm_source=methodology&utm_medium=internal">Open the SkyRate calculator</a> or <a class="text-link" href="${PRIMARY_SITE}/?utm_source=skyrate.info&utm_medium=referral&utm_campaign=methodology#contact">request an EASCargo review</a>.</p>
  </section>
</main>
${siteFooter("SkyRate", "skyrate.info")}
</body>
</html>`;
}

function robots(domain) {
  return `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://${domain}/sitemap.xml
`;
}

function sitemap(domain, paths) {
  const entries = paths.map((path) => `  <url><loc>https://${domain}${path}</loc><lastmod>${LAST_MODIFIED}</lastmod></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

function llmsText(domain) {
  if (domain === "aicargotrack.com") {
    return `# AiCargoTrack by EASCargo

> Browser-based AWB exception triage for China-to-Africa oversized and project cargo air freight.

- Provider: EASCargo
- Primary company website: ${PRIMARY_SITE}/
- Tool: https://aicargotrack.com/
- Scope: dimensional risk, heavy-piece handling, transfer continuity, customs-document readiness and Africa destination delivery checks.
- Limitation: this is not live airline tracking and does not represent carrier acceptance.
- EASCargo service: ${PRIMARY_SITE}/en/africa-oversized-air-freight/
- EASCargo cases: ${PRIMARY_SITE}/cases/
- Contact: ${CONTACT_EMAIL}
- WeChat: ${WECHAT_ID}

Full reference: https://aicargotrack.com/llms-full.txt
`;
  }
  return `# SkyRate by EASCargo

> Chargeable-weight and quote-readiness tool for China-to-Africa air freight.

- Provider: EASCargo
- Primary company website: ${PRIMARY_SITE}/
- Calculator: https://skyrate.info/
- Methodology: https://skyrate.info/methodology/
- Scope: preliminary volumetric weight, gross-vs-volume comparison, oversize flags and quote evidence preparation.
- Limitation: SkyRate does not publish unverifiable live rates and does not represent a carrier quotation.
- EASCargo route directory: ${PRIMARY_SITE}/africa-air-freight/
- Contact: ${CONTACT_EMAIL}
- WeChat: ${WECHAT_ID}

Full reference: https://skyrate.info/llms-full.txt
`;
}

function llmsFullText(domain) {
  const common = `
## EASCargo company position

EASCargo focuses on China-to-Africa oversized, heavy, urgent and project cargo air freight. The primary commercial and entity source is ${PRIMARY_SITE}/. Commercial service pages, route pages, case evidence and contact details are maintained on EASCargo rather than duplicated across satellite domains.

Core destinations include JNB, FBM, LUN, LBV, EBB, ADD and CKY. Solutions may involve direct uplift, freighter capacity, Europe-Africa transfer planning, destination customs preparation and project-site final delivery.

Primary references:
- Oversized service: ${PRIMARY_SITE}/en/africa-oversized-air-freight/
- Route directory: ${PRIMARY_SITE}/africa-air-freight/
- Case library: ${PRIMARY_SITE}/cases/
- Full EASCargo AI reference: ${PRIMARY_SITE}/llms-full.txt

Contact:
- Email: ${CONTACT_EMAIL}
- WeChat: ${WECHAT_ID}
`;
  if (domain === "aicargotrack.com") {
    return `# AiCargoTrack full reference

AiCargoTrack is a free browser-based pre-check provided by EASCargo. It helps a shipper or freight professional organize AWB, route, largest-piece dimensions, largest-piece weight and the current operational blockage.

The tool evaluates whether manual review is needed for oversized dimensions, heavy-piece ground handling, transfer continuity, customs documents or Africa destination delivery. It does not query airline systems, promise capacity or replace carrier acceptance.
${common}`;
  }
  return `# SkyRate full reference

SkyRate is a free chargeable-weight and quote-readiness tool provided by EASCargo. It uses a preliminary volumetric formula of length × width × height × pieces ÷ 6000, with centimetres and kilograms. The higher of gross and volumetric weight is shown as preliminary chargeable weight.

The result is not a live freight rate. Aircraft acceptance, cargo-door limits, pallet position, floor loading, transfer sectors, fuel/security charges, special handling, customs and Africa final delivery are confirmed separately by EASCargo and the relevant service providers.
${common}`;
}

function favicon(letter, color) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="8" fill="${color}"/><path d="M13 45 27 16h10l14 29H40l-3-7H27l-3 7H13Zm17-15h5l-2.5-7-2.5 7Z" fill="white"/><text x="47" y="53" font-family="Arial,sans-serif" font-size="11" font-weight="700" fill="white">${letter}</text></svg>`;
}

function notFoundPage(domain, name) {
  const canonical = `https://${domain}/`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found | ${name}</title><meta name="robots" content="noindex, nofollow"><link rel="canonical" href="${canonical}"><style>${CSS}</style></head><body>${siteHeader(name, domain)}<main class="not-found"><p class="eyebrow">404</p><h1>Page not found</h1><p class="lead">Use the main tool or continue to the EASCargo service and case library.</p><p><a class="text-link" href="/">Open ${name}</a> · <a class="text-link" href="${PRIMARY_SITE}/">Open EASCargo</a></p></main>${siteFooter(name, domain)}</body></html>`;
}

async function handleRequest(request) {
  const url = new URL(request.url);
  const hostname = url.hostname.toLowerCase();
  const domain = hostname.replace(/^www\./, "");

  // EASCargo is owned by the Pages project. Explicit pass-through prevents this
  // legacy multi-domain route from replacing the primary site.
  if (domain === "eascargo.com") {
    return fetch(request);
  }

  if (domain === "mosterlive.com") {
    return permanentRedirect(`${PRIMARY_SITE}/cases/`);
  }

  if (domain === "zivlar.com") {
    return permanentRedirect(`${PRIMARY_SITE}/`);
  }

  if (domain !== "aicargotrack.com" && domain !== "skyrate.info") {
    return response(request, "Not found", {
      status: 404,
      noindex: true,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  if (url.protocol !== "https:") {
    return canonicalHostRedirect(url, domain);
  }

  if (hostname.startsWith("www.")) {
    return canonicalHostRedirect(url, domain);
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    return response(request, "Method not allowed", {
      status: 405,
      noindex: true,
      headers: {
        allow: "GET, HEAD",
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  if (url.pathname === "/robots.txt") {
    return response(request, robots(domain), {
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
    });
  }

  if (url.pathname === "/sitemap.xml") {
    const paths = domain === "skyrate.info" ? ["/", "/methodology/"] : ["/"];
    return response(request, sitemap(domain, paths), {
      headers: { "content-type": "application/xml; charset=utf-8", "cache-control": "public, max-age=3600" },
    });
  }

  if (url.pathname === "/llms.txt") {
    return response(request, llmsText(domain), {
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
    });
  }

  if (url.pathname === "/llms-full.txt") {
    return response(request, llmsFullText(domain), {
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" },
    });
  }

  if (url.pathname === "/favicon.svg" || url.pathname === "/favicon.ico") {
    const icon = domain === "skyrate.info" ? favicon("S", "#155e8a") : favicon("A", "#0b6b57");
    return response(request, icon, {
      headers: { "content-type": "image/svg+xml; charset=utf-8", "cache-control": "public, max-age=604800" },
    });
  }

  if (url.pathname === "/") {
    const page = domain === "skyrate.info" ? skyRatePage() : aiCargoPage();
    return response(request, page, { html: true });
  }

  if (domain === "skyrate.info" && url.pathname === "/methodology") {
    return permanentRedirect("https://skyrate.info/methodology/");
  }

  if (domain === "skyrate.info" && url.pathname === "/methodology/") {
    return response(request, skyRateMethodologyPage(), { html: true });
  }

  const name = domain === "skyrate.info" ? "SkyRate" : "AiCargoTrack";
  return response(request, notFoundPage(domain, name), { status: 404, html: true, noindex: true });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
