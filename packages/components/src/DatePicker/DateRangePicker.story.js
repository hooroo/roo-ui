import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import addDays from 'date-fns/add_days';

import DateRangePicker from './DateRangePicker';
import README from './DateRangePicker.README.md';

const date = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
);

storiesOf('Components|DateRangePicker', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <DateRangePicker
      monthsToDisplay={number('Months to display', 1)}
      minDate={date}
      startDate={addDays(date, 3)}
      endDate={addDays(date, 7)}
      stacked={boolean('Stacked', false)}
      setStartDate={boolean('Change start date', false)}
      setEndDate={boolean('Change end date', false)}
      onRangeSelected={console.log} // eslint-disable-line no-console
      onChangeStartDate={console.log} // eslint-disable-line no-console
      onChangeEndDate={console.log} // eslint-disable-line no-console
    />
  ));
