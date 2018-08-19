import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { addDays } from 'date-fns';

import CalendarDays from '.';

describe('<CalendarDays />', () => {
  let wrapper;

  const startDate = new Date(2018, 7, 1, 10, 33, 30, 0);

  const props = {
    monthName: 'Jul',
    month: 7,
    year: 2018,
    stacked: true,
    weekdayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    weeks: [
      [
        { date: startDate },
        { date: addDays(startDate, 1) },
        { date: addDays(startDate, 2) },
        { date: addDays(startDate, 3) },
        { date: addDays(startDate, 4) },
        { date: addDays(startDate, 5) },
        { date: addDays(startDate, 7) },
      ],
      [
        { date: addDays(startDate, 7) },
        { date: addDays(startDate, 8) },
        { date: addDays(startDate, 9) },
        { date: addDays(startDate, 10) },
        { date: addDays(startDate, 11) },
        { date: addDays(startDate, 12) },
        { date: addDays(startDate, 14) },
      ]],
    getDateProps: jest.fn,
  };

  beforeEach(() => {
    wrapper = shallowWithTheme(<CalendarDays {...props} />, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
