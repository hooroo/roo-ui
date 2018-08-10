import React from 'react';
import PropTypes from 'prop-types';

import { Box, Text } from '../../..';

const ModalBody = ({ children, ...props }) => (
  <Box {...props}>
    <Text fontSize="xl" color="text">
      {children}
    </Text>
  </Box>
);

ModalBody.displayName = 'Modal.body';

ModalBody.defaultProps = {
  textAlign: 'center', // eslint-disable-line react/default-props-match-prop-types
  px: 11, // eslint-disable-line react/default-props-match-prop-types
  pt: 7, // eslint-disable-line react/default-props-match-prop-types
  pb: 10, // eslint-disable-line react/default-props-match-prop-types
};

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
  ...Box.propTypes,
};

export default ModalBody;
