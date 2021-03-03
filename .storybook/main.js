module.exports = {
  stories: ['../src/**/*story.js'],
  addons: [
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        controls: false,
        actions: false,
      },
    },
  ],
};
