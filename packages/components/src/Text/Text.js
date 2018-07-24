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
  hidden: PropTypes.bool,
};

Text.defaultProps = {
  hidden: false,
  textStyle: 'text',
};

export default Text;
