import system from 'system-components';
import { css } from 'styled-components';
import { themeGet, complexStyle } from 'styled-system';
import { darken } from 'polished';

const background = (props) => {
  const styles = complexStyle({
    prop: 'buttonStyle',
    key: 'buttons',
  })(props);

  return props.bg
    ? themeGet(`colors.${props.bg}`, props.bg)(props)
    : styles.backgroundColor;
};

const hoverBackground = props => darken(0.1, background(props));

const Button = system({
  is: 'button',
  buttonStyle: 'default',
  boxShadow: null,
  color: null,
  bg: null,
  border: 2,
  borderColor: 'transparent',
  borderRadius: 'default',
  fontSize: 'sm',
  fontWeight: 'bold',
  letterSpacing: 'wide',
  lineHeight: 'normal',
  px: 5,
  py: 3,
  m: 0,
});

export default Button.extend`
  font-family: ${themeGet('fontFamily')};
  transition: ${themeGet('transitions.default')};
  display: inline-block;
  cursor: pointer;
  outline: 0;
  appearance: none;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  &:focus {
    box-shadow: ${themeGet('shadows.focus')};
  }

  &:hover {
    background-color: ${hoverBackground};
  }

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${props => props.rounded && css`
    border-radius: ${themeGet('radii.rounded')};
  `}

  ${props => props.outlined && css`
    background-color: transparent;
    color: ${background};
    border-color: ${background};

    &:hover {
      background-color: transparent;
      color: ${hoverBackground};
      border-color: ${hoverBackground};
    }
  `}
`;
