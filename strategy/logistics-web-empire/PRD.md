# Logistics Web Traffic Empire - Executable PRD

Generated: 2026-07-22
Owner: EASCargo / Jones
Business base: Shanghai-based international air freight forwarder with 15+ years experience in China export air freight, oversized cargo, project cargo, charter, Africa, Middle East, Europe/US lanes, and airline resources.

## 0. Strategic Decision

This is not a corporate website rebuild. The product is a public logistics operating system: **freight intelligence + calculators + route/cargo playbooks + RFQ conversion + AI agents**. The website should become a daily-use asset for importers, sourcing managers, project cargo buyers, and logistics teams.

The Karpathy-style business logic is simple: use software and AI to turn a service business into a compounding information machine. EASCargo already owns tacit freight knowledge; the web system converts that knowledge into indexed pages, calculators, lead forms, data loops, and automated refreshes.

## 1. Stage One - Global Research Summary

Full working table: `competitors-top100.csv`.

### 1.1 Competitor Set

- 25 global freight forwarders from Armstrong & Associates' 2026 top freight forwarder list and official site review.
- 25 logistics/3PL companies with strong supply chain, warehousing, integrated logistics, and regional authority.
- 25 airline cargo carriers with booking, tracking, schedule, product, charter, and surcharge tools.
- 25 supply-chain SaaS companies covering freight marketplaces, TMS, visibility, procurement, customs, and logistics operating systems.

### 1.2 Patterns That Matter

| Pattern | What top players do | What EASCargo should copy/adapt |
|---|---|---|
| Service taxonomy | DHL, K+N, DSV, Maersk split by mode, industry, route, and solution. | Use Air Freight / Project Cargo / Oversized / Charter / Customs / Routes / Tools. |
| Utility-first pages | DHL, UPS, FedEx, Emirates, Qatar, Lufthansa put track, quote, book, schedule, rate tools near the front. | Every high-intent page must route to a calculator, checklist, or RFQ builder. |
| Digital portal story | Flexport, Freightos, project44, CargoWise position logistics as software workflows. | Build EASCargo as freight expertise plus AI web tools, not just forwarding service. |
| Market intelligence | Freightos, Flexport, C.H. Robinson, project44 publish reports and data pages. | Weekly China export air freight intelligence should become linkable media. |
| Specialized cargo pages | Airline cargo sites rank through pharma, dangerous goods, perishables, charter, oversized product pages. | Own oversized, project, charter, Africa, Middle East, DG/battery cargo niches. |
| Conversion paths | Top sites use quote, book, track, account login, demo, contact expert. | For EASCargo: tool result -> prefilled RFQ -> WhatsApp/email -> lead scoring -> follow-up. |
| Architecture | Enterprise CMS + portal + APIs + structured page taxonomy. | Next.js static/ISR pages, Supabase content/lead DB, generated metadata/schema/sitemaps. |

### 1.3 Source Evidence

- Armstrong & Associates 2026 Top 25 Global Freight Forwarders: ranking based on 2025 gross logistics revenue/turnover and freight volumes. Source: https://www.3plogistics.com/3pl-market-info-resources/3pl-market-information/aas-top-25-global-freight-forwarders-list/
- DHL Global Forwarding site structure includes air, ocean, rail, road, customs, insurance, industrial projects, order management, myDHLi, Quote+Book, help center, market updates, and carbon tools. Source: https://www.dhl.com/ae-en/home/global-forwarding.html
- DHL Quote+Book emphasizes 24/7 instant air/ocean quotes and comparison by price, speed, and emissions. Source: https://www.dhl.com/us-en/home/global-forwarding/mydhli/discover-quote-and-book.html
- Similarweb reports dhl.com traffic is heavily direct, with organic search second and referrals third. Source: https://www.similarweb.com/website/dhl.com/
- Kuehne+Nagel positions Air/Sea/Road/Contract Logistics, myKN, and seaexplorer visibility around quote/book/control workflows. Sources: https://www.kuehne-nagel.com/us and https://www.kuehne-nagel.com/us/services/sea-freight/seaexplorer
- Flexport positions itself as an AI-powered logistics platform with visibility, routing, customs automation, order management, and instant quotes. Sources: https://www.flexport.com/ and https://www.flexport.com/products/flexport-platform/
- Freightos/WebCargo combines freight marketplace, forwarder/carrier tools, booking, data, and APIs. Source: https://www.freightos.com/
- Airline cargo sites such as Emirates SkyCargo, Qatar Airways Cargo, and Lufthansa Cargo center track/quote/book/schedule/e-services. Sources: https://www.skycargo.com/, https://qrcargo.com/, https://www.lufthansa-cargo.com/en/
- IATA validates air-cargo data categories around freight tonne-kilometers, capacity, carrier rankings, and airline-reported market statistics. Source: https://www.iata.org/en/services/data/market-data/world-air-transport-statistics/

## 2. Stage Two - Website Strategy

