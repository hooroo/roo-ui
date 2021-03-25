import React from 'react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs';

import Text from './';
import README from './README.md';

export default {
  title: 'Components/Text',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Text hidden={boolean('Hidden', false)}>Generic text.</Text>
);

Default.story = {
  name: 'default',
};
