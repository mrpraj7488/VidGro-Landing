import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vidgro.netlify.app'

  return [
    {
      url: baseUrl,
      lastModified: new Date('2024-12-01'),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
  ]
}
