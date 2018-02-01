import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Button from './src';
import README from './README.md';

storiesOf('Button', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Button>Hello world!</Button>
  ));
