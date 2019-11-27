import styled from '@emotion/styled';
import { themeGet } from '@styled-system/theme-get';
import { buttonStyle } from '@styled-system/variant';
import { color } from '@styled-system/color';
import get from 'lodash/get';
import { Button } from '../';

const getBackground = props =>
  get(color(props), 'backgroundColor') ||
  get(buttonStyle(props), 'backgroundColor');

const OutlineButton = styled(Button)`
  background-color: transparent;
  border-color: ${getBackground};
  transition: none;

  &:not(:hover) {
    color: ${getBackground};
  }

  &:hover:not(:disabled) {
    background-color: ${getBackground};
    border-color: ${getBackground};
  }

  &:disabled {
    color: ${themeGet('colors.greys.dusty')};
    border-color: ${themeGet('colors.greys.dusty')};
  }
`;

export default OutlineButton;
