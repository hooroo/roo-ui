module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: '16.9',
    },
    'import/resolver': {
      'babel-module': {},
    },
  },
  plugins: ['sonarjs'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
  ],
  rules: {
    'sonarjs/no-duplicate-string': 'off',
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'sonarjs/no-identical-functions': 'off',
      },
    },
    {
      files: ['*.test.js', '*.story.js'],
      rules: {
        'import/default': 'off',
      },
    },
    {
      files: ['*.story.js'],
      rules: {
        'react/prop-types': 'off',
      },
    },
  ],
};
