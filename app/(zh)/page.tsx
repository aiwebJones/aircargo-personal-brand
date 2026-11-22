import type { Metadata } from 'next'
import EnglishHome from '@/components/EnglishHome'

export const metadata: Metadata = {
  title: 'EASCARGO | China to Africa Air Freight & Oversized Project Cargo',
  description: 'Shanghai air freight forwarder with 15+ years of China-to-Africa experience. B777F charters, single pieces up to 16.73 t, key Africa lanes. Get a quote within 2 hours.',
  alternates: { canonical: 'https://www.eascargo.com/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.eascargo.com/',
    siteName: 'EASCARGO',
    title: 'EASCARGO | China to Africa Air Freight',
    description: 'China-to-Africa air freight and oversized project cargo. B777F charters and quotes within 2 hours.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EASCARGO | China to Africa Air Freight',
    description: 'China-to-Africa air freight and oversized project cargo. Quotes within 2 hours.',
  },
}

export default function Home() {
  return <EnglishHome />
}
