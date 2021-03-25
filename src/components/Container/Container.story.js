import React from 'react';
import { withDocs } from 'storybook-readme';

import { Box } from '../';
import Container from './Container';
import README from './README.md';

export default {
  title: 'Components/Container',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Container>
    <Box p={3} bg="greys.porcelain">
      Hello world
    </Box>
  </Container>
);

Default.story = {
  name: 'default',
};
