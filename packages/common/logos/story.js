import React from 'react';
import invert from 'lodash/invert';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { select } from '@storybook/addon-knobs/react';

import * as logos from '.';
import README from './README.md';

storiesOf('Logos', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <img
      src={select('Logo', invert(logos), Object.values(logos)[0])}
      height="100"
      alt=""
    />
  ));
