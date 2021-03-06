import React from 'react';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import range from 'lodash/range';
import theme from 'theme';
import { mountWithTheme } from 'testUtils';

import DateRangePicker from './DateRangePicker';

const dateToString = date => format(date, 'yyyy-MM-dd');
const rangeInclusive = (start = 0, end = 0) => range(start, end + 1);
const getDayOfMonth = (wrapper, dayOfMonth) =>
  wrapper.find('CalendarDay').at(dayOfMonth - 1);

describe('<DateRangePicker />', () => {
  let wrapper;

  const defaultProps = {
    minDate: parseISO('2018-07-01'),
    onRangeSelected: jest.fn,
    monthsToDisplay: 1,
    stacked: true,
    weekdayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    disabledDates: [parseISO('2018-07-04'), parseISO('2018-07-05')],
  };

  const setup = (args = {}) => {
    const props = { ...defaultProps, ...args };
    wrapper = mountWithTheme(<DateRangePicker {...props} />, theme);
  };

  describe('when initial dates are passed in', () => {
    describe('and those dates are in the same month as the minDate', () => {
      const initialStartDate = new Date('2018-07-15');
      const initialEndDate = new Date('2018-07-20');

      beforeEach(() => setup({ initialStartDate, initialEndDate }));

      it('displays the correct month', () => {
        const MonthWrapper = wrapper.find('MonthWrapper');
        expect(
          MonthWrapper.find('Text')
            .first()
            .text(),
        ).toEqual('Jul 2018');
      });
    });

    describe('and those dates are in advance of the minDate', () => {
      const initialStartDate = new Date('2018-11-15');
      const initialEndDate = new Date('2018-11-20');

      beforeEach(() => setup({ initialStartDate, initialEndDate }));

      it('displays the correct month', () => {
        const MonthWrapper = wrapper.find('MonthWrapper');
        expect(
          MonthWrapper.find('Text')
            .first()
            .text(),
        ).toEqual('Nov 2018');
      });
    });
  });

  describe('disabledDates', () => {
    const initialStartDate = new Date('2018-07-15');
    const initialEndDate = new Date('2018-07-20');

    beforeEach(() => setup({ initialStartDate, initialEndDate }));

    it('disables dates in disabledDates array', () => {
      const date4 = wrapper.find('CalendarDay').at(3);
      const date5 = wrapper.find('CalendarDay').at(4);

      expect(date4.props()).toEqual(
        expect.objectContaining({
          selected: false,
          selectable: false,
          disabled: true,
        }),
      );

      expect(date5.props()).toEqual(
        expect.objectContaining({
          selected: false,
          selectable: false,
          disabled: true,
        }),
      );
    });

    it('does not disable other dates', () => {
      const date3 = wrapper.find('CalendarDay').at(2);
      const date6 = wrapper.find('CalendarDay').at(5);

      expect(date3.props()).not.toEqual(
        expect.objectContaining({ disabled: true }),
      );
      expect(date6.props()).not.toEqual(
        expect.objectContaining({ disabled: true }),
      );
    });
  });

  describe('preselected range', () => {
    const initialStartDate = parseISO('2018-07-15');
    const initialEndDate = parseISO('2018-07-20');

    beforeEach(() => {
      setup({ initialStartDate, initialEndDate });
    });

    it('highlights dates in range', () => {
      rangeInclusive(15, 20).forEach(index => {
        const day = getDayOfMonth(wrapper, index);
        expect(day.props()).toEqual(
          expect.objectContaining({ highlighted: true }),
        );
      });
    });

    it('selects start & end dates', () => {
      const day15 = wrapper.find('CalendarDay').at(14);
      const day20 = wrapper.find('CalendarDay').at(19);

      expect(day15.props()).toEqual(
        expect.objectContaining({ selected: true }),
      );
      expect(day20.props()).toEqual(
        expect.objectContaining({ selected: true }),
      );
    });
  });

  describe('callbacks', () => {
    let callback;

    describe('when selecting three sequential days', () => {
      beforeEach(() => {
        callback = jest.fn();
        const initialDisplayDate = parseISO('2018-07-15');
        setup({ initialDisplayDate, onChangeDates: callback });
        getDayOfMonth(wrapper, 1)
          .find('button')
          .simulate('click');
        getDayOfMonth(wrapper, 2)
          .find('button')
          .simulate('click');
        getDayOfMonth(wrapper, 3)
          .find('button')
          .simulate('click');
        wrapper.update();
      });

      it('calls the callback three times', () => {
        expect(callback).toHaveBeenCalledTimes(3);
      });

      it('calls the first callback with only the correct start date', () => {
        expect(dateToString(callback.mock.calls[0][0].startDate)).toEqual(
          '2018-07-01',
        );
        expect(callback.mock.calls[0][0].endDate).toBeNull();
      });

      it('calls the second callback with the correct start and end dates', () => {
        expect(dateToString(callback.mock.calls[1][0].startDate)).toEqual(
          '2018-07-01',
        );
        expect(dateToString(callback.mock.calls[1][0].endDate)).toEqual(
          '2018-07-02',
        );
      });

      it('calls the third callback with the correct start date and resets the end date', () => {
        expect(dateToString(callback.mock.calls[2][0].startDate)).toEqual(
          '2018-07-03',
        );
        expect(callback.mock.calls[2][0].endDate).toBeNull();
      });
    });
  });

  describe('when only start date is set', () => {
    const initialStartDate = parseISO('2018-07-15');

    describe('with isSettingStartDate is false', () => {
      const isSettingStartDate = false;

      beforeEach(() => {
        setup({ initialStartDate, isSettingStartDate });
      });

      it('selects start date', () => {
        const day15 = wrapper.find('CalendarDay').at(14);
        expect(day15.props()).toEqual(
          expect.objectContaining({ selected: true }),
        );
      });

      describe('with mouse on a past date', () => {
        let hoverdDate;

        beforeEach(() => {
          hoverdDate = wrapper.find('CalendarDay').at(11);
          hoverdDate.simulate('mouseEnter');
          wrapper.update();
        });

        it('selects start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('does not highlight range', () => {
          const date13 = wrapper.find('CalendarDay').at(12);
          const date14 = wrapper.find('CalendarDay').at(13);

          expect(date13.props()).not.toEqual(
            expect.objectContaining({ highlighted: true }),
          );
          expect(date14.props()).not.toEqual(
            expect.objectContaining({ highlighted: true }),
          );
        });
      });

      describe('when click on a past date', () => {
        let newClickedDate;

        beforeEach(() => {
          wrapper
            .find('CalendarDay')
            .at(11)
            .find('button')
            .simulate('click');
          wrapper.update();
          newClickedDate = wrapper.find('CalendarDay').at(11);
        });

        it('deselects original start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).not.toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('selects the new start date', () => {
          expect(newClickedDate.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });
      });

      describe('with mouse on a future date', () => {
        let date18;

        beforeEach(() => {
          date18 = wrapper.find('CalendarDay').at(17);
          date18.find('button').simulate('mouseEnter');

          wrapper.update();
        });

        it('selects start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('highlights the range', () => {
          const date16 = wrapper.find('CalendarDay').at(15);
          const date17 = wrapper.find('CalendarDay').at(16);

          expect(date16.props()).toEqual(
            expect.objectContaining({ highlighted: true }),
          );
          expect(date17.props()).toEqual(
            expect.objectContaining({ highlighted: true }),
          );
        });
      });

      describe('when click on a future date', () => {
        let date18;

        beforeEach(() => {
          wrapper
            .find('CalendarDay')
            .at(17)
            .find('button')
            .simulate('click');
          wrapper.update();
          date18 = wrapper.find('CalendarDay').at(17);
        });

        it('selects original start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('selects the new start date', () => {
          expect(date18.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('highlights the range', () => {
          const date16 = wrapper.find('CalendarDay').at(15);
          const date17 = wrapper.find('CalendarDay').at(16);

          expect(date16.props()).toEqual(
            expect.objectContaining({ highlighted: true }),
          );
          expect(date17.props()).toEqual(
            expect.objectContaining({ highlighted: true }),
          );
        });
      });
    });

    describe('with isSettingStartDate is true', () => {
      const isSettingStartDate = true;

      beforeEach(() => {
        setup({ initialStartDate, isSettingStartDate });
      });

      it('selects start date', () => {
        const day15 = wrapper.find('CalendarDay').at(14);
        expect(day15.props()).toEqual(
          expect.objectContaining({ selected: true }),
        );
      });

      describe('with mouse on a past date', () => {
        let hoverdDate;

        beforeEach(() => {
          hoverdDate = wrapper.find('CalendarDay').at(11);
          hoverdDate.simulate('mouseEnter');
          wrapper.update();
        });

        it('selects start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('does not highlight range', () => {
          const date13 = wrapper.find('CalendarDay').at(12);
          const date14 = wrapper.find('CalendarDay').at(13);

          expect(date13.props()).not.toEqual(
            expect.objectContaining({ highlighted: true }),
          );
          expect(date14.props()).not.toEqual(
            expect.objectContaining({ highlighted: true }),
          );
        });
      });

      describe('when click on a past date', () => {
        let newClickedDate;

        beforeEach(() => {
          wrapper
            .find('CalendarDay')
            .at(11)
            .find('button')
            .simulate('click');
          wrapper.update();
          newClickedDate = wrapper.find('CalendarDay').at(11);
        });

        it('deselects original start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).not.toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('selects the new start date', () => {
          expect(newClickedDate.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });
      });

      describe('with mouse on a future date', () => {
        let date18;

        beforeEach(() => {
          date18 = wrapper.find('CalendarDay').at(17);
          date18.find('button').simulate('mouseEnter');

          wrapper.update();
        });

        it('selects start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('does not highlight the range', () => {
          const date16 = wrapper.find('CalendarDay').at(15);
          const date17 = wrapper.find('CalendarDay').at(16);

          expect(date16.props()).not.toEqual(
            expect.objectContaining({ highlighted: true }),
          );
          expect(date17.props()).not.toEqual(
            expect.objectContaining({ highlighted: true }),
          );
        });
      });

      describe('when click on a future date', () => {
        let date18;

        beforeEach(() => {
          wrapper
            .find('CalendarDay')
            .at(17)
            .find('button')
            .simulate('click');
          wrapper.update();
          date18 = wrapper.find('CalendarDay').at(17);
        });

        it('deselects original start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).not.toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('selects the new start date', () => {
          expect(date18.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('does not highlight the range', () => {
          const date16 = wrapper.find('CalendarDay').at(15);
          const date17 = wrapper.find('CalendarDay').at(16);

          expect(date16.props()).not.toEqual(
            expect.objectContaining({ highlighted: true }),
          );
          expect(date17.props()).not.toEqual(
            expect.objectContaining({ highlighted: true }),
          );
        });
      });
    });

    describe('with isSettingEndDate is true', () => {
      const isSettingEndDate = true;

      beforeEach(() => {
        setup({ initialStartDate, isSettingEndDate });
      });

      it('selects start date', () => {
        const day15 = wrapper.find('CalendarDay').at(14);
        expect(day15.props()).toEqual(
          expect.objectContaining({ selected: true }),
        );
      });

      describe('with mouse on a past date', () => {
        let hoverdDate;

        beforeEach(() => {
          hoverdDate = wrapper.find('CalendarDay').at(11);
          hoverdDate.simulate('mouseEnter');
          wrapper.update();
        });

        it('selects start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('does not highlight range', () => {
          const date13 = wrapper.find('CalendarDay').at(12);
          const date14 = wrapper.find('CalendarDay').at(13);

          expect(date13.props()).not.toEqual(
            expect.objectContaining({ highlighted: true }),
          );
          expect(date14.props()).not.toEqual(
            expect.objectContaining({ highlighted: true }),
          );
        });
      });

      describe('when click on a past date', () => {
        let newClickedDate;

        beforeEach(() => {
          wrapper
            .find('CalendarDay')
            .at(11)
            .find('button')
            .simulate('click');
          wrapper.update();
          newClickedDate = wrapper.find('CalendarDay').at(11);
        });

        it('deselects original start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).not.toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('selects the new start date', () => {
          expect(newClickedDate.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });
      });

      describe('with mouse on a future date', () => {
        let date18;

        beforeEach(() => {
          date18 = wrapper.find('CalendarDay').at(17);
          date18.find('button').simulate('mouseEnter');

          wrapper.update();
        });

        it('selects start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('highlights the range', () => {
          const date16 = wrapper.find('CalendarDay').at(15);
          const date17 = wrapper.find('CalendarDay').at(16);

          expect(date16.props()).toEqual(
            expect.objectContaining({ highlighted: true }),
          );
          expect(date17.props()).toEqual(
            expect.objectContaining({ highlighted: true }),
          );
        });
      });

      describe('when click on a future date', () => {
        let date18;

        beforeEach(() => {
          wrapper
            .find('CalendarDay')
            .at(17)
            .find('button')
            .simulate('click');
          wrapper.update();
          date18 = wrapper.find('CalendarDay').at(17);
        });

        it('selects original start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('selects the new start date', () => {
          expect(date18.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('highlights the range', () => {
          const date16 = wrapper.find('CalendarDay').at(15);
          const date17 = wrapper.find('CalendarDay').at(16);

          expect(date16.props()).toEqual(
            expect.objectContaining({ highlighted: true }),
          );
          expect(date17.props()).toEqual(
            expect.objectContaining({ highlighted: true }),
          );
        });
      });
    });
  });

  describe('when start date & end date are set', () => {
    const initialStartDate = parseISO('2018-07-15');
    const initialEndDate = parseISO('2018-07-20');

    describe('with isSettingStartDate is true', () => {
      const isSettingStartDate = true;

      beforeEach(() => {
        setup({ initialStartDate, initialEndDate, isSettingStartDate });
      });

      describe('when click on a date < endDate', () => {
        let newClickedDate;

        beforeEach(() => {
          wrapper
            .find('CalendarDay')
            .at(11)
            .find('button')
            .simulate('click');
          wrapper.update();
          newClickedDate = wrapper.find('CalendarDay').at(11);
        });

        it('deselects original start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).not.toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('selects the new start date', () => {
          expect(newClickedDate.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('keeps end date selected', () => {
          const day20 = wrapper.find('CalendarDay').at(19);
          expect(day20.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });
      });

      describe('when click on a date > endDate', () => {
        let newClickedDate;

        beforeEach(() => {
          wrapper
            .find('CalendarDay')
            .at(22)
            .find('button')
            .simulate('click');
          wrapper.update();
          newClickedDate = wrapper.find('CalendarDay').at(22);
        });

        it('deselects original start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).not.toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('selects the new start date', () => {
          expect(newClickedDate.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('deselects end date', () => {
          const day20 = wrapper.find('CalendarDay').at(19);
          expect(day20.props()).not.toEqual(
            expect.objectContaining({ selected: true }),
          );
        });
      });
    });

    describe('with isSettingEndDate is true', () => {
      const isSettingEndDate = true;

      beforeEach(() => {
        setup({ initialStartDate, initialEndDate, isSettingEndDate });
      });

      describe('when click on a date > startDate', () => {
        let newClickedDate;

        beforeEach(() => {
          wrapper
            .find('CalendarDay')
            .at(17)
            .find('button')
            .simulate('click');
          wrapper.update();
          newClickedDate = wrapper.find('CalendarDay').at(17);
        });

        it('keeps start date selected', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('selects the new end date', () => {
          expect(newClickedDate.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('deselects end date', () => {
          const day20 = wrapper.find('CalendarDay').at(19);
          expect(day20.props()).not.toEqual(
            expect.objectContaining({ selected: true }),
          );
        });
      });

      describe('when click on a date < startDate', () => {
        let newClickedDate;

        beforeEach(() => {
          wrapper
            .find('CalendarDay')
            .at(11)
            .find('button')
            .simulate('click');
          wrapper.update();
          newClickedDate = wrapper.find('CalendarDay').at(11);
        });

        it('deselects start date', () => {
          const day15 = wrapper.find('CalendarDay').at(14);
          expect(day15.props()).not.toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('selects the new start date', () => {
          expect(newClickedDate.props()).toEqual(
            expect.objectContaining({ selected: true }),
          );
        });

        it('deselects endDate', () => {
          const day20 = wrapper.find('CalendarDay').at(19);
          expect(day20.props()).not.toEqual(
            expect.objectContaining({ selected: true }),
          );
        });
      });
    });

    describe('with isSettingStartDate is false and isSettingEndDate is false', () => {
      let newClickedDate;

      beforeEach(() => {
        setup({ initialStartDate, initialEndDate });

        wrapper
          .find('CalendarDay')
          .at(22)
          .find('button')
          .simulate('click');
        wrapper.update();
        newClickedDate = wrapper.find('CalendarDay').at(22);
      });

      it('deselects start date', () => {
        const day15 = wrapper.find('CalendarDay').at(14);
        expect(day15.props()).not.toEqual(
          expect.objectContaining({ selected: true }),
        );
      });

      it('selects the new start date', () => {
        expect(newClickedDate.props()).toEqual(
          expect.objectContaining({ selected: true }),
        );
      });

      it('deselects endDate', () => {
        const day20 = wrapper.find('CalendarDay').at(19);
        expect(day20.props()).not.toEqual(
          expect.objectContaining({ selected: true }),
        );
      });
    });
  });
});
