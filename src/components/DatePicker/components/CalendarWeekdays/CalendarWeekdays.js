import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';

import { Flex } from 'components';
import CalendarWeekday from '../CalendarWeekday';

const CalendarWeekdaysWrapper = styled(Flex)`
  padding-bottom: ${themeGet('space.2')};
  margin-top: ${themeGet('space.5')};
  margin-bottom: ${themeGet('space.3')};
  border-bottom: ${themeGet('borders.1')} ${themeGet('colors.greys.alto')};
`;

const CalendarWeekdays = ({ weekdayNames, month, year }) => (
  <CalendarWeekdaysWrapper>
    {weekdayNames.map((weekday, index) => (
      <CalendarWeekday key={`${month}${year}${weekday}${index}`}>
        {' '}
        {/* eslint-disable-line react/no-array-index-key */}
        {weekday}
      </CalendarWeekday>
    ))}
  </CalendarWeekdaysWrapper>
);

CalendarWeekdays.propTypes = {
  weekdayNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

export default CalendarWeekdays;
