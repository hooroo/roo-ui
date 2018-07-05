import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { CalendarWeekday, CalendarWeekdays } from '.';

describe('<CalendarWeekdays />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowWithTheme(
      <CalendarWeekdays>
        <CalendarWeekday>Tuesday</CalendarWeekday>
      </CalendarWeekdays>,
      theme,
    );
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
