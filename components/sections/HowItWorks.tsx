'use client'

import { motion } from 'framer-motion'
import { Play, Coins, TrendingUp, Users, ArrowRight } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "Watch & Earn Coins",
      description: "Watch videos from fellow creators for at least 30 seconds and earn 1 coin per video. No daily limits - earn unlimited coins!",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Multiple Ways to Earn",
      description: "Earn coins by watching videos, referring friends, daily bonuses, achievements, and optional ad viewing. Unlimited earning potential!",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Get Real Views",
      description: "Spend coins to promote your videos. 1 coin = 1 guaranteed real view from engaged creators. See results within 24 hours!",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            How VidGro Works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Stop waiting for the algorithm to notice you. Take control with the creator-to-creator growth system. 
            Watch videos, earn coins, promote your content - all completely free.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-indigo-200 to-indigo-300 dark:from-indigo-700 dark:to-indigo-600 -translate-y-1/2 z-0" />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative z-10"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className={`${step.bgColor} rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden group hover:shadow-xl transition-all duration-300`}>
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                  
                  {/* Step number */}
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-300">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-700 mb-1">2,100</div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center mt-6 sm:mt-8">
                      <ArrowRight className="w-6 h-6 text-primary-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">The Results Speak for Themselves</h3>
            <p className="text-base sm:text-lg lg:text-xl opacity-90">Real creators getting real results every day</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: "2.5M+", label: "Views Delivered", icon: <TrendingUp className="w-6 h-6" /> },
              { number: "50K+", label: "Active Creators", icon: <Users className="w-6 h-6" /> },
              { number: "500K+", label: "Videos Promoted", icon: <Play className="w-6 h-6" /> },
              { number: "95%", label: "Success Rate", icon: <Coins className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex justify-center mb-2 opacity-75 text-sm sm:text-base">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base lg:text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}