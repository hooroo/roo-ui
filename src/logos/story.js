import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { select } from '@storybook/addon-knobs';

import { Box } from '../components';
import * as logos from './';
import README from './README.md';

storiesOf('Foundations/Logos', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box p={6} bg="greys.porcelain">
      <img
        src={select('Logo', logos, Object.values(logos)[0])}
        height="50"
        alt=""
      />
    </Box>
  ));
