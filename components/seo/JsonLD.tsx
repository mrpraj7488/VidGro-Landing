'use client'

import { faqVariations } from '../../lib/seo-content'

export default function JsonLD() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VidGro",
    "url": "https://vidgro.netlify.app",
    "logo": "https://vidgro.netlify.app/logo.png",
    "description": "Get free YouTube views & subscribers instantly! Revolutionary creator platform where 50,000+ creators earn coins watching videos and get real engagement. 1 coin = 1 guaranteed view from real humans.",
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
    "name": "VidGro - Free YouTube Views & Subscribers",
    "url": "https://vidgro.netlify.app",
    "applicationCategory": "SocialNetworkingApplication",
    "operatingSystem": "Web Browser",
    "description": "Get free YouTube views & subscribers instantly! Watch videos to earn coins, spend coins to get real engagement. 1 coin = 1 guaranteed view from real humans. Join 50,000+ creators growing organically.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "50000",
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
      "Free YouTube views and subscribers",
      "1 coin = 1 guaranteed real view from humans",
      "Watch videos to earn coins organically",
      "100 FREE welcome coins instantly",
      "Referral program (400 coins per friend)",
      "VIP unlimited earning potential",
      "100% YouTube TOS compliant",
      "Real-time analytics dashboard",
      "24-hour delivery guarantee",
      "Organic growth without bots",
      "Creator-to-creator community",
      "Mobile app available"
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
    "description": "Get free YouTube views & subscribers instantly with VidGro! Revolutionary creator-to-creator platform where 50,000+ creators watch videos, earn coins, and get real engagement. 100% organic growth guaranteed.",
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
            "name": "Free Creator Plan - 100 FREE Coins"
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
          "price": "9.99",
          "priceCurrency": "USD"
        }
      ]
    }
  }

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get Free YouTube Views and Subscribers Fast",
    "description": "Learn how to get free YouTube views and subscribers using VidGro's creator-to-creator platform. Earn coins watching videos, get real engagement organically.",
    "image": "https://vidgro.netlify.app/how-to-youtube-growth.jpg",
    "totalTime": "PT5M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "YouTube Channel"
      },
      {
        "@type": "HowToSupply",
        "name": "VidGro Account"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "VidGro Platform"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Sign up for VidGro",
        "text": "Create your free VidGro account and get 100 welcome coins instantly",
        "url": "https://vidgro.netlify.app#signup"
      },
      {
        "@type": "HowToStep",
        "name": "Watch videos to earn coins",
        "text": "Watch other creators' videos to earn coins organically",
        "url": "https://vidgro.netlify.app#how-it-works"
      },
      {
        "@type": "HowToStep",
        "name": "Promote your content",
        "text": "Spend coins to get real views from real humans. 1 coin = 1 guaranteed view",
        "url": "https://vidgro.netlify.app#features"
      }
    ]
  }

  const videoObjectSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "How to Get Free YouTube Views and Subscribers - VidGro Tutorial",
    "description": "Complete tutorial on how to get free YouTube views and subscribers using VidGro platform. Learn organic growth strategies.",
    "thumbnailUrl": "https://vidgro.netlify.app/tutorial-thumbnail.jpg",
    "uploadDate": "2024-01-01T00:00:00+00:00",
    "duration": "PT10M30S",
    "contentUrl": "https://vidgro.netlify.app/tutorial-video.mp4",
    "embedUrl": "https://vidgro.netlify.app/embed/tutorial",
    "interactionStatistic": {
      "@type": "InteractionCounter",
      "interactionType": "https://schema.org/WatchAction",
      "userInteractionCount": 50000
    }
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "YouTube Growth Masterclass - Free Views & Subscribers",
    "description": "Complete course on how to grow your YouTube channel organically, get free views, and increase subscribers using proven strategies.",
    "provider": {
      "@type": "Organization",
      "name": "VidGro",
      "sameAs": "https://vidgro.netlify.app"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT1H",
      "instructor": {
        "@type": "Person",
        "name": "VidGro Growth Expert"
      }
    }
  }

  const schemas = [
    organizationSchema,
    webApplicationSchema,
    faqSchema,
    serviceSchema,
    howToSchema,
    videoObjectSchema,
    courseSchema
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