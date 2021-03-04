import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { select } from '@storybook/addon-knobs';

import { Box } from '../components';
import * as assets from './';
import README from './README.md';

storiesOf('Foundations/Assets', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box p={6} bg="greys.porcelain">
      <img
        src={select('Assets', assets, Object.values(assets)[0])}
        height="100"
        alt=""
      />
    </Box>
  ));
