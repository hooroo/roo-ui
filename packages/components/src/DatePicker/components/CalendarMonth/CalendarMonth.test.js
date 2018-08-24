import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { addDays } from 'date-fns';

import CalendarMonth from '.';

describe('<CalendarMonth />', () => {
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
    isInRange: jest.fn,
    onMouseEnterOfDay: jest.fn,
  };

  beforeEach(() => {
    wrapper = shallowWithTheme(<CalendarMonth {...props}>Days</CalendarMonth>, theme);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('<CalendarWeekdays />', () => {
    it('renders CalendarWeekdays', () => {
      expect(wrapper.find('CalendarWeekdays').prop('month')).toEqual(props.month);
      expect(wrapper.find('CalendarWeekdays').prop('year')).toEqual(props.year);
      expect(wrapper.find('CalendarWeekdays').prop('weekdayNames')).toEqual(props.weekdayNames);
    });
  });

  describe('<CalendarDays />', () => {
    it('passes the correct props', () => {
      expect(wrapper.find('CalendarDays').prop('month')).toEqual(props.month);
      expect(wrapper.find('CalendarDays').prop('year')).toEqual(props.year);
      expect(wrapper.find('CalendarDays').prop('weeks')).toEqual(props.weeks);
      expect(wrapper.find('CalendarDays').prop('isInRange')).toEqual(props.isInRange);
      expect(wrapper.find('CalendarDays').prop('onMouseEnterOfDay')).toEqual(props.onMouseEnterOfDay);
    });
  });
});
