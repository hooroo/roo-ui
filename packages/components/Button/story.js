import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text, boolean } from '@storybook/addon-knobs/react';

import Button from './src';
import README from './README.md';

storiesOf('Button', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Button
      primary={boolean('Primary', false)}
      outlined={boolean('Outlined', false)}
      rounded={boolean('Rounded', false)}
      disabled={boolean('Disabled', false)}
    >
      {text('Children', 'Hello world')}
    </Button>
  ));
