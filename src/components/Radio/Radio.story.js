import React from 'react';
import { withDocs } from 'storybook-readme';

import Radio from './';
import { Box, Label } from '../';
import README from './README.md';

export default {
  title: 'Components/Radio',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Box textAlign="left" as="form">
    <Label textStyle="text">
      <Radio name="example" /> Uno
    </Label>

    <Label textStyle="text">
      <Radio name="example" /> Dos
    </Label>

    <Label textStyle="text">
      <Radio name="example" /> Tres
    </Label>

    <Label textStyle="text">
      <Radio disabled name="example" /> Quattro (disabled)
    </Label>
  </Box>
);

Default.story = {
  name: 'default',
};
