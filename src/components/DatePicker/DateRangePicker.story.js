import React from 'react';
import { number, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import addDays from 'date-fns/addDays';

import DateRangePicker from './DateRangePicker';
import README from './DateRangePicker.README.md';

const date = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
);

export default {
  title: 'Components/DateRangePicker',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <DateRangePicker
    monthsToDisplay={number('Months to display', 2)}
    stacked={boolean('Stacked', false)}
    minDate={date}
    initialStartDate={addDays(date, 3)}
    initialEndDate={addDays(date, 7)}
    isSettingStartDate={false}
    isSettingEndDate={false}
  />
);

Default.story = {
  name: 'default',
};
