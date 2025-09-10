import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import dynamic from 'next/dynamic'

// Lazy load all non-critical components
const HowItWorks = dynamic(() => import('../components/sections/HowItWorks'), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
})
const Testimonials = dynamic(() => import('../components/sections/Testimonials'), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
})
const SocialProof = dynamic(() => import('../components/sections/SocialProof'), {
  loading: () => <div className="min-h-[200px]" />,
  ssr: false
})
const FAQ = dynamic(() => import('../components/sections/FAQ'), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
})
const CTA = dynamic(() => import('../components/sections/CTA'), {
  loading: () => <div className="min-h-[300px]" />,
  ssr: false
})
const Pricing = dynamic(() => import('../components/sections/Pricing'), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
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