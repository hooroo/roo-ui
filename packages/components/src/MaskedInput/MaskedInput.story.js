import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs/react';

import MaskedInput from '.';
import README from './README.md';

storiesOf('Components|MaskedInput', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <MaskedInput
      placeholder="Enter postcode"
      mask={[/\d/, /\d/, /\d/, /\d/]}
      underline={boolean('Underline', false)}
    />
  ))
  .add('time', () => (
    <MaskedInput.time />
  ));
