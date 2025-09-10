'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Zap, 
  Heart, 
  Target, 
  Award, 
  Sparkles,
  Eye,
  MessageCircle,
  BarChart3,
  Globe,
  Coins
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Coins className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Spent Coin = Get Real View",
      description: "Simple, transparent system. Every coin you earn becomes a guaranteed real view on your video from engaged VidGro creators - no bots, no fake accounts.",
      color: "from-green-500 to-green-600",
      size: "large"
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Watch & Earn System",
      description: "Watch 30+ seconds = coins in your wallet. Longer videos = bigger rewards. No daily limits - watch more, earn more, promote more.",
      color: "from-blue-500 to-blue-600",
      size: "medium"
    },
    {
      icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Referral Rewards",
      description: "Invite friends → both get coins. More friends = more free promotions. Build your network while growing your coin balance.",
      color: "from-purple-500 to-purple-600",
      size: "medium"
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Instant Results",
      description: "Stop waiting for the algorithm. Launch campaigns anytime with guaranteed delivery. See your view count grow within 24 hours.",
      color: "from-yellow-500 to-yellow-600",
      size: "small"
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "YouTube TOS Compliant",
      description: "100% safe for your channel. Real engagement from real creators helps the algorithm discover your content naturally.",
      color: "from-red-500 to-red-600",
      size: "small"
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Free Coin Opportunities",
      description: "Daily bonuses, achievements, referrals, and watch short ads for bonus coins. Multiple ways to earn - always free.",
      color: "from-indigo-500 to-indigo-600",
      size: "medium"
    },
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Gamified Experience",
      description: "Progress bars, achievements, streaks, and leaderboards keep you motivated while your channel explodes with growth.",
      color: "from-pink-500 to-pink-600",
      size: "small"
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Advanced Analytics",
      description: "Track real-time views, engagement metrics, completion rates, and campaign performance. Every coin = delivered view guaranteed.",
      color: "from-orange-500 to-orange-600",
      size: "large"
    }
  ]

  const stats = [
    { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Active Creators", value: "50K+" },
    { icon: <Coins className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Coins Earned", value: "2.5M+" },
    { icon: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Videos Promoted", value: "500K+" },
    { icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />, label: "Success Rate", value: "95%" }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
            Stop Waiting for the Algorithm — Take Control
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2 leading-relaxed">
            Join 50,000+ creators who stopped waiting and started growing. Real views from real creators, 
            guaranteed results, unlimited earning potential - all completely FREE forever.
          </p>
        </motion.div>

        {/* Bento Grid - Mobile Optimized */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {features.map((feature, index) => {
              return (
                <motion.div
                  key={index}
                  className={`
                    ${feature.size === 'large' ? 'sm:col-span-2 lg:col-span-2' : ''}
                    bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 
                    shadow-lg border border-gray-200 dark:border-gray-700 
                    hover:shadow-xl transition-all duration-300 group relative overflow-hidden
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Stats Section - Mobile Optimized */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
