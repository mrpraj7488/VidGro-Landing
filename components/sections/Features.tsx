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
      icon: <Coins className="w-6 h-6" />,
      title: "1 Coin = 1 Real View",
      description: "Simple, transparent system. Every coin guarantees one real human view from engaged VidGro creators - no bots, no fake accounts.",
      color: "from-green-500 to-green-600",
      size: "large"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Watch & Earn System",
      description: "Earn 1 coin per video you watch (30+ seconds). No daily limits - watch more, earn more, promote more.",
      color: "from-blue-500 to-blue-600",
      size: "medium"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Referral Rewards",
      description: "Invite friends and both earn bonus coins. Build your network while growing your coin balance for more promotions.",
      color: "from-purple-500 to-purple-600",
      size: "medium"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "See your view count grow within 24 hours of promoting your video. Stop waiting, start growing.",
      color: "from-yellow-500 to-yellow-600",
      size: "small"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "YouTube TOS Compliant",
      description: "100% safe for your channel. Real engagement from real creators helps the algorithm discover your content.",
      color: "from-red-500 to-red-600",
      size: "small"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Free Coin Opportunities",
      description: "Multiple ways to earn: daily bonuses, achievements, referrals, and optional ad viewing. Always free.",
      color: "from-indigo-500 to-indigo-600",
      size: "medium"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Gamified Experience",
      description: "Progress bars, achievements, streaks, and leaderboards make growing your channel fun and engaging.",
      color: "from-pink-500 to-pink-600",
      size: "small"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Track real-time views, engagement metrics, completion rates, and campaign performance with detailed insights.",
      color: "from-orange-500 to-orange-600",
      size: "large"
    }
  ]

  const stats = [
    { icon: <Users className="w-5 h-5" />, label: "Active Creators", value: "50,000+" },
    { icon: <Coins className="w-5 h-5" />, label: "Coins Earned", value: "2.5M+" },
    { icon: <TrendingUp className="w-5 h-5" />, label: "Videos Promoted", value: "500K+" },
    { icon: <Award className="w-5 h-5" />, label: "Success Rate", value: "95%" }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Stop Waiting for the Algorithm — Take Control
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Join 50,000+ creators who stopped waiting and started growing. Real views from real creators, 
            guaranteed results, unlimited earning potential - all completely FREE forever.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => {

              return (
                <motion.div
                  key={index}
                  className={`
                    ${feature.size === 'large' ? 'sm:col-span-2 lg:col-span-2' : ''}
                    bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700 
                    hover:shadow-xl transition-all duration-300 group relative overflow-hidden
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-3 sm:mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl sm:rounded-2xl" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Performance Stats */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              VidGro by the Numbers
            </h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              Real stats from our thriving creator community
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
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