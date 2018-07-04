import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';
import { css } from 'styled-components';

import { Box, Text } from '../../../';

const Wrapper = Box.extend`
  text-align: center;
  padding: 0 ${themeGet('space.4')};
  width: 100%;

  ${props => props.monthsToDisplay === 2 &&
    css`
      width: ${100 / 2}%;
    `};

  ${props => props.monthsToDisplay === 3 &&
    css`
      width: ${100 / 3}%;
    `};
`;

const CalendarMonth = ({
  monthsToDisplay, month, year, children,
}) => (
  <Wrapper monthsToDisplay={monthsToDisplay}>
    <Text textStyle="caps">
      {month} {year}
    </Text>
    {children}
  </Wrapper>
);

Wrapper.defaultProps = {
  ...Box.defaultProps,
  blacklist: [...Object.keys(Box.propTypes), 'monthsToDisplay'],
};

CalendarMonth.defaultProps = {
  monthsToDisplay: 1,
}

CalendarMonth.propTypes = {
  monthsToDisplay: PropTypes.number,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default CalendarMonth;
