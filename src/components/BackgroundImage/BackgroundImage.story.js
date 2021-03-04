import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text } from '@storybook/addon-knobs';

import BackgroundImage from './BackgroundImage';
import README from './README.md';

storiesOf('Components/BackgroundImage', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <BackgroundImage
      src={text('URL', '//picsum.photos/1280/800?image=374')}
      height="32rem"
      width="100%"
    />
  ));
