// Next 14 requires this boundary for the global not-found route. Each branch
// supplies exactly one SiteDocument so the initial HTML has its own language.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
