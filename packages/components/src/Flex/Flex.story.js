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
      <Box width={1 / 2} p={3} m={3} bg="grey.6">Flex</Box>
      <Box width={1 / 2} p={3} m={3} bg="grey.6">Box</Box>
    </Flex>
  ));
