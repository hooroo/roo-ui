import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text, boolean } from '@storybook/addon-knobs/react';

import OutlineButton from './OutlineButton';
import README from './README.md';

storiesOf('OutlineButton', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <OutlineButton
      primary={boolean('Primary', false)}
      rounded={boolean('Rounded', false)}
      disabled={boolean('Disabled', false)}
    >
      {text('Children', 'Hello world')}
    </OutlineButton>
  ));
