/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import Dayzed from 'dayzed';

import { Flex, Box } from '../';
import { Day, EmptyDay, Days } from './components/Days';
import { Weekday, Weekdays } from './components/Weekdays';
import Nav from './components/Nav';
import CalendarMonth from './components/CalendarMonth';

const Wrapper = Box.extend`
  position: relative;
`;

const Calendar = ({
  initialMonth, onDateSelected, monthsToDisplay,
  minDate, maxDate, selected, monthNames, weekdayNames,
}) => (
  <Dayzed
    date={initialMonth}
    onDateSelected={onDateSelected}
    selected={selected}
    monthsToDisplay={monthsToDisplay}
    minDate={minDate}
    maxDate={maxDate}
    render={({
        calendars,
        getBackProps,
        getForwardProps,
        getDateProps,
      }) => {
        if (!calendars.length) return null;

        return (
          <Wrapper>
            <Nav
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
                  <Weekdays>
                    {weekdayNames.map(weekday => (
                      <Weekday key={`${calendar.month}${calendar.year}${weekday}`}>
                        {weekday}
                      </Weekday>
                    ))}
                  </Weekdays>

                  <Days>
                    {calendar.weeks.map(week =>
                      week.map((dateObj, index) => {
                        if (!dateObj) {
                          return (
                            <EmptyDay key={`${calendar.year}${calendar.month}${index}`} />
                          );
                        }
                        return (
                          <Day
                            key={`${calendar.year}${calendar.month}${index}`}
                            selected={dateObj.selected}
                            selectable={dateObj.selectable}
                            {...getDateProps({ dateObj })}
                          >
                            {dateObj.date.getDate()}
                          </Day>
                        );
                      }))}
                  </Days>
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
  initialMonth: null,
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
  initialMonth: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  selected: PropTypes.instanceOf(Date),
  monthNames: PropTypes.arrayOf(PropTypes.string),
};

export default Calendar;
