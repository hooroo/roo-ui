module.exports = (api) => {
  const isTest = api.env('test');

  let env;

  if (isTest) {
    env = ['@babel/preset-env', { targets: { node: 'current' } }];
  } else if (process.env.ESM_BUILD) {
    env = ['@babel/preset-env', { modules: false }];
  } else {
    env = ['@babel/preset-env'];
  }

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
