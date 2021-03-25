import React from 'react';
import { withDocs } from 'storybook-readme';

import LoadingIndicator from './LoadingIndicator';
import README from './README.md';

export default {
  title: 'Components/LoadingIndicator',
  decorators: [withDocs(README)],
};

export const Default = () => <LoadingIndicator />;

Default.story = {
  name: 'default',
};
