import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';

import { Box, Text } from '../../../';
import CalendarWeekdays from '../CalendarWeekdays';

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
  monthsToDisplay, month, monthName, year, stacked, children, weekdayNames,
}) => (
  <MonthWrapper monthsToDisplay={monthsToDisplay} stacked={stacked}>
    <Text textStyle="caps">
      {monthName} {year}
    </Text>
    <CalendarWeekdays month={month} year={year} weekdayNames={weekdayNames} />
    {children}
  </MonthWrapper>
);

MonthWrapper.defaultProps = {
  ...Box.defaultProps,
  blacklist: [...Object.keys(Box.propTypes), 'monthsToDisplay', 'stacked'],
};

CalendarMonth.defaultProps = {
  monthsToDisplay: 1,
  stacked: false,
};

CalendarMonth.propTypes = {
  monthsToDisplay: PropTypes.number,
  month: PropTypes.number.isRequired,
  monthName: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  stacked: PropTypes.bool,
  weekdayNames: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CalendarMonth;
