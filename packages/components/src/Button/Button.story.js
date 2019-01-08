import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean, select } from '@storybook/addon-knobs/react';

import Button from '.';
import README from './README.md';

storiesOf('Components|Button', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Button
      variant={select('Variant', ['default', 'primary'], 'default')}
      rounded={boolean('Rounded', false)}
      block={boolean('Block', false)}
      disabled={boolean('Disabled', false)}
    >
      Hello world
    </Button>
  ));
