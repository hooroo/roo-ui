import React from 'react';
import { withDocs } from 'storybook-readme';

import PasswordInput from './';
import README from './README.md';

export default {
  title: 'Components/PasswordInput',
  decorators: [withDocs(README)],
};

export const Default = () => <PasswordInput placeholder="Hello world" />;

Default.story = {
  name: 'default',
};
