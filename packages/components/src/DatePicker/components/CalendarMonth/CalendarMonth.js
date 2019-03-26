import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';
import { Box, Text } from '../../../';
import CalendarWeekdays from '../CalendarWeekdays';
import CalendarDays from '../CalendarDays';
import { styledOmitProps } from '../../../../lib';

const MonthWrapper = styledOmitProps(Box, { omit: ['monthsToDisplay', 'stacked'] })`
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

MonthWrapper.displayName = 'MonthWrapper';

const CalendarMonth = ({
  monthsToDisplay, month, monthName, year, stacked, weekdayNames,
  weeks, getDateProps, disabledDates, interactiveDisabledDates,
  onMouseEnterOfDay, isInRange,
}) => (
  <MonthWrapper monthsToDisplay={monthsToDisplay} stacked={stacked}>
    <Text textStyle="caps">
      {monthName} {year}
    </Text>
    <CalendarWeekdays month={month} year={year} weekdayNames={weekdayNames} />
    <CalendarDays
      weeks={weeks}
      month={month}
      year={year}
      getDateProps={getDateProps}
      disabledDates={disabledDates}
      interactiveDisabledDates={interactiveDisabledDates}
      onMouseEnterOfDay={onMouseEnterOfDay}
      isInRange={isInRange}
    />
  </MonthWrapper>
);

MonthWrapper.defaultProps = {
  ...Box.defaultProps,
};

CalendarMonth.defaultProps = {
  monthsToDisplay: 1,
  stacked: false,
  disabledDates: [],
  interactiveDisabledDates: false,
  isInRange: () => {},
  onMouseEnterOfDay: () => {},
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
  onMouseEnterOfDay: PropTypes.func,
  isInRange: PropTypes.func,
};

export default CalendarMonth;
