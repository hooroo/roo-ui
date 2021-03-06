import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean, text } from '@storybook/addon-knobs';

import Input from './';
import README from './README.md';

storiesOf('Components/Input', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Input
      placeholder="Hello world"
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      underline={boolean('Underline', false)}
      readOnly={boolean('Read only', false)}
      textAlign={text('Text Align', 'left')}
    />
  ));
