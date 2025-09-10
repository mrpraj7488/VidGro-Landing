'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Star, Zap, Crown } from 'lucide-react'

interface Milestone {
  percentage: number
  icon: React.ReactNode
  title: string
  reward: string
  unlocked: boolean
}

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      percentage: 25,
      icon: <Star className="w-4 h-4" />,
      title: "Explorer",
      reward: "+10 coins",
      unlocked: false
    },
    {
      percentage: 50,
      icon: <Zap className="w-4 h-4" />,
      title: "Engaged",
      reward: "+25 coins",
      unlocked: false
    },
    {
      percentage: 75,
      icon: <Trophy className="w-4 h-4" />,
      title: "Committed",
      reward: "+50 coins",
      unlocked: false
    },
    {
      percentage: 100,
      icon: <Crown className="w-4 h-4" />,
      title: "Champion",
      reward: "+100 coins",
      unlocked: false
    }
  ])

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMilestones(prev => 
      prev.map(milestone => ({
        ...milestone,
        unlocked: scrollProgress >= milestone.percentage
      }))
    )
  }, [scrollProgress])

  return (
    <div className="fixed top-4 right-4 z-40 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200 min-w-[200px]">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700">Progress</span>
        <span className="text-sm font-bold text-primary-600">{Math.round(scrollProgress)}%</span>
      </div>

      {/* Progress bar */}
      <div className="relative h-2 bg-gray-200 rounded-full mb-4">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Milestones */}
      <div className="space-y-2">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            className={`flex items-center gap-2 p-2 rounded-lg transition-all duration-300 ${
              milestone.unlocked 
                ? 'bg-primary-50 text-primary-700 border border-primary-200' 
                : 'bg-gray-50 text-gray-500'
            }`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              scale: milestone.unlocked ? [1, 1.05, 1] : 1
            }}
            transition={{ 
              delay: index * 0.1,
              scale: { duration: 0.3 }
            }}
          >
            <div className={`p-1 rounded-full ${
              milestone.unlocked ? 'bg-primary-100' : 'bg-gray-200'
            }`}>
              {milestone.icon}
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium">{milestone.title}</div>
              <div className="text-xs opacity-75">{milestone.reward}</div>
            </div>
            {milestone.unlocked && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* XP indicator */}
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-600">XP Earned</span>
          <span className="font-bold text-primary-600">
            {Math.round(scrollProgress * 10)} XP
          </span>
        </div>
      </div>
    </div>
  )
}