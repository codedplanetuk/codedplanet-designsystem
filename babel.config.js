

var plugins = [
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/transform-runtime',
  ['babel-plugin-import-less', {
    library: 'antd',
    module: 'lib/[dash]',
    // import style
    style: true
  }]
];

module.exports = api => {
  api.cache(true);

  return {
    presets: ['@babel/env', '@babel/react'],
    plugins,
    env: {
      test: {
        plugins: ['require-context-hook'],
      },
    },
  };
};
