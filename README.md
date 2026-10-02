# EASCargo 国际空运网站

本仓库维护已上线的 [EASCargo 主站](https://www.eascargo.com/)：中国出口空运、大件项目货、非洲航线、案例、知识内容与逐票询价。仓库名称保留早期个人品牌项目的历史命名，当前网站不是待替换姓名和域名的模板。

## 当前入口与源码

| 入口 | 用途 | 主要源码 |
|---|---|---|
| `www.eascargo.com` | 公司、业务内容与询价主站 | `app/`、`components/`、`public/` |
| `skyrate.info` | 计费重量与报价准备 | `cloudflare/airfreight-commercial-system/worker.js` |
| `aicargotrack.com` | 超大件与中转异常初步预判 | 同一个 Worker 文件 |

两个工具用于整理询价资料，不提供实时航司运价、舱位承诺或运单轨迹。首页由 `app/(zh)/page.tsx` 与 `components/SimpleHome.tsx` 构成。`components/QuoteForm.tsx` 和 `components/ContactModal.tsx` 均向现有 Formspree 端点发送请求，已不是模拟提交。表单请求成功与收件人实际收到需要分别验证。

## 当前构建与发布方式

技术栈为 Next.js 14.2.35、React 18、TypeScript、Tailwind CSS。使用满足 Next.js 要求的 Node.js（至少 18.17）；2026-10-02 以 Node 24.19.0 完成生产构建与类型检查，生成 135 个静态页面。旧 Node 16 无法运行本项目。

```bash
node --version
npm ci
npm run dev
# 生产构建
npm run build
```

`next.config.js` 配置静态导出到 `dist/`，应使用静态托管，不能按 `next start` 的服务器模式部署。构建需要下载 Google Fonts 的 Inter 字体；网络失败时先排除下载问题。部分 `dist/` 文件仍被 Git 跟踪，验证构建后应检查 diff，避免把所有产物混入源码修改。

主站静态页面和 Cloudflare Worker 是两条发布链路。仓库没有可核实的 Wrangler 项目/路由配置或 GitHub Actions 发布工作流，生产目标须在当前托管配置中确认，Git 提交和构建成功均不代表上线。不要依据早期 ZIP 或旧 Vercel 教程覆盖现有网站。

2026-10-02 浏览器验证：SkyRate 对 2 件 120×100×100 cm、毛重 250 kg 正确计算出 400 kg 计费重；AiCargoTrack 对超长、超高、重货产生对应复核提示。两个工具域的 Cloudflare Analytics 脚本被线上 CSP 阻止，虽然 Worker 源码已允许相应域名，仍需检查实际部署的响应头。本次没有发送真实询盘，未取得实际收件或转化数据。

运价、承运人、舱位、时效和政策须有当前来源或人工确认。凭据使用环境变量或平台秘密存储，不提交到源码或构建产物中。

## 早期模板说明（历史保留，不作为当前部署依据）

以下内容和 `DEPLOY_STATUS.md`、`DEPLOY_CHECKLIST.md` 记录早期模板状态；其中姓名/域名占位符、模拟表单、待部署等描述已过时，以本页上半部分和实际托管配置为准。

一个为资深国际空运专家打造的高质感个人品牌官网。

## ✨ 已完成功能

### 页面结构（7个Section）
1. **Hero** - 主宣言 + 双CTA按钮 + 粒子背景动效
2. **Insight** - 5个问题洞察
3. **Methodology** - 4个方法论模块
4. **Capabilities** - 5个能力版图
5. **Personal** - 价值观展示
6. **Audience** - 适合/不适合合作对象
7. **CTA** - 联系入口

### 新增组件
- **Navigation** - 顶部固定导航栏，支持锚点跳转 + 移动端菜单
- **ContactModal** - 联系表单弹窗，支持表单验证和提交状态
- **ParticleBackground** - Canvas粒子动画背景
- **404 Page** - 自定义404页面
- **Loading** - 页面加载状态

### 技术特性
- Next.js 14 + TypeScript + Tailwind CSS
- Framer Motion 动画
- 响应式设计（Desktop/Tablet/Mobile）
- SEO完整配置（Meta/OG/JSON-LD/Sitemap）
- 静态导出（适合部署到任何静态托管）

## 🚀 快速开始

```bash
# 进入项目
cd aircargo-personal-brand

# 安装依赖（已完成）
npm install

# 本地开发
npm run dev

# 构建（已完成，输出在dist/目录）
npm run build
```

## 📝 部署前必改清单

### 1. 基础信息（必须）
**app/layout.tsx**
- [ ] 改 `title` - 你的名字
- [ ] 改 `description` - 你的简介
- [ ] 改 `yourdomain.com` - 你的真实域名
- [ ] 改 JSON-LD 中的个人信息

**app/page.tsx / components/sections/**
- [ ] 改所有"你的名字"占位符

### 2. 联系方式（必须）
**components/ContactModal.tsx**
- [ ] 配置表单提交逻辑（目前模拟提交）
- [ ] 可接入 Formspree / Getform / 自建API

**components/sections/CTASection.tsx**
- [ ] 改微信链接 `https://your-wechat-link.com`

**components/sections/Footer.tsx**
- [ ] 改 LinkedIn 链接
- [ ] 改 Twitter 链接

### 3. 内容文案（建议）
- [ ] HeroSection - 主宣言（目前是"确定性交付。"）
- [ ] InsightSection - 5个问题描述
- [ ] MethodologySection - 4个方法论
- [ ] CapabilitiesSection - 5个能力描述
- [ ] PersonalSection - 4个价值观列表
- [ ] AudienceSection - 适合/不适合条件

### 4. SEO配置（必须）
**public/sitemap.xml**
- [ ] 改域名 `yourdomain.com`

**app/layout.tsx**
- [ ] 添加 Google Search Console 验证代码

### 5. 图片资源（可选）
- [ ] 准备 Open Graph 分享图 `public/og-image.jpg` (1200x630px)

## 🌐 部署到 Vercel

### 方式一：Vercel CLI
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
cd dist
vercel --prod
```

### 方式二：Git + Vercel（推荐）
1. 将代码推送到 GitHub
2. 在 Vercel 导入项目
3. 自动部署

### 方式三：手动上传
直接将 `dist/` 目录上传到任何静态托管服务（Netlify, Cloudflare Pages等）

## 📱 响应式断点

- Desktop: 1280px+
- Tablet: 768px - 1279px
- Mobile: < 768px

## 🎨 设计系统

| 用途 | 颜色 | Hex |
|------|------|-----|
| 主背景 | 深海黑蓝 | #0B1C2D |
| 文字 | 工业灰 | #9CA3AF |
| 强调 | 琥珀金 | #F5A623 |
| 卡片背景 | 深蓝 | #0f1720 |

## 🔧 后续优化建议

1. **添加真实案例** - 在 CapabilitiesSection 添加客户案例
2. **添加数据展示** - 如"累计处理货量"、"服务客户数"等
3. **接入真实表单** - 使用 Formspree 或自建 API
4. **添加博客** - 展示专业文章
5. **添加 Testimonials** - 客户评价
6. **性能优化** - 图片懒加载、字体预加载

## 📄 License

Private - 仅供个人使用
