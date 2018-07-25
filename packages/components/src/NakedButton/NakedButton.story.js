import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import NakedButton from '.';
import README from './README.md';

storiesOf('Components|NakedButton', module)
  .addDecorator(withDocs(README))
  .add('default', () => <NakedButton mt={3}>Hello world</NakedButton>);
