import React from 'react';
import theme from 'theme';
import { shallowWithTheme } from 'testUtils';
import addDays from 'date-fns/addDays';

import CalendarDays from './';

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
      ],
    ],
    getDateProps: jest.fn,
  };

  const setup = (params = {}) => {
    const newProps = { ...props, ...params };
    wrapper = shallowWithTheme(<CalendarDays {...newProps} />, theme);
  };

  it('renders correctly', () => {
    setup();
    expect(wrapper).toMatchSnapshot();
  });

  describe('<CalendarDay />', () => {
    describe('highlighted', () => {
      describe('when isInRange is false', () => {
        it('props.highlighted is false', () => {
          setup({
            isInRange: () => false,
          });
          expect(
            wrapper
              .find('CalendarDay')
              .first()
              .prop('highlighted'),
          ).toEqual(false);
        });
      });

      describe('when isInRange is true', () => {
        it('props.highlighted is true', () => {
          setup({ isInRange: () => true });
          expect(
            wrapper
              .find('CalendarDay')
              .first()
              .prop('highlighted'),
          ).toEqual(true);
        });
      });
    });

    describe('disabled', () => {
      describe('when disabled dates are provided', () => {
        beforeEach(() =>
          setup({ disabledDates: [startDate, addDays(startDate, 1)] }),
        );

        it('provided dates are disabled', () => {
          expect(
            wrapper
              .find('CalendarDay')
              .at(0)
              .prop('disabled'),
          ).toEqual(true);
          expect(
            wrapper
              .find('CalendarDay')
              .at(1)
              .prop('disabled'),
          ).toEqual(true);
        });

        it('other dates are not disabled', () => {
          expect(
            wrapper
              .find('CalendarDay')
              .at(2)
              .prop('disabled'),
          ).toEqual(false);
          expect(
            wrapper
              .find('CalendarDay')
              .at(3)
              .prop('disabled'),
          ).toEqual(false);
        });
      });
    });
  });
});
