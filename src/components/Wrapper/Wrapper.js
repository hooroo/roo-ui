import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import { Box } from '../';

const Wrapper = ({ children, ...rest }) => {
  return isEmpty(rest) ? (
    <Fragment>{children}</Fragment>
  ) : (
    <Box {...rest}>{children}</Box>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node,
};

Wrapper.defaultProps = {
  children: null,
};

export default Wrapper;
