'use client'

import { useEffect } from 'react'
import { recordConversionFromUrl } from '@/lib/attribution'

export default function ConversionReceipt() {
  useEffect(() => {
    recordConversionFromUrl()
  }, [])

  return (
    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
      本次询盘来源已随表单记录，便于后续回复和服务改进。
    </p>
  )
}
