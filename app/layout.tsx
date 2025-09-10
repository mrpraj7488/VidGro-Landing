import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'
import JsonLD from '../components/seo/JsonLD'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
})

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="theme-color" content="#10b981" />
        <style dangerouslySetInnerHTML={{ __html: `
          *,::after,::before{box-sizing:border-box;border:0;padding:0;margin:0}
          html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";scroll-behavior:smooth}
          body{margin:0;line-height:inherit;min-height:100vh;background:#fff;color:#111827}
          h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
          a{color:inherit;text-decoration:inherit}
          button{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;background:transparent;cursor:pointer}
          .min-h-screen{min-height:100vh}
          .container{width:100%;margin:0 auto;padding:0 1rem;max-width:1280px}
          .flex{display:flex}.items-center{align-items:center}.justify-center{justify-content:center}
          .text-center{text-align:center}.font-bold{font-weight:700}.font-extrabold{font-weight:800}
          .text-4xl{font-size:2.25rem}.text-5xl{font-size:3rem}.text-6xl{font-size:3.75rem}
          .py-20{padding-top:5rem;padding-bottom:5rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}
          .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}
          .text-primary-500{color:#10b981}.bg-primary-500{background-color:#10b981}
          .animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
          @media(min-width:640px){.sm\\:text-5xl{font-size:3rem}.sm\\:text-6xl{font-size:3.75rem}}
          @media(min-width:768px){.md\\:text-6xl{font-size:3.75rem}.md\\:text-7xl{font-size:4.5rem}}
          @media(min-width:1024px){.lg\\:text-7xl{font-size:4.5rem}.lg\\:text-8xl{font-size:6rem}}
        ` }} />
      </head>
      <body className={inter.className}>
        {children}
        <JsonLD />
        <GoogleAnalytics />
      </body>
    </html>
  )
}