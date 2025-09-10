'use client'

import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'

// Dynamic imports for better performance
const Features = dynamic(() => import('@/components/sections/Features'), {
  loading: () => <div className="min-h-screen" />
})
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks'), {
  loading: () => <div className="min-h-screen" />
})
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  loading: () => <div className="min-h-screen" />
})
const SocialProof = dynamic(() => import('@/components/sections/SocialProof'), {
  loading: () => <div className="min-h-screen" />
})
const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  loading: () => <div className="min-h-screen" />
})
const CTA = dynamic(() => import('@/components/sections/CTA'), {
  loading: () => <div className="min-h-screen" />
})
const Pricing = dynamic(() => import('@/components/sections/Pricing'), {
  loading: () => <div className="min-h-screen" />
})
const ThemeToggle = dynamic(() => import('@/components/ui/ThemeToggle'), {
  ssr: false
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