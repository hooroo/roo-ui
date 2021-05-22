const MODULES = process.env.MODULES === 'false' ? false : process.env.MODULES;

module.exports = {
  presets: ['@babel/react', ['@babel/env', { modules: MODULES }]],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
    'emotion',
    '@babel/transform-runtime',
    ['@babel/proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    '@babel/proposal-object-rest-spread',
  ],
};
