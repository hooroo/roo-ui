import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { setOptions } from '@storybook/addon-options';

import 'normalize.css/normalize.css';
import '../fonts/ciutadella.css';
import './storybook.css';

import withTheme from './withTheme';

setOptions({
  name: 'Roo UI',
  addonPanelInRight: true,
  hierarchyRootSeparator: /\|/,
});

const req = require.context('../src', true, /.*story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withTheme);
addDecorator(withKnobs);

configure(loadStories, module);
