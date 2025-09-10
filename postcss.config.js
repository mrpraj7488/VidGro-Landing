module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: ['Chrome >= 91', 'Firefox >= 90', 'Safari >= 15', 'Edge >= 91']
    },
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: {
        preset: ['advanced', {
          discardComments: { removeAll: true },
          reduceIdents: true,
          mergeIdents: true,
          discardUnused: true,
          discardOverridden: true,
          normalizeWhitespace: true,
          minifyFontValues: true,
          minifyParams: true,
          minifySelectors: true
        }]
      }
    } : {})
  },
}
