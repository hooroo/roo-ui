import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import { Box } from '..';
import Card from './Card';
import README from './README.md';

storiesOf('Components|Card', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box p={5} bg="grey.3">
      <Card>
        Hello world
      </Card>
    </Box>
  ));
