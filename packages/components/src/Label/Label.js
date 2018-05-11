import PropTypes from 'prop-types';
import styled from 'styled-components';
import { hideVisually } from 'polished';
import { themeGet, textStyle, space, fontSize, fontWeight, color } from 'styled-system';
import tag from 'clean-tag';

const Label = styled(tag.label)`
  display: block;
  width: 100%;
  line-height: ${themeGet('lineHeights.normal')};

  ${props => props.hidden && hideVisually()}
  
  ${textStyle}
  ${space}
  ${fontSize}
  ${color}
  ${fontWeight}
`;

Label.propTypes = {
  ...textStyle.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...fontWeight.propTypes,
  hidden: PropTypes.bool,
};

Label.defaultProps = {
  textStyle: 'label',
  m: 0,
  mb: 3,
  hidden: false,
};

export default Label;
