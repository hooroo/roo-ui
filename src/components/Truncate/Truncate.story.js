import React from 'react';
import { withDocs } from 'storybook-readme';

import Truncate from './';
import README from './README.md';

export default {
  title: 'Components/Truncate',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Truncate>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget eros
    malesuada, suscipit turpis id, vehicula lorem. Etiam iaculis mi quis risus
    mattis posuere. Cras ultricies metus mauris, a dapibus lacus facilisis
    iaculis. Proin bibendum ultricies viverra.
  </Truncate>
);

Default.story = {
  name: 'default',
};
