import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Input } from '../';

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
