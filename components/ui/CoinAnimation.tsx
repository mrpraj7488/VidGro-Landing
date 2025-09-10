'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface CoinAnimationProps {
  count: number
  onAnimationComplete?: () => void
  size?: 'sm' | 'md' | 'lg'
}

export default function CoinAnimation({ count, onAnimationComplete, size = 'md' }: CoinAnimationProps) {
  const [isVisible, setIsVisible] = useState(true)

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const handleAnimationComplete = () => {
    setIsVisible(false)
    onAnimationComplete?.()
  }

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        onAnimationComplete={handleAnimationComplete}
        transition={{ duration: 0.5, ease: "backOut" }}
      >
        <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-full shadow-2xl">
          <motion.div
            className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-lg`}
            animate={{ 
              rotateY: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/40 to-transparent" />
          </motion.div>
          
          <motion.span
            className="font-bold text-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            +{count} coins
          </motion.span>
        </div>

        {/* Sparkle effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ 
              scale: 0,
              x: 0,
              y: 0,
              opacity: 1
            }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos(i * 45 * Math.PI / 180) * 60,
              y: Math.sin(i * 45 * Math.PI / 180) * 60,
              opacity: [1, 1, 0]
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}