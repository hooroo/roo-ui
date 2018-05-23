import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs/react';

import Input from '.';
import README from './README.md';

storiesOf('Components|Input', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Input
      placeholder="Hello world"
      error={boolean('Error', false)}
      readOnly={boolean('Read only', false)}
    />
  ));
