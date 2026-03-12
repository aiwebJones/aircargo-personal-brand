# 国际空运专家个人品牌官网

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
