import React from 'react';
import { withDocs } from 'storybook-readme';

import Checkbox from './';
import { Box, Label } from '../';
import README from './README.md';

export default {
  title: 'Components/Checkbox',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Box textAlign="left" as="form">
    <Label textStyle="text">
      <Checkbox name="example" /> Uno
    </Label>

    <Label textStyle="text">
      <Checkbox name="example" /> Dos
    </Label>

    <Label textStyle="text">
      <Checkbox name="example" /> Tres
    </Label>

    <Label textStyle="text">
      <Checkbox disabled name="example" /> Quattro (disabled)
    </Label>
  </Box>
);

Default.story = {
  name: 'default',
};
