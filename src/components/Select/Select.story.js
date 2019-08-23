import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs/react';

import Select from './';
import README from './README.md';

storiesOf('Components|Select', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Select
      error={boolean('Error', false)}
      underline={boolean('Underline', false)}
      readOnly={boolean('Read only', false)}
      disabled={boolean('Disabled', false)}
    >
      <option>One</option>
      <option>Two</option>
      <option>Three</option>
    </Select>
  ));
