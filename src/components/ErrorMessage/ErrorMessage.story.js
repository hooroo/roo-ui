import React from 'react';
import { withDocs } from 'storybook-readme';
import { select } from '@storybook/addon-knobs';

import ErrorMessage from './';
import README from './README.md';

export default {
  title: 'Components/ErrorMessage',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <ErrorMessage
    arrow={select('Arrow', ['top', 'right', 'bottom', 'left'], 'top')}
  >
    An error occurred
  </ErrorMessage>
);

Default.story = {
  name: 'default',
};
