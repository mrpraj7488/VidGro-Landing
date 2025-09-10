'use client'

import { faqVariations } from '@/lib/seo-content'

export default function JsonLD() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VidGro",
    "url": "https://vidgro.app",
    "logo": "https://vidgro.app/logo.png",
    "description": "The creator economy platform for real YouTube growth. Join 50,000+ creators getting real views from real people.",
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
    "description": "Watch videos, earn coins, promote your content. 100% safe, YouTube compliant platform for creator growth.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "12543",
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
      "Real creator community",
      "Coin-based promotion system",
      "YouTube compliant growth",
      "Advanced analytics",
      "Community engagement tools"
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
    "name": "YouTube Growth Platform",
    "provider": {
      "@type": "Organization",
      "name": "VidGro"
    },
    "description": "Community-powered YouTube growth platform where creators help creators get discovered",
    "serviceType": "Social Media Growth",
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "VidGro Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Free Creator Plan"
          },
          "price": "0",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Creator Plan"
          },
          "price": "9.99",
          "priceCurrency": "USD"
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