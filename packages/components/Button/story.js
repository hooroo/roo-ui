import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text } from '@storybook/addon-knobs/react';

import Button from './src';
import README from './README.md';

storiesOf('Button', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Button>{text('Children', 'Hello world')}</Button>
  ));
