import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Link from '.';
import README from './README.md';

storiesOf('Components|Link', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Link href="https://www.qantas.com" target="_blank">Hello world</Link>
  ));
