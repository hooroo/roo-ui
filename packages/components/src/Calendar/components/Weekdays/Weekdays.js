import React from 'react';
import PropTypes from 'prop-types';
import { themeGet } from 'styled-system';

import { Box, Flex, Text } from '../../../';

export const Weekdays = Flex.extend`
  padding-bottom: ${themeGet('space.2')};
  margin-top: ${themeGet('space.5')};
  margin-bottom: ${themeGet('space.3')};
  border-bottom: ${themeGet('borders.1')} ${themeGet('colors.grey.2')};
`;

export const Weekday = ({ children, ...rest }) => (
  <Box width={1 / 7} {...rest}>
    <Text>{children}</Text>
  </Box>
);

Weekday.propTypes = {
  children: PropTypes.node.isRequired,
};

