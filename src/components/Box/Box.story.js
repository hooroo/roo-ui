import React from 'react';
import { withDocs } from 'storybook-readme';

import Box from './Box';
import README from './README.md';

export default {
  title: 'Components/Box',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Box p={3} bg="greys.porcelain">
    Hello world
  </Box>
);

Default.story = {
  name: 'default',
};
