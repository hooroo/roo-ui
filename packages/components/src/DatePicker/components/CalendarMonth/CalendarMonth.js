import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';

import { Box, Text } from '../../../';

const Wrapper = Box.extend`
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
  monthsToDisplay, month, year, stacked, children,
}) => (
  <Wrapper monthsToDisplay={monthsToDisplay} stacked={stacked}>
    <Text textStyle="caps">
      {month} {year}
    </Text>
    {children}
  </Wrapper>
);

Wrapper.defaultProps = {
  ...Box.defaultProps,
  blacklist: [...Object.keys(Box.propTypes), 'monthsToDisplay', 'stacked'],
};

CalendarMonth.defaultProps = {
  monthsToDisplay: 1,
  stacked: false,
};

CalendarMonth.propTypes = {
  monthsToDisplay: PropTypes.number,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  stacked: PropTypes.bool,
};

export default CalendarMonth;
