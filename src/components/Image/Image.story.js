import React from 'react';
import { withDocs } from 'storybook-readme';
import { text } from '@storybook/addon-knobs';

import Image from './Image';
import README from './README.md';

export default {
  title: 'Components/Image',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Image src={text('URL', '//picsum.photos/1280/800?image=374')} />
);

Default.story = {
  name: 'default',
};
