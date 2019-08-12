import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs/react';

import Link from '.';
import README from './README.md';

storiesOf('Components|Link', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Link
      href="https://www.qantas.com"
      target="_blank"
      hidden={boolean('Hidden', false)}
      underline={boolean('Underline', false)}
    >
      Hello world
    </Link>
  ));
