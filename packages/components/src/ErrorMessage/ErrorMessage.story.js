import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { select } from '@storybook/addon-knobs/react';

import ErrorMessage from '.';
import README from './README.md';

storiesOf('Components|ErrorMessage', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <ErrorMessage
      arrow={select('Arrow', ['top', 'right', 'bottom', 'left'], 'top')}
    >
      An error occurred
    </ErrorMessage>
  ));
