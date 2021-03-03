import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { text } from '@storybook/addon-knobs';

import Image from './Image';
import README from './README.md';

storiesOf('Components/Image', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Image src={text('URL', '//picsum.photos/1280/800?image=374')} />
  ));
