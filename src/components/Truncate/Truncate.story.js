import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Truncate from '.';
import README from './README.md';

storiesOf('Components|Truncate', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Truncate>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget eros
      malesuada, suscipit turpis id, vehicula lorem. Etiam iaculis mi quis risus
      mattis posuere. Cras ultricies metus mauris, a dapibus lacus facilisis
      iaculis. Proin bibendum ultricies viverra.
    </Truncate>
  ));
