module.exports = (api) => {
  const isTest = api.env('test');

  const env = isTest ? ['@babel/preset-env', { targets: { node: 'current' } }] : '@babel/preset-env';

  const presets = ['@babel/preset-react', env];
  const plugins = [
    'babel-plugin-emotion',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins,
  };
};
