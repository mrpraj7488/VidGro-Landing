'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Coins, Sparkles } from 'lucide-react'
import CoinAnimation from './CoinAnimation'
import FloatingCoins from './FloatingCoins'

interface GamifiedButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'vip'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  coinReward?: number
  className?: string
}

export default function GamifiedButton({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  coinReward = 0,
  className = ''
}: GamifiedButtonProps) {
  const [isClicked, setIsClicked] = useState(false)
  const [showCoinAnimation, setShowCoinAnimation] = useState(false)
  const [triggerFloatingCoins, setTriggerFloatingCoins] = useState(false)

  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-primary-500/25',
    secondary: 'bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-500 shadow-lg',
    vip: 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:via-yellow-600 hover:to-yellow-700 text-white shadow-lg hover:shadow-yellow-500/25'
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm min-h-[36px]',
    md: 'px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base min-h-[40px] sm:min-h-[44px]',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg min-h-[44px] sm:min-h-[48px]'
  }

  const handleClick = () => {
    if (disabled) return

    setIsClicked(true)
    
    if (coinReward > 0) {
      setShowCoinAnimation(true)
      setTriggerFloatingCoins(true)
    }

    onClick?.()

    // Reset click state
    setTimeout(() => setIsClicked(false), 200)
  }

  return (
    <>
      <motion.button
        className={`
          relative overflow-hidden rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto
          ${variants[variant]}
          ${sizes[size]}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          ${className}
        `}
        onClick={handleClick}
        disabled={disabled}
        whileHover={{ 
          scale: disabled ? 1 : 1.05,
          boxShadow: disabled ? undefined : "0 20px 40px rgba(0, 0, 0, 0.1)"
        }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        animate={{
          scale: isClicked ? [1, 0.95, 1.05, 1] : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear"
          }}
        />

        {/* Button content */}
        <div className="relative flex items-center justify-center gap-2">
          {variant === 'vip' && <Sparkles className="w-4 h-4" />}
          {coinReward > 0 && <Coins className="w-3 h-3 sm:w-4 sm:h-4" />}
          {children}
        </div>

        {/* Pulse effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          initial={{ scale: 1, opacity: 0 }}
          whileHover={{ 
            scale: 1.1, 
            opacity: variant === 'primary' ? 0.1 : 0.05,
            transition: { duration: 0.3 }
          }}
          style={{
            background: variant === 'primary' ? '#4F46E5' : 
                       variant === 'vip' ? '#F59E0B' : '#EC4899'
          }}
        />
      </motion.button>

      {/* Coin reward animation */}
      {showCoinAnimation && (
        <CoinAnimation
          count={coinReward}
          onAnimationComplete={() => setShowCoinAnimation(false)}
        />
      )}

      {/* Floating coins effect */}
      <FloatingCoins
        trigger={triggerFloatingCoins}
        onCollect={() => setTriggerFloatingCoins(false)}
      />
    </>
  )
}