import React from 'react';
import { withDocs } from 'storybook-readme';

import Paragraph from './';
import README from './README.md';

export default {
  title: 'Components/Paragraph',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Paragraph>
    A paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
    eget eros malesuada, suscipit turpis id, vehicula lorem. Etiam iaculis mi
    quis risus mattis posuere. Cras ultricies metus mauris, a dapibus lacus
    facilisis iaculis.
  </Paragraph>
);

Default.story = {
  name: 'default',
};
