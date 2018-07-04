/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, date } from '@storybook/addon-knobs';
import { withDocs } from 'storybook-readme';
import { addDays, subDays } from 'date-fns';

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
      minDate={dateKnob('Min date', subDays(new Date(), 20))}
      maxDate={dateKnob('Max date', addDays(new Date(), 60))}
      selected={dateKnob('Selected date', new Date())}
      onDateSelected={console.log}
    />
  ));
