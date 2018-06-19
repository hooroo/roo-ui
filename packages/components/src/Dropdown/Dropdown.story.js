import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { Icon } from '..';

import Dropdown from './Dropdown';
import README from './README.md';

storiesOf('Components|Dropdown', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Dropdown>
      Favourite fruit
      <Icon name="keyboardArrowDown" />

      <Dropdown.item>Bananas</Dropdown.item>
      <Dropdown.item>Oranges</Dropdown.item>
      <Dropdown.item>Apples</Dropdown.item>
      <Dropdown.item>Other</Dropdown.item>
    </Dropdown>
  ));
