const crypto = require('crypto');
const webpack = require('webpack');

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
    optimizePackageImports: ['lucide-react', 'framer-motion', 'gsap'],
    gzipSize: false,
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true,
  },
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },
  env: {
    NEXT_TELEMETRY_DISABLED: '1',
  },
  // Optimize production builds
  productionBrowserSourceMaps: false,
  // Optimize bundle size
  webpack: (config, { isServer, dev }) => {
    // Add IgnorePlugin to exclude polyfills
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^core-js/,
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /^regenerator-runtime/,
      })
    );

    // Block all polyfills via externals (only for client-side)
    if (!isServer) {
      config.externals = [
        ...(Array.isArray(config.externals) ? config.externals : [config.externals]).filter(Boolean),
        function ({ request }, callback) {
          if (/^core-js/.test(request) || /^regenerator-runtime/.test(request)) {
            return callback(null, 'commonjs ' + request);
          }
          callback();
        }
      ];
    }

    if (!dev && !isServer) {
      // Aggressive tree shaking and optimization
      config.optimization = {
        ...config.optimization,
        sideEffects: false,
        usedExports: true,
        providedExports: true,
        concatenateModules: true,
        flagIncludedChunks: true,
        splitChunks: {
          chunks: 'all',
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              name: 'framework',
              chunks: 'all',
              test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test(module) {
                return module.size() > 50000 &&
                  /node_modules[/\\]/.test(module.identifier());
              },
              name(module) {
                const hash = crypto.createHash('sha1');
                hash.update(module.identifier());
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
              maxSize: 244000,
            },
            shared: {
              name(module, chunks) {
                return crypto
                  .createHash('sha1')
                  .update(chunks.reduce((acc, chunk) => acc + chunk.name, ''))
                  .digest('hex') + (isServer ? '-server' : '');
              },
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
            },
          },
        },
      };

      // Remove unused CSS
      config.optimization.minimizer = config.optimization.minimizer || [];
      
      // Exclude legacy polyfills completely
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js': false,
        'core-js-pure': false,
        'regenerator-runtime': false,
        '@swc/helpers': false,
      };

      // Further optimize for modern browsers
      config.resolve.fallback = {
        ...config.resolve.fallback,
        'core-js/modules/es.array.at': false,
        'core-js/modules/es.array.flat': false,
        'core-js/modules/es.array.flat-map': false,
        'core-js/modules/es.object.from-entries': false,
        'core-js/modules/es.object.has-own': false,
        'core-js/modules/es.string.trim-end': false,
        'core-js/modules/es.string.trim-start': false,
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
