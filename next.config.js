const crypto = require('crypto');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'framer-motion', 'gsap'],
    gzipSize: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
  // Target modern browsers only to remove polyfills
  target: 'serverless',
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Optimize bundle size
  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      // Aggressive tree shaking and optimization
      config.optimization = {
        ...config.optimization,
        sideEffects: false,
        usedExports: true,
        providedExports: true,
        concatenateModules: true,
        flagIncludedChunks: true,
        occurrenceOrder: true,
        sideEffects: false,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            framework: {
              chunks: 'all',
              name: 'framework',
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test(module) {
                return module.size() > 160000 && /node_modules[/\\]/.test(module.identifier());
              },
              name(module) {
                const hash = crypto.createHash('sha1');
                hash.update(module.libIdent ? module.libIdent({ context: config.context }) : module.identifier());
                return hash.digest('hex').substring(0, 8);
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: 'commons',
              minChunks: 2,
              priority: 20,
            },
            shared: {
              name: false,
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
            },
          },
        },
      };

      // Remove unused CSS
      config.optimization.minimizer = config.optimization.minimizer || [];
      
      // Exclude polyfills and legacy code
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js': false,
        'regenerator-runtime': false,
      };
    }
    
    return config;
  },
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        },
        {
          key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.pexels.com; connect-src 'self';"
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains'
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()'
        }
      ]
    }
  ]
}

module.exports = nextConfig
