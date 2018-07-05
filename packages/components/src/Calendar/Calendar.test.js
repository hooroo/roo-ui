import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { axe } from 'jest-axe';

import { Calendar } from '.';

describe('<Calendar />', () => {
  let wrapper;
  let childrenWrapper;

  const props = {
    date: new Date('2018-07-03'),
    minDate: new Date('2018-06-01'),
    maxDate: new Date('2018-08-20'),
    selected: new Date('2018-07-03'),
    onDateSelected: jest.fn(),
    monthsToDisplay: 1,
    weekdayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
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

  it('has no accessibility errors', async () => {
    expect(await axe(wrapper.html())).toHaveNoViolations();
  });

  describe('props', () => {
    it('uses monthNames to pass each calendar month name to <CalendarMonth />', () => {
      expect(childrenWrapper.find('CalendarMonth').prop('month')).toEqual('Jul');
    });

    it('passes renders a <CalendarWeekday /> for each weekdayNames', () => {
      expect(childrenWrapper.find('CalendarWeekday')).toHaveLength(props.weekdayNames.length);
    });

    it('passes monthsToDisplay to <CalendarMonth />', () => {
      expect(childrenWrapper.find('CalendarMonth').prop('monthsToDisplay')).toEqual(props.monthsToDisplay);
    });

    it('passes monthsToDisplay to <Dayzed />', () => {
      expect(wrapper.find('Dayzed').prop('monthsToDisplay')).toEqual(props.monthsToDisplay);
    });

    it('assigns the rest of the props to <Dayzed />', () => {
      expect(wrapper.props()).toEqual(expect.objectContaining({
        date: props.date,
        minDate: props.minDate,
        maxDate: props.maxDate,
        selected: props.selected,
        onDateSelected: props.onDateSelected,
      }));
    });
  });
});
