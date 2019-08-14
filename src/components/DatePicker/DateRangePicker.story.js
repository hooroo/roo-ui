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
      monthsToDisplay={number('Months to display', 2)}
      stacked={boolean('Stacked', false)}
      minDate={date}
      initialStartDate={addDays(date, 3)}
      initialEndDate={addDays(date, 7)}
      isSettingStartDate={false}
      isSettingEndDate={false}
    />
  ));
