import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Datepicker from './Datepicker';
import README from './README.md';

storiesOf('Components|Datepicker', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Datepicker onDateChange={console.log} />
  ));
