import React from 'react';
import PropTypes from 'prop-types';

import { Flex } from '../../..';

const ModalFooter = ({ children, ...props }) => (
  <Flex {...props}>
    {children}
  </Flex>
);

ModalFooter.displayName = 'Modal.footer';

ModalFooter.defaultProps = {
  alignItems: 'center', // eslint-disable-line react/default-props-match-prop-types
  justifyContent: 'center', // eslint-disable-line react/default-props-match-prop-types
  px: 11, // eslint-disable-line react/default-props-match-prop-types
  pb: 11, // eslint-disable-line react/default-props-match-prop-types
};

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
  ...Flex.propTypes,
};

export default ModalFooter;
