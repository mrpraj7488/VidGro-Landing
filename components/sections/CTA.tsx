'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Rocket, Users, TrendingUp, Sparkles, ArrowRight } from 'lucide-react'
import GamifiedButton from '../ui/GamifiedButton'

export default function CTA() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          // Reset to 24 hours
          return { hours: 23, minutes: 59, seconds: 59 }
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const benefits = [
    {
      icon: <Users className="w-6 h-6" />,
      text: "Join 50,000+ creators"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Get real views instantly"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      text: "100% YouTube safe"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-48 translate-y-48" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full -translate-x-32 -translate-y-32" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Stop Waiting. Start Growing.
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Every day you wait is growth you lose. Join 50,000+ creators who took control of their YouTube success. 
              <span className="font-semibold"> Get 100 welcome coins instantly - completely free forever!</span>
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white"
              >
                <div className="text-white/80">
                  {benefit.icon}
                </div>
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GamifiedButton
              variant="secondary"
              size="lg"
              coinReward={100}
              className="min-w-[280px] bg-white text-primary-600 hover:bg-gray-50"
            >
              Get 100 FREE Coins Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </GamifiedButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="text-white/60 text-sm mb-4">
              Join the creator revolution - completely free forever
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white text-sm">✓ 100 Welcome Coins</div>
              <div className="text-white text-sm">✓ Always Free</div>
              <div className="text-white text-sm">✓ No Credit Card Required</div>
              <div className="text-white text-sm">✓ Real Human Views</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}