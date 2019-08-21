import React from 'react';
import PropTypes from 'prop-types';
import subDays from 'date-fns/sub_days';

let Dayzed;

try {
  Dayzed = require('dayzed');
} catch (error) {
  console.error('"dayzed" is required to use the <DatePicker /> component');
}

import { Flex, Box } from '../';

import CalendarNav from './components/CalendarNav';
import CalendarMonth from './components/CalendarMonth';

const DatePicker = ({
  monthNames,
  weekdayNames,
  monthsToDisplay,
  stacked,
  disabledDates,
  interactiveDisabledDates,
  ...rest
}) => (
  <Dayzed
    {...rest}
    monthsToDisplay={monthsToDisplay}
    render={({ calendars, getBackProps, getForwardProps, getDateProps }) => {
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
                weeks={calendar.weeks}
                getDateProps={getDateProps}
                disabledDates={disabledDates}
                interactiveDisabledDates={interactiveDisabledDates}
              />
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
  monthNames: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
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
