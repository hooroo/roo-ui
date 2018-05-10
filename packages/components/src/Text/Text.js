import styled from 'styled-components';
import tag from 'clean-tag';
import {
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign,
} from 'styled-system';

const Text = styled(tag.p)`
  ${color}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${space}
  ${textAlign}
`;

Text.propTypes = {
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
};

Text.defaultProps = {
  fontSize: 'base',
  lineHeight: 'loose',
  fontWeight: 'normal',
  m: 0,
  mb: 2,
};

export default Text;
