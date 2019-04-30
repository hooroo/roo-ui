import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
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
import omitProps from '../omitProps';

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
});

const Text = styled('span', omitProps())`
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
};

Text.displayName = 'Text';

export default Text;
