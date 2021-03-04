import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import PasswordInput from './';
import README from './README.md';

storiesOf('Components/PasswordInput', module)
  .addDecorator(withDocs(README))
  .add('default', () => <PasswordInput placeholder="Hello world" />);
