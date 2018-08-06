import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';

import { Box, Flex, Text } from '../../../';

export const CalendarWeekdays = Flex.extend`
  padding-bottom: ${themeGet('space.2')};
  margin-top: ${themeGet('space.5')};
  margin-bottom: ${themeGet('space.3')};
  border-bottom: ${themeGet('borders.1')} ${themeGet('colors.greys.alto')};
`;

export const CalendarWeekday = ({ children, ...rest }) => (
  <Box width={1 / 7} {...rest}>
    <Text>{children}</Text>
  </Box>
);

CalendarWeekday.propTypes = {
  children: PropTypes.node.isRequired,
};
