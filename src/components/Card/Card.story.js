import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import { Box } from '..';
import Card from './Card';
import README from './README.md';

storiesOf('Components|Card', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box p={6} bg="greys.porcelain">
      <Card>
        Hello world
      </Card>
    </Box>
  ));
