'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, TrendingUp, Shield, Sparkles } from 'lucide-react'
import GamifiedButton from '../ui/GamifiedButton'
import { heroHeadlines, ctaVariations } from '../../lib/seo-content'

export default function Hero() {
  const [currentHeadline, setCurrentHeadline] = useState(0)
  const [stats, setStats] = useState({
    activeUsers: 1234,
    viewsDelivered: 2400000,
    creatorsJoined: 48500
  })

  // Rotate headlines every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % heroHeadlines.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Simulate live stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        viewsDelivered: prev.viewsDelivered + Math.floor(Math.random() * 100),
        creatorsJoined: prev.creatorsJoined + Math.floor(Math.random() * 2)
      }))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 py-12 sm:py-16 lg:py-20">
      {/* Animated background - simplified for mobile */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20 sm:opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <motion.path
              d="M0,400 Q300,200 600,400 T1200,400 V800 H0 Z"
              fill="url(#gradient1)"
              animate={{
                d: [
                  "M0,400 Q300,200 600,400 T1200,400 V800 H0 Z",
                  "M0,350 Q300,250 600,350 T1200,350 V800 H0 Z",
                  "M0,400 Q300,200 600,400 T1200,400 V800 H0 Z"
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Floating elements - reduced for mobile */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-400/20 blur-xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            style={{
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span className="hidden sm:inline">48,522+ creators growing together</span>
              <span className="sm:hidden">48,522+ creators</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block sm:inline">
              Creators Growing
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="block sm:inline mt-1 sm:mt-0">
              Together for{' '}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                FREE
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed"
          >
            Join <span className="font-bold text-purple-600 dark:text-purple-400">48,522+</span> creators who stopped waiting for the algorithm.{' '}
            <span className="font-semibold block sm:inline mt-2 sm:mt-0">1 coin = 1 guaranteed real view</span> from real humans.
            <span className="block sm:inline mt-2 sm:mt-0">
              Watch videos, earn coins, promote your content.{' '}
            </span>
            <span className="text-purple-600 dark:text-purple-400 font-semibold block sm:inline mt-2 sm:mt-0">
              Get 100 welcome coins instantly!
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-2 sm:px-0"
          >
            {/* Google Play Store Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.vidgro.app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto max-w-xs"
            >
              <motion.div
                className="bg-black hover:bg-gray-800 text-white rounded-xl px-5 py-3.5 sm:px-6 sm:py-4 flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl w-full min-h-[56px] sm:min-h-[60px]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-300">GET IT ON</div>
                  <div className="text-base sm:text-lg font-semibold -mt-0.5">Google Play</div>
                </div>
              </motion.div>
            </a>
            
            <GamifiedButton
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto max-w-xs min-h-[56px] sm:min-h-[60px] text-base sm:text-lg px-6 sm:px-8"
            >
              See How It Works
            </GamifiedButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>YouTube TOS Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500 flex-shrink-0" />
              <span>Real Human Views</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-500 flex-shrink-0" />
              <span>24-48 Hour Results</span>
            </div>
          </motion.div>

          {/* Live stats ticker */}
          <motion.div
            className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="grid grid-cols-3 gap-2 sm:gap-6">
              <div className="text-center">
                <motion.div
                  className="text-lg sm:text-3xl font-bold text-indigo-600 mb-1"
                  key={stats.activeUsers}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  {stats.activeUsers.toLocaleString()}
                </motion.div>
                <div className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400">Active Now</div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full mx-auto mt-1 sm:mt-2 animate-pulse" />
              </div>
              
              <div className="text-center">
                <motion.div
                  className="text-lg sm:text-3xl font-bold text-green-600 mb-1"
                  key={stats.viewsDelivered}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  {(stats.viewsDelivered / 1000000).toFixed(1)}M+
                </motion.div>
                <div className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400">Views Delivered</div>
              </div>
              
              <div className="text-center">
                <motion.div
                  className="text-lg sm:text-3xl font-bold text-purple-600 mb-1"
                  key={stats.creatorsJoined}
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.3 }}
                >
                  {(stats.creatorsJoined / 1000).toFixed(0)}K+
                </motion.div>
                <div className="text-[10px] sm:text-sm text-gray-600 dark:text-gray-400">Creators Joined</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
