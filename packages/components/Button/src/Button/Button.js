import system from 'system-components';
import { css } from 'styled-components';
import { themeGet, complexStyle } from 'styled-system';

const outlined = (props) => {
  const styles = complexStyle({
    prop: 'buttonStyle',
    key: 'buttons',
  })(props);

  return props.outlined && css`
    background-color: transparent;
    color: ${styles.backgroundColor};
    border-color: ${styles.backgroundColor};

    &:hover {
      background-color: transparent;
      color: ${styles['&:hover'].backgroundColor};
      border-color: ${styles['&:hover'].backgroundColor};
    }
  `;
};

const rounded = props => props.rounded && css`
  border-radius: ${themeGet('radii.rounded')};
`;

const Button = system({
  is: 'button',
  buttonStyle: 'default',
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
  ${outlined}
  ${rounded}

  font-family: ${themeGet('fontFamily')};
  transition: ${themeGet('transitions.default')};
  display: inline-block;
  cursor: pointer;
  outline: 0;
  appearance: none;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
