# 🚀 部署检查清单

部署前请按此清单逐项检查。

## 📋 内容替换清单

### 1. 基础信息
- [ ] `app/layout.tsx` 中的 `title` → 改为你的名字
- [ ] `app/layout.tsx` 中的 `description` → 改为你的简介
- [ ] `app/layout.tsx` 中的 `yourdomain.com` → 改为你的真实域名
- [ ] `app/layout.tsx` 中的 JSON-LD 数据 → 改为你的真实信息
- [ ] `public/sitemap.xml` 中的域名 → 改为你的真实域名
- [ ] `public/robots.txt` 中的域名 → 改为你的真实域名

### 2. 联系方式
- [ ] `components/sections/CTASection.tsx` 中的 `your@email.com` → 你的邮箱
- [ ] `components/sections/CTASection.tsx` 中的微信链接 → 你的微信
- [ ] `components/sections/Footer.tsx` 中的 LinkedIn 链接 → 你的LinkedIn
- [ ] `components/sections/Footer.tsx` 中的 Twitter 链接 → 你的Twitter
- [ ] `components/sections/Footer.tsx` 中的"你的名字" → 你的真实姓名

### 3. 文案内容（可选，占位符已可用）
- [ ] `HeroSection.tsx` - 主宣言（目前："确定性交付。"）
- [ ] `InsightSection.tsx` - 5个问题描述
- [ ] `MethodologySection.tsx` - 4个方法论描述
- [ ] `CapabilitiesSection.tsx` - 5个能力描述
- [ ] `PersonalSection.tsx` - 4个价值观列表
- [ ] `AudienceSection.tsx` - 适合/不适合条件

## 🔍 SEO 检查

- [ ] Google Search Console 验证代码已添加
- [ ] 准备了 Open Graph 分享图片 (1200x630px)，放在 public/og-image.jpg
- [ ] 页面标题长度在 50-60 字符之间
- [ ] 页面描述长度在 150-160 字符之间

## 🎨 图片资源

需要准备的图片（放在 public/ 目录）：
- [ ] `og-image.jpg` - 社交媒体分享图 (1200x630px)

## ✅ 功能测试

部署后在以下设备测试：
- [ ] Desktop (Chrome, Safari, Firefox)
- [ ] Mobile (iOS Safari, Android Chrome)
- [ ] Tablet (iPad)

测试项目：
- [ ] 所有链接可点击
- [ ] 邮箱链接能唤起邮件客户端
- [ ] 页面滚动流畅
- [ ] 动画效果正常
- [ ] 响应式布局正确

## 🌐 域名配置

如果使用自定义域名：
- [ ] 在 Vercel 添加自定义域名
- [ ] 在域名服务商添加 CNAME 记录（指向 cname.vercel-dns.com）
- [ ] 等待 SSL 证书自动颁发（约几分钟）

## 📊 分析工具（可选）

- [ ] 添加 Google Analytics 代码
- [ ] 添加百度统计代码（如需要）

## 📝 部署后检查

- [ ] 访问网站，确认所有页面正常显示
- [ ] 使用 Google PageSpeed Insights 测试性能（目标：90+）
- [ ] 使用 Google Rich Results Test 测试结构化数据
- [ ] 在 Google Search Console 提交 Sitemap

---

**有问题？** 检查 README.md 中的详细说明。
