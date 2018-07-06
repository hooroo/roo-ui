import React from 'react';
import PropTypes from 'prop-types';
import Dayzed from 'dayzed';
import { subDays } from 'date-fns';

import { Flex, Box } from '../';
import {
  CalendarDay as Day,
  CalendarEmptyDay as EmptyDay,
  CalendarDays as Days,
  CalendarWeekday as Weekday,
  CalendarWeekdays as Weekdays,
  CalendarNav as Nav,
  CalendarMonth as Month,
} from '.';

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
            <Nav
              prevProps={getBackProps({ calendars })}
              nextProps={getForwardProps({ calendars })}
            />

            <Flex flexWrap="wrap">
              {calendars.map(calendar => (
                <Month
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
                            <EmptyDay key={`${calendar.year}${calendar.month}${index}`} /> // eslint-disable-line react/no-array-index-key

                          );
                        }
                        return (
                          <Day
                            key={`${calendar.year}${calendar.month}${index}`} // eslint-disable-line react/no-array-index-key
                            selected={dateObj.selected}
                            selectable={dateObj.selectable}
                            {...getDateProps({ dateObj })}
                          >
                            {dateObj.date.getDate()}
                          </Day>
                        );
                      }))}
                  </Days>
                </Month>
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
  minDate: subDays(new Date(), 1),
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
