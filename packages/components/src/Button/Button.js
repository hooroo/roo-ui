import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { darken } from 'polished';
import tag from 'clean-tag';
import { themeGet, space, color, boxShadow, buttonStyle } from 'styled-system';

const getBackground = props =>
  color(props).backgroundColor || buttonStyle(props).backgroundColor;

const Button = styled(tag.button)`
  display: inline-block;
  margin: 0;
  padding: ${themeGet('space.3')} ${themeGet('space.5')};
  font-size: ${themeGet('fontSizes.sm')};
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
  transition: ${themeGet('transitions.default')};
  cursor: pointer;
  appearance: none;

  ${buttonStyle}
  ${space}
  ${color}
  ${boxShadow}

  &:hover:not(:disabled) {
    background-color: ${props => darken(0.1, getBackground(props))};
  }

  &:focus {
    box-shadow: ${themeGet('shadows.focus')};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${props => props.rounded && css`
    border-radius: ${themeGet('radii.rounded')};
  `}
`;

Button.propTypes = {
  ...buttonStyle.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...boxShadow.propTypes,
  primary: PropTypes.bool,
  rounded: PropTypes.bool,
};

Button.defaultProps = {
  buttonStyle: 'default',
  blacklist: Object.keys(Button.propTypes),
};

export default Button;
