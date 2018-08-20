import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import addDays from 'date-fns/add_days';
import subDays from 'date-fns/sub_days';

import DateRangePicker from './DateRangePicker';
import README from './DateRangePicker.README.md';

storiesOf('Components|DateRangePicker', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <DateRangePicker
      monthsToDisplay={number('Months to display', 1)}
      minDate={subDays(new Date(), 10)}
      maxDate={addDays(new Date(), 60)}
      startDate={addDays(new Date(), 3)}
      endDate={addDays(new Date(), 7)}
      stacked={boolean('Stacked', false)}
      setStartDate={boolean('Change start date', false)}
      setEndDate={boolean('Change end date', false)}
      onRangeSelected={console.log} // eslint-disable-line no-console
      onChangeStartDate={console.log} // eslint-disable-line no-console
      onChangeEndDate={console.log} // eslint-disable-line no-console
    />
  ));
