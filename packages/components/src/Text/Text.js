import PropTypes from 'prop-types';
import { css } from 'styled-components';
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
import { styledOmitProps } from '../../lib';

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
});

const propTypes = {
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

const Text = styledOmitProps('span', { omit: Object.keys(propTypes) })`
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

Text.propTypes = propTypes;

Text.defaultProps = {
  hidden: false,
  textStyle: 'text',
};

Text.displayName = 'Text';

export default Text;
