import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import CalendarWeekdays from '.';

const props = {
  month: 7,
  year: 2018,
  weekdayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

describe('<CalendarWeekdays />', () => {
  it('renders correctly', () => {
    expect(shallowWithTheme(
      <CalendarWeekdays {...props}>Weekday</CalendarWeekdays>,
      theme,
    )).toMatchSnapshot();
  });
});
