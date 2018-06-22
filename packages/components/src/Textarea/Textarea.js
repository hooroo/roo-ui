import PropTypes from 'prop-types';
import { Input } from '..';

const Textarea = Input.extend``;

Textarea.propTypes = {
  ...Input.propTypes,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  ...Input.defaultProps,
  is: 'textarea',
  rows: 6,
};

export default Textarea;
