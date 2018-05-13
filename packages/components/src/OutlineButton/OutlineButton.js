import { color, buttonStyle } from 'styled-system';
import { Button } from '..';

const getBackground = props =>
  color(props).backgroundColor || buttonStyle(props).backgroundColor;

const OutlineButton = Button.extend`
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

OutlineButton.displayName = 'OutlineButton';

export default OutlineButton;
