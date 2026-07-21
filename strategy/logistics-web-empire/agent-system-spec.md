# AI Agent System Spec - Logistics Web Empire

Generated: 2026-07-22

## Objective

Create a daily operating system that compounds SEO traffic, freight intelligence, and qualified RFQ leads for EASCargo. Agents create drafts, reports, lead queues, and refresh recommendations with source trails. They do not publish unverifiable freight facts blindly.

## Core Supabase Tables

- `competitors`: company, category, domain, page patterns, keywords, monitored URLs.
- `keywords`: keyword, category, intent, estimated volume, competition, commercial value, cluster, target URL.
- `pages`: site, slug, type, target keyword, status, metadata, schema, canonical, refresh date.
- `content_briefs`: keyword cluster, outline, required sources, writer status, reviewer status.
- `agent_runs`: agent, started_at, finished_at, status, inputs_hash, outputs, errors.
- `leads`: source URL, tool, lane, cargo type, weight, dimensions, urgency, contact, lead_score, follow_up_status.
- `market_signals`: source, lane, carrier, issue type, observed_at, summary, confidence, affected pages.

## Agents

### SEO Research Agent

- Schedule: daily 06:00 Asia/Shanghai.
- Inputs: GSC exports, sitemap, keyword DB, competitor URL list, previous crawl.
- Work: identify pages with rising impressions, decaying clicks, missing internal links, missing schema, cannibalization.
- Output: `reports/seo-daily-{date}.md`, page refresh queue, new internal links.
- Guardrail: do not invent search volume; mark model estimates separately from GSC/API data.

### Content Writer Agent

- Schedule: daily 07:00.
- Inputs: approved briefs, source requirements, company service constraints, cargo expertise notes.
- Work: draft articles, FAQs, meta title/description, schema JSON-LD, internal-link suggestions.
- Output: draft markdown/MDX in CMS status `drafted`.
- Guardrail: compliance/customs pages require cited current sources or `fact_check_required`.

### Competitor Monitor Agent

- Schedule: daily 08:00.
- Inputs: top100 competitor domains and monitored landing pages.
- Work: detect new tools, new content hubs, metadata changes, new CTAs, market update pages.
- Output: competitor delta report and opportunity backlog.
- Guardrail: crawl politely, rate-limit, respect robots where applicable.

### Keyword Discovery Agent

- Schedule: daily 09:00.
- Inputs: GSC queries, site search, RFQ text, competitor page titles, logistics forums/news.
- Work: cluster emerging route/cargo/tool keywords and assign page type.
- Output: keyword additions with priority score.
- Guardrail: paid-search or purchase decisions require validation via keyword tools.

### Customer Lead Agent

- Schedule: hourly during business day.
- Inputs: RFQ forms, tool usage, document uploads, email/WhatsApp attribution.
- Work: score leads, detect missing quote fields, draft response prompts, route high-value leads.
- Output: lead queue and follow-up reminders.
- Guardrail: never expose private customer documents in public content; redact before case studies.

### Freight Intelligence Agent

- Schedule: daily 10:00 and weekly summary Monday 09:30.
- Inputs: airline notices, airport disruptions, IATA/market reports, internal quote/rate observations, customer inquiry patterns.
- Work: produce lane-specific updates and page refresh suggestions.
- Output: market intelligence post draft and affected-lane alerts.
- Guardrail: distinguish verified public facts, internal observations, and assumptions.

## Automation Implementation

- Vercel Cron or GitHub Actions triggers agent jobs.
- Each job writes `agent_runs` with status `ok`, `warning`, or `blocked`.
- Failed source fetches are blockers, not empty findings.
- Publishing requires: source checklist passed, no duplicate canonical conflict, metadata generated, internal links attached, sitemap updated.

## KPI Loop

- Daily: indexed pages, new pages, GSC impressions, top query deltas, crawl errors, lead count.
- Weekly: pages published, tools shipped, referring domains, RFQ conversion rate, top winning clusters, pages to prune/merge.
- Monthly: traffic by vertical site, commercial keyword rankings, lead quality by lane/cargo type, revenue attribution.
