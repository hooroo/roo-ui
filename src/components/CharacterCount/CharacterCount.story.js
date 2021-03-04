import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text, number } from '@storybook/addon-knobs';

import CharacterCount from './';
import README from './README.md';

storiesOf('Components/CharacterCount', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <CharacterCount
      value={text('Value', 'Hello world')}
      limit={number('Limit', 64)}
    />
  ));
