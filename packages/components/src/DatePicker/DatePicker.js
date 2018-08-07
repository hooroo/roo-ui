import React from 'react';
import PropTypes from 'prop-types';
import Dayzed from 'dayzed';
import { subDays, isSameDay } from 'date-fns';

import { Flex, Box } from '../';

import CalendarNav from './components/CalendarNav';
import CalendarMonth from './components/CalendarMonth';
import { CalendarDay, CalendarEmptyDay, CalendarDays } from './components/CalendarDays';

const getCustomDateProps = (disabledDates, interactiveDisabledDates, day) => {
  const isDisabled = disabledDates
    .filter(disabledDate => isSameDay(disabledDate, day.date))
    .length;
  const props = {
    selected: day.selected,
    selectable: day.selectable,
  };

  if (isDisabled) {
    props.selectable = false;
    props.disabled = !interactiveDisabledDates;
  }

  return props;
};

const DatePicker = ({
  monthNames, weekdayNames, monthsToDisplay, stacked,
  disabledDates, interactiveDisabledDates, ...rest
}) => (
  <Dayzed
    {...rest}
    monthsToDisplay={monthsToDisplay}
    render={({
        calendars,
        getBackProps,
        getForwardProps,
        getDateProps,
      }) => {
        if (!calendars.length) return null;

        return (
          <Box position="relative">
            <CalendarNav
              prevProps={getBackProps({ calendars })}
              nextProps={getForwardProps({ calendars })}
            />

            <Flex flexWrap="wrap">
              {calendars.map(calendar => (
                <CalendarMonth
                  key={`${calendar.month}${calendar.year}`}
                  monthsToDisplay={monthsToDisplay}
                  monthName={monthNames[calendar.month]}
                  month={calendar.month}
                  year={calendar.year}
                  stacked={stacked}
                  weekdayNames={weekdayNames}
                >
                  <CalendarDays>
                    {calendar.weeks.map(week =>
                      week.map((day, index) => {
                        if (!day) {
                          return (
                            <CalendarEmptyDay key={`${calendar.year}${calendar.month}${index}`} /> // eslint-disable-line react/no-array-index-key

                          );
                        }

                        return (
                          <CalendarDay
                            key={`${calendar.year}${calendar.month}${index}`} // eslint-disable-line react/no-array-index-key
                            {...getDateProps({ dateObj: day })}
                            {...getCustomDateProps(disabledDates, interactiveDisabledDates, day)}

                          >
                            {day.date.getDate()}
                          </CalendarDay>
                        );
                      }))}
                  </CalendarDays>
                </CalendarMonth>
              ))}
            </Flex>
          </Box>
        );
      }}
  />
);

DatePicker.defaultProps = {
  monthsToDisplay: 1,
  firstDayOfWeek: 1,
  stacked: false,
  minDate: subDays(new Date(), 1),
  disabledDates: [],
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  interactiveDisabledDates: false,
};

DatePicker.propTypes = {
  ...Dayzed.propTypes,
  monthsToDisplay: PropTypes.number,
  firstDayOfWeek: PropTypes.number,
  stacked: PropTypes.bool,
  minDate: PropTypes.instanceOf(Date),
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  interactiveDisabledDates: PropTypes.bool,
  monthNames: PropTypes.arrayOf(PropTypes.string),
  weekdayNames: PropTypes.arrayOf(PropTypes.string),
};

export default DatePicker;
