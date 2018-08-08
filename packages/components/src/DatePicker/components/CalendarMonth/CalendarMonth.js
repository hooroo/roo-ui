import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';
import { isSameDay } from 'date-fns';

import { Box, Text } from '../../../';
import CalendarWeekdays from '../CalendarWeekdays';
import CalendarDays from '../CalendarDays';
import { CalendarDay, CalendarEmptyDay } from '../CalendarDay';

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

const MonthWrapper = Box.extend`
  text-align: center;
  padding: 0 ${themeGet('space.4')};
  width: ${props => `${100 / props.monthsToDisplay}%`};

  ${props => props.stacked &&
    css`
      width: 100%;
      margin-top: ${themeGet('space.8')};

      &:first-of-type {
        margin-top: 0;
      }
    `};
`;

const CalendarMonth = ({
  monthsToDisplay, month, monthName, year, stacked, weekdayNames,
  weeks, getDateProps, disabledDates, interactiveDisabledDates,
}) => (
  <MonthWrapper monthsToDisplay={monthsToDisplay} stacked={stacked}>
    <Text textStyle="caps">
      {monthName} {year}
    </Text>
    <CalendarWeekdays month={month} year={year} weekdayNames={weekdayNames} />
    <CalendarDays>
      {weeks.map(week =>
        week.map((day, index) => {
          if (!day) {
            return (
              <CalendarEmptyDay key={`${year}${month}${index}`} /> // eslint-disable-line react/no-array-index-key
            );
          }

          return (
            <CalendarDay
              key={`${year}${month}${index}`} // eslint-disable-line react/no-array-index-key
              {...getDateProps({ dateObj: day })}
              {...getCustomDateProps(disabledDates, interactiveDisabledDates, day)}
            >
              {day.date.getDate()}
            </CalendarDay>
          );
        }))}
    </CalendarDays>
  </MonthWrapper>
);

MonthWrapper.defaultProps = {
  ...Box.defaultProps,
  blacklist: [...Object.keys(Box.propTypes), 'monthsToDisplay', 'stacked'],
};

CalendarMonth.defaultProps = {
  monthsToDisplay: 1,
  stacked: false,
  disabledDates: [],
  interactiveDisabledDates: false,
};

CalendarMonth.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  monthName: PropTypes.string.isRequired,
  weeks: PropTypes.arrayOf(PropTypes.array).isRequired,
  weekdayNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  interactiveDisabledDates: PropTypes.bool,
  monthsToDisplay: PropTypes.number,
  stacked: PropTypes.bool,
  getDateProps: PropTypes.func.isRequired,
};

export default CalendarMonth;
