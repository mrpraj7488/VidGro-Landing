import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import JsonLD from '@/components/seo/JsonLD'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'VidGro - Stop Waiting for the Algorithm, Grow Instantly! | Free YouTube Growth',
  description: 'Join 50,000+ creators who stopped waiting and started growing. Watch videos, earn coins, get real views. 1 coin = 1 guaranteed human view. Get 100 welcome coins instantly - completely free forever!',
  keywords: 'youtube growth, free youtube views, real views, creator community, youtube marketing, content discovery, earn coins watching videos, youtube viral, creator platform, algorithm alternative',
  authors: [{ name: 'VidGro Team' }],
  creator: 'VidGro',
  publisher: 'VidGro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  openGraph: {
    title: 'VidGro - Stop Waiting for the Algorithm, Grow Instantly!',
    description: 'Revolutionary creator-to-creator platform. 1 coin = 1 real view. Get 100 welcome coins instantly - completely free forever!',
    images: ['/og-image-1200x630.png'],
    url: '/',
    siteName: 'VidGro',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VidGro - Stop Waiting for the Algorithm, Grow Instantly!',
    description: 'Revolutionary creator platform. 1 coin = 1 real view. 100 welcome coins instantly - free forever!',
  },
  alternates: {
    canonical: 'https://vidgro.app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        {children}
        <JsonLD />
        <GoogleAnalytics />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}