import PropTypes from 'prop-types';
import tag from 'clean-tag';

import { Input } from '..';

const TextArea = Input.withComponent(tag.textarea);

TextArea.propTypes = {
  rows: PropTypes.number,
  ...Input.propTypes,
};

TextArea.defaultProps = {
  rows: 6,
  ...Input.defaultProps,
};

export default TextArea;
