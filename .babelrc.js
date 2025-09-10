module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {
          targets: {
            chrome: '91',
            firefox: '90',
            safari: '15',
            edge: '91'
          },
          useBuiltIns: false,
          modules: false,
          exclude: [
            'es.array.at',
            'es.array.flat',
            'es.array.flat-map',
            'es.object.from-entries',
            'es.object.has-own',
            'es.string.trim-end',
            'es.string.trim-start',
            'transform-classes',
            'transform-spread'
          ]
        }
      }
    ]
  ],
  plugins: []
}
