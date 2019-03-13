module.exports = (api) => {
  api.cache(true);

  const presets = ['@babel/preset-react', '@babel/preset-env'];
  const plugins = [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins,
  };
};
