import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from 'components';

const ModalFooter = ({ children, ...props }) => (
  <Flex {...props}>{children}</Flex>
);

ModalFooter.displayName = 'Modal.footer';

ModalFooter.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  px: 11,
  pb: 11,
};

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
  ...Flex.propTypes,
};

export default ModalFooter;
