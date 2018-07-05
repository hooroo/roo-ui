/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import Dayzed from 'dayzed';

import { Flex, Box } from '../';
import { CalendarDay, CalendarEmptyDay, CalendarDays, CalendarWeekday, CalendarWeekdays, CalendarNav, CalendarMonth } from '.';

const Wrapper = Box.extend`
  position: relative;
`;

const Calendar = ({
  monthNames, weekdayNames, monthsToDisplay, ...rest
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
          <Wrapper>
            <CalendarNav
              prevProps={getBackProps({ calendars })}
              nextProps={getForwardProps({ calendars })}
            />

            <Flex flexWrap="wrap">
              {calendars.map(calendar => (
                <CalendarMonth
                  key={`${calendar.month}${calendar.year}`}
                  monthsToDisplay={monthsToDisplay}
                  month={monthNames[calendar.month]}
                  year={calendar.year}
                >
                  <CalendarWeekdays>
                    {weekdayNames.map(weekday => (
                      <CalendarWeekday key={`${calendar.month}${calendar.year}${weekday}`}>
                        {weekday}
                      </CalendarWeekday>
                    ))}
                  </CalendarWeekdays>

                  <CalendarDays>
                    {calendar.weeks.map(week =>
                      week.map((dateObj, index) => {
                        if (!dateObj) {
                          return (
                            <CalendarEmptyDay key={`${calendar.year}${calendar.month}${index}`} />
                          );
                        }
                        return (
                          <CalendarDay
                            key={`${calendar.year}${calendar.month}${index}`}
                            selected={dateObj.selected}
                            selectable={dateObj.selectable}
                            {...getDateProps({ dateObj })}
                          >
                            {dateObj.date.getDate()}
                          </CalendarDay>
                        );
                      }))}
                  </CalendarDays>
                </CalendarMonth>
              ))}
            </Flex>
          </Wrapper>
        );
      }}
  />
);

Calendar.defaultProps = {
  monthsToDisplay: 1,
  date: null,
  selected: null,
  minDate: null,
  maxDate: null,
  monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};

Calendar.propTypes = {
  monthsToDisplay: PropTypes.number,
  onDateSelected: PropTypes.func.isRequired,
  weekdayNames: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  selected: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  ]),
  monthNames: PropTypes.arrayOf(PropTypes.string),
};

export default Calendar;
