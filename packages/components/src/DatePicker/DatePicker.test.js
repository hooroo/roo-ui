import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';

import DatePicker from '.';

describe('<DatePicker />', () => {
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
    disabledDates: [new Date('2018-07-04'), new Date('2018-07-05')],
  };

  beforeEach(() => {
    wrapper = shallowWithTheme(<DatePicker {...props} />, theme);
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
      expect(childrenWrapper.find('CalendarMonth').prop('monthName')).toEqual('Jul');
    });

    it('passes down props.stacked', () => {
      expect(childrenWrapper.find('CalendarMonth').prop('stacked')).toEqual(props.stacked);
    });

    it('passes down props.monthsToDisplay', () => {
      expect(childrenWrapper.find('CalendarMonth').prop('monthsToDisplay')).toEqual(props.monthsToDisplay);
    });
  });
});
