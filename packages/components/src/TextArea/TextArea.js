import PropTypes from 'prop-types';
import tag from 'clean-tag';

import { Input } from '..';

const Textarea = Input.withComponent(tag.textarea);

Textarea.propTypes = {
  ...Input.propTypes,
  rows: PropTypes.number,
};

Textarea.defaultProps = {
  ...Input.defaultProps,
  rows: 6,
};

export default Textarea;
