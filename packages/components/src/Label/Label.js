import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideVisually } from 'polished';
import { themeGet, textStyle, space } from 'styled-system';
import tag from 'clean-tag';

const Label = styled(tag.label)`
  display: block;
  width: 100%;
  margin: 0;
  margin-bottom: ${themeGet('space.3')};

  ${props => props.hidden && hideVisually()}

  ${textStyle}
  ${space}
`;

Label.propTypes = {
  ...textStyle.propTypes,
  ...space.propTypes,
  hidden: PropTypes.bool,
};

Label.defaultProps = {
  textStyle: 'label',
  hidden: false,
};

Label.displayName = 'Label';

export default Label;
