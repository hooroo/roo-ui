import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Box from './Box';
import README from './README.md';

storiesOf('Components|Box', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box p={3} bg="grey.6">
      Hello world
    </Box>
  ));
