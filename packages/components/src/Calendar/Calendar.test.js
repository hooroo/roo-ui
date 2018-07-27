import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import { Calendar } from '.';

describe('<Calendar />', () => {
  let wrapper;
  let childrenWrapper;

  const props = {
    date: new Date('2018-07-03'),
    minDate: new Date('2018-06-01'),
    maxDate: new Date('2018-08-20'),
    selected: new Date('2018-07-20'),
    onDateSelected: jest.fn(),
    monthsToDisplay: 1,
    stacked: true,
    weekdayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    blockedDates: [new Date('2018-07-04'), new Date('2018-07-05')],
  };

  beforeEach(() => {
    wrapper = shallowWithTheme(<Calendar {...props} />, theme);
    childrenWrapper = wrapper.dive();
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    expect(childrenWrapper).toMatchSnapshot();
  });

  describe('<Dayzed />', () => {
    it('passes down props.monthsToDisplay', () => {
      expect(wrapper.find('Dayzed').prop('monthsToDisplay')).toEqual(props.monthsToDisplay);
    });

    it('assigns the rest of the props', () => {
      expect(wrapper.props()).toEqual(expect.objectContaining({
        date: props.date,
        minDate: props.minDate,
        maxDate: props.maxDate,
        selected: props.selected,
        onDateSelected: props.onDateSelected,
      }));
    });
  });

  describe('<CalendarMonth />', () => {
    it('passes the month name to each calendar month', () => {
      expect(childrenWrapper.find('CalendarMonth').prop('month')).toEqual('Jul');
    });

    it('passes down props.stacked', () => {
      expect(childrenWrapper.find('CalendarMonth').prop('stacked')).toEqual(props.stacked);
    });

    it('passes down props.monthsToDisplay', () => {
      expect(childrenWrapper.find('CalendarMonth').prop('monthsToDisplay')).toEqual(props.monthsToDisplay);
    });
  });

  describe('<CalendarWeekday />', () => {
    it('renders one for each weekday name', () => {
      expect(childrenWrapper.find('CalendarWeekday')).toHaveLength(props.weekdayNames.length);
    });
  });

  describe('<CalendarEmptyDay />', () => {
    it('renders one for each empty day in the calendar month', () => {
      expect(childrenWrapper.find('CalendarEmptyDay')).toHaveLength(11);
    });
  });

  describe('<CalendarDay />', () => {
    it('it renders a day for each day in the month', () => {
      expect(childrenWrapper.find('CalendarDay')).toHaveLength(31);
    });

    it('renders days as clickable elements', () => {
      const day = childrenWrapper.find('CalendarDay').first();

      expect(day.props()).toEqual(expect.objectContaining({
        selectable: true,
        disabled: false,
      }));
    });

    it('adds props.selected true when date is in props.selected', () => {
      const day19 = childrenWrapper.find('CalendarDay').at(19);

      expect(day19.props()).toEqual(expect.objectContaining({
        selected: true,
      }));
    });

    it('renders a blocked day when date is in props.blockedDates', () => {
      const day3 = childrenWrapper.find('CalendarDay').at(3);
      const day4 = childrenWrapper.find('CalendarDay').at(4);

      expect(day3.props()).toEqual(expect.objectContaining({
        selected: false,
        selectable: false,
        disabled: false,
      }));

      expect(day4.props()).toEqual(expect.objectContaining({
        selected: false,
        selectable: false,
        disabled: false,
      }));
    });
  });
});
