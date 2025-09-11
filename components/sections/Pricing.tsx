'use client'

import { motion } from 'framer-motion'
import { Check, Crown, Zap, Star, Gift, Sparkles, TrendingUp, Users } from 'lucide-react'
import GamifiedButton from '../ui/GamifiedButton'

export default function Pricing() {
  const plans = [
    {
      name: "Free Forever",
      price: "$0",
      description: "Perfect for getting started",
      icon: <Gift className="w-5 h-5 sm:w-6 sm:h-6" />,
      features: [
        "200 welcome coins instantly",
        "Earn up to 50 coins daily",
        "Basic analytics dashboard",
        "Community support",
        "Mobile app access"
      ],
      cta: "Start Free",
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "VIP Creator",
      price: "$9.99",
      period: "/month",
      description: "For serious growth",
      icon: <Crown className="w-5 h-5 sm:w-6 sm:h-6" />,
      features: [
        "Everything in Free, plus:",
        "Unlimited daily coin earning",
        "10-15% promotion discounts",
        "Priority queue placement",
        "Ad-free experience",
        "Premium support 24/7",
        "Advanced analytics",
        "Exclusive VIP badge"
      ],
      cta: "Upgrade to VIP",
      popular: true,
      color: "from-purple-500 to-pink-500"
    }
  ]

  const faqs = [
    {
      q: "How does the coin system work?",
      a: "Simple! Watch videos to earn coins, spend coins to promote your videos. You start with 100 FREE coins!"
    },
    {
      q: "What are the VIP benefits?",
      a: "VIP members get unlimited daily coin earning (no 50-coin limit), 10-15% promotion discounts, priority queue placement, ad-free experience, and premium support."
    },
    {
      q: "How much can I earn from referrals?",
      a: "You earn 400 coins for every friend who joins VidGro and watches their first video. Your friend also gets 200 bonus coins. There's no limit to how many friends you can refer!"
    },
    {
      q: "Is it really safe for my YouTube channel?",
      a: "Absolutely! VidGro is 100% YouTube TOS compliant. We only provide real views from real creators - no bots, no fake accounts. Your channel stays safe while growing naturally."
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
            Start FREE, Upgrade When Ready
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2 leading-relaxed">
            Begin your YouTube growth journey with 200 FREE coins. Upgrade to VIP for unlimited 
            earning potential and exclusive benefits that pay for themselves.
          </p>
        </motion.div>

        {/* Pricing Cards - 2 cards side by side on all screens */}
        <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative ${plan.popular ? 'scale-100 sm:scale-105' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  plan.popular ? 'border-purple-500' : 'border-gray-200 dark:border-gray-700'
                } h-full flex flex-col`}>
                  
                  {/* Plan Header */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center text-white shadow-lg`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3">
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <GamifiedButton
                    variant={plan.popular ? "primary" : "secondary"}
                    size="lg"
                    className="w-full min-h-[48px] sm:min-h-[56px] text-sm sm:text-base"
                  >
                    {plan.cta}
                  </GamifiedButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Money back guarantee */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-green-200 dark:border-green-800 text-xs sm:text-sm lg:text-base">
            <Star className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold">3-day money-back guarantee</span>
          </div>
        </motion.div>

        {/* FAQ Section - 2 columns on larger screens */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 dark:text-white mb-6 sm:mb-8">
            Common Questions About VidGro
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-start gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed pl-6 sm:pl-7">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
