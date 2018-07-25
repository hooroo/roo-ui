import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import addDays from 'date-fns/add_days';
import subDays from 'date-fns/sub_days';

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
      disabledDates={[addDays(new Date(), 1), addDays(new Date(), 2), addDays(new Date(), 4)]}
    />
  ));
