import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from 'components';

const ModalBody = ({ children, ...props }) => (
  <Box {...props}>
    <Text fontSize="xl" color="text">
      {children}
    </Text>
  </Box>
);

ModalBody.displayName = 'Modal.body';

ModalBody.defaultProps = {
  textAlign: 'center',
  px: 11,
  pt: 7,
  pb: 10,
};

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
  ...Box.propTypes,
};

export default ModalBody;
