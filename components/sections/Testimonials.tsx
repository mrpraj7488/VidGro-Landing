'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Play, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  const testimonials = [
    {
      name: "Alex Chen",
      channel: "TechReviews Pro",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "VidGro completely changed my YouTube game. I went from 50 views per video to consistently hitting 2K+. The community here actually cares about quality content.",
      rating: 5,
      stats: { before: "50", after: "2,100", timeframe: "3 weeks" },
      verified: true
    },
    {
      name: "Sarah Martinez",
      channel: "Cooking with Sarah",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "I was skeptical at first, but the results speak for themselves. Real people watching, real engagement, and my subscriber count has tripled in just 2 months!",
      rating: 5,
      stats: { before: "120", after: "1,800", timeframe: "2 months" },
      verified: true
    },
    {
      name: "Mike Johnson",
      channel: "Fitness Journey",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "The feedback I get from the VidGro community has made me a better creator. It's not just about views - it's about connecting with people who genuinely appreciate your work.",
      rating: 5,
      stats: { before: "200", after: "3,500", timeframe: "6 weeks" },
      verified: true
    },
    {
      name: "Emma Wilson",
      channel: "Art & Design Daily",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Finally found a platform that values creativity over clickbait. My art tutorials are reaching the right audience, and I'm building a community of fellow artists.",
      rating: 5,
      stats: { before: "80", after: "1,400", timeframe: "1 month" },
      verified: true
    },
    {
      name: "David Kim",
      channel: "Gaming Insights",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "VidGro helped me break out of the 'small creator' bubble. The algorithm finally noticed my content, and now I'm getting organic growth beyond the platform too.",
      rating: 5,
      stats: { before: "150", after: "4,200", timeframe: "2 months" },
      verified: true
    },
    {
      name: "Lisa Thompson",
      channel: "Travel Diaries",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "As a travel vlogger, getting initial views is tough. VidGro gave my videos the boost they needed. Now sponsors are reaching out to me!",
      rating: 5,
      stats: { before: "90", after: "2,800", timeframe: "5 weeks" },
      verified: true
    }
  ]

  // Check if mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-advance testimonials - always on
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const increment = isMobile ? 1 : 2
        return (prev + increment) % testimonials.length
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length, isMobile])

  const nextTestimonials = () => {
    const increment = isMobile ? 1 : 2
    setCurrentIndex((prev) => (prev + increment) % testimonials.length)
  }

  const prevTestimonials = () => {
    const increment = isMobile ? 1 : 2
    setCurrentIndex((prev) => (prev - increment + testimonials.length) % testimonials.length)
  }

  // Get current testimonials - single on mobile, pair on larger screens
  const getCurrentTestimonials = () => {
    const first = testimonials[currentIndex]
    if (isMobile) {
      return [first] // Single card on mobile
    }
    const second = testimonials[(currentIndex + 1) % testimonials.length]
    return [first, second] // Two cards on larger screens
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Success Stories from Real Creators
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Join thousands who transformed their YouTube journey with VidGro
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Testimonials Grid - 2 cards per row on all screens */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                {getCurrentTestimonials().map((testimonial, idx) => (
                  <motion.div
                    key={`${currentIndex}-${idx}`}
                    className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {/* Header with Avatar and Info */}
                    <div className="flex items-start gap-3 sm:gap-4 mb-4">
                      <div className="relative flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover"
                          loading="lazy"
                        />
                        {testimonial.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                          {testimonial.channel}
                        </p>
                        <div className="flex gap-0.5 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="mb-4">
                      <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-200 dark:text-indigo-700 mb-2" />
                      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-750 rounded-lg sm:rounded-xl p-3 sm:p-4">
                      <div className="text-center">
                        <div className="text-base sm:text-lg lg:text-xl font-bold text-red-600">
                          {testimonial.stats.before}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Before</div>
                      </div>
                      <div className="text-center border-x border-gray-300 dark:border-gray-600">
                        <div className="text-base sm:text-lg lg:text-xl font-bold text-green-600">
                          {testimonial.stats.after}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">After</div>
                      </div>
                      <div className="text-center">
                        <div className="text-base sm:text-lg lg:text-xl font-bold text-indigo-600">
                          {testimonial.stats.timeframe}
                        </div>
                        <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-400">Time</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonials}
              aria-label="Previous testimonials"
              className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextTestimonials}
              aria-label="Next testimonials"
              className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 hover:scale-110 z-10"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Testimonial indicators - adjust for mobile vs desktop */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {Array.from({ length: isMobile ? testimonials.length : Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const multiplier = isMobile ? 1 : 2
                  setCurrentIndex(index * multiplier)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`min-w-[44px] min-h-[44px] rounded-full transition-all duration-300 flex items-center justify-center ${
                  (isMobile ? currentIndex : Math.floor(currentIndex / 2)) === index
                    ? 'bg-indigo-500'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              >
                <div className={`rounded-full transition-all duration-300 ${
                  (isMobile ? currentIndex : Math.floor(currentIndex / 2)) === index
                    ? 'bg-white w-4 h-2'
                    : 'bg-current w-2 h-2'
                }`} />
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
