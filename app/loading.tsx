export default function Loading() {
  return (
    <div className="min-h-screen bg-deepBlue flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-amberGold/30 border-t-amberGold rounded-full animate-spin" />
        <p className="text-industrialGray/50 text-sm">加载中...</p>
      </div>
    </div>
  )
}
