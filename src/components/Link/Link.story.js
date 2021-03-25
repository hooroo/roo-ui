import React from 'react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs';

import Link from './';
import README from './README.md';

export default {
  title: 'Components/Link',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Link
    href="https://www.qantas.com"
    target="_blank"
    hidden={boolean('Hidden', false)}
    underline={boolean('Underline', false)}
  >
    Hello world
  </Link>
);

Default.story = {
  name: 'default',
};
