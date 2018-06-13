import React from 'react';
import invert from 'lodash/invert';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { select } from '@storybook/addon-knobs/react';

import { Box } from '../components';
import * as assets from './src';
import README from './README.md';

storiesOf('Foundations|Assets', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box p={6} bg="grey.3">
      <img
        src={select('Assets', invert(assets), Object.values(assets)[0])}
        height="100"
        alt=""
      />
    </Box>
  ));
