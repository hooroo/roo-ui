import React from 'react';
import { withDocs } from 'storybook-readme';
import { boolean, number } from '@storybook/addon-knobs';

import Textarea from './';
import README from './README.md';

export default {
  title: 'Components/Textarea',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Textarea
    placeholder="Lorem ipsum dolor sit amet"
    error={boolean('Error', false)}
    rows={number('Rows', 6)}
  />
);

Default.story = {
  name: 'default',
};
