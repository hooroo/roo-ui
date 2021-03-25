import React from 'react';
import { withDocs } from 'storybook-readme';

import { Box } from '../';
import BlockLink from './';
import README from './README.md';

export default {
  title: 'Components/BlockLink',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <BlockLink href="https://www.qantas.com" target="_blank">
    <Box p={3} bg="greys.porcelain">
      Hello world
    </Box>
  </BlockLink>
);

Default.story = {
  name: 'default',
};
