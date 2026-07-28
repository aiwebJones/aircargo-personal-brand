interface EascargoLogoProps {
  className?: string
  markClassName?: string
  wordmarkClassName?: string
}

export default function EascargoLogo({
  className = '',
  markClassName = 'h-8 w-8',
  wordmarkClassName = 'text-base',
}: EascargoLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        role="img"
        aria-label="EASCARGO logo"
        className={`shrink-0 ${markClassName}`}
      >
        <rect width="40" height="40" rx="7" fill="#08111f" />
        <path d="M8 10h18v5H13v4h11v5H13v5h13v5H8z" fill="#f4b942" />
        <path d="M23 6 34 12l-11 6v-4h-8v-4h8z" fill="#fff" />
      </svg>
      <span
        className={`font-black leading-none text-textPrimary tracking-normal ${wordmarkClassName}`}
      >
        EASCARGO
      </span>
    </span>
  )
}
