import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import { Box } from '../';
import Container from './Container';
import README from './README.md';

storiesOf('Components/Container', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Container>
      <Box p={3} bg="greys.porcelain">
        Hello world
      </Box>
    </Container>
  ));
