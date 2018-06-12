import PropTypes from 'prop-types';
import tag from 'clean-tag';

import { Input } from '..';

const TextArea = Input.withComponent(tag.textarea);

TextArea.propTypes = {
  ...Input.propTypes,
  rows: PropTypes.number,
};

TextArea.defaultProps = {
  ...Input.defaultProps,
  rows: 6,
};

export default TextArea;
