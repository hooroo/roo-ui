import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import tag from 'clean-tag';
import { themeGet, space, color, bgColor, boxShadow, variant } from 'styled-system';
import get from 'lodash/get';

const FALLBACK_BG_COLOR = '#000';

const buttonStyle = variant({ key: 'buttons' });

const getBackground = props =>
  get(bgColor(props), 'backgroundColor') || get(buttonStyle(props), 'backgroundColor') || FALLBACK_BG_COLOR;

const Button = styled(tag.button)`
  display: inline-block;
  margin: 0;
  padding: ${themeGet('space.3')} ${themeGet('space.6')};
  font-size: ${themeGet('fontSizes.base')};
  font-weight: ${themeGet('fontWeights.bold')};
  letter-spacing: ${themeGet('letterSpacings.wide')};
  line-height: ${themeGet('lineHeights.normal')};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  border: ${themeGet('borders.2')};
  border-color: transparent;
  border-radius: ${themeGet('radii.default')};
  outline: 0;
  transition: background-color ${themeGet('transitions.default')};
  cursor: pointer;
  appearance: none;

  ${buttonStyle}
  ${space}
  ${color}
  ${boxShadow}

  &:hover {
    background-color: ${props => darken(0.1, getBackground(props))};
  }

  &:hover:disabled {
    background-color: ${props => getBackground(props)};
  }

  &:focus {
    box-shadow: ${themeGet('shadows.focus')};
  }

  &:disabled {
    opacity: ${themeGet('opacity.disabled')};
    cursor: not-allowed;
  }

  ${props => props.rounded && css`
    border-radius: ${themeGet('radii.rounded')};
  `}

  ${props => props.block && css`
    width: 100%;
  `}
`;

Button.propTypes = {
  ...variant.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...boxShadow.propTypes,
  rounded: PropTypes.bool,
  block: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'default',
  blacklist: Object.keys(Button.propTypes),
};

export default Button;
