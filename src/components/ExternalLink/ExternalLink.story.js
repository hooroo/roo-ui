import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import ExternalLink from './';
import README from './README.md';

storiesOf('Components/ExternalLink', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <ExternalLink href="https://www.qantas.com">Hello world</ExternalLink>
  ));
