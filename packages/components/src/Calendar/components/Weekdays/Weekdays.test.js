import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { Weekday, Weekdays } from '.';

describe('<Weekdays />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <Weekdays>
        <Weekday>Tuesday</Weekday>
      </Weekdays>,
      theme,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
