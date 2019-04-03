import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Input } from '..';

const Textarea = styled(Input)``;

Textarea.propTypes = {
  ...Input.propTypes,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  ...Input.defaultProps,
  as: 'textarea',
  rows: 6,
};

export default Textarea;