### 2.1 Master Architecture

Build one brand authority site and ten vertical SEO properties. The brand site captures trust and high-value RFQs. Vertical sites capture search intent and pass qualified users into the EASCargo lead system. Domain candidates must be checked at registrar before purchase.

1. **EASCargo Global** - `eascargo.com` - brand, authority, RFQ, proof, case studies.
2. **China Air Freight Hub** - `chinaairfreighthub.com` - China export air freight pages.
3. **Africa Air Cargo Desk** - `africaaircargo.com` or `chinaafricaairfreight.com` - Africa lane dominance.
4. **Middle East Air Cargo Desk** - `middleeastaircargo.com` - GCC and Middle East air freight.
5. **Project Cargo Air** - `projectcargoair.com` - oversized, heavy, industrial cargo.
6. **Air Charter Freight Desk** - `aircharterfreight.com` - urgent cargo charter.
7. **Air Cargo Docs** - `aircargodocs.com` - documents, customs, templates.
8. **Air Freight Tools** - `airfreighttools.com` - calculators and workflow tools.
9. **Europe & US Air Cargo from China** - `chinausaircargo.com` / `chinaeuropeairfreight.com`.
10. **Special Cargo Air Freight** - `specialcargoair.com` - DG, battery, pharma, temperature controlled.
11. **Freight Intelligence Lab** - `freightintelligencelab.com` - market updates, data, reports, link earning.

### 2.2 100 Tool Pages

Full list: `site-architecture.json`. The 100 tools are grouped into pricing/weight, route/transit, project cargo, air charter, customs/docs, dangerous goods, lane-specific, procurement, tracking/intelligence, and conversion tools.

First tools to ship because they match EASCargo revenue advantage:

1. China to Africa air freight cost estimator.
2. Oversized cargo aircraft fit checker.
3. Project cargo RFQ builder.
4. Air charter aircraft selector.
5. Lithium battery air freight checklist.
6. Africa customs document checklist.
7. China to Middle East transit planner.
8. Chargeable weight calculator with project cargo examples.
9. Commercial invoice and packing list validator.
10. Freight quote normalization tool.

### 2.3 1000 Article Matrix

| Cluster | Count | Purpose | Example |
|---|---:|---|---|
| Route guides | 250 | Capture high-intent lanes | Air freight from China to Nigeria: cost, transit time, customs docs. |
| Cargo type guides | 150 | Qualify commodity/cargo leads | How to ship construction machinery by air from Shanghai. |
| Customs/document guides | 150 | Capture document anxiety | Documents required for air freight from China to Saudi Arabia. |
| Project cargo guides | 120 | Build premium authority | Oversized cargo air freight for mining equipment. |
| Charter guides | 80 | Capture urgent high-ticket leads | Cargo charter from China to Africa: aircraft options and timeline. |
| Industry guides | 100 | Convert enterprise buyers | Air freight logistics for telecom infrastructure projects. |
| Tool explainers | 80 | Support calculators and internal links | How to calculate chargeable weight for oversized cargo. |
| Market intelligence | 70 | Earn repeat visits and links | Weekly China export air cargo capacity update. |

## 3. Stage Three - 10,000 Keyword Library

Generated file: `keyword-library-10000.csv`.

The file contains 10,000 keyword seeds across commercial, informational, tool, industry, and long-tail categories. Search volume, competition, and commercial value are model-estimated seed values for planning only. Validate with Google Search Console, Google Ads Keyword Planner, Ahrefs, Semrush, or live rank data before spending money.

Priority scoring:

`priority_score = commercial_value * 3 + lane_fit * 2 + cargo_complexity * 2 + tool_potential + low_competition_bonus`

EASCargo core clusters receive priority: China export, Shanghai/Shenzhen/Guangzhou origins, Africa, Middle East, Europe/US, project cargo, oversized cargo, charter, DG/battery, customs documents.

## 4. Stage Four - Technical Architecture

### 4.1 Stack

- Frontend: Next.js App Router, TypeScript, static generation and ISR.
- Hosting: Vercel production deployment, preview deployments for content templates.
- Database: Supabase Postgres.
- Vector search: pgvector for semantic keyword clustering and internal links.
- CMS: Payload CMS backed by Postgres/Supabase, or Sanity if editorial team prefers a hosted editor. Recommended default: Payload for ownership and schema control.
- Assets: Supabase Storage or Vercel Blob for cargo photos, PDF checklists, downloadable templates.
- Analytics: GA4 + GSC + Bing Webmaster + server-side event logs for RFQ attribution.

### 4.2 SEO Automation

Every page is generated from a page registry:

- `page_type`: brand, service, route, cargo, tool, document, industry, market_update, case_study.
- `target_keyword`, `secondary_keywords`, `intent`, `canonical_url`.
- Auto meta title and description with length checks.
- Auto schema: Organization, Service, FAQPage, HowTo, SoftwareApplication, BreadcrumbList, Dataset, Article.
- Sitemap index split by site and page type.
- Internal links generated from cluster graph: hub -> spoke -> tool -> RFQ -> related route/cargo pages.
- Refresh rules: market pages weekly, customs pages quarterly or source-change triggered, evergreen calculators monthly, high-impression pages by GSC decay.

