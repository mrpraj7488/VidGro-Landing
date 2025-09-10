import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import ThemeToggle from '@/components/ui/ThemeToggle'
import ProgressBar from '@/components/ui/ProgressBar'
export default function HomePage() {
  return (
    <>
      <ThemeToggle />
      <ProgressBar />
      
      <main className="min-h-screen">
        <Hero />
        <SocialProof />
        <HowItWorks />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
    </>
  )
}