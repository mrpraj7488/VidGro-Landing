'use client'

import { faqVariations } from '../../lib/seo-content'

export default function JsonLD() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VidGro",
    "url": "https://vidgro.app",
    "logo": "https://vidgro.app/logo.png",
    "description": "Revolutionary creator-to-creator YouTube growth platform where 1 coin = 1 guaranteed real view. Join 50,000+ creators earning coins and promoting content.",
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/vidgro",
      "https://instagram.com/vidgro",
      "https://youtube.com/@vidgro"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "support@vidgro.app",
      "availableLanguage": "English"
    }
  }

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "VidGro",
    "url": "https://vidgro.app",
    "applicationCategory": "SocialNetworkingApplication",
    "operatingSystem": "Web Browser",
    "description": "Revolutionary creator platform: watch videos to earn coins, spend coins to get real views. 1 coin = 1 guaranteed human view. Start with 200 FREE coins!",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "15000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "featureList": [
      "1 coin = 1 guaranteed real view",
      "Watch videos to earn coins",
      "200 FREE welcome coins",
      "Referral program (400 coins per friend)",
      "VIP unlimited earning potential",
      "YouTube TOS compliant",
      "Real-time analytics",
      "24-48 hour results"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqVariations.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "VidGro Creator Growth Platform",
    "provider": {
      "@type": "Organization",
      "name": "VidGro"
    },
    "description": "Revolutionary creator-to-creator YouTube growth platform. Watch videos, earn coins, get real views. 1 coin = 1 guaranteed human view.",
    "serviceType": "YouTube Growth Service",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "VidGro Creator Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Creator Plan - 200 FREE Coins"
          },
          "price": "0",
          "priceCurrency": "INR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Creator Plan - Unlimited Earning"
          },
          "price": "299",
          "priceCurrency": "INR"
        }
      ]
    }
  }

  const schemas = [
    organizationSchema,
    webApplicationSchema,
    faqSchema,
    serviceSchema
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  )
}