import styled from '@emotion/styled';
import { css } from '@emotion/core';
import get from 'lodash/get';
import { darken } from 'polished';
import PropTypes from 'prop-types';
import { themeGet } from '@styled-system/theme-get';
import { space, color, layout, shadow, variant, compose } from 'styled-system';

const variations = variant({
  scale: 'buttons',
  variants: { default: {} }, // v5 API needs at least 1 variant or it reverts to v4 behaviour
});

const styledProps = compose(
  variations,
  space,
  color,
  layout,
  shadow,
);

const getBackground = props => get(color(props), 'backgroundColor', '#000');

const Button = styled.button`
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

  ${props =>
    props.rounded &&
    css`
      border-radius: ${themeGet('radii.rounded')(props)};
    `}

  ${props =>
    props.block &&
    css`
      width: 100%;
    `};

  &:hover:not(:disabled) {
    background-color: ${props => darken(0.1, getBackground(props))};
  }

  &:focus {
    box-shadow: ${themeGet('shadows.focus')};
  }

  &:disabled {
    opacity: ${themeGet('opacity.disabled')};
    cursor: not-allowed;
  }

  ${styledProps}
`;

Button.propTypes = {
  ...variant.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  rounded: PropTypes.bool,
  block: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'default',
  display: 'inline-block',
  color: 'white',
  backgroundColor: 'brand.primary',
};

export default Button;
