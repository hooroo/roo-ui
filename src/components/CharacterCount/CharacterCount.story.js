import React from 'react';
import { withDocs } from 'storybook-readme';
import { text, number } from '@storybook/addon-knobs';

import CharacterCount from './';
import README from './README.md';

export default {
  title: 'Components/CharacterCount',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <CharacterCount
    value={text('Value', 'Hello world')}
    limit={number('Limit', 64)}
  />
);

Default.story = {
  name: 'default',
};
