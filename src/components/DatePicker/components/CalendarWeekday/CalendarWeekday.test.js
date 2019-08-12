import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';

import CalendarWeekday from '.';

describe('<CalendarWeekday />', () => {
  it('renders correctly', () => {
    expect(
      shallowWithTheme(<CalendarWeekday>Tuesday</CalendarWeekday>, theme),
    ).toMatchSnapshot();
  });
});
