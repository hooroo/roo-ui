import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';

import CalendarWeekdays from '.';

const props = {
  month: 7,
  year: 2018,
  weekdayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

describe('<CalendarWeekdays />', () => {
  it('renders correctly', () => {
    expect(
      shallowWithTheme(
        <CalendarWeekdays {...props}>Weekday</CalendarWeekdays>,
        theme,
      ),
    ).toMatchSnapshot();
  });
});
