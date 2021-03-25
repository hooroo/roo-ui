import React from 'react';
import { withDocs } from 'storybook-readme';
import { text } from '@storybook/addon-knobs';

import BackgroundImage from './BackgroundImage';
import README from './README.md';

export default {
  title: 'Components/BackgroundImage',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <BackgroundImage
    src={text('URL', '//picsum.photos/1280/800?image=374')}
    height="32rem"
    width="100%"
  />
);

Default.story = {
  name: 'default',
};
