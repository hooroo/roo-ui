import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

const color = props => (props.primary ? props.theme.colors.primary : props.theme.colors.black);
const hoverColor = props => darken(0.1, color(props));

const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-family: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.textSizes.sm};
  font-style: normal;
  font-weight: bold;
  letter-spacing: ${props => props.theme.tracking.wide};
  line-height: normal;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.white};
  background-color: ${color};
  border: 2px solid ${color};
  border-radius: ${props => props.theme.borderRadius.default};
  outline: 0;
  transition: 200ms ease-in;
  cursor: pointer;

  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:focus:not([disabled]),
  &:hover:not([disabled]) {
    background-color: ${hoverColor};
    border-color: ${hoverColor};

    ${props => props.outlined && css`
      color: ${hoverColor};
    `}
  }

  ${props => props.outlined && css`
    color: ${color};
    background-color: transparent;

    &:focus:not([disabled]),
    &:hover:not([disabled]) {
      background-color: transparent;
    }
  `}

  ${props => props.rounded && css`
    border-radius: ${props.theme.borderRadius.rounded};
  `}
`;

Button.defaultProps = {
  primary: false,
  outlined: false,
  rounded: false,
};

Button.propTypes = {
  primary: PropTypes.bool,
  outlined: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Button;
