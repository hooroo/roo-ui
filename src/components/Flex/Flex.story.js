import React from 'react';
import { withDocs } from 'storybook-readme';

import Flex from './Flex';
import { Box } from '../';
import README from './README.md';

export default {
  title: 'Components/Flex',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Flex>
    <Box width={1 / 2} p={3} m={3} bg="greys.porcelain">
      Flex
    </Box>
    <Box width={1 / 2} p={3} m={3} bg="greys.porcelain">
      Box
    </Box>
  </Flex>
);

Default.story = {
  name: 'default',
};
