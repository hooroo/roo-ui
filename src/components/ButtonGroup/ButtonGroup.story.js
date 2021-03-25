import React from 'react';
import { withDocs } from 'storybook-readme';
import noop from 'lodash/noop';

import ButtonGroup from './';
import README from './README.md';

const DEFAULT_OPTIONS = [
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Past', value: 'past' },
  { label: 'Cancelled', value: 'cancelled' },
];

export default {
  title: 'Components/ButtonGroup',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <ButtonGroup
    name="bookings-by-type"
    value="upcoming"
    options={DEFAULT_OPTIONS}
    onChange={noop}
  />
);

Default.story = {
  name: 'default',
};

export const Disabled = () => (
  <ButtonGroup
    name="bookings-by-type"
    value="cancelled"
    disabled={true}
    options={DEFAULT_OPTIONS}
    onChange={noop}
  />
);

Disabled.story = {
  name: 'disabled',
};

export const TwoOptions = () => (
  <ButtonGroup
    name="two-options"
    value="cash"
    options={[
      { label: 'Use cash', value: 'cash' },
      { label: 'Use points', value: 'points' },
    ]}
    onChange={noop}
  />
);

TwoOptions.story = {
  name: 'two-options',
};
