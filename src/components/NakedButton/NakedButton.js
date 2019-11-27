import styled from '@emotion/styled';
import { style } from 'styled-system';
import { textStyle } from '@styled-system/variant';
import { themeGet } from '@styled-system/theme-get';
import { space } from '@styled-system/space';
import { layout } from '@styled-system/layout';
import { typography } from '@styled-system/typography';
import { color } from '@styled-system/color';
import propTypes from '@styled-system/prop-types';

const textDecoration = style({
  prop: 'textDecoration',
  cssProperty: 'textDecoration',
});

const hoverColor = style({
  prop: 'hoverColor',
  cssProperty: 'color',
  key: 'colors',
});

const NakedButton = styled('button')`
  border: none;
  width: auto;
  overflow: visible;
  font: inherit;
  line-height: normal;
  appearance: none;
  cursor: pointer;

  &:focus {
    outline: ${themeGet('borders.2')} ${themeGet('colors.brand.secondary')};
  }

  &:hover {
    ${hoverColor};
  }

  &:disabled {
    opacity: ${themeGet('opacity.disabled')};
    cursor: not-allowed;
  }

  &:hover:disabled {
    ${color};
  }

  ${space} ${layout} ${typography} ${color} ${textStyle} ${textDecoration};
`;

NakedButton.propTypes = {
  ...propTypes.verticalAlign,
  ...propTypes.space,
  ...propTypes.color,
};

NakedButton.defaultProps = {
  as: 'button',
  type: 'button',
  bg: 'transparent',
  color: 'inherit',
  p: 0,
  m: 0,
};

export default NakedButton;
