import styled from 'styled-components';
import tag from 'clean-tag';
import {
  textStyle,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign,
} from 'styled-system';

const Text = styled(tag.span)`
  ${textStyle}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${space}
  ${textAlign}
`;

Text.paragraph = Text.withComponent(tag.p);
Text.paragraph.defaultProps = {
  textStyle: 'text',
  m: 0,
  mb: 2,
};

Text.propTypes = {
  ...textStyle.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...letterSpacing.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
};

Text.defaultProps = {
  textStyle: 'text',
};

export default Text;
