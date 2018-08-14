import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from '../../../';

const CalendarWeekday = ({ children, ...rest }) => (
  <Box width={1 / 7} {...rest}>
    <Text>{children}</Text>
  </Box>
);

CalendarWeekday.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CalendarWeekday;
