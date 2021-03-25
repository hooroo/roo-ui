import React from 'react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs';

import { Input, Box } from '../';
import Label from './';
import README from './README.md';

export default {
  title: 'Components/Label',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Box textAlign="left">
    <Label hidden={boolean('Hidden', false)}>Hello world</Label>
    <Input />
  </Box>
);

Default.story = {
  name: 'default',
};
