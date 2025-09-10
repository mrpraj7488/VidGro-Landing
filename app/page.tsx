'use client'

import dynamic from 'next/dynamic'
import Hero from '../components/sections/Hero'
import { Suspense } from 'react'

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="min-h-[400px] animate-pulse bg-gray-100 dark:bg-gray-800" />
)

// Dynamic imports with optimized loading
const Features = dynamic(() => import('../components/sections/Features'), {
  loading: LoadingSkeleton,
  ssr: true
})
const HowItWorks = dynamic(() => import('../components/sections/HowItWorks'), {
  loading: LoadingSkeleton,
  ssr: true
})
const Testimonials = dynamic(() => import('../components/sections/Testimonials'), {
  loading: LoadingSkeleton,
  ssr: true
})
const SocialProof = dynamic(() => import('../components/sections/SocialProof'), {
  loading: LoadingSkeleton,
  ssr: false
})
const FAQ = dynamic(() => import('../components/sections/FAQ'), {
  loading: LoadingSkeleton,
  ssr: true
})
const CTA = dynamic(() => import('../components/sections/CTA'), {
  loading: LoadingSkeleton,
  ssr: false
})
const Pricing = dynamic(() => import('../components/sections/Pricing'), {
  loading: LoadingSkeleton,
  ssr: true
})
const ThemeToggle = dynamic(() => import('../components/ui/ThemeToggle'), {
  ssr: false,
  loading: () => null
})

export default function HomePage() {
  return (
    <>
      <ThemeToggle />
      
      <main className="min-h-screen">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </>
  )
}