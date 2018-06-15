import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import BounceLoader from './BounceLoader';
import README from './README.md';

storiesOf('Components|BounceLoader', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <BounceLoader />
  ));
