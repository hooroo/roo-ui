import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Radio from './';
import { Box, Label } from '../';
import README from './README.md';

storiesOf('Components/Radio', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box textAlign="left" as="form">
      <Label textStyle="text">
        <Radio name="example" /> Uno
      </Label>

      <Label textStyle="text">
        <Radio name="example" /> Dos
      </Label>

      <Label textStyle="text">
        <Radio name="example" /> Tres
      </Label>

      <Label textStyle="text">
        <Radio disabled name="example" /> Quattro (disabled)
      </Label>
    </Box>
  ));