### 4.3 Page Templates

Commercial route page sections:

1. H1: Air Freight from China to [Destination].
2. Fast answer: transit time, origin airports, destination airports, cargo fit.
3. Cost drivers: weight/volume, route, urgency, airline acceptance, handling.
4. Required documents.
5. Cargo types accepted/restricted.
6. Tool block: calculator/checklist.
7. EASCargo execution path.
8. FAQ schema.
9. RFQ CTA with prefilled lane/cargo fields.

Tool page sections:

1. Tool interface above the fold.
2. Result explanation and caveats.
3. Operational checklist.
4. Related route/cargo pages.
5. RFQ CTA using tool result as lead context.
6. SoftwareApplication + FAQ schema.

## 5. Stage Five - Daily AI Agent System

Full spec: `agent-system-spec.md`.

Daily agents:

- SEO Research Agent: GSC/crawl analysis, decay detection, internal-link opportunities.
- Content Writer Agent: drafts pages from approved briefs, generates meta/schema/internal links.
- Competitor Monitor Agent: monitors top100 pages, tools, CTAs, reports, metadata changes.
- Keyword Discovery Agent: expands keyword DB from GSC, competitors, RFQs, forums/news.
- Customer Lead Agent: scores RFQs, detects missing quote fields, drafts follow-up prompts.
- Freight Intelligence Agent: converts market/capacity/customs/airline signals into page refreshes and weekly posts.

Daily operating principle: failed fetches and missing sources are blockers, not empty results. Agents must write run status, evidence, outputs, and next actions.

## 6. Stage Six - 90-Day Execution Plan

Full daily table: `90-day-execution-plan.csv`.

### Month 1 - Foundation and First Tools

- Days 1-7: route registry, keyword DB, competitor DB, schema factories, sitemap generation, RFQ lead model, CMS workflow.
- Days 8-14: rebuild EASCargo brand site as conversion hub.
- Days 15-30: ship first 48 high-intent tools and 150 pages.

### Month 2 - Vertical Sites and Agents

- Days 31-45: launch first five vertical authority properties.
- Days 46-60: complete 100 tools, launch daily agent logs and SEO dashboard.
- Target by Day 60: 100 tools, 350-450 indexable pages, automated sitemap/internal links, first systematic RFQ tracking.

### Month 3 - Scale and Authority

- Days 61-75: publish market intelligence dashboard and scale to 700+ pages.
- Days 76-90: conversion tests, link acquisition campaigns, top-page refreshes, CRM handoff.
- Target by Day 90: 1000-page pipeline, 100 tools live, daily agent loop operating, first backlink/authority flywheel active.

## 7. KPI Targets

Six-month target of 100,000 Google organic visits/month is aggressive but structurally possible if these assumptions hold:

- 100 useful tools are shipped and indexable.
- 600-1000 high-quality pages are indexed.
- Topical clusters are internally linked and not duplicate boilerplate.
- At least 80-150 referring domains are earned through tools, reports, directories, customer/partner citations, and trade content.
- Content is refreshed from GSC and market data, not left static.
- RFQ conversion is measured by page, tool, lane, cargo type, and lead score.

Leading indicators:

- Month 1: pages indexed, crawl health, first tool impressions, RFQ baseline.
- Month 2: 10k+ monthly impressions, first non-branded clicks, tool backlinks, qualified lead count.
- Month 3: 30k+ monthly impressions, 3k-8k monthly organic visits, 100+ qualified RFQ assists.
- Month 6: 100k monthly organic visits target, 2%-6% RFQ/tool-assisted conversion on high-intent tool pages.
- Month 12: industry-recognized logistics tool/content ecosystem with recurring market intelligence audience.

## 8. Immediate Build Backlog

1. Implement page registry and metadata/schema factories.
2. Import `keyword-library-10000.csv` into Supabase.
3. Create first 10 tool pages from the high-margin list.
4. Build route page template for China -> Africa/Middle East/US/EU.
5. Add lead scoring to RFQ forms.
6. Build agent run table and first SEO Research Agent.
7. Publish weekly China export air cargo intelligence page.
8. Add competitor monitor for DHL, K+N, Flexport, Freightos, project44, Emirates, Qatar, Lufthansa.

## 9. Definition of Done

This program is working when:

- New pages are generated from structured keyword/page records, not manually improvised.
- Each page has metadata, schema, canonical, sitemap inclusion, internal links, and a conversion CTA.
- Tools create useful results and pass context into RFQ.
- Agents produce daily actionable reports with source evidence.
- GSC data changes the content queue weekly.
- Leads are scored and attributable to exact pages/tools/keywords.
