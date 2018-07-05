import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { CalendarWeekday, CalendarWeekdays } from '.';

describe('Calendar weekdays', () => {
  it('renders <CalendarWeekdays /> correctly', () => {
    expect(shallowWithTheme(<CalendarWeekdays>Weekday</CalendarWeekdays>, theme)).toMatchSnapshot();
  });

  it('renders <CalendarWeekday /> correctly', () => {
    expect(shallowWithTheme(<CalendarWeekday>Tuesday</CalendarWeekday>, theme)).toMatchSnapshot();
  });
});
