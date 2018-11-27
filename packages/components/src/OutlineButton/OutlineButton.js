import { color, buttonStyle, themeGet } from 'styled-system';
import { Button } from '..';

const getBackground = props =>
  color(props).backgroundColor || buttonStyle(props).backgroundColor;

const OutlineButton = Button.extend`
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
