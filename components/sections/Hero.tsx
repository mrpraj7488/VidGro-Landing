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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Sine wave animation */}
        <div className="absolute inset-0 opacity-30">
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
            <motion.path
              d="M0,500 Q300,300 600,500 T1200,500 V800 H0 Z"
              fill="url(#gradient2)"
              animate={{
                d: [
                  "M0,500 Q300,300 600,500 T1200,500 V800 H0 Z",
                  "M0,450 Q300,350 600,450 T1200,450 V800 H0 Z",
                  "M0,500 Q300,300 600,500 T1200,500 V800 H0 Z"
                ]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.05" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.03" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-400/20 blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* Main headline with rotation */}
        <motion.h1
          key={currentHeadline}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display mb-4 sm:mb-6 text-balance leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            {heroHeadlines[currentHeadline]}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Join <span className="font-semibold text-indigo-600">{stats.creatorsJoined.toLocaleString()}+</span> creators 
          who stopped waiting for the algorithm. <span className="font-semibold">1 coin = 1 guaranteed real view</span> from real humans. 
          Watch videos, earn coins, promote your content. <span className="font-semibold">Get 100 welcome coins instantly!</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {/* Google Play Store Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.vidgro.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:min-w-[280px] sm:w-auto"
          >
            <motion.div
              className="bg-black hover:bg-gray-800 text-white rounded-lg px-6 py-3 flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300">GET IT ON</div>
                <div className="text-lg font-semibold -mt-1">Google Play</div>
              </div>
            </motion.div>
          </a>
          
          <GamifiedButton
            variant="secondary"
            size="lg"
            className="w-full sm:min-w-[200px] sm:w-auto"
          >
            See How It Works
          </GamifiedButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-8 sm:mb-12 text-xs sm:text-sm text-gray-600 dark:text-gray-400 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span>YouTube TOS Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span>Real Human Views</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-purple-500" />
            <span>24-48 Hour Results</span>
          </div>
        </motion.div>

        {/* Live stats ticker */}
        <motion.div
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center">
              <motion.div
                className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-1"
                key={stats.activeUsers}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                {stats.activeUsers.toLocaleString()}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Active Now</div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full mx-auto mt-2 animate-pulse" />
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-2xl sm:text-3xl font-bold text-green-600 mb-1"
                key={stats.viewsDelivered}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                {(stats.viewsDelivered / 1000000).toFixed(1)}M+
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Views Delivered</div>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1"
                key={stats.creatorsJoined}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                {(stats.creatorsJoined / 1000).toFixed(0)}K+
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Creators Joined</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}