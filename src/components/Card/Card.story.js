import React from 'react';
import { withDocs } from 'storybook-readme';

import { Box } from '../';
import Card from './Card';
import README from './README.md';

export default {
  title: 'Components/Card',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Box p={6} bg="greys.porcelain">
    <Card>Hello world</Card>
  </Box>
);

Default.story = {
  name: 'default',
};
