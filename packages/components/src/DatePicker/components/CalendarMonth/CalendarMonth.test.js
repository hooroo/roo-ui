import React from 'react';
import { qantas as theme } from '@roo-ui/themes';
import { shallowWithTheme } from '@roo-ui/test-utils';
import { addDays } from 'date-fns';

import CalendarMonth from '.';

describe('<CalendarMonth />', () => {
  let wrapper;
  let childrenWrapper;

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
    childrenWrapper = wrapper.dive();
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

  // describe('<CalendarEmptyDay />', () => {
  //   it('renders one for each empty day in the calendar month', () => {
  //     expect(childrenWrapper.find('CalendarEmptyDay')).toHaveLength(11);
  //   });
  // });

  // describe('<CalendarDay />', () => {
  //   it('it renders a day for each day in the month', () => {
  //     expect(childrenWrapper.find('CalendarDay')).toHaveLength(31);
  //   });

  //   it('renders days as clickable elements', () => {
  //     const day = childrenWrapper.find('CalendarDay').first();

  //     expect(day.props()).toEqual(expect.objectContaining({
  //       selectable: true,
  //       disabled: false,
  //     }));
  //   });

  //   it('adds props.selected true when date is in props.selected', () => {
  //     const day19 = childrenWrapper.find('CalendarDay').at(19);

  //     expect(day19.props()).toEqual(expect.objectContaining({
  //       selected: true,
  //     }));
  //   });

  //   it('renders a disabled day when date is in props.disabledDates', () => {
  //     const day3 = childrenWrapper.find('CalendarDay').at(3);
  //     const day4 = childrenWrapper.find('CalendarDay').at(4);

  //     expect(day3.props()).toEqual(expect.objectContaining({
  //       selected: false,
  //       selectable: false,
  //       disabled: true,
  //     }));

  //     expect(day4.props()).toEqual(expect.objectContaining({
  //       selected: false,
  //       selectable: false,
  //       disabled: true,
  //     }));
  //   });

  //   describe('when props.interactiveDisabledDates is present', () => {
  //     beforeEach(() => {
  //       props.interactiveDisabledDates = true;
  //       wrapper = shallowWithTheme(<DatePicker {...props} />, theme);
  //       childrenWrapper = wrapper.dive();
  //     });

  //     it('renders clickable disabled days', () => {
  //       const day3 = childrenWrapper.find('CalendarDay').at(3);
  //       const day4 = childrenWrapper.find('CalendarDay').at(4);

  //       expect(day3.props()).toEqual(expect.objectContaining({
  //         selected: false,
  //         selectable: false,
  //         disabled: false,
  //       }));

  //       expect(day4.props()).toEqual(expect.objectContaining({
  //         selected: false,
  //         selectable: false,
  //         disabled: false,
  //       }));
  //     });
  //   });
  // });
});
