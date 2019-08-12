module.exports = {
  presets: ['@babel/react', ['@babel/env', { modules: process.env.MODULES }]],
  plugins: [
    'emotion',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
