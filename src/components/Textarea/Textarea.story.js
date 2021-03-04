import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean, number } from '@storybook/addon-knobs';

import Textarea from './';
import README from './README.md';

storiesOf('Components/Textarea', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Textarea
      placeholder="Lorem ipsum dolor sit amet"
      error={boolean('Error', false)}
      rows={number('Rows', 6)}
    />
  ));
