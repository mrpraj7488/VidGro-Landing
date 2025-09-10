import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import HowItWorks from '@/components/sections/HowItWorks'
import Features from '@/components/sections/Features'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import CTA from '@/components/sections/CTA'
import ThemeToggle from '@/components/ui/ThemeToggle'
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