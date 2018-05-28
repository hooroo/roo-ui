import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs/react';

import ErrorMessage from '.';
import README from './README.md';

storiesOf('Components|ErrorMessage', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <ErrorMessage
      arrowTop={boolean('Arrow top', true)}
      arrowRight={boolean('Arrow right', false)}
      arrowBottom={boolean('Arrow bottom', false)}
      arrowLeft={boolean('Arrow left', false)}
    >
      An error occurred
    </ErrorMessage>
  ));
