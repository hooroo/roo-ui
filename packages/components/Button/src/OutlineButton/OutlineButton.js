import { themeGet, buttonStyle } from 'styled-system';
import Button from '..';

const getBackground = props => (props.bg
  ? themeGet(`colors.${props.bg}`, props.bg)(props)
  : buttonStyle(props).backgroundColor);

export default Button.extend`
  background-color: transparent;
  border-color: ${getBackground};
  transition: none;

  &:not(:hover), &:disabled {
    color: ${getBackground};
  }

  &:hover:not(:disabled) {
    background-color: ${getBackground};
    border-color: ${getBackground};
  }
`;
