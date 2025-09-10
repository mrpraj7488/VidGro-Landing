'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Users, TrendingUp, Shield } from 'lucide-react'
import GamifiedButton from '@/components/ui/GamifiedButton'
import { heroHeadlines, ctaVariations } from '@/lib/seo-content'

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234F46E5" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse" />
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
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent">
            {heroHeadlines[currentHeadline]}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Join <span className="font-semibold text-primary-600">{stats.creatorsJoined.toLocaleString()}+</span> creators 
          getting real views from real people. Watch videos, earn coins, promote your content. 
          <span className="font-semibold"> 100% safe, YouTube compliant.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <GamifiedButton
            variant="primary"
            size="lg"
            coinReward={200}
            className="min-w-[280px]"
          >
            {ctaVariations.primary[0]} ✨
          </GamifiedButton>
          
          <GamifiedButton
            variant="secondary"
            size="lg"
            className="min-w-[200px]"
          >
            <Play className="w-5 h-5 mr-2" />
            {ctaVariations.secondary[0]}
          </GamifiedButton>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span>100% YouTube Safe</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span>Real Creators Only</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-purple-500" />
            <span>Proven Results</span>
          </div>
        </motion.div>

        {/* Live stats ticker */}
        <motion.div
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-primary-600 mb-1"
                key={stats.activeUsers}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                {stats.activeUsers.toLocaleString()}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400">Active Users</div>
              <div className="w-2 h-2 bg-green-500 rounded-full mx-auto mt-2 animate-pulse" />
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-secondary-600 mb-1"
                key={stats.viewsDelivered}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                {(stats.viewsDelivered / 1000000).toFixed(1)}M+
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400">Views Delivered</div>
            </div>
            
            <div className="text-center">
              <motion.div
                className="text-3xl font-bold text-accent-600 mb-1"
                key={stats.creatorsJoined}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.3 }}
              >
                {(stats.creatorsJoined / 1000).toFixed(0)}K+
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400">Creators Joined</div>
            </div>
          </div>
        </motion.div>

        {/* Demo video placeholder */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.button>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-sm opacity-75">Watch how it works</div>
              <div className="text-lg font-semibold">2:30 Demo Video</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}