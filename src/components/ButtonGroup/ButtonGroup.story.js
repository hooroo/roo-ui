import React from 'react';
import { storiesOf } from '@storybook/react';
import { withDocs } from 'storybook-readme';
import noop from 'lodash/noop';

import ButtonGroup from './';
import README from './README.md';

const DEFAULT_OPTIONS = [
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Past', value: 'past' },
  { label: 'Cancelled', value: 'cancelled' },
];

storiesOf('Components/ButtonGroup', module)
  .addDecorator(withDocs(README))
  .add('default', () => (
    <ButtonGroup
      name="bookings-by-type"
      value="upcoming"
      options={DEFAULT_OPTIONS}
      onChange={noop}
    />
  ))
  .add('disabled', () => (
    <ButtonGroup
      name="bookings-by-type"
      value="cancelled"
      disabled={true}
      options={DEFAULT_OPTIONS}
      onChange={noop}
    />
  ))
  .add('two-options', () => (
    <ButtonGroup
      name="two-options"
      value="cash"
      options={[
        { label: 'Use cash', value: 'cash' },
        { label: 'Use points', value: 'points' },
      ]}
      onChange={noop}
    />
  ));
