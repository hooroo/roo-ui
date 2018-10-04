import React from 'react';
import { parse } from 'date-fns';
import { qantas as theme } from '@roo-ui/themes';
import { mountWithTheme } from '@roo-ui/test-utils';

import DatePicker from './DatePicker';

describe('<DatePicker />', () => {
  let wrapper;

  const props = {
    date: parse('2018-07-03'),
    minDate: parse('2018-06-01'),
    maxDate: parse('2018-08-20'),
    selected: parse('2018-07-20'),
    onDateSelected: jest.fn(),
    monthsToDisplay: 1,
    stacked: true,
    weekdayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    disabledDates: [parse('2018-07-04'), parse('2018-07-05')],
  };

  const setup = (args = {}) => {
    props.interactiveDisabledDates = args.interactiveDisabledDates || false;
    wrapper = mountWithTheme(<DatePicker {...props} />, theme);
  };

  describe('<Dayzed />', () => {
    beforeEach(() => {
      setup();
    });

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
    let calendarMonthWrapper;

    beforeEach(() => {
      setup();

      calendarMonthWrapper = wrapper.find('CalendarMonth');
    });

    it('passes the month name to each calendar month', () => {
      expect(calendarMonthWrapper.prop('monthName')).toEqual('Jul');
    });

    it('passes down props.stacked', () => {
      expect(calendarMonthWrapper.prop('stacked')).toEqual(props.stacked);
    });

    it('passes down props.monthsToDisplay', () => {
      expect(calendarMonthWrapper.prop('monthsToDisplay')).toEqual(props.monthsToDisplay);
    });
  });

  describe('<CalendarEmptyDay />', () => {
    beforeEach(() => {
      setup();
    });

    it('renders one for each empty day in the calendar month', () => {
      expect(wrapper.find('CalendarEmptyDay')).toHaveLength(11);
    });
  });

  describe('<CalendarDay />', () => {
    describe('renders correctly', () => {
      beforeEach(() => {
        setup();
      });

      it('it renders a day for each day in the month', () => {
        expect(wrapper.find('CalendarDay')).toHaveLength(31);
      });

      it('renders days as clickable elements', () => {
        const day = wrapper.find('CalendarDay').first();

        expect(day.props()).toEqual(expect.objectContaining({
          selectable: true,
          disabled: false,
        }));
      });

      it('adds props.selected true when date is in props.selected', () => {
        const day19 = wrapper.find('CalendarDay').at(19);

        expect(day19.props()).toEqual(expect.objectContaining({
          selected: true,
        }));
      });

      it('renders a disabled day when date is in props.disabledDates', () => {
        const day3 = wrapper.find('CalendarDay').at(3);
        const day4 = wrapper.find('CalendarDay').at(4);

        expect(day3.props()).toEqual(expect.objectContaining({
          selected: false,
          selectable: false,
          disabled: true,
        }));

        expect(day4.props()).toEqual(expect.objectContaining({
          selected: false,
          selectable: false,
          disabled: true,
        }));
      });
    });
  });
});
