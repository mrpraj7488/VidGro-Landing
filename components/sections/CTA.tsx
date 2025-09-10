'use client'

import React, { useState, useEffect } from 'react'
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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-600 relative overflow-hidden">
      {/* Background decorations - responsive sizes */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white/5 rounded-full -translate-x-24 sm:-translate-x-32 lg:-translate-x-48 -translate-y-24 sm:-translate-y-32 lg:-translate-y-48" />
        <div className="absolute bottom-0 right-0 w-48 sm:w-64 lg:w-96 h-48 sm:h-64 lg:h-96 bg-white/5 rounded-full translate-x-24 sm:translate-x-32 lg:translate-x-48 translate-y-24 sm:translate-y-32 lg:translate-y-48" />
        <div className="absolute top-1/2 left-1/2 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-white/3 rounded-full -translate-x-16 sm:-translate-x-24 lg:-translate-x-32 -translate-y-16 sm:-translate-y-24 lg:-translate-y-32" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
              Stop Waiting. Start Growing.
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2 max-w-3xl mx-auto">
              Every day you wait is growth you lose. Join 50,000+ creators who took control of their YouTube success. 
              <span className="font-semibold block sm:inline mt-2 sm:mt-0"> Get 100 welcome coins instantly - completely free forever!</span>
            </p>
          </motion.div>

          {/* Benefits - responsive grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 bg-white/20 backdrop-blur-sm rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-white"
              >
                <div className="text-white/80 flex-shrink-0">
                  {React.cloneElement(benefit.icon, { className: "w-5 h-5 sm:w-6 sm:h-6" })}
                </div>
                <span className="font-medium text-xs sm:text-sm lg:text-base">{benefit.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons - mobile optimized */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <GamifiedButton
              variant="secondary"
              size="lg"
              coinReward={100}
              className="w-full sm:w-auto sm:min-w-[280px] min-h-[56px] sm:min-h-[60px] bg-white text-purple-600 hover:bg-gray-50 text-base sm:text-lg px-6 sm:px-8"
            >
              Get 100 FREE Coins Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </GamifiedButton>
          </motion.div>

          {/* Trust indicators - responsive grid */}
          <motion.div
            className="mt-6 sm:mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="text-white/60 text-xs sm:text-sm mb-3 sm:mb-4">
              Join the creator revolution - completely free forever
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
              <div className="text-white text-xs sm:text-sm opacity-80">✓ 100 Welcome Coins</div>
              <div className="text-white text-xs sm:text-sm opacity-80">✓ Always Free</div>
              <div className="text-white text-xs sm:text-sm opacity-80">✓ No Credit Card</div>
              <div className="text-white text-xs sm:text-sm opacity-80">✓ Real Views</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}