'use client'

import { motion } from 'framer-motion'
import { Check, Crown, Zap, Star, Gift } from 'lucide-react'
import GamifiedButton from '@/components/ui/GamifiedButton'
import { pricingPlans } from '@/lib/seo-content'

export default function Pricing() {
  const faqs = [
    {
      q: "How does the coin system work?",
      a: "Simple! Watch videos to earn coins (1 coin per 30-second watch), then spend coins to promote your videos (1 coin = 1 real view). You start with 200 FREE coins!"
    },
    {
      q: "What are the VIP benefits?",
      a: "VIP members get unlimited daily coin earning (no 50-coin limit), 10-15% promotion discounts, priority queue placement, ad-free experience, and premium support."
    },
    {
      q: "How much can I earn from referrals?",
      a: "You earn 400 coins for every friend who joins VidGro and watches their first video. Your friend also gets 200 bonus coins. There's no limit to how many friends you can refer!"
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Start FREE, Upgrade When Ready
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Begin your YouTube growth journey with 200 FREE coins. Upgrade to VIP for unlimited 
            earning potential and exclusive benefits that pay for themselves.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`
                relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border-2 transition-all duration-300
                ${plan.popular 
                  ? 'border-indigo-500 lg:scale-105 shadow-2xl shadow-indigo-500/20' 
                  : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 hover:shadow-2xl'
                }
              `}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {plan.originalPrice}
                  </span>
                  {plan.period !== "Forever" && (
                    <span className="text-gray-600 dark:text-gray-400 ml-2 text-sm sm:text-base">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {plan.description}
                </p>
                {plan.savings && (
                  <div className="mt-2 text-green-600 dark:text-green-400 font-semibold text-xs sm:text-sm">
                    {plan.savings}
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="mb-6 sm:mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <GamifiedButton
                variant={plan.popular ? "vip" : index === 0 ? "secondary" : "primary"}
                size="lg"
                coinReward={plan.coinReward}
                className="w-full"
              >
                {index === 0 ? "Start FREE" : index === 1 ? "Go VIP" : "Go Pro"}
                {plan.coinReward > 0 && (
                  <span className="ml-2 text-sm">
                    (+{plan.coinReward} coins)
                  </span>
                )}
              </GamifiedButton>

              {/* Special offer for VIP */}
              {plan.popular && (
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
                    <Gift className="w-4 h-4" />
                    Launch Special - Save ₹100!
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Money back guarantee */}
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-green-200 dark:border-green-800 text-sm sm:text-base">
            <Star className="w-5 h-5" />
            <span className="font-semibold">3-day money-back guarantee</span>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6 sm:mb-8">
            Common Questions About VidGro
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.q}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}