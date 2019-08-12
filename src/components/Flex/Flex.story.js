import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Flex from './Flex';
import { Box } from '..';
import README from './README.md';

storiesOf('Components|Flex', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Flex>
      <Box width={1 / 2} p={3} m={3} bg="greys.porcelain">Flex</Box>
      <Box width={1 / 2} p={3} m={3} bg="greys.porcelain">Box</Box>
    </Flex>
  ));
