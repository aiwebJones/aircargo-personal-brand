'use client'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-deepBlue flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-amberGold/20 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">页面未找到</h2>
        <p className="text-industrialGray/60 mb-8 max-w-md mx-auto">
          这个页面不存在，或者已经被移动到其他位置。
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 border border-amberGold/50 text-amberGold hover:bg-amberGold/10 transition-all"
        >
          返回首页
        </a>
      </div>
    </div>
  )
}
