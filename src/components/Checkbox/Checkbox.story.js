import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Checkbox from '.';
import { Box, Label } from '..';
import README from './README.md';

storiesOf('Components|Checkbox', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box textAlign="left" as="form">
      <Label textStyle="text">
        <Checkbox name="example" /> Uno
      </Label>

      <Label textStyle="text">
        <Checkbox name="example" /> Dos
      </Label>

      <Label textStyle="text">
        <Checkbox name="example" /> Tres
      </Label>

      <Label textStyle="text">
        <Checkbox disabled name="example" /> Quattro (disabled)
      </Label>
    </Box>
  ));
