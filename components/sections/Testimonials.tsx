'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

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
    }
  ]

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Success Stories
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Real creators sharing their real results. See how VidGro has transformed 
            their YouTube journey.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main testimonial display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-gray-600"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-center">
                  {/* Creator info */}
                  <div className="text-center lg:text-left">
                    <div className="relative inline-block mb-4">
                      <Image
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        width={96}
                        height={96}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-lg"
                        loading="lazy"
                      />
                      {testimonials[currentIndex].verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4 text-sm sm:text-base">
                      {testimonials[currentIndex].channel}
                    </p>
                    <div className="flex justify-center lg:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial content */}
                  <div className="lg:col-span-2">
                    <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-indigo-300 dark:text-indigo-600 mb-4" />
                    <blockquote className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                      <div className="text-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-700 mb-1">
                          {testimonials[currentIndex].stats.before}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Before</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700 mb-1">
                          {testimonials[currentIndex].stats.after}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">After</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold text-indigo-700 mb-1">
                          {testimonials[currentIndex].stats.timeframe}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Timeframe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`w-8 h-8 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-indigo-500 w-6'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>

          {/* Auto-play control */}
          <div className="flex justify-center mt-4 sm:mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 text-sm"
            >
              <Play className={`w-4 h-4 ${isAutoPlaying ? 'animate-pulse' : ''}`} />
              <span className="text-sm">
                {isAutoPlaying ? 'Auto-playing' : 'Paused'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}