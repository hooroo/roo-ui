import React from 'react';
import { withDocs } from 'storybook-readme';
import { boolean, select } from '@storybook/addon-knobs';

import OutlineButton from './OutlineButton';
import README from './README.md';

export default {
  title: 'Components/OutlineButton',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <OutlineButton
    variant={select('Variant', ['default', 'primary'], 'default')}
    rounded={boolean('Rounded', false)}
    disabled={boolean('Disabled', false)}
  >
    Hello world
  </OutlineButton>
);

Default.story = {
  name: 'default',
};
