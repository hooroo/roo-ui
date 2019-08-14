module.exports = {
  presets: ['@babel/react', ['@babel/env', { modules: process.env.MODULES }]],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
      },
    ],
    'emotion',
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
