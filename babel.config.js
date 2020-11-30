module.exports = function (api) {
  // 若build依赖于env，就不要再指定api.cache为forever或never了
  // api.cache(true);
  const env = api.env();
  const isProd = api.env('production');

  // Plugins run before Presets. Plugin ordering is first to last.
  const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    !isProd && 'react-refresh/babel',
  ].filter(Boolean);

  function configModule() {
    if (env === 'esm' || env === 'es6') {
      return false;
    }
    // 默认会编译成node自身的commonjs
    return 'auto';
  }

  // Preset ordering is reversed (last to first).
  const presets = [
    [
      '@babel/preset-env',
      {
        // modules: env === 'esm' ? false : 'auto',
        modules: configModule(),
        targets: 'defaults',
        // targets: '> 0.25%, not dead',
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        debug: false,
      },
    ],

    ['@babel/preset-react', { development: env !== 'production' }],
  ];

  const ignore = ['node_modules'];

  return {
    plugins,
    presets,
    ignore,
  };
};
