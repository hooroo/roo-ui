import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import { number } from '@storybook/addon-knobs/react';

import LoadingIndicator from './LoadingIndicator';
import README from './README.md';

storiesOf('Components|LoadingIndicator', module)
  .addDecorator(withDocs(README))
  .add('default', () => <LoadingIndicator size={number('Size', 20)} />);
