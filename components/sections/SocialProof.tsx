'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Users, TrendingUp, Shield, Youtube, CheckCircle } from 'lucide-react'
import { urgencyElements, microTestimonials } from '@/lib/seo-content'

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [recentActivity, setRecentActivity] = useState('')
  const [limitedSpots, setLimitedSpots] = useState(42)

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % microTestimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Update recent activity
  useEffect(() => {
    const updateActivity = () => {
      const names = ['Alex', 'Sarah', 'Mike', 'Emma', 'Jake', 'Lisa', 'Tom', 'Amy']
      const name = names[Math.floor(Math.random() * names.length)]
      const city = urgencyElements.recentActivity.cities[Math.floor(Math.random() * urgencyElements.recentActivity.cities.length)]
      const message = urgencyElements.recentActivity.messages[Math.floor(Math.random() * urgencyElements.recentActivity.messages.length)]
      
      setRecentActivity(message.replace('{name}', name).replace('{city}', city))
    }

    updateActivity()
    const interval = setInterval(updateActivity, urgencyElements.recentActivity.displayInterval)

    return () => clearInterval(interval)
  }, [])

  // Update limited spots
  useEffect(() => {
    const interval = setInterval(() => {
      setLimitedSpots(prev => {
        const change = Math.random() > 0.7 ? -1 : 0 // Occasionally decrease
        return Math.max(23, Math.min(47, prev + change))
      })
    }, urgencyElements.limitedSpots.updateInterval)

    return () => clearInterval(interval)
  }, [])

  const trustBadges = [
    { icon: <Youtube className="w-5 h-5" />, text: "YouTube TOS Compliant" },
    { icon: <Shield className="w-5 h-5" />, text: "Real Human Views Only" },
    { icon: <Users className="w-5 h-5" />, text: "50,000+ Active Creators" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "1 Coin = 1 Real View" }
  ]

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-gray-800 border-y border-gray-100 dark:border-gray-700">
      <div className="container mx-auto px-4">
        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <div className="text-green-500">{badge.icon}</div>
              <span className="font-medium">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Live activity ticker */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-3 sm:p-4 shadow-lg border border-blue-100 dark:border-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <AnimatePresence mode="wait">
              <motion.span
                key={recentActivity}
                className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {recentActivity}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          className="max-w-4xl mx-auto mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Creators Are Saying
            </h2>
            <div className="flex justify-center items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm sm:text-base">4.8/5 from 12,543 reviews</span>
            </div>
          </div>

          <div className="relative h-24 sm:h-32 overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="text-base sm:text-lg md:text-xl text-center text-gray-700 dark:text-gray-300 max-w-3xl">
                  "{microTestimonials[currentTestimonial]}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {microTestimonials.slice(0, 5).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial % 5 ? 'bg-primary-500 w-6' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </motion.div>

        {/* Urgency element */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg text-sm sm:text-base">
            <TrendingUp className="w-4 h-4" />
            <span className="font-semibold">
              Only {limitedSpots} VIP spots left at launch price
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}