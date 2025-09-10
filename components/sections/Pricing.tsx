'use client'

import { motion } from 'framer-motion'
import { Check, Crown, Zap, Star, Gift } from 'lucide-react'
import GamifiedButton from '@/components/ui/GamifiedButton'

export default function Pricing() {
  const plans = [
    {
      name: "Free Creator",
      price: "Free",
      period: "Forever",
      description: "Perfect for getting started and testing the waters",
      features: [
        "200 free coins to start",
        "Watch videos to earn coins",
        "Promote your content",
        "Basic analytics",
        "Community access",
        "Email support"
      ],
      buttonText: "Start Free",
      buttonVariant: "secondary" as const,
      popular: false,
      coinReward: 200
    },
    {
      name: "VIP Creator",
      price: "$9.99",
      period: "per month",
      description: "For serious creators ready to accelerate their growth",
      features: [
        "Everything in Free",
        "1,000 bonus coins monthly",
        "Priority video promotion",
        "Advanced analytics dashboard",
        "Direct creator messaging",
        "VIP community access",
        "Priority support",
        "Custom promotion targeting",
        "Achievement badges",
        "Early access to new features"
      ],
      buttonText: "Go VIP",
      buttonVariant: "vip" as const,
      popular: true,
      coinReward: 1000,
      savings: "Save 40% vs buying coins"
    },
    {
      name: "Pro Creator",
      price: "$24.99",
      period: "per month",
      description: "For established creators and agencies",
      features: [
        "Everything in VIP",
        "3,000 bonus coins monthly",
        "Multiple channel management",
        "White-label analytics",
        "API access",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced targeting options",
        "Bulk promotion tools",
        "Priority feature requests"
      ],
      buttonText: "Go Pro",
      buttonVariant: "primary" as const,
      popular: false,
      coinReward: 3000,
      savings: "Save 60% vs buying coins"
    }
  ]

  const faqs = [
    {
      q: "Can I really start for free?",
      a: "Absolutely! You get 200 free coins to start promoting your content immediately. No credit card required."
    },
    {
      q: "What happens if I run out of coins?",
      a: "Simply watch more videos from other creators to earn more coins. It's that easy!"
    },
    {
      q: "Can I cancel my VIP subscription anytime?",
      a: "Yes, you can cancel anytime. Your VIP benefits continue until the end of your billing period."
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
            Choose Your Growth Plan
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Start free and upgrade when you're ready to accelerate your growth. 
            All plans include access to our amazing creator community.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {plans.map((plan, index) => (
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
                variant={plan.buttonVariant}
                size="lg"
                coinReward={plan.coinReward}
                className="w-full"
              >
                {plan.buttonText}
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
                    First month 50% off!
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
            <span className="font-semibold">30-day money-back guarantee</span>
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
            Frequently Asked Questions
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