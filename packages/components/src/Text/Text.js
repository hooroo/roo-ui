import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import tag from 'clean-tag';
import { hideVisually } from 'polished';
import {
  textStyle,
  color,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  space,
  textAlign,
  style,
  display,
} from 'styled-system';

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
});

const Text = styled(tag.span)`
  ${textStyle}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${letterSpacing}
  ${lineHeight}
  ${space}
  ${textAlign}
  ${textDecoration}
  ${display}

  ${props => props.hidden && css`
    ${hideVisually()}
  `
}
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
  ...textDecoration.propTypes,
  ...display.propTypes,
  hidden: PropTypes.bool,
};

Text.defaultProps = {
  hidden: false,
  textStyle: 'text',
  blacklist: Object.keys(Text.propTypes),
};

export default Text;
