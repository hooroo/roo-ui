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
  themeGet,
} from 'styled-system';

const Text = styled(tag.p)`
  margin: 0;
  margin-bottom: ${themeGet('space.2')};

  ${textStyle}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${space}
  ${textAlign}
`;

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

Text.displayName = 'Text';

export default Text;
