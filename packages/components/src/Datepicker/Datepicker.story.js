import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';

import Datepicker from './Datepicker';
import README from './README.md';

storiesOf('Components|Datepicker', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Datepicker
      monthsToDisplay={1}
      minDate={new Date('2018-06-12')}
      maxDate={new Date('2018-08-12')}
      selectedDate={new Date('2018-06-20')}
      onDateSelected={console.log}
    />
  ));
