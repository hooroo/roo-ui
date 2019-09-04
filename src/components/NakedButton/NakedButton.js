import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import {
  style,
  space,
  verticalAlign,
  textAlign,
  color,
  textStyle,
} from 'styled-system';

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

  ${space} ${verticalAlign} ${textAlign} ${color} ${textStyle} ${textDecoration};
`;

NakedButton.propTypes = {
  ...verticalAlign.propTypes,
  ...space.propTypes,
  ...color.propTypes,
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
