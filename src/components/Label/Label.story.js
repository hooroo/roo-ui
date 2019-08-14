import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs';

import { Input, Box } from '../';
import Label from './';
import README from './README.md';

storiesOf('Components|Label', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Box textAlign="left">
      <Label hidden={boolean('Hidden', false)}>Hello world</Label>
      <Input />
    </Box>
  ));
