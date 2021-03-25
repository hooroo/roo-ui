import React from 'react';
import { withDocs } from 'storybook-readme';

import ExternalLink from './';
import README from './README.md';

export default {
  title: 'Components/ExternalLink',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <ExternalLink href="https://www.qantas.com">Hello world</ExternalLink>
);

Default.story = {
  name: 'default',
};
