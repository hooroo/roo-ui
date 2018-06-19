import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Dropdown from './Dropdown';
import README from './README.md';

storiesOf('Components|Dropdown', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Dropdown items={['Bananas', 'Oranges', 'Apples', 'Other']}>
      Favourite fruit
    </Dropdown>
  ));
