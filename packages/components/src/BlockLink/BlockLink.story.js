import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import { Box } from '..';
import BlockLink from '.';
import README from './README.md';

storiesOf('Components|BlockLink', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <BlockLink href="https://www.qantas.com" target="_blank">
      <Box p={3} bg="grey.6">
        Hello world
      </Box>
    </BlockLink>
  ));
