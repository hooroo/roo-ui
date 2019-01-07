import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean, select } from '@storybook/addon-knobs/react';

import OutlineButton from './OutlineButton';
import README from './README.md';

storiesOf('Components|OutlineButton', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <OutlineButton
      variant={select('Variant', ['default', 'primary'], 'default')}
      rounded={boolean('Rounded', false)}
      disabled={boolean('Disabled', false)}
    >
      Hello world
    </OutlineButton>
  ));