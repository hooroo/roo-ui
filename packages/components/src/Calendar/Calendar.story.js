import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import { addDays, subDays } from 'date-fns';

import Calendar from './Calendar';
import README from './README.md';

storiesOf('Components|Calendar', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Calendar
      monthsToDisplay={number('Months to display', 1)}
      minDate={subDays(new Date(), 10)}
      maxDate={addDays(new Date(), 60)}
      selected={new Date()}
      onDateSelected={console.log} // eslint-disable-line no-console
      stacked={boolean('Stacked', false)}
    />
  ));
