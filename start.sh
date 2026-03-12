#!/bin/bash

echo "🚀 国际空运专家个人品牌官网 - 快速启动"
echo "=========================================="

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装，请先安装 Node.js 18+"
    exit 1
fi

echo "✅ Node.js 版本: $(node -v)"

# 安装依赖
echo ""
echo "📦 安装依赖..."
npm install

# 启动开发服务器
echo ""
echo "🚀 启动开发服务器..."
echo "访问 http://localhost:3000"
echo ""
npm run dev
