import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: '🦐 Roo UI',
  addonPanelInRight: true,
});

const req = require.context('../packages', true, /story.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(withKnobs);

configure(loadStories, module);
