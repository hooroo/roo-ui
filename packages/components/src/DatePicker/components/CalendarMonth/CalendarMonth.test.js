import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { addDays } from 'date-fns';

import CalendarMonth from '.';

describe('<CalendarMonth />', () => {
  let wrapper;

  const props = {
    monthName: 'Jul',
    month: 7,
    year: 2018,
    stacked: true,
    weekdayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    weeks: [
      [
        { date: new Date() },
        { date: addDays(new Date(), 1) },
        { date: addDays(new Date(), 2) },
        { date: addDays(new Date(), 3) },
        { date: addDays(new Date(), 4) },
        { date: addDays(new Date(), 5) },
        { date: addDays(new Date(), 7) },
      ],
      [
        { date: addDays(new Date(), 7) },
        { date: addDays(new Date(), 8) },
        { date: addDays(new Date(), 9) },
        { date: addDays(new Date(), 10) },
        { date: addDays(new Date(), 11) },
        { date: addDays(new Date(), 12) },
        { date: addDays(new Date(), 14) },
      ]],
    getDateProps: jest.fn,
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
    it('renders CalendarDays', () => {
      expect(wrapper.find('CalendarDays').prop('month')).toEqual(props.month);
      expect(wrapper.find('CalendarDays').prop('year')).toEqual(props.year);
      expect(wrapper.find('CalendarDays').prop('weeks')).toEqual(props.weeks);
    });
  });
});
