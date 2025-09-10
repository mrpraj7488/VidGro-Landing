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
  Globe
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% YouTube Safe",
      description: "Fully compliant with YouTube's terms of service. No bots, no fake accounts, just real creators.",
      color: "from-green-500 to-green-600",
      size: "large"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real Creator Community",
      description: "Connect with genuine creators who share your passion for quality content.",
      color: "from-blue-500 to-blue-600",
      size: "medium"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Organic Growth",
      description: "Sustainable growth that builds real audience engagement over time.",
      color: "from-purple-500 to-purple-600",
      size: "medium"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Results",
      description: "Start seeing views within minutes of promoting your content.",
      color: "from-yellow-500 to-yellow-600",
      size: "small"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Quality Engagement",
      description: "Get meaningful comments and feedback from real viewers.",
      color: "from-red-500 to-red-600",
      size: "small"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Targeted Audience",
      description: "Reach creators interested in your specific niche and content type.",
      color: "from-indigo-500 to-indigo-600",
      size: "medium"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Achievement System",
      description: "Unlock badges and rewards as you grow your presence in the community.",
      color: "from-orange-500 to-orange-600",
      size: "small"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Features",
      description: "Access advanced analytics, priority promotion, and exclusive creator tools.",
      color: "from-pink-500 to-pink-600",
      size: "large"
    }
  ]

  const stats = [
    { icon: <Eye className="w-5 h-5" />, label: "Average View Rate", value: "87%" },
    { icon: <MessageCircle className="w-5 h-5" />, label: "Engagement Rate", value: "23%" },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Retention Rate", value: "94%" },
    { icon: <Globe className="w-5 h-5" />, label: "Global Reach", value: "150+ Countries" }
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to Grow
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful features designed to help creators discover each other and build 
            genuine communities around quality content.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
            {features.map((feature, index) => {
              const gridClasses = {
                large: "md:col-span-2 md:row-span-2",
                medium: "md:col-span-2",
                small: "md:col-span-1"
              }

              return (
                <motion.div
                  key={index}
                  className={`
                    ${gridClasses[feature.size as keyof typeof gridClasses]}
                    bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 
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
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Performance Stats */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Platform Performance
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See why creators choose VidGro for sustainable growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                  <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
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