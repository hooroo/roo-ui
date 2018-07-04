import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, date } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';

import Calendar from './Calendar';
import README from './README.md';

function dateKnob(name, defaultValue) {
  const stringTimestamp = date(name, defaultValue);
  return new Date(stringTimestamp);
}

storiesOf('Components|Calendar', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <Calendar
      monthsToDisplay={number('Months to display', 1)}
      minDate={dateKnob('Min date', new Date('2018-06-12'))}
      maxDate={dateKnob('Max date', new Date('2018-08-12'))}
      selectedDate={dateKnob('Selected date', new Date('2018-06-20'))}
      onDateSelected={console.log}
    />
  ));
