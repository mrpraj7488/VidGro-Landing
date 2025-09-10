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
  title: 'Free YouTube Views & Subscribers - Get Real Growth Fast | VidGro',
  description: 'Get free YouTube views & subscribers instantly! 50,000+ creators use VidGro for real engagement. Earn coins watching videos, boost your channel organically. Start free!',
  keywords: 'free youtube views, youtube subscribers free, youtube growth hack, get youtube views, youtube promotion free, youtube marketing, viral youtube, youtube algorithm, youtube monetization, content creator tools, youtube engagement, social media growth, video marketing, youtube seo, organic youtube growth, youtube views generator, youtube subscriber boost, creator economy, influencer marketing, youtube analytics, how to get youtube views, how to grow youtube channel, how to get youtube subscribers, how to make youtube videos viral, how to increase youtube views, how to promote youtube channel, how to get more youtube subscribers, how to grow on youtube fast, how to monetize youtube channel, how to get youtube views for free, how to boost youtube channel, how to get real youtube subscribers, how to increase youtube engagement, how to grow youtube audience, how to get youtube views without paying, how to make youtube channel popular, how to get youtube subscribers fast, how to promote youtube videos, how to get organic youtube growth, how to increase youtube watch time, youtube growth tips, youtube marketing strategy, youtube channel optimization, youtube video promotion, youtube subscriber growth, youtube view increase, youtube engagement boost, youtube viral marketing, youtube content strategy, youtube audience building',
  authors: [{ name: 'VidGro Team' }],
  creator: 'VidGro',
  publisher: 'VidGro',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vidgro.netlify.app'),
  openGraph: {
    title: 'Free YouTube Views & Subscribers - Get Real Growth Fast | VidGro',
    description: 'Get free YouTube views & subscribers instantly! 50,000+ creators use VidGro for real engagement. Earn coins watching videos, boost your channel organically.',
    images: ['/og-image-1200x630.png'],
    url: '/',
    siteName: 'VidGro - Free YouTube Growth Platform',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free YouTube Views & Subscribers - Get Real Growth Fast',
    description: 'Get free YouTube views & subscribers instantly! 50,000+ creators use VidGro for real engagement. Start growing your channel today!',
    site: '@VidGro',
    creator: '@VidGro',
  },
  category: 'Social Media Marketing',
  classification: 'YouTube Growth Tools',
  other: {
    'google-site-verification': 'your-google-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
    'p:domain_verify': 'your-pinterest-verification-code',
  },
  alternates: {
    canonical: 'https://vidgro.netlify.app',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: ['https://vidgro.netlify.app'],
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
        <meta name="application-name" content="VidGro" />
        <meta name="apple-mobile-web-app-title" content="VidGro" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="37.7749, -122.4194" />
        <meta name="DC.title" content="Free YouTube Views & Subscribers - VidGro" />
        <meta name="DC.creator" content="VidGro Team" />
        <meta name="DC.subject" content="YouTube Growth, Social Media Marketing, Content Creator Tools" />
        <meta name="DC.description" content="Get free YouTube views & subscribers instantly with VidGro" />
        <meta name="DC.publisher" content="VidGro" />
        <meta name="DC.contributor" content="VidGro Community" />
        <meta name="DC.date" content="2024" />
        <meta name="DC.type" content="Service" />
        <meta name="DC.format" content="text/html" />
        <meta name="DC.identifier" content="https://vidgro.netlify.app" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Worldwide" />
        <meta name="DC.rights" content="© 2024 VidGro. All rights reserved." />
        <meta property="business:contact_data:street_address" content="" />
        <meta property="business:contact_data:locality" content="" />
        <meta property="business:contact_data:region" content="" />
        <meta property="business:contact_data:postal_code" content="" />
        <meta property="business:contact_data:country_name" content="United States" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* Hidden SEO Keywords for Search Engines */}
        <meta name="topic" content="YouTube Growth, Video Marketing, Content Creation" />
        <meta name="summary" content="Learn how to grow YouTube channel, get free views, increase subscribers, and boost engagement organically" />
        <meta name="Classification" content="YouTube Tutorial, Social Media Marketing, Content Creator Tools" />
        <meta name="author" content="VidGro YouTube Growth Experts" />
        <meta name="designer" content="VidGro SEO Team" />
        <meta name="copyright" content="VidGro YouTube Growth Platform" />
        <meta name="reply-to" content="support@vidgro.netlify.app" />
        <meta name="owner" content="VidGro - YouTube Growth Platform" />
        <meta name="url" content="https://vidgro.netlify.app" />
        <meta name="identifier-URL" content="https://vidgro.netlify.app" />
        <meta name="directory" content="submission" />
        <meta name="category" content="YouTube Growth Tools, Social Media Marketing, Content Creation" />
        <meta name="coverage" content="Worldwide YouTube Creators" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="1 days" />
        <meta name="subtitle" content="How to Get YouTube Views, Subscribers, and Grow Your Channel Fast" />
        <meta name="target" content="YouTube Creators, Content Creators, Influencers, Video Marketers" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="og:region" content="US" />
        <meta name="og:country-name" content="USA" />
        <meta name="og:email" content="support@vidgro.netlify.app" />
        <meta name="og:phone_number" content="" />
        <meta name="og:fax_number" content="" />
        <meta name="og:latitude" content="37.7749" />
        <meta name="og:longitude" content="-122.4194" />
        <meta name="og:street-address" content="" />
        <meta name="og:locality" content="San Francisco" />
        <meta name="og:region" content="CA" />
        <meta name="og:postal-code" content="94102" />
        <meta name="og:country-name" content="United States" />
        {/* Additional How-To SEO Keywords */}
        <meta name="article:tag" content="how to get youtube views, how to grow youtube channel, how to get youtube subscribers, how to make youtube videos viral, how to increase youtube views, how to promote youtube channel, how to get more youtube subscribers, how to grow on youtube fast, how to monetize youtube channel, how to get youtube views for free, how to boost youtube channel, how to get real youtube subscribers, how to increase youtube engagement, how to grow youtube audience, how to get youtube views without paying, how to make youtube channel popular, how to get youtube subscribers fast, how to promote youtube videos, how to get organic youtube growth, how to increase youtube watch time" />
        <meta name="news_keywords" content="YouTube growth, free YouTube views, YouTube subscribers, viral videos, YouTube marketing, content creation, social media growth, video promotion, YouTube algorithm, organic growth" />
        <meta name="standout" content="https://vidgro.netlify.app" />
        <meta name="article:section" content="YouTube Growth Tutorial" />
        <meta name="article:published_time" content="2024-01-01T00:00:00+00:00" />
        <meta name="article:modified_time" content="2024-12-01T00:00:00+00:00" />
        <meta name="article:author" content="VidGro YouTube Growth Team" />
        <meta name="article:publisher" content="VidGro" />
        <style dangerouslySetInnerHTML={{ __html: `
          *,::after,::before{box-sizing:border-box;border:0;padding:0;margin:0}
          html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:Inter,ui-sans-serif,system-ui,-apple-system,sans-serif;scroll-behavior:smooth}
          body{margin:0;line-height:inherit;min-height:100vh;background:#fff;color:#111827}
          h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}
          a{color:inherit;text-decoration:inherit}
          button{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0;background:transparent;cursor:pointer}
          .min-h-screen{min-height:100vh}
          .container{width:100%;margin:0 auto;padding:0 1rem;max-width:1280px}
          .flex{display:flex}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}
          .text-center{text-align:center}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.font-medium{font-weight:500}
          .text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.text-4xl{font-size:2.25rem}.text-5xl{font-size:3rem}.text-6xl{font-size:3.75rem}
          .py-20{padding-top:5rem;padding-bottom:5rem}.py-8{padding-top:2rem;padding-bottom:2rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}
          .mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}
          .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}
          .text-primary-500{color:#10b981}.bg-primary-500{background-color:#10b981}.text-gray-600{color:#6b7280}.text-gray-900{color:#111827}.bg-white{background-color:#fff}
          .rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:.75rem}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}
          .animate-pulse{animation:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite}
          @keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}
          @media(min-width:640px){.sm\\:text-lg{font-size:1.125rem}.sm\\:text-xl{font-size:1.25rem}.sm\\:text-2xl{font-size:1.5rem}.sm\\:text-3xl{font-size:1.875rem}.sm\\:text-4xl{font-size:2.25rem}.sm\\:text-5xl{font-size:3rem}.sm\\:text-6xl{font-size:3.75rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-12{padding-top:3rem;padding-bottom:3rem}}
          @media(min-width:768px){.md\\:text-xl{font-size:1.25rem}.md\\:text-2xl{font-size:1.5rem}.md\\:text-3xl{font-size:1.875rem}.md\\:text-4xl{font-size:2.25rem}.md\\:text-5xl{font-size:3rem}.md\\:text-6xl{font-size:3.75rem}.md\\:text-7xl{font-size:4.5rem}}
          @media(min-width:1024px){.lg\\:text-2xl{font-size:1.5rem}.lg\\:text-3xl{font-size:1.875rem}.lg\\:text-4xl{font-size:2.25rem}.lg\\:text-5xl{font-size:3rem}.lg\\:text-6xl{font-size:3.75rem}.lg\\:text-7xl{font-size:4.5rem}.lg\\:text-8xl{font-size:6rem}}
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