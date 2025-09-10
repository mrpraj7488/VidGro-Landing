'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { coinPhysics, particleConfig } from '@/lib/animations'

interface Coin {
  id: string
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  collected: boolean
}

interface FloatingCoinsProps {
  trigger?: boolean
  onCollect?: (count: number) => void
  magnetTarget?: { x: number; y: number } | null
}

export default function FloatingCoins({ trigger, onCollect, magnetTarget }: FloatingCoinsProps) {
  const [coins, setCoins] = useState<Coin[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (trigger) {
      generateCoins()
    }
  }, [trigger])

  const generateCoins = () => {
    const newCoins: Coin[] = []
    
    for (let i = 0; i < particleConfig.count; i++) {
      newCoins.push({
        id: `coin-${Date.now()}-${i}`,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight + 50,
        vx: Math.random() * (particleConfig.velocities.x.max - particleConfig.velocities.x.min) + particleConfig.velocities.x.min,
        vy: Math.random() * (particleConfig.velocities.y.max - particleConfig.velocities.y.min) + particleConfig.velocities.y.min,
        size: particleConfig.sizes[Math.floor(Math.random() * particleConfig.sizes.length)],
        color: particleConfig.colors[Math.floor(Math.random() * particleConfig.colors.length)],
        collected: false
      })
    }

    setCoins(newCoins)
    
    // Start physics simulation
    const interval = setInterval(() => {
      setCoins(prevCoins => {
        const updatedCoins = prevCoins.map(coin => {
          if (coin.collected) return coin

          let { x, y, vx, vy } = coin

          // Apply gravity
          vy += coinPhysics.gravity

          // Apply magnet effect (mouse or target)
          const target = magnetTarget || mousePos
          const dx = target.x - x
          const dy = target.y - y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < coinPhysics.magnetRadius && distance > 0) {
            const force = coinPhysics.magnetStrength / distance
            vx += (dx / distance) * force
            vy += (dy / distance) * force
          }

          // Update position
          x += vx
          y += vy

          // Apply friction
          vx *= coinPhysics.friction
          vy *= coinPhysics.friction

          // Bounce off walls
          if (x <= 0 || x >= window.innerWidth) {
            vx *= -coinPhysics.bounce
            x = Math.max(0, Math.min(window.innerWidth, x))
          }

          // Collect coin if close to target
          if (distance < 30) {
            return { ...coin, collected: true }
          }

          // Remove if off screen
          if (y > window.innerHeight + 100) {
            return { ...coin, collected: true }
          }

          return { ...coin, x, y, vx, vy }
        })

        // Remove collected coins
        const activeCoins = updatedCoins.filter(coin => !coin.collected)
        const collectedCount = updatedCoins.length - activeCoins.length

        if (collectedCount > 0 && onCollect) {
          onCollect(collectedCount)
        }

        if (activeCoins.length === 0) {
          clearInterval(interval)
        }

        return activeCoins
      })
    }, 16) // ~60fps

    // Cleanup after 10 seconds
    setTimeout(() => {
      clearInterval(interval)
      setCoins([])
    }, 10000)
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {coins.map(coin => (
          <motion.div
            key={coin.id}
            className="absolute rounded-full shadow-lg"
            style={{
              left: coin.x,
              top: coin.y,
              width: coin.size,
              height: coin.size,
              background: `linear-gradient(135deg, ${coin.color}, ${coin.color}dd)`,
              boxShadow: `0 0 ${coin.size / 2}px ${coin.color}66`
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: 1, 
              rotate: 360,
              transition: { duration: 0.3 }
            }}
            exit={{ 
              scale: 0, 
              opacity: 0,
              transition: { duration: 0.2 }
            }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/30 to-transparent" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}