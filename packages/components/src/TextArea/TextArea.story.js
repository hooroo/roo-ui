import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean, number } from '@storybook/addon-knobs/react';

import TextArea from '.';
import README from './README.md';

storiesOf('Components|TextArea', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <TextArea
      placeholder="Lorem ipsum dolor sit amet"
      error={boolean('Error', false)}
      rows={number('Rows', 6)}
    />
  ));
