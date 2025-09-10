'use client'

import { motion } from 'framer-motion'
import { Play, Coins, TrendingUp, Users, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Play className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Watch & Earn Coins",
      description: "Watch videos from fellow creators for at least 30 seconds and earn 1 coin per video. No daily limits - earn unlimited coins!",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      stat: "1 coin/video"
    },
    {
      icon: <Coins className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Multiple Ways to Earn",
      description: "Earn coins by watching videos, referring friends, daily bonuses, achievements, and optional ad viewing. Unlimited earning potential!",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      stat: "5+ ways"
    },
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />,
      title: "Get Real Views",
      description: "Spend coins to promote your videos. 1 coin = 1 guaranteed real view from engaged creators. See results within 24 hours!",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      stat: "24hr delivery"
    }
  ]

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
            How VidGro Works
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2 leading-relaxed">
            Stop waiting for the algorithm to notice you. Take control with the creator-to-creator growth system. 
            Watch videos, earn coins, promote your content - all completely free.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile: 2 cards per row, Desktop: 3 cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-indigo-200 to-indigo-300 dark:from-indigo-700 dark:to-indigo-600 -translate-y-1/2 z-0" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`${step.bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-center relative overflow-hidden group hover:shadow-xl transition-all duration-300 h-full`}>
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-10 sm:-translate-y-12 lg:-translate-y-16 translate-x-10 sm:translate-x-12 lg:translate-x-16" />
                  
                  {/* Step number */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-[10px] sm:text-xs lg:text-sm font-bold text-gray-600 dark:text-gray-300">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Stat highlight */}
                  <div className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-2">
                    {step.stat}
                  </div>

                  {/* Content */}
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed hidden sm:block">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats section - Optimized for mobile */}
        <motion.div
          className="mt-8 sm:mt-12 lg:mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl lg:rounded-3xl p-5 sm:p-6 lg:p-10 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center mb-5 sm:mb-6 lg:mb-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">The Results Speak for Themselves</h3>
            <p className="text-sm sm:text-base lg:text-lg opacity-90">Real creators getting real results every day</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {[
              { number: "2.5M+", label: "Views Delivered", icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { number: "50K+", label: "Active Creators", icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { number: "500K+", label: "Videos Promoted", icon: <Play className="w-5 h-5 sm:w-6 sm:h-6" /> },
              { number: "95%", label: "Success Rate", icon: <Coins className="w-5 h-5 sm:w-6 sm:h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex justify-center mb-1 sm:mb-2 opacity-75">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm lg:text-base opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}