import React from 'react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs';

import Select from './';
import README from './README.md';

export default {
  title: 'Components/Select',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Select
    error={boolean('Error', false)}
    underline={boolean('Underline', false)}
    readOnly={boolean('Read only', false)}
    disabled={boolean('Disabled', false)}
  >
    <option>One</option>
    <option>Two</option>
    <option>Three</option>
  </Select>
);

Default.story = {
  name: 'default',
};
